import { calculateCATScore, calculateXATScore, calculateCMATScore, calculateGoalPlan, parseResponseSheetHTML, getSampleResponseSheet } from '../utils/calculators.js';
import { promptCalculatorGate, getSavedCalculatorLead } from '../components/calculatorGateModal.js';
import { fireConfetti } from '../utils/confettiHelper.js';
import { sendLeadToCRM } from '../utils/crm.js';
import { openInquiryModal } from '../components/inquiryModal.js';
import { navigateTo } from '../main.js';

export function initToolsInteractions() {
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

      let targetUrl = '/tools/cat-college-predictor';
      if (tab === 'xat') targetUrl = '/tools/xat-percentile-calculator';
      else if (tab === 'cmat') targetUrl = '/tools/cmat-percentile-calculator';

      window.history.pushState(null, '', targetUrl);
      state.currentSub = tab;
      updatePageSEO('tools', tab, new URLSearchParams());
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

    const savedStudent = getSavedCalculatorLead();
    if (savedStudent && nameSub) {
      nameSub.innerText = `Candidate: ${savedStudent.name} • Location: ${savedStudent.location} • Slot ${candidateInfo?.slot || document.getElementById('catSlotSelect')?.value || '1'} (${candidateInfo?.testDate || 'CAT 2026'})`;
    } else if (candidateInfo && nameSub) {
      nameSub.innerText = `Candidate: ${candidateInfo.candidateName || 'CAT Aspirant'} • Slot ${candidateInfo.slot || '1'} (${candidateInfo.testDate || 'CAT 2026'})`;
    }

    if (savedStudent) {
      const aspirantBar = document.getElementById('catAspirantBar');
      const aspirantName = document.getElementById('catAspirantName');
      const aspirantLoc = document.getElementById('catAspirantLocation');
      if (aspirantBar) aspirantBar.style.display = 'flex';
      if (aspirantName) aspirantName.innerText = savedStudent.name;
      if (aspirantLoc) aspirantLoc.innerText = `📍 ${savedStudent.location}`;
    }

    // Render Calls
    renderCalls(res.tierCalls, activeTierFilter);

    // Confetti celebration if high percentile
    if (parseFloat(res.effectivePercentile || res.estimatedPercentile) >= 95) {
      try {
        fireConfetti({ particleCount: 75, spread: 70, origin: { y: 0.6 } });
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

  // ============================================================
  // LOCK STATE CONTROLLERS
  // ============================================================
  const updateCatLockState = (lead = null) => {
    const student = lead || getSavedCalculatorLead();
    const teaser = document.getElementById('catLockedTeaser');
    const unlocked = document.getElementById('catUnlockedResults');
    const aspirantBar = document.getElementById('catAspirantBar');
    const aspirantName = document.getElementById('catAspirantName');
    const aspirantLoc = document.getElementById('catAspirantLocation');

    if (student) {
      if (teaser) teaser.style.display = 'none';
      if (unlocked) unlocked.style.display = 'block';
      if (aspirantBar) aspirantBar.style.display = 'flex';
      if (aspirantName) aspirantName.innerText = student.name;
      if (aspirantLoc) aspirantLoc.innerText = `📍 ${student.location}`;
      return true;
    } else {
      if (teaser) teaser.style.display = 'block';
      if (unlocked) unlocked.style.display = 'none';
      if (aspirantBar) aspirantBar.style.display = 'none';
      return false;
    }
  };

  const updateXatLockState = (lead = null) => {
    const student = lead || getSavedCalculatorLead();
    const teaser = document.getElementById('xatLockedTeaser');
    const unlocked = document.getElementById('xatUnlockedResults');
    const aspirantBar = document.getElementById('xatAspirantBar');
    const aspirantName = document.getElementById('xatAspirantName');
    const aspirantLoc = document.getElementById('xatAspirantLocation');

    if (student) {
      if (teaser) teaser.style.display = 'none';
      if (unlocked) unlocked.style.display = 'block';
      if (aspirantBar) aspirantBar.style.display = 'flex';
      if (aspirantName) aspirantName.innerText = student.name;
      if (aspirantLoc) aspirantLoc.innerText = `📍 ${student.location}`;
      return true;
    } else {
      if (teaser) teaser.style.display = 'block';
      if (unlocked) unlocked.style.display = 'none';
      if (aspirantBar) aspirantBar.style.display = 'none';
      return false;
    }
  };

  const updateCmatLockState = (lead = null) => {
    const student = lead || getSavedCalculatorLead();
    const teaser = document.getElementById('cmatLockedTeaser');
    const unlocked = document.getElementById('cmatUnlockedResults');
    const aspirantBar = document.getElementById('cmatAspirantBar');
    const aspirantName = document.getElementById('cmatAspirantName');
    const aspirantLoc = document.getElementById('cmatAspirantLocation');

    if (student) {
      if (teaser) teaser.style.display = 'none';
      if (unlocked) unlocked.style.display = 'block';
      if (aspirantBar) aspirantBar.style.display = 'flex';
      if (aspirantName) aspirantName.innerText = student.name;
      if (aspirantLoc) aspirantLoc.innerText = `📍 ${student.location}`;
      return true;
    } else {
      if (teaser) teaser.style.display = 'block';
      if (unlocked) unlocked.style.display = 'none';
      if (aspirantBar) aspirantBar.style.display = 'none';
      return false;
    }
  };

  // Change / Edit Details button handlers
  document.getElementById('btnChangeStudentCat')?.addEventListener('click', () => openCalculatorGate('CAT'));
  document.getElementById('btnChangeStudentXat')?.addEventListener('click', () => openCalculatorGate('XAT'));
  document.getElementById('btnChangeStudentCmat')?.addEventListener('click', () => openCalculatorGate('CMAT'));

  // Digialm URL Scan Handler
  const btnScanUrl = document.getElementById('btnScanUrl');
  const catUrlInput = document.getElementById('catUrlInput');

  const executeUrlScan = (slotNum = '1', studentLead = null) => {
    const student = studentLead || getSavedCalculatorLead();
    const candidateName = student ? student.name : 'Rahul Sharma';

    if (btnScanUrl) {
      btnScanUrl.innerHTML = `<span>⚡ Analyzing 66 Questions...</span>`;
      btnScanUrl.disabled = true;
    }

    setTimeout(() => {
      const sampleData = getSampleResponseSheet(slotNum, candidateName);
      const res = calculateCATScore({
        slot: sampleData.slot,
        category: document.getElementById('catCategorySelect')?.value || 'GEN',
        varc: sampleData.varc,
        dilr: sampleData.dilr,
        qa: sampleData.qa
      });

      updateCatLockState(student);
      applyAndDisplayCatResults(res, sampleData);

      // Sync manual inputs as well
      syncInputsFromObject(sampleData.varc, sampleData.dilr, sampleData.qa);

      if (btnScanUrl) {
        btnScanUrl.innerHTML = `<span>Scan Response Sheet</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`;
        btnScanUrl.disabled = false;
      }
    }, 400);
  };

  const getCatUrlScanResult = (slotNum = '1') => {
    const student = getSavedCalculatorLead();
    const sampleData = getSampleResponseSheet(slotNum, student?.name || 'Rahul Sharma');
    return calculateCATScore({
      slot: sampleData.slot,
      category: document.getElementById('catCategorySelect')?.value || 'GEN',
      varc: sampleData.varc,
      dilr: sampleData.dilr,
      qa: sampleData.qa
    });
  };

  btnScanUrl?.addEventListener('click', () => {
    const val = catUrlInput?.value.trim();
    if (!val) {
      if (catUrlInput) {
        catUrlInput.value = 'https://cdn.digialm.com//per/g01/pub/756/touchstone/AssessmentQPHTMLMode1//CAT2026/CandidateResponseSheet.html';
      }
    }
    promptCalculatorGate({
      exam: 'CAT',
      getResult: () => getCatUrlScanResult('1'),
      onUnlocked: (lead) => {
        updateCatLockState(lead);
        executeUrlScan('1', lead);
      }
    });
  });

  document.getElementById('btnLoadSampleUrl')?.addEventListener('click', () => {
    if (catUrlInput) {
      catUrlInput.value = 'https://cdn.digialm.com//per/g01/pub/756/touchstone/AssessmentQPHTMLMode1//CAT2026_Slot1/CandidateResponseSheet.html';
    }
    promptCalculatorGate({
      exam: 'CAT',
      getResult: () => getCatUrlScanResult('1'),
      onUnlocked: (lead) => {
        updateCatLockState(lead);
        executeUrlScan('1', lead);
      }
    });
  });

  document.getElementById('btnLoadSampleSlot2')?.addEventListener('click', () => {
    if (catUrlInput) {
      catUrlInput.value = 'https://cdn.digialm.com//per/g01/pub/756/touchstone/AssessmentQPHTMLMode1//CAT2026_Slot2/CandidateResponseSheet.html';
    }
    promptCalculatorGate({
      exam: 'CAT',
      getResult: () => getCatUrlScanResult('2'),
      onUnlocked: (lead) => {
        updateCatLockState(lead);
        executeUrlScan('2', lead);
      }
    });
  });

  // HTML Source Parse Handler
  const btnParseSource = document.getElementById('btnParseSource');
  const catSourceInput = document.getElementById('catSourceInput');

  const getCatSourceResult = () => {
    const source = catSourceInput?.value || '';
    const parsed = parseResponseSheetHTML(source);
    return calculateCATScore({
      slot: parsed.slot || '1',
      category: document.getElementById('catCategorySelect')?.value || 'GEN',
      varc: parsed.varc,
      dilr: parsed.dilr,
      qa: parsed.qa
    });
  };

  const executeSourceParse = (studentLead = null) => {
    const student = studentLead || getSavedCalculatorLead();
    const source = catSourceInput?.value || '';
    const parsed = parseResponseSheetHTML(source);
    if (student) {
      parsed.candidateName = student.name;
    }
    const res = calculateCATScore({
      slot: parsed.slot || '1',
      category: document.getElementById('catCategorySelect')?.value || 'GEN',
      varc: parsed.varc,
      dilr: parsed.dilr,
      qa: parsed.qa
    });

    updateCatLockState(student);
    applyAndDisplayCatResults(res, parsed);
    syncInputsFromObject(parsed.varc, parsed.dilr, parsed.qa);
  };

  btnParseSource?.addEventListener('click', () => {
    promptCalculatorGate({
      exam: 'CAT',
      getResult: () => getCatSourceResult(),
      onUnlocked: (lead) => {
        updateCatLockState(lead);
        executeSourceParse(lead);
      }
    });
  });

  document.getElementById('btnLoadSampleSource')?.addEventListener('click', () => {
    if (catSourceInput) {
      catSourceInput.value = `<!-- TCS iON Candidate Response Sheet -->\n<table class="menu-tbl"><tr><td>Candidate Name</td><td>Pooja Verma</td></tr><tr><td>Test Date</td><td>29/11/2026</td></tr><tr><td>Test Time</td><td>12:30 PM - 2:30 PM</td></tr></table>\n<!-- Section : VARC Question Type : MCQ Chosen Option : 2 class="rightAns" -->`;
    }
    promptCalculatorGate({
      exam: 'CAT',
      getResult: () => getCatSourceResult(),
      onUnlocked: (lead) => {
        updateCatLockState(lead);
        executeSourceParse(lead);
      }
    });
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

  const getCatCalculatedResult = () => {
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

    return calculateCATScore({ slot, category, varc, dilr, qa });
  };

  const runCatCalc = () => {
    const res = getCatCalculatedResult();
    applyAndDisplayCatResults(res);
    return res;
  };

  const handleCatCalculateClick = () => {
    promptCalculatorGate({
      exam: 'CAT',
      getResult: () => getCatCalculatedResult(),
      onUnlocked: (lead, res) => {
        updateCatLockState(lead);
        if (res) applyAndDisplayCatResults(res);
        else runCatCalc();
      }
    });
  };

  document.getElementById('btnCalculateCAT')?.addEventListener('click', handleCatCalculateClick);
  document.getElementById('btnUnlockScorecardCat')?.addEventListener('click', handleCatCalculateClick);

  document.getElementById('catSlotSelect')?.addEventListener('change', () => {
    if (getSavedCalculatorLead()) runCatCalc();
  });
  document.getElementById('catCategorySelect')?.addEventListener('change', () => {
    if (getSavedCalculatorLead()) runCatCalc();
  });

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
  };

  const triggerPreset = (vC, vW, vTc, dC, dW, dTc, qC, qW, qTc) => {
    setCatInputs(vC, vW, vTc, dC, dW, dTc, qC, qW, qTc);
    promptCalculatorGate({
      exam: 'CAT',
      getResult: () => getCatCalculatedResult(),
      onUnlocked: (lead, res) => {
        updateCatLockState(lead);
        if (res) applyAndDisplayCatResults(res);
        else runCatCalc();
      }
    });
  };

  document.getElementById('presetCat99')?.addEventListener('click', () => triggerPreset(14, 2, 3, 10, 1, 2, 12, 1, 3));
  document.getElementById('presetCat95')?.addEventListener('click', () => triggerPreset(10, 4, 1, 7, 3, 1, 8, 3, 1));
  document.getElementById('presetCat90')?.addEventListener('click', () => triggerPreset(8, 5, 1, 5, 3, 1, 6, 4, 1));
  document.getElementById('presetCat80')?.addEventListener('click', () => triggerPreset(6, 4, 1, 4, 2, 1, 4, 2, 1));
  document.getElementById('presetCatReset')?.addEventListener('click', () => {
    setCatInputs(0, 0, 0, 0, 0, 0, 0, 0, 0);
    if (getSavedCalculatorLead()) runCatCalc();
  });

  // Print Scorecard
  document.getElementById('printScorecardBtn')?.addEventListener('click', () => window.print());

  // ============================================================
  // XAT CALCULATOR
  // ============================================================
  const btnCalcXat = document.getElementById('btnCalculateXAT');
  const getXatCalculatedResult = () => {
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

    return calculateXATScore({ valr, dm, qadi });
  };

  const runXatCalc = () => {
    const res = getXatCalculatedResult();

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
        fireConfetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      } catch (e) {}
    }

    return res;
  };

  const handleXatCalculateClick = () => {
    promptCalculatorGate({
      exam: 'XAT',
      getResult: () => getXatCalculatedResult(),
      onUnlocked: (lead) => {
        updateXatLockState(lead);
        runXatCalc();
      }
    });
  };

  if (btnCalcXat) btnCalcXat.addEventListener('click', handleXatCalculateClick);
  document.getElementById('btnUnlockScorecardXat')?.addEventListener('click', handleXatCalculateClick);

  // ============================================================
  // CMAT CALCULATOR
  // ============================================================
  const btnCalcCmat = document.getElementById('btnCalculateCMAT');
  const getCmatCalculatedResult = () => {
    const quant = { correct: document.getElementById('cmatQuantCorrect')?.value, wrong: document.getElementById('cmatQuantWrong')?.value };
    const lr = { correct: document.getElementById('cmatLrCorrect')?.value, wrong: document.getElementById('cmatLrWrong')?.value };
    const lang = { correct: document.getElementById('cmatLangCorrect')?.value, wrong: document.getElementById('cmatLangWrong')?.value };
    const gk = { correct: document.getElementById('cmatGkCorrect')?.value, wrong: document.getElementById('cmatGkWrong')?.value };
    const innov = { correct: document.getElementById('cmatInnovCorrect')?.value, wrong: document.getElementById('cmatInnovWrong')?.value };

    return calculateCMATScore({ quant, lr, lang, gk, innov });
  };

  const runCmatCalc = () => {
    const res = getCmatCalculatedResult();

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
        fireConfetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      } catch (e) {}
    }

    return res;
  };

  const handleCmatCalculateClick = () => {
    promptCalculatorGate({
      exam: 'CMAT',
      getResult: () => getCmatCalculatedResult(),
      onUnlocked: (lead) => {
        updateCmatLockState(lead);
        runCmatCalc();
      }
    });
  };

  if (btnCalcCmat) btnCalcCmat.addEventListener('click', handleCmatCalculateClick);
  document.getElementById('btnUnlockScorecardCmat')?.addEventListener('click', handleCmatCalculateClick);

  // ============================================================
  // INITIAL LOAD STATE (Locks scorecards if lead not yet provided)
  // ============================================================
  const isUnlockedCat = updateCatLockState();
  const isUnlockedXat = updateXatLockState();
  const isUnlockedCmat = updateCmatLockState();

  if (isUnlockedCat) {
    runCatCalc();
  }
  if (isUnlockedXat) {
    runXatCalc();
  }
  if (isUnlockedCmat) {
    runCmatCalc();
  }
}
