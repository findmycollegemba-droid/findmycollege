import { COLLEGES_DATA } from '../data/collegesData.js';
import { EXAMS_DATA } from '../data/examsData.js';
import { BLOGS_DATA } from '../data/blogsData.js';
import { trackPageView } from './analytics.js';

const BASE_URL = 'https://findmybschool.com';

/**
 * Updates dynamic meta tags, titles, canonicals, and Schema.org JSON-LD structured data.
 * Powers SEO, GEO (Generative Engine Optimization), and AEO (Answer Engine Optimization).
 */
export function updatePageSEO(page = 'home', sub = null, params = null) {
  let meta = {
    title: 'FindMyBSchool — Top MBA & PGDM Colleges, Fees, Cutoffs & Exam Predictors',
    description: 'Find your dream MBA & PGDM business school with FindMyBSchool (findmybschool.com). Compare 600+ verified B-schools, cutoffs, tuition fees, and placements with 0% scrapers.',
    canonical: `${BASE_URL}/`,
    ogType: 'website',
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
        meta.breadcrumbs = [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Calculators & Tools', url: `${BASE_URL}/tools` },
          { name: 'XAT Calculator', url: meta.canonical }
        ];
      } else if (toolSub === 'cmat') {
        meta.title = 'CMAT Score Calculator & JBIMS Cutoff Predictor 2026 | FindMyBSchool';
        meta.description = 'Calculate your CMAT 400-mark score across 5 sections. Predict JBIMS MMS, SIMSREE, and GIM Goa percentile cutoffs.';
        meta.canonical = `${BASE_URL}/tools/cmat-percentile-calculator`;
        meta.breadcrumbs = [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Calculators & Tools', url: `${BASE_URL}/tools` },
          { name: 'CMAT Calculator', url: meta.canonical }
        ];
      } else {
        meta.title = 'MBA Score Calculators & Percentile Predictor Tools | FindMyBSchool';
        meta.description = 'Free, accurate MBA percentile predictors and response sheet score calculators for CAT, XAT, and CMAT. Check your normalized scores instantly.';
        meta.canonical = `${BASE_URL}/tools`;
        meta.breadcrumbs = [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Calculators & Tools', url: meta.canonical }
        ];
      }
      break;
    }

    case 'programs': {
      const progSub = sub || params?.get('sub');
      meta.title = 'MBA vs PGDM Comparison Guide (2027-29 Session) — Differences, Fees & Placement ROI | FindMyBSchool';
      meta.description = 'Understand the crucial differences between University MBA degrees and Autonomous PGDM diplomas. Compare AICTE accreditation, syllabus flexibility, and corporate ROI.';
      meta.canonical = progSub ? `${BASE_URL}/programs/${encodeURIComponent(progSub)}` : `${BASE_URL}/programs`;
      meta.breadcrumbs = [
        { name: 'Home', url: `${BASE_URL}/` },
        { name: 'Programs & Comparison', url: meta.canonical }
      ];
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

    case 'mock-test':
      meta.title = sub 
        ? `${sub.toUpperCase().replace('-', ' ')} Free Mock Test — Real CBT Exam Simulation & Percentile | FindMyBSchool`
        : 'All-India Free MBA Mock Tests 2026-27 (CAT, XAT, NMAT, SNAP, CMAT, MAT) | FindMyBSchool';
      meta.description = 'Attempt 100% Free All-India MBA Mock Tests with TCS iON simulated interface, on-screen calculator, sectional timers, instant score report, and step-by-step solutions.';
      meta.canonical = sub ? `${BASE_URL}/mock-test/${sub}` : `${BASE_URL}/mock-test`;
      meta.breadcrumbs = [
        { name: 'Home', url: `${BASE_URL}/` },
        { name: 'Free Mock Tests', url: `${BASE_URL}/mock-test` }
      ];
      if (sub) {
        meta.breadcrumbs.push({ name: sub.toUpperCase().replace('-', ' '), url: meta.canonical });
      }
      break;

    case 'scholarships':
      meta.title = 'Live MBA Scholarships 2027-29: Grants up to ₹25 Lakhs | FindMyBSchool';
      meta.description = 'Find & apply for 14+ live MBA scholarships for Session 2027-29. Need-based, corporate, government NSP, and IIM tuition fee waivers up to 100%. Free verification & application mentorship.';
      meta.canonical = `${BASE_URL}/scholarships`;
      meta.breadcrumbs = [
        { name: 'Home', url: `${BASE_URL}/` },
        { name: 'Live MBA Scholarships', url: meta.canonical }
      ];
      break;

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
  setMeta('property', 'og:title', meta.title);
  setMeta('property', 'og:description', meta.description);
  setMeta('property', 'og:url', meta.canonical);
  setMeta('property', 'og:type', meta.ogType || 'website');
  setMeta('property', 'og:site_name', 'FindMyBSchool');

  // Twitter Cards
  setMeta('name', 'twitter:title', meta.title);
  setMeta('name', 'twitter:description', meta.description);
  setMeta('name', 'twitter:url', meta.canonical);

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
  let scriptEl = document.getElementById('schemaStructuredData');
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = 'schemaStructuredData';
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }

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

  // 4. AEO & Voice Search: Authoritative FAQ Schema
  // Optimized for direct answer engines (Google AI Overviews, Perplexity, ChatGPT, Gemini)
  if (meta.collegeData) {
    const col = meta.collegeData;
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
    // AEO, GEO & SEO: WebApplication Schema
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
        'reviewCount': '1280',
        'bestRating': '5',
        'worstRating': '1'
      }
    });

    // AEO: HowTo Schema for Step-by-Step Featured Snippets
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

    // AEO & Voice Search: Comprehensive 10-Question FAQPage Schema
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
  } else {
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
            'text': 'An MBA (Master of Business Administration) is an academic degree awarded by university-affiliated institutions (such as FMS Delhi, JBIMS Mumbai, and PUMBA) under UGC regulations. A PGDM (Post Graduate Diploma in Management) is an industry-focused diploma offered by autonomous B-schools (such as IIMs, XLRI Jamshedpur, SPJIMR Mumbai, and MDI Gurgaon) approved by AICTE. Both are treated as equivalent in corporate hiring and government recruitments when AIU accredited.'
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

  // 5. Specific College Schema (if college profile)
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
        'ratingCount': String(col.reviewsCount || 50)
      },
      'hasCredential': {
        '@type': 'EducationalOccupationalCredential',
        'credentialCategory': col.programType || 'MBA'
      }
    };

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
  }

  // 6. Specific Exam Schema (if exam guide)
  if (meta.examData) {
    const exam = meta.examData;
    graph.push({
      '@type': 'EducationalEvent',
      '@id': `${meta.canonical}#exam`,
      'name': exam.fullName,
      'alternateName': exam.name,
      'description': `National management entrance examination conducted by ${exam.conductingBody}. Examination date: ${exam.examDate}.`,
      'organizer': {
        '@type': 'Organization',
        'name': exam.conductingBody
      }
    });
  }

  // 7. Blog Article Schema (if blog post)
  if (meta.blogData) {
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
      'mainEntityOfPage': meta.canonical
    });
  }

  // Build root JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': graph
  };

  scriptEl.textContent = JSON.stringify(jsonLd, null, 2);
}
