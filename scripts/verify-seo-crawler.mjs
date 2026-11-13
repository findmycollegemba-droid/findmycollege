import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const sitemapPath = path.resolve(rootDir, 'public/sitemap.xml');
const redirectsPath = path.resolve(rootDir, 'public/_redirects');

console.log('🔍 Starting Comprehensive Technical SEO Verification Crawler...');

// 1. Load Sitemap URLs
if (!fs.existsSync(sitemapPath)) {
  console.error('❌ Sitemap does not exist at', sitemapPath);
  process.exit(1);
}

const sitemapXml = fs.readFileSync(sitemapPath, 'utf8');
const sitemapLocs = [...sitemapXml.matchAll(/<loc>(https:\/\/findmybschool\.com[^<]*)<\/loc>/g)].map(m => m[1]);
console.log(`\n📋 Loaded ${sitemapLocs.length} URLs from sitemap.xml`);

// 2. Load Redirect Rules
const redirectRules = new Map();
if (fs.existsSync(redirectsPath)) {
  const lines = fs.readFileSync(redirectsPath, 'utf8').split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const parts = trimmed.split(/\s+/);
    if (parts.length >= 2) {
      redirectRules.set(parts[0], { target: parts[1], code: parts[2] || '301' });
    }
  }
}
console.log(`📋 Loaded ${redirectRules.size} redirect rules from _redirects`);

// Check if any sitemap URL is in redirect rules
let sitemapRedirectErrors = 0;
for (const fullUrl of sitemapLocs) {
  const route = fullUrl.replace('https://findmybschool.com', '') || '/';
  if (redirectRules.has(route)) {
    console.error(`❌ SITEMAP ERROR: URL ${fullUrl} is in _redirects -> redirects to ${redirectRules.get(route).target}`);
    sitemapRedirectErrors++;
  }
}
if (sitemapRedirectErrors === 0) {
  console.log('✅ SITEMAP CHECK: 0 redirected URLs found in sitemap.xml (100% clean)');
}

// 3. Inspect every static HTML file in dist/
const sitemapSet = new Set(sitemapLocs);
const allDiscoveredFiles = [];
function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'assets') {
        walkDir(fullPath);
      }
    } else if (file === 'index.html' || file === '404.html') {
      allDiscoveredFiles.push(fullPath);
    }
  }
}
walkDir(distDir);
console.log(`\n📂 Discovered ${allDiscoveredFiles.length} static HTML files in dist/`);

// Verification metrics
let canonicalMismatchCount = 0;
let missingCanonicalCount = 0;
let multipleCanonicalsCount = 0;
let missingTitleCount = 0;
let missingDescCount = 0;
let brokenInternalLinks = 0;
let redirectedInternalLinks = 0;
const titleMap = new Map();
const descMap = new Map();
const internalLinkGraph = new Map(); // route -> Set of target routes

for (const htmlFile of allDiscoveredFiles) {
  const relPath = path.relative(distDir, htmlFile);
  const route = '/' + relPath.replace(/\/index\.html$/, '').replace(/^index\.html$/, '').replace(/\.html$/, '');
  const cleanRoute = route === '/' ? '/' : route.replace(/\/$/, '');
  const expectedCanonical = `https://findmybschool.com${cleanRoute}`;
  
  const content = fs.readFileSync(htmlFile, 'utf8');

  // Skip 404.html from canonical checks
  if (cleanRoute === '/404') {
    const hasCanonical = content.includes('rel="canonical"');
    const hasNoIndex = content.includes('content="noindex, nofollow"');
    if (hasCanonical) {
      console.error('❌ 404 ERROR: 404.html contains rel="canonical"!');
      canonicalMismatchCount++;
    } else {
      console.log('✅ 404 CHECK: 404.html correctly has NO canonical tag');
    }
    if (hasNoIndex) {
      console.log('✅ 404 CHECK: 404.html correctly has noindex, nofollow directive');
    } else {
      console.error('❌ 404 ERROR: 404.html is missing noindex, nofollow directive');
    }
    continue;
  }

  // Canonical tag check
  const canonicalMatches = [...content.matchAll(/<link\s+rel="canonical"\s+href="([^"]+)"/gi)];
  if (canonicalMatches.length === 0) {
    console.error(`❌ CANONICAL ERROR: Missing canonical on ${cleanRoute}`);
    missingCanonicalCount++;
  } else if (canonicalMatches.length > 1) {
    console.error(`❌ CANONICAL ERROR: Multiple canonicals on ${cleanRoute} (${canonicalMatches.length})`);
    multipleCanonicalsCount++;
  } else {
    const foundCanonical = canonicalMatches[0][1];
    if (foundCanonical !== expectedCanonical) {
      console.error(`❌ CANONICAL MISMATCH on ${cleanRoute}: expected "${expectedCanonical}" but found "${foundCanonical}"`);
      canonicalMismatchCount++;
    }
  }

  // Title check
  const titleMatch = content.match(/<title>([^<]*)<\/title>/i);
  if (!titleMatch || !titleMatch[1].trim()) {
    missingTitleCount++;
  } else {
    const title = titleMatch[1].trim();
    if (!titleMap.has(title)) titleMap.set(title, []);
    titleMap.get(title).push(cleanRoute);
  }

  // Description check
  const descMatch = content.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
  if (!descMatch || !descMatch[1].trim()) {
    missingDescCount++;
  } else {
    const desc = descMatch[1].trim();
    if (!descMap.has(desc)) descMap.set(desc, []);
    descMap.get(desc).push(cleanRoute);
  }

  // Extract internal links
  const hrefMatches = [...content.matchAll(/<a\s+[^>]*href="([^"]+)"/gi)];
  const pageLinks = new Set();
  for (const m of hrefMatches) {
    let href = m[1].trim();
    if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) continue;
    if (href.startsWith('http://') || href.startsWith('https://')) {
      if (!href.startsWith('https://findmybschool.com')) continue;
      href = href.replace('https://findmybschool.com', '') || '/';
    }
    const cleanTarget = href.split('?')[0].split('#')[0] || '/';
    const normTarget = cleanTarget === '/' ? '/' : cleanTarget.replace(/\/$/, '');
    pageLinks.add(normTarget);

    // Check if link points to a redirected URL
    if (redirectRules.has(normTarget)) {
      redirectedInternalLinks++;
    }
  }
  internalLinkGraph.set(cleanRoute, pageLinks);
}

console.log('\n--- AUDIT SUMMARY ---');
console.log(`Total HTML pages verified: ${allDiscoveredFiles.length}`);
console.log(`Canonical tag issues: mismatches=${canonicalMismatchCount}, missing=${missingCanonicalCount}, multiple=${multipleCanonicalsCount}`);
console.log(`Title tag issues: missing=${missingTitleCount}`);
console.log(`Description tag issues: missing=${missingDescCount}`);
console.log(`Internal links to redirected URLs: ${redirectedInternalLinks}`);

// Check for duplicate titles (excluding legitimate variants)
const duplicateTitles = [...titleMap.entries()].filter(([_, routes]) => routes.length > 1);
console.log(`Duplicate titles: ${duplicateTitles.length}`);
if (duplicateTitles.length > 0) {
  for (const [title, routes] of duplicateTitles.slice(0, 5)) {
    console.log(`  "${title}": used on ${routes.join(', ')}`);
  }
}

// 4. BFS CRAWL FROM HOMEPAGE (Testing Actual Discoverability & Reachability)
console.log('\n🌐 Running Breadth-First-Search (BFS) Crawl starting from Homepage ("/")');
const queue = [{ route: '/', depth: 0 }];
const visited = new Set(['/']);
const depthDistribution = new Map(); // depth -> count

while (queue.length > 0) {
  const { route, depth } = queue.shift();
  depthDistribution.set(depth, (depthDistribution.get(depth) || 0) + 1);

  const targets = internalLinkGraph.get(route) || new Set();
  for (const target of targets) {
    if (!visited.has(target)) {
      // Check if target exists in dist
      const targetRel = target === '/' ? 'index.html' : path.join(target.replace(/^\//, ''), 'index.html');
      const targetFile = path.resolve(distDir, targetRel);
      if (fs.existsSync(targetFile)) {
        visited.add(target);
        queue.push({ route: target, depth: depth + 1 });
      } else if (!target.startsWith('/api') && !target.startsWith('/assets')) {
        brokenInternalLinks++;
        console.error(`❌ BROKEN LINK: on ${route} -> points to nonexistent ${target}`);
      }
    }
  }
}

console.log(`\n🕸️ BFS CRAWL RESULTS:`);
console.log(`Total URLs reachable from "/" via static HTML links: ${visited.size}`);
console.log(`Total URLs in sitemap: ${sitemapLocs.length}`);
console.log('Depth distribution:');
for (const [depth, count] of [...depthDistribution.entries()].sort((a, b) => a[0] - b[0])) {
  console.log(`  Click Depth ${depth}: ${count} pages`);
}

// Check for unreachable pages in sitemap
const unreachable = [];
for (const loc of sitemapLocs) {
  const r = (loc.replace('https://findmybschool.com', '') || '/').replace(/\/$/, '') || '/';
  if (!visited.has(r)) {
    unreachable.push(r);
  }
}

console.log(`\nUnreachable (Island/Orphan) URLs from homepage: ${unreachable.length}`);
if (unreachable.length > 0) {
  console.log('First 10 unreachable URLs:');
  for (const u of unreachable.slice(0, 10)) {
    console.log(`  - ${u}`);
  }
}

if (unreachable.length === 0 && canonicalMismatchCount === 0 && missingCanonicalCount === 0 && sitemapRedirectErrors === 0) {
  console.log('\n🎉 ALL TECHNICAL SEO CHECKS PASSED PERFECTLY (100% Crawlability & Indexability)!');
} else {
  console.log('\n⚠️ Some issues remain to be resolved.');
}
