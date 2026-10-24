import { PROGRAMS_DATA } from '../data/programsData.js';

export function renderProgramsPage(activeSub = 'mba') {
  const currentSub = ['mba', 'pgdm', 'compare', 'specializations', 'roi'].includes(activeSub) ? activeSub : 'mba';

  return `
    <div class="page-programs">
      <!-- Programs Hero -->
      <section class="programs-hero">
        <div class="section-container">
          <div class="hero-badge-pill">
            <span class="badge-text">🎓 MBA vs PGDM Dossier 2027-29</span>
          </div>
          <h1 class="page-title">Management Programs & Specializations</h1>
          <p class="page-subtitle">
            Demystifying University MBA Degrees vs AICTE PGDM Autonomous Diplomas, ROI calculations, and career trajectories across Finance, Marketing, Consulting, and Analytics.
          </p>

          <!-- Tab Selector Bar -->
          <div class="program-tabs-bar">
            <button class="program-tab-btn ${currentSub === 'mba' ? 'active' : ''}" data-program-tab="mba">
              <span class="tab-emoji">🎓</span> MBA Degree
            </button>
            <button class="program-tab-btn ${currentSub === 'pgdm' ? 'active' : ''}" data-program-tab="pgdm">
              <span class="tab-emoji">💼</span> PGDM Diploma
            </button>
            <button class="program-tab-btn ${currentSub === 'compare' ? 'active' : ''}" data-program-tab="compare">
              <span class="tab-emoji">⚖️</span> MBA vs PGDM Matrix
            </button>
            <button class="program-tab-btn ${currentSub === 'specializations' ? 'active' : ''}" data-program-tab="specializations">
              <span class="tab-emoji">🚀</span> Specializations
            </button>
            <button class="program-tab-btn ${currentSub === 'roi' ? 'active' : ''}" data-program-tab="roi">
              <span class="tab-emoji">💰</span> ROI Calculator
            </button>
          </div>
        </div>
      </section>

      <!-- Content Area Based on Tab -->
      <div class="section-container program-content-area">
        <!-- TAB 1: MBA -->
        <div class="program-tab-panel ${currentSub === 'mba' ? 'active' : ''}" id="panel-mba">
          <div class="program-detail-card">
            <div class="panel-header-row">
              <div>
                <span class="tag-badge blue">${PROGRAMS_DATA.mba.badge}</span>
                <h2 class="panel-heading">${PROGRAMS_DATA.mba.title}</h2>
              </div>
              <span class="panel-fee-tag">Avg Fees: ₹2L – ₹18L</span>
            </div>

            <p class="panel-lead-text">${PROGRAMS_DATA.mba.tagline}</p>

            <div class="attributes-grid">
              ${PROGRAMS_DATA.mba.keyAttributes.map(attr => `
                <div class="attr-card">
                  <div class="attr-title">${attr.title}</div>
                  <div class="attr-val">${attr.value}</div>
                </div>
              `).join('')}
            </div>

            <div class="pros-cons-grid">
              <div class="pros-box">
                <h4 class="pros-title">✅ Key Advantages of MBA Degree</h4>
                <ul>
                  ${PROGRAMS_DATA.mba.pros.map(pro => `<li>${pro}</li>`).join('')}
                </ul>
              </div>
              <div class="cons-box">
                <h4 class="cons-title">⚠️ Considerations</h4>
                <ul>
                  ${PROGRAMS_DATA.mba.cons.map(con => `<li>${con}</li>`).join('')}
                </ul>
              </div>
            </div>

            <h3 class="sub-section-title">Premier MBA Offering Institutes in India</h3>
            <div class="institute-chips-wrap">
              ${PROGRAMS_DATA.mba.topColleges.map(c => `
                <div class="inst-pill">
                  <span class="inst-dot"></span>
                  <span>${c}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- TAB 2: PGDM -->
        <div class="program-tab-panel ${currentSub === 'pgdm' ? 'active' : ''}" id="panel-pgdm">
          <div class="program-detail-card">
            <div class="panel-header-row">
              <div>
                <span class="tag-badge purple">${PROGRAMS_DATA.pgdm.badge}</span>
                <h2 class="panel-heading">${PROGRAMS_DATA.pgdm.title}</h2>
              </div>
              <span class="panel-fee-tag">Avg Fees: ₹16L – ₹30L</span>
            </div>

            <p class="panel-lead-text">${PROGRAMS_DATA.pgdm.tagline}</p>

            <div class="attributes-grid">
              ${PROGRAMS_DATA.pgdm.keyAttributes.map(attr => `
                <div class="attr-card">
                  <div class="attr-title">${attr.title}</div>
                  <div class="attr-val">${attr.value}</div>
                </div>
              `).join('')}
            </div>

            <div class="pros-cons-grid">
              <div class="pros-box">
                <h4 class="pros-title">✅ Key Advantages of PGDM Diploma</h4>
                <ul>
                  ${PROGRAMS_DATA.pgdm.pros.map(pro => `<li>${pro}</li>`).join('')}
                </ul>
              </div>
              <div class="cons-box">
                <h4 class="cons-title">⚠️ Considerations</h4>
                <ul>
                  ${PROGRAMS_DATA.pgdm.cons.map(con => `<li>${con}</li>`).join('')}
                </ul>
              </div>
            </div>

            <h3 class="sub-section-title">Premier Autonomous PGDM Institutes in India</h3>
            <div class="institute-chips-wrap">
              ${PROGRAMS_DATA.pgdm.topColleges.map(c => `
                <div class="inst-pill">
                  <span class="inst-dot yellow"></span>
                  <span>${c}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- TAB 3: COMPARISON MATRIX -->
        <div class="program-tab-panel ${currentSub === 'compare' ? 'active' : ''}" id="panel-compare">
          <div class="comparison-card">
            <div class="panel-header-row">
              <div>
                <span class="tag-badge emerald">Head-to-Head</span>
                <h2 class="panel-heading">MBA vs PGDM: Direct Parameter Comparison</h2>
              </div>
            </div>
            <p class="panel-lead-text">
              An objective, side-by-side evaluation to help you choose the right path for your corporate or higher education ambitions.
            </p>

            <div class="table-responsive">
              <table class="styled-compare-table">
                <thead>
                  <tr>
                    <th>Decision Parameter</th>
                    <th class="col-mba">MBA Degree</th>
                    <th class="col-pgdm">PGDM Autonomous Diploma</th>
                  </tr>
                </thead>
                <tbody>
                  ${PROGRAMS_DATA.comparisonMatrix.map(row => `
                    <tr>
                      <td class="param-name"><strong>${row.feature}</strong></td>
                      <td class="param-val mba-val">${row.mba}</td>
                      <td class="param-val pgdm-val">${row.pgdm}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <div class="verdict-banner">
              <div class="verdict-icon">💡</div>
              <div>
                <h4>The Gen-Z Executive Verdict</h4>
                <p>
                  If you convert FMS Delhi or JBIMS Mumbai, take the MBA for unmatched ROI. If you convert XLRI Jamshedpur, SPJIMR, or MDI Gurgaon, take the PGDM for unparalleled industry access. Both hold identical value to recruiters like McKinsey, Google, and Goldman Sachs.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- TAB 4: SPECIALIZATIONS -->
        <div class="program-tab-panel ${currentSub === 'specializations' ? 'active' : ''}" id="panel-specializations">
          <div class="section-title-center">
            <h2 class="panel-heading">MBA Specialization Roadmaps</h2>
            <p class="section-desc">Explore average salaries, top recruiters, and high-impact skillsets for every career domain.</p>
          </div>

          <div class="specializations-grid">
            ${PROGRAMS_DATA.specializations.map(spec => `
              <div class="spec-card">
                <div class="spec-header">
                  <span class="spec-emoji">${spec.icon}</span>
                  <div>
                    <h3 class="spec-title">${spec.name}</h3>
                    <span class="spec-ctc-badge">${spec.avgSalary}</span>
                  </div>
                </div>

                <div class="spec-body">
                  <div class="spec-sec">
                    <div class="spec-sec-title">Key Target Roles:</div>
                    <div class="role-tags">
                      ${spec.roles.map(r => `<span class="role-tag">${r}</span>`).join('')}
                    </div>
                  </div>

                  <div class="spec-sec">
                    <div class="spec-sec-title">Top Campus Recruiters:</div>
                    <div class="recruiter-tags">
                      ${spec.topRecruiters.map(rec => `<span class="rec-tag">${rec}</span>`).join('')}
                    </div>
                  </div>

                  <div class="spec-sec">
                    <div class="spec-sec-title">High-Value Skills:</div>
                    <div class="skill-tags">
                      ${spec.keySkills.map(sk => `<span class="sk-tag">${sk}</span>`).join('')}
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- TAB 5: ROI CALCULATOR -->
        <div class="program-tab-panel ${currentSub === 'roi' ? 'active' : ''}" id="panel-roi">
          <div class="roi-calc-container">
            <div class="panel-header-row">
              <div>
                <span class="tag-badge green">Financial Analytics</span>
                <h2 class="panel-heading">MBA Return on Investment (ROI) & Break-Even Simulator</h2>
              </div>
            </div>
            <p class="panel-lead-text">
              Factor in tuition fees, living expenses, and 2-year opportunity cost (foregone salary) against projected post-MBA salary jumps to calculate your exact break-even timeline.
            </p>

            <div class="roi-calc-grid">
              <!-- Inputs -->
              <div class="roi-inputs-card">
                <h4 class="calc-section-subtitle">Financial Inputs</h4>

                <div class="input-form-group">
                  <label>Total 2-Year Tuition Fees (in ₹ Lakhs)</label>
                  <input type="number" id="roiTuition" value="24" min="1" max="40" step="0.5" />
                  <span class="input-helper">e.g. FMS = 2.3, IIM-A = 26.5, XLRI = 28</span>
                </div>

                <div class="input-form-group">
                  <label>2-Year Living & Hostel Expenses (in ₹ Lakhs)</label>
                  <input type="number" id="roiLiving" value="3.5" min="0.5" max="10" step="0.5" />
                </div>

                <div class="input-form-group">
                  <label>Current Pre-MBA Annual CTC (in ₹ Lakhs)</label>
                  <input type="number" id="roiCurrentCTC" value="8" min="0" max="30" step="0.5" />
                  <span class="input-helper">If fresher, enter 0</span>
                </div>

                <div class="input-form-group">
                  <label>Target Post-MBA Annual CTC (in ₹ Lakhs)</label>
                  <input type="number" id="roiPostCTC" value="28" min="8" max="60" step="1" />
                  <span class="input-helper">Average Tier-1 CTC: ₹28-34 LPA</span>
                </div>

                <button class="btn-gradient-pill full-width-btn" id="runRoiCalcBtn">
                  <span>Calculate Financial Break-Even</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>

              <!-- Outputs -->
              <div class="roi-results-card" id="roiResultsCard">
                <h4 class="calc-section-subtitle">Financial Forecast & Wealth Multiplier</h4>

                <div class="roi-metrics-summary">
                  <div class="roi-metric-big">
                    <div class="roi-number text-green" id="roiBreakEvenMonths">18 Months</div>
                    <div class="roi-lbl">Break-Even Period</div>
                  </div>

                  <div class="roi-breakdown-list">
                    <div class="roi-row">
                      <span>Total Direct Investment (Fees + Living):</span>
                      <strong id="roiTotalDirect">₹27.5 Lakhs</strong>
                    </div>
                    <div class="roi-row">
                      <span>2-Year Opportunity Cost (Foregone Salary):</span>
                      <strong id="roiForegone">₹16.0 Lakhs</strong>
                    </div>
                    <div class="roi-row">
                      <span>Total Effective Investment:</span>
                      <strong id="roiTotalEffective" class="text-coral">₹43.5 Lakhs</strong>
                    </div>
                    <div class="roi-row">
                      <span>Annual Pre-Tax Increment:</span>
                      <strong id="roiAnnualIncrement" class="text-blue">+₹20.0 LPA</strong>
                    </div>
                    <div class="roi-row highlight-row">
                      <span>Estimated 5-Year Net Wealth Boost:</span>
                      <strong id="roi5YrBoost" class="text-green">+₹76.5 Lakhs</strong>
                    </div>
                  </div>
                </div>

                <div class="roi-insight-box">
                  <p id="roiInsightText">
                    🚀 <strong>Outstanding Investment:</strong> At an expected CTC of ₹28 LPA, your incremental post-MBA cash flow pays off the entire direct investment in approximately 18 months, boosting your net earnings by over ₹76.5 Lakhs over a 5-year career horizon!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initProgramsInteractions(onTabChange) {
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

      if (onTabChange) onTabChange(targetTab);
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
