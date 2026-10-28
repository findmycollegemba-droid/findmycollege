import { COLLEGES_DATA } from '../data/collegesData.js';
import { renderCollegesCards, renderCollegeDetailModalContent, renderComparisonModalContent, renderBrochureModalContent } from './colleges.js';
import { openCollegeDetail, openBrochureModal } from '../components/collegeDetailModal.js';
import { fireConfetti } from '../utils/confettiHelper.js';
import { sendLeadToCRM } from '../utils/crm.js';
import { trackBrochureDownload } from '../utils/analytics.js';
import { openInquiryModal } from '../components/inquiryModal.js';
import { navigateTo } from '../main.js';

export function initCollegesInteractions(subId, params) {
  const typeParam = params?.get('type') || (['mba', 'pgdm'].includes(subId?.toLowerCase()) ? subId : null);
  const filterState = {
    searchQuery: params?.get('search') || params?.get('q') || '',
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
        const inName = (c.name || '').toLowerCase().includes(q) || (c.shortName || '').toLowerCase().includes(q);
        const inLoc = (c.location || '').toLowerCase().includes(q) || (c.city || '').toLowerCase().includes(q) || (c.state || '').toLowerCase().includes(q);
        const inExams = (c.examsAccepted || []).some(e => e.toLowerCase().includes(q));
        const inCourses = (c.courses || []).some(course => (course.name || '').toLowerCase().includes(q));
        const inHighlights = (c.highlights || '').toLowerCase().includes(q);
        const inOwnership = (c.ownership || '').toLowerCase().includes(q);
        return inName || inLoc || inExams || inCourses || inHighlights || inOwnership;
      });
    }

    // City filters
    if (filterState.selectedCities.length > 0) {
      list = list.filter(c => {
        return filterState.selectedCities.some(city => 
          (c.city || '').toLowerCase().includes(city.toLowerCase()) || 
          (c.location || '').toLowerCase().includes(city.toLowerCase())
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
          (c.examsAccepted || []).map(e => e.toUpperCase()).includes(exam.toUpperCase())
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
      list = list.filter(c => (c.avgSalaryNum || 0) >= 30);
    } else if (filterState.salaryRange === '20to30') {
      list = list.filter(c => (c.avgSalaryNum || 0) >= 20 && (c.avgSalaryNum || 0) < 30);
    } else if (filterState.salaryRange === 'under20') {
      list = list.filter(c => (c.avgSalaryNum || 0) < 20);
    }

    // Ownership
    if (filterState.selectedOwnership.length > 0) {
      list = list.filter(c => {
        return filterState.selectedOwnership.some(own => (c.ownership || '').toLowerCase().includes(own.toLowerCase()));
      });
    }

    // Sorting
    if (filterState.sortBy === 'nirf') {
      list.sort((a, b) => (a.nirfRank || 9999) - (b.nirfRank || 9999));
    } else if (filterState.sortBy === 'fees-asc') {
      list.sort((a, b) => (a.feeNum || 0) - (b.feeNum || 0));
    } else if (filterState.sortBy === 'fees-desc') {
      list.sort((a, b) => (b.feeNum || 0) - (a.feeNum || 0));
    } else if (filterState.sortBy === 'salary-desc') {
      list.sort((a, b) => (b.avgSalaryNum || 0) - (a.avgSalaryNum || 0));
    } else if (filterState.sortBy === 'rating-desc') {
      list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
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
        navigateTo(`/ai-chat?query=${encodeURIComponent(`Tell me about ${colName} - admissions, cutoffs, and placements`)}`);
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
        const fullName = document.getElementById('brochureFullName')?.value || '';
        const mobile = document.getElementById('brochureMobile')?.value || '';
        const email = document.getElementById('brochureEmail')?.value || '';
        const percentile = document.getElementById('brochurePercentile')?.value || '';
        const year = document.getElementById('brochureYear')?.value || '2027-29';

        // Stream inquiry to CRM
        sendLeadToCRM({
          name: fullName,
          email,
          phone: mobile,
          message: `Brochure Request for ${college?.name || 'College'} (Batch: ${year}, %ile: ${percentile || 'Not given'})`,
          form_name: `Brochure Download (${college?.shortName || college?.name || 'College'})`,
          source: `College Directory Brochure - ${college?.name || 'Card'}`,
          custom_fields: {
            collegeId: college?.id,
            collegeName: college?.name,
            targetBatch: year,
            expectedPercentile: percentile,
          },
        }).catch(() => {});

        const successMsg = document.getElementById('brochureSuccessMessage');
        if (successMsg) successMsg.style.display = 'flex';
        form.querySelector('.brochure-submit-btn').style.display = 'none';

        fireConfetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });

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
      if (colId) navigateTo(`/colleges/${colId}`);
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