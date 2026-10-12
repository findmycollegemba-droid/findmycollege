import { EXAMS_DATA } from '../data/examsData.js';
import { COLLEGES_DATA } from '../data/collegesData.js';
import { BLOGS_DATA } from '../data/blogsData.js';
import { renderCollegesCards } from './colleges.js';

export function renderHomePage() {
  return `
    <div class="page-home college4sure-theme">
      <!-- 1. COLLEGE4SURE SEARCH HERO -->
      <section class="c4s-hero-section">
        <!-- Ambient Neon Blobs -->
        <div class="hero-blobs-wrap" aria-hidden="true">
          <div class="blob b1"></div>
          <div class="blob b2"></div>
          <div class="blob b3"></div>
        </div>

        <div class="c4s-hero-container">
          <!-- Trust Eyebrow Pill -->
          <div class="c4s-trust-pill">
            <span class="trust-dot"></span>
            <span class="trust-pill-text">✨ FINDMYCOLLEGE • INDIA'S MOST TRUSTED MBA & PGDM PORTAL</span>
            <span class="trust-badge-accent">2026-27 Audited</span>
          </div>

          <!-- Hero Main Title with College4Sure Marker Sweep -->
          <h1 class="c4s-hero-title">
            Find & Compare Top <span class="c4s-marker">MBA Colleges</span> in India 2026
          </h1>

          <p class="c4s-hero-subtitle">
            Explore 500+ verified B-schools with real-time CAT/XAT/CMAT cutoffs, audited tuition fees, verified placements, and human-guided admissions. 100% transparent data, 0% scrapers.
          </p>

          <!-- Trust Strip (College4Sure Pillars) -->
          <div class="c4s-pillars-strip">
            <div class="cpillar-item">
              <span class="cpillar-icon">🛡️</span>
              <div>
                <strong>Human-Verified Data</strong>
                <span>Counsellor checked, zero scrapers</span>
              </div>
            </div>
            <div class="cpillar-divider"></div>
            <div class="cpillar-item">
              <span class="cpillar-icon">📊</span>
              <div>
                <strong>Standardized Comparison</strong>
                <span>Uniform parameters across all B-schools</span>
              </div>
            </div>
            <div class="cpillar-divider"></div>
            <div class="cpillar-item">
              <span class="cpillar-icon">🎯</span>
              <div>
                <strong>Direct Percentile Mapping</strong>
                <span>Match your mock score to target calls</span>
              </div>
            </div>
            <div class="cpillar-divider"></div>
            <div class="cpillar-item">
              <span class="cpillar-icon">⚡</span>
              <div>
                <strong>Live Score Calculators</strong>
                <span>Precision CAT, XAT & CMAT evaluators</span>
              </div>
            </div>
          </div>

          <!-- CENTRAL COLLEGE SEARCH OMNIBOX (COLLEGE4SURE ENGINE) -->
          <div class="c4s-omnibox-card">
            <div class="c4s-input-group">
              <div class="c4s-search-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <input 
                type="text" 
                id="portalCollegeSearchInput" 
                class="c4s-search-input" 
                placeholder="Search 500+ MBA colleges by name (IIM, FMS, XLRI), city (Mumbai, Delhi), exam (CAT, XAT), or course (PGDM, MBA)..." 
                autocomplete="off"
              />
              <button class="omnibox-clear-btn" id="portalSearchClearBtn" title="Clear Search" style="display:none;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              <button class="c4s-search-btn" id="portalSearchTriggerBtn">
                <span>Search Colleges</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>

            <!-- College4Sure Popular Filter Chips Row -->
            <div class="c4s-quick-chips-row">
              <span class="c4s-chips-label">Popular Searches:</span>
              <div class="c4s-chips-scroll" id="portalQuickChips">
                <button class="quick-chip-btn active" data-filter-type="all">All Colleges (${COLLEGES_DATA.length})</button>
                <button class="quick-chip-btn" data-filter-type="degree" data-degree="MBA">🎓 MBA Colleges (${COLLEGES_DATA.filter(c => c.degreeTypes && c.degreeTypes.includes('MBA')).length})</button>
                <button class="quick-chip-btn" data-filter-type="degree" data-degree="PGDM">💼 PGDM Colleges (${COLLEGES_DATA.filter(c => c.degreeTypes && c.degreeTypes.includes('PGDM')).length})</button>
                <button class="quick-chip-btn" data-filter-type="top10">🏆 Top 10 NIRF</button>
                <button class="quick-chip-btn" data-filter-type="highroi">💎 High ROI (Fees &lt; ₹15L)</button>
                <button class="quick-chip-btn" data-filter-type="sal30">🚀 Avg CTC &gt; ₹30 LPA</button>
                <button class="quick-chip-btn" data-filter-type="exam" data-exam="CAT">🐱 CAT Accepted</button>
                <button class="quick-chip-btn" data-filter-type="exam" data-exam="XAT">🎯 XAT Accepted</button>
                <button class="quick-chip-btn" data-filter-type="exam" data-exam="CMAT">⚡ CMAT Accepted</button>
                <button class="quick-chip-btn" data-filter-type="exam" data-exam="SNAP">🦁 SNAP Accepted</button>
                <button class="quick-chip-btn" data-filter-type="exam" data-exam="MH-CET">🏙️ MAH-CET (Mumbai)</button>
                <button class="quick-chip-btn" data-filter-type="govt">🏛️ Government / IIMs</button>
                <button class="quick-chip-btn" data-filter-type="private">💼 Top Private B-Schools</button>
              </div>
            </div>

            <!-- College4Sure Fast-Track Discovery Hub (Cities & Exams) -->
            <div class="c4s-browse-categories-bar">
              <div class="c4s-browse-group">
                <span class="c4s-browse-title">📍 Top MBA Hubs:</span>
                <div class="c4s-browse-tags" id="browseCityTags">
                  <button class="browse-tag-btn" data-city-click="Delhi-NCR">Delhi-NCR</button>
                  <button class="browse-tag-btn" data-city-click="Mumbai">Mumbai</button>
                  <button class="browse-tag-btn" data-city-click="Bengaluru">Bengaluru</button>
                  <button class="browse-tag-btn" data-city-click="Pune">Pune</button>
                  <button class="browse-tag-btn" data-city-click="Ahmedabad">Ahmedabad</button>
                  <button class="browse-tag-btn" data-city-click="Kolkata">Kolkata</button>
                  <button class="browse-tag-btn" data-city-click="Lucknow">Lucknow</button>
                  <button class="browse-tag-btn" data-city-click="Goa">Goa</button>
                </div>
              </div>
            </div>
          </div>

          <!-- INTERACTIVE PERCENTILE CALL MATCHER WIDGET (COLLEGE4SURE ENGINE) -->
          <div class="c4s-matcher-widget-card">
            <div class="matcher-header">
              <div class="matcher-title-wrap">
                <span class="matcher-icon">🎯</span>
                <div>
                  <h3 class="matcher-title">Instant Percentile & B-School Call Predictor</h3>
                  <p class="matcher-sub">Enter your mock score or target percentile to project realistic calls</p>
                </div>
              </div>
              <span class="matcher-tag">Verified 2026 Cutoffs</span>
            </div>

            <div class="matcher-input-row">
              <div class="matcher-input-group">
                <label>Expected / Mock Percentile</label>
                <div class="input-with-suffix">
                  <input type="number" id="quickPercentileInput" min="40" max="100" step="0.5" value="98.5" placeholder="e.g. 98.5" />
                  <span class="input-suffix">%ile</span>
                </div>
              </div>

              <div class="matcher-input-group">
                <label>Entrance Exam</label>
                <select id="quickExamSelect" class="styled-select">
                  <option value="CAT">CAT 2026 (IIMs, FMS Delhi, SPJIMR)</option>
                  <option value="XAT">XAT 2027 (XLRI Jamshedpur, IMT, XIMB)</option>
                  <option value="SNAP">SNAP 2026 (SIBM Pune, SCMHRD)</option>
                  <option value="NMAT">NMAT by GMAC (NMIMS Mumbai)</option>
                  <option value="CMAT">CMAT 2026 (JBIMS MMS, SIMSREE, GIM)</option>
                  <option value="MHCET">MAH MBA CET (JBIMS, SIMSREE, PUMBA)</option>
                </select>
              </div>

              <button class="c4s-matcher-btn" id="runQuickMatchBtn">
                <span>Check Eligibility</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>

            <div class="matcher-results-preview" id="quickMatchResultsPreview">
              <div class="match-badge-result dream">
                <span class="call-type">🏆 Dream Calls:</span>
                <strong>IIM Lucknow, IIM Kozhikode, IIM Indore, SPJIMR, FMS Delhi</strong>
              </div>
              <div class="match-badge-result strong">
                <span class="call-type">💎 High Probability:</span>
                <strong>MDI Gurgaon, IIT Bombay (SJMSOM), CAP Round New IIMs (Udaipur, Trichy)</strong>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- 2. MAIN 2-COLUMN COLLEGE SEARCH DIRECTORY (SHIKSHA / COLLEGE4SURE THEME) -->
      <section class="portal-main-directory-section" id="collegeDirectoryAnchor">
        <div class="portal-layout-container">
          
          <!-- MOBILE FILTER TOGGLE BAR -->
          <div class="mobile-filter-bar">
            <button class="mobile-filter-toggle-btn" id="mobileFilterToggleBtn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" x2="20" y1="21" y2="21"></line><line x1="4" x2="20" y1="14" y2="14"></line><line x1="4" x2="20" y1="7" y2="7"></line></svg>
              <span>Filters</span>
              <span class="active-filters-count-badge" id="mobileFiltersBadge" style="display:none;">0</span>
            </button>
            <div class="mobile-sort-wrap">
              <label>Sort:</label>
              <select id="mobileSortSelect" class="mobile-sort-select">
                <option value="nirf">NIRF Rank (Low to High)</option>
                <option value="fees-asc">Fees (Low to High - Best ROI)</option>
                <option value="fees-desc">Fees (High to Low)</option>
                <option value="salary-desc">Average CTC (High to Low)</option>
                <option value="rating-desc">Student Rating (High to Low)</option>
              </select>
            </div>
          </div>

          <!-- LEFT COLUMN: FACETED FILTER SIDEBAR -->
          <aside class="portal-filter-sidebar" id="portalFilterSidebar">
            <div class="filter-sidebar-header">
              <div class="filter-sidebar-title-wrap">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                <h3>Filters</h3>
              </div>
              <button class="filter-reset-link" id="resetAllFiltersBtn">Reset All</button>
            </div>

            <!-- Active Filters Summary Chips -->
            <div class="active-filter-chips-wrap" id="activeFilterChipsContainer" style="display:none;">
              <!-- Dynamically populated -->
            </div>

            <div class="sidebar-accordions-group">
              <!-- ACCORDION 1: LOCATION / CITIES -->
              <div class="filter-group">
                <div class="filter-group-title">
                  <span>Location / City</span>
                  <span class="group-count-tag" id="cityCountTag">All</span>
                </div>
                <div class="filter-group-options" id="filterCityOptions">
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="cityFilter" value="Delhi-NCR" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">Delhi-NCR</span>
                    <span class="cb-badge">3</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="cityFilter" value="Mumbai" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">Mumbai</span>
                    <span class="cb-badge">4</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="cityFilter" value="Bengaluru" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">Bengaluru</span>
                    <span class="cb-badge">1</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="cityFilter" value="Ahmedabad" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">Ahmedabad</span>
                    <span class="cb-badge">2</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="cityFilter" value="Kolkata" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">Kolkata</span>
                    <span class="cb-badge">1</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="cityFilter" value="Pune" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">Pune</span>
                    <span class="cb-badge">1</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="cityFilter" value="Lucknow" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">Lucknow</span>
                    <span class="cb-badge">1</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="cityFilter" value="Kozhikode" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">Kozhikode</span>
                    <span class="cb-badge">1</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="cityFilter" value="Jamshedpur" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">Jamshedpur</span>
                    <span class="cb-badge">1</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="cityFilter" value="Indore" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">Indore</span>
                    <span class="cb-badge">1</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="cityFilter" value="Goa" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">Goa</span>
                    <span class="cb-badge">1</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="cityFilter" value="Manipal" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">Manipal</span>
                    <span class="cb-badge">1</span>
                  </label>
                </div>
              </div>

              <!-- ACCORDION 2: ENTRANCE EXAM -->
              <div class="filter-group">
                <div class="filter-group-title">
                  <span>Entrance Exams Accepted</span>
                  <span class="group-count-tag" id="examCountTag">All</span>
                </div>
                <div class="filter-group-options" id="filterExamOptions">
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="examFilter" value="CAT" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">CAT (Common Admission Test)</span>
                    <span class="cb-badge">15</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="examFilter" value="XAT" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">XAT (Xavier Aptitude Test)</span>
                    <span class="cb-badge">5</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="examFilter" value="CMAT" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">CMAT (Common Management)</span>
                    <span class="cb-badge">4</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="examFilter" value="SNAP" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">SNAP (Symbiosis Entrance)</span>
                    <span class="cb-badge">1</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="examFilter" value="NMAT" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">NMAT by GMAC (NMIMS)</span>
                    <span class="cb-badge">2</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="examFilter" value="MH-CET" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">MAH MBA CET (Maharashtra)</span>
                    <span class="cb-badge">2</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="examFilter" value="CUET-PG" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">CUET PG (TISS Mumbai)</span>
                    <span class="cb-badge">1</span>
                  </label>
                </div>
              </div>

              <!-- ACCORDION 3: TOTAL FEES -->
              <div class="filter-group">
                <div class="filter-group-title">
                  <span>Total Course Fees (2-Yr)</span>
                </div>
                <div class="filter-group-options" id="filterFeeOptions">
                  <label class="filter-radio-item">
                    <input type="radio" name="feeRangeFilter" value="all" checked class="portal-radio" />
                    <span class="rb-custom"></span>
                    <span class="cb-label">Any Fee Range</span>
                  </label>
                  <label class="filter-radio-item">
                    <input type="radio" name="feeRangeFilter" value="under5" class="portal-radio" />
                    <span class="rb-custom"></span>
                    <span class="cb-label">&lt; ₹5 Lakhs (Super High ROI)</span>
                    <span class="cb-badge">2</span>
                  </label>
                  <label class="filter-radio-item">
                    <input type="radio" name="feeRangeFilter" value="5to15" class="portal-radio" />
                    <span class="rb-custom"></span>
                    <span class="cb-label">₹5 Lakhs - ₹15 Lakhs</span>
                    <span class="cb-badge">3</span>
                  </label>
                  <label class="filter-radio-item">
                    <input type="radio" name="feeRangeFilter" value="15to25" class="portal-radio" />
                    <span class="rb-custom"></span>
                    <span class="cb-label">₹15 Lakhs - ₹25 Lakhs</span>
                    <span class="cb-badge">7</span>
                  </label>
                  <label class="filter-radio-item">
                    <input type="radio" name="feeRangeFilter" value="above25" class="portal-radio" />
                    <span class="rb-custom"></span>
                    <span class="cb-label">&gt; ₹25 Lakhs (Elite Tier)</span>
                    <span class="cb-badge">8</span>
                  </label>
                </div>
              </div>

              <!-- ACCORDION 4: AVERAGE SALARY / CTC -->
              <div class="filter-group">
                <div class="filter-group-title">
                  <span>Average Salary / CTC</span>
                </div>
                <div class="filter-group-options" id="filterSalaryOptions">
                  <label class="filter-radio-item">
                    <input type="radio" name="salaryRangeFilter" value="all" checked class="portal-radio" />
                    <span class="rb-custom"></span>
                    <span class="cb-label">Any Average CTC</span>
                  </label>
                  <label class="filter-radio-item">
                    <input type="radio" name="salaryRangeFilter" value="above30" class="portal-radio" />
                    <span class="rb-custom"></span>
                    <span class="cb-label">&gt; ₹30 LPA (Elite League)</span>
                    <span class="cb-badge">7</span>
                  </label>
                  <label class="filter-radio-item">
                    <input type="radio" name="salaryRangeFilter" value="20to30" class="portal-radio" />
                    <span class="rb-custom"></span>
                    <span class="cb-label">₹20 LPA - ₹30 LPA</span>
                    <span class="cb-badge">8</span>
                  </label>
                  <label class="filter-radio-item">
                    <input type="radio" name="salaryRangeFilter" value="under20" class="portal-radio" />
                    <span class="rb-custom"></span>
                    <span class="cb-label">&lt; ₹20 LPA</span>
                    <span class="cb-badge">5</span>
                  </label>
                </div>
              </div>

              <!-- ACCORDION 5: OWNERSHIP -->
              <div class="filter-group">
                <div class="filter-group-title">
                  <span>Institute Ownership</span>
                </div>
                <div class="filter-group-options" id="filterOwnershipOptions">
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="ownershipFilter" value="Government" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">Government / Public / Central</span>
                    <span class="cb-badge">11</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="ownershipFilter" value="Private" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">Private Autonomous</span>
                    <span class="cb-badge">9</span>
                  </label>
                </div>
              </div>
            </div>

            <!-- Sidebar Guidance Card (College4Sure USP) -->
            <div class="c4s-guidance-card">
              <span class="guidance-badge">Free Guidance</span>
              <h4>Confused between shortlists?</h4>
              <p>Speak with a verified alumni counsellor to map your profile to top B-schools.</p>
              <a href="#contact" class="c4s-guidance-btn">Book Free Call →</a>
            </div>
          </aside>

          <!-- RIGHT COLUMN: RESULTS FEED -->
          <main class="portal-results-feed">
            <!-- Feed Control Bar -->
            <div class="feed-control-bar">
              <div class="feed-results-info">
                <h2 class="feed-results-title">
                  <span id="resultsCountSpan">${COLLEGES_DATA.length}</span> Verified <span id="resultsLabelSpan">Colleges</span> Found
                </h2>
                <span class="feed-subtitle">Audited fees, placement records & category percentiles</span>
              </div>

              <div class="feed-actions-group">
                <!-- Sort Select (Desktop) -->
                <div class="feed-sort-wrap">
                  <label for="portalSortSelect">Sort by:</label>
                  <select id="portalSortSelect" class="feed-sort-select">
                    <option value="nirf">NIRF Ranking (Top to Bottom)</option>
                    <option value="fees-asc">Fees (Low to High - Best ROI)</option>
                    <option value="fees-desc">Fees (High to Low)</option>
                    <option value="salary-desc">Average CTC (High to Low)</option>
                    <option value="rating-desc">Student Rating (High to Low)</option>
                  </select>
                </div>

                <!-- View Mode Toggle -->
                <div class="feed-view-toggle">
                  <button class="view-btn active" id="viewCardBtn" title="Detailed Card View">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                  </button>
                  <button class="view-btn" id="viewListBtn" title="Compact Table / Shiksha List View">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- College Cards & Feed Container -->
            <div class="portal-colleges-container" id="portalCollegesContainer">
              ${renderCollegesCards(COLLEGES_DATA, [], 'card')}
            </div>

            <!-- Empty State -->
            <div class="portal-empty-state" id="portalEmptyState" style="display:none;">
              <div class="empty-state-icon">🔍</div>
              <h3>No Colleges Match Your Selected Filters</h3>
              <p>Try clearing some filters or searching for another keyword like "IIM", "Mumbai", "CAT", or "FMS".</p>
              <button class="btn-gradient-pill" id="emptyStateResetBtn">Reset All Filters</button>
            </div>
          </main>

        </div>
      </section>

      <!-- 3. LIVE EXAM COUNTDOWN TICKERS -->
      <section class="section countdown-section">
        <div class="section-container">
          <div class="section-header-compact">
            <div class="header-left">
              <span class="section-tag-pill">⏳ Upcoming Schedules</span>
              <h2 class="section-title-sm">Countdown to Key MBA Entrance Exams 2026-27</h2>
            </div>
            <a href="#exams" class="see-all-link" data-route="exams">View All 8 Exams & Patterns →</a>
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
              <a href="#tools?sub=cat" class="card-action-btn" data-route="tools" data-sub="cat">CAT Score Calculator →</a>
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
              <a href="#tools?sub=xat" class="card-action-btn" data-route="tools" data-sub="xat">XAT Score Calculator →</a>
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
              <a href="#exams?exam=snap" class="card-action-btn" data-route="exams" data-sub="snap">SNAP Pattern & Tips →</a>
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

      <!-- 4. EDITORIAL INSIGHTS & BLOGS PREVIEW -->
      <section class="section blogs-preview-section">
        <div class="section-container">
          <div class="section-header-compact">
            <div>
              <span class="section-tag-pill">📰 Expert Insights</span>
              <h2 class="section-title-sm">Latest MBA Prep Strategies & Admission Analysis</h2>
            </div>
            <a href="#blog" class="see-all-link" data-route="blog">Read All Articles →</a>
          </div>

          <div class="blogs-grid">
            ${BLOGS_DATA.slice(0, 3).map(blog => `
              <div class="blog-card" data-blog-id="${blog.id}">
                <div class="blog-card-meta">
                  <span class="blog-category-badge">${blog.category}</span>
                  <span class="blog-read-time">${blog.readTime}</span>
                </div>
                <h3 class="blog-card-title">${blog.title}</h3>
                <p class="blog-card-summary">${blog.summary}</p>
                <div class="blog-card-footer">
                  <div class="blog-author">
                    <div class="author-avatar">${blog.author.charAt(0)}</div>
                    <span>${blog.author.split('(')[0]}</span>
                  </div>
                  <a href="#blog?id=${blog.id}" class="read-article-btn" data-route="blog" data-sub="id=${blog.id}">Read →</a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- 5. ASPIRANT COMMUNITY TESTIMONIALS -->
      <section class="section testimonials-section">
        <div class="section-container">
          <div class="section-title-center">
            <span class="section-tag-pill">⭐ Student Reviews</span>
            <h2 class="section-title">Aspirants Who Converted Top B-Schools</h2>
            <p class="section-desc">Real feedback from students who used our verified portal, cutoffs, and guidance.</p>
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
                  <div class="user-sub">Converted IIM Bangalore (Batch of 2026-28) • CAT 99.4%ile</div>
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
                "The side-by-side comparison tool and XAT score calculator gave me the clarity I needed between XLRI BM vs HRM. Highly recommend every serious aspirant to use this portal."
              </p>
              <div class="testimonial-user">
                <div class="user-avatar-circle">PD</div>
                <div>
                  <div class="user-name">Priyanka Das</div>
                  <div class="user-sub">Converted XLRI Jamshedpur (HRM) • XAT 96.8%ile</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. BOTTOM COUNSELING CTA BANNER -->
      <section class="section cta-banner-section">
        <div class="section-container">
          <div class="cta-banner-box">
            <div class="cta-banner-text">
              <span class="cta-mini-tag">Free 1-on-1 Guidance</span>
              <h2 class="cta-banner-heading">Need Personalized MBA Admission Strategy?</h2>
              <p class="cta-banner-sub">Speak directly with an IIM or XLRI alumnus. We evaluate your profile, map your realistic calls, and craft an admission roadmap tailored to your target scores.</p>
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

      <!-- FLOATING COMPARE BOTTOM DRAWER -->
      <div class="portal-compare-floating-bar" id="portalCompareBar" style="display:none;">
        <div class="compare-bar-content">
          <div class="compare-bar-info">
            <span class="compare-badge-icon">⚖️</span>
            <div>
              <div class="compare-bar-title"><span id="compareCountNum">0</span> of 3 Colleges Selected for Comparison</div>
              <div class="compare-bar-sub">Compare fees, cutoffs, placements and eligibility side-by-side</div>
            </div>
          </div>

          <div class="compare-selected-chips" id="compareSelectedChips">
            <!-- Chips rendered dynamically -->
          </div>

          <div class="compare-bar-actions">
            <button class="btn-gradient-pill compare-launch-btn" id="launchComparisonModalBtn">
              <span>Compare Now</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
            </button>
            <button class="compare-clear-btn" id="clearAllCompareBtn" title="Clear Comparison List">Clear All</button>
          </div>
        </div>
      </div>

      <!-- 360° COLLEGE DETAIL MODAL MOUNT -->
      <div class="portal-modal-overlay" id="portalDetailModalOverlay" style="display:none;">
        <div class="portal-modal-dialog" id="portalDetailModalDialog">
          <!-- Dynamically populated -->
        </div>
      </div>

      <!-- SIDE-BY-SIDE COMPARISON MODAL MOUNT -->
      <div class="portal-modal-overlay" id="portalCompareModalOverlay" style="display:none;">
        <div class="portal-modal-dialog compare-dialog" id="portalCompareModalDialog">
          <!-- Dynamically populated -->
        </div>
      </div>

      <!-- BROCHURE ENQUIRY MODAL MOUNT -->
      <div class="portal-modal-overlay" id="portalBrochureModalOverlay" style="display:none;">
        <div class="portal-modal-dialog brochure-dialog" id="portalBrochureModalDialog">
          <!-- Dynamically populated -->
        </div>
      </div>
    </div>
  `;
}
