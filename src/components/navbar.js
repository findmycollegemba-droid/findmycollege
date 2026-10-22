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
                    <div class="dropdown-title">All Colleges</div>
                    <div class="dropdown-desc">Explore 111 verified top business schools</div>
                  </div>
                </a>
                <a href="/colleges/mba" class="dropdown-item" data-route="colleges" data-sub="type=mba">
                  <span class="dropdown-icon">🎓</span>
                  <div>
                    <div class="dropdown-title">MBA Colleges</div>
                    <div class="dropdown-desc">University degrees (FMS, JBIMS, IIMs, IITs)</div>
                  </div>
                </a>
                <a href="/colleges/pgdm" class="dropdown-item" data-route="colleges" data-sub="type=pgdm">
                  <span class="dropdown-icon">💼</span>
                  <div>
                    <div class="dropdown-title">PGDM Colleges</div>
                    <div class="dropdown-desc">Autonomous diplomas (XLRI, SPJIMR, MDI)</div>
                  </div>
                </a>
                <a href="/aiu-approved-campuses" class="dropdown-item" data-route="aiu-approved-campuses">
                  <span class="dropdown-icon">🏛️</span>
                  <div>
                    <div class="dropdown-title">AIU Approved Campuses</div>
                    <div class="dropdown-desc">City-wise verified colleges (9 major hubs)</div>
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
                    <div class="dropdown-desc">Syllabus, cutoffs & calendar 2027-29</div>
                  </div>
                </a>
                <a href="/exams/cat" class="dropdown-item" data-route="exams" data-sub="exam=cat">
                  <span class="dropdown-icon">🐱</span>
                  <div>
                    <div class="dropdown-title">CAT 2026</div>
                    <div class="dropdown-desc">IIMs, FMS & SPJIMR Gateway</div>
                  </div>
                </a>
                <a href="/exams/xat" class="dropdown-item" data-route="exams" data-sub="exam=xat">
                  <span class="dropdown-icon">🎯</span>
                  <div>
                    <div class="dropdown-title">XAT 2027</div>
                    <div class="dropdown-desc">XLRI Jamshedpur & top associates</div>
                  </div>
                </a>
                <a href="/exams/snap" class="dropdown-item" data-route="exams" data-sub="exam=snap">
                  <span class="dropdown-icon">🦁</span>
                  <div>
                    <div class="dropdown-title">SNAP 2026</div>
                    <div class="dropdown-desc">Symbiosis SIBM Pune & SCMHRD</div>
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

            <!-- Calculators / Tools -->
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
                    <div class="dropdown-desc">Raw score to %ile & IIM call predictor</div>
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
                <span class="nav-free-badge">FREE</span>
              </a>
            </li>

            <!-- Scholarships -->
            <li class="nav-item">
              <a href="/scholarships" class="nav-link ${activePage === 'scholarships' ? 'active' : ''}" data-route="scholarships">
                <span>Scholarships</span>
                <span class="nav-free-badge" style="background: linear-gradient(135deg, #FF3D8B 0%, #FF6B35 100%);">₹25L</span>
              </a>
            </li>

            <!-- Blog -->
            <li class="nav-item">
              <a href="/blog" class="nav-link ${activePage === 'blog' ? 'active' : ''}" data-route="blog">
                Blog
              </a>
            </li>

            <!-- Contact -->
            <li class="nav-item">
              <a href="/contact" class="nav-link ${activePage === 'contact' ? 'active' : ''}" data-route="contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <!-- Right Header Actions -->
        <div class="header-actions">
          <!-- Modern Navbar Search Bar -->
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

          <!-- Free Counseling CTA -->
          <a href="/contact" class="simple-nav-cta" data-route="contact">
            Free Counseling
          </a>

          <!-- Mobile Hamburger Menu Button -->
          <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle navigation menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Navigation Drawer -->
      <div class="mobile-nav-drawer" id="mobileNavDrawer">
        <div class="mobile-drawer-header">
          <div class="brand-logo">
            <div class="fmc-logo-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <span class="brand-title">FindMy<span class="brand-accent">BSchool</span></span>
          </div>
          <button class="mobile-drawer-close-btn" id="closeMobileDrawerBtn" aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <div class="mobile-nav-content">
          <!-- Mobile FindMyBSchool Chatbot Card -->
          <div class="mobile-bot-launch-banner" id="openChatbotMobileBtn">
            <div class="m-bot-avatar">🎓</div>
            <div class="m-bot-info">
              <div class="m-bot-title">FindMyBSchool Bot <span class="m-bot-pill">2-Min Match</span></div>
              <div class="m-bot-sub">Shortlist MBA, PGDM, BBA by Budget & City</div>
            </div>
            <span class="m-bot-arrow">→</span>
          </div>

          <!-- Mobile Direct Mentor Call Strip -->
          <div style="margin: 10px 0 14px 0; padding: 12px; background: #EDE7FE; border-radius: 12px; display: flex; align-items: center; justify-content: space-between;">
            <div>
              <div style="font-size: 0.74rem; font-weight: 700; color: #6B2CF5; text-transform: uppercase;">Official Mentor Helpline</div>
              <a href="tel:8800126446" style="font-family: var(--font-mono, monospace); font-weight: 800; font-size: 0.95rem; color: #14103A; text-decoration: none;">+91 88001 26446</a>
            </div>
            <div style="display: flex; gap: 6px;">
              <a href="tel:8800126446" style="padding: 6px 10px; background: #6B2CF5; color: #fff; border-radius: 6px; font-size: 0.78rem; font-weight: 700; text-decoration: none;">Call</a>
              <a href="https://wa.me/918800126446?text=Hi%20Mentor%2C%20I%20need%20MBA%20admission%20guidance" target="_blank" rel="noopener noreferrer" style="padding: 6px 10px; background: #25D366; color: #fff; border-radius: 6px; font-size: 0.78rem; font-weight: 700; text-decoration: none;">WhatsApp</a>
            </div>
          </div>

          <a href="/" class="mobile-nav-link ${activePage === 'home' ? 'active' : ''}" data-route="home">
            <span>🏠 Home</span>
          </a>
          
          <div class="mobile-nav-group">
            <div class="mobile-group-title">Colleges Directory</div>
            <a href="/colleges" class="mobile-sublink" data-route="colleges">🏛️ All Colleges (111 Verified)</a>
            <a href="/colleges/mba" class="mobile-sublink" data-route="colleges" data-sub="type=mba">🎓 MBA Colleges (Degree)</a>
            <a href="/colleges/pgdm" class="mobile-sublink" data-route="colleges" data-sub="type=pgdm">💼 PGDM Colleges (Diploma)</a>
            <a href="/programs/compare" class="mobile-sublink" data-route="programs" data-sub="compare">⚖️ MBA vs PGDM Comparison</a>
          </div>

          <div class="mobile-nav-group">
            <div class="mobile-group-title">Score Calculators & Predictors</div>
            <a href="/tools/cat-college-predictor" class="mobile-sublink" data-route="tools" data-sub="cat">⚡ CAT College Predictor</a>
            <a href="/tools/xat-percentile-calculator" class="mobile-sublink" data-route="tools" data-sub="xat">🎯 XAT Score & XLRI Predictor</a>
            <a href="/tools/cmat-percentile-calculator" class="mobile-sublink" data-route="tools" data-sub="cmat">⚡ CMAT Score Calculator</a>
          </div>

          <div class="mobile-nav-group">
            <div class="mobile-group-title">MBA Entrance Exams (Session 2027-29)</div>
            <div class="mobile-chips-grid">
              <a href="/exams/cat" class="mobile-chip" data-route="exams" data-sub="cat">CAT</a>
              <a href="/exams/xat" class="mobile-chip" data-route="exams" data-sub="xat">XAT</a>
              <a href="/exams/nmat" class="mobile-chip" data-route="exams" data-sub="nmat">NMAT</a>
              <a href="/exams/snap" class="mobile-chip" data-route="exams" data-sub="snap">SNAP</a>
              <a href="/exams/cmat" class="mobile-chip" data-route="exams" data-sub="cmat">CMAT</a>
              <a href="/exams/mat" class="mobile-chip" data-route="exams" data-sub="mat">MAT</a>
              <a href="/exams/mhcet" class="mobile-chip" data-route="exams" data-sub="mhcet">MH-CET</a>
              <a href="/exams/cuetpg" class="mobile-chip" data-route="exams" data-sub="cuetpg">CUET PG</a>
            </div>
          </div>

          <a href="/mock-test" class="mobile-nav-link ${activePage === 'mock-test' ? 'active' : ''}" data-route="mock-test" style="display:flex;align-items:center;justify-content:space-between;">
            <span>📝 Free Mock Tests (CAT, XAT...)</span>
            <span style="font-size:0.65rem;font-weight:900;background:#10b981;color:#fff;padding:2px 6px;border-radius:4px;">100% FREE</span>
          </a>
          <a href="/scholarships" class="mobile-nav-link ${activePage === 'scholarships' ? 'active' : ''}" data-route="scholarships" style="display:flex;align-items:center;justify-content:space-between;">
            <span>💰 Live MBA Scholarships</span>
            <span style="font-size:0.65rem;font-weight:900;background:linear-gradient(135deg, #FF3D8B 0%, #FF6B35 100%);color:#fff;padding:2px 6px;border-radius:4px;">UP TO ₹25L</span>
          </a>
          <a href="/aiu-approved-campuses" class="mobile-nav-link ${activePage === 'aiu-approved-campuses' ? 'active' : ''}" data-route="aiu-approved-campuses" style="display:flex;align-items:center;justify-content:space-between;">
            <span>🏛️ AIU Approved Campuses</span>
            <span style="font-size:0.65rem;font-weight:900;background:#6B2CF5;color:#fff;padding:2px 6px;border-radius:4px;">9 CITIES</span>
          </a>
          <a href="/blog" class="mobile-nav-link ${activePage === 'blog' ? 'active' : ''}" data-route="blog">📰 Strategy Blog</a>
          <a href="/contact" class="mobile-nav-link ${activePage === 'contact' ? 'active' : ''}" data-route="contact">📞 Contact & Free Counseling</a>
          <a href="/ai-chat" class="mobile-nav-link ai-link ${activePage === 'ai-chat' ? 'active' : ''}" data-route="ai-chat">✨ AdmitIQ AI Assistant</a>
        </div>
      </div>
    <div class="mobile-drawer-backdrop" id="mobileDrawerBackdrop"></div>

    <!-- Mobile Bottom App Dock (Thumb Navigation) -->
    <nav class="mobile-bottom-dock" id="mobileBottomDock" aria-label="Mobile Navigation">
      <a href="/" class="dock-item ${activePage === 'home' ? 'active' : ''}" data-route="home">
        <div class="dock-icon-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </div>
        <span class="dock-label">Home</span>
      </a>

      <a href="/colleges" class="dock-item ${activePage === 'colleges' ? 'active' : ''}" data-route="colleges">
        <div class="dock-icon-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
          </svg>
          <span class="dock-badge">111</span>
        </div>
        <span class="dock-label">Colleges</span>
      </a>

      <a href="/tools/cat-college-predictor" class="dock-item ${activePage === 'tools' ? 'active' : ''}" data-route="tools">
        <div class="dock-icon-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
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
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" x2="8" y1="13" y2="13"></line>
            <line x1="16" x2="8" y1="17" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </div>
        <span class="dock-label">Exams</span>
      </a>

      <a href="/contact" class="dock-item dock-counseling-item ${activePage === 'contact' ? 'active' : ''}" data-route="contact">
        <div class="dock-icon-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </div>
        <span class="dock-label">Counseling</span>
      </a>
    </nav>
  `;
}
