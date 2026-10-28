export function renderNavbar(activePage = 'home', activeSub = null) {
  return `
    <header class="site-header">
      <div class="header-container">
        <!-- FindMyBSchool Brand Logo -->
        <a href="/" class="brand-logo" data-route="home">
          <div class="fmc-logo-badge">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
          </div>
          <div class="brand-text">
            <span class="brand-title">FindMy<span class="brand-accent">BSchool</span></span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="nav-pill-wrapper">
          <ul class="nav-pill-list">
            <!-- Home -->
            <li class="nav-item">
              <a href="/" class="nav-link ${activePage === 'home' ? 'active' : ''}" data-route="home">
                Home
              </a>
            </li>

            <!-- Colleges Dropdown -->
            <li class="nav-item has-dropdown">
              <a href="/colleges" class="nav-link ${activePage === 'colleges' ? 'active' : ''}" data-route="colleges">
                <span>Colleges</span>
                <svg class="chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
              </a>
              <div class="dropdown-menu">
                <a href="/colleges" class="dropdown-item" data-route="colleges">
                  <span class="dropdown-icon">🏛️</span>
                  <div>
                    <div class="dropdown-title">All Colleges (680+)</div>
                    <div class="dropdown-desc">Verified fees, placements & cutoffs</div>
                  </div>
                </a>
                <a href="/colleges/mba" class="dropdown-item" data-route="colleges" data-sub="type=mba">
                  <span class="dropdown-icon">🎓</span>
                  <div>
                    <div class="dropdown-title">MBA Degree Colleges</div>
                    <div class="dropdown-desc">University programs (FMS, JBIMS, IITs)</div>
                  </div>
                </a>
                <a href="/colleges/pgdm" class="dropdown-item" data-route="colleges" data-sub="type=pgdm">
                  <span class="dropdown-icon">💼</span>
                  <div>
                    <div class="dropdown-title">PGDM Colleges</div>
                    <div class="dropdown-desc">Industry diplomas (XLRI, SPJIMR, MDI)</div>
                  </div>
                </a>
                <a href="/aiu-approved-campuses" class="dropdown-item" data-route="aiu-approved-campuses">
                  <span class="dropdown-icon">📍</span>
                  <div>
                    <div class="dropdown-title">AIU Approved Campuses</div>
                    <div class="dropdown-desc">City-wise verified colleges (9 hubs)</div>
                  </div>
                </a>
                <a href="/programs/compare" class="dropdown-item" data-route="programs" data-sub="compare">
                  <span class="dropdown-icon">⚖️</span>
                  <div>
                    <div class="dropdown-title">MBA vs PGDM Guide</div>
                    <div class="dropdown-desc">Compare eligibility, curriculum & ROI</div>
                  </div>
                </a>
              </div>
            </li>

            <!-- Exams Dropdown -->
            <li class="nav-item has-dropdown">
              <a href="/exams" class="nav-link ${activePage === 'exams' ? 'active' : ''}" data-route="exams">
                <span>Exams</span>
                <svg class="chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
              </a>
              <div class="dropdown-menu">
                <a href="/exams" class="dropdown-item" data-route="exams">
                  <span class="dropdown-icon">📝</span>
                  <div>
                    <div class="dropdown-title">All Entrance Exams</div>
                    <div class="dropdown-desc">2027-29 calendar, pattern & syllabus</div>
                  </div>
                </a>
                <a href="/exams/cat" class="dropdown-item" data-route="exams" data-sub="exam=cat">
                  <span class="dropdown-icon">🐱</span>
                  <div>
                    <div class="dropdown-title">CAT 2026</div>
                    <div class="dropdown-desc">IIMs, FMS & SPJIMR gateway</div>
                  </div>
                </a>
                <a href="/exams/xat" class="dropdown-item" data-route="exams" data-sub="exam=xat">
                  <span class="dropdown-icon">🎯</span>
                  <div>
                    <div class="dropdown-title">XAT 2027</div>
                    <div class="dropdown-desc">XLRI Jamshedpur & top institutes</div>
                  </div>
                </a>
                <a href="/exams/snap" class="dropdown-item" data-route="exams" data-sub="exam=snap">
                  <span class="dropdown-icon">🦁</span>
                  <div>
                    <div class="dropdown-title">SNAP 2026</div>
                    <div class="dropdown-desc">SIBM Pune, SCMHRD & Symbiosis</div>
                  </div>
                </a>
                <a href="/exams/cmat" class="dropdown-item" data-route="exams" data-sub="exam=cmat">
                  <span class="dropdown-icon">⚡</span>
                  <div>
                    <div class="dropdown-title">CMAT 2027</div>
                    <div class="dropdown-desc">JBIMS, SIMSREE & GIM Goa</div>
                  </div>
                </a>
              </div>
            </li>

            <!-- Calculators / Tools Dropdown -->
            <li class="nav-item has-dropdown">
              <a href="/tools/cat-college-predictor" class="nav-link ${activePage === 'tools' ? 'active' : ''}" data-route="tools">
                <span>Calculators</span>
                <svg class="chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
              </a>
              <div class="dropdown-menu">
                <a href="/tools/cat-college-predictor" class="dropdown-item" data-route="tools" data-sub="cat">
                  <span class="dropdown-icon">📊</span>
                  <div>
                    <div class="dropdown-title">CAT College Predictor</div>
                    <div class="dropdown-desc">Raw score to percentile & IIM calls</div>
                  </div>
                </a>
                <a href="/tools/xat-percentile-calculator" class="dropdown-item" data-route="tools" data-sub="xat">
                  <span class="dropdown-icon">🎯</span>
                  <div>
                    <div class="dropdown-title">XAT Calculator</div>
                    <div class="dropdown-desc">Negative marking & XLRI cutoffs</div>
                  </div>
                </a>
                <a href="/tools/cmat-percentile-calculator" class="dropdown-item" data-route="tools" data-sub="cmat">
                  <span class="dropdown-icon">⚡</span>
                  <div>
                    <div class="dropdown-title">CMAT Calculator</div>
                    <div class="dropdown-desc">400 marks evaluator & JBIMS cutoffs</div>
                  </div>
                </a>
              </div>
            </li>

            <!-- Mock Tests -->
            <li class="nav-item">
              <a href="/mock-test" class="nav-link ${activePage === 'mock-test' ? 'active' : ''}" data-route="mock-test">
                <span>Mock Tests</span>
                <span class="nav-pill-badge free">FREE</span>
              </a>
            </li>

            <!-- Scholarships -->
            <li class="nav-item">
              <a href="/scholarships" class="nav-link ${activePage === 'scholarships' ? 'active' : ''}" data-route="scholarships">
                <span>Scholarships</span>
                <span class="nav-pill-badge grant">₹25L</span>
              </a>
            </li>

            <!-- Blog -->
            <li class="nav-item">
              <a href="/blog" class="nav-link ${activePage === 'blog' ? 'active' : ''}" data-route="blog">
                Blog
              </a>
            </li>
          </ul>
        </nav>

        <!-- Right Header Actions -->
        <div class="header-actions">
          <!-- Navbar Search Button Trigger -->
          <button class="nav-search-bar" id="openSearchBtn" title="Search Colleges, Exams & Calculators (⌘K)" aria-label="Search colleges, entrance exams and calculators">
            <div class="nav-search-inner">
              <svg class="nav-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <span class="nav-search-text">Search colleges, exams...</span>
            </div>
            <kbd class="nav-search-kbd">⌘K</kbd>
          </button>

          <!-- Free Counseling Primary CTA -->
          <a href="/contact" class="simple-nav-cta" data-route="contact">
            Free Counseling
          </a>

          <!-- Mobile Hamburger Toggle -->
          <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle navigation menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>

    <!-- Redesigned Clean Mobile Navigation Drawer -->
    <div class="mobile-nav-drawer" id="mobileNavDrawer" aria-label="Mobile Navigation Menu">
      <!-- Drawer Header -->
      <div class="mobile-drawer-header">
        <div class="brand-logo">
          <div class="fmc-logo-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
          </div>
          <span class="brand-title">FindMy<span class="brand-accent">BSchool</span></span>
        </div>
        <button class="mobile-drawer-close-btn" id="closeMobileDrawerBtn" aria-label="Close menu">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <!-- Drawer Scrollable Content -->
      <div class="mobile-nav-content">
        <!-- Quick Search Bar inside Drawer -->
        <button class="mobile-drawer-search-btn" onclick="document.getElementById('openSearchBtn')?.click(); document.getElementById('closeMobileDrawerBtn')?.click();" aria-label="Search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <span>Search colleges, exams & cutoffs...</span>
        </button>

        <!-- Primary Navigation List -->
        <div class="mobile-nav-section">
          <a href="/" class="mobile-nav-row ${activePage === 'home' ? 'active' : ''}" data-route="home">
            <span class="mobile-row-icon">🏠</span>
            <span class="mobile-row-title">Home</span>
          </a>
        </div>

        <!-- Section: Colleges -->
        <div class="mobile-nav-section">
          <div class="mobile-section-heading">Colleges Directory</div>
          <div class="mobile-links-list">
            <a href="/colleges" class="mobile-nav-subitem ${activePage === 'colleges' && !activeSub ? 'active' : ''}" data-route="colleges">
              <span>🏛️ All Verified Colleges</span>
              <span class="mobile-badge-subtle">680+</span>
            </a>
            <a href="/colleges/mba" class="mobile-nav-subitem" data-route="colleges" data-sub="type=mba">
              <span>🎓 MBA Colleges (Degree)</span>
            </a>
            <a href="/colleges/pgdm" class="mobile-nav-subitem" data-route="colleges" data-sub="type=pgdm">
              <span>💼 PGDM Colleges (Diploma)</span>
            </a>
            <a href="/aiu-approved-campuses" class="mobile-nav-subitem" data-route="aiu-approved-campuses">
              <span>📍 AIU Approved Campuses</span>
              <span class="mobile-badge-subtle">9 Hubs</span>
            </a>
            <a href="/programs/compare" class="mobile-nav-subitem" data-route="programs" data-sub="compare">
              <span>⚖️ MBA vs PGDM Comparison</span>
            </a>
          </div>
        </div>

        <!-- Section: Entrance Exams -->
        <div class="mobile-nav-section">
          <div class="mobile-section-heading">MBA Entrance Exams</div>
          <div class="mobile-chips-cloud">
            <a href="/exams/cat" class="mobile-exam-chip" data-route="exams" data-sub="cat">CAT</a>
            <a href="/exams/xat" class="mobile-exam-chip" data-route="exams" data-sub="xat">XAT</a>
            <a href="/exams/snap" class="mobile-exam-chip" data-route="exams" data-sub="snap">SNAP</a>
            <a href="/exams/cmat" class="mobile-exam-chip" data-route="exams" data-sub="cmat">CMAT</a>
            <a href="/exams/nmat" class="mobile-exam-chip" data-route="exams" data-sub="nmat">NMAT</a>
            <a href="/exams/mat" class="mobile-exam-chip" data-route="exams" data-sub="mat">MAT</a>
            <a href="/exams/mhcet" class="mobile-exam-chip" data-route="exams" data-sub="mhcet">MAH-CET</a>
            <a href="/exams" class="mobile-exam-chip view-all" data-route="exams">All Exams →</a>
          </div>
        </div>

        <!-- Section: Tools & Prep -->
        <div class="mobile-nav-section">
          <div class="mobile-section-heading">Calculators & Prep</div>
          <div class="mobile-links-list">
            <a href="/tools/cat-college-predictor" class="mobile-nav-subitem" data-route="tools" data-sub="cat">
              <span>📊 CAT College Predictor</span>
            </a>
            <a href="/tools/xat-percentile-calculator" class="mobile-nav-subitem" data-route="tools" data-sub="xat">
              <span>🎯 XAT Score & Cutoff Predictor</span>
            </a>
            <a href="/mock-test" class="mobile-nav-subitem" data-route="mock-test">
              <span>📝 Free CBT Mock Tests</span>
              <span class="mobile-pill-tag green">FREE</span>
            </a>
            <a href="/scholarships" class="mobile-nav-subitem" data-route="scholarships">
              <span>💰 Live MBA Scholarships</span>
              <span class="mobile-pill-tag pink">₹25L Pool</span>
            </a>
          </div>
        </div>

        <!-- Section: Insights & AI Assistant -->
        <div class="mobile-nav-section">
          <div class="mobile-section-heading">Insights & Guidance</div>
          <div class="mobile-links-list">
            <a href="/blog" class="mobile-nav-subitem" data-route="blog">
              <span>📰 MBA Strategy & News Blog</span>
            </a>
            <button type="button" class="mobile-nav-subitem mobile-ai-trigger" id="openChatbotMobileBtn">
              <span>✨ AdmitIQ AI Assistant</span>
              <span class="mobile-pill-tag violet">Instant</span>
            </button>
          </div>
        </div>

        <!-- Mentor Helpline & Counseling Card -->
        <div class="mobile-helpline-box">
          <div class="mobile-helpline-top">
            <div>
              <div class="helpline-subtext">Official Admissions Helpline</div>
              <a href="tel:8800126446" class="helpline-phone">+91 88001 26446</a>
            </div>
          </div>
          <div class="mobile-helpline-actions">
            <a href="tel:8800126446" class="helpline-btn call">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>Call</span>
            </a>
            <a href="https://wa.me/918800126446?text=Hi%20Mentor%2C%20I%20need%20MBA%20admission%20guidance" target="_blank" rel="noopener noreferrer" class="helpline-btn whatsapp">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.316 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.818-.981z"/></svg>
              <span>WhatsApp</span>
            </a>
          </div>
          <a href="/contact" class="mobile-counseling-cta simple-nav-cta" data-route="contact">
            Book Free Counseling
          </a>
        </div>
      </div>
    </div>
    <div class="mobile-drawer-backdrop" id="mobileDrawerBackdrop"></div>

    <!-- Mobile Bottom App Dock -->
    <nav class="mobile-bottom-dock" id="mobileBottomDock" aria-label="Mobile Navigation">
      <a href="/" class="dock-item ${activePage === 'home' ? 'active' : ''}" data-route="home">
        <div class="dock-icon-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </div>
        <span class="dock-label">Home</span>
      </a>

      <a href="/colleges" class="dock-item ${activePage === 'colleges' ? 'active' : ''}" data-route="colleges">
        <div class="dock-icon-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
          </svg>
        </div>
        <span class="dock-label">Colleges</span>
      </a>

      <a href="/tools/cat-college-predictor" class="dock-item ${activePage === 'tools' ? 'active' : ''}" data-route="tools">
        <div class="dock-icon-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="16" height="20" x="4" y="2" rx="2"></rect>
            <line x1="8" x2="16" y1="6" y2="6"></line>
            <line x1="16" x2="16" y1="14" y2="18"></line>
            <path d="M16 10h.01"></path>
            <path d="M12 10h.01"></path>
            <path d="M8 10h.01"></path>
            <path d="M12 14h.01"></path>
            <path d="M8 14h.01"></path>
            <path d="M12 18h.01"></path>
            <path d="M8 18h.01"></path>
          </svg>
        </div>
        <span class="dock-label">Calculators</span>
      </a>

      <a href="/exams" class="dock-item ${activePage === 'exams' ? 'active' : ''}" data-route="exams">
        <div class="dock-icon-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" x2="8" y1="13" y2="13"></line>
            <line x1="16" x2="8" y1="17" y2="17"></line>
          </svg>
        </div>
        <span class="dock-label">Exams</span>
      </a>

      <a href="/contact" class="dock-item dock-counseling-item ${activePage === 'contact' ? 'active' : ''}" data-route="contact">
        <div class="dock-icon-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </div>
        <span class="dock-label">Counseling</span>
      </a>
    </nav>
  `;
}
