/**
 * Free Mock Test Page & Real CBT (Computer-Based Test) Exam Engine
 * Provides authentic simulated test environments for:
 * 1. CAT 2026 Free Mock Test
 * 2. XAT 2027 Free Mock Test
 * 3. NMAT Free Mock Test
 * 4. SNAP Free Mock Test
 * 5. CMAT Free Mock Test
 * 6. MAT Free Mock Test
 * 
 * Includes pre-test registration gate, real-time timer, TCS iON question palette,
 * on-screen calculator, post-test lead verification, and CRM sync.
 */

import { MOCK_TESTS, getMockTestById, getAllQuestionsForTest, estimatePercentile } from '../data/mockTestsData.js';
import { sendLeadToCRM } from '../utils/crm.js';
import { fireConfetti } from '../utils/confettiHelper.js';

// State management for current exam session
let currentExamState = {
  exam: null,
  mode: 'full', // 'full' or 'quick'
  questions: [],
  currentIndex: 0,
  currentSectionId: null,
  answers: {}, // questionId -> selectedOptionId ('A', 'B', etc.)
  status: {}, // questionId -> 'not_visited' | 'not_answered' | 'answered' | 'marked' | 'marked_answered'
  timeRemainingSeconds: 0,
  timerInterval: null,
  candidate: {
    name: '',
    phone: '',
    email: '',
    location: '',
    targetCollege: ''
  },
  testStartedAt: null,
  testSubmittedAt: null,
  isSubmitted: false,
  scoreData: null,
  isCalculatorOpen: false,
  isPaperModalOpen: false,
  isInstructionsModalOpen: false,
  solutionFilter: 'all' // 'all', 'correct', 'incorrect', 'unattempted'
};

/**
 * Main render function for Free Mock Test page
 */
export function renderMockTestPage(subRoute = null) {
  // If subRoute corresponds to an exam id (e.g. 'cat-2026'), pre-select it
  const selectedTest = subRoute ? getMockTestById(subRoute) : null;

  return `
    <div class="mock-test-page" id="mockTestApp">
      ${selectedTest ? renderMockTestDetailHeader(selectedTest) : renderMockTestHub()}
    </div>

    <!-- Pre-Test Lead Registration Gate Modal -->
    <div class="mock-modal-overlay" id="preTestModalOverlay" style="display: none;">
      <div class="mock-modal-dialog" id="preTestModalDialog">
        <!-- Injected dynamically -->
      </div>
    </div>

    <!-- Real CBT Exam Fullscreen Container -->
    <div class="cbt-exam-fullscreen" id="cbtExamFullscreen" style="display: none;">
      <!-- Injected dynamically by startExamSession() -->
    </div>

    <!-- Post-Test Lead Verification & Score Reveal Modal -->
    <div class="mock-modal-overlay" id="postTestModalOverlay" style="display: none;">
      <div class="mock-modal-dialog" id="postTestModalDialog">
        <!-- Injected dynamically -->
      </div>
    </div>

    <!-- On-Screen CAT Scientific Calculator Floating Modal -->
    <div class="cat-calc-modal" id="catCalcModal" style="display: none;">
      <div class="cat-calc-header">
        <div class="cat-calc-title">
          <span>🧮 CAT On-Screen Calculator</span>
        </div>
        <button type="button" class="cat-calc-close-btn" id="closeCalcBtn">&times;</button>
      </div>
      <div class="cat-calc-body">
        <div class="cat-calc-screen" id="catCalcDisplay">0</div>
        <div class="cat-calc-keypad">
          <button type="button" class="calc-btn func" data-calc="clear">C</button>
          <button type="button" class="calc-btn func" data-calc="back">⌫</button>
          <button type="button" class="calc-btn func" data-calc="sqrt">√</button>
          <button type="button" class="calc-btn op" data-calc="/">÷</button>

          <button type="button" class="calc-btn func" data-calc="log">log</button>
          <button type="button" class="calc-btn func" data-calc="ln">ln</button>
          <button type="button" class="calc-btn func" data-calc="pow">xʸ</button>
          <button type="button" class="calc-btn op" data-calc="*">×</button>

          <button type="button" class="calc-btn num" data-calc="7">7</button>
          <button type="button" class="calc-btn num" data-calc="8">8</button>
          <button type="button" class="calc-btn num" data-calc="9">9</button>
          <button type="button" class="calc-btn op" data-calc="-">−</button>

          <button type="button" class="calc-btn num" data-calc="4">4</button>
          <button type="button" class="calc-btn num" data-calc="5">5</button>
          <button type="button" class="calc-btn num" data-calc="6">6</button>
          <button type="button" class="calc-btn op" data-calc="+">+</button>

          <button type="button" class="calc-btn num" data-calc="1">1</button>
          <button type="button" class="calc-btn num" data-calc="2">2</button>
          <button type="button" class="calc-btn num" data-calc="3">3</button>
          <button type="button" class="calc-btn equal" data-calc="=">=</button>

          <button type="button" class="calc-btn num wide" data-calc="0">0</button>
          <button type="button" class="calc-btn num" data-calc=".">.</button>
          <button type="button" class="calc-btn func" data-calc="pi">π</button>
        </div>
      </div>
    </div>
  `;
}

/**
 * Hub view showing all 6 Mock Tests
 */
function renderMockTestHub() {
  return `
    <div class="mock-hub-container">
      <!-- Hero Section -->
      <section class="mock-hero-section">
        <div class="mock-hero-badge">
          <span class="pulse-indicator"></span>
          <span>Official 2026-2027 Pattern Mock Series</span>
        </div>
        <h1 class="mock-hero-title">
          All-India Free MBA <span class="gradient-text">Mock Tests</span>
        </h1>
        <p class="mock-hero-subtitle">
          Experience authentic Computer-Based Test (CBT) interfaces for CAT 2026, XAT 2027, NMAT, SNAP, CMAT, and MAT. Complete timed sections, negative marking simulator, and instant All-India Percentile analysis.
        </p>

        <!-- Live Trust Metrics -->
        <div class="mock-stats-ribbon">
          <div class="stat-pill">
            <span class="stat-num">18,400+</span>
            <span class="stat-label">Aspirants Appeared</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-pill">
            <span class="stat-num">99.4%</span>
            <span class="stat-label">Predicted Call Accuracy</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-pill">
            <span class="stat-num">TCS iON</span>
            <span class="stat-label">Real Test Environment</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-pill">
            <span class="stat-num">100% Free</span>
            <span class="stat-label">With Detailed Solutions</span>
          </div>
        </div>

        <div class="mock-hero-actions" style="margin-top: 24px; display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
          <button type="button" class="btn-start-mock large" data-exam-id="cat-2026">
            <span>Launch CAT 2026 Free Mock Test</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
          </button>
          <a href="#mockTestsGrid" class="btn-outline-hero" style="display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; border-radius: 9999px; border: 1.5px solid #cbd5e1; font-weight: 700; color: #1e293b; text-decoration: none; background: #ffffff;">
            <span>Explore All 6 Mock Tests</span>
            <span style="font-size: 1.1rem;">↓</span>
          </a>
        </div>
      </section>

      <!-- Grid of 6 Mock Tests -->
      <section class="mock-tests-grid-section" id="mockTestsGrid">
        <div class="section-header-compact">
          <h2 class="section-title-sm">Select Your Target MBA Mock Test</h2>
          <span class="section-subtitle-sm">Choose an exam below to begin simulated computer-based practice</span>
        </div>

        <div class="mock-tests-cards-grid">
          ${MOCK_TESTS.map(test => renderExamCard(test)).join('')}
        </div>
      </section>

      <!-- Why Real Mock Test Section -->
      <section class="mock-features-section">
        <div class="features-header text-center">
          <span class="f-eyebrow">Real Exam CBT Engine</span>
          <h3 class="f-title">Why Attempt FindMyBSchool Free Mock Tests?</h3>
        </div>

        <div class="mock-features-grid">
          <div class="m-feature-card">
            <div class="m-feat-icon">🖥️</div>
            <h4>Exact TCS iON CBT Layout</h4>
            <p>Familiarize yourself with the identical question palette, section navigation, and timer used in actual CAT & XAT centres.</p>
          </div>
          <div class="m-feature-card">
            <div class="m-feat-icon">⏱️</div>
            <h4>Real Timed Sectional Engine</h4>
            <p>Strict section timers prevent early hopping where required, training your cognitive stamina under true pressure.</p>
          </div>
          <div class="m-feature-card">
            <div class="m-feat-icon">🧮</div>
            <h4>On-Screen Scientific Calculator</h4>
            <p>Practice with the built-in virtual keypad identical to the CAT examination screen so you don't lose precious seconds.</p>
          </div>
          <div class="m-feature-card">
            <div class="m-feat-icon">🎯</div>
            <h4>Percentile & Call Predictor</h4>
            <p>Get instant projected All-India percentiles and verified call eligibility for IIMs, XLRI, NMIMS, SIBM, and JBIMS.</p>
          </div>
          <div class="m-feature-card">
            <div class="m-feat-icon">💡</div>
            <h4>Step-by-Step Solutions</h4>
            <p>In-depth explanations with alternative short-cut methods and verbal rationale for every single question.</p>
          </div>
          <div class="m-feature-card">
            <div class="m-feat-icon">👨‍🏫</div>
            <h4>1-on-1 Mentor Strategy</h4>
            <p>Top 99%ile mentors review your scorecard to identify accuracy gaps, time traps, and target cutoff strategies.</p>
          </div>
        </div>
      </section>
    </div>
  `;
}

/**
 * Renders individual exam card in the hub
 */
function renderExamCard(test) {
  const qCount = test.totalQuestions;
  const sectionsList = test.sections.map(s => s.name).join(' • ');

  return `
    <div class="mock-exam-card" data-exam-id="${test.id}">
      <div class="mock-card-top">
        <div class="card-badge-row">
          <span class="exam-badge-pill">${test.badge}</span>
          <span class="free-badge">FREE</span>
        </div>
        <h3 class="exam-card-title">${test.shortTitle} Mock Test</h3>
        <p class="exam-card-desc">${test.tagline}</p>
      </div>

      <div class="mock-card-meta">
        <div class="meta-item">
          <span class="meta-label">Sections</span>
          <span class="meta-val">${sectionsList}</span>
        </div>
        <div class="meta-row-duo">
          <div class="meta-item">
            <span class="meta-label">Total Questions</span>
            <span class="meta-val">${qCount} Questions</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Duration</span>
            <span class="meta-val">${test.fullDurationMinutes} Mins</span>
          </div>
        </div>
        <div class="meta-item">
          <span class="meta-label">Marking Scheme</span>
          <span class="meta-val scheme-val">${test.markingScheme.description}</span>
        </div>
      </div>

      <div class="mock-card-actions">
        <button type="button" class="btn-start-mock" data-exam-id="${test.id}">
          <span>Start Free Mock Test</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  `;
}

/**
 * Single exam detail landing header if navigated via /mock-test/:slug
 */
function renderMockTestDetailHeader(test) {
  return `
    <div class="mock-hub-container single-exam-view">
      <div class="mock-breadcrumb">
        <a href="/mock-test" class="back-link">← All Free Mock Tests</a>
      </div>

      <div class="single-exam-hero">
        <div class="card-badge-row mb-2">
          <span class="exam-badge-pill">${test.badge}</span>
          <span class="free-badge">100% Free Live CBT</span>
        </div>
        <h1 class="mock-hero-title">${test.title}</h1>
        <p class="mock-hero-subtitle">${test.tagline}</p>

        <div class="single-exam-specs-card">
          <div class="spec-col">
            <span class="spec-label">Exam Duration</span>
            <strong class="spec-val">${test.fullDurationMinutes} Minutes</strong>
          </div>
          <div class="spec-col">
            <span class="spec-label">Questions</span>
            <strong class="spec-val">${test.totalQuestions} Questions</strong>
          </div>
          <div class="spec-col">
            <span class="spec-label">Sections</span>
            <strong class="spec-val">${test.sections.length} Sections</strong>
          </div>
          <div class="spec-col">
            <span class="spec-label">Marking</span>
            <strong class="spec-val">${test.markingScheme.correct} / ${test.markingScheme.incorrect}</strong>
          </div>
        </div>

        <div class="mt-4">
          <button type="button" class="btn-start-mock large" data-exam-id="${test.id}">
            <span>Enter Candidate Details & Start Test</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      <div class="mt-8">
        <h3 class="section-title-sm">Other Popular MBA Mock Tests</h3>
        <div class="mock-tests-cards-grid mt-4">
          ${MOCK_TESTS.filter(t => t.id !== test.id).slice(0, 3).map(t => renderExamCard(t)).join('')}
        </div>
      </div>
    </div>
  `;
}

/**
 * Initializes all event handlers for the Free Mock Test page
 */
export function initMockTestEvents() {
  const appEl = document.getElementById('mockTestApp');
  if (!appEl) return;

  // Handle click on "Start Free Mock Test" buttons using robust event delegation
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-start-mock');
    if (!btn) return;
    const examId = btn.getAttribute('data-exam-id');
    const test = getMockTestById(examId);
    if (test) {
      openPreTestModal(test);
    }
  });

  // Setup On-Screen Calculator events
  initCalculatorLogic();
}

/**
 * Opens Pre-Test Lead Registration Modal
 */
function openPreTestModal(test) {
  const overlay = document.getElementById('preTestModalOverlay');
  const dialog = document.getElementById('preTestModalDialog');
  if (!overlay || !dialog) return;

  // Check if candidate details already saved in localStorage
  let savedCandidate = {};
  try {
    savedCandidate = JSON.parse(localStorage.getItem('fmc_mock_candidate') || '{}');
  } catch (e) {}

  dialog.innerHTML = `
    <div class="mock-modal-header">
      <div>
        <span class="m-eyebrow">Candidate Verification & Roll Gate</span>
        <h3 class="m-modal-title">Enter Details to Launch ${test.shortTitle}</h3>
      </div>
      <button type="button" class="m-close-btn" id="closePreTestModalBtn">&times;</button>
    </div>

    <form class="mock-modal-form" id="preTestForm">
      <div class="alert-info-box">
        <div class="icon">ℹ️</div>
        <div class="txt">
          Your credentials generate an official simulated examination roll number. Upon submission, your verified score and step-by-step solutions will be unlocked.
        </div>
      </div>

      <div class="m-form-group">
        <label for="candName">Candidate Full Name <span class="req">*</span></label>
        <input 
          type="text" 
          id="candName" 
          name="name" 
          required 
          placeholder="e.g. Rahul Sharma"
          value="${savedCandidate.name || ''}"
        />
      </div>

      <div class="m-form-row">
        <div class="m-form-group">
          <label for="candPhone">WhatsApp / Mobile Number <span class="req">*</span></label>
          <div class="phone-input-wrap">
            <span class="phone-prefix">+91</span>
            <input 
              type="tel" 
              id="candPhone" 
              name="phone" 
              required 
              maxlength="10"
              pattern="[6-9][0-9]{9}" 
              placeholder="9876543210"
              value="${savedCandidate.phone || ''}"
            />
          </div>
        </div>

        <div class="m-form-group">
          <label for="candEmail">Email Address <span class="req">*</span></label>
          <input 
            type="email" 
            id="candEmail" 
            name="email" 
            required 
            placeholder="rahul.sharma@gmail.com"
            value="${savedCandidate.email || ''}"
          />
        </div>
      </div>

      <div class="m-form-row">
        <div class="m-form-group">
          <label for="candLocation">Your City / Location <span class="req">*</span></label>
          <input 
            type="text" 
            id="candLocation" 
            name="location" 
            required 
            placeholder="e.g. Delhi NCR, Mumbai, Bengaluru"
            value="${savedCandidate.location || ''}"
          />
        </div>

        <div class="m-form-group">
          <label for="candCollege">Target B-School</label>
          <input 
            type="text" 
            id="candCollege" 
            name="targetCollege" 
            placeholder="e.g. IIM Ahmedabad, XLRI, NMIMS"
            value="${savedCandidate.targetCollege || ''}"
          />
        </div>
      </div>

      <div class="m-form-group test-mode-selector">
        <label class="block mb-2 font-bold text-sm">Select Test Experience Mode:</label>
        <div class="mode-options-row">
          <label class="mode-card active">
            <input type="radio" name="examMode" value="full" checked />
            <div class="mode-info">
              <span class="mode-name">Full Official CBT Simulation</span>
              <span class="mode-detail">${test.fullDurationMinutes} Mins • True Exam Conditions</span>
            </div>
          </label>
          <label class="mode-card">
            <input type="radio" name="examMode" value="quick" />
            <div class="mode-info">
              <span class="mode-name">Express Practice Mode</span>
              <span class="mode-detail">${test.quickDurationMinutes} Mins • Quick Section Assessment</span>
            </div>
          </label>
        </div>
      </div>

      <div class="m-form-actions">
        <button type="submit" class="btn-launch-test" id="launchExamBtn">
          <span>Verify & Start Examination</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>

      <div class="m-privacy-note">
        🔒 Confidential. Details are automatically synced with Admissions Desk for All-India Percentile ranking.
      </div>
    </form>
  `;

  overlay.style.display = 'flex';

  // Modal Close
  document.getElementById('closePreTestModalBtn')?.addEventListener('click', () => {
    overlay.style.display = 'none';
  });

  // Mode radio toggle highlight
  const modeCards = dialog.querySelectorAll('.mode-card');
  dialog.querySelectorAll('input[name="examMode"]').forEach(radio => {
    radio.addEventListener('change', () => {
      modeCards.forEach(c => c.classList.remove('active'));
      radio.closest('.mode-card')?.classList.add('active');
    });
  });

  // Handle Form Submission -> Dispatch Lead to CRM & Start CBT
  document.getElementById('preTestForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('candName')?.value.trim();
    const phone = document.getElementById('candPhone')?.value.trim();
    const email = document.getElementById('candEmail')?.value.trim();
    const location = document.getElementById('candLocation')?.value.trim();
    const targetCollege = document.getElementById('candCollege')?.value.trim() || 'Top B-School';
    const mode = dialog.querySelector('input[name="examMode"]:checked')?.value || 'full';

    if (!name || !phone || !email || !location) {
      alert('Please fill all mandatory fields (Name, Mobile, Email, and Location).');
      return;
    }

    // Save locally
    const candidateData = { name, phone, email, location, targetCollege };
    try {
      localStorage.setItem('fmc_mock_candidate', JSON.stringify(candidateData));
    } catch (e) {}

    // Dispatch to CRM immediately as Lead: "Mock Test Started"
    const submitBtn = document.getElementById('launchExamBtn');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Starting Examination...</span>`;
    }

    try {
      sendLeadToCRM({
        name,
        phone,
        email,
        form_name: `Free Mock Test Started - ${test.shortTitle}`,
        source: 'Free Mock Test Registration',
        message: `Student registered and started ${test.title}. Location: ${location}. Target: ${targetCollege}.`,
        custom_fields: {
          isMockTest: true,
          stage: 'test_started',
          exam: test.title,
          examId: test.id,
          location,
          targetCollege,
          mode
        }
      });
    } catch (crmErr) {
      console.warn('CRM send lead notice:', crmErr);
    }

    // Close modal & launch CBT Exam Engine
    overlay.style.display = 'none';
    startExamSession(test, candidateData, mode);
  });
}

/**
 * Initializes and starts the Real CBT Exam Engine
 */
function startExamSession(test, candidate, mode) {
  const fullscreenContainer = document.getElementById('cbtExamFullscreen');
  if (!fullscreenContainer) return;

  const questions = getAllQuestionsForTest(test);
  const durationMins = mode === 'quick' ? test.quickDurationMinutes : test.fullDurationMinutes;

  // Reset exam state
  currentExamState = {
    exam: test,
    mode,
    questions,
    currentIndex: 0,
    currentSectionId: test.sections[0]?.id || 'sec1',
    answers: {},
    status: {}, // default to 'not_visited'
    timeRemainingSeconds: durationMins * 60,
    timerInterval: null,
    candidate,
    testStartedAt: new Date(),
    testSubmittedAt: null,
    isSubmitted: false,
    scoreData: null,
    isCalculatorOpen: false,
    isPaperModalOpen: false,
    isInstructionsModalOpen: false,
    solutionFilter: 'all'
  };

  // Mark all questions as not_visited initially, first question as not_answered
  questions.forEach((q, idx) => {
    currentExamState.status[q.id] = idx === 0 ? 'not_answered' : 'not_visited';
  });

  // Render Fullscreen CBT Interface
  fullscreenContainer.innerHTML = renderCBTInterface(test, candidate);
  fullscreenContainer.style.display = 'block';
  document.body.style.overflow = 'hidden'; // lock background scroll

  // Start countdown timer
  startExamTimer();

  // Attach CBT interactive listeners
  attachCBTEvents();
}

/**
 * Renders the TCS iON style CBT Interface
 */
function renderCBTInterface(test, candidate) {
  const currentQ = currentExamState.questions[currentExamState.currentIndex];
  const rollNumber = 'FMBS-' + Math.floor(100000 + Math.random() * 900000);

  return `
    <div class="cbt-root">
      <!-- CBT Top Header -->
      <header class="cbt-header">
        <div class="cbt-header-left">
          <div class="cbt-brand">
            <span class="cbt-logo-badge">CAT/CBT</span>
            <div class="cbt-brand-text">
              <span class="cbt-title">${test.title}</span>
              <span class="cbt-subtitle">FindMyBSchool Computer-Based Testing System</span>
            </div>
          </div>
        </div>

        <div class="cbt-header-center">
          <div class="cbt-timer-box" id="cbtTimerDisplay">
            <span class="timer-label">Time Remaining:</span>
            <span class="timer-digits font-mono" id="cbtClockDigits">--:--:--</span>
          </div>
        </div>

        <div class="cbt-header-right">
          <div class="cbt-tools-row">
            <button type="button" class="cbt-tool-btn" id="cbtCalcTrigger" title="Open On-Screen Calculator">
              <span>🧮 Calculator</span>
            </button>
            <button type="button" class="cbt-tool-btn" id="cbtInstructionsBtn" title="View Exam Guidelines">
              <span>📋 Instructions</span>
            </button>
            <button type="button" class="cbt-tool-btn" id="cbtQuestionPaperBtn" title="View Complete Question Paper">
              <span>📄 Question Paper</span>
            </button>
          </div>

          <div class="cbt-candidate-chip">
            <div class="cand-avatar">${(candidate?.name || 'Candidate').slice(0, 1).toUpperCase()}</div>
            <div class="cand-details">
              <span class="cand-name">${candidate?.name || 'Candidate'}</span>
              <span class="cand-roll">Roll: ${rollNumber}</span>
            </div>
          </div>
        </div>
      </header>

      <!-- Section Tabs Bar -->
      <nav class="cbt-sections-bar">
        <span class="sec-bar-label">Sections:</span>
        <div class="sec-tabs-list" id="cbtSectionTabs">
          ${test.sections.map((sec, idx) => `
            <button 
              type="button" 
              class="sec-tab ${sec.id === currentExamState.currentSectionId ? 'active' : ''}" 
              data-sec-id="${sec.id}"
            >
              <span>${sec.name} (${sec.questions.length})</span>
            </button>
          `).join('')}
        </div>
      </nav>

      <!-- Main Body: Split View (Question Panel + Palette) -->
      <main class="cbt-main-body">
        <!-- Left: Question Workspace -->
        <section class="cbt-question-workspace" id="cbtQuestionWorkspace">
          ${renderQuestionWorkspace(currentQ, currentExamState.currentIndex)}
        </section>

        <!-- Right: TCS iON Question Palette -->
        <aside class="cbt-palette-sidebar">
          <div class="palette-mobile-header">
            <strong>Question Palette</strong>
            <button type="button" class="palette-close-mobile-btn" id="closeMobilePaletteBtn" title="Close Question Palette">&times;</button>
          </div>

          <!-- Palette Status Legend -->
          <div class="palette-legend">
            <div class="legend-item"><span class="badge-dot not-visited"></span> Not Visited</div>
            <div class="legend-item"><span class="badge-dot not-answered"></span> Not Answered</div>
            <div class="legend-item"><span class="badge-dot answered"></span> Answered</div>
            <div class="legend-item"><span class="badge-dot marked"></span> Review</div>
            <div class="legend-item"><span class="badge-dot marked-answered"></span> Ans & Review</div>
          </div>

          <div class="palette-section-title">
            <span id="paletteCurrentSecTitle">${test.sections[0]?.fullName || 'Questions'}</span>
          </div>

          <!-- Numbers Grid -->
          <div class="palette-numbers-grid" id="paletteNumbersGrid">
            ${renderPaletteGrid()}
          </div>

          <!-- Section Summary Statistics Table -->
          <div class="palette-summary-box" id="paletteSummaryBox">
            ${renderPaletteSummary()}
          </div>

          <!-- Submit Test CTA Button -->
          <div class="palette-submit-wrap">
            <button type="button" class="btn-cbt-submit" id="cbtSubmitTestBtn">
              <span>Submit Examination</span>
            </button>
          </div>
        </aside>
      </main>

      <!-- Bottom Navigation & Action Bar -->
      <footer class="cbt-footer-bar">
        <div class="cbt-footer-left">
          <button type="button" class="btn-cbt-sec" id="cbtMarkReviewBtn">
            Mark for Review & Next
          </button>
          <button type="button" class="btn-cbt-sec" id="cbtClearResponseBtn">
            Clear Response
          </button>
          <button type="button" class="btn-cbt-sec btn-palette-toggle-mobile" id="cbtPaletteToggleBtn" title="Toggle Question Palette">
            <span>🔢 Question Palette</span>
          </button>
        </div>

        <div class="cbt-footer-right">
          <button type="button" class="btn-cbt-nav" id="cbtPrevBtn">
            ← Previous
          </button>
          <button type="button" class="btn-cbt-nav" id="cbtNextBtn">
            Next →
          </button>
          <button type="button" class="btn-cbt-save" id="cbtSaveNextBtn">
            Save & Next
          </button>
          <button type="button" class="btn-cbt-submit mobile-submit-btn" id="cbtSubmitTestBtnMobile" title="Submit Examination">
            <span>Submit Test</span>
          </button>
        </div>
      </footer>
    </div>
  `;
}

/**
 * Renders the question content in the workspace
 */
function renderQuestionWorkspace(question, index) {
  if (!question) {
    return `<div class="p-6 text-center text-slate-500">No question selected.</div>`;
  }

  const selectedOption = currentExamState.answers[question.id] || null;
  const totalQ = currentExamState.questions.length;
  const currentSection = currentExamState.exam.sections.find(s => s.id === question.sectionId);

  return `
    <div class="q-workspace-inner">
      <div class="q-header-meta">
        <div class="q-meta-left">
          <span class="q-num-pill">Question ${index + 1} of ${totalQ}</span>
          <span class="q-sec-pill">${question.sectionFullName || question.sectionName}</span>
        </div>
        <div class="q-meta-right">
          <span class="q-marks-pill correct">+${currentExamState.exam.markingScheme.correct}</span>
          <span class="q-marks-pill incorrect">${currentExamState.exam.markingScheme.incorrect}</span>
        </div>
      </div>

      <div class="q-scrollable-content">
        ${question.passage ? `
          <div class="q-passage-container">
            <div class="passage-header">
              <span class="passage-icon">📖</span>
              <span>Passage / Caselet Context:</span>
            </div>
            <div class="passage-body">
              ${question.passage.replace(/\n\n/g, '<br/><br/>')}
            </div>
          </div>
        ` : ''}

        <div class="q-text-container">
          <div class="q-statement font-medium">
            ${question.text.replace(/\n/g, '<br/>')}
          </div>
        </div>

        <!-- Options Container or TITA input -->
        ${question.type === 'tita' ? `
          <div class="q-tita-container">
            <div class="tita-badge">
              <span>⌨️ TITA (Type In The Answer) — No Negative Marking (+3 / 0)</span>
            </div>
            <label class="tita-label">Type your numerical / text answer below:</label>
            <div class="tita-input-wrapper">
              <input 
                type="text" 
                id="cbtTitaInput" 
                class="tita-input-field" 
                placeholder="Enter your answer..." 
                value="${selectedOption || ''}" 
                autocomplete="off"
              />
              <button type="button" class="btn-tita-clear" id="titaClearBtn">Clear</button>
            </div>
            <div class="tita-virtual-keypad">
              <span class="keypad-title">On-Screen Numeric Keypad:</span>
              <div class="keypad-keys-row">
                <button type="button" class="tita-key" data-key="1">1</button>
                <button type="button" class="tita-key" data-key="2">2</button>
                <button type="button" class="tita-key" data-key="3">3</button>
                <button type="button" class="tita-key" data-key="4">4</button>
                <button type="button" class="tita-key" data-key="5">5</button>
                <button type="button" class="tita-key" data-key="6">6</button>
                <button type="button" class="tita-key" data-key="7">7</button>
                <button type="button" class="tita-key" data-key="8">8</button>
                <button type="button" class="tita-key" data-key="9">9</button>
                <button type="button" class="tita-key" data-key="0">0</button>
                <button type="button" class="tita-key" data-key=".">.</button>
                <button type="button" class="tita-key" data-key="-">−</button>
                <button type="button" class="tita-key back-key" data-key="back">⌫ Back</button>
              </div>
            </div>
          </div>
        ` : `
          <div class="q-options-list">
            ${question.options.map(opt => `
              <label class="q-option-label ${selectedOption === opt.id ? 'selected' : ''}">
                <input 
                  type="radio" 
                  name="cbtOption" 
                  value="${opt.id}" 
                  ${selectedOption === opt.id ? 'checked' : ''} 
                />
                <span class="opt-indicator">${opt.id}</span>
                <span class="opt-text">${opt.text}</span>
              </label>
            `).join('')}
          </div>
        `}
      </div>
    </div>
  `;
}

/**
 * Renders the TCS iON Question Palette Grid numbers
 */
function renderPaletteGrid() {
  const currentSecId = currentExamState.currentSectionId;
  return currentExamState.questions.map((q, idx) => {
    // Check if question belongs to active section
    if (q.sectionId !== currentSecId) return '';

    const st = currentExamState.status[q.id] || 'not_visited';
    const isCurrent = idx === currentExamState.currentIndex;

    return `
      <button 
        type="button" 
        class="palette-num-btn ${st} ${isCurrent ? 'current' : ''}" 
        data-q-idx="${idx}"
        title="Question ${idx + 1} (${st.replace('_', ' ')})"
      >
        <span>${idx + 1}</span>
      </button>
    `;
  }).join('');
}

/**
 * Renders palette summary counts
 */
function renderPaletteSummary() {
  const counts = {
    answered: 0,
    not_answered: 0,
    not_visited: 0,
    marked: 0,
    marked_answered: 0
  };

  currentExamState.questions.forEach(q => {
    const st = currentExamState.status[q.id] || 'not_visited';
    if (counts[st] !== undefined) counts[st]++;
  });

  return `
    <div class="summary-counts-grid">
      <div class="count-pill"><span class="badge-dot answered"></span> Answered: <strong>${counts.answered}</strong></div>
      <div class="count-pill"><span class="badge-dot not-answered"></span> Not Answered: <strong>${counts.not_answered}</strong></div>
      <div class="count-pill"><span class="badge-dot not-visited"></span> Not Visited: <strong>${counts.not_visited}</strong></div>
      <div class="count-pill"><span class="badge-dot marked"></span> Review: <strong>${counts.marked}</strong></div>
      <div class="count-pill"><span class="badge-dot marked-answered"></span> Ans & Review: <strong>${counts.marked_answered}</strong></div>
    </div>
  `;
}

/**
 * Attaches event handlers inside the CBT Exam Simulator
 */
function attachCBTEvents() {
  // Option selection (MCQ)
  const workspace = document.getElementById('cbtQuestionWorkspace');
  if (workspace) {
    workspace.addEventListener('change', (e) => {
      if (e.target.name === 'cbtOption') {
        const selectedVal = e.target.value;
        const currentQ = currentExamState.questions[currentExamState.currentIndex];
        currentExamState.answers[currentQ.id] = selectedVal;

        // Visual highlight
        workspace.querySelectorAll('.q-option-label').forEach(lbl => {
          lbl.classList.remove('selected');
        });
        e.target.closest('.q-option-label')?.classList.add('selected');
      }
    });

    // Handle TITA text typing
    workspace.addEventListener('input', (e) => {
      if (e.target.id === 'cbtTitaInput') {
        const currentQ = currentExamState.questions[currentExamState.currentIndex];
        currentExamState.answers[currentQ.id] = e.target.value.trim();
      }
    });

    // Handle TITA keypad clicks
    workspace.addEventListener('click', (e) => {
      const keyBtn = e.target.closest('.tita-key');
      if (keyBtn) {
        const key = keyBtn.getAttribute('data-key');
        const inputEl = document.getElementById('cbtTitaInput');
        const currentQ = currentExamState.questions[currentExamState.currentIndex];
        let val = inputEl ? inputEl.value : '';

        if (key === 'back') {
          val = val.slice(0, -1);
        } else {
          val += key;
        }

        if (inputEl) inputEl.value = val;
        currentExamState.answers[currentQ.id] = val.trim();
      }

      if (e.target.id === 'titaClearBtn') {
        const inputEl = document.getElementById('cbtTitaInput');
        const currentQ = currentExamState.questions[currentExamState.currentIndex];
        if (inputEl) inputEl.value = '';
        delete currentExamState.answers[currentQ.id];
      }
    });
  }

  // Save & Next Button
  document.getElementById('cbtSaveNextBtn')?.addEventListener('click', () => {
    saveCurrentQuestionAndNavigate(1, 'answered');
  });

  // Mark for Review & Next Button
  document.getElementById('cbtMarkReviewBtn')?.addEventListener('click', () => {
    const currentQ = currentExamState.questions[currentExamState.currentIndex];
    const hasAnswer = Boolean(currentExamState.answers[currentQ.id]);
    saveCurrentQuestionAndNavigate(1, hasAnswer ? 'marked_answered' : 'marked');
  });

  // Clear Response Button
  document.getElementById('cbtClearResponseBtn')?.addEventListener('click', () => {
    const currentQ = currentExamState.questions[currentExamState.currentIndex];
    delete currentExamState.answers[currentQ.id];
    currentExamState.status[currentQ.id] = 'not_answered';
    refreshQuestionView();
  });

  // Previous & Next navigation buttons
  document.getElementById('cbtPrevBtn')?.addEventListener('click', () => {
    navigateQuestion(-1);
  });
  document.getElementById('cbtNextBtn')?.addEventListener('click', () => {
    navigateQuestion(1);
  });

  // Section switcher tabs
  document.getElementById('cbtSectionTabs')?.addEventListener('click', (e) => {
    const btn = e.target.closest('.sec-tab');
    if (btn) {
      const secId = btn.getAttribute('data-sec-id');
      switchSection(secId);
    }
  });

  // Palette Grid direct number click
  document.getElementById('paletteNumbersGrid')?.addEventListener('click', (e) => {
    const btn = e.target.closest('.palette-num-btn');
    if (btn) {
      const idx = parseInt(btn.getAttribute('data-q-idx'), 10);
      jumpToQuestion(idx);
    }
  });

  // Calculator Toggle
  document.getElementById('cbtCalcTrigger')?.addEventListener('click', () => {
    toggleCalculator();
  });

  // Instructions Modal
  document.getElementById('cbtInstructionsBtn')?.addEventListener('click', () => {
    showExamInstructionsModal();
  });

  // Question Paper Modal
  document.getElementById('cbtQuestionPaperBtn')?.addEventListener('click', () => {
    showCompleteQuestionPaperModal();
  });

  // Submit Test Buttons (Desktop & Mobile)
  document.getElementById('cbtSubmitTestBtn')?.addEventListener('click', () => {
    openSubmitConfirmModal();
  });
  document.getElementById('cbtSubmitTestBtnMobile')?.addEventListener('click', () => {
    openSubmitConfirmModal();
  });

  // Mobile Question Palette Drawer Toggles
  document.getElementById('cbtPaletteToggleBtn')?.addEventListener('click', () => {
    const sidebar = document.querySelector('.cbt-palette-sidebar');
    sidebar?.classList.toggle('mobile-open');
  });
  document.getElementById('closeMobilePaletteBtn')?.addEventListener('click', () => {
    const sidebar = document.querySelector('.cbt-palette-sidebar');
    sidebar?.classList.remove('mobile-open');
  });
}

/**
 * Saves current question state and steps to next/prev
 */
function saveCurrentQuestionAndNavigate(step, newStatusIfSelected) {
  const currentQ = currentExamState.questions[currentExamState.currentIndex];
  const hasAnswer = Boolean(currentExamState.answers[currentQ.id]);

  if (hasAnswer) {
    currentExamState.status[currentQ.id] = newStatusIfSelected;
  } else {
    currentExamState.status[currentQ.id] = (newStatusIfSelected === 'marked' || newStatusIfSelected === 'marked_answered') 
      ? 'marked' 
      : 'not_answered';
  }

  navigateQuestion(step);
}

/**
 * Navigates by delta index (+1 or -1)
 */
function navigateQuestion(delta) {
  const newIndex = currentExamState.currentIndex + delta;
  if (newIndex >= 0 && newIndex < currentExamState.questions.length) {
    jumpToQuestion(newIndex);
  }
}

/**
 * Jumps to specific question index
 */
function jumpToQuestion(idx) {
  currentExamState.currentIndex = idx;
  const targetQ = currentExamState.questions[idx];

  // Update active section if changed
  if (targetQ.sectionId !== currentExamState.currentSectionId) {
    currentExamState.currentSectionId = targetQ.sectionId;
    updateSectionTabsUI();
  }

  // If question was not visited, mark as not_answered
  if (currentExamState.status[targetQ.id] === 'not_visited') {
    currentExamState.status[targetQ.id] = 'not_answered';
  }

  refreshQuestionView();
}

/**
 * Switches active section
 */
function switchSection(secId) {
  currentExamState.currentSectionId = secId;
  updateSectionTabsUI();

  // Find first question in this section
  const firstQIdx = currentExamState.questions.findIndex(q => q.sectionId === secId);
  if (firstQIdx !== -1) {
    jumpToQuestion(firstQIdx);
  }
}

function updateSectionTabsUI() {
  document.querySelectorAll('#cbtSectionTabs .sec-tab').forEach(tab => {
    if (tab.getAttribute('data-sec-id') === currentExamState.currentSectionId) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  const sec = currentExamState.exam.sections.find(s => s.id === currentExamState.currentSectionId);
  const titleEl = document.getElementById('paletteCurrentSecTitle');
  if (titleEl && sec) {
    titleEl.textContent = sec.fullName;
  }
}

/**
 * Refreshes question workspace and palette
 */
function refreshQuestionView() {
  const q = currentExamState.questions[currentExamState.currentIndex];
  const workspace = document.getElementById('cbtQuestionWorkspace');
  if (workspace) {
    workspace.innerHTML = renderQuestionWorkspace(q, currentExamState.currentIndex);
  }

  const paletteGrid = document.getElementById('paletteNumbersGrid');
  if (paletteGrid) {
    paletteGrid.innerHTML = renderPaletteGrid();
  }

  const summaryBox = document.getElementById('paletteSummaryBox');
  if (summaryBox) {
    summaryBox.innerHTML = renderPaletteSummary();
  }
}

/**
 * Timer tick function
 */
function startExamTimer() {
  const clockDigitsEl = document.getElementById('cbtClockDigits');
  const timerBox = document.getElementById('cbtTimerDisplay');

  function updateClockDisplay() {
    if (!clockDigitsEl) return;
    const s = currentExamState.timeRemainingSeconds;
    const hours = Math.floor(s / 3600);
    const mins = Math.floor((s % 3600) / 60);
    const secs = s % 60;

    const fmt = [
      hours.toString().padStart(2, '0'),
      mins.toString().padStart(2, '0'),
      secs.toString().padStart(2, '0')
    ].join(':');

    clockDigitsEl.textContent = fmt;

    // Warning pulse when < 5 mins
    if (s <= 300 && timerBox) {
      timerBox.classList.add('urgent-pulse');
    }
  }

  updateClockDisplay();

  currentExamState.timerInterval = setInterval(() => {
    if (currentExamState.timeRemainingSeconds > 0) {
      currentExamState.timeRemainingSeconds--;
      updateClockDisplay();
    } else {
      // Time is up -> Auto submit
      clearInterval(currentExamState.timerInterval);
      alert('Time expired! Your examination is being automatically submitted.');
      executeTestSubmission();
    }
  }, 1000);
}

/**
 * Opens Submit Confirmation Modal
 */
function openSubmitConfirmModal() {
  let answered = 0;
  let notAnswered = 0;
  let marked = 0;
  let notVisited = 0;

  currentExamState.questions.forEach(q => {
    const st = currentExamState.status[q.id];
    if (st === 'answered') answered++;
    else if (st === 'marked' || st === 'marked_answered') marked++;
    else if (st === 'not_answered') notAnswered++;
    else notVisited++;
  });

  const modalHtml = `
    <div class="cbt-submit-confirm-overlay" id="submitConfirmOverlay">
      <div class="cbt-submit-confirm-dialog">
        <div class="confirm-head">
          <h3>Exam Submission Summary</h3>
        </div>
        <div class="confirm-body">
          <p class="confirm-msg">Are you sure you want to submit your examination? Once submitted, you cannot modify your answers.</p>
          <div class="confirm-stats-table">
            <div class="table-row"><span>Total Questions:</span> <strong>${currentExamState.questions.length}</strong></div>
            <div class="table-row"><span>Questions Answered:</span> <strong class="text-emerald-600">${answered}</strong></div>
            <div class="table-row"><span>Marked for Review:</span> <strong class="text-purple-600">${marked}</strong></div>
            <div class="table-row"><span>Unanswered / Skipped:</span> <strong class="text-rose-600">${notAnswered + notVisited}</strong></div>
          </div>
        </div>
        <div class="confirm-actions">
          <button type="button" class="btn-cancel-submit" id="btnCancelSubmit">Return to Exam</button>
          <button type="button" class="btn-proceed-submit" id="btnProceedSubmit">Confirm & View Score</button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  document.getElementById('btnCancelSubmit')?.addEventListener('click', () => {
    document.getElementById('submitConfirmOverlay')?.remove();
  });

  document.getElementById('btnProceedSubmit')?.addEventListener('click', () => {
    document.getElementById('submitConfirmOverlay')?.remove();
    executeTestSubmission();
  });
}

/**
 * Executes test submission and opens Post-Test Score Gate
 */
function executeTestSubmission() {
  if (currentExamState.timerInterval) {
    clearInterval(currentExamState.timerInterval);
  }

  currentExamState.testSubmittedAt = new Date();
  currentExamState.isSubmitted = true;

  // Calculate scores
  const scoreData = computeExamScores();
  currentExamState.scoreData = scoreData;

  // Exit fullscreen CBT mode to reveal modal cleanly
  const fullscreenEl = document.getElementById('cbtExamFullscreen');
  if (fullscreenEl) fullscreenEl.style.display = 'none';
  document.body.style.overflow = 'auto';

  // Open Post-Test Verification & Score Reveal Modal
  openPostTestModal(scoreData);
}

/**
 * Computes Raw Score, Sectional Marks, Accuracy, and Percentile
 */
function computeExamScores() {
  const test = currentExamState.exam;
  const questions = currentExamState.questions;
  let correctCount = 0;
  let incorrectCount = 0;
  let unattemptedCount = 0;
  let totalScore = 0;

  const sectionScores = {};
  test.sections.forEach(sec => {
    sectionScores[sec.id] = {
      name: sec.name,
      fullName: sec.fullName,
      totalQuestions: sec.questions.length,
      correct: 0,
      incorrect: 0,
      unattempted: 0,
      score: 0
    };
  });

  const questionResults = [];

  questions.forEach(q => {
    const studentAns = currentExamState.answers[q.id];
    const isAttempted = Boolean(studentAns);
    const isTITA = q.type === 'tita';
    let isCorrect = false;

    if (isAttempted) {
      if (isTITA) {
        isCorrect = String(studentAns).trim().toLowerCase() === String(q.correctOption).trim().toLowerCase();
      } else {
        isCorrect = String(studentAns).trim().toUpperCase() === String(q.correctOption).trim().toUpperCase();
      }
    }

    const secStats = sectionScores[q.sectionId];

    if (!isAttempted) {
      unattemptedCount++;
      if (secStats) secStats.unattempted++;
      questionResults.push({
        ...q,
        studentAnswer: null,
        isCorrect: false,
        isAttempted: false,
        marksAwarded: 0
      });
    } else if (isCorrect) {
      correctCount++;
      totalScore += test.markingScheme.correct;
      if (secStats) {
        secStats.correct++;
        secStats.score += test.markingScheme.correct;
      }
      questionResults.push({
        ...q,
        studentAnswer: studentAns,
        isCorrect: true,
        isAttempted: true,
        marksAwarded: test.markingScheme.correct
      });
    } else {
      incorrectCount++;
      const penalty = isTITA ? 0 : test.markingScheme.incorrect;
      totalScore += penalty;
      if (secStats) {
        secStats.incorrect++;
        secStats.score += penalty;
      }
      questionResults.push({
        ...q,
        studentAnswer: studentAns,
        isCorrect: false,
        isAttempted: true,
        marksAwarded: penalty
      });
    }
  });

  const maxScore = test.totalMarks || (questions.length * test.markingScheme.correct);
  const attemptedCount = correctCount + incorrectCount;
  const accuracy = attemptedCount > 0 ? ((correctCount / attemptedCount) * 100).toFixed(1) : '0';
  const percentile = estimatePercentile(test.id, totalScore, maxScore);

  // Time taken in minutes
  const totalSeconds = currentExamState.mode === 'quick' 
    ? (test.quickDurationMinutes * 60) 
    : (test.fullDurationMinutes * 60);
  const timeTakenSeconds = Math.max(1, totalSeconds - currentExamState.timeRemainingSeconds);
  const timeTakenFormatted = `${Math.floor(timeTakenSeconds / 60)}m ${timeTakenSeconds % 60}s`;

  return {
    test,
    totalScore: Math.max(0, totalScore), // Prevent negative total in UI display
    rawScore: totalScore,
    maxScore,
    correctCount,
    incorrectCount,
    unattemptedCount,
    attemptedCount,
    accuracy,
    percentile,
    sectionScores,
    questionResults,
    timeTakenFormatted
  };
}

/**
 * Opens Post-Test Lead Verification & Score Reveal Modal
 */
function openPostTestModal(scoreData) {
  const overlay = document.getElementById('postTestModalOverlay');
  const dialog = document.getElementById('postTestModalDialog');
  if (!overlay || !dialog) return;

  const cand = currentExamState.candidate;

  dialog.innerHTML = `
    <div class="mock-modal-header score-reveal-header">
      <div>
        <span class="m-eyebrow">All-India Scorecard Ready</span>
        <h3 class="m-modal-title">Verify Details to Reveal Your Score & Solutions</h3>
      </div>
    </div>

    <form class="mock-modal-form" id="postTestVerifyForm">
      <div class="score-ready-banner">
        <div class="banner-icon">🎯</div>
        <div class="banner-text">
          <strong>Your ${scoreData.test.shortTitle} Mock Test has been evaluated!</strong>
          <span>Confirm your contact details below to download your scorecard, view correct answers, and access step-by-step explanations.</span>
        </div>
      </div>

      <div class="m-form-group">
        <label for="postName">Full Name <span class="req">*</span></label>
        <input 
          type="text" 
          id="postName" 
          name="name" 
          required 
          value="${cand.name || ''}"
          placeholder="Candidate Name"
        />
      </div>

      <div class="m-form-row">
        <div class="m-form-group">
          <label for="postPhone">Mobile Number <span class="req">*</span></label>
          <div class="phone-input-wrap">
            <span class="phone-prefix">+91</span>
            <input 
              type="tel" 
              id="postPhone" 
              name="phone" 
              required 
              maxlength="10"
              pattern="[6-9][0-9]{9}"
              value="${cand.phone || ''}"
              placeholder="9876543210"
            />
          </div>
        </div>

        <div class="m-form-group">
          <label for="postEmail">Email Address <span class="req">*</span></label>
          <input 
            type="email" 
            id="postEmail" 
            name="email" 
            required 
            value="${cand.email || ''}"
            placeholder="candidate@email.com"
          />
        </div>
      </div>

      <div class="m-form-group">
        <label for="postLocation">Your City / Location <span class="req">*</span></label>
        <input 
          type="text" 
          id="postLocation" 
          name="location" 
          required 
          value="${cand.location || ''}"
          placeholder="e.g. Delhi NCR, Mumbai, Bengaluru"
        />
      </div>

      <div class="m-form-actions">
        <button type="submit" class="btn-reveal-score" id="btnRevealScore">
          <span>Unlock Official Scorecard & Solutions</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>

      <div class="m-privacy-note text-center">
        🔒 100% Secure. Dispatches instant copy of scorecard to your email and CRM dashboard.
      </div>
    </form>
  `;

  overlay.style.display = 'flex';

  // Handle confirmation form
  document.getElementById('postTestVerifyForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('postName')?.value.trim();
    const phone = document.getElementById('postPhone')?.value.trim();
    const email = document.getElementById('postEmail')?.value.trim();
    const location = document.getElementById('postLocation')?.value.trim();

    if (!name || !phone || !email || !location) {
      alert('Please fill all mandatory fields to unlock your scorecard.');
      return;
    }

    // Update candidate state
    currentExamState.candidate.name = name;
    currentExamState.candidate.phone = phone;
    currentExamState.candidate.email = email;
    currentExamState.candidate.location = location;

    const btn = document.getElementById('btnRevealScore');
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = `<span>Unlocking Scorecard...</span>`;
    }

    // Send complete lead & score to CRM!
    try {
      sendLeadToCRM({
        name,
        phone,
        email,
        form_name: `Free Mock Test Score - ${scoreData.test.shortTitle}`,
        source: 'Free Mock Test Completed',
        message: `Candidate completed ${scoreData.test.title}. Achieved Score: ${scoreData.rawScore} / ${scoreData.maxScore}. Accuracy: ${scoreData.accuracy}%. Projected Percentile: ${scoreData.percentile}%ile. Location: ${location}.`,
        custom_fields: {
          isMockTest: true,
          stage: 'test_completed',
          exam: scoreData.test.title,
          examId: scoreData.test.id,
          score: scoreData.rawScore,
          totalScore: scoreData.rawScore,
          total_score: scoreData.rawScore,
          maxScore: scoreData.maxScore,
          percentile: scoreData.percentile,
          accuracy: scoreData.accuracy + '%',
          correctCount: scoreData.correctCount,
          incorrectCount: scoreData.incorrectCount,
          unattemptedCount: scoreData.unattemptedCount,
          timeTaken: scoreData.timeTakenFormatted,
          location,
          sectionalScores: scoreData.sectionScores
        }
      });
    } catch (crmErr) {
      console.warn('CRM send score notice:', crmErr);
    }

    // Close modal, exit fullscreen CBT mode, and render Scorecard & Solutions view!
    overlay.style.display = 'none';
    const fullscreenEl = document.getElementById('cbtExamFullscreen');
    if (fullscreenEl) fullscreenEl.style.display = 'none';
    document.body.style.overflow = 'auto';

    renderScorecardAndSolutions(scoreData);

    // Confetti celebration
    fireConfetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  });
}

/**
 * Renders the Scorecard and Solutions View into the main app
 */
function renderScorecardAndSolutions(scoreData) {
  const appEl = document.getElementById('mockTestApp');
  if (!appEl) return;

  const test = scoreData.test;
  const cand = currentExamState.candidate;

  appEl.innerHTML = `
    <div class="mock-scorecard-container">
      <!-- Breadcrumb -->
      <div class="mock-breadcrumb">
        <a href="/mock-test" class="back-link">← All Free Mock Tests</a>
      </div>

      <!-- Hero Scorecard Card -->
      <div class="scorecard-hero-card">
        <div class="hero-top-badge">
          <span>Official Performance Report • ${test.title}</span>
        </div>

        <div class="hero-main-flex">
          <div class="score-primary-stat">
            <span class="score-label">Your Achieved Raw Score</span>
            <div class="score-numbers">
              <span class="score-big">${scoreData.rawScore}</span>
              <span class="score-max">/ ${scoreData.maxScore} Marks</span>
            </div>
            <div class="score-pill-row">
              <span class="accuracy-pill">Accuracy: ${scoreData.accuracy}%</span>
              <span class="time-pill">Time Taken: ${scoreData.timeTakenFormatted}</span>
            </div>
          </div>

          <div class="percentile-highlight-card">
            <span class="perc-label">Projected All-India Percentile</span>
            <div class="perc-value">${scoreData.percentile}<span>%ile</span></div>
            <div class="perc-badge">
              <span>🌟 High Probability Call: Top B-Schools</span>
            </div>
          </div>
        </div>

        <!-- Metrics Ribbon -->
        <div class="score-metrics-ribbon">
          <div class="metric-box">
            <span class="m-val text-emerald-600">${scoreData.correctCount}</span>
            <span class="m-lbl">Correct Answers</span>
          </div>
          <div class="metric-box">
            <span class="m-val text-rose-600">${scoreData.incorrectCount}</span>
            <span class="m-lbl">Incorrect Answers</span>
          </div>
          <div class="metric-box">
            <span class="m-val text-slate-500">${scoreData.unattemptedCount}</span>
            <span class="m-lbl">Unattempted</span>
          </div>
          <div class="metric-box">
            <span class="m-val text-blue-600">${scoreData.attemptedCount}</span>
            <span class="m-lbl">Total Attempted</span>
          </div>
        </div>
      </div>

      <!-- Sectional Performance Table -->
      <div class="sectional-analysis-card">
        <h3 class="section-card-title">Section-Wise Performance Breakdown</h3>
        <div class="sectional-grid">
          ${Object.values(scoreData.sectionScores).map(sec => `
            <div class="sec-stat-box">
              <div class="sec-head">
                <span class="sec-name">${sec.name}</span>
                <span class="sec-score">${sec.score} Marks</span>
              </div>
              <div class="sec-sub">${sec.fullName}</div>
              <div class="sec-details-row">
                <span>Correct: <strong class="text-emerald-600">${sec.correct}</strong></span>
                <span>Incorrect: <strong class="text-rose-600">${sec.incorrect}</strong></span>
                <span>Skipped: <strong>${sec.unattempted}</strong></span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- In-Depth Solutions & Correct Answers Section -->
      <div class="solutions-review-section">
        <div class="solutions-header">
          <div>
            <h3 class="section-card-title">Detailed Solutions & Explanations</h3>
            <p class="section-card-subtitle">Review step-by-step logic, correct options, and your chosen responses</p>
          </div>

          <!-- Filter Tabs -->
          <div class="solution-filter-tabs">
            <button type="button" class="sol-filter-btn active" data-filter="all">All (${scoreData.questionResults.length})</button>
            <button type="button" class="sol-filter-btn" data-filter="correct">Correct (${scoreData.correctCount})</button>
            <button type="button" class="sol-filter-btn" data-filter="incorrect">Incorrect (${scoreData.incorrectCount})</button>
            <button type="button" class="sol-filter-btn" data-filter="unattempted">Unattempted (${scoreData.unattemptedCount})</button>
          </div>
        </div>

        <div class="solutions-list" id="solutionsListContainer">
          ${renderSolutionsList(scoreData.questionResults, 'all')}
        </div>
      </div>

      <!-- Next Steps & Mentor Support CTA -->
      <div class="scorecard-footer-cta">
        <div class="cta-content">
          <h4>Aiming for a 99+ Percentile in ${test.shortTitle}?</h4>
          <p>Get a personalized 1-on-1 analysis session with a 99%ile IIM/XLRI mentor to plug your accuracy leaks. Call/WhatsApp Helpline: <strong>+91 88001 26446</strong></p>
        </div>
        <div class="cta-actions">
          <a href="tel:8800126446" class="btn-book-counseling" style="display:inline-flex;align-items:center;gap:6px;">
            <span>📞 Call Mentor (8800126446)</span>
          </a>
          <a href="https://wa.me/918800126446?text=Hi%20Mentor%2C%20I%20just%20finished%20my%20${encodeURIComponent(test.shortTitle)}%20Mock%20Test%20and%20want%20a%201-on-1%20scorecard%20review" target="_blank" rel="noopener noreferrer" class="btn-book-counseling" style="background:#25D366;color:#fff;display:inline-flex;align-items:center;gap:6px;">
            <span>💬 WhatsApp Mentor</span>
          </a>
          <a href="/contact" class="btn-other-mocks">
            Book Scheduled Call
          </a>
        </div>
      </div>
    </div>
  `;

  // Attach solution filter events
  document.querySelectorAll('.sol-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.sol-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      const listContainer = document.getElementById('solutionsListContainer');
      if (listContainer) {
        listContainer.innerHTML = renderSolutionsList(scoreData.questionResults, filter);
      }
    });
  });

  // Scroll to top of scorecard
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Renders list of solutions matching active filter
 */
function renderSolutionsList(results, filter) {
  let filtered = results;
  if (filter === 'correct') {
    filtered = results.filter(r => r.isCorrect);
  } else if (filter === 'incorrect') {
    filtered = results.filter(r => r.isAttempted && !r.isCorrect);
  } else if (filter === 'unattempted') {
    filtered = results.filter(r => !r.isAttempted);
  }

  if (filtered.length === 0) {
    return `<div class="p-8 text-center text-slate-400">No questions match this filter.</div>`;
  }

  return filtered.map((q, idx) => {
    const isCorrect = q.isCorrect;
    const isAttempted = q.isAttempted;
    const statusClass = !isAttempted ? 'unattempted' : (isCorrect ? 'correct' : 'incorrect');
    const statusBadge = !isAttempted 
      ? '<span class="status-pill skipped">Unattempted (0 Marks)</span>' 
      : (isCorrect 
          ? `<span class="status-pill correct">✓ Correct (+${currentExamState.exam.markingScheme.correct} Marks)</span>`
          : `<span class="status-pill incorrect">✗ Incorrect (${currentExamState.exam.markingScheme.incorrect} Marks)</span>`
        );

    return `
      <div class="sol-card ${statusClass}">
        <div class="sol-card-header">
          <div class="sol-header-left">
            <span class="sol-q-num">Question ${idx + 1}</span>
            <span class="sol-sec-tag">${q.sectionFullName || q.sectionName}</span>
            <span class="sol-topic-tag">${q.topic || 'General'}</span>
          </div>
          <div class="sol-header-right">
            ${statusBadge}
          </div>
        </div>

        ${q.passage ? `
          <div class="sol-passage-box">
            <strong>Context:</strong>
            <p>${q.passage.replace(/\n\n/g, '<br/><br/>')}</p>
          </div>
        ` : ''}

        <div class="sol-question-text">
          ${q.text.replace(/\n/g, '<br/>')}
        </div>

        ${q.type === 'tita' ? `
          <div class="sol-tita-box">
            <div class="sol-tita-row">
              <span class="tita-lbl">Your Typed Answer:</span>
              <strong class="tita-val ${q.isCorrect ? 'text-emerald-600' : (q.isAttempted ? 'text-rose-600' : 'text-slate-400')}">
                ${q.studentAnswer || 'Not Attempted'}
              </strong>
            </div>
            <div class="sol-tita-row">
              <span class="tita-lbl">Official Correct Answer:</span>
              <strong class="tita-val text-emerald-600">${q.correctOption}</strong>
            </div>
          </div>
        ` : `
          <div class="sol-options-grid">
            ${(q.options || []).map(opt => {
              const isStudentChoice = q.studentAnswer === opt.id;
              const isOfficialCorrect = q.correctOption === opt.id;
              let optClass = '';
              if (isOfficialCorrect) optClass = 'official-correct';
              if (isStudentChoice && !isOfficialCorrect) optClass = 'student-wrong';

              return `
                <div class="sol-opt-row ${optClass}">
                  <span class="sol-opt-id">${opt.id}</span>
                  <span class="sol-opt-text">${opt.text}</span>
                  ${isOfficialCorrect ? '<span class="sol-tag correct-tag">Official Correct Answer</span>' : ''}
                  ${isStudentChoice && !isOfficialCorrect ? '<span class="sol-tag wrong-tag">Your Choice</span>' : ''}
                  ${isStudentChoice && isOfficialCorrect ? '<span class="sol-tag student-correct-tag">Your Choice (Correct)</span>' : ''}
                </div>
              `;
            }).join('')}
          </div>
        `}

        <div class="sol-explanation-box">
          <div class="exp-title">
            <span>💡 Detailed Step-by-Step Solution & Rationale:</span>
          </div>
          <div class="exp-content">
            ${q.explanation.replace(/\n/g, '<br/>')}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * On-Screen CAT Scientific Calculator Logic
 */
function initCalculatorLogic() {
  const modal = document.getElementById('catCalcModal');
  const display = document.getElementById('catCalcDisplay');
  const closeBtn = document.getElementById('closeCalcBtn');
  if (!modal || !display) return;

  closeBtn?.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  let currentExpr = '0';
  let shouldResetOnNextNumber = false;

  modal.querySelectorAll('.calc-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.getAttribute('data-calc');

      if (action === 'clear') {
        currentExpr = '0';
      } else if (action === 'back') {
        if (currentExpr.length > 1) {
          currentExpr = currentExpr.slice(0, -1);
        } else {
          currentExpr = '0';
        }
      } else if (action === '=') {
        try {
          // Safe evaluation of mathematical expression
          const sanitized = currentExpr.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
          const res = Function(`'use strict'; return (${sanitized})`)();
          currentExpr = String(Math.round(res * 100000) / 100000);
          shouldResetOnNextNumber = true;
        } catch (e) {
          currentExpr = 'Error';
          shouldResetOnNextNumber = true;
        }
      } else if (action === 'sqrt') {
        try {
          const val = parseFloat(currentExpr);
          currentExpr = String(Math.sqrt(val));
          shouldResetOnNextNumber = true;
        } catch (e) {
          currentExpr = 'Error';
        }
      } else if (action === 'log') {
        try {
          const val = parseFloat(currentExpr);
          currentExpr = String(Math.log10(val));
          shouldResetOnNextNumber = true;
        } catch (e) {
          currentExpr = 'Error';
        }
      } else if (action === 'ln') {
        try {
          const val = parseFloat(currentExpr);
          currentExpr = String(Math.log(val));
          shouldResetOnNextNumber = true;
        } catch (e) {
          currentExpr = 'Error';
        }
      } else if (action === 'pi') {
        currentExpr = String(Math.PI);
        shouldResetOnNextNumber = true;
      } else if (action === 'pow') {
        currentExpr += '**';
      } else {
        // Numbers and standard operators (+, -, *, /)
        if (currentExpr === '0' || shouldResetOnNextNumber) {
          if (['+', '-', '*', '/'].includes(action)) {
            currentExpr += action;
          } else {
            currentExpr = action;
          }
          shouldResetOnNextNumber = false;
        } else {
          currentExpr += action;
        }
      }

      display.textContent = currentExpr;
    });
  });
}

/**
 * Toggles on-screen calculator popup
 */
function toggleCalculator() {
  const modal = document.getElementById('catCalcModal');
  if (!modal) return;
  modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
}

/**
 * Shows complete question paper in modal
 */
function showCompleteQuestionPaperModal() {
  const questions = currentExamState.questions;
  const overlayHtml = `
    <div class="cbt-submit-confirm-overlay" id="paperModalOverlay">
      <div class="cbt-submit-confirm-dialog paper-modal-dialog">
        <div class="confirm-head">
          <h3>Complete Question Paper - ${currentExamState.exam.shortTitle}</h3>
          <button type="button" class="close-x-btn" id="closePaperModalBtn">&times;</button>
        </div>
        <div class="confirm-body paper-scrollable">
          ${questions.map((q, idx) => `
            <div class="paper-q-item">
              <span class="paper-q-num">Q${idx + 1} (${q.sectionName}):</span>
              <p class="paper-q-txt">${q.text}</p>
            </div>
          `).join('')}
        </div>
        <div class="confirm-actions">
          <button type="button" class="btn-proceed-submit" id="btnDismissPaper">Close</button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', overlayHtml);
  document.getElementById('closePaperModalBtn')?.addEventListener('click', () => {
    document.getElementById('paperModalOverlay')?.remove();
  });
  document.getElementById('btnDismissPaper')?.addEventListener('click', () => {
    document.getElementById('paperModalOverlay')?.remove();
  });
}

/**
 * Shows general exam instructions modal
 */
function showExamInstructionsModal() {
  const test = currentExamState.exam;
  const overlayHtml = `
    <div class="cbt-submit-confirm-overlay" id="instructModalOverlay">
      <div class="cbt-submit-confirm-dialog instructions-dialog">
        <div class="confirm-head">
          <h3>Examination Instructions - ${test.title}</h3>
          <button type="button" class="close-x-btn" id="closeInstructModalBtn">&times;</button>
        </div>
        <div class="confirm-body">
          <ul class="instructions-list">
            <li><strong>Timer:</strong> The countdown clock in the top center displays the remaining test duration. When the clock reaches zero, your test auto-submits.</li>
            <li><strong>Question Palette:</strong>
              <ul>
                <li><span class="badge-dot not-visited inline-block"></span> Not Visited: Question has not been opened yet.</li>
                <li><span class="badge-dot not-answered inline-block"></span> Not Answered: Visited but no option selected.</li>
                <li><span class="badge-dot answered inline-block"></span> Answered: Option saved and considered for evaluation.</li>
                <li><span class="badge-dot marked inline-block"></span> Marked for Review: Flagged for later reconsideration.</li>
              </ul>
            </li>
            <li><strong>Marking Scheme:</strong> Correct answers yield <strong>+${test.markingScheme.correct}</strong> marks; incorrect responses deduct <strong>${test.markingScheme.incorrect}</strong> marks.</li>
            <li><strong>Scientific Calculator:</strong> Click the virtual calculator icon in the top header to access standard arithmetic and logarithmic functions.</li>
          </ul>
        </div>
        <div class="confirm-actions">
          <button type="button" class="btn-proceed-submit" id="btnDismissInstruct">Close</button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', overlayHtml);
  document.getElementById('closeInstructModalBtn')?.addEventListener('click', () => {
    document.getElementById('instructModalOverlay')?.remove();
  });
  document.getElementById('btnDismissInstruct')?.addEventListener('click', () => {
    document.getElementById('instructModalOverlay')?.remove();
  });
}
