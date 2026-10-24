import { EXAMS_DATA } from '../data/examsData.js';

export function renderExamsPage(selectedExamId = null) {
  const currentExam = selectedExamId ? EXAMS_DATA.find(e => e.id === selectedExamId) : null;

  return `
    <div class="page-exams">
      <!-- Exams Hero -->
      <section class="exams-hero">
        <div class="section-container">
          <div class="hero-badge-pill">
            <span class="badge-text">📝 8 National & State MBA Entrance Exams</span>
          </div>
          <h1 class="page-title">MBA Entrance Exams Guide (2027-29 Admission Session)</h1>
          <p class="page-subtitle">
            Complete dossiers on test patterns, sectional weightage, official negative marking rules, score vs percentile benchmarks, and top college cutoffs.
          </p>

          <!-- Exam Selector Pills -->
          <div class="exam-selector-pills" id="examSelectorPills">
            <button class="exam-pill ${!selectedExamId ? 'active' : ''}" data-exam-filter="all">All 8 Exams</button>
            ${EXAMS_DATA.map(e => `
              <button class="exam-pill ${selectedExamId === e.id ? 'active' : ''}" data-exam-filter="${e.id}">
                ${e.name.split(' ')[0]}
              </button>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Main Content Grid -->
      <div class="section-container exams-content-area">
        ${currentExam ? renderSingleExamDossier(currentExam) : renderAllExamsGrid(EXAMS_DATA)}
      </div>
    </div>
  `;
}

function renderAllExamsGrid(exams) {
  return `
    <div class="all-exams-grid">
      ${exams.map(exam => `
        <div class="exam-card-full" id="exam-card-${exam.id}">
          <div class="exam-card-top">
            <div class="exam-header-meta">
              <span class="badge-tag ${exam.badgeColor}">${exam.conductingBody}</span>
              <span class="exam-date-badge">📅 ${exam.examDate}</span>
            </div>
            <h2 class="exam-title">${exam.name} <span class="exam-full-paren">(${exam.fullName})</span></h2>
            <p class="exam-tagline">${exam.tagline}</p>
          </div>

          <div class="exam-quick-stats-strip">
            <div class="e-stat">
              <div class="e-val">${exam.durationMinutes} Mins</div>
              <div class="e-lbl">Duration</div>
            </div>
            <div class="e-stat">
              <div class="e-val">${exam.totalQuestions} Qs</div>
              <div class="e-lbl">Questions</div>
            </div>
            <div class="e-stat">
              <div class="e-val">${exam.totalMarks}</div>
              <div class="e-lbl">Total Marks</div>
            </div>
            <div class="e-stat">
              <div class="e-val">${exam.difficulty}</div>
              <div class="e-lbl">Difficulty</div>
            </div>
          </div>

          <div class="exam-sections-overview">
            <h4 class="sec-title-mini">Sections & Question Distribution:</h4>
            <div class="sec-distribution-list">
              ${exam.sections.map(s => `
                <div class="sec-chip">
                  <strong>${s.name.split('(')[0]}:</strong>
                  <span>${s.questions} Qs</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="exam-colleges-preview">
            <h4 class="sec-title-mini">Top Participating B-Schools:</h4>
            <div class="colleges-pills-row">
              ${exam.topColleges.slice(0, 3).map(c => `
                <span class="col-pill">
                  ${c.name.split('(')[0]} <span class="cutoff-hint">(${c.cutoff})</span>
                </span>
              `).join('')}
            </div>
          </div>

          <div class="exam-card-actions">
            <a href="/exams/${exam.id}" class="btn-gradient-pill btn-sm" data-route="exams" data-sub="${exam.id}">
              <span>View Full Dossier & Syllabus</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
            </a>
            ${['cat', 'xat', 'cmat'].includes(exam.id) ? `
              <a href="${exam.id === 'cat' ? '/tools/cat-college-predictor' : (exam.id === 'xat' ? '/tools/xat-percentile-calculator' : '/tools/cmat-percentile-calculator')}" class="btn-secondary-pill btn-sm" data-route="tools" data-sub="${exam.id}">
                <span>${exam.id === 'cat' ? 'CAT College Predictor →' : 'Score Calculator →'}</span>
              </a>
            ` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderSingleExamDossier(exam) {
  return `
    <div class="single-exam-dossier">
      <div class="back-link-row">
        <a href="/exams" class="back-btn" data-route="exams">← Back to All 8 Exams</a>
      </div>

      <div class="dossier-hero-card">
        <div class="exam-header-meta">
          <span class="badge-tag ${exam.badgeColor}">${exam.conductingBody}</span>
          <span class="exam-date-badge">📅 ${exam.examDate}</span>
        </div>
        <h1 class="dossier-title">${exam.name} — ${exam.fullName}</h1>
        <p class="dossier-tagline">${exam.tagline}</p>
        <p class="dossier-overview">${exam.overview}</p>

        <div class="dossier-key-details-grid">
          <div class="detail-item">
            <div class="d-label">Mode of Test</div>
            <div class="d-val">${exam.mode}</div>
          </div>
          <div class="detail-item">
            <div class="d-label">Registration Period</div>
            <div class="d-val">${exam.registrationPeriod}</div>
          </div>
          <div class="detail-item">
            <div class="d-label">Application Fee</div>
            <div class="d-val">${exam.applicationFee}</div>
          </div>
          <div class="detail-item">
            <div class="d-label">Negative Marking</div>
            <div class="d-val text-coral">${exam.negativeMarking}</div>
          </div>
        </div>
      </div>

      <!-- Sections & Syllabus -->
      <div class="dossier-card">
        <h3 class="dossier-section-heading">Detailed Sectional Syllabus & Timing</h3>
        <div class="sections-accordion-grid">
          ${exam.sections.map((sec, idx) => `
            <div class="section-deep-card">
              <div class="sec-card-header">
                <span class="sec-num-badge">Part ${idx + 1}</span>
                <h4 class="sec-deep-title">${sec.name}</h4>
              </div>
              <div class="sec-meta-row">
                <span>Questions: <strong>${sec.questions}</strong></span>
                <span>Max Marks: <strong>${sec.marks}</strong></span>
                <span>Time Allotted: <strong>${sec.timeMinutes ? sec.timeMinutes + ' Mins' : 'Composite'}</strong></span>
              </div>
              <div class="sec-topics-list">
                <div class="topics-label">Key High-Yield Topics:</div>
                <ul>
                  ${sec.topics.map(t => `<li>${t}</li>`).join('')}
                </ul>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Top Colleges & Cutoffs -->
      <div class="dossier-card">
        <h3 class="dossier-section-heading">Target B-Schools & Accepted Cutoffs</h3>
        <div class="table-responsive">
          <table class="styled-compare-table">
            <thead>
              <tr>
                <th>Institute Name & Program</th>
                <th>Target Cutoff</th>
                <th>Average CTC</th>
                <th>Total Tuition Fees</th>
              </tr>
            </thead>
            <tbody>
              ${exam.topColleges.map(c => `
                <tr>
                  <td><strong>${c.name}</strong></td>
                  <td><span class="cutoff-pill">${c.cutoff}</span></td>
                  <td class="text-green font-bold">${c.avgSalary}</td>
                  <td>${c.fees}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        ${exam.id === 'cat' ? `
          <div class="exam-tool-cta-box" style="margin-top: 20px; padding: 20px 24px; background: linear-gradient(135deg, #1E1B4B 0%, #312E81 100%); border-radius: 14px; color: #fff; display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;">
            <div>
              <div style="font-weight: 700; font-size: 1.1rem; color: #FBBF24;">⚡ Predict Your Admission Chances Across All 21 IIMs</div>
              <div style="font-size: 0.9rem; color: #E0E7FF; margin-top: 4px;">Enter your raw score or response sheet to evaluate scaled scores and call probability.</div>
            </div>
            <a href="/tools/cat-college-predictor" class="btn-gradient-pill btn-sm" data-route="tools" data-sub="cat">
              <span>CAT College Predictor</span>
            </a>
          </div>
        ` : ''}
      </div>

      <!-- Score vs Percentile Curve -->
      <div class="dossier-card">
        <h3 class="dossier-section-heading">Historical Score vs Percentile Benchmarks</h3>
        <div class="score-perc-grid">
          ${exam.scoreVsPercentile.map(sp => `
            <div class="score-perc-cell">
              <div class="sp-percentile">${sp.percentile}</div>
              <div class="sp-score">${sp.score}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Preparation Tips -->
      <div class="dossier-card prep-card">
        <h3 class="dossier-section-heading">💡 Master Strategy & Hacks for ${exam.name}</h3>
        <ul class="prep-tips-list">
          ${exam.prepTips.map(tip => `<li>${tip}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}

export function initExamsInteractions(navigateToFn) {
  const pills = document.querySelectorAll('#examSelectorPills .exam-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      const filter = pill.getAttribute('data-exam-filter');
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      if (filter === 'all') {
        if (navigateToFn) navigateToFn('/exams');
        else window.location.href = '/exams';
      } else {
        if (navigateToFn) navigateToFn(`/exams/${filter}`);
        else window.location.href = `/exams/${filter}`;
      }
    });
  });
}

