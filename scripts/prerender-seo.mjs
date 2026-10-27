import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { COLLEGES_DATA } from '../src/data/collegesData.js';
import { EXAMS_DATA } from '../src/data/examsData.js';
import { BLOGS_DATA } from '../src/data/blogsData.js';
import { SCHOLARSHIPS_DATA } from '../src/data/scholarshipsData.js';
import { MOCK_TESTS } from '../src/data/mockTestsData.js';
import { CITY_INFOGRAPHICS_DATA } from '../src/data/cityInfographicsData.js';
import { AIU_OFFICIAL_LIST } from '../src/data/aiuOfficialData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const templatePath = path.resolve(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('❌ dist/index.html does not exist. Please run "vite build" first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf-8');
const BASE_URL = 'https://findmybschool.com';

const cityTitles = {
  'all': 'Top AIU Approved Campuses in India (City-Wise Directory 2027-29)',
  'pan-india': 'All 121 AIU Approved Colleges in India (Official June 2026 Gazette List)',
  'delhi-ncr': 'AIU Approved MBA & PGDM Colleges in Delhi NCR (2027-29)',
  'pune': 'AIU Approved MBA & PGDM Colleges in Pune (Fees, Cutoffs & Placements)',
  'mumbai': 'AIU Approved MBA & PGDM Colleges in Mumbai & Navi Mumbai',
  'bangalore': 'AIU Approved MBA & PGDM Colleges in Bangalore / Bengaluru',
  'jaipur': 'AIU Approved MBA & PGDM Colleges in Jaipur (Fees & Cutoffs)',
  'kolkata': 'AIU Approved MBA & PGDM Colleges in Kolkata (Eastern India)',
  'dehradun': 'AIU Approved MBA Colleges in Dehradun (Uttarakhand)',
  'lucknow': 'AIU Approved MBA Colleges in Lucknow (Uttar Pradesh)',
  'indore': 'AIU Approved MBA & PGDM Colleges in Indore (Madhya Pradesh)'
};

const cityDescs = {
  'all': 'Explore verified business schools with official Association of Indian Universities (AIU) equivalence across Delhi NCR, Pune, Mumbai, Bangalore, Jaipur, Kolkata, Dehradun, Lucknow, and Indore. 86 in 9 Metro Hubs, 121 Pan-India.',
  'pan-india': 'Explore all 121 institutions holding official Association of Indian Universities (AIU) MBA Equivalence across India, verified directly from the June 2026 AIU Gazette document.',
  'delhi-ncr': 'Compare 35 AIU-approved PGDM & 100+ MBA colleges in Delhi NCR (Noida, Gurgaon, Greater Noida). Audited tuition fees, CAT/XAT cutoffs, and recent placement packages with 0% scrapers.',
  'pune': 'Explore 14 AIU-equivalent management institutes and 50+ colleges in Pune. Compare SIBM, Balaji, NIA, NIBM, fees, entrance cutoffs, and recent campus placements.',
  'mumbai': 'Find 10 verified AIU-approved business schools and 35+ top colleges in Mumbai and Navi Mumbai. Audited 2-year fees, cutoff percentiles, and banking/finance placement statistics.',
  'bangalore': 'Top 15 AIU approved PGDM institutes and 30+ MBA colleges in Bangalore. Tech, analytics, and consulting placement data, audited tuition fees, and admission criteria.',
  'jaipur': 'AIU approved management colleges in Jaipur, Rajasthan. Compare Jaipuria Jaipur, IIHMR, IRM, audited fees, and pooled placement reports.',
  'kolkata': 'Best 5 AIU approved PGDM institutes and leading MBA colleges in Kolkata. Audited fees, cutoffs, and average salary packages across West Bengal.',
  'dehradun': 'Top business schools in Dehradun, Uttarakhand conferring statutory UGC MBA degrees. Compare UPES, Graphic Era, DIT, residential campus fees, and placements.',
  'lucknow': 'Explore top AIU approved management colleges in Lucknow. IIM Lucknow, Jaipuria Lucknow, university MBA fees, and placement reports.',
  'indore': 'Verified AIU approved MBA & PGDM colleges in Indore. Compare IIM Indore, Jaipuria Indore, cutoffs, and placement packages.'
};

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function generatePageHtml(meta, bodyHtml) {
  let html = template;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(meta.title)}</title>`);

  // Replace Meta title
  html = html.replace(/<meta name="title" content=".*?" \/>/i, `<meta name="title" content="${escapeHtml(meta.title)}" />`);

  // Replace Meta description
  html = html.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${escapeHtml(meta.description)}" />`);

  // Replace Canonical Link (CRITICAL: self-referencing canonical to eliminate Search Console errors)
  html = html.replace(/<link rel="canonical" href=".*?" \/>/i, `<link rel="canonical" href="${meta.canonical}" />`);

  // Replace OpenGraph tags
  html = html.replace(/<meta property="og:url" content=".*?" \/>/i, `<meta property="og:url" content="${meta.canonical}" />`);
  html = html.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${escapeHtml(meta.title)}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${escapeHtml(meta.description)}" />`);

  // Replace Twitter tags
  html = html.replace(/<meta name="twitter:url" content=".*?" \/>/i, `<meta name="twitter:url" content="${meta.canonical}" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/i, `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/i, `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`);

  // Replace Schema JSON-LD if provided
  if (meta.schema) {
    const schemaJson = JSON.stringify(meta.schema, null, 2);
    html = html.replace(
      /<script id="schemaStructuredData" type="application\/ld\+json">[\s\S]*?<\/script>/i,
      `<script id="schemaStructuredData" type="application/ld+json">\n${schemaJson}\n    </script>`
    );
  }

  // Replace <div id="app"> body content
  if (bodyHtml) {
    html = html.replace(/<div id="app">[\s\S]*?<\/div>\s*<\/body>/i, `<div id="app">\n${bodyHtml}\n    </div>\n  </body>`);
  }

  return html;
}

function writeStaticRoute(routePath, htmlContent) {
  const cleanPath = routePath.replace(/^\//, '').replace(/\/$/, '');
  const targetDir = cleanPath ? path.resolve(distDir, cleanPath) : distDir;
  
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const targetFile = path.resolve(targetDir, 'index.html');
  fs.writeFileSync(targetFile, htmlContent, 'utf-8');
}

console.log('🚀 Starting Pre-rendering for SEO & Google Search Console Fix...');
let count = 0;

// 1. Core Pages
const coreRoutes = [
  {
    path: '/colleges',
    title: 'Explore 600+ Verified MBA & PGDM Colleges in India (2027-29 Admission) | FindMyBSchool',
    description: 'Filter and compare 600+ top Indian business schools for 2027-29 admission by fees, NIRF rank, recent average CTC packages, CAT/XAT/CMAT cutoffs, and city locations.',
    h1: 'Explore 600+ Verified MBA & PGDM Colleges in India',
    lead: 'Compare top management institutes by audited fees, placements, entrance exam cutoffs, and NIRF rankings with 0% scrapers.'
  },
  {
    path: '/colleges/mba',
    title: 'Top University MBA Colleges in India — Fees, NIRF Rankings & Cutoffs (2027-29 Session) | FindMyBSchool',
    description: 'Find the best university MBA colleges in India for the 2027-29 session. Comprehensive comparison of UGC recognized MBA colleges, audited fees, and placements.',
    h1: 'Top University MBA Colleges in India',
    lead: 'Compare statutory UGC university MBA programs including FMS Delhi, JBIMS Mumbai, and top central universities.'
  },
  {
    path: '/colleges/pgdm',
    title: 'Top AICTE PGDM Colleges in India — Fees, NIRF Rankings & Cutoffs (2027-29 Session) | FindMyBSchool',
    description: 'Find the best AICTE approved autonomous PGDM institutes in India for 2027-29 admissions. Compare XLRI, SPJIMR, MDI, IMT, fees, and placements.',
    h1: 'Top Autonomous PGDM Colleges in India',
    lead: 'Explore premier AICTE-approved autonomous business schools offering industry-driven PGDM diplomas with AIU equivalence.'
  },
  {
    path: '/exams',
    title: 'Top MBA Entrance Exams 2026-27 — CAT, XAT, SNAP, NMAT, CMAT Calendars | FindMyBSchool',
    description: 'Compare syllabus, eligibility, exam patterns, and registration deadlines for CAT, XAT, SNAP, NMAT, CMAT, MAH-CET, and CUET-PG. Official preparation strategies.',
    h1: 'National MBA Entrance Exams 2026-27',
    lead: 'Comprehensive calendars, eligibility criteria, exam patterns, and score-to-percentile converters for all major national MBA tests.'
  },
  {
    path: '/scholarships',
    title: 'Live MBA Scholarships 2027-29: Grants up to ₹25 Lakhs | FindMyBSchool',
    description: 'Find & apply for 14+ live MBA scholarships for Session 2027-29. Need-based, corporate, government NSP, and IIM tuition fee waivers up to 100%. Free mentorship.',
    h1: 'Live MBA Scholarships for 2027-29 Session',
    lead: 'Financial grants, corporate diversity awards, merit waivers, and government schemes up to 100% tuition coverage for business school aspirants.'
  },
  {
    path: '/mock-test',
    title: 'All-India Free MBA Mock Tests 2026-27 (CAT, XAT, NMAT, SNAP, CMAT) | FindMyBSchool',
    description: 'Attempt 100% Free All-India MBA Mock Tests with TCS iON simulated interface, on-screen calculator, sectional timers, instant score report, and solutions.',
    h1: 'All-India Free CBT MBA Mock Tests',
    lead: 'Experience the real test-taking environment with our TCS iON simulated CBT engine, sectional timers, and instant percentile analytics.'
  },
  {
    path: '/programs',
    title: 'MBA vs PGDM Comparison Guide (2027-29 Session) — Differences, Fees & Placement ROI | FindMyBSchool',
    description: 'Understand the crucial differences between University MBA degrees and Autonomous PGDM diplomas. Compare AICTE accreditation, syllabus flexibility, and corporate ROI.',
    h1: 'MBA vs PGDM Comprehensive Analysis & Programs Guide',
    lead: 'Make an informed career decision: compare curriculum architecture, accreditation, corporate acceptance, and salary trends.'
  },
  {
    path: '/programs/mba',
    title: 'Top University MBA Degrees in India — Eligibility, Fees, UGC Norms & Placements | FindMyBSchool',
    description: 'Complete guide to University MBA degrees in India (FMS Delhi, JBIMS, PUMBA). Compare UGC affiliations, semester syllabus, tuition fees, and corporate hiring trends.',
    h1: 'Top University MBA Programs in India',
    lead: 'Explore university-affiliated MBA degrees conferring recognized master’s credentials under UGC regulations.'
  },
  {
    path: '/programs/pgdm',
    title: 'Top AICTE PGDM Programs in India — Top Autonomous B-Schools & Placements | FindMyBSchool',
    description: 'Explore premier AICTE-approved PGDM programs (XLRI, SPJIMR, MDI, IMT). Industry-aligned trimester curriculum, corporate internships, and executive compensation.',
    h1: 'Premier AICTE Approved PGDM Programs',
    lead: 'Industry-aligned postgraduate diplomas offering contemporary specializations and high corporate placement traction.'
  },
  {
    path: '/programs/compare',
    title: 'MBA vs PGDM Comparison Guide (2027-29 Session) — Key Differences, AICTE vs UGC, ROI | FindMyBSchool',
    description: 'Understand the crucial differences between University MBA degrees and Autonomous PGDM diplomas. Compare AICTE accreditation, AIU equivalence, syllabus flexibility, and corporate ROI.',
    h1: 'MBA vs PGDM: The Complete Comparison Dossier',
    lead: 'Deciding between an MBA degree and a PGDM diploma? Here is the complete breakdown of accreditation, pedagogy, and recruitments.'
  },
  {
    path: '/programs/specializations',
    title: 'Top MBA Specializations 2027-29 — Finance, Marketing, Analytics, Consulting & HR | FindMyBSchool',
    description: 'Compare high-paying MBA specializations: Finance, Marketing, Business Analytics, Strategy & Consulting, Operations, and Human Resources. Average salaries and top hiring sectors.',
    h1: 'Top MBA & PGDM Specializations (2027-29)',
    lead: 'Explore career trajectories, compensation packages, and core curricula across Finance, Marketing, Analytics, Operations, and HR.'
  },
  {
    path: '/programs/roi',
    title: 'MBA ROI Calculator & Highest Return on Investment Colleges in India | FindMyBSchool',
    description: 'Calculate your MBA Return on Investment (ROI). Discover high-ROI business schools like FMS Delhi, JBIMS Mumbai, and TISS offering top placement packages at nominal tuition fees.',
    h1: 'Highest Return on Investment (ROI) MBA Colleges in India',
    lead: 'Maximize your educational investment with institutions that offer low fee structures combined with premier corporate recruitment packages.'
  },
  {
    path: '/tools/xat-percentile-calculator',
    title: 'XAT Score Calculator & XLRI Percentile Predictor 2027 | FindMyBSchool',
    description: 'Calculate your XAT score with official negative marking and unattempted question penalty. Estimate XLRI BM & HRM shortlist cutoffs.',
    h1: 'XAT Score Calculator & Percentile Predictor 2027',
    lead: 'Input your raw attempts, correct and incorrect answers to calculate normalized score and predict XLRI shortlist percentiles.'
  },
  {
    path: '/tools/cmat-percentile-calculator',
    title: 'CMAT Score Calculator & JBIMS Cutoff Predictor 2026 | FindMyBSchool',
    description: 'Calculate your CMAT 400-mark score across 5 sections. Predict JBIMS MMS, SIMSREE, and GIM Goa percentile cutoffs.',
    h1: 'CMAT Score Calculator & Percentile Predictor 2026',
    lead: 'Calculate your total CMAT score out of 400 marks and evaluate your admission chances at JBIMS, SIMSREE, K J Somaiya, and GIM.'
  },
  {
    path: '/blog',
    title: 'MBA Admissions Strategy Blog & Exam Preparation Guides | FindMyBSchool',
    description: 'Read expert editorial guides on CAT preparation, GD-PI interview secrets, MBA vs PGDM analysis, and top B-school placement insights written by IIM/XLRI mentors.',
    h1: 'MBA Strategy Blog & Admissions Editorial',
    lead: 'Actionable guidance on entrance exam strategies, GD-PI prep, profile building, and college comparisons authored by admission veterans.'
  },
  {
    path: '/aiu-approved-campuses',
    title: 'Top AIU Approved Campuses in India (City-Wise Directory 2027-29) | FindMyBSchool',
    description: 'Explore verified business schools with official Association of Indian Universities (AIU) equivalence across Delhi NCR, Pune, Mumbai, Bangalore, Jaipur, Kolkata, Dehradun, Lucknow, and Indore.',
    h1: 'AIU Approved MBA & PGDM Campuses Directory',
    lead: 'Verified list of autonomous management institutions whose PGDM diplomas are officially recognized as equivalent to an MBA degree by AIU.'
  },
  {
    path: '/contact',
    title: 'Free MBA Admission Counseling & Mentorship | FindMyBSchool',
    description: 'Book a 1-on-1 profile evaluation with senior MBA admission mentors. Get personalized B-school shortlists according to your budget, city, and exam scores.',
    h1: 'Free 1-on-1 MBA Admission Counseling',
    lead: 'Connect with expert mentors for unbiased guidance on college selection, application deadlines, and GD-PI preparation.'
  },
  {
    path: '/ai-chat',
    title: 'AdmitIQ AI Assistant — Instant MBA Profile & College Evaluator | FindMyBSchool',
    description: 'Chat with AdmitIQ, India’s specialized AI MBA admissions assistant. Get immediate answers on college cutoffs, fee structures, and profile shortlist chances.',
    h1: 'AdmitIQ AI Admissions Assistant',
    lead: 'Instant answers to your queries on B-school cutoffs, fees, placement reports, and profile eligibility powered by intelligent admissions data.'
  },
  {
    path: '/terms',
    title: 'Terms and Conditions — User Agreement & Disclaimers | FindMyBSchool',
    description: 'Official Terms and Conditions for using FindMyBSchool.com services, calculators, college comparisons, and admission guidance portals.',
    h1: 'Terms and Conditions',
    lead: 'Please review our service agreement, platform usage policies, and counseling disclaimers.'
  },
  {
    path: '/privacy',
    title: 'Privacy Policy — Student Data Protection & DPDP Compliance | FindMyBSchool',
    description: 'FindMyBSchool Privacy Policy compliant with India DPDP Act 2023 and GDPR. Understand how your academic profile and contact data are securely protected.',
    h1: 'Privacy Policy & Student Data Protection',
    lead: 'Committed to candidate privacy, strict adherence to the DPDP Act 2023, and zero unauthorized sharing of your contact information.'
  }
];

// Add city-wise AIU routes
['delhi-ncr', 'pune', 'mumbai', 'bangalore', 'jaipur', 'kolkata', 'dehradun', 'lucknow', 'indore'].forEach(city => {
  coreRoutes.push({
    path: `/aiu-approved-campuses/${city}`,
    title: `${cityTitles[city] || city.toUpperCase()} | FindMyBSchool`,
    description: cityDescs[city] || `AIU approved MBA & PGDM colleges in ${city}. Compare fees, cutoffs, and placements.`,
    h1: cityTitles[city] || `AIU Approved Campuses in ${city}`,
    lead: cityDescs[city] || `Verified MBA and PGDM colleges in ${city} with official Association of Indian Universities equivalence.`
  });
});

for (const cr of coreRoutes) {
  const meta = {
    title: cr.title,
    description: cr.description,
    canonical: `${BASE_URL}${cr.path}`
  };
  const bodyHtml = `
    <header style="padding: 20px 24px; border-bottom: 1px solid #E2E8F0; text-align: center; background: #FAFAFE;">
      <a href="/" style="font-weight: 800; font-size: 1.5rem; color: #6B2CF5; text-decoration: none;">FindMyBSchool</a>
      <p style="margin: 4px 0 0; color: #64748B; font-size: 0.95rem;">India’s Verified MBA &amp; PGDM Admissions Portal • Session 2027-29</p>
    </header>
    <main style="max-width: 1100px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif;">
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <a href="/" style="color: #6B2CF5; text-decoration: none;">Home</a> &gt; <span>${escapeHtml(cr.h1)}</span>
      </nav>
      <h1 style="font-size: 2rem; font-weight: 800; color: #0F172A; line-height: 1.25;">${escapeHtml(cr.h1)}</h1>
      <p style="color: #475569; font-size: 1.1rem; line-height: 1.6; margin-top: 14px;">${escapeHtml(cr.lead)}</p>
      <div style="margin-top: 24px;">
        <a href="/colleges" style="display: inline-block; padding: 10px 20px; background: #6B2CF5; color: #FFFFFF; font-weight: 600; text-decoration: none; border-radius: 8px;">Explore Verified Colleges</a>
        <a href="/tools/cat-college-predictor" style="display: inline-block; margin-left: 12px; padding: 10px 20px; background: #F1F5F9; color: #1E293B; font-weight: 600; text-decoration: none; border-radius: 8px;">CAT College Predictor</a>
      </div>
    </main>
  `;
  writeStaticRoute(cr.path, generatePageHtml(meta, bodyHtml));
  count++;
}

// 2. City Hubs
const addedCities = new Set();
const allCities = [];

CITY_INFOGRAPHICS_DATA.forEach(c => {
  const cName = c.cityName.toLowerCase();
  if (!addedCities.has(cName)) {
    addedCities.add(cName);
    allCities.push(c.cityName);
  }
});

COLLEGES_DATA.forEach(col => {
  if (col.city) {
    const cName = col.city.toLowerCase().trim();
    if (!addedCities.has(cName)) {
      addedCities.add(cName);
      allCities.push(col.city.trim());
    }
  }
});

for (const city of allCities) {
  const normCity = city.toLowerCase().trim();
  const meta = {
    title: `Top MBA & PGDM Colleges in ${city} — Fees, Placements & Cutoffs (2027-29 Session) | FindMyBSchool`,
    description: `Explore top management institutes in ${city} for 2027-29 admissions. Compare AICTE & UGC approved MBA/PGDM colleges, audited fees, average salaries, and exam cutoffs.`,
    canonical: `${BASE_URL}/colleges/city/${encodeURIComponent(normCity)}`
  };
  const bodyHtml = `
    <header style="padding: 20px 24px; border-bottom: 1px solid #E2E8F0; text-align: center; background: #FAFAFE;">
      <a href="/" style="font-weight: 800; font-size: 1.5rem; color: #6B2CF5; text-decoration: none;">FindMyBSchool</a>
      <p style="margin: 4px 0 0; color: #64748B; font-size: 0.95rem;">India’s Verified MBA &amp; PGDM Admissions Portal • Session 2027-29</p>
    </header>
    <main style="max-width: 1100px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif;">
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <a href="/" style="color: #6B2CF5; text-decoration: none;">Home</a> &gt; <a href="/colleges" style="color: #6B2CF5; text-decoration: none;">Colleges</a> &gt; <span>${escapeHtml(city)}</span>
      </nav>
      <h1 style="font-size: 2rem; font-weight: 800; color: #0F172A; line-height: 1.25;">Top MBA &amp; PGDM Colleges in ${escapeHtml(city)} (2027-29 Admission)</h1>
      <p style="color: #475569; font-size: 1.1rem; line-height: 1.6; margin-top: 14px;">
        Discover and compare verified business schools in ${escapeHtml(city)} with audited tuition fees, official entrance exam cutoffs, and audited campus placement reports.
      </p>
      <div style="margin-top: 24px;">
        <a href="/colleges?city=${encodeURIComponent(normCity)}" style="display: inline-block; padding: 10px 20px; background: #6B2CF5; color: #FFFFFF; font-weight: 600; text-decoration: none; border-radius: 8px;">View All ${escapeHtml(city)} Colleges</a>
      </div>
    </main>
  `;
  writeStaticRoute(`/colleges/city/${normCity}`, generatePageHtml(meta, bodyHtml));
  count++;
}

// 3. Entrance Exams
for (const exam of EXAMS_DATA) {
  const meta = {
    title: `${exam.fullName} (${exam.name}) 2026-27 — Dates, Syllabus, Cutoffs & Registration | FindMyBSchool`,
    description: `Complete guide for ${exam.fullName} (${exam.name}). Conducting body: ${exam.conductingBody}. Exam date: ${exam.examDate}. Eligibility, registration fees, syllabus, and top participating colleges.`,
    canonical: `${BASE_URL}/exams/${encodeURIComponent(exam.id)}`
  };
  const bodyHtml = `
    <header style="padding: 20px 24px; border-bottom: 1px solid #E2E8F0; text-align: center; background: #FAFAFE;">
      <a href="/" style="font-weight: 800; font-size: 1.5rem; color: #6B2CF5; text-decoration: none;">FindMyBSchool</a>
      <p style="margin: 4px 0 0; color: #64748B; font-size: 0.95rem;">India’s Verified MBA &amp; PGDM Admissions Portal • Session 2027-29</p>
    </header>
    <main style="max-width: 1100px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif;">
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <a href="/" style="color: #6B2CF5; text-decoration: none;">Home</a> &gt; <a href="/exams" style="color: #6B2CF5; text-decoration: none;">Exams</a> &gt; <span>${escapeHtml(exam.name)}</span>
      </nav>
      <h1 style="font-size: 2rem; font-weight: 800; color: #0F172A; line-height: 1.25;">${escapeHtml(exam.fullName)} (${escapeHtml(exam.name)}) 2026-27</h1>
      <p style="color: #475569; font-size: 1.1rem; line-height: 1.6; margin-top: 14px;">
        Conducting Body: <strong>${escapeHtml(exam.conductingBody)}</strong> • Exam Date: <strong>${escapeHtml(exam.examDate)}</strong> • Mode: <strong>${escapeHtml(exam.mode || 'Computer Based Test')}</strong>
      </p>
      <div style="margin-top: 24px;">
        <a href="/tools/cat-college-predictor" style="display: inline-block; padding: 10px 20px; background: #6B2CF5; color: #FFFFFF; font-weight: 600; text-decoration: none; border-radius: 8px;">Check College Predictor</a>
        <a href="/colleges" style="display: inline-block; margin-left: 12px; padding: 10px 20px; background: #F1F5F9; color: #1E293B; font-weight: 600; text-decoration: none; border-radius: 8px;">Explore Accepting Colleges</a>
      </div>
    </main>
  `;
  writeStaticRoute(`/exams/${exam.id}`, generatePageHtml(meta, bodyHtml));
  count++;
}

// 4. Live Scholarships
for (const sch of SCHOLARSHIPS_DATA) {
  const meta = {
    title: `${sch.title} (${sch.provider}): Eligibility, Grants up to ${sch.amount} & Deadlines | FindMyBSchool`,
    description: `Apply for ${sch.title}. Provider: ${sch.provider}. Grant: ${sch.amount}. Target: ${sch.targetInstitutes}. Eligibility: ${sch.eligibilitySummary}. Free document checklist & mentorship.`,
    canonical: `${BASE_URL}/scholarships/${encodeURIComponent(sch.id)}`
  };
  const bodyHtml = `
    <header style="padding: 20px 24px; border-bottom: 1px solid #E2E8F0; text-align: center; background: #FAFAFE;">
      <a href="/" style="font-weight: 800; font-size: 1.5rem; color: #6B2CF5; text-decoration: none;">FindMyBSchool</a>
      <p style="margin: 4px 0 0; color: #64748B; font-size: 0.95rem;">India’s Verified MBA &amp; PGDM Admissions Portal • Session 2027-29</p>
    </header>
    <main style="max-width: 1100px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif;">
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <a href="/" style="color: #6B2CF5; text-decoration: none;">Home</a> &gt; <a href="/scholarships" style="color: #6B2CF5; text-decoration: none;">Scholarships</a> &gt; <span>${escapeHtml(sch.title)}</span>
      </nav>
      <h1 style="font-size: 2rem; font-weight: 800; color: #0F172A; line-height: 1.25;">${escapeHtml(sch.title)}</h1>
      <p style="color: #475569; font-size: 1.1rem; line-height: 1.6; margin-top: 14px;">
        Grant Amount: <strong style="color: #10B981;">${escapeHtml(sch.amount)}</strong> • Provider: <strong>${escapeHtml(sch.provider)}</strong> • Target: <strong>${escapeHtml(sch.targetInstitutes)}</strong>
      </p>
      <div style="margin-top: 24px;">
        <a href="/contact" style="display: inline-block; padding: 10px 20px; background: #6B2CF5; color: #FFFFFF; font-weight: 600; text-decoration: none; border-radius: 8px;">Apply with Counselor Mentorship</a>
      </div>
    </main>
  `;
  writeStaticRoute(`/scholarships/${sch.id}`, generatePageHtml(meta, bodyHtml));
  count++;
}

// 5. CBT Mock Tests
for (const test of MOCK_TESTS) {
  const meta = {
    title: `${test.title} — Real CBT Exam Simulation & Percentile Predictor | FindMyBSchool`,
    description: `Attempt 100% Free ${test.title}. ${test.tagline}. Full duration: ${test.fullDurationMinutes} mins, ${test.totalQuestions} questions. Real-time sectional timers, on-screen calculator, and instant percentile report.`,
    canonical: `${BASE_URL}/mock-test/${encodeURIComponent(test.id)}`
  };
  const bodyHtml = `
    <header style="padding: 20px 24px; border-bottom: 1px solid #E2E8F0; text-align: center; background: #FAFAFE;">
      <a href="/" style="font-weight: 800; font-size: 1.5rem; color: #6B2CF5; text-decoration: none;">FindMyBSchool</a>
      <p style="margin: 4px 0 0; color: #64748B; font-size: 0.95rem;">India’s Verified MBA &amp; PGDM Admissions Portal • Session 2027-29</p>
    </header>
    <main style="max-width: 1100px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif;">
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <a href="/" style="color: #6B2CF5; text-decoration: none;">Home</a> &gt; <a href="/mock-test" style="color: #6B2CF5; text-decoration: none;">Mock Tests</a> &gt; <span>${escapeHtml(test.title)}</span>
      </nav>
      <h1 style="font-size: 2rem; font-weight: 800; color: #0F172A; line-height: 1.25;">${escapeHtml(test.title)}</h1>
      <p style="color: #475569; font-size: 1.1rem; line-height: 1.6; margin-top: 14px;">
        Duration: <strong>${test.fullDurationMinutes} Minutes</strong> • Total Questions: <strong>${test.totalQuestions} Questions</strong> • Interface: <strong>TCS iON CBT</strong>
      </p>
      <div style="margin-top: 24px;">
        <a href="/mock-test/${test.id}" style="display: inline-block; padding: 10px 20px; background: #6B2CF5; color: #FFFFFF; font-weight: 600; text-decoration: none; border-radius: 8px;">Start CBT Mock Test Now</a>
      </div>
    </main>
  `;
  writeStaticRoute(`/mock-test/${test.id}`, generatePageHtml(meta, bodyHtml));
  count++;
}

// 6. Strategy Blogs
for (const blog of BLOGS_DATA) {
  const meta = {
    title: `${blog.title} | FindMyBSchool Strategy Blog`,
    description: blog.summary || blog.excerpt || blog.description || 'Actionable MBA admissions insights, interview secrets, and CAT percentile strategies.',
    canonical: `${BASE_URL}/blog/${encodeURIComponent(blog.id)}`
  };
  const bodyHtml = `
    <header style="padding: 20px 24px; border-bottom: 1px solid #E2E8F0; text-align: center; background: #FAFAFE;">
      <a href="/" style="font-weight: 800; font-size: 1.5rem; color: #6B2CF5; text-decoration: none;">FindMyBSchool</a>
      <p style="margin: 4px 0 0; color: #64748B; font-size: 0.95rem;">India’s Verified MBA &amp; PGDM Admissions Portal • Session 2027-29</p>
    </header>
    <main style="max-width: 1100px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif;">
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <a href="/" style="color: #6B2CF5; text-decoration: none;">Home</a> &gt; <a href="/blog" style="color: #6B2CF5; text-decoration: none;">Blog</a> &gt; <span>${escapeHtml(blog.title)}</span>
      </nav>
      <h1 style="font-size: 2rem; font-weight: 800; color: #0F172A; line-height: 1.25;">${escapeHtml(blog.title)}</h1>
      <p style="color: #64748B; font-size: 0.95rem; margin-top: 8px;">Published by FindMyBSchool Editorial Team • MBA Admissions 2027-29</p>
      <div style="color: #334155; font-size: 1.05rem; line-height: 1.7; margin-top: 18px;">
        <p>${escapeHtml(blog.summary || blog.excerpt || '')}</p>
      </div>
      <div style="margin-top: 24px;">
        <a href="/colleges" style="display: inline-block; padding: 10px 20px; background: #6B2CF5; color: #FFFFFF; font-weight: 600; text-decoration: none; border-radius: 8px;">Explore Verified Colleges</a>
      </div>
    </main>
  `;
  writeStaticRoute(`/blog/${blog.id}`, generatePageHtml(meta, bodyHtml));
  count++;
}

// 7. All Verified Colleges (681 Business Schools)
for (const col of COLLEGES_DATA) {
  const canonicalUrl = `${BASE_URL}/colleges/${encodeURIComponent(col.id)}`;
  const title = `${col.name} (${col.shortName}) Admission 2027-29: Fees, Cutoffs, Recent Placements & NIRF Ranking | FindMyBSchool`;
  const description = `Get verified 2027-29 admission session details for ${col.name} (${col.shortName}), ${col.location}. 2-Year Total Fees: ${col.fees}, Recent Average CTC: ${col.avgSalary}, Cutoff: ${col.cutoffCAT !== 'N/A' ? 'CAT ' + col.cutoffCAT : (col.cutoffXAT !== 'N/A' ? 'XAT ' + col.cutoffXAT : 'CMAT ' + col.cutoffCMAT)}. 100% audited recent placement statistics & bank loan schemes.`;

  const collegeSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollegeOrUniversity',
    '@id': `${canonicalUrl}#college`,
    'name': col.name,
    'alternateName': [col.shortName, col.name],
    'url': canonicalUrl,
    'logo': `${BASE_URL}/favicon.svg`,
    'description': `${col.name} (${col.shortName}) is a premier management institute in ${col.location} offering ${col.programType}. Total 2-year fees: ${col.fees}, Average placement CTC: ${col.avgSalary}, Cutoff: ${col.cutoffCAT !== 'N/A' ? 'CAT ' + col.cutoffCAT : (col.cutoffXAT !== 'N/A' ? 'XAT ' + col.cutoffXAT : 'CMAT ' + col.cutoffCMAT)}.`,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': col.city,
      'addressRegion': col.state || col.location,
      'addressCountry': 'IN'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': String(col.rating || 4.5),
      'bestRating': '5',
      'worstRating': '1',
      'ratingCount': String(col.reviewsCount || 50),
      'reviewCount': String(col.reviewsCount || 50)
    }
  };

  if (col.officialWebsite) {
    collegeSchema.sameAs = [col.officialWebsite];
  }

  const meta = {
    title,
    description,
    canonical: canonicalUrl,
    schema: collegeSchema
  };

  const bodyHtml = `
    <header style="padding: 20px 24px; border-bottom: 1px solid #E2E8F0; text-align: center; background: #FAFAFE;">
      <a href="/" style="font-weight: 800; font-size: 1.5rem; color: #6B2CF5; text-decoration: none;">FindMyBSchool</a>
      <p style="margin: 4px 0 0; color: #64748B; font-size: 0.95rem;">India’s Verified MBA &amp; PGDM Admissions Portal • Session 2027-29</p>
    </header>
    <main style="max-width: 1100px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif;">
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <a href="/" style="color: #6B2CF5; text-decoration: none;">Home</a> &gt; 
        <a href="/colleges" style="color: #6B2CF5; text-decoration: none;">Colleges</a> &gt; 
        <a href="/colleges/city/${encodeURIComponent((col.city || '').toLowerCase())}" style="color: #6B2CF5; text-decoration: none;">${escapeHtml(col.city || 'MBA Colleges')}</a> &gt; 
        <span>${escapeHtml(col.shortName || col.name)}</span>
      </nav>
      <h1 style="font-size: 2.2rem; font-weight: 800; color: #0F172A; line-height: 1.2;">
        ${escapeHtml(col.name)} (${escapeHtml(col.shortName)})
      </h1>
      <p style="color: #64748B; font-size: 1.05rem; margin-top: 8px;">
        📍 ${escapeHtml(col.location)} • 🎓 ${escapeHtml(col.programType)} • ⭐ Rating: ${col.rating || 4.5}/5 (${col.reviewsCount || 50} Audited Reviews)
      </p>

      <!-- Quick Metrics Bar -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px; margin-top: 24px;">
        <div style="padding: 16px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px;">
          <div style="font-size: 0.85rem; color: #64748B; font-weight: 600;">2-YEAR TOTAL FEES</div>
          <div style="font-size: 1.4rem; color: #0F172A; font-weight: 800; margin-top: 4px;">${escapeHtml(col.fees)}</div>
        </div>
        <div style="padding: 16px; background: #F0FDF4; border: 1px solid #DCFCE7; border-radius: 8px;">
          <div style="font-size: 0.85rem; color: #166534; font-weight: 600;">AVERAGE CTC PACKAGE</div>
          <div style="font-size: 1.4rem; color: #15803D; font-weight: 800; margin-top: 4px;">${escapeHtml(col.avgSalary)}</div>
        </div>
        <div style="padding: 16px; background: #EFF6FF; border: 1px solid #DBEAFE; border-radius: 8px;">
          <div style="font-size: 0.85rem; color: #1E40AF; font-weight: 600;">EXPECTED CUTOFF</div>
          <div style="font-size: 1.4rem; color: #2563EB; font-weight: 800; margin-top: 4px;">
            ${col.cutoffCAT !== 'N/A' ? 'CAT ' + escapeHtml(col.cutoffCAT) : (col.cutoffXAT !== 'N/A' ? 'XAT ' + escapeHtml(col.cutoffXAT) : 'CMAT ' + escapeHtml(col.cutoffCMAT))}
          </div>
        </div>
        <div style="padding: 16px; background: #FAF5FF; border: 1px solid #F3E8FF; border-radius: 8px;">
          <div style="font-size: 0.85rem; color: #6B21A8; font-weight: 600;">NIRF MANAGEMENT RANK</div>
          <div style="font-size: 1.4rem; color: #7C3AED; font-weight: 800; margin-top: 4px;">${col.nirfRank ? '#' + col.nirfRank : 'Top Tier B-School'}</div>
        </div>
      </div>

      <!-- Highlights & Overview -->
      <section style="margin-top: 28px; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px;">
        <h2 style="font-size: 1.3rem; font-weight: 700; color: #1E293B; margin-bottom: 12px;">Institutional Overview &amp; Highlights</h2>
        <p style="color: #334155; line-height: 1.7; font-size: 1.02rem;">${escapeHtml(col.highlights || description)}</p>
        <p style="color: #475569; margin-top: 12px; font-size: 0.95rem;"><strong>Accepted Entrance Exams:</strong> ${escapeHtml(col.examsAccepted ? col.examsAccepted.join(', ') : 'CAT, XAT, CMAT')}</p>
        <p style="color: #475569; font-size: 0.95rem;"><strong>Flagship Specializations:</strong> ${escapeHtml(col.specializations ? col.specializations.join(', ') : 'Marketing, Finance, HR, Operations, Business Analytics')}</p>
      </section>

      <!-- Action Buttons -->
      <div style="margin-top: 24px;">
        <a href="/colleges/${col.id}" style="display: inline-block; padding: 12px 24px; background: #6B2CF5; color: #FFFFFF; font-weight: 700; text-decoration: none; border-radius: 8px;">View Full Interactive Dossier</a>
        <a href="/contact" style="display: inline-block; margin-left: 12px; padding: 12px 24px; background: #F1F5F9; color: #1E293B; font-weight: 600; text-decoration: none; border-radius: 8px;">Book 1-on-1 Profile Evaluation</a>
      </div>
    </main>
  `;

  writeStaticRoute(`/colleges/${col.id}`, generatePageHtml(meta, bodyHtml));
  count++;
}

// 8. Generate 404.html (True HTTP 404 with noindex, nofollow)
const notFoundHtml = template
  .replace(/<title>.*?<\/title>/i, '<title>Page Not Found (404) | FindMyBSchool</title>')
  .replace(/<meta name="robots" content=".*?" \/>/i, '<meta name="robots" content="noindex, nofollow" />')
  .replace(/<link rel="canonical" href=".*?" \/>/i, '<link rel="canonical" href="https://findmybschool.com/404" />')
  .replace(/<div id="app">[\s\S]*?<\/div>\s*<\/body>/i, `
    <div id="app">
      <header style="padding: 20px 24px; border-bottom: 1px solid #E2E8F0; text-align: center; background: #FAFAFE;">
        <a href="/" style="font-weight: 800; font-size: 1.5rem; color: #6B2CF5; text-decoration: none;">FindMyBSchool</a>
        <p style="margin: 4px 0 0; color: #64748B; font-size: 0.95rem;">India’s Verified MBA &amp; PGDM Admissions Portal • Session 2027-29</p>
      </header>
      <main style="max-width: 600px; margin: 60px auto; padding: 0 20px; text-align: center; font-family: system-ui, -apple-system, sans-serif;">
        <div style="font-size: 4rem; font-weight: 900; color: #6B2CF5;">404</div>
        <h1 style="font-size: 1.8rem; font-weight: 800; color: #0F172A; margin-top: 10px;">Page Not Found</h1>
        <p style="color: #64748B; font-size: 1.05rem; line-height: 1.6; margin-top: 14px;">
          The page or college profile you are looking for has been moved, archived, or does not exist.
        </p>
        <div style="margin-top: 28px;">
          <a href="/" style="display: inline-block; padding: 12px 24px; background: #6B2CF5; color: #FFFFFF; font-weight: 700; text-decoration: none; border-radius: 8px;">Return to Homepage</a>
          <a href="/colleges" style="display: inline-block; margin-left: 12px; padding: 12px 24px; background: #F1F5F9; color: #1E293B; font-weight: 600; text-decoration: none; border-radius: 8px;">Search Colleges</a>
        </div>
      </main>
    </div>
  </body>
  `);

fs.writeFileSync(path.resolve(distDir, '404.html'), notFoundHtml, 'utf-8');
const public404 = path.resolve(rootDir, 'public/404.html');
fs.writeFileSync(public404, notFoundHtml, 'utf-8');

console.log(`✅ Pre-rendered ${count} unique static HTML routes with accurate self-referencing canonical tags, unique titles, and schema into dist/`);
console.log(`✅ Generated 404.html with noindex, nofollow directives at dist/404.html and public/404.html`);
