/**
 * AIU Approved Campuses (City-Wise) Directory & Official Gazette
 * Extracted & Verified from the Official AIU June 2026 PGDM Institution List:
 * https://aiu.ac.in/wp-content/uploads/docs/2026/06/PGDM_Institution_List_June_2026.pdf
 * 
 * Covering 9 Major Management Hubs:
 * 1. Delhi NCR
 * 2. Pune
 * 3. Mumbai
 * 4. Bangalore
 * 5. Jaipur
 * 6. Kolkata
 * 7. Dehradun
 * 8. Lucknow
 * 9. Indore
 */

import { COLLEGES_DATA } from '../data/collegesData.js';
import { 
  AIU_DOCUMENT_INFO, 
  AIU_CITY_GAZETTE_STATS, 
  AIU_OFFICIAL_LIST 
} from '../data/aiuOfficialData.js';

export const AIU_CITIES_DATA = {
  'all': {
    id: 'all',
    name: 'All 9 Cities',
    badge: 'Pan-India AIU Directory',
    aiuCount: 86,
    heroStats: {
      avgFee: '₹4.0L – ₹28.5L',
      avgSalary: '₹13.5 LPA',
      highestSalary: '₹40.0+ LPA',
      roiRating: 'High to Ultra High',
      keySectors: 'Consulting, BFSI, Tech, Analytics, Healthcare, Manufacturing'
    },
    overview: 'Complete city-wise directory of verified business schools holding official Association of Indian Universities (AIU) equivalence and university recognition across 9 major management education clusters in India.',
    whyChoose: '100% legal equivalence to MBA degrees, fully valid for UPSC civil services, PSU executive recruitments, and global university PhD / doctoral admissions.'
  },
  'delhi-ncr': {
    id: 'delhi-ncr',
    name: 'Delhi NCR',
    fullName: 'Delhi National Capital Region (Delhi, Noida, Gurgaon, Ghaziabad, Greater Noida)',
    badge: 'India’s #1 Corporate Hub',
    aiuCount: 35,
    heroStats: {
      avgFee: '₹8.5L – ₹24.5L',
      avgSalary: '₹14.8 LPA',
      highestSalary: '₹34.1 LPA (FMS)',
      roiRating: 'Very High (FMS, MDI, IIFT)',
      keySectors: 'Consulting, BFSI, Tech, Analytics, FMCG'
    },
    aliases: ['delhi', 'noida', 'gurugram', 'gurgaon', 'ghaziabad', 'greater noida', 'faridabad', 'delhi-ncr', 'modinagar'],
    overview: 'Delhi-NCR stands as North India’s financial and corporate nerve center. Host to 35 official AIU-equated PGDM institutions such as MDI Gurgaon (S.No 89), IMT Ghaziabad (S.No 50), FORE School (S.No 26), IMI New Delhi (S.No 69), NDIM (S.No 99), BIMTECH (S.No 12), and LBSIM (S.No 87) alongside premier university institutions like FMS Delhi and IIFT.',
    whyChoose: 'Highest recruiter concentration in India with direct access to multinational corporate headquarters, international airport connectivity, and strong alumni networks across global conglomerates.'
  },
  'pune': {
    id: 'pune',
    name: 'Pune',
    fullName: 'Pune (The Oxford of the East)',
    badge: 'Automobile & IT Powerhouse',
    aiuCount: 14,
    heroStats: {
      avgFee: '₹6.5L – ₹18.0L',
      avgSalary: '₹12.5 LPA',
      highestSalary: '₹35.0 LPA (SIBM)',
      roiRating: 'High (PUMBA, SIBM, Balaji)',
      keySectors: 'IT Services, Automotive, Engineering, Operations, BFSI'
    },
    aliases: ['pune', 'lavale', 'hinjewadi', 'tathawade', 'wakad', 'balewadi'],
    overview: 'Renowned as the educational capital of Maharashtra, Pune features 14 official AIU-equated PGDM institutions including Balaji University BIMM (S.No 10), BITM (S.No 9), BIIB (S.No 11), National Insurance Academy (S.No 93), NIBM Pune (S.No 96), PIBM (S.No 104), and Kirloskar Institute (S.No 84), alongside deemed university giants SIBM Pune and SCMHRD.',
    whyChoose: 'Outstanding lifestyle, lower cost of living compared to Mumbai, vibrant student community, and booming operational hiring in IT & automotive sectors.'
  },
  'mumbai': {
    id: 'mumbai',
    name: 'Mumbai',
    fullName: 'Mumbai & Navi Mumbai (Financial Capital of India)',
    badge: 'Finance & Banking Capital',
    aiuCount: 10,
    heroStats: {
      avgFee: '₹9.0L – ₹24.0L',
      avgSalary: '₹16.2 LPA',
      highestSalary: '₹40.0+ LPA (SPJIMR)',
      roiRating: 'Exceptional (JBIMS, TISS, SPJIMR)',
      keySectors: 'Investment Banking, Private Equity, FinTech, Media, Retail'
    },
    aliases: ['mumbai', 'navi mumbai', 'thane', 'bandra', 'kurla', 'chembur', 'mira road', 'karjat'],
    overview: 'As the financial capital of India, Mumbai hosts 10 premier institutions with official AIU MBA equivalence including SPJIMR Mumbai (S.No 106), WeSchool Welingkar (S.No 103), KJ Somaiya (S.No 85), ITM Navi Mumbai (S.No 58), NL Dalmia (S.No 101), Chetana (S.No 17), and Kohinoor (S.No 86), alongside university leaders JBIMS and NMIMS.',
    whyChoose: 'Unrivaled summer internships and placement opportunities in Investment Banking, Treasury, Corporate Finance, and FMCG brand management.'
  },
  'bangalore': {
    id: 'bangalore',
    name: 'Bangalore',
    fullName: 'Bangalore / Bengaluru (Silicon Valley of India)',
    badge: 'Tech & Venture Capital Capital',
    aiuCount: 15,
    heroStats: {
      avgFee: '₹7.5L – ₹22.0L',
      avgSalary: '₹13.8 LPA',
      highestSalary: '₹35.3 LPA (IIM-B)',
      roiRating: 'High (XIME, Christ, Alliance)',
      keySectors: 'Product Management, Venture Capital, IT SaaS, Analytics, FinTech'
    },
    aliases: ['bangalore', 'bengaluru', 'electronic city', 'electronics city', 'whitefield'],
    overview: 'Bangalore is the innovation capital of India, featuring 15 official AIU-equated PGDM institutions including IIM Bangalore (S.No 42), XIME Bangalore (S.No 119), Welingkar Bangalore (S.No 118), JAGSoM (S.No 62), IBA Bangalore (S.No 48), GIBS (S.No 32), ISBR (S.No 53), ISME (S.No 54), and IIPM (S.No 72).',
    whyChoose: 'Direct corporate campus visits by global tech giants, deep product management hiring, and a thriving entrepreneurial startup ecosystem.'
  },
  'jaipur': {
    id: 'jaipur',
    name: 'Jaipur',
    fullName: 'Jaipur (Pink City Management Gateway)',
    badge: 'Premier Rajasthan Hub',
    aiuCount: 3,
    heroStats: {
      avgFee: '₹4.5L – ₹14.0L',
      avgSalary: '₹8.5 LPA',
      highestSalary: '₹22.0 LPA (Jaipuria)',
      roiRating: 'High ROI & Affordable Tuition',
      keySectors: 'Banking, Health Management, IT, Hospitality, Logistics'
    },
    aliases: ['jaipur'],
    overview: 'Jaipur hosts 3 official AIU-equated institutions including Jaipuria Institute of Management Jaipur (S.No 78), IIHMR University (S.No 46), and Institute of Rural Management IRM (S.No 60), offering high affordability and strong northern placements.',
    whyChoose: 'Balanced academic fees, modern infrastructure, pan-India pooled placements through flagship multi-campus networks, and strategic proximity to Delhi-NCR.'
  },
  'kolkata': {
    id: 'kolkata',
    name: 'Kolkata',
    fullName: 'Kolkata (Eastern India’s Premier Business Hub)',
    badge: 'Eastern Gateway of Trade',
    aiuCount: 5,
    heroStats: {
      avgFee: '₹5.5L – ₹18.0L',
      avgSalary: '₹11.2 LPA',
      highestSalary: '₹35.1 LPA (IIM-C)',
      roiRating: 'High (IISWBM, IIFT, Praxis)',
      keySectors: 'BFSI, FMCG, Supply Chain, Big Data, Public Sector'
    },
    aliases: ['kolkata', 'calcutta', 'joka', 'salt lake', '24 parganas'],
    overview: 'Kolkata is home to 5 official AIU-equated institutions including IIM Calcutta (S.No 43), IMI Kolkata (S.No 70), Praxis Business School (S.No 102), Globsyn Business School (S.No 29), and Calcutta Business School (S.No 14).',
    whyChoose: 'High affordability, top data science and analytics specializations, and unmatched hiring from FMCG, steel, logistics, and state enterprises.'
  },
  'dehradun': {
    id: 'dehradun',
    name: 'Dehradun',
    fullName: 'Dehradun (Education Capital of Uttarakhand)',
    badge: 'Scenic Residential Hub (UGC MBA)',
    aiuCount: 0,
    heroStats: {
      avgFee: '₹4.0L – ₹16.0L',
      avgSalary: '₹8.8 LPA',
      highestSalary: '₹20.0 LPA (UPES)',
      roiRating: 'Moderate to High',
      keySectors: 'Energy, Oil & Gas, Supply Chain, Tourism, Digital Business'
    },
    aliases: ['dehradun', 'dehra dun'],
    overview: 'Management colleges in Dehradun (such as UPES School of Business, Graphic Era University, DIT University, and IMS Unison) operate as UGC-recognized State Private Universities conferring statutory Master of Business Administration (MBA) degrees under Section 22 of the UGC Act 1956. University MBA degrees are inherently equivalent to any Indian university degree and do not require standalone AIU equivalence certificates.',
    whyChoose: 'Safe, scenic residential campuses, specialized sector-focused MBA programs (Energy, Aviation, International Logistics), and high student satisfaction.'
  },
  'lucknow': {
    id: 'lucknow',
    name: 'Lucknow',
    fullName: 'Lucknow (Central Uttar Pradesh Commercial Hub)',
    badge: 'Capital Leadership Hub',
    aiuCount: 2,
    heroStats: {
      avgFee: '₹4.0L – ₹15.0L',
      avgSalary: '₹10.5 LPA',
      highestSalary: '₹32.2 LPA (IIM-L)',
      roiRating: 'Very High (IIM-L, Jaipuria)',
      keySectors: 'Agribusiness, Banking, Retail, Telecom, Public Policy'
    },
    aliases: ['lucknow'],
    overview: 'Lucknow is home to 2 premier official AIU-equated institutions including IIM Lucknow (S.No 40) and Jaipuria Institute of Management Lucknow (S.No 80 with approvals in PGDM, Retail Management, and Financial Services).',
    whyChoose: 'Premier brand prestige with IIM Lucknow and Jaipuria Lucknow, central geographic location, and expanding corporate retail & fintech hubs.'
  },
  'indore': {
    id: 'indore',
    name: 'Indore',
    fullName: 'Indore (Commercial Capital of Central India)',
    badge: 'India’s Cleanest City Hub',
    aiuCount: 2,
    heroStats: {
      avgFee: '₹3.5L – ₹14.0L',
      avgSalary: '₹9.8 LPA',
      highestSalary: '₹30.1 LPA (IIM-I)',
      roiRating: 'Exceptional Value',
      keySectors: 'FMCG, Pharmaceuticals, IT, Manufacturing, E-Commerce'
    },
    aliases: ['indore'],
    overview: 'Indore is celebrated as India’s cleanest city and hosts 2 official AIU-equated institutions including IIM Indore (S.No 41) and Jaipuria Institute of Management Indore (S.No 81).',
    whyChoose: 'Vibrant entrepreneurial ecosystem, low cost of living, top pharmaceutical and manufacturing headquarters, and dual IIM/IIT presence.'
  }
};

// Interactive state
let aiuPageState = {
  activeCity: 'all',
  activeView: 'gazette', // 'gazette' (official 86 list) or 'directory' (all 370+ colleges)
  searchQuery: '',
  selectedFee: 'all',
  selectedExam: 'all',
  selectedDegree: 'all',
  selectedSort: 'nirf'
};

/**
 * Filter colleges matching the selected city from COLLEGES_DATA
 */
export function getCollegesForCity(cityKey) {
  if (!cityKey || cityKey === 'all') {
    const allAliases = Object.values(AIU_CITIES_DATA)
      .filter(c => c.aliases)
      .flatMap(c => c.aliases);
    
    return COLLEGES_DATA.filter(col => {
      const fullText = `${col.city || ''} ${col.location || ''} ${col.state || ''}`.toLowerCase();
      return allAliases.some(a => fullText.includes(a));
    });
  }

  const cityMeta = AIU_CITIES_DATA[cityKey];
  if (!cityMeta || !cityMeta.aliases) return [];

  return COLLEGES_DATA.filter(col => {
    const fullText = `${col.city || ''} ${col.location || ''} ${col.state || ''}`.toLowerCase();
    return cityMeta.aliases.some(a => fullText.includes(a));
  });
}

/**
 * Filter official AIU gazette institutes by city
 */
export function getOfficialAiuForCity(cityKey) {
  if (!cityKey || cityKey === 'all') {
    return AIU_OFFICIAL_LIST;
  }
  return AIU_OFFICIAL_LIST.filter(item => item.city === cityKey);
}

/**
 * Main render function for AIU Approved Campuses page
 */
export function renderAiuApprovedPage(initialCity = null) {
  const validCity = (initialCity && AIU_CITIES_DATA[initialCity.toLowerCase()]) 
    ? initialCity.toLowerCase() 
    : 'all';
  
  aiuPageState.activeCity = validCity;

  // Calculate counts for each city
  const cityCounts = {};
  let totalAcrossAll = 0;
  Object.keys(AIU_CITIES_DATA).forEach(k => {
    if (k !== 'all') {
      const cnt = getCollegesForCity(k).length;
      cityCounts[k] = cnt;
      totalAcrossAll += cnt;
    }
  });
  cityCounts['all'] = totalAcrossAll;

  const currentCityMeta = AIU_CITIES_DATA[validCity] || AIU_CITIES_DATA['all'];

  return `
    <div class="page-aiu-approved">
      
      <!-- HERO HEADER -->
      <header class="aiu-hero">
        <div class="aiu-hero-glow"></div>
        <div class="aiu-container">
          <div class="aiu-live-badge">
            <span>🏛️</span>
            <span>Association of Indian Universities (AIU) Official Equivalence Gazette • June 2026</span>
          </div>
          
          <h1 class="aiu-hero-title">
            Top <span class="aiu-gradient-text">AIU Approved Campuses</span> in India (City-Wise Directory)
          </h1>
          <p class="aiu-hero-subtitle">
            Explore verified business schools with official Association of Indian Universities (AIU) MBA Equivalence across Delhi NCR, Pune, Mumbai, Bangalore, Jaipur, Kolkata, Dehradun, Lucknow, and Indore. Sourced directly from the official June 2026 AIU Gazette with audited fees, entrance cutoffs, and audited placements.
          </p>

          <div class="aiu-hero-stats">
            <div class="aiu-stat-box">
              <div class="aiu-stat-number">86 Campuses</div>
              <div class="aiu-stat-label">AIU Gazette Listed (140 Programs)</div>
            </div>
            <div class="aiu-stat-box">
              <div class="aiu-stat-number">${totalAcrossAll}+ Verified</div>
              <div class="aiu-stat-label">Total City Hub Colleges</div>
            </div>
            <div class="aiu-stat-box">
              <div class="aiu-stat-number">100% MBA Parity</div>
              <div class="aiu-stat-label">UPSC, PSU &amp; Ph.D Valid</div>
            </div>
            <div class="aiu-stat-box">
              <div class="aiu-stat-number">Up to ₹40+ LPA</div>
              <div class="aiu-stat-label">Top Placement Packages</div>
            </div>
          </div>
        </div>
      </header>

      <!-- STICKY CITY NAVIGATION SELECTOR -->
      <nav class="aiu-city-nav-section" id="aiuCityNavBar">
        <div class="aiu-city-tabs-scroll">
          <button type="button" class="aiu-city-tab-btn ${validCity === 'all' ? 'active' : ''}" data-city-tab="all">
            <span>All 9 Cities</span>
            <span class="aiu-tab-count">${cityCounts['all']}</span>
          </button>
          
          <button type="button" class="aiu-city-tab-btn ${validCity === 'delhi-ncr' ? 'active' : ''}" data-city-tab="delhi-ncr">
            <span>Delhi NCR</span>
            <span class="aiu-tab-count">${cityCounts['delhi-ncr']}</span>
          </button>

          <button type="button" class="aiu-city-tab-btn ${validCity === 'pune' ? 'active' : ''}" data-city-tab="pune">
            <span>Pune</span>
            <span class="aiu-tab-count">${cityCounts['pune']}</span>
          </button>

          <button type="button" class="aiu-city-tab-btn ${validCity === 'mumbai' ? 'active' : ''}" data-city-tab="mumbai">
            <span>Mumbai</span>
            <span class="aiu-tab-count">${cityCounts['mumbai']}</span>
          </button>

          <button type="button" class="aiu-city-tab-btn ${validCity === 'bangalore' ? 'active' : ''}" data-city-tab="bangalore">
            <span>Bangalore</span>
            <span class="aiu-tab-count">${cityCounts['bangalore']}</span>
          </button>

          <button type="button" class="aiu-city-tab-btn ${validCity === 'jaipur' ? 'active' : ''}" data-city-tab="jaipur">
            <span>Jaipur</span>
            <span class="aiu-tab-count">${cityCounts['jaipur']}</span>
          </button>

          <button type="button" class="aiu-city-tab-btn ${validCity === 'kolkata' ? 'active' : ''}" data-city-tab="kolkata">
            <span>Kolkata</span>
            <span class="aiu-tab-count">${cityCounts['kolkata']}</span>
          </button>

          <button type="button" class="aiu-city-tab-btn ${validCity === 'dehradun' ? 'active' : ''}" data-city-tab="dehradun">
            <span>Dehradun</span>
            <span class="aiu-tab-count">${cityCounts['dehradun']}</span>
          </button>

          <button type="button" class="aiu-city-tab-btn ${validCity === 'lucknow' ? 'active' : ''}" data-city-tab="lucknow">
            <span>Lucknow</span>
            <span class="aiu-tab-count">${cityCounts['lucknow']}</span>
          </button>

          <button type="button" class="aiu-city-tab-btn ${validCity === 'indore' ? 'active' : ''}" data-city-tab="indore">
            <span>Indore</span>
            <span class="aiu-tab-count">${cityCounts['indore']}</span>
          </button>
        </div>
      </nav>

      <div class="aiu-container">
        
        <!-- STRATEGIC CITY DOSSIER MOUNT -->
        <div id="aiuCityDossierMount">
          ${renderCityDossierContent(currentCityMeta)}
        </div>

        <!-- OFFICIAL AIU GAZETTE JUNE 2026 DOCUMENT CALLOUT BANNER -->
        <div class="aiu-gazette-callout">
          <div class="aiu-gazette-callout-text">
            <h4>
              <span>📜</span>
              <span>Official AIU Gazette Source: Association of Indian Universities (June 2026 List)</span>
            </h4>
            <p>
              Directory curated from the official AIU Gazette document (<strong>PGDM_Institution_List_June_2026.pdf</strong>). Grants 2-year full-time PGDM programs 100% legal equivalence with Master of Business Administration (MBA) degrees for Civil Services, PSU recruitment, and global Ph.D admissions.
            </p>
          </div>
          <a href="${AIU_DOCUMENT_INFO.officialPdfUrl}" target="_blank" rel="noopener noreferrer" class="aiu-gazette-doc-btn">
            <span>📄 View Official AIU PDF (June 2026) ↗</span>
          </a>
        </div>

        <!-- DEHRADUN SPECIAL UGC MBA STATUTORY NOTICE (VISIBLE WHEN DEHRADUN ACTIVE) -->
        <div id="aiuDehradunExplainerMount" style="${validCity === 'dehradun' ? '' : 'display:none;'}">
          <div class="aiu-dehradun-explainer">
            <h4>
              <span>ℹ️</span>
              <span>Dehradun Regulatory Notice: Direct UGC Statutory MBA Degree Status</span>
            </h4>
            <p>
              Management colleges in Dehradun (such as UPES School of Business, Graphic Era University, DIT University, and IMS Unison University) operate as UGC-recognized State Private Universities or deemed universities that confer statutory Master of Business Administration (MBA) degrees directly under Section 22 of the UGC Act 1956. Unlike autonomous institutes awarding PGDM diplomas, university MBA degrees are inherently equivalent to any Indian university post-graduate degree and do not require standalone AIU equivalence certificates.
            </p>
          </div>
        </div>

        <!-- VIEW MODE SWITCHER TABS -->
        <div class="aiu-view-switcher">
          <button type="button" class="aiu-view-btn ${aiuPageState.activeView === 'gazette' ? 'active' : ''}" id="viewModeGazetteBtn">
            <span>🏛️ Official AIU Gazette List (June 2026)</span>
            <span class="aiu-view-badge-count" id="gazetteViewBadgeCount">86 Hubs</span>
          </button>
          <button type="button" class="aiu-view-btn ${aiuPageState.activeView === 'directory' ? 'active' : ''}" id="viewModeDirectoryBtn">
            <span>📊 All Verified MBA &amp; PGDM Directory</span>
            <span class="aiu-view-badge-count" id="directoryViewBadgeCount">${totalAcrossAll}+</span>
          </button>
        </div>

        <!-- SEARCH & MULTIFACTOR FILTER CONTROLS -->
        <div class="aiu-filter-bar">
          <div class="aiu-filter-row">
            
            <div class="aiu-search-box">
              <svg class="aiu-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input type="text" class="aiu-search-input" id="aiuSearchInput" placeholder="Search by college name, AIU serial number, exam, or keyword..." />
            </div>

            <select class="aiu-filter-select" id="aiuFeeFilter">
              <option value="all">All Tuition Fees</option>
              <option value="under6">Under ₹6 Lakhs (High ROI)</option>
              <option value="6to12">₹6L – ₹12 Lakhs</option>
              <option value="12to18">₹12L – ₹18 Lakhs</option>
              <option value="above18">Above ₹18 Lakhs</option>
            </select>

            <select class="aiu-filter-select" id="aiuSalaryFilter">
              <option value="all">All Average CTC</option>
              <option value="above10">Above ₹10 LPA</option>
              <option value="above15">Above ₹15 LPA</option>
              <option value="above20">Above ₹20 LPA</option>
            </select>

            <select class="aiu-filter-select" id="aiuExamFilter">
              <option value="all">All Entrance Exams</option>
              <option value="CAT">CAT Accepted</option>
              <option value="XAT">XAT Accepted</option>
              <option value="CMAT">CMAT Accepted</option>
              <option value="MAT">MAT Accepted</option>
              <option value="NMAT">NMAT by GMAC</option>
              <option value="SNAP">SNAP Accepted</option>
            </select>

            <select class="aiu-filter-select" id="aiuSortSelect">
              <option value="nirf">Sort: NIRF / AIU S.No</option>
              <option value="salaryDesc">Average CTC: High to Low</option>
              <option value="feeAsc">Fees: Low to High</option>
              <option value="feeDesc">Fees: High to Low</option>
            </select>

          </div>

          <div class="aiu-filter-count-wrap">
            <div>
              Showing <span class="aiu-count-highlight" id="aiuResultsCount">0</span> <span id="aiuResultsLabel">AIU approved institutions</span> in <strong id="aiuActiveCityTitle">${currentCityMeta.name}</strong>
            </div>
            <button type="button" class="aiu-reset-btn" id="aiuResetFiltersBtn">Reset All Filters</button>
          </div>
        </div>

        <!-- COLLEGES CARDS GRID MOUNT -->
        <div class="aiu-colleges-grid" id="aiuCollegesGrid"></div>

        <!-- LEAD COUNSELING BANNER -->
        <section class="aiu-counseling-banner">
          <div class="aiu-counseling-content">
            <h3>Need Guidance Choosing the Right AIU Campus?</h3>
            <p>Our senior admissions panel will evaluate your academic profile, entrance exam scores, and budget to provide a verified 1-on-1 shortlist of top AIU-approved institutions with 100% free mentorship.</p>
          </div>
          <button type="button" class="aiu-counseling-btn" id="aiuCounselingBtn">
            Get Free Profile Evaluation →
          </button>
        </section>

        <!-- AEO KNOWLEDGE & FAQ ACCORDION SECTION -->
        <section class="aiu-knowledge-section">
          <h2 class="aiu-knowledge-heading">Understanding AIU Approval &amp; Equivalence for MBA Aspirants</h2>
          <p class="aiu-knowledge-sub">Essential regulatory guidance for students comparing autonomous PGDM diplomas and university MBA degrees.</p>

          <div class="aiu-knowledge-grid">
            <div class="aiu-know-box">
              <h4>🏛️ Statutory Parity with MBA</h4>
              <p>The Association of Indian Universities (AIU) grants formal equivalence certifying that an AICTE-approved 2-year full-time PGDM is academically and legally identical to a Master of Business Administration degree.</p>
            </div>

            <div class="aiu-know-box">
              <h4>⚖️ Government &amp; PSU Eligibility</h4>
              <p>Graduates from AIU-approved programs are eligible for all Union Public Service Commission (UPSC) exams, State PCS, SSC, and Public Sector Undertakings (PSUs like IOCL, ONGC, NTPC) where a Master's degree is required.</p>
            </div>

            <div class="aiu-know-box">
              <h4>🎓 Higher Studies &amp; PhD Worldwide</h4>
              <p>AIU equivalence allows PGDM alumni to enroll in Fellow Programmes in Management (FPM), PhD programs in Indian universities, and facilitates credential evaluation (WES) for higher studies in the US, UK, and Canada.</p>
            </div>
          </div>

          <h3 style="font-size: 1.35rem; font-weight: 800; color: #0F172A; margin: 28px 0 16px;">Frequently Asked Questions (AIU Approval &amp; Admissions)</h3>
          
          <div class="aiu-faq-accordion">
            <div class="aiu-faq-item">
              <div class="aiu-faq-q">
                <span>What is the difference between AICTE Approval and AIU Equivalence?</span>
                <span>+</span>
              </div>
              <div class="aiu-faq-a">
                AICTE (All India Council for Technical Education) regulates and authorizes autonomous business schools to run technical and management programs (PGDM). AIU (Association of Indian Universities) is the apex body that compares curriculum, faculty, and academic rigor with university standards and certifies that the PGDM diploma is 100% equivalent to an MBA degree.
              </div>
            </div>

            <div class="aiu-faq-item">
              <div class="aiu-faq-q">
                <span>Do IIMs have AIU approval or award MBA degrees?</span>
                <span>+</span>
              </div>
              <div class="aiu-faq-a">
                Under the Indian Institutes of Management Act 2017 passed by Parliament, all 21 IIMs now directly award a full Master of Business Administration (MBA) degree, conferring automatic statutory recognition nationwide. In the official June 2026 AIU document, premier IIMs (Ahmedabad, Bangalore, Calcutta, Lucknow, Indore, Kozhikode) are also cited with permanent AIU equivalence heritage.
              </div>
            </div>

            <div class="aiu-faq-item">
              <div class="aiu-faq-q">
                <span>Why are Dehradun institutions not in the AIU PGDM list?</span>
                <span>+</span>
              </div>
              <div class="aiu-faq-a">
                Management institutions in Dehradun (such as UPES, Graphic Era University, DIT University, and IMS Unison) are established as UGC-recognized State Private Universities that confer statutory MBA Degrees directly under UGC Section 22. Central, State, and Private University MBA degrees do not require AIU equivalence certificates, which are only applicable to autonomous standalone AICTE-approved PGDM institutes.
              </div>
            </div>

            <div class="aiu-faq-item">
              <div class="aiu-faq-q">
                <span>Which top autonomous colleges in Delhi NCR and Pune have AIU equivalence?</span>
                <span>+</span>
              </div>
              <div class="aiu-faq-a">
                In Delhi-NCR, leading autonomous institutes with AIU equivalence include MDI Gurgaon (S.No 89), IMT Ghaziabad (S.No 50), FORE School of Management (S.No 26), IMI New Delhi (S.No 69), NDIM (S.No 99), BIMTECH (S.No 12), and LBSIM (S.No 87). In Pune, top AIU-equivalent institutes include Balaji University BIMM/BITM/BIIB (S.Nos 8-11), National Insurance Academy (S.No 93), NIBM Pune (S.No 96), PIBM (S.No 104), and Kirloskar Institute (S.No 84).
              </div>
            </div>

            <div class="aiu-faq-item">
              <div class="aiu-faq-q">
                <span>Can I get a collateral-free education loan for AIU-approved campuses?</span>
                <span>+</span>
              </div>
              <div class="aiu-faq-a">
                Yes. Premier AIU-approved colleges are listed under the SBI Scholar Loan Scheme, Axis Bank Education Loan, and Bank of Baroda Baroda Scholar Scheme, offering up to ₹20 to ₹30 Lakhs in 100% collateral-free financing at concessionary interest rates.
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  `;
}

/**
 * Renders the city strategic briefing dossier
 */
function renderCityDossierContent(cityMeta) {
  const stats = cityMeta.heroStats || {};

  return `
    <div class="aiu-dossier-card">
      <div class="aiu-dossier-header">
        <div class="aiu-dossier-title-wrap">
          <h3>${cityMeta.fullName || cityMeta.name}</h3>
          <p>${cityMeta.overview}</p>
        </div>
        <span class="aiu-dossier-badge">${cityMeta.badge}</span>
      </div>

      <p class="aiu-dossier-desc">
        <strong>Why Choose ${cityMeta.name} for Management Education:</strong> ${cityMeta.whyChoose}
      </p>

      <div class="aiu-dossier-metrics">
        <div class="aiu-metric-item">
          <span class="aiu-metric-lbl">2-Year Fee Range</span>
          <span class="aiu-metric-val highlight-blue">${stats.avgFee || '₹5L – ₹20L'}</span>
        </div>
        <div class="aiu-metric-item">
          <span class="aiu-metric-lbl">Recent Average CTC</span>
          <span class="aiu-metric-val highlight-green">${stats.avgSalary || '₹12.0 LPA'}</span>
        </div>
        <div class="aiu-metric-item">
          <span class="aiu-metric-lbl">Highest Placement CTC</span>
          <span class="aiu-metric-val highlight-purple">${stats.highestSalary || '₹30+ LPA'}</span>
        </div>
        <div class="aiu-metric-item">
          <span class="aiu-metric-lbl">Top Hiring Sectors</span>
          <span class="aiu-metric-val" style="font-size:0.86rem;line-height:1.3;">${stats.keySectors || 'BFSI, Tech, Consulting'}</span>
        </div>
      </div>
    </div>
  `;
}

/**
 * Attach interactive events and render college cards
 */
export function initAiuCampusesEvents() {
  const gridEl = document.getElementById('aiuCollegesGrid');
  const countEl = document.getElementById('aiuResultsCount');
  const resultsLabelEl = document.getElementById('aiuResultsLabel');
  const cityTitleEl = document.getElementById('aiuActiveCityTitle');
  const dossierMount = document.getElementById('aiuCityDossierMount');
  const dehradunMount = document.getElementById('aiuDehradunExplainerMount');
  const searchInput = document.getElementById('aiuSearchInput');
  const feeSelect = document.getElementById('aiuFeeFilter');
  const salarySelect = document.getElementById('aiuSalaryFilter');
  const examSelect = document.getElementById('aiuExamFilter');
  const sortSelect = document.getElementById('aiuSortSelect');
  const resetBtn = document.getElementById('aiuResetFiltersBtn');
  const counselingBtn = document.getElementById('aiuCounselingBtn');
  const viewGazetteBtn = document.getElementById('viewModeGazetteBtn');
  const viewDirectoryBtn = document.getElementById('viewModeDirectoryBtn');

  // Filter and Render function
  function filterAndRender() {
    const isGazette = aiuPageState.activeView === 'gazette';
    const activeCity = aiuPageState.activeCity;
    const q = aiuPageState.searchQuery.trim().toLowerCase();

    if (resultsLabelEl) {
      resultsLabelEl.textContent = isGazette 
        ? 'Official AIU Gazette Institutions' 
        : 'Verified City Campuses';
    }

    if (isGazette) {
      // 1. FILTER OFFICIAL GAZETTE LIST
      let list = getOfficialAiuForCity(activeCity);

      if (q) {
        list = list.filter(item => {
          const inName = (item.name || '').toLowerCase().includes(q);
          const inAddr = (item.address || '').toLowerCase().includes(q);
          const inSno = String(item.sno || '').includes(q) || (item.snoDisplay || '').toLowerCase().includes(q);
          const inProgs = (item.programs || []).some(p => p.toLowerCase().includes(q));
          return inName || inAddr || inSno || inProgs;
        });
      }

      // Render Count
      if (countEl) countEl.textContent = String(list.length);
      const activeMeta = AIU_CITIES_DATA[activeCity] || AIU_CITIES_DATA['all'];
      if (cityTitleEl) cityTitleEl.textContent = activeMeta.name;

      if (gridEl) {
        if (list.length === 0) {
          if (activeCity === 'dehradun') {
            gridEl.innerHTML = `
              <div style="grid-column: 1 / -1; background:#FFFFFF; border:1px solid #E2E8F0; border-radius:14px; padding:40px 24px; text-align:center;">
                <div style="font-size:2.6rem; margin-bottom:12px;">🏛️</div>
                <h3 style="font-size:1.3rem; font-weight:800; color:#0F172A; margin:0 0 8px;">Dehradun Campuses Confer UGC Statutory University MBA Degrees</h3>
                <p style="color:#64748B; font-size:0.95rem; max-width:650px; margin:0 auto 20px; line-height:1.5;">
                  Colleges in Dehradun (UPES, Graphic Era, DIT, IMS Unison) are State Private Universities that award official Master of Business Administration (MBA) degrees under UGC regulations. They do not need standalone AIU equivalence. Switch to the Directory view to explore all verified Dehradun campuses.
                </p>
                <button type="button" class="aiu-btn-apply" id="switchToDehradunDirectoryBtn" style="display:inline-block; max-width:260px; margin:0 auto;">
                  View Dehradun MBA Campuses →
                </button>
              </div>
            `;
            document.getElementById('switchToDehradunDirectoryBtn')?.addEventListener('click', () => {
              aiuPageState.activeView = 'directory';
              updateViewSwitcherButtons();
              filterAndRender();
            });
          } else {
            gridEl.innerHTML = `
              <div style="grid-column: 1 / -1; background:#FFFFFF; border:1px solid #E2E8F0; border-radius:14px; padding:48px 24px; text-align:center;">
                <div style="font-size:2.8rem; margin-bottom:12px;">🔍</div>
                <h3 style="font-size:1.3rem; font-weight:800; color:#0F172A; margin:0 0 6px;">No AIU Gazette Institutions Found</h3>
                <p style="color:#64748B; font-size:0.95rem; margin:0 0 18px;">Try clearing search keywords or switching to all cities.</p>
                <button type="button" class="aiu-btn-apply" id="emptyStateResetBtn" style="display:inline-block; max-width:200px; margin:0 auto;">Reset Filters</button>
              </div>
            `;
            document.getElementById('emptyStateResetBtn')?.addEventListener('click', resetFilters);
          }
        } else {
          gridEl.innerHTML = list.map(item => renderAiuGazetteCard(item)).join('');
          attachGazetteCardActions(gridEl);
        }
      }

    } else {
      // 2. FILTER ALL COLLEGES DIRECTORY (COLLEGES_DATA)
      let list = getCollegesForCity(activeCity);

      // Search Filter
      if (q) {
        list = list.filter(c => {
          const inName = (c.name || '').toLowerCase().includes(q) || (c.shortName || '').toLowerCase().includes(q);
          const inLoc = (c.location || '').toLowerCase().includes(q) || (c.city || '').toLowerCase().includes(q);
          const inExams = (c.examsAccepted || []).some(e => e.toLowerCase().includes(q));
          const inCourses = (c.courses || []).some(course => (course.name || '').toLowerCase().includes(q));
          const inHighlights = (c.highlights || '').toLowerCase().includes(q);
          return inName || inLoc || inExams || inCourses || inHighlights;
        });
      }

      // Fee Filter
      if (aiuPageState.selectedFee === 'under6') {
        list = list.filter(c => c.feeNum <= 6);
      } else if (aiuPageState.selectedFee === '6to12') {
        list = list.filter(c => c.feeNum > 6 && c.feeNum <= 12);
      } else if (aiuPageState.selectedFee === '12to18') {
        list = list.filter(c => c.feeNum > 12 && c.feeNum <= 18);
      } else if (aiuPageState.selectedFee === 'above18') {
        list = list.filter(c => c.feeNum > 18);
      }

      // Salary Filter
      if (aiuPageState.selectedSalary === 'above10') {
        list = list.filter(c => c.avgSalaryNum >= 10);
      } else if (aiuPageState.selectedSalary === 'above15') {
        list = list.filter(c => c.avgSalaryNum >= 15);
      } else if (aiuPageState.selectedSalary === 'above20') {
        list = list.filter(c => c.avgSalaryNum >= 20);
      }

      // Exam Filter
      if (aiuPageState.selectedExam && aiuPageState.selectedExam !== 'all') {
        const ex = aiuPageState.selectedExam.toUpperCase();
        list = list.filter(c => (c.examsAccepted || []).some(e => e.toUpperCase().includes(ex)));
      }

      // Sorting
      if (aiuPageState.selectedSort === 'feeAsc') {
        list.sort((a, b) => a.feeNum - b.feeNum);
      } else if (aiuPageState.selectedSort === 'feeDesc') {
        list.sort((a, b) => b.feeNum - a.feeNum);
      } else if (aiuPageState.selectedSort === 'salaryDesc') {
        list.sort((a, b) => b.avgSalaryNum - a.avgSalaryNum);
      } else {
        list.sort((a, b) => {
          if (a.nirfRank && b.nirfRank) return a.nirfRank - b.nirfRank;
          if (a.nirfRank) return -1;
          if (b.nirfRank) return 1;
          return (b.rating || 0) - (a.rating || 0);
        });
      }

      // Render Count
      if (countEl) countEl.textContent = String(list.length);
      const activeMeta = AIU_CITIES_DATA[activeCity] || AIU_CITIES_DATA['all'];
      if (cityTitleEl) cityTitleEl.textContent = activeMeta.name;

      if (gridEl) {
        if (list.length === 0) {
          gridEl.innerHTML = `
            <div style="grid-column: 1 / -1; background:#FFFFFF; border:1px solid #E2E8F0; border-radius:14px; padding:48px 24px; text-align:center;">
              <div style="font-size:2.8rem; margin-bottom:12px;">🔍</div>
              <h3 style="font-size:1.3rem; font-weight:800; color:#0F172A; margin:0 0 6px;">No Verified Campuses Match Your Filters</h3>
              <p style="color:#64748B; font-size:0.95rem; margin:0 0 18px;">Try clearing search keywords or widening your tuition fee and entrance exam criteria.</p>
              <button type="button" class="aiu-btn-apply" id="emptyStateResetBtn" style="display:inline-block; max-width:200px; margin:0 auto;">Reset All Filters</button>
            </div>
          `;
          document.getElementById('emptyStateResetBtn')?.addEventListener('click', resetFilters);
        } else {
          gridEl.innerHTML = list.map(col => renderAiuCollegeCard(col)).join('');
          attachCardActions(gridEl, list);
        }
      }
    }
  }

  // Update View Switcher Buttons State
  function updateViewSwitcherButtons() {
    if (aiuPageState.activeView === 'gazette') {
      viewGazetteBtn?.classList.add('active');
      viewDirectoryBtn?.classList.remove('active');
    } else {
      viewDirectoryBtn?.classList.add('active');
      viewGazetteBtn?.classList.remove('active');
    }
  }

  // View Switcher Click Handlers
  viewGazetteBtn?.addEventListener('click', () => {
    aiuPageState.activeView = 'gazette';
    updateViewSwitcherButtons();
    filterAndRender();
  });

  viewDirectoryBtn?.addEventListener('click', () => {
    aiuPageState.activeView = 'directory';
    updateViewSwitcherButtons();
    filterAndRender();
  });

  // City Tab Click Handlers
  document.querySelectorAll('.aiu-city-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCity = btn.getAttribute('data-city-tab');
      if (!targetCity) return;

      document.querySelectorAll('.aiu-city-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      aiuPageState.activeCity = targetCity;

      // Update URL silently
      const newUrl = targetCity === 'all' ? '/aiu-approved-campuses' : `/aiu-approved-campuses/${targetCity}`;
      window.history.pushState(null, '', newUrl);

      // Update Dossier
      const meta = AIU_CITIES_DATA[targetCity] || AIU_CITIES_DATA['all'];
      if (dossierMount) {
        dossierMount.innerHTML = renderCityDossierContent(meta);
      }

      // Show/Hide Dehradun Explainer
      if (dehradunMount) {
        dehradunMount.style.display = targetCity === 'dehradun' ? '' : 'none';
      }

      filterAndRender();
    });
  });

  // Search Input Handler
  searchInput?.addEventListener('input', (e) => {
    aiuPageState.searchQuery = e.target.value;
    filterAndRender();
  });

  // Dropdown Filter Handlers
  feeSelect?.addEventListener('change', (e) => {
    aiuPageState.selectedFee = e.target.value;
    filterAndRender();
  });

  salarySelect?.addEventListener('change', (e) => {
    aiuPageState.selectedSalary = e.target.value;
    filterAndRender();
  });

  examSelect?.addEventListener('change', (e) => {
    aiuPageState.selectedExam = e.target.value;
    filterAndRender();
  });

  sortSelect?.addEventListener('change', (e) => {
    aiuPageState.selectedSort = e.target.value;
    filterAndRender();
  });

  // Reset Filters
  function resetFilters() {
    aiuPageState.searchQuery = '';
    aiuPageState.selectedFee = 'all';
    aiuPageState.selectedSalary = 'all';
    aiuPageState.selectedExam = 'all';
    aiuPageState.selectedSort = 'nirf';

    if (searchInput) searchInput.value = '';
    if (feeSelect) feeSelect.value = 'all';
    if (salarySelect) salarySelect.value = 'all';
    if (examSelect) examSelect.value = 'all';
    if (sortSelect) sortSelect.value = 'nirf';

    filterAndRender();
  }

  resetBtn?.addEventListener('click', resetFilters);

  // Free Counseling Button
  counselingBtn?.addEventListener('click', () => {
    if (window.openInquiryModal) {
      window.openInquiryModal();
    }
  });

  // FAQ Accordion Handlers
  document.querySelectorAll('.aiu-faq-item').forEach(item => {
    const qEl = item.querySelector('.aiu-faq-q');
    const aEl = item.querySelector('.aiu-faq-a');
    if (qEl && aEl) {
      qEl.addEventListener('click', () => {
        const isHidden = aEl.style.display === 'none';
        aEl.style.display = isHidden ? 'block' : 'none';
        qEl.querySelector('span:last-child').textContent = isHidden ? '−' : '+';
      });
    }
  });

  // Initial Filter & Render
  filterAndRender();
}

/**
 * Render Official AIU Gazette Card (Extracted from official PDF)
 */
function renderAiuGazetteCard(item) {
  const linkedCol = item.collegeId 
    ? COLLEGES_DATA.find(c => c.id === item.collegeId)
    : null;

  const collegeHref = linkedCol 
    ? `/colleges/${encodeURIComponent(linkedCol.id)}` 
    : `/aiu-approved-campuses/${encodeURIComponent(item.city)}`;

  return `
    <article class="aiu-gazette-card" id="aiu-gazette-${item.sno}">
      <div>
        <div class="aiu-gazette-header">
          <span class="aiu-gazette-sno-tag">🏛️ AIU Gazette #${item.sno}</span>
          <span class="aiu-gazette-valid-tag">✓ Valid: ${item.validity}</span>
        </div>

        <h3 class="aiu-gazette-inst-name">
          <a href="${collegeHref}" data-route="${linkedCol ? 'colleges' : 'aiu-approved-campuses'}">
            ${item.name}
          </a>
        </h3>

        <div class="aiu-gazette-progs-wrap">
          <span class="aiu-gazette-prog-label">AIU MBA-Equated Programs:</span>
          <div class="aiu-gazette-progs-list">
            ${(item.programs || ['PGDM']).map(p => `<span class="aiu-gazette-prog-chip">🎓 ${p}</span>`).join('')}
          </div>
        </div>

        ${linkedCol ? `
          <div style="display:flex;gap:12px;margin:10px 0;font-size:0.83rem;color:#475569;background:#F8FAFC;padding:8px 12px;border-radius:6px;">
            <span>💰 Fees: <strong>${linkedCol.fees}</strong></span>
            <span>•</span>
            <span>📈 Avg CTC: <strong>${linkedCol.avgSalary}</strong></span>
            ${linkedCol.nirfRank ? `<span>•</span><span>🏆 NIRF: #${linkedCol.nirfRank}</span>` : ''}
          </div>
        ` : ''}

        <div class="aiu-gazette-address">
          <strong>Campus Address:</strong> ${item.address}
        </div>
      </div>

      <div class="aiu-gazette-actions">
        ${linkedCol ? `
          <button type="button" class="aiu-gazette-btn-brochure" data-brochure-college="${linkedCol.id}">
            Brochure
          </button>
          <a href="${collegeHref}" class="aiu-gazette-btn-profile" data-route="colleges">
            Full Profile →
          </a>
        ` : `
          <a href="/aiu-approved-campuses/${encodeURIComponent(item.city)}" class="aiu-gazette-btn-profile">
            ${item.cityName} Hub Info →
          </a>
        `}
      </div>
    </article>
  `;
}

/**
 * Attach button interactions to official gazette cards
 */
function attachGazetteCardActions(container) {
  container.querySelectorAll('[data-brochure-college]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const colId = btn.getAttribute('data-brochure-college');
      const matched = COLLEGES_DATA.find(c => c.id === colId);
      if (window.openCollegeBrochureModal && matched) {
        window.openCollegeBrochureModal(matched);
      } else if (window.openInquiryModal) {
        window.openInquiryModal();
      }
    });
  });
}

/**
 * Render individual college card with all info from COLLEGES_DATA
 */
function renderAiuCollegeCard(col) {
  const shortCode = (col.shortName || col.name || 'MBA').replace(/[^A-Za-z0-9]/g, '').slice(0, 3);
  const cutoffText = col.cutoffCAT !== 'N/A' 
    ? `CAT: ${col.cutoffCAT}` 
    : (col.cutoffXAT !== 'N/A' ? `XAT: ${col.cutoffXAT}` : `CMAT: ${col.cutoffCMAT}`);

  const accs = (col.accreditation || 'AICTE, AIU').split(/[,;]/).map(a => a.trim()).filter(Boolean);

  return `
    <article class="aiu-college-card" id="card-${col.id}">
      
      <div class="aiu-card-top-row">
        <div class="aiu-logo-badge">${shortCode}</div>
        <div class="aiu-card-header-titles">
          <div class="aiu-rank-row">
            ${col.nirfRank ? `<span class="aiu-nirf-tag">🏆 #${col.nirfRank} NIRF</span>` : `<span class="aiu-nirf-tag" style="background:#EDE9FE;color:#6B2CF5;">★ Top B-School</span>`}
            <span class="aiu-ownership-tag">🏛️ ${col.ownership || 'Autonomous'}</span>
          </div>
          <h3 class="aiu-college-name">
            <a href="/colleges/${encodeURIComponent(col.id)}" data-route="colleges">${col.name} (${col.shortName})</a>
          </h3>
          <div class="aiu-location-bar">
            <span>📍 ${col.location || col.city}</span>
            <span>•</span>
            <span>★ ${col.rating || '4.5'} (${col.reviewsCount || '50'}+ Reviews)</span>
          </div>
        </div>
      </div>

      <!-- AIU EQUIVALENCE BADGE -->
      <div class="aiu-approval-banner">
        <span class="aiu-approval-icon">✓</span>
        <span>Association of Indian Universities (AIU) Approved • MBA Equivalent</span>
      </div>

      <!-- ACCREDITATIONS -->
      <div class="aiu-accreditations-row">
        <span class="aiu-acc-pill" style="background:#EDE9FE;color:#6B2CF5;font-weight:700;">AIU MBA Equivalence</span>
        ${accs.slice(0, 3).map(a => `<span class="aiu-acc-pill">${a}</span>`).join('')}
        <span class="aiu-acc-pill">AICTE Approved</span>
      </div>

      <!-- STATS GRID -->
      <div class="aiu-card-stats-grid">
        <div class="aiu-stat-cell">
          <span class="aiu-stat-cell-lbl">2-Yr Total Fees</span>
          <span class="aiu-stat-cell-val blue">${col.fees}</span>
        </div>
        <div class="aiu-stat-cell">
          <span class="aiu-stat-cell-lbl">Recent Avg CTC</span>
          <span class="aiu-stat-cell-val green">${col.avgSalary}</span>
        </div>
        <div class="aiu-stat-cell">
          <span class="aiu-stat-cell-lbl">Highest CTC</span>
          <span class="aiu-stat-cell-val amber">${col.highestSalary}</span>
        </div>
      </div>

      <!-- EXAM CUTOFF & LOAN ELIGIBILITY -->
      <div class="aiu-card-info-row">
        <span class="aiu-exam-badge">🎯 ${cutoffText}</span>
        <span class="aiu-loan-badge">🏦 100% Collateral-Free Loan</span>
      </div>

      <!-- ACTION BUTTONS -->
      <div class="aiu-card-actions">
        <button type="button" class="aiu-btn-apply" data-apply-college="${col.id}">
          Apply Now
        </button>
        <button type="button" class="aiu-btn-brochure" data-brochure-college="${col.id}">
          Brochure
        </button>
        <a href="/colleges/${encodeURIComponent(col.id)}" class="aiu-btn-profile" data-route="colleges">
          Profile →
        </a>
      </div>

    </article>
  `;
}

/**
 * Attach button interactions to cards
 */
function attachCardActions(container, collegesList) {
  // Apply / Inquiry button
  container.querySelectorAll('[data-apply-college]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const colId = btn.getAttribute('data-apply-college');
      const matched = collegesList.find(c => c.id === colId);
      if (window.openCollegeBrochureModal && matched) {
        window.openCollegeBrochureModal(matched);
      } else if (window.openInquiryModal) {
        window.openInquiryModal();
      }
    });
  });

  // Brochure download button
  container.querySelectorAll('[data-brochure-college]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const colId = btn.getAttribute('data-brochure-college');
      const matched = collegesList.find(c => c.id === colId);
      if (window.openCollegeBrochureModal && matched) {
        window.openCollegeBrochureModal(matched);
      } else if (window.openInquiryModal) {
        window.openInquiryModal();
      }
    });
  });
}
