import './style.css';
import { renderNavbar } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { renderQuickSearchModal, handleSearchQuery, getSearchData } from './components/quickSearch.js';
import { renderHomePage } from './pages/home.js';
import { initHomeInteractions } from './pages/homeInteractions.js';
import { updatePageSEO } from './utils/seoHelper.js';
import { renderChatBotWidget, initChatBot, openChatBot } from './components/chatBot.js';
import { renderInquiryModal, initInquiryModal, openInquiryModal } from './components/inquiryModal.js';
import { renderCalculatorGateModal, initCalculatorGateModal } from './components/calculatorGateModal.js';
import { openCollegeDetail, openBrochureModal } from './components/collegeDetailModal.js';
import { getCollegesData, preloadCollegesData } from './data/collegesLoader.js';
import { initGA, trackSearch } from './utils/analytics.js';

// Application State
export const state = {
  currentPage: 'home',
  currentSub: null,
  theme: 'light',
  chatHistory: []
};

// Initialize App
function initApp() {
  // Initialize Google Analytics 4 (non-blocking)
  initGA();

  document.documentElement.setAttribute('data-theme', 'light');
  
  // Render App Skeleton
  const appEl = document.getElementById('app');
  appEl.innerHTML = `
    <div id="navbarMount"></div>
    <main class="main-content" id="mainContentMount"></main>
    <div id="footerMount"></div>
    <div id="modalMount"></div>
    <div id="fmcChatbotMount"></div>
    <div id="inquiryModalMount"></div>
  `;

  // Mount Modals & Detail Dialogs
  document.getElementById('modalMount').innerHTML = `
    ${renderQuickSearchModal()}
    <div class="portal-modal-overlay" id="portalDetailModalOverlay" style="display:none;">
      <div class="portal-modal-dialog" id="portalDetailModalDialog"></div>
    </div>
    <div class="portal-modal-overlay" id="portalBrochureModalOverlay" style="display:none;">
      <div class="portal-modal-dialog brochure-dialog" id="portalBrochureModalDialog"></div>
    </div>
    ${renderCalculatorGateModal()}
  `;

  // Defer heavy widgets (Chatbot, Inquiry, Calculator Gate) to idle
  let widgetsMounted = false;
  function mountDeferredWidgets() {
    if (widgetsMounted) return;
    widgetsMounted = true;

    // Chatbot
    const chatMount = document.getElementById('fmcChatbotMount');
    if (chatMount && !chatMount.hasChildNodes()) {
      chatMount.innerHTML = renderChatBotWidget();
      initChatBot();
    }

    // Inquiry Modal
    const inqMount = document.getElementById('inquiryModalMount');
    if (inqMount && !inqMount.hasChildNodes()) {
      inqMount.innerHTML = renderInquiryModal();
      initInquiryModal();
    }

    // Calculator Gate Modal
    initCalculatorGateModal();
  }

  // Window bridges for triggers
  window.openInquiryModal = () => {
    mountDeferredWidgets();
    openInquiryModal();
  };
  window.openChatBot = () => {
    mountDeferredWidgets();
    openChatBot();
  };

  ['pointerdown', 'keydown', 'scroll', 'touchstart'].forEach(evt => {
    window.addEventListener(evt, mountDeferredWidgets, { once: true, passive: true });
  });
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(mountDeferredWidgets, { timeout: 8000 });
  }

  // Listen to hash & history state changes
  window.addEventListener('hashchange', handleRouteChange);
  window.addEventListener('popstate', handleRouteChange);
  
  // Initial Route Load
  handleRouteChange();

  // Global Event Listeners
  setupGlobalEvents();

  // Preload colleges data on idle for instant search and browsing
  preloadCollegesData();
}

// Navigation helper
export function navigateTo(url) {
  if (window.location.pathname + window.location.search !== url) {
    window.history.pushState(null, '', url);
  }
  handleRouteChange();
}

// Router
async function handleRouteChange() {
  const hash = window.location.hash.slice(1);
  let pathname = window.location.pathname.replace(/\/index\.html$/, '').replace(/\/$/, '') || '/';
  let queryString = window.location.search.slice(1);
  let page = 'home';
  let sub = null;
  const params = new URLSearchParams(queryString || '');

  // 1. Handle Legacy Hash & Query Redirects to Clean Slugs
  if (hash) {
    if (hash === 'tools' || hash === 'tools/' || hash.startsWith('tools?sub=cat') || hash.startsWith('tools?tool=cat') || hash === 'tools/cat-college-predictor') {
      window.history.replaceState(null, '', '/tools/cat-college-predictor');
      pathname = '/tools/cat-college-predictor';
    } else if (hash.startsWith('tools?sub=xat') || hash.startsWith('tools?tool=xat')) {
      window.history.replaceState(null, '', '/tools/xat-percentile-calculator');
      pathname = '/tools/xat-percentile-calculator';
    } else if (hash.startsWith('tools?sub=cmat') || hash.startsWith('tools?tool=cmat')) {
      window.history.replaceState(null, '', '/tools/cmat-percentile-calculator');
      pathname = '/tools/cmat-percentile-calculator';
    } else if (hash.startsWith('colleges?id=')) {
      const colId = new URLSearchParams(hash.split('?')[1]).get('id');
      if (colId) {
        window.history.replaceState(null, '', `/colleges/${colId}`);
        pathname = `/colleges/${colId}`;
      }
    } else if (hash.startsWith('colleges?city=')) {
      const city = new URLSearchParams(hash.split('?')[1]).get('city');
      if (city) {
        window.history.replaceState(null, '', `/colleges/city/${encodeURIComponent(city.toLowerCase())}`);
        pathname = `/colleges/city/${encodeURIComponent(city.toLowerCase())}`;
      }
    } else if (hash.startsWith('colleges?type=')) {
      const deg = new URLSearchParams(hash.split('?')[1]).get('type');
      if (deg) {
        window.history.replaceState(null, '', `/colleges/${encodeURIComponent(deg.toLowerCase())}`);
        pathname = `/colleges/${encodeURIComponent(deg.toLowerCase())}`;
      }
    } else if (hash.startsWith('exams?exam=') || hash.startsWith('exams?id=')) {
      const ex = new URLSearchParams(hash.split('?')[1]).get('exam') || new URLSearchParams(hash.split('?')[1]).get('id');
      if (ex) {
        window.history.replaceState(null, '', `/exams/${encodeURIComponent(ex.toLowerCase())}`);
        pathname = `/exams/${encodeURIComponent(ex.toLowerCase())}`;
      }
    } else if (hash.startsWith('blog?id=')) {
      const bId = new URLSearchParams(hash.split('?')[1]).get('id');
      if (bId) {
        window.history.replaceState(null, '', `/blog/${encodeURIComponent(bId)}`);
        pathname = `/blog/${encodeURIComponent(bId)}`;
      }
    } else if (hash.startsWith('programs?sub=')) {
      const pSub = new URLSearchParams(hash.split('?')[1]).get('sub');
      if (pSub) {
        window.history.replaceState(null, '', `/programs/${encodeURIComponent(pSub.toLowerCase())}`);
        pathname = `/programs/${encodeURIComponent(pSub.toLowerCase())}`;
      }
    } else if (['colleges', 'programs', 'tools', 'exams', 'blog', 'contact', 'ai-chat', 'terms', 'privacy', 'mock-test', 'free-mock-test', 'scholarships', 'scholarship', 'aiu-approved-campuses', 'aiu-approved-colleges'].includes(hash.split('?')[0])) {
      const cleanPath = '/' + hash.split('?')[0];
      const q = hash.includes('?') ? '?' + hash.split('?')[1] : '';
      window.history.replaceState(null, '', cleanPath + q);
      pathname = cleanPath;
      if (hash.includes('?')) {
        const hashParams = new URLSearchParams(hash.split('?')[1]);
        hashParams.forEach((v, k) => params.set(k, v));
      }
    }
  } else if (params.get('page')) {
    const legacyPage = params.get('page');
    const legacySub = params.get('sub') || params.get('exam') || params.get('id') || params.get('type');
    if (legacyPage === 'tools') {
      if (legacySub === 'xat') {
        window.history.replaceState(null, '', '/tools/xat-percentile-calculator');
        pathname = '/tools/xat-percentile-calculator';
      } else if (legacySub === 'cmat') {
        window.history.replaceState(null, '', '/tools/cmat-percentile-calculator');
        pathname = '/tools/cmat-percentile-calculator';
      } else {
        window.history.replaceState(null, '', '/tools/cat-college-predictor');
        pathname = '/tools/cat-college-predictor';
      }
    } else if (['colleges', 'exams', 'blog', 'programs'].includes(legacyPage) && legacySub) {
      window.history.replaceState(null, '', `/${legacyPage}/${legacySub}`);
      pathname = `/${legacyPage}/${legacySub}`;
    } else {
      window.history.replaceState(null, '', `/${legacyPage}`);
      pathname = `/${legacyPage}`;
    }
  }

  // 2. Parse Clean Slug from Pathname
  if (pathname === '/tools/cat-college-predictor') {
    page = 'tools';
    sub = 'cat';
  } else if (pathname === '/tools/xat-percentile-calculator' || pathname === '/tools/xat') {
    page = 'tools';
    sub = 'xat';
  } else if (pathname === '/tools/cmat-percentile-calculator' || pathname === '/tools/cmat') {
    page = 'tools';
    sub = 'cmat';
  } else if (pathname === '/tools') {
    window.history.replaceState(null, '', '/tools/cat-college-predictor');
    pathname = '/tools/cat-college-predictor';
    page = 'tools';
    sub = 'cat';
  } else if (pathname.startsWith('/colleges/city/')) {
    page = 'colleges';
    sub = null;
    const city = decodeURIComponent(pathname.replace('/colleges/city/', '').trim());
    params.set('city', city);
  } else if (pathname === '/colleges/mba') {
    page = 'colleges';
    sub = 'mba';
    params.set('type', 'mba');
  } else if (pathname === '/colleges/pgdm') {
    page = 'colleges';
    sub = 'pgdm';
    params.set('type', 'pgdm');
  } else if (pathname.startsWith('/colleges/')) {
    page = 'colleges';
    sub = decodeURIComponent(pathname.replace('/colleges/', '').trim());
  } else if (pathname === '/colleges') {
    page = 'colleges';
    sub = null;
  } else if (pathname.startsWith('/exams/')) {
    page = 'exams';
    sub = decodeURIComponent(pathname.replace('/exams/', '').trim());
  } else if (pathname === '/exams') {
    page = 'exams';
    sub = null;
  } else if (pathname.startsWith('/programs/')) {
    page = 'programs';
    sub = decodeURIComponent(pathname.replace('/programs/', '').trim());
  } else if (pathname === '/programs') {
    page = 'programs';
    sub = null;
  } else if (pathname.startsWith('/blog/')) {
    page = 'blog';
    sub = decodeURIComponent(pathname.replace('/blog/', '').trim());
  } else if (pathname === '/blog') {
    page = 'blog';
    sub = null;
  } else if (pathname === '/contact') {
    page = 'contact';
  } else if (pathname.startsWith('/mock-test/')) {
    page = 'mock-test';
    sub = decodeURIComponent(pathname.replace('/mock-test/', '').trim());
  } else if (pathname === '/mock-test' || pathname === '/free-mock-test') {
    page = 'mock-test';
    sub = null;
  } else if (pathname.startsWith('/free-mock-test/')) {
    page = 'mock-test';
    sub = decodeURIComponent(pathname.replace('/free-mock-test/', '').trim());
  } else if (pathname === '/ai-chat') {
    page = 'ai-chat';
  } else if (pathname === '/terms' || pathname === '/terms-and-conditions') {
    page = 'terms';
  } else if (pathname === '/privacy' || pathname === '/privacy-policy') {
    page = 'privacy';
  } else if (pathname === '/scholarships' || pathname === '/scholarship') {
    page = 'scholarships';
    sub = null;
  } else if (pathname.startsWith('/scholarships/')) {
    page = 'scholarships';
    sub = decodeURIComponent(pathname.replace('/scholarships/', '').trim());
  } else if (pathname === '/aiu-approved-campuses' || pathname === '/aiu-approved-colleges') {
    page = 'aiu-approved-campuses';
    sub = null;
  } else if (pathname.startsWith('/aiu-approved-campuses/')) {
    page = 'aiu-approved-campuses';
    sub = decodeURIComponent(pathname.replace('/aiu-approved-campuses/', '').trim());
  } else if (pathname.startsWith('/aiu-approved-colleges/')) {
    page = 'aiu-approved-campuses';
    sub = decodeURIComponent(pathname.replace('/aiu-approved-colleges/', '').trim());
  } else if (pathname === '/search') {
    page = 'colleges';
  } else {
    page = 'home';
  }

  if (page === 'home' && (params.get('search') || params.get('q'))) {
    page = 'colleges';
  }

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

    case 'colleges': {
      const [collegesMod, collegesInteractionsMod, collegesData] = await Promise.all([
        import('./pages/colleges.js'),
        import('./pages/collegesInteractions.js'),
        getCollegesData()
      ]);
      const isSpecificCollege = sub && !['mba', 'pgdm'].includes(sub.toLowerCase()) && collegesData.some(c => c.id === sub || c.slug === sub);
      if (isSpecificCollege) {
        const matchedCol = collegesData.find(c => c.id === sub || c.slug === sub);
        mainEl.innerHTML = collegesMod.renderCollegeFullPage(matchedCol);
        collegesMod.initCollegeFullPageInteractions(matchedCol);
      } else {
        mainEl.innerHTML = collegesMod.renderCollegesPage();
        collegesInteractionsMod.initCollegesInteractions(sub, params);
      }
      break;
    }

    case 'programs': {
      const programsMod = await import('./pages/programs.js');
      mainEl.innerHTML = programsMod.renderProgramsPage(sub || 'mba');
      programsMod.initProgramsInteractions((targetTab) => {
        window.history.pushState(null, '', `/programs/${targetTab}`);
        state.currentSub = targetTab;
        updatePageSEO('programs', targetTab, new URLSearchParams());
      });
      break;
    }

    case 'tools': {
      const [toolsMod, toolsInteractionsMod] = await Promise.all([
        import('./pages/tools.js'),
        import('./pages/toolsInteractions.js')
      ]);
      mainEl.innerHTML = toolsMod.renderToolsPage(sub || 'cat');
      toolsInteractionsMod.initToolsInteractions();
      break;
    }

    case 'exams': {
      const examsMod = await import('./pages/exams.js');
      mainEl.innerHTML = examsMod.renderExamsPage(sub);
      examsMod.initExamsInteractions(navigateTo);
      break;
    }

    case 'blog': {
      const [blogMod, blogInteractionsMod] = await Promise.all([
        import('./pages/blog.js'),
        import('./pages/blogInteractions.js')
      ]);
      mainEl.innerHTML = blogMod.renderBlogPage(sub);
      blogInteractionsMod.initBlogInteractions(sub);
      break;
    }

    case 'contact': {
      const [contactMod, contactInteractionsMod] = await Promise.all([
        import('./pages/contact.js'),
        import('./pages/contactInteractions.js')
      ]);
      mainEl.innerHTML = contactMod.renderContactPage();
      contactInteractionsMod.initContactInteractions();
      break;
    }

    case 'ai-chat': {
      const [aiChatMod, aiChatInteractionsMod] = await Promise.all([
        import('./pages/aiChat.js'),
        import('./pages/aiChatInteractions.js')
      ]);
      mainEl.innerHTML = aiChatMod.renderAiChatPage();
      aiChatInteractionsMod.initAiChatInteractions();
      break;
    }

    case 'terms': {
      const termsMod = await import('./pages/terms.js');
      mainEl.innerHTML = termsMod.renderTermsPage();
      break;
    }

    case 'privacy': {
      const privacyMod = await import('./pages/privacy.js');
      mainEl.innerHTML = privacyMod.renderPrivacyPage();
      break;
    }

    case 'mock-test': {
      const mockTestMod = await import('./pages/mockTest.js');
      mainEl.innerHTML = mockTestMod.renderMockTestPage(sub);
      mockTestMod.initMockTestEvents();
      break;
    }

    case 'scholarships': {
      const scholarshipsMod = await import('./pages/scholarships.js');
      mainEl.innerHTML = scholarshipsMod.renderScholarshipsPage(sub);
      scholarshipsMod.initScholarshipsInteractions(sub);
      break;
    }

    case 'aiu-approved-campuses': {
      const aiuMod = await import('./pages/aiuApprovedCampuses.js');
      mainEl.innerHTML = aiuMod.renderAiuApprovedPage(sub);
      aiuMod.initAiuCampusesEvents();
      break;
    }
  }

  // Update Dynamic SEO, GEO, AEO, and Schema.org Structured Data
  await updatePageSEO(page, sub, params);

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

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const q = searchInput.value.trim();
        if (q) {
          e.preventDefault();
          trackSearch(q);
          toggleSearchModal(false);
          navigateTo(`/colleges?search=${encodeURIComponent(q)}`);
        }
      }
    });
  }

  // Intercept internal link clicks for clean SPA transitions
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a');
    if (!anchor) return;

    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || anchor.target === '_blank') return;

    const href = anchor.getAttribute('href');
    if (!href) return;

    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) {
      return;
    }

    if (href.startsWith('/')) {
      e.preventDefault();
      navigateTo(href);
    }
  });

  // Search tags & result item clicks
  document.addEventListener('click', (e) => {
    // If a search result item was clicked, close modal smoothly
    const searchItem = e.target.closest('.search-result-item');
    if (searchItem) {
      toggleSearchModal(false);
    }

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

  // Auto-close drawer on link click or resize to desktop
  drawer?.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      toggleDrawer(false);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && drawer?.classList.contains('open')) {
      toggleDrawer(false);
    }
  });

  // Chatbot Nav & Mobile triggers
  const navChatbotBtn = document.getElementById('openChatbotNavBtn');
  if (navChatbotBtn) {
    navChatbotBtn.addEventListener('click', () => {
      openChatBot();
    });
  }

  const mobileChatbotBtn = document.getElementById('openChatbotMobileBtn');
  if (mobileChatbotBtn) {
    mobileChatbotBtn.addEventListener('click', () => {
      toggleDrawer(false);
      openChatBot();
    });
  }

  // Close drawer on link click
  document.querySelectorAll('.mobile-nav-content a').forEach(link => {
    link.addEventListener('click', () => toggleDrawer(false));
  });

  // Free Counseling Navbar buttons trigger Inquiry Modal
  document.querySelectorAll('.simple-nav-cta, .btn-launch-counselor-now').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openInquiryModal();
    });
  });
}

function toggleSearchModal(show) {
  const modal = document.getElementById('searchModalBackdrop');
  const input = document.getElementById('globalSearchInput');
  if (!modal) return;
  if (show) {
    modal.classList.add('open');
    getSearchData(); // warm up search datasets
    if (input) {
      input.focus();
      handleSearchQuery(input.value || '');
    }
  } else {
    modal.classList.remove('open');
  }
}

// Start application
initApp();
