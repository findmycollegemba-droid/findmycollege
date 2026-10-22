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

const urls = [];
const seenLocs = new Set();

function addUrl(loc, changefreq, priority, lastmod = TODAY) {
  if (seenLocs.has(loc)) return;
  seenLocs.add(loc);
  urls.push({ loc, changefreq, priority, lastmod });
}

// 1. Core Landing & Main Pages
addUrl(`${BASE_URL}/`, 'daily', '1.0');
addUrl(`${BASE_URL}/colleges`, 'daily', '0.9');
addUrl(`${BASE_URL}/scholarships`, 'daily', '0.9');
addUrl(`${BASE_URL}/mock-test`, 'daily', '0.9');
addUrl(`${BASE_URL}/exams`, 'weekly', '0.9');
addUrl(`${BASE_URL}/programs`, 'weekly', '0.8');
addUrl(`${BASE_URL}/blog`, 'daily', '0.8');
addUrl(`${BASE_URL}/contact`, 'monthly', '0.7');
addUrl(`${BASE_URL}/ai-chat`, 'weekly', '0.7');
addUrl(`${BASE_URL}/aiu-approved-campuses`, 'daily', '0.95');
['delhi-ncr', 'pune', 'mumbai', 'bangalore', 'jaipur', 'kolkata', 'dehradun', 'lucknow', 'indore'].forEach(city => {
  addUrl(`${BASE_URL}/aiu-approved-campuses/${city}`, 'weekly', '0.9');
});
addUrl(`${BASE_URL}/terms`, 'monthly', '0.6');
addUrl(`${BASE_URL}/privacy`, 'monthly', '0.6');

// 2. Program Comparison & Specialization Guides
addUrl(`${BASE_URL}/programs/mba`, 'weekly', '0.85');
addUrl(`${BASE_URL}/programs/pgdm`, 'weekly', '0.85');
addUrl(`${BASE_URL}/programs/compare`, 'weekly', '0.9');
addUrl(`${BASE_URL}/programs/specializations`, 'weekly', '0.85');
addUrl(`${BASE_URL}/programs/roi`, 'weekly', '0.85');

// 3. Score Calculators & Tools
addUrl(`${BASE_URL}/tools/cat-college-predictor`, 'daily', '1.0');
addUrl(`${BASE_URL}/tools/xat-percentile-calculator`, 'weekly', '0.9');
addUrl(`${BASE_URL}/tools/cmat-percentile-calculator`, 'weekly', '0.9');

// 4. College Degree Filters
addUrl(`${BASE_URL}/colleges/mba`, 'daily', '0.85');
addUrl(`${BASE_URL}/colleges/pgdm`, 'daily', '0.85');

// 5. City Hubs (from CITY_INFOGRAPHICS_DATA and major college locations)
const addedCities = new Set();
CITY_INFOGRAPHICS_DATA.forEach(city => {
  const cName = city.cityName.toLowerCase();
  addedCities.add(cName);
  addUrl(`${BASE_URL}/colleges/city/${encodeURIComponent(cName)}`, 'weekly', '0.85');
});

// Add other prominent cities from colleges data
COLLEGES_DATA.forEach(col => {
  if (col.city) {
    const cName = col.city.toLowerCase().trim();
    if (!addedCities.has(cName)) {
      addedCities.add(cName);
      addUrl(`${BASE_URL}/colleges/city/${encodeURIComponent(cName)}`, 'weekly', '0.75');
    }
  }
});

// 6. National MBA Entrance Exams
EXAMS_DATA.forEach(exam => {
  addUrl(`${BASE_URL}/exams/${encodeURIComponent(exam.id)}`, 'weekly', '0.9');
});

// 7. Live MBA Scholarships
SCHOLARSHIPS_DATA.forEach(scholarship => {
  addUrl(`${BASE_URL}/scholarships/${encodeURIComponent(scholarship.id)}`, 'weekly', '0.85');
});

// 8. Free CBT Mock Tests
MOCK_TESTS.forEach(test => {
  addUrl(`${BASE_URL}/mock-test/${encodeURIComponent(test.id)}`, 'weekly', '0.85');
});

// 9. Editorial Strategy Blogs
BLOGS_DATA.forEach(blog => {
  addUrl(`${BASE_URL}/blog/${encodeURIComponent(blog.id)}`, 'weekly', '0.8');
});

// 10. Individual Business School Profiles
COLLEGES_DATA.forEach(college => {
  let priority = '0.65';
  if (college.nirfRank && college.nirfRank <= 30) {
    priority = '0.9';
  } else if (college.nirfRank && college.nirfRank <= 100) {
    priority = '0.8';
  } else if (college.fees && (college.shortName?.startsWith('IIM') || college.shortName?.startsWith('IIT'))) {
    priority = '0.85';
  }

  addUrl(`${BASE_URL}/colleges/${encodeURIComponent(college.id)}`, 'weekly', priority);
});

// Build XML string
const xmlContent = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`),
  '</urlset>',
  ''
].join('\n');

const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, xmlContent, 'utf-8');

console.log(`✅ Successfully generated sitemap with ${urls.length} URLs at ${outputPath}`);
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
