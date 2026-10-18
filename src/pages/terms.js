export function renderTermsPage() {
  return `
    <div class="page-legal light-portal-theme">
      <!-- Legal Header -->
      <section class="legal-hero">
        <div class="section-container">
          <div class="legal-breadcrumb">
            <a href="/" data-route="home">Home</a>
            <span class="bc-sep">/</span>
            <span class="bc-current">Terms and Conditions</span>
          </div>
          <div class="legal-badge-pill">
            <span class="pulse-indicator"></span>
            <span>Legal Documentation & User Agreement</span>
          </div>
          <h1 class="page-title">Terms and Conditions</h1>
          <p class="page-subtitle">
            Please read these terms carefully before utilizing FindMyBSchool.com services, calculators, college comparisons, and admission guidance portals.
          </p>
          <div class="legal-meta-bar">
            <span>📅 <strong>Last Updated:</strong> October 14, 2026</span>
            <span class="meta-dot">•</span>
            <span>⏱️ <strong>Reading Time:</strong> ~8 minutes</span>
            <span class="meta-dot">•</span>
            <span>⚖️ <strong>Jurisdiction:</strong> Republic of India</span>
          </div>
        </div>
      </section>

      <!-- Main Legal Content Layout -->
      <div class="section-container legal-layout">
        <!-- Quick Navigation Sidebar -->
        <aside class="legal-sidebar">
          <div class="legal-toc-card">
            <h3 class="toc-title">Table of Contents</h3>
            <nav class="toc-nav">
              <a href="#section-acceptance" class="toc-link">1. Acceptance of Terms</a>
              <a href="#section-services" class="toc-link">2. Scope & Description of Services</a>
              <a href="#section-disclaimer" class="toc-link">3. Educational & Accuracy Disclaimer</a>
              <a href="#section-exams" class="toc-link">4. Exam & Cutoff Disclaimers</a>
              <a href="#section-conduct" class="toc-link">5. User Inquiries & Submissions</a>
              <a href="#section-calculators" class="toc-link">6. Calculators & AI Simulations</a>
              <a href="#section-ip" class="toc-link">7. Intellectual Property & Trademarks</a>
              <a href="#section-thirdparty" class="toc-link">8. Third-Party Websites & Affiliates</a>
              <a href="#section-liability" class="toc-link">9. Limitation of Liability</a>
              <a href="#section-termination" class="toc-link">10. Modifications & Termination</a>
              <a href="#section-jurisdiction" class="toc-link">11. Governing Law & Jurisdiction</a>
              <a href="#section-contact" class="toc-link">12. Grievance Redressal & Contact</a>
            </nav>
            <div class="toc-help-box">
              <span class="help-icon">💬</span>
              <div class="help-text">
                <strong>Have Questions?</strong>
                <p>Our legal and admissions support team is available to assist.</p>
                <a href="/contact" data-route="contact" class="help-btn">Contact Support</a>
              </div>
            </div>
          </div>
        </aside>

        <!-- Document Body -->
        <article class="legal-article">
          <!-- Notice Card -->
          <div class="legal-callout info">
            <div class="callout-icon">ℹ️</div>
            <div class="callout-body">
              <strong>Important Notice for MBA & PGDM Aspirants</strong>
              <p>
                FindMyBSchool (operated at <em>findmybschool.com</em>) is an independent informational and college advisory portal. 
                We are not an authorized testing body (such as IIM CAT Convenors, XLRI, NTA, GMAC, or Symbiosis), nor do we sell guaranteed college admissions. 
                All admissions are subject to institutional eligibility criteria and official selection procedures.
              </p>
            </div>
          </div>

          <!-- Section 1 -->
          <section id="section-acceptance" class="legal-section">
            <h2 class="section-heading">1. Acceptance of Terms</h2>
            <p>
              By accessing, browsing, registering, or interacting with <strong>FindMyBSchool.com</strong> ("the Website", "we", "our", or "us"), 
              including our proprietary college search engines, entrance exam directories, percentile predictors, admission inquiry forms, 
              and AI-driven profile evaluation tools, you ("User", "Student", or "Visitor") agree to be bound by these Terms and Conditions ("Terms"), 
              as well as our <a href="/privacy" data-route="privacy" class="inline-link">Privacy Policy</a>.
            </p>
            <p>
              If you do not agree with any provision of these Terms, you must immediately discontinue your use of the Website. 
              Continued usage signifies your irrevocable agreement to these conditions.
            </p>
          </section>

          <!-- Section 2 -->
          <section id="section-services" class="legal-section">
            <h2 class="section-heading">2. Scope & Description of Services</h2>
            <p>FindMyBSchool provides digital educational advisory tools and verified information services including, but not limited to:</p>
            <ul class="legal-list">
              <li><strong>B-School Directories & Profiling:</strong> Institutional profiles of 600+ business schools across India, including NIRF ranking metrics, accreditation status (AICTE, NBA, AACSB, AMBA, EQUIS), audited tuition fees, and placement reports.</li>
              <li><strong>Interactive Calculators & Predictors:</strong> Algorithmic score-to-percentile tools, response sheet parsers, and profile evaluation simulators for CAT, XAT, CMAT, SNAP, and NMAT.</li>
              <li><strong>Curated Comparisons:</strong> Side-by-side analytical comparisons between MBA vs PGDM programs, specialization ROI, and city hub ecosystems.</li>
              <li><strong>Admissions Guidance & Mentorship:</strong> Connecting aspiring management students with experienced academic counselors, alumni mentors, and verified partner institutions for counseling and brochure dissemination.</li>
            </ul>
          </section>

          <!-- Section 3 -->
          <section id="section-disclaimer" class="legal-section">
            <h2 class="section-heading">3. Educational & Accuracy Disclaimer</h2>
            <p>
              While FindMyBSchool exercises reasonable professional care to aggregate and verify institutional information (such as fees, batch strength, recruiters, and average salary figures) directly from audited placement reports, NIRF submissions, and official college prospectuses:
            </p>
            <ul class="legal-list">
              <li><strong>Indicative Nature:</strong> All data displayed on the Website is purely for informational and career planning guidance. Colleges and universities reserve unilateral rights to revise their tuition structures, hostel fees, reservation quotas, and seat matrices without prior notice.</li>
              <li><strong>Verification Obligation:</strong> Users are strongly advised to cross-verify all fees, eligibility criteria, and application deadlines directly with the respective college's official admissions office before making financial commitments or applying.</li>
              <li><strong>No Commercial Endorsement:</strong> Inclusion of any institution in rankings, featured listings, or search filters does not constitute an endorsement, guarantee of academic excellence, or assurance of campus placement by FindMyBSchool.</li>
            </ul>
          </section>

          <!-- Section 4 -->
          <section id="section-exams" class="legal-section">
            <h2 class="section-heading">4. Entrance Exam & Cutoff Disclaimers</h2>
            <p>
              Information published regarding national and state-level MBA entrance examinations (including CAT, XAT, IIFT, SNAP, NMAT, CMAT, MAT, MAH-CET, and CUET-PG) is compiled from historical cutoffs, convening authority press releases, and RTI disclosures.
            </p>
            <div class="legal-callout warning">
              <div class="callout-icon">⚠️</div>
              <div class="callout-body">
                <strong>Non-Affiliation Notice</strong>
                <p>
                  "CAT" is a registered trademark of the Indian Institutes of Management. "XAT" is a registered trademark of XLRI Jamshedpur. "NMAT by GMAC" is a registered trademark of the Graduate Management Admission Council. "SNAP" is a registered trademark of Symbiosis International (Deemed University). 
                  FindMyBSchool is an independent advisory portal and has no direct affiliation, sponsorship, or endorsement from any of these examination conducting bodies.
                </p>
              </div>
            </div>
            <p>
              Cutoffs displayed are indicative historical minimums or expected ranges. Meeting a past cutoff does not guarantee a shortlist call for Written Ability Test (WAT), Group Discussion (GD), or Personal Interview (PI), as B-schools apply multidimensional composite score formulas (including 10th, 12th, graduation marks, work experience, and gender/academic diversity points).
            </p>
          </section>

          <!-- Section 5 -->
          <section id="section-conduct" class="legal-section">
            <h2 class="section-heading">5. User Inquiries, Forms & Submissions</h2>
            <p>When you submit your contact details via our admission inquiry forms, brochure download modals, or mentorship booking interfaces:</p>
            <ul class="legal-list">
              <li><strong>Truthfulness:</strong> You represent and warrant that the personal information provided (full name, email address, mobile/WhatsApp number, graduation details, and exam scores) is authentic, accurate, and current.</li>
              <li><strong>Consent to Contact:</strong> By submitting an inquiry, you grant explicit consent for FindMyBSchool's senior admission advisors and verified partner business schools to contact you via phone call, SMS, WhatsApp, or email to share relevant brochures, fee details, and counseling guidance.</li>
              <li><strong>No Spam Commitment:</strong> We respect your privacy. We do not sell or lease student contact databases to unverified third-party telemarketers or non-educational spam vendors.</li>
            </ul>
          </section>

          <!-- Section 6 -->
          <section id="section-calculators" class="legal-section">
            <h2 class="section-heading">6. Calculators & AI Profile Simulations</h2>
            <p>
              Our automated CAT Score Calculator, Percentile Predictor, and AdmitIQ AI Assistant generate simulated projections based on historical response datasets, slot difficulty normalization assumptions, and statistical models.
            </p>
            <p>
              These simulation outcomes are meant exclusively for strategic self-assessment and mock preparation. They do not constitute official scorecards or binding admission predictions. FindMyBSchool disclaims any liability for variance between our simulated percentiles and actual results released by exam authorities.
            </p>
          </section>

          <!-- Section 7 -->
          <section id="section-ip" class="legal-section">
            <h2 class="section-heading">7. Intellectual Property & Trademarks</h2>
            <p>
              All proprietary algorithms, user interface designs, custom graphics, infographics, curated databases, and editorial content published on FindMyBSchool.com are the intellectual property of FindMyBSchool and are protected under Indian and international copyright laws.
            </p>
            <p>
              Unauthorized scraping, bulk extraction, reverse engineering, republishing, or commercial reproduction of our verified college databases or calculator code without written permission is strictly prohibited and subject to legal action.
            </p>
            <p>
              Institutional emblems, university seals, and college logos displayed on individual profile cards are the intellectual property of their respective institutions and are utilized strictly under fair use for identification and educational reporting purposes.
            </p>
          </section>

          <!-- Section 8 -->
          <section id="section-thirdparty" class="legal-section">
            <h2 class="section-heading">8. Third-Party Websites & External Links</h2>
            <p>
              The Website may contain outbound links to third-party portals, including official college application forms, university portals, payment gateways, and examination authorities. FindMyBSchool has no control over the privacy practices, content, security, or terms of third-party domains and assumes no responsibility for interactions or transactions conducted on outside websites.
            </p>
          </section>

          <!-- Section 9 -->
          <section id="section-liability" class="legal-section">
            <h2 class="section-heading">9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, FindMyBSchool, its directors, developers, counselors, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from:
            </p>
            <ul class="legal-list">
              <li>Your use of, or inability to use, our Website or calculators;</li>
              <li>Any decision made or action taken in reliance upon cutoff projections, placement data, or advice provided on the portal;</li>
              <li>Rejection or disqualification from any educational institution or examination;</li>
              <li>Technical interruptions, server downtime, or loss of data beyond our reasonable control.</li>
            </ul>
          </section>

          <!-- Section 10 -->
          <section id="section-termination" class="legal-section">
            <h2 class="section-heading">10. Modifications to Terms</h2>
            <p>
              FindMyBSchool reserves the right to revise, update, or modify these Terms and Conditions at any time. When modifications occur, the "Last Updated" timestamp at the top of this document will be updated accordingly. Your continued use of the platform following the posting of updated Terms constitutes your binding acceptance of the changes.
            </p>
          </section>

          <!-- Section 11 -->
          <section id="section-jurisdiction" class="legal-section">
            <h2 class="section-heading">11. Governing Law & Dispute Resolution</h2>
            <p>
              These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of the Republic of India. In the event of any legal proceeding or dispute, the competent courts located in New Delhi, India shall have exclusive jurisdiction.
            </p>
          </section>

          <!-- Section 12 -->
          <section id="section-contact" class="legal-section">
            <h2 class="section-heading">12. Grievance Redressal & Contact Information</h2>
            <p>
              If you have any questions, clarifications, feedback, or grievance regarding these Terms and Conditions, please reach out to our legal and support team:
            </p>
            <div class="legal-contact-card">
              <div class="lcc-item">
                <span class="lcc-icon">🏢</span>
                <div>
                  <strong>FindMyBSchool Legal & Grievance Cell</strong>
                  <p>Educational Advisory & Portal Operations</p>
                </div>
              </div>
              <div class="lcc-item">
                <span class="lcc-icon">✉️</span>
                <div>
                  <strong>Email Inquiries:</strong>
                  <p><a href="mailto:founder@findmybschool.com">founder@findmybschool.com</a> / <a href="mailto:legal@findmybschool.com">legal@findmybschool.com</a></p>
                </div>
              </div>
              <div class="lcc-item">
                <span class="lcc-icon">📍</span>
                <div>
                  <strong>Operational HQ:</strong>
                  <p>Connaught Place, New Delhi, 110001, India</p>
                </div>
              </div>
              <div class="lcc-item">
                <span class="lcc-icon">⏱️</span>
                <div>
                  <strong>Response Turnaround:</strong>
                  <p>Within 48 to 72 business hours</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Bottom Action Buttons -->
          <div class="legal-bottom-actions">
            <a href="/privacy" data-route="privacy" class="btn-legal-link">
              <span>View Privacy Policy</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
            </a>
            <a href="/contact" data-route="contact" class="btn-legal-link secondary">
              <span>Contact Admissions Team</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  `;
}
