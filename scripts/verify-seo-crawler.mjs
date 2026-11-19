import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { onRequest } from '../functions/[[path]].js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const sitemapIndexPath = path.resolve(rootDir, 'public/sitemap.xml');
const redirectsPath = path.resolve(rootDir, 'public/_redirects');

console.log('🔍 Starting Comprehensive Technical SEO Verification Crawler...');

// 1. Load Sitemap URLs (from Sitemap Index & Sub-Sitemaps)
if (!fs.existsSync(sitemapIndexPath)) {
  console.error('❌ Sitemap does not exist at', sitemapIndexPath);
  process.exit(1);
}

const sitemapLocs = [];
const sitemapIndexXml = fs.readFileSync(sitemapIndexPath, 'utf8');
const subSitemapMatches = [...sitemapIndexXml.matchAll(/<loc>(https:\/\/findmybschool\.com\/(sitemap-[^<]+\.xml))<\/loc>/g)];

if (subSitemapMatches.length > 0) {
  console.log(`📋 Discovered Sitemap Index pointing to ${subSitemapMatches.length} sub-sitemaps:`);
  for (const m of subSitemapMatches) {
    const subFilename = m[2];
    const subPath = path.resolve(rootDir, 'public', subFilename);
    if (fs.existsSync(subPath)) {
      const subXml = fs.readFileSync(subPath, 'utf8');
      const subLocs = [...subXml.matchAll(/<loc>(https:\/\/findmybschool\.com[^<]*)<\/loc>/g)].map(x => x[1]);
      console.log(`  - ${subFilename}: ${subLocs.length} URLs`);
      sitemapLocs.push(...subLocs);
    }
  }
} else {
  sitemapLocs.push(...[...sitemapIndexXml.matchAll(/<loc>(https:\/\/findmybschool\.com[^<]*)<\/loc>/g)].map(m => m[1]));
}

console.log(`\n📋 Loaded a total of ${sitemapLocs.length} indexable URLs from sitemaps`);

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
    } else if (file.endsWith('.html')) {
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
let titleTooLongCount = 0;
let missingDescCount = 0;
let descTooLongCount = 0;
let brokenInternalLinks = 0;
let redirectedInternalLinks = 0;
let missingH1Count = 0;
let multipleH1Count = 0;
const titleMap = new Map();
const descMap = new Map();
const internalLinkGraph = new Map();

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
    if (title.length > 60) {
      titleTooLongCount++;
      console.error(`❌ TITLE LENGTH ERROR (>60 chars): [${title.length}] "${title}" on ${cleanRoute}`);
    }
    if (!titleMap.has(title)) titleMap.set(title, []);
    titleMap.get(title).push(cleanRoute);
  }

  // Description check
  const descMatch = content.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
  if (!descMatch || !descMatch[1].trim()) {
    missingDescCount++;
  } else {
    const desc = descMatch[1].trim();
    if (desc.length > 155) {
      descTooLongCount++;
      console.error(`❌ DESC LENGTH ERROR (>155 chars): [${desc.length}] "${desc}" on ${cleanRoute}`);
    }
    if (!descMap.has(desc)) descMap.set(desc, []);
    descMap.get(desc).push(cleanRoute);
  }

  // Heading check (H1)
  const h1Matches = [...content.matchAll(/<h1[\s>]/gi)];
  if (h1Matches.length === 0) {
    missingH1Count++;
    console.error(`❌ H1 ERROR: Missing <h1> on ${cleanRoute}`);
  } else if (h1Matches.length > 1) {
    multipleH1Count++;
    console.error(`❌ H1 ERROR: Multiple <h1> tags (${h1Matches.length}) on ${cleanRoute}`);
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

    if (redirectRules.has(normTarget)) {
      redirectedInternalLinks++;
    }
  }
  internalLinkGraph.set(cleanRoute, pageLinks);
}

console.log('\n--- AUDIT SUMMARY ---');
console.log(`Total HTML pages verified: ${allDiscoveredFiles.length}`);
console.log(`Canonical tag issues: mismatches=${canonicalMismatchCount}, missing=${missingCanonicalCount}, multiple=${multipleCanonicalsCount}`);
console.log(`Title tag issues: missing=${missingTitleCount}, >60 chars=${titleTooLongCount}`);
console.log(`Description tag issues: missing=${missingDescCount}, >155 chars=${descTooLongCount}`);
console.log(`Heading H1 issues: missing=${missingH1Count}, multiple=${multipleH1Count}`);
console.log(`Internal links to redirected URLs: ${redirectedInternalLinks}`);

const duplicateTitles = [...titleMap.entries()].filter(([_, routes]) => routes.length > 1);
console.log(`Duplicate titles: ${duplicateTitles.length}`);
const duplicateDescs = [...descMap.entries()].filter(([_, routes]) => routes.length > 1);
console.log(`Duplicate descriptions: ${duplicateDescs.length}`);

// 4. BFS Crawl
console.log('\n🌐 Running Breadth-First-Search (BFS) Crawl starting from Homepage ("/")');
const queue = [{ route: '/', depth: 0 }];
const visited = new Set(['/']);
const depthDistribution = new Map();

while (queue.length > 0) {
  const { route, depth } = queue.shift();
  depthDistribution.set(depth, (depthDistribution.get(depth) || 0) + 1);

  const targets = internalLinkGraph.get(route) || new Set();
  for (const target of targets) {
    if (!visited.has(target)) {
      const targetClean = target.replace(/^\//, '');
      const flatTarget = target === '/' ? path.resolve(distDir, 'index.html') : path.resolve(distDir, `${targetClean}.html`);
      const dirTarget = target === '/' ? path.resolve(distDir, 'index.html') : path.resolve(distDir, targetClean, 'index.html');
      if (fs.existsSync(flatTarget) || fs.existsSync(dirTarget)) {
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
console.log(`Total URLs in sitemaps: ${sitemapLocs.length}`);
console.log('Depth distribution:');
for (const [depth, count] of [...depthDistribution.entries()].sort((a, b) => a[0] - b[0])) {
  console.log(`  Click Depth ${depth}: ${count} pages`);
}

// 5. TEST 10 SAMPLE URLS FROM EACH OF THE 5 GSC PROBLEM PATTERNS
console.log('\n🧪 TESTING 10 SAMPLE URLS FROM EACH OF THE 5 GSC PROBLEM PATTERNS:');

async function testEdgeRequest(rawUrl, headers = {}) {
  const reqHeaders = new Headers(headers);
  const req = new Request(rawUrl, { headers: reqHeaders });
  const mockContext = {
    request: req,
    env: {
      ASSETS: {
        fetch: async (assetReq) => {
          const u = new URL(assetReq.url);
          const p = u.pathname.replace(/^\//, '');
          const filePath = path.resolve(distDir, p);
          if (fs.existsSync(filePath)) {
            return new Response(fs.readFileSync(filePath), { status: 200, headers: { 'Content-Type': 'text/html' } });
          }
          return new Response('Not Found', { status: 404 });
        }
      }
    },
    next: async () => {
      return new Response('Pass-through static', { status: 200 });
    }
  };

  const res = await onRequest(mockContext);
  return {
    status: res.status,
    location: res.headers.get('location'),
    robots: res.headers.get('x-robots-tag')
  };
}

// Pattern 1: Legacy Query-string URLs
console.log('\n--- PATTERN 1: Legacy Query-String URLs (Target: 301 Redirect to Clean Slug) ---');
const pattern1Samples = [
  'https://findmybschool.com/?page=colleges&id=iim-ahmedabad',
  'https://findmybschool.com/?page=colleges&id=fms-delhi',
  'https://findmybschool.com/?page=exams&exam=cat',
  'https://findmybschool.com/?page=exams&exam=xat',
  'https://findmybschool.com/?page=blog&id=best-mba-colleges-delhi-ncr-2027',
  'https://findmybschool.com/?page=programs&sub=mba',
  'https://findmybschool.com/?page=scholarships&id=aditya-birla-scholarship',
  'https://findmybschool.com/?page=mock-test&id=cat-full-mock-1',
  'https://findmybschool.com/?page=tools&sub=xat',
  'https://findmybschool.com/?page=colleges&city=mumbai'
];
for (const sample of pattern1Samples) {
  const res = await testEdgeRequest(sample);
  console.log(`  ${sample} -> HTTP ${res.status} [Location: ${res.location}]`);
}

// Pattern 2: Trailing-slash URLs
console.log('\n--- PATTERN 2: Trailing-Slash URLs (Target: 301 Redirect to Non-Slash) ---');
const pattern2Samples = [
  'https://findmybschool.com/colleges/iim-ahmedabad/',
  'https://findmybschool.com/colleges/xlri-jamshedpur/',
  'https://findmybschool.com/exams/cat/',
  'https://findmybschool.com/exams/xat/',
  'https://findmybschool.com/blog/best-mba-colleges-delhi-ncr-2027/',
  'https://findmybschool.com/programs/mba/',
  'https://findmybschool.com/scholarships/reliance-foundation-postgraduate-scholarship/',
  'https://findmybschool.com/mock-test/cat-full-mock-1/',
  'https://findmybschool.com/colleges/city/delhi-ncr/',
  'https://findmybschool.com/tools/cat-college-predictor/'
];
for (const sample of pattern2Samples) {
  const res = await testEdgeRequest(sample);
  console.log(`  ${sample} -> HTTP ${res.status} [Location: ${res.location}]`);
}

// Pattern 3: HTTP URLs
console.log('\n--- PATTERN 3: HTTP URLs (Target: 301 Redirect to HTTPS) ---');
const pattern3Samples = [
  'http://findmybschool.com/colleges/tiss-mumbai',
  'http://findmybschool.com/colleges/iim-bangalore',
  'http://findmybschool.com/colleges/iim-calcutta',
  'http://findmybschool.com/exams/cat',
  'http://findmybschool.com/exams/snap',
  'http://findmybschool.com/blog/bml-munjal-university-review-2027',
  'http://findmybschool.com/programs/compare',
  'http://findmybschool.com/colleges/city/bangalore',
  'http://findmybschool.com/tools/cat-college-predictor',
  'http://findmybschool.com/contact'
];
for (const sample of pattern3Samples) {
  const res = await testEdgeRequest(sample, { 'x-forwarded-proto': 'http' });
  console.log(`  ${sample} -> HTTP ${res.status} [Location: ${res.location}]`);
}

// Pattern 4: Duplicate Colleges under different slugs
console.log('\n--- PATTERN 4: Duplicate Colleges & Aliases (Target: 301 Redirect to Canonical) ---');
const pattern4Samples = [
  'https://findmybschool.com/colleges/imi-delhi',
  'https://findmybschool.com/colleges/sjmsom-iit-bombay',
  'https://findmybschool.com/colleges/k-j-somaiya-mumbai',
  'https://findmybschool.com/colleges/city/delhi',
  'https://findmybschool.com/colleges/indus-business-academy-bangalore',
  'https://findmybschool.com/colleges/upes-dehradun',
  'https://findmybschool.com/colleges/noida-institute-of-engineering-technology',
  'https://findmybschool.com/colleges/lovely-professional-phagwara',
  'https://findmybschool.com/colleges/maharishi-markandeshwar-ambala',
  'https://findmybschool.com/free-mock-test'
];
for (const sample of pattern4Samples) {
  const res = await testEdgeRequest(sample);
  console.log(`  ${sample} -> HTTP ${res.status} [Location: ${res.location}]`);
}

// Pattern 5: Main Clean Pages
console.log('\n--- PATTERN 5: Main Clean Pages (Target: HTTP 200 OK directly, Self-Canonical) ---');
const pattern5Samples = [
  'https://findmybschool.com/colleges/iim-ahmedabad',
  'https://findmybschool.com/colleges',
  'https://findmybschool.com/colleges/city/delhi-ncr',
  'https://findmybschool.com/exams/cat',
  'https://findmybschool.com/blog/best-mba-colleges-delhi-ncr-2027',
  'https://findmybschool.com/programs/mba',
  'https://findmybschool.com/scholarships/aditya-birla-scholarship',
  'https://findmybschool.com/aiu-approved-campuses/delhi-ncr',
  'https://findmybschool.com/tools/cat-college-predictor',
  'https://findmybschool.com/contact'
];
for (const sample of pattern5Samples) {
  const res = await testEdgeRequest(sample);
  console.log(`  ${sample} -> HTTP ${res.status}`);
}

console.log('\n🎉 VERIFICATION COMPLETE!');
