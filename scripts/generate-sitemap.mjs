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

const urls = [];
const seenLocs = new Set();

function escapeXml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function addUrl(loc, changefreq, priority, lastmod = TODAY, image = null) {
  if (seenLocs.has(loc)) return;
  seenLocs.add(loc);
  urls.push({ loc, changefreq, priority, lastmod, image });
}

// 1. Core Landing & Main Pages
addUrl(`${BASE_URL}/`, 'daily', '1.0', TODAY, { loc: DEFAULT_IMAGE, title: 'FindMyBSchool — Top MBA & PGDM Colleges, Fees & Cutoffs' });
addUrl(`${BASE_URL}/colleges`, 'daily', '0.9', TODAY, { loc: DEFAULT_IMAGE, title: 'Explore 600+ Verified MBA & PGDM Colleges in India' });
addUrl(`${BASE_URL}/scholarships`, 'daily', '0.9', TODAY, { loc: DEFAULT_IMAGE, title: 'Live MBA Scholarships 2027-29 (Grants up to ₹25 Lakhs)' });
addUrl(`${BASE_URL}/mock-test`, 'daily', '0.9', TODAY, { loc: DEFAULT_IMAGE, title: 'All-India Free MBA Mock Tests (TCS iON CBT Interface)' });
addUrl(`${BASE_URL}/exams`, 'weekly', '0.9', TODAY, { loc: DEFAULT_IMAGE, title: 'National MBA Entrance Exams 2026-27' });
addUrl(`${BASE_URL}/programs`, 'weekly', '0.8', TODAY, { loc: DEFAULT_IMAGE, title: 'MBA vs PGDM Comparison & ROI Analysis' });
addUrl(`${BASE_URL}/blog`, 'daily', '0.8', TODAY, { loc: DEFAULT_IMAGE, title: 'MBA Strategy Blog & Editorial Prep Guides' });
addUrl(`${BASE_URL}/contact`, 'monthly', '0.7', TODAY, { loc: DEFAULT_IMAGE, title: 'Free MBA Admission Counseling & Mentorship' });
addUrl(`${BASE_URL}/ai-chat`, 'weekly', '0.7', TODAY, { loc: DEFAULT_IMAGE, title: 'AdmitIQ AI Admissions Assistant' });
addUrl(`${BASE_URL}/aiu-approved-campuses`, 'daily', '0.95', TODAY, { loc: DEFAULT_IMAGE, title: 'AIU Approved MBA & PGDM Campuses Directory' });

['delhi-ncr', 'pune', 'mumbai', 'bangalore', 'jaipur', 'kolkata', 'dehradun', 'lucknow', 'indore'].forEach(city => {
  addUrl(`${BASE_URL}/aiu-approved-campuses/${city}`, 'weekly', '0.9', TODAY, { loc: DEFAULT_IMAGE, title: `AIU Approved Campuses in ${city}` });
});
addUrl(`${BASE_URL}/terms`, 'monthly', '0.6', TODAY);
addUrl(`${BASE_URL}/privacy`, 'monthly', '0.6', TODAY);

// 2. Program Comparison & Specialization Guides
addUrl(`${BASE_URL}/programs/mba`, 'weekly', '0.85', TODAY);
addUrl(`${BASE_URL}/programs/pgdm`, 'weekly', '0.85', TODAY);
addUrl(`${BASE_URL}/programs/compare`, 'weekly', '0.9', TODAY);
addUrl(`${BASE_URL}/programs/specializations`, 'weekly', '0.85', TODAY);
addUrl(`${BASE_URL}/programs/roi`, 'weekly', '0.85', TODAY);

// 3. Score Calculators & Tools
addUrl(`${BASE_URL}/tools/cat-college-predictor`, 'daily', '1.0', TODAY, { loc: DEFAULT_IMAGE, title: 'CAT College Predictor 2026 & IIM Call Predictor' });
addUrl(`${BASE_URL}/tools/xat-percentile-calculator`, 'weekly', '0.9', TODAY, { loc: DEFAULT_IMAGE, title: 'XAT Score Calculator & XLRI Percentile Predictor 2027' });
addUrl(`${BASE_URL}/tools/cmat-percentile-calculator`, 'weekly', '0.9', TODAY, { loc: DEFAULT_IMAGE, title: 'CMAT Score Calculator & JBIMS Cutoff Predictor 2026' });

// 4. College Degree Filters
addUrl(`${BASE_URL}/colleges/mba`, 'daily', '0.85', TODAY);
addUrl(`${BASE_URL}/colleges/pgdm`, 'daily', '0.85', TODAY);

// 5. City Hubs (from CITY_INFOGRAPHICS_DATA and major college locations)
const addedCities = new Set();
CITY_INFOGRAPHICS_DATA.forEach(city => {
  const cName = city.cityName.toLowerCase();
  addedCities.add(cName);
  addUrl(`${BASE_URL}/colleges/city/${encodeURIComponent(cName)}`, 'weekly', '0.85', TODAY, { loc: DEFAULT_IMAGE, title: `Top MBA & PGDM Colleges in ${city.cityName}` });
});

// Add other prominent cities from colleges data
COLLEGES_DATA.forEach(col => {
  if (col.city) {
    const cName = col.city.toLowerCase().trim();
    if (!addedCities.has(cName)) {
      addedCities.add(cName);
      addUrl(`${BASE_URL}/colleges/city/${encodeURIComponent(cName)}`, 'weekly', '0.75', TODAY, { loc: DEFAULT_IMAGE, title: `Top MBA & PGDM Colleges in ${col.city}` });
    }
  }
});

// 6. National MBA Entrance Exams
EXAMS_DATA.forEach(exam => {
  addUrl(`${BASE_URL}/exams/${encodeURIComponent(exam.id)}`, 'weekly', '0.9', TODAY, { loc: DEFAULT_IMAGE, title: `${exam.fullName} (${exam.name}) 2026-27` });
});

// 7. Live MBA Scholarships
SCHOLARSHIPS_DATA.forEach(scholarship => {
  addUrl(`${BASE_URL}/scholarships/${encodeURIComponent(scholarship.id)}`, 'weekly', '0.85', TODAY, { loc: DEFAULT_IMAGE, title: `${scholarship.title} Scholarship` });
});

// 8. Free CBT Mock Tests
MOCK_TESTS.forEach(test => {
  addUrl(`${BASE_URL}/mock-test/${encodeURIComponent(test.id)}`, 'weekly', '0.85', TODAY, { loc: DEFAULT_IMAGE, title: `${test.title} Mock Test` });
});

// 9. Editorial Strategy Blogs
BLOGS_DATA.forEach(blog => {
  const blogImg = blog.coverImage || blog.image || DEFAULT_IMAGE;
  addUrl(`${BASE_URL}/blog/${encodeURIComponent(blog.id)}`, 'weekly', '0.8', TODAY, { loc: blogImg, title: blog.title });
});

// 10. Individual Business School Profiles (with Google Image Sitemap tags)
COLLEGES_DATA.forEach(college => {
  let priority = '0.65';
  if (college.nirfRank && college.nirfRank <= 30) {
    priority = '0.9';
  } else if (college.nirfRank && college.nirfRank <= 100) {
    priority = '0.8';
  } else if (college.fees && (college.shortName?.startsWith('IIM') || college.shortName?.startsWith('IIT'))) {
    priority = '0.85';
  }

  const colImg = college.logo || DEFAULT_IMAGE;
  addUrl(`${BASE_URL}/colleges/${encodeURIComponent(college.id)}`, 'weekly', priority, TODAY, {
    loc: colImg,
    title: `${college.name} (${college.shortName}) Admission, Fees & Placements`
  });
});

// Build XML string with Google Image Sitemap namespace
const xmlContent = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
  ...urls.map(u => {
    let urlBlock = `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>`;
    if (u.image) {
      urlBlock += `\n    <image:image>\n      <image:loc>${escapeXml(u.image.loc)}</image:loc>\n      <image:title>${escapeXml(u.image.title)}</image:title>\n    </image:image>`;
    }
    urlBlock += `\n  </url>`;
    return urlBlock;
  }),
  '</urlset>',
  ''
].join('\n');

const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, xmlContent, 'utf-8');

console.log(`✅ Successfully generated sitemap with ${urls.length} URLs (including Google Image extensions) at ${outputPath}`);
console.log(`- Core Pages: 11`);
console.log(`- Program Guides: 5`);
console.log(`- Calculators: 3`);
console.log(`- Degree Types: 2`);
console.log(`- City Hubs: ${addedCities.size}`);
console.log(`- Live Scholarships: ${SCHOLARSHIPS_DATA.length}`);
console.log(`- CBT Mock Tests: ${MOCK_TESTS.length}`);
console.log(`- Entrance Exams: ${EXAMS_DATA.length}`);
console.log(`- Strategy Blogs: ${BLOGS_DATA.length}`);
console.log(`- Verified Colleges: ${COLLEGES_DATA.length}`);
