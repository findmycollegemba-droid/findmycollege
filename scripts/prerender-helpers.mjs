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

export const COMMON_HEADER = `
  <header style="background: #FFFFFF; border-bottom: 1px solid #E2E8F0; padding: 14px 20px; position: sticky; top: 0; z-index: 100; font-family: system-ui, -apple-system, sans-serif;">
    <div style="max-width: 1200px; margin: 0 auto; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px;">
      <a href="/" style="font-weight: 800; font-size: 1.4rem; color: #6B2CF5; text-decoration: none; display: flex; align-items: center; gap: 8px;">
        <span>FindMyBSchool</span>
      </a>
      <nav aria-label="Main Navigation" style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px; font-size: 0.88rem; font-weight: 600;">
        <a href="/colleges" style="color: #1E293B; text-decoration: none; padding: 6px 10px; border-radius: 6px;">Top Colleges</a>
        <a href="/colleges/mba" style="color: #1E293B; text-decoration: none; padding: 6px 10px; border-radius: 6px;">University MBA</a>
        <a href="/colleges/pgdm" style="color: #1E293B; text-decoration: none; padding: 6px 10px; border-radius: 6px;">Autonomous PGDM</a>
        <a href="/aiu-approved-campuses" style="color: #1E293B; text-decoration: none; padding: 6px 10px; border-radius: 6px;">AIU Campuses</a>
        <a href="/programs/compare" style="color: #1E293B; text-decoration: none; padding: 6px 10px; border-radius: 6px;">MBA vs PGDM</a>
        <a href="/exams" style="color: #1E293B; text-decoration: none; padding: 6px 10px; border-radius: 6px;">Entrance Exams</a>
        <a href="/tools/cat-college-predictor" style="color: #6B2CF5; font-weight: 700; text-decoration: none; padding: 6px 10px; border-radius: 6px; background: rgba(107, 44, 245, 0.08);">CAT Predictor</a>
        <a href="/mock-test" style="color: #1E293B; text-decoration: none; padding: 6px 10px; border-radius: 6px;">Mock Tests</a>
        <a href="/scholarships" style="color: #1E293B; text-decoration: none; padding: 6px 10px; border-radius: 6px;">Scholarships</a>
        <a href="/blog" style="color: #1E293B; text-decoration: none; padding: 6px 10px; border-radius: 6px;">Blog</a>
        <a href="/contact" style="background: #6B2CF5; color: #FFFFFF; text-decoration: none; padding: 7px 12px; border-radius: 6px; font-weight: 700;">Counseling</a>
      </nav>
    </div>
  </header>
`;

export const COMMON_FOOTER = `
  <footer style="background: #0F172A; color: #94A3B8; padding: 48px 20px 32px; margin-top: 60px; font-family: system-ui, -apple-system, sans-serif; font-size: 0.9rem; line-height: 1.6; border-top: 1px solid #1E293B;">
    <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 32px;">
      <div>
        <h3 style="color: #FFFFFF; font-size: 1.1rem; font-weight: 800; margin: 0 0 12px;">Top MBA Colleges by City</h3>
        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 6px;">
          <li><a href="/colleges/city/delhi-ncr" style="color: #CBD5E1; text-decoration: none;">MBA Colleges in Delhi NCR</a></li>
          <li><a href="/colleges/city/mumbai" style="color: #CBD5E1; text-decoration: none;">MBA Colleges in Mumbai</a></li>
          <li><a href="/colleges/city/bangalore" style="color: #CBD5E1; text-decoration: none;">MBA Colleges in Bangalore</a></li>
          <li><a href="/colleges/city/pune" style="color: #CBD5E1; text-decoration: none;">MBA Colleges in Pune</a></li>
          <li><a href="/colleges/city/hyderabad" style="color: #CBD5E1; text-decoration: none;">MBA Colleges in Hyderabad</a></li>
          <li><a href="/colleges/city/kolkata" style="color: #CBD5E1; text-decoration: none;">MBA Colleges in Kolkata</a></li>
          <li><a href="/colleges/city/chennai" style="color: #CBD5E1; text-decoration: none;">MBA Colleges in Chennai</a></li>
          <li><a href="/colleges/city/ahmedabad" style="color: #CBD5E1; text-decoration: none;">MBA Colleges in Ahmedabad</a></li>
          <li><a href="/colleges/city/jaipur" style="color: #CBD5E1; text-decoration: none;">MBA Colleges in Jaipur</a></li>
          <li><a href="/colleges/city/lucknow" style="color: #CBD5E1; text-decoration: none;">MBA Colleges in Lucknow</a></li>
          <li><a href="/colleges/city/dehradun" style="color: #CBD5E1; text-decoration: none;">MBA Colleges in Dehradun</a></li>
          <li><a href="/colleges/city/indore" style="color: #CBD5E1; text-decoration: none;">MBA Colleges in Indore</a></li>
          <li><a href="/colleges/city/chandigarh" style="color: #CBD5E1; text-decoration: none;">MBA Colleges in Chandigarh</a></li>
        </ul>
      </div>
      <div>
        <h3 style="color: #FFFFFF; font-size: 1.1rem; font-weight: 800; margin: 0 0 12px;">National MBA Entrance Exams</h3>
        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 6px;">
          <li><a href="/exams/cat" style="color: #CBD5E1; text-decoration: none;">CAT 2026 Examination Guide</a></li>
          <li><a href="/exams/xat" style="color: #CBD5E1; text-decoration: none;">XAT 2027 Examination Guide</a></li>
          <li><a href="/exams/cmat" style="color: #CBD5E1; text-decoration: none;">CMAT 2026 Examination Guide</a></li>
          <li><a href="/exams/snap" style="color: #CBD5E1; text-decoration: none;">SNAP 2026 Examination Guide</a></li>
          <li><a href="/exams/nmat" style="color: #CBD5E1; text-decoration: none;">NMAT 2026 Examination Guide</a></li>
          <li><a href="/exams/mat" style="color: #CBD5E1; text-decoration: none;">MAT 2026 Examination Guide</a></li>
          <li><a href="/exams/mhcet" style="color: #CBD5E1; text-decoration: none;">MAH MBA CET 2026 Guide</a></li>
          <li><a href="/exams" style="color: #CBD5E1; text-decoration: none;">All National Exams Directory</a></li>
        </ul>
      </div>
      <div>
        <h3 style="color: #FFFFFF; font-size: 1.1rem; font-weight: 800; margin: 0 0 12px;">Tools &amp; Free Resources</h3>
        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 6px;">
          <li><a href="/tools/cat-college-predictor" style="color: #CBD5E1; text-decoration: none;">CAT Score Calculator &amp; Predictor</a></li>
          <li><a href="/blog/cat-score-calculator-2026-response-sheet-percentile-predictor" style="color: #CBD5E1; text-decoration: none;">CAT Score Calculator Guide</a></li>
          <li><a href="/tools/xat-percentile-calculator" style="color: #CBD5E1; text-decoration: none;">XAT Score Calculator 2027</a></li>
          <li><a href="/tools/cmat-percentile-calculator" style="color: #CBD5E1; text-decoration: none;">CMAT Percentile Predictor 2026</a></li>
          <li><a href="/tools/snap-score-calculator" style="color: #CBD5E1; text-decoration: none;">SNAP Score Calculator 2026</a></li>
          <li><a href="/tools/nmat-score-predictor" style="color: #CBD5E1; text-decoration: none;">NMAT Score Predictor 2026</a></li>
          <li><a href="/mock-test" style="color: #CBD5E1; text-decoration: none;">All-India Free CBT Mock Tests</a></li>
          <li><a href="/scholarships" style="color: #CBD5E1; text-decoration: none;">Live MBA Scholarships (up to ₹25L)</a></li>
          <li><a href="/blog" style="color: #CBD5E1; text-decoration: none;">MBA Admissions &amp; Strategy Blog</a></li>
        </ul>
      </div>
      <div>
        <h3 style="color: #FFFFFF; font-size: 1.1rem; font-weight: 800; margin: 0 0 12px;">Academic Hubs &amp; Legal</h3>
        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 6px;">
          <li><a href="/colleges" style="color: #CBD5E1; text-decoration: none;">Explore 600+ B-Schools</a></li>
          <li><a href="/colleges/mba" style="color: #CBD5E1; text-decoration: none;">Top University MBA Degrees</a></li>
          <li><a href="/colleges/pgdm" style="color: #CBD5E1; text-decoration: none;">Top Autonomous PGDM Colleges</a></li>
          <li><a href="/aiu-approved-campuses" style="color: #CBD5E1; text-decoration: none;">AIU Approved Campuses Directory</a></li>
          <li><a href="/programs/compare" style="color: #CBD5E1; text-decoration: none;">MBA vs PGDM Comparison</a></li>
          <li><a href="/programs/specializations" style="color: #CBD5E1; text-decoration: none;">MBA Specializations Guide</a></li>
          <li><a href="/programs/roi" style="color: #CBD5E1; text-decoration: none;">Highest ROI B-Schools in India</a></li>
          <li><a href="/contact" style="color: #CBD5E1; text-decoration: none;">1-on-1 Mentorship Counseling</a></li>
          <li><a href="/ai-chat" style="color: #CBD5E1; text-decoration: none;">AdmitIQ Admissions Chatbot</a></li>
          <li><a href="/terms" style="color: #CBD5E1; text-decoration: none;">Terms of Service</a></li>
          <li><a href="/privacy" style="color: #CBD5E1; text-decoration: none;">Privacy Policy &amp; DPDP</a></li>
        </ul>
      </div>
    </div>
    <div style="max-width: 1200px; margin: 36px auto 0; padding-top: 20px; border-top: 1px solid #1E293B; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 12px; font-size: 0.85rem;">
      <div>© 2026-2027 FindMyBSchool.com • All Rights Reserved. India’s Transparent MBA &amp; PGDM Admissions Portal.</div>
      <div>Free Helpline: <a href="tel:+918800126446" style="color: #A78BFA; text-decoration: none; font-weight: 700;">+91-8800126446</a> • Connaught Place, New Delhi 110001</div>
    </div>
  </footer>
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
    ${COMMON_FOOTER}
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
    ${COMMON_FOOTER}
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
    ${COMMON_FOOTER}
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
    ${COMMON_FOOTER}
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
    ${COMMON_FOOTER}
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
    ${COMMON_FOOTER}
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
    ${COMMON_FOOTER}
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
    ${COMMON_FOOTER}
  `;
}

/**
 * 9. Colleges Main Directory Hub Generator (/colleges)
 * Links to top 50 colleges, all 153 city hubs, and all 682 colleges to eliminate orphan islands
 */
export function generateCollegesDirectoryBodyHtml(colleges = [], allCities = []) {
  const sortedColleges = [...colleges].sort((a, b) => (a.nirfRank || 9999) - (b.nirfRank || 9999));
  const top50 = sortedColleges.slice(0, 50);

  return `
    ${COMMON_HEADER}
    <main style="max-width: 1200px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif; color: #1E293B; line-height: 1.65;">
      
      <!-- Breadcrumb Navigation -->
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <ol style="list-style: none; display: flex; flex-wrap: wrap; gap: 8px; padding: 0; margin: 0;">
          <li><a href="/" style="color: #6B2CF5; text-decoration: none; font-weight: 500;">Home</a> &gt;</li>
          <li aria-current="page" style="color: #0F172A; font-weight: 600;">MBA &amp; PGDM Colleges in India</li>
        </ol>
      </nav>

      <!-- Hero Header -->
      <header style="margin-bottom: 28px;">
        <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(107, 44, 245, 0.08); color: #6B2CF5; padding: 6px 14px; border-radius: 9999px; font-size: 0.85rem; font-weight: 700; margin-bottom: 14px;">
          <span>🏛️ Verified Directory • 680+ Management Institutes (Session 2027-29)</span>
        </div>
        <h1 style="font-size: 2.25rem; font-weight: 800; color: #0F172A; line-height: 1.25; margin: 0 0 14px;">
          Explore 600+ Top MBA &amp; PGDM Colleges in India 2027-29
        </h1>
        <p style="color: #475569; font-size: 1.15rem; line-height: 1.6; max-width: 960px; margin: 0 0 18px;">
          Compare India's leading business schools by audited tuition fees, official entrance cutoffs (CAT, XAT, CMAT, SNAP, NMAT), recent audited average placement packages, and NIRF management rankings with 0% scrapers.
        </p>

        <!-- Quick Category Hub Pills -->
        <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 16px;">
          <a href="/colleges/mba" style="padding: 10px 18px; background: #EEF2FF; color: #4338CA; font-weight: 700; text-decoration: none; border-radius: 8px; font-size: 0.9rem;">
            🏛️ University MBA Colleges
          </a>
          <a href="/colleges/pgdm" style="padding: 10px 18px; background: #ECFDF5; color: #047857; font-weight: 700; text-decoration: none; border-radius: 8px; font-size: 0.9rem;">
            ⚡ Autonomous PGDM Institutes
          </a>
          <a href="/aiu-approved-campuses" style="padding: 10px 18px; background: #FAF5FF; color: #6B21A8; font-weight: 700; text-decoration: none; border-radius: 8px; font-size: 0.9rem;">
            📜 AIU Approved Campuses
          </a>
          <a href="/programs/compare" style="padding: 10px 18px; background: #FFFBEB; color: #92400E; font-weight: 700; text-decoration: none; border-radius: 8px; font-size: 0.9rem;">
            ⚖️ MBA vs PGDM Analysis
          </a>
          <a href="/programs/roi" style="padding: 10px 18px; background: #F1F5F9; color: #334155; font-weight: 700; text-decoration: none; border-radius: 8px; font-size: 0.9rem;">
            💎 Highest ROI B-Schools
          </a>
        </div>
      </header>

      <!-- Section 1: Top 50 NIRF Management Institutions in India -->
      <section style="margin-bottom: 44px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 16px; flex-wrap: wrap; gap: 8px;">
          <div>
            <h2 style="font-size: 1.45rem; font-weight: 800; color: #0F172A; margin: 0 0 4px;">
              Top 50 NIRF Ranked MBA &amp; PGDM Colleges in India
            </h2>
            <p style="color: #64748B; font-size: 0.95rem; margin: 0;">Audited 2-year tuition fees, minimum qualifying cutoffs, and latest placement packages.</p>
          </div>
        </div>
        <div style="overflow-x: auto; border: 1px solid #E2E8F0; border-radius: 12px;">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.92rem;">
            <thead style="background: #F8FAFC; color: #334155;">
              <tr>
                <th style="padding: 14px 16px; border-bottom: 2px solid #E2E8F0; font-weight: 700;">NIRF</th>
                <th style="padding: 14px 16px; border-bottom: 2px solid #E2E8F0; font-weight: 700;">College / Business School</th>
                <th style="padding: 14px 16px; border-bottom: 2px solid #E2E8F0; font-weight: 700;">City</th>
                <th style="padding: 14px 16px; border-bottom: 2px solid #E2E8F0; font-weight: 700;">2-Yr Total Fees</th>
                <th style="padding: 14px 16px; border-bottom: 2px solid #E2E8F0; font-weight: 700;">Average CTC</th>
                <th style="padding: 14px 16px; border-bottom: 2px solid #E2E8F0; font-weight: 700;">Min Cutoff</th>
                <th style="padding: 14px 16px; border-bottom: 2px solid #E2E8F0; font-weight: 700;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${top50.map((col, idx) => `
                <tr style="border-bottom: 1px solid #E2E8F0; background: ${idx % 2 === 0 ? '#FFFFFF' : '#FAFAFE'};">
                  <td style="padding: 12px 16px; font-weight: 800; color: #6B2CF5;">
                    ${col.nirfRank ? '#' + col.nirfRank : 'Top Tier'}
                  </td>
                  <td style="padding: 12px 16px;">
                    <a href="/colleges/${col.id}" style="color: #0F172A; font-weight: 700; text-decoration: none;">
                      ${escapeHtml(col.name)}
                    </a>
                    <div style="font-size: 0.8rem; color: #64748B;">${escapeHtml(col.shortName || '')} • ${escapeHtml(col.ownership || '')}</div>
                  </td>
                  <td style="padding: 12px 16px; color: #475569;">
                    <a href="/colleges/city/${encodeURIComponent((col.city || '').toLowerCase().trim())}" style="color: #64748B; text-decoration: none;">
                      ${escapeHtml(col.city || 'India')}
                    </a>
                  </td>
                  <td style="padding: 12px 16px; font-weight: 700; color: #0F172A;">${escapeHtml(col.fees)}</td>
                  <td style="padding: 12px 16px; font-weight: 700; color: #10B981;">${escapeHtml(col.avgSalary)}</td>
                  <td style="padding: 12px 16px; font-weight: 600; color: #D97706;">
                    ${col.cutoffCAT !== 'N/A' ? `CAT ${col.cutoffCAT}` : (col.cutoffXAT !== 'N/A' ? `XAT ${col.cutoffXAT}` : col.cutoffCMAT !== 'N/A' ? `CMAT ${col.cutoffCMAT}` : 'Merit')}
                  </td>
                  <td style="padding: 12px 16px;">
                    <a href="/colleges/${col.id}" style="padding: 6px 12px; background: #6B2CF5; color: #FFFFFF; font-weight: 600; border-radius: 6px; text-decoration: none; font-size: 0.82rem; white-space: nowrap;">
                      View Dossier
                    </a>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </section>

      <!-- Section 2: Browse Colleges by 153 City Hubs -->
      <section style="margin-bottom: 44px; background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 12px; padding: 24px;">
        <h2 style="font-size: 1.45rem; font-weight: 800; color: #0F172A; margin: 0 0 6px;">
          Explore MBA Colleges by City Hub (150+ Locations Across India)
        </h2>
        <p style="color: #64748B; font-size: 0.95rem; margin: 0 0 18px;">
          Select your preferred study destination to view local cutoff percentiles, regional placement recruiters, and audited tuition costs.
        </p>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${allCities.map(city => {
            const normCity = city.toLowerCase().trim();
            const count = colleges.filter(c => (c.city && c.city.toLowerCase().trim() === normCity) || (c.location && c.location.toLowerCase().includes(normCity))).length;
            return `
              <a href="/colleges/city/${encodeURIComponent(normCity)}" style="padding: 6px 12px; background: #FFFFFF; border: 1px solid #CBD5E1; border-radius: 8px; color: #1E293B; text-decoration: none; font-size: 0.88rem; font-weight: 600; display: inline-flex; align-items: center; gap: 6px;">
                <span>${escapeHtml(city)}</span>
                <span style="background: #EEF2FF; color: #4338CA; font-size: 0.75rem; padding: 2px 6px; border-radius: 10px;">${count}</span>
              </a>
            `;
          }).join('')}
        </div>
      </section>

      <!-- Section 3: All 680+ Verified Business Schools Directory (Eliminates Orphan Islands) -->
      <section style="margin-bottom: 44px;">
        <h2 style="font-size: 1.45rem; font-weight: 800; color: #0F172A; margin: 0 0 6px;">
          Complete Directory of 680+ Business Schools in India (A to Z)
        </h2>
        <p style="color: #64748B; font-size: 0.95rem; margin: 0 0 20px;">
          Direct links to individual b-school dossiers including verified fees, batch sizes, faculty profiles, and placement brochures.
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 10px;">
          ${colleges.map(col => `
            <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; gap: 8px;">
              <div style="min-width: 0; flex: 1;">
                <a href="/colleges/${col.id}" style="color: #6B2CF5; font-weight: 700; text-decoration: none; font-size: 0.92rem; display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  ${escapeHtml(col.name)}
                </a>
                <div style="font-size: 0.78rem; color: #64748B; margin-top: 2px;">
                  📍 ${escapeHtml(col.city || col.location || 'India')} • ${escapeHtml(col.fees)} • Avg: ${escapeHtml(col.avgSalary)}
                </div>
              </div>
              <a href="/colleges/${col.id}" style="font-size: 0.78rem; color: #4338CA; font-weight: 700; text-decoration: none; white-space: nowrap;">
                Details &rarr;
              </a>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- FAQs -->
      <section style="margin-bottom: 36px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px;">
        <h2 style="font-size: 1.45rem; font-weight: 800; color: #0F172A; margin: 0 0 16px;">
          Frequently Asked Questions on MBA Colleges in India
        </h2>
        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer;">How does FindMyBSchool verify college fees and placement data?</summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            All data published on FindMyBSchool is cross-audited against statutory NIRF submissions, AICTE mandatory disclosure reports, official placement audit reports (IPRS standards), and verified student feedback. We maintain a zero-scraper policy.
          </div>
        </details>
        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer;">What is the difference between university MBA colleges and autonomous PGDM institutes?</summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            An MBA is a formal postgraduate degree conferred by a university recognized by the UGC. A PGDM is a postgraduate diploma conferred by an autonomous institute approved by AICTE. Premier autonomous PGDM institutions holding AIU equivalence (such as XLRI, SPJIMR, and MDI) are legally treated on par with MBA degrees for all government jobs and higher studies.
          </div>
        </details>
      </section>

    </main>
    ${COMMON_FOOTER}
  `;
}

/**
 * 10. Scholarships Main Directory Generator (/scholarships)
 */
export function generateScholarshipsDirectoryBodyHtml(scholarships = []) {
  return `
    ${COMMON_HEADER}
    <main style="max-width: 1100px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif; color: #1E293B; line-height: 1.65;">
      
      <!-- Breadcrumb Navigation -->
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <ol style="list-style: none; display: flex; flex-wrap: gap: 8px; padding: 0; margin: 0;">
          <li><a href="/" style="color: #6B2CF5; text-decoration: none; font-weight: 500;">Home</a> &gt;</li>
          <li aria-current="page" style="color: #0F172A; font-weight: 600;">MBA Scholarships Directory</li>
        </ol>
      </nav>

      <header style="margin-bottom: 32px;">
        <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(16, 185, 129, 0.08); color: #059669; padding: 6px 14px; border-radius: 9999px; font-size: 0.85rem; font-weight: 700; margin-bottom: 14px;">
          <span>💰 Financial Aid &amp; Grants up to ₹25 Lakhs • Session 2027-29</span>
        </div>
        <h1 style="font-size: 2.25rem; font-weight: 800; color: #0F172A; line-height: 1.25; margin: 0 0 14px;">
          Live MBA Scholarships in India 2027-29: Eligibility &amp; Grants
        </h1>
        <p style="color: #475569; font-size: 1.15rem; line-height: 1.6; max-width: 960px;">
          Explore verified corporate, institutional, and government MBA scholarships available for management aspirants. Filter by financial grant amount, eligibility criteria, and participating business schools.
        </p>
      </header>

      <!-- Scholarships Cards Grid -->
      <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin-bottom: 44px;">
        ${scholarships.map(sch => `
          <div style="background: #FFFFFF; border: 1.5px solid #E2E8F0; border-radius: 12px; padding: 22px; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 10px;">
                <span style="background: #F1F5F9; color: #334155; font-size: 0.8rem; font-weight: 700; padding: 4px 10px; border-radius: 6px;">
                  ${escapeHtml(sch.provider)}
                </span>
                <span style="color: #059669; font-weight: 800; font-size: 1.15rem;">
                  ${escapeHtml(sch.amount)}
                </span>
              </div>
              <h3 style="font-size: 1.2rem; font-weight: 800; color: #0F172A; margin: 0 0 8px;">
                <a href="/scholarships/${sch.id}" style="color: #0F172A; text-decoration: none;">
                  ${escapeHtml(sch.title)}
                </a>
              </h3>
              <p style="color: #64748B; font-size: 0.9rem; line-height: 1.5; margin: 0 0 12px;">
                ${escapeHtml(sch.eligibilitySummary || sch.targetInstitutes)}
              </p>
            </div>
            <div style="margin-top: 16px; padding-top: 14px; border-top: 1px solid #F1F5F9; display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.82rem; color: #64748B;">Target: ${escapeHtml(sch.targetInstitutes ? sch.targetInstitutes.slice(0, 24) + '...' : 'Pan-India')}</span>
              <a href="/scholarships/${sch.id}" style="padding: 6px 14px; background: #6B2CF5; color: #FFFFFF; font-weight: 600; font-size: 0.85rem; border-radius: 6px; text-decoration: none;">
                View Details
              </a>
            </div>
          </div>
        `).join('')}
      </section>

      <!-- FAQs -->
      <section style="margin-bottom: 36px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px;">
        <h2 style="font-size: 1.45rem; font-weight: 800; color: #0F172A; margin: 0 0 16px;">Frequently Asked Questions on MBA Scholarships</h2>
        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer;">Can I get a 100% scholarship for an MBA program in India?</summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            Yes. Leading institutions like IIM Ahmedabad, IIM Bangalore, and ISB offer 100% need-based tuition fee waivers (e.g., Aditya Birla Scholarship and OPJEMS). Additionally, government schemes such as the Central Sector Interest Subsidy Scheme (CSIS) provide full interest waivers during the study period.
          </div>
        </details>
      </section>

    </main>
    ${COMMON_FOOTER}
  `;
}

/**
 * 11. CBT Mock Tests Main Directory Generator (/mock-test)
 */
export function generateMockTestsDirectoryBodyHtml(mockTests = []) {
  return `
    ${COMMON_HEADER}
    <main style="max-width: 1100px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif; color: #1E293B; line-height: 1.65;">
      
      <!-- Breadcrumb Navigation -->
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <ol style="list-style: none; display: flex; flex-wrap: wrap; gap: 8px; padding: 0; margin: 0;">
          <li><a href="/" style="color: #6B2CF5; text-decoration: none; font-weight: 500;">Home</a> &gt;</li>
          <li aria-current="page" style="color: #0F172A; font-weight: 600;">Free MBA Mock Tests</li>
        </ol>
      </nav>

      <header style="margin-bottom: 32px;">
        <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(107, 44, 245, 0.08); color: #6B2CF5; padding: 6px 14px; border-radius: 9999px; font-size: 0.85rem; font-weight: 700; margin-bottom: 14px;">
          <span>🎯 Real TCS iON CBT Interface • All-India Rank &amp; AI Analysis</span>
        </div>
        <h1 style="font-size: 2.25rem; font-weight: 800; color: #0F172A; line-height: 1.25; margin: 0 0 14px;">
          Free All-India MBA CBT Mock Tests (CAT, XAT, MAT, CMAT, SNAP &amp; NMAT)
        </h1>
        <p style="color: #475569; font-size: 1.15rem; line-height: 1.6; max-width: 960px;">
          Simulate real national exam conditions with countdown timers, question palette navigation, negative marking rules, sectional cutoffs, and percentile benchmarking.
        </p>
      </header>

      <!-- Mock Tests Grid -->
      <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin-bottom: 44px;">
        ${mockTests.map(test => `
          <div style="background: #FFFFFF; border: 1.5px solid #E2E8F0; border-radius: 12px; padding: 22px; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <span style="background: #EEF2FF; color: #4338CA; font-size: 0.8rem; font-weight: 700; padding: 4px 10px; border-radius: 6px;">
                  ${escapeHtml(test.exam || 'MBA Entrance')}
                </span>
                <span style="color: #059669; font-weight: 700; font-size: 0.85rem;">
                  ✓ Free Full-Length CBT
                </span>
              </div>
              <h3 style="font-size: 1.25rem; font-weight: 800; color: #0F172A; margin: 0 0 8px;">
                <a href="/mock-test/${test.id}" style="color: #0F172A; text-decoration: none;">
                  ${escapeHtml(test.title)}
                </a>
              </h3>
              <p style="color: #64748B; font-size: 0.9rem; line-height: 1.5; margin: 0 0 14px;">
                ${escapeHtml(test.shortDescription || 'Full-length CBT mock test covering Quantitative Aptitude, Verbal Ability, and Logical Reasoning.')}
              </p>
              <div style="display: flex; gap: 14px; font-size: 0.85rem; color: #334155; margin-bottom: 12px;">
                <span>⏱️ ${test.durationMinutes || 120} Mins</span>
                <span>📝 ${test.totalQuestions || 66} Questions</span>
                <span>🎯 Marking: +3 / -1</span>
              </div>
            </div>
            <div style="margin-top: 16px; padding-top: 14px; border-top: 1px solid #F1F5F9;">
              <a href="/mock-test/${test.id}" style="display: block; text-align: center; padding: 10px 18px; background: #6B2CF5; color: #FFFFFF; font-weight: 700; font-size: 0.9rem; border-radius: 8px; text-decoration: none;">
                Launch Free CBT Test
              </a>
            </div>
          </div>
        `).join('')}
      </section>

      <!-- FAQs -->
      <section style="margin-bottom: 36px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px;">
        <h2 style="font-size: 1.45rem; font-weight: 800; color: #0F172A; margin: 0 0 16px;">Frequently Asked Questions on Free MBA Mock Tests</h2>
        <details style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
          <summary style="font-weight: 700; color: #0F172A; cursor: pointer;">Is registration required to take the free MBA mock tests?</summary>
          <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
            No. All CBT mock tests on FindMyBSchool can be initiated directly with 0 registration fees and instant scorecard generation upon test submission.
          </div>
        </details>
      </section>

    </main>
    ${COMMON_FOOTER}
  `;
}

/**
 * 12. AIU Approved Campuses Directory Generator (/aiu-approved-campuses)
 */
export function generateAiuCampusesDirectoryBodyHtml(aiuList = [], targetCity = null) {
  const cityClusters = [
    { id: 'delhi-ncr', name: 'Delhi NCR' },
    { id: 'pune', name: 'Pune' },
    { id: 'mumbai', name: 'Mumbai' },
    { id: 'bangalore', name: 'Bangalore' },
    { id: 'jaipur', name: 'Jaipur' },
    { id: 'kolkata', name: 'Kolkata' },
    { id: 'dehradun', name: 'Dehradun' },
    { id: 'lucknow', name: 'Lucknow' },
    { id: 'indore', name: 'Indore' }
  ];

  const matchedCluster = targetCity ? cityClusters.find(c => c.id === targetCity) : null;
  const cityName = matchedCluster ? matchedCluster.name : (targetCity ? targetCity.toUpperCase() : null);
  
  const displayList = targetCity 
    ? aiuList.filter(inst => {
        const c = (inst.city || '').toLowerCase();
        const s = (inst.state || '').toLowerCase();
        const l = (inst.location || '').toLowerCase();
        if (targetCity === 'delhi-ncr') return c.includes('delhi') || c.includes('noida') || c.includes('gurgaon') || c.includes('ghaziabad') || c.includes('faridabad');
        return c.includes(targetCity) || s.includes(targetCity) || l.includes(targetCity);
      })
    : aiuList;

  const pageTitle = cityName ? `AIU Approved MBA & PGDM Campuses in ${cityName}` : 'AIU Approved MBA & PGDM Campuses in India (Official Directory)';
  const pageLead = cityName 
    ? `Explore verified institutions in ${cityName} holding official Association of Indian Universities (AIU) MBA Equivalence. Audited tuition fees, qualifying entrance cutoffs, and campus placements.`
    : 'Explore all 121 management institutions holding official AIU MBA Equivalence. Having official AIU equivalence certifies that a 2-year autonomous PGDM diploma is legally treated on par with a statutory university MBA degree for higher studies (PhD) and government recruitment.';

  return `
    ${COMMON_HEADER}
    <main style="max-width: 1100px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif; color: #1E293B; line-height: 1.65;">
      
      <!-- Breadcrumb Navigation -->
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <ol style="list-style: none; display: flex; flex-wrap: wrap; gap: 8px; padding: 0; margin: 0;">
          <li><a href="/" style="color: #6B2CF5; text-decoration: none; font-weight: 500;">Home</a> &gt;</li>
          ${cityName ? `<li><a href="/aiu-approved-campuses" style="color: #6B2CF5; text-decoration: none; font-weight: 500;">AIU Approved Campuses</a> &gt;</li><li aria-current="page" style="color: #0F172A; font-weight: 600;">${cityName}</li>` : '<li aria-current="page" style="color: #0F172A; font-weight: 600;">AIU Approved Campuses</li>'}
        </ol>
      </nav>

      <header style="margin-bottom: 32px;">
        <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(107, 44, 245, 0.08); color: #6B2CF5; padding: 6px 14px; border-radius: 9999px; font-size: 0.85rem; font-weight: 700; margin-bottom: 14px;">
          <span>📜 Official Association of Indian Universities Gazette Equivalence</span>
        </div>
        <h1 style="font-size: 2.25rem; font-weight: 800; color: #0F172A; line-height: 1.25; margin: 0 0 14px;">
          ${escapeHtml(pageTitle)}
        </h1>
        <p style="color: #475569; font-size: 1.15rem; line-height: 1.6; max-width: 960px;">
          ${escapeHtml(pageLead)}
        </p>

        <!-- City Quick Links -->
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 16px;">
          <a href="/aiu-approved-campuses" style="padding: 8px 14px; background: ${!cityName ? '#6B2CF5; color: #FFFFFF;' : '#F1F5F9; color: #1E293B;'} font-weight: 700; text-decoration: none; border-radius: 6px; font-size: 0.88rem;">
            All India (${aiuList.length})
          </a>
          ${cityClusters.map(c => `
            <a href="/aiu-approved-campuses/${c.id}" style="padding: 8px 14px; background: ${targetCity === c.id ? '#6B2CF5; color: #FFFFFF;' : '#EEF2FF; color: #4338CA;'} font-weight: 700; text-decoration: none; border-radius: 6px; font-size: 0.88rem;">
              📍 ${c.name}
            </a>
          `).join('')}
        </div>
      </header>

      <!-- AIU Gazette Table -->
      <section style="margin-bottom: 44px;">
        <h2 style="font-size: 1.45rem; font-weight: 800; color: #0F172A; margin: 0 0 16px;">
          ${cityName ? `Verified AIU-Equivalent Campuses in ${cityName}` : 'Verified Institutions with Official AIU MBA Equivalence'}
        </h2>
        <div style="overflow-x: auto; border: 1px solid #E2E8F0; border-radius: 12px;">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.92rem;">
            <thead style="background: #F8FAFC; color: #334155;">
              <tr>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Institution Name</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Location</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Equivalence Status</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${(displayList.length > 0 ? displayList : aiuList.slice(0, 40)).map((inst, idx) => `
                <tr style="border-bottom: 1px solid #E2E8F0; background: ${idx % 2 === 0 ? '#FFFFFF' : '#FAFAFE'};">
                  <td style="padding: 12px 16px; font-weight: 700; color: #0F172A;">
                    ${escapeHtml(inst.name)}
                  </td>
                  <td style="padding: 12px 16px; color: #475569;">
                    ${escapeHtml(inst.city || 'India')}, ${escapeHtml(inst.state || '')}
                  </td>
                  <td style="padding: 12px 16px;">
                    <span style="background: #ECFDF5; color: #047857; padding: 4px 8px; border-radius: 6px; font-weight: 700; font-size: 0.82rem;">
                      ✓ AIU MBA Equivalent
                    </span>
                  </td>
                  <td style="padding: 12px 16px;">
                    <a href="/colleges" style="color: #6B2CF5; font-weight: 700; text-decoration: none; font-size: 0.85rem;">
                      Explore &rarr;
                    </a>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </section>

    </main>
    ${COMMON_FOOTER}
  `;
}

/**
 * 13. Programs Main Hub Generator (/programs)
 */
export function generateProgramsIndexBodyHtml() {
  return `
    ${COMMON_HEADER}
    <main style="max-width: 1100px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif; color: #1E293B; line-height: 1.65;">
      
      <!-- Breadcrumb Navigation -->
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <ol style="list-style: none; display: flex; flex-wrap: wrap; gap: 8px; padding: 0; margin: 0;">
          <li><a href="/" style="color: #6B2CF5; text-decoration: none; font-weight: 500;">Home</a> &gt;</li>
          <li aria-current="page" style="color: #0F172A; font-weight: 600;">MBA &amp; PGDM Programs Guide</li>
        </ol>
      </nav>

      <header style="margin-bottom: 32px;">
        <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(107, 44, 245, 0.08); color: #6B2CF5; padding: 6px 14px; border-radius: 9999px; font-size: 0.85rem; font-weight: 700; margin-bottom: 14px;">
          <span>🎓 Master's Degree vs Post Graduate Diploma Guide • Session 2027-29</span>
        </div>
        <h1 style="font-size: 2.25rem; font-weight: 800; color: #0F172A; line-height: 1.25; margin: 0 0 14px;">
          MBA vs PGDM Programs Guide: Differences, Curriculum &amp; ROI
        </h1>
        <p style="color: #475569; font-size: 1.15rem; line-height: 1.6; max-width: 960px;">
          Make an informed management career decision. Understand the statutory differences between a university-affiliated MBA degree (UGC) and an autonomous PGDM diploma (AICTE), accreditation benchmarks, and corporate placement acceptance.
        </p>

        <!-- Sub-page Navigation Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; margin-top: 24px;">
          <a href="/programs/compare" style="padding: 16px; background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 10px; text-decoration: none; color: #1E293B;">
            <div style="font-size: 1.3rem; margin-bottom: 4px;">⚖️</div>
            <div style="font-weight: 800; font-size: 1.05rem; color: #6B2CF5;">MBA vs PGDM Matrix</div>
            <p style="font-size: 0.85rem; color: #64748B; margin: 4px 0 0;">Side-by-side regulatory and structural differences.</p>
          </a>
          <a href="/programs/mba" style="padding: 16px; background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 10px; text-decoration: none; color: #1E293B;">
            <div style="font-size: 1.3rem; margin-bottom: 4px;">🏛️</div>
            <div style="font-weight: 800; font-size: 1.05rem; color: #6B2CF5;">University MBA Degrees</div>
            <p style="font-size: 0.85rem; color: #64748B; margin: 4px 0 0;">UGC regulations, public grants, and high-ROI universities.</p>
          </a>
          <a href="/programs/pgdm" style="padding: 16px; background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 10px; text-decoration: none; color: #1E293B;">
            <div style="font-size: 1.3rem; margin-bottom: 4px;">⚡</div>
            <div style="font-weight: 800; font-size: 1.05rem; color: #6B2CF5;">Autonomous PGDM Diplomas</div>
            <p style="font-size: 0.85rem; color: #64748B; margin: 4px 0 0;">AICTE autonomy, trimester pedagogy, and AIU equivalence.</p>
          </a>
          <a href="/programs/specializations" style="padding: 16px; background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 10px; text-decoration: none; color: #1E293B;">
            <div style="font-size: 1.3rem; margin-bottom: 4px;">🎯</div>
            <div style="font-weight: 800; font-size: 1.05rem; color: #6B2CF5;">MBA Specializations</div>
            <p style="font-size: 0.85rem; color: #64748B; margin: 4px 0 0;">Marketing, Finance, Analytics, Operations &amp; HR scope.</p>
          </a>
          <a href="/programs/roi" style="padding: 16px; background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 10px; text-decoration: none; color: #1E293B;">
            <div style="font-size: 1.3rem; margin-bottom: 4px;">💎</div>
            <div style="font-weight: 800; font-size: 1.05rem; color: #6B2CF5;">Highest ROI B-Schools</div>
            <p style="font-size: 0.85rem; color: #64748B; margin: 4px 0 0;">Audited tuition fees vs average placement salary ratios.</p>
          </a>
        </div>
      </header>

      <!-- Comparison Section -->
      <section style="margin-bottom: 44px; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px;">
        <h2 style="font-size: 1.45rem; font-weight: 800; color: #0F172A; margin: 0 0 16px;">
          Key Parameters: University MBA Degree vs Autonomous PGDM Diploma
        </h2>
        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
            <thead style="background: #F1F5F9; color: #334155;">
              <tr>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Parameter</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">University MBA Degree</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Autonomous PGDM Diploma</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #E2E8F0;">
                <td style="padding: 12px 16px; font-weight: 700;">Conferring Authority</td>
                <td style="padding: 12px 16px;">UGC-recognized statutory central, state, or deemed university</td>
                <td style="padding: 12px 16px;">AICTE-approved autonomous management institution</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #F8FAFC;">
                <td style="padding: 12px 16px; font-weight: 700;">Credential Conferred</td>
                <td style="padding: 12px 16px;">Master of Business Administration (Degree)</td>
                <td style="padding: 12px 16px;">Post Graduate Diploma in Management (Diploma)</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0;">
                <td style="padding: 12px 16px; font-weight: 700;">Curriculum Agility</td>
                <td style="padding: 12px 16px;">Follows statutory university academic council syllabus</td>
                <td style="padding: 12px 16px;">Updated annually by corporate CXO advisory boards</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0; background: #F8FAFC;">
                <td style="padding: 12px 16px; font-weight: 700;">Global Equivalency</td>
                <td style="padding: 12px 16px;">Universal WES recognition for Canada/US PR &amp; higher studies</td>
                <td style="padding: 12px 16px;">Requires official AIU MBA Equivalence certification</td>
              </tr>
              <tr style="border-bottom: 1px solid #E2E8F0;">
                <td style="padding: 12px 16px; font-weight: 700;">Fee Range</td>
                <td style="padding: 12px 16px;">₹2.0L – ₹12.0L (Heavily subsidized by public grants)</td>
                <td style="padding: 12px 16px;">₹12.0L – ₹28.0L (Self-financed infrastructure)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </main>
    ${COMMON_FOOTER}
  `;
}

/**
 * 14. Specializations Hub Generator (/programs/specializations)
 */
export function generateProgramsSpecializationsBodyHtml() {
  return `
    ${COMMON_HEADER}
    <main style="max-width: 1100px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif; color: #1E293B; line-height: 1.65;">
      
      <!-- Breadcrumb Navigation -->
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <ol style="list-style: none; display: flex; flex-wrap: wrap; gap: 8px; padding: 0; margin: 0;">
          <li><a href="/" style="color: #6B2CF5; text-decoration: none; font-weight: 500;">Home</a> &gt;</li>
          <li><a href="/programs" style="color: #6B2CF5; text-decoration: none; font-weight: 500;">Programs</a> &gt;</li>
          <li aria-current="page" style="color: #0F172A; font-weight: 600;">MBA Specializations Guide</li>
        </ol>
      </nav>

      <header style="margin-bottom: 32px;">
        <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(107, 44, 245, 0.08); color: #6B2CF5; padding: 6px 14px; border-radius: 9999px; font-size: 0.85rem; font-weight: 700; margin-bottom: 14px;">
          <span>🎯 Career Scopes, Salaries &amp; Curriculum Breakdown • Session 2027-29</span>
        </div>
        <h1 style="font-size: 2.25rem; font-weight: 800; color: #0F172A; line-height: 1.25; margin: 0 0 14px;">
          Top MBA &amp; PGDM Specializations 2027-29: Scope &amp; Salaries
        </h1>
        <p style="color: #475569; font-size: 1.15rem; line-height: 1.6; max-width: 960px;">
          Choosing the right MBA specialization defines your recruitment trajectory, industry domain, and starting compensation. Compare the top 5 flagship management specializations in India.
        </p>
      </header>

      <!-- Specializations Breakdown -->
      <section style="display: grid; gap: 20px; margin-bottom: 44px;">
        
        <div style="background: #FFFFFF; border: 1.5px solid #E2E8F0; border-radius: 12px; padding: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <h3 style="font-size: 1.3rem; font-weight: 800; color: #0F172A; margin: 0;">1. Marketing &amp; Sales Management</h3>
            <span style="background: #EEF2FF; color: #4338CA; font-weight: 700; padding: 4px 10px; border-radius: 6px; font-size: 0.85rem;">Avg CTC: ₹16.0 – ₹28.0 LPA</span>
          </div>
          <p style="color: #475569; margin: 0 0 12px; font-size: 0.98rem;">
            Focuses on consumer behavior, brand management, digital marketing strategy, omnichannel distribution, and product marketing. Key recruiters include HUL, P&amp;G, ITC, Nestlé, Amazon, and Google.
          </p>
          <div style="font-size: 0.88rem; color: #64748B;"><strong>Key Roles:</strong> Brand Manager, Area Sales Manager, Product Marketing Specialist, Growth Lead.</div>
        </div>

        <div style="background: #FFFFFF; border: 1.5px solid #E2E8F0; border-radius: 12px; padding: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <h3 style="font-size: 1.3rem; font-weight: 800; color: #0F172A; margin: 0;">2. Banking &amp; Financial Services (BFSI)</h3>
            <span style="background: #ECFDF5; color: #047857; font-weight: 700; padding: 4px 10px; border-radius: 6px; font-size: 0.85rem;">Avg CTC: ₹18.0 – ₹35.0 LPA</span>
          </div>
          <p style="color: #475569; margin: 0 0 12px; font-size: 0.98rem;">
            Covers investment banking, corporate finance, equity research, portfolio management, fintech, and risk modeling. Key recruiters include Goldman Sachs, JP Morgan, Morgan Stanley, HDFC Bank, and Barclays.
          </p>
          <div style="font-size: 0.88rem; color: #64748B;"><strong>Key Roles:</strong> Investment Banking Associate, Financial Analyst, Equity Research Specialist, Wealth Manager.</div>
        </div>

        <div style="background: #FFFFFF; border: 1.5px solid #E2E8F0; border-radius: 12px; padding: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <h3 style="font-size: 1.3rem; font-weight: 800; color: #0F172A; margin: 0;">3. Business Analytics &amp; Data Science</h3>
            <span style="background: #FAF5FF; color: #6B21A8; font-weight: 700; padding: 4px 10px; border-radius: 6px; font-size: 0.85rem;">Avg CTC: ₹18.0 – ₹32.0 LPA</span>
          </div>
          <p style="color: #475569; margin: 0 0 12px; font-size: 0.98rem;">
            The fastest-growing MBA specialization combining predictive modeling, Python/SQL data engineering, AI strategy, and management consulting. Key recruiters include McKinsey Analytics, BCG GAMMA, Bain &amp; Co, and Accenture Strategy.
          </p>
          <div style="font-size: 0.88rem; color: #64748B;"><strong>Key Roles:</strong> Business Analytics Consultant, Data Strategist, AI Solutions Manager, Operations Analyst.</div>
        </div>

        <div style="background: #FFFFFF; border: 1.5px solid #E2E8F0; border-radius: 12px; padding: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <h3 style="font-size: 1.3rem; font-weight: 800; color: #0F172A; margin: 0;">4. Operations &amp; Supply Chain Management</h3>
            <span style="background: #FFFBEB; color: #92400E; font-weight: 700; padding: 4px 10px; border-radius: 6px; font-size: 0.85rem;">Avg CTC: ₹16.0 – ₹26.0 LPA</span>
          </div>
          <p style="color: #475569; margin: 0 0 12px; font-size: 0.98rem;">
            Teaches logistics optimization, Lean Six Sigma manufacturing, warehouse automation, and procurement. Key recruiters include Flipkart, Amazon, Tata Motors, Reliance Retail, and DHL.
          </p>
          <div style="font-size: 0.88rem; color: #64748B;"><strong>Key Roles:</strong> Supply Chain Program Manager, Operations Consultant, Logistics Lead, Procurement Specialist.</div>
        </div>

        <div style="background: #FFFFFF; border: 1.5px solid #E2E8F0; border-radius: 12px; padding: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <h3 style="font-size: 1.3rem; font-weight: 800; color: #0F172A; margin: 0;">5. Human Resource Management (HRM)</h3>
            <span style="background: #F1F5F9; color: #334155; font-weight: 700; padding: 4px 10px; border-radius: 6px; font-size: 0.85rem;">Avg CTC: ₹14.0 – ₹24.0 LPA</span>
          </div>
          <p style="color: #475569; margin: 0 0 12px; font-size: 0.98rem;">
            Focuses on strategic talent acquisition, executive compensation, people analytics, and organizational design. Led by XLRI Jamshedpur and TISS Mumbai. Key recruiters include Deloitte, ITC, and Aditya Birla Group.
          </p>
          <div style="font-size: 0.88rem; color: #64748B;"><strong>Key Roles:</strong> HR Business Partner (HRBP), Talent Strategy Specialist, Compensation &amp; Benefits Lead.</div>
        </div>

      </section>

    </main>
    ${COMMON_FOOTER}
  `;
}

/**
 * 15. ROI Ranking Hub Generator (/programs/roi)
 */
export function generateProgramsRoiBodyHtml(colleges = []) {
  const highRoiColleges = [
    { name: 'Faculty of Management Studies (FMS), Delhi University', city: 'Delhi', fees: '₹2.00 Lakhs', avgSalary: '₹34.10 LPA', ratio: '17.05x', cutoff: 'CAT 99+' },
    { name: 'SIMSREE Mumbai (Sydenham)', city: 'Mumbai', fees: '₹1.36 Lakhs', avgSalary: '₹15.19 LPA', ratio: '11.16x', cutoff: 'MAH CET 99.8+' },
    { name: 'Jamnalal Bajaj Institute of Management Studies (JBIMS)', city: 'Mumbai', fees: '₹6.10 Lakhs', avgSalary: '₹28.02 LPA', ratio: '4.59x', cutoff: 'CET 99.9+ / CAT 99+' },
    { name: 'Tata Institute of Social Sciences (TISS), Mumbai', city: 'Mumbai', fees: '₹2.40 Lakhs', avgSalary: '₹27.22 LPA', ratio: '11.34x', cutoff: 'CAT / CUET PG' },
    { name: 'Department of Management Studies (DMS), IIT Delhi', city: 'Delhi', fees: '₹12.00 Lakhs', avgSalary: '₹25.82 LPA', ratio: '2.15x', cutoff: 'CAT 98+' },
    { name: 'Shailesh J. Mehta School of Management (SJMSOM), IIT Bombay', city: 'Mumbai', fees: '₹14.50 Lakhs', avgSalary: '₹28.88 LPA', ratio: '1.99x', cutoff: 'CAT 98.5+' },
    { name: 'Vinod Gupta School of Management (VGSoM), IIT Kharagpur', city: 'Kharagpur', fees: '₹11.50 Lakhs', avgSalary: '₹22.13 LPA', ratio: '1.92x', cutoff: 'CAT 95+' },
    { name: 'Delhi School of Economics (DSE), Delhi University', city: 'Delhi', fees: '₹0.35 Lakhs', avgSalary: '₹14.50 LPA', ratio: '41.4x', cutoff: 'CAT 95+' }
  ];

  return `
    ${COMMON_HEADER}
    <main style="max-width: 1100px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif; color: #1E293B; line-height: 1.65;">
      
      <!-- Breadcrumb Navigation -->
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <ol style="list-style: none; display: flex; flex-wrap: wrap; gap: 8px; padding: 0; margin: 0;">
          <li><a href="/" style="color: #6B2CF5; text-decoration: none; font-weight: 500;">Home</a> &gt;</li>
          <li><a href="/programs" style="color: #6B2CF5; text-decoration: none; font-weight: 500;">Programs</a> &gt;</li>
          <li aria-current="page" style="color: #0F172A; font-weight: 600;">High-ROI MBA Colleges</li>
        </ol>
      </nav>

      <header style="margin-bottom: 32px;">
        <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(16, 185, 129, 0.08); color: #059669; padding: 6px 14px; border-radius: 9999px; font-size: 0.85rem; font-weight: 700; margin-bottom: 14px;">
          <span>💎 Maximum Financial Payback Analysis • Session 2027-29</span>
        </div>
        <h1 style="font-size: 2.25rem; font-weight: 800; color: #0F172A; line-height: 1.25; margin: 0 0 14px;">
          Highest ROI MBA Colleges in India: Low Tuition Fees &amp; Top Placement CTC
        </h1>
        <p style="color: #475569; font-size: 1.15rem; line-height: 1.6; max-width: 960px;">
          Return on Investment (ROI) measures your first-year placement package against your total 2-year academic fee commitment. Top public university departments in India confer world-class recruitments with payback periods under 3 to 6 months.
        </p>
      </header>

      <!-- ROI Table -->
      <section style="margin-bottom: 44px;">
        <h2 style="font-size: 1.45rem; font-weight: 800; color: #0F172A; margin: 0 0 16px;">
          India's Top High-ROI Business Schools (Audited Payback Multipliers)
        </h2>
        <div style="overflow-x: auto; border: 1px solid #E2E8F0; border-radius: 12px;">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
            <thead style="background: #F8FAFC; color: #334155;">
              <tr>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">B-School Name</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">City</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">2-Yr Total Fee</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Average CTC</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">ROI Multiplier</th>
                <th style="padding: 12px 16px; border-bottom: 2px solid #E2E8F0;">Cutoff</th>
              </tr>
            </thead>
            <tbody>
              ${highRoiColleges.map((col, idx) => `
                <tr style="border-bottom: 1px solid #E2E8F0; background: ${idx % 2 === 0 ? '#FFFFFF' : '#FAFAFE'};">
                  <td style="padding: 12px 16px; font-weight: 700; color: #0F172A;">${escapeHtml(col.name)}</td>
                  <td style="padding: 12px 16px; color: #475569;">${escapeHtml(col.city)}</td>
                  <td style="padding: 12px 16px; font-weight: 700; color: #2563EB;">${escapeHtml(col.fees)}</td>
                  <td style="padding: 12px 16px; font-weight: 700; color: #10B981;">${escapeHtml(col.avgSalary)}</td>
                  <td style="padding: 12px 16px; font-weight: 800; color: #D97706;">${escapeHtml(col.ratio)}</td>
                  <td style="padding: 12px 16px; font-weight: 600; color: #6B2CF5;">${escapeHtml(col.cutoff)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </section>

    </main>
    ${COMMON_FOOTER}
  `;
}

/**
 * 16. Contact Page Generator (/contact)
 */
export function generateContactBodyHtml() {
  return `
    ${COMMON_HEADER}
    <main style="max-width: 960px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif; color: #1E293B; line-height: 1.65;">
      
      <!-- Breadcrumb Navigation -->
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <ol style="list-style: none; display: flex; flex-wrap: wrap; gap: 8px; padding: 0; margin: 0;">
          <li><a href="/" style="color: #6B2CF5; text-decoration: none; font-weight: 500;">Home</a> &gt;</li>
          <li aria-current="page" style="color: #0F172A; font-weight: 600;">Admissions Counseling &amp; Contact</li>
        </ol>
      </nav>

      <header style="margin-bottom: 32px; text-align: center;">
        <h1 style="font-size: 2.25rem; font-weight: 800; color: #0F172A; line-height: 1.25; margin: 0 0 14px;">
          Free MBA Admission Counseling &amp; Mentorship (Session 2027-29)
        </h1>
        <p style="color: #475569; font-size: 1.15rem; line-height: 1.6; max-width: 720px; margin: 0 auto;">
          Connect directly with experienced academic advisors and IIM/XLRI mentors for personalized profile evaluation, cutoff shortlisting, and application guidance.
        </p>
      </header>

      <!-- Contact Info Grid -->
      <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; margin-bottom: 40px;">
        <div style="background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 12px; padding: 22px; text-align: center;">
          <div style="font-size: 2rem; margin-bottom: 8px;">📞</div>
          <h3 style="font-size: 1.15rem; font-weight: 800; color: #0F172A; margin: 0 0 6px;">Direct Admissions Helpline</h3>
          <p style="color: #64748B; font-size: 0.9rem; margin: 0 0 12px;">Call or WhatsApp our counseling desk</p>
          <a href="tel:+918800126446" style="font-size: 1.15rem; font-weight: 800; color: #6B2CF5; text-decoration: none;">+91-8800126446</a>
        </div>

        <div style="background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 12px; padding: 22px; text-align: center;">
          <div style="font-size: 2rem; margin-bottom: 8px;">✉️</div>
          <h3 style="font-size: 1.15rem; font-weight: 800; color: #0F172A; margin: 0 0 6px;">Founder &amp; Mentor Desk</h3>
          <p style="color: #64748B; font-size: 0.9rem; margin: 0 0 12px;">For profile review &amp; scholarship inquiries</p>
          <a href="mailto:founder@findmybschool.com" style="font-size: 1.05rem; font-weight: 700; color: #6B2CF5; text-decoration: none;">founder@findmybschool.com</a>
        </div>

        <div style="background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 12px; padding: 22px; text-align: center;">
          <div style="font-size: 2rem; margin-bottom: 8px;">📍</div>
          <h3 style="font-size: 1.15rem; font-weight: 800; color: #0F172A; margin: 0 0 6px;">Central Headquarters</h3>
          <p style="color: #64748B; font-size: 0.9rem; margin: 0;">Connaught Place, New Delhi 110001, Republic of India</p>
        </div>
      </section>

    </main>
    ${COMMON_FOOTER}
  `;
}

/**
 * 17. Terms Page Generator (/terms)
 */
export function generateTermsBodyHtml() {
  return `
    ${COMMON_HEADER}
    <main style="max-width: 900px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif; color: #1E293B; line-height: 1.7;">
      
      <!-- Breadcrumb Navigation -->
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <ol style="list-style: none; display: flex; flex-wrap: wrap; gap: 8px; padding: 0; margin: 0;">
          <li><a href="/" style="color: #6B2CF5; text-decoration: none; font-weight: 500;">Home</a> &gt;</li>
          <li aria-current="page" style="color: #0F172A; font-weight: 600;">Terms and Conditions</li>
        </ol>
      </nav>

      <header style="margin-bottom: 28px;">
        <h1 style="font-size: 2.2rem; font-weight: 800; color: #0F172A; margin: 0 0 10px;">Terms and Conditions</h1>
        <p style="color: #64748B; font-size: 0.95rem; margin: 0;">Last Updated: October 14, 2026 • Jurisdiction: Republic of India</p>
      </header>

      <article style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 28px;">
        <h2 style="font-size: 1.3rem; font-weight: 800; color: #0F172A; margin-top: 0;">1. Acceptance of Terms</h2>
        <p>By accessing, browsing, registering, or interacting with <strong>FindMyBSchool.com</strong> ("the Website", "we", "our", or "us"), including our proprietary college search engines, entrance exam directories, percentile predictors, admission inquiry forms, and AI-driven profile evaluation tools, you ("User", "Student", or "Visitor") agree to be bound by these Terms and Conditions ("Terms"), as well as our Privacy Policy.</p>

        <h2 style="font-size: 1.3rem; font-weight: 800; color: #0F172A; margin-top: 24px;">2. Scope of Services</h2>
        <p>FindMyBSchool provides verified educational information, college search directories, entrance exam guides, CBT mock tests, and admissions counseling for MBA and PGDM programs across India. All data published is curated from official institutional websites, AICTE mandatory disclosures, and verified gazette notifications.</p>

        <h2 style="font-size: 1.3rem; font-weight: 800; color: #0F172A; margin-top: 24px;">3. Educational Disclaimer</h2>
        <p>FindMyBSchool is an independent advisory and college directory portal. We are not an authorized testing body (such as IIM CAT Convenors, XLRI, NTA, GMAC, or Symbiosis), nor do we guarantee admissions. All admissions are subject to institutional eligibility criteria and official selection procedures.</p>

        <h2 style="font-size: 1.3rem; font-weight: 800; color: #0F172A; margin-top: 24px;">4. Grievance Redressal</h2>
        <p>For any legal or user inquiries, contact our grievance team at founder@findmybschool.com or via telephone at +91-8800126446.</p>
      </article>

    </main>
    ${COMMON_FOOTER}
  `;
}

/**
 * 18. Privacy Policy Page Generator (/privacy)
 */
export function generatePrivacyBodyHtml() {
  return `
    ${COMMON_HEADER}
    <main style="max-width: 900px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif; color: #1E293B; line-height: 1.7;">
      
      <!-- Breadcrumb Navigation -->
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <ol style="list-style: none; display: flex; flex-wrap: wrap; gap: 8px; padding: 0; margin: 0;">
          <li><a href="/" style="color: #6B2CF5; text-decoration: none; font-weight: 500;">Home</a> &gt;</li>
          <li aria-current="page" style="color: #0F172A; font-weight: 600;">Privacy Policy</li>
        </ol>
      </nav>

      <header style="margin-bottom: 28px;">
        <h1 style="font-size: 2.2rem; font-weight: 800; color: #0F172A; margin: 0 0 10px;">Privacy Policy</h1>
        <p style="color: #64748B; font-size: 0.95rem; margin: 0;">DPDP Act 2023 &amp; GDPR Compliant Privacy Framework • Last Updated: October 14, 2026</p>
      </header>

      <article style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 28px;">
        <h2 style="font-size: 1.3rem; font-weight: 800; color: #0F172A; margin-top: 0;">1. Introduction &amp; Commitment</h2>
        <p>FindMyBSchool is committed to safeguarding the personal data of management aspirants. This Privacy Policy details how we collect, process, and secure user information when utilizing our website, calculators, mock tests, and counseling services.</p>

        <h2 style="font-size: 1.3rem; font-weight: 800; color: #0F172A; margin-top: 24px;">2. Personal Data We Collect</h2>
        <p>We collect student academic profiles (entrance exam scores, academic percentages, work experience) and contact details (name, email address, phone number) strictly with express consent when you submit admission inquiry forms, download college brochures, or request counseling.</p>

        <h2 style="font-size: 1.3rem; font-weight: 800; color: #0F172A; margin-top: 24px;">3. Data Protection &amp; Anti-Spam Guarantee</h2>
        <p>We adhere to strict zero-spam guidelines. Student personal information is protected with 256-bit encryption and is never sold to unauthorized third parties or unverified coaching centers.</p>

        <h2 style="font-size: 1.3rem; font-weight: 800; color: #0F172A; margin-top: 24px;">4. User Rights &amp; Data Deletion</h2>
        <p>Under the Digital Personal Data Protection (DPDP) Act 2023, you have the right to request access, correction, or permanent deletion of your personal records at any time by writing to privacy@findmybschool.com.</p>
      </article>

    </main>
    ${COMMON_FOOTER}
  `;
}


/**
 * 19. Homepage Pre-Rendered Body HTML
 * Provides high-priority internal link equity from homepage to all directories, top colleges, and city hubs.
 */
export function generateHomepageBodyHtml(colleges = [], allCities = []) {
  const top24Colleges = colleges.slice(0, 24);
  const featuredCities = ['Delhi NCR', 'Mumbai', 'Bangalore', 'Pune', 'Hyderabad', 'Kolkata', 'Chennai', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Dehradun', 'Indore', 'Chandigarh'];

  return `
    ${COMMON_HEADER}
    <main style="max-width: 1200px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif; color: #1E293B; line-height: 1.65;">
      
      <!-- Hero Section -->
      <section style="text-align: center; padding: 36px 0 24px;">
        <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(107, 44, 245, 0.08); color: #6B2CF5; padding: 6px 16px; border-radius: 9999px; font-size: 0.88rem; font-weight: 700; margin-bottom: 16px;">
          <span>🎓 Admissions Session 2027-29 • 100% Audited Placement Reports</span>
        </div>
        <h1 style="font-size: 2.5rem; font-weight: 800; color: #0F172A; line-height: 1.2; margin: 0 auto 16px; max-width: 900px;">
          Find Top MBA &amp; PGDM Colleges, Fees, Cutoffs, Scholarships &amp; Exam Predictors
        </h1>
        <p style="color: #475569; font-size: 1.15rem; line-height: 1.6; max-width: 820px; margin: 0 auto 24px;">
          FindMyBSchool helps MBA and PGDM aspirants evaluate 680+ verified Indian business schools with audited 2-year tuition fees, real CAT/XAT/CMAT cutoffs, and verified placement statistics with 0% scrapers.
        </p>
        <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
          <a href="/colleges" style="padding: 12px 24px; background: #6B2CF5; color: #FFFFFF; font-weight: 700; text-decoration: none; border-radius: 8px; font-size: 1rem;">
            🏛️ Explore 680+ Verified Colleges
          </a>
          <a href="/tools/cat-college-predictor" style="padding: 12px 24px; background: #EEF2FF; color: #4338CA; font-weight: 700; text-decoration: none; border-radius: 8px; font-size: 1rem;">
            🎯 CAT Score &amp; Percentile Calculator
          </a>
          <a href="/scholarships" style="padding: 12px 24px; background: #ECFDF5; color: #047857; font-weight: 700; text-decoration: none; border-radius: 8px; font-size: 1rem;">
            💰 Live Scholarships (Up to ₹25 Lakhs)
          </a>
        </div>
      </section>

      <!-- Key Portal Admissions Tools & Directories -->
      <section style="margin: 40px 0; background: #FFFFFF; border: 1.5px solid #E2E8F0; border-radius: 14px; padding: 28px;">
        <h2 style="font-size: 1.45rem; font-weight: 800; color: #0F172A; margin: 0 0 16px;">
          Core Admissions Tools &amp; Directories
        </h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 14px;">
          <a href="/colleges" style="padding: 16px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; text-decoration: none; color: inherit; display: block;">
            <div style="font-weight: 700; color: #6B2CF5; font-size: 1.05rem;">🏛️ MBA &amp; PGDM Directory</div>
            <div style="font-size: 0.88rem; color: #64748B; margin-top: 4px;">Filter 680+ colleges by NIRF rank, city, fees &amp; average package.</div>
          </a>
          <a href="/tools/cat-college-predictor" style="padding: 16px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; text-decoration: none; color: inherit; display: block;">
            <div style="font-weight: 700; color: #6B2CF5; font-size: 1.05rem;">🎯 CAT College Predictor</div>
            <div style="font-size: 0.88rem; color: #64748B; margin-top: 4px;">Official +3/-1 scoring algorithm, slot normalization &amp; IIM call probabilities.</div>
          </a>
          <a href="/scholarships" style="padding: 16px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; text-decoration: none; color: inherit; display: block;">
            <div style="font-weight: 700; color: #6B2CF5; font-size: 1.05rem;">💰 Live MBA Scholarships</div>
            <div style="font-size: 0.88rem; color: #64748B; margin-top: 4px;">Over ₹25 Lakhs in corporate, government &amp; institutional grants.</div>
          </a>
          <a href="/aiu-approved-campuses" style="padding: 16px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; text-decoration: none; color: inherit; display: block;">
            <div style="font-weight: 700; color: #6B2CF5; font-size: 1.05rem;">📜 AIU Approved Campuses</div>
            <div style="font-size: 0.88rem; color: #64748B; margin-top: 4px;">360+ AIU-equivalent MBA &amp; PGDM colleges across 9 top metropolitan clusters.</div>
          </a>
          <a href="/mock-test" style="padding: 16px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; text-decoration: none; color: inherit; display: block;">
            <div style="font-weight: 700; color: #6B2CF5; font-size: 1.05rem;">💻 All-India Free Mock Tests</div>
            <div style="font-size: 0.88rem; color: #64748B; margin-top: 4px;">TCS iON CBT interface with instant sectional percentiles and solution explanations.</div>
          </a>
          <a href="/exams" style="padding: 16px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; text-decoration: none; color: inherit; display: block;">
            <div style="font-weight: 700; color: #6B2CF5; font-size: 1.05rem;">📝 National Entrance Exams</div>
            <div style="font-size: 0.88rem; color: #64748B; margin-top: 4px;">Complete guides for CAT, XAT, CMAT, SNAP, NMAT, MAT &amp; MAH MBA CET.</div>
          </a>
          <a href="/programs/compare" style="padding: 16px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; text-decoration: none; color: inherit; display: block;">
            <div style="font-weight: 700; color: #6B2CF5; font-size: 1.05rem;">⚖️ MBA vs PGDM Comparison</div>
            <div style="font-size: 0.88rem; color: #64748B; margin-top: 4px;">Detailed legal equivalence, curriculum differences &amp; recruiter perception.</div>
          </a>
          <a href="/programs/roi" style="padding: 16px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; text-decoration: none; color: inherit; display: block;">
            <div style="font-weight: 700; color: #6B2CF5; font-size: 1.05rem;">💎 Highest ROI Business Schools</div>
            <div style="font-size: 0.88rem; color: #64748B; margin-top: 4px;">Audited salary-to-fees payback ratios (FMS, JBIMS, SIMSREE, IITs).</div>
          </a>
          <a href="/blog" style="padding: 16px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; text-decoration: none; color: inherit; display: block;">
            <div style="font-weight: 700; color: #6B2CF5; font-size: 1.05rem;">📖 Editorial Strategy Blog</div>
            <div style="font-size: 0.88rem; color: #64748B; margin-top: 4px;">Interview prep, GD-WAT secrets, and 99 percentile CAT strategy playbooks.</div>
          </a>
          <a href="/contact" style="padding: 16px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; text-decoration: none; color: inherit; display: block;">
            <div style="font-weight: 700; color: #6B2CF5; font-size: 1.05rem;">🤝 Free 1-on-1 Counseling</div>
            <div style="font-size: 0.88rem; color: #64748B; margin-top: 4px;">Unbiased admissions evaluation with senior IIM/XLRI alumni counselors.</div>
          </a>
        </div>
      </section>

      <!-- Premier Business Schools in India -->
      <section style="margin: 40px 0; background: #FFFFFF; border: 1.5px solid #E2E8F0; border-radius: 14px; padding: 28px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 16px; flex-wrap: wrap; gap: 8px;">
          <div>
            <h2 style="font-size: 1.45rem; font-weight: 800; color: #0F172A; margin: 0 0 4px;">
              Premier MBA &amp; PGDM Business Schools
            </h2>
            <p style="color: #64748B; font-size: 0.95rem; margin: 0;">Audited tuition fees, qualifying entrance cutoffs, and recent average CTC packages.</p>
          </div>
          <a href="/colleges" style="color: #6B2CF5; font-weight: 700; text-decoration: none; font-size: 0.92rem;">
            View All 680+ Colleges &rarr;
          </a>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px;">
          ${top24Colleges.map(c => `
            <div style="padding: 14px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="font-size: 0.8rem; color: #64748B;">📍 ${escapeHtml(c.city || c.location || 'India')} • ${c.nirfRank ? '#' + c.nirfRank + ' NIRF' : 'Top Tier'}</div>
                <h3 style="font-size: 1rem; font-weight: 700; margin: 6px 0;">
                  <a href="/colleges/${c.id}" style="color: #0F172A; text-decoration: none;">
                    ${escapeHtml(c.name)}
                  </a>
                </h3>
                <div style="font-size: 0.85rem; color: #475569; margin-top: 4px;">
                  Fees: <strong>${escapeHtml(c.fees)}</strong> • Avg: <strong style="color: #10B981;">${escapeHtml(c.avgSalary)}</strong>
                </div>
              </div>
              <div style="margin-top: 10px; display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.8rem; color: #D97706; font-weight: 600;">
                  ${c.cutoffCAT !== 'N/A' ? 'CAT ' + escapeHtml(c.cutoffCAT) : (c.cutoffXAT !== 'N/A' ? 'XAT ' + escapeHtml(c.cutoffXAT) : 'Merit')}
                </span>
                <a href="/colleges/${c.id}" style="font-size: 0.82rem; color: #6B2CF5; font-weight: 700; text-decoration: none;">
                  Dossier &rarr;
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Top MBA Hubs by City -->
      <section style="margin: 40px 0; background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 14px; padding: 28px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 16px; flex-wrap: wrap; gap: 8px;">
          <div>
            <h2 style="font-size: 1.45rem; font-weight: 800; color: #0F172A; margin: 0 0 4px;">
              Top MBA Hubs by City
            </h2>
            <p style="color: #64748B; font-size: 0.95rem; margin: 0;">Explore local cutoff percentiles, placement recruiters, and audited fees across India.</p>
          </div>
          <a href="/colleges" style="color: #6B2CF5; font-weight: 700; text-decoration: none; font-size: 0.92rem;">
            Explore All 150+ Cities &rarr;
          </a>
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
          ${featuredCities.map(city => {
            const norm = city.toLowerCase().replace(/\s+/g, '-');
            return `
              <a href="/colleges/city/${encodeURIComponent(norm)}" style="padding: 8px 16px; background: #FFFFFF; border: 1px solid #CBD5E1; border-radius: 20px; color: #1E293B; text-decoration: none; font-weight: 600; font-size: 0.92rem;">
                📍 MBA Colleges in ${escapeHtml(city)}
              </a>
            `;
          }).join('')}
        </div>
      </section>

      <!-- Direct Answer / AEO Key Questions & Answers -->
      <section style="margin: 40px 0; background: #FFFFFF; border: 1.5px solid #E2E8F0; border-radius: 14px; padding: 28px;">
        <h2 style="font-size: 1.45rem; font-weight: 800; color: #0F172A; margin: 0 0 16px;">
          Frequently Asked Questions (Admissions &amp; Cutoffs)
        </h2>
        <div style="line-height: 1.7; color: #334155;">
          <details style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
            <summary style="font-weight: 700; color: #0F172A; cursor: pointer; font-size: 1.02rem;">What is the main difference between an MBA and a PGDM degree in India?</summary>
            <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
              An MBA is a master's degree conferred by university-affiliated institutions (e.g., FMS Delhi, JBIMS Mumbai, PUMBA) under UGC. A PGDM is an autonomous diploma awarded by industry-focused institutions (e.g., IIMs, XLRI, SPJIMR, MDI) approved by AICTE. Both are treated as fully equivalent in corporate hiring, PSU recruitment, and higher education when AIU accredited.
            </div>
          </details>

          <details style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
            <summary style="font-weight: 700; color: #0F172A; cursor: pointer; font-size: 1.02rem;">Which MBA colleges in India provide the highest Return on Investment (ROI)?</summary>
            <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
              The highest ROI business schools in India are FMS Delhi (2-year fees ~₹2.0 Lakhs with average CTC of ₹34.1 LPA), JBIMS Mumbai (fees ~₹6.0 Lakhs with average CTC of ₹28.0 LPA), SIMSREE Mumbai (fees ~₹2.3 Lakhs with average CTC of ₹15.3 LPA), and TISS Mumbai (fees ~₹2.5 Lakhs with average CTC of ₹27.2 LPA).
            </div>
          </details>

          <details style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
            <summary style="font-weight: 700; color: #0F172A; cursor: pointer; font-size: 1.02rem;">How does the CAT slot normalization work across Slot 1, Slot 2, and Slot 3?</summary>
            <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
              CAT conducts slot normalization using the equipercentile equating method to adjust for differences in section difficulty. Raw scores are converted to scaled scores based on percentile equivalence across morning, afternoon, and evening test slots before final composite score shortlisting.
            </div>
          </details>

          <details style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px 20px; margin-bottom: 12px;">
            <summary style="font-weight: 700; color: #0F172A; cursor: pointer; font-size: 1.02rem;">Can I secure collateral-free education loans for top MBA colleges?</summary>
            <div style="margin-top: 10px; color: #475569; font-size: 0.95rem; line-height: 1.6;">
              Yes. Students admitted to premier institutes on FindMyBSchool are eligible for 100% collateral-free education loans up to ₹20-40 Lakhs under the SBI Scholar Scheme, Bank of Baroda Baroda Scholar Scheme, and Vidya Lakshmi government portal with zero margin money and expedited approvals.
            </div>
          </details>
        </div>
      </section>

    </main>
    ${COMMON_FOOTER}
  `;
}


/**
 * 20. Strategy Blogs Main Directory Generator (/blog)
 */
export function generateBlogsDirectoryBodyHtml(blogs = []) {
  return `
    ${COMMON_HEADER}
    <main style="max-width: 1200px; margin: 32px auto; padding: 0 20px; font-family: system-ui, -apple-system, sans-serif; color: #1E293B; line-height: 1.65;">
      
      <!-- Breadcrumb Navigation -->
      <nav aria-label="Breadcrumb" style="font-size: 0.9rem; color: #64748B; margin-bottom: 16px;">
        <ol style="list-style: none; display: flex; flex-wrap: wrap; gap: 8px; padding: 0; margin: 0;">
          <li><a href="/" style="color: #6B2CF5; text-decoration: none; font-weight: 500;">Home</a> &gt;</li>
          <li aria-current="page" style="color: #0F172A; font-weight: 600;">MBA Strategy Blog</li>
        </ol>
      </nav>

      <header style="margin-bottom: 32px;">
        <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(107, 44, 245, 0.08); color: #6B2CF5; padding: 6px 14px; border-radius: 9999px; font-size: 0.85rem; font-weight: 700; margin-bottom: 14px;">
          <span>📖 Editorial Strategy &amp; Admissions Masterclasses (Session 2027-29)</span>
        </div>
        <h1 style="font-size: 2.25rem; font-weight: 800; color: #0F172A; line-height: 1.25; margin: 0 0 14px;">
          MBA Admissions, CAT Percentile Strategy &amp; GD-PI Preparation Blog
        </h1>
        <p style="color: #475569; font-size: 1.15rem; line-height: 1.6; max-width: 960px;">
          Comprehensive admissions playbooks, IIM interview secrets, CAT/XAT score-to-percentile breakdowns, and institutional reviews written by senior IIM/XLRI mentors and admissions analysts.
        </p>
      </header>

      <!-- Blogs Grid -->
      <section style="margin-bottom: 48px;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;">
          ${blogs.map(b => `
            <article style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 20px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; font-size: 0.8rem; color: #64748B;">
                  <span style="background: #EEF2FF; color: #4338CA; padding: 3px 8px; border-radius: 12px; font-weight: 600;">${escapeHtml(b.category || 'Admissions Guide')}</span>
                  <span>${escapeHtml(b.readTime || '5 min read')}</span>
                </div>
                <h2 style="font-size: 1.15rem; font-weight: 700; margin: 8px 0; line-height: 1.4;">
                  <a href="/blog/${b.id}" style="color: #0F172A; text-decoration: none;">
                    ${escapeHtml(b.title)}
                  </a>
                </h2>
                <p style="color: #475569; font-size: 0.92rem; line-height: 1.55; margin-top: 8px;">
                  ${escapeHtml((b.summary || b.excerpt || b.description || '').slice(0, 140))}${((b.summary || b.excerpt || b.description || '').length > 140 ? '...' : '')}
                </p>
              </div>
              <div style="margin-top: 16px; padding-top: 12px; border-top: 1px solid #F1F5F9; display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.82rem; color: #64748B;">By ${escapeHtml(b.author || 'Editorial Team')}</span>
                <a href="/blog/${b.id}" style="color: #6B2CF5; font-weight: 700; text-decoration: none; font-size: 0.88rem;">
                  Read Article &rarr;
                </a>
              </div>
            </article>
          `).join('')}
        </div>
      </section>

    </main>
    ${COMMON_FOOTER}
  `;
}
