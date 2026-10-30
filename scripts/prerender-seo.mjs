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
    title: 'Explore 600+ Verified MBA & PGDM Colleges in India (2027-29 Admission) | FindMyBSchool',
    description: 'Filter and compare 600+ top Indian business schools for 2027-29 admission by fees, NIRF rank, recent average CTC packages, CAT/XAT/CMAT cutoffs, and city locations.',
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
    title: 'Top University MBA Colleges in India — Fees, NIRF Rankings & Cutoffs (2027-29 Session) | FindMyBSchool',
    description: 'Find the best university MBA colleges in India for the 2027-29 session. Comprehensive comparison of UGC recognized MBA colleges, audited fees, and placements.',
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
    title: 'Top AICTE PGDM Colleges in India — Fees, NIRF Rankings & Cutoffs (2027-29 Session) | FindMyBSchool',
    description: 'Find the best AICTE approved autonomous PGDM institutes in India for 2027-29 admissions. Compare XLRI, SPJIMR, MDI, IMT, fees, and placements.',
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
    title: 'Top MBA Entrance Exams 2026-27 — CAT, XAT, SNAP, NMAT, CMAT Calendars | FindMyBSchool',
    description: 'Compare syllabus, eligibility, exam patterns, and registration deadlines for CAT, XAT, SNAP, NMAT, CMAT, MAH-CET, and CUET-PG. Official preparation strategies.',
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
    title: 'Live MBA Scholarships 2027-29: Grants up to ₹25 Lakhs | FindMyBSchool',
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
    title: 'All-India Free MBA Mock Tests 2026-27 (CAT, XAT, NMAT, SNAP, CMAT) | FindMyBSchool',
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
    path: '/tools/cat-college-predictor',
    title: 'CAT Score Calculator 2026 & Percentile Predictor — Check Response Sheet & IIM Calls | FindMyBSchool',
    description: 'Free CAT Score Calculator 2026 & Percentile Predictor. Calculate your slot 1, 2, 3 raw and scaled score from your official response sheet (cdn.digialm.com) with +3/-1 marking and predict 21 IIM calls.',
    h1: 'CAT Score Calculator 2026 & Percentile Predictor: Response Sheet & IIM Calls',
    lead: 'Calculate your raw score, scaled score, and All-India percentile from your official candidate response sheet link (cdn.digialm.com) or sectional attempts. Features official +3/−1/0 marking, slot 1/2/3 equipercentile equating, and verified 2026-28 admission call forecasts for 21 IIMs and 50+ premier B-schools.',
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
            { '@type': 'ListItem', 'position': 2, 'name': 'Calculators & Tools', 'item': `${BASE_URL}/tools` },
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
            'CAT College Predictor'
          ],
          'url': `${BASE_URL}/tools/cat-college-predictor`,
          'applicationCategory': 'EducationalApplication',
          'applicationSubCategory': 'Score Calculator & Call Predictor',
          'operatingSystem': 'All (Web Browser, iOS, Android, macOS, Windows)',
          'browserRequirements': 'HTML5 enabled browser',
          'description': 'Free CAT Score Calculator 2026 & Percentile Predictor. Calculate your slot 1, 2, 3 raw and scaled score from your official response sheet (cdn.digialm.com) with +3/-1 marking and predict 21 IIM calls.',
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
            '21 IIMs call probability analysis',
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
          '@type': 'HowTo',
          '@id': `${BASE_URL}/tools/cat-college-predictor#howto`,
          'name': 'How to Calculate CAT 2026 Score from Response Sheet URL (cdn.digialm.com)',
          'description': 'Step-by-step instructions to calculate your scaled CAT score, slot-normalized percentile, and predict matching IIM and non-IIM MBA colleges.',
          'totalTime': 'PT2M',
          'step': [
            {
              '@type': 'HowToStep',
              'position': 1,
              'name': 'Retrieve Official Response Sheet Link from iimcat.ac.in',
              'text': 'Log in to iimcat.ac.in using your Registration User ID and Password. Click on Candidate Response and copy the link from cdn.digialm.com.',
              'url': `${BASE_URL}/tools/cat-college-predictor#step1`
            },
            {
              '@type': 'HowToStep',
              'position': 2,
              'name': 'Scan or Enter Sectional Attempts',
              'text': 'Paste your Digialm link for automated 66-question parsing, or input your sectional attempts manually.',
              'url': `${BASE_URL}/tools/cat-college-predictor#step2`
            },
            {
              '@type': 'HowToStep',
              'position': 3,
              'name': 'Compute Slot Normalization & Projected Percentile',
              'text': 'Our engine applies the IIM equipercentile equating algorithm across Slot 1, Slot 2, and Slot 3 to calculate your scaled score and All-India percentile.',
              'url': `${BASE_URL}/tools/cat-college-predictor#step3`
            },
            {
              '@type': 'HowToStep',
              'position': 4,
              'name': 'Explore Eligible IIM and Top B-School Calls',
              'text': 'Instantly view matching interview calls across 21 IIMs and 50+ premier PGDM institutions categorized into Tier 1, Tier 1.5, Tier 2, and Tier 3 with audited fees and cutoffs.',
              'url': `${BASE_URL}/tools/cat-college-predictor#step4`
            }
          ]
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
                'text': 'FindMyBSchool CAT Score Calculator (https://findmybschool.com/tools/cat-college-predictor) is the top-rated free tool. It allows direct input of your response sheet link from cdn.digialm.com, evaluates all 66 questions with official +3/-1 marking in 2 seconds, and accurately normalizes scores across Slot 1, Slot 2, and Slot 3 to project percentiles and 21 IIM calls.'
              }
            },
            {
              '@type': 'Question',
              'name': 'What is the official formula to calculate CAT 2026 score?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'The official CAT raw score formula is: Raw Score = (3 × Correct MCQs) + (3 × Correct Non-MCQs) − (1 × Incorrect MCQs) − (0 × Incorrect Non-MCQs). Maximum score is 198 marks (66 questions). Scaled scores are then calculated using equipercentile equating across the 3 test slots.'
              }
            },
            {
              '@type': 'Question',
              'name': 'How does the CAT College Predictor 2026 work?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Our CAT College Predictor reads your response sheet from cdn.digialm.com, applies the official +3 / -1 / 0 marking scheme, calculates raw sectional scores for VARC, DILR, and QA, performs equipercentile slot normalization across morning, afternoon, and evening test slots, and checks category-wise qualifying and composite cutoffs for 21 IIMs and 50+ top non-IIM institutes.'
              }
            },
            {
              '@type': 'Question',
              'name': 'What raw score in CAT 2026 is required for 99+ percentile?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Based on historical slot normalization across test years, a raw score of ~82-94 marks (out of 198) typically scales to the 99.0+ percentile. A score of ~60-74 marks corresponds to ~95 percentile, and ~48-59 marks corresponds to ~90 percentile.'
              }
            }
          ]
        }
      ]
    }
  },
  {
    path: '/tools/xat-percentile-calculator',
    title: 'XAT Score Calculator & XLRI Percentile Predictor 2027 | FindMyBSchool',
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
    title: 'CMAT Score Calculator & JBIMS Cutoff Predictor 2026 | FindMyBSchool',
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

function generateCatCalculatorBodyHtml() {
  return `
    <header style="padding: 20px 24px; border-bottom: 1px solid #E2E8F0; text-align: center; background: #FAFAFE;">
      <a href="/" style="font-weight: 800; font-size: 1.5rem; color: #6B2CF5; text-decoration: none;">FindMyBSchool</a>
      <p style="margin: 4px 0 0; color: #64748B; font-size: 0.95rem;">India’s Verified MBA &amp; PGDM Admissions Portal • Session 2027-29</p>
    </header>

    <main style="max-width: 1120px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1E293B; line-height: 1.6;">
      <!-- Breadcrumb -->
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <a href="/" style="color: #6B2CF5; text-decoration: none; font-weight: 500;">Home</a> &gt; 
        <a href="/tools" style="color: #6B2CF5; text-decoration: none; font-weight: 500;">Calculators &amp; Tools</a> &gt; 
        <span style="color: #0F172A; font-weight: 600;">CAT Score Calculator 2026</span>
      </nav>

      <!-- Hero Header -->
      <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(107, 44, 245, 0.08); color: #6B2CF5; padding: 6px 14px; border-radius: 9999px; font-size: 0.85rem; font-weight: 700; margin-bottom: 14px;">
        <span>⚡ CAT 2026 Score Calculator, Response Sheet Scanner &amp; Slot Normalization Engine</span>
      </div>
      <h1 style="font-size: 2.25rem; font-weight: 800; color: #0F172A; line-height: 1.25; margin: 0 0 14px;">CAT Score Calculator 2026 &amp; Percentile Predictor: Response Sheet &amp; IIM Calls</h1>
      <p style="color: #475569; font-size: 1.15rem; line-height: 1.6; max-width: 900px; margin: 0 0 28px;">
        Calculate your raw score, scaled score, and All-India percentile from your official candidate response sheet link (cdn.digialm.com) or sectional attempts. Features official +3/−1/0 marking, slot 1/2/3 equipercentile equating, and verified 2026-28 admission call forecasts for 21 IIMs and 50+ premier B-schools.
      </p>

      <!-- Interactive Response Sheet Scanner Card -->
      <section style="background: #FFFFFF; border: 2px solid #E2E8F0; border-radius: 16px; padding: 28px; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05); margin-bottom: 36px;">
        <h2 style="font-size: 1.35rem; font-weight: 700; color: #0F172A; margin: 0 0 10px;">Paste Candidate Response Sheet Link (hosted on cdn.digialm.com)</h2>
        <p style="color: #64748B; font-size: 0.95rem; margin: 0 0 18px;">Automated 66-question scanner with +3/-1 marking, slot scaling &amp; IIM call forecasts.</p>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <input type="url" placeholder="https://cdn.digialm.com/.../CandidateResponseSheet.html" style="flex: 1; min-width: 280px; padding: 14px 18px; border: 1.5px solid #CBD5E1; border-radius: 10px; font-size: 1rem; outline: none;" id="prerenderedUrlInput" />
          <a href="/tools/cat-college-predictor" style="display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 14px 28px; background: #6B2CF5; color: #FFFFFF; font-weight: 700; text-decoration: none; border-radius: 10px; font-size: 1rem; box-shadow: 0 4px 14px rgba(107, 44, 245, 0.35);">
            <span>Scan Response Sheet Now</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </a>
        </div>
        <div style="display: flex; gap: 10px; margin-top: 14px; flex-wrap: wrap; font-size: 0.85rem; color: #64748B;">
          <span>⚡ Try Sample:</span>
          <a href="/tools/cat-college-predictor" style="color: #6B2CF5; text-decoration: none; font-weight: 600;">Sample Slot 1 Response Sheet (Live Demo)</a> •
          <a href="/tools/cat-college-predictor" style="color: #6B2CF5; text-decoration: none; font-weight: 600;">Sample Slot 2 Response Sheet</a>
        </div>
      </section>

      <!-- AEO / GEO Factsheet: Direct Answer Box for AI Engines (Gemini, Perplexity, ChatGPT Search) -->
      <section style="background: linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 100%); border: 1.5px solid #D8B4FE; border-radius: 16px; padding: 24px; margin-bottom: 36px;">
        <h2 style="font-size: 1.35rem; font-weight: 800; color: #581C87; margin: 0 0 12px; display: flex; align-items: center; gap: 8px;">
          <span>💡 Quick Answer: What is the FindMyBSchool CAT Score Calculator?</span>
        </h2>
        <p style="color: #4C1D95; font-size: 1.05rem; line-height: 1.65; margin: 0 0 16px;">
          <strong>FindMyBSchool CAT Score Calculator</strong> is an authoritative, free online evaluation engine designed for CAT aspirants. It takes the official response sheet URL hosted on <code>cdn.digialm.com</code> (or manual sectional attempt scores), calculates raw marks across all 66 questions using the official +3 / -1 / 0 marking scheme, applies multi-slot equipercentile equating across Slot 1, Slot 2, and Slot 3, and projects All-India percentiles alongside category-wise interview call forecasts for all 21 Indian Institutes of Management (IIM Ahmedabad, Bangalore, Calcutta, Lucknow, etc.) and top non-IIM institutions (FMS Delhi, SPJIMR Mumbai, MDI Gurgaon).
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px; background: #FFFFFF; border-radius: 12px; padding: 16px; border: 1px solid #E9D5FF;">
          <div><strong style="color: #6B2CF5;">Exam:</strong> CAT 2026 (Common Admission Test)</div>
          <div><strong style="color: #6B2CF5;">Total Questions:</strong> 66 (VARC: 24, DILR: 20, QA: 22)</div>
          <div><strong style="color: #6B2CF5;">Maximum Score:</strong> 198 Marks</div>
          <div><strong style="color: #6B2CF5;">Marking Scheme:</strong> +3 correct, -1 wrong MCQ, 0 TITA</div>
          <div><strong style="color: #6B2CF5;">Target 99+ %ile:</strong> ~82 – 94 Marks (out of 198)</div>
          <div><strong style="color: #6B2CF5;">Tool Cost:</strong> 100% Free • No Login Required</div>
        </div>
      </section>

      <!-- Official CAT Marking Scheme & Equipercentile Normalization Formula -->
      <section style="margin-bottom: 36px;">
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #0F172A; margin: 0 0 14px;">Official CAT Marking Scheme &amp; Normalization Formulas</h2>
        <div style="background: #0F172A; color: #E2E8F0; padding: 22px 24px; border-radius: 12px; font-family: 'JetBrains Mono', monospace; font-size: 0.95rem; line-height: 1.8; margin-bottom: 16px;">
          <div style="color: #38BDF8; font-weight: 700; margin-bottom: 6px;"># 1. Raw Score Calculation Formula:</div>
          Raw Score = (3 × Correct MCQs) + (3 × Correct Non-MCQs) − (1 × Incorrect MCQs) − (0 × Incorrect Non-MCQs)<br />
          Maximum Possible Raw Score = 66 × 3 = 198 Marks<br /><br />
          <div style="color: #38BDF8; font-weight: 700; margin-bottom: 6px;"># 2. Equipercentile Slot Normalization Formula:</div>
          Scaled Score = M_g + ( (S_i - M_i) / SD_i ) × SD_g<br />
          Where: S_i = Candidate Raw Score, M_i = Slot Mean, SD_i = Slot Std Dev, M_g = Master Global Mean, SD_g = Master Global Std Dev<br /><br />
          <div style="color: #38BDF8; font-weight: 700; margin-bottom: 6px;"># 3. All-India Percentile Rank Formula:</div>
          Percentile P = ( (N - R) / N ) × 100<br />
          Where: N = Total test-takers across India (~2.9 Lakh candidates), R = Assigned All-India Rank
        </div>
      </section>

      <!-- CAT Marks vs Percentile Table -->
      <section style="margin-bottom: 36px;">
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #0F172A; margin: 0 0 6px;">CAT 2026 Marks vs Percentile Target Breakdown (198 Max Marks)</h2>
        <p style="color: #64748B; font-size: 0.95rem; margin: 0 0 16px;">Verified historical benchmarks across 66-question CAT administrations (~2.9 Lakh candidates)</p>
        <div style="overflow-x: auto; border: 1px solid #E2E8F0; border-radius: 12px;">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
            <thead>
              <tr style="background: #F8FAFC; border-bottom: 2px solid #E2E8F0;">
                <th style="padding: 12px 16px; font-weight: 700; color: #0F172A;">Target Percentile</th>
                <th style="padding: 12px 16px; font-weight: 700; color: #0F172A;">Overall Raw Marks (198M)</th>
                <th style="padding: 12px 16px; font-weight: 700; color: #0F172A;">VARC Target (72M)</th>
                <th style="padding: 12px 16px; font-weight: 700; color: #0F172A;">DILR Target (60M)</th>
                <th style="padding: 12px 16px; font-weight: 700; color: #0F172A;">QA Target (66M)</th>
                <th style="padding: 12px 16px; font-weight: 700; color: #0F172A;">Top Eligible Institutions</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #FFFFFF;">
                <td style="padding: 12px 16px;"><strong style="color: #6B2CF5;">99.9+ %ile</strong></td>
                <td style="padding: 12px 16px;"><strong>110 – 125+ Marks</strong></td>
                <td style="padding: 12px 16px;">46+ Marks</td>
                <td style="padding: 12px 16px;">38+ Marks</td>
                <td style="padding: 12px 16px;">42+ Marks</td>
                <td style="padding: 12px 16px;"><a href="/colleges/iim-ahmedabad" style="color: #6B2CF5; text-decoration: none;">IIM Ahmedabad</a>, <a href="/colleges/iim-bangalore" style="color: #6B2CF5; text-decoration: none;">IIM Bangalore</a>, <a href="/colleges/iim-calcutta" style="color: #6B2CF5; text-decoration: none;">IIM Calcutta</a>, <a href="/colleges/fms-delhi" style="color: #6B2CF5; text-decoration: none;">FMS Delhi</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #F8FAFC;">
                <td style="padding: 12px 16px;"><strong style="color: #6B2CF5;">99.5+ %ile</strong></td>
                <td style="padding: 12px 16px;"><strong>95 – 109 Marks</strong></td>
                <td style="padding: 12px 16px;">42+ Marks</td>
                <td style="padding: 12px 16px;">32+ Marks</td>
                <td style="padding: 12px 16px;">35+ Marks</td>
                <td style="padding: 12px 16px;"><a href="/colleges/iim-lucknow" style="color: #6B2CF5; text-decoration: none;">IIM Lucknow</a>, <a href="/colleges/iim-kozhikode" style="color: #6B2CF5; text-decoration: none;">IIM Kozhikode</a>, <a href="/colleges/spjimr-mumbai" style="color: #6B2CF5; text-decoration: none;">SPJIMR Mumbai</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #FFFFFF;">
                <td style="padding: 12px 16px;"><strong style="color: #6B2CF5;">99.0+ %ile</strong></td>
                <td style="padding: 12px 16px;"><strong>82 – 94 Marks</strong></td>
                <td style="padding: 12px 16px;">38+ Marks</td>
                <td style="padding: 12px 16px;">28+ Marks</td>
                <td style="padding: 12px 16px;">30+ Marks</td>
                <td style="padding: 12px 16px;"><a href="/colleges/iim-indore" style="color: #6B2CF5; text-decoration: none;">IIM Indore</a>, <a href="/colleges/mdi-gurgaon" style="color: #6B2CF5; text-decoration: none;">MDI Gurgaon</a>, <a href="/colleges/sjmsom-iit-bombay" style="color: #6B2CF5; text-decoration: none;">SJMSOM IIT Bombay</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #F8FAFC;">
                <td style="padding: 12px 16px;"><strong>98.0+ %ile</strong></td>
                <td style="padding: 12px 16px;">75 – 81 Marks</td>
                <td style="padding: 12px 16px;">34+ Marks</td>
                <td style="padding: 12px 16px;">24+ Marks</td>
                <td style="padding: 12px 16px;">26+ Marks</td>
                <td style="padding: 12px 16px;"><a href="/colleges/iift-delhi" style="color: #6B2CF5; text-decoration: none;">IIFT Delhi</a>, <a href="/colleges/iim-shillong" style="color: #6B2CF5; text-decoration: none;">IIM Shillong</a>, CAP IIMs (Udaipur, Trichy)</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #FFFFFF;">
                <td style="padding: 12px 16px;"><strong>95.0+ %ile</strong></td>
                <td style="padding: 12px 16px;">60 – 74 Marks</td>
                <td style="padding: 12px 16px;">28+ Marks</td>
                <td style="padding: 12px 16px;">19+ Marks</td>
                <td style="padding: 12px 16px;">21+ Marks</td>
                <td style="padding: 12px 16px;"><a href="/colleges/iim-raipur" style="color: #6B2CF5; text-decoration: none;">IIM Raipur</a>, <a href="/colleges/iim-ranchi" style="color: #6B2CF5; text-decoration: none;">IIM Ranchi</a>, DSE Delhi, DMS IIT Delhi</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #F8FAFC;">
                <td style="padding: 12px 16px;"><strong>90.0+ %ile</strong></td>
                <td style="padding: 12px 16px;">48 – 59 Marks</td>
                <td style="padding: 12px 16px;">23+ Marks</td>
                <td style="padding: 12px 16px;">15+ Marks</td>
                <td style="padding: 12px 16px;">16+ Marks</td>
                <td style="padding: 12px 16px;"><a href="/colleges/imt-ghaziabad" style="color: #6B2CF5; text-decoration: none;">IMT Ghaziabad</a>, <a href="/colleges/imi-delhi" style="color: #6B2CF5; text-decoration: none;">IMI New Delhi</a>, GIM Goa, Baby IIMs</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #FFFFFF;">
                <td style="padding: 12px 16px;"><strong>85.0+ %ile</strong></td>
                <td style="padding: 12px 16px;">38 – 47 Marks</td>
                <td style="padding: 12px 16px;">18+ Marks</td>
                <td style="padding: 12px 16px;">12+ Marks</td>
                <td style="padding: 12px 16px;">13+ Marks</td>
                <td style="padding: 12px 16px;">TAPMI Manipal, FORE School Delhi, Great Lakes Chennai, LBSIM</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #F8FAFC;">
                <td style="padding: 12px 16px;"><strong>80.0+ %ile</strong></td>
                <td style="padding: 12px 16px;">32 – 37 Marks</td>
                <td style="padding: 12px 16px;">14+ Marks</td>
                <td style="padding: 12px 16px;">10+ Marks</td>
                <td style="padding: 12px 16px;">10+ Marks</td>
                <td style="padding: 12px 16px;">BIMTECH Greater Noida, K J Somaiya, IRMA Anand</td>
              </tr>
              <tr style="background: #FFFFFF;">
                <td style="padding: 12px 16px;"><strong>70.0+ %ile</strong></td>
                <td style="padding: 12px 16px;">22 – 31 Marks</td>
                <td style="padding: 12px 16px;">10+ Marks</td>
                <td style="padding: 12px 16px;">7+ Marks</td>
                <td style="padding: 12px 16px;">7+ Marks</td>
                <td style="padding: 12px 16px;">NDIM New Delhi, FOSTIIMA, FIIB, JIMS Kalkaji</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Step-by-Step Response Sheet Download & Calculation Guide -->
      <section style="margin-bottom: 36px;">
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #0F172A; margin: 0 0 16px;">How to Calculate CAT 2026 Score from Response Sheet (cdn.digialm.com)</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 20px;">
            <div style="font-size: 0.8rem; font-weight: 700; color: #6B2CF5; margin-bottom: 6px;">STEP 1</div>
            <h3 style="font-size: 1.05rem; font-weight: 700; color: #0F172A; margin: 0 0 8px;">Login to iimcat.ac.in</h3>
            <p style="color: #64748B; font-size: 0.9rem; margin: 0;">Open Registered Candidate Login with your User ID and Password, then click on the 'Candidate Response' tab.</p>
          </div>
          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 20px;">
            <div style="font-size: 0.8rem; font-weight: 700; color: #6B2CF5; margin-bottom: 6px;">STEP 2</div>
            <h3 style="font-size: 1.05rem; font-weight: 700; color: #0F172A; margin: 0 0 8px;">Copy Digialm URL</h3>
            <p style="color: #64748B; font-size: 0.9rem; margin: 0;">Click on 'Click here to generate response sheet' and copy the URL hosted on <code>cdn.digialm.com</code> from your browser.</p>
          </div>
          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 20px;">
            <div style="font-size: 0.8rem; font-weight: 700; color: #6B2CF5; margin-bottom: 6px;">STEP 3</div>
            <h3 style="font-size: 1.05rem; font-weight: 700; color: #0F172A; margin: 0 0 8px;">Paste in Calculator</h3>
            <p style="color: #64748B; font-size: 0.9rem; margin: 0;">Paste the link into the FindMyBSchool CAT Score Calculator input box above for instant automated processing.</p>
          </div>
          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 20px;">
            <div style="font-size: 0.8rem; font-weight: 700; color: #6B2CF5; margin-bottom: 6px;">STEP 4</div>
            <h3 style="font-size: 1.05rem; font-weight: 700; color: #0F172A; margin: 0 0 8px;">View IIM Calls &amp; %ile</h3>
            <p style="color: #64748B; font-size: 0.9rem; margin: 0;">Get your raw sectional marks, slot-normalized percentile, and interview call probabilities across 21 IIMs instantly.</p>
          </div>
        </div>
      </section>

      <!-- Category-Wise Cutoffs for 21 IIMs -->
      <section style="margin-bottom: 36px;">
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #0F172A; margin: 0 0 6px;">Category-Wise Expected CAT Cutoffs for Top 21 IIMs</h2>
        <p style="color: #64748B; font-size: 0.95rem; margin: 0 0 16px;">Verified shortlist cutoffs across General, NC-OBC, EWS, SC, and ST categories with 2-year fees and average CTC</p>
        <div style="overflow-x: auto; border: 1px solid #E2E8F0; border-radius: 12px;">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
            <thead>
              <tr style="background: #F8FAFC; border-bottom: 2px solid #E2E8F0;">
                <th style="padding: 12px 16px; font-weight: 700; color: #0F172A;">IIM Name</th>
                <th style="padding: 12px 16px; font-weight: 700; color: #0F172A;">General Cutoff</th>
                <th style="padding: 12px 16px; font-weight: 700; color: #0F172A;">NC-OBC Cutoff</th>
                <th style="padding: 12px 16px; font-weight: 700; color: #0F172A;">EWS Cutoff</th>
                <th style="padding: 12px 16px; font-weight: 700; color: #0F172A;">SC / ST Cutoff</th>
                <th style="padding: 12px 16px; font-weight: 700; color: #0F172A;">2-Year Fees</th>
                <th style="padding: 12px 16px; font-weight: 700; color: #0F172A;">Average CTC</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #FFFFFF;">
                <td style="padding: 12px 16px;"><strong><a href="/colleges/iim-ahmedabad" style="color: #6B2CF5; text-decoration: none;">IIM Ahmedabad</a></strong></td>
                <td style="padding: 12px 16px;">99.6+ %ile</td>
                <td style="padding: 12px 16px;">95.0+ %ile</td>
                <td style="padding: 12px 16px;">95.0+ %ile</td>
                <td style="padding: 12px 16px;">85.0+ / 75.0+</td>
                <td style="padding: 12px 16px;">₹26.5 Lakhs</td>
                <td style="padding: 12px 16px;">₹36.98 LPA</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #F8FAFC;">
                <td style="padding: 12px 16px;"><strong><a href="/colleges/iim-bangalore" style="color: #6B2CF5; text-decoration: none;">IIM Bangalore</a></strong></td>
                <td style="padding: 12px 16px;">99.5+ %ile</td>
                <td style="padding: 12px 16px;">93.0+ %ile</td>
                <td style="padding: 12px 16px;">94.0+ %ile</td>
                <td style="padding: 12px 16px;">82.0+ / 72.0+</td>
                <td style="padding: 12px 16px;">₹26.0 Lakhs</td>
                <td style="padding: 12px 16px;">₹35.35 LPA</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #FFFFFF;">
                <td style="padding: 12px 16px;"><strong><a href="/colleges/iim-calcutta" style="color: #6B2CF5; text-decoration: none;">IIM Calcutta</a></strong></td>
                <td style="padding: 12px 16px;">99.4+ %ile</td>
                <td style="padding: 12px 16px;">94.0+ %ile</td>
                <td style="padding: 12px 16px;">94.0+ %ile</td>
                <td style="padding: 12px 16px;">80.0+ / 70.0+</td>
                <td style="padding: 12px 16px;">₹27.0 Lakhs</td>
                <td style="padding: 12px 16px;">₹36.00 LPA</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #F8FAFC;">
                <td style="padding: 12px 16px;"><strong><a href="/colleges/iim-lucknow" style="color: #6B2CF5; text-decoration: none;">IIM Lucknow</a></strong></td>
                <td style="padding: 12px 16px;">99.0+ %ile</td>
                <td style="padding: 12px 16px;">90.0+ %ile</td>
                <td style="padding: 12px 16px;">91.0+ %ile</td>
                <td style="padding: 12px 16px;">77.0+ / 65.0+</td>
                <td style="padding: 12px 16px;">₹20.8 Lakhs</td>
                <td style="padding: 12px 16px;">₹33.20 LPA</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #FFFFFF;">
                <td style="padding: 12px 16px;"><strong><a href="/colleges/iim-kozhikode" style="color: #6B2CF5; text-decoration: none;">IIM Kozhikode</a></strong></td>
                <td style="padding: 12px 16px;">98.5+ %ile</td>
                <td style="padding: 12px 16px;">88.0+ %ile</td>
                <td style="padding: 12px 16px;">90.0+ %ile</td>
                <td style="padding: 12px 16px;">75.0+ / 65.0+</td>
                <td style="padding: 12px 16px;">₹21.5 Lakhs</td>
                <td style="padding: 12px 16px;">₹28.18 LPA</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #F8FAFC;">
                <td style="padding: 12px 16px;"><strong><a href="/colleges/iim-indore" style="color: #6B2CF5; text-decoration: none;">IIM Indore</a></strong></td>
                <td style="padding: 12px 16px;">98.0+ %ile</td>
                <td style="padding: 12px 16px;">87.0+ %ile</td>
                <td style="padding: 12px 16px;">88.0+ %ile</td>
                <td style="padding: 12px 16px;">70.0+ / 60.0+</td>
                <td style="padding: 12px 16px;">₹21.0 Lakhs</td>
                <td style="padding: 12px 16px;">₹27.27 LPA</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #FFFFFF;">
                <td style="padding: 12px 16px;"><strong>CAP IIMs (Raipur, Ranchi, Udaipur, Trichy)</strong></td>
                <td style="padding: 12px 16px;">92.0 – 94.0+ %ile</td>
                <td style="padding: 12px 16px;">76.0 – 77.0+ %ile</td>
                <td style="padding: 12px 16px;">76.0 – 77.0+ %ile</td>
                <td style="padding: 12px 16px;">58.0+ / 38.0+</td>
                <td style="padding: 12px 16px;">₹18.0 – 20.5 Lakhs</td>
                <td style="padding: 12px 16px;">₹18.0 – 20.5 LPA</td>
              </tr>
              <tr style="background: #F8FAFC;">
                <td style="padding: 12px 16px;"><strong>Baby IIMs (Jammu, Bodh Gaya, Amritsar, Sambalpur)</strong></td>
                <td style="padding: 12px 16px;">90.0+ %ile</td>
                <td style="padding: 12px 16px;">74.0+ %ile</td>
                <td style="padding: 12px 16px;">74.0+ %ile</td>
                <td style="padding: 12px 16px;">54.0+ / 35.0+</td>
                <td style="padding: 12px 16px;">₹17.0 – 18.5 Lakhs</td>
                <td style="padding: 12px 16px;">₹14.5 – 16.5 LPA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Frequently Asked Questions (FAQ Accordions) -->
      <section style="margin-bottom: 40px;">
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #0F172A; margin: 0 0 16px;">Frequently Asked Questions (CAT Score &amp; Percentile Calculator)</h2>
        
        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;" open>
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer; font-size: 1.05rem;">Which is the best free CAT score calculator from response sheet?</summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            The FindMyBSchool CAT Score Calculator is widely regarded as the most accurate and fastest free tool. It allows direct input of your official response sheet link hosted on <code>cdn.digialm.com</code> or raw HTML source, audits all 66 questions in under 2 seconds using the official +3 / -1 / 0 marking scheme, executes multi-slot equipercentile normalization across Slot 1, Slot 2, and Slot 3, and generates verified interview call predictions for 21 IIMs and 50+ premier B-schools without any mandatory registration wall.
          </div>
        </details>

        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer; font-size: 1.05rem;">What is the official formula to calculate CAT 2026 score?</summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            The official CAT raw score formula across all 66 questions is:<br />
            <code>Raw Score = (3 × Correct MCQs) + (3 × Correct Non-MCQs/TITA) − (1 × Incorrect MCQs) − (0 × Incorrect Non-MCQs)</code><br />
            Scaled scores are subsequently derived through equipercentile equating across the 3 slots: <code>Scaled Score = M_g + ((S_i - M_i) / SD_i) × SD_g</code>.
          </div>
        </details>

        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer; font-size: 1.05rem;">How does slot normalization affect my raw CAT score?</summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            Because CAT is conducted across 3 separate slots with varying question difficulty, IIMs employ an equipercentile statistical normalization model. If your slot was comparatively harder, your scaled score is adjusted upward; if your slot had a higher average, the score adjusts slightly downward to ensure complete fairness.
          </div>
        </details>

        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer; font-size: 1.05rem;">What CAT percentile is required for IIM Ahmedabad, Bangalore, and Calcutta?</summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            For General Category engineering candidates, top IIMs (IIM Ahmedabad, IIM Bangalore, IIM Calcutta) typically require a minimum 99.2 to 99.8 percentile in CAT, alongside strong sectional scores (usually 80-85+ sectional percentile). Non-engineers with exceptional academic records (90%+ in 10th/12th/Graduation) and NC-OBC/SC/ST/EWS candidates may receive interview calls between 90 and 96 percentile.
          </div>
        </details>

        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer; font-size: 1.05rem;">Which non-IIM colleges accept CAT scores for MBA admissions?</summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            Premier non-IIM institutions accepting CAT scores include FMS Delhi (Faculty of Management Studies), SPJIMR Mumbai, MDI Gurgaon, IIT Bombay (SJMSOM), IIT Delhi (DMS), IIT Kharagpur (VGSOM), IIFT Delhi, and IMI New Delhi.
          </div>
        </details>
      </section>

      <!-- Bottom CTA Banner -->
      <div style="text-align: center; padding: 32px 20px; background: #FAFAFE; border: 1px solid #E2E8F0; border-radius: 16px; margin-top: 24px;">
        <h3 style="font-size: 1.35rem; font-weight: 800; color: #0F172A; margin: 0 0 8px;">Check Your CAT Score &amp; IIM Calls in 2 Seconds</h3>
        <p style="color: #64748B; font-size: 1rem; margin: 0 0 20px;">100% Free • Automated 66-question parsing from official candidate response sheet.</p>
        <a href="/tools/cat-college-predictor" style="display: inline-block; padding: 14px 32px; background: #6B2CF5; color: #FFFFFF; font-weight: 700; text-decoration: none; border-radius: 10px; font-size: 1.05rem; box-shadow: 0 4px 14px rgba(107, 44, 245, 0.35);">
          Launch Interactive Calculator
        </a>
      </div>
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

  const meta = {
    title: `Top MBA & PGDM Colleges in ${city} — Fees, Placements & Cutoffs (2027-29 Session) | FindMyBSchool`,
    description: `Explore ${totalCityColleges > 0 ? totalCityColleges + '+' : 'top'} verified management institutes in ${city} for 2027-29 admissions. Compare AICTE & UGC approved MBA/PGDM colleges, audited fees, average salaries, and exam cutoffs.`,
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

  writeStaticRoute(`/colleges/city/${normCity}`, generatePageHtml(meta, bodyHtml));
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

  const meta = {
    title: `${exam.fullName} (${exam.name}) 2026-27 — Dates, Syllabus, Cutoffs & Registration | FindMyBSchool`,
    description: `Complete guide for ${exam.fullName} (${exam.name}). Conducting body: ${exam.conductingBody}. Exam date: ${exam.examDate}. Eligibility, registration fees, syllabus, and top participating colleges.`,
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

  const meta = {
    title: `${sch.title} (${sch.provider}): Eligibility, Grants up to ${sch.amount} & Deadlines | FindMyBSchool`,
    description: `Apply for ${sch.title}. Provider: ${sch.provider}. Grant: ${sch.amount}. Target: ${sch.targetInstitutes}. Eligibility: ${sch.eligibilitySummary}. Free document checklist & mentorship.`,
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

  const meta = {
    title: `${test.title} — Real CBT Exam Simulation & Percentile Predictor | FindMyBSchool`,
    description: `Attempt 100% Free ${test.title}. ${test.tagline}. Full duration: ${test.fullDurationMinutes} mins, ${test.totalQuestions} questions. Real-time sectional timers, on-screen calculator, and instant percentile report.`,
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

  const meta = {
    title: `${blog.title} | FindMyBSchool Strategy Blog`,
    description: blog.summary || blog.excerpt || blog.description || 'Actionable MBA admissions insights, interview secrets, and CAT percentile strategies.',
    canonical: canonicalUrl,
    schema: blogSchema
  };

  const bodyHtml = `
    <header style="padding: 20px 24px; border-bottom: 1px solid #E2E8F0; text-align: center; background: #FAFAFE;">
      <a href="/" style="font-weight: 800; font-size: 1.5rem; color: #6B2CF5; text-decoration: none;">FindMyBSchool</a>
      <p style="margin: 4px 0 0; color: #64748B; font-size: 0.95rem;">India’s Verified MBA &amp; PGDM Admissions Portal • Session 2027-29</p>
    </header>
    <main style="max-width: 1100px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif;">
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
  const title = `${col.name} (${col.shortName}) Admission 2027-29: Fees, Cutoffs, Recent Placements & NIRF Ranking | FindMyBSchool`;
  const description = `Get verified 2027-29 admission session details for ${col.name} (${col.shortName}), ${col.location}. 2-Year Total Fees: ${col.fees}, Recent Average CTC: ${col.avgSalary}, Cutoff: ${col.cutoffCAT !== 'N/A' ? 'CAT ' + col.cutoffCAT : (col.cutoffXAT !== 'N/A' ? 'XAT ' + col.cutoffXAT : 'CMAT ' + col.cutoffCMAT)}. 100% audited recent placement statistics & bank loan schemes.`;

  const cutoffText = col.cutoffCAT !== 'N/A' ? `CAT ${col.cutoffCAT}` : (col.cutoffXAT !== 'N/A' ? `XAT ${col.cutoffXAT}` : `CMAT ${col.cutoffCMAT}`);
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
