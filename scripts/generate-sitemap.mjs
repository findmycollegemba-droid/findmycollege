import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { COLLEGES_DATA } from '../src/data/collegesData.js';
import { EXAMS_DATA } from '../src/data/examsData.js';
import { BLOGS_DATA } from '../src/data/blogsData.js';
import { CITY_INFOGRAPHICS_DATA } from '../src/data/cityInfographicsData.js';
import { SCHOLARSHIPS_DATA } from '../src/data/scholarshipsData.js';
import { MOCK_TESTS } from '../src/data/mockTestsData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://findmybschool.com';
const TODAY = new Date().toISOString().split('T')[0];
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

function escapeXml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildUrlXml(urlList) {
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    ...urlList.map(u => {
      let block = `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod || TODAY}</lastmod>\n    <changefreq>${u.changefreq || 'weekly'}</changefreq>\n    <priority>${u.priority || '0.7'}</priority>`;
      if (u.image) {
        block += `\n    <image:image>\n      <image:loc>${escapeXml(u.image.loc)}</image:loc>\n      <image:title>${escapeXml(u.image.title)}</image:title>\n    </image:image>`;
      }
      block += `\n  </url>`;
      return block;
    }),
    '</urlset>',
    ''
  ].join('\n');
}

function writeSitemapFile(filename, content) {
  const publicPath = path.resolve(__dirname, '../public', filename);
  fs.writeFileSync(publicPath, content, 'utf-8');

  const distDir = path.resolve(__dirname, '../dist');
  if (fs.existsSync(distDir)) {
    const distPath = path.resolve(distDir, filename);
    fs.writeFileSync(distPath, content, 'utf-8');
  }
}

// =========================================================================
// 1. MAIN / CORE PAGES (sitemap-main.xml)
// =========================================================================
const mainUrls = [];
const seenMain = new Set();
function addMain(loc, changefreq, priority, lastmod = TODAY, image = null) {
  if (seenMain.has(loc)) return;
  seenMain.add(loc);
  mainUrls.push({ loc, changefreq, priority, lastmod, image });
}

addMain(`${BASE_URL}/`, 'daily', '1.0', TODAY, { loc: DEFAULT_IMAGE, title: 'FindMyBSchool — Top MBA & PGDM Colleges, Fees & Cutoffs' });
addMain(`${BASE_URL}/colleges`, 'daily', '0.9', TODAY, { loc: DEFAULT_IMAGE, title: 'Explore 600+ Verified MBA & PGDM Colleges in India' });
addMain(`${BASE_URL}/colleges/mba`, 'daily', '0.85', TODAY);
addMain(`${BASE_URL}/colleges/pgdm`, 'daily', '0.85', TODAY);
addMain(`${BASE_URL}/scholarships`, 'daily', '0.9', TODAY, { loc: DEFAULT_IMAGE, title: 'Live MBA Scholarships 2027-29 (Grants up to ₹25 Lakhs)' });
addMain(`${BASE_URL}/mock-test`, 'daily', '0.9', TODAY, { loc: DEFAULT_IMAGE, title: 'All-India Free MBA Mock Tests (TCS iON CBT Interface)' });
addMain(`${BASE_URL}/exams`, 'weekly', '0.9', TODAY, { loc: DEFAULT_IMAGE, title: 'National MBA Entrance Exams 2026-27' });
addMain(`${BASE_URL}/programs`, 'weekly', '0.85', TODAY, { loc: DEFAULT_IMAGE, title: 'MBA vs PGDM Comparison & ROI Analysis' });
addMain(`${BASE_URL}/programs/compare`, 'weekly', '0.85', TODAY);
addMain(`${BASE_URL}/programs/mba`, 'weekly', '0.85', TODAY);
addMain(`${BASE_URL}/programs/pgdm`, 'weekly', '0.85', TODAY);
addMain(`${BASE_URL}/programs/specializations`, 'weekly', '0.85', TODAY);
addMain(`${BASE_URL}/programs/roi`, 'weekly', '0.85', TODAY);
addMain(`${BASE_URL}/blog`, 'daily', '0.85', TODAY, { loc: DEFAULT_IMAGE, title: 'MBA Strategy Blog & Editorial Prep Guides' });
addMain(`${BASE_URL}/aiu-approved-campuses`, 'daily', '0.95', TODAY, { loc: DEFAULT_IMAGE, title: 'AIU Approved MBA & PGDM Campuses Directory' });
addMain(`${BASE_URL}/tools/cat-college-predictor`, 'daily', '1.0', TODAY, { loc: DEFAULT_IMAGE, title: 'CAT Score Calculator 2026: Percentile & College Predictor' });
addMain(`${BASE_URL}/tools/xat-percentile-calculator`, 'weekly', '0.9', TODAY, { loc: DEFAULT_IMAGE, title: 'XAT Score Calculator & XLRI Percentile Predictor 2027' });
addMain(`${BASE_URL}/tools/cmat-percentile-calculator`, 'weekly', '0.9', TODAY, { loc: DEFAULT_IMAGE, title: 'CMAT Score Calculator & JBIMS Cutoff Predictor 2026' });
addMain(`${BASE_URL}/tools/snap-score-calculator`, 'weekly', '0.9', TODAY, { loc: DEFAULT_IMAGE, title: 'SNAP 2026 Score Calculator & SIBM Percentile Predictor' });
addMain(`${BASE_URL}/tools/nmat-score-predictor`, 'weekly', '0.9', TODAY, { loc: DEFAULT_IMAGE, title: 'NMAT Score to Percentile Calculator & NMIMS Predictor' });
addMain(`${BASE_URL}/contact`, 'monthly', '0.7', TODAY, { loc: DEFAULT_IMAGE, title: 'Free MBA Admission Counseling & Mentorship' });
addMain(`${BASE_URL}/terms`, 'monthly', '0.5', TODAY);
addMain(`${BASE_URL}/privacy`, 'monthly', '0.5', TODAY);

writeSitemapFile('sitemap-main.xml', buildUrlXml(mainUrls));

// =========================================================================
// 2. VERIFIED COLLEGES (sitemap-colleges.xml)
// =========================================================================
const collegeUrls = [];
const seenColleges = new Set();

COLLEGES_DATA.forEach(college => {
  const loc = `${BASE_URL}/colleges/${encodeURIComponent(college.id)}`;
  if (seenColleges.has(loc)) return;
  seenColleges.add(loc);

  let priority = '0.65';
  if (college.nirfRank && college.nirfRank <= 30) {
    priority = '0.9';
  } else if (college.nirfRank && college.nirfRank <= 100) {
    priority = '0.8';
  } else if (college.fees && (college.shortName?.startsWith('IIM') || college.shortName?.startsWith('IIT'))) {
    priority = '0.85';
  }

  const colImg = college.logo || DEFAULT_IMAGE;
  collegeUrls.push({
    loc,
    changefreq: 'weekly',
    priority,
    lastmod: TODAY,
    image: {
      loc: colImg,
      title: `${college.name} (${college.shortName}) Admission, Fees & Placements`
    }
  });
});

writeSitemapFile('sitemap-colleges.xml', buildUrlXml(collegeUrls));

// =========================================================================
// 3. CITY HUBS & AIU CAMPUSES (sitemap-cities.xml)
// =========================================================================
const cityUrls = [];
const seenCities = new Set();

const aiuCities = ['delhi-ncr', 'pune', 'mumbai', 'bangalore', 'jaipur', 'kolkata', 'dehradun', 'lucknow', 'indore'];
aiuCities.forEach(city => {
  const loc = `${BASE_URL}/aiu-approved-campuses/${city}`;
  if (!seenCities.has(loc)) {
    seenCities.add(loc);
    cityUrls.push({ loc, changefreq: 'weekly', priority: '0.85', lastmod: TODAY, image: { loc: DEFAULT_IMAGE, title: `AIU Approved Campuses in ${city}` } });
  }
});

CITY_INFOGRAPHICS_DATA.forEach(city => {
  const cName = city.cityName.toLowerCase().trim();
  const loc = `${BASE_URL}/colleges/city/${encodeURIComponent(cName)}`;
  if (!seenCities.has(loc)) {
    seenCities.add(loc);
    cityUrls.push({ loc, changefreq: 'weekly', priority: '0.85', lastmod: TODAY, image: { loc: DEFAULT_IMAGE, title: `Top MBA & PGDM Colleges in ${city.cityName}` } });
  }
});

COLLEGES_DATA.forEach(col => {
  if (col.city) {
    const cName = col.city.toLowerCase().trim();
    const loc = `${BASE_URL}/colleges/city/${encodeURIComponent(cName)}`;
    if (!seenCities.has(loc)) {
      seenCities.add(loc);
      cityUrls.push({ loc, changefreq: 'weekly', priority: '0.75', lastmod: TODAY, image: { loc: DEFAULT_IMAGE, title: `Top MBA & PGDM Colleges in ${col.city}` } });
    }
  }
});

writeSitemapFile('sitemap-cities.xml', buildUrlXml(cityUrls));

// =========================================================================
// 4. NATIONAL MBA ENTRANCE EXAMS (sitemap-exams.xml)
// =========================================================================
const examUrls = EXAMS_DATA.map(exam => ({
  loc: `${BASE_URL}/exams/${encodeURIComponent(exam.id)}`,
  changefreq: 'weekly',
  priority: '0.9',
  lastmod: TODAY,
  image: {
    loc: DEFAULT_IMAGE,
    title: `${exam.fullName} (${exam.name}) 2026-27`
  }
}));

writeSitemapFile('sitemap-exams.xml', buildUrlXml(examUrls));

// =========================================================================
// 5. STRATEGY BLOGS (sitemap-blogs.xml)
// =========================================================================
const blogUrls = BLOGS_DATA.map(blog => {
  const blogImg = blog.coverImage || blog.image || DEFAULT_IMAGE;
  const blogDate = blog.date && /^\d{4}-\d{2}-\d{2}$/.test(blog.date) ? blog.date : TODAY;
  return {
    loc: `${BASE_URL}/blog/${encodeURIComponent(blog.id)}`,
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: blogDate,
    image: {
      loc: blogImg,
      title: blog.title
    }
  };
});

writeSitemapFile('sitemap-blogs.xml', buildUrlXml(blogUrls));

// =========================================================================
// 6. LIVE MBA SCHOLARSHIPS (sitemap-scholarships.xml)
// =========================================================================
const scholarshipUrls = SCHOLARSHIPS_DATA.map(sch => ({
  loc: `${BASE_URL}/scholarships/${encodeURIComponent(sch.id)}`,
  changefreq: 'weekly',
  priority: '0.85',
  lastmod: TODAY,
  image: {
    loc: DEFAULT_IMAGE,
    title: `${sch.title} Scholarship`
  }
}));

writeSitemapFile('sitemap-scholarships.xml', buildUrlXml(scholarshipUrls));

// =========================================================================
// 7. FREE CBT MOCK TESTS (sitemap-mock-tests.xml)
// =========================================================================
const mockTestUrls = MOCK_TESTS.map(test => ({
  loc: `${BASE_URL}/mock-test/${encodeURIComponent(test.id)}`,
  changefreq: 'weekly',
  priority: '0.85',
  lastmod: TODAY,
  image: {
    loc: DEFAULT_IMAGE,
    title: `${test.title} Mock Test`
  }
}));

writeSitemapFile('sitemap-mock-tests.xml', buildUrlXml(mockTestUrls));

// =========================================================================
// 8. SITEMAP INDEX (public/sitemap.xml)
// =========================================================================
const sitemapSubfiles = [
  'sitemap-main.xml',
  'sitemap-colleges.xml',
  'sitemap-cities.xml',
  'sitemap-exams.xml',
  'sitemap-blogs.xml',
  'sitemap-scholarships.xml',
  'sitemap-mock-tests.xml'
];

const sitemapIndexXml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sitemapSubfiles.map(sf => {
    return `  <sitemap>\n    <loc>${BASE_URL}/${sf}</loc>\n    <lastmod>${TODAY}</lastmod>\n  </sitemap>`;
  }),
  '</sitemapindex>',
  ''
].join('\n');

writeSitemapFile('sitemap.xml', sitemapIndexXml);

const totalUrls = mainUrls.length + collegeUrls.length + cityUrls.length + examUrls.length + blogUrls.length + scholarshipUrls.length + mockTestUrls.length;
console.log(`✅ Successfully generated Modular Sitemap Index with 7 sub-sitemaps (${totalUrls} total indexable URLs):`);
console.log(`- sitemap-main.xml: ${mainUrls.length} core pages`);
console.log(`- sitemap-colleges.xml: ${collegeUrls.length} verified colleges`);
console.log(`- sitemap-cities.xml: ${cityUrls.length} city & AIU hubs`);
console.log(`- sitemap-exams.xml: ${examUrls.length} entrance exams`);
console.log(`- sitemap-blogs.xml: ${blogUrls.length} strategy articles`);
console.log(`- sitemap-scholarships.xml: ${scholarshipUrls.length} live scholarships`);
console.log(`- sitemap-mock-tests.xml: ${mockTestUrls.length} CBT mock tests`);
console.log(`- sitemap.xml: Sitemap Index pointing to all 7 sub-sitemaps`);
