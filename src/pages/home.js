import { COLLEGES_DATA } from '../data/collegesData.js';
import { CITY_INFOGRAPHICS_DATA } from '../data/cityInfographicsData.js';
import { BLOGS_DATA } from '../data/blogsData.js';

// Helper to filter featured colleges by category
export function getFeaturedColleges(category = 'nirf') {
  if (category === 'roi') {
    // High ROI: Low fees (< 15L), high average salary
    return COLLEGES_DATA
      .filter(c => c.feeNum && c.feeNum <= 15 && c.avgSalaryNum)
      .sort((a, b) => (b.avgSalaryNum / b.feeNum) - (a.avgSalaryNum / a.feeNum))
      .slice(0, 6);
  } else if (category === 'metro') {
    // Metro powerhouses in Delhi-NCR, Mumbai, Bengaluru, Pune
    const metroColleges = COLLEGES_DATA.filter(c => ['Delhi-NCR', 'Mumbai', 'Bengaluru', 'Pune'].includes(c.city));
    return metroColleges.slice(0, 6);
  } else if (category === 'iim') {
    // Premier IIMs
    return COLLEGES_DATA.filter(c => c.shortName?.startsWith('IIM ') || c.name.startsWith('IIM ')).slice(0, 6);
  } else {
    // Default NIRF Top Tier
    return COLLEGES_DATA
      .filter(c => c.nirfRank)
      .sort((a, b) => a.nirfRank - b.nirfRank)
      .slice(0, 6);
  }
}

// Render Featured College Cards (compact, sleek light theme)
export function renderFeaturedCollegesCards(category = 'nirf') {
  const colleges = getFeaturedColleges(category);
  
  return colleges.map(c => `
    <div class="featured-college-card" data-college-id="${c.id}">
      <div class="fcard-header">
        <div class="fcard-avatar">${c.shortName ? c.shortName.substring(0, 3) : 'MBA'}</div>
        <div class="fcard-meta">
          <div class="fcard-rank-row">
            ${c.nirfRank ? `<span class="fcard-badge-nirf">#${c.nirfRank} NIRF 2026</span>` : ''}
            <span class="fcard-badge-type">${c.degreeTypes ? c.degreeTypes[0] : 'MBA'}</span>
            <span class="fcard-city">📍 ${c.city}</span>
          </div>
          <h3 class="fcard-title" title="${c.name}">${c.shortName || c.name}</h3>
        </div>
      </div>

      <div class="fcard-kpi-grid">
        <div class="fcard-kpi-item">
          <span class="kpi-label">Course Fee (2-Yr)</span>
          <span class="kpi-val fee-val">${c.fees || 'N/A'}</span>
        </div>
        <div class="fcard-kpi-item">
          <span class="kpi-label">Avg CTC / Salary</span>
          <span class="kpi-val salary-val">${c.avgSalary || 'N/A'}</span>
        </div>
        <div class="fcard-kpi-item">
          <span class="kpi-label">Cutoff (General)</span>
          <span class="kpi-val cutoff-val">${c.cutoffCAT !== 'N/A' ? 'CAT: ' + c.cutoffCAT : (c.cutoffXAT !== 'N/A' ? 'XAT: ' + c.cutoffXAT : 'Exam Mapped')}</span>
        </div>
        <div class="fcard-kpi-item">
          <span class="kpi-label">ROI Rating</span>
          <span class="kpi-val roi-val">⭐ ${c.roiScore || '9.0 / 10'}</span>
        </div>
      </div>

      <div class="fcard-recruiters">
        <span class="rec-label">Top Hiring Partners:</span>
        <span class="rec-names">${(c.topRecruiters || []).slice(0, 3).join(', ')}</span>
      </div>

      <div class="fcard-actions">
        <button class="btn-fcard-brochure" data-brochure-id="${c.id}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          <span>Brochure</span>
        </button>
        <button class="btn-fcard-view" data-college-detail="${c.id}">
          <span>View 360° Profile</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  `).join('');
}

// Render City Infographic Cards
export function renderCityInfographicCards(filterCity = 'all') {
  const list = filterCity === 'all' 
    ? CITY_INFOGRAPHICS_DATA 
    : CITY_INFOGRAPHICS_DATA.filter(c => c.id === filterCity || c.cityName.toLowerCase() === filterCity.toLowerCase());

  return list.map(city => `
    <div class="city-infographic-card" data-city-id="${city.id}">
      <!-- Card Top Banner -->
      <div class="city-card-banner" style="background: ${city.gradient};">
        <div class="city-banner-top">
          <span class="city-emblem">${city.icon}</span>
          <span class="city-colleges-badge">🏫 ${city.collegesCount} Top B-Schools</span>
        </div>
        <h3 class="city-card-name">${city.cityName}</h3>
        <p class="city-card-tagline">${city.tagline}</p>
      </div>

      <!-- Card Infographic Body -->
      <div class="city-card-body">
        <!-- 4 KPI Blocks -->
        <div class="city-stats-quad">
          <div class="city-stat-box">
            <span class="cs-label">Avg Package</span>
            <span class="cs-value text-accent">${city.avgCTC}</span>
            <span class="cs-sub">${city.avgCTCLabel}</span>
          </div>
          <div class="city-stat-box">
            <span class="cs-label">Highest Package</span>
            <span class="cs-value text-green">${city.highestCTC}</span>
            <span class="cs-sub">${city.highestCollege}</span>
          </div>
          <div class="city-stat-box">
            <span class="cs-label">2-Yr Fee Range</span>
            <span class="cs-value">${city.feeRange}</span>
            <span class="cs-sub">Min to Max</span>
          </div>
          <div class="city-stat-box">
            <span class="cs-label">Student Rating</span>
            <span class="cs-value text-amber">⭐ ${city.studentRating}</span>
            <span class="cs-sub">${city.livingCostIndex.split('(')[0]}</span>
          </div>
        </div>

        <!-- Best ROI Highlight Pill -->
        <div class="city-roi-pill">
          <span class="roi-pill-icon">💎</span>
          <div class="roi-pill-text">
            <strong>Best ROI Star:</strong> ${city.bestROICollege}
          </div>
        </div>

        <!-- Hiring Sectors Infographic Mini Bars -->
        <div class="city-sectors-breakdown">
          <span class="sectors-title">Dominant Hiring Sectors:</span>
          <div class="sectors-progress-stacked">
            ${city.sectorBreakdown.map(s => `
              <div class="sector-bar-segment" style="width: ${s.percent}%; background: ${s.color};" title="${s.name}: ${s.percent}%"></div>
            `).join('')}
          </div>
          <div class="sectors-legend">
            ${city.sectorBreakdown.map(s => `
              <span class="sector-legend-item">
                <span class="legend-dot" style="background: ${s.color};"></span>
                <span>${s.name} (${s.percent}%)</span>
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Key Recruiters Badges -->
        <div class="city-recruiters-row">
          <span class="rec-row-title">Active Recruiters:</span>
          <div class="rec-chips-wrap">
            ${city.topRecruiters.slice(0, 4).map(r => `<span class="rec-chip">${r}</span>`).join('')}
            <span class="rec-chip-more">+${city.topRecruiters.length - 4} more</span>
          </div>
        </div>
      </div>

      <!-- Card Action Buttons -->
      <div class="city-card-footer">
        <button class="btn-city-infographic-modal" data-open-city-modal="${city.id}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
          <span>View Full Infographic</span>
        </button>
        <a href="#colleges?city=${encodeURIComponent(city.cityName)}" class="btn-city-explore" data-route="colleges" data-city-direct="${city.cityName}">
          <span>Explore ${city.collegesCount} Colleges</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
        </a>
      </div>
    </div>
  `).join('');
}

// Render City Infographic Modal Content (Rich Visual Breakdown)
export function renderCityInfographicModalContent(cityId) {
  const city = CITY_INFOGRAPHICS_DATA.find(c => c.id === cityId) || CITY_INFOGRAPHICS_DATA[0];

  return `
    <div class="city-modal-content">
      <!-- Modal Header Banner -->
      <div class="city-modal-header" style="background: ${city.gradient};">
        <div class="city-modal-header-top">
          <div class="city-modal-title-group">
            <span class="city-modal-emblem">${city.icon}</span>
            <div>
              <span class="city-modal-badge">CITY INFOGRAPHIC & PLACEMENT REPORT</span>
              <h2 class="city-modal-heading">${city.cityName} MBA Colleges Ecosystem</h2>
              <p class="city-modal-sub">${city.tagline}</p>
            </div>
          </div>
          <button class="city-modal-close-btn" id="closeCityModalBtn" aria-label="Close modal">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      </div>

      <!-- Modal Body -->
      <div class="city-modal-body">
        <!-- 4 Key Infographic Metrics -->
        <div class="city-modal-kpi-grid">
          <div class="modal-kpi-card">
            <div class="mk-icon">🏫</div>
            <div class="mk-data">
              <span class="mk-val">${city.collegesCount}</span>
              <span class="mk-label">Verified B-Schools</span>
            </div>
          </div>
          <div class="modal-kpi-card">
            <div class="mk-icon">💼</div>
            <div class="mk-data">
              <span class="mk-val text-blue">${city.avgCTC}</span>
              <span class="mk-label">${city.avgCTCLabel}</span>
            </div>
          </div>
          <div class="modal-kpi-card">
            <div class="mk-icon">🚀</div>
            <div class="mk-data">
              <span class="mk-val text-green">${city.highestCTC}</span>
              <span class="mk-label">Highest Package (${city.highestCollege})</span>
            </div>
          </div>
          <div class="modal-kpi-card">
            <div class="mk-icon">💰</div>
            <div class="mk-data">
              <span class="mk-val">${city.feeRange}</span>
              <span class="mk-label">Tuition Fee Range (2-Yr)</span>
            </div>
          </div>
        </div>

        <!-- Why Study Here Card -->
        <div class="modal-info-block">
          <h4 class="block-title">💡 Why Pursue an MBA in ${city.cityName}?</h4>
          <p class="block-text">${city.whyStudyHere}</p>
          <div class="block-highlights-row">
            <div class="bh-item">
              <strong>🏭 Industry Clusters:</strong>
              <span>${city.industryStrengths}</span>
            </div>
            <div class="bh-item">
              <strong>🚇 Transit & Living:</strong>
              <span>${city.metroConnectivity} • ${city.livingCostIndex}</span>
            </div>
            <div class="bh-item">
              <strong>📝 Entrance Exams:</strong>
              <span>${city.examsAccepted.join(', ')}</span>
            </div>
          </div>
        </div>

        <!-- Dominant Hiring Sectors Breakdown -->
        <div class="modal-info-block">
          <h4 class="block-title">📊 Dominant Hiring Sectors & Placement Distribution</h4>
          <div class="modal-sectors-grid">
            ${city.sectorBreakdown.map(s => `
              <div class="modal-sector-card">
                <div class="msc-header">
                  <span class="msc-name">${s.name}</span>
                  <span class="msc-percent" style="color: ${s.color};">${s.percent}%</span>
                </div>
                <div class="msc-bar-bg">
                  <div class="msc-bar-fill" style="width: ${s.percent}%; background: ${s.color};"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Flagship Colleges Table -->
        <div class="modal-info-block">
          <h4 class="block-title">🏆 Flagship B-Schools in ${city.cityName}</h4>
          <div class="modal-colleges-table-wrap">
            <table class="modal-colleges-table">
              <thead>
                <tr>
                  <th>College Name</th>
                  <th>Key Strength / Tag</th>
                  <th>Average CTC</th>
                  <th>2-Yr Course Fee</th>
                </tr>
              </thead>
              <tbody>
                ${city.flagshipColleges.map(fc => `
                  <tr>
                    <td><strong>${fc.name}</strong></td>
                    <td><span class="table-tag-badge">${fc.badge}</span></td>
                    <td class="table-salary">${fc.ctc}</td>
                    <td>${fc.fees}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Top Recruiters Row -->
        <div class="modal-info-block">
          <h4 class="block-title">🤝 Top Corporate Recruiters</h4>
          <div class="modal-recruiters-cloud">
            ${city.topRecruiters.map(r => `<span class="recruiter-badge-pill">${r}</span>`).join('')}
          </div>
        </div>
      </div>

      <!-- Modal Footer CTA -->
      <div class="city-modal-footer">
        <div class="footer-left-info">
          <span>Found ${city.collegesCount} verified colleges in ${city.cityName}</span>
        </div>
        <div class="footer-right-actions">
          <button class="btn-modal-cancel" id="closeCityModalCancelBtn">Close</button>
          <a href="#colleges?city=${encodeURIComponent(city.cityName)}" class="btn-modal-primary-explore" id="modalExploreCityCollegesBtn">
            <span>Explore All ${city.collegesCount} ${city.cityName} Colleges</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
          </a>
        </div>
      </div>
    </div>
  `;
}

// MAIN HOME PAGE RENDERER
export function renderHomePage() {
  return `
    <div class="page-home light-portal-theme">
      
      <!-- 1. LIGHT THEME SEARCH HERO SECTION -->
      <section class="portal-light-hero">
        <div class="hero-bg-patterns" aria-hidden="true">
          <div class="hero-circle c1"></div>
          <div class="hero-circle c2"></div>
        </div>

        <div class="hero-content-wrap">
          <!-- Trust Eyebrow -->
          <div class="hero-trust-tag">
            <span class="trust-live-pulse"></span>
            <span class="tag-title">FINDMYCOLLEGES • INDIA'S VERIFIED MBA DIRECTORY</span>
            <span class="tag-divider">|</span>
            <span class="tag-audit">2026-27 Audited</span>
          </div>

          <!-- Hero Main Heading -->
          <h1 class="hero-title">
            Find Your Dream <span class="highlight-title">MBA College</span> in India
          </h1>
          <p class="hero-subtitle">
            Compare 110+ verified B-schools with transparent tuition fees, audited CTC averages, real CAT/XAT cutoffs, and city infographics. 0% scrapers, 100% human-verified data.
          </p>

          <!-- CENTRAL COLLEGE SEARCH OMNIBOX -->
          <div class="hero-omnibox-wrapper">
            <div class="hero-omnibox-card">
              <div class="omnibox-search-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <input 
                type="text" 
                id="portalCollegeSearchInput" 
                class="omnibox-text-input" 
                placeholder="Search colleges (e.g. IIM, FMS, SPJIMR), cities (Delhi, Mumbai, Pune), or exams (CAT, XAT)..." 
                autocomplete="off"
              />
              <button class="omnibox-clear-btn" id="portalSearchClearBtn" title="Clear Search" style="display:none;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              <button class="omnibox-submit-btn" id="portalSearchTriggerBtn">
                <span>Search Colleges</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>

            <!-- Instant Live Auto-Suggest Dropdown Mount -->
            <div class="omnibox-live-suggestions" id="portalLiveSuggestionsContainer" style="display:none;"></div>
          </div>

          <!-- Quick Discovery Chips -->
          <div class="hero-quick-filters">
            <span class="quick-filters-label">Popular Searches:</span>
            <div class="quick-filters-pills" id="homeQuickPills">
              <button class="q-pill-btn active" data-filter="all">All Colleges (${COLLEGES_DATA.length})</button>
              <button class="q-pill-btn" data-filter="mba">🎓 MBA Colleges</button>
              <button class="q-pill-btn" data-filter="pgdm">💼 PGDM Colleges</button>
              <button class="q-pill-btn" data-filter="top10">🏆 Top 10 NIRF</button>
              <button class="q-pill-btn" data-filter="roi">💎 High ROI (&lt; ₹15L)</button>
              <button class="q-pill-btn" data-filter="cat">🐱 CAT Accepted</button>
              <button class="q-pill-btn" data-filter="xat">🎯 XAT Accepted</button>
              <button class="q-pill-btn" data-filter="cmat">⚡ CMAT Accepted</button>
              <button class="q-pill-btn" data-filter="snap">🦁 SNAP Accepted</button>
            </div>
          </div>

          <!-- Trust Proof Metrics Row -->
          <div class="hero-trust-metrics-strip">
            <div class="htm-item">
              <div class="htm-icon">🛡️</div>
              <div class="htm-text">
                <strong>100% Counsellor Audited</strong>
                <span>Audited batch sizes & fees</span>
              </div>
            </div>
            <div class="htm-divider"></div>
            <div class="htm-item">
              <div class="htm-icon">💰</div>
              <div class="htm-text">
                <strong>Zero Hidden Charges</strong>
                <span>Exact 2-year total tuition</span>
              </div>
            </div>
            <div class="htm-divider"></div>
            <div class="htm-item">
              <div class="htm-icon">📊</div>
              <div class="htm-text">
                <strong>Standardized Cutoffs</strong>
                <span>Category percentile matrix</span>
              </div>
            </div>
            <div class="htm-divider"></div>
            <div class="htm-item">
              <div class="htm-icon">⚡</div>
              <div class="htm-text">
                <strong>Live Score Predictors</strong>
                <span>CAT, XAT & CMAT calculators</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. CITY COLLEGES INFOGRAPHICS HUB (USER'S FEATURE IDEA) -->
      <section class="section city-infographics-section" id="cityInfographicsSection">
        <div class="section-container">
          <div class="section-header-compact">
            <div>
              <span class="section-tag-pill">📍 Top MBA Hubs & Infographics</span>
              <h2 class="section-title-sm">City Colleges Infographics: Where Should You Study?</h2>
              <p class="section-desc-sm">Visual placement comparisons, dominant industries, cost of living, and flagship B-schools across India's premier management cities.</p>
            </div>
            <div class="city-filter-tabs" id="cityTabsContainer">
              <button class="city-tab-btn active" data-city-tab="all">All Cities</button>
              <button class="city-tab-btn" data-city-tab="delhi-ncr">🏛️ Delhi-NCR</button>
              <button class="city-tab-btn" data-city-tab="mumbai">🏙️ Mumbai</button>
              <button class="city-tab-btn" data-city-tab="pune">🎓 Pune</button>
              <button class="city-tab-btn" data-city-tab="bengaluru">🚀 Bengaluru</button>
              <button class="city-tab-btn" data-city-tab="ahmedabad">💎 Ahmedabad</button>
              <button class="city-tab-btn" data-city-tab="jaipur">🏰 Jaipur</button>
              <button class="city-tab-btn" data-city-tab="kolkata">🏛️ Kolkata</button>
            </div>
          </div>

          <!-- City Infographics Cards Grid -->
          <div class="city-infographics-grid" id="cityInfographicsGrid">
            ${renderCityInfographicCards('all')}
          </div>
        </div>
      </section>

      <!-- 3. TOP FEATURED B-SCHOOLS SHOWCASE (CURATED 6 CARDS) -->
      <section class="section featured-colleges-section" id="featuredCollegesSection">
        <div class="section-container">
          <div class="section-header-compact">
            <div>
              <span class="section-tag-pill">🏆 Top Picks 2026</span>
              <h2 class="section-title-sm">Featured Management Institutes</h2>
              <p class="section-desc-sm">India’s highest-ranked business schools categorized by NIRF stature, return on investment, and corporate placements.</p>
            </div>
            <div class="featured-category-tabs" id="featuredTabsContainer">
              <button class="f-tab-btn active" data-featured-tab="nirf">🏆 Top NIRF Tier</button>
              <button class="f-tab-btn" data-featured-tab="roi">💎 High ROI Champions</button>
              <button class="f-tab-btn" data-featured-tab="metro">🏙️ Metro Giants</button>
              <button class="f-tab-btn" data-featured-tab="iim">🏛️ Top IIMs</button>
            </div>
          </div>

          <!-- Featured College Cards Grid -->
          <div class="featured-colleges-grid" id="featuredCollegesGrid">
            ${renderFeaturedCollegesCards('nirf')}
          </div>

          <!-- Big Action Banner to Explore Full Directory -->
          <div class="explore-all-colleges-dock">
            <div class="dock-text">
              <h3>Looking for more B-schools or specialized filters?</h3>
              <p>Explore our complete catalog of 110+ verified colleges with fee sliders, percentile cutoffs, and exam filters.</p>
            </div>
            <a href="#colleges" class="btn-dock-browse" data-route="colleges">
              <span>Browse All ${COLLEGES_DATA.length} Colleges with Filters</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
            </a>
          </div>
        </div>
      </section>

      <!-- 4. SMART TOOLS & INSTANT CALL PREDICTOR STRIP -->
      <section class="section tools-highlight-section">
        <div class="section-container">
          <div class="tools-two-column-layout">
            
            <!-- Left: Percentile to Call Predictor Card -->
            <div class="tool-call-matcher-card">
              <div class="matcher-card-header">
                <span class="mch-icon">🎯</span>
                <div>
                  <h3 class="mch-title">Instant B-School Call Matcher</h3>
                  <p class="mch-sub">Estimate your interview calls based on your mock percentile</p>
                </div>
              </div>

              <div class="matcher-controls-grid">
                <div class="control-item">
                  <label for="homePercentileInput">Expected Mock Percentile</label>
                  <div class="input-with-pill">
                    <input type="number" id="homePercentileInput" min="40" max="100" step="0.5" value="98.5" />
                    <span class="input-tag">%ile</span>
                  </div>
                </div>

                <div class="control-item">
                  <label for="homeExamSelect">Target Entrance Exam</label>
                  <select id="homeExamSelect" class="styled-select-portal">
                    <option value="CAT">CAT (IIMs, FMS Delhi, SPJIMR)</option>
                    <option value="XAT">XAT (XLRI Jamshedpur, IMT, XIMB)</option>
                    <option value="SNAP">SNAP (SIBM Pune, SCMHRD)</option>
                    <option value="NMAT">NMAT by GMAC (NMIMS Mumbai)</option>
                    <option value="CMAT">CMAT (JBIMS, SIMSREE, GIM)</option>
                  </select>
                </div>
              </div>

              <div class="matcher-output-box" id="homeMatcherResultsBox">
                <div class="call-result-item dream">
                  <span class="call-badge">🏆 Dream Calls:</span>
                  <strong>IIM Lucknow, IIM Kozhikode, IIM Indore, SPJIMR, FMS Delhi</strong>
                </div>
                <div class="call-result-item strong">
                  <span class="call-badge">💎 High Probability:</span>
                  <strong>MDI Gurgaon, IIT Bombay (SJMSOM), CAP Round New IIMs (Udaipur, Trichy)</strong>
                </div>
              </div>

              <button class="btn-matcher-submit" id="homeRunMatchBtn">
                <span>Evaluate My Calls</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>

            <!-- Right: 4 Direct Calculators Quick Access Grid -->
            <div class="tools-quick-access-box">
              <div class="tqa-header">
                <span class="tqa-tag">⚡ Precision Tools</span>
                <h3 class="tqa-title">MBA Entrance Score & Goal Calculators</h3>
                <p class="tqa-sub">Official response sheet parsers, raw score to percentile formulas, and prep planners.</p>
              </div>

              <div class="tqa-cards-grid">
                <a href="#tools?sub=cat" class="tqa-card" data-route="tools" data-sub="cat">
                  <span class="tqa-card-icon">🐱</span>
                  <div class="tqa-card-info">
                    <h4>CAT Score Calculator</h4>
                    <p>Raw score & slot normalizer</p>
                  </div>
                  <span class="tqa-arrow">→</span>
                </a>

                <a href="#tools?sub=xat" class="tqa-card" data-route="tools" data-sub="xat">
                  <span class="tqa-card-icon">🎯</span>
                  <div class="tqa-card-info">
                    <h4>XAT Percentile Calculator</h4>
                    <p>Decision making & negative marking</p>
                  </div>
                  <span class="tqa-arrow">→</span>
                </a>

                <a href="#tools?sub=cmat" class="tqa-card" data-route="tools" data-sub="cmat">
                  <span class="tqa-card-icon">🚀</span>
                  <div class="tqa-card-info">
                    <h4>CMAT Rank Predictor</h4>
                    <p>JBIMS & SIMSREE cutoffs</p>
                  </div>
                  <span class="tqa-arrow">→</span>
                </a>

                <a href="#programs?sub=compare" class="tqa-card" data-route="programs" data-sub="compare">
                  <span class="tqa-card-icon">⚖️</span>
                  <div class="tqa-card-info">
                    <h4>MBA vs PGDM Guide</h4>
                    <p>AICTE vs UGC accreditation guide</p>
                  </div>
                  <span class="tqa-arrow">→</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- 5. LIVE EXAM COUNTDOWN TICKERS -->
      <section class="section countdown-section">
        <div class="section-container">
          <div class="section-header-compact">
            <div>
              <span class="section-tag-pill">⏳ Admission Deadlines</span>
              <h2 class="section-title-sm">Countdown to Key Entrance Exams 2026-27</h2>
            </div>
            <a href="#exams" class="see-all-link" data-route="exams">View All Exam Dates & Syllabus →</a>
          </div>

          <div class="countdown-cards-grid">
            <!-- CAT Card -->
            <div class="countdown-card cat-card">
              <div class="card-status-badge live">Nov 29, 2026</div>
              <div class="exam-icon-circle">🐱</div>
              <h4 class="countdown-exam-name">CAT 2026</h4>
              <p class="countdown-sub">Common Admission Test (21 IIMs, FMS Delhi, SPJIMR)</p>
              <div class="countdown-clock" data-exam="cat" id="clock-cat">
                <div class="time-box"><span class="time-num" id="cat-days">48</span><span class="time-lbl">Days</span></div>
                <div class="time-sep">:</div>
                <div class="time-box"><span class="time-num" id="cat-hours">14</span><span class="time-lbl">Hrs</span></div>
                <div class="time-sep">:</div>
                <div class="time-box"><span class="time-num" id="cat-mins">35</span><span class="time-lbl">Mins</span></div>
              </div>
              <a href="#tools?sub=cat" class="card-action-btn" data-route="tools" data-sub="cat">CAT Calculator →</a>
            </div>

            <!-- XAT Card -->
            <div class="countdown-card xat-card">
              <div class="card-status-badge upcoming">Jan 3, 2027</div>
              <div class="exam-icon-circle">🎯</div>
              <h4 class="countdown-exam-name">XAT 2027</h4>
              <p class="countdown-sub">Xavier Aptitude Test (XLRI Jamshedpur & 160+ B-Schools)</p>
              <div class="countdown-clock" data-exam="xat" id="clock-xat">
                <div class="time-box"><span class="time-num" id="xat-days">83</span><span class="time-lbl">Days</span></div>
                <div class="time-sep">:</div>
                <div class="time-box"><span class="time-num" id="xat-hours">09</span><span class="time-lbl">Hrs</span></div>
                <div class="time-sep">:</div>
                <div class="time-box"><span class="time-num" id="xat-mins">40</span><span class="time-lbl">Mins</span></div>
              </div>
              <a href="#tools?sub=xat" class="card-action-btn" data-route="tools" data-sub="xat">XAT Calculator →</a>
            </div>

            <!-- SNAP Card -->
            <div class="countdown-card snap-card">
              <div class="card-status-badge upcoming">Dec 6, 2026</div>
              <div class="exam-icon-circle">⚡</div>
              <h4 class="countdown-exam-name">SNAP 2026</h4>
              <p class="countdown-sub">Symbiosis National Aptitude Test (SIBM Pune & SCMHRD)</p>
              <div class="countdown-clock" data-exam="snap" id="clock-snap">
                <div class="time-box"><span class="time-num" id="snap-days">55</span><span class="time-lbl">Days</span></div>
                <div class="time-sep">:</div>
                <div class="time-box"><span class="time-num" id="snap-hours">18</span><span class="time-lbl">Hrs</span></div>
                <div class="time-sep">:</div>
                <div class="time-box"><span class="time-num" id="snap-mins">20</span><span class="time-lbl">Mins</span></div>
              </div>
              <a href="#exams?exam=snap" class="card-action-btn" data-route="exams" data-sub="snap">SNAP Details →</a>
            </div>

            <!-- CMAT Card -->
            <div class="countdown-card cmat-card">
              <div class="card-status-badge upcoming">May 15, 2027</div>
              <div class="exam-icon-circle">🚀</div>
              <h4 class="countdown-exam-name">CMAT 2027</h4>
              <p class="countdown-sub">Common Management Admission Test (JBIMS, SIMSREE, GIM)</p>
              <div class="countdown-clock" data-exam="cmat" id="clock-cmat">
                <div class="time-box"><span class="time-num" id="cmat-days">215</span><span class="time-lbl">Days</span></div>
                <div class="time-sep">:</div>
                <div class="time-box"><span class="time-num" id="cmat-hours">04</span><span class="time-lbl">Hrs</span></div>
                <div class="time-sep">:</div>
                <div class="time-box"><span class="time-num" id="cmat-mins">12</span><span class="time-lbl">Mins</span></div>
              </div>
              <a href="#tools?sub=cmat" class="card-action-btn" data-route="tools" data-sub="cmat">CMAT Calculator →</a>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. STUDENT CONVERTS REVIEWS -->
      <section class="section testimonials-section">
        <div class="section-container">
          <div class="section-title-center">
            <span class="section-tag-pill">⭐ Student Reviews</span>
            <h2 class="section-title">Aspirants Who Converted Top B-Schools</h2>
            <p class="section-desc">Real feedback from students who used FindMyColleges transparent cutoffs, calculators and city infographics.</p>
          </div>

          <div class="testimonials-grid">
            <div class="testimonial-card">
              <div class="stars-row">★★★★★</div>
              <p class="testimonial-text">
                "The transparency in fees and cutoffs on this portal is extraordinary. No hidden terms or inflated placement figures. Used the CAT calculator, matched my 99.4 percentile, and converted IIM Bangalore!"
              </p>
              <div class="testimonial-user">
                <div class="user-avatar-circle">AK</div>
                <div>
                  <div class="user-name">Ananya Kulkarni</div>
                  <div class="user-sub">Converted IIM Bangalore • Batch of 2026-28 • CAT 99.4%ile</div>
                </div>
              </div>
            </div>

            <div class="testimonial-card">
              <div class="stars-row">★★★★★</div>
              <p class="testimonial-text">
                "Finding FMS Delhi and SIMSREE Mumbai as super-high ROI options right through the budget filter saved me from taking a ₹25 lakh loan. Converted FMS with less than ₹2.5 lakh fees!"
              </p>
              <div class="testimonial-user">
                <div class="user-avatar-circle">RS</div>
                <div>
                  <div class="user-name">Rohan Sharma</div>
                  <div class="user-sub">Converted FMS Delhi • CAT 99.1%ile • High ROI Convert</div>
                </div>
              </div>
            </div>

            <div class="testimonial-card">
              <div class="stars-row">★★★★★</div>
              <p class="testimonial-text">
                "The city infographics for Mumbai and Pune gave me crystal clarity on BFSI vs Auto/IT campus placements. Converted SIBM Pune with 98.7%ile SNAP score!"
              </p>
              <div class="testimonial-user">
                <div class="user-avatar-circle">PD</div>
                <div>
                  <div class="user-name">Priyanka Das</div>
                  <div class="user-sub">Converted SIBM Pune • SNAP 98.7%ile</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. COUNSELING CTA BANNER -->
      <section class="section cta-banner-section">
        <div class="section-container">
          <div class="cta-banner-box">
            <div class="cta-banner-text">
              <span class="cta-mini-tag">Free 1-on-1 Guidance</span>
              <h2 class="cta-banner-heading">Need Personalized MBA Admission Strategy?</h2>
              <p class="cta-banner-sub">Speak directly with an IIM, XLRI or FMS alumnus. We evaluate your profile, map your realistic calls, and craft an admission roadmap tailored to your target scores.</p>
            </div>
            <div class="cta-banner-actions">
              <a href="#contact" class="btn-gradient-pill btn-lg" data-route="contact">
                <span>Book Free Mentorship</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#ai-chat" class="btn-secondary-pill btn-lg" data-route="ai-chat">
                <span>Chat with AdmitIQ AI</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- MODALS MOUNT -->
      <!-- City Infographic Modal Mount -->
      <div class="portal-modal-overlay" id="cityInfographicModalOverlay" style="display:none;">
        <div class="portal-modal-dialog city-infographic-dialog" id="cityInfographicModalDialog">
          <!-- Dynamically populated -->
        </div>
      </div>

      <!-- 360° College Detail Modal Mount -->
      <div class="portal-modal-overlay" id="portalDetailModalOverlay" style="display:none;">
        <div class="portal-modal-dialog" id="portalDetailModalDialog">
          <!-- Dynamically populated -->
        </div>
      </div>

      <!-- Brochure Enquiry Modal Mount -->
      <div class="portal-modal-overlay" id="portalBrochureModalOverlay" style="display:none;">
        <div class="portal-modal-dialog brochure-dialog" id="portalBrochureModalDialog">
          <!-- Dynamically populated -->
        </div>
      </div>

    </div>
  `;
}
