import { FEATURED_COLLEGES } from '../data/featuredCollegesData.js';
import { getCollegesData } from '../data/collegesLoader.js';
import { renderFeaturedCollegesCards, renderCityInfographicModalContent } from './home.js';
import { openCollegeDetail, openBrochureModal } from '../components/collegeDetailModal.js';
import { promptCalculatorGate, getSavedCalculatorLead } from '../components/calculatorGateModal.js';
import { fireConfetti } from '../utils/confettiHelper.js';
import { navigateTo } from '../main.js';

export function initHomeInteractions() {
  // 1. Omnibox Live Search & Autocomplete
  const searchInput = document.getElementById('portalCollegeSearchInput');
  const searchClearBtn = document.getElementById('portalSearchClearBtn');
  const searchTriggerBtn = document.getElementById('portalSearchTriggerBtn');
  const suggestionsBox = document.getElementById('portalLiveSuggestionsContainer');

  const executeSearch = (query) => {
    const q = (query || searchInput?.value || '').trim();
    if (q) {
      navigateTo(`/colleges?search=${encodeURIComponent(q)}`);
    } else {
      navigateTo('/colleges');
    }
  };

  if (searchInput) {
    searchInput.addEventListener('input', async (e) => {
      const q = e.target.value.trim();
      if (searchClearBtn) {
        searchClearBtn.style.display = q ? 'block' : 'none';
      }

      if (q.length >= 2 && suggestionsBox) {
        const allCols = await getCollegesData();
        const matches = allCols.filter(c => {
          const nameMatch = (c.name || '').toLowerCase().includes(q.toLowerCase());
          const shortMatch = (c.shortName || '').toLowerCase().includes(q.toLowerCase());
          const cityMatch = (c.city || '').toLowerCase().includes(q.toLowerCase());
          const examMatch = (c.examsAccepted || []).some(ex => ex.toLowerCase().includes(q.toLowerCase()));
          return nameMatch || shortMatch || cityMatch || examMatch;
        }).slice(0, 5);

        if (matches.length > 0) {
          suggestionsBox.innerHTML = `
            <div class="suggestions-header">
              <span>Matching Colleges (${matches.length})</span>
              <span class="suggestions-hint">Press Enter to view all</span>
            </div>
            <div class="suggestions-list">
              ${matches.map(c => `
                <div class="suggestion-item" data-suggestion-id="${c.id}">
                  <div class="sugg-avatar">${c.shortName ? c.shortName.substring(0, 3) : 'MBA'}</div>
                  <div class="sugg-info">
                    <div class="sugg-title">${c.shortName || c.name}</div>
                    <div class="sugg-sub">📍 ${c.city} • Fee: ${c.fees || 'N/A'} • CTC: ${c.avgSalary || 'N/A'}</div>
                  </div>
                  ${c.nirfRank ? `<span class="sugg-badge">#${c.nirfRank} NIRF</span>` : ''}
                </div>
              `).join('')}
            </div>
          `;
          suggestionsBox.style.display = 'block';

          // Click on suggestion
          suggestionsBox.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', async () => {
              const colId = item.getAttribute('data-suggestion-id');
              const allCols = await getCollegesData();
              const college = allCols.find(c => c.id === colId);
              if (college) {
                openCollegeDetail(college);
              }
              suggestionsBox.style.display = 'none';
            });
          });
        } else {
          suggestionsBox.innerHTML = `
            <div class="suggestions-empty">
              <span>No colleges found matching "${q}".</span>
              <a href="/colleges" class="sugg-browse-all">Browse all 600+ colleges →</a>
            </div>
          `;
          suggestionsBox.style.display = 'block';
        }
      } else if (suggestionsBox) {
        suggestionsBox.style.display = 'none';
      }
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (suggestionsBox) suggestionsBox.style.display = 'none';
        executeSearch();
      }
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      searchClearBtn.style.display = 'none';
      if (suggestionsBox) suggestionsBox.style.display = 'none';
    });
  }

  if (searchTriggerBtn) {
    searchTriggerBtn.addEventListener('click', () => {
      if (suggestionsBox) suggestionsBox.style.display = 'none';
      executeSearch();
    });
  }

  // Close suggestions if clicked outside
  document.addEventListener('click', (e) => {
    if (suggestionsBox && !e.target.closest('.hero-omnibox-wrapper')) {
      suggestionsBox.style.display = 'none';
    }
  });

  // 2. Quick Search Pills in Hero
  const quickPills = document.querySelectorAll('#homeQuickPills .q-pill-btn');
  quickPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const filter = pill.getAttribute('data-filter');
      quickPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      if (filter === 'all') {
        navigateTo('/colleges');
      } else if (filter === 'mba') {
        navigateTo('/colleges/mba');
      } else if (filter === 'pgdm') {
        navigateTo('/colleges/pgdm');
      } else if (filter === 'top10') {
        navigateTo('/colleges?filter=top10');
      } else if (filter === 'roi') {
        navigateTo('/colleges?fee=under15');
      } else if (['cat', 'xat', 'cmat', 'snap'].includes(filter)) {
        navigateTo(`/colleges?exam=${filter.toUpperCase()}`);
      }
    });
  });

  // 3. City Infographics Hub
  const cityTabs = document.querySelectorAll('#cityTabsContainer .city-tab-btn');
  const cityGrid = document.getElementById('cityInfographicsGrid');

  const bindCityCardEvents = () => {
    document.querySelectorAll('[data-open-city-modal]').forEach(btn => {
      btn.addEventListener('click', () => {
        const cityId = btn.getAttribute('data-open-city-modal');
        openCityModal(cityId);
      });
    });
  };

  cityTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const cityFilter = tab.getAttribute('data-city-tab');
      cityTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      if (cityGrid) {
        cityGrid.innerHTML = renderCityInfographicCards(cityFilter);
        bindCityCardEvents();
      }
    });
  });

  bindCityCardEvents();

  // City Modal Functions
  const cityModalOverlay = document.getElementById('cityInfographicModalOverlay');
  const cityModalDialog = document.getElementById('cityInfographicModalDialog');

  function openCityModal(cityId) {
    if (!cityModalOverlay || !cityModalDialog) return;
    cityModalDialog.innerHTML = renderCityInfographicModalContent(cityId);
    cityModalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    const closeBtn = document.getElementById('closeCityModalBtn');
    const closeCancelBtn = document.getElementById('closeCityModalCancelBtn');
    if (closeBtn) closeBtn.addEventListener('click', closeCityModal);
    if (closeCancelBtn) closeCancelBtn.addEventListener('click', closeCityModal);

    const exploreBtn = document.getElementById('modalExploreCityCollegesBtn');
    if (exploreBtn) {
      exploreBtn.addEventListener('click', () => {
        closeCityModal();
      });
    }
  }

  function closeCityModal() {
    if (cityModalOverlay) cityModalOverlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  if (cityModalOverlay) {
    cityModalOverlay.addEventListener('click', (e) => {
      if (e.target.id === 'cityInfographicModalOverlay') {
        closeCityModal();
      }
    });
  }

  // 4. Featured Colleges Showcase
  const featuredTabs = document.querySelectorAll('#featuredTabsContainer .f-tab-btn');
  const featuredGrid = document.getElementById('featuredCollegesGrid');

  const bindFeaturedCollegeEvents = () => {
    document.querySelectorAll('[data-college-detail]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const colId = btn.getAttribute('data-college-detail');
        const college = FEATURED_COLLEGES.find(c => c.id === colId) || (await getCollegesData()).find(c => c.id === colId);
        if (college) openCollegeDetail(college);
      });
    });

    document.querySelectorAll('[data-brochure-id]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const colId = btn.getAttribute('data-brochure-id');
        const college = FEATURED_COLLEGES.find(c => c.id === colId) || (await getCollegesData()).find(c => c.id === colId);
        if (college) openBrochureModal(college);
      });
    });
  };

  featuredTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.getAttribute('data-featured-tab');
      featuredTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      if (featuredGrid) {
        featuredGrid.innerHTML = renderFeaturedCollegesCards(category);
        bindFeaturedCollegeEvents();
      }
    });
  });

  bindFeaturedCollegeEvents();

  // College 360° Modal Functions
  const detailOverlay = document.getElementById('portalDetailModalOverlay');
  const detailDialog = document.getElementById('portalDetailModalDialog');

  function openCollegeDetail(college, initialTab = 'overview') {
    if (!detailOverlay || !detailDialog) return;

    detailDialog.innerHTML = renderCollegeDetailModalContent(college, initialTab);
    detailOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    detailDialog.querySelectorAll('.modal-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        detailDialog.querySelectorAll('.modal-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        detailDialog.querySelectorAll('.modal-tab-pane').forEach(pane => pane.classList.remove('active'));
        const activePane = detailDialog.querySelector(`#tab-${targetTab}`);
        if (activePane) activePane.classList.add('active');
      });
    });

    const closeBtn = document.getElementById('closeDetailModalBtn');
    if (closeBtn) closeBtn.addEventListener('click', closeCollegeDetail);

    detailDialog.querySelectorAll('[data-brochure-college]').forEach(bBtn => {
      bBtn.addEventListener('click', () => {
        closeCollegeDetail();
        openBrochureModal(college);
      });
    });

    detailDialog.querySelectorAll('[data-apply-college]').forEach(aBtn => {
      aBtn.addEventListener('click', () => {
        closeCollegeDetail();
        openBrochureModal(college);
      });
    });
  }

  function closeCollegeDetail() {
    if (detailOverlay) detailOverlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  if (detailOverlay) {
    detailOverlay.addEventListener('click', (e) => {
      if (e.target.id === 'portalDetailModalOverlay') closeCollegeDetail();
    });
  }

  // Brochure Modal Functions
  const brochureOverlay = document.getElementById('portalBrochureModalOverlay');
  const brochureDialog = document.getElementById('portalBrochureModalDialog');

  function openBrochureModal(college) {
    if (!brochureOverlay || !brochureDialog) return;

    brochureDialog.innerHTML = renderBrochureModalContent(college);
    brochureOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    const closeBtn = document.getElementById('closeBrochureModalBtn');
    if (closeBtn) closeBtn.addEventListener('click', closeBrochureModal);

    const form = document.getElementById('brochureEnquiryForm') || document.getElementById('brochureForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const fullName = document.getElementById('brochureFullName')?.value || '';
        const mobile = document.getElementById('brochureMobile')?.value || '';
        const email = document.getElementById('brochureEmail')?.value || '';
        const percentile = document.getElementById('brochurePercentile')?.value || '';
        const year = document.getElementById('brochureYear')?.value || '2027-29';

        // Send to CRM in real time
        sendLeadToCRM({
          name: fullName,
          email,
          phone: mobile,
          message: `Featured Brochure Request for ${college?.name || 'College'} (Batch: ${year}, %ile: ${percentile || 'N/A'})`,
          form_name: `Featured College Brochure (${college?.shortName || college?.name || 'MBA'})`,
          source: `Homepage Featured Brochure - ${college?.name || 'Card'}`,
          custom_fields: {
            collegeId: college?.id,
            collegeName: college?.name,
            targetBatch: year,
            expectedPercentile: percentile,
          },
        }).catch(() => {});

        fireConfetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
        const container = document.getElementById('brochureFormContainer');
        if (container) {
          container.innerHTML = `
            <div class="brochure-success-state">
              <div class="success-icon">🎉</div>
              <h3>Official 2027-29 Brochure Dispatched!</h3>
              <p>We've sent the complete fee breakdown, syllabus, and placement audited report of <strong>${college.shortName || college.name}</strong> to your email.</p>
              <button class="btn-primary-pill" id="closeSuccessBrochureBtn">Done</button>
            </div>
          `;
          document.getElementById('closeSuccessBrochureBtn')?.addEventListener('click', closeBrochureModal);
        }
      });
    }
  }

  function closeBrochureModal() {
    if (brochureOverlay) brochureOverlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  if (brochureOverlay) {
    brochureOverlay.addEventListener('click', (e) => {
      if (e.target.id === 'portalBrochureModalOverlay') closeBrochureModal();
    });
  }

  // 5. Percentile Matcher Evaluator
  const percInput = document.getElementById('homePercentileInput');
  const examSelect = document.getElementById('homeExamSelect');
  const matchBtn = document.getElementById('homeRunMatchBtn');
  const previewBox = document.getElementById('homeMatcherResultsBox');

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
        <div class="call-result-item dream">
          <span class="call-badge">🏆 Dream Calls (${exam} ${p}%ile):</span>
          <strong>${dreamCalls.join(', ')}</strong>
        </div>
        <div class="call-result-item strong">
          <span class="call-badge">💎 High Probability Converts:</span>
          <strong>${highCalls.join(', ')}</strong>
        </div>
      `;
    }
  };

  if (matchBtn) {
    matchBtn.addEventListener('click', () => {
      promptCalculatorGate({
        exam: examSelect?.value || 'CAT',
        getResult: () => {
          const p = parseFloat(percInput?.value || 98.5);
          return {
            exam: examSelect?.value || 'CAT',
            score: Math.round(p * 1.5),
            totalRaw: Math.round(p * 1.5),
            scaledScore: Math.round(p * 1.5),
            percentile: p,
            effectivePercentile: p,
            category: 'GEN',
            collegeCalls: [
              { name: p >= 99 ? 'IIM Ahmedabad / Bangalore' : p >= 95 ? 'SPJIMR / MDI' : 'Tier 2 Colleges' }
            ]
          };
        },
        onUnlocked: () => {
          runMatch();
          try {
            fireConfetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
          } catch (e) {}
        }
      });
    });
  }
  if (percInput) percInput.addEventListener('input', () => {
    if (getSavedCalculatorLead()) runMatch();
  });
  if (examSelect) examSelect.addEventListener('change', () => {
    if (getSavedCalculatorLead()) runMatch();
  });

  // 6. Live Countdown Clocks Tickers
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
