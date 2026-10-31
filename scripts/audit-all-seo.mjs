import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');

const results = {
  totalPages: 0,
  errors: [],
  warnings: [],
  stats: {
    titles: new Map(),
    descriptions: new Map(),
    h1Counts: {},
    schemaTypes: new Set(),
    imagesWithoutAlt: 0,
    brokenLinks: 0,
    canonicalMismatches: 0,
    multipleH1s: 0,
    missingH1s: 0,
    missingMetaDesc: 0,
    longMetaDesc: 0,
    shortMetaDesc: 0,
    longTitles: 0,
    shortTitles: 0
  }
};

function getAllHtmlFiles(dir) {
  let files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'assets') {
        files = files.concat(getAllHtmlFiles(fullPath));
      }
    } else if (entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

const htmlFiles = getAllHtmlFiles(distDir);
results.totalPages = htmlFiles.length;

// Collect all existing routes for link checking
const existingRoutes = new Set();
for (const file of htmlFiles) {
  let rel = path.relative(distDir, file).replace(/index\.html$/, '').replace(/\/$/, '');
  let route = '/' + rel;
  if (route === '/.') route = '/';
  existingRoutes.add(route);
  existingRoutes.add(encodeURI(route));
  existingRoutes.add(route.toLowerCase());
}

console.log(`Analyzing ${htmlFiles.length} HTML files in dist/...`);

for (const file of htmlFiles) {
  const relPath = path.relative(distDir, file);
  const is404 = relPath === '404.html';
  const content = fs.readFileSync(file, 'utf-8');

  // Route URL
  let pageRoute = '/' + relPath.replace(/index\.html$/, '').replace(/\/$/, '');
  if (pageRoute === '/.') pageRoute = '/';

  // 1. Title
  const titleMatch = content.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : null;
  if (!title && !is404) {
    results.errors.push(`[${relPath}] Missing <title> tag`);
  } else if (title) {
    if (title.length > 70) {
      results.stats.longTitles++;
      results.warnings.push(`[${relPath}] Title too long (${title.length} chars > 70): "${title}"`);
    } else if (title.length < 25 && !is404) {
      results.stats.shortTitles++;
      results.warnings.push(`[${relPath}] Title too short (${title.length} chars < 25): "${title}"`);
    }

    if (!results.stats.titles.has(title)) {
      results.stats.titles.set(title, []);
    }
    results.stats.titles.get(title).push(relPath);
  }

  // 2. Meta Description
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
  const desc = descMatch ? descMatch[1].trim() : null;
  if (!desc && !is404) {
    results.stats.missingMetaDesc++;
    results.errors.push(`[${relPath}] Missing meta description`);
  } else if (desc) {
    if (desc.length > 165) {
      results.stats.longMetaDesc++;
      // Just record count, not full warning for all 900
    } else if (desc.length < 50 && !is404) {
      results.stats.shortMetaDesc++;
      results.warnings.push(`[${relPath}] Meta description too short (${desc.length} chars < 50)`);
    }
    if (!results.stats.descriptions.has(desc)) {
      results.stats.descriptions.set(desc, []);
    }
    results.stats.descriptions.get(desc).push(relPath);
  }

  // 3. Canonical tag
  const canonicalMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i);
  const canonical = canonicalMatch ? canonicalMatch[1].trim() : null;
  if (!canonical && !is404) {
    results.errors.push(`[${relPath}] Missing canonical tag`);
  } else if (canonical && !is404) {
    const expectedCanonical = ('https://findmybschool.com' + (pageRoute === '/' ? '/' : pageRoute)).replace(/ /g, '%20');
    // Check if canonical matches
    if (canonical !== expectedCanonical && decodeURIComponent(canonical) !== decodeURIComponent(expectedCanonical)) {
      results.stats.canonicalMismatches++;
      results.errors.push(`[${relPath}] Canonical mismatch: found "${canonical}", expected "${expectedCanonical}"`);
    }
  }

  // 4. Robots Meta tag
  const robotsMatch = content.match(/<meta\s+name=["']robots["']\s+content=["']([^"']*)["']/i);
  if (!robotsMatch) {
    results.warnings.push(`[${relPath}] Missing meta robots tag`);
  } else if (is404 && !robotsMatch[1].includes('noindex')) {
    results.errors.push(`[${relPath}] 404 page should have noindex in robots tag`);
  } else if (!is404 && robotsMatch[1].includes('noindex')) {
    results.errors.push(`[${relPath}] Production page has noindex in robots tag`);
  }

  // 5. Headings: H1
  // Remove scripts and style tags first to avoid false positives
  const cleanBody = content.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');
  const h1Matches = cleanBody.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  if (h1Matches.length === 0 && !is404) {
    results.stats.missingH1s++;
    results.errors.push(`[${relPath}] Missing <h1> tag`);
  } else if (h1Matches.length > 1 && !is404) {
    results.stats.multipleH1s++;
    results.warnings.push(`[${relPath}] Multiple <h1> tags (${h1Matches.length} found)`);
  }

  // 6. JSON-LD Schema
  const schemaMatches = content.match(/<script\s+id=["']schemaStructuredData["']\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi) ||
                        content.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi) || [];
  if (schemaMatches.length === 0 && !is404) {
    results.warnings.push(`[${relPath}] No Schema.org JSON-LD structured data`);
  } else {
    for (const sm of schemaMatches) {
      const jsonContent = sm.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '').trim();
      try {
        const parsed = JSON.parse(jsonContent);
        if (parsed['@graph']) {
          for (const item of parsed['@graph']) {
            if (item['@type']) results.stats.schemaTypes.add(item['@type']);
          }
        } else if (parsed['@type']) {
          results.stats.schemaTypes.add(parsed['@type']);
        }
      } catch (err) {
        results.errors.push(`[${relPath}] Malformed Schema JSON-LD: ${err.message}`);
      }
    }
  }

  // 7. Open Graph & Twitter Cards
  const ogTitle = content.match(/<meta\s+property=["']og:title["']/i);
  const ogDesc = content.match(/<meta\s+property=["']og:description["']/i);
  const ogImage = content.match(/<meta\s+property=["']og:image["']/i);
  const ogUrl = content.match(/<meta\s+property=["']og:url["']/i);
  if (!ogTitle || !ogDesc || !ogImage || !ogUrl) {
    results.warnings.push(`[${relPath}] Incomplete Open Graph meta tags`);
  }

  // 8. Image Alts
  const imgMatches = content.match(/<img\b[^>]*>/gi) || [];
  for (const img of imgMatches) {
    if (!img.includes('alt=') || /alt=["']\s*["']/.test(img)) {
      results.stats.imagesWithoutAlt++;
      // sample
      if (results.stats.imagesWithoutAlt <= 10) {
        results.warnings.push(`[${relPath}] Image missing or empty alt attribute: ${img.slice(0, 100)}`);
      }
    }
  }

  // 9. Links Check
  const hrefMatches = content.match(/href=["'](\/[^"']*)["']/gi) || [];
  for (const hm of hrefMatches) {
    const rawHref = hm.replace(/^href=["']/, '').replace(/["']$/, '');
    const cleanHref = rawHref.split('?')[0].split('#')[0].replace(/\/$/, '') || '/';
    // ignore assets, static files, api
    if (!cleanHref.startsWith('/assets') && !cleanHref.startsWith('/api') && !cleanHref.endsWith('.svg') && !cleanHref.endsWith('.png') && !cleanHref.endsWith('.xml') && !cleanHref.endsWith('.txt') && !cleanHref.endsWith('.webmanifest')) {
      const decoded = decodeURIComponent(cleanHref);
      if (!existingRoutes.has(cleanHref) && !existingRoutes.has(cleanHref.toLowerCase()) && !existingRoutes.has(decoded) && !existingRoutes.has(decoded.toLowerCase())) {
        results.stats.brokenLinks++;
        if (results.stats.brokenLinks <= 15) {
          results.errors.push(`[${relPath}] Internal link points to non-existent route: "${rawHref}"`);
        }
      }
    }
  }
}

// Check Duplicate Titles
let dupTitlesCount = 0;
for (const [title, files] of results.stats.titles.entries()) {
  if (files.length > 1) {
    dupTitlesCount++;
    if (dupTitlesCount <= 10) {
      results.warnings.push(`Duplicate Title across ${files.length} pages: "${title}" -> e.g. ${files.slice(0, 3).join(', ')}`);
    }
  }
}

// Check Duplicate Descriptions
let dupDescsCount = 0;
for (const [desc, files] of results.stats.descriptions.entries()) {
  if (files.length > 1) {
    dupDescsCount++;
    if (dupDescsCount <= 10) {
      results.warnings.push(`Duplicate Meta Description across ${files.length} pages: "${desc.slice(0, 80)}..." -> e.g. ${files.slice(0, 3).join(', ')}`);
    }
  }
}

console.log('================ AUDIT SUMMARY ================');
console.log(`Total HTML files audited: ${results.totalPages}`);
console.log(`Errors found: ${results.errors.length}`);
console.log(`Warnings found: ${results.warnings.length}`);
console.log(`Duplicate Titles groups: ${dupTitlesCount}`);
console.log(`Duplicate Descriptions groups: ${dupDescsCount}`);
console.log(`Multiple H1s: ${results.stats.multipleH1s}`);
console.log(`Missing H1s: ${results.stats.missingH1s}`);
console.log(`Images missing alt: ${results.stats.imagesWithoutAlt}`);
console.log(`Canonical mismatches: ${results.stats.canonicalMismatches}`);
console.log(`Broken internal links detected: ${results.stats.brokenLinks}`);
console.log(`Schema Types detected:`, Array.from(results.stats.schemaTypes));

if (results.errors.length > 0) {
  console.log('\n--- TOP ERRORS ---');
  results.errors.slice(0, 30).forEach(e => console.log('❌ ' + e));
}

if (results.warnings.length > 0) {
  console.log('\n--- SAMPLE WARNINGS ---');
  results.warnings.slice(0, 20).forEach(w => console.log('⚠️ ' + w));
}
