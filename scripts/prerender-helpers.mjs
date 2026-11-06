/**
 * Prerender HTML Generators for SEO, GEO & AEO
 * FindMyBSchool.com
 */

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const COMMON_HEADER = `
  <header style="padding: 20px 24px; border-bottom: 1px solid #E2E8F0; text-align: center; background: #FAFAFE;">
    <a href="/" style="font-weight: 800; font-size: 1.5rem; color: #6B2CF5; text-decoration: none;">FindMyBSchool</a>
    <p style="margin: 4px 0 0; color: #64748B; font-size: 0.95rem;">India’s Verified MBA &amp; PGDM Admissions Portal • Session 2027-29</p>
  </header>
`;

/**
 * 1. Rich Exam Landing Page Generator
 * Used for /exams/cat, /exams/xat, /exams/snap, /exams/nmat, /exams/mat, /exams/cmat, /exams/mhcet
 */
export function generateExamBodyHtml(exam) {
  const toolLinkMap = {
    cat: { url: '/tools/cat-college-predictor', label: '📊 Calculate CAT Score &amp; Percentile' },
    xat: { url: '/tools/xat-percentile-calculator', label: '🎯 XAT 2027 Score Calculator' },
    cmat: { url: '/tools/cmat-percentile-calculator', label: '⚡ CMAT Score &amp; Cutoff Predictor' },
    snap: { url: '/tools/snap-score-calculator', label: '⚡ SNAP 2026 Score &amp; Percentile Calculator' },
    nmat: { url: '/tools/nmat-score-predictor', label: '🎯 NMAT Scaled Score &amp; NMIMS Predictor' },
    mat: { url: '/colleges', label: '🏛️ Explore 600+ MAT Accepting Colleges' },
    mhcet: { url: '/colleges', label: '🏛️ Explore Top Maharashtra MMS Colleges' }
  };

  const toolCta = toolLinkMap[exam.id] || { url: '/tools/cat-college-predictor', label: 'Calculate Score &amp; Percentile' };

  return `
    ${COMMON_HEADER}
    <main style="max-width: 1100px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif; color: #1E293B; line-height: 1.65;">
      
      <!-- Breadcrumb Navigation -->
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <ol style="list-style: none; display: flex; flex-wrap: wrap; gap: 8px; padding: 0; margin: 0;">
          <li><a href="/" style="color: #6B2CF5; text-decoration: none; font-weight: 500;">Home</a> &gt;</li>
          <li><a href="/exams" style="color: #6B2CF5; text-decoration: none; font-weight: 500;">MBA Entrance Exams</a> &gt;</li>
          <li aria-current="page" style="color: #0F172A; font-weight: 600;">${escapeHtml(exam.name)}</li>
        </ol>
      </nav>

      <!-- Hero Header -->
      <header style="margin-bottom: 28px;">
        <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(107, 44, 245, 0.08); color: #6B2CF5; padding: 6px 14px; border-radius: 9999px; font-size: 0.85rem; font-weight: 700; margin-bottom: 14px;">
          <span>⚡ Official ${escapeHtml(exam.name)} Admissions Guide • Session 2026-27</span>
        </div>
        <h1 style="font-size: 2.25rem; font-weight: 800; color: #0F172A; line-height: 1.25; margin: 0 0 14px;">
          ${escapeHtml(exam.fullName)} (${escapeHtml(exam.name)}): Dates, Syllabus, Cutoffs &amp; Pattern
        </h1>
        <p style="color: #475569; font-size: 1.15rem; line-height: 1.6; max-width: 960px; margin: 0 0 16px;">
          ${escapeHtml(exam.overview || `${exam.fullName} is a premier national MBA entrance examination conducted by ${exam.conductingBody}.`)}
        </p>
        
        <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 16px;">
          <a href="${toolCta.url}" style="padding: 12px 24px; background: #6B2CF5; color: #FFFFFF; font-weight: 700; text-decoration: none; border-radius: 8px; font-size: 0.95rem; box-shadow: 0 4px 12px rgba(107, 44, 245, 0.25);">
            ${toolCta.label}
          </a>
          <a href="/colleges" style="padding: 12px 24px; background: #F1F5F9; color: #1E293B; font-weight: 600; text-decoration: none; border-radius: 8px; font-size: 0.95rem;">
            Explore Accepting Colleges
          </a>
        </div>
      </header>

      <!-- Key Factsheet Table (GEO & Direct Answers Target) -->
      <section style="margin-bottom: 36px; background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 12px; padding: 22px;">
        <h2 style="font-size: 1.35rem; font-weight: 800; color: #0F172A; margin: 0 0 16px;">
          ${escapeHtml(exam.name)} Fast Facts &amp; Key Examination Parameters
        </h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; padding: 14px;">
            <div style="font-size: 0.8rem; color: #64748B; font-weight: 700; text-transform: uppercase;">Conducting Body</div>
            <div style="font-size: 1.15rem; font-weight: 800; color: #0F172A; margin-top: 4px;">${escapeHtml(exam.conductingBody)}</div>
          </div>
          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; padding: 14px;">
            <div style="font-size: 0.8rem; color: #64748B; font-weight: 700; text-transform: uppercase;">Exam Date</div>
            <div style="font-size: 1.15rem; font-weight: 800; color: #6B2CF5; margin-top: 4px;">${escapeHtml(exam.examDate)}</div>
          </div>
          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; padding: 14px;">
            <div style="font-size: 0.8rem; color: #64748B; font-weight: 700; text-transform: uppercase;">Registration Window</div>
            <div style="font-size: 1.05rem; font-weight: 700; color: #0F172A; margin-top: 4px;">${escapeHtml(exam.registrationPeriod || 'Announced Annually')}</div>
          </div>
          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; padding: 14px;">
            <div style="font-size: 0.8rem; color: #64748B; font-weight: 700; text-transform: uppercase;">Format &amp; Mode</div>
            <div style="font-size: 1.05rem; font-weight: 700; color: #10B981; margin-top: 4px;">${escapeHtml(exam.mode || 'Computer Based Test (CBT)')}</div>
          </div>
          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; padding: 14px;">
            <div style="font-size: 0.8rem; color: #64748B; font-weight: 700; text-transform: uppercase;">Total Questions &amp; Duration</div>
            <div style="font-size: 1.05rem; font-weight: 700; color: #0F172A; margin-top: 4px;">${exam.totalQuestions} Qs • ${exam.durationMinutes} Mins</div>
          </div>
          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; padding: 14px;">
            <div style="font-size: 0.8rem; color: #64748B; font-weight: 700; text-transform: uppercase;">Application Fee</div>
            <div style="font-size: 1.05rem; font-weight: 700; color: #0F172A; margin-top: 4px;">${escapeHtml(exam.applicationFee || 'Varies by category')}</div>
          </div>
        </div>

        <div style="margin-top: 16px; padding: 12px 16px; background: #FEF3C7; border: 1px solid #FDE68A; border-radius: 8px; font-size: 0.9rem; color: #92400E;">
          ⚖️ <strong>Official Marking Scheme:</strong> ${escapeHtml(exam.negativeMarking || 'Refer to official test specifications.')}
        </div>
      </section>

      <!-- Sectional Structure & Exam Pattern -->
      ${exam.sections && exam.sections.length > 0 ? `
        <section style="margin-bottom: 36px;">
          <h2 style="font-size: 1.5rem; font-weight: 800; color: #0F172A; margin: 0 0 14px;">
            ${escapeHtml(exam.name)} Sectional Pattern, Question Distribution &amp; Topics
          </h2>
          <p style="color: #475569; font-size: 1rem; margin: 0 0 16px;">
            The ${escapeHtml(exam.name)} question paper is structured into distinct timed sections. Candidates must balance accuracy and speed to meet overall and sectional cutoff benchmarks:
          </p>
          <div style="overflow-x: auto; border: 1px solid #E2E8F0; border-radius: 10px; margin-bottom: 20px;">
            <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
              <thead style="background: #F1F5F9; color: #334155;">
                <tr>
                  <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Section Name</th>
                  <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Questions</th>
                  <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Time Limit</th>
                  <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Max Marks</th>
                  <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Core Syllabus Topics</th>
                </tr>
              </thead>
              <tbody>
                ${exam.sections.map((sec, idx) => `
                  <tr style="border-bottom: 1px solid #E2E8F0; background: ${idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC'};">
                    <td style="padding: 12px 16px; font-weight: 700; color: #0F172A;">${escapeHtml(sec.name)}</td>
                    <td style="padding: 12px 16px; font-weight: 600;">${sec.questions} Qs</td>
                    <td style="padding: 12px 16px;">${sec.timeMinutes ? sec.timeMinutes + ' Mins' : 'Flexible'}</td>
                    <td style="padding: 12px 16px; font-weight: 700; color: #6B2CF5;">${sec.marks || '-'} M</td>
                    <td style="padding: 12px 16px; font-size: 0.85rem; color: #475569;">
                      ${sec.topics ? escapeHtml(sec.topics.join(' • ')) : 'General Syllabus'}
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </section>
      ` : ''}

      <!-- Marks vs Percentile Table -->
      ${exam.scoreVsPercentile && exam.scoreVsPercentile.length > 0 ? `
        <section style="margin-bottom: 36px;">
          <h2 style="font-size: 1.5rem; font-weight: 800; color: #0F172A; margin: 0 0 14px;">
            ${escapeHtml(exam.name)} Marks vs Percentile (Raw Score to Percentile Conversion)
          </h2>
          <p style="color: #475569; font-size: 1rem; margin: 0 0 16px;">
            Based on historical test administrations, the following table summarizes the score requirements to achieve key percentile brackets in ${escapeHtml(exam.name)}:
          </p>
          <div style="overflow-x: auto; border: 1px solid #E2E8F0; border-radius: 10px; margin-bottom: 16px;">
            <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
              <thead style="background: #F8FAFC; color: #0F172A;">
                <tr>
                  <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Target Percentile</th>
                  <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Estimated Score Required</th>
                  <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Admission Tier &amp; Colleges</th>
                </tr>
              </thead>
              <tbody>
                ${exam.scoreVsPercentile.map((item, idx) => `
                  <tr style="border-bottom: 1px solid #E2E8F0; background: ${idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC'};">
                    <td style="padding: 12px 16px; font-weight: 800; color: #6B2CF5;">${escapeHtml(item.percentile)}</td>
                    <td style="padding: 12px 16px; font-weight: 700; color: #0F172A;">${escapeHtml(item.score)}</td>
                    <td style="padding: 12px 16px; font-size: 0.9rem; color: #475569;">
                      ${item.percentile.includes('99') ? 'Tier 1 Top Flagship Calls' : item.percentile.includes('95') ? 'Tier 1.5 Premier Business Schools' : item.percentile.includes('90') ? 'Tier 2 High-ROI Institutions' : 'Top Metro PGDM Colleges'}
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </section>
      ` : ''}

      <!-- Top Colleges Accepting Scores -->
      ${exam.topColleges && exam.topColleges.length > 0 ? `
        <section style="margin-bottom: 36px;">
          <h2 style="font-size: 1.5rem; font-weight: 800; color: #0F172A; margin: 0 0 14px;">
            Top MBA &amp; PGDM Colleges Accepting ${escapeHtml(exam.name)}: Fees &amp; Cutoffs
          </h2>
          <p style="color: #475569; font-size: 1rem; margin: 0 0 16px;">
            Explore premier institutions shortlisting applicants through ${escapeHtml(exam.name)} scores along with audited 2-year tuition fees and average placement CTC packages:
          </p>
          <div style="overflow-x: auto; border: 1px solid #E2E8F0; border-radius: 10px;">
            <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
              <thead style="background: #F1F5F9; color: #334155;">
                <tr>
                  <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">College &amp; Program</th>
                  <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Cutoff Requirement</th>
                  <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Average CTC Package</th>
                  <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">2-Yr Total Fees</th>
                  <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Action</th>
                </tr>
              </thead>
              <tbody>
                ${exam.topColleges.map((col, idx) => `
                  <tr style="border-bottom: 1px solid #E2E8F0; background: ${idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC'};">
                    <td style="padding: 12px 16px; font-weight: 700; color: #0F172A;">${escapeHtml(col.name)}</td>
                    <td style="padding: 12px 16px; font-weight: 600; color: #6B2CF5;">${escapeHtml(col.cutoff)}</td>
                    <td style="padding: 12px 16px; font-weight: 700; color: #10B981;">${escapeHtml(col.avgSalary)}</td>
                    <td style="padding: 12px 16px;">${escapeHtml(col.fees)}</td>
                    <td style="padding: 12px 16px;">
                      <a href="/colleges" style="color: #6B2CF5; font-weight: 700; text-decoration: none;">View Profile &rarr;</a>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </section>
      ` : ''}

      <!-- Eligibility & Preparation Strategy -->
      <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin-bottom: 36px;">
        ${exam.eligibility && exam.eligibility.length > 0 ? `
          <div style="background: #FFFFFF; border: 1.5px solid #E2E8F0; border-radius: 12px; padding: 20px;">
            <h3 style="font-size: 1.25rem; font-weight: 800; color: #0F172A; margin: 0 0 12px;">
              Eligibility Criteria for ${escapeHtml(exam.name)}
            </h3>
            <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.8; font-size: 0.95rem;">
              ${exam.eligibility.map(item => `<li>${escapeHtml(item)}</li>`).join('')}
            </ul>
          </div>
        ` : ''}

        ${exam.prepTips && exam.prepTips.length > 0 ? `
          <div style="background: #F0FDF4; border: 1.5px solid #BBF7D0; border-radius: 12px; padding: 20px;">
            <h3 style="font-size: 1.25rem; font-weight: 800; color: #166534; margin: 0 0 12px;">
              Expert Preparation Strategies
            </h3>
            <ul style="margin: 0; padding-left: 20px; color: #14532D; line-height: 1.8; font-size: 0.95rem;">
              ${exam.prepTips.map(item => `<li>${escapeHtml(item)}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
      </section>

      <!-- Frequently Asked Questions (FAQ Section) -->
      <section style="margin-bottom: 40px;">
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #0F172A; margin: 0 0 16px;">
          Frequently Asked Questions About ${escapeHtml(exam.name)}
        </h2>
        
        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer; font-size: 1.05rem;">
            When is the ${escapeHtml(exam.name)} 2026-27 exam conducted?
          </summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            ${escapeHtml(exam.fullName)} (${escapeHtml(exam.name)}) is scheduled for ${escapeHtml(exam.examDate)}. The examination is conducted in ${escapeHtml(exam.mode || 'Computer-Based Test (CBT)')} format by ${escapeHtml(exam.conductingBody)}.
          </div>
        </details>

        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer; font-size: 1.05rem;">
            What is the official marking scheme for ${escapeHtml(exam.name)}?
          </summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            ${escapeHtml(exam.negativeMarking || 'Please refer to the official exam notification for detailed sectional rules.')}
          </div>
        </details>

        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer; font-size: 1.05rem;">
            Which premier business schools accept ${escapeHtml(exam.name)} scores?
          </summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            ${escapeHtml(exam.name)} scores are accepted by premier management institutions across India, including ${exam.topColleges ? exam.topColleges.slice(0, 4).map(c => c.name).join(', ') : 'top business schools'} for admission into MBA and PGDM programs.
          </div>
        </details>

        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer; font-size: 1.05rem;">
            How can I calculate my score and predicted percentile for ${escapeHtml(exam.name)}?
          </summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            You can use the FindMyBSchool automated percentile calculators to input your raw question attempts or response sheets and obtain an instant estimated percentile rank alongside call forecasts for participating institutions.
          </div>
        </details>
      </section>

      <!-- Bottom CTAs -->
      <section style="padding: 24px; background: #FAFAFE; border: 1px solid #E2E8F0; border-radius: 14px; text-align: center; margin-bottom: 24px;">
        <h3 style="font-size: 1.25rem; font-weight: 800; color: #0F172A; margin: 0 0 8px;">Explore Verified Business Schools &amp; Predictors</h3>
        <p style="color: #64748B; font-size: 0.95rem; margin: 0 0 16px;">Compare 600+ verified colleges with audited fees and entrance cutoffs:</p>
        <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
          <a href="/colleges" style="padding: 10px 18px; background: #6B2CF5; color: #FFFFFF; font-weight: 700; text-decoration: none; border-radius: 8px; font-size: 0.9rem;">🏛️ Explore 600+ Colleges</a>
          <a href="/tools/cat-college-predictor" style="padding: 10px 18px; background: #FFFFFF; border: 1.5px solid #6B2CF5; color: #6B2CF5; font-weight: 700; text-decoration: none; border-radius: 8px; font-size: 0.9rem;">📊 CAT Score Calculator</a>
          <a href="/programs/compare" style="padding: 10px 18px; background: #FFFFFF; border: 1.5px solid #CBD5E1; color: #0F172A; font-weight: 600; text-decoration: none; border-radius: 8px; font-size: 0.9rem;">⚖️ MBA vs PGDM Guide</a>
        </div>
      </section>

    </main>
  `;
}

/**
 * 2. University MBA Colleges Hub Generator (/colleges/mba)
 */
export function generateMbaCollegesBodyHtml(colleges = []) {
  const universityColleges = colleges.filter(c => 
    (c.degreesOffered && c.degreesOffered.includes('MBA')) ||
    c.name.includes('University') ||
    c.name.includes('Faculty of Management') ||
    c.name.includes('IIT') ||
    c.id.includes('fms') ||
    c.id.includes('jbims')
  ).slice(0, 20);

  return `
    ${COMMON_HEADER}
    <main style="max-width: 1100px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif; color: #1E293B; line-height: 1.65;">
      
      <!-- Breadcrumb -->
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <a href="/" style="color: #6B2CF5; text-decoration: none;">Home</a> &gt; 
        <a href="/colleges" style="color: #6B2CF5; text-decoration: none;">Colleges</a> &gt; 
        <span>University MBA Colleges</span>
      </nav>

      <!-- Hero Header -->
      <header style="margin-bottom: 28px;">
        <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(107, 44, 245, 0.08); color: #6B2CF5; padding: 6px 14px; border-radius: 9999px; font-size: 0.85rem; font-weight: 700; margin-bottom: 14px;">
          <span>🏛️ Statutory UGC Recognized Degrees • Session 2027-29</span>
        </div>
        <h1 style="font-size: 2.25rem; font-weight: 800; color: #0F172A; line-height: 1.25; margin: 0 0 14px;">
          Top University MBA Colleges in India: Fees, Cutoffs &amp; Placements
        </h1>
        <p style="color: #475569; font-size: 1.15rem; line-height: 1.6; max-width: 960px;">
          Compare statutory university MBA degrees in India offered by central, state, and deemed universities under UGC regulations. University MBA programs offer recognized postgraduate master's degrees with unmatched Return on Investment (ROI)—headlined by FMS Delhi (₹2 Lakhs 2-year fee), JBIMS Mumbai, and top IIT management departments.
        </p>
      </header>

      <!-- Quick Highlights Grid -->
      <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 32px;">
        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 18px;">
          <div style="font-size: 0.85rem; color: #64748B; font-weight: 700;">DEGREE CREDENTIAL</div>
          <div style="font-size: 1.3rem; font-weight: 800; color: #0F172A; margin-top: 4px;">Master's Degree (MBA)</div>
          <p style="font-size: 0.85rem; color: #64748B; margin: 6px 0 0;">Statutory degree recognized by UGC and universally valid for PhD and government examinations.</p>
        </div>
        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 18px;">
          <div style="font-size: 0.85rem; color: #64748B; font-weight: 700;">RETURN ON INVESTMENT</div>
          <div style="font-size: 1.3rem; font-weight: 800; color: #10B981; margin-top: 4px;">Ultra High ROI</div>
          <p style="font-size: 0.85rem; color: #64748B; margin: 6px 0 0;">FMS Delhi (₹2.0L fee &rarr; ₹34.1L CTC), SIMSREE (₹1.36L fee &rarr; ₹15.2L CTC), JBIMS Mumbai.</p>
        </div>
        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 18px;">
          <div style="font-size: 0.85rem; color: #64748B; font-weight: 700;">PRIMARY ENTRANCE TESTS</div>
          <div style="font-size: 1.3rem; font-weight: 800; color: #6B2CF5; margin-top: 4px;">CAT, CMAT &amp; CET</div>
          <p style="font-size: 0.85rem; color: #64748B; margin: 6px 0 0;">CAT for FMS &amp; IITs; MAH MBA CET / CMAT for Maharashtra university MMS programs.</p>
        </div>
      </section>

      <!-- Verified University MBA Colleges Table -->
      <section style="margin-bottom: 40px;">
        <h2 style="font-size: 1.45rem; font-weight: 800; color: #0F172A; margin: 0 0 16px;">
          Premier University MBA Colleges in India: Audited Fees, Packages &amp; Cutoffs
        </h2>
        <div style="overflow-x: auto; border: 1px solid #E2E8F0; border-radius: 10px;">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
            <thead style="background: #F1F5F9; color: #334155;">
              <tr>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">College &amp; University</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">2-Yr Total Fees</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Average CTC</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Cutoff</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">NIRF Rank</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${universityColleges.map((col, idx) => `
                <tr style="border-bottom: 1px solid #E2E8F0; background: ${idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC'};">
                  <td style="padding: 12px 16px;">
                    <a href="/colleges/${col.id}" style="color: #6B2CF5; font-weight: 700; text-decoration: none;">${escapeHtml(col.name)}</a>
                    <div style="font-size: 0.8rem; color: #64748B;">${escapeHtml(col.city || col.location || 'India')}</div>
                  </td>
                  <td style="padding: 12px 16px; font-weight: 700; color: #0F172A;">${escapeHtml(col.fees)}</td>
                  <td style="padding: 12px 16px; font-weight: 700; color: #10B981;">${escapeHtml(col.avgSalary)}</td>
                  <td style="padding: 12px 16px; font-weight: 600; color: #6B2CF5;">
                    ${col.cutoffCAT !== 'N/A' ? `CAT ${col.cutoffCAT}` : (col.cutoffCMAT !== 'N/A' ? `CMAT ${col.cutoffCMAT}` : col.cutoffXAT || 'Merit')}
                  </td>
                  <td style="padding: 12px 16px;">${col.nirfRank ? '#' + col.nirfRank : 'Top Tier'}</td>
                  <td style="padding: 12px 16px;">
                    <a href="/colleges/${col.id}" style="padding: 6px 12px; background: #6B2CF5; color: #FFFFFF; font-weight: 600; border-radius: 6px; text-decoration: none; font-size: 0.85rem;">View Details</a>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </section>

      <!-- Editorial Guide: What is an MBA Degree? -->
      <section style="margin-bottom: 36px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px;">
        <h2 style="font-size: 1.4rem; font-weight: 800; color: #0F172A; margin: 0 0 12px;">
          What is a University MBA Degree in India?
        </h2>
        <p style="color: #475569; font-size: 1rem; line-height: 1.7; margin: 0 0 14px;">
          In India, an <strong>MBA (Master of Business Administration)</strong> is a formal master's degree conferred strictly by universities that are chartered or recognized by the <strong>University Grants Commission (UGC)</strong>. This includes statutory central universities (such as Delhi University for FMS), state universities (such as Mumbai University for JBIMS), and institutes of national importance (such as the IITs).
        </p>
        <p style="color: #475569; font-size: 1rem; line-height: 1.7; margin: 0 0 14px;">
          <strong>Key Advantages of a University MBA:</strong>
        </p>
        <ul style="padding-left: 20px; color: #334155; line-height: 1.8; font-size: 0.95rem;">
          <li><strong>Global Credential Recognition:</strong> Because it is an official Master's degree, it receives seamless WES (World Education Services) equivalency in the USA, Canada, and Europe without requiring equivalence certificates.</li>
          <li><strong>Direct PhD Eligibility:</strong> Candidates can directly register for doctorate programs or sit for the UGC-NET lectureship examinations.</li>
          <li><strong>Subsidized Public Tuition:</strong> University departments benefit from statutory grants, offering high corporate recruitments at a fraction of private b-school fees.</li>
        </ul>
      </section>

      <!-- FAQs -->
      <section style="margin-bottom: 36px;">
        <h2 style="font-size: 1.45rem; font-weight: 800; color: #0F172A; margin: 0 0 16px;">Frequently Asked Questions on University MBA Colleges</h2>
        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer;">Which are the highest ROI university MBA colleges in India?</summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            The top High-ROI university MBA colleges include FMS Delhi (University of Delhi, ₹2.00 Lakhs 2-year fee, ₹34.10 LPA avg package), SIMSREE Mumbai (₹1.36 Lakhs fee, ₹15.19 LPA avg package), JBIMS Mumbai (₹6.10 Lakhs fee, ₹28.02 LPA avg package), and Department of Management Studies, IIT Delhi.
          </div>
        </details>
        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer;">Is an MBA degree better than a PGDM diploma?</summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            Both hold equal weight in corporate placements if the institution is premier. An MBA is an academic degree granted by a UGC university, while a PGDM is an industry-aligned diploma granted by an autonomous AICTE-approved institute. Autonomous PGDM diplomas holding official AIU MBA equivalence (e.g., XLRI, SPJIMR, MDI) are legally treated on par with MBA degrees.
          </div>
        </details>
      </section>

    </main>
  `;
}

/**
 * 3. Autonomous PGDM Colleges Hub Generator (/colleges/pgdm)
 */
export function generatePgdmCollegesBodyHtml(colleges = []) {
  const pgdmColleges = colleges.filter(c => 
    (c.degreesOffered && c.degreesOffered.includes('PGDM')) ||
    c.id.includes('xlri') ||
    c.id.includes('spjimr') ||
    c.id.includes('mdi') ||
    c.id.includes('imt') ||
    c.id.includes('gim') ||
    c.id.includes('tapmi') ||
    c.id.includes('fore') ||
    c.id.includes('great-lakes')
  ).slice(0, 20);

  return `
    ${COMMON_HEADER}
    <main style="max-width: 1100px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif; color: #1E293B; line-height: 1.65;">
      
      <!-- Breadcrumb -->
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <a href="/" style="color: #6B2CF5; text-decoration: none;">Home</a> &gt; 
        <a href="/colleges" style="color: #6B2CF5; text-decoration: none;">Colleges</a> &gt; 
        <span>Autonomous PGDM Colleges</span>
      </nav>

      <!-- Hero Header -->
      <header style="margin-bottom: 28px;">
        <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(16, 185, 129, 0.08); color: #059669; padding: 6px 14px; border-radius: 9999px; font-size: 0.85rem; font-weight: 700; margin-bottom: 14px;">
          <span>⚡ AICTE Approved &amp; AIU MBA Equivalent • Session 2027-29</span>
        </div>
        <h1 style="font-size: 2.25rem; font-weight: 800; color: #0F172A; line-height: 1.25; margin: 0 0 14px;">
          Top Autonomous PGDM Colleges in India: AICTE Approved, Fees &amp; Cutoffs
        </h1>
        <p style="color: #475569; font-size: 1.15rem; line-height: 1.6; max-width: 960px;">
          Compare premier autonomous management institutions approved by the All India Council for Technical Education (AICTE). These autonomous business schools—led by XLRI Jamshedpur, SPJIMR Mumbai, MDI Gurgaon, and IMT Ghaziabad—offer cutting-edge, industry-aligned PGDM diplomas holding statutory AIU MBA equivalence.
        </p>
      </header>

      <!-- Quick Highlights Grid -->
      <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 32px;">
        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 18px;">
          <div style="font-size: 0.85rem; color: #64748B; font-weight: 700;">ACADEMIC AUTONOMY</div>
          <div style="font-size: 1.3rem; font-weight: 800; color: #0F172A; margin-top: 4px;">Dynamic Curriculum</div>
          <p style="font-size: 0.85rem; color: #64748B; margin: 6px 0 0;">Curriculum updated annually with corporate CXOs and industry advisory boards to reflect real-world market demands.</p>
        </div>
        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 18px;">
          <div style="font-size: 0.85rem; color: #64748B; font-weight: 700;">AIU EQUIVALENCE</div>
          <div style="font-size: 1.3rem; font-weight: 800; color: #10B981; margin-top: 4px;">MBA Equivalent</div>
          <p style="font-size: 0.85rem; color: #64748B; margin: 6px 0 0;">Institutions with AIU equivalence confer diploma credentials officially recognized on par with MBA degrees.</p>
        </div>
        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 18px;">
          <div style="font-size: 0.85rem; color: #64748B; font-weight: 700;">ACCEPTED ENTRANCE EXAMS</div>
          <div style="font-size: 1.3rem; font-weight: 800; color: #6B2CF5; margin-top: 4px;">CAT, XAT, GMAT &amp; CMAT</div>
          <p style="font-size: 0.85rem; color: #64748B; margin: 6px 0 0;">Accept multiple national tests; profile-based shortlisting (SPJIMR) awards points for work experience and diversity.</p>
        </div>
      </section>

      <!-- Verified Autonomous PGDM Colleges Table -->
      <section style="margin-bottom: 40px;">
        <h2 style="font-size: 1.45rem; font-weight: 800; color: #0F172A; margin: 0 0 16px;">
          Top AICTE Autonomous PGDM Institutes: Fees, Average Salary &amp; Cutoffs
        </h2>
        <div style="overflow-x: auto; border: 1px solid #E2E8F0; border-radius: 10px;">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
            <thead style="background: #F1F5F9; color: #334155;">
              <tr>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Institute &amp; Program</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">2-Yr Total Fees</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Average CTC</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Cutoff Benchmark</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">AIU Equivalence</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${pgdmColleges.map((col, idx) => `
                <tr style="border-bottom: 1px solid #E2E8F0; background: ${idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC'};">
                  <td style="padding: 12px 16px;">
                    <a href="/colleges/${col.id}" style="color: #6B2CF5; font-weight: 700; text-decoration: none;">${escapeHtml(col.name)}</a>
                    <div style="font-size: 0.8rem; color: #64748B;">${escapeHtml(col.city || col.location || 'India')}</div>
                  </td>
                  <td style="padding: 12px 16px; font-weight: 700; color: #0F172A;">${escapeHtml(col.fees)}</td>
                  <td style="padding: 12px 16px; font-weight: 700; color: #10B981;">${escapeHtml(col.avgSalary)}</td>
                  <td style="padding: 12px 16px; font-weight: 600; color: #6B2CF5;">
                    ${col.cutoffCAT !== 'N/A' ? `CAT ${col.cutoffCAT}` : (col.cutoffXAT !== 'N/A' ? `XAT ${col.cutoffXAT}` : col.cutoffCMAT || 'Merit')}
                  </td>
                  <td style="padding: 12px 16px;">
                    <span style="display: inline-block; padding: 2px 8px; background: #DCFCE7; color: #166534; font-size: 0.8rem; font-weight: 700; border-radius: 4px;">✓ Verified AIU</span>
                  </td>
                  <td style="padding: 12px 16px;">
                    <a href="/colleges/${col.id}" style="padding: 6px 12px; background: #6B2CF5; color: #FFFFFF; font-weight: 600; border-radius: 6px; text-decoration: none; font-size: 0.85rem;">View Details</a>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </section>

      <!-- Editorial Guide: What is an AICTE PGDM? -->
      <section style="margin-bottom: 36px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px;">
        <h2 style="font-size: 1.4rem; font-weight: 800; color: #0F172A; margin: 0 0 12px;">
          What is a PGDM Diploma and How Does AIU Equivalence Work?
        </h2>
        <p style="color: #475569; font-size: 1rem; line-height: 1.7; margin: 0 0 14px;">
          A <strong>Post Graduate Diploma in Management (PGDM)</strong> is a 2-year full-time corporate-focused management program offered by autonomous business schools approved by AICTE. Because autonomous institutes are not tethered to university syllabus revision cycles, they can introduce emerging subjects (such as AI in Business, Fintech, Algorithmic Trading, and MarTech) dynamically every semester.
        </p>
        <p style="color: #475569; font-size: 1rem; line-height: 1.7; margin: 0 0 14px;">
          <strong>The AIU Equivalence Moat:</strong> When an autonomous PGDM program receives accreditation from the National Board of Accreditation (NBA) and approval from the <strong>Association of Indian Universities (AIU)</strong>, it is gazetted as legally equivalent to an MBA degree for all government recruitments, public examinations (UPSC, State PSCs), and PhD admissions in India and abroad.
        </p>
      </section>

      <!-- FAQs -->
      <section style="margin-bottom: 36px;">
        <h2 style="font-size: 1.45rem; font-weight: 800; color: #0F172A; margin: 0 0 16px;">Frequently Asked Questions on PGDM Colleges</h2>
        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer;">Is PGDM valid for government jobs and higher studies?</summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            Yes, provided the PGDM institution holds Association of Indian Universities (AIU) MBA Equivalence. All AIU-approved PGDM programs are recognized on par with statutory university MBA degrees for UPSC, PSU jobs, and PhD admissions.
          </div>
        </details>
        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer;">Why do top business schools like XLRI and SPJIMR offer PGDM instead of MBA?</summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            Only statutory universities established by central or state legislative acts can confer 'degrees' under UGC regulations. Premier autonomous institutions choose to remain autonomous under AICTE so they retain complete freedom over curriculum innovation, faculty hiring, industry partnerships, and admissions, while holding full AIU equivalence.
          </div>
        </details>
      </section>

    </main>
  `;
}

/**
 * 4. MBA vs PGDM Comparison Dossier (/programs/compare)
 */
export function generateProgramsCompareBodyHtml() {
  return `
    ${COMMON_HEADER}
    <main style="max-width: 1100px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif; color: #1E293B; line-height: 1.65;">
      
      <!-- Breadcrumb -->
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <a href="/" style="color: #6B2CF5; text-decoration: none;">Home</a> &gt; 
        <a href="/programs" style="color: #6B2CF5; text-decoration: none;">Programs</a> &gt; 
        <span>MBA vs PGDM Comparison</span>
      </nav>

      <!-- Hero Header -->
      <header style="margin-bottom: 28px;">
        <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(107, 44, 245, 0.08); color: #6B2CF5; padding: 6px 14px; border-radius: 9999px; font-size: 0.85rem; font-weight: 700; margin-bottom: 14px;">
          <span>⚖️ Complete 2027 Admissions Dossier</span>
        </div>
        <h1 style="font-size: 2.25rem; font-weight: 800; color: #0F172A; line-height: 1.25; margin: 0 0 14px;">
          MBA vs PGDM: Differences, Accreditation, Fees &amp; Corporate ROI Explained
        </h1>
        <p style="color: #475569; font-size: 1.15rem; line-height: 1.6; max-width: 960px;">
          Deciding between a University MBA degree and an Autonomous PGDM diploma? Here is the definitive, audited breakdown of accreditation (UGC vs AICTE), AIU equivalence gazettes, curriculum adaptability, corporate recruitment traction, and fee Return on Investment.
        </p>
      </header>

      <!-- Comparison Matrix Table -->
      <section style="margin-bottom: 40px;">
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #0F172A; margin: 0 0 16px;">
          Side-by-Side Comparison: University MBA vs Autonomous PGDM
        </h2>
        <div style="overflow-x: auto; border: 1.5px solid #E2E8F0; border-radius: 12px;">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
            <thead style="background: #0F172A; color: #FFFFFF;">
              <tr>
                <th style="padding: 14px 18px; border-bottom: 2px solid #334155; width: 25%;">Evaluation Parameter</th>
                <th style="padding: 14px 18px; border-bottom: 2px solid #334155; width: 37.5%; color: #38BDF8;">University MBA Degree</th>
                <th style="padding: 14px 18px; border-bottom: 2px solid #334155; width: 37.5%; color: #4ADE80;">Autonomous PGDM Diploma</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #FFFFFF;">
                <td style="padding: 14px 18px; font-weight: 700;">Credential Awarded</td>
                <td style="padding: 14px 18px;"><strong>Master’s Degree</strong> (MBA)</td>
                <td style="padding: 14px 18px;"><strong>Postgraduate Diploma</strong> (PGDM)</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #F8FAFC;">
                <td style="padding: 14px 18px; font-weight: 700;">Regulatory Authority</td>
                <td style="padding: 14px 18px;"><strong>UGC</strong> (University Grants Commission)</td>
                <td style="padding: 14px 18px;"><strong>AICTE</strong> (Ministry of Education)</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #FFFFFF;">
                <td style="padding: 14px 18px; font-weight: 700;">Curriculum Agility</td>
                <td style="padding: 14px 18px; color: #64748B;">Theoretical focus; syllabus revised every 3 to 5 years via university academic councils.</td>
                <td style="padding: 14px 18px; color: #166534; font-weight: 600;">High agility; updated annually with CXOs, case studies, and corporate workshops.</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #F8FAFC;">
                <td style="padding: 14px 18px; font-weight: 700;">AIU Equivalence</td>
                <td style="padding: 14px 18px;">Automatic statutory degree status</td>
                <td style="padding: 14px 18px;">Requires <strong>AIU approval</strong> to be treated on par with MBA for Govt jobs and PhD.</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #FFFFFF;">
                <td style="padding: 14px 18px; font-weight: 700;">Tuition Fee Range</td>
                <td style="padding: 14px 18px;">₹20,000 – ₹12 Lakhs (Heavily subsidized in public/central universities)</td>
                <td style="padding: 14px 18px;">₹12 Lakhs – ₹30+ Lakhs (Self-financed residential campuses)</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #F8FAFC;">
                <td style="padding: 14px 18px; font-weight: 700;">Top Example Colleges</td>
                <td style="padding: 14px 18px;"><strong>FMS Delhi, JBIMS Mumbai, IIT Bombay, PUMBA Pune</strong></td>
                <td style="padding: 14px 18px;"><strong>XLRI Jamshedpur, SPJIMR Mumbai, MDI Gurgaon, IMT Ghaziabad</strong></td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #FFFFFF;">
                <td style="padding: 14px 18px; font-weight: 700;">Corporate Perception</td>
                <td style="padding: 14px 18px;">Identical hiring packages at premier level; recruiters care about brand and aptitude, not degree name.</td>
                <td style="padding: 14px 18px;">Strongly preferred in Consulting, Banking, and FMCG due to hands-on case pedagogy.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- How to Choose -->
      <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin-bottom: 36px;">
        <div style="background: #EFF6FF; border: 1.5px solid #BFDBFE; border-radius: 12px; padding: 22px;">
          <h3 style="font-size: 1.25rem; font-weight: 800; color: #1E40AF; margin: 0 0 10px;">When Should You Choose an MBA?</h3>
          <ul style="margin: 0; padding-left: 20px; color: #1E3A8A; line-height: 1.8; font-size: 0.95rem;">
            <li>If you want an <strong>ultra-high ROI</strong> with minimal tuition (e.g. FMS Delhi, JBIMS, SIMSREE).</li>
            <li>If you plan to pursue a <strong>PhD / Doctorate</strong> or sit for UGC-NET / Government civil exams directly.</li>
            <li>If you prioritize an official Master's degree for international credential evaluations (WES Canada/USA).</li>
          </ul>
        </div>

        <div style="background: #F0FDF4; border: 1.5px solid #BBF7D0; border-radius: 12px; padding: 22px;">
          <h3 style="font-size: 1.25rem; font-weight: 800; color: #166534; margin: 0 0 10px;">When Should You Choose a PGDM?</h3>
          <ul style="margin: 0; padding-left: 20px; color: #14532D; line-height: 1.8; font-size: 0.95rem;">
            <li>If you are aiming for premier corporate giants like <strong>XLRI, SPJIMR, MDI, IMT, GIM</strong>.</li>
            <li>If you want contemporary specializations (Business Analytics, Product Management, Fintech).</li>
            <li>If you learn best through case studies (Harvard/Ivey pedagogy) rather than rote written exams.</li>
          </ul>
        </div>
      </section>

      <!-- FAQs -->
      <section style="margin-bottom: 36px;">
        <h2 style="font-size: 1.45rem; font-weight: 800; color: #0F172A; margin: 0 0 16px;">Frequently Asked Questions: MBA vs PGDM</h2>
        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer;">Why did IIMs switch from PGDM to MBA degrees?</summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            Historically, IIMs were autonomous bodies registered under the Societies Registration Act and could only award PGDM diplomas. Following the passage of the IIM Act 2017 by the Parliament of India, IIMs were designated as Institutes of National Importance, empowering them to grant statutory MBA degrees.
          </div>
        </details>
        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer;">Do companies pay higher salaries for MBA or PGDM graduates?</summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            Corporate recruiters do not differentiate pay packages based on degree nomenclature. Compensation depends strictly on the Tier of the business school. For instance, XLRI (PGDM) and FMS Delhi (MBA) command identical recruitment brackets (₹30-35+ LPA) across top consulting and investment banking firms.
          </div>
        </details>
      </section>

    </main>
  `;
}

/**
 * 5. National MBA Entrance Exams Directory (/exams)
 */
export function generateExamsDirectoryBodyHtml(exams = []) {
  return `
    ${COMMON_HEADER}
    <main style="max-width: 1100px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif; color: #1E293B; line-height: 1.65;">
      
      <!-- Breadcrumb -->
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <a href="/" style="color: #6B2CF5; text-decoration: none;">Home</a> &gt; 
        <span>National MBA Entrance Exams</span>
      </nav>

      <!-- Hero Header -->
      <header style="margin-bottom: 28px;">
        <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(107, 44, 245, 0.08); color: #6B2CF5; padding: 6px 14px; border-radius: 9999px; font-size: 0.85rem; font-weight: 700; margin-bottom: 14px;">
          <span>📅 Comprehensive Admissions Calendar 2026-27</span>
        </div>
        <h1 style="font-size: 2.25rem; font-weight: 800; color: #0F172A; line-height: 1.25; margin: 0 0 14px;">
          National MBA Entrance Exams 2026-27: Dates, Syllabus, Pattern &amp; Predictors
        </h1>
        <p style="color: #475569; font-size: 1.15rem; line-height: 1.6; max-width: 960px;">
          Compare eligibility, marking schemes, test dates, registration deadlines, and score-to-percentile calculators for all major national management entrance tests across India: CAT, XAT, SNAP, NMAT, CMAT, MAT, and MAH MBA CET.
        </p>
      </header>

      <!-- Master Exam Comparison Table -->
      <section style="margin-bottom: 40px;">
        <h2 style="font-size: 1.45rem; font-weight: 800; color: #0F172A; margin: 0 0 16px;">
          Master Comparison Table of National MBA Entrance Tests
        </h2>
        <div style="overflow-x: auto; border: 1.5px solid #E2E8F0; border-radius: 12px;">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
            <thead style="background: #F1F5F9; color: #334155;">
              <tr>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Exam &amp; Full Name</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Conducting Body</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Exam Date</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Pattern</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Marking Scheme</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Gateway To</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${exams.map((ex, idx) => `
                <tr style="border-bottom: 1px solid #E2E8F0; background: ${idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC'};">
                  <td style="padding: 12px 16px;">
                    <a href="/exams/${ex.id}" style="color: #6B2CF5; font-weight: 800; text-decoration: none; font-size: 1.05rem;">${escapeHtml(ex.name)}</a>
                    <div style="font-size: 0.8rem; color: #64748B;">${escapeHtml(ex.fullName)}</div>
                  </td>
                  <td style="padding: 12px 16px; font-size: 0.9rem;">${escapeHtml(ex.conductingBody)}</td>
                  <td style="padding: 12px 16px; font-weight: 700; color: #0F172A;">${escapeHtml(ex.examDate)}</td>
                  <td style="padding: 12px 16px; font-size: 0.85rem;">${ex.totalQuestions} Qs • ${ex.durationMinutes}m</td>
                  <td style="padding: 12px 16px; font-size: 0.85rem; color: #475569;">${escapeHtml(ex.negativeMarking ? ex.negativeMarking.split(',')[0] : '+3 / -1')}</td>
                  <td style="padding: 12px 16px; font-size: 0.85rem; font-weight: 600;">
                    ${ex.id === 'cat' ? '21 IIMs, FMS, SPJIMR, MDI' : ex.id === 'xat' ? 'XLRI, XIMB, IMT, GIM' : ex.id === 'snap' ? '16 Symbiosis Institutes (SIBM, SCMHRD)' : ex.id === 'nmat' ? 'NMIMS Mumbai, K J Somaiya' : ex.id === 'cmat' ? 'JBIMS, SIMSREE, 1000+ AICTE' : '600+ B-Schools'}
                  </td>
                  <td style="padding: 12px 16px;">
                    <a href="/exams/${ex.id}" style="padding: 6px 12px; background: #6B2CF5; color: #FFFFFF; font-weight: 600; border-radius: 6px; text-decoration: none; font-size: 0.85rem;">Guide &rarr;</a>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </section>

      <!-- Exam Tools Quick Hub -->
      <section style="background: #FAF5FF; border: 1.5px solid #D8B4FE; border-radius: 12px; padding: 22px; margin-bottom: 36px;">
        <h3 style="font-size: 1.25rem; font-weight: 800; color: #581C87; margin: 0 0 10px;">⚡ Free Score Calculators &amp; Call Predictors</h3>
        <p style="color: #6B21A8; font-size: 0.95rem; margin: 0 0 16px;">Audit your performance with calibrated marks vs percentile conversion engines:</p>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <a href="/tools/cat-college-predictor" style="padding: 10px 18px; background: #6B2CF5; color: #FFFFFF; font-weight: 700; text-decoration: none; border-radius: 8px; font-size: 0.9rem;">CAT Response Sheet Scanner</a>
          <a href="/tools/xat-percentile-calculator" style="padding: 10px 18px; background: #FFFFFF; border: 1.5px solid #6B2CF5; color: #6B2CF5; font-weight: 700; text-decoration: none; border-radius: 8px; font-size: 0.9rem;">XAT 2027 Score Calculator</a>
          <a href="/tools/snap-score-calculator" style="padding: 10px 18px; background: #FFFFFF; border: 1.5px solid #6B2CF5; color: #6B2CF5; font-weight: 700; text-decoration: none; border-radius: 8px; font-size: 0.9rem;">SNAP 2026 Score Calculator</a>
          <a href="/tools/nmat-score-predictor" style="padding: 10px 18px; background: #FFFFFF; border: 1.5px solid #6B2CF5; color: #6B2CF5; font-weight: 700; text-decoration: none; border-radius: 8px; font-size: 0.9rem;">NMAT Score Predictor</a>
          <a href="/tools/cmat-percentile-calculator" style="padding: 10px 18px; background: #FFFFFF; border: 1.5px solid #6B2CF5; color: #6B2CF5; font-weight: 700; text-decoration: none; border-radius: 8px; font-size: 0.9rem;">CMAT 2026 Calculator</a>
        </div>
      </section>

    </main>
  `;
}

/**
 * 6. XAT 2027 Score Calculator & XLRI Predictor (/tools/xat-percentile-calculator)
 */
export function generateXatCalculatorBodyHtml() {
  return `
    ${COMMON_HEADER}
    <main style="max-width: 1140px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif; color: #1E293B; line-height: 1.65;">
      
      <!-- Breadcrumb -->
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <a href="/" style="color: #6B2CF5; text-decoration: none;">Home</a> &gt; 
        <a href="/tools/cat-college-predictor" style="color: #6B2CF5; text-decoration: none;">Calculators &amp; Tools</a> &gt; 
        <span>XAT 2027 Calculator</span>
      </nav>

      <!-- Hero Header -->
      <header style="margin-bottom: 28px;">
        <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(225, 29, 72, 0.08); color: #E11D48; padding: 6px 14px; border-radius: 9999px; font-size: 0.85rem; font-weight: 700; margin-bottom: 14px;">
          <span>🎯 Official XLRI Negative Marking &amp; Unattempted Penalty Engine</span>
        </div>
        <h1 style="font-size: 2.25rem; font-weight: 800; color: #0F172A; line-height: 1.25; margin: 0 0 14px;">
          XAT 2027 Score Calculator &amp; XLRI Percentile Predictor
        </h1>
        <p style="color: #475569; font-size: 1.15rem; line-height: 1.6; max-width: 960px;">
          Calculate your raw and scaled XAT score across Verbal Ability &amp; Logical Reasoning (VALR), Decision Making (DM), and Quantitative Ability &amp; Data Interpretation (QADI) with official <strong>+1 for correct</strong>, <strong>-0.25 for incorrect</strong>, and <strong>-0.10 unattempted penalty</strong> (beyond 8 unattempted questions). Predict shortlist calls for XLRI Jamshedpur (BM &amp; HRM), XIMB, IMT Ghaziabad, and GIM Goa.
        </p>
      </header>

      <!-- Interactive Calculator Card Skeleton -->
      <section style="background: #FFFFFF; border: 2px solid #E11D48; border-radius: 16px; padding: 24px; box-shadow: 0 10px 30px -5px rgba(225, 29, 72, 0.12); margin-bottom: 40px;">
        <h2 style="font-size: 1.35rem; font-weight: 800; color: #0F172A; margin: 0 0 6px;">
          Input Your Sectional Attempts (XAT Part 1: 76 Questions Total)
        </h2>
        <p style="color: #64748B; font-size: 0.9rem; margin: 0 0 20px;">
          Enter your correct and incorrect responses across each section to calculate raw score, unattempted penalty, and estimated percentile:
        </p>

        <!-- Section Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-bottom: 24px;">
          <div style="border: 1px solid #FECDD3; border-radius: 10px; padding: 16px; background: #FFF1F2;">
            <div style="font-weight: 800; color: #9F1239; margin-bottom: 10px;">Section 1: VALR (26 Qs • 26M)</div>
            <div style="font-size: 0.85rem; color: #475569;">Verbal Ability, Reading &amp; Critical Reasoning</div>
          </div>
          <div style="border: 1px solid #FED7AA; border-radius: 10px; padding: 16px; background: #FFF7ED;">
            <div style="font-weight: 800; color: #9A3412; margin-bottom: 10px;">Section 2: Decision Making (22 Qs • 22M)</div>
            <div style="font-size: 0.85rem; color: #475569;">Managerial &amp; Ethical Business Cases</div>
          </div>
          <div style="border: 1px solid #BBF7D0; border-radius: 10px; padding: 16px; background: #F0FDF4;">
            <div style="font-weight: 800; color: #166534; margin-bottom: 10px;">Section 3: QADI (28 Qs • 28M)</div>
            <div style="font-size: 0.85rem; color: #475569;">Quantitative Ability &amp; Data Interpretation</div>
          </div>
        </div>

        <div style="text-align: center; padding: 16px; background: #F8FAFC; border-radius: 8px;">
          <a href="/tools/xat-percentile-calculator" style="display: inline-block; padding: 14px 28px; background: #E11D48; color: #FFFFFF; font-weight: 700; text-decoration: none; border-radius: 8px; font-size: 1rem; box-shadow: 0 4px 12px rgba(225, 29, 72, 0.3);">
            Launch Interactive XAT Score Calculator &rarr;
          </a>
        </div>
      </section>

      <!-- XAT Marks vs Percentile Table -->
      <section style="margin-bottom: 36px;">
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #0F172A; margin: 0 0 14px;">
          XAT 2027 Expected Marks vs Percentile Table (Part 1 Max Marks: ~76M)
        </h2>
        <div style="overflow-x: auto; border: 1.5px solid #E2E8F0; border-radius: 10px;">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
            <thead style="background: #F1F5F9; color: #334155;">
              <tr>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Target Percentile</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Part 1 Raw Score</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">VALR Section</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">DM Section</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">QADI Section</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Eligible Premier B-Schools</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #FFFFFF;">
                <td style="padding: 12px 16px; font-weight: 800; color: #E11D48;">99.0+ %ile</td>
                <td style="padding: 12px 16px; font-weight: 700;">40 – 44+ Marks</td>
                <td style="padding: 12px 16px;">12+ Marks</td>
                <td style="padding: 12px 16px;">11+ Marks</td>
                <td style="padding: 12px 16px;">15+ Marks</td>
                <td style="padding: 12px 16px; font-weight: 600;">XLRI Jamshedpur (BM / HRM Flagship)</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #F8FAFC;">
                <td style="padding: 12px 16px; font-weight: 800; color: #E11D48;">96.0+ %ile</td>
                <td style="padding: 12px 16px; font-weight: 700;">36 – 39 Marks</td>
                <td style="padding: 12px 16px;">10+ Marks</td>
                <td style="padding: 12px 16px;">9.5+ Marks</td>
                <td style="padding: 12px 16px;">12+ Marks</td>
                <td style="padding: 12px 16px;">XLRI Jamshedpur BM Call, XLRI Delhi-NCR</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #FFFFFF;">
                <td style="padding: 12px 16px; font-weight: 800; color: #E11D48;">93.0+ %ile</td>
                <td style="padding: 12px 16px; font-weight: 700;">33 – 35 Marks</td>
                <td style="padding: 12px 16px;">9+ Marks</td>
                <td style="padding: 12px 16px;">8.5+ Marks</td>
                <td style="padding: 12px 16px;">10+ Marks</td>
                <td style="padding: 12px 16px;">XLRI HRM Call (Female / Non-Eng), XIMB</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #F8FAFC;">
                <td style="padding: 12px 16px; font-weight: 700;">90.0+ %ile</td>
                <td style="padding: 12px 16px;">30 – 32 Marks</td>
                <td style="padding: 12px 16px;">8+ Marks</td>
                <td style="padding: 12px 16px;">7.5+ Marks</td>
                <td style="padding: 12px 16px;">9+ Marks</td>
                <td style="padding: 12px 16px;">IMT Ghaziabad (PGDM), XIM University</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #FFFFFF;">
                <td style="padding: 12px 16px; font-weight: 700;">85.0+ %ile</td>
                <td style="padding: 12px 16px;">26 – 29 Marks</td>
                <td style="padding: 12px 16px;">7+ Marks</td>
                <td style="padding: 12px 16px;">7+ Marks</td>
                <td style="padding: 12px 16px;">7.5+ Marks</td>
                <td style="padding: 12px 16px;">GIM Goa (PGDM), TAPMI Manipal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- FAQs -->
      <section style="margin-bottom: 36px;">
        <h2 style="font-size: 1.45rem; font-weight: 800; color: #0F172A; margin: 0 0 16px;">Frequently Asked Questions on XAT Calculator</h2>
        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer;">How does the unattempted question penalty work in XAT?</summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            Candidates can leave up to 8 questions unattempted with zero penalty. From the 9th unattempted question onwards, a penalty of <strong>-0.10 marks per unattempted question</strong> is deducted from your Part 1 total raw score.
          </div>
        </details>
        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer;">Is GK or Essay counted in the XAT percentile for XLRI interview calls?</summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            No. The XAT percentile and interview shortlists for XLRI BM and HRM are calculated strictly based on Part 1 (VALR, DM, and QADI). General Knowledge and the Analytical Essay are evaluated solely during the final interview and selection stage.
          </div>
        </details>
      </section>

    </main>
  `;
}

/**
 * 7. SNAP 2026 Score Calculator & SIBM Predictor (/tools/snap-score-calculator)
 */
export function generateSnapCalculatorBodyHtml() {
  return `
    ${COMMON_HEADER}
    <main style="max-width: 1140px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif; color: #1E293B; line-height: 1.65;">
      
      <!-- Breadcrumb -->
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <a href="/" style="color: #6B2CF5; text-decoration: none;">Home</a> &gt; 
        <a href="/tools/cat-college-predictor" style="color: #6B2CF5; text-decoration: none;">Calculators &amp; Tools</a> &gt; 
        <span>SNAP 2026 Calculator</span>
      </nav>

      <!-- Hero Header -->
      <header style="margin-bottom: 28px;">
        <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(16, 185, 129, 0.08); color: #059669; padding: 6px 14px; border-radius: 9999px; font-size: 0.85rem; font-weight: 700; margin-bottom: 14px;">
          <span>⚡ Fast 60-Question Speed Scoring Engine • 16 Symbiosis Institutes</span>
        </div>
        <h1 style="font-size: 2.25rem; font-weight: 800; color: #0F172A; line-height: 1.25; margin: 0 0 14px;">
          SNAP 2026 Score Calculator &amp; SIBM Pune Percentile Predictor
        </h1>
        <p style="color: #475569; font-size: 1.15rem; line-height: 1.6; max-width: 960px;">
          Calculate your score from 60 questions in 60 minutes across General English (15 Qs), Analytical &amp; Logical Reasoning (25 Qs), and Quantitative Aptitude (20 Qs) with official <strong>+1 for correct</strong> and <strong>-0.25 for incorrect</strong> marking. Predict interview shortlist cutoffs for SIBM Pune (98.5+ %ile), SCMHRD Pune (97.0+ %ile), and all 16 constituent Symbiosis business schools.
        </p>
      </header>

      <!-- Sectional Structure Preview -->
      <section style="background: #FFFFFF; border: 2px solid #10B981; border-radius: 16px; padding: 24px; box-shadow: 0 10px 30px -5px rgba(16, 185, 129, 0.12); margin-bottom: 40px;">
        <h2 style="font-size: 1.35rem; font-weight: 800; color: #0F172A; margin: 0 0 6px;">
          SNAP Sectional Question Breakdown (60 Marks Max)
        </h2>
        <p style="color: #64748B; font-size: 0.9rem; margin: 0 0 20px;">
          Calculate your net raw score and instant percentile across all 3 timed components:
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-bottom: 24px;">
          <div style="border: 1px solid #A7F3D0; border-radius: 10px; padding: 16px; background: #ECFDF5;">
            <div style="font-weight: 800; color: #065F46; margin-bottom: 6px;">General English (15 Qs • 15M)</div>
            <div style="font-size: 0.85rem; color: #475569;">Grammar, Vocabulary, Idioms &amp; Parts of Speech</div>
          </div>
          <div style="border: 1px solid #BFDBFE; border-radius: 10px; padding: 16px; background: #EFF6FF;">
            <div style="font-weight: 800; color: #1E40AF; margin-bottom: 6px;">Logical Reasoning (25 Qs • 25M)</div>
            <div style="font-size: 0.85rem; color: #475569;">Arrangements, Series, Clocks, Calendars &amp; Puzzles</div>
          </div>
          <div style="border: 1px solid #FED7AA; border-radius: 10px; padding: 16px; background: #FFF7ED;">
            <div style="font-weight: 800; color: #9A3412; margin-bottom: 6px;">Quant, DI &amp; DS (20 Qs • 20M)</div>
            <div style="font-size: 0.85rem; color: #475569;">Arithmetic, Algebra, Geometry &amp; Data Tables</div>
          </div>
        </div>

        <div style="text-align: center; padding: 16px; background: #F8FAFC; border-radius: 8px;">
          <a href="/tools/snap-score-calculator" style="display: inline-block; padding: 14px 28px; background: #10B981; color: #FFFFFF; font-weight: 700; text-decoration: none; border-radius: 8px; font-size: 1rem; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);">
            Calculate Your SNAP 2026 Percentile &rarr;
          </a>
        </div>
      </section>

      <!-- SNAP Marks vs Percentile Table -->
      <section style="margin-bottom: 36px;">
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #0F172A; margin: 0 0 14px;">
          SNAP 2026 Marks vs Percentile Benchmarks (60 Max Marks)
        </h2>
        <div style="overflow-x: auto; border: 1.5px solid #E2E8F0; border-radius: 10px;">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
            <thead style="background: #F1F5F9; color: #334155;">
              <tr>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Target Percentile</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Raw Marks (out of 60)</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Constituent Symbiosis Institutes</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Average CTC</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #FFFFFF;">
                <td style="padding: 12px 16px; font-weight: 800; color: #059669;">99.5+ %ile</td>
                <td style="padding: 12px 16px; font-weight: 700;">44 – 46+ Marks</td>
                <td style="padding: 12px 16px; font-weight: 700;">SIBM Pune (MBA Core Flagship)</td>
                <td style="padding: 12px 16px; font-weight: 700; color: #10B981;">₹28.18 LPA</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #F8FAFC;">
                <td style="padding: 12px 16px; font-weight: 800; color: #059669;">97.0+ %ile</td>
                <td style="padding: 12px 16px; font-weight: 700;">38 – 41 Marks</td>
                <td style="padding: 12px 16px;">SCMHRD Pune (MBA Core, HR, Analytics)</td>
                <td style="padding: 12px 16px; font-weight: 700; color: #10B981;">₹23.71 LPA</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #FFFFFF;">
                <td style="padding: 12px 16px; font-weight: 700;">93.0+ %ile</td>
                <td style="padding: 12px 16px;">35 – 37 Marks</td>
                <td style="padding: 12px 16px;">SIIB Pune (International Business / Agri)</td>
                <td style="padding: 12px 16px;">₹13.12 LPA</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #F8FAFC;">
                <td style="padding: 12px 16px; font-weight: 700;">90.0+ %ile</td>
                <td style="padding: 12px 16px;">32 – 34 Marks</td>
                <td style="padding: 12px 16px;">SIBM Bangalore (MBA Core)</td>
                <td style="padding: 12px 16px;">₹14.47 LPA</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #FFFFFF;">
                <td style="padding: 12px 16px; font-weight: 700;">85.0+ %ile</td>
                <td style="padding: 12px 16px;">28 – 31 Marks</td>
                <td style="padding: 12px 16px;">SIOM Nashik (Operations Flagship)</td>
                <td style="padding: 12px 16px;">₹14.30 LPA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- FAQs -->
      <section style="margin-bottom: 36px;">
        <h2 style="font-size: 1.45rem; font-weight: 800; color: #0F172A; margin: 0 0 16px;">Frequently Asked Questions on SNAP Calculator</h2>
        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer;">Can candidates take multiple attempts in SNAP?</summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            Yes. Candidates can appear for up to 3 test attempts across the three December examination slots. The best percentile score among all your attempts is considered for SIBM Pune and SCMHRD shortlists.
          </div>
        </details>
        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer;">Are there Reading Comprehension passages in SNAP?</summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            In recent testing sessions, SNAP has eliminated long Reading Comprehension passages from the General English section, focusing exclusively on rapid-fire grammar, vocabulary, idioms, sentence correction, and parts of speech.
          </div>
        </details>
      </section>

    </main>
  `;
}

/**
 * 8. NMAT Scaled Score to Percentile Calculator (/tools/nmat-score-predictor)
 */
export function generateNmatPredictorBodyHtml() {
  return `
    ${COMMON_HEADER}
    <main style="max-width: 1140px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif; color: #1E293B; line-height: 1.65;">
      
      <!-- Breadcrumb -->
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <a href="/" style="color: #6B2CF5; text-decoration: none;">Home</a> &gt; 
        <a href="/tools/cat-college-predictor" style="color: #6B2CF5; text-decoration: none;">Calculators &amp; Tools</a> &gt; 
        <span>NMAT Score Predictor</span>
      </nav>

      <!-- Hero Header -->
      <header style="margin-bottom: 28px;">
        <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(245, 158, 11, 0.08); color: #D97706; padding: 6px 14px; border-radius: 9999px; font-size: 0.85rem; font-weight: 700; margin-bottom: 14px;">
          <span>🎯 Scaled Score Normalization • NMIMS Mumbai Cutoff Engine</span>
        </div>
        <h1 style="font-size: 2.25rem; font-weight: 800; color: #0F172A; line-height: 1.25; margin: 0 0 14px;">
          NMAT Score to Percentile Calculator &amp; NMIMS Mumbai Predictor
        </h1>
        <p style="color: #475569; font-size: 1.15rem; line-height: 1.6; max-width: 960px;">
          Input your sectional scaled scores in Language Skills (36 Qs / 120M), Quantitative Skills (36 Qs / 120M), and Logical Reasoning (36 Qs / 120M) out of 360 marks with <strong>zero negative marking</strong>. Evaluate your admission chances for NMIMS Mumbai Core (235+ score), NMIMS HR, K J Somaiya, and XIM Bhubaneswar.
        </p>
      </header>

      <!-- Sectional Structure Preview -->
      <section style="background: #FFFFFF; border: 2px solid #F59E0B; border-radius: 16px; padding: 24px; box-shadow: 0 10px 30px -5px rgba(245, 158, 11, 0.12); margin-bottom: 40px;">
        <h2 style="font-size: 1.35rem; font-weight: 800; color: #0F172A; margin: 0 0 6px;">
          NMAT Sectional Scaled Scoring (12 to 120 Marks Per Section • 360 Total)
        </h2>
        <p style="color: #64748B; font-size: 0.9rem; margin: 0 0 20px;">
          NMIMS Mumbai requires candidates to clear both overall and sectional cutoffs (typically 70+ in each section):
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-bottom: 24px;">
          <div style="border: 1px solid #FDE68A; border-radius: 10px; padding: 16px; background: #FEFCE8;">
            <div style="font-weight: 800; color: #854D0E; margin-bottom: 6px;">Language Skills (36 Qs • 28 mins)</div>
            <div style="font-size: 0.85rem; color: #475569;">Cutoff Benchmark: <strong>72 – 76+ Marks</strong></div>
          </div>
          <div style="border: 1px solid #FDE68A; border-radius: 10px; padding: 16px; background: #FEFCE8;">
            <div style="font-weight: 800; color: #854D0E; margin-bottom: 6px;">Quantitative Skills (36 Qs • 52 mins)</div>
            <div style="font-size: 0.85rem; color: #475569;">Cutoff Benchmark: <strong>70 – 74+ Marks</strong></div>
          </div>
          <div style="border: 1px solid #FDE68A; border-radius: 10px; padding: 16px; background: #FEFCE8;">
            <div style="font-weight: 800; color: #854D0E; margin-bottom: 6px;">Logical Reasoning (36 Qs • 40 mins)</div>
            <div style="font-size: 0.85rem; color: #475569;">Cutoff Benchmark: <strong>70 – 74+ Marks</strong></div>
          </div>
        </div>

        <div style="text-align: center; padding: 16px; background: #F8FAFC; border-radius: 8px;">
          <a href="/tools/nmat-score-predictor" style="display: inline-block; padding: 14px 28px; background: #F59E0B; color: #FFFFFF; font-weight: 700; text-decoration: none; border-radius: 8px; font-size: 1rem; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);">
            Predict Your NMIMS Mumbai Call Probability &rarr;
          </a>
        </div>
      </section>

      <!-- NMAT Score vs Percentile Table -->
      <section style="margin-bottom: 36px;">
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #0F172A; margin: 0 0 14px;">
          NMAT Scaled Score vs Expected Percentile &amp; Institutional Calls
        </h2>
        <div style="overflow-x: auto; border: 1.5px solid #E2E8F0; border-radius: 10px;">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
            <thead style="background: #F1F5F9; color: #334155;">
              <tr>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Scaled Score (out of 360)</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Estimated Percentile</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Shortlist Probability</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Average CTC</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #FFFFFF;">
                <td style="padding: 12px 16px; font-weight: 800; color: #D97706;">245 – 260+ Score</td>
                <td style="padding: 12px 16px; font-weight: 800; color: #6B2CF5;">98.5+ %ile</td>
                <td style="padding: 12px 16px; font-weight: 700;">NMIMS Mumbai (MBA Core Flagship)</td>
                <td style="padding: 12px 16px; font-weight: 700; color: #10B981;">₹25.13 LPA</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #F8FAFC;">
                <td style="padding: 12px 16px; font-weight: 800; color: #D97706;">235 – 244 Score</td>
                <td style="padding: 12px 16px; font-weight: 700;">95.0 – 97.0 %ile</td>
                <td style="padding: 12px 16px;">NMIMS Mumbai MBA Core (Cutoff Cleared)</td>
                <td style="padding: 12px 16px; font-weight: 700; color: #10B981;">₹25.13 LPA</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #FFFFFF;">
                <td style="padding: 12px 16px; font-weight: 700;">228 – 234 Score</td>
                <td style="padding: 12px 16px;">92.0 – 94.5 %ile</td>
                <td style="padding: 12px 16px;">NMIMS Mumbai (MBA Human Resource)</td>
                <td style="padding: 12px 16px;">₹19.50 LPA</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #F8FAFC;">
                <td style="padding: 12px 16px; font-weight: 700;">222 – 227 Score</td>
                <td style="padding: 12px 16px;">88.0 – 91.5 %ile</td>
                <td style="padding: 12px 16px;">K J Somaiya Mumbai / XIM University</td>
                <td style="padding: 12px 16px;">₹16.50 LPA</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #FFFFFF;">
                <td style="padding: 12px 16px; font-weight: 700;">210 – 220 Score</td>
                <td style="padding: 12px 16px;">82.0 – 87.0 %ile</td>
                <td style="padding: 12px 16px;">NMIMS Bangalore / Navi Mumbai</td>
                <td style="padding: 12px 16px;">₹14.00 LPA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- FAQs -->
      <section style="margin-bottom: 36px;">
        <h2 style="font-size: 1.45rem; font-weight: 800; color: #0F172A; margin: 0 0 16px;">Frequently Asked Questions on NMAT Predictor</h2>
        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer;">Does NMIMS Mumbai accept retake attempts in NMAT?</summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            No. For admission to the flagship MBA Core and MBA HR programs at the NMIMS Mumbai campus, strictly your <strong>FIRST attempt score</strong> is considered. Retake attempts are accepted by NMIMS regional campuses (Bangalore, Hyderabad, Navi Mumbai) and other participating institutions like K J Somaiya.
          </div>
        </details>
      </section>

    </main>
  `;
}
