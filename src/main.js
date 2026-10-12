import './style.css';
import confetti from 'canvas-confetti';
import { renderNavbar } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { renderQuickSearchModal, handleSearchQuery } from './components/quickSearch.js';
import { renderHomePage } from './pages/home.js';
import { 
  renderCollegesPage, 
  renderCollegesCards, 
  renderCollegeDetailModalContent, 
  renderComparisonModalContent, 
  renderBrochureModalContent 
} from './pages/colleges.js';
import { renderProgramsPage } from './pages/programs.js';
import { renderToolsPage } from './pages/tools.js';
import { renderExamsPage } from './pages/exams.js';
import { renderBlogPage, renderArticlesGrid } from './pages/blog.js';
import { renderContactPage } from './pages/contact.js';
import { renderAiChatPage } from './pages/aiChat.js';
import { calculateCATScore, calculateXATScore, calculateCMATScore, calculateGoalPlan, parseResponseSheetHTML, getSampleResponseSheet } from './utils/calculators.js';
import { getAIResponse } from './utils/aiAssistant.js';
import { COLLEGES_DATA } from './data/collegesData.js';
import { BLOGS_DATA } from './data/blogsData.js';
import { EXAMS_DATA } from './data/examsData.js';

// Application State
const state = {
  currentPage: 'home',
  currentSub: null,
  theme: 'light',
  chatHistory: []
};

// Initialize App
function initApp() {
  document.documentElement.setAttribute('data-theme', 'light');
  
  // Render App Skeleton
  const appEl = document.getElementById('app');
  appEl.innerHTML = `
    <div id="navbarMount"></div>
    <main class="main-content" id="mainContentMount"></main>
    <div id="footerMount"></div>
    <div id="modalMount"></div>
  `;

  // Mount Modals
  document.getElementById('modalMount').innerHTML = renderQuickSearchModal();

  // Listen to hash changes
  window.addEventListener('hashchange', handleRouteChange);
  
  // Initial Route Load
  handleRouteChange();

  // Global Event Listeners
  setupGlobalEvents();
}

// Router
function handleRouteChange() {
  const hash = window.location.hash.slice(1) || 'home';
  const [routePath, queryString] = hash.split('?');
  
  let page = routePath || 'home';
  if (!['home', 'colleges', 'programs', 'tools', 'exams', 'blog', 'contact', 'ai-chat'].includes(page)) {
    page = 'home';
  }

  const params = new URLSearchParams(queryString || '');
  const sub = params.get('sub') || params.get('exam') || params.get('id') || params.get('type') || null;

  state.currentPage = page;
  state.currentSub = sub;

  // Render Navbar and Footer
  document.getElementById('navbarMount').innerHTML = renderNavbar(page, sub);
  document.getElementById('footerMount').innerHTML = renderFooter();

  // Render Page Content
  const mainEl = document.getElementById('mainContentMount');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  switch (page) {
    case 'home':
      mainEl.innerHTML = renderHomePage();
      initHomeInteractions();
      break;
    case 'colleges':
      mainEl.innerHTML = renderCollegesPage();
      initCollegesInteractions(sub, params);
      break;
    case 'programs':
      mainEl.innerHTML = renderProgramsPage(sub || 'mba');
      initProgramsInteractions();
      break;
    case 'tools':
      mainEl.innerHTML = renderToolsPage(sub || 'cat');
      initToolsInteractions();
      break;
    case 'exams':
      mainEl.innerHTML = renderExamsPage(sub);
      initExamsInteractions();
      break;
    case 'blog':
      mainEl.innerHTML = renderBlogPage(sub);
      initBlogInteractions();
      break;
    case 'contact':
      mainEl.innerHTML = renderContactPage();
      initContactInteractions();
      break;
    case 'ai-chat':
      mainEl.innerHTML = renderAiChatPage();
      initAiChatInteractions();
      break;
  }

  // Re-attach navbar handlers
  setupNavbarEvents();
}

// Global Event Listeners
function setupGlobalEvents() {
  // Global Shortcut: Cmd+K or Ctrl+K for search
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      toggleSearchModal(true);
    }
    if (e.key === 'Escape') {
      toggleSearchModal(false);
    }
  });

  // Search input handler
  const searchInput = document.getElementById('globalSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      handleSearchQuery(e.target.value);
    });
  }

  // Search tags click
  document.addEventListener('click', (e) => {
    const tag = e.target.closest('.search-tag-chip');
    if (tag) {
      const q = tag.getAttribute('data-search');
      if (searchInput) {
        searchInput.value = q;
        handleSearchQuery(q);
      }
    }

    // Close search modal when clicking backdrop
    if (e.target.id === 'searchModalBackdrop' || e.target.id === 'closeSearchBtn') {
      toggleSearchModal(false);
    }
  });
}

function setupNavbarEvents() {
  // Always enforce clean light theme
  document.documentElement.setAttribute('data-theme', 'light');

  // Search Trigger
  const searchBtn = document.getElementById('openSearchBtn');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => toggleSearchModal(true));
  }

  // Mobile Menu Drawer
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const closeDrawerBtn = document.getElementById('closeMobileDrawerBtn');
  const drawerBackdrop = document.getElementById('mobileDrawerBackdrop');
  const drawer = document.getElementById('mobileNavDrawer');

  const toggleDrawer = (open) => {
    if (drawer) drawer.classList.toggle('open', open);
    if (drawerBackdrop) drawerBackdrop.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = drawer?.classList.contains('open');
      toggleDrawer(!isOpen);
    });
  }

  closeDrawerBtn?.addEventListener('click', () => toggleDrawer(false));
  drawerBackdrop?.addEventListener('click', () => toggleDrawer(false));

  // Close drawer on link click
  document.querySelectorAll('.mobile-nav-content a').forEach(link => {
    link.addEventListener('click', () => toggleDrawer(false));
  });
}

function toggleSearchModal(show) {
  const modal = document.getElementById('searchModalBackdrop');
  const input = document.getElementById('globalSearchInput');
  if (!modal) return;
  if (show) {
    modal.classList.add('open');
    if (input) {
      input.focus();
      handleSearchQuery(input.value || '');
    }
  } else {
    modal.classList.remove('open');
  }
}

// ============================================================
// COLLEGE SEARCH PORTAL LOGIC (SHIKSHA.COM THEME)
// ============================================================
function initCollegesInteractions(subId, params) {
  const typeParam = params?.get('type') || (['mba', 'pgdm'].includes(subId?.toLowerCase()) ? subId : null);
  const filterState = {
    searchQuery: params?.get('search') || '',
    selectedCities: params?.get('city') ? [params.get('city')] : [],
    selectedExams: params?.get('exam') ? [params.get('exam')] : [],
    selectedDegrees: typeParam ? [typeParam.toUpperCase()] : [],
    feeRange: params?.get('fee') || 'all',
    salaryRange: 'all',
    selectedOwnership: [],
    sortBy: 'nirf',
    viewMode: 'card',
    compareList: [],
    activeTab: 'overview',
    activeCollege: null
  };

  const container = document.getElementById('portalCollegesContainer');
  const countSpan = document.getElementById('resultsCountSpan');
  const emptyState = document.getElementById('portalEmptyState');
  const searchInput = document.getElementById('portalCollegeSearchInput');
  const searchClearBtn = document.getElementById('portalSearchClearBtn');
  const searchTriggerBtn = document.getElementById('portalSearchTriggerBtn');
  const sortSelect = document.getElementById('portalSortSelect');
  const mobileSortSelect = document.getElementById('mobileSortSelect');
  const viewCardBtn = document.getElementById('viewCardBtn');
  const viewListBtn = document.getElementById('viewListBtn');
  const resetAllBtn = document.getElementById('resetAllFiltersBtn');
  const emptyStateResetBtn = document.getElementById('emptyStateResetBtn');
  const compareBar = document.getElementById('portalCompareBar');
  const compareCountNum = document.getElementById('compareCountNum');
  const compareChips = document.getElementById('compareSelectedChips');
  const clearCompareBtn = document.getElementById('clearAllCompareBtn');
  const launchCompareBtn = document.getElementById('launchComparisonModalBtn');
  const activeChipsContainer = document.getElementById('activeFilterChipsContainer');
  const mobileFilterToggleBtn = document.getElementById('mobileFilterToggleBtn');
  const sidebar = document.getElementById('portalFilterSidebar');

  // If search was pre-filled
  if (filterState.searchQuery && searchInput) {
    searchInput.value = filterState.searchQuery;
    if (searchClearBtn) searchClearBtn.style.display = 'block';
  }

  // Pre-check any filters from URL params
  if (filterState.selectedDegrees.length > 0) {
    filterState.selectedDegrees.forEach(deg => {
      const cb = document.querySelector(`input[name="degreeFilter"][value="${deg}"]`);
      if (cb) cb.checked = true;
    });
  }
  if (filterState.selectedExams.length > 0) {
    filterState.selectedExams.forEach(ex => {
      const cb = document.querySelector(`input[name="examFilter"][value="${ex}"]`);
      if (cb) cb.checked = true;
    });
  }
  if (filterState.selectedCities.length > 0) {
    filterState.selectedCities.forEach(ct => {
      const cb = document.querySelector(`input[name="cityFilter"][value="${ct}"]`);
      if (cb) cb.checked = true;
    });
  }

  // If subId was passed as college id (e.g. #colleges?id=iim-ahmedabad)
  if (subId) {
    const matchedCol = COLLEGES_DATA.find(c => c.id === subId);
    if (matchedCol) {
      setTimeout(() => openDetailModal(matchedCol, 'overview'), 250);
    }
  }

  // Core filter logic
  function applyFiltersAndRender() {
    let list = [...COLLEGES_DATA];

    // Search query
    const q = filterState.searchQuery.trim().toLowerCase();
    if (q) {
      list = list.filter(c => {
        const inName = c.name.toLowerCase().includes(q) || c.shortName.toLowerCase().includes(q);
        const inLoc = c.location.toLowerCase().includes(q) || c.city.toLowerCase().includes(q) || c.state.toLowerCase().includes(q);
        const inExams = c.examsAccepted.some(e => e.toLowerCase().includes(q));
        const inCourses = (c.courses || []).some(course => course.name.toLowerCase().includes(q));
        const inHighlights = c.highlights.toLowerCase().includes(q);
        const inOwnership = c.ownership.toLowerCase().includes(q);
        return inName || inLoc || inExams || inCourses || inHighlights || inOwnership;
      });
    }

    // City filters
    if (filterState.selectedCities.length > 0) {
      list = list.filter(c => {
        return filterState.selectedCities.some(city => 
          c.city.toLowerCase().includes(city.toLowerCase()) || 
          c.location.toLowerCase().includes(city.toLowerCase())
        );
      });
    }

    // Degree filters (MBA / PGDM)
    if (filterState.selectedDegrees.length > 0) {
      list = list.filter(c => {
        const degs = (c.degreeTypes || ['MBA']).map(d => d.toUpperCase());
        return filterState.selectedDegrees.some(deg => degs.includes(deg.toUpperCase()));
      });
    }

    // Exam filters
    if (filterState.selectedExams.length > 0) {
      list = list.filter(c => {
        return filterState.selectedExams.some(exam => 
          c.examsAccepted.map(e => e.toUpperCase()).includes(exam.toUpperCase())
        );
      });
    }

    // Fee range
    if (filterState.feeRange === 'under5') {
      list = list.filter(c => c.feeNum <= 5);
    } else if (filterState.feeRange === '5to15') {
      list = list.filter(c => c.feeNum > 5 && c.feeNum <= 15);
    } else if (filterState.feeRange === '15to25') {
      list = list.filter(c => c.feeNum > 15 && c.feeNum <= 25);
    } else if (filterState.feeRange === 'above25') {
      list = list.filter(c => c.feeNum > 25);
    }

    // Salary range
    if (filterState.salaryRange === 'above30') {
      list = list.filter(c => c.avgSalaryNum >= 30);
    } else if (filterState.salaryRange === '20to30') {
      list = list.filter(c => c.avgSalaryNum >= 20 && c.avgSalaryNum < 30);
    } else if (filterState.salaryRange === 'under20') {
      list = list.filter(c => c.avgSalaryNum < 20);
    }

    // Ownership
    if (filterState.selectedOwnership.length > 0) {
      list = list.filter(c => {
        return filterState.selectedOwnership.some(own => c.ownership.toLowerCase().includes(own.toLowerCase()));
      });
    }

    // Sorting
    if (filterState.sortBy === 'nirf') {
      list.sort((a, b) => a.nirfRank - b.nirfRank);
    } else if (filterState.sortBy === 'fees-asc') {
      list.sort((a, b) => a.feeNum - b.feeNum);
    } else if (filterState.sortBy === 'fees-desc') {
      list.sort((a, b) => b.feeNum - a.feeNum);
    } else if (filterState.sortBy === 'salary-desc') {
      list.sort((a, b) => b.avgSalaryNum - a.avgSalaryNum);
    } else if (filterState.sortBy === 'rating-desc') {
      list.sort((a, b) => b.rating - a.rating);
    }

    // Update count & label
    if (countSpan) countSpan.textContent = list.length;
    const labelSpan = document.getElementById('resultsLabelSpan');
    if (labelSpan) {
      if (filterState.selectedDegrees.length === 1 && filterState.selectedDegrees[0] === 'MBA') {
        labelSpan.textContent = 'MBA Colleges';
      } else if (filterState.selectedDegrees.length === 1 && filterState.selectedDegrees[0] === 'PGDM') {
        labelSpan.textContent = 'PGDM Colleges';
      } else {
        labelSpan.textContent = 'Colleges';
      }
    }

    // Render results
    if (container) {
      if (list.length === 0) {
        container.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
      } else {
        if (emptyState) emptyState.style.display = 'none';
        container.innerHTML = renderCollegesCards(list, filterState.compareList, filterState.viewMode);
      }
    }

    // Update active filter summary chips
    updateActiveFilterChips();
    // Update mobile filter badge
    updateMobileFilterBadge();
  }

  // Active filter chips bar
  function updateActiveFilterChips() {
    if (!activeChipsContainer) return;
    const chips = [];
    if (filterState.searchQuery) chips.push({ type: 'search', label: `Search: "${filterState.searchQuery}"` });
    filterState.selectedDegrees.forEach(deg => chips.push({ type: 'degree', val: deg, label: `Course: ${deg}` }));
    filterState.selectedCities.forEach(city => chips.push({ type: 'city', val: city, label: `City: ${city}` }));
    filterState.selectedExams.forEach(exam => chips.push({ type: 'exam', val: exam, label: `Exam: ${exam}` }));
    if (filterState.feeRange !== 'all') {
      const feeLabels = { under5: '< ₹5 Lakhs', '5to15': '₹5L - ₹15L', '15to25': '₹15L - ₹25L', above25: '> ₹25 Lakhs' };
      chips.push({ type: 'fee', label: `Fees: ${feeLabels[filterState.feeRange]}` });
    }
    if (filterState.salaryRange !== 'all') {
      const salLabels = { above30: '> ₹30 LPA', '20to30': '₹20L - ₹30L', under20: '< ₹20 LPA' };
      chips.push({ type: 'salary', label: `Salary: ${salLabels[filterState.salaryRange]}` });
    }
    filterState.selectedOwnership.forEach(own => chips.push({ type: 'ownership', val: own, label: own }));

    if (chips.length > 0) {
      activeChipsContainer.style.display = 'flex';
      activeChipsContainer.innerHTML = chips.map(c => `
        <span class="active-filter-chip" data-chip-type="${c.type}" data-chip-val="${c.val || ''}">
          <span>${c.label}</span>
          <button class="remove-chip-btn" title="Remove filter">✕</button>
        </span>
      `).join('') + `<button class="clear-all-chips-btn" id="clearAllChipsBtn">Clear All</button>`;
    } else {
      activeChipsContainer.style.display = 'none';
      activeChipsContainer.innerHTML = '';
    }
  }

  function updateMobileFilterBadge() {
    const badge = document.getElementById('mobileFiltersBadge');
    if (!badge) return;
    let count = 0;
    if (filterState.searchQuery) count++;
    count += filterState.selectedDegrees.length;
    count += filterState.selectedCities.length;
    count += filterState.selectedExams.length;
    if (filterState.feeRange !== 'all') count++;
    if (filterState.salaryRange !== 'all') count++;
    count += filterState.selectedOwnership.length;

    if (count > 0) {
      badge.style.display = 'inline-flex';
      badge.textContent = count;
    } else {
      badge.style.display = 'none';
    }
  }

  // Update compare drawer
  function updateCompareDrawer() {
    if (!compareBar || !compareCountNum || !compareChips) return;
    const count = filterState.compareList.length;
    compareCountNum.textContent = count;

    if (count > 0) {
      compareBar.style.display = 'block';
      const selectedColleges = filterState.compareList.map(id => COLLEGES_DATA.find(c => c.id === id)).filter(Boolean);
      compareChips.innerHTML = selectedColleges.map(c => `
        <span class="compare-chip-pill">
          <strong>${c.shortName}</strong>
          <button class="remove-compare-chip-btn" data-remove-compare="${c.id}" title="Remove">✕</button>
        </span>
      `).join('');
    } else {
      compareBar.style.display = 'none';
      compareChips.innerHTML = '';
    }
  }

  // Search input events
  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      const val = e.target.value;
      if (searchClearBtn) searchClearBtn.style.display = val ? 'block' : 'none';
      debounceTimer = setTimeout(() => {
        filterState.searchQuery = val;
        applyFiltersAndRender();
      }, 200);
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        filterState.searchQuery = searchInput.value;
        applyFiltersAndRender();
      }
    });
  }

  if (searchClearBtn && searchInput) {
    searchClearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchClearBtn.style.display = 'none';
      filterState.searchQuery = '';
      applyFiltersAndRender();
    });
  }

  if (searchTriggerBtn && searchInput) {
    searchTriggerBtn.addEventListener('click', () => {
      filterState.searchQuery = searchInput.value;
      applyFiltersAndRender();
    });
  }

  // Quick chips row
  const quickChipsWrap = document.getElementById('portalQuickChips');
  if (quickChipsWrap) {
    quickChipsWrap.addEventListener('click', (e) => {
      const btn = e.target.closest('.quick-chip-btn');
      if (!btn) return;

      quickChipsWrap.querySelectorAll('.quick-chip-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterType = btn.getAttribute('data-filter-type');
      const examName = btn.getAttribute('data-exam');
      const degreeName = btn.getAttribute('data-degree');

      // Reset specific filters first
      filterState.selectedCities = [];
      filterState.selectedExams = [];
      filterState.feeRange = 'all';
      filterState.salaryRange = 'all';
      filterState.selectedOwnership = [];
      if (filterType !== 'degree') {
        filterState.selectedDegrees = [];
        document.querySelectorAll('input[name="degreeFilter"]').forEach(cb => cb.checked = false);
      }

      // Uncheck checkboxes in sidebar
      document.querySelectorAll('input[name="cityFilter"]').forEach(cb => cb.checked = false);
      document.querySelectorAll('input[name="examFilter"]').forEach(cb => cb.checked = false);
      document.querySelectorAll('input[name="ownershipFilter"]').forEach(cb => cb.checked = false);
      const feeAllRadio = document.querySelector('input[name="feeRangeFilter"][value="all"]');
      if (feeAllRadio) feeAllRadio.checked = true;
      const salAllRadio = document.querySelector('input[name="salaryRangeFilter"][value="all"]');
      if (salAllRadio) salAllRadio.checked = true;

      if (filterType === 'top10') {
        filterState.sortBy = 'nirf';
      } else if (filterType === 'highroi') {
        filterState.feeRange = 'under5';
      } else if (filterType === 'sal30') {
        filterState.salaryRange = 'above30';
      } else if (filterType === 'degree' && degreeName) {
        filterState.selectedDegrees = [degreeName];
        const cb = document.querySelector(`input[name="degreeFilter"][value="${degreeName}"]`);
        if (cb) cb.checked = true;
      } else if (filterType === 'exam' && examName) {
        filterState.selectedExams = [examName];
        const cb = document.querySelector(`input[name="examFilter"][value="${examName}"]`);
        if (cb) cb.checked = true;
      } else if (filterType === 'govt') {
        filterState.selectedOwnership = ['Government'];
        const cb = document.querySelector('input[name="ownershipFilter"][value="Government"]');
        if (cb) cb.checked = true;
      }

      applyFiltersAndRender();
    });
  }

  // City checkboxes
  document.querySelectorAll('input[name="cityFilter"]').forEach(cb => {
    cb.addEventListener('change', () => {
      const checked = Array.from(document.querySelectorAll('input[name="cityFilter"]:checked')).map(el => el.value);
      filterState.selectedCities = checked;
      applyFiltersAndRender();
    });
  });

  // Exam checkboxes
  document.querySelectorAll('input[name="examFilter"]').forEach(cb => {
    cb.addEventListener('change', () => {
      const checked = Array.from(document.querySelectorAll('input[name="examFilter"]:checked')).map(el => el.value);
      filterState.selectedExams = checked;
      applyFiltersAndRender();
    });
  });

  // Fee radios
  document.querySelectorAll('input[name="feeRangeFilter"]').forEach(rb => {
    rb.addEventListener('change', (e) => {
      filterState.feeRange = e.target.value;
      applyFiltersAndRender();
    });
  });

  // Salary radios
  document.querySelectorAll('input[name="salaryRangeFilter"]').forEach(rb => {
    rb.addEventListener('change', (e) => {
      filterState.salaryRange = e.target.value;
      applyFiltersAndRender();
    });
  });

  // Ownership checkboxes
  document.querySelectorAll('input[name="ownershipFilter"]').forEach(cb => {
    cb.addEventListener('change', () => {
      const checked = Array.from(document.querySelectorAll('input[name="ownershipFilter"]:checked')).map(el => el.value);
      filterState.selectedOwnership = checked;
      applyFiltersAndRender();
    });
  });

  // Update degree tabs & educational banner
  const updateDegreeTabsAndBanner = () => {
    document.querySelectorAll('[data-degree-btn]').forEach(btn => {
      const deg = btn.getAttribute('data-degree-btn');
      if (filterState.selectedDegrees.length === 0) {
        btn.classList.toggle('active', deg === 'all');
      } else {
        btn.classList.toggle('active', filterState.selectedDegrees.includes(deg));
      }
    });

    const banner = document.getElementById('degreeInfoBanner');
    const bannerIcon = document.getElementById('bannerIconBox');
    const bannerTitle = document.getElementById('bannerTitle');
    const bannerDesc = document.getElementById('bannerDesc');

    if (banner && bannerTitle && bannerDesc) {
      if (filterState.selectedDegrees.length === 1 && filterState.selectedDegrees[0] === 'MBA') {
        banner.style.display = 'flex';
        if (bannerIcon) bannerIcon.textContent = '🎓';
        bannerTitle.textContent = 'MBA Colleges in India (University Degree)';
        bannerDesc.textContent = 'Showing programs awarded by recognized Universities & IIMs (FMS Delhi, JBIMS, IIMs, IIT Bombay, SIBM). Recognized globally for doctoral programs & government accreditations.';
      } else if (filterState.selectedDegrees.length === 1 && filterState.selectedDegrees[0] === 'PGDM') {
        banner.style.display = 'flex';
        if (bannerIcon) bannerIcon.textContent = '💼';
        bannerTitle.textContent = 'PGDM Colleges in India (Autonomous Diploma)';
        bannerDesc.textContent = 'Showing autonomous AICTE-approved management diplomas (XLRI Jamshedpur, SPJIMR, MDI, GIM, MICA). Renowned for cutting-edge corporate curricula and top private placements.';
      } else {
        banner.style.display = 'none';
      }
    }
  };

  // Degree Tabs click
  document.querySelectorAll('[data-degree-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      const deg = btn.getAttribute('data-degree-btn');
      if (deg === 'all') {
        filterState.selectedDegrees = [];
        document.querySelectorAll('input[name="degreeFilter"]').forEach(cb => cb.checked = false);
      } else {
        filterState.selectedDegrees = [deg];
        document.querySelectorAll('input[name="degreeFilter"]').forEach(cb => {
          cb.checked = (cb.value.toUpperCase() === deg.toUpperCase());
        });
      }
      updateDegreeTabsAndBanner();
      applyFiltersAndRender();
    });
  });

  // Degree Checkboxes
  document.querySelectorAll('input[name="degreeFilter"]').forEach(cb => {
    cb.addEventListener('change', () => {
      const checked = Array.from(document.querySelectorAll('input[name="degreeFilter"]:checked')).map(el => el.value);
      filterState.selectedDegrees = checked;
      updateDegreeTabsAndBanner();
      applyFiltersAndRender();
    });
  });

  // Reset all filters function
  const resetAll = () => {
    filterState.searchQuery = '';
    filterState.selectedCities = [];
    filterState.selectedExams = [];
    filterState.selectedDegrees = [];
    filterState.feeRange = 'all';
    filterState.salaryRange = 'all';
    filterState.selectedOwnership = [];
    filterState.sortBy = 'nirf';

    if (searchInput) {
      searchInput.value = '';
      if (searchClearBtn) searchClearBtn.style.display = 'none';
    }

    document.querySelectorAll('input[name="degreeFilter"]').forEach(cb => cb.checked = false);
    document.querySelectorAll('input[name="cityFilter"]').forEach(cb => cb.checked = false);
    document.querySelectorAll('input[name="examFilter"]').forEach(cb => cb.checked = false);
    document.querySelectorAll('input[name="ownershipFilter"]').forEach(cb => cb.checked = false);
    const feeAllRadio = document.querySelector('input[name="feeRangeFilter"][value="all"]');
    if (feeAllRadio) feeAllRadio.checked = true;
    const salAllRadio = document.querySelector('input[name="salaryRangeFilter"][value="all"]');
    if (salAllRadio) salAllRadio.checked = true;

    if (sortSelect) sortSelect.value = 'nirf';
    if (mobileSortSelect) mobileSortSelect.value = 'nirf';

    const allChipBtn = document.querySelector('.quick-chip-btn[data-filter-type="all"]');
    if (allChipBtn) {
      quickChipsWrap?.querySelectorAll('.quick-chip-btn').forEach(b => b.classList.remove('active'));
      allChipBtn.classList.add('active');
    }

    updateDegreeTabsAndBanner();
    applyFiltersAndRender();
  };

  if (resetAllBtn) resetAllBtn.addEventListener('click', resetAll);
  if (emptyStateResetBtn) emptyStateResetBtn.addEventListener('click', resetAll);

  // Remove individual chips
  if (activeChipsContainer) {
    activeChipsContainer.addEventListener('click', (e) => {
      if (e.target.id === 'clearAllChipsBtn') {
        resetAll();
        return;
      }
      const chip = e.target.closest('.active-filter-chip');
      if (!chip) return;
      const chipType = chip.getAttribute('data-chip-type');
      const chipVal = chip.getAttribute('data-chip-val');

      if (chipType === 'search') {
        filterState.searchQuery = '';
        if (searchInput) searchInput.value = '';
      } else if (chipType === 'degree') {
        filterState.selectedDegrees = filterState.selectedDegrees.filter(d => d !== chipVal);
        const cb = document.querySelector(`input[name="degreeFilter"][value="${chipVal}"]`);
        if (cb) cb.checked = false;
        updateDegreeTabsAndBanner();
      } else if (chipType === 'city') {
        filterState.selectedCities = filterState.selectedCities.filter(c => c !== chipVal);
        const cb = document.querySelector(`input[name="cityFilter"][value="${chipVal}"]`);
        if (cb) cb.checked = false;
      } else if (chipType === 'exam') {
        filterState.selectedExams = filterState.selectedExams.filter(c => c !== chipVal);
        const cb = document.querySelector(`input[name="examFilter"][value="${chipVal}"]`);
        if (cb) cb.checked = false;
      } else if (chipType === 'fee') {
        filterState.feeRange = 'all';
        const feeAllRadio = document.querySelector('input[name="feeRangeFilter"][value="all"]');
        if (feeAllRadio) feeAllRadio.checked = true;
      } else if (chipType === 'salary') {
        filterState.salaryRange = 'all';
        const salAllRadio = document.querySelector('input[name="salaryRangeFilter"][value="all"]');
        if (salAllRadio) salAllRadio.checked = true;
      } else if (chipType === 'ownership') {
        filterState.selectedOwnership = filterState.selectedOwnership.filter(c => c !== chipVal);
        const cb = document.querySelector(`input[name="ownershipFilter"][value="${chipVal}"]`);
        if (cb) cb.checked = false;
      }

      applyFiltersAndRender();
    });
  }

  // Sorting
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      filterState.sortBy = e.target.value;
      if (mobileSortSelect) mobileSortSelect.value = e.target.value;
      applyFiltersAndRender();
    });
  }
  if (mobileSortSelect) {
    mobileSortSelect.addEventListener('change', (e) => {
      filterState.sortBy = e.target.value;
      if (sortSelect) sortSelect.value = e.target.value;
      applyFiltersAndRender();
    });
  }

  // View mode
  if (viewCardBtn && viewListBtn) {
    viewCardBtn.addEventListener('click', () => {
      viewCardBtn.classList.add('active');
      viewListBtn.classList.remove('active');
      filterState.viewMode = 'card';
      applyFiltersAndRender();
    });
    viewListBtn.addEventListener('click', () => {
      viewListBtn.classList.add('active');
      viewCardBtn.classList.remove('active');
      filterState.viewMode = 'list';
      applyFiltersAndRender();
    });
  }

  // Mobile Filter Drawer toggle & close
  const closeFilterDrawerBtn = document.getElementById('closeFilterDrawerBtn');
  const applyMobileFilterBtn = document.getElementById('applyMobileFilterBtn');
  const mobileFilterBackdrop = document.getElementById('mobileFilterBackdrop');

  const setMobileFilterOpen = (open) => {
    if (sidebar) sidebar.classList.toggle('mobile-open', open);
    if (mobileFilterBackdrop) mobileFilterBackdrop.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  if (mobileFilterToggleBtn && sidebar) {
    mobileFilterToggleBtn.addEventListener('click', () => {
      const isOpen = sidebar.classList.contains('mobile-open');
      setMobileFilterOpen(!isOpen);
    });
  }

  closeFilterDrawerBtn?.addEventListener('click', () => setMobileFilterOpen(false));
  applyMobileFilterBtn?.addEventListener('click', () => setMobileFilterOpen(false));
  mobileFilterBackdrop?.addEventListener('click', () => setMobileFilterOpen(false));

  // Compare Checkboxes & Action handlers
  document.addEventListener('change', (e) => {
    if (e.target.classList.contains('compare-college-checkbox')) {
      const colId = e.target.getAttribute('data-college-id');
      if (e.target.checked) {
        if (filterState.compareList.length >= 3) {
          e.target.checked = false;
          alert('You can compare a maximum of 3 colleges simultaneously.');
          return;
        }
        if (!filterState.compareList.includes(colId)) {
          filterState.compareList.push(colId);
        }
      } else {
        filterState.compareList = filterState.compareList.filter(id => id !== colId);
      }
      updateCompareDrawer();
      document.querySelectorAll(`.compare-college-checkbox[data-college-id="${colId}"]`).forEach(cb => {
        cb.checked = filterState.compareList.includes(colId);
      });
    }
  });

  // Clear compare
  if (clearCompareBtn) {
    clearCompareBtn.addEventListener('click', () => {
      filterState.compareList = [];
      document.querySelectorAll('.compare-college-checkbox').forEach(cb => cb.checked = false);
      updateCompareDrawer();
    });
  }

  // Launch comparison modal
  if (launchCompareBtn) {
    launchCompareBtn.addEventListener('click', () => {
      openCompareModal();
    });
  }

  function openCompareModal() {
    const compareOverlay = document.getElementById('portalCompareModalOverlay');
    const compareDialog = document.getElementById('portalCompareModalDialog');
    if (!compareOverlay || !compareDialog) return;

    const selectedColleges = filterState.compareList.map(id => COLLEGES_DATA.find(c => c.id === id)).filter(Boolean);
    if (selectedColleges.length === 0) {
      alert('Please select at least 1 college to compare.');
      return;
    }

    compareDialog.innerHTML = renderComparisonModalContent(selectedColleges);
    compareOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    compareDialog.querySelectorAll('[data-remove-compare]').forEach(btn => {
      btn.addEventListener('click', () => {
        const removeId = btn.getAttribute('data-remove-compare');
        filterState.compareList = filterState.compareList.filter(id => id !== removeId);
        document.querySelectorAll(`.compare-college-checkbox[data-college-id="${removeId}"]`).forEach(cb => cb.checked = false);
        updateCompareDrawer();

        if (filterState.compareList.length === 0) {
          closeCompareModal();
        } else {
          openCompareModal();
        }
      });
    });

    const closeBtn = document.getElementById('closeCompareModalBtn');
    if (closeBtn) closeBtn.addEventListener('click', closeCompareModal);
  }

  function closeCompareModal() {
    const compareOverlay = document.getElementById('portalCompareModalOverlay');
    if (compareOverlay) compareOverlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  // 360° Detail Modal Open
  function openDetailModal(college, initialTab = 'overview') {
    const detailOverlay = document.getElementById('portalDetailModalOverlay');
    const detailDialog = document.getElementById('portalDetailModalDialog');
    if (!detailOverlay || !detailDialog) return;

    filterState.activeCollege = college;
    filterState.activeTab = initialTab;

    detailDialog.innerHTML = renderCollegeDetailModalContent(college, initialTab);
    detailOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    detailDialog.querySelectorAll('.modal-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        filterState.activeTab = targetTab;
        detailDialog.querySelectorAll('.modal-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        detailDialog.querySelectorAll('.modal-tab-pane').forEach(pane => pane.classList.remove('active'));
        const activePane = detailDialog.querySelector(`#tab-${targetTab}`);
        if (activePane) activePane.classList.add('active');
      });
    });

    const closeBtn = document.getElementById('closeDetailModalBtn');
    if (closeBtn) closeBtn.addEventListener('click', closeDetailModal);

    detailDialog.querySelectorAll('[data-ask-ai]').forEach(aiBtn => {
      aiBtn.addEventListener('click', () => {
        const colName = aiBtn.getAttribute('data-ask-ai');
        closeDetailModal();
        window.location.hash = `#ai-chat?query=${encodeURIComponent(`Tell me about ${colName} - admissions, cutoffs, and placements`)}`;
      });
    });

    detailDialog.querySelectorAll('[data-brochure-college]').forEach(bBtn => {
      bBtn.addEventListener('click', () => {
        closeDetailModal();
        openBrochureModal(college);
      });
    });

    detailDialog.querySelectorAll('[data-apply-college]').forEach(aBtn => {
      aBtn.addEventListener('click', () => {
        closeDetailModal();
        openBrochureModal(college);
      });
    });
  }

  function closeDetailModal() {
    const detailOverlay = document.getElementById('portalDetailModalOverlay');
    if (detailOverlay) detailOverlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  // Brochure Modal
  function openBrochureModal(college) {
    const brochureOverlay = document.getElementById('portalBrochureModalOverlay');
    const brochureDialog = document.getElementById('portalBrochureModalDialog');
    if (!brochureOverlay || !brochureDialog) return;

    brochureDialog.innerHTML = renderBrochureModalContent(college);
    brochureOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    const closeBtn = document.getElementById('closeBrochureModalBtn');
    if (closeBtn) closeBtn.addEventListener('click', closeBrochureModal);

    const form = document.getElementById('brochureEnquiryForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const successMsg = document.getElementById('brochureSuccessMessage');
        if (successMsg) successMsg.style.display = 'flex';
        form.querySelector('.brochure-submit-btn').style.display = 'none';

        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.6 }
          });
        } catch (err) {}

        setTimeout(() => {
          closeBrochureModal();
        }, 2200);
      });
    }
  }

  function closeBrochureModal() {
    const brochureOverlay = document.getElementById('portalBrochureModalOverlay');
    if (brochureOverlay) brochureOverlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  // Delegate click for view-college and brochure buttons
  document.addEventListener('click', (e) => {
    const viewTrigger = e.target.closest('[data-view-college]');
    if (viewTrigger) {
      e.preventDefault();
      const colId = viewTrigger.getAttribute('data-view-college');
      const college = COLLEGES_DATA.find(c => c.id === colId);
      if (college) openDetailModal(college, 'overview');
      return;
    }

    const brochureTrigger = e.target.closest('[data-brochure-college]');
    if (brochureTrigger) {
      e.preventDefault();
      const colId = brochureTrigger.getAttribute('data-brochure-college');
      const college = COLLEGES_DATA.find(c => c.id === colId);
      openBrochureModal(college);
      return;
    }

    const removeCompChip = e.target.closest('.remove-compare-chip-btn');
    if (removeCompChip) {
      const colId = removeCompChip.getAttribute('data-remove-compare');
      filterState.compareList = filterState.compareList.filter(id => id !== colId);
      document.querySelectorAll(`.compare-college-checkbox[data-college-id="${colId}"]`).forEach(cb => cb.checked = false);
      updateCompareDrawer();
      return;
    }

    if (e.target.id === 'portalDetailModalOverlay') closeDetailModal();
    if (e.target.id === 'portalCompareModalOverlay') closeCompareModal();
    if (e.target.id === 'portalBrochureModalOverlay') closeBrochureModal();
  });

  // Global ESC key listener for modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDetailModal();
      closeCompareModal();
      closeBrochureModal();
    }
  });

  // Initial render
  applyFiltersAndRender();
}

// ============================================================
// HOME PAGE LOGIC
// ============================================================
function initHomeInteractions() {
  // 1. Initialize Full College Search Portal Engine (College4Sure / Shiksha theme)
  initCollegesInteractions(null, null);

  // 2. Fast-Track City Hub Tags Click Handling
  document.querySelectorAll('[data-city-click]').forEach(btn => {
    btn.addEventListener('click', () => {
      const city = btn.getAttribute('data-city-click');
      const searchInput = document.getElementById('portalCollegeSearchInput');
      if (searchInput) {
        searchInput.value = city;
        const clearBtn = document.getElementById('portalSearchClearBtn');
        if (clearBtn) clearBtn.style.display = 'block';
      }
      
      // Check checkbox if exists
      const cb = document.querySelector(`input[name="cityFilter"][value="${city}"]`);
      if (cb) {
        cb.checked = true;
        cb.dispatchEvent(new Event('change'));
      } else {
        // Trigger search event
        const triggerBtn = document.getElementById('portalSearchTriggerBtn');
        if (triggerBtn) triggerBtn.click();
      }

      // Smooth scroll to directory anchor
      const anchor = document.getElementById('collegeDirectoryAnchor');
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // 3. Quick Percentile Matcher
  const percInput = document.getElementById('quickPercentileInput');
  const examSelect = document.getElementById('quickExamSelect');
  const matchBtn = document.getElementById('runQuickMatchBtn');
  const previewBox = document.getElementById('quickMatchResultsPreview');

  const runMatch = () => {
    const p = parseFloat(percInput?.value || 98.5);
    const exam = examSelect?.value || 'CAT';

    let dreamCalls = [];
    let highCalls = [];

    if (p >= 99) {
      dreamCalls = ['IIM Ahmedabad (PGP)', 'IIM Bangalore (PGP)', 'IIM Calcutta (MBA)', 'FMS Delhi'];
      highCalls = ['IIM Lucknow', 'IIM Kozhikode', 'SPJIMR Mumbai', 'XLRI Jamshedpur'];
    } else if (p >= 95) {
      dreamCalls = ['IIM Lucknow / Indore', 'SPJIMR Mumbai', 'MDI Gurgaon', 'IIT Bombay (SJMSOM)'];
      highCalls = ['New IIMs (Udaipur, Trichy, Ranchi)', 'IIFT Delhi', 'SIBM Pune (SNAP)'];
    } else if (p >= 90) {
      dreamCalls = ['Baby IIMs (Jammu, Sambalpur, Bodhgaya)', 'IMT Ghaziabad', 'GIM Goa'];
      highCalls = ['TAPMI Manipal', 'Great Lakes Chennai', 'FORE New Delhi'];
    } else {
      dreamCalls = ['K J Somaiya Mumbai', 'Welingkar Mumbai', 'BIMTECH'];
      highCalls = ['XIME Bangalore', 'BIMM Pune', 'Alliance University'];
    }

    if (previewBox) {
      previewBox.innerHTML = `
        <div class="match-badge-result dream">
          <span class="call-type">🏆 Elite / Dream Calls:</span>
          <strong>${dreamCalls.join(', ')}</strong>
        </div>
        <div class="match-badge-result strong">
          <span class="call-type">💎 High Convert Calls:</span>
          <strong>${highCalls.join(', ')}</strong>
        </div>
      `;
    }
  };

  if (matchBtn) {
    matchBtn.addEventListener('click', () => {
      runMatch();
      // Scroll down to directory and filter for top colleges
      const anchor = document.getElementById('collegeDirectoryAnchor');
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
  if (percInput) percInput.addEventListener('input', runMatch);
  if (examSelect) examSelect.addEventListener('change', runMatch);

  // 4. Live Countdown Clocks Tickers
  updateLiveCountdowns();
}

function updateLiveCountdowns() {
  const catDate = new Date('2026-11-29T10:00:00');
  const xatDate = new Date('2027-01-03T09:30:00');
  const snapDate = new Date('2026-12-06T14:00:00');
  const cmatDate = new Date('2026-05-15T09:00:00');

  const updateClock = (target, prefix) => {
    const now = new Date();
    const diff = target - now;
    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / 1000 / 60) % 60);

      const dEl = document.getElementById(`${prefix}-days`);
      const hEl = document.getElementById(`${prefix}-hours`);
      const mEl = document.getElementById(`${prefix}-mins`);

      if (dEl) dEl.innerText = days;
      if (hEl) hEl.innerText = hours < 10 ? '0' + hours : hours;
      if (mEl) mEl.innerText = mins < 10 ? '0' + mins : mins;
    }
  };

  updateClock(catDate, 'cat');
  updateClock(xatDate, 'xat');
  updateClock(snapDate, 'snap');
  updateClock(cmatDate, 'cmat');
}

// ============================================================
// PROGRAMS PAGE LOGIC
// ============================================================
function initProgramsInteractions() {
  const tabBtns = document.querySelectorAll('.program-tab-btn');
  const panels = document.querySelectorAll('.program-tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-program-tab');
      tabBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(`panel-${targetTab}`);
      if (targetPanel) targetPanel.classList.add('active');

      // Update URL hash without reload
      window.location.hash = `#programs?sub=${targetTab}`;
    });
  });

  // ROI Calculator
  const tuitionInp = document.getElementById('roiTuition');
  const livingInp = document.getElementById('roiLiving');
  const currCtcInp = document.getElementById('roiCurrentCTC');
  const postCtcInp = document.getElementById('roiPostCTC');
  const calcRoiBtn = document.getElementById('runRoiCalcBtn');

  const calculateROI = () => {
    const tuition = parseFloat(tuitionInp?.value || 24);
    const living = parseFloat(livingInp?.value || 3.5);
    const currCtc = parseFloat(currCtcInp?.value || 8);
    const postCtc = parseFloat(postCtcInp?.value || 28);

    const directInvest = tuition + living;
    const foregone = currCtc * 2;
    const totalEffective = directInvest + foregone;
    const annualIncrement = Math.max(1, postCtc - currCtc);

    // After tax & living net savings jump (approx 70% of increment)
    const netAnnualJump = annualIncrement * 0.72;
    const breakEvenMonths = Math.max(6, Math.round((directInvest / netAnnualJump) * 12));

    // 5-Year Net Wealth Gain
    const fiveYearGain = Number((netAnnualJump * 5 - directInvest).toFixed(1));

    // Update UI
    const bMonthsEl = document.getElementById('roiBreakEvenMonths');
    const totDirEl = document.getElementById('roiTotalDirect');
    const foregoneEl = document.getElementById('roiForegone');
    const totEffEl = document.getElementById('roiTotalEffective');
    const annIncEl = document.getElementById('roiAnnualIncrement');
    const fiveYrEl = document.getElementById('roi5YrBoost');
    const insightEl = document.getElementById('roiInsightText');

    if (bMonthsEl) bMonthsEl.innerText = `${breakEvenMonths} Months`;
    if (totDirEl) totDirEl.innerText = `₹${directInvest.toFixed(1)} Lakhs`;
    if (foregoneEl) foregoneEl.innerText = `₹${foregone.toFixed(1)} Lakhs`;
    if (totEffEl) totEffEl.innerText = `₹${totalEffective.toFixed(1)} Lakhs`;
    if (annIncEl) annIncEl.innerText = `+₹${annualIncrement.toFixed(1)} LPA`;
    if (fiveYrEl) fiveYrEl.innerText = `+₹${fiveYearGain} Lakhs`;

    if (insightEl) {
      insightEl.innerHTML = `
        🚀 <strong>Outstanding Investment:</strong> At an expected CTC of ₹${postCtc} LPA, your incremental post-MBA cash flow pays off the entire direct investment in approximately ${breakEvenMonths} months, boosting your net earnings by over ₹${fiveYearGain} Lakhs over a 5-year career horizon!
      `;
    }
  };

  if (calcRoiBtn) calcRoiBtn.addEventListener('click', calculateROI);
}

// ============================================================
// TOOLS & CALCULATORS PAGE LOGIC
// ============================================================
function initToolsInteractions() {
  // Tab Switcher between CAT, XAT, and CMAT
  const toolBtns = document.querySelectorAll('.tool-tab-btn');
  const panels = document.querySelectorAll('.tool-panel');

  toolBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tool-tab');
      toolBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(`panel-${tab}-calc`);
      if (targetPanel) targetPanel.classList.add('active');

      window.location.hash = `#tools?sub=${tab}`;
    });
  });

  // Current active tier filter for predicted college calls
  let activeTierFilter = 'all';
  let lastCatResult = null;

  // Function to render predicted B-School calls
  const renderCalls = (tierCalls, filter = 'all') => {
    const callsBox = document.getElementById('catCallsListBox');
    if (!callsBox || !tierCalls) return;

    let list = [];
    if (filter === 'tier1') list = tierCalls.tier1 || [];
    else if (filter === 'tier1_5') list = tierCalls.tier1_5 || [];
    else if (filter === 'tier2') list = tierCalls.tier2 || [];
    else if (filter === 'tier3') list = tierCalls.tier3 || [];
    else {
      list = [
        ...(tierCalls.tier1 || []),
        ...(tierCalls.tier1_5 || []),
        ...(tierCalls.tier2_top || []),
        ...(tierCalls.tier2 || []),
        ...(tierCalls.tier3 || [])
      ];
    }

    if (list.length === 0) {
      callsBox.innerHTML = `
        <div class="call-empty-state">
          <span>No direct shortlists in this tier. Try selecting "All Calls" or review regional options below.</span>
        </div>
      `;
      return;
    }

    callsBox.innerHTML = list.map(c => `
      <div class="call-badge-item">
        <div class="call-info-left">
          <span class="call-name">${c.name}</span>
          <span class="call-cutoff-tag">Cutoff: ${c.cutoff}</span>
        </div>
        <div class="call-info-right">
          <span class="call-tier-pill">${c.badge}</span>
          <span class="call-status ${c.status.includes('High') || c.status.includes('Top') || c.status.includes('Confirmed') ? 'confirmed' : 'dream'}">${c.status}</span>
        </div>
      </div>
    `).join('');
  };

  // Main function to update UI from CAT calculation results
  const applyAndDisplayCatResults = (res, candidateInfo = null) => {
    lastCatResult = res;

    // Update Scores
    const percEl = document.getElementById('catResPercentile');
    const rawEl = document.getElementById('catResTotalRaw');
    const scaleEl = document.getElementById('catResScaled');
    const accEl = document.getElementById('catResAccuracy');
    const attEl = document.getElementById('catResAttempts');
    const varcScEl = document.getElementById('catResVarcScore');
    const dilrScEl = document.getElementById('catResDilrScore');
    const qaScEl = document.getElementById('catResQaScore');
    const barVarc = document.getElementById('catBarVarc');
    const barDilr = document.getElementById('catBarDilr');
    const barQa = document.getElementById('catBarQa');

    if (percEl) percEl.innerText = `${res.effectivePercentile || res.estimatedPercentile} %ile`;
    if (rawEl) rawEl.innerText = `${res.totalRaw}`;
    if (scaleEl) scaleEl.innerText = `${res.scaledScore}`;
    if (accEl) accEl.innerText = `${res.accuracy}%`;
    if (attEl) attEl.innerText = `${res.totalAttempted} / 66`;

    if (varcScEl) varcScEl.innerText = `${res.varcScore} Marks (~${res.varcPercentile}%ile)`;
    if (dilrScEl) dilrScEl.innerText = `${res.dilrScore} Marks (~${res.dilrPercentile}%ile)`;
    if (qaScEl) qaScEl.innerText = `${res.qaScore} Marks (~${res.qaPercentile}%ile)`;

    if (barVarc) barVarc.style.width = `${Math.min(100, Math.max(5, (res.varcScore / 72) * 100))}%`;
    if (barDilr) barDilr.style.width = `${Math.min(100, Math.max(5, (res.dilrScore / 60) * 100))}%`;
    if (barQa) barQa.style.width = `${Math.min(100, Math.max(5, (res.qaScore / 66) * 100))}%`;

    // Audit counters
    const auditCorrect = document.getElementById('auditCorrectCount');
    const auditWrong = document.getElementById('auditWrongCount');
    const auditTita = document.getElementById('auditTitaCount');
    const auditUnatt = document.getElementById('auditUnattemptedCount');
    const penaltySpan = document.getElementById('penaltyScoreSpan');
    const nameSub = document.getElementById('candidateNameSub');

    if (auditCorrect) auditCorrect.innerText = `${res.totalCorrect}`;
    if (auditWrong) auditWrong.innerText = `${res.totalWrong}`;
    if (auditTita) auditTita.innerText = `${(res.varcScore || 0) + (res.dilrScore || 0) + (res.qaScore || 0) > 0 ? '5' : '0'}`;
    if (auditUnatt) auditUnatt.innerText = `${Math.max(0, 66 - res.totalAttempted)}`;
    if (penaltySpan) penaltySpan.innerText = `-${res.negativePenalty} Marks`;

    if (candidateInfo && nameSub) {
      nameSub.innerText = `Candidate: ${candidateInfo.candidateName || 'CAT Aspirant'} • Slot ${candidateInfo.slot || '1'} (${candidateInfo.testDate || 'CAT 2026'})`;
    }

    // Render Calls
    renderCalls(res.tierCalls, activeTierFilter);

    // Confetti celebration if high percentile
    if (parseFloat(res.effectivePercentile || res.estimatedPercentile) >= 95) {
      try {
        confetti({ particleCount: 75, spread: 70, origin: { y: 0.6 } });
      } catch (err) {}
    }
  };

  // CAT Mode Switcher
  const btnModeUrl = document.getElementById('btnModeUrl');
  const btnModeSource = document.getElementById('btnModeSource');
  const btnModeManual = document.getElementById('btnModeManual');
  const btnModeGoal = document.getElementById('btnModeGoal');

  const containerUrl = document.getElementById('modeContainerUrl');
  const containerSource = document.getElementById('modeContainerSource');
  const containerManual = document.getElementById('modeContainerManual');
  const containerGoal = document.getElementById('modeContainerGoal');

  const switchCatMode = (mode) => {
    [btnModeUrl, btnModeSource, btnModeManual, btnModeGoal].forEach(b => b?.classList.remove('active'));
    [containerUrl, containerSource, containerManual, containerGoal].forEach(c => {
      if (c) {
        c.style.display = 'none';
        c.classList.remove('active');
      }
    });

    if (mode === 'url' && btnModeUrl && containerUrl) {
      btnModeUrl.classList.add('active');
      containerUrl.style.display = 'block';
      containerUrl.classList.add('active');
    } else if (mode === 'source' && btnModeSource && containerSource) {
      btnModeSource.classList.add('active');
      containerSource.style.display = 'block';
      containerSource.classList.add('active');
    } else if (mode === 'manual' && btnModeManual && containerManual) {
      btnModeManual.classList.add('active');
      containerManual.style.display = 'block';
      containerManual.classList.add('active');
    } else if (mode === 'goal' && btnModeGoal && containerGoal) {
      btnModeGoal.classList.add('active');
      containerGoal.style.display = 'block';
      containerGoal.classList.add('active');
      renderGoalBlueprint(99.0);
    }
  };

  btnModeUrl?.addEventListener('click', () => switchCatMode('url'));
  btnModeSource?.addEventListener('click', () => switchCatMode('source'));
  btnModeManual?.addEventListener('click', () => switchCatMode('manual'));
  btnModeGoal?.addEventListener('click', () => switchCatMode('goal'));

  // Goal Planner Render Function
  const renderGoalBlueprint = (targetPercentile = 99.0) => {
    const goalGrid = document.getElementById('goalBlueprintGrid');
    if (!goalGrid) return;

    const plan = calculateGoalPlan(targetPercentile);
    goalGrid.innerHTML = `
      <div class="blueprint-summary-row">
        <div class="blueprint-metric-box">
          <span class="bm-lbl">Target Score Needed</span>
          <strong class="bm-val text-blue">${plan.targetScore} / 198</strong>
        </div>
        <div class="blueprint-metric-box">
          <span class="bm-lbl">Required Total Attempts</span>
          <strong class="bm-val text-coral">${plan.targetAttempts} / 66 Qs</strong>
        </div>
        <div class="blueprint-metric-box">
          <span class="bm-lbl">Minimum Accuracy</span>
          <strong class="bm-val text-green">${plan.targetAccuracy}%</strong>
        </div>
      </div>

      <div class="blueprint-sections-grid">
        <div class="blueprint-sec-card">
          <div class="b-sec-head">
            <span class="sec-tag blue">VARC Target</span>
            <strong>${plan.varc.targetScore} Marks</strong>
          </div>
          <p>Attempts: <strong>${plan.varc.targetAttempts} Qs</strong> (${plan.varc.mcq} MCQ + ${plan.varc.tita} TITA)</p>
          <span class="b-acc-badge">Accuracy: ${plan.varc.accuracy}%</span>
        </div>

        <div class="blueprint-sec-card">
          <div class="b-sec-head">
            <span class="sec-tag yellow">DILR Target</span>
            <strong>${plan.dilr.targetScore} Marks</strong>
          </div>
          <p>Attempts: <strong>${plan.dilr.targetAttempts} Qs</strong> (${plan.dilr.mcq} MCQ + ${plan.dilr.tita} TITA)</p>
          <span class="b-acc-badge">Accuracy: ${plan.dilr.accuracy}%</span>
        </div>

        <div class="blueprint-sec-card">
          <div class="b-sec-head">
            <span class="sec-tag green">QA Target</span>
            <strong>${plan.qa.targetScore} Marks</strong>
          </div>
          <p>Attempts: <strong>${plan.qa.targetAttempts} Qs</strong> (${plan.qa.mcq} MCQ + ${plan.qa.tita} TITA)</p>
          <span class="b-acc-badge">Accuracy: ${plan.qa.accuracy}%</span>
        </div>
      </div>

      <div class="blueprint-strategy-box">
        <span class="strat-icon">💡</span>
        <div>
          <strong>Tactical Recommendation for ${plan.targetPercentile}%ile:</strong>
          <p>${plan.strategy}</p>
        </div>
      </div>
    `;
  };

  // Goal Chip Click Handlers
  document.querySelectorAll('.goal-chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.goal-chip-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const goal = parseFloat(btn.getAttribute('data-goal') || '99.0');
      renderGoalBlueprint(goal);
    });
  });

  // Call Tier Tabs
  document.querySelectorAll('.tier-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tier-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTierFilter = btn.getAttribute('data-call-filter') || 'all';
      if (lastCatResult) {
        renderCalls(lastCatResult.tierCalls, activeTierFilter);
      }
    });
  });

  // Digialm URL Scan Handler
  const btnScanUrl = document.getElementById('btnScanUrl');
  const catUrlInput = document.getElementById('catUrlInput');

  const executeUrlScan = (slotNum = '1') => {
    if (btnScanUrl) {
      btnScanUrl.innerHTML = `<span>⚡ Analyzing 66 Questions...</span>`;
      btnScanUrl.disabled = true;
    }

    setTimeout(() => {
      const sampleData = getSampleResponseSheet(slotNum, 'Rahul Sharma');
      const res = calculateCATScore({
        slot: sampleData.slot,
        category: document.getElementById('catCategorySelect')?.value || 'GEN',
        varc: sampleData.varc,
        dilr: sampleData.dilr,
        qa: sampleData.qa
      });

      applyAndDisplayCatResults(res, sampleData);

      // Sync manual inputs as well
      syncInputsFromObject(sampleData.varc, sampleData.dilr, sampleData.qa);

      if (btnScanUrl) {
        btnScanUrl.innerHTML = `<span>Scan Response Sheet</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`;
        btnScanUrl.disabled = false;
      }
    }, 400);
  };

  btnScanUrl?.addEventListener('click', () => {
    const val = catUrlInput?.value.trim();
    if (!val) {
      if (catUrlInput) {
        catUrlInput.value = 'https://cdn.digialm.com//per/g01/pub/756/touchstone/AssessmentQPHTMLMode1//CAT2026/CandidateResponseSheet.html';
      }
    }
    executeUrlScan('1');
  });

  document.getElementById('btnLoadSampleUrl')?.addEventListener('click', () => {
    if (catUrlInput) {
      catUrlInput.value = 'https://cdn.digialm.com//per/g01/pub/756/touchstone/AssessmentQPHTMLMode1//CAT2026_Slot1/CandidateResponseSheet.html';
    }
    executeUrlScan('1');
  });

  document.getElementById('btnLoadSampleSlot2')?.addEventListener('click', () => {
    if (catUrlInput) {
      catUrlInput.value = 'https://cdn.digialm.com//per/g01/pub/756/touchstone/AssessmentQPHTMLMode1//CAT2026_Slot2/CandidateResponseSheet.html';
    }
    executeUrlScan('2');
  });

  // HTML Source Parse Handler
  const btnParseSource = document.getElementById('btnParseSource');
  const catSourceInput = document.getElementById('catSourceInput');

  const executeSourceParse = () => {
    const source = catSourceInput?.value || '';
    const parsed = parseResponseSheetHTML(source);
    const res = calculateCATScore({
      slot: parsed.slot || '1',
      category: document.getElementById('catCategorySelect')?.value || 'GEN',
      varc: parsed.varc,
      dilr: parsed.dilr,
      qa: parsed.qa
    });

    applyAndDisplayCatResults(res, parsed);
    syncInputsFromObject(parsed.varc, parsed.dilr, parsed.qa);
  };

  btnParseSource?.addEventListener('click', executeSourceParse);
  document.getElementById('btnLoadSampleSource')?.addEventListener('click', () => {
    if (catSourceInput) {
      catSourceInput.value = `<!-- TCS iON Candidate Response Sheet -->\n<table class="menu-tbl"><tr><td>Candidate Name</td><td>Pooja Verma</td></tr><tr><td>Test Date</td><td>29/11/2026</td></tr><tr><td>Test Time</td><td>12:30 PM - 2:30 PM</td></tr></table>\n<!-- Section : VARC Question Type : MCQ Chosen Option : 2 class="rightAns" -->`;
    }
    executeSourceParse();
  });

  // Helper to sync manual inputs
  const syncInputsFromObject = (v, d, q) => {
    const vC = document.getElementById('catVarcCorrectMcq');
    const vW = document.getElementById('catVarcWrongMcq');
    const vTc = document.getElementById('catVarcCorrectTita');
    const vTw = document.getElementById('catVarcWrongTita');

    const dC = document.getElementById('catDilrCorrectMcq');
    const dW = document.getElementById('catDilrWrongMcq');
    const dTc = document.getElementById('catDilrCorrectTita');
    const dTw = document.getElementById('catDilrWrongTita');

    const qC = document.getElementById('catQaCorrectMcq');
    const qW = document.getElementById('catQaWrongMcq');
    const qTc = document.getElementById('catQaCorrectTita');
    const qTw = document.getElementById('catQaWrongTita');

    if (vC && v) vC.value = v.correctMcq || 0;
    if (vW && v) vW.value = v.wrongMcq || 0;
    if (vTc && v) vTc.value = v.correctTita || 0;
    if (vTw && v) vTw.value = v.wrongTita || 0;

    if (dC && d) dC.value = d.correctMcq || 0;
    if (dW && d) dW.value = d.wrongMcq || 0;
    if (dTc && d) dTc.value = d.correctTita || 0;
    if (dTw && d) dTw.value = d.wrongTita || 0;

    if (qC && q) qC.value = q.correctMcq || 0;
    if (qW && q) qW.value = q.wrongMcq || 0;
    if (qTc && q) qTc.value = q.correctTita || 0;
    if (qTw && q) qTw.value = q.wrongTita || 0;

    updateManualLiveScores();
  };

  // Live Manual Input Calculation
  const updateManualLiveScores = () => {
    const vC = Number(document.getElementById('catVarcCorrectMcq')?.value || 0);
    const vW = Number(document.getElementById('catVarcWrongMcq')?.value || 0);
    const vTc = Number(document.getElementById('catVarcCorrectTita')?.value || 0);

    const dC = Number(document.getElementById('catDilrCorrectMcq')?.value || 0);
    const dW = Number(document.getElementById('catDilrWrongMcq')?.value || 0);
    const dTc = Number(document.getElementById('catDilrCorrectTita')?.value || 0);

    const qC = Number(document.getElementById('catQaCorrectMcq')?.value || 0);
    const qW = Number(document.getElementById('catQaWrongMcq')?.value || 0);
    const qTc = Number(document.getElementById('catQaCorrectTita')?.value || 0);

    const vScore = (vC * 3) - (vW * 1) + (vTc * 3);
    const dScore = (dC * 3) - (dW * 1) + (dTc * 3);
    const qScore = (qC * 3) - (qW * 1) + (qTc * 3);

    const vLive = document.getElementById('varcLiveScore');
    const dLive = document.getElementById('dilrLiveScore');
    const qLive = document.getElementById('qaLiveScore');

    if (vLive) vLive.innerText = vScore;
    if (dLive) dLive.innerText = dScore;
    if (qLive) qLive.innerText = qScore;
  };

  // Manual Inputs Change Listeners
  [
    'catVarcCorrectMcq', 'catVarcWrongMcq', 'catVarcCorrectTita', 'catVarcWrongTita',
    'catDilrCorrectMcq', 'catDilrWrongMcq', 'catDilrCorrectTita', 'catDilrWrongTita',
    'catQaCorrectMcq', 'catQaWrongMcq', 'catQaCorrectTita', 'catQaWrongTita'
  ].forEach(id => {
    document.getElementById(id)?.addEventListener('input', updateManualLiveScores);
  });

  const runCatCalc = () => {
    const slot = document.getElementById('catSlotSelect')?.value || '1';
    const category = document.getElementById('catCategorySelect')?.value || 'GEN';
    const varc = {
      correctMcq: document.getElementById('catVarcCorrectMcq')?.value,
      wrongMcq: document.getElementById('catVarcWrongMcq')?.value,
      correctTita: document.getElementById('catVarcCorrectTita')?.value,
      wrongTita: document.getElementById('catVarcWrongTita')?.value
    };
    const dilr = {
      correctMcq: document.getElementById('catDilrCorrectMcq')?.value,
      wrongMcq: document.getElementById('catDilrWrongMcq')?.value,
      correctTita: document.getElementById('catDilrCorrectTita')?.value,
      wrongTita: document.getElementById('catDilrWrongTita')?.value
    };
    const qa = {
      correctMcq: document.getElementById('catQaCorrectMcq')?.value,
      wrongMcq: document.getElementById('catQaWrongMcq')?.value,
      correctTita: document.getElementById('catQaCorrectTita')?.value,
      wrongTita: document.getElementById('catQaWrongTita')?.value
    };

    const res = calculateCATScore({ slot, category, varc, dilr, qa });
    applyAndDisplayCatResults(res);
  };

  document.getElementById('btnCalculateCAT')?.addEventListener('click', runCatCalc);
  document.getElementById('catSlotSelect')?.addEventListener('change', runCatCalc);
  document.getElementById('catCategorySelect')?.addEventListener('change', runCatCalc);

  // CAT Presets
  const setCatInputs = (vC, vW, vTc, dC, dW, dTc, qC, qW, qTc) => {
    const el = id => document.getElementById(id);
    if (el('catVarcCorrectMcq')) el('catVarcCorrectMcq').value = vC;
    if (el('catVarcWrongMcq')) el('catVarcWrongMcq').value = vW;
    if (el('catVarcCorrectTita')) el('catVarcCorrectTita').value = vTc;
    if (el('catDilrCorrectMcq')) el('catDilrCorrectMcq').value = dC;
    if (el('catDilrWrongMcq')) el('catDilrWrongMcq').value = dW;
    if (el('catDilrCorrectTita')) el('catDilrCorrectTita').value = dTc;
    if (el('catQaCorrectMcq')) el('catQaCorrectMcq').value = qC;
    if (el('catQaWrongMcq')) el('catQaWrongMcq').value = qW;
    if (el('catQaCorrectTita')) el('catQaCorrectTita').value = qTc;
    updateManualLiveScores();
    runCatCalc();
  };

  document.getElementById('presetCat99')?.addEventListener('click', () => setCatInputs(14, 2, 3, 10, 1, 2, 12, 1, 3));
  document.getElementById('presetCat95')?.addEventListener('click', () => setCatInputs(10, 4, 1, 7, 3, 1, 8, 3, 1));
  document.getElementById('presetCat90')?.addEventListener('click', () => setCatInputs(8, 5, 1, 5, 3, 1, 6, 4, 1));
  document.getElementById('presetCat80')?.addEventListener('click', () => setCatInputs(6, 4, 1, 4, 2, 1, 4, 2, 1));
  document.getElementById('presetCatReset')?.addEventListener('click', () => setCatInputs(0, 0, 0, 0, 0, 0, 0, 0, 0));

  // Initial Calculation on load
  runCatCalc();

  // Print Scorecard
  document.getElementById('printScorecardBtn')?.addEventListener('click', () => window.print());

  // XAT Calculator
  const btnCalcXat = document.getElementById('btnCalculateXAT');
  const runXatCalc = () => {
    const valr = {
      correct: document.getElementById('xatValrCorrect')?.value,
      wrong: document.getElementById('xatValrWrong')?.value
    };
    const dm = {
      correct: document.getElementById('xatDmCorrect')?.value,
      wrong: document.getElementById('xatDmWrong')?.value
    };
    const qadi = {
      correct: document.getElementById('xatQadiCorrect')?.value,
      wrong: document.getElementById('xatQadiWrong')?.value
    };

    const res = calculateXATScore({ valr, dm, qadi });

    const percEl = document.getElementById('xatResPercentile');
    const rawEl = document.getElementById('xatResTotalRaw');
    const penEl = document.getElementById('xatResUnattemptedPenalty');
    const unCountEl = document.getElementById('xatResUnattemptedCount');
    const attEl = document.getElementById('xatResAttempted');
    const bmStatus = document.getElementById('xlriBmStatus');
    const hrmStatus = document.getElementById('xlriHrmStatus');
    const callsBox = document.getElementById('xatCallsListBox');

    if (percEl) percEl.innerText = `${res.estimatedPercentile} %ile`;
    if (rawEl) rawEl.innerText = `${res.totalRaw}`;
    if (penEl) penEl.innerText = `-${res.unattemptedPenalty}`;
    if (unCountEl) unCountEl.innerText = `${res.unattempted} Qs`;
    if (attEl) attEl.innerText = `${76 - res.unattempted} / 76`;

    if (bmStatus) {
      bmStatus.className = `xlri-check-row ${res.xlriBmEligible ? 'eligible' : 'not-eligible'}`;
      bmStatus.innerHTML = `
        <span class="xlri-check-icon">${res.xlriBmEligible ? '✅' : '⚠️'}</span>
        <div>
          <strong>XLRI Jamshedpur BM (Business Management)</strong>
          <div class="xlri-sub-stat">${res.xlriBmEligible ? 'Sectional & Overall Cutoffs Cleared!' : 'Below estimated cutoff (Needs ~35+ Marks, 96%ile)'}</div>
        </div>
      `;
    }

    if (hrmStatus) {
      hrmStatus.className = `xlri-check-row ${res.xlriHrmEligible ? 'eligible' : 'not-eligible'}`;
      hrmStatus.innerHTML = `
        <span class="xlri-check-icon">${res.xlriHrmEligible ? '✅' : '⚠️'}</span>
        <div>
          <strong>XLRI Jamshedpur HRM (Human Resources)</strong>
          <div class="xlri-sub-stat">${res.xlriHrmEligible ? 'Sectional & Overall Cutoffs Cleared!' : 'Below estimated cutoff (Needs ~33+ Marks, 94%ile)'}</div>
        </div>
      `;
    }

    if (callsBox) {
      callsBox.innerHTML = res.collegeCalls.map(c => `
        <div class="call-badge-item">
          <span class="call-status confirmed">${c.status}</span>
          <span class="call-name">${c.name}</span>
        </div>
      `).join('');
    }

    if (parseFloat(res.estimatedPercentile) >= 95) {
      try {
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      } catch (e) {}
    }
  };

  if (btnCalcXat) btnCalcXat.addEventListener('click', runXatCalc);

  // CMAT Calculator
  const btnCalcCmat = document.getElementById('btnCalculateCMAT');
  const runCmatCalc = () => {
    const quant = { correct: document.getElementById('cmatQuantCorrect')?.value, wrong: document.getElementById('cmatQuantWrong')?.value };
    const lr = { correct: document.getElementById('cmatLrCorrect')?.value, wrong: document.getElementById('cmatLrWrong')?.value };
    const lang = { correct: document.getElementById('cmatLangCorrect')?.value, wrong: document.getElementById('cmatLangWrong')?.value };
    const gk = { correct: document.getElementById('cmatGkCorrect')?.value, wrong: document.getElementById('cmatGkWrong')?.value };
    const innov = { correct: document.getElementById('cmatInnovCorrect')?.value, wrong: document.getElementById('cmatInnovWrong')?.value };

    const res = calculateCMATScore({ quant, lr, lang, gk, innov });

    const percEl = document.getElementById('cmatResPercentile');
    const rawEl = document.getElementById('cmatResTotalRaw');
    const quantEl = document.getElementById('cmatResQuant');
    const lrEl = document.getElementById('cmatResLr');
    const innovEl = document.getElementById('cmatResInnov');
    const callsBox = document.getElementById('cmatCallsListBox');

    if (percEl) percEl.innerText = `${res.estimatedPercentile} %ile`;
    if (rawEl) rawEl.innerText = `${res.totalRaw} / 400`;
    if (quantEl) quantEl.innerText = `${res.quantScore} / 80`;
    if (lrEl) lrEl.innerText = `${res.lrScore} / 80`;
    if (innovEl) innovEl.innerText = `${res.innovScore} / 80`;

    if (callsBox) {
      callsBox.innerHTML = res.collegeCalls.map(c => `
        <div class="call-badge-item">
          <span class="call-status confirmed">${c.status}</span>
          <span class="call-name">${c.name}</span>
        </div>
      `).join('');
    }

    if (parseFloat(res.estimatedPercentile) >= 95) {
      try {
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      } catch (e) {}
    }
  };

  if (btnCalcCmat) btnCalcCmat.addEventListener('click', runCmatCalc);
}

// ============================================================
// EXAMS PAGE LOGIC
// ============================================================
function initExamsInteractions() {
  const pills = document.querySelectorAll('#examSelectorPills .exam-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      const filter = pill.getAttribute('data-exam-filter');
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      if (filter === 'all') {
        window.location.hash = '#exams';
      } else {
        window.location.hash = `#exams?exam=${filter}`;
      }
    });
  });
}

// ============================================================
// BLOG PAGE LOGIC
// ============================================================
function initBlogInteractions() {
  const searchInput = document.getElementById('blogSearchInput');
  const filterPills = document.querySelectorAll('#blogFilterPills .blog-pill');
  const gridContainer = document.querySelector('.blog-content-area');

  const filterArticles = () => {
    const q = searchInput?.value.toLowerCase().trim() || '';
    const activePill = document.querySelector('#blogFilterPills .blog-pill.active');
    const activeCategory = activePill?.getAttribute('data-blog-category') || 'all';

    let filtered = BLOGS_DATA;
    if (activeCategory !== 'all') {
      filtered = filtered.filter(b => b.category === activeCategory);
    }
    if (q) {
      filtered = filtered.filter(b => 
        b.title.toLowerCase().includes(q) || 
        b.summary.toLowerCase().includes(q) ||
        b.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    if (gridContainer && !state.currentSub) {
      gridContainer.innerHTML = renderArticlesGrid(filtered);
    }
  };

  if (searchInput) searchInput.addEventListener('input', filterArticles);

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      filterArticles();
    });
  });
}

// ============================================================
// CONTACT PAGE LOGIC
// ============================================================
function initContactInteractions() {
  // Slot selection buttons
  const slotBtns = document.querySelectorAll('.slot-btn');
  let selectedSlot = 'Tomorrow 11:00 AM';

  slotBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      slotBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedSlot = btn.getAttribute('data-slot');
    });
  });

  // Mentorship Form Submit
  const bookingForm = document.getElementById('mentorshipBookingForm');
  const successBox = document.getElementById('bookingSuccessBox');
  const successMsg = document.getElementById('bookingSuccessMsg');

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('mentorName')?.value || 'Aspirant';
      const exam = document.getElementById('mentorTargetExam')?.value || 'CAT';

      bookingForm.style.display = 'none';
      if (successBox) {
        successBox.style.display = 'block';
        if (successMsg) {
          successMsg.innerHTML = `
            Dear <strong>${name}</strong>, your 1-on-1 MBA admissions strategy call for <strong>${exam}</strong> is confirmed for <strong>${selectedSlot}</strong>. We've sent the Google Meet link and preparatory checklist to your WhatsApp & Email!
          `;
        }
      }

      try {
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      } catch (err) {}
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const qBtn = item.querySelector('.faq-question');
    if (qBtn) {
      qBtn.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    }
  });
}

// ============================================================
// AI CHATBOT (ADMITIQ) LOGIC
// ============================================================
function initAiChatInteractions() {
  const chatWindow = document.getElementById('aiMessagesWindow');
  const chatForm = document.getElementById('aiInputForm');
  const userInput = document.getElementById('aiUserInput');
  const promptChips = document.querySelectorAll('.prompt-chip');
  const clearBtn = document.getElementById('clearChatBtn');

  // Auto-scroll chat
  const scrollChatToBottom = () => {
    if (chatWindow) {
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  };

  const appendUserMessage = (msg) => {
    if (!chatWindow) return;
    const msgEl = document.createElement('div');
    msgEl.className = 'chat-message user-message';
    msgEl.innerHTML = `
      <div class="msg-avatar">👤</div>
      <div class="msg-bubble">
        <div class="msg-author-tag">You</div>
        <div class="msg-text-content">
          <p>${escapeHtml(msg)}</p>
        </div>
      </div>
    `;
    chatWindow.appendChild(msgEl);
    scrollChatToBottom();
  };

  const appendAiMessage = (responseObj) => {
    if (!chatWindow) return;

    // Simulate typing delay
    const typingEl = document.createElement('div');
    typingEl.className = 'chat-message ai-message typing-indicator';
    typingEl.innerHTML = `
      <div class="msg-avatar">✨</div>
      <div class="msg-bubble">
        <div class="msg-author-tag">AdmitIQ AI</div>
        <div class="msg-text-content"><p>Thinking & analyzing B-School data...</p></div>
      </div>
    `;
    chatWindow.appendChild(typingEl);
    scrollChatToBottom();

    setTimeout(() => {
      typingEl.remove();

      const msgEl = document.createElement('div');
      msgEl.className = 'chat-message ai-message';
      msgEl.innerHTML = `
        <div class="msg-avatar">✨</div>
        <div class="msg-bubble">
          <div class="msg-author-tag">AdmitIQ AI</div>
          <div class="msg-text-content">
            ${formatMarkdownToHtml(responseObj.text)}
          </div>
        </div>
      `;
      chatWindow.appendChild(msgEl);
      scrollChatToBottom();
    }, 600);
  };

  const handleSendMessage = (text) => {
    if (!text.trim()) return;
    appendUserMessage(text);
    if (userInput) userInput.value = '';

    const aiRes = getAIResponse(text, state.chatHistory);
    state.chatHistory.push({ role: 'user', content: text });
    state.chatHistory.push({ role: 'model', content: aiRes.text });
    appendAiMessage(aiRes);
  };

  if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleSendMessage(userInput?.value || '');
    });
  }

  // Quick prompt chips
  promptChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const prompt = chip.getAttribute('data-prompt');
      if (prompt) handleSendMessage(prompt);
    });
  });

  // Clear Chat
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      state.chatHistory = [];
      if (chatWindow) {
        chatWindow.innerHTML = `
          <div class="chat-message ai-message">
            <div class="msg-avatar">✨</div>
            <div class="msg-bubble">
              <div class="msg-author-tag">AdmitIQ AI Mentor</div>
              <div class="msg-text-content">
                <p>Chat history cleared. How can I help you today?</p>
              </div>
            </div>
          </div>
        `;
      }
    });
  }
}

// Helpers
function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function formatMarkdownToHtml(markdown) {
  let html = markdown;

  // Tables
  const tableRegex = /\|(.+)\|\n\|([\s\-:|]+)\|\n((?:\|.+\|\n?)+)/g;
  html = html.replace(tableRegex, (match, header, divider, rows) => {
    const headers = header.split('|').filter(h => h.trim()).map(h => `<th>${h.trim()}</th>`).join('');
    const rowLines = rows.trim().split('\n').map(row => {
      const cells = row.split('|').filter(c => c.trim()).map(c => `<td>${c.trim()}</td>`).join('');
      return `<tr>${cells}</tr>`;
    }).join('');
    return `<div class="table-responsive"><table><thead><tr>${headers}</tr></thead><tbody>${rowLines}</tbody></table></div>`;
  });

  // Headers
  html = html.replace(/### (.+)/g, '<h3>$1</h3>');
  html = html.replace(/#### (.+)/g, '<h4>$1</h4>');

  // Bold & Italics
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // Lists
  html = html.replace(/(?:^|\n)- (.+)/g, '<li>$1</li>');
  html = html.replace(/(<li>.+<\/li>)+/g, '<ul>$&</ul>');

  // Paragraphs
  html = html.split('\n\n').map(p => {
    if (p.startsWith('<h') || p.startsWith('<div') || p.startsWith('<ul') || p.startsWith('<table')) {
      return p;
    }
    return `<p>${p.replace(/\n/g, '<br>')}</p>`;
  }).join('');

  return html;
}

// Start application
initApp();
