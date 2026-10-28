export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="footer-top-accent"></div>
      <div class="footer-container">
        <!-- Col 1: Brand & Contact -->
        <div class="footer-brand-col">
          <a href="/" class="footer-logo" data-route="home">
            <div class="fmc-logo-badge small">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <span class="footer-brand-name">FindMy<span class="brand-accent">BSchool</span><span class="brand-tld">.com</span></span>
          </a>
          <p class="footer-desc">
            India's most transparent business school search & admission guidance platform. Filter 680+ verified MBA & PGDM colleges with verified cutoffs, audited tuition fees, and audited placement reports — 100% human-verified with 0% scrapers.
          </p>
          <div class="footer-helpline-card">
            <div class="helpline-row">
              <span class="helpline-label">Admissions Helpline:</span>
              <a href="tel:+918800126446" class="helpline-val">+91 88001 26446</a>
            </div>
            <div class="helpline-row">
              <span class="helpline-label">Direct Counselor Desk:</span>
              <a href="mailto:admissions@findmybschool.com" class="helpline-val">admissions@findmybschool.com</a>
            </div>
          </div>
          <div class="footer-social-row">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="social-chip" title="LinkedIn" aria-label="LinkedIn">
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74V9.88H5.06v8.62h2.8z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="social-chip" title="YouTube" aria-label="YouTube">
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-chip" title="Instagram" aria-label="Instagram">
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" class="social-chip" title="Telegram" aria-label="Telegram">
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.535-.197 1.006.128.832.943z"/></svg>
            </a>
          </div>
        </div>

        <!-- Col 2: Top Colleges & AIU Campuses -->
        <div class="footer-links-col">
          <h4 class="footer-heading">Top Colleges & Hubs</h4>
          <ul class="footer-links-list">
            <li><a href="/colleges" data-route="colleges">All Verified Colleges (680+)</a></li>
            <li><a href="/colleges/mba" data-route="colleges" data-sub="type=mba">Top MBA Degree Colleges</a></li>
            <li><a href="/colleges/pgdm" data-route="colleges" data-sub="type=pgdm">Top PGDM Autonomous Colleges</a></li>
            <li><a href="/aiu-approved-campuses" data-route="aiu-approved-campuses">AIU Approved Campuses (9 Hubs)</a></li>
            <li><a href="/aiu-approved-campuses/delhi-ncr" data-route="aiu-approved-campuses" data-sub="delhi-ncr">Delhi NCR Hub (106 Colleges)</a></li>
            <li><a href="/aiu-approved-campuses/mumbai" data-route="aiu-approved-campuses" data-sub="mumbai">Mumbai Hub (35 Colleges)</a></li>
            <li><a href="/aiu-approved-campuses/bangalore" data-route="aiu-approved-campuses" data-sub="bangalore">Bangalore Hub (31 Colleges)</a></li>
            <li><a href="/aiu-approved-campuses/pune" data-route="aiu-approved-campuses" data-sub="pune">Pune Hub (58 Colleges)</a></li>
            <li><a href="/programs/compare" data-route="programs" data-sub="compare">MBA vs PGDM Comparison</a></li>
          </ul>
        </div>

        <!-- Col 3: Exams & Smart Predictors -->
        <div class="footer-links-col">
          <h4 class="footer-heading">Exams & Predictors</h4>
          <ul class="footer-links-list">
            <li><a href="/exams/cat" data-route="exams" data-sub="cat">CAT 2026 (IIMs & FMS)</a></li>
            <li><a href="/exams/xat" data-route="exams" data-sub="xat">XAT 2027 (XLRI Jamshedpur)</a></li>
            <li><a href="/exams/snap" data-route="exams" data-sub="snap">SNAP 2026 (Symbiosis SIBM)</a></li>
            <li><a href="/exams/cmat" data-route="exams" data-sub="cmat">CMAT 2027 (JBIMS & GIM)</a></li>
            <li><a href="/exams/nmat" data-route="exams" data-sub="nmat">NMAT by GMAC (NMIMS)</a></li>
            <li><a href="/mock-test" data-route="mock-test" class="footer-accent-link green">⚡ All-India Free Mock CBT</a></li>
            <li><a href="/tools/cat-college-predictor" data-route="tools" data-sub="cat">CAT College Predictor</a></li>
            <li><a href="/tools/xat-percentile-calculator" data-route="tools" data-sub="xat">XAT Score Calculator</a></li>
          </ul>
        </div>

        <!-- Col 4: Scholarships & Newsletter -->
        <div class="footer-newsletter-col">
          <h4 class="footer-heading">Scholarships & Alerts</h4>
          <ul class="footer-links-list" style="margin-bottom: 16px;">
            <li>
              <a href="/scholarships" data-route="scholarships" class="footer-accent-link pink">
                <span>💰 Live MBA Scholarships</span>
                <span class="footer-mini-badge">₹25L</span>
              </a>
            </li>
            <li><a href="/ai-chat" data-route="ai-chat">AdmitIQ AI Profile Evaluator</a></li>
            <li><a href="/blog" data-route="blog">MBA Strategy & GD-PI Insights</a></li>
          </ul>
          
          <div class="footer-subscribe-box">
            <div class="footer-subscribe-title">Get Weekly Admission Alerts</div>
            <p class="footer-sub-text">Curated cutoff releases, raw score charts & GD-PI notifications. Zero spam.</p>
            <form class="newsletter-form" id="newsletterForm">
              <input type="email" placeholder="Enter your email..." required class="newsletter-input" aria-label="Email address" />
              <button type="submit" class="btn-gradient-pill newsletter-btn">Subscribe</button>
            </form>
          </div>
          <div class="live-status-pill">
            <span class="live-dot-pulse"></span>
            <span>2027-29 Admission Session Live</span>
          </div>
        </div>
      </div>

      <!-- Clean Footer Bottom -->
      <div class="footer-bottom">
        <div class="footer-bottom-container">
          <p class="copyright-text">© 2026 FindMyBSchool.com • All Rights Reserved.</p>
          <div class="footer-bottom-links">
            <a href="/privacy" data-route="privacy">Privacy Policy</a>
            <span>•</span>
            <a href="/terms" data-route="terms">Terms & Conditions</a>
            <span>•</span>
            <a href="/contact" data-route="contact">Admissions Helpline</a>
            <span>•</span>
            <a href="https://aiu.ac.in/wp-content/uploads/docs/2026/06/PGDM_Institution_List_June_2026.pdf" target="_blank" rel="noopener noreferrer">Official AIU Gazette (121 PDF) ↗</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
