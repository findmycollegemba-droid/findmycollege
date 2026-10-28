/**
 * Live MBA Scholarships Directory & Instant Application Portal
 * Session 2027-29 & Academic Cycle 2026-27
 * Features:
 * - Real-time filtering by Category, Grant Amount, Family Income & Exam Percentile
 * - 30-Second Interactive Scholarship Eligibility Matcher
 * - Detailed Breakdown Modal (Eligibility, Coverage, Selection Process, Required Documents)
 * - Complete Scholarship Application Flow with CRM Sync, Confetti, and LocalStorage tracking
 * - My Applications Tracker Drawer
 */

import { SCHOLARSHIPS_DATA, getScholarshipById } from '../data/scholarshipsData.js';
import { sendLeadToCRM } from '../utils/crm.js';
import { fireConfetti } from '../utils/confettiHelper.js';
import '../scholarships.css';

// Local storage key for applied scholarships
const APPLIED_STORAGE_KEY = 'fmc_applied_scholarships';

// Page interactive state
let scholarshipPageState = {
  activeCategory: 'all',
  activeAmount: 'all',
  searchQuery: '',
  sortBy: 'featured',
  selectedIncomeFilter: 'all',
  matcherData: {
    income: 'any',
    examScore: 'any',
    category: 'any'
  },
  activeDetailScholarship: null,
  activeApplyScholarship: null
};

export function getAppliedScholarships() {
  try {
    const raw = localStorage.getItem(APPLIED_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export function saveAppliedScholarship(appData) {
  const current = getAppliedScholarships();
  current.unshift(appData);
  try {
    localStorage.setItem(APPLIED_STORAGE_KEY, JSON.stringify(current));
  } catch (e) {
    console.error('Failed to save application locally', e);
  }
}

/**
 * Main render function for Live Scholarships Page
 */
export function renderScholarshipsPage(subRoute = null) {
  const specificSch = subRoute ? (SCHOLARSHIPS_DATA.find(s => s.id === subRoute || s.slug === subRoute) || null) : null;
  if (specificSch) {
    return renderSingleScholarshipPage(specificSch);
  }

  const appliedList = getAppliedScholarships();
  const appliedCount = appliedList.length;

  return `
    <div class="page-scholarships" id="scholarshipsApp">
      
      <!-- HERO SECTION -->
      <section class="sch-hero">
        <div class="sch-hero-bg-glow"></div>
        <div class="section-container">
          
          <div class="sch-hero-top-row">
            <div class="sch-live-pulse-badge">
              <span class="live-dot-pulse"></span>
              <span>🔴 LIVE NOW • Session 2027-29 Scholarships Active</span>
            </div>
            
            <button type="button" class="sch-applied-tracker-btn" id="openMyApplicationsBtn">
              <span class="tracker-icon">📑</span>
              <span>My Applications</span>
              <span class="sch-badge-counter" id="appliedCounterBadge">${appliedCount}</span>
            </button>
          </div>

          <h1 class="sch-hero-title">
            Find & Apply for <span class="highlight-gradient">Live MBA Scholarships</span>
          </h1>
          <p class="sch-hero-subtitle">
            Explore verified tuition waivers, corporate endowments, need-based financial aid, and Government of India (NSP) grants up to <strong>₹25,00,000</strong>. Check your eligibility in 30 seconds and apply with 100% free mentorship.
          </p>

          <!-- HERO QUICK STATS STRIP -->
          <div class="sch-stats-grid">
            <div class="sch-stat-card">
              <div class="stat-num">₹25,00,000</div>
              <div class="stat-lbl">Max Grant (100% Fee Waiver)</div>
            </div>
            <div class="sch-stat-card">
              <div class="stat-num">${SCHOLARSHIPS_DATA.length} Active</div>
              <div class="stat-lbl">Verified Live Scholarships</div>
            </div>
            <div class="sch-stat-card">
              <div class="stat-num">₹12+ Crores</div>
              <div class="stat-lbl">Total Financial Aid Pool</div>
            </div>
            <div class="sch-stat-card">
              <div class="stat-num">100% Free</div>
              <div class="stat-lbl">Application & Mentorship</div>
            </div>
          </div>

        </div>
      </section>

      <!-- 30-SECOND ELIGIBILITY MATCHER CARD -->
      <section class="sch-matcher-section">
        <div class="section-container">
          <div class="sch-matcher-card">
            <div class="matcher-card-header">
              <div class="matcher-icon-wrap">🎯</div>
              <div>
                <h3 class="matcher-title">30-Second Scholarship Eligibility Matcher</h3>
                <p class="matcher-desc">Select your profile parameters below to instantly highlight scholarships you are 100% qualified to receive.</p>
              </div>
            </div>

            <div class="matcher-inputs-grid">
              <!-- Parameter 1: Annual Family Income -->
              <div class="matcher-col">
                <label class="matcher-label">Family Annual Income</label>
                <select class="matcher-select" id="matcherIncome">
                  <option value="any">Any Family Income</option>
                  <option value="upto-3l">Under ₹3.0 Lakhs / annum</option>
                  <option value="upto-6l">₹3.0L – ₹6.0 Lakhs / annum</option>
                  <option value="upto-8l">₹6.0L – ₹8.0 Lakhs / annum</option>
                  <option value="upto-15l">₹8.0L – ₹15.0 Lakhs / annum</option>
                  <option value="above-15l">Above ₹15.0 Lakhs (Merit / Corporate Only)</option>
                </select>
              </div>

              <!-- Parameter 2: Exam Score / Expected -->
              <div class="matcher-col">
                <label class="matcher-label">Entrance Score / %ile</label>
                <select class="matcher-select" id="matcherExam">
                  <option value="any">Any Score / Direct Admission</option>
                  <option value="95plus">CAT / XAT ≥ 95%ile</option>
                  <option value="85plus">CAT / XAT / CMAT ≥ 85%ile</option>
                  <option value="70plus">CAT / XAT / CMAT ≥ 70%ile</option>
                  <option value="any-score">Other / Non-CAT (MAT, NMAT, SNAP)</option>
                </select>
              </div>

              <!-- Parameter 3: Category / Background -->
              <div class="matcher-col">
                <label class="matcher-label">Applicant Category</label>
                <select class="matcher-select" id="matcherCategory">
                  <option value="any">General / Open to All</option>
                  <option value="female">Female Candidate (Women Leaders)</option>
                  <option value="sc-st">SC / ST Category (100% Govt Cover)</option>
                  <option value="obc-ebc">OBC / EBC / EWS Category</option>
                </select>
              </div>

              <!-- Match Action Button -->
              <div class="matcher-col action-col">
                <button type="button" class="btn-matcher-action" id="btnRunMatcher">
                  <span>✨ Filter Matches</span>
                </button>
              </div>
            </div>
            
            <div class="matcher-reset-strip" id="matcherActiveAlert" style="display: none;">
              <span id="matcherResultSummary">Showing personalized matches</span>
              <button type="button" class="btn-text-reset" id="btnResetMatcher">Reset Profile Filters ↺</button>
            </div>
          </div>
        </div>
      </section>

      <!-- MAIN SCHOLARSHIPS DIRECTORY & CONTROLS -->
      <section class="sch-directory-section">
        <div class="section-container">
          
          <!-- CONTROLS TOOLBAR -->
          <div class="sch-controls-card">
            
            <!-- Search & Sort Row -->
            <div class="sch-search-row">
              <div class="sch-search-input-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
                <input 
                  type="text" 
                  id="schSearchInput" 
                  class="sch-search-input" 
                  placeholder="Search by scholarship name, IIM, corporate foundation, or exam (e.g., Aditya Birla, NSP, IIM-A)..."
                  value="${scholarshipPageState.searchQuery}"
                />
                ${scholarshipPageState.searchQuery ? `
                  <button type="button" class="sch-search-clear-btn" id="schClearSearchBtn">✕</button>
                ` : ''}
              </div>

              <div class="sch-sort-wrap">
                <label class="sort-label">Sort by:</label>
                <select class="sch-sort-select" id="schSortSelect">
                  <option value="featured" ${scholarshipPageState.sortBy === 'featured' ? 'selected' : ''}>🌟 Featured & Premier</option>
                  <option value="amount-desc" ${scholarshipPageState.sortBy === 'amount-desc' ? 'selected' : ''}>💰 Highest Award Amount</option>
                  <option value="deadline-asc" ${scholarshipPageState.sortBy === 'deadline-asc' ? 'selected' : ''}>⏳ Ending Soonest</option>
                </select>
              </div>
            </div>

            <!-- Category Filter Pills -->
            <div class="sch-filter-groups">
              <div class="filter-group-row">
                <span class="group-label">Category:</span>
                <div class="pills-scroll-wrap">
                  <button type="button" class="sch-pill-btn ${scholarshipPageState.activeCategory === 'all' ? 'active' : ''}" data-cat="all">
                    All Scholarships (${SCHOLARSHIPS_DATA.length})
                  </button>
                  <button type="button" class="sch-pill-btn ${scholarshipPageState.activeCategory === 'corporate' ? 'active' : ''}" data-cat="corporate">
                    🏢 Corporate & Foundations
                  </button>
                  <button type="button" class="sch-pill-btn ${scholarshipPageState.activeCategory === 'iim-top-bschool' ? 'active' : ''}" data-cat="iim-top-bschool">
                    🏛️ IIMs & Premier B-Schools
                  </button>
                  <button type="button" class="sch-pill-btn ${scholarshipPageState.activeCategory === 'government' ? 'active' : ''}" data-cat="government">
                    🇮🇳 Government of India (NSP)
                  </button>
                  <button type="button" class="sch-pill-btn ${scholarshipPageState.activeCategory === 'women' ? 'active' : ''}" data-cat="women">
                    👩‍💼 Women in Business
                  </button>
                  <button type="button" class="sch-pill-btn ${scholarshipPageState.activeCategory === 'merit' ? 'active' : ''}" data-cat="merit">
                    🏆 High Percentile Merit
                  </button>
                </div>
              </div>

              <!-- Amount Filter Pills -->
              <div class="filter-group-row amount-row">
                <span class="group-label">Award Value:</span>
                <div class="pills-scroll-wrap">
                  <button type="button" class="sch-pill-btn sm ${scholarshipPageState.activeAmount === 'all' ? 'active' : ''}" data-amt="all">
                    All Grants
                  </button>
                  <button type="button" class="sch-pill-btn sm ${scholarshipPageState.activeAmount === 'full' ? 'active' : ''}" data-amt="full">
                    🎓 100% Tuition Waiver
                  </button>
                  <button type="button" class="sch-pill-btn sm ${scholarshipPageState.activeAmount === 'above-3l' ? 'active' : ''}" data-amt="above-3l">
                    💎 ₹3 Lakhs – ₹6 Lakhs+
                  </button>
                  <button type="button" class="sch-pill-btn sm ${scholarshipPageState.activeAmount === '1l-3l' ? 'active' : ''}" data-amt="1l-3l">
                    ⚡ ₹1 Lakh – ₹3 Lakhs
                  </button>
                </div>
              </div>
            </div>

          </div>

          <!-- SCHOLARSHIPS CARDS GRID CONTAINER -->
          <div class="sch-grid-header">
            <h2 class="sch-grid-title" id="schGridTitle">Live MBA Scholarships (Showing ${SCHOLARSHIPS_DATA.length})</h2>
            <div class="sch-verification-badge">
              <span class="tick-icon">✓</span>
              <span>100% Audited for Session 2027-29</span>
            </div>
          </div>

          <div class="sch-cards-grid" id="schCardsGrid">
            ${renderScholarshipCards()}
          </div>

        </div>
      </section>

      <!-- APPLICATION ASSISTANCE BANNER -->
      <section class="sch-assistance-banner-section">
        <div class="section-container">
          <div class="sch-assistance-banner">
            <div class="banner-content">
              <div class="banner-pill">🤝 FindMyBSchool Mentorship Desk</div>
              <h3 class="banner-title">Need Help Filing Your MBA Scholarship Application?</h3>
              <p class="banner-desc">
                Don't lose out on lakhs in fee concessions due to incorrect income certificates, missed deadlines, or generic essays. Our senior IIM & XLRI scholarship alumni will review your documents, refine your SOP, and track your application free of cost.
              </p>
              <div class="banner-features">
                <div class="b-feat">✓ Income Certificate & ITR Verification</div>
                <div class="b-feat">✓ Scholarship SOP & Leadership Essay Review</div>
                <div class="b-feat">✓ 1-on-1 Interview Preparation</div>
              </div>
              <div style="margin-top: 14px; display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.12); padding: 6px 14px; border-radius: 9999px; font-size: 0.88rem; font-weight: 700;">
                <span>📞 Mentorship Helpline:</span>
                <a href="tel:8800126446" style="color: #FFD426; text-decoration: none; font-family: var(--font-mono, monospace);">+91 88001 26446</a>
              </div>
            </div>
            <div class="banner-action-col">
              <button type="button" class="btn-banner-cta" id="btnOpenGeneralScholarshipApply">
                <span>Apply for Free Scholarship Mentorship</span>
                <span class="cta-arrow">→</span>
              </button>
              <div style="display: flex; gap: 8px; margin-top: 8px; width: 100%;">
                <a href="tel:8800126446" style="flex: 1; text-align: center; background: rgba(255,255,255,0.15); color: #fff; padding: 8px 12px; border-radius: 8px; font-weight: 700; text-decoration: none; font-size: 0.84rem;">
                  📞 Call 8800126446
                </a>
                <a href="https://wa.me/918800126446?text=Hi%20FindMyBSchool%20Team%2C%20I%20need%20help%20with%20MBA%20Scholarship%20application" target="_blank" rel="noopener noreferrer" style="flex: 1; text-align: center; background: #25D366; color: #fff; padding: 8px 12px; border-radius: 8px; font-weight: 700; text-decoration: none; font-size: 0.84rem;">
                  💬 WhatsApp
                </a>
              </div>
              <span class="banner-cta-sub">Guaranteed response within 4 working hours</span>
            </div>
          </div>
        </div>
      </section>

      <!-- SCHOLARSHIPS GUIDE & FAQS -->
      <section class="sch-faqs-section">
        <div class="section-container">
          <div class="sch-section-head">
            <h2 class="sch-faq-main-title">Frequently Asked Questions on MBA Scholarships</h2>
            <p class="sch-faq-main-sub">Clear answers to questions regarding eligibility, income certificates, loan vs scholarship, and IIM fee waivers.</p>
          </div>

          <div class="sch-faqs-accordion-list">
            <div class="sch-faq-item">
              <button class="sch-faq-question" type="button">
                <span>Can middle-class or general category students get scholarships for MBA?</span>
                <svg class="faq-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="sch-faq-answer">
                <p>Yes, absolutely! Many prestigious corporate scholarships (like the <strong>Aditya Birla Scholarship</strong>, <strong>OP Jindal OPJEMS</strong>, and <strong>Reliance Foundation Postgraduate Scholarship</strong>) are awarded strictly on academic merit, CAT score, and leadership potential without any caste or reservation quota. Furthermore, institutes like IIM Ahmedabad, Bangalore, and SPJIMR offer need-based financial aid for families earning up to ₹15 Lakhs per annum.</p>
              </div>
            </div>

            <div class="sch-faq-item">
              <button class="sch-faq-question" type="button">
                <span>How does Need-Based Financial Assistance (NBFA) work at IIMs?</span>
                <svg class="faq-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="sch-faq-answer">
                <p>At IIM Ahmedabad, Bangalore, and Calcutta, an internal Financial Aid Committee evaluates admitted students after offer acceptance. Depending on gross household income and asset holdings, the institute awards <strong>up to 100% tuition waivers (saving up to ₹25 Lakhs)</strong>. This ensures that no student ever gives up an IIM seat due to financial constraints.</p>
              </div>
            </div>

            <div class="sch-faq-item">
              <button class="sch-faq-question" type="button">
                <span>Can I receive a scholarship if I have already taken an education loan?</span>
                <svg class="faq-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="sch-faq-answer">
                <p>Yes. If you are awarded an institutional tuition waiver, the college will reduce your term fee invoice accordingly, meaning you only need to borrow the reduced amount from the bank. If you receive a direct cash scholarship (such as IDFC FIRST Bank ₹2 Lakhs or Reliance Foundation ₹6 Lakhs), the funds are credited directly to your bank account to cover living expenses, books, laptops, or prepay your loan principal.</p>
              </div>
            </div>

            <div class="sch-faq-item">
              <button class="sch-faq-question" type="button">
                <span>What documents are compulsory when applying for MBA scholarships in India?</span>
                <svg class="faq-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="sch-faq-answer">
                <p>The standard verification dossier includes: (1) Official CAT/XAT/CMAT Scorecard, (2) 10th, 12th, and Undergraduate marksheets/degree, (3) Official Admission Letter from the B-school, (4) Family Income Certificate issued by a Tehsildar/SDM or Parents' ITR/Form 16 for the last 2-3 years, and (5) Aadhaar Card with active bank account details.</p>
              </div>
            </div>

            <div class="sch-faq-item">
              <button class="sch-faq-question" type="button">
                <span>What is the National Scholarship Portal (NSP) Top Class Education Scheme?</span>
                <svg class="faq-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="sch-faq-answer">
                <p>The NSP Top Class Education scheme is funded by the Government of India for SC and ST students securing admission to 265 notified premier institutions (including all 21 IIMs, XLRI, FMS, SPJIMR, and MDI). It covers <strong>100% non-refundable tuition fees</strong>, a monthly living stipend of ₹3,000, and a one-time grant of ₹86,000 for a laptop and books.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SCHOLARSHIP DETAILS MODAL -->
      <div class="sch-modal-overlay" id="schDetailModalOverlay" style="display: none;">
        <div class="sch-modal-dialog" id="schDetailModalDialog" role="dialog" aria-modal="true">
          <!-- Dynamically populated via openScholarshipDetailModal() -->
        </div>
      </div>

      <!-- SCHOLARSHIP APPLICATION MODAL -->
      <div class="sch-modal-overlay" id="schApplyModalOverlay" style="display: none;">
        <div class="sch-modal-dialog apply-dialog" id="schApplyModalDialog" role="dialog" aria-modal="true">
          <!-- Dynamically populated via openScholarshipApplyModal() -->
        </div>
      </div>

      <!-- MY APPLICATIONS DRAWER / MODAL -->
      <div class="sch-modal-overlay" id="myAppsModalOverlay" style="display: none;">
        <div class="sch-modal-dialog apps-dialog" id="myAppsModalDialog" role="dialog" aria-modal="true">
          <div class="apps-dialog-header">
            <div class="d-title-wrap">
              <span class="d-icon">📑</span>
              <div>
                <h3 class="d-title">My Applied Scholarships</h3>
                <p class="d-sub">Track real-time status of your applications submitted through FindMyBSchool</p>
              </div>
            </div>
            <button type="button" class="btn-sch-modal-close" id="closeMyAppsBtn">✕</button>
          </div>

          <div class="apps-dialog-body" id="myAppsBody">
            <!-- Dynamically populated -->
          </div>
        </div>
      </div>

    </div>
  `;
}

/**
 * Filter and sort scholarships according to page state
 */
export function getFilteredScholarships() {
  let list = [...SCHOLARSHIPS_DATA];

  // 1. Category Filter
  if (scholarshipPageState.activeCategory !== 'all') {
    list = list.filter(s => s.category === scholarshipPageState.activeCategory);
  }

  // 2. Amount Filter
  if (scholarshipPageState.activeAmount !== 'all') {
    list = list.filter(s => s.amountCategory === scholarshipPageState.activeAmount);
  }

  // 3. Search Query
  if (scholarshipPageState.searchQuery.trim()) {
    const q = scholarshipPageState.searchQuery.toLowerCase().trim();
    list = list.filter(s => 
      s.title.toLowerCase().includes(q) ||
      s.provider.toLowerCase().includes(q) ||
      s.targetInstitutes.toLowerCase().includes(q) ||
      s.eligibilitySummary.toLowerCase().includes(q) ||
      s.amount.toLowerCase().includes(q)
    );
  }

  // 4. 30-Second Matcher Parameters
  const { income, examScore, category } = scholarshipPageState.matcherData;
  if (income !== 'any') {
    if (income === 'upto-3l') {
      list = list.filter(s => ['upto-3l', 'upto-6l', 'upto-8l', 'upto-10l', 'upto-15l', 'all'].includes(s.incomeCategory));
    } else if (income === 'upto-6l') {
      list = list.filter(s => ['upto-6l', 'upto-8l', 'upto-10l', 'upto-15l', 'all'].includes(s.incomeCategory));
    } else if (income === 'upto-8l') {
      list = list.filter(s => ['upto-8l', 'upto-10l', 'upto-15l', 'all'].includes(s.incomeCategory));
    } else if (income === 'upto-15l') {
      list = list.filter(s => ['upto-15l', 'all'].includes(s.incomeCategory));
    } else if (income === 'above-15l') {
      list = list.filter(s => s.incomeCategory === 'all');
    }
  }

  if (examScore !== 'any') {
    if (examScore === '95plus') {
      // eligible for all merit schemes
    } else if (examScore === '85plus') {
      list = list.filter(s => !s.minExamPercentile.includes('98'));
    } else if (examScore === '70plus') {
      list = list.filter(s => !s.minExamPercentile.includes('98') && !s.minExamPercentile.includes('95'));
    }
  }

  if (category !== 'any') {
    if (category === 'female') {
      list = list.filter(s => s.category === 'women' || s.category === 'corporate' || s.category === 'iim-top-bschool' || s.category === 'merit');
    } else if (category === 'sc-st') {
      // Prioritize government NSP and IIM schemes
    } else if (category === 'obc-ebc') {
      // Government and corporate need based
    }
  }

  // 5. Sorting
  if (scholarshipPageState.sortBy === 'amount-desc') {
    list.sort((a, b) => b.amountNumber - a.amountNumber);
  } else if (scholarshipPageState.sortBy === 'deadline-asc') {
    list.sort((a, b) => a.daysRemaining - b.daysRemaining);
  }

  return list;
}

/**
 * Render cards list
 */
export function renderScholarshipCards() {
  const filtered = getFilteredScholarships();
  const appliedList = getAppliedScholarships();
  const appliedIds = appliedList.map(a => a.scholarshipId);

  if (filtered.length === 0) {
    return `
      <div class="sch-empty-state">
        <div class="empty-icon">🔍</div>
        <h3 class="empty-title">No Matching Scholarships Found</h3>
        <p class="empty-desc">We couldn't find scholarships matching your current filters. Try resetting your income or exam filters to view all active opportunities.</p>
        <button type="button" class="btn-reset-filters" id="btnEmptyReset">View All ${SCHOLARSHIPS_DATA.length} Scholarships</button>
      </div>
    `;
  }

  return filtered.map(item => {
    const isApplied = appliedIds.includes(item.id);
    const categoryBadge = getCategoryBadgeLabel(item.category);

    return `
      <article class="sch-card ${isApplied ? 'card-applied' : ''}" data-scholarship-id="${item.id}">
        
        <!-- CARD HEADER -->
        <div class="sch-card-head">
          <div class="sch-provider-row">
            <span class="sch-category-pill ${item.category}">${categoryBadge}</span>
            <span class="sch-status-pill ${item.daysRemaining < 20 ? 'urgent' : ''}">
              <span class="status-pulse-dot"></span>
              ${item.status} • ${item.daysRemaining} Days Left
            </span>
          </div>

          <h3 class="sch-card-title">
            <a href="/scholarships/${item.id}" class="sch-card-title-link" data-route="scholarships" data-sub="${item.id}">${item.title}</a>
          </h3>
          <div class="sch-provider-name">
            <span class="p-icon">🏛️</span>
            <span>${item.provider}</span>
          </div>
        </div>

        <!-- AWARD AMOUNT HIGHLIGHT BANNER -->
        <div class="sch-card-award-box">
          <div class="award-label">Total Scholarship Value</div>
          <div class="award-amount">${item.amount}</div>
          <div class="award-deadline">Deadline: <strong>${item.deadline}</strong></div>
        </div>

        <!-- KEY ELIGIBILITY CRITERIA -->
        <div class="sch-card-criteria">
          <div class="criteria-item">
            <span class="c-label">Eligible Colleges:</span>
            <span class="c-val text-truncate">${item.targetInstitutes}</span>
          </div>
          <div class="criteria-item">
            <span class="c-label">Family Income:</span>
            <span class="c-val">${item.familyIncomeLimit}</span>
          </div>
          <div class="criteria-item">
            <span class="c-label">Exam / Marks:</span>
            <span class="c-val">${item.minExamPercentile}</span>
          </div>
        </div>

        <!-- COVERAGE TAGS -->
        <div class="sch-coverage-tags">
          ${item.coverage.map(c => `<span class="cov-tag">✓ ${c}</span>`).join('')}
        </div>

        <!-- CARD ACTIONS FOOTER -->
        <div class="sch-card-actions">
          <button type="button" class="btn-sch-detail" data-action="detail" data-id="${item.id}">
            View Details & Eligibility
          </button>
          
          ${isApplied ? `
            <button type="button" class="btn-sch-applied" data-action="view-applied" data-id="${item.id}">
              <span>✓ Applied</span>
            </button>
          ` : `
            <button type="button" class="btn-sch-apply" data-action="apply" data-id="${item.id}">
              <span>Apply Scholarship</span>
              <span class="btn-arrow">→</span>
            </button>
          `}
        </div>

      </article>
    `;
  }).join('');
}

function getCategoryBadgeLabel(cat) {
  switch (cat) {
    case 'corporate': return '🏢 Corporate & Foundation';
    case 'iim-top-bschool': return '🏛️ IIM & Premier B-School';
    case 'government': return '🇮🇳 Central Govt Scheme (NSP)';
    case 'women': return '👩‍💼 Women Leadership';
    case 'merit': return '🏆 High Percentile Merit';
    default: return '🎓 MBA Scholarship';
  }
}

/**
 * Render Detail Modal Content
 */
export function renderDetailModalContent(scholarship) {
  if (!scholarship) return '';
  const appliedList = getAppliedScholarships();
  const isApplied = appliedList.some(a => a.scholarshipId === scholarship.id);

  return `
    <div class="sch-detail-dialog-inner">
      
      <!-- HEADER -->
      <div class="sch-detail-header">
        <div class="d-top-tags">
          <span class="sch-category-pill ${scholarship.category}">${getCategoryBadgeLabel(scholarship.category)}</span>
          <span class="sch-status-pill">${scholarship.status} • Session 2027-29</span>
        </div>
        <button type="button" class="btn-sch-modal-close" id="closeDetailModalBtn">✕</button>
      </div>

      <div class="sch-detail-banner">
        <h2 class="d-title">${scholarship.title}</h2>
        <div class="d-provider-subtitle">Awarded by: <strong>${scholarship.provider}</strong> (${scholarship.providerType})</div>
        
        <div class="d-grant-banner">
          <div class="grant-box">
            <span class="g-lbl">Total Grant / Waiver</span>
            <span class="g-val">${scholarship.amount}</span>
          </div>
          <div class="grant-box">
            <span class="g-lbl">Application Deadline</span>
            <span class="g-val">${scholarship.deadline} (${scholarship.daysRemaining} days left)</span>
          </div>
        </div>
      </div>

      <!-- BODY CONTENT -->
      <div class="sch-detail-body">
        
        <!-- Overview -->
        <div class="d-section">
          <h4 class="d-section-title">Scholarship Overview</h4>
          <p class="d-text">${scholarship.description}</p>
        </div>

        <!-- What is Covered -->
        <div class="d-section">
          <h4 class="d-section-title">What is Covered by this Scholarship?</h4>
          <div class="d-coverage-grid">
            ${scholarship.coverage.map(cov => `
              <div class="cov-item">
                <span class="cov-icon">✨</span>
                <span>${cov}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Strict Eligibility Criteria -->
        <div class="d-section">
          <h4 class="d-section-title">Eligibility Criteria</h4>
          <div class="d-criteria-table">
            <div class="crit-row">
              <span class="crit-key">Eligible Institutions:</span>
              <span class="crit-val">${scholarship.targetInstitutes}</span>
            </div>
            <div class="crit-row">
              <span class="crit-key">Family Income Ceiling:</span>
              <span class="crit-val">${scholarship.familyIncomeLimit}</span>
            </div>
            <div class="crit-row">
              <span class="crit-key">Entrance Exam Cutoff:</span>
              <span class="crit-val">${scholarship.minExamPercentile}</span>
            </div>
            <div class="crit-row">
              <span class="crit-key">Undergraduate Academic Marks:</span>
              <span class="crit-val">${scholarship.minGraduationMarks}</span>
            </div>
          </div>
        </div>

        <!-- Selection & Disbursement Process -->
        <div class="d-section">
          <h4 class="d-section-title">Step-by-Step Selection Process</h4>
          <ol class="d-steps-list">
            ${scholarship.selectionProcess.map((step, idx) => `
              <li>
                <span class="step-num">${idx + 1}</span>
                <span class="step-txt">${step}</span>
              </li>
            `).join('')}
          </ol>
        </div>

        <!-- Required Documents Checklist -->
        <div class="d-section">
          <h4 class="d-section-title">Documents Required for Submission</h4>
          <div class="d-docs-checklist">
            ${scholarship.documentsRequired.map(doc => `
              <div class="doc-chk-item">
                <span class="doc-chk-icon">📄</span>
                <span>${doc}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Official Portal Info -->
        <div class="d-section official-portal-box">
          <div class="p-info">
            <strong>Official Application Portal:</strong>
            <p>You can apply directly on the official host portal or apply below through FindMyBSchool to receive free verification, essay review, and counselor tracking.</p>
          </div>
          <a href="${scholarship.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn-official-external">
            <span>Visit Official Portal</span>
            <span>↗</span>
          </a>
        </div>

      </div>

      <!-- MODAL FOOTER -->
      <div class="sch-detail-footer">
        <button type="button" class="btn-modal-cancel" id="btnCancelDetailModal">Close</button>
        ${isApplied ? `
          <button type="button" class="btn-modal-applied-state" disabled>
            ✓ Already Applied for this Scholarship
          </button>
        ` : `
          <button type="button" class="btn-modal-proceed-apply" id="btnProceedApplyFromDetail" data-id="${scholarship.id}">
            <span>Apply Now with Free Mentorship 🚀</span>
          </button>
        `}
      </div>

    </div>
  `;
}

/**
 * Render Application Form Modal Content
 */
export function renderApplyModalContent(scholarship) {
  const currentTitle = scholarship ? scholarship.title : 'General MBA Scholarship Intake 2027-29';
  const currentAmount = scholarship ? scholarship.amount : 'Up to ₹25,00,000';
  const currentId = scholarship ? scholarship.id : 'general-application';

  return `
    <div class="sch-apply-dialog-inner">
      
      <!-- HEADER -->
      <div class="apply-header">
        <div class="apply-header-tags">
          <span class="tag-live">🎓 Live Application • Session 2027-29</span>
          <span class="tag-free">100% Free Service</span>
        </div>
        <button type="button" class="btn-sch-modal-close" id="closeApplyModalBtn">✕</button>
      </div>

      <div class="apply-title-strip">
        <h2 class="apply-h2">Apply for MBA Scholarship</h2>
        <div class="apply-target-badge">
          <span class="t-icon">🏆</span>
          <span class="t-name"><strong>${currentTitle}</strong></span>
          <span class="t-amt">(${currentAmount})</span>
        </div>
        <p class="apply-sub">
          Submit your academic and financial credentials below. Our admissions desk will verify your eligibility, assist with your required income/caste dossier, and submit your dossier to the committee.
        </p>
      </div>

      <!-- MULTI-SECTION APPLICATION FORM -->
      <form class="sch-apply-form" id="schApplyForm" novalidate>
        <input type="hidden" id="schFormId" value="${currentId}" />
        <input type="hidden" id="schFormTitle" value="${currentTitle}" />
        <input type="hidden" id="schFormAmount" value="${currentAmount}" />

        <!-- ERROR BANNER -->
        <div class="apply-error-banner" id="applyErrorBanner" style="display: none;">
          <span class="err-icon">⚠️</span>
          <span id="applyErrorText">Please fill in all mandatory fields with valid information.</span>
        </div>

        <!-- SECTION 1: PERSONAL & CONTACT -->
        <div class="apply-sec-group">
          <div class="sec-head">
            <span class="sec-num">1</span>
            <div>
              <h4 class="sec-title">Personal & Contact Information</h4>
              <p class="sec-desc">Your credentials are strictly confidential and protected under data privacy standards.</p>
            </div>
          </div>

          <div class="apply-fields-grid-2">
            <div class="form-input-field">
              <label for="appFullName" class="f-lbl">Full Name as per Aadhaar <span class="req">*</span></label>
              <input type="text" id="appFullName" class="f-input" placeholder="e.g. Rahul Sharma" required />
              <span class="f-err" id="errAppFullName">Please enter your full name</span>
            </div>

            <div class="form-input-field">
              <label for="appPhone" class="f-lbl">WhatsApp Mobile Number <span class="req">*</span></label>
              <div class="phone-wrap">
                <span class="prefix">+91</span>
                <input type="tel" id="appPhone" class="f-input phone" placeholder="98765 43210" maxlength="10" required />
              </div>
              <span class="f-err" id="errAppPhone">Enter valid 10-digit Indian phone number</span>
            </div>

            <div class="form-input-field">
              <label for="appEmail" class="f-lbl">Email Address <span class="req">*</span></label>
              <input type="email" id="appEmail" class="f-input" placeholder="e.g. rahul.sharma@gmail.com" required />
              <span class="f-err" id="errAppEmail">Enter a valid email address</span>
            </div>

            <div class="form-input-field">
              <label for="appCity" class="f-lbl">Current City & State <span class="req">*</span></label>
              <input type="text" id="appCity" class="f-input" placeholder="e.g. Delhi NCR, Lucknow, Mumbai" required />
              <span class="f-err" id="errAppCity">Please enter your city and state</span>
            </div>
          </div>
        </div>

        <!-- SECTION 2: ACADEMIC & FINANCIAL PROFILE -->
        <div class="apply-sec-group">
          <div class="sec-head">
            <span class="sec-num">2</span>
            <div>
              <h4 class="sec-title">Academic & Financial Background</h4>
              <p class="sec-desc">Helps verify your percentile cutoff and family income threshold.</p>
            </div>
          </div>

          <div class="apply-fields-grid-2">
            
            <div class="form-input-field">
              <label for="appTargetCollege" class="f-lbl">Target / Enrolled B-School <span class="req">*</span></label>
              <input type="text" id="appTargetCollege" class="f-input" placeholder="e.g. IIM Ahmedabad, XLRI, SPJIMR, BIMTECH..." required />
              <span class="f-err" id="errAppTargetCollege">Please state your target or enrolled college</span>
            </div>

            <div class="form-input-field">
              <label for="appGradMarks" class="f-lbl">Graduation Percentage / CGPA <span class="req">*</span></label>
              <input type="text" id="appGradMarks" class="f-input" placeholder="e.g. 74.5% or 7.8 CGPA" required />
              <span class="f-err" id="errAppGradMarks">Please enter graduation marks</span>
            </div>

            <div class="form-input-field">
              <label for="appEntranceScore" class="f-lbl">CAT / XAT / CMAT Percentile or Expected Score <span class="req">*</span></label>
              <input type="text" id="appEntranceScore" class="f-input" placeholder="e.g. CAT 94.2 %ile or CMAT 96 %ile" required />
              <span class="f-err" id="errAppEntranceScore">Please mention your entrance score/percentile</span>
            </div>

            <div class="form-input-field">
              <label for="appFamilyIncome" class="f-lbl">Annual Family Household Income <span class="req">*</span></label>
              <select id="appFamilyIncome" class="f-select" required>
                <option value="">Select Annual Family Income Slab...</option>
                <option value="under-2.5l">Under ₹2.5 Lakhs (Full Govt Waiver Eligible)</option>
                <option value="2.5l-6l">₹2.5 Lakhs to ₹6.0 Lakhs (IDFC & Tata Trusts Eligible)</option>
                <option value="6l-8l">₹6.0 Lakhs to ₹8.0 Lakhs (IIM Financial Aid Eligible)</option>
                <option value="8l-15l">₹8.0 Lakhs to ₹15.0 Lakhs (IIMA / SPJIMR Eligible)</option>
                <option value="above-15l">Above ₹15.0 Lakhs (Merit / Corporate Grants)</option>
              </select>
              <span class="f-err" id="errAppFamilyIncome">Please choose your family income slab</span>
            </div>

            <div class="form-input-field">
              <label for="appCategory" class="f-lbl">Social / Reservation Category</label>
              <select id="appCategory" class="f-select">
                <option value="General">General / Open Merit</option>
                <option value="NC-OBC">Non-Creamy Layer OBC (NC-OBC)</option>
                <option value="EWS">Economically Weaker Section (EWS)</option>
                <option value="SC">Scheduled Caste (SC - NSP 100% Cover)</option>
                <option value="ST">Scheduled Tribe (ST - NSP 100% Cover)</option>
                <option value="Female">Female Candidate (Women Leadership)</option>
                <option value="PwD">Person with Disability (PwD)</option>
              </select>
            </div>

            <div class="form-input-field">
              <label for="appAssistanceNeed" class="f-lbl">Mentorship Assistance Needed</label>
              <select id="appAssistanceNeed" class="f-select">
                <option value="All Services">Complete Package (SOP + Document Verification + Portal Filing)</option>
                <option value="SOP Essay Review">Scholarship Essay & SOP Refinement</option>
                <option value="Income Certificate Help">Income Certificate & ITR Documentation Guidance</option>
                <option value="Dual Official Submission">Direct Forwarding to B-School Financial Committee</option>
              </select>
            </div>

          </div>
        </div>

        <!-- SUBMIT STRIP -->
        <div class="apply-submit-strip">
          <div class="terms-chk-wrap">
            <input type="checkbox" id="appAgreeTerms" checked />
            <label for="appAgreeTerms" class="chk-lbl">
              I certify that all academic and income details provided are accurate and request FindMyBSchool to evaluate my scholarship eligibility.
            </label>
          </div>

          <button type="submit" class="btn-submit-scholarship-app" id="btnSubmitScholarship">
            <span class="btn-txt">Submit Scholarship Application Now 🚀</span>
            <span class="btn-spinner" style="display: none;">⏳ Verifying...</span>
          </button>
        </div>

      </form>

      <!-- APPLICATION SUCCESS VIEW (Hidden initially) -->
      <div class="apply-success-view" id="applySuccessView" style="display: none;">
        <!-- Populated on successful submission -->
      </div>

    </div>
  `;
}

/**
 * Render Success Card inside Application Modal
 */
export function renderApplySuccessContent(submissionData) {
  return `
    <div class="success-card-inner">
      <div class="success-confetti-badge">🎉 APPLICATION SUBMITTED SUCCESSFULLY!</div>
      
      <h3 class="success-title">Your MBA Scholarship Application is Live!</h3>
      <p class="success-subtitle">
        Congratulations <strong>${submissionData.candidateName}</strong>! Your application for <strong>${submissionData.scholarshipTitle}</strong> (${submissionData.scholarshipAmount}) has been received and registered in our central scholarship tracker.
      </p>

      <div class="success-ref-box">
        <div class="ref-row">
          <span class="r-lbl">Application Reference Number:</span>
          <span class="r-val">${submissionData.applicationId}</span>
        </div>
        <div class="ref-row">
          <span class="r-lbl">Status:</span>
          <span class="r-status-badge">🟡 In Verification & Mentor Review</span>
        </div>
        <div class="ref-row">
          <span class="r-lbl">Target B-School:</span>
          <span class="r-val">${submissionData.targetCollege}</span>
        </div>
        <div class="ref-row">
          <span class="r-lbl">Estimated Qualification Probability:</span>
          <span class="r-prob">🌟 92% High Probability Match</span>
        </div>
      </div>

      <div class="success-steps-box">
        <h4 class="box-h4">What Happens Next?</h4>
        <div class="step-line">
          <span class="s-dot">1</span>
          <div>
            <strong>Document Review:</strong> Our senior scholarship mentor will verify your graduation marks and income slab within 4 working hours.
          </div>
        </div>
        <div class="step-line">
          <span class="s-dot">2</span>
          <div>
            <strong>WhatsApp Dossier:</strong> You will receive a WhatsApp message on <strong>+91 ${submissionData.phone}</strong> with the custom SOP template & checklist.
          </div>
        </div>
        <div class="step-line">
          <span class="s-dot">3</span>
          <div>
            <strong>Dual Official Portal Submission:</strong> We will assist you with the direct committee filing link for maximum approval rate.
          </div>
        </div>
      </div>

      <div class="success-actions-row">
        <button type="button" class="btn-success-close" id="btnCloseSuccessModal">
          View in My Applications 📑
        </button>
        <a href="https://wa.me/918800126446?text=${encodeURIComponent(`Hi FindMyBSchool team, I just applied for the MBA Scholarship (${submissionData.scholarshipTitle}) with Application ID: ${submissionData.applicationId}. Please verify my profile.`)}" target="_blank" rel="noopener noreferrer" class="btn-success-whatsapp">
          <span>Chat with Scholarship Counselor on WhatsApp</span>
          <span>💬</span>
        </a>
      </div>

    </div>
  `;
}

/**
 * Render My Applications Body Content
 */
export function renderMyApplicationsBody() {
  const apps = getAppliedScholarships();

  if (apps.length === 0) {
    return `
      <div class="apps-empty">
        <div class="empty-icon">📭</div>
        <h4 class="empty-h4">No Applications Submitted Yet</h4>
        <p class="empty-p">You haven't submitted any scholarship applications from this browser yet. Browse our live database of 14 verified scholarships and apply in seconds.</p>
        <button type="button" class="btn-browse-sch" id="btnBrowseScholarshipsFromApps">
          Browse Live Scholarships →
        </button>
      </div>
    `;
  }

  return `
    <div class="apps-list">
      <div class="apps-summary-strip">
        <span>You have applied to <strong>${apps.length}</strong> live scholarship(s).</span>
      </div>

      ${apps.map(app => `
        <div class="app-card-item">
          <div class="app-item-top">
            <div class="app-id-pill">${app.applicationId}</div>
            <span class="app-status-badge ${app.status === 'Verified' ? 'status-green' : 'status-yellow'}">
              ${app.status || 'Under Mentor Review'}
            </span>
          </div>

          <h4 class="app-item-title">${app.scholarshipTitle}</h4>
          <div class="app-item-meta">
            <span>💰 Award: <strong>${app.scholarshipAmount}</strong></span>
            <span>🏛️ Target: <strong>${app.targetCollege}</strong></span>
            <span>📅 Applied: <strong>${app.appliedDate}</strong></span>
          </div>

          <div class="app-item-footer">
            <span class="app-candidate">Applicant: ${app.candidateName} (+91 ${app.phone})</span>
            <a href="https://wa.me/918800126446?text=${encodeURIComponent(`Hi, tracking my MBA scholarship application ${app.applicationId} for ${app.scholarshipTitle}`)}" target="_blank" rel="noopener noreferrer" class="app-wa-link">
              Track on WhatsApp 💬
            </a>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

/**
 * Renders dedicated standalone Scholarship Profile Page (Unique URL)
 */
export function renderSingleScholarshipPage(sch) {
  const appliedList = getAppliedScholarships();
  const appliedCount = appliedList.length;

  return `
    <div class="page-scholarships single-scholarship-profile" id="scholarshipsApp">
      <!-- Breadcrumb Bar -->
      <div class="portal-breadcrumb-bar">
        <div class="section-container">
          <nav class="portal-breadcrumb" aria-label="Breadcrumb">
            <a href="/" data-route="home">Home</a>
            <span class="bc-sep">/</span>
            <a href="/scholarships" data-route="scholarships">MBA Scholarships</a>
            <span class="bc-sep">/</span>
            <span class="bc-current">${sch.title}</span>
          </nav>
        </div>
      </div>

      <!-- Hero Section -->
      <section class="sch-hero single-sch-hero">
        <div class="sch-hero-bg-glow"></div>
        <div class="section-container">
          <div class="sch-hero-top-row">
            <div class="sch-live-pulse-badge">
              <span class="live-dot-pulse"></span>
              <span>🔴 ${sch.status} • Session 2027-29 Active</span>
            </div>
            <button type="button" class="sch-applied-tracker-btn" id="openMyApplicationsBtn">
              <span class="tracker-icon">📑</span>
              <span>My Applications</span>
              <span class="sch-badge-counter" id="appliedCounterBadge">${appliedCount}</span>
            </button>
          </div>

          <div class="single-sch-badge-row" style="margin-top: 15px;">
            <span class="sch-tag-category ${sch.category}">${sch.badge}</span>
            <span class="sch-tag-provider" style="background:#e0e7ff;color:#3730a3;font-weight:700;font-size:0.8rem;padding:3px 10px;border-radius:20px;border:1px solid #c7d2fe;margin-left:8px;">🏛️ ${sch.providerType}</span>
          </div>

          <h1 class="sch-hero-title" style="margin-top: 15px;">
            ${sch.title}
          </h1>
          <p class="sch-hero-subtitle">
            Administered by <strong>${sch.provider}</strong>. Financial grant of <strong>${sch.amount}</strong> for qualified management candidates admitted to premier business schools across India.
          </p>

          <!-- Key Metrics Quad -->
          <div class="sch-stats-grid" style="margin-top: 25px;">
            <div class="sch-stat-card">
              <div class="stat-num text-green">${sch.amount}</div>
              <div class="stat-lbl">Total Grant Value</div>
            </div>
            <div class="sch-stat-card">
              <div class="stat-num">${sch.deadline}</div>
              <div class="stat-lbl">Application Deadline (${sch.daysRemaining} days left)</div>
            </div>
            <div class="sch-stat-card">
              <div class="stat-num">${sch.minExamPercentile}</div>
              <div class="stat-lbl">Exam Percentile Benchmark</div>
            </div>
            <div class="sch-stat-card">
              <div class="stat-num">${sch.minGraduationMarks}</div>
              <div class="stat-lbl">Min Academic Marks</div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="hero-cta-group" style="margin-top: 25px; display: flex; gap: 12px; flex-wrap: wrap;">
            <button class="btn-primary-apply btn-hero-apply" id="btnSingleApplyNow" data-apply-sch-id="${sch.id}">
              <span>Apply for ${sch.title} →</span>
            </button>
            ${sch.officialUrl ? `
              <a href="${sch.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn-official-website">
                <span>Official Foundation Portal ↗</span>
              </a>
            ` : ''}
            <a href="/scholarships" class="btn-back-catalog" data-route="scholarships">
              <span>← All 14 Live Scholarships</span>
            </a>
          </div>
        </div>
      </section>

      <!-- Main Body -->
      <div class="section-container" style="padding: 40px 1.5rem; max-width: 1000px; margin: 0 auto;">
        
        <!-- Overview & Description -->
        <div class="sch-detail-block" style="background:#fff; border:1px solid #e2e8f0; border-radius:16px; padding:28px; margin-bottom:24px; box-shadow:0 4px 12px rgba(0,0,0,0.03);">
          <h2 style="font-size:1.4rem; font-weight:800; color:#0f172a; margin-bottom:12px;">About the Scholarship</h2>
          <p style="font-size:1.05rem; line-height:1.7; color:#334155;">${sch.description}</p>
        </div>

        <!-- Coverage Breakdown -->
        <div class="sch-detail-block" style="background:#fff; border:1px solid #e2e8f0; border-radius:16px; padding:28px; margin-bottom:24px; box-shadow:0 4px 12px rgba(0,0,0,0.03);">
          <h2 style="font-size:1.4rem; font-weight:800; color:#0f172a; margin-bottom:12px;">Grant Coverage & Financial Benefits</h2>
          <ul style="list-style:none; padding:0; display:grid; gap:10px;">
            ${(sch.coverage || []).map(cov => `
              <li style="display:flex; align-items:flex-start; gap:10px; font-size:1rem; color:#334155;">
                <span style="color:#059669; font-weight:800; font-size:1.1rem;">✓</span>
                <span>${cov}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Targeted Institutes & Eligibility -->
        <div class="sch-detail-block" style="background:#fff; border:1px solid #e2e8f0; border-radius:16px; padding:28px; margin-bottom:24px; box-shadow:0 4px 12px rgba(0,0,0,0.03);">
          <h2 style="font-size:1.4rem; font-weight:800; color:#0f172a; margin-bottom:16px;">Target Institutes & Eligibility Criteria</h2>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:16px;">
            <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:16px; border-radius:10px;">
              <div style="font-size:0.8rem; font-weight:700; color:#64748b; text-transform:uppercase;">Eligible Institutes</div>
              <div style="font-weight:700; color:#0f172a; margin-top:4px;">${sch.targetInstitutes}</div>
            </div>
            <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:16px; border-radius:10px;">
              <div style="font-size:0.8rem; font-weight:700; color:#64748b; text-transform:uppercase;">Eligibility Summary</div>
              <div style="font-weight:700; color:#0f172a; margin-top:4px;">${sch.eligibilitySummary}</div>
            </div>
            <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:16px; border-radius:10px;">
              <div style="font-size:0.8rem; font-weight:700; color:#64748b; text-transform:uppercase;">Parental Family Income Limit</div>
              <div style="font-weight:700; color:#0f172a; margin-top:4px;">${sch.familyIncomeLimit}</div>
            </div>
            <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:16px; border-radius:10px;">
              <div style="font-size:0.8rem; font-weight:700; color:#64748b; text-transform:uppercase;">Academic Consistency Threshold</div>
              <div style="font-weight:700; color:#0f172a; margin-top:4px;">${sch.minGraduationMarks} (Graduation)</div>
            </div>
          </div>
        </div>

        <!-- Selection Roadmap -->
        <div class="sch-detail-block" style="background:#fff; border:1px solid #e2e8f0; border-radius:16px; padding:28px; margin-bottom:24px; box-shadow:0 4px 12px rgba(0,0,0,0.03);">
          <h2 style="font-size:1.4rem; font-weight:800; color:#0f172a; margin-bottom:16px;">Selection Process & Evaluation Stages</h2>
          <div class="admission-steps-timeline">
            ${(sch.selectionProcess || []).map((step, idx) => `
              <div class="timeline-step">
                <div class="step-num">${idx + 1}</div>
                <div>${step}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Mandatory Documents -->
        <div class="sch-detail-block" style="background:#fff; border:1px solid #e2e8f0; border-radius:16px; padding:28px; margin-bottom:24px; box-shadow:0 4px 12px rgba(0,0,0,0.03);">
          <h2 style="font-size:1.4rem; font-weight:800; color:#0f172a; margin-bottom:16px;">Mandatory Application Documents</h2>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:12px;">
            ${(sch.documentsRequired || []).map(doc => `
              <div style="display:flex; align-items:center; gap:8px; background:#f8fafc; border:1px solid #e2e8f0; padding:12px 16px; border-radius:8px; font-size:0.95rem; font-weight:600; color:#334155;">
                <span>📄</span>
                <span>${doc}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- FAQs -->
        ${sch.faqs && sch.faqs.length > 0 ? `
          <div class="sch-detail-block" style="background:#fff; border:1px solid #e2e8f0; border-radius:16px; padding:28px; margin-bottom:24px; box-shadow:0 4px 12px rgba(0,0,0,0.03);">
            <h2 style="font-size:1.4rem; font-weight:800; color:#0f172a; margin-bottom:16px;">Frequently Asked Questions</h2>
            <div class="college-faqs-accordion">
              ${sch.faqs.map(faq => `
                <div class="college-faq-item open">
                  <button class="college-faq-question" style="pointer-events:none;">
                    <span>${faq.q}</span>
                  </button>
                  <div class="college-faq-answer">
                    <p>${faq.a}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Bottom Action Strip -->
        <div style="text-align:center; padding:30px 20px; background:linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%); border-radius:16px; border:1px solid #bfdbfe; margin-top:20px;">
          <h3 style="font-size:1.3rem; font-weight:800; color:#1e3a8a; margin-bottom:8px;">Ready to Submit Your Application?</h3>
          <p style="color:#475569; max-width:600px; margin:0 auto 16px;">Our senior MBA admission mentors evaluate candidate profiles for ${sch.title} free of charge with complete guidance on SOPs and document verification.</p>
          <button class="btn-primary-apply" id="btnSingleApplyNowBottom" data-apply-sch-id="${sch.id}">
            <span>Apply Now for ${sch.title} →</span>
          </button>
        </div>

      </div>

      <!-- Detail & Application Modals Mount -->
      <div class="portal-modal-overlay sch-modal-overlay" id="schDetailModalOverlay" style="display:none;">
        <div class="portal-modal-dialog sch-modal-dialog" id="schDetailModalDialog"></div>
      </div>

      <div class="portal-modal-overlay sch-modal-overlay" id="schApplyModalOverlay" style="display:none;">
        <div class="portal-modal-dialog sch-modal-dialog" id="schApplyModalDialog"></div>
      </div>

      <div class="portal-modal-overlay sch-modal-overlay" id="myAppsModalOverlay" style="display:none;">
        <div class="portal-modal-dialog sch-modal-dialog my-apps-dialog" id="myAppsModalDialog">
          <div class="my-apps-header">
            <div class="mah-left">
              <span class="mah-icon">📑</span>
              <div>
                <h3 class="mah-title">My Tracked Scholarship Applications</h3>
                <p class="mah-sub">Real-time status tracking and document check</p>
              </div>
            </div>
            <button type="button" class="sch-modal-close" id="closeMyAppsBtn" title="Close Drawer">✕</button>
          </div>
          <div class="my-apps-body" id="myAppsBody"></div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Initialize all interactions, event listeners, and modals on the scholarships page
 */
export function initScholarshipsInteractions(subRoute = null) {
  const specificSch = subRoute ? (SCHOLARSHIPS_DATA.find(s => s.id === subRoute || s.slug === subRoute) || null) : null;
  if (specificSch) {
    const applyBtn1 = document.getElementById('btnSingleApplyNow');
    const applyBtn2 = document.getElementById('btnSingleApplyNowBottom');
    const openMyAppsBtn = document.getElementById('openMyApplicationsBtn');

    if (applyBtn1) applyBtn1.addEventListener('click', () => openScholarshipApplyModal(specificSch));
    if (applyBtn2) applyBtn2.addEventListener('click', () => openScholarshipApplyModal(specificSch));
    if (openMyAppsBtn) openMyAppsBtn.addEventListener('click', openMyApplicationsModal);
    setupModalDismissListeners();
    return;
  }

  // 1. Search Query Input
  const searchInput = document.getElementById('schSearchInput');
  const clearSearchBtn = document.getElementById('schClearSearchBtn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      scholarshipPageState.searchQuery = e.target.value;
      updateScholarshipsGrid();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      scholarshipPageState.searchQuery = '';
      if (searchInput) searchInput.value = '';
      updateScholarshipsGrid();
    });
  }

  // 2. Sort Select
  const sortSelect = document.getElementById('schSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      scholarshipPageState.sortBy = e.target.value;
      updateScholarshipsGrid();
    });
  }

  // 3. Category Pills
  const catPills = document.querySelectorAll('.sch-pill-btn[data-cat]');
  catPills.forEach(pill => {
    pill.addEventListener('click', () => {
      catPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      scholarshipPageState.activeCategory = pill.getAttribute('data-cat');
      updateScholarshipsGrid();
    });
  });

  // 4. Amount Pills
  const amtPills = document.querySelectorAll('.sch-pill-btn[data-amt]');
  amtPills.forEach(pill => {
    pill.addEventListener('click', () => {
      amtPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      scholarshipPageState.activeAmount = pill.getAttribute('data-amt');
      updateScholarshipsGrid();
    });
  });

  // 5. 30-Second Matcher Button
  const btnRunMatcher = document.getElementById('btnRunMatcher');
  const btnResetMatcher = document.getElementById('btnResetMatcher');
  const matcherActiveAlert = document.getElementById('matcherActiveAlert');

  if (btnRunMatcher) {
    btnRunMatcher.addEventListener('click', () => {
      const income = document.getElementById('matcherIncome')?.value || 'any';
      const examScore = document.getElementById('matcherExam')?.value || 'any';
      const category = document.getElementById('matcherCategory')?.value || 'any';

      scholarshipPageState.matcherData = { income, examScore, category };

      if (income !== 'any' || examScore !== 'any' || category !== 'any') {
        if (matcherActiveAlert) matcherActiveAlert.style.display = 'flex';
      }

      updateScholarshipsGrid();

      // Smooth scroll down to grid
      const gridTitle = document.getElementById('schGridTitle');
      if (gridTitle) {
        gridTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  if (btnResetMatcher) {
    btnResetMatcher.addEventListener('click', () => {
      document.getElementById('matcherIncome').value = 'any';
      document.getElementById('matcherExam').value = 'any';
      document.getElementById('matcherCategory').value = 'any';
      scholarshipPageState.matcherData = { income: 'any', examScore: 'any', category: 'any' };
      if (matcherActiveAlert) matcherActiveAlert.style.display = 'none';
      updateScholarshipsGrid();
    });
  }

  // 6. Global delegation on cards grid (Detail and Apply buttons)
  const cardsGrid = document.getElementById('schCardsGrid');
  if (cardsGrid) {
    cardsGrid.addEventListener('click', (e) => {
      const targetBtn = e.target.closest('button');
      if (!targetBtn) return;

      const action = targetBtn.getAttribute('data-action');
      const schId = targetBtn.getAttribute('data-id');

      if (action === 'detail' && schId) {
        const sch = getScholarshipById(schId);
        if (sch) openScholarshipDetailModal(sch);
      } else if (action === 'apply' && schId) {
        const sch = getScholarshipById(schId);
        if (sch) openScholarshipApplyModal(sch);
      } else if (action === 'view-applied') {
        openMyApplicationsModal();
      }
    });
  }

  // 7. Banner Mentorship CTA
  const btnOpenGeneral = document.getElementById('btnOpenGeneralScholarshipApply');
  if (btnOpenGeneral) {
    btnOpenGeneral.addEventListener('click', () => {
      openScholarshipApplyModal(null);
    });
  }

  // 8. My Applications Tracker Button in Hero
  const openMyAppsBtn = document.getElementById('openMyApplicationsBtn');
  if (openMyAppsBtn) {
    openMyAppsBtn.addEventListener('click', () => {
      openMyApplicationsModal();
    });
  }

  // 9. FAQ Accordion interaction
  const faqQuestions = document.querySelectorAll('.sch-faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.parentElement;
      const isOpen = parent.classList.contains('open');
      document.querySelectorAll('.sch-faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        parent.classList.add('open');
      }
    });
  });

  // Setup modal close listeners
  setupModalDismissListeners();
}

/**
 * Re-render the cards grid in place
 */
function updateScholarshipsGrid() {
  const cardsGrid = document.getElementById('schCardsGrid');
  const gridTitle = document.getElementById('schGridTitle');
  if (!cardsGrid) return;

  const filtered = getFilteredScholarships();
  if (gridTitle) {
    gridTitle.textContent = `Live MBA Scholarships (Showing ${filtered.length} of ${SCHOLARSHIPS_DATA.length})`;
  }

  cardsGrid.innerHTML = renderScholarshipCards();

  // Reset button inside empty state
  const btnEmptyReset = document.getElementById('btnEmptyReset');
  if (btnEmptyReset) {
    btnEmptyReset.addEventListener('click', () => {
      scholarshipPageState.activeCategory = 'all';
      scholarshipPageState.activeAmount = 'all';
      scholarshipPageState.searchQuery = '';
      scholarshipPageState.matcherData = { income: 'any', examScore: 'any', category: 'any' };

      const searchInput = document.getElementById('schSearchInput');
      if (searchInput) searchInput.value = '';

      document.querySelectorAll('.sch-pill-btn').forEach(p => {
        if (p.getAttribute('data-cat') === 'all' || p.getAttribute('data-amt') === 'all') {
          p.classList.add('active');
        } else {
          p.classList.remove('active');
        }
      });

      const matcherActiveAlert = document.getElementById('matcherActiveAlert');
      if (matcherActiveAlert) matcherActiveAlert.style.display = 'none';

      updateScholarshipsGrid();
    });
  }
}

/**
 * Opens detail modal for a specific scholarship
 */
export function openScholarshipDetailModal(scholarship) {
  const overlay = document.getElementById('schDetailModalOverlay');
  const dialog = document.getElementById('schDetailModalDialog');
  if (!overlay || !dialog) return;

  scholarshipPageState.activeDetailScholarship = scholarship;
  dialog.innerHTML = renderDetailModalContent(scholarship);
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  // Hook close events
  const closeBtn = document.getElementById('closeDetailModalBtn');
  const cancelBtn = document.getElementById('btnCancelDetailModal');
  const proceedBtn = document.getElementById('btnProceedApplyFromDetail');

  const closeHandler = () => {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.onclick = closeHandler;
  if (cancelBtn) cancelBtn.onclick = closeHandler;

  if (proceedBtn) {
    proceedBtn.onclick = () => {
      closeHandler();
      openScholarshipApplyModal(scholarship);
    };
  }
}

/**
 * Opens application form modal
 */
export function openScholarshipApplyModal(scholarship) {
  const overlay = document.getElementById('schApplyModalOverlay');
  const dialog = document.getElementById('schApplyModalDialog');
  if (!overlay || !dialog) return;

  scholarshipPageState.activeApplyScholarship = scholarship;
  dialog.innerHTML = renderApplyModalContent(scholarship);
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  const closeBtn = document.getElementById('closeApplyModalBtn');
  const closeHandler = () => {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  };
  if (closeBtn) closeBtn.onclick = closeHandler;

  // Form submission handler
  const form = document.getElementById('schApplyForm');
  if (form) {
    form.addEventListener('submit', (e) => handleScholarshipFormSubmit(e, scholarship));
  }
}

/**
 * Handle Scholarship Application Form Submission & CRM Sync
 */
async function handleScholarshipFormSubmit(e, scholarship) {
  e.preventDefault();

  const nameInput = document.getElementById('appFullName');
  const phoneInput = document.getElementById('appPhone');
  const emailInput = document.getElementById('appEmail');
  const cityInput = document.getElementById('appCity');
  const targetCollegeInput = document.getElementById('appTargetCollege');
  const gradMarksInput = document.getElementById('appGradMarks');
  const entranceScoreInput = document.getElementById('appEntranceScore');
  const familyIncomeSelect = document.getElementById('appFamilyIncome');
  const categorySelect = document.getElementById('appCategory');
  const assistanceNeedSelect = document.getElementById('appAssistanceNeed');
  const agreeTerms = document.getElementById('appAgreeTerms');

  const errorBanner = document.getElementById('applyErrorBanner');
  const errorText = document.getElementById('applyErrorText');

  // Reset errors
  document.querySelectorAll('.form-input-field').forEach(el => el.classList.remove('has-error'));
  if (errorBanner) errorBanner.style.display = 'none';

  let hasError = false;

  const name = nameInput?.value.trim() || '';
  if (!name || name.length < 2) {
    nameInput?.closest('.form-input-field')?.classList.add('has-error');
    hasError = true;
  }

  const phone = phoneInput?.value.replace(/\D/g, '') || '';
  if (!phone || phone.length !== 10 || !/^[6-9]/.test(phone)) {
    phoneInput?.closest('.form-input-field')?.classList.add('has-error');
    hasError = true;
  }

  const email = emailInput?.value.trim() || '';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    emailInput?.closest('.form-input-field')?.classList.add('has-error');
    hasError = true;
  }

  const city = cityInput?.value.trim() || '';
  if (!city) {
    cityInput?.closest('.form-input-field')?.classList.add('has-error');
    hasError = true;
  }

  const targetCollege = targetCollegeInput?.value.trim() || '';
  if (!targetCollege) {
    targetCollegeInput?.closest('.form-input-field')?.classList.add('has-error');
    hasError = true;
  }

  const gradMarks = gradMarksInput?.value.trim() || '';
  if (!gradMarks) {
    gradMarksInput?.closest('.form-input-field')?.classList.add('has-error');
    hasError = true;
  }

  const entranceScore = entranceScoreInput?.value.trim() || '';
  if (!entranceScore) {
    entranceScoreInput?.closest('.form-input-field')?.classList.add('has-error');
    hasError = true;
  }

  const familyIncome = familyIncomeSelect?.value || '';
  if (!familyIncome) {
    familyIncomeSelect?.closest('.form-input-field')?.classList.add('has-error');
    hasError = true;
  }

  if (agreeTerms && !agreeTerms.checked) {
    if (errorBanner && errorText) {
      errorText.textContent = 'Please check the declaration box to proceed.';
      errorBanner.style.display = 'flex';
    }
    return;
  }

  if (hasError) {
    if (errorBanner && errorText) {
      errorText.textContent = 'Please fill all mandatory fields marked with an asterisk (*) with valid information.';
      errorBanner.style.display = 'flex';
    }
    return;
  }

  // Submit button loading animation
  const submitBtn = document.getElementById('btnSubmitScholarship');
  const btnTxt = submitBtn?.querySelector('.btn-txt');
  const btnSpinner = submitBtn?.querySelector('.btn-spinner');

  if (submitBtn) submitBtn.disabled = true;
  if (btnTxt) btnTxt.style.display = 'none';
  if (btnSpinner) btnSpinner.style.display = 'inline-block';

  // Generate Reference ID: e.g. FMC-SCH-84920
  const randomSuffix = Math.floor(10000 + Math.random() * 90000);
  const applicationId = `FMC-SCH-${randomSuffix}`;
  const appliedDate = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

  const scholarshipTitle = scholarship ? scholarship.title : 'General MBA Financial Aid';
  const scholarshipAmount = scholarship ? scholarship.amount : 'Up to ₹25,00,000';
  const scholarshipId = scholarship ? scholarship.id : 'general-application';

  const submissionRecord = {
    applicationId,
    scholarshipId,
    scholarshipTitle,
    scholarshipAmount,
    candidateName: name,
    phone,
    email,
    city,
    targetCollege,
    gradMarks,
    entranceScore,
    familyIncome,
    category: categorySelect?.value || 'General',
    assistanceNeed: assistanceNeedSelect?.value || 'All Services',
    appliedDate,
    status: 'Under Mentor Review'
  };

  // 1. Save locally
  saveAppliedScholarship(submissionRecord);

  // 2. Dispatch to CRM asynchronously
  try {
    await sendLeadToCRM({
      name,
      email,
      phone,
      message: `[MBA SCHOLARSHIP APPLICATION] Reference: ${applicationId} | Scheme: ${scholarshipTitle} (${scholarshipAmount}) | Target B-School: ${targetCollege} | Grad Marks: ${gradMarks} | Exam Score: ${entranceScore} | Family Income: ${familyIncome} | Category: ${categorySelect?.value || 'General'} | Assistance: ${assistanceNeedSelect?.value || 'All Services'}`,
      form_name: 'MBA Scholarship Application 2027-29',
      source: 'Scholarship Portal',
      custom_fields: {
        application_id: applicationId,
        scholarship_id: scholarshipId,
        scholarship_title: scholarshipTitle,
        scholarship_amount: scholarshipAmount,
        target_bschool: targetCollege,
        grad_marks: gradMarks,
        entrance_score: entranceScore,
        family_income: familyIncome,
        category: categorySelect?.value || 'General',
        assistance_service: assistanceNeedSelect?.value || 'All Services'
      }
    });
  } catch (err) {
    console.warn('CRM dispatch error (proceeding with local confirmation):', err);
  }

  // 3. Trigger Confetti Celebration!
  fireConfetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });

  // 4. Update Badge Counter in Hero
  const counterBadge = document.getElementById('appliedCounterBadge');
  if (counterBadge) {
    counterBadge.textContent = getAppliedScholarships().length;
  }

  // 5. Hide Form & Display Success View
  const formEl = document.getElementById('schApplyForm');
  const successView = document.getElementById('applySuccessView');

  if (formEl) formEl.style.display = 'none';
  if (successView) {
    successView.innerHTML = renderApplySuccessContent(submissionRecord);
    successView.style.display = 'block';

    const closeSuccessBtn = document.getElementById('btnCloseSuccessModal');
    if (closeSuccessBtn) {
      closeSuccessBtn.onclick = () => {
        const overlay = document.getElementById('schApplyModalOverlay');
        if (overlay) overlay.style.display = 'none';
        document.body.style.overflow = '';
        openMyApplicationsModal();
      };
    }
  }

  // Update card state in grid
  updateScholarshipsGrid();
}

/**
 * Opens My Applications Drawer
 */
export function openMyApplicationsModal() {
  const overlay = document.getElementById('myAppsModalOverlay');
  const body = document.getElementById('myAppsBody');
  if (!overlay || !body) return;

  body.innerHTML = renderMyApplicationsBody();
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  const closeBtn = document.getElementById('closeMyAppsBtn');
  const closeHandler = () => {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  };
  if (closeBtn) closeBtn.onclick = closeHandler;

  const btnBrowse = document.getElementById('btnBrowseScholarshipsFromApps');
  if (btnBrowse) {
    btnBrowse.onclick = closeHandler;
  }
}

/**
 * Closes modals when clicking on background backdrop
 */
function setupModalDismissListeners() {
  ['schDetailModalOverlay', 'schApplyModalOverlay', 'myAppsModalOverlay'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', (e) => {
        if (e.target === el) {
          el.style.display = 'none';
          document.body.style.overflow = '';
        }
      });
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      ['schDetailModalOverlay', 'schApplyModalOverlay', 'myAppsModalOverlay'].forEach(id => {
        const el = document.getElementById(id);
        if (el && el.style.display !== 'none') {
          el.style.display = 'none';
          document.body.style.overflow = '';
        }
      });
    }
  });
}
