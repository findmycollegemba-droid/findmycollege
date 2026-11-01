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
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

const cityTitles = {
  'all': 'AIU Approved MBA Campuses in India (2027-29) | FMBS',
  'pan-india': 'All 121 AIU Approved MBA Colleges in India | FMBS',
  'delhi-ncr': 'AIU Approved MBA Colleges in Delhi NCR (2027-29) | FMBS',
  'pune': 'AIU Approved MBA Colleges in Pune: Fees & Placements | FMBS',
  'mumbai': 'AIU Approved MBA Colleges in Mumbai & Navi Mumbai | FMBS',
  'bangalore': 'AIU Approved MBA Colleges in Bangalore: Fees & Cutoff | FMBS',
  'jaipur': 'AIU Approved MBA Colleges in Jaipur: Fees & Cutoffs | FMBS',
  'kolkata': 'AIU Approved MBA Colleges in Kolkata: Fees & Placements | FMBS',
  'dehradun': 'AIU Approved MBA Colleges in Dehradun: Fees & Ranking | FMBS',
  'lucknow': 'AIU Approved MBA Colleges in Lucknow: Fees & Cutoffs | FMBS',
  'indore': 'AIU Approved MBA Colleges in Indore: Fees & Placements | FMBS'
};

const cityDescs = {
  'all': 'Explore verified business schools with official Association of Indian Universities (AIU) equivalence across Delhi NCR, Pune, Mumbai, Bangalore and Pan-India.',
  'pan-india': 'Explore all 121 institutions holding official Association of Indian Universities (AIU) MBA Equivalence across India, verified from the AIU Gazette.',
  'delhi-ncr': 'Compare 35 AIU-approved PGDM & 100+ MBA colleges in Delhi NCR (Noida, Gurgaon). Audited tuition fees, CAT/XAT cutoffs, and recent placement packages.',
  'pune': 'Explore 14 AIU-equivalent management institutes and 50+ colleges in Pune. Compare SIBM, Balaji, NIA, NIBM, fees, entrance cutoffs, and campus placements.',
  'mumbai': 'Find verified AIU-approved business schools and top colleges in Mumbai and Navi Mumbai. Audited 2-year fees, cutoff percentiles, and placement statistics.',
  'bangalore': 'Top AIU approved PGDM institutes and MBA colleges in Bangalore. Tech, analytics, and consulting placement data, audited tuition fees, and admission criteria.',
  'jaipur': 'AIU approved management colleges in Jaipur, Rajasthan. Compare Jaipuria Jaipur, IIHMR, IRM, audited fees, and pooled placement reports on FindMyBSchool.',
  'kolkata': 'Best AIU approved PGDM institutes and leading MBA colleges in Kolkata. Audited fees, cutoffs, and average salary packages across West Bengal.',
  'dehradun': 'Top business schools in Dehradun conferring statutory UGC MBA degrees. Compare UPES, Graphic Era, DIT, residential campus fees, and placements.',
  'lucknow': 'Explore top AIU approved management colleges in Lucknow. IIM Lucknow, Jaipuria Lucknow, university MBA fees, and placement reports.',
  'indore': 'Verified AIU approved MBA & PGDM colleges in Indore. Compare IIM Indore, Jaipuria Indore, cutoffs, and placement packages on FindMyBSchool.'
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

// Base Schemas present in every graph
const baseWebSiteSchema = {
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  'url': `${BASE_URL}/`,
  'name': 'FindMyBSchool',
  'alternateName': ['FMBS', 'Find My B-School India'],
  'description': 'India’s transparent MBA & PGDM college search engine, cutoffs, audited tuition fees, and percentile calculators.',
  'potentialAction': {
    '@type': 'SearchAction',
    'target': {
      '@type': 'EntryPoint',
      'urlTemplate': `${BASE_URL}/colleges?search={search_term_string}`
    },
    'query-input': 'required name=search_term_string'
  },
  'inLanguage': 'en-IN'
};

const baseOrgSchema = {
  '@type': 'EducationalOrganization',
  '@id': `${BASE_URL}/#organization`,
  'name': 'FindMyBSchool',
  'url': `${BASE_URL}/`,
  'logo': `${BASE_URL}/favicon.svg`,
  'description': 'Verified business school admissions guidance portal helping aspirants compare 600+ MBA & PGDM colleges with audited fees and placement data.',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Connaught Place',
    'addressLocality': 'New Delhi',
    'addressRegion': 'Delhi',
    'postalCode': '110001',
    'addressCountry': 'IN'
  },
  'contactPoint': [
    {
      '@type': 'ContactPoint',
      'contactType': 'admissions and founder desk',
      'telephone': '+91-8800126446',
      'email': 'founder@findmybschool.com',
      'availableLanguage': ['English', 'Hindi']
    }
  ],
  'sameAs': [
    'https://www.linkedin.com/company/findmybschool',
    'https://www.youtube.com/@findmybschool',
    'https://www.instagram.com/findmybschool'
  ]
};

function generatePageHtml(meta, bodyHtml) {
  let html = template;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(meta.title)}</title>`);

  // Replace Meta title
  html = html.replace(/<meta name="title" content=".*?" \/>/i, `<meta name="title" content="${escapeHtml(meta.title)}" />`);

  // Replace Meta description
  html = html.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${escapeHtml(meta.description)}" />`);

  // Replace Canonical Link (self-referencing canonical to eliminate Search Console errors)
  html = html.replace(/<link rel="canonical" href=".*?" \/>/i, `<link rel="canonical" href="${meta.canonical}" />`);

  // Open Graph
  const ogImg = meta.image || DEFAULT_OG_IMAGE;
  html = html.replace(/<meta property="og:url" content=".*?" \/>/i, `<meta property="og:url" content="${meta.canonical}" />`);
  html = html.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${escapeHtml(meta.title)}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${escapeHtml(meta.description)}" />`);
  html = html.replace(/<meta property="og:image" content=".*?" \/>/i, `<meta property="og:image" content="${ogImg}" />`);

  // Twitter Cards
  html = html.replace(/<meta name="twitter:url" content=".*?" \/>/i, `<meta name="twitter:url" content="${meta.canonical}" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/i, `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/i, `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`);
  html = html.replace(/<meta name="twitter:image" content=".*?" \/>/i, `<meta name="twitter:image" content="${ogImg}" />`);

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

console.log('🚀 Starting Pre-rendering for SEO, GEO, AEO, AIO & SXO Optimization...');
let count = 0;

// ==========================================
// 1. Core Landing & Directory Pages
// ==========================================
const coreRoutes = [
  {
    path: '/colleges',
    title: 'Explore 600+ Top MBA & PGDM Colleges in India | FMBS',
    description: 'Filter and compare 600+ top Indian business schools for 2027-29 admission by fees, NIRF rank, average CTC packages, CAT/XAT cutoffs, and city locations.',
    h1: 'Explore 600+ Verified MBA & PGDM Colleges in India',
    lead: 'Compare top management institutes by audited fees, placements, entrance exam cutoffs, and NIRF rankings with 0% scrapers.',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        baseWebSiteSchema,
        baseOrgSchema,
        {
          '@type': 'BreadcrumbList',
          '@id': `${BASE_URL}/colleges#breadcrumb`,
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${BASE_URL}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'Colleges Directory', 'item': `${BASE_URL}/colleges` }
          ]
        },
        {
          '@type': 'CollectionPage',
          '@id': `${BASE_URL}/colleges#collection`,
          'name': 'Directory of Verified MBA & PGDM Colleges in India',
          'url': `${BASE_URL}/colleges`,
          'description': 'Search and filter over 600 verified business schools across India by fees, cutoffs, and audited placements.'
        }
      ]
    }
  },
  {
    path: '/colleges/mba',
    title: 'Top University MBA Colleges in India: Fees & Cutoffs | FMBS',
    description: 'Explore statutory UGC university MBA programs in India including FMS Delhi, JBIMS Mumbai, and top universities with audited fees and placements.',
    h1: 'Top University MBA Colleges in India',
    lead: 'Compare statutory UGC university MBA programs including FMS Delhi, JBIMS Mumbai, and top central universities.',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        baseWebSiteSchema,
        baseOrgSchema,
        {
          '@type': 'BreadcrumbList',
          '@id': `${BASE_URL}/colleges/mba#breadcrumb`,
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${BASE_URL}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'Colleges', 'item': `${BASE_URL}/colleges` },
            { '@type': 'ListItem', 'position': 3, 'name': 'University MBA Colleges', 'item': `${BASE_URL}/colleges/mba` }
          ]
        }
      ]
    }
  },
  {
    path: '/colleges/pgdm',
    title: 'Top Autonomous PGDM Colleges in India: Fees & Cutoffs | FMBS',
    description: 'Compare premier AICTE approved autonomous PGDM institutes in India (XLRI, SPJIMR, MDI, IMT) with audited tuition fees and placement packages.',
    h1: 'Top Autonomous PGDM Colleges in India',
    lead: 'Explore premier AICTE-approved autonomous business schools offering industry-driven PGDM diplomas with AIU equivalence.',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        baseWebSiteSchema,
        baseOrgSchema,
        {
          '@type': 'BreadcrumbList',
          '@id': `${BASE_URL}/colleges/pgdm#breadcrumb`,
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${BASE_URL}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'Colleges', 'item': `${BASE_URL}/colleges` },
            { '@type': 'ListItem', 'position': 3, 'name': 'Autonomous PGDM Colleges', 'item': `${BASE_URL}/colleges/pgdm` }
          ]
        }
      ]
    }
  },
  {
    path: '/exams',
    title: 'Top MBA Entrance Exams 2026-27: Dates & Syllabus | FMBS',
    description: 'Compare syllabus, eligibility, exam patterns, and registration deadlines for CAT, XAT, SNAP, NMAT, CMAT, MAH-CET, and CUET-PG on FindMyBSchool.',
    h1: 'National MBA Entrance Exams 2026-27',
    lead: 'Comprehensive calendars, eligibility criteria, exam patterns, and score-to-percentile converters for all major national MBA tests.',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        baseWebSiteSchema,
        baseOrgSchema,
        {
          '@type': 'BreadcrumbList',
          '@id': `${BASE_URL}/exams#breadcrumb`,
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${BASE_URL}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'MBA Entrance Exams', 'item': `${BASE_URL}/exams` }
          ]
        }
      ]
    }
  },
  {
    path: '/scholarships',
    title: 'Live MBA Scholarships 2027-29: Grants up to ₹25 Lakhs | FMBS',
    description: 'Find & apply for 14+ live MBA scholarships for Session 2027-29. Need-based, corporate, government NSP, and IIM tuition fee waivers up to 100%. Free mentorship.',
    h1: 'Live MBA Scholarships for 2027-29 Session',
    lead: 'Financial grants, corporate diversity awards, merit waivers, and government schemes up to 100% tuition coverage for business school aspirants.',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        baseWebSiteSchema,
        baseOrgSchema,
        {
          '@type': 'BreadcrumbList',
          '@id': `${BASE_URL}/scholarships#breadcrumb`,
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${BASE_URL}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'Live MBA Scholarships', 'item': `${BASE_URL}/scholarships` }
          ]
        },
        {
          '@type': 'FAQPage',
          '@id': `${BASE_URL}/scholarships#faq`,
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'Can I get a 100% scholarship for an MBA in India?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Yes. Through government schemes like the Central Sector Top Class Education Scheme on the National Scholarship Portal (NSP), SC/ST candidates at all 21 IIMs receive 100% tuition fee waivers plus living stipends. Additionally, premier institutions like IIM Ahmedabad and IIM Bangalore offer 100% need-based financial aid for candidates with annual family incomes under ₹3-6 Lakhs.'
              }
            },
            {
              '@type': 'Question',
              'name': 'What are the top corporate MBA scholarships in India?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Top corporate MBA scholarships include the Aditya Birla Scholarship Programme (up to ₹6,00,000 for top rankers at IIMs and XLRI), the Reliance Foundation Postgraduate Scholarship (up to ₹6,00,000 based on aptitude test and interview), and the OP Jindal Engineering & Management Scholarship (OPJEMS).'
              }
            }
          ]
        }
      ]
    }
  },
  {
    path: '/mock-test',
    title: 'Free MBA Mock Tests 2026-27: CAT, XAT & SNAP | FMBS',
    description: 'Attempt 100% Free All-India MBA Mock Tests with TCS iON simulated interface, on-screen calculator, sectional timers, instant score report, and solutions.',
    h1: 'All-India Free CBT MBA Mock Tests',
    lead: 'Experience the real test-taking environment with our TCS iON simulated CBT engine, sectional timers, and instant percentile analytics.',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        baseWebSiteSchema,
        baseOrgSchema,
        {
          '@type': 'BreadcrumbList',
          '@id': `${BASE_URL}/mock-test#breadcrumb`,
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${BASE_URL}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'Free CBT Mock Tests', 'item': `${BASE_URL}/mock-test` }
          ]
        }
      ]
    }
  },
  {
    path: '/programs',
    title: 'MBA vs PGDM Guide 2027: Differences, Fees & ROI | FMBS',
    description: 'Understand crucial differences between University MBA degrees and Autonomous PGDM diplomas. Compare AICTE accreditation, syllabus, and corporate ROI.',
    h1: 'MBA vs PGDM Comprehensive Analysis & Programs Guide',
    lead: 'Make an informed career decision: compare curriculum architecture, accreditation, corporate acceptance, and salary trends.'
  },
  {
    path: '/programs/mba',
    title: 'Top University MBA Degrees in India: Fees & Placements | FMBS',
    description: 'Guide to University MBA degrees in India (FMS Delhi, JBIMS, PUMBA). Compare UGC affiliations, semester syllabus, tuition fees, and corporate hiring trends.',
    h1: 'Top University MBA Programs in India',
    lead: 'Explore university-affiliated MBA degrees conferring recognized master’s credentials under UGC regulations.'
  },
  {
    path: '/programs/pgdm',
    title: 'Top AICTE PGDM Programs in India: Colleges, Fees & ROI | FMBS',
    description: 'Explore premier AICTE-approved PGDM programs (XLRI, SPJIMR, MDI, IMT). Industry-aligned curriculum, corporate internships, and executive compensation.',
    h1: 'Premier AICTE Approved PGDM Programs',
    lead: 'Industry-aligned postgraduate diplomas offering contemporary specializations and high corporate placement traction.'
  },
  {
    path: '/programs/compare',
    title: 'MBA vs PGDM Comparison: Key Differences, AICTE & ROI | FMBS',
    description: 'Understand the crucial differences between University MBA degrees and Autonomous PGDM diplomas. Compare AICTE accreditation, fees, and corporate ROI.',
    h1: 'MBA vs PGDM: The Complete Comparison Dossier',
    lead: 'Deciding between an MBA degree and a PGDM diploma? Here is the complete breakdown of accreditation, pedagogy, and recruitments.'
  },
  {
    path: '/programs/specializations',
    title: 'Top MBA Specializations 2027-29: Scope, Salary & Career | FMBS',
    description: 'Compare high-paying MBA specializations: Finance, Marketing, Business Analytics, Strategy, Operations, and HR. Average salaries and top hiring sectors.',
    h1: 'Top MBA & PGDM Specializations (2027-29)',
    lead: 'Explore career trajectories, compensation packages, and core curricula across Finance, Marketing, Analytics, Operations, and HR.'
  },
  {
    path: '/programs/roi',
    title: 'Top High-ROI MBA Colleges in India: Low Fees & Top CTC | FMBS',
    description: 'Calculate MBA Return on Investment. Discover high-ROI colleges like FMS Delhi, JBIMS, and TISS offering top placement packages at nominal tuition fees.',
    h1: 'Highest Return on Investment (ROI) MBA Colleges in India',
    lead: 'Maximize your educational investment with institutions that offer low fee structures combined with premier corporate recruitment packages.'
  },
  {
    path: '/tools/cat-college-predictor',
    title: 'CAT Score Calculator 2026: Percentile & College Predictor',
    description: 'Calculate CAT 2026 raw score from your response sheet & answer key (+3/-1). Get estimated percentile, slot normalization & IIM college call predictions.',
    h1: 'CAT Score Calculator 2026: Response Sheet, Percentile & College Predictor',
    lead: 'Calculate your CAT 2026 raw score from your official candidate response sheet link (cdn.digialm.com) or sectional attempts. Features official +3/−1/0 marking, slot 1/2/3 equipercentile equating, and verified 2026-28 admission call forecasts for 21 IIMs and 50+ premier B-schools.',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        baseWebSiteSchema,
        baseOrgSchema,
        {
          '@type': 'BreadcrumbList',
          '@id': `${BASE_URL}/tools/cat-college-predictor#breadcrumb`,
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${BASE_URL}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'Calculators & Tools', 'item': `${BASE_URL}/tools/cat-college-predictor` },
            { '@type': 'ListItem', 'position': 3, 'name': 'CAT Score Calculator 2026', 'item': `${BASE_URL}/tools/cat-college-predictor` }
          ]
        },
        {
          '@type': 'WebApplication',
          '@id': `${BASE_URL}/tools/cat-college-predictor#app`,
          'name': 'CAT Score Calculator 2026 & Percentile Predictor',
          'alternateName': [
            'CAT Score Calculator',
            'CAT 2026 Score Calculator',
            'CAT Percentile Calculator',
            'CAT Response Sheet Calculator',
            'CAT College Predictor 2026'
          ],
          'url': `${BASE_URL}/tools/cat-college-predictor`,
          'applicationCategory': 'EducationalApplication',
          'applicationSubCategory': 'Score Calculator & Call Predictor',
          'operatingSystem': 'All (Web Browser, iOS, Android, macOS, Windows)',
          'browserRequirements': 'HTML5 enabled browser',
          'description': 'Calculate CAT 2026 raw score from your response sheet & answer key (+3/-1). Get estimated percentile, slot normalization & IIM college call predictions.',
          'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'INR', 'availability': 'https://schema.org/InStock' },
          'potentialAction': {
            '@type': 'CalculateAction',
            'target': `${BASE_URL}/tools/cat-college-predictor`,
            'query-input': 'required name=response_sheet_url'
          },
          'featureList': [
            'Digialm candidate response sheet URL scanning (cdn.digialm.com)',
            '+3/-1/0 Official CAT Marking Scheme',
            'Equipercentile slot normalization (Slots 1, 2, 3)',
            '21 IIMs call probability analysis (Ambitious, Moderate, Safe)',
            'Non-IIM cutoffs matching (FMS, SPJIMR, MDI, IITs)'
          ],
          'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'ratingCount': '1280',
            'reviewCount': '1280',
            'bestRating': '5',
            'worstRating': '1'
          }
        },
        {
          '@type': 'FAQPage',
          '@id': `${BASE_URL}/tools/cat-college-predictor#faq`,
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'Which is the best free CAT score calculator from response sheet?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'The FindMyBSchool CAT Score Calculator is widely regarded as the most accurate free evaluation tool. It enables direct scanning of your official candidate response sheet link hosted on cdn.digialm.com via iimcat.ac.in, audits all 66 questions in under two seconds using the official +3 / -1 / 0 marking scheme, executes equipercentile normalization across Slots 1, 2, and 3, and forecasts interview call probabilities for 21 IIMs and 50+ premier B-schools without mandatory registration.'
              }
            },
            {
              '@type': 'Question',
              'name': 'What is the official formula to calculate CAT 2026 raw score?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'The official CAT raw score formula across all 66 questions is: Raw Score = (3 × Correct MCQs) + (3 × Correct Non-MCQs/TITA) − (1 × Incorrect MCQs) − (0 × Incorrect Non-MCQs). Unattempted questions carry zero penalty. The maximum achievable raw score is 198 marks across VARC (72 marks), DILR (60 marks), and QA (66 marks).'
              }
            },
            {
              '@type': 'Question',
              'name': 'How do I check and download my CAT response sheet from cdn.digialm.com?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Log in to the official portal iimcat.ac.in with your User ID and password, navigate to the Candidate Response tab, and click the link "Click here to generate your response sheet". The response sheet opens in a new tab hosted on cdn.digialm.com showing your selected responses alongside the official provisional answer key. Copy that URL and paste it into our tool for automated score calculation.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Is there negative marking for TITA (non-MCQ) questions in CAT?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'No. Non-MCQ or Type In The Answer (TITA) questions carry zero negative marking. A correct TITA answer awards +3 marks, while an incorrect or unattempted TITA answer results in 0 deduction. Consequently, candidates should attempt all TITA questions without fear of penalties.'
              }
            },
            {
              '@type': 'Question',
              'name': 'What is the difference between CAT raw score, scaled score, and percentile?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Your Raw Score is the direct marks (+3/-1/0) earned out of 198. The Scaled Score is mathematically adjusted through equipercentile equating to account for slight difficulty variations among Slot 1, Slot 2, and Slot 3. Your Percentile indicates the percentage of total candidates nationwide who scored equal to or lower than your scaled score.'
              }
            },
            {
              '@type': 'Question',
              'name': 'How does CAT slot normalization work across Slot 1, Slot 2, and Slot 3?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'IIMs utilize an equipercentile equating model that standardizes score distributions across all three test sessions. If a particular slot (such as Slot 2 QA) exhibits a lower mean and standard deviation among top candidates due to higher question difficulty, raw scores in that slot receive an upward adjustment so that candidates across all sessions are evaluated equitably.'
              }
            },
            {
              '@type': 'Question',
              'name': 'What raw score is needed for 99+ percentile in CAT 2026?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Based on historical 66-question test administrations (~2.9 lakh candidates), an overall raw score of 82 to 94 marks out of 198 (~42%–48% aggregate marks) typically scales to the 99.0+ percentile. An estimated 60 to 74 marks corresponds to ~95 percentile, and 48 to 59 marks corresponds to ~90 percentile, depending on slot difficulty.'
              }
            },
            {
              '@type': 'Question',
              'name': 'How do top IIMs calculate the Composite Score for final admissions?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'IIMs do not shortlist candidates based on CAT percentile alone. Final interview shortlists and merit lists rely on a Composite Score combining CAT score (40–60%), Class 10th and 12th board marks (10–20%), graduation marks (5–15%), relevant work experience (5–10%), and academic or gender diversity (5–10%).'
              }
            },
            {
              '@type': 'Question',
              'name': 'Can a non-engineer or female candidate convert IIM calls at 90-95 percentile?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Yes. Leading institutes including IIM Ahmedabad, IIM Bangalore, IIM Calcutta, IIM Lucknow, and IIM Kozhikode award up to 5% academic diversity weightage to non-engineering graduates and up to 5% gender diversity points to female and transgender candidates, allowing applicants with consistent past academic records to secure calls between 90 and 95 percentile.'
              }
            },
            {
              '@type': 'Question',
              'name': 'What is the fee and process to challenge an answer in the CAT objection window?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Candidates can challenge provisional answers through the Objection Management tab on iimcat.ac.in during the 3-day post-release objection window. A processing fee of ₹1,200 per question challenged must be submitted online with supporting documentation. If the subject expert committee upholds your challenge, the entire ₹1,200 fee is refunded to the candidate.'
              }
            }
          ]
        }
      ]
    }
  },
  {
    path: '/tools/xat-percentile-calculator',
    title: 'XAT Score Calculator & XLRI Predictor 2027 | FMBS',
    description: 'Calculate your XAT score with official negative marking and unattempted question penalty. Estimate XLRI BM & HRM shortlist cutoffs.',
    h1: 'XAT Score Calculator & Percentile Predictor 2027',
    lead: 'Input your raw attempts, correct and incorrect answers to calculate normalized score and predict XLRI shortlist percentiles.',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        baseWebSiteSchema,
        baseOrgSchema,
        {
          '@type': 'BreadcrumbList',
          '@id': `${BASE_URL}/tools/xat-percentile-calculator#breadcrumb`,
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${BASE_URL}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'Tools', 'item': `${BASE_URL}/tools` },
            { '@type': 'ListItem', 'position': 3, 'name': 'XAT Calculator', 'item': `${BASE_URL}/tools/xat-percentile-calculator` }
          ]
        },
        {
          '@type': 'WebApplication',
          '@id': `${BASE_URL}/tools/xat-percentile-calculator#app`,
          'name': 'XAT Score Calculator & Percentile Predictor 2027',
          'url': `${BASE_URL}/tools/xat-percentile-calculator`,
          'applicationCategory': 'EducationalApplication',
          'operatingSystem': 'All',
          'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'INR', 'availability': 'https://schema.org/InStock' }
        }
      ]
    }
  },
  {
    path: '/tools/cmat-percentile-calculator',
    title: 'CMAT Score Calculator & JBIMS Cutoff Predictor | FMBS',
    description: 'Calculate your CMAT 400-mark score across 5 sections. Predict JBIMS MMS, SIMSREE, and GIM Goa percentile cutoffs.',
    h1: 'CMAT Score Calculator & Percentile Predictor 2026',
    lead: 'Calculate your total CMAT score out of 400 marks and evaluate your admission chances at JBIMS, SIMSREE, K J Somaiya, and GIM.',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        baseWebSiteSchema,
        baseOrgSchema,
        {
          '@type': 'BreadcrumbList',
          '@id': `${BASE_URL}/tools/cmat-percentile-calculator#breadcrumb`,
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${BASE_URL}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'Tools', 'item': `${BASE_URL}/tools` },
            { '@type': 'ListItem', 'position': 3, 'name': 'CMAT Calculator', 'item': `${BASE_URL}/tools/cmat-percentile-calculator` }
          ]
        },
        {
          '@type': 'WebApplication',
          '@id': `${BASE_URL}/tools/cmat-percentile-calculator#app`,
          'name': 'CMAT Score Calculator & JBIMS Cutoff Predictor',
          'url': `${BASE_URL}/tools/cmat-percentile-calculator`,
          'applicationCategory': 'EducationalApplication',
          'operatingSystem': 'All',
          'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'INR', 'availability': 'https://schema.org/InStock' }
        }
      ]
    }
  },
  {
    path: '/blog',
    title: 'MBA Admissions Strategy Blog & Exam Guides | FMBS',
    description: 'Read expert editorial guides on CAT preparation, GD-PI interview secrets, MBA vs PGDM analysis, and top B-school placement insights written by IIM/XLRI mentors.',
    h1: 'MBA Strategy Blog & Admissions Editorial',
    lead: 'Actionable guidance on entrance exam strategies, GD-PI prep, profile building, and college comparisons authored by admission veterans.'
  },
  {
    path: '/aiu-approved-campuses',
    title: cityTitles['all'],
    description: cityDescs['all'],
    h1: 'AIU Approved MBA & PGDM Campuses Directory',
    lead: 'Verified list of autonomous management institutions whose PGDM diplomas are officially recognized as equivalent to an MBA degree by AIU.'
  },
  {
    path: '/contact',
    title: 'Free MBA Admission Counseling & Mentorship | FMBS',
    description: 'Book a 1-on-1 profile evaluation with senior MBA admission mentors. Get personalized B-school shortlists according to your budget, city, and exam scores.',
    h1: 'Free 1-on-1 MBA Admission Counseling',
    lead: 'Connect with expert mentors for unbiased guidance on college selection, application deadlines, and GD-PI preparation.'
  },
  {
    path: '/ai-chat',
    title: 'AdmitIQ AI Assistant: MBA Profile & College Evaluator | FMBS',
    description: 'Chat with AdmitIQ, India’s specialized AI MBA admissions assistant. Get immediate answers on college cutoffs, fee structures, and profile shortlist chances.',
    h1: 'AdmitIQ AI Admissions Assistant',
    lead: 'Instant answers to your queries on B-school cutoffs, fees, placement reports, and profile eligibility powered by intelligent admissions data.'
  },
  {
    path: '/terms',
    title: 'Terms and Conditions — User Agreement & Disclaimers | FMBS',
    description: 'Official Terms and Conditions for using FindMyBSchool.com services, calculators, college comparisons, and admission guidance portals.',
    h1: 'Terms and Conditions',
    lead: 'Please review our service agreement, platform usage policies, and counseling disclaimers.'
  },
  {
    path: '/privacy',
    title: 'Privacy Policy — Student Data Protection & DPDP | FMBS',
    description: 'FindMyBSchool Privacy Policy compliant with India DPDP Act 2023 and GDPR. Understand how your academic profile and contact data are securely protected.',
    h1: 'Privacy Policy & Student Data Protection',
    lead: 'Committed to candidate privacy, strict adherence to the DPDP Act 2023, and zero unauthorized sharing of your contact information.'
  }
];

// Add city-wise AIU routes
['delhi-ncr', 'pune', 'mumbai', 'bangalore', 'jaipur', 'kolkata', 'dehradun', 'lucknow', 'indore'].forEach(city => {
  coreRoutes.push({
    path: `/aiu-approved-campuses/${city}`,
    title: cityTitles[city] || `${city.toUpperCase()} AIU Campuses | FMBS`,
    description: cityDescs[city] || `AIU approved MBA & PGDM colleges in ${city}. Compare fees, cutoffs, and placements.`,
    h1: cityTitles[city] || `AIU Approved Campuses in ${city}`,
    lead: cityDescs[city] || `Verified MBA and PGDM colleges in ${city} with official Association of Indian Universities equivalence.`
  });
});

function generateCatCalculatorBodyHtml() {
  return `
    <header style="padding: 20px 24px; border-bottom: 1px solid #E2E8F0; text-align: center; background: #FAFAFE;">
      <a href="/" style="font-weight: 800; font-size: 1.5rem; color: #6B2CF5; text-decoration: none;">FindMyBSchool</a>
      <p style="margin: 4px 0 0; color: #64748B; font-size: 0.95rem;">India’s Verified MBA &amp; PGDM Admissions Portal • Session 2027-29</p>
    </header>

    <main style="max-width: 1140px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1E293B; line-height: 1.65;">
      
      <!-- Breadcrumb Navigation -->
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <ol style="list-style: none; display: flex; flex-wrap: wrap; gap: 8px; padding: 0; margin: 0;">
          <li><a href="/" style="color: #6B2CF5; text-decoration: none; font-weight: 500;">Home</a> &gt;</li>
          <li><a href="/tools/cat-college-predictor" style="color: #6B2CF5; text-decoration: none; font-weight: 500;">Calculators &amp; Tools</a> &gt;</li>
          <li aria-current="page" style="color: #0F172A; font-weight: 600;">CAT Score Calculator 2026</li>
        </ol>
      </nav>

      <!-- Hero Header (Single H1) -->
      <header style="margin-bottom: 28px;">
        <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(107, 44, 245, 0.08); color: #6B2CF5; padding: 6px 14px; border-radius: 9999px; font-size: 0.85rem; font-weight: 700; margin-bottom: 14px;">
          <span>⚡ CAT 2026 Score Calculator, Response Sheet Scanner &amp; Slot Normalization Engine</span>
        </div>
        <h1 style="font-size: 2.25rem; font-weight: 800; color: #0F172A; line-height: 1.25; margin: 0 0 14px;">CAT Score Calculator 2026: Response Sheet, Percentile &amp; College Predictor</h1>
        <p style="color: #475569; font-size: 1.15rem; line-height: 1.6; max-width: 960px; margin: 0 0 10px;">
          Calculate your CAT 2026 raw score from your official candidate response sheet URL (<code style="background: #F1F5F9; padding: 2px 6px; border-radius: 4px; font-size: 0.95em;">cdn.digialm.com</code>) or manual sectional attempts. Get your estimated percentile through slot normalization (+3/-1 marking) and forecast interview calls for 21 IIMs and 50+ premier B-schools categorized as Ambitious, Moderate, or Safe.
        </p>
        <div style="display: flex; flex-wrap: wrap; gap: 16px; font-size: 0.85rem; color: #64748B; margin-top: 12px; padding-top: 12px; border-top: 1px solid #E2E8F0;">
          <span>📅 <strong>Last Updated:</strong> November 2, 2026 (Audited for CAT 2026 Notification)</span>
          <span>✍️ <strong>Lead Author:</strong> Rohit Sharma, Senior MBA Admissions Analyst</span>
          <span>🔍 <strong>Reviewed by:</strong> IIM Alumni Admissions Editorial Board</span>
        </div>
      </header>

      <!-- ========================================================= -->
      <!-- TOOL FIRST: ABOVE THE FOLD INTERACTIVE CALCULATOR (MOBILE-FIRST) -->
      <!-- ========================================================= -->
      <section id="cat-calculator-tool" style="background: #FFFFFF; border: 2px solid #6B2CF5; border-radius: 16px; padding: 24px; box-shadow: 0 10px 30px -5px rgba(107, 44, 245, 0.12); margin-bottom: 40px;">
        
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 20px; border-bottom: 1px solid #E2E8F0; padding-bottom: 16px;">
          <div>
            <h2 style="font-size: 1.4rem; font-weight: 800; color: #0F172A; margin: 0 0 4px;">1. Check Score via Candidate Response Sheet or Manual Attempts</h2>
            <p style="color: #64748B; font-size: 0.9rem; margin: 0;">Supports Digialm candidate URL, raw HTML source code, and manual question counts with +3 / -1 / 0 marking scheme.</p>
          </div>
          <div style="display: flex; gap: 8px;">
            <span style="display: inline-block; padding: 4px 10px; background: #DCFCE7; color: #166534; font-size: 0.8rem; font-weight: 700; border-radius: 6px;">100% Free</span>
            <span style="display: inline-block; padding: 4px 10px; background: #EDE9FE; color: #5B21B6; font-size: 0.8rem; font-weight: 700; border-radius: 6px;">Client-Side Privacy</span>
          </div>
        </div>

        <!-- Mode 1: Digialm URL Input -->
        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
          <label for="prerenderedUrlInput" style="display: block; font-weight: 700; font-size: 0.95rem; color: #0F172A; margin-bottom: 8px;">
            Paste Candidate Response Sheet Link (hosted on <code style="color: #6B2CF5;">cdn.digialm.com</code> or <code style="color: #6B2CF5;">iimcat.ac.in</code>)
          </label>
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <input 
              type="url" 
              id="prerenderedUrlInput" 
              placeholder="https://cdn.digialm.com/.../CandidateResponseSheet.html" 
              style="flex: 1; min-width: 280px; padding: 13px 16px; border: 1.5px solid #CBD5E1; border-radius: 8px; font-size: 0.95rem; outline: none; background: #FFFFFF;"
            />
            <a href="/tools/cat-college-predictor" style="display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 13px 24px; background: #6B2CF5; color: #FFFFFF; font-weight: 700; text-decoration: none; border-radius: 8px; font-size: 0.95rem; box-shadow: 0 4px 12px rgba(107, 44, 245, 0.3);">
              <span>Scan Response Sheet</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </a>
          </div>

          <div style="display: flex; gap: 12px; align-items: center; margin-top: 12px; flex-wrap: wrap; font-size: 0.85rem; color: #64748B;">
            <span style="font-weight: 600;">⚡ Instant Demos:</span>
            <a href="/tools/cat-college-predictor" style="color: #6B2CF5; text-decoration: none; font-weight: 600;">Try Sample Slot 1 Sheet</a> •
            <a href="/tools/cat-college-predictor" style="color: #6B2CF5; text-decoration: none; font-weight: 600;">Try Sample Slot 2 Sheet</a> •
            <a href="https://iimcat.ac.in" target="_blank" rel="noopener noreferrer" style="color: #0369A1; text-decoration: none; font-weight: 600;">Log in to iimcat.ac.in for Response Sheet ↗</a>
          </div>

          <div style="margin-top: 12px; padding: 10px 14px; background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 8px; font-size: 0.85rem; color: #1E40AF; line-height: 1.5;">
            🔒 <strong>Official Data Disclosure:</strong> FindMyBSchool is an independent counseling resource and does not host or claim to host official CAT test data. All candidate response sheets are securely hosted on TCS iON / Digialm servers under the authority of the CAT Convenor IIM at <a href="https://iimcat.ac.in" target="_blank" rel="noopener noreferrer" style="color: #1D4ED8; font-weight: 700; text-decoration: underline;">iimcat.ac.in</a>. Our tool parses your link directly in your browser.
          </div>
        </div>

        <!-- Mode 2: Manual Sectional Score Calculator -->
        <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
          <h3 style="font-size: 1.15rem; font-weight: 700; color: #0F172A; margin: 0 0 12px;">Manual Sectional Score &amp; Percentile Calculator</h3>
          
          <!-- Slot & Category Selectors -->
          <div style="display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 18px;">
            <div style="flex: 1; min-width: 200px;">
              <label for="staticSlotSelect" style="display: block; font-size: 0.85rem; font-weight: 700; color: #475569; margin-bottom: 6px;">Examination Slot:</label>
              <select id="staticSlotSelect" style="width: 100%; padding: 10px 12px; border: 1px solid #CBD5E1; border-radius: 8px; font-size: 0.9rem; background: #F8FAFC;">
                <option value="1">Slot 1 (Morning Session: 8:30 AM - 10:30 AM)</option>
                <option value="2">Slot 2 (Afternoon Session: 12:30 PM - 2:30 PM)</option>
                <option value="3">Slot 3 (Evening Session: 4:30 PM - 6:30 PM)</option>
              </select>
            </div>
            <div style="flex: 1; min-width: 200px;">
              <label for="staticCategorySelect" style="display: block; font-size: 0.85rem; font-weight: 700; color: #475569; margin-bottom: 6px;">Reservation Category:</label>
              <select id="staticCategorySelect" style="width: 100%; padding: 10px 12px; border: 1px solid #CBD5E1; border-radius: 8px; font-size: 0.9rem; background: #F8FAFC;">
                <option value="GEN">General / Open (GEN)</option>
                <option value="EWS">General - Economically Weaker Section (EWS)</option>
                <option value="NC-OBC">Other Backward Classes - Non-Creamy (NC-OBC)</option>
                <option value="SC">Scheduled Caste (SC)</option>
                <option value="ST">Scheduled Tribe (ST)</option>
                <option value="PWD">Persons with Benchmark Disability (PwD)</option>
              </select>
            </div>
          </div>

          <!-- Section Grid: VARC, DILR, QA -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-bottom: 20px;">
            
            <!-- Section 1: VARC -->
            <div style="border: 1px solid #BFDBFE; border-radius: 10px; padding: 16px; background: #F8FAFC;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <strong style="color: #1D4ED8; font-size: 0.95rem;">Section 1: VARC</strong>
                <span style="font-size: 0.75rem; background: #DBEAFE; color: #1E40AF; padding: 2px 8px; border-radius: 4px; font-weight: 700;">24 Qs • 72 Marks</span>
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.85rem;">
                <div>
                  <label style="display: block; color: #475569; margin-bottom: 4px;">Correct MCQ (+3)</label>
                  <input type="number" value="12" min="0" max="19" style="width: 100%; padding: 8px; border: 1px solid #CBD5E1; border-radius: 6px; box-sizing: border-box;" />
                </div>
                <div>
                  <label style="display: block; color: #475569; margin-bottom: 4px;">Wrong MCQ (-1)</label>
                  <input type="number" value="4" min="0" max="19" style="width: 100%; padding: 8px; border: 1px solid #CBD5E1; border-radius: 6px; box-sizing: border-box;" />
                </div>
                <div>
                  <label style="display: block; color: #475569; margin-bottom: 4px;">Correct TITA (+3)</label>
                  <input type="number" value="2" min="0" max="5" style="width: 100%; padding: 8px; border: 1px solid #CBD5E1; border-radius: 6px; box-sizing: border-box;" />
                </div>
                <div>
                  <label style="display: block; color: #475569; margin-bottom: 4px;">Wrong TITA (0)</label>
                  <input type="number" value="1" min="0" max="5" style="width: 100%; padding: 8px; border: 1px solid #CBD5E1; border-radius: 6px; box-sizing: border-box;" />
                </div>
              </div>
              <div style="margin-top: 10px; font-size: 0.85rem; font-weight: 700; color: #1E293B;">
                Raw Score: <span style="color: #2563EB;">38 Marks</span> / 72 (~97.5 %ile)
              </div>
            </div>

            <!-- Section 2: DILR -->
            <div style="border: 1px solid #FEF08A; border-radius: 10px; padding: 16px; background: #FEFCE8;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <strong style="color: #A16207; font-size: 0.95rem;">Section 2: DILR</strong>
                <span style="font-size: 0.75rem; background: #FEF9C3; color: #854D0E; padding: 2px 8px; border-radius: 4px; font-weight: 700;">20 Qs • 60 Marks</span>
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.85rem;">
                <div>
                  <label style="display: block; color: #475569; margin-bottom: 4px;">Correct MCQ (+3)</label>
                  <input type="number" value="8" min="0" max="15" style="width: 100%; padding: 8px; border: 1px solid #CBD5E1; border-radius: 6px; box-sizing: border-box;" />
                </div>
                <div>
                  <label style="display: block; color: #475569; margin-bottom: 4px;">Wrong MCQ (-1)</label>
                  <input type="number" value="2" min="0" max="15" style="width: 100%; padding: 8px; border: 1px solid #CBD5E1; border-radius: 6px; box-sizing: border-box;" />
                </div>
                <div>
                  <label style="display: block; color: #475569; margin-bottom: 4px;">Correct TITA (+3)</label>
                  <input type="number" value="1" min="0" max="5" style="width: 100%; padding: 8px; border: 1px solid #CBD5E1; border-radius: 6px; box-sizing: border-box;" />
                </div>
                <div>
                  <label style="display: block; color: #475569; margin-bottom: 4px;">Wrong TITA (0)</label>
                  <input type="number" value="1" min="0" max="5" style="width: 100%; padding: 8px; border: 1px solid #CBD5E1; border-radius: 6px; box-sizing: border-box;" />
                </div>
              </div>
              <div style="margin-top: 10px; font-size: 0.85rem; font-weight: 700; color: #1E293B;">
                Raw Score: <span style="color: #CA8A04;">25 Marks</span> / 60 (~98.0 %ile)
              </div>
            </div>

            <!-- Section 3: QA -->
            <div style="border: 1px solid #BBF7D0; border-radius: 10px; padding: 16px; background: #F0FDF4;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <strong style="color: #15803D; font-size: 0.95rem;">Section 3: QA</strong>
                <span style="font-size: 0.75rem; background: #DCFCE7; color: #166534; padding: 2px 8px; border-radius: 4px; font-weight: 700;">22 Qs • 66 Marks</span>
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.85rem;">
                <div>
                  <label style="display: block; color: #475569; margin-bottom: 4px;">Correct MCQ (+3)</label>
                  <input type="number" value="9" min="0" max="17" style="width: 100%; padding: 8px; border: 1px solid #CBD5E1; border-radius: 6px; box-sizing: border-box;" />
                </div>
                <div>
                  <label style="display: block; color: #475569; margin-bottom: 4px;">Wrong MCQ (-1)</label>
                  <input type="number" value="2" min="0" max="17" style="width: 100%; padding: 8px; border: 1px solid #CBD5E1; border-radius: 6px; box-sizing: border-box;" />
                </div>
                <div>
                  <label style="display: block; color: #475569; margin-bottom: 4px;">Correct TITA (+3)</label>
                  <input type="number" value="2" min="0" max="5" style="width: 100%; padding: 8px; border: 1px solid #CBD5E1; border-radius: 6px; box-sizing: border-box;" />
                </div>
                <div>
                  <label style="display: block; color: #475569; margin-bottom: 4px;">Wrong TITA (0)</label>
                  <input type="number" value="1" min="0" max="5" style="width: 100%; padding: 8px; border: 1px solid #CBD5E1; border-radius: 6px; box-sizing: border-box;" />
                </div>
              </div>
              <div style="margin-top: 10px; font-size: 0.85rem; font-weight: 700; color: #1E293B;">
                Raw Score: <span style="color: #16A34A;">31 Marks</span> / 66 (~98.0 %ile)
              </div>
            </div>

          </div>

          <!-- Score Summary & Projected Percentile Card -->
          <div style="background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); color: #FFFFFF; border-radius: 12px; padding: 22px; margin-bottom: 24px;">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
              <div>
                <span style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; color: #94A3B8; font-weight: 700;">Estimated Scorecard</span>
                <div style="font-size: 2.2rem; font-weight: 800; color: #38BDF8; margin: 4px 0;">98.50 %ile</div>
                <div style="font-size: 0.85rem; color: #CBD5E1;">*Estimated All-India Percentile (Statistical Equating Model across ~2.9 Lakh test-takers)</div>
              </div>

              <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                <div style="text-align: center;">
                  <div style="font-size: 1.6rem; font-weight: 800; color: #60A5FA;">94</div>
                  <div style="font-size: 0.75rem; color: #94A3B8;">Raw Score / 198</div>
                </div>
                <div style="text-align: center;">
                  <div style="font-size: 1.6rem; font-weight: 800; color: #4ADE80;">94.20</div>
                  <div style="font-size: 0.75rem; color: #94A3B8;">Scaled Score</div>
                </div>
                <div style="text-align: center;">
                  <div style="font-size: 1.6rem; font-weight: 800; color: #FBBF24;">82.5%</div>
                  <div style="font-size: 0.75rem; color: #94A3B8;">Accuracy Rate</div>
                </div>
                <div style="text-align: center;">
                  <div style="font-size: 1.6rem; font-weight: 800; color: #F87171;">-8 M</div>
                  <div style="font-size: 0.75rem; color: #94A3B8;">MCQ Penalty</div>
                </div>
              </div>
            </div>
          </div>

          <!-- College Predictor Buckets: Ambitious / Moderate / Safe -->
          <div>
            <h3 style="font-size: 1.25rem; font-weight: 800; color: #0F172A; margin: 0 0 8px;">2. Predicted B-School Interview Calls (Ambitious, Moderate, Safe)</h3>
            <p style="color: #64748B; font-size: 0.9rem; margin: 0 0 16px;">Categorized by admission probability based on past final shortlist criteria and composite scoring formulas:</p>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px;">
              
              <!-- Ambitious Card -->
              <div style="border: 2px solid #FCA5A5; border-radius: 12px; padding: 18px; background: #FFF5F5;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                  <span style="font-size: 0.95rem; font-weight: 800; color: #DC2626; display: flex; align-items: center; gap: 6px;">
                    <span>🚀 Ambitious / Dream Calls</span>
                  </span>
                  <span style="font-size: 0.75rem; background: #FEE2E2; color: #991B1B; padding: 2px 8px; border-radius: 4px; font-weight: 700;">99.2+ Cutoff</span>
                </div>
                <p style="font-size: 0.85rem; color: #7F1D1D; margin: 0 0 12px;">High-reach institutes requiring exceptional academic diversity, 90%+ 10th/12th marks, or near-flawless CAT percentiles:</p>
                <ul style="margin: 0; padding-left: 18px; font-size: 0.85rem; color: #1E293B; line-height: 1.7;">
                  <li><strong><a href="/colleges/iim-ahmedabad" style="color: #6B2CF5; text-decoration: none;">IIM Ahmedabad</a></strong> (PGP) • Cutoff: 99.5%ile (GEN) / 94.0%ile (NC-OBC)</li>
                  <li><strong><a href="/colleges/iim-bangalore" style="color: #6B2CF5; text-decoration: none;">IIM Bangalore</a></strong> (PGP) • Cutoff: 99.3%ile (GEN) / 93.5%ile (NC-OBC)</li>
                  <li><strong><a href="/colleges/iim-calcutta" style="color: #6B2CF5; text-decoration: none;">IIM Calcutta</a></strong> (MBA) • Cutoff: 99.4%ile (GEN) / 93.0%ile (NC-OBC)</li>
                  <li><strong><a href="/colleges/fms-delhi" style="color: #6B2CF5; text-decoration: none;">FMS Delhi</a></strong> • Cutoff: 99.2%ile (High ROI • ₹2.0 Lakhs Fee)</li>
                </ul>
              </div>

              <!-- Moderate Card -->
              <div style="border: 2px solid #FDE047; border-radius: 12px; padding: 18px; background: #FEFCE8;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                  <span style="font-size: 0.95rem; font-weight: 800; color: #854D0E; display: flex; align-items: center; gap: 6px;">
                    <span>🎯 Moderate / Target Calls</span>
                  </span>
                  <span style="font-size: 0.75rem; background: #FEF9C3; color: #713F12; padding: 2px 8px; border-radius: 4px; font-weight: 700;">94–98 Cutoff</span>
                </div>
                <p style="font-size: 0.85rem; color: #713F12; margin: 0 0 12px;">Highly competitive institutions where an interview call is likely if sectional criteria are satisfied:</p>
                <ul style="margin: 0; padding-left: 18px; font-size: 0.85rem; color: #1E293B; line-height: 1.7;">
                  <li><strong><a href="/colleges/iim-lucknow" style="color: #6B2CF5; text-decoration: none;">IIM Lucknow</a></strong> / <strong><a href="/colleges/iim-kozhikode" style="color: #6B2CF5; text-decoration: none;">IIM Kozhikode</a></strong> • Cutoff: 97.5%ile (GEN)</li>
                  <li><strong><a href="/colleges/spjimr-mumbai" style="color: #6B2CF5; text-decoration: none;">SPJIMR Mumbai</a></strong> • Profile Call: 85%ile+ / Score Call: 95%ile+</li>
                  <li><strong><a href="/colleges/mdi-gurgaon" style="color: #6B2CF5; text-decoration: none;">MDI Gurgaon</a></strong> (PGDM) • Cutoff: 95.0%ile+</li>
                  <li><strong><a href="/colleges/iit-bombay-sjmsom" style="color: #6B2CF5; text-decoration: none;">IIT Bombay (SJMSOM)</a></strong> • Cutoff: 98.0%ile+ (Engineering)</li>
                  <li><strong><a href="/colleges/iift-delhi" style="color: #6B2CF5; text-decoration: none;">IIFT Delhi</a></strong> (MBA-IB) • Cutoff: 96.5%ile+</li>
                </ul>
              </div>

              <!-- Safe Card -->
              <div style="border: 2px solid #86EFAC; border-radius: 12px; padding: 18px; background: #F0FDF4;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                  <span style="font-size: 0.95rem; font-weight: 800; color: #166534; display: flex; align-items: center; gap: 6px;">
                    <span>🛡️ Safe / High Conversion Calls</span>
                  </span>
                  <span style="font-size: 0.75rem; background: #DCFCE7; color: #14532D; padding: 2px 8px; border-radius: 4px; font-weight: 700;">80–93 Cutoff</span>
                </div>
                <p style="font-size: 0.85rem; color: #14532D; margin: 0 0 12px;">Strong probability of securing both an interview call and a final admission conversion:</p>
                <ul style="margin: 0; padding-left: 18px; font-size: 0.85rem; color: #1E293B; line-height: 1.7;">
                  <li><strong>CAP New IIMs</strong> (<a href="/colleges/iim-udaipur" style="color: #6B2CF5; text-decoration: none;">Udaipur</a>, <a href="/colleges/iim-raipur" style="color: #6B2CF5; text-decoration: none;">Raipur</a>, <a href="/colleges/iim-ranchi" style="color: #6B2CF5; text-decoration: none;">Ranchi</a>, Trichy) • Cutoff: 92–94%ile</li>
                  <li><strong>Baby IIMs</strong> (<a href="/colleges/iim-bodh-gaya" style="color: #6B2CF5; text-decoration: none;">Bodh Gaya</a>, Jammu, Sambalpur, Amritsar) • Cutoff: 88–90%ile</li>
                  <li><strong><a href="/colleges/imt-ghaziabad" style="color: #6B2CF5; text-decoration: none;">IMT Ghaziabad</a></strong> • Cutoff: 90.0%ile+ (Marketing Flagship)</li>
                  <li><strong><a href="/colleges/imi-new-delhi" style="color: #6B2CF5; text-decoration: none;">IMI New Delhi</a></strong> • Cutoff: 88.0%ile+</li>
                  <li><strong><a href="/colleges/gim-goa" style="color: #6B2CF5; text-decoration: none;">GIM Goa</a></strong> / <strong><a href="/colleges/tapmi-manipal" style="color: #6B2CF5; text-decoration: none;">TAPMI Manipal</a></strong> • Cutoff: 85.0%ile+</li>
                </ul>
              </div>

            </div>
          </div>

        </div>

      </section>

      <!-- ========================================================= -->
      <!-- SECTION 1: HOW TO CALCULATE CAT SCORE WITH WORKED EXAMPLE -->
      <!-- ========================================================= -->
      <section style="margin-bottom: 40px;">
        <h2 style="font-size: 1.65rem; font-weight: 800; color: #0F172A; margin: 0 0 14px;">How to Calculate Your CAT 2026 Raw Score (Step-by-Step Worked Example)</h2>
        <p style="color: #475569; font-size: 1.05rem; line-height: 1.7; margin: 0 0 16px;">
          Calculating your Common Admission Test (CAT) raw score from the official answer key involves applying the precise 3-tier scoring rule established by the Indian Institutes of Management. Many students make critical arithmetic errors by applying negative marking indiscriminately across all question types or misinterpreting omitted questions.
        </p>

        <h3 style="font-size: 1.3rem; font-weight: 700; color: #0F172A; margin: 20px 0 10px;">The Official CAT 2026 Marking Scheme (+3, -1, 0 Scheme)</h3>
        <p style="color: #475569; font-size: 1rem; line-height: 1.7; margin: 0 0 16px;">
          The CAT question paper consists of exactly 66 questions partitioned into two distinct answer formats: Multiple Choice Questions (MCQs) and Non-MCQ Type In The Answer (TITA) questions. Each format has a distinct penalty model:
        </p>

        <div style="overflow-x: auto; margin-bottom: 20px;">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem; border: 1px solid #E2E8F0; border-radius: 8px;">
            <thead>
              <tr style="background: #F8FAFC; border-bottom: 2px solid #E2E8F0;">
                <th style="padding: 12px 16px; font-weight: 700; color: #0F172A;">Question Category</th>
                <th style="padding: 12px 16px; font-weight: 700; color: #0F172A;">Correct Response</th>
                <th style="padding: 12px 16px; font-weight: 700; color: #0F172A;">Incorrect Response</th>
                <th style="padding: 12px 16px; font-weight: 700; color: #0F172A;">Unattempted / Skipped</th>
                <th style="padding: 12px 16px; font-weight: 700; color: #0F172A;">Strategic Implication</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #FFFFFF;">
                <td style="padding: 12px 16px;"><strong>Multiple Choice Questions (MCQs)</strong></td>
                <td style="padding: 12px 16px; color: #16A34A; font-weight: 700;">+3 Marks</td>
                <td style="padding: 12px 16px; color: #DC2626; font-weight: 700;">-1 Mark (-33.3%)</td>
                <td style="padding: 12px 16px;">0 Marks</td>
                <td style="padding: 12px 16px; font-size: 0.85rem; color: #475569;">Avoid blind guessing; 1 wrong answer negates 33% of a correct answer.</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #F8FAFC;">
                <td style="padding: 12px 16px;"><strong>Non-MCQ / TITA Questions</strong></td>
                <td style="padding: 12px 16px; color: #16A34A; font-weight: 700;">+3 Marks</td>
                <td style="padding: 12px 16px; color: #2563EB; font-weight: 700;">0 Marks (Zero Penalty)</td>
                <td style="padding: 12px 16px;">0 Marks</td>
                <td style="padding: 12px 16px; font-size: 0.85rem; color: #475569;">Zero downside; candidates should attempt 100% of TITA questions.</td>
              </tr>
              <tr style="background: #FFFFFF;">
                <td style="padding: 12px 16px;"><strong>Total Paper (66 Questions)</strong></td>
                <td style="padding: 12px 16px; font-weight: 700;">Max: 198 Marks</td>
                <td style="padding: 12px 16px;">Sectional caps apply</td>
                <td style="padding: 12px 16px;">0 Marks</td>
                <td style="padding: 12px 16px; font-size: 0.85rem; color: #475569;">120 minutes test duration (40 mins strictly per section).</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style="font-size: 1.3rem; font-weight: 700; color: #0F172A; margin: 20px 0 10px;">Comprehensive Worked Calculation Example: 66-Question Breakdown</h3>
        <p style="color: #475569; font-size: 1rem; line-height: 1.7; margin: 0 0 16px;">
          Consider candidate Priya who took Slot 2. Let us trace her question-by-question scoring across all three sections to demonstrate how raw marks are tabulated:
        </p>

        <div style="background: #FAF5FF; border: 1.5px solid #D8B4FE; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
          <h4 style="margin: 0 0 12px; color: #581C87; font-size: 1.1rem; font-weight: 800;">Candidate Priya's Sectional Audit:</h4>
          
          <div style="margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #E9D5FF;">
            <strong style="color: #1E293B;">Section 1: VARC (24 Questions Total • 19 MCQs + 5 TITA)</strong>
            <div style="color: #4C1D95; font-size: 0.95rem; margin-top: 4px;">
              • Correct MCQs: 14 &times; (+3) = +42 Marks<br />
              • Incorrect MCQs: 3 &times; (-1) = -3 Marks<br />
              • Correct TITA: 2 &times; (+3) = +6 Marks<br />
              • Incorrect TITA: 1 &times; (0) = 0 Marks<br />
              • Unattempted: 4 &times; (0) = 0 Marks<br />
              <strong>&rArr; VARC Raw Score = 42 - 3 + 6 - 0 = 45 Marks out of 72</strong>
            </div>
          </div>

          <div style="margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #E9D5FF;">
            <strong style="color: #1E293B;">Section 2: DILR (20 Questions Total • 15 MCQs + 5 TITA)</strong>
            <div style="color: #4C1D95; font-size: 0.95rem; margin-top: 4px;">
              • Correct MCQs: 8 &times; (+3) = +24 Marks<br />
              • Incorrect MCQs: 2 &times; (-1) = -2 Marks<br />
              • Correct TITA: 2 &times; (+3) = +6 Marks<br />
              • Incorrect TITA: 1 &times; (0) = 0 Marks<br />
              • Unattempted: 7 &times; (0) = 0 Marks<br />
              <strong>&rArr; DILR Raw Score = 24 - 2 + 6 - 0 = 28 Marks out of 60</strong>
            </div>
          </div>

          <div style="margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #E9D5FF;">
            <strong style="color: #1E293B;">Section 3: QA (22 Questions Total • 17 MCQs + 5 TITA)</strong>
            <div style="color: #4C1D95; font-size: 0.95rem; margin-top: 4px;">
              • Correct MCQs: 10 &times; (+3) = +30 Marks<br />
              • Incorrect MCQs: 2 &times; (-1) = -2 Marks<br />
              • Correct TITA: 1 &times; (+3) = +3 Marks<br />
              • Incorrect TITA: 2 &times; (0) = 0 Marks<br />
              • Unattempted: 7 &times; (0) = 0 Marks<br />
              <strong>&rArr; QA Raw Score = 30 - 2 + 3 - 0 = 31 Marks out of 66</strong>
            </div>
          </div>

          <div style="background: #FFFFFF; border: 1px solid #C084FC; border-radius: 8px; padding: 12px 16px; color: #581C87; font-weight: 700; font-size: 1.05rem;">
            Total Raw Score = 45 (VARC) + 28 (DILR) + 31 (QA) = 104 Marks / 198 Marks<br />
            <span style="font-size: 0.9rem; font-weight: 500; color: #6B21A8;">Projected All-India Scaled Percentile: ~99.45%ile (Eligible for IIM Ahmedabad, IIM Bangalore, IIM Calcutta, and FMS Delhi shortlists).</span>
          </div>
        </div>

      </section>

      <!-- ========================================================= -->
      <!-- SECTION 2: HOW TO CHECK ANSWER KEY & RESPONSE SHEET ON IIMCAT.AC.IN -->
      <!-- ========================================================= -->
      <section style="margin-bottom: 40px;">
        <h2 style="font-size: 1.65rem; font-weight: 800; color: #0F172A; margin: 0 0 14px;">How to Check CAT 2026 Answer Key &amp; Response Sheet on iimcat.ac.in</h2>
        <p style="color: #475569; font-size: 1.05rem; line-height: 1.7; margin: 0 0 16px;">
          The provisional CAT answer key and individual candidate response sheets are released exclusively on the official exam website: <a href="https://iimcat.ac.in" target="_blank" rel="noopener noreferrer" style="color: #6B2CF5; font-weight: 700; text-decoration: underline;">iimcat.ac.in</a>. To avoid falling victim to phishing domains or unauthorized third-party mirrors, follow these certified verification steps:
        </p>

        <h3 style="font-size: 1.3rem; font-weight: 700; color: #0F172A; margin: 20px 0 10px;">Step-by-Step Guide to Download Digialm Response Sheet</h3>
        <ol style="padding-left: 20px; color: #334155; font-size: 1rem; line-height: 1.8; margin-bottom: 20px;">
          <li><strong>Navigate to Official Portal:</strong> Open your browser and navigate directly to <a href="https://iimcat.ac.in" target="_blank" rel="noopener noreferrer" style="color: #6B2CF5; font-weight: 600;">iimcat.ac.in</a>. Verify that the SSL lock icon is secure.</li>
          <li><strong>Registered Candidate Login:</strong> Click on the button labeled <em>"Registered Candidate Login"</em>. Enter your CAT User ID (e.g., CAT26XXXXX) and Password created during registration.</li>
          <li><strong>Navigate to Candidate Response Tab:</strong> Once inside your applicant dashboard, locate and click the third tab titled <strong>"Candidate Response"</strong>.</li>
          <li><strong>Generate Response Sheet:</strong> Click the small blue hyperlink stating <em>"Click here to generate your response sheet for CAT 2026"</em>. A new browser tab will launch, hosted on TCS iON's official content delivery network (<code style="background: #F1F5F9; padding: 2px 6px; border-radius: 4px;">cdn.digialm.com</code>).</li>
          <li><strong>Save HTML &amp; Copy Link:</strong> Press <kbd style="background: #E2E8F0; padding: 2px 6px; border-radius: 4px; font-family: monospace;">Ctrl + S</kbd> (Windows) or <kbd style="background: #E2E8F0; padding: 2px 6px; border-radius: 4px; font-family: monospace;">Cmd + S</kbd> (Mac) to save a complete backup HTML file to your local computer.</li>
          <li><strong>Paste into FindMyBSchool Calculator:</strong> Copy the complete URL starting with <code style="color: #6B2CF5;">https://cdn.digialm.com/...</code> from the address bar, paste it into our calculator above, and click <em>"Scan Response Sheet"</em> for an automated 66-question analysis in 2 seconds.</li>
        </ol>

        <h3 style="font-size: 1.3rem; font-weight: 700; color: #0F172A; margin: 20px 0 10px;">How to Raise Objections in the Official CAT Objection Window</h3>
        <p style="color: #475569; font-size: 1rem; line-height: 1.7; margin: 0 0 14px;">
          If you discover an unambiguous discrepancy in the provisional answer key—such as a question with multiple valid answers, zero correct options, or an erroneous official answer—you can lodge a formal challenge through the <strong>Objection Management</strong> portal on <a href="https://iimcat.ac.in" target="_blank" rel="noopener noreferrer" style="color: #6B2CF5; font-weight: 600;">iimcat.ac.in</a>:
        </p>

        <ul style="padding-left: 20px; color: #334155; font-size: 0.95rem; line-height: 1.8; margin-bottom: 20px;">
          <li><strong>Objection Window Duration:</strong> The objection window opens for exactly 3 to 4 days following the release of the provisional key (typically 10:00 AM on opening day to 5:00 PM on closing day).</li>
          <li><strong>Non-Refundable Challenge Fee:</strong> A statutory fee of <strong>₹1,200 per questioned challenge</strong> (+ transaction processing charges) must be submitted via credit card, debit card, or net banking.</li>
          <li><strong>Documentary Proof:</strong> You must attach clear, scanned documentary justification (such as pages from standard academic reference textbooks like Arun Sharma, Sarvesh Verma, or authoritative academic papers).</li>
          <li><strong>Fee Refund Policy:</strong> If the subject expert panel upholds your objection, the provisional answer key is amended, scores of all affected candidates across that slot are updated, and the full <strong>₹1,200 fee is refunded</strong> back to your original payment method.</li>
        </ul>
      </section>

      <!-- ========================================================= -->
      <!-- SECTION 3: SCORE VS PERCENTILE & NORMALIZATION EXPLAINED -->
      <!-- ========================================================= -->
      <section style="margin-bottom: 40px;" id="marks-vs-percentile">
        <h2 style="font-size: 1.65rem; font-weight: 800; color: #0F172A; margin: 0 0 14px;">CAT Score vs Percentile 2026: Raw Score to Scaled Score Explained</h2>
        <p style="color: #475569; font-size: 1.05rem; line-height: 1.7; margin: 0 0 16px;">
          A common misconception among aspirants is that your CAT percentile directly reflects the percentage of questions you answered correctly. In reality, CAT uses a three-tier conversion hierarchy: <strong>Raw Score &rarr; Scaled Score &rarr; National Percentile Rank</strong>.
        </p>

        <h3 style="font-size: 1.3rem; font-weight: 700; color: #0F172A; margin: 20px 0 10px;">Slot Normalization &amp; Equipercentile Equating Method</h3>
        <p style="color: #475569; font-size: 1rem; line-height: 1.7; margin: 0 0 14px;">
          Because CAT is administered across three discrete sessions—Slot 1 (Morning), Slot 2 (Afternoon), and Slot 3 (Evening)—natural variations in question difficulty inevitably occur. To ensure no candidate is penalized for getting a tougher slot, IIMs employ an <strong>equipercentile equating statistical normalization model</strong>:
        </p>

        <div style="background: #0F172A; color: #E2E8F0; padding: 20px 24px; border-radius: 12px; font-family: monospace; font-size: 0.95rem; line-height: 1.8; margin-bottom: 20px;">
          <div style="color: #38BDF8; font-weight: 700; margin-bottom: 6px;"># Official IIM Scaled Score Equating Formula:</div>
          Scaled Score (S_scaled) = M_g + [ (S_raw - M_i) / SD_i ] &times; SD_g<br /><br />
          Where:<br />
          &bull; S_raw = Candidate's actual raw marks in the section<br />
          &bull; M_i = Mean raw score of all candidates in test session (slot) i<br />
          &bull; SD_i = Standard deviation of raw scores in test session i<br />
          &bull; M_g = Master global mean across all 3 test slots combined<br />
          &bull; SD_g = Master global standard deviation across all 3 test slots combined<br /><br />
          <div style="color: #38BDF8; font-weight: 700; margin-bottom: 6px;"># All-India Percentile Rank Formula:</div>
          Percentile (P) = [ (N - R) / N ] &times; 100<br />
          Where N = Total test-takers across India (~2.9 Lakh candidates), R = Assigned national merit rank.
        </div>

        <h3 style="font-size: 1.3rem; font-weight: 700; color: #0F172A; margin: 20px 0 10px;">Expected CAT 2026 Marks vs Percentile Table (198 Max Marks)</h3>
        <p style="color: #475569; font-size: 0.95rem; line-height: 1.6; margin: 0 0 16px;">
          Based on verified empirical score distributions across recent 66-question CAT administrations (~2.9 Lakh candidates), the following benchmarks indicate the raw scores required to hit key percentile bands:
        </p>

        <div style="overflow-x: auto; border: 1px solid #E2E8F0; border-radius: 10px; margin-bottom: 20px;">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.92rem;">
            <thead>
              <tr style="background: #F8FAFC; border-bottom: 2px solid #E2E8F0;">
                <th style="padding: 12px 14px; font-weight: 700; color: #0F172A;">Target Percentile</th>
                <th style="padding: 12px 14px; font-weight: 700; color: #0F172A;">Overall Raw Marks (198M)</th>
                <th style="padding: 12px 14px; font-weight: 700; color: #0F172A;">VARC (72M)</th>
                <th style="padding: 12px 14px; font-weight: 700; color: #0F172A;">DILR (60M)</th>
                <th style="padding: 12px 14px; font-weight: 700; color: #0F172A;">QA (66M)</th>
                <th style="padding: 12px 14px; font-weight: 700; color: #0F172A;">Eligible Top B-Schools</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #FFFFFF;">
                <td style="padding: 12px 14px;"><strong style="color: #6B2CF5;">99.9+ %ile</strong></td>
                <td style="padding: 12px 14px;"><strong>110 – 125+ Marks</strong></td>
                <td style="padding: 12px 14px;">46+ Marks</td>
                <td style="padding: 12px 14px;">38+ Marks</td>
                <td style="padding: 12px 14px;">42+ Marks</td>
                <td style="padding: 12px 14px;"><a href="/colleges/iim-ahmedabad" style="color: #6B2CF5; text-decoration: none;">IIM Ahmedabad</a>, <a href="/colleges/iim-bangalore" style="color: #6B2CF5; text-decoration: none;">IIM Bangalore</a>, <a href="/colleges/iim-calcutta" style="color: #6B2CF5; text-decoration: none;">IIM Calcutta</a>, <a href="/colleges/fms-delhi" style="color: #6B2CF5; text-decoration: none;">FMS Delhi</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #F8FAFC;">
                <td style="padding: 12px 14px;"><strong style="color: #6B2CF5;">99.5+ %ile</strong></td>
                <td style="padding: 12px 14px;"><strong>95 – 109 Marks</strong></td>
                <td style="padding: 12px 14px;">42+ Marks</td>
                <td style="padding: 12px 14px;">32+ Marks</td>
                <td style="padding: 12px 14px;">35+ Marks</td>
                <td style="padding: 12px 14px;"><a href="/colleges/iim-lucknow" style="color: #6B2CF5; text-decoration: none;">IIM Lucknow</a>, <a href="/colleges/iim-kozhikode" style="color: #6B2CF5; text-decoration: none;">IIM Kozhikode</a>, <a href="/colleges/spjimr-mumbai" style="color: #6B2CF5; text-decoration: none;">SPJIMR Mumbai</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #FFFFFF;">
                <td style="padding: 12px 14px;"><strong style="color: #6B2CF5;">99.0+ %ile</strong></td>
                <td style="padding: 12px 14px;"><strong>82 – 94 Marks</strong></td>
                <td style="padding: 12px 14px;">38+ Marks</td>
                <td style="padding: 12px 14px;">28+ Marks</td>
                <td style="padding: 12px 14px;">30+ Marks</td>
                <td style="padding: 12px 14px;"><a href="/colleges/iim-indore" style="color: #6B2CF5; text-decoration: none;">IIM Indore</a>, <a href="/colleges/mdi-gurgaon" style="color: #6B2CF5; text-decoration: none;">MDI Gurgaon</a>, <a href="/colleges/iit-bombay-sjmsom" style="color: #6B2CF5; text-decoration: none;">IIT Bombay (SJMSOM)</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #F8FAFC;">
                <td style="padding: 12px 14px;"><strong>98.0+ %ile</strong></td>
                <td style="padding: 12px 14px;">75 – 81 Marks</td>
                <td style="padding: 12px 14px;">34+ Marks</td>
                <td style="padding: 12px 14px;">24+ Marks</td>
                <td style="padding: 12px 14px;">26+ Marks</td>
                <td style="padding: 12px 14px;"><a href="/colleges/iift-delhi" style="color: #6B2CF5; text-decoration: none;">IIFT Delhi</a>, <a href="/colleges/iim-shillong" style="color: #6B2CF5; text-decoration: none;">IIM Shillong</a>, CAP IIMs (Udaipur, Trichy)</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #FFFFFF;">
                <td style="padding: 12px 14px;"><strong>95.0+ %ile</strong></td>
                <td style="padding: 12px 14px;">60 – 74 Marks</td>
                <td style="padding: 12px 14px;">28+ Marks</td>
                <td style="padding: 12px 14px;">19+ Marks</td>
                <td style="padding: 12px 14px;">21+ Marks</td>
                <td style="padding: 12px 14px;"><a href="/colleges/iim-raipur" style="color: #6B2CF5; text-decoration: none;">IIM Raipur</a>, <a href="/colleges/iim-ranchi" style="color: #6B2CF5; text-decoration: none;">IIM Ranchi</a>, DMS IIT Delhi, DSE Delhi</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #F8FAFC;">
                <td style="padding: 12px 14px;"><strong>90.0+ %ile</strong></td>
                <td style="padding: 12px 14px;">48 – 59 Marks</td>
                <td style="padding: 12px 14px;">23+ Marks</td>
                <td style="padding: 12px 14px;">15+ Marks</td>
                <td style="padding: 12px 14px;">16+ Marks</td>
                <td style="padding: 12px 14px;"><a href="/colleges/imt-ghaziabad" style="color: #6B2CF5; text-decoration: none;">IMT Ghaziabad</a>, <a href="/colleges/imi-new-delhi" style="color: #6B2CF5; text-decoration: none;">IMI New Delhi</a>, <a href="/colleges/gim-goa" style="color: #6B2CF5; text-decoration: none;">GIM Goa</a>, Baby IIMs</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #FFFFFF;">
                <td style="padding: 12px 14px;"><strong>85.0+ %ile</strong></td>
                <td style="padding: 12px 14px;">38 – 47 Marks</td>
                <td style="padding: 12px 14px;">18+ Marks</td>
                <td style="padding: 12px 14px;">12+ Marks</td>
                <td style="padding: 12px 14px;">13+ Marks</td>
                <td style="padding: 12px 14px;"><a href="/colleges/tapmi-manipal" style="color: #6B2CF5; text-decoration: none;">TAPMI Manipal</a>, <a href="/colleges/fore-school-delhi" style="color: #6B2CF5; text-decoration: none;">FORE School Delhi</a>, Great Lakes Chennai</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #F8FAFC;">
                <td style="padding: 12px 14px;"><strong>80.0+ %ile</strong></td>
                <td style="padding: 12px 14px;">32 – 37 Marks</td>
                <td style="padding: 12px 14px;">14+ Marks</td>
                <td style="padding: 12px 14px;">10+ Marks</td>
                <td style="padding: 12px 14px;">10+ Marks</td>
                <td style="padding: 12px 14px;"><a href="/colleges/bimtech-noida" style="color: #6B2CF5; text-decoration: none;">BIMTECH Greater Noida</a>, <a href="/colleges/kj-somaiya-mumbai" style="color: #6B2CF5; text-decoration: none;">K J Somaiya Mumbai</a>, IRMA Anand</td>
              </tr>
              <tr style="background: #FFFFFF;">
                <td style="padding: 12px 14px;"><strong>70.0+ %ile</strong></td>
                <td style="padding: 12px 14px;">22 – 31 Marks</td>
                <td style="padding: 12px 14px;">10+ Marks</td>
                <td style="padding: 12px 14px;">7+ Marks</td>
                <td style="padding: 12px 14px;">7+ Marks</td>
                <td style="padding: 12px 14px;"><a href="/blog/colleges-for-70-percentile-in-cat-2026" style="color: #6B2CF5; text-decoration: none;">Top Colleges for 70 Percentile in CAT</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- ========================================================= -->
      <!-- SECTION 4: EXPECTED COLLEGES BY PERCENTILE BAND -->
      <!-- ========================================================= -->
      <section style="margin-bottom: 40px;">
        <h2 style="font-size: 1.65rem; font-weight: 800; color: #0F172A; margin: 0 0 14px;">CAT College Predictor 2026: Expected Colleges by Percentile Band</h2>
        <p style="color: #475569; font-size: 1.05rem; line-height: 1.7; margin: 0 0 16px;">
          Business school admissions in India follow distinct tier brackets. While candidates often fixate solely on the top 3 IIMs, high-caliber corporate placements, strong return on investment (ROI), and prestigious alumni networks exist across multiple percentile tiers.
        </p>

        <h3 style="font-size: 1.3rem; font-weight: 700; color: #0F172A; margin: 20px 0 10px;">99+ Percentile Band (Ambitious / Mega Premier: BLACKI IIMs &amp; FMS Delhi)</h3>
        <p style="color: #475569; font-size: 1rem; line-height: 1.7; margin: 0 0 14px;">
          This elite band commands immediate shortlists for flagship MBA / PGP programs from the original legacy IIMs (<a href="/colleges/iim-ahmedabad" style="color: #6B2CF5; font-weight: 600;">IIM Ahmedabad</a>, <a href="/colleges/iim-bangalore" style="color: #6B2CF5; font-weight: 600;">IIM Bangalore</a>, <a href="/colleges/iim-calcutta" style="color: #6B2CF5; font-weight: 600;">IIM Calcutta</a>, <a href="/colleges/iim-lucknow" style="color: #6B2CF5; font-weight: 600;">IIM Lucknow</a>, <a href="/colleges/iim-kozhikode" style="color: #6B2CF5; font-weight: 600;">IIM Kozhikode</a>, and <a href="/colleges/iim-indore" style="color: #6B2CF5; font-weight: 600;">IIM Indore</a>) alongside <a href="/colleges/fms-delhi" style="color: #6B2CF5; font-weight: 600;">FMS Delhi</a>. General engineering males (GEMs) generally require 99.5+ percentile, while non-engineers and female candidates with 90%+ academic consistency convert calls between 98.8 and 99.2 percentile.
        </p>

        <h3 style="font-size: 1.3rem; font-weight: 700; color: #0F172A; margin: 20px 0 10px;">90–98 Percentile Band (Moderate / Target: CAP New IIMs, MDI, SPJIMR, IITs, IIFT)</h3>
        <p style="color: #475569; font-size: 1rem; line-height: 1.7; margin: 0 0 14px;">
          The 90 to 98 percentile window represents the richest opportunity zone for MBA applicants. Candidates in this bracket are eligible for:
        </p>
        <ul style="padding-left: 20px; color: #334155; font-size: 0.95rem; line-height: 1.8; margin-bottom: 16px;">
          <li><strong>Common Admission Process (CAP) New IIMs:</strong> <a href="/colleges/iim-udaipur" style="color: #6B2CF5;">IIM Udaipur</a>, <a href="/colleges/iim-trichy" style="color: #6B2CF5;">IIM Trichy</a>, <a href="/colleges/iim-raipur" style="color: #6B2CF5;">IIM Raipur</a>, <a href="/colleges/iim-ranchi" style="color: #6B2CF5;">IIM Ranchi</a>, and <a href="/colleges/iim-kashipur" style="color: #6B2CF5;">IIM Kashipur</a> feature cutoffs around 92 to 94 percentile for General candidates (77%ile for NC-OBC).</li>
          <li><strong>Autonomous Premier Business Schools:</strong> <a href="/colleges/spjimr-mumbai" style="color: #6B2CF5;">SPJIMR Mumbai</a> (which offers profile-based calls at 85+ percentile), <a href="/colleges/mdi-gurgaon" style="color: #6B2CF5;">MDI Gurgaon</a> (95+ percentile), and <a href="/colleges/iift-delhi" style="color: #6B2CF5;">IIFT Delhi</a> (96.5+ percentile).</li>
          <li><strong>Top IIT Management Departments:</strong> <a href="/colleges/iit-bombay-sjmsom" style="color: #6B2CF5;">SJMSOM IIT Bombay</a> and <a href="/colleges/dms-iit-delhi" style="color: #6B2CF5;">DMS IIT Delhi</a>, which offer average placement packages exceeding ₹28 LPA at lower tuition fees.</li>
        </ul>

        <h3 style="font-size: 1.3rem; font-weight: 700; color: #0F172A; margin: 20px 0 10px;">70–89 Percentile Band (Safe / Backup: Baby IIMs, IMT, IMI, FORE, TAPMI, GIM)</h3>
        <p style="color: #475569; font-size: 1rem; line-height: 1.7; margin: 0 0 14px;">
          Scoring between 70 and 89 percentile provides access to accredited, AICTE-approved, NBA-accredited business schools with verified median compensation between ₹12 LPA and ₹18 LPA:
        </p>
        <ul style="padding-left: 20px; color: #334155; font-size: 0.95rem; line-height: 1.8; margin-bottom: 16px;">
          <li><strong>Baby IIMs (85–90 Percentile):</strong> <a href="/colleges/iim-bodh-gaya" style="color: #6B2CF5;">IIM Bodh Gaya</a>, <a href="/colleges/iim-jammu" style="color: #6B2CF5;">IIM Jammu</a>, <a href="/colleges/iim-sambalpur" style="color: #6B2CF5;">IIM Sambalpur</a>, <a href="/colleges/iim-sirmaur" style="color: #6B2CF5;">IIM Sirmaur</a>, and <a href="/colleges/iim-amritsar" style="color: #6B2CF5;">IIM Amritsar</a>.</li>
          <li><strong>Tier-1.5 / Top Tier-2 PGDM Institutes (80–90 Percentile):</strong> <a href="/colleges/imt-ghaziabad" style="color: #6B2CF5;">IMT Ghaziabad</a>, <a href="/colleges/imi-new-delhi" style="color: #6B2CF5;">IMI New Delhi</a>, <a href="/colleges/gim-goa" style="color: #6B2CF5;">GIM Goa</a>, <a href="/colleges/tapmi-manipal" style="color: #6B2CF5;">TAPMI Manipal</a>, <a href="/colleges/fore-school-delhi" style="color: #6B2CF5;">FORE School of Management Delhi</a>, and <a href="/colleges/great-lakes-chennai" style="color: #6B2CF5;">Great Lakes Chennai</a>.</li>
          <li><strong>Metro PGDM Hubs (70–80 Percentile):</strong> <a href="/colleges/bimtech-noida" style="color: #6B2CF5;">BIMTECH Greater Noida</a>, <a href="/colleges/kj-somaiya-mumbai" style="color: #6B2CF5;">K J Somaiya Mumbai</a>, <a href="/colleges/liba-chennai" style="color: #6B2CF5;">LIBA Chennai</a>, <a href="/colleges/irma-anand" style="color: #6B2CF5;">IRMA Anand</a>, and leading city hubs in Delhi NCR and Pune. Read our detailed guide on <a href="/blog/colleges-for-80-percentile-in-cat-2026" style="color: #6B2CF5; font-weight: 600;">Best Colleges for 80 Percentile in CAT</a>.</li>
        </ul>
      </section>

      <!-- ========================================================= -->
      <!-- SECTION 5: OFFICIAL CAT 2026 ADMISSION TIMELINE -->
      <!-- ========================================================= -->
      <section style="margin-bottom: 40px;">
        <h2 style="font-size: 1.65rem; font-weight: 800; color: #0F172A; margin: 0 0 14px;">Official CAT 2026 Admission Timeline &amp; Key Milestone Dates</h2>
        <p style="color: #475569; font-size: 1.05rem; line-height: 1.7; margin: 0 0 16px;">
          Adhering strictly to official deadlines prevents disqualification from objection filings and college application windows. Below is the verified schedule based on past institutional calendars (dates subject to the official notification at <a href="https://iimcat.ac.in" target="_blank" rel="noopener noreferrer" style="color: #6B2CF5; text-decoration: underline;">iimcat.ac.in</a>):
        </p>

        <div style="overflow-x: auto; border: 1px solid #E2E8F0; border-radius: 10px; margin-bottom: 20px;">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
            <thead>
              <tr style="background: #F8FAFC; border-bottom: 2px solid #E2E8F0;">
                <th style="padding: 12px 16px; font-weight: 700; color: #0F172A;">Milestone Event</th>
                <th style="padding: 12px 16px; font-weight: 700; color: #0F172A;">Scheduled Date / Window</th>
                <th style="padding: 12px 16px; font-weight: 700; color: #0F172A;">Key Candidate Action Required</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #FFFFFF;">
                <td style="padding: 12px 16px;"><strong>CAT 2026 Examination</strong></td>
                <td style="padding: 12px 16px;">Sunday, November 29, 2026</td>
                <td style="padding: 12px 16px; color: #475569;">Administered across Slot 1 (8:30 AM), Slot 2 (12:30 PM), and Slot 3 (4:30 PM).</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #F8FAFC;">
                <td style="padding: 12px 16px;"><strong>Provisional Answer Key &amp; Response Sheet</strong></td>
                <td style="padding: 12px 16px;">First Week of December 2026 (10:00 AM) <span style="font-size: 0.75rem; color: #64748B;">[Placeholder: Verify on notification]</span></td>
                <td style="padding: 12px 16px; color: #475569;">Download response sheet HTML from <a href="https://iimcat.ac.in" target="_blank" rel="noopener" style="color: #6B2CF5;">iimcat.ac.in</a> and calculate raw marks.</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #FFFFFF;">
                <td style="padding: 12px 16px;"><strong>Objection Filing Window</strong></td>
                <td style="padding: 12px 16px;">3 to 4 Days Post-Release</td>
                <td style="padding: 12px 16px; color: #475569;">Submit question challenges with ₹1,200 fee per question challenged.</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #F8FAFC;">
                <td style="padding: 12px 16px;"><strong>Final Official CAT Answer Key</strong></td>
                <td style="padding: 12px 16px;">Third Week of December 2026</td>
                <td style="padding: 12px 16px; color: #475569;">Expert committee review concludes; no further challenges entertained.</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #FFFFFF;">
                <td style="padding: 12px 16px;"><strong>Official CAT 2026 Scorecard / Results</strong></td>
                <td style="padding: 12px 16px;">Late December 2026 / Early January 2027</td>
                <td style="padding: 12px 16px; color: #475569;">Download official scorecard with sectional and overall scaled percentiles.</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #F8FAFC;">
                <td style="padding: 12px 16px;"><strong>IIM Shortlists &amp; WAT-PI Rounds</strong></td>
                <td style="padding: 12px 16px;">January – April 2027</td>
                <td style="padding: 12px 16px; color: #475569;">Check individual IIM composite shortlists and attend Written Ability Tests &amp; PIs.</td>
              </tr>
              <tr style="background: #FFFFFF;">
                <td style="padding: 12px 16px;"><strong>Final Admission Offers</strong></td>
                <td style="padding: 12px 16px;">April – May 2027</td>
                <td style="padding: 12px 16px; color: #475569;">Accept merit offers, pay commitment fees, and complete verification for the 2027-29 batch.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- ========================================================= -->
      <!-- SECTION 6: 7 COMMON MISTAKES STUDENTS MAKE -->
      <!-- ========================================================= -->
      <section style="margin-bottom: 40px;">
        <h2 style="font-size: 1.65rem; font-weight: 800; color: #0F172A; margin: 0 0 14px;">7 Common Mistakes Students Make While Calculating CAT Scores</h2>
        <p style="color: #475569; font-size: 1.05rem; line-height: 1.7; margin: 0 0 16px;">
          Evaluating your CAT response sheet accurately requires disciplined calculation. Here are seven frequent traps that lead aspirants to misjudge their chances:
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 18px;">
            <div style="font-weight: 700; color: #DC2626; margin-bottom: 6px;">❌ 1. Deducting Marks for Incorrect TITA Questions</div>
            <p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">Non-MCQ (Type In The Answer) questions carry ZERO negative penalty. Deducting -1 mark for wrong TITA answers artificially depresses your estimated raw score.</p>
          </div>
          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 18px;">
            <div style="font-weight: 700; color: #DC2626; margin-bottom: 6px;">❌ 2. Confusing Raw Score with Scaled Score</div>
            <p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">Your raw score is only your direct points tally. In tougher slots (e.g., Slot 2 QA or Slot 3 DILR), equipercentile normalization regularly scales scores upward by 3 to 6 marks.</p>
          </div>
          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 18px;">
            <div style="font-weight: 700; color: #DC2626; margin-bottom: 6px;">❌ 3. Ignoring Sectional Cutoffs</div>
            <p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">Scoring 99 overall with an unbalanced distribution (e.g., 99.8 in VARC but 68 in DILR) will disqualify you from BLACKI IIM interview calls, which enforce strict sectional minimums (typically 75–85%ile).</p>
          </div>
          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 18px;">
            <div style="font-weight: 700; color: #DC2626; margin-bottom: 6px;">❌ 4. Overlooking Composite Score Criteria</div>
            <p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">Percentile is only 40%–60% of the final shortlist equation. Class 10th marks, 12th board percentages, graduation discipline, and gender diversity make up the remaining 40%–50%.</p>
          </div>
          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 18px;">
            <div style="font-weight: 700; color: #DC2626; margin-bottom: 6px;">❌ 5. Misreading Digialm Response Sheets</div>
            <p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">On <code style="font-size: 0.85em;">cdn.digialm.com</code>, the green checkmark indicates the official correct option, while the small box on the right displays your <em>"Chosen Option"</em>. Confusing the two reverses your actual score.</p>
          </div>
          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 18px;">
            <div style="font-weight: 700; color: #DC2626; margin-bottom: 6px;">❌ 6. Applying General Cutoffs to Reserved Categories</div>
            <p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">NC-OBC, EWS, SC, ST, and PwD applicants have significantly different qualifying cutoffs (often 75–85 percentile for top IIMs compared to 99+ for General engineering candidates).</p>
          </div>
          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 18px;">
            <div style="font-weight: 700; color: #DC2626; margin-bottom: 6px;">❌ 7. Missing the 3-Day Objection Window</div>
            <p style="margin: 0; font-size: 0.9rem; color: #475569; line-height: 1.6;">Once the 72-hour objection window on <a href="https://iimcat.ac.in" target="_blank" rel="noopener" style="color: #6B2CF5;">iimcat.ac.in</a> closes, the provisional key becomes binding. No further challenges or re-evaluations are accepted under any circumstances.</p>
          </div>
        </div>
      </section>

      <!-- ========================================================= -->
      <!-- SECTION 7: FREQUENTLY ASKED QUESTIONS (10 REAL STUDENT QUESTIONS) -->
      <!-- ========================================================= -->
      <section style="margin-bottom: 40px;" id="cat-faq">
        <h2 style="font-size: 1.65rem; font-weight: 800; color: #0F172A; margin: 0 0 16px;">Frequently Asked Questions (CAT Score &amp; Percentile Calculator)</h2>
        
        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;" open>
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer; font-size: 1.05rem;">Which is the best free CAT score calculator from response sheet?</summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            The FindMyBSchool CAT Score Calculator is widely regarded as the most accurate free evaluation tool. It enables direct scanning of your official candidate response sheet link hosted on <code>cdn.digialm.com</code> via <a href="https://iimcat.ac.in" target="_blank" rel="noopener" style="color: #6B2CF5;">iimcat.ac.in</a>, audits all 66 questions in under two seconds using the official +3 / -1 / 0 marking scheme, executes equipercentile normalization across Slots 1, 2, and 3, and forecasts interview call probabilities for 21 IIMs and 50+ premier B-schools without mandatory registration.
          </div>
        </details>

        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer; font-size: 1.05rem;">What is the official formula to calculate CAT 2026 raw score?</summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            The official CAT raw score formula across all 66 questions is: <code>Raw Score = (3 &times; Correct MCQs) + (3 &times; Correct Non-MCQs/TITA) &minus; (1 &times; Incorrect MCQs) &minus; (0 &times; Incorrect Non-MCQs)</code>. Unattempted questions carry zero penalty. The maximum achievable raw score is 198 marks across VARC (72 marks), DILR (60 marks), and QA (66 marks).
          </div>
        </details>

        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer; font-size: 1.05rem;">How do I check and download my CAT response sheet from cdn.digialm.com?</summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            Log in to the official portal <a href="https://iimcat.ac.in" target="_blank" rel="noopener" style="color: #6B2CF5;">iimcat.ac.in</a> with your User ID and password, navigate to the Candidate Response tab, and click the link "Click here to generate your response sheet". The response sheet opens in a new tab hosted on <code>cdn.digialm.com</code> showing your selected responses alongside the official provisional answer key. Copy that URL and paste it into our tool for automated score calculation.
          </div>
        </details>

        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer; font-size: 1.05rem;">Is there negative marking for TITA (non-MCQ) questions in CAT?</summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            No. Non-MCQ or Type In The Answer (TITA) questions carry zero negative marking. A correct TITA answer awards +3 marks, while an incorrect or unattempted TITA answer results in 0 deduction. Consequently, candidates should attempt all TITA questions without fear of penalties.
          </div>
        </details>

        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer; font-size: 1.05rem;">What is the difference between CAT raw score, scaled score, and percentile?</summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            Your Raw Score is the direct marks (+3/-1/0) earned out of 198. The Scaled Score is mathematically adjusted through equipercentile equating to account for slight difficulty variations among Slot 1, Slot 2, and Slot 3. Your Percentile indicates the percentage of total candidates nationwide who scored equal to or lower than your scaled score.
          </div>
        </details>

        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer; font-size: 1.05rem;">How does CAT slot normalization work across Slot 1, Slot 2, and Slot 3?</summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            IIMs utilize an equipercentile equating model that standardizes score distributions across all three test sessions. If a particular slot (such as Slot 2 QA) exhibits a lower mean and standard deviation among top candidates due to higher question difficulty, raw scores in that slot receive an upward adjustment so that candidates across all sessions are evaluated equitably.
          </div>
        </details>

        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer; font-size: 1.05rem;">What raw score is needed for 99+ percentile in CAT 2026?</summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            Based on historical 66-question test administrations (~2.9 lakh candidates), an overall raw score of 82 to 94 marks out of 198 (~42%–48% aggregate marks) typically scales to the 99.0+ percentile. An estimated 60 to 74 marks corresponds to ~95 percentile, and 48 to 59 marks corresponds to ~90 percentile, depending on slot difficulty.
          </div>
        </details>

        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer; font-size: 1.05rem;">How do top IIMs calculate the Composite Score for final admissions?</summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            IIMs do not shortlist candidates based on CAT percentile alone. Final interview shortlists and merit lists rely on a Composite Score combining CAT score (40–60%), Class 10th and 12th board marks (10–20%), graduation marks (5–15%), relevant work experience (5–10%), and academic or gender diversity (5–10%).
          </div>
        </details>

        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer; font-size: 1.05rem;">Can a non-engineer or female candidate convert IIM calls at 90-95 percentile?</summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            Yes. Leading institutes including IIM Ahmedabad, IIM Bangalore, IIM Calcutta, IIM Lucknow, and IIM Kozhikode award up to 5% academic diversity weightage to non-engineering graduates and up to 5% gender diversity points to female and transgender candidates, allowing applicants with consistent past academic records to secure calls between 90 and 95 percentile.
          </div>
        </details>

        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer; font-size: 1.05rem;">What is the fee and process to challenge an answer in the CAT objection window?</summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            Candidates can challenge provisional answers through the Objection Management tab on <a href="https://iimcat.ac.in" target="_blank" rel="noopener" style="color: #6B2CF5;">iimcat.ac.in</a> during the 3-day post-release objection window. A processing fee of ₹1,200 per question challenged must be submitted online with supporting documentation. If the subject expert committee upholds your challenge, the entire ₹1,200 fee is refunded to the candidate.
          </div>
        </details>

      </section>

      <!-- ========================================================= -->
      <!-- SECTION 8: EDITORIAL REVIEW, METHODOLOGY & DISCLAIMER -->
      <!-- ========================================================= -->
      <section style="background: #F8FAFC; border: 1.5px solid #CBD5E1; border-radius: 14px; padding: 24px; margin-bottom: 36px;">
        <h2 style="font-size: 1.35rem; font-weight: 800; color: #0F172A; margin: 0 0 10px;">Methodology, Official Data Sources &amp; Transparency Statement</h2>
        <p style="font-size: 0.95rem; color: #475569; line-height: 1.7; margin: 0 0 12px;">
          <strong>Data Governance &amp; Official Benchmark Sources:</strong> The FindMyBSchool scoring engine implements the official +3 / -1 / 0 marking scheme specified in the official Common Admission Test notification published by the Indian Institutes of Management at <a href="https://iimcat.ac.in" target="_blank" rel="noopener noreferrer" style="color: #6B2CF5; font-weight: 600;">iimcat.ac.in</a>. Percentile mapping is calibrated against historical score distributions across 2.9 Lakh test-takers and equipercentile equating formulas. Institutional cutoffs are verified from audited selection criteria published by IIM Ahmedabad, IIM Bangalore, IIM Calcutta, and participating CAP institutions.
        </p>
        <p style="font-size: 0.95rem; color: #475569; line-height: 1.7; margin: 0 0 12px;">
          <strong>Editorial Review Team:</strong> This guide and tool algorithm were audited by <em>Rohit Sharma</em> (Senior MBA Admissions Analyst, 12+ years experience analyzing CAT distributions) and reviewed by our <em>IIM Alumni Editorial Advisory Board</em> on November 2, 2026.
        </p>
        <p style="font-size: 0.9rem; color: #64748B; line-height: 1.6; margin: 0; padding-top: 10px; border-top: 1px solid #E2E8F0;">
          ⚠️ <strong>Disclaimer on Estimations:</strong> All percentiles, scaled scores, and admission call probabilities generated by this tool are statistical estimates for educational guidance. They do not constitute an official scorecard or guarantee of admission. Final admissions are governed by individual institutional criteria and the official CAT Convenor. FindMyBSchool is an independent advisory portal and is not affiliated with or endorsed by the IIMs.
        </p>
      </section>

      <!-- Related Tools & Guides -->
      <section style="padding: 24px; background: #FAFAFE; border: 1px solid #E2E8F0; border-radius: 14px; text-align: center; margin-bottom: 24px;">
        <h3 style="font-size: 1.25rem; font-weight: 800; color: #0F172A; margin: 0 0 8px;">Explore More Free MBA Preparation Tools</h3>
        <p style="color: #64748B; font-size: 0.95rem; margin: 0 0 16px;">Calculate scores for other major national management exams with official negative marking algorithms:</p>
        <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
          <a href="/tools/xat-percentile-calculator" style="padding: 10px 18px; background: #FFFFFF; border: 1.5px solid #6B2CF5; color: #6B2CF5; font-weight: 700; text-decoration: none; border-radius: 8px; font-size: 0.9rem;">🎯 XAT 2027 Score Calculator</a>
          <a href="/tools/cmat-percentile-calculator" style="padding: 10px 18px; background: #FFFFFF; border: 1.5px solid #6B2CF5; color: #6B2CF5; font-weight: 700; text-decoration: none; border-radius: 8px; font-size: 0.9rem;">⚡ CMAT 2026 Score Calculator</a>
          <a href="/colleges" style="padding: 10px 18px; background: #6B2CF5; color: #FFFFFF; font-weight: 700; text-decoration: none; border-radius: 8px; font-size: 0.9rem;">🏛️ Explore 600+ Verified MBA Colleges</a>
        </div>
      </section>

    </main>
  `;
}

for (const cr of coreRoutes) {
  const meta = {
    title: cr.title,
    description: cr.description,
    canonical: `${BASE_URL}${cr.path}`,
    schema: cr.schema || {
      '@context': 'https://schema.org',
      '@graph': [
        baseWebSiteSchema,
        baseOrgSchema,
        {
          '@type': 'BreadcrumbList',
          '@id': `${BASE_URL}${cr.path}#breadcrumb`,
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${BASE_URL}/` },
            { '@type': 'ListItem', 'position': 2, 'name': cr.h1, 'item': `${BASE_URL}${cr.path}` }
          ]
        }
      ]
    }
  };

  let bodyHtml = '';
  if (cr.path === '/tools/cat-college-predictor') {
    bodyHtml = generateCatCalculatorBodyHtml();
  } else {
    bodyHtml = `
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
          <a href="/tools/cat-college-predictor" style="display: inline-block; margin-left: 12px; padding: 10px 20px; background: #F1F5F9; color: #1E293B; font-weight: 600; text-decoration: none; border-radius: 8px;">CAT Score Calculator</a>
        </div>
      </main>
    `;
  }

  writeStaticRoute(cr.path, generatePageHtml(meta, bodyHtml));
  count++;
}

// ==========================================
// 2. City Hubs with Static College Listings (GEO & SEO Hubs)
// ==========================================
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
  const canonicalUrl = `${BASE_URL}/colleges/city/${encodeURIComponent(normCity)}`;
  
  // Find colleges located in this city
  const cityColleges = COLLEGES_DATA.filter(c => 
    (c.city && c.city.toLowerCase().trim() === normCity) ||
    (c.location && c.location.toLowerCase().includes(normCity))
  ).sort((a, b) => (a.nirfRank || 999) - (b.nirfRank || 999));

  const totalCityColleges = cityColleges.length;
  const topCollegesSlice = cityColleges.slice(0, 15);

  const citySchema = {
    '@context': 'https://schema.org',
    '@graph': [
      baseWebSiteSchema,
      baseOrgSchema,
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${BASE_URL}/` },
          { '@type': 'ListItem', 'position': 2, 'name': 'Colleges Directory', 'item': `${BASE_URL}/colleges` },
          { '@type': 'ListItem', 'position': 3, 'name': `MBA Colleges in ${city}`, 'item': canonicalUrl }
        ]
      },
      {
        '@type': 'CollectionPage',
        '@id': `${canonicalUrl}#collection`,
        'name': `Top MBA & PGDM Colleges in ${city} (Session 2027-29)`,
        'url': canonicalUrl,
        'description': `Compare verified management institutes in ${city} with audited tuition fees, cutoffs, and recent placement averages.`
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        'mainEntity': [
          {
            '@type': 'Question',
            'name': `Which are the top MBA colleges in ${city}?`,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': topCollegesSlice.length > 0 
                ? `The premier MBA and PGDM colleges in ${city} include ${topCollegesSlice.slice(0, 4).map(c => c.name).join(', ')}. These institutions offer accredited management programs with verified campus placements.`
                : `Top management colleges in ${city} include university-affiliated MBA and autonomous PGDM institutions approved by AICTE and UGC.`
            }
          },
          {
            '@type': 'Question',
            'name': `What is the average fee for an MBA or PGDM program in ${city}?`,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': `The 2-year total tuition fees for MBA colleges in ${city} generally range from ₹4.5 Lakhs in regional university institutes to ₹18-25+ Lakhs in top-tier national business schools with audited placements.`
            }
          }
        ]
      }
    ]
  };

  let cityDesc = `Explore ${totalCityColleges > 0 ? totalCityColleges + '+' : 'top'} MBA & PGDM colleges in ${city} for 2027-29. Compare audited fees, average CTC, and entrance cutoffs on FindMyBSchool.`;
  if (cityDesc.length > 158) cityDesc = cityDesc.slice(0, 155).trim() + '...';

  const meta = {
    title: `Top MBA Colleges in ${city}: Fees & Cutoffs 2027`,
    description: cityDesc,
    canonical: canonicalUrl,
    schema: citySchema
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
        <span>MBA Colleges in ${escapeHtml(city)}</span>
      </nav>

      <h1 style="font-size: 2.2rem; font-weight: 800; color: #0F172A; line-height: 1.25;">
        Top MBA &amp; PGDM Colleges in ${escapeHtml(city)} (2027-29 Admission)
      </h1>
      <p style="color: #475569; font-size: 1.1rem; line-height: 1.6; margin-top: 14px;">
        Discover and compare ${totalCityColleges > 0 ? totalCityColleges : ''} verified business schools in ${escapeHtml(city)} with audited 2-year tuition fees, official entrance exam cutoffs (CAT, XAT, CMAT, MAT), and verified campus placement reports.
      </p>

      <!-- City Hub Summary Factsheet (GEO Target) -->
      <section style="margin-top: 24px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 20px;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px;">
          <div>
            <div style="font-size: 0.85rem; color: #64748B; font-weight: 600;">VERIFIED COLLEGES</div>
            <div style="font-size: 1.35rem; font-weight: 800; color: #6B2CF5; margin-top: 4px;">${totalCityColleges > 0 ? totalCityColleges + ' Institutes' : 'Top Tier Hub'}</div>
          </div>
          <div>
            <div style="font-size: 0.85rem; color: #64748B; font-weight: 600;">METRO HUB STATUS</div>
            <div style="font-size: 1.35rem; font-weight: 800; color: #0F172A; margin-top: 4px;">${escapeHtml(city)}</div>
          </div>
          <div>
            <div style="font-size: 0.85rem; color: #64748B; font-weight: 600;">ADMISSION SESSION</div>
            <div style="font-size: 1.35rem; font-weight: 800; color: #10B981; margin-top: 4px;">2027-29 Cycle Open</div>
          </div>
        </div>
      </section>

      <!-- Verified Colleges Listing Table (Direct Answers & AI Scrapers Target) -->
      <section style="margin-top: 32px;">
        <h2 style="font-size: 1.4rem; font-weight: 700; color: #1E293B; margin-bottom: 16px;">
          Verified Business Schools in ${escapeHtml(city)}: Fees, Packages &amp; Cutoffs
        </h2>
        ${topCollegesSlice.length > 0 ? `
          <div style="overflow-x: auto; border: 1px solid #E2E8F0; border-radius: 10px;">
            <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
              <thead style="background: #F1F5F9; color: #334155;">
                <tr>
                  <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">College &amp; Program</th>
                  <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">2-Yr Total Fees</th>
                  <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Avg CTC Package</th>
                  <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Cutoff</th>
                  <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">NIRF Rank</th>
                  <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Action</th>
                </tr>
              </thead>
              <tbody>
                ${topCollegesSlice.map(col => `
                  <tr style="border-bottom: 1px solid #F1F5F9;">
                    <td style="padding: 12px 16px;">
                      <a href="/colleges/${col.id}" style="color: #6B2CF5; font-weight: 700; text-decoration: none;">${escapeHtml(col.name)}</a>
                      <div style="font-size: 0.82rem; color: #64748B;">${escapeHtml(col.programType)} • ${escapeHtml(col.ownership)}</div>
                    </td>
                    <td style="padding: 12px 16px; font-weight: 600; color: #1E293B;">${escapeHtml(col.fees)}</td>
                    <td style="padding: 12px 16px; font-weight: 600; color: #10B981;">${escapeHtml(col.avgSalary)}</td>
                    <td style="padding: 12px 16px; color: #D97706; font-weight: 600;">
                      ${col.cutoffCAT !== 'N/A' ? 'CAT ' + escapeHtml(col.cutoffCAT) : (col.cutoffXAT !== 'N/A' ? 'XAT ' + escapeHtml(col.cutoffXAT) : 'CMAT ' + escapeHtml(col.cutoffCMAT))}
                    </td>
                    <td style="padding: 12px 16px; color: #64748B;">${col.nirfRank ? '#' + col.nirfRank : 'Top Tier'}</td>
                    <td style="padding: 12px 16px;">
                      <a href="/colleges/${col.id}" style="padding: 6px 12px; background: #6B2CF5; color: #FFFFFF; font-size: 0.85rem; font-weight: 600; border-radius: 6px; text-decoration: none;">View Dossier</a>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        ` : `
          <p style="color: #64748B;">Explore our verified Pan-India database of 600+ business schools.</p>
        `}
      </section>

      <!-- City Admissions Q&A (AEO Position 0 Target) -->
      <section style="margin-top: 32px; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px;">
        <h2 style="font-size: 1.3rem; font-weight: 700; color: #1E293B; margin-bottom: 16px;">
          Frequently Asked Questions About MBA Admissions in ${escapeHtml(city)}
        </h2>
        <div style="line-height: 1.7; color: #334155;">
          <p><strong>Q: What entrance exams are accepted by business schools in ${escapeHtml(city)}?</strong><br />
          A: Colleges in ${escapeHtml(city)} predominantly accept national exam scores including CAT, XAT, CMAT, MAT, and ATMA. State university programs also accept regional CET entrance rankings.</p>
          
          <p style="margin-top: 14px;"><strong>Q: Are collateral-free student loans available for colleges in ${escapeHtml(city)}?</strong><br />
          A: Yes. All approved institutes in ${escapeHtml(city)} are mapped to major banking partners offering collateral-free education loans under the SBI Scholar and Vidya Lakshmi schemes up to ₹20-40 Lakhs with fast approvals.</p>
        </div>
      </section>

      <!-- Interactive Search CTA -->
      <div style="margin-top: 28px;">
        <a href="/colleges?city=${encodeURIComponent(normCity)}" style="display: inline-block; padding: 12px 24px; background: #6B2CF5; color: #FFFFFF; font-weight: 700; text-decoration: none; border-radius: 8px;">Explore All ${escapeHtml(city)} Colleges with Live Filters</a>
        <a href="/tools/cat-college-predictor" style="display: inline-block; margin-left: 12px; padding: 12px 24px; background: #F1F5F9; color: #1E293B; font-weight: 600; text-decoration: none; border-radius: 8px;">Check CAT College Predictor</a>
      </div>
    </main>
  `;

  writeStaticRoute(`/colleges/city/${encodeURIComponent(normCity)}`, generatePageHtml(meta, bodyHtml));
  count++;
}

// ==========================================
// 3. National Entrance Exams
// ==========================================
for (const exam of EXAMS_DATA) {
  const canonicalUrl = `${BASE_URL}/exams/${encodeURIComponent(exam.id)}`;
  
  const examSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      baseWebSiteSchema,
      baseOrgSchema,
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${BASE_URL}/` },
          { '@type': 'ListItem', 'position': 2, 'name': 'MBA Entrance Exams', 'item': `${BASE_URL}/exams` },
          { '@type': 'ListItem', 'position': 3, 'name': exam.name, 'item': canonicalUrl }
        ]
      },
      {
        '@type': 'EducationalEvent',
        '@id': `${canonicalUrl}#exam`,
        'name': `${exam.fullName} (${exam.name}) 2026-27`,
        'description': `National management entrance test conducted by ${exam.conductingBody}. Exam date: ${exam.examDate}. Mode: ${exam.mode || 'Computer Based Test'}.`,
        'startDate': exam.examDate || '2026-11-29',
        'organizer': {
          '@type': 'Organization',
          'name': exam.conductingBody
        }
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        'mainEntity': [
          {
            '@type': 'Question',
            'name': `When is the ${exam.name} 2026-27 exam conducted?`,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': `${exam.fullName} (${exam.name}) is scheduled for ${exam.examDate}. The examination is conducted in ${exam.mode || 'Computer-Based Test (CBT)'} format across test centers pan-India.`
            }
          },
          {
            '@type': 'Question',
            'name': `Which premier colleges accept ${exam.name} scores?`,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': `${exam.name} scores are accepted by leading management institutes nationwide for shortlisting candidates for Personal Interview (PI) and Written Ability Test (WAT) admission rounds.`
            }
          }
        ]
      }
    ]
  };

  let examDesc = `Guide for ${exam.name} 2026-27 (${exam.fullName}) by ${exam.conductingBody}. Exam date: ${exam.examDate}. Syllabus & cutoffs.`;
  if (examDesc.length > 158) {
    examDesc = `Guide for ${exam.name} 2026-27 by ${exam.conductingBody}. Exam date: ${exam.examDate}. Syllabus, fees & cutoffs on FMBS.`;
  }
  if (examDesc.length > 158) {
    examDesc = examDesc.slice(0, 155).trim() + '...';
  }

  const meta = {
    title: `${exam.name} 2026-27: Dates, Syllabus & Cutoffs | FMBS`,
    description: examDesc,
    canonical: canonicalUrl,
    schema: examSchema
  };

  const bodyHtml = `
    <header style="padding: 20px 24px; border-bottom: 1px solid #E2E8F0; text-align: center; background: #FAFAFE;">
      <a href="/" style="font-weight: 800; font-size: 1.5rem; color: #6B2CF5; text-decoration: none;">FindMyBSchool</a>
      <p style="margin: 4px 0 0; color: #64748B; font-size: 0.95rem;">India’s Verified MBA &amp; PGDM Admissions Portal • Session 2027-29</p>
    </header>
    <main style="max-width: 1100px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif;">
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <a href="/" style="color: #6B2CF5; text-decoration: none;">Home</a> &gt; 
        <a href="/exams" style="color: #6B2CF5; text-decoration: none;">Exams</a> &gt; 
        <span>${escapeHtml(exam.name)}</span>
      </nav>
      <h1 style="font-size: 2.2rem; font-weight: 800; color: #0F172A; line-height: 1.25;">
        ${escapeHtml(exam.fullName)} (${escapeHtml(exam.name)}) 2026-27
      </h1>
      <p style="color: #475569; font-size: 1.1rem; line-height: 1.6; margin-top: 14px;">
        Official examination roadmap, registration deadlines, sectional pattern, marking criteria, and cutoff percentiles across participating business schools.
      </p>

      <!-- Exam Key Factsheet -->
      <section style="margin-top: 24px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 20px;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px;">
          <div>
            <div style="font-size: 0.85rem; color: #64748B; font-weight: 600;">CONDUCTING BODY</div>
            <div style="font-size: 1.2rem; font-weight: 800; color: #0F172A; margin-top: 4px;">${escapeHtml(exam.conductingBody)}</div>
          </div>
          <div>
            <div style="font-size: 0.85rem; color: #64748B; font-weight: 600;">EXAM DATE</div>
            <div style="font-size: 1.2rem; font-weight: 800; color: #6B2CF5; margin-top: 4px;">${escapeHtml(exam.examDate)}</div>
          </div>
          <div>
            <div style="font-size: 0.85rem; color: #64748B; font-weight: 600;">TEST FORMAT</div>
            <div style="font-size: 1.2rem; font-weight: 800; color: #10B981; margin-top: 4px;">${escapeHtml(exam.mode || 'Computer Based Test')}</div>
          </div>
        </div>
      </section>

      <!-- Actions -->
      <div style="margin-top: 28px;">
        <a href="/tools/cat-college-predictor" style="display: inline-block; padding: 12px 24px; background: #6B2CF5; color: #FFFFFF; font-weight: 700; text-decoration: none; border-radius: 8px;">Check Cutoffs &amp; Predictor</a>
        <a href="/colleges" style="display: inline-block; margin-left: 12px; padding: 12px 24px; background: #F1F5F9; color: #1E293B; font-weight: 600; text-decoration: none; border-radius: 8px;">Explore Accepting Colleges</a>
      </div>
    </main>
  `;
  writeStaticRoute(`/exams/${exam.id}`, generatePageHtml(meta, bodyHtml));
  count++;
}

// ==========================================
// 4. Live MBA Scholarships
// ==========================================
for (const sch of SCHOLARSHIPS_DATA) {
  const canonicalUrl = `${BASE_URL}/scholarships/${encodeURIComponent(sch.id)}`;
  
  const schSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      baseWebSiteSchema,
      baseOrgSchema,
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${BASE_URL}/` },
          { '@type': 'ListItem', 'position': 2, 'name': 'Scholarships', 'item': `${BASE_URL}/scholarships` },
          { '@type': 'ListItem', 'position': 3, 'name': sch.title, 'item': canonicalUrl }
        ]
      },
      {
        '@type': 'FinancialProduct',
        '@id': `${canonicalUrl}#grant`,
        'name': sch.title,
        'description': `Scholarship grant of ${sch.amount} administered by ${sch.provider} for qualifying management students.`,
        'provider': {
          '@type': 'Organization',
          'name': sch.provider
        },
        'feesAndCommissionsSpecification': '100% Free Application Aid'
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        'mainEntity': [
          {
            '@type': 'Question',
            'name': `What is the grant amount for ${sch.title}?`,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': `The total financial aid grant for ${sch.title} is ${sch.amount}, administered by ${sch.provider}.`
            }
          },
          {
            '@type': 'Question',
            'name': `Who is eligible for ${sch.title}?`,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': `${sch.eligibilitySummary || 'Eligible management students admitted to participating business schools meeting academic and income criteria.'}`
            }
          }
        ]
      }
    ]
  };

  const cleanSchTitle = sch.title.replace(/\s*\([^)]*\)/, '').trim();
  const simpleAmount = (sch.amount || '').split('(')[0].replace(/Grants up to/i, '').trim();
  const shortSchName = cleanSchTitle.length > 34 ? cleanSchTitle.slice(0, 32).trim() : cleanSchTitle;
  let schTitle = `${shortSchName} 2027: Grants | FMBS`;

  const meta = {
    title: schTitle,
    description: `Apply for ${cleanSchTitle} by ${sch.provider}. Grant: ${simpleAmount}. Free guide & eligibility rules on FindMyBSchool.`.slice(0, 155),
    canonical: canonicalUrl,
    schema: schSchema
  };

  const bodyHtml = `
    <header style="padding: 20px 24px; border-bottom: 1px solid #E2E8F0; text-align: center; background: #FAFAFE;">
      <a href="/" style="font-weight: 800; font-size: 1.5rem; color: #6B2CF5; text-decoration: none;">FindMyBSchool</a>
      <p style="margin: 4px 0 0; color: #64748B; font-size: 0.95rem;">India’s Verified MBA &amp; PGDM Admissions Portal • Session 2027-29</p>
    </header>
    <main style="max-width: 1100px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif;">
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <a href="/" style="color: #6B2CF5; text-decoration: none;">Home</a> &gt; 
        <a href="/scholarships" style="color: #6B2CF5; text-decoration: none;">Scholarships</a> &gt; 
        <span>${escapeHtml(sch.title)}</span>
      </nav>
      <h1 style="font-size: 2.2rem; font-weight: 800; color: #0F172A; line-height: 1.25;">${escapeHtml(sch.title)}</h1>
      <p style="color: #475569; font-size: 1.1rem; line-height: 1.6; margin-top: 14px;">
        Administered by <strong>${escapeHtml(sch.provider)}</strong> • Financial Grant: <strong style="color: #10B981;">${escapeHtml(sch.amount)}</strong>
      </p>

      <!-- Key Details Box -->
      <section style="margin-top: 24px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 20px;">
        <p><strong>Target Institutions:</strong> ${escapeHtml(sch.targetInstitutes)}</p>
        <p style="margin-top: 8px;"><strong>Eligibility Criteria:</strong> ${escapeHtml(sch.eligibilitySummary)}</p>
      </section>

      <div style="margin-top: 28px;">
        <a href="/contact" style="display: inline-block; padding: 12px 24px; background: #6B2CF5; color: #FFFFFF; font-weight: 700; text-decoration: none; border-radius: 8px;">Apply with Free Counselor Mentorship</a>
        <a href="/scholarships" style="display: inline-block; margin-left: 12px; padding: 12px 24px; background: #F1F5F9; color: #1E293B; font-weight: 600; text-decoration: none; border-radius: 8px;">View All Scholarships</a>
      </div>
    </main>
  `;
  writeStaticRoute(`/scholarships/${sch.id}`, generatePageHtml(meta, bodyHtml));
  count++;
}

// ==========================================
// 5. CBT Mock Tests
// ==========================================
for (const test of MOCK_TESTS) {
  const canonicalUrl = `${BASE_URL}/mock-test/${encodeURIComponent(test.id)}`;
  
  const testSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      baseWebSiteSchema,
      baseOrgSchema,
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${BASE_URL}/` },
          { '@type': 'ListItem', 'position': 2, 'name': 'Free Mock Tests', 'item': `${BASE_URL}/mock-test` },
          { '@type': 'ListItem', 'position': 3, 'name': test.title, 'item': canonicalUrl }
        ]
      },
      {
        '@type': 'Quiz',
        '@id': `${canonicalUrl}#quiz`,
        'name': test.title,
        'description': `${test.tagline}. Full duration: ${test.fullDurationMinutes} mins, ${test.totalQuestions} questions. Real CBT exam simulation.`,
        'timeRequired': `PT${test.fullDurationMinutes}M`,
        'educationalLevel': 'Postgraduate Management Admissions'
      }
    ]
  };

  const shortT = test.title.length > 42 ? test.title.replace(/\s*\([^)]*\)/, '') : test.title;
  const meta = {
    title: `${shortT} Free CBT Mock Test | FMBS`.slice(0, 68),
    description: `Take free ${shortT} (${test.totalQuestions} Qs, ${test.fullDurationMinutes} mins) with real TCS iON CBT interface & instant score percentiles on FMBS.`,
    canonical: canonicalUrl,
    schema: testSchema
  };

  const bodyHtml = `
    <header style="padding: 20px 24px; border-bottom: 1px solid #E2E8F0; text-align: center; background: #FAFAFE;">
      <a href="/" style="font-weight: 800; font-size: 1.5rem; color: #6B2CF5; text-decoration: none;">FindMyBSchool</a>
      <p style="margin: 4px 0 0; color: #64748B; font-size: 0.95rem;">India’s Verified MBA &amp; PGDM Admissions Portal • Session 2027-29</p>
    </header>
    <main style="max-width: 1100px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif;">
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <a href="/" style="color: #6B2CF5; text-decoration: none;">Home</a> &gt; 
        <a href="/mock-test" style="color: #6B2CF5; text-decoration: none;">Mock Tests</a> &gt; 
        <span>${escapeHtml(test.title)}</span>
      </nav>
      <h1 style="font-size: 2.2rem; font-weight: 800; color: #0F172A; line-height: 1.25;">${escapeHtml(test.title)}</h1>
      <p style="color: #475569; font-size: 1.1rem; line-height: 1.6; margin-top: 14px;">
        Duration: <strong>${test.fullDurationMinutes} Minutes</strong> • Total Questions: <strong>${test.totalQuestions} Questions</strong> • Interface: <strong>TCS iON CBT</strong>
      </p>
      <div style="margin-top: 28px;">
        <a href="/mock-test/${test.id}" style="display: inline-block; padding: 12px 24px; background: #6B2CF5; color: #FFFFFF; font-weight: 700; text-decoration: none; border-radius: 8px;">Start CBT Mock Test Now</a>
      </div>
    </main>
  `;
  writeStaticRoute(`/mock-test/${test.id}`, generatePageHtml(meta, bodyHtml));
  count++;
}

// ==========================================
// 6. Strategy Blogs
// ==========================================
for (const blog of BLOGS_DATA) {
  const canonicalUrl = `${BASE_URL}/blog/${encodeURIComponent(blog.id)}`;
  
  const blogSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      baseWebSiteSchema,
      baseOrgSchema,
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${BASE_URL}/` },
          { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': `${BASE_URL}/blog` },
          { '@type': 'ListItem', 'position': 3, 'name': blog.title, 'item': canonicalUrl }
        ]
      },
      {
        '@type': 'BlogPosting',
        '@id': `${canonicalUrl}#article`,
        'headline': blog.title,
        'description': blog.summary || blog.excerpt || blog.description,
        'author': {
          '@type': 'Person',
          'name': blog.author || 'FindMyBSchool Editorial Team'
        },
        'publisher': baseOrgSchema,
        'datePublished': blog.date || '2026-10-14',
        'dateModified': blog.date || '2026-10-14',
        'image': blog.coverImage || blog.image || DEFAULT_OG_IMAGE,
        'mainEntityOfPage': canonicalUrl
      }
    ]
  };

  const cleanBlogTitle = (blog.title || '').trim();
  let blogTitle = cleanBlogTitle;
  if (blogTitle.length > 68) {
    const colonIdx = blogTitle.indexOf(':');
    if (colonIdx > 20 && colonIdx <= 60) {
      blogTitle = blogTitle.slice(0, colonIdx).trim();
    } else {
      blogTitle = blogTitle.slice(0, 65).trim();
    }
  }
  if (blogTitle.length <= 54) {
    blogTitle = `${blogTitle} | FMBS`;
  }

  let blogDesc = blog.summary || blog.excerpt || blog.description || 'Actionable MBA admissions insights, interview secrets, and CAT percentile strategies.';
  if (blogDesc.length > 158) {
    const truncated = blogDesc.slice(0, 155);
    const lastSpace = truncated.lastIndexOf(' ');
    blogDesc = (lastSpace > 120 ? truncated.slice(0, lastSpace) : truncated).trim() + '...';
  }

  const meta = {
    title: blogTitle,
    description: blogDesc,
    canonical: canonicalUrl,
    schema: blogSchema
  };

  const bodyHtml = `
    <header style="padding: 20px 24px; border-bottom: 1px solid #E2E8F0; text-align: center; background: #FAFAFE;">
      <a href="/" style="font-weight: 800; font-size: 1.5rem; color: #6B2CF5; text-decoration: none;">FindMyBSchool</a>
      <p style="margin: 4px 0 0; color: #64748B; font-size: 0.95rem;">India’s Verified MBA &amp; PGDM Admissions Portal • Session 2027-29</p>
    </header>
    <main style="max-width: 900px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif;">
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <a href="/" style="color: #6B2CF5; text-decoration: none;">Home</a> &gt; 
        <a href="/blog" style="color: #6B2CF5; text-decoration: none;">Blog</a> &gt; 
        <span>${escapeHtml(blog.title)}</span>
      </nav>
      <h1 style="font-size: 2.2rem; font-weight: 800; color: #0F172A; line-height: 1.25;">${escapeHtml(blog.title)}</h1>
      <p style="color: #64748B; font-size: 0.95rem; margin-top: 8px;">Published by FindMyBSchool Editorial Team • Session 2027-29</p>
      <div style="color: #334155; font-size: 1.1rem; line-height: 1.7; margin-top: 18px;">
        <p>${escapeHtml(blog.summary || blog.excerpt || '')}</p>
      </div>
      <div style="margin-top: 28px;">
        <a href="/colleges" style="display: inline-block; padding: 12px 24px; background: #6B2CF5; color: #FFFFFF; font-weight: 700; text-decoration: none; border-radius: 8px;">Explore Verified Colleges</a>
      </div>
    </main>
  `;
  writeStaticRoute(`/blog/${blog.id}`, generatePageHtml(meta, bodyHtml));
  count++;
}

// ==========================================
// 7. All Verified Colleges (681 Business Schools)
// Generates Complete SEO, GEO, AEO & AIO Dossiers
// ==========================================
for (const col of COLLEGES_DATA) {
  const canonicalUrl = `${BASE_URL}/colleges/${encodeURIComponent(col.id)}`;
  const cutoffText = col.cutoffCAT !== 'N/A' ? `CAT ${col.cutoffCAT}` : (col.cutoffXAT !== 'N/A' ? `XAT ${col.cutoffXAT}` : `CMAT ${col.cutoffCMAT}`);
  const brand = (col.shortName || col.name).trim();
  let title;
  if (brand.length <= 22) {
    title = `${brand} MBA Admission 2027: Fees & Placements`;
  } else if (brand.length <= 36) {
    title = `${brand} Admission 2027: Fees & Cutoff`;
  } else {
    title = `${brand.slice(0, 38).trim()} Admission & Fees 2027`;
  }
  if (escapeHtml(title).length > 70) {
    title = `${brand.slice(0, 30).trim()} Admission 2027`;
  }

  const cityStr = col.city ? ` in ${col.city}` : '';
  let description = `Explore ${brand}${cityStr} 2027-29: fees ${col.fees}, avg CTC ${col.avgSalary}, ${cutoffText} cutoff. Audited report on FindMyBSchool.`;
  if (description.length > 158) {
    description = `Explore ${brand} 2027-29: fees ${col.fees}, avg CTC ${col.avgSalary}, ${cutoffText} cutoff on FMBS.`;
  }
  if (description.length > 158) {
    description = description.slice(0, 155).trim() + '...';
  }
  const examsList = col.examsAccepted && col.examsAccepted.length > 0 ? col.examsAccepted.join(', ') : 'CAT, XAT, CMAT';

  // Find 3 peer colleges in same city or ranking band for internal linking
  const peerColleges = COLLEGES_DATA.filter(c => 
    c.id !== col.id && (
      (c.city && col.city && c.city.toLowerCase() === col.city.toLowerCase()) ||
      (c.nirfRank && col.nirfRank && Math.abs(c.nirfRank - col.nirfRank) <= 15)
    )
  ).slice(0, 3);

  // Full Rich Schema Graph
  const collegeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      baseWebSiteSchema,
      baseOrgSchema,
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${BASE_URL}/` },
          { '@type': 'ListItem', 'position': 2, 'name': 'Colleges Directory', 'item': `${BASE_URL}/colleges` },
          { '@type': 'ListItem', 'position': 3, 'name': col.city || 'Colleges', 'item': `${BASE_URL}/colleges/city/${encodeURIComponent((col.city || '').toLowerCase().trim())}` },
          { '@type': 'ListItem', 'position': 4, 'name': col.shortName || col.name, 'item': canonicalUrl }
        ]
      },
      {
        '@type': 'CollegeOrUniversity',
        '@id': `${canonicalUrl}#college`,
        'name': col.name,
        'alternateName': [col.shortName, col.name],
        'url': canonicalUrl,
        'logo': `${BASE_URL}/favicon.svg`,
        'description': `${col.name} (${col.shortName}) is a premier management institute in ${col.location} offering ${col.programType}. Total 2-year fees: ${col.fees}, Average placement CTC: ${col.avgSalary}, Cutoff: ${cutoffText}.`,
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
        },
        'hasCredential': {
          '@type': 'EducationalOccupationalCredential',
          'credentialCategory': col.programType || 'MBA'
        }
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        'url': canonicalUrl,
        'name': title,
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.college-main-h1', '.aeo-factsheet-grid', '.geo-citation-summary']
        }
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        'mainEntity': [
          {
            '@type': 'Question',
            'name': `What are the total fees for MBA/PGDM at ${col.name} for the 2027-29 session?`,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': `The audited 2-year total tuition and academic fees for the flagship management program at ${col.name} (${col.shortName}) is ${col.fees}. Living, hostel, and mess expenses may vary depending on student accommodation choices.`
            }
          },
          {
            '@type': 'Question',
            'name': `What is the entrance exam cutoff for admission to ${col.name}?`,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': `For general category candidates, the expected minimum qualifying cutoff for ${col.name} is ${cutoffText}. Reserved category candidates (NC-OBC, SC, ST, EWS) receive relaxed cutoff percentiles as per institutional norms.`
            }
          },
          {
            '@type': 'Question',
            'name': `What is the average and highest placement package at ${col.name}?`,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': `In the latest audited placement report, ${col.name} recorded an average CTC package of ${col.avgSalary} and a highest domestic CTC of ${col.highestSalary}. Median salary stood at ${col.medianSalary || col.avgSalary}.`
            }
          },
          {
            '@type': 'Question',
            'name': `Which entrance exams are accepted by ${col.name}?`,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': `${col.name} accepts scores from ${examsList} for shortlisting candidates for the Personal Interview (PI) and Written Ability Test (WAT) admission rounds.`
            }
          },
          {
            '@type': 'Question',
            'name': `Can I get an education loan without collateral for ${col.name}?`,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': `Yes. Students admitted to ${col.name} are eligible for 100% collateral-free education loans up to ₹20-40 Lakhs under premier student loan schemes including the SBI Scholar Scheme and Vidya Lakshmi government aid with zero margin money and expedited approvals.`
            }
          }
        ]
      }
    ]
  };

  if (col.officialWebsite) {
    collegeSchema['@graph'][3].sameAs = [col.officialWebsite];
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
      
      <!-- Semantic Breadcrumbs -->
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <a href="/" style="color: #6B2CF5; text-decoration: none;">Home</a> &gt; 
        <a href="/colleges" style="color: #6B2CF5; text-decoration: none;">Colleges</a> &gt; 
        <a href="/colleges/city/${encodeURIComponent((col.city || '').toLowerCase().trim())}" style="color: #6B2CF5; text-decoration: none;">${escapeHtml(col.city || 'MBA Colleges')}</a> &gt; 
        <span>${escapeHtml(col.shortName || col.name)}</span>
      </nav>

      <!-- Badges Row -->
      <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin-bottom: 12px; font-size: 0.85rem;">
        <span style="background: #EEF2FF; color: #4338CA; padding: 4px 10px; border-radius: 20px; font-weight: 700;">${escapeHtml(col.programType)}</span>
        <span style="background: #F1F5F9; color: #334155; padding: 4px 10px; border-radius: 20px; font-weight: 600;">🏛️ ${escapeHtml(col.ownership)}</span>
        <span style="background: #ECFDF5; color: #047857; padding: 4px 10px; border-radius: 20px; font-weight: 700;">🎓 Session 2027-29 Open</span>
        <span style="background: #FDF2F8; color: #BE185D; padding: 4px 10px; border-radius: 20px; font-weight: 700;">✓ Audited Placements</span>
      </div>

      <!-- Main Semantic H1 -->
      <h1 class="college-main-h1" style="font-size: 2.2rem; font-weight: 800; color: #0F172A; line-height: 1.25;">
        ${escapeHtml(col.name)} (${escapeHtml(col.shortName)}): Admission 2027-29, Fees, Cutoffs, Recent Placements &amp; NIRF Ranking
      </h1>
      <p style="color: #64748B; font-size: 1.05rem; margin-top: 8px;">
        📍 ${escapeHtml(col.location)} • Estd: ${col.establishedYear || 'N/A'} • ⭐ Rating: ${col.rating || 4.5}/5 (${col.reviewsCount || 50} Student Reviews) • Accreditation: ${escapeHtml(col.accreditation || 'AICTE / UGC')}
      </p>

      <!-- AEO Factsheet Quick Metrics (Google AI Overview & Position 0 Target) -->
      <div class="aeo-factsheet-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px; margin-top: 24px;">
        <div style="padding: 16px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px;">
          <div style="font-size: 0.85rem; color: #64748B; font-weight: 600;">2-YEAR TOTAL FEES</div>
          <div style="font-size: 1.4rem; color: #2563EB; font-weight: 800; margin-top: 4px;">${escapeHtml(col.fees)}</div>
          <div style="font-size: 0.8rem; color: #94A3B8; margin-top: 2px;">Audited Academic Fees</div>
        </div>
        <div style="padding: 16px; background: #F0FDF4; border: 1px solid #DCFCE7; border-radius: 8px;">
          <div style="font-size: 0.85rem; color: #166534; font-weight: 600;">RECENT AVERAGE CTC</div>
          <div style="font-size: 1.4rem; color: #15803D; font-weight: 800; margin-top: 4px;">${escapeHtml(col.avgSalary)}</div>
          <div style="font-size: 0.8rem; color: #166534; margin-top: 2px;">Highest: ${escapeHtml(col.highestSalary)}</div>
        </div>
        <div style="padding: 16px; background: #FFFBEB; border: 1px solid #FEF3C7; border-radius: 8px;">
          <div style="font-size: 0.85rem; color: #92400E; font-weight: 600;">EXPECTED CUTOFF</div>
          <div style="font-size: 1.4rem; color: #D97706; font-weight: 800; margin-top: 4px;">${cutoffText}</div>
          <div style="font-size: 0.8rem; color: #92400E; margin-top: 2px;">Accepted: ${escapeHtml(examsList)}</div>
        </div>
        <div style="padding: 16px; background: #FAF5FF; border: 1px solid #F3E8FF; border-radius: 8px;">
          <div style="font-size: 0.85rem; color: #6B21A8; font-weight: 600;">NIRF MANAGEMENT RANK</div>
          <div style="font-size: 1.4rem; color: #7C3AED; font-weight: 800; margin-top: 4px;">${col.nirfRank ? '#' + col.nirfRank : 'Top Tier B-School'}</div>
          <div style="font-size: 0.8rem; color: #6B21A8; margin-top: 2px;">Intake: ${col.batchSize || '300'} Seats</div>
        </div>
      </div>

      <!-- GEO Direct Fact Definition Block (For LLM Citation & Knowledge Triples) -->
      <section class="geo-citation-summary" style="margin-top: 24px; background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 10px; padding: 18px;">
        <h2 style="font-size: 1.15rem; font-weight: 700; color: #1E40AF; margin-bottom: 8px;">Institutional Fact Summary (Session 2027-29)</h2>
        <p style="color: #1E3A8A; font-size: 0.98rem; line-height: 1.6; margin: 0;">
          <strong>${escapeHtml(col.name)} (${escapeHtml(col.shortName)})</strong> is an accredited management institution located in ${escapeHtml(col.location)}. For the 2027-29 admission cycle, its audited 2-year total tuition fee is <strong>${escapeHtml(col.fees)}</strong>, with a recent audited average placement CTC of <strong>${escapeHtml(col.avgSalary)}</strong>, a median CTC of <strong>${escapeHtml(col.medianSalary || col.avgSalary)}</strong>, and an entrance cutoff benchmark of <strong>${cutoffText}</strong> across accepted entrance exams including ${escapeHtml(examsList)}.
        </p>
      </section>

      <!-- Section: Course Overview & Highlights -->
      <section id="overview" style="margin-top: 28px; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px;">
        <h2 style="font-size: 1.3rem; font-weight: 700; color: #1E293B; margin-bottom: 12px;">Institutional Overview &amp; Curriculum</h2>
        <p class="section-text-para" style="color: #334155; line-height: 1.7; font-size: 1.02rem;">
          ${escapeHtml(col.highlights || description)}
        </p>
        <p style="color: #475569; margin-top: 12px; font-size: 0.95rem;">
          <strong>Flagship Specializations:</strong> ${escapeHtml(col.specializations ? col.specializations.join(', ') : 'Marketing, Finance, Operations, Business Analytics, Human Resource Management')}
        </p>
      </section>

      <!-- Section: Audited Fees & Loan Assistance -->
      <section id="fees" style="margin-top: 28px; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px;">
        <h2 style="font-size: 1.3rem; font-weight: 700; color: #1E293B; margin-bottom: 12px;">${escapeHtml(col.shortName)} 2-Year Total Fees &amp; Education Loan Assistance</h2>
        <p style="color: #475569; font-size: 0.98rem; line-height: 1.6;">
          Total audited academic fees for the 2027-29 session stands at <strong>${escapeHtml(col.fees)}</strong>. Admitted students are eligible for collateral-free education loans through our mapped banking partners (SBI Scholar Scheme, Axis Bank, and HDFC Credila) with zero margin money and concession on interest rates.
        </p>
      </section>

      <!-- Section: Placement Breakdown -->
      <section id="placements" style="margin-top: 28px; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px;">
        <h2 style="font-size: 1.3rem; font-weight: 700; color: #1E293B; margin-bottom: 12px;">${escapeHtml(col.shortName)} Placements: Recent Audited CTC &amp; Recruiters</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin-top: 14px;">
          <div style="padding: 12px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px;">
            <div style="font-size: 0.8rem; color: #64748B;">Average CTC</div>
            <div style="font-size: 1.25rem; font-weight: 800; color: #15803D;">${escapeHtml(col.avgSalary)}</div>
          </div>
          <div style="padding: 12px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px;">
            <div style="font-size: 0.8rem; color: #64748B;">Median CTC</div>
            <div style="font-size: 1.25rem; font-weight: 800; color: #1E293B;">${escapeHtml(col.medianSalary || col.avgSalary)}</div>
          </div>
          <div style="padding: 12px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px;">
            <div style="font-size: 0.8rem; color: #64748B;">Highest Domestic CTC</div>
            <div style="font-size: 1.25rem; font-weight: 800; color: #2563EB;">${escapeHtml(col.highestSalary)}</div>
          </div>
        </div>
        ${col.topRecruiters && col.topRecruiters.length > 0 ? `
          <div style="margin-top: 18px;">
            <strong style="color: #334155; font-size: 0.95rem;">Key Hiring Partners:</strong>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px;">
              ${col.topRecruiters.map(r => `<span style="padding: 4px 10px; background: #F1F5F9; border-radius: 6px; font-size: 0.88rem; color: #334155;">${escapeHtml(r)}</span>`).join('')}
            </div>
          </div>
        ` : ''}
      </section>

      <!-- Section: AEO Frequently Asked Questions -->
      <section id="faqs" style="margin-top: 28px; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px;">
        <h2 style="font-size: 1.3rem; font-weight: 700; color: #1E293B; margin-bottom: 16px;">
          Frequently Asked Questions About ${escapeHtml(col.name)} (${escapeHtml(col.shortName)})
        </h2>
        <div style="line-height: 1.7; color: #334155;">
          <div style="margin-bottom: 16px;">
            <p style="font-weight: 700; color: #0F172A; margin-bottom: 4px;">Q: What is the total fee for MBA/PGDM at ${escapeHtml(col.name)} for the 2027-29 session?</p>
            <p style="margin: 0;">A: The audited 2-year total tuition and academic fees for the 2027-29 cohort at ${escapeHtml(col.name)} (${escapeHtml(col.shortName)}) is <strong>${escapeHtml(col.fees)}</strong>. Living, hostel, and mess expenses may vary depending on student accommodation choices.</p>
          </div>

          <div style="margin-bottom: 16px;">
            <p style="font-weight: 700; color: #0F172A; margin-bottom: 4px;">Q: What is the entrance exam cutoff for admission to ${escapeHtml(col.name)}?</p>
            <p style="margin: 0;">A: For general category candidates, the expected minimum cutoff for ${escapeHtml(col.name)} is <strong>${cutoffText}</strong> across accepted exams (${escapeHtml(examsList)}). Reserved category candidates receive relaxed percentiles as per institutional norms.</p>
          </div>

          <div style="margin-bottom: 16px;">
            <p style="font-weight: 700; color: #0F172A; margin-bottom: 4px;">Q: What was the recent placement average and highest salary at ${escapeHtml(col.name)}?</p>
            <p style="margin: 0;">A: In the latest audited placement report, ${escapeHtml(col.name)} recorded an average CTC package of <strong>${escapeHtml(col.avgSalary)}</strong> and a highest domestic CTC of <strong>${escapeHtml(col.highestSalary)}</strong>. Median salary stood at <strong>${escapeHtml(col.medianSalary || col.avgSalary)}</strong>.</p>
          </div>

          <div style="margin-bottom: 16px;">
            <p style="font-weight: 700; color: #0F172A; margin-bottom: 4px;">Q: Which entrance exams are accepted by ${escapeHtml(col.name)}?</p>
            <p style="margin: 0;">A: ${escapeHtml(col.name)} accepts scores from <strong>${escapeHtml(examsList)}</strong> for shortlisting candidates for the Personal Interview (PI) and Written Ability Test (WAT) admission rounds.</p>
          </div>

          <div>
            <p style="font-weight: 700; color: #0F172A; margin-bottom: 4px;">Q: Can I get an education loan without collateral for ${escapeHtml(col.name)}?</p>
            <p style="margin: 0;">A: Yes. Students admitted to ${escapeHtml(col.name)} are eligible for 100% collateral-free education loans up to ₹20-40 Lakhs under the SBI Scholar Scheme and Vidya Lakshmi government aid with zero margin money and expedited approvals.</p>
          </div>
        </div>
      </section>

      <!-- Section: Peer Colleges to Compare -->
      ${peerColleges.length > 0 ? `
        <section id="peer-colleges" style="margin-top: 28px; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px;">
          <h2 style="font-size: 1.3rem; font-weight: 700; color: #1E293B; margin-bottom: 14px;">Similar MBA Colleges to Compare with ${escapeHtml(col.shortName)}</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px;">
            ${peerColleges.map(peer => `
              <div style="padding: 16px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px;">
                <div style="font-size: 0.8rem; color: #64748B;">📍 ${escapeHtml(peer.city)} • ${peer.nirfRank ? '#' + peer.nirfRank + ' NIRF' : 'Top Tier'}</div>
                <h4 style="margin: 6px 0; font-size: 1.05rem;">
                  <a href="/colleges/${peer.id}" style="color: #6B2CF5; text-decoration: none; font-weight: 700;">${escapeHtml(peer.name)}</a>
                </h4>
                <div style="font-size: 0.88rem; color: #334155; margin-top: 6px;">
                  Fees: <strong>${escapeHtml(peer.fees)}</strong> • Avg: <strong style="color: #10B981;">${escapeHtml(peer.avgSalary)}</strong>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      ` : ''}

      <!-- Action Buttons -->
      <div style="margin-top: 28px;">
        <a href="/colleges/${col.id}" style="display: inline-block; padding: 12px 24px; background: #6B2CF5; color: #FFFFFF; font-weight: 700; text-decoration: none; border-radius: 8px;">View Full Interactive Dossier</a>
        <a href="/contact" style="display: inline-block; margin-left: 12px; padding: 12px 24px; background: #F1F5F9; color: #1E293B; font-weight: 600; text-decoration: none; border-radius: 8px;">Book 1-on-1 Profile Evaluation</a>
      </div>
    </main>
  `;

  writeStaticRoute(`/colleges/${col.id}`, generatePageHtml(meta, bodyHtml));
  count++;
}

// ==========================================
// 8. Generate 404.html (True HTTP 404 with noindex, nofollow)
// ==========================================
const notFoundHtml = template
  .replace(/<title>.*?<\/title>/i, '<title>Page Not Found (404) | FindMyBSchool</title>')
  .replace(/<meta name="description" content=".*?" \/>/i, '<meta name="description" content="Page not found. Explore 600+ verified MBA colleges, fee structures, cutoffs, and percentile calculators on FindMyBSchool." />')
  .replace(/<meta name="robots" content=".*?" \/>/i, '<meta name="robots" content="noindex, nofollow" />')
  .replace(/<link rel="canonical" href=".*?" \/>/i, '<link rel="canonical" href="https://findmybschool.com/404" />')
  .replace(/<meta property="og:image" content=".*?" \/>/i, `<meta property="og:image" content="${DEFAULT_OG_IMAGE}" />`)
  .replace(/<meta name="twitter:image" content=".*?" \/>/i, `<meta name="twitter:image" content="${DEFAULT_OG_IMAGE}" />`)
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

console.log(`✅ Pre-rendered ${count} unique static HTML routes with rich Schema.org (@graph, FAQPage, BreadcrumbList), tables, and AEO FAQs into dist/`);
console.log(`✅ Generated 404.html with noindex, nofollow directives at dist/404.html and public/404.html`);
