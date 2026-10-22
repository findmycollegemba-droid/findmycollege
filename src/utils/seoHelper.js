import { COLLEGES_DATA } from '../data/collegesData.js';
import { EXAMS_DATA } from '../data/examsData.js';
import { BLOGS_DATA } from '../data/blogsData.js';
import { SCHOLARSHIPS_DATA } from '../data/scholarshipsData.js';
import { MOCK_TESTS } from '../data/mockTestsData.js';
import { trackPageView } from './analytics.js';

const BASE_URL = 'https://findmybschool.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.svg`;

/**
 * Updates dynamic meta tags, titles, canonicals, Open Graph, Twitter Cards,
 * and Schema.org JSON-LD structured data.
 * Powers SEO, GEO (Generative Engine Optimization), and AEO (Answer Engine Optimization).
 */
export function updatePageSEO(page = 'home', sub = null, params = null) {
  let meta = {
    title: 'FindMyBSchool — Top MBA & PGDM Colleges, Fees, Cutoffs & Exam Predictors',
    description: 'Find your dream MBA & PGDM business school with FindMyBSchool (findmybschool.com). Compare 600+ verified B-schools, cutoffs, tuition fees, and placements with 0% scrapers.',
    canonical: `${BASE_URL}/`,
    image: DEFAULT_OG_IMAGE,
    ogType: 'website',
    page,
    sub,
    breadcrumbs: [
      { name: 'Home', url: `${BASE_URL}/` }
    ]
  };

  const searchQuery = params?.get('search') || params?.get('q') || '';
  const cityParam = params?.get('city') || '';
  const typeParam = params?.get('type') || '';

  // Determine metadata based on route
  switch (page) {
    case 'home':
      meta.title = 'FindMyBSchool — Top MBA & PGDM Colleges, Fees, Cutoffs & Exam Predictors';
      meta.description = 'Compare 600+ verified MBA & PGDM colleges across India. Audited tuition fees, real CAT/XAT/CMAT cutoffs, placement reports, and percentile score calculators.';
      meta.canonical = `${BASE_URL}/`;
      break;

    case 'colleges': {
      let specificCollege = null;
      const collegeId = params?.get('id') || sub;
      if (collegeId) {
        specificCollege = COLLEGES_DATA.find(c => c.id === collegeId || c.slug === collegeId);
      }

      if (specificCollege) {
        meta.title = `${specificCollege.name} (${specificCollege.shortName}) Admission 2027-29: Fees, Cutoffs, Recent Placements & NIRF Ranking | FindMyBSchool`;
        meta.description = `Get verified 2027-29 admission session details for ${specificCollege.name} (${specificCollege.shortName}), ${specificCollege.location}. 2-Year Total Fees: ${specificCollege.fees}, Recent Average CTC: ${specificCollege.avgSalary}, Cutoff: ${specificCollege.cutoffCAT !== 'N/A' ? 'CAT ' + specificCollege.cutoffCAT : (specificCollege.cutoffXAT !== 'N/A' ? 'XAT ' + specificCollege.cutoffXAT : 'CMAT ' + specificCollege.cutoffCMAT)}. 100% audited recent placement statistics & bank loan schemes.`;
        meta.canonical = `${BASE_URL}/colleges/${encodeURIComponent(specificCollege.id)}`;
        meta.ogType = 'article';
        meta.collegeData = specificCollege;
        meta.breadcrumbs = [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Colleges', url: `${BASE_URL}/colleges` },
          { name: specificCollege.city || 'MBA Colleges', url: `${BASE_URL}/colleges/city/${encodeURIComponent((specificCollege.city || '').toLowerCase())}` },
          { name: specificCollege.shortName || specificCollege.name, url: meta.canonical }
        ];
      } else if (searchQuery) {
        meta.title = `Colleges matching "${searchQuery}" — MBA & PGDM Directory | FindMyBSchool`;
        meta.description = `Search results for "${searchQuery}" across verified business schools in India. Compare tuition fees, entrance exams, and placement packages on FindMyBSchool.`;
        meta.canonical = `${BASE_URL}/colleges?search=${encodeURIComponent(searchQuery)}`;
        meta.breadcrumbs = [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Colleges', url: `${BASE_URL}/colleges` },
          { name: `Search: ${searchQuery}`, url: meta.canonical }
        ];
      } else if (cityParam) {
        meta.title = `Top MBA & PGDM Colleges in ${cityParam} — Fees, Recent Placements & Cutoffs (2027-29 Session) | FindMyBSchool`;
        meta.description = `Explore top management institutes in ${cityParam} for 2027-29 admissions. Compare AICTE & UGC approved MBA/PGDM colleges, audited fees, recent average salaries, and exam cutoffs.`;
        meta.canonical = `${BASE_URL}/colleges/city/${encodeURIComponent(cityParam.toLowerCase())}`;
        meta.breadcrumbs = [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Colleges', url: `${BASE_URL}/colleges` },
          { name: cityParam, url: meta.canonical }
        ];
      } else if (typeParam) {
        const typeName = typeParam.toUpperCase();
        meta.title = `Top ${typeName} Colleges in India — Fees, NIRF Rankings & Cutoffs (2027-29 Session) | FindMyBSchool`;
        meta.description = `Find the best ${typeName} colleges in India for the 2027-29 session. Comprehensive comparison of university MBA vs autonomous PGDM institutes, audited fees, and recent audited placements.`;
        meta.canonical = `${BASE_URL}/colleges/${encodeURIComponent(typeParam.toLowerCase())}`;
        meta.breadcrumbs = [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Colleges', url: `${BASE_URL}/colleges` },
          { name: typeName, url: meta.canonical }
        ];
      } else {
        meta.title = 'Explore 600+ Verified MBA & PGDM Colleges in India (2027-29 Admission) | FindMyBSchool';
        meta.description = 'Filter and compare 600+ top Indian business schools for 2027-29 admission by fees, NIRF rank, recent average CTC packages, CAT/XAT/CMAT cutoffs, and city locations with 0% scrapers.';
        meta.canonical = `${BASE_URL}/colleges`;
        meta.breadcrumbs = [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Colleges', url: meta.canonical }
        ];
      }
      break;
    }

    case 'exams': {
      let specificExam = null;
      const examId = params?.get('exam') || sub;
      if (examId) {
        specificExam = EXAMS_DATA.find(e => e.id === examId || e.name.toLowerCase() === examId.toLowerCase());
      }

      if (specificExam) {
        meta.title = `${specificExam.fullName} (${specificExam.name}) 2026-27 — Dates, Syllabus, Cutoffs & Registration | FindMyBSchool`;
        meta.description = `Complete guide for ${specificExam.fullName} (${specificExam.name}). Conducting body: ${specificExam.conductingBody}. Exam date: ${specificExam.examDate}. Eligibility, registration fees, syllabus, and top participating colleges.`;
        meta.canonical = `${BASE_URL}/exams/${encodeURIComponent(specificExam.id)}`;
        meta.examData = specificExam;
        meta.breadcrumbs = [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Exams', url: `${BASE_URL}/exams` },
          { name: specificExam.name, url: meta.canonical }
        ];
      } else {
        meta.title = 'Top MBA Entrance Exams 2026-27 — CAT, XAT, SNAP, NMAT, CMAT Calendars | FindMyBSchool';
        meta.description = 'Compare syllabus, eligibility, exam patterns, and registration deadlines for CAT, XAT, SNAP, NMAT, CMAT, MAH-CET, and CUET-PG. Official preparation strategies.';
        meta.canonical = `${BASE_URL}/exams`;
        meta.breadcrumbs = [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Exams', url: meta.canonical }
        ];
      }
      break;
    }

    case 'tools': {
      const toolSub = sub || params?.get('sub') || 'cat';
      if (toolSub === 'cat') {
        meta.title = 'CAT College Predictor 2026: IIM Call Predictor & MBA Percentile Calculator | FindMyBSchool';
        meta.description = 'Free CAT College Predictor 2026 & IIM Call Predictor. Calculate raw & scaled scores with slot normalization, get All-India percentiles, and explore 600+ MBA/PGDM colleges with category cutoffs & audited fees.';
        meta.canonical = `${BASE_URL}/tools/cat-college-predictor`;
        meta.toolSub = 'cat';
        meta.breadcrumbs = [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Calculators & Tools', url: `${BASE_URL}/tools` },
          { name: 'CAT College Predictor 2026', url: meta.canonical }
        ];
      } else if (toolSub === 'xat') {
        meta.title = 'XAT Score Calculator & XLRI Percentile Predictor 2027 | FindMyBSchool';
        meta.description = 'Calculate your XAT score with official negative marking and unattempted question penalty. Estimate XLRI BM & HRM shortlist cutoffs.';
        meta.canonical = `${BASE_URL}/tools/xat-percentile-calculator`;
        meta.toolSub = 'xat';
        meta.breadcrumbs = [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Calculators & Tools', url: `${BASE_URL}/tools` },
          { name: 'XAT Calculator', url: meta.canonical }
        ];
      } else if (toolSub === 'cmat') {
        meta.title = 'CMAT Score Calculator & JBIMS Cutoff Predictor 2026 | FindMyBSchool';
        meta.description = 'Calculate your CMAT 400-mark score across 5 sections. Predict JBIMS MMS, SIMSREE, and GIM Goa percentile cutoffs.';
        meta.canonical = `${BASE_URL}/tools/cmat-percentile-calculator`;
        meta.toolSub = 'cmat';
        meta.breadcrumbs = [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Calculators & Tools', url: `${BASE_URL}/tools` },
          { name: 'CMAT Calculator', url: meta.canonical }
        ];
      } else {
        meta.title = 'MBA Score Calculators & Percentile Predictor Tools | FindMyBSchool';
        meta.description = 'Free, accurate MBA percentile predictors and response sheet score calculators for CAT, XAT, and CMAT. Check your normalized scores instantly.';
        meta.canonical = `${BASE_URL}/tools/cat-college-predictor`;
        meta.breadcrumbs = [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Calculators & Tools', url: meta.canonical }
        ];
      }
      break;
    }

    case 'programs': {
      const progSub = sub || params?.get('sub');
      if (progSub === 'compare') {
        meta.title = 'MBA vs PGDM Comparison Guide (2027-29 Session) — Key Differences, AICTE vs UGC, ROI | FindMyBSchool';
        meta.description = 'Understand the crucial differences between University MBA degrees and Autonomous PGDM diplomas. Compare AICTE accreditation, AIU equivalence, syllabus flexibility, and corporate ROI.';
        meta.canonical = `${BASE_URL}/programs/compare`;
      } else if (progSub === 'mba') {
        meta.title = 'Top University MBA Degrees in India — Eligibility, Fees, UGC Norms & Placements | FindMyBSchool';
        meta.description = 'Complete guide to University MBA degrees in India (FMS Delhi, JBIMS, PUMBA). Compare UGC affiliations, semester syllabus, tuition fees, and corporate hiring trends.';
        meta.canonical = `${BASE_URL}/programs/mba`;
      } else if (progSub === 'pgdm') {
        meta.title = 'Top AICTE PGDM Programs in India — Top Autonomous B-Schools & Placements | FindMyBSchool';
        meta.description = 'Explore premier AICTE-approved PGDM programs (XLRI, SPJIMR, MDI, IMT). Industry-aligned trimester curriculum, corporate internships, and executive compensation.';
        meta.canonical = `${BASE_URL}/programs/pgdm`;
      } else if (progSub === 'specializations') {
        meta.title = 'Top MBA Specializations 2027-29 — Finance, Marketing, Analytics, Consulting & HR | FindMyBSchool';
        meta.description = 'Compare high-paying MBA specializations: Finance, Marketing, Business Analytics, Strategy & Consulting, Operations, and Human Resources. Average salaries and top hiring sectors.';
        meta.canonical = `${BASE_URL}/programs/specializations`;
      } else if (progSub === 'roi') {
        meta.title = 'MBA ROI Calculator & Highest Return on Investment Colleges in India | FindMyBSchool';
        meta.description = 'Calculate your MBA Return on Investment (ROI). Discover high-ROI business schools like FMS Delhi, JBIMS Mumbai, and TISS offering top placement packages at nominal tuition fees.';
        meta.canonical = `${BASE_URL}/programs/roi`;
      } else {
        meta.title = 'MBA vs PGDM Comparison Guide (2027-29 Session) — Differences, Fees & Placement ROI | FindMyBSchool';
        meta.description = 'Understand the crucial differences between University MBA degrees and Autonomous PGDM diplomas. Compare AICTE accreditation, syllabus flexibility, and corporate ROI.';
        meta.canonical = `${BASE_URL}/programs`;
      }

      meta.breadcrumbs = [
        { name: 'Home', url: `${BASE_URL}/` },
        { name: 'Programs & Comparison', url: `${BASE_URL}/programs` }
      ];
      if (progSub && progSub !== 'all') {
        meta.breadcrumbs.push({ name: progSub.toUpperCase(), url: meta.canonical });
      }
      break;
    }

    case 'blog': {
      let specificBlog = null;
      const blogId = sub || params?.get('id') || params?.get('sub');
      if (blogId) {
        specificBlog = BLOGS_DATA.find(b => b.id === blogId);
      }

      if (specificBlog) {
        meta.title = `${specificBlog.title} | FindMyBSchool Strategy Blog`;
        meta.description = specificBlog.summary || specificBlog.excerpt || specificBlog.description || 'Actionable MBA admissions insights, interview secrets, and CAT percentile strategies.';
        meta.canonical = `${BASE_URL}/blog/${encodeURIComponent(specificBlog.id)}`;
        meta.ogType = 'article';
        meta.blogData = specificBlog;
        if (specificBlog.image || specificBlog.coverImage) {
          meta.image = specificBlog.image || specificBlog.coverImage;
        }
        meta.breadcrumbs = [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Blog', url: `${BASE_URL}/blog` },
          { name: specificBlog.title, url: meta.canonical }
        ];
      } else {
        meta.title = 'MBA Admissions Strategy Blog & Exam Preparation Guides | FindMyBSchool';
        meta.description = 'Read expert editorial guides on CAT preparation, GD-PI interview secrets, MBA vs PGDM analysis, and top B-school placement insights written by IIM/XLRI mentors.';
        meta.canonical = `${BASE_URL}/blog`;
        meta.breadcrumbs = [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Blog', url: meta.canonical }
        ];
      }
      break;
    }

    case 'contact':
      meta.title = 'Free MBA Admission Counseling & Mentorship | FindMyBSchool';
      meta.description = 'Book a 1-on-1 profile evaluation with senior MBA admission mentors. Get personalized B-school shortlists according to your budget, city, and exam scores.';
      meta.canonical = `${BASE_URL}/contact`;
      meta.breadcrumbs = [
        { name: 'Home', url: `${BASE_URL}/` },
        { name: 'Contact & Counseling', url: meta.canonical }
      ];
      break;

    case 'ai-chat':
      meta.title = 'AdmitIQ AI Assistant — Instant MBA Profile & College Evaluator | FindMyBSchool';
      meta.description = 'Chat with AdmitIQ, India’s specialized AI MBA admissions assistant. Get immediate answers on college cutoffs, fee structures, and profile shortlist chances.';
      meta.canonical = `${BASE_URL}/ai-chat`;
      meta.breadcrumbs = [
        { name: 'Home', url: `${BASE_URL}/` },
        { name: 'AdmitIQ AI Assistant', url: meta.canonical }
      ];
      break;

    case 'mock-test': {
      let specificTest = null;
      if (sub) {
        specificTest = MOCK_TESTS.find(t => t.id === sub || t.slug === sub);
      }

      if (specificTest) {
        meta.title = `${specificTest.title} — Real CBT Exam Simulation & Percentile Predictor | FindMyBSchool`;
        meta.description = `Attempt 100% Free ${specificTest.title}. ${specificTest.tagline}. Full duration: ${specificTest.fullDurationMinutes} mins, ${specificTest.totalQuestions} questions. Real-time sectional timers, on-screen calculator, and instant percentile report.`;
        meta.canonical = `${BASE_URL}/mock-test/${encodeURIComponent(specificTest.id)}`;
        meta.mockTestData = specificTest;
        meta.breadcrumbs = [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Free Mock Tests', url: `${BASE_URL}/mock-test` },
          { name: specificTest.shortTitle || specificTest.title, url: meta.canonical }
        ];
      } else {
        meta.title = 'All-India Free MBA Mock Tests 2026-27 (CAT, XAT, NMAT, SNAP, CMAT, MAT) | FindMyBSchool';
        meta.description = 'Attempt 100% Free All-India MBA Mock Tests with TCS iON simulated interface, on-screen calculator, sectional timers, instant score report, and step-by-step solutions.';
        meta.canonical = `${BASE_URL}/mock-test`;
        meta.breadcrumbs = [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Free Mock Tests', url: meta.canonical }
        ];
      }
      break;
    }

    case 'scholarships': {
      let specificScholarship = null;
      if (sub) {
        specificScholarship = SCHOLARSHIPS_DATA.find(s => s.id === sub || s.slug === sub);
      }

      if (specificScholarship) {
        meta.title = `${specificScholarship.title} (${specificScholarship.provider}): Eligibility, Grants up to ${specificScholarship.amount} & Deadlines | FindMyBSchool`;
        meta.description = `Apply for ${specificScholarship.title}. Provider: ${specificScholarship.provider}. Grant: ${specificScholarship.amount}. Target: ${specificScholarship.targetInstitutes}. Eligibility: ${specificScholarship.eligibilitySummary}. Free document checklist & mentorship.`;
        meta.canonical = `${BASE_URL}/scholarships/${encodeURIComponent(specificScholarship.id)}`;
        meta.scholarshipData = specificScholarship;
        meta.breadcrumbs = [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Live MBA Scholarships', url: `${BASE_URL}/scholarships` },
          { name: specificScholarship.title, url: meta.canonical }
        ];
      } else {
        meta.title = 'Live MBA Scholarships 2027-29: Grants up to ₹25 Lakhs | FindMyBSchool';
        meta.description = 'Find & apply for 14+ live MBA scholarships for Session 2027-29. Need-based, corporate, government NSP, and IIM tuition fee waivers up to 100%. Free verification & application mentorship.';
        meta.canonical = `${BASE_URL}/scholarships`;
        meta.breadcrumbs = [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Live MBA Scholarships', url: meta.canonical }
        ];
      }
      break;
    }

    case 'aiu-approved-campuses': {
      const cityKey = sub ? sub.toLowerCase() : 'all';
      const cityTitles = {
        'all': 'Top AIU Approved Campuses in India (City-Wise Directory 2027-29)',
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
        'all': 'Explore 360+ verified business schools with official Association of Indian Universities (AIU) equivalence across Delhi NCR, Pune, Mumbai, Bangalore, Jaipur, Kolkata, Dehradun, Lucknow, and Indore. Audited fees, real cutoffs & verified placements.',
        'delhi-ncr': 'Compare 100+ AIU-approved PGDM & MBA colleges in Delhi NCR (Noida, Gurgaon, Greater Noida). Audited tuition fees, CAT/XAT cutoffs, and recent placement packages with 0% scrapers.',
        'pune': 'Explore 50+ AIU-equivalent management institutes in Pune. Compare SIBM, Balaji, Indira, PUMBA, fees, entrance cutoffs, and recent campus placements.',
        'mumbai': 'Find verified AIU-approved business schools in Mumbai and Navi Mumbai. Audited 2-year fees, cutoff percentiles, and banking/finance placement statistics.',
        'bangalore': 'Top AIU approved MBA/PGDM colleges in Bangalore. Tech, analytics, and consulting placement data, audited tuition fees, and admission criteria.',
        'jaipur': 'AIU approved management colleges in Jaipur, Rajasthan. Compare Jaipuria Jaipur, MNIT, IIHMR, audited fees, and pooled placement reports.',
        'kolkata': 'Best AIU approved MBA colleges in Kolkata. Audited fees, cutoffs, and average salary packages across leading West Bengal management institutes.',
        'dehradun': 'Top AIU approved business schools in Dehradun, Uttarakhand. Compare UPES, Doon Business School, DIT, residential campus fees, and placements.',
        'lucknow': 'Explore top AIU approved management colleges in Lucknow. IIM Lucknow, Jaipuria Lucknow, university MBA fees, and placement reports.',
        'indore': 'Verified AIU approved MBA & PGDM colleges in Indore. Compare Prestige, IMS DAVV, Jaipuria Indore, cutoffs, and placement packages.'
      };

      meta.title = `${cityTitles[cityKey] || cityTitles['all']} | FindMyBSchool`;
      meta.description = cityDescs[cityKey] || cityDescs['all'];
      meta.canonical = sub && sub !== 'all' ? `${BASE_URL}/aiu-approved-campuses/${encodeURIComponent(sub)}` : `${BASE_URL}/aiu-approved-campuses`;
      meta.breadcrumbs = [
        { name: 'Home', url: `${BASE_URL}/` },
        { name: 'AIU Approved Campuses', url: `${BASE_URL}/aiu-approved-campuses` }
      ];
      if (sub && sub !== 'all') {
        meta.breadcrumbs.push({ name: (cityTitles[cityKey] || sub.toUpperCase()).split(' (')[0], url: meta.canonical });
      }
      break;
    }

    case 'terms':
      meta.title = 'Terms and Conditions — User Agreement & Disclaimers | FindMyBSchool';
      meta.description = 'Official Terms and Conditions for using FindMyBSchool.com services, calculators, college comparisons, and admission guidance portals.';
      meta.canonical = `${BASE_URL}/terms`;
      meta.breadcrumbs = [
        { name: 'Home', url: `${BASE_URL}/` },
        { name: 'Terms and Conditions', url: meta.canonical }
      ];
      break;

    case 'privacy':
      meta.title = 'Privacy Policy — Student Data Protection & DPDP Compliance | FindMyBSchool';
      meta.description = 'FindMyBSchool Privacy Policy compliant with India DPDP Act 2023 and GDPR. Understand how your academic profile and contact data are securely protected.';
      meta.canonical = `${BASE_URL}/privacy`;
      meta.breadcrumbs = [
        { name: 'Home', url: `${BASE_URL}/` },
        { name: 'Privacy Policy', url: meta.canonical }
      ];
      break;
  }

  // 1. Apply DOM Title
  document.title = meta.title;

  // 2. Helper to set or create meta tags
  const setMeta = (nameAttr, nameVal, content) => {
    let el = document.querySelector(`meta[${nameAttr}="${nameVal}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(nameAttr, nameVal);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  setMeta('name', 'title', meta.title);
  setMeta('name', 'description', meta.description);
  setMeta('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

  // Geo Tags (for India Local & Geo SEO)
  setMeta('name', 'geo.region', 'IN-DL');
  setMeta('name', 'geo.placename', 'New Delhi, India');
  setMeta('name', 'geo.position', '28.6139;77.2090');
  setMeta('name', 'ICBM', '28.6139, 77.2090');

  // Open Graph
  const shareImage = meta.image || DEFAULT_OG_IMAGE;
  setMeta('property', 'og:title', meta.title);
  setMeta('property', 'og:description', meta.description);
  setMeta('property', 'og:url', meta.canonical);
  setMeta('property', 'og:type', meta.ogType || 'website');
  setMeta('property', 'og:site_name', 'FindMyBSchool');
  setMeta('property', 'og:image', shareImage);
  setMeta('property', 'og:image:width', '1200');
  setMeta('property', 'og:image:height', '630');
  setMeta('property', 'og:image:alt', meta.title);
  setMeta('property', 'og:locale', 'en_IN');

  // Twitter Cards
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:site', '@findmybschool');
  setMeta('name', 'twitter:creator', '@findmybschool');
  setMeta('name', 'twitter:title', meta.title);
  setMeta('name', 'twitter:description', meta.description);
  setMeta('name', 'twitter:url', meta.canonical);
  setMeta('name', 'twitter:image', shareImage);

  // Canonical Link
  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', meta.canonical);

  // 3. Inject / Update Schema.org JSON-LD Structured Data
  updateSchemaLD(meta);

  // 4. Report Virtual Page View to Google Analytics (GA4)
  trackPageView(window.location.pathname + window.location.search, meta.title);
}

/**
 * Updates comprehensive Schema.org JSON-LD structured data for SEO, GEO, and AEO.
 */
function updateSchemaLD(meta) {
  let scriptEl = document.getElementById('schemaStructuredData') || document.querySelector('script[type="application/ld+json"]');
  if (scriptEl) {
    scriptEl.id = 'schemaStructuredData';
  } else {
    scriptEl = document.createElement('script');
    scriptEl.id = 'schemaStructuredData';
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }

  // Remove duplicate schema tags
  const allJsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]');
  allJsonLdScripts.forEach(el => {
    if (el !== scriptEl) {
      el.remove();
    }
  });

  const graph = [];

  // 1. WebSite Schema with Google Sitelinks SearchBox (Public Search)
  graph.push({
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
        'urlTemplate': `${BASE_URL}/?page=colleges&search={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    },
    'inLanguage': 'en-IN'
  });

  // 2. Organization / EducationalOrganization Schema
  graph.push({
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
      },
      {
        '@type': 'ContactPoint',
        'contactType': 'student counseling helpdesk',
        'telephone': '+91-8800126446',
        'email': 'admissions@findmybschool.com',
        'availableLanguage': ['English', 'Hindi']
      }
    ],
    'sameAs': [
      'https://www.linkedin.com/company/findmybschool',
      'https://www.youtube.com/@findmybschool',
      'https://www.instagram.com/findmybschool'
    ]
  });

  // 3. BreadcrumbList Schema
  if (meta.breadcrumbs && meta.breadcrumbs.length > 0) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${meta.canonical}#breadcrumb`,
      'itemListElement': meta.breadcrumbs.map((b, idx) => ({
        '@type': 'ListItem',
        'position': idx + 1,
        'name': b.name,
        'item': b.url
      }))
    });
  }

  // 4. Specific College Schema & AEO FAQs
  if (meta.collegeData) {
    const col = meta.collegeData;
    const collegeSchema = {
      '@type': 'CollegeOrUniversity',
      '@id': `${meta.canonical}#college`,
      'name': col.name,
      'alternateName': [col.shortName, col.name],
      'url': meta.canonical,
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
      },
      'hasCredential': {
        '@type': 'EducationalOccupationalCredential',
        'credentialCategory': col.programType || 'MBA'
      }
    };

    if (col.officialWebsite) {
      collegeSchema.sameAs = [col.officialWebsite];
    }

    if (col.courses && col.courses.length > 0) {
      collegeSchema.hasOfferCatalog = {
        '@type': 'OfferCatalog',
        'name': `${col.shortName} MBA & Management Programs`,
        'itemListElement': col.courses.map(course => ({
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Course',
            'name': course.name,
            'description': `${course.name} at ${col.shortName}. Duration: ${course.duration}, Intake: ${course.seats} seats.`,
            'provider': {
              '@type': 'CollegeOrUniversity',
              'name': col.name
            }
          },
          'price': course.fee?.replace(/[^0-9.]/g, '') ? course.fee : col.fees,
          'priceCurrency': 'INR',
          'category': 'TuitionFees'
        }))
      };
    }
    graph.push(collegeSchema);

    // Speakable Specification for Voice Search (Google Assistant, Siri)
    graph.push({
      '@type': 'WebPage',
      '@id': `${meta.canonical}#webpage`,
      'url': meta.canonical,
      'name': meta.title,
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['.college-main-h1', '.aeo-factsheet-grid', '.section-text-para']
      }
    });

    // College Specific FAQ Schema
    graph.push({
      '@type': 'FAQPage',
      '@id': `${meta.canonical}#faq`,
      'mainEntity': [
        {
          '@type': 'Question',
          'name': `What are the total fees for MBA/PGDM at ${col.name}?`,
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
            'text': `For general category candidates, the expected minimum cutoff for ${col.name} is ${col.cutoffCAT !== 'N/A' ? 'CAT ' + col.cutoffCAT : (col.cutoffXAT !== 'N/A' ? 'XAT ' + col.cutoffXAT : 'CMAT ' + col.cutoffCMAT)}. Reserved category candidates (NC-OBC, SC, ST, EWS) receive relaxed cutoff percentiles as per institutional norms.`
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
            'text': `${col.name} accepts scores from ${col.examsAccepted.join(', ')} for shortlisting candidates for the Personal Interview (PI) and Written Ability Test (WAT) admission rounds.`
          }
        },
        {
          '@type': 'Question',
          'name': `Can I get an education loan without collateral for ${col.name}?`,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': `Yes. Students admitted to ${col.name} are eligible for 100% collateral-free education loans up to ₹30-40 Lakhs under premier student loan schemes including the SBI Scholar Scheme, Axis Bank Education Loan, and HDFC Credila with zero margin money and expedited approvals.`
          }
        }
      ]
    });
  } else if (meta.toolSub === 'cat') {
    // 5. CAT College Predictor Tool
    graph.push({
      '@type': 'WebApplication',
      '@id': `${BASE_URL}/tools/cat-college-predictor#app`,
      'name': 'CAT College Predictor 2026: IIM Call Predictor & MBA Percentile Calculator',
      'url': `${BASE_URL}/tools/cat-college-predictor`,
      'applicationCategory': 'EducationalApplication',
      'operatingSystem': 'All (Web Browser, iOS, Android, macOS, Windows)',
      'browserRequirements': 'Requires modern web browser with HTML5 and JavaScript enabled',
      'description': 'Free CAT College Predictor 2026 & IIM Call Predictor. Calculate raw & scaled scores with slot normalization, get All-India percentiles, and explore 600+ MBA/PGDM colleges with category cutoffs & audited fees.',
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'INR',
        'availability': 'https://schema.org/InStock'
      },
      'featureList': [
        'Automated Digialm candidate response sheet URL scanning',
        'Equipercentile slot normalization across Slot 1, Slot 2, and Slot 3',
        'Sectional raw to scaled score conversion for VARC (72M), DILR (60M), QA (66M)',
        'Estimated All-India percentile calculation based on ~2.9 lakh test-takers',
        'Interview call probability prediction for 21 IIMs and 50+ premier MBA/PGDM colleges',
        'Category-wise cutoff matching across General, NC-OBC, EWS, SC, ST, PwD'
      ],
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'ratingCount': '1280',
        'reviewCount': '1280',
        'bestRating': '5',
        'worstRating': '1'
      }
    });

    graph.push({
      '@type': 'HowTo',
      '@id': `${BASE_URL}/tools/cat-college-predictor#howto`,
      'name': 'How to Predict MBA Colleges Using Your CAT 2026 Score or Response Sheet',
      'description': 'Step-by-step instructions to calculate your scaled CAT score, slot-normalized percentile, and predict matching IIM and non-IIM MBA colleges.',
      'totalTime': 'PT2M',
      'step': [
        {
          '@type': 'HowToStep',
          'position': 1,
          'name': 'Retrieve Your Response Sheet URL or Enter Attempts',
          'text': 'Log in to iimcat.ac.in using your Registration User ID and Password. Click on Candidate Response and copy the link from cdn.digialm.com, paste raw HTML source code, or input your sectional attempts manually.',
          'url': `${BASE_URL}/tools/cat-college-predictor#step1`
        },
        {
          '@type': 'HowToStep',
          'position': 2,
          'name': 'Apply Official Marking Scheme (+3 / -1 / 0)',
          'text': 'The system audits each question, awarding +3 marks for correct responses, deducting 1 mark for wrong MCQs, and applying zero penalty for Non-MCQ / TITA questions.',
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
    });

    graph.push({
      '@type': 'FAQPage',
      '@id': `${BASE_URL}/tools/cat-college-predictor#faq`,
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How does the CAT College Predictor 2026 work?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The FindMyBSchool CAT College Predictor evaluates your sectional raw marks (VARC, DILR, QA) or official response sheet Digialm URL, applies slot normalization across Slot 1, Slot 2, and Slot 3, and generates your estimated national percentile. It then cross-references your projected percentile with verified category-wise cutoffs for 21 IIMs and over 50 top-tier MBA/PGDM colleges.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What CAT percentile is required for IIM Ahmedabad, Bangalore, and Calcutta?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'For General Category engineering candidates, top IIMs (IIM Ahmedabad, IIM Bangalore, IIM Calcutta) typically require a minimum 99.2 to 99.8 percentile in CAT, alongside strong sectional scores (usually 80-85+ sectional percentile). Non-engineers with exceptional academic records (90%+ in 10th/12th/Graduation) and NC-OBC/SC/ST/EWS candidates may receive interview calls between 90 and 96 percentile.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Which top MBA/PGDM colleges accept 80 to 90 CAT percentile?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'With an 80 to 90 CAT percentile, candidates have strong shortlist prospects at reputed business schools including GIM Goa, FORE School of Management Delhi, Great Lakes Institute of Management Chennai (PGDM), TAPMI Manipal, BIMTECH Greater Noida, LIBA Chennai, and KJ Somaiya Mumbai.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Can I get an IIM interview call with an 85 to 90 percentile in CAT?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. While General Category engineering candidates need 98+ percentile, candidates belonging to NC-OBC, EWS, SC, ST, and PwD categories frequently receive shortlist calls from Baby and New IIMs (such as IIM Bodhgaya, IIM Sambalpur, IIM Sirmaur, IIM Jammu, IIM Nagpur, and IIM Amritsar) in the 80 to 90 percentile range, provided minimum sectional cutoffs (typically 65-75%ile) are satisfied.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How does CAT slot normalization affect raw scores across Slot 1, Slot 2, and Slot 3?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Because CAT is conducted across 3 separate slots with varying question difficulty, IIMs employ an equipercentile statistical normalization model. If your slot was comparatively harder, your scaled score is adjusted upward; if your slot had a higher average, the score adjusts slightly downward to ensure complete fairness across morning, afternoon, and evening slots.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Which premier non-IIM business schools accept CAT scores?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Premier non-IIM institutions accepting CAT scores include FMS Delhi (Faculty of Management Studies), SPJIMR Mumbai, MDI Gurgaon, IIT Bombay (SJMSOM), IIT Delhi (DMS), IIT Kharagpur (VGSOM), IIFT Delhi, IMI New Delhi, and IMT Ghaziabad.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What is the official CAT marking scheme for MCQs and non-MCQs (TITA)?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'In CAT 2026, correct Multiple Choice Questions (MCQs) award +3 marks, while incorrect MCQs penalize -1 mark. Non-MCQ / TITA (Type In The Answer) questions award +3 marks for a correct response, but carry ZERO negative deduction (0 penalty) for incorrect responses.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What is the difference between CAT raw score, scaled score, and percentile?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Your Raw Score is your direct points total from +3/-1 marking out of 198. The Scaled Score is your score adjusted for slot difficulty through equipercentile equating. Your Percentile represents the percentage of all national test-takers who scored equal to or less than your scaled score.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How do top IIMs calculate the Composite Score for final admissions?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Final admission offers are based on a Composite Score, not percentile alone. Top IIMs weight CAT performance (40-60%), 10th and 12th board marks (10-20%), undergraduate degree (5-15%), relevant work experience (5-10%), gender/academic diversity (5-10%), and Personal Interview / WAT performance (30-40%).'
          }
        },
        {
          '@type': 'Question',
          'name': 'How do I check my CAT response sheet link on cdn.digialm.com?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'To check your response sheet, log in to iimcat.ac.in with your User ID and Password, navigate to the Candidate Response tab, click the link to generate your response sheet, and copy the URL starting with cdn.digialm.com from your browser address bar. Paste it into the FindMyBSchool Predictor for automated sectional score and call analysis.'
          }
        }
      ]
    });
  } else if (meta.toolSub === 'xat') {
    graph.push({
      '@type': 'WebApplication',
      '@id': `${BASE_URL}/tools/xat-percentile-calculator#app`,
      'name': 'XAT Score Calculator & XLRI Percentile Predictor 2027',
      'url': `${BASE_URL}/tools/xat-percentile-calculator`,
      'applicationCategory': 'EducationalApplication',
      'operatingSystem': 'All (Web Browser, iOS, Android, macOS, Windows)',
      'description': 'Free XAT score calculator with official negative marking (+1 for correct, -0.25 for incorrect) and unattempted question penalty. Estimate XLRI BM & HRM shortlist percentiles.',
      'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'INR', 'availability': 'https://schema.org/InStock' }
    });
    graph.push({
      '@type': 'FAQPage',
      '@id': `${BASE_URL}/tools/xat-percentile-calculator#faq`,
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What is the official XAT marking scheme and negative marking penalty?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'In XAT, correct answers award +1 mark. Incorrect MCQs carry a penalty of -0.25 marks. Additionally, leaving more than 8 consecutive questions unattempted incurs a minor negative penalty of -0.10 marks per question. The General Knowledge section carries no negative marking.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What XAT cutoff is required for XLRI Business Management (BM) and HRM?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'XLRI Jamshedpur typically requires 96+ percentile in XAT for Business Management (BM) for male engineers (91+ for female engineers). For Human Resource Management (HRM), the cutoff is typically 93-95 percentile for engineers and 90-92 percentile for non-engineers.'
          }
        }
      ]
    });
  } else if (meta.toolSub === 'cmat') {
    graph.push({
      '@type': 'WebApplication',
      '@id': `${BASE_URL}/tools/cmat-percentile-calculator#app`,
      'name': 'CMAT Score Calculator & JBIMS Cutoff Predictor 2026',
      'url': `${BASE_URL}/tools/cmat-percentile-calculator`,
      'applicationCategory': 'EducationalApplication',
      'operatingSystem': 'All',
      'description': 'Calculate CMAT 400-mark score across 5 sections and predict JBIMS MMS, SIMSREE, and GIM Goa percentile cutoffs.',
      'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'INR', 'availability': 'https://schema.org/InStock' }
    });
    graph.push({
      '@type': 'FAQPage',
      '@id': `${BASE_URL}/tools/cmat-percentile-calculator#faq`,
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What score in CMAT is required for 99.9+ percentile for JBIMS Mumbai?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'To secure 99.9+ percentile in CMAT for All-India seats at JBIMS Mumbai (MMS), candidates generally need a raw score of 330 to 350+ marks out of 400.'
          }
        }
      ]
    });
  } else if (meta.scholarshipData) {
    // 6. Specific Scholarship Schema & FAQs
    const s = meta.scholarshipData;
    graph.push({
      '@type': 'FinancialProduct',
      '@id': `${meta.canonical}#scholarship`,
      'name': s.title,
      'description': s.description || `${s.title} provided by ${s.provider}. Amount: ${s.amount}. Target institutes: ${s.targetInstitutes}.`,
      'provider': {
        '@type': 'Organization',
        'name': s.provider
      },
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'INR'
      },
      'url': meta.canonical
    });

    const faqItems = (s.faqs || []).map(f => ({
      '@type': 'Question',
      'name': f.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': f.a
      }
    }));

    if (faqItems.length === 0) {
      faqItems.push(
        {
          '@type': 'Question',
          'name': `Who is eligible for ${s.title}?`,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': `${s.eligibilitySummary}. Applicable to students admitted to ${s.targetInstitutes}.`
          }
        },
        {
          '@type': 'Question',
          'name': `What is the financial grant provided by ${s.title}?`,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': `${s.title} provides financial aid of ${s.amount}, covering ${s.coverage ? s.coverage.join(', ') : 'tuition and living grants'}.`
          }
        }
      );
    }

    graph.push({
      '@type': 'FAQPage',
      '@id': `${meta.canonical}#faq`,
      'mainEntity': faqItems
    });
  } else if (meta.page === 'scholarships') {
    // 7. Scholarships Directory Hub FAQs
    graph.push({
      '@type': 'FAQPage',
      '@id': `${BASE_URL}/scholarships#faq`,
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Which MBA scholarships provide 100% tuition fee waiver in India?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Top MBA scholarships offering up to 100% tuition waivers include the Aditya Birla Scholarship Programme (₹6 Lakhs total for IIMs/XLRI), Reliance Foundation Postgraduate Scholarship (up to ₹6 Lakhs), and Need-Based Financial Assistance (NBFA) provided directly by IIM Ahmedabad, IIM Bangalore, and IIM Calcutta for families with annual income under ₹3-6 Lakhs.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Can I apply for Government of India NSP scholarships for MBA/PGDM programs?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. The Central Sector Scholarship of Top Class Education for SC/ST students, National Fellowship for OBC, and PM-YASASVI schemes on the National Scholarship Portal (NSP) provide full tuition fee coverage, living allowances (₹3,000/month), and computer grants (₹45,000 one-time) at notified institutions including all IIMs and premier universities.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Are there special MBA scholarships for women in leadership?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. Notable scholarships for female management candidates include the Loreal India For Young Women In Science, Tata Housing Scholarship for Meritorious Girl Students, and institutional fee waivers of ₹2-5 Lakhs at institutions like SPJIMR Mumbai, Great Lakes, and Masters’ Union.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How do I apply for MBA scholarships through FindMyBSchool?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Use the FindMyBSchool 30-Second Scholarship Matcher on findmybschool.com/scholarships to filter grants by parental income and entrance exam score. You can view complete document checklists, deadline alerts, and request free 1-on-1 application review mentorship.'
          }
        }
      ]
    });
  } else if (meta.mockTestData) {
    // 8. Specific Free CBT Mock Test Schema & FAQs
    const test = meta.mockTestData;
    graph.push({
      '@type': 'WebApplication',
      '@id': `${meta.canonical}#mockapp`,
      'name': test.title,
      'url': meta.canonical,
      'applicationCategory': 'EducationalApplication',
      'operatingSystem': 'All (Web Browser, iOS, Android, macOS, Windows)',
      'description': `Attempt 100% Free ${test.title} with real TCS iON simulated interface, sectional timers (${test.fullDurationMinutes} minutes), on-screen calculator, and instant All-India percentile report.`,
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'INR',
        'availability': 'https://schema.org/InStock'
      }
    });

    graph.push({
      '@type': 'FAQPage',
      '@id': `${meta.canonical}#faq`,
      'mainEntity': [
        {
          '@type': 'Question',
          'name': `Is this ${test.shortTitle || test.title} simulated on the official exam pattern?`,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': `Yes. The test accurately simulates the official Computer-Based Test (CBT) interface with ${test.totalQuestions} questions, ${test.fullDurationMinutes} minutes duration, official marking scheme (${test.markingScheme?.description || '+3/-1'}), and section navigation.`
          }
        },
        {
          '@type': 'Question',
          'name': 'Is this MBA mock test completely free?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. All mock tests on FindMyBSchool are 100% free with no credit card required. Students receive instant score breakdowns, sectional percentiles, and step-by-step solutions.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Is an on-screen calculator provided during the mock test?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. For exams that support an on-screen calculator (such as CAT), a virtual on-screen scientific calculator is built directly into the exam test interface matching the official exam environment.'
          }
        }
      ]
    });
  } else if (meta.page === 'mock-test') {
    // 9. Mock Test Hub FAQs
    graph.push({
      '@type': 'FAQPage',
      '@id': `${BASE_URL}/mock-test#faq`,
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Which free MBA mock tests are available on FindMyBSchool?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'FindMyBSchool offers 100% free full-length simulated mock tests for CAT 2026 (68 questions), XAT 2027 (95 questions), NMAT by GMAC (108 questions), SNAP (60 questions), and CMAT (100 questions) with TCS iON interface and instant percentile reports.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How is the mock test percentile calculated?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Percentiles are calculated based on historical score vs percentile equating curves across over 2.5 lakh historical test-takers, benchmarked against real exam results.'
          }
        }
      ]
    });
  } else if (meta.examData) {
    // 10. Specific Exam Schema & FAQs
    const exam = meta.examData;
    graph.push({
      '@type': 'EducationalEvent',
      '@id': `${meta.canonical}#exam`,
      'name': exam.fullName,
      'alternateName': exam.name,
      'description': `National management entrance examination conducted by ${exam.conductingBody}. Examination date: ${exam.examDate}. Registration: ${exam.registrationPeriod}. Application fee: ${exam.applicationFee}. Total questions: ${exam.totalQuestions}, Duration: ${exam.durationMinutes} mins.`,
      'organizer': {
        '@type': 'Organization',
        'name': exam.conductingBody
      }
    });

    graph.push({
      '@type': 'FAQPage',
      '@id': `${meta.canonical}#faq`,
      'mainEntity': [
        {
          '@type': 'Question',
          'name': `What is the exam date and registration schedule for ${exam.name}?`,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': `${exam.name} (${exam.fullName}) is scheduled for ${exam.examDate}. The official registration window is ${exam.registrationPeriod}. Application fee is ${exam.applicationFee}.`
          }
        },
        {
          '@type': 'Question',
          'name': `What is the question pattern and marking scheme for ${exam.name}?`,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': `${exam.name} features ${exam.totalQuestions} questions across a ${exam.durationMinutes}-minute testing duration. Marking scheme: ${exam.negativeMarking}.`
          }
        },
        {
          '@type': 'Question',
          'name': `What are the eligibility criteria for ${exam.name}?`,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': `${exam.eligibility ? exam.eligibility.join(' ') : 'Candidates must hold a Bachelor’s degree with minimum 50% marks (45% for reserved categories). Final year graduation students are eligible.'}`
          }
        },
        {
          '@type': 'Question',
          'name': `Which top B-schools accept ${exam.name} scores?`,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': `${exam.name} scores are accepted by premier management institutions including ${exam.topColleges ? exam.topColleges.map(c => c.name).slice(0, 5).join(', ') : 'leading national B-schools'}.`
          }
        }
      ]
    });
  } else if (meta.page === 'exams') {
    // 11. Exams Hub FAQs
    graph.push({
      '@type': 'FAQPage',
      '@id': `${BASE_URL}/exams#faq`,
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Which are the most important MBA entrance exams in India?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The premier national MBA entrance exams in India are CAT (for 21 IIMs, FMS, SPJIMR, MDI, IITs), XAT (for XLRI, XIMB, IMT), NMAT by GMAC (for NMIMS Mumbai), SNAP (for SIBM Pune, SCMHRD), CMAT (for JBIMS, GIM, SIMSREE), and MAT / MAH-CET for regional and national institutes.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Which entrance exam is easier: CAT or CMAT or MAT?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'CMAT and MAT are generally considered moderate in difficulty compared to CAT and XAT. While CAT emphasizes deep conceptual testing, reading comprehension, and complex DILR puzzles, CMAT and MAT test speed, accuracy, and fundamental arithmetic across a broader question set.'
          }
        }
      ]
    });
  } else if (meta.page === 'programs') {
    // 12. Programs (MBA vs PGDM) AEO FAQs
    graph.push({
      '@type': 'FAQPage',
      '@id': `${BASE_URL}/programs#faq`,
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What is the exact difference between an MBA and a PGDM in India?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'An MBA (Master of Business Administration) is an academic postgraduate degree awarded by universities or affiliated colleges governed by the University Grants Commission (UGC). A PGDM (Post Graduate Diploma in Management) is a diploma awarded by autonomous institutes approved by AICTE. Both are treated as equivalent in corporate hiring and government recruitments if the PGDM is AIU-recognized.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do top IIMs award an MBA degree or a PGDM diploma?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Following the passage of the Indian Institutes of Management Act 2017, all 21 IIMs now award a full Master of Business Administration (MBA) degree instead of the earlier Post Graduate Programme in Management (PGDM) diploma.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Is PGDM accepted for government jobs (UPSC/SSC) and PhD programs?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. When a 2-year full-time PGDM program is recognized by the Association of Indian Universities (AIU) as equivalent to an MBA, it is valid for all UPSC civil services examinations, public sector undertaking (PSU) executive hiring, and PhD admissions globally.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Which has higher return on investment: MBA or PGDM?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'ROI depends on tuition fees versus campus placement packages. University MBA programs such as FMS Delhi (~₹2L fees, ₹34.1 LPA avg CTC) and JBIMS Mumbai (~₹6L fees, ₹28 LPA avg CTC) offer the highest ROI in India, while premier autonomous PGDM programs (XLRI, SPJIMR, MDI) command top tier corporate consulting and investment banking salaries.'
          }
        }
      ]
    });
  } else if (meta.blogData) {
    // 13. Blog Article Schema
    const blog = meta.blogData;
    graph.push({
      '@type': 'BlogPosting',
      '@id': `${meta.canonical}#article`,
      'headline': blog.title,
      'description': blog.excerpt || blog.description,
      'author': {
        '@type': 'Person',
        'name': blog.author || 'FindMyBSchool Editorial Team'
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'FindMyBSchool',
        'logo': {
          '@type': 'ImageObject',
          'url': `${BASE_URL}/favicon.svg`
        }
      },
      'datePublished': blog.date || '2026-10-14',
      'dateModified': blog.date || '2026-10-14',
      'image': meta.image || DEFAULT_OG_IMAGE,
      'mainEntityOfPage': meta.canonical
    });
  } else if (meta.page === 'aiu-approved-campuses') {
    // 14. AIU Approved Campuses CollectionPage & FAQ Schema
    graph.push({
      '@type': 'CollectionPage',
      '@id': `${meta.canonical}#collection`,
      'name': meta.title,
      'description': meta.description,
      'url': meta.canonical,
      'isPartOf': {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`
      }
    });

    graph.push({
      '@type': 'FAQPage',
      '@id': `${meta.canonical}#faq`,
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What is the significance of AIU (Association of Indian Universities) approval for an MBA or PGDM?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The Association of Indian Universities (AIU) evaluates 2-year full-time PGDM programs from AICTE-approved institutions and certifies that they are 100% equivalent to a Master of Business Administration (MBA) degree. This equivalence is mandatory for government examinations (UPSC, SSC), public sector recruitment (PSUs), and PhD / doctoral admissions in India and abroad.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Which major cities in India have the highest concentration of AIU-approved campuses?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The top cities with premier AIU-approved business schools are Delhi NCR (100+ institutes including MDI, IMT, FORE, IMI), Pune (50+ institutes including SIBM, Balaji, Indira, PUMBA), Mumbai (SPJIMR, NMIMS, Welingkar, JBIMS), Bangalore (IIM Bangalore, XIME, Christ), Jaipur (Jaipuria Jaipur, MNIT), Kolkata (IIM Calcutta, IIFT, Praxis), Dehradun (UPES, Doon Business School), Lucknow (IIM Lucknow, Jaipuria Lucknow), and Indore (IIM Indore, Prestige).'
          }
        },
        {
          '@type': 'Question',
          'name': 'Is an AIU-approved PGDM eligible for UPSC civil services and PSU executive recruitment?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. When an autonomous institution’s PGDM is recognized by AIU as equivalent to an MBA degree, graduates are fully eligible to apply for all UPSC examinations, State Public Service Commissions, and corporate executive openings across Maharatna and Navratna PSUs.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How does FindMyBSchool verify AIU-approved campuses?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'FindMyBSchool audits college accreditations against official Gazette notifications, AICTE mandatory disclosure filings, NBA accreditation status, and AIU equivalence records to ensure 100% authentic, transparent admission data for students.'
          }
        }
      ]
    });
  } else {
    // 15. Homepage Default Flagship FAQs
    graph.push({
      '@type': 'FAQPage',
      '@id': `${BASE_URL}/#faq`,
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What is FindMyBSchool?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'FindMyBSchool (findmybschool.com) is India’s premier verified business school search and admission guidance portal. It provides 100% human-verified data on 600+ MBA and PGDM colleges, audited 2-year tuition fees, real CAT/XAT cutoffs, and slot-normalized percentile calculators.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What is the main difference between an MBA and a PGDM degree in India?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'An MBA is an academic degree awarded by university-affiliated institutions (such as FMS Delhi, JBIMS Mumbai, and PUMBA) under UGC regulations. A PGDM is an industry-focused diploma offered by autonomous B-schools (such as IIMs, XLRI Jamshedpur, SPJIMR Mumbai, and MDI Gurgaon) approved by AICTE. Both are treated as equivalent in corporate hiring and government recruitments when AIU accredited.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Which MBA colleges offer the highest Return on Investment (ROI) in India?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The top MBA colleges with the highest ROI in India are FMS Delhi (Tuition fee ~₹2 Lakhs with average CTC of ₹34.1 LPA), JBIMS Mumbai (Tuition fee ~₹6 Lakhs with average CTC of ₹28 LPA), TISS Mumbai (Tuition fee ~₹2.5 Lakhs with average CTC of ₹27.2 LPA), and Delhi School of Economics (DSE Delhi, Tuition fee ~₹35,000 with average CTC of ₹14 LPA).'
          }
        },
        {
          '@type': 'Question',
          'name': 'What minimum percentile is required in CAT for top IIMs?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'For general category candidates, top IIMs (IIM Ahmedabad, IIM Bangalore, IIM Calcutta) typically require a minimum 99.0 to 99.8 percentile in CAT, alongside strong 10th/12th/graduation academics and gender/academic diversity points. Non-engineers and reserved category candidates may receive interview calls at 90 to 96 percentile.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How does the CAT Score and Percentile Calculator on FindMyBSchool work?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The FindMyBSchool CAT calculator parses the candidate’s official response sheet HTML, computes positive and negative marking (+3 for correct, -1 for wrong MCQ, 0 for TITA), applies sectional slot normalization across Slot 1, Slot 2, and Slot 3, and generates estimated percentiles based on historical test-taker distribution.'
          }
        }
      ]
    });
  }

  // Build root JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': graph
  };

  scriptEl.textContent = JSON.stringify(jsonLd, null, 2);
}
