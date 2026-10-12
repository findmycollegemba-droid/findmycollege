export function renderNavbar(activePage = 'home', activeSub = null) {
  return `
    <header class="site-header">
      <div class="header-container">
        <!-- FindMyCollege Brand Logo -->
        <a href="#home" class="brand-logo" data-route="home">
          <div class="fmc-logo-badge">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
          </div>
          <div class="brand-text">
            <span class="brand-title">FindMy<span class="brand-accent">College</span></span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="nav-pill-wrapper">
          <ul class="nav-pill-list">
            <!-- Home -->
            <li class="nav-item">
              <a href="#home" class="nav-link ${activePage === 'home' ? 'active' : ''}" data-route="home">
                Home
              </a>
            </li>

            <!-- Colleges Dropdown -->
            <li class="nav-item has-dropdown">
              <a href="#colleges" class="nav-link ${activePage === 'colleges' ? 'active' : ''}" data-route="colleges">
                <span>Colleges</span>
                <svg class="chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
              </a>
              <div class="dropdown-menu">
                <a href="#colleges" class="dropdown-item" data-route="colleges">
                  <span class="dropdown-icon">🏛️</span>
                  <div>
                    <div class="dropdown-title">All Colleges</div>
                    <div class="dropdown-desc">Explore 20 verified elite business schools</div>
                  </div>
                </a>
                <a href="#colleges?type=mba" class="dropdown-item" data-route="colleges" data-sub="type=mba">
                  <span class="dropdown-icon">🎓</span>
                  <div>
                    <div class="dropdown-title">MBA Colleges</div>
                    <div class="dropdown-desc">University degrees (FMS, JBIMS, IIMs, IITs)</div>
                  </div>
                </a>
                <a href="#colleges?type=pgdm" class="dropdown-item" data-route="colleges" data-sub="type=pgdm">
                  <span class="dropdown-icon">💼</span>
                  <div>
                    <div class="dropdown-title">PGDM Colleges</div>
                    <div class="dropdown-desc">Autonomous diplomas (XLRI, SPJIMR, MDI)</div>
                  </div>
                </a>
                <a href="#programs?sub=compare" class="dropdown-item" data-route="programs" data-sub="compare">
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
              <a href="#exams" class="nav-link ${activePage === 'exams' ? 'active' : ''}" data-route="exams">
                <span>Exams</span>
                <svg class="chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
              </a>
              <div class="dropdown-menu">
                <a href="#exams" class="dropdown-item" data-route="exams">
                  <span class="dropdown-icon">📝</span>
                  <div>
                    <div class="dropdown-title">All Entrance Exams</div>
                    <div class="dropdown-desc">Syllabus, cutoffs & calendar 2026-27</div>
                  </div>
                </a>
                <a href="#exams?exam=cat" class="dropdown-item" data-route="exams" data-sub="exam=cat">
                  <span class="dropdown-icon">🐱</span>
                  <div>
                    <div class="dropdown-title">CAT 2026</div>
                    <div class="dropdown-desc">IIMs, FMS & SPJIMR Gateway</div>
                  </div>
                </a>
                <a href="#exams?exam=xat" class="dropdown-item" data-route="exams" data-sub="exam=xat">
                  <span class="dropdown-icon">🎯</span>
                  <div>
                    <div class="dropdown-title">XAT 2027</div>
                    <div class="dropdown-desc">XLRI Jamshedpur & top associates</div>
                  </div>
                </a>
                <a href="#exams?exam=snap" class="dropdown-item" data-route="exams" data-sub="exam=snap">
                  <span class="dropdown-icon">🦁</span>
                  <div>
                    <div class="dropdown-title">SNAP 2026</div>
                    <div class="dropdown-desc">Symbiosis SIBM Pune & SCMHRD</div>
                  </div>
                </a>
                <a href="#exams?exam=cmat" class="dropdown-item" data-route="exams" data-sub="exam=cmat">
                  <span class="dropdown-icon">⚡</span>
                  <div>
                    <div class="dropdown-title">CMAT 2026</div>
                    <div class="dropdown-desc">JBIMS, SIMSREE & GIM Goa</div>
                  </div>
                </a>
              </div>
            </li>

            <!-- Calculators / Tools -->
            <li class="nav-item has-dropdown">
              <a href="#tools" class="nav-link ${activePage === 'tools' ? 'active' : ''}" data-route="tools">
                <span>Calculators</span>
                <svg class="chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
              </a>
              <div class="dropdown-menu">
                <a href="#tools?sub=cat" class="dropdown-item" data-route="tools" data-sub="cat">
                  <span class="dropdown-icon">📊</span>
                  <div>
                    <div class="dropdown-title">CAT Calculator</div>
                    <div class="dropdown-desc">Raw score to %ile & IIM call predictor</div>
                  </div>
                </a>
                <a href="#tools?sub=xat" class="dropdown-item" data-route="tools" data-sub="xat">
                  <span class="dropdown-icon">🎯</span>
                  <div>
                    <div class="dropdown-title">XAT Calculator</div>
                    <div class="dropdown-desc">Negative marking & XLRI cutoffs</div>
                  </div>
                </a>
                <a href="#tools?sub=cmat" class="dropdown-item" data-route="tools" data-sub="cmat">
                  <span class="dropdown-icon">⚡</span>
                  <div>
                    <div class="dropdown-title">CMAT Calculator</div>
                    <div class="dropdown-desc">400 marks evaluator & JBIMS cutoffs</div>
                  </div>
                </a>
              </div>
            </li>

            <!-- Blog -->
            <li class="nav-item">
              <a href="#blog" class="nav-link ${activePage === 'blog' ? 'active' : ''}" data-route="blog">
                Blog
              </a>
            </li>

            <!-- Contact -->
            <li class="nav-item">
              <a href="#contact" class="nav-link ${activePage === 'contact' ? 'active' : ''}" data-route="contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <!-- Right Header Actions -->
        <div class="header-actions">
          <!-- Search Button -->
          <button class="icon-btn search-trigger-btn" id="openSearchBtn" title="Search Colleges (⌘K)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </button>

          <!-- Theme Toggle -->
          <button class="icon-btn theme-toggle-btn" id="themeToggleBtn" title="Toggle Theme">
            <svg class="sun-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2m-7.07-15.07 1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2m-15.07 7.07 1.41-1.41m11.32-11.32 1.41-1.41"/></svg>
            <svg class="moon-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
          </button>

          <!-- Free Counseling CTA -->
          <a href="#contact" class="simple-nav-cta" data-route="contact">
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

      <!-- Mobile Navigation Drawer -->
      <div class="mobile-nav-drawer" id="mobileNavDrawer">
        <div class="mobile-nav-content">
          <a href="#home" class="mobile-nav-link ${activePage === 'home' ? 'active' : ''}" data-route="home">Home</a>
          
          <div class="mobile-nav-group">
            <div class="mobile-group-title">Colleges Directory</div>
            <a href="#colleges" class="mobile-sublink" data-route="colleges">All Colleges (20)</a>
            <a href="#colleges?type=mba" class="mobile-sublink" data-route="colleges" data-sub="type=mba">MBA Colleges (Degree)</a>
            <a href="#colleges?type=pgdm" class="mobile-sublink" data-route="colleges" data-sub="type=pgdm">PGDM Colleges (Diploma)</a>
            <a href="#programs?sub=compare" class="mobile-sublink" data-route="programs" data-sub="compare">MBA vs PGDM Comparison</a>
          </div>

          <div class="mobile-nav-group">
            <div class="mobile-group-title">Score Calculators</div>
            <a href="#tools?sub=cat" class="mobile-sublink" data-route="tools" data-sub="cat">CAT Score & %ile</a>
            <a href="#tools?sub=xat" class="mobile-sublink" data-route="tools" data-sub="xat">XAT Score Calculator</a>
            <a href="#tools?sub=cmat" class="mobile-sublink" data-route="tools" data-sub="cmat">CMAT Score Calculator</a>
          </div>

          <div class="mobile-nav-group">
            <div class="mobile-group-title">MBA Entrance Exams</div>
            <div class="mobile-chips-grid">
              <a href="#exams?exam=cat" class="mobile-chip" data-route="exams" data-sub="cat">CAT</a>
              <a href="#exams?exam=xat" class="mobile-chip" data-route="exams" data-sub="xat">XAT</a>
              <a href="#exams?exam=nmat" class="mobile-chip" data-route="exams" data-sub="nmat">NMAT</a>
              <a href="#exams?exam=snap" class="mobile-chip" data-route="exams" data-sub="snap">SNAP</a>
              <a href="#exams?exam=cmat" class="mobile-chip" data-route="exams" data-sub="cmat">CMAT</a>
              <a href="#exams?exam=mat" class="mobile-chip" data-route="exams" data-sub="mat">MAT</a>
              <a href="#exams?exam=mhcet" class="mobile-chip" data-route="exams" data-sub="mhcet">MH-CET</a>
              <a href="#exams?exam=cuetpg" class="mobile-chip" data-route="exams" data-sub="cuetpg">CUET PG</a>
            </div>
          </div>

          <a href="#blog" class="mobile-nav-link ${activePage === 'blog' ? 'active' : ''}" data-route="blog">Strategy Blog</a>
          <a href="#contact" class="mobile-nav-link ${activePage === 'contact' ? 'active' : ''}" data-route="contact">Contact Us</a>
          <a href="#ai-chat" class="mobile-nav-link ai-link ${activePage === 'ai-chat' ? 'active' : ''}" data-route="ai-chat">✨ AdmitIQ AI Assistant</a>
        </div>
      </div>
    </header>
  `;
}
