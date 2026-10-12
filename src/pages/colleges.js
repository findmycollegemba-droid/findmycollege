import { COLLEGES_DATA } from '../data/collegesData.js';

// College Search Portal Page
export function renderCollegesPage() {
  return `
    <div class="page-colleges shiksha-portal-theme">
      <!-- PORTAL SEARCH HEADER (SHIKSHA.COM STYLE) -->
      <section class="portal-search-hero">
        <div class="portal-hero-container">
          <!-- Breadcrumb -->
          <nav class="portal-breadcrumb">
            <a href="#home">Home</a>
            <span class="bc-sep">/</span>
            <span class="bc-current">MBA Colleges in India</span>
          </nav>

          <div class="portal-hero-heading-wrap">
            <div class="hero-title-badge">
              <span class="badge-dot"></span>
              <span>FindMyCollege Edition • 2026-27 Audited Directory</span>
            </div>
            <h1 class="portal-main-title">
              Top MBA & PGDM Colleges in India 2026: <span class="highlight-blue">Search, Compare & Cutoffs</span>
            </h1>
            <p class="portal-main-desc">
              Explore India's top 500+ management institutes. Filter by real-time CAT/XAT/CMAT cutoffs, audited tuition fees, placement averages, and NIRF rankings.
            </p>
          </div>

          <!-- Shiksha Omnibox Search Bar -->
          <div class="portal-omnibox-card">
            <div class="omnibox-input-group">
              <div class="omnibox-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <input 
                type="text" 
                id="portalCollegeSearchInput" 
                class="omnibox-input" 
                placeholder="Search by college name, city (e.g. Mumbai, Delhi), course (MBA, PGDM), or exam (CAT, XAT)..." 
                autocomplete="off"
              />
              <button class="omnibox-clear-btn" id="portalSearchClearBtn" title="Clear Search" style="display:none;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              <button class="omnibox-search-action-btn" id="portalSearchTriggerBtn">
                <span>Find Colleges</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>

            <!-- DEGREE SELECTOR TABS (MBA vs PGDM) -->
            <div class="portal-degree-tabs-bar" id="portalDegreeTabs">
              <button class="degree-tab-btn active" data-degree-btn="all">
                <span class="tab-icon">🏛️</span>
                <span class="tab-text">All Colleges</span>
                <span class="tab-badge">${COLLEGES_DATA.length}</span>
              </button>
              <button class="degree-tab-btn" data-degree-btn="MBA">
                <span class="tab-icon">🎓</span>
                <span class="tab-text">MBA Colleges</span>
                <span class="tab-badge">${COLLEGES_DATA.filter(c => c.degreeTypes && c.degreeTypes.includes('MBA')).length}</span>
              </button>
              <button class="degree-tab-btn" data-degree-btn="PGDM">
                <span class="tab-icon">💼</span>
                <span class="tab-text">PGDM Colleges</span>
                <span class="tab-badge">${COLLEGES_DATA.filter(c => c.degreeTypes && c.degreeTypes.includes('PGDM')).length}</span>
              </button>
            </div>

            <!-- Dynamic Educational Guidance Banner for MBA vs PGDM -->
            <div class="degree-info-banner" id="degreeInfoBanner" style="display:none;">
              <div class="banner-icon-box" id="bannerIconBox">🎓</div>
              <div class="banner-text-box">
                <h4 id="bannerTitle">MBA Colleges (University Degree)</h4>
                <p id="bannerDesc">University degrees awarded by state/central universities and Institutes of National Importance (IIMs, FMS, JBIMS, IITs). Recognized worldwide for academic and doctoral pathways.</p>
              </div>
              <a href="#programs?sub=compare" class="banner-learn-link">MBA vs PGDM Matrix →</a>
            </div>

            <!-- Quick Filter Chips Row (Shiksha Trend Filters) -->
            <div class="portal-quick-chips-row">
              <span class="chips-label">Popular Filters:</span>
              <div class="chips-scroll" id="portalQuickChips">
                <button class="quick-chip-btn active" data-filter-type="all">All (${COLLEGES_DATA.length})</button>
                <button class="quick-chip-btn" data-filter-type="top10">🏆 Top 10 NIRF</button>
                <button class="quick-chip-btn" data-filter-type="highroi">💎 High ROI (Fees &lt; ₹15L)</button>
                <button class="quick-chip-btn" data-filter-type="sal30">🚀 Avg CTC &gt; ₹30 LPA</button>
                <button class="quick-chip-btn" data-filter-type="exam" data-exam="CAT">🐱 CAT Accepted</button>
                <button class="quick-chip-btn" data-filter-type="exam" data-exam="XAT">🎯 XAT Accepted</button>
                <button class="quick-chip-btn" data-filter-type="exam" data-exam="CMAT">⚡ CMAT Accepted</button>
                <button class="quick-chip-btn" data-filter-type="exam" data-exam="SNAP">🦁 SNAP Accepted</button>
                <button class="quick-chip-btn" data-filter-type="exam" data-exam="MH-CET">🏙️ MAH-CET (Mumbai)</button>
                <button class="quick-chip-btn" data-filter-type="govt">🏛️ Government / IIMs</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- MAIN 2-COLUMN PORTAL SECTION -->
      <section class="portal-main-directory-section">
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

          <!-- LEFT COLUMN: FACETED FILTER SIDEBAR (SHIKSHA STYLE) -->
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
              <!-- ACCORDION: COURSE / DEGREE TYPE (MBA / PGDM) -->
              <div class="filter-group">
                <div class="filter-group-title">
                  <span>Degree / Course Type</span>
                  <span class="group-count-tag" id="degreeCountTag">All</span>
                </div>
                <div class="filter-group-options" id="filterDegreeOptions">
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="degreeFilter" value="MBA" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">MBA (University Degree)</span>
                    <span class="cb-badge">${COLLEGES_DATA.filter(c => c.degreeTypes && c.degreeTypes.includes('MBA')).length}</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="degreeFilter" value="PGDM" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">PGDM (Autonomous Diploma)</span>
                    <span class="cb-badge">${COLLEGES_DATA.filter(c => c.degreeTypes && c.degreeTypes.includes('PGDM')).length}</span>
                  </label>
                </div>
              </div>

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
                    <span class="cb-badge">${COLLEGES_DATA.filter(c => c.city === 'Delhi-NCR').length}</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="cityFilter" value="Mumbai" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">Mumbai</span>
                    <span class="cb-badge">${COLLEGES_DATA.filter(c => c.city === 'Mumbai').length}</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="cityFilter" value="Bengaluru" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">Bengaluru</span>
                    <span class="cb-badge">${COLLEGES_DATA.filter(c => c.city === 'Bengaluru').length}</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="cityFilter" value="Pune" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">Pune</span>
                    <span class="cb-badge">${COLLEGES_DATA.filter(c => c.city === 'Pune').length}</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="cityFilter" value="Jaipur" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">Jaipur / Rajasthan</span>
                    <span class="cb-badge">${COLLEGES_DATA.filter(c => c.city === 'Jaipur').length}</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="cityFilter" value="Dehradun" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">Dehradun / Uttarakhand</span>
                    <span class="cb-badge">${COLLEGES_DATA.filter(c => c.city === 'Dehradun').length}</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="cityFilter" value="Ahmedabad" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">Ahmedabad</span>
                    <span class="cb-badge">${COLLEGES_DATA.filter(c => c.city === 'Ahmedabad').length}</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="cityFilter" value="Kolkata" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">Kolkata</span>
                    <span class="cb-badge">${COLLEGES_DATA.filter(c => c.city === 'Kolkata').length}</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="cityFilter" value="Lucknow" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">Lucknow</span>
                    <span class="cb-badge">${COLLEGES_DATA.filter(c => c.city === 'Lucknow').length}</span>
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
                    <span class="cb-badge">${COLLEGES_DATA.filter(c => c.examsAccepted.includes('CAT')).length}</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="examFilter" value="XAT" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">XAT (Xavier Aptitude Test)</span>
                    <span class="cb-badge">${COLLEGES_DATA.filter(c => c.examsAccepted.includes('XAT')).length}</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="examFilter" value="CMAT" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">CMAT (Common Management)</span>
                    <span class="cb-badge">${COLLEGES_DATA.filter(c => c.examsAccepted.includes('CMAT')).length}</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="examFilter" value="MAT" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">MAT / ATMA</span>
                    <span class="cb-badge">${COLLEGES_DATA.filter(c => c.examsAccepted.includes('MAT') || c.examsAccepted.includes('ATMA')).length}</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="examFilter" value="SNAP" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">SNAP (Symbiosis Entrance)</span>
                    <span class="cb-badge">${COLLEGES_DATA.filter(c => c.examsAccepted.includes('SNAP')).length}</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="examFilter" value="NMAT" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">NMAT by GMAC</span>
                    <span class="cb-badge">${COLLEGES_DATA.filter(c => c.examsAccepted.includes('NMAT')).length}</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="examFilter" value="GMAT" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">GMAT</span>
                    <span class="cb-badge">${COLLEGES_DATA.filter(c => c.examsAccepted.includes('GMAT')).length}</span>
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
                    <span class="cb-badge">${COLLEGES_DATA.filter(c => c.feeNum <= 5).length}</span>
                  </label>
                  <label class="filter-radio-item">
                    <input type="radio" name="feeRangeFilter" value="5to15" class="portal-radio" />
                    <span class="rb-custom"></span>
                    <span class="cb-label">₹5 Lakhs - ₹15 Lakhs</span>
                    <span class="cb-badge">${COLLEGES_DATA.filter(c => c.feeNum > 5 && c.feeNum <= 15).length}</span>
                  </label>
                  <label class="filter-radio-item">
                    <input type="radio" name="feeRangeFilter" value="15to25" class="portal-radio" />
                    <span class="rb-custom"></span>
                    <span class="cb-label">₹15 Lakhs - ₹25 Lakhs</span>
                    <span class="cb-badge">${COLLEGES_DATA.filter(c => c.feeNum > 15 && c.feeNum <= 25).length}</span>
                  </label>
                  <label class="filter-radio-item">
                    <input type="radio" name="feeRangeFilter" value="above25" class="portal-radio" />
                    <span class="rb-custom"></span>
                    <span class="cb-label">&gt; ₹25 Lakhs (Elite Tier)</span>
                    <span class="cb-badge">${COLLEGES_DATA.filter(c => c.feeNum > 25).length}</span>
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
                    <span class="cb-badge">${COLLEGES_DATA.filter(c => c.avgSalaryNum >= 30).length}</span>
                  </label>
                  <label class="filter-radio-item">
                    <input type="radio" name="salaryRangeFilter" value="20to30" class="portal-radio" />
                    <span class="rb-custom"></span>
                    <span class="cb-label">₹20 LPA - ₹30 LPA</span>
                    <span class="cb-badge">${COLLEGES_DATA.filter(c => c.avgSalaryNum >= 20 && c.avgSalaryNum < 30).length}</span>
                  </label>
                  <label class="filter-radio-item">
                    <input type="radio" name="salaryRangeFilter" value="under20" class="portal-radio" />
                    <span class="rb-custom"></span>
                    <span class="cb-label">&lt; ₹20 LPA</span>
                    <span class="cb-badge">${COLLEGES_DATA.filter(c => c.avgSalaryNum < 20).length}</span>
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
                    <span class="cb-badge">${COLLEGES_DATA.filter(c => c.ownership.toLowerCase().includes('government')).length}</span>
                  </label>
                  <label class="filter-checkbox-item">
                    <input type="checkbox" name="ownershipFilter" value="Private" class="portal-checkbox" />
                    <span class="cb-custom"></span>
                    <span class="cb-label">Private Autonomous / University</span>
                    <span class="cb-badge">${COLLEGES_DATA.filter(c => c.ownership.toLowerCase().includes('private')).length}</span>
                  </label>
                </div>
              </div>

            </div>

            <!-- Sidebar Promo Banner -->
            <div class="sidebar-counseling-box">
              <span class="counseling-mini-badge">AI Assistant</span>
              <h4>Not sure which B-School fits your profile?</h4>
              <p>AdmitIQ evaluates your 10th, 12th, graduation score & work-ex to give instant recommendations.</p>
              <a href="#ai-chat" class="sidebar-counseling-btn">Ask AI Mentor →</a>
            </div>
          </aside>

          <!-- RIGHT COLUMN: RESULTS FEED -->
          <main class="portal-results-feed">
            <!-- Feed Control Bar -->
            <div class="feed-control-bar">
              <div class="feed-results-info">
                <h2 class="feed-results-title">
                  <span id="resultsCountSpan">${COLLEGES_DATA.length}</span> <span id="resultsLabelSpan">Colleges</span> Found
                </h2>
                <span class="feed-subtitle">Sorted by NIRF & Verified 2026 Metrics</span>
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

            <!-- Empty State (Hidden by default) -->
            <div class="portal-empty-state" id="portalEmptyState" style="display:none;">
              <div class="empty-state-icon">🔍</div>
              <h3>No Colleges Match Your Selected Filters</h3>
              <p>Try clearing some filters or searching for another keyword like "IIM", "Mumbai", "CAT", or "FMS".</p>
              <button class="btn-gradient-pill" id="emptyStateResetBtn">Reset All Filters</button>
            </div>
          </main>

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

// Function to render cards or table list
export function renderCollegesCards(colleges, compareList = [], viewMode = 'card') {
  if (!colleges || colleges.length === 0) {
    return '';
  }

  if (viewMode === 'list') {
    return `
      <div class="shiksha-table-wrapper">
        <table class="shiksha-compare-table">
          <thead>
            <tr>
              <th>Compare</th>
              <th>College & Rating</th>
              <th>NIRF Rank</th>
              <th>Total Fees</th>
              <th>Avg CTC (LPA)</th>
              <th>Cutoff</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${colleges.map(col => {
              const isCompared = compareList.includes(col.id);
              const cutoffText = col.cutoffCAT !== 'N/A' ? `CAT: ${col.cutoffCAT}` : (col.cutoffXAT !== 'N/A' ? `XAT: ${col.cutoffXAT}` : `CMAT: ${col.cutoffCMAT}`);
              return `
                <tr class="table-row-college">
                  <td class="text-center">
                    <label class="table-cb-label">
                      <input type="checkbox" class="compare-college-checkbox" data-college-id="${col.id}" ${isCompared ? 'checked' : ''} />
                      <span class="cb-custom"></span>
                    </label>
                  </td>
                  <td>
                    <div class="table-college-info">
                      <div class="table-college-avatar">${col.shortName.substring(0, 3)}</div>
                      <div>
                        <div class="table-college-name" data-view-college="${col.id}">${col.name}</div>
                        <div class="table-college-sub">${col.location} • <span class="stars">★ ${col.rating}</span> (${col.reviewsCount} reviews)</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span class="table-rank-pill">#${col.nirfRank}</span>
                  </td>
                  <td class="table-fee-cell font-semibold">${col.fees}</td>
                  <td class="table-salary-cell font-semibold text-green">${col.avgSalary}</td>
                  <td class="table-cutoff-cell">${cutoffText}</td>
                  <td>
                    <button class="btn-table-view" data-view-college="${col.id}">View Details</button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // Standard Shiksha / Zollege Card View
  return colleges.map(col => {
    const isCompared = compareList.includes(col.id);
    const cutoffText = col.cutoffCAT !== 'N/A' ? `CAT: ${col.cutoffCAT}` : (col.cutoffXAT !== 'N/A' ? `XAT: ${col.cutoffXAT}` : `CMAT: ${col.cutoffCMAT}`);
    const examTags = col.examsAccepted.map(e => `<span class="badge-exam-pill">${e}</span>`).join('');
    const topRecruitersPreview = (col.topRecruiters || []).slice(0, 4).join(', ');

    return `
      <article class="shiksha-college-card" data-college-id="${col.id}">
        <!-- Top Status Bar -->
        <div class="shiksha-card-topbar">
          <div class="topbar-left">
            <span class="nirf-tag">#${col.nirfRank} in NIRF 2026</span>
            <span class="degree-tag ${col.degreeTypes?.includes('MBA') ? 'tag-mba' : 'tag-pgdm'}">${(col.degreeTypes || ['MBA']).join(' & ')}</span>
            <span class="ownership-tag">${col.ownership.split('/')[0]}</span>
            <span class="accreditation-tag">${col.accreditation.split(',')[0]}</span>
          </div>
          
          <label class="compare-checkbox-container" title="Select to compare">
            <input type="checkbox" class="compare-college-checkbox" data-college-id="${col.id}" ${isCompared ? 'checked' : ''} />
            <span class="cb-custom"></span>
            <span class="compare-label-text">Compare</span>
          </label>
        </div>

        <!-- Main Card Body -->
        <div class="shiksha-card-main">
          <!-- Monogram Logo & College Title -->
          <div class="shiksha-title-row">
            <div class="college-monogram-box">
              <span class="monogram-text">${col.shortName.replace(/[^A-Za-z]/g, '').slice(0, 3)}</span>
            </div>
            <div class="college-titles-wrap">
              <div class="verified-title-row">
                <h3 class="college-card-title" data-view-college="${col.id}">${col.name}</h3>
                <span class="verified-tick" title="100% Audited Placement & Fee Data">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#34A853"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                </span>
              </div>
              <div class="college-meta-sub">
                <span class="loc-text">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  ${col.location}
                </span>
                <span class="dot-sep">•</span>
                <span class="star-rating">
                  ★ ${col.rating} <span class="review-count">(${col.reviewsCount} Student Reviews)</span>
                </span>
                <span class="dot-sep">•</span>
                <span class="est-year">Est. ${col.establishedYear}</span>
              </div>
            </div>
          </div>

          <!-- Shiksha Metrics 4-Box Grid -->
          <div class="shiksha-metrics-grid">
            <div class="metric-block">
              <span class="metric-label">Total Course Fees</span>
              <span class="metric-value font-semibold">${col.fees}</span>
              <span class="metric-hint">2-Year Full Tuition</span>
            </div>

            <div class="metric-block">
              <span class="metric-label">Average CTC</span>
              <span class="metric-value text-green font-semibold">${col.avgSalary}</span>
              <span class="metric-hint">Highest: ${col.highestSalary}</span>
            </div>

            <div class="metric-block">
              <span class="metric-label">Accepted Exams & Cutoff</span>
              <span class="metric-value text-blue font-semibold">${cutoffText}</span>
              <span class="metric-hint">${col.examsAccepted.join(', ')}</span>
            </div>

            <div class="metric-block">
              <span class="metric-label">ROI Rating</span>
              <span class="metric-value text-amber font-semibold">${col.roiScore}</span>
              <span class="metric-hint">Batch Size: ${col.batchSize}</span>
            </div>
          </div>

          <!-- Highlights & Programs Snippet -->
          <div class="shiksha-card-highlights">
            <div class="highlight-line">
              <strong>Key Strengths:</strong> ${col.highlights}
            </div>
            <div class="recruiters-line">
              <strong>Top Recruiters:</strong> <span class="text-secondary">${topRecruitersPreview} + more</span>
            </div>
          </div>
        </div>

        <!-- Card Action Footer -->
        <div class="shiksha-card-footer">
          <div class="footer-tags">
            ${examTags}
            <span class="badge-campus-tag">${col.campusArea}</span>
          </div>

          <div class="footer-cta-buttons">
            <button class="btn-outline-brochure" data-brochure-college="${col.id}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              <span>Brochure & Fees</span>
            </button>
            <button class="btn-primary-view-profile" data-view-college="${col.id}">
              <span>View 360° Profile</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Function to render the 360° College Detail Modal (Shiksha.com complete tabs)
export function renderCollegeDetailModalContent(col, activeTab = 'overview') {
  if (!col) return '';

  const cutoffDetails = col.cutoffDetails || {};
  const courses = col.courses || [];
  const domainDist = col.domainDistribution || {};
  const admissionCriteria = col.admissionCriteria || {};
  const facilities = col.facilities || [];

  return `
    <div class="modal-college-container">
      <!-- Modal Header Bar -->
      <div class="modal-top-nav">
        <div class="modal-nav-left">
          <span class="modal-nirf-tag">#${col.nirfRank} NIRF Ranking</span>
          <span class="modal-loc-text">${col.location}</span>
        </div>
        <button class="modal-close-icon-btn" id="closeDetailModalBtn" title="Close Profile (Esc)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>

      <!-- College Hero Banner -->
      <div class="modal-college-hero">
        <div class="hero-college-identity">
          <div class="hero-college-logo">${col.shortName.slice(0, 3)}</div>
          <div class="hero-college-titles">
            <h2 class="hero-college-name">${col.name}</h2>
            <div class="hero-college-meta">
              <span>🏛️ ${col.ownership}</span>
              <span>•</span>
              <span>📅 Estd: ${col.establishedYear}</span>
              <span>•</span>
              <span>🌳 Campus: ${col.campusArea}</span>
              <span>•</span>
              <span class="star-rating-pill">★ ${col.rating} (${col.reviewsCount} Reviews)</span>
            </div>
            <div class="accreditation-badges-row">
              <span class="acc-badge">Accredited: ${col.accreditation}</span>
            </div>
          </div>
        </div>

        <!-- Hero Stats Strip -->
        <div class="modal-stats-strip">
          <div class="mstat-item">
            <div class="mstat-val text-blue">${col.fees}</div>
            <div class="mstat-lbl">2-Year Tuition Fees</div>
          </div>
          <div class="mstat-item">
            <div class="mstat-val text-green">${col.avgSalary}</div>
            <div class="mstat-lbl">Average CTC</div>
          </div>
          <div class="mstat-item">
            <div class="mstat-val">${col.highestSalary}</div>
            <div class="mstat-lbl">Highest CTC</div>
          </div>
          <div class="mstat-item">
            <div class="mstat-val text-amber">${col.cutoffCAT !== 'N/A' ? col.cutoffCAT : (col.cutoffXAT !== 'N/A' ? col.cutoffXAT : col.cutoffCMAT)}</div>
            <div class="mstat-lbl">Cutoff Percentile</div>
          </div>
          <div class="mstat-item">
            <div class="mstat-val">${col.batchSize}</div>
            <div class="mstat-lbl">Batch Size</div>
          </div>
        </div>
      </div>

      <!-- Shiksha Tabs Navigation -->
      <div class="modal-tabs-header">
        <button class="modal-tab-btn ${activeTab === 'overview' ? 'active' : ''}" data-tab="overview">
          📋 Overview & Campus
        </button>
        <button class="modal-tab-btn ${activeTab === 'courses' ? 'active' : ''}" data-tab="courses">
          🎓 Courses & Fees (${courses.length})
        </button>
        <button class="modal-tab-btn ${activeTab === 'cutoffs' ? 'active' : ''}" data-tab="cutoffs">
          🎯 Cutoffs & Eligibility
        </button>
        <button class="modal-tab-btn ${activeTab === 'placements' ? 'active' : ''}" data-tab="placements">
          💼 Placements & Recruiters
        </button>
        <button class="modal-tab-btn ${activeTab === 'admission' ? 'active' : ''}" data-tab="admission">
          📝 Admission Criteria
        </button>
        <button class="modal-tab-btn ${activeTab === 'reviews' ? 'active' : ''}" data-tab="reviews">
          ⭐ Student Reviews
        </button>
      </div>

      <!-- Tab Content Area -->
      <div class="modal-tab-body">
        
        <!-- TAB 1: OVERVIEW -->
        <div class="modal-tab-pane ${activeTab === 'overview' ? 'active' : ''}" id="tab-overview">
          <div class="overview-section">
            <h3 class="tab-section-title">About ${col.shortName}</h3>
            <p class="tab-text-para">${col.highlights}</p>

            <div class="info-grid-2col">
              <div class="info-card">
                <h4>Key Institute Highlights</h4>
                <ul class="highlight-checklist">
                  <li><strong>NIRF Management Ranking:</strong> Ranked #${col.nirfRank} in India</li>
                  <li><strong>Accreditation:</strong> ${col.accreditation}</li>
                  <li><strong>Flagship Program:</strong> ${col.programType}</li>
                  <li><strong>Campus Spread:</strong> ${col.campusArea} fully residential</li>
                  <li><strong>Return on Investment (ROI):</strong> ${col.roiScore}</li>
                  <li><strong>Accepted Exams:</strong> ${col.examsAccepted.join(', ')}</li>
                </ul>
              </div>

              <div class="info-card">
                <h4>Campus Infrastructure & Facilities</h4>
                <div class="facilities-tags-grid">
                  ${facilities.map(fac => `
                    <div class="facility-chip">
                      <span class="fac-icon">✓</span>
                      <span>${fac}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- TAB 2: COURSES & FEES -->
        <div class="modal-tab-pane ${activeTab === 'courses' ? 'active' : ''}" id="tab-courses">
          <div class="courses-section">
            <h3 class="tab-section-title">Programs Offered, Fees & Seat Matrix 2026-28</h3>
            <p class="tab-text-para">Tuition fees include academic materials, library access, and computer cluster amenities. Living/hostel expenses may vary.</p>
            
            <div class="courses-table-wrap">
              <table class="shiksha-data-table">
                <thead>
                  <tr>
                    <th>Course / Specialization</th>
                    <th>Duration</th>
                    <th>Total Intake (Seats)</th>
                    <th>Total Course Fee</th>
                    <th>Eligibility Criteria</th>
                  </tr>
                </thead>
                <tbody>
                  ${courses.map(course => `
                    <tr>
                      <td class="font-medium">
                        <strong>${course.name}</strong>
                      </td>
                      <td>${course.duration}</td>
                      <td><span class="seat-badge">${course.seats} Seats</span></td>
                      <td class="font-semibold text-blue">${course.fee}</td>
                      <td class="text-secondary">Graduation (50% min) + Valid ${col.examsAccepted[0]}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <div class="fee-disclaimer-box">
              <span class="info-icon">ℹ️</span>
              <span><strong>Note:</strong> Need-based financial assistance and Central Government scholarships are available for eligible candidates from SC/ST/NC-OBC categories.</span>
            </div>
          </div>
        </div>

        <!-- TAB 3: CUTOFFS -->
        <div class="modal-tab-pane ${activeTab === 'cutoffs' ? 'active' : ''}" id="tab-cutoffs">
          <div class="cutoffs-section">
            <h3 class="tab-section-title">Category-wise Cutoff Percentiles & Sectional Standards</h3>
            <p class="tab-text-para">Based on official admission shortlisting data for the 2026-2028 batch.</p>

            <div class="cutoff-table-card">
              <table class="shiksha-data-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Overall Cutoff Percentile</th>
                    <th>Sectional Minimums (VARC / DILR / QA)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>General / Open</strong></td>
                    <td class="font-semibold text-blue">${cutoffDetails.general || col.cutoffCAT}</td>
                    <td>${cutoffDetails.sectional || 'VARC 80, DILR 75, QA 75'}</td>
                  </tr>
                  <tr>
                    <td><strong>NC-OBC / EWS</strong></td>
                    <td class="font-semibold">${cutoffDetails.ncObc || '90-94%ile'}</td>
                    <td>Sectional relaxes by ~5 to 10 percentile</td>
                  </tr>
                  <tr>
                    <td><strong>SC (Scheduled Caste)</strong></td>
                    <td class="font-semibold">${cutoffDetails.sc || '80-84%ile'}</td>
                    <td>Minimum 65 percentile across sections</td>
                  </tr>
                  <tr>
                    <td><strong>ST (Scheduled Tribe) / PwD</strong></td>
                    <td class="font-semibold">${cutoffDetails.st || '70-75%ile'}</td>
                    <td>Minimum 55-60 percentile across sections</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="cutoff-tips-box">
              <h4>🎯 What Score Do You Need to Convert?</h4>
              <p>While the minimum shortlist gate is listed above, high composite scores require balanced performance in graduation, 10th/12th, and stellar performance in the Personal Interview (PI) & Written Ability Test (WAT).</p>
            </div>
          </div>
        </div>

        <!-- TAB 4: PLACEMENTS -->
        <div class="modal-tab-pane ${activeTab === 'placements' ? 'active' : ''}" id="tab-placements">
          <div class="placements-section">
            <h3 class="tab-section-title">Audited Placement Statistics & Sector Distribution</h3>
            <p class="tab-text-para">Official audited figures for the graduating cohort. 100% placement record.</p>

            <!-- Placements Top Stats -->
            <div class="placement-stats-row">
              <div class="pl-stat-box">
                <span class="pl-val text-green">${col.avgSalary}</span>
                <span class="pl-lbl">Average CTC</span>
              </div>
              <div class="pl-stat-box">
                <span class="pl-val">${col.medianSalary}</span>
                <span class="pl-lbl">Median CTC</span>
              </div>
              <div class="pl-stat-box">
                <span class="pl-val text-blue">${col.highestSalary}</span>
                <span class="pl-lbl">Highest Domestic CTC</span>
              </div>
              <div class="pl-stat-box">
                <span class="pl-val">${col.batchSize}</span>
                <span class="pl-lbl">Placed Students</span>
              </div>
            </div>

            <!-- Domain Distribution Visual Bars -->
            <div class="domain-bars-card">
              <h4>Sector-wise Hiring Breakdown</h4>
              <div class="domain-progress-bars">
                ${Object.entries(domainDist).map(([domainKey, percentage]) => {
                  const label = domainKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                  return `
                    <div class="domain-bar-item">
                      <div class="domain-bar-label">
                        <span>${label}</span>
                        <strong>${percentage}</strong>
                      </div>
                      <div class="domain-bar-track">
                        <div class="domain-bar-fill" style="width: ${percentage};"></div>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- Top Recruiters Chips -->
            <div class="recruiters-card">
              <h4>Marquee Recruiters</h4>
              <div class="recruiters-badges-cloud">
                ${(col.topRecruiters || []).map(r => `
                  <span class="recruiter-badge">${r}</span>
                `).join('')}
              </div>
            </div>
          </div>
        </div>

        <!-- TAB 5: ADMISSION PROCESS -->
        <div class="modal-tab-pane ${activeTab === 'admission' ? 'active' : ''}" id="tab-admission">
          <div class="admission-section">
            <h3 class="tab-section-title">Admission Process & Selection Weightages</h3>
            <p class="tab-text-para">How ${col.shortName} calculates your final composite score for MBA / PGDM admissions.</p>

            <div class="criteria-cards-grid">
              ${Object.entries(admissionCriteria).map(([key, val]) => {
                const title = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                return `
                  <div class="criteria-card">
                    <div class="crit-icon">⚖️</div>
                    <div class="crit-title">${title}</div>
                    <div class="crit-val">${val}</div>
                  </div>
                `;
              }).join('')}
            </div>

            <div class="admission-steps-timeline">
              <h4>Three-Stage Selection Roadmap</h4>
              <div class="timeline-step">
                <div class="step-num">1</div>
                <div>
                  <strong>Entrance Exam Gate:</strong> Register and appear for ${col.examsAccepted.join('/')}. Meet overall & sectional minimum percentiles.
                </div>
              </div>
              <div class="timeline-step">
                <div class="step-num">2</div>
                <div>
                  <strong>Shortlisting for WAT & PI:</strong> Candidates are evaluated on composite score (Entrance score + 10th/12th/Graduation + Gender/Academic diversity points).
                </div>
              </div>
              <div class="timeline-step">
                <div class="step-num">3</div>
                <div>
                  <strong>Final Merit List:</strong> Personal Interview (PI) performance combined with WAT and Work Experience determines final admission offers.
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- TAB 6: REVIEWS -->
        <div class="modal-tab-pane ${activeTab === 'reviews' ? 'active' : ''}" id="tab-reviews">
          <div class="reviews-section">
            <h3 class="tab-section-title">Student Sentiment & Verified Feedback</h3>
            
            <div class="rating-overview-card">
              <div class="rating-score-box">
                <div class="big-rating-num">${col.rating}</div>
                <div class="stars-gold">★★★★★</div>
                <div class="rating-caption">Based on ${col.reviewsCount} reviews</div>
              </div>
              <div class="sentiment-summary">
                <h4>What Aspirants & Alumni Say</h4>
                <div class="pros-cons-grid">
                  <div class="pro-box">
                    <strong class="text-green">✓ Pros:</strong>
                    <ul>
                      <li>Exceptional peer group and alumni network across consulting & finance.</li>
                      <li>High return on investment and dream global placements.</li>
                      <li>World-class campus amenities, libraries, and international faculty.</li>
                    </ul>
                  </div>
                  <div class="con-box">
                    <strong class="text-amber">⚠️ Things to consider:</strong>
                    <ul>
                      <li>High academic rigor and intense competitive curve.</li>
                      <li>Rigid attendance criteria and rigorous submission deadlines.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Modal Footer Action Bar -->
      <div class="modal-footer-action-bar">
        <button class="btn-outline-modal" data-brochure-college="${col.id}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          <span>Download 2026 Brochure</span>
        </button>
        <button class="btn-ask-ai-modal" data-ask-ai="${col.name}">
          <span>Ask AdmitIQ About Eligibility</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
        </button>
        <button class="btn-gradient-pill btn-apply-modal" data-apply-college="${col.id}">
          <span>Apply Now / Get Free Counseling</span>
        </button>
      </div>
    </div>
  `;
}

// Function to render Side-by-Side College Comparison Modal
export function renderComparisonModalContent(selectedColleges = []) {
  if (selectedColleges.length === 0) {
    return `<div class="p-6 text-center">No colleges selected for comparison.</div>`;
  }

  return `
    <div class="comparison-dialog-container">
      <div class="comp-dialog-header">
        <div class="comp-dialog-titles">
          <span class="comp-badge">Side-by-Side Matrix</span>
          <h2>Compare ${selectedColleges.length} Top B-Schools</h2>
        </div>
        <button class="modal-close-icon-btn" id="closeCompareModalBtn">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>

      <div class="comparison-table-scroll">
        <table class="shiksha-head-to-head-table">
          <thead>
            <tr>
              <th class="matrix-prop-th">Feature / Parameter</th>
              ${selectedColleges.map(col => `
                <th class="matrix-college-th">
                  <div class="matrix-th-avatar">${col.shortName.slice(0, 3)}</div>
                  <div class="matrix-th-name">${col.name}</div>
                  <div class="matrix-th-city">${col.location}</div>
                  <button class="matrix-remove-btn" data-remove-compare="${col.id}">Remove ✕</button>
                </th>
              `).join('')}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="prop-label">NIRF 2026 Rank</td>
              ${selectedColleges.map(c => `<td><span class="table-rank-pill">#${c.nirfRank}</span></td>`).join('')}
            </tr>
            <tr>
              <td class="prop-label">Student Rating</td>
              ${selectedColleges.map(c => `<td><strong class="text-amber">★ ${c.rating}</strong> (${c.reviewsCount} reviews)</td>`).join('')}
            </tr>
            <tr>
              <td class="prop-label">Total 2-Yr Fees</td>
              ${selectedColleges.map(c => `<td class="font-semibold text-blue">${c.fees}</td>`).join('')}
            </tr>
            <tr>
              <td class="prop-label">Average CTC</td>
              ${selectedColleges.map(c => `<td class="font-semibold text-green">${c.avgSalary}</td>`).join('')}
            </tr>
            <tr>
              <td class="prop-label">Highest CTC</td>
              ${selectedColleges.map(c => `<td><strong>${c.highestSalary}</strong></td>`).join('')}
            </tr>
            <tr>
              <td class="prop-label">Median CTC</td>
              ${selectedColleges.map(c => `<td>${c.medianSalary}</td>`).join('')}
            </tr>
            <tr>
              <td class="prop-label">ROI Score</td>
              ${selectedColleges.map(c => `<td><span class="badge-roi">${c.roiScore}</span></td>`).join('')}
            </tr>
            <tr>
              <td class="prop-label">Accepted Exams</td>
              ${selectedColleges.map(c => `<td>${c.examsAccepted.join(', ')}</td>`).join('')}
            </tr>
            <tr>
              <td class="prop-label">Cutoff Percentile</td>
              ${selectedColleges.map(c => `<td>${c.cutoffCAT !== 'N/A' ? `CAT: ${c.cutoffCAT}` : (c.cutoffXAT !== 'N/A' ? `XAT: ${c.cutoffXAT}` : c.cutoffCMAT)}</td>`).join('')}
            </tr>
            <tr>
              <td class="prop-label">Batch Size</td>
              ${selectedColleges.map(c => `<td>${c.batchSize} Students</td>`).join('')}
            </tr>
            <tr>
              <td class="prop-label">Accreditations</td>
              ${selectedColleges.map(c => `<td>${c.accreditation}</td>`).join('')}
            </tr>
            <tr>
              <td class="prop-label">Institute Ownership</td>
              ${selectedColleges.map(c => `<td>${c.ownership.split('/')[0]}</td>`).join('')}
            </tr>
            <tr>
              <td class="prop-label">Campus Spread</td>
              ${selectedColleges.map(c => `<td>${c.campusArea}</td>`).join('')}
            </tr>
            <tr>
              <td class="prop-label">Top Recruiters</td>
              ${selectedColleges.map(c => `<td>${(c.topRecruiters || []).slice(0, 4).join(', ')}</td>`).join('')}
            </tr>
            <tr>
              <td class="prop-label">Action</td>
              ${selectedColleges.map(c => `
                <td>
                  <button class="btn-primary-view-profile" data-view-college="${c.id}" style="width:100%; justify-content:center;">
                    View Profile
                  </button>
                </td>
              `).join('')}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// Function to render Brochure / Free Counseling Modal
export function renderBrochureModalContent(college) {
  return `
    <div class="brochure-modal-container">
      <div class="brochure-modal-header">
        <div>
          <span class="brochure-sub-pill">Instant PDF & Fee Breakdown</span>
          <h3>${college ? college.name : 'MBA Admissions 2026'}</h3>
        </div>
        <button class="modal-close-icon-btn" id="closeBrochureModalBtn">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>

      <form id="brochureEnquiryForm" class="brochure-enquiry-form">
        <p class="brochure-form-desc">Enter your details to receive the official audited placement report, fee structure, and cutoffs directly on WhatsApp & Email.</p>

        <div class="form-group-item">
          <label>Full Name *</label>
          <input type="text" id="brochureFullName" required placeholder="e.g. Rahul Sharma" class="modal-text-input" />
        </div>

        <div class="form-group-item">
          <label>Mobile Number (WhatsApp) *</label>
          <div class="input-phone-group">
            <span class="phone-prefix">+91</span>
            <input type="tel" id="brochureMobile" pattern="[0-9]{10}" required placeholder="9876543210" class="modal-text-input" />
          </div>
        </div>

        <div class="form-group-item">
          <label>Email Address *</label>
          <input type="email" id="brochureEmail" required placeholder="rahul@example.com" class="modal-text-input" />
        </div>

        <div class="form-group-row">
          <div class="form-group-item">
            <label>Expected / Mock %ile</label>
            <input type="number" id="brochurePercentile" min="40" max="100" step="0.5" placeholder="e.g. 98.0" class="modal-text-input" />
          </div>
          <div class="form-group-item">
            <label>Target Year</label>
            <select id="brochureYear" class="modal-select">
              <option value="2026">2026 Batch</option>
              <option value="2027">2027 Batch</option>
            </select>
          </div>
        </div>

        <button type="submit" class="btn-gradient-pill brochure-submit-btn">
          <span>Get Free Brochure & Cutoffs</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
        </button>

        <div class="brochure-success-message" id="brochureSuccessMessage" style="display:none;">
          <div class="success-icon">✓</div>
          <div>
            <strong>Brochure Dispatched!</strong>
            <p>We've sent the audited fee matrix & cutoff PDF to your phone and email.</p>
          </div>
        </div>
      </form>
    </div>
  `;
}
