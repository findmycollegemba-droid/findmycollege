import { COLLEGES_DATA } from '../data/collegesData.js';
import { EXAMS_DATA } from '../data/examsData.js';
import { BLOGS_DATA } from '../data/blogsData.js';

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
        meta.title = `${specificCollege.name} (${specificCollege.shortName}) — Fees, Cutoffs, Placements & Admission 2026 | FindMyBSchool`;
        meta.description = `Get complete 2026-27 admission details for ${specificCollege.name}, ${specificCollege.location}. Audited 2-year fee: ${specificCollege.fees}, Avg CTC: ${specificCollege.avgSalary}, Cutoffs: CAT ${specificCollege.cutoffCAT || 'N/A'}.`;
        meta.canonical = `${BASE_URL}/colleges/${encodeURIComponent(specificCollege.id)}`;
        meta.ogType = 'article';
        meta.collegeData = specificCollege;
        meta.breadcrumbs = [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Colleges', url: `${BASE_URL}/colleges` },
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
        meta.title = `Top MBA & PGDM Colleges in ${cityParam} — Fees, Placements & Cutoffs 2026 | FindMyBSchool`;
        meta.description = `Explore top management institutes in ${cityParam}. Compare AICTE & UGC approved MBA/PGDM colleges, audited fees, average salaries, and exam cutoffs.`;
        meta.canonical = `${BASE_URL}/colleges/city/${encodeURIComponent(cityParam.toLowerCase())}`;
        meta.breadcrumbs = [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Colleges', url: `${BASE_URL}/colleges` },
          { name: cityParam, url: meta.canonical }
        ];
      } else if (typeParam) {
        const typeName = typeParam.toUpperCase();
        meta.title = `Top ${typeName} Colleges in India — Fees, NIRF Rankings & Cutoffs 2026 | FindMyBSchool`;
        meta.description = `Find the best ${typeName} colleges in India. Comprehensive comparison of university MBA vs autonomous PGDM institutes, audited fees, and placements.`;
        meta.canonical = `${BASE_URL}/colleges/${encodeURIComponent(typeParam.toLowerCase())}`;
        meta.breadcrumbs = [
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Colleges', url: `${BASE_URL}/colleges` },
          { name: typeName, url: meta.canonical }
        ];
      } else {
        meta.title = 'Explore 600+ Verified MBA & PGDM Colleges in India | FindMyBSchool';
        meta.description = 'Filter and compare 600+ top Indian business schools by fees, NIRF rank, average CTC package, CAT/XAT/CMAT cutoffs, and city location with 0% scrapers.';
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
        meta.title = 'CAT College Predictor 2026: Find MBA Colleges by Percentile | FindMyBSchool';
        meta.description = 'Enter your percentile, see possible MBA/PGDM colleges with fees and cutoffs. Predict your admission chances with FindMyBSchool\'s 2026 tool.';
        meta.canonical = `${BASE_URL}/tools/cat-college-predictor`;
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
      meta.title = 'MBA vs PGDM Comparison Guide 2026 — Differences, Fees & Placement ROI | FindMyBSchool';
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
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'admissions support',
      'telephone': '+91-8800126446',
      'email': 'admissions@findmybschool.com',
      'availableLanguage': ['English', 'Hindi']
    },
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

  // 5. Specific College Schema (if college profile)
  if (meta.collegeData) {
    const col = meta.collegeData;
    graph.push({
      '@type': 'CollegeOrUniversity',
      '@id': `${meta.canonical}#college`,
      'name': col.name,
      'alternateName': col.shortName,
      'description': `${col.name} in ${col.location} offering ${col.programType} programs. Audited fees: ${col.fees}, Average placement CTC: ${col.avgSalary}.`,
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': col.city || col.location,
        'addressCountry': 'IN'
      },
      'hasCredential': {
        '@type': 'EducationalOccupationalCredential',
        'credentialCategory': col.programType || 'MBA'
      }
    });
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
