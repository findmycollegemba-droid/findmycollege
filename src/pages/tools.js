import { calculateCATScore, calculateXATScore, calculateCMATScore, calculateGoalPlan } from '../utils/calculators.js';

export function renderToolsPage(activeSub = 'cat') {
  const currentSub = ['cat', 'xat', 'cmat'].includes(activeSub) ? activeSub : 'cat';

  return `
    <div class="page-tools">
      <!-- Tools Hero -->
      <section class="tools-hero">
        <div class="section-container">
          <div class="hero-badge-pill">
            <span class="pulse-indicator"></span>
            <span class="badge-text">⚡ CAT 2026 Response Sheet Scanner & Slot Normalization Engine</span>
          </div>
          <h1 class="page-title">CAT 2026 Score Calculator & Percentile Predictor</h1>
          <p class="page-subtitle">
            Calculate your raw score, scaled score, and percentile from your official candidate response sheet URL or source. Features official +3/−1/0 marking, slot 1/2/3 normalization, and 2027 IIM call prediction.
          </p>

          <!-- Exam Tools Tab Bar -->
          <div class="tools-tab-bar">
            <button class="tool-tab-btn ${currentSub === 'cat' ? 'active' : ''}" data-tool-tab="cat">
              <span class="tab-emoji">📊</span> CAT 2026 Calculator & Scanner
            </button>
            <button class="tool-tab-btn ${currentSub === 'xat' ? 'active' : ''}" data-tool-tab="xat">
              <span class="tab-emoji">🎯</span> XAT 2027 Calculator
            </button>
            <button class="tool-tab-btn ${currentSub === 'cmat' ? 'active' : ''}" data-tool-tab="cmat">
              <span class="tab-emoji">⚡</span> CMAT 2026 Calculator
            </button>
          </div>
        </div>
      </section>

      <div class="section-container tool-body-container">
        <!-- TAB 1: CAT CALCULATOR & SCANNER -->
        <div class="tool-panel ${currentSub === 'cat' ? 'active' : ''}" id="panel-cat-calc">
          
          <!-- Mode Selector Toolbar -->
          <div class="cat-mode-selector-card">
            <div class="mode-header-flex">
              <div class="mode-title-wrap">
                <span class="mode-num-badge">1</span>
                <div>
                  <h3 class="mode-main-title">Select Calculation Mode</h3>
                  <p class="mode-sub-title">Choose automated response sheet scanning, manual attempts, or goal simulation</p>
                </div>
              </div>

              <div class="cat-mode-pills">
                <button type="button" class="mode-pill-btn active" id="btnModeUrl">
                  <span>⚡ Digialm URL</span>
                </button>
                <button type="button" class="mode-pill-btn" id="btnModeSource">
                  <span>📄 HTML Source</span>
                </button>
                <button type="button" class="mode-pill-btn" id="btnModeManual">
                  <span>✏️ Manual Marks</span>
                </button>
                <button type="button" class="mode-pill-btn goal-pill" id="btnModeGoal">
                  <span>🎯 %ile Goal Planner</span>
                </button>
              </div>
            </div>

            <!-- MODE 1 CONTAINER: DIGIALM URL SCANNER -->
            <div class="cat-mode-content active" id="modeContainerUrl">
              <div class="scanner-input-wrap">
                <label for="catUrlInput" class="scanner-input-label">
                  Paste Candidate Response Sheet Link (hosted on <code>cdn.digialm.com</code> or <code>iimcat.ac.in</code>)
                </label>
                <div class="scanner-input-group">
                  <div class="url-prefix-icon">🔗</div>
                  <input 
                    type="url" 
                    id="catUrlInput" 
                    placeholder="https://cdn.digialm.com/.../CandidateResponseSheet.html" 
                    class="scanner-text-input" 
                  />
                  <button type="button" id="btnScanUrl" class="btn-gradient-pill scanner-action-btn">
                    <span>Scan Response Sheet</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                  </button>
                </div>

                <div class="scanner-quick-helpers">
                  <button type="button" class="quick-sample-btn" id="btnLoadSampleUrl">
                    <span>⚡ Try Sample Slot 1 Response Sheet (Live Demo)</span>
                  </button>
                  <button type="button" class="quick-sample-btn" id="btnLoadSampleSlot2">
                    <span>⚡ Try Sample Slot 2 Response Sheet</span>
                  </button>
                  <span class="helper-hint">Instant 66-question analysis with zero upload delay</span>
                </div>

                <!-- URL Guide Callout -->
                <div class="scanner-guide-callout">
                  <div class="callout-icon">💡</div>
                  <div class="callout-content">
                    <strong>How to get your response sheet link:</strong>
                    Login to <a href="https://iimcat.ac.in" target="_blank" rel="noopener">iimcat.ac.in</a> using your Registration ID & Password → Click on "Candidate Response" → Copy the link address of your response sheet or open it and copy the URL from your address bar.
                  </div>
                </div>
              </div>
            </div>

            <!-- MODE 2 CONTAINER: HTML SOURCE SCANNER -->
            <div class="cat-mode-content" id="modeContainerSource" style="display:none;">
              <div class="scanner-input-wrap">
                <label for="catSourceInput" class="scanner-input-label">
                  Paste Complete Response Sheet HTML Source (Press <kbd>Ctrl+U</kbd> or <kbd>Cmd+U</kbd> on your Response Sheet page, select all, copy & paste)
                </label>
                <textarea 
                  id="catSourceInput" 
                  rows="5" 
                  placeholder="<!DOCTYPE html><html>... Paste raw page source here ...</html>" 
                  class="scanner-textarea-input"
                ></textarea>

                <div class="scanner-quick-helpers">
                  <button type="button" id="btnParseSource" class="btn-gradient-pill scanner-action-btn">
                    <span>Parse HTML & Calculate Score</span>
                  </button>
                  <button type="button" class="quick-sample-btn" id="btnLoadSampleSource">
                    <span>📄 Load Demo HTML Source</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- MODE 3 CONTAINER: MANUAL MARKS INPUTS -->
            <div class="cat-mode-content" id="modeContainerManual" style="display:none;">
              <div class="manual-controls-bar">
                <div class="control-dropdown-group">
                  <div class="ctrl-item">
                    <label>Exam Slot:</label>
                    <select id="catSlotSelect" class="styled-select-mini">
                      <option value="1">Slot 1 (Morning 8:30 AM)</option>
                      <option value="2">Slot 2 (Afternoon 12:30 PM)</option>
                      <option value="3">Slot 3 (Evening 4:30 PM)</option>
                    </select>
                  </div>

                  <div class="ctrl-item">
                    <label>Category:</label>
                    <select id="catCategorySelect" class="styled-select-mini">
                      <option value="GEN">General / Open (GEN)</option>
                      <option value="EWS">General - EWS</option>
                      <option value="NC-OBC">NC-OBC</option>
                      <option value="SC">Scheduled Caste (SC)</option>
                      <option value="ST">Scheduled Tribe (ST)</option>
                      <option value="PWD">PwD (Persons with Disability)</option>
                    </select>
                  </div>
                </div>

                <!-- Presets Row -->
                <div class="presets-row">
                  <span class="preset-lbl">Quick Presets:</span>
                  <button type="button" class="preset-chip" id="presetCat99">99.5%ile (High)</button>
                  <button type="button" class="preset-chip" id="presetCat95">95.0%ile (Balanced)</button>
                  <button type="button" class="preset-chip" id="presetCat90">90.0%ile (Tier 2)</button>
                  <button type="button" class="preset-chip" id="presetCat80">80.0%ile (Safe)</button>
                  <button type="button" class="preset-chip text-coral" id="presetCatReset">Reset</button>
                </div>
              </div>

              <!-- 3 Section Inputs Grid -->
              <div class="manual-sections-grid">
                <!-- Section 1: VARC -->
                <div class="calc-section-box">
                  <div class="sec-box-header">
                    <div class="sec-title-flex">
                      <span class="sec-tag blue">Section 1 • VARC</span>
                      <h4 class="sec-title">Verbal Ability & Reading Comprehension</h4>
                    </div>
                    <span class="sec-meta-badge">24 Qs (19 MCQ + 5 TITA) • 72 Marks</span>
                  </div>
                  <div class="inputs-row-4">
                    <div class="form-field">
                      <label>Correct MCQ (+3)</label>
                      <input type="number" id="catVarcCorrectMcq" min="0" max="19" value="12" class="score-input" />
                    </div>
                    <div class="form-field">
                      <label>Wrong MCQ (-1)</label>
                      <input type="number" id="catVarcWrongMcq" min="0" max="19" value="4" class="score-input" />
                    </div>
                    <div class="form-field">
                      <label>Correct TITA (+3)</label>
                      <input type="number" id="catVarcCorrectTita" min="0" max="5" value="2" class="score-input" />
                    </div>
                    <div class="form-field">
                      <label>Wrong TITA (0)</label>
                      <input type="number" id="catVarcWrongTita" min="0" max="5" value="1" class="score-input" />
                    </div>
                  </div>
                  <div class="sec-live-metric-row">
                    <span class="metric-live-label">VARC Raw Score: <strong id="varcLiveScore">38</strong> / 72</span>
                    <span class="metric-live-sub" id="varcLivePercentile">~97.5 %ile</span>
                  </div>
                </div>

                <!-- Section 2: DILR -->
                <div class="calc-section-box">
                  <div class="sec-box-header">
                    <div class="sec-title-flex">
                      <span class="sec-tag yellow">Section 2 • DILR</span>
                      <h4 class="sec-title">Data Interpretation & Logical Reasoning</h4>
                    </div>
                    <span class="sec-meta-badge">20 Qs (15 MCQ + 5 TITA) • 60 Marks</span>
                  </div>
                  <div class="inputs-row-4">
                    <div class="form-field">
                      <label>Correct MCQ (+3)</label>
                      <input type="number" id="catDilrCorrectMcq" min="0" max="15" value="8" class="score-input" />
                    </div>
                    <div class="form-field">
                      <label>Wrong MCQ (-1)</label>
                      <input type="number" id="catDilrWrongMcq" min="0" max="15" value="2" class="score-input" />
                    </div>
                    <div class="form-field">
                      <label>Correct TITA (+3)</label>
                      <input type="number" id="catDilrCorrectTita" min="0" max="5" value="1" class="score-input" />
                    </div>
                    <div class="form-field">
                      <label>Wrong TITA (0)</label>
                      <input type="number" id="catDilrWrongTita" min="0" max="5" value="1" class="score-input" />
                    </div>
                  </div>
                  <div class="sec-live-metric-row">
                    <span class="metric-live-label">DILR Raw Score: <strong id="dilrLiveScore">25</strong> / 60</span>
                    <span class="metric-live-sub" id="dilrLivePercentile">~98.0 %ile</span>
                  </div>
                </div>

                <!-- Section 3: QA -->
                <div class="calc-section-box">
                  <div class="sec-box-header">
                    <div class="sec-title-flex">
                      <span class="sec-tag green">Section 3 • QA</span>
                      <h4 class="sec-title">Quantitative Aptitude</h4>
                    </div>
                    <span class="sec-meta-badge">22 Qs (17 MCQ + 5 TITA) • 66 Marks</span>
                  </div>
                  <div class="inputs-row-4">
                    <div class="form-field">
                      <label>Correct MCQ (+3)</label>
                      <input type="number" id="catQaCorrectMcq" min="0" max="17" value="9" class="score-input" />
                    </div>
                    <div class="form-field">
                      <label>Wrong MCQ (-1)</label>
                      <input type="number" id="catQaWrongMcq" min="0" max="17" value="2" class="score-input" />
                    </div>
                    <div class="form-field">
                      <label>Correct TITA (+3)</label>
                      <input type="number" id="catQaCorrectTita" min="0" max="5" value="2" class="score-input" />
                    </div>
                    <div class="form-field">
                      <label>Wrong TITA (0)</label>
                      <input type="number" id="catQaWrongTita" min="0" max="5" value="1" class="score-input" />
                    </div>
                  </div>
                  <div class="sec-live-metric-row">
                    <span class="metric-live-label">QA Raw Score: <strong id="qaLiveScore">31</strong> / 66</span>
                    <span class="metric-live-sub" id="qaLivePercentile">~98.0 %ile</span>
                  </div>
                </div>
              </div>

              <button class="btn-gradient-pill full-width-btn" id="btnCalculateCAT">
                <span>Calculate CAT Score & B-School Calls</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>

            <!-- MODE 4 CONTAINER: PERCENTILE GOAL PLANNER -->
            <div class="cat-mode-content" id="modeContainerGoal" style="display:none;">
              <div class="goal-planner-card">
                <div class="goal-planner-header">
                  <div>
                    <h4>🎯 Set Your Dream CAT 2026 Percentile Target</h4>
                    <p>The planner reverse-calculates your exact marks, attempts & sectional distribution targets</p>
                  </div>

                  <div class="goal-chips-group">
                    <button type="button" class="goal-chip-btn" data-goal="99.9">99.9%ile</button>
                    <button type="button" class="goal-chip-btn active" data-goal="99.0">99.0%ile</button>
                    <button type="button" class="goal-chip-btn" data-goal="95.0">95.0%ile</button>
                    <button type="button" class="goal-chip-btn" data-goal="90.0">90.0%ile</button>
                    <button type="button" class="goal-chip-btn" data-goal="80.0">80.0%ile</button>
                  </div>
                </div>

                <!-- Goal Blueprint Results -->
                <div class="goal-blueprint-grid" id="goalBlueprintGrid">
                  <!-- Dynamically rendered by JS -->
                </div>
              </div>
            </div>

          </div>

          <!-- Live Scorecard & B-School Calls Section -->
          <div class="calculator-layout" style="margin-top: 24px;">
            <!-- Left Info Card: Summary of Response / Attempts -->
            <div class="calc-form-card" id="scanSummaryCard">
              <div class="calc-header-flex">
                <div>
                  <h3 class="calc-card-title">Attempt Analysis & Marking Audit</h3>
                  <p class="calc-card-sub" id="candidateNameSub">Candidate: Demo Aspirant • CAT 2026</p>
                </div>
                <span class="badge-tag green" id="scanStatusBadge">Audited Response</span>
              </div>

              <!-- Question Distribution Stats -->
              <div class="question-audit-grid">
                <div class="audit-stat-item">
                  <span class="audit-icon text-green">✓</span>
                  <div>
                    <strong class="audit-num text-green" id="auditCorrectCount">34</strong>
                    <span class="audit-label">Correct (+3 Marks)</span>
                  </div>
                </div>

                <div class="audit-stat-item">
                  <span class="audit-icon text-coral">✕</span>
                  <div>
                    <strong class="audit-num text-coral" id="auditWrongCount">8</strong>
                    <span class="audit-label">Wrong MCQ (−1 Penalty)</span>
                  </div>
                </div>

                <div class="audit-stat-item">
                  <span class="audit-icon text-yellow">✎</span>
                  <div>
                    <strong class="audit-num text-yellow" id="auditTitaCount">5</strong>
                    <span class="audit-label">Correct TITA (0 Neg)</span>
                  </div>
                </div>

                <div class="audit-stat-item">
                  <span class="audit-icon text-muted">⚪</span>
                  <div>
                    <strong class="audit-num text-muted" id="auditUnattemptedCount">19</strong>
                    <span class="audit-label">Unattempted (0 Mark)</span>
                  </div>
                </div>
              </div>

              <!-- Sectional Performance Bars -->
              <h4 class="breakdown-title" style="margin-top: 24px;">Sectional Score & Percentile Breakdown</h4>
              <div class="section-bars-list">
                <div class="sec-bar-item">
                  <div class="sec-bar-header">
                    <span>VARC (Verbal Ability)</span>
                    <strong id="catResVarcScore">38 Marks (~97.5%ile)</strong>
                  </div>
                  <div class="bar-progress-track">
                    <div class="bar-progress-fill fill-blue" id="catBarVarc" style="width: 53%;"></div>
                  </div>
                </div>

                <div class="sec-bar-item">
                  <div class="sec-bar-header">
                    <span>DILR (Logical Reasoning)</span>
                    <strong id="catResDilrScore">25 Marks (~98.0%ile)</strong>
                  </div>
                  <div class="bar-progress-track">
                    <div class="bar-progress-fill fill-yellow" id="catBarDilr" style="width: 42%;"></div>
                  </div>
                </div>

                <div class="sec-bar-item">
                  <div class="sec-bar-header">
                    <span>QA (Quantitative Aptitude)</span>
                    <strong id="catResQaScore">31 Marks (~98.0%ile)</strong>
                  </div>
                  <div class="bar-progress-track">
                    <div class="bar-progress-fill fill-green" id="catBarQa" style="width: 47%;"></div>
                  </div>
                </div>
              </div>

              <!-- Penalty Callout -->
              <div class="negative-penalty-callout">
                <span class="penalty-icon">⚠️</span>
                <span>Negative Marking Deductions: <strong class="text-coral" id="penaltyScoreSpan">-8 Marks</strong> lost to incorrect MCQ guesses.</span>
              </div>
            </div>

            <!-- Right Results Dashboard -->
            <div class="calc-results-card" id="catResultsCard">
              <div class="results-header">
                <span class="badge-tag">Normalized Projection</span>
                <h3 class="results-title">Projected Scorecard 2026</h3>
              </div>

              <div class="hero-score-badge">
                <div class="big-percentile" id="catResPercentile">98.50 %ile</div>
                <div class="percentile-label">Projected All-India Percentile</div>
              </div>

              <div class="score-summary-grid">
                <div class="summary-metric">
                  <div class="s-val text-blue" id="catResTotalRaw">85</div>
                  <div class="s-lbl">Raw Score / 198</div>
                </div>
                <div class="summary-metric">
                  <div class="s-val text-green" id="catResScaled">85.00</div>
                  <div class="s-lbl">Scaled Score</div>
                </div>
                <div class="summary-metric">
                  <div class="s-val text-yellow" id="catResAccuracy">82.5%</div>
                  <div class="s-lbl">Attempt Accuracy</div>
                </div>
                <div class="summary-metric">
                  <div class="s-val text-coral" id="catResAttempts">47 / 66</div>
                  <div class="s-lbl">Total Attempts</div>
                </div>
              </div>

              <!-- Predicted Calls & Tiers -->
              <h4 class="breakdown-title" style="margin-top: 20px;">Eligible B-School Shortlists (2027 Admissions)</h4>
              
              <div class="calls-tier-tabs">
                <button type="button" class="tier-tab-btn active" data-call-filter="all">All Calls</button>
                <button type="button" class="tier-tab-btn" data-call-filter="tier1">Tier 1</button>
                <button type="button" class="tier-tab-btn" data-call-filter="tier1_5">Tier 1.5</button>
                <button type="button" class="tier-tab-btn" data-call-filter="tier2">Tier 2</button>
                <button type="button" class="tier-tab-btn" data-call-filter="tier3">Tier 3 Direct</button>
              </div>

              <div class="calls-list-box" id="catCallsListBox">
                <!-- Dynamically populated -->
              </div>

              <div class="result-actions-row">
                <button class="btn-action-outline" id="printScorecardBtn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect width="12" height="8" x="6" y="14"></rect></svg>
                  <span>Print Scorecard</span>
                </button>
                <a href="#colleges" class="btn-action-outline">
                  <span>Browse 111 Colleges →</span>
                </a>
                <a href="#contact" class="btn-action-outline ai-outline">
                  <span>Get Free Admission Counseling</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Comprehensive Reference & Educational Section -->
          <div class="cat-educational-hub">
            
            <!-- GUIDE 1: HOW TO CHECK RESPONSE SHEET -->
            <article class="edu-card-block" id="response-sheet-guide">
              <div class="edu-block-header">
                <div class="edu-icon-badge">📋</div>
                <div>
                  <h3>CAT 2026 Response Sheet Check: How to View & Calculate Score</h3>
                  <p>Step-by-step procedure to retrieve your official candidate URL from cdn.digialm.com</p>
                </div>
              </div>

              <div class="edu-steps-grid">
                <div class="edu-step-card">
                  <span class="step-num">Step 1</span>
                  <h4>Login to Official Portal</h4>
                  <p>Visit <strong>iimcat.ac.in</strong> and log in with your CAT Registration User ID and Password.</p>
                </div>
                <div class="edu-step-card">
                  <span class="step-num">Step 2</span>
                  <h4>Click "Candidate Response"</h4>
                  <p>Navigate to the "Candidate Response" tab on the dashboard to access the response sheet link.</p>
                </div>
                <div class="edu-step-card">
                  <span class="step-num">Step 3</span>
                  <h4>Copy Digialm URL / Source</h4>
                  <p>Copy the URL hosted on <code>cdn.digialm.com</code> or press <kbd>Ctrl+U</kbd> to view and copy the raw HTML source code.</p>
                </div>
                <div class="edu-step-card">
                  <span class="step-num">Step 4</span>
                  <h4>Scan & Predict Calls</h4>
                  <p>Paste into the FindMyBSchool Calculator above for instant sectional audits, slot scaling, and call forecasts.</p>
                </div>
              </div>
            </article>

            <!-- GUIDE 2: MARKS VS PERCENTILE TABLE -->
            <article class="edu-card-block">
              <div class="edu-block-header">
                <div class="edu-icon-badge">📊</div>
                <div>
                  <h3>CAT 2026 Marks vs Percentile Target Breakdown (198 Max Marks)</h3>
                  <p>Verified historical benchmarks across 66-question CAT administrations</p>
                </div>
              </div>

              <div class="edu-table-responsive">
                <table class="shiksha-data-table edu-benchmark-table">
                  <thead>
                    <tr>
                      <th>Target Percentile</th>
                      <th>Overall Raw Marks (198M)</th>
                      <th>VARC Target (72M)</th>
                      <th>DILR Target (60M)</th>
                      <th>QA Target (66M)</th>
                      <th>Top Eligible Institutions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong class="text-blue">99.9+ %ile</strong></td>
                      <td><strong>110 – 125+ Marks</strong></td>
                      <td>46+ Marks</td>
                      <td>38+ Marks</td>
                      <td>42+ Marks</td>
                      <td>IIM Ahmedabad, IIM Bangalore, IIM Calcutta, FMS Delhi</td>
                    </tr>
                    <tr>
                      <td><strong class="text-blue">99.5+ %ile</strong></td>
                      <td><strong>95 – 109 Marks</strong></td>
                      <td>42+ Marks</td>
                      <td>32+ Marks</td>
                      <td>35+ Marks</td>
                      <td>IIM Lucknow, IIM Kozhikode, SPJIMR Mumbai</td>
                    </tr>
                    <tr>
                      <td><strong class="text-blue">99.0+ %ile</strong></td>
                      <td><strong>82 – 94 Marks</strong></td>
                      <td>38+ Marks</td>
                      <td>28+ Marks</td>
                      <td>30+ Marks</td>
                      <td>IIM Indore, MDI Gurgaon, IIT Bombay (SJMSOM)</td>
                    </tr>
                    <tr>
                      <td><strong>98.0+ %ile</strong></td>
                      <td>75 – 81 Marks</td>
                      <td>34+ Marks</td>
                      <td>24+ Marks</td>
                      <td>26+ Marks</td>
                      <td>IIFT Delhi, IIM Shillong, CAP IIMs (Udaipur, Trichy)</td>
                    </tr>
                    <tr>
                      <td><strong>95.0+ %ile</strong></td>
                      <td>60 – 74 Marks</td>
                      <td>28+ Marks</td>
                      <td>19+ Marks</td>
                      <td>21+ Marks</td>
                      <td>CAP Round IIMs, DSE Delhi, IIT Delhi DMS</td>
                    </tr>
                    <tr>
                      <td><strong>90.0+ %ile</strong></td>
                      <td>48 – 59 Marks</td>
                      <td>23+ Marks</td>
                      <td>15+ Marks</td>
                      <td>16+ Marks</td>
                      <td>IMT Ghaziabad, IMI New Delhi, GIM Goa, Baby IIMs</td>
                    </tr>
                    <tr>
                      <td><strong>85.0+ %ile</strong></td>
                      <td>38 – 47 Marks</td>
                      <td>18+ Marks</td>
                      <td>12+ Marks</td>
                      <td>13+ Marks</td>
                      <td>TAPMI Manipal, FORE School, Great Lakes Chennai, LBSIM</td>
                    </tr>
                    <tr>
                      <td><strong>80.0+ %ile</strong></td>
                      <td>32 – 37 Marks</td>
                      <td>14+ Marks</td>
                      <td>10+ Marks</td>
                      <td>10+ Marks</td>
                      <td>BIMTECH Greater Noida, K J Somaiya, IRMA Anand</td>
                    </tr>
                    <tr>
                      <td><strong>70.0+ %ile</strong></td>
                      <td>22 – 31 Marks</td>
                      <td>10+ Marks</td>
                      <td>7+ Marks</td>
                      <td>7+ Marks</td>
                      <td>NDIM New Delhi, FOSTIIMA, FIIB, JIMS, PIBM, JAGSoM, UPES</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>

            <!-- GUIDE 3: NORMALIZATION & MARKING RULES -->
            <article class="edu-card-block">
              <div class="edu-block-header">
                <div class="edu-icon-badge">⚖️</div>
                <div>
                  <h3>How CAT 2026 Normalization & Slot Scaling Works</h3>
                  <p>Equipercentile equating across Slot 1 (Morning), Slot 2 (Afternoon), and Slot 3 (Evening)</p>
                </div>
              </div>

              <div class="normalization-cards-grid">
                <div class="norm-card">
                  <div class="norm-card-num">1</div>
                  <h4>Calculation of Mean & Standard Deviation</h4>
                  <p>Raw scores of all candidates in each session are standardized to account for marginal differences in difficulty across slots.</p>
                </div>
                <div class="norm-card">
                  <div class="norm-card-num">2</div>
                  <h4>Scaled Score Equating Formula</h4>
                  <p>Scores are mapped against a universal scale based on master pool top percentiles and slot medians to ensure absolute fairness.</p>
                </div>
                <div class="norm-card">
                  <div class="norm-card-num">3</div>
                  <h4>Percentile Rank Computation</h4>
                  <p>Your percentile is determined by <code>P = (R / N) × 100</code>, where R is the rank and N is total test-takers across India (~2.9 Lakhs).</p>
                </div>
              </div>
            </article>

            <!-- GUIDE 4: FREQUENTLY ASKED QUESTIONS -->
            <article class="edu-card-block">
              <div class="edu-block-header">
                <div class="edu-icon-badge">❓</div>
                <div>
                  <h3>Frequently Asked Questions: CAT Scoring & Answer Keys</h3>
                  <p>Common questions answered by admissions consultants</p>
                </div>
              </div>

              <div class="faq-accordion-list">
                <details class="faq-item" open>
                  <summary class="faq-question">What is the difference between CAT Raw Score and Scaled Score?</summary>
                  <div class="faq-answer">
                    Your <strong>Raw Score</strong> is the direct sum of your correct (+3) and incorrect (−1 MCQ / 0 TITA) responses out of 198. Because CAT is conducted across 3 slots with varying difficulty, IIMs normalize the scores using an equipercentile equating formula to produce the <strong>Scaled Score</strong>.
                  </div>
                </details>

                <details class="faq-item">
                  <summary class="faq-question">What score is required for 99+ percentile in CAT?</summary>
                  <div class="faq-answer">
                    Historically in the 66-question pattern, an overall raw score between <strong>82 and 94 marks</strong> out of 198 lands you comfortably in the 99.0+ percentile bracket. For 99.5+ percentile, you generally need 95–105 marks.
                  </div>
                </details>

                <details class="faq-item">
                  <summary class="faq-question">Is there negative marking for TITA (Non-MCQ) questions?</summary>
                  <div class="faq-answer">
                    <strong>No.</strong> Non-MCQ / TITA (Type In The Answer) questions carry +3 marks for a correct answer and <strong>0 marks</strong> (zero penalty) for wrong answers. Candidates should attempt all TITA questions without hesitation.
                  </div>
                </details>

                <details class="faq-item">
                  <summary class="faq-question">What is the official CAT Answer Key objection fee?</summary>
                  <div class="faq-answer">
                    IIMs charge an objection fee of <strong>₹1,200 per question</strong> challenged. If the subject committee accepts your objection, the full ₹1,200 is refunded to your source payment account.
                  </div>
                </details>

                <details class="faq-item">
                  <summary class="faq-question">Which colleges can I apply to if my percentile is between 60%ile and 80%ile?</summary>
                  <div class="faq-answer">
                    Top private business schools offering AICTE-approved PGDM programs welcome scores between 60% and 80%ile, including NDIM New Delhi, FOSTIIMA, FIIB, JIMS Kalkaji, PIBM Pune, Lexicon MILE, JAGSoM Bangalore, ISBR Bangalore, UPES Dehradun, and Doon Business School.
                  </div>
                </details>
              </div>
            </article>

          </div>

        </div>

        <!-- TAB 2: XAT CALCULATOR -->
        <div class="tool-panel ${currentSub === 'xat' ? 'active' : ''}" id="panel-xat-calc">
          <div class="calculator-layout">
            <div class="calc-form-card">
              <div class="calc-header-flex">
                <div>
                  <h3 class="calc-card-title">XAT 2027 Score to Percentile</h3>
                  <p class="calc-card-sub">Part 1: 76 Questions • +1 Correct, -0.25 Wrong, -0.10 Unattempted (>8)</p>
                </div>
              </div>

              <!-- Section 1: VALR -->
              <div class="calc-section-box">
                <div class="sec-box-header">
                  <span class="sec-tag blue">Section 1</span>
                  <h4 class="sec-title">Verbal & Logical Ability (VALR • 26 Qs)</h4>
                </div>
                <div class="inputs-row-2">
                  <div class="form-field">
                    <label>Correct Attempts (+1)</label>
                    <input type="number" id="xatValrCorrect" min="0" max="26" value="14" class="score-input" />
                  </div>
                  <div class="form-field">
                    <label>Wrong Attempts (-0.25)</label>
                    <input type="number" id="xatValrWrong" min="0" max="26" value="4" class="score-input" />
                  </div>
                </div>
              </div>

              <!-- Section 2: DM -->
              <div class="calc-section-box">
                <div class="sec-box-header">
                  <span class="sec-tag yellow">Section 2</span>
                  <h4 class="sec-title">Decision Making (DM • 22 Qs)</h4>
                </div>
                <div class="inputs-row-2">
                  <div class="form-field">
                    <label>Correct Attempts (+1)</label>
                    <input type="number" id="xatDmCorrect" min="0" max="22" value="12" class="score-input" />
                  </div>
                  <div class="form-field">
                    <label>Wrong Attempts (-0.25)</label>
                    <input type="number" id="xatDmWrong" min="0" max="22" value="3" class="score-input" />
                  </div>
                </div>
              </div>

              <!-- Section 3: QADI -->
              <div class="calc-section-box">
                <div class="sec-box-header">
                  <span class="sec-tag green">Section 3</span>
                  <h4 class="sec-title">Quantitative Ability & DI (QADI • 28 Qs)</h4>
                </div>
                <div class="inputs-row-2">
                  <div class="form-field">
                    <label>Correct Attempts (+1)</label>
                    <input type="number" id="xatQadiCorrect" min="0" max="28" value="15" class="score-input" />
                  </div>
                  <div class="form-field">
                    <label>Wrong Attempts (-0.25)</label>
                    <input type="number" id="xatQadiWrong" min="0" max="28" value="3" class="score-input" />
                  </div>
                </div>
              </div>

              <button class="btn-gradient-pill full-width-btn" id="btnCalculateXAT">
                <span>Calculate XAT Score & XLRI Eligibility</span>
              </button>
            </div>

            <!-- XAT Results -->
            <div class="calc-results-card" id="xatResultsCard">
              <div class="results-header">
                <span class="badge-tag">XAT Projection</span>
                <h3 class="results-title">Projected XAT Scorecard</h3>
              </div>

              <div class="hero-score-badge">
                <div class="big-percentile" id="xatResPercentile">96.00 %ile</div>
                <div class="percentile-label">Projected All-India Percentile</div>
              </div>

              <div class="score-summary-grid">
                <div class="summary-metric">
                  <div class="s-val text-blue" id="xatResTotal">36.50</div>
                  <div class="s-lbl">Net Score</div>
                </div>
                <div class="summary-metric">
                  <div class="s-val text-coral" id="xatResPenalty">0.00</div>
                  <div class="s-lbl">Unattempted Penalty</div>
                </div>
              </div>

              <h4 class="breakdown-title">Eligible Institutions</h4>
              <div class="calls-list-box" id="xatCallsListBox">
                <!-- Dynamically populated -->
              </div>
            </div>
          </div>
        </div>

        <!-- TAB 3: CMAT CALCULATOR -->
        <div class="tool-panel ${currentSub === 'cmat' ? 'active' : ''}" id="panel-cmat-calc">
          <div class="calculator-layout">
            <div class="calc-form-card">
              <div class="calc-header-flex">
                <div>
                  <h3 class="calc-card-title">CMAT 2026 Score to Percentile</h3>
                  <p class="calc-card-sub">Max Score: 400 (100 Questions • +4 Correct, -1 Wrong)</p>
                </div>
              </div>

              <div class="inputs-row-2">
                <div class="form-field">
                  <label>Quantitative Techniques (20 Qs)</label>
                  <input type="number" id="cmatQuantCorrect" min="0" max="20" value="16" placeholder="Correct" class="score-input" />
                </div>
                <div class="form-field">
                  <label>Logical Reasoning (20 Qs)</label>
                  <input type="number" id="cmatLrCorrect" min="0" max="20" value="17" placeholder="Correct" class="score-input" />
                </div>
                <div class="form-field">
                  <label>Language Comprehension (20 Qs)</label>
                  <input type="number" id="cmatLangCorrect" min="0" max="20" value="15" placeholder="Correct" class="score-input" />
                </div>
                <div class="form-field">
                  <label>General Awareness (20 Qs)</label>
                  <input type="number" id="cmatGkCorrect" min="0" max="20" value="10" placeholder="Correct" class="score-input" />
                </div>
                <div class="form-field">
                  <label>Innovation & Entrepreneurship (20 Qs)</label>
                  <input type="number" id="cmatInnovCorrect" min="0" max="20" value="15" placeholder="Correct" class="score-input" />
                </div>
              </div>

              <button class="btn-gradient-pill full-width-btn" id="btnCalculateCMAT" style="margin-top: 20px;">
                <span>Calculate CMAT Score & JBIMS Calls</span>
              </button>
            </div>

            <!-- CMAT Results -->
            <div class="calc-results-card" id="cmatResultsCard">
              <div class="results-header">
                <span class="badge-tag">CMAT Projection</span>
                <h3 class="results-title">Projected CMAT Percentile</h3>
              </div>

              <div class="hero-score-badge">
                <div class="big-percentile" id="cmatResPercentile">99.50 %ile</div>
                <div class="percentile-label">Estimated National Percentile</div>
              </div>

              <div class="score-summary-grid">
                <div class="summary-metric">
                  <div class="s-val text-blue" id="cmatResTotal">292</div>
                  <div class="s-lbl">Score / 400</div>
                </div>
              </div>

              <h4 class="breakdown-title">Top College Eligibility</h4>
              <div class="calls-list-box" id="cmatCallsListBox">
                <!-- Dynamically populated -->
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
}
