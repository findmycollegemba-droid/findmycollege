import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, '..');

console.log('====================================================');
console.log('🔍 DEEP AUDIT: FINDMYBSCHOOL CONTENT UNIQUENESS');
console.log('====================================================\n');

// 1. Audit COLLEGES_DATA
console.log('=== 1. COLLEGES DATA AUDIT (src/data/collegesData.js) ===');
try {
  const { COLLEGES_DATA } = await import('../src/data/collegesData.js');
  console.log(`Total colleges loaded: ${COLLEGES_DATA.length}`);

  // Unique IDs, Names, ShortNames
  const idSet = new Map();
  const nameSet = new Map();
  const dupIds = [];
  const dupNames = [];

  COLLEGES_DATA.forEach((c, idx) => {
    if (idSet.has(c.id)) {
      dupIds.push({ id: c.id, first: idSet.get(c.id), duplicate: idx });
    } else {
      idSet.set(c.id, idx);
    }

    const normName = (c.name || '').trim().toLowerCase();
    if (nameSet.has(normName)) {
      dupNames.push({ name: c.name, firstId: COLLEGES_DATA[nameSet.get(normName)].id, secondId: c.id });
    } else {
      nameSet.set(normName, idx);
    }
  });

  console.log(`- Unique IDs: ${idSet.size} / ${COLLEGES_DATA.length} (Duplicates: ${dupIds.length})`);
  console.log(`- Unique Names: ${nameSet.size} / ${COLLEGES_DATA.length} (Duplicates: ${dupNames.length})`);

  // Analyze field duplication across colleges
  const checkFields = [
    'highlights',
    'facilities',
    'topRecruiters',
    'admissionCriteria',
    'domainDistribution',
    'cutoffDetails',
    'courses'
  ];

  for (const field of checkFields) {
    const map = new Map();
    COLLEGES_DATA.forEach(c => {
      const val = c[field] !== undefined ? JSON.stringify(c[field]) : '__UNDEFINED__';
      if (!map.has(val)) map.set(val, []);
      map.get(val).push(c.id);
    });

    const duplicates = [];
    for (const [val, ids] of map.entries()) {
      if (val !== '__UNDEFINED__' && ids.length > 1) {
        duplicates.push({ count: ids.length, val: String(val).slice(0, 120), sample: ids.slice(0, 4) });
      }
    }
    duplicates.sort((a, b) => b.count - a.count);
    const nonUniqueCollegesCount = duplicates.reduce((acc, d) => acc + d.count, 0);

    console.log(`\n• Field: [${field}]`);
    console.log(`  - Unique variations: ${map.size}`);
    console.log(`  - Duplicated groups: ${duplicates.length} (affects ${nonUniqueCollegesCount} colleges)`);
    if (duplicates.length > 0) {
      console.log(`  - Top duplicated clusters:`);
      duplicates.slice(0, 5).forEach(d => {
        console.log(`    [x${d.count} colleges] "${d.val}..."`);
        console.log(`      e.g. ${d.sample.join(', ')}`);
      });
    }
  }

  // Boilerplate pattern in highlights: "Recognized {type} university located in {city}, {state}..."
  const boilerplateMatches = COLLEGES_DATA.filter(c => 
    c.highlights && c.highlights.includes('offering contemporary MBA curriculum, seasoned industry-academic faculty')
  );
  console.log(`\n• Colleges using identical "Recognized ... offering contemporary MBA curriculum" boilerplate: ${boilerplateMatches.length} / ${COLLEGES_DATA.length} (${((boilerplateMatches.length / COLLEGES_DATA.length) * 100).toFixed(1)}%)`);

} catch (err) {
  console.error('Error auditing colleges:', err);
}

// 2. Audit BLOGS_DATA
console.log('\n=== 2. BLOGS DATA AUDIT (src/data/blogsData.js) ===');
try {
  const { BLOGS_DATA } = await import('../src/data/blogsData.js');
  console.log(`Total blogs loaded: ${BLOGS_DATA.length}`);

  const idMap = new Map();
  const titleMap = new Map();
  const dupBlogIds = [];
  const dupBlogTitles = [];

  BLOGS_DATA.forEach((b, idx) => {
    const key = b.id || b.slug;
    if (idMap.has(key)) {
      dupBlogIds.push({ id: key, first: idMap.get(key), second: idx });
    } else {
      idMap.set(key, idx);
    }

    const normTitle = (b.title || '').trim().toLowerCase();
    if (titleMap.has(normTitle)) {
      dupBlogTitles.push({ title: b.title, id1: BLOGS_DATA[titleMap.get(normTitle)].id, id2: key });
    } else {
      titleMap.set(normTitle, idx);
    }
  });

  console.log(`- Unique Blog IDs: ${idMap.size} / ${BLOGS_DATA.length} (Duplicates: ${dupBlogIds.length})`);
  console.log(`- Unique Blog Titles: ${titleMap.size} / ${BLOGS_DATA.length} (Duplicates: ${dupBlogTitles.length})`);

  // Content uniqueness / paragraph overlap
  const paraMap = new Map();
  BLOGS_DATA.forEach(b => {
    const blogId = b.id || b.slug;
    const allText = [b.summary, b.content, ...(Array.isArray(b.sections) ? b.sections.map(s => s.content) : [])]
      .filter(Boolean)
      .join('\n');
    
    const paras = allText.split(/<\/p>|<br\s*\/?>|\n\n+/)
      .map(p => p.replace(/<[^>]+>/g, '').trim().toLowerCase())
      .filter(p => p.length > 80);

    paras.forEach(p => {
      if (!paraMap.has(p)) paraMap.set(p, new Set());
      paraMap.get(p).add(blogId);
    });
  });

  const sharedParas = [];
  for (const [para, blogSet] of paraMap.entries()) {
    if (blogSet.size > 1) {
      sharedParas.push({ count: blogSet.size, para: para.slice(0, 100), blogs: Array.from(blogSet) });
    }
  }
  sharedParas.sort((a, b) => b.count - a.count);
  console.log(`- Paragraphs shared across multiple blogs (>80 chars): ${sharedParas.length}`);
  if (sharedParas.length > 0) {
    sharedParas.slice(0, 5).forEach(p => console.log(`  [x${p.count}] "${p.para}..." in: ${p.blogs.join(', ')}`));
  }

} catch (err) {
  console.error('Error auditing blogs:', err);
}

// 3. Audit SCHOLARSHIPS_DATA
console.log('\n=== 3. SCHOLARSHIPS DATA AUDIT (src/data/scholarshipsData.js) ===');
try {
  const { SCHOLARSHIPS_DATA } = await import('../src/data/scholarshipsData.js');
  console.log(`Total scholarships loaded: ${SCHOLARSHIPS_DATA.length}`);

  const sIdMap = new Map();
  const sTitleMap = new Map();
  const sDescMap = new Map();
  let dupS = 0;

  SCHOLARSHIPS_DATA.forEach((s, idx) => {
    if (sIdMap.has(s.id)) dupS++;
    sIdMap.set(s.id, idx);
    sTitleMap.set((s.title || '').trim().toLowerCase(), idx);
    sDescMap.set((s.description || '').trim().toLowerCase(), idx);
  });

  console.log(`- Unique IDs: ${sIdMap.size} / ${SCHOLARSHIPS_DATA.length}`);
  console.log(`- Unique Titles: ${sTitleMap.size} / ${SCHOLARSHIPS_DATA.length}`);
  console.log(`- Unique Descriptions: ${sDescMap.size} / ${SCHOLARSHIPS_DATA.length}`);

} catch (err) {
  console.error('Error auditing scholarships:', err);
}

// 4. Audit EXAMS_DATA
console.log('\n=== 4. EXAMS DATA AUDIT (src/data/examsData.js) ===');
try {
  const { EXAMS_DATA } = await import('../src/data/examsData.js');
  const count = Object.keys(EXAMS_DATA).length;
  console.log(`Total exams loaded: ${count}`);
  const examNames = new Set(Object.values(EXAMS_DATA).map(e => (e.name || e.title || '').trim().toLowerCase()));
  console.log(`- Unique Exam Names: ${examNames.size} / ${count}`);
} catch (err) {
  console.error('Error auditing exams:', err);
}

// 5. Audit AIU Official Data
console.log('\n=== 5. AIU OFFICIAL DATA AUDIT (src/data/aiuOfficialData.js) ===');
try {
  const { AIU_OFFICIAL_LIST } = await import('../src/data/aiuOfficialData.js');
  console.log(`Total AIU Campuses: ${AIU_OFFICIAL_LIST.length}`);
  const aiuIds = new Set();
  const aiuNames = new Set();
  let aiuDupIds = 0;
  let aiuDupNames = 0;

  AIU_OFFICIAL_LIST.forEach(a => {
    const id = a.collegeId || a.id || a.name;
    if (aiuIds.has(id)) aiuDupIds++;
    aiuIds.add(id);

    const name = (a.instituteName || a.name || '').trim().toLowerCase();
    if (aiuNames.has(name)) aiuDupNames++;
    aiuNames.add(name);
  });
  console.log(`- Unique IDs: ${aiuIds.size} / ${AIU_OFFICIAL_LIST.length} (Dups: ${aiuDupIds})`);
  console.log(`- Unique Names: ${aiuNames.size} / ${AIU_OFFICIAL_LIST.length} (Dups: ${aiuDupNames})`);
} catch (err) {
  console.error('Error auditing AIU:', err);
}

// 6. Audit Page Meta Titles & Descriptions across seoHelper.js and Routes
console.log('\n=== 6. ROUTE TITLES & META DESCRIPTIONS AUDIT (src/utils/seoHelper.js) ===');
try {
  const seoHelperPath = resolve(rootDir, 'src/utils/seoHelper.js');
  const content = readFileSync(seoHelperPath, 'utf8');

  // Regex extract page route configs
  // Look for updatePageSEO calls or PAGE_META dictionary if present
  const metaMatches = [...content.matchAll(/title:\s*['"`]([^'"`]+)['"`][\s\S]*?description:\s*['"`]([^'"`]+)['"`]/g)];
  console.log(`Found ${metaMatches.length} route meta configs.`);

  const titles = new Map();
  const descriptions = new Map();
  let dupTitles = 0;
  let dupDescriptions = 0;

  metaMatches.forEach((m, idx) => {
    const title = m[1].trim();
    const desc = m[2].trim();
    if (titles.has(title)) dupTitles++;
    titles.set(title, idx);
    if (descriptions.has(desc)) dupDescriptions++;
    descriptions.set(desc, idx);
  });

  console.log(`- Unique Route Titles: ${titles.size} (Dups: ${dupTitles})`);
  console.log(`- Unique Route Descriptions: ${descriptions.size} (Dups: ${dupDescriptions})`);

} catch (err) {
  console.error('Error auditing seoHelper:', err);
}

// 7. Check sitemap.xml for duplicate URLs
console.log('\n=== 7. SITEMAP.XML AUDIT ===');
try {
  const sitemapPath = resolve(rootDir, 'public/sitemap.xml');
  const sitemapContent = readFileSync(sitemapPath, 'utf8');
  const urls = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1].trim());
  const urlSet = new Set(urls);
  console.log(`- Total URLs in sitemap: ${urls.length}`);
  console.log(`- Unique URLs in sitemap: ${urlSet.size}`);
  console.log(`- Duplicates: ${urls.length - urlSet.size}`);
} catch (err) {
  console.error('Error auditing sitemap:', err);
}

// 8. Check Pages and UI Content
console.log('\n=== 8. CHECKING STATIC PAGES AND REPEATED TEMPLATES ===');
try {
  const pages = ['home.js', 'colleges.js', 'tools.js', 'scholarships.js', 'mockTest.js', 'contact.js', 'about.js', 'privacy.js', 'terms.js'];
  for (const p of pages) {
    const pPath = resolve(rootDir, 'src/pages', p);
    if (existsSync(pPath)) {
      const pContent = readFileSync(pPath, 'utf8');
      const h1Count = (pContent.match(/<h1[^>]*>/gi) || []).length;
      console.log(`- Page src/pages/${p}: Length: ${pContent.length} bytes, H1 tags: ${h1Count}`);
    }
  }
} catch (err) {
  console.error('Error checking pages:', err);
}
