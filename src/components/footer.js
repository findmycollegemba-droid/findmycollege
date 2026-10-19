export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="footer-top-accent"></div>
      <div class="footer-container">
        <!-- Brand Info -->
        <div class="footer-brand-col">
          <div class="footer-logo">
            <div class="c4s-logo-badge small">
              <span class="c4s-logo-txt">FMBS</span>
            </div>
            <span class="footer-brand-name">FindMy<span class="brand-accent">BSchool</span><span class="brand-tld">.com</span></span>
          </div>
          <p class="footer-desc">
            India's most transparent business school search & admission guidance platform. Filter 600+ verified MBA & PGDM colleges for the 2027-29 admission session by real-time cutoffs, audited tuition fees, and recent audited placement reports — maintained by expert counsellors with 0% scrapers.
          </p>
          <div class="footer-contact-desk">
            <div class="footer-contact-item">
              <span class="footer-contact-tag">Direct Founder Desk:</span>
              <a href="mailto:founder@findmybschool.com" class="footer-contact-link">founder@findmybschool.com</a>
            </div>
            <div class="footer-contact-item">
              <span class="footer-contact-tag">Admissions Helpline:</span>
              <a href="tel:+918800126446" class="footer-contact-link">+91 88001 26446</a>
            </div>
            <div class="footer-contact-item">
              <span class="footer-contact-tag">MBA Scholarships:</span>
              <a href="/scholarships" class="footer-contact-link" data-route="scholarships">Apply for up to ₹25L Aid →</a>
            </div>
          </div>
          <div class="footer-social-row">
            <a href="#" class="social-chip" title="LinkedIn">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74V9.88H5.06v8.62h2.8z"/></svg>
            </a>
            <a href="#" class="social-chip" title="YouTube">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="#" class="social-chip" title="Instagram">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
            <a href="#" class="social-chip" title="Telegram">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.535-.197 1.006.128.832.943z"/></svg>
            </a>
          </div>
        </div>

        <!-- Links: Exams -->
        <div class="footer-links-col">
          <h4 class="footer-heading">Top MBA Exams</h4>
          <ul class="footer-links-list">
            <li><a href="/exams/cat" data-route="exams" data-sub="cat">CAT 2026 (IIMs & FMS)</a></li>
            <li><a href="/exams/xat" data-route="exams" data-sub="xat">XAT 2027 (XLRI Jamshedpur)</a></li>
            <li><a href="/exams/nmat" data-route="exams" data-sub="nmat">NMAT by GMAC (NMIMS)</a></li>
            <li><a href="/exams/snap" data-route="exams" data-sub="snap">SNAP 2026 (Symbiosis SIBM)</a></li>
            <li><a href="/exams/cmat" data-route="exams" data-sub="cmat">CMAT 2027 (JBIMS & GIM)</a></li>
            <li><a href="/exams/mhcet" data-route="exams" data-sub="mhcet">MAH MBA CET 2027</a></li>
            <li><a href="/exams/cuetpg" data-route="exams" data-sub="cuetpg">CUET PG (TISS Mumbai)</a></li>
            <li><a href="/exams/mat" data-route="exams" data-sub="mat">MAT 2026-27 (AIMA)</a></li>
            <li><a href="/mock-test" data-route="mock-test" style="color:#2563eb;font-weight:700;">📝 Free Mock Tests Series</a></li>
          </ul>
        </div>

        <!-- Links: Tools & Scholarships -->
        <div class="footer-links-col">
          <h4 class="footer-heading">Tools & Scholarships</h4>
          <ul class="footer-links-list">
            <li>
              <a href="/scholarships" data-route="scholarships" style="display:inline-flex;align-items:center;gap:6px;color:#6B2CF5;font-weight:800;">
                <span>💰 Live MBA Scholarships 2027-29</span>
                <span style="font-size:0.60rem;font-weight:900;background:linear-gradient(135deg, #FF3D8B 0%, #FF6B35 100%);color:#fff;padding:1px 6px;border-radius:4px;letter-spacing:0.04em;">UP TO ₹25L</span>
              </a>
            </li>
            <li><a href="/mock-test" data-route="mock-test" style="color:#10b981;font-weight:700;">⚡ All India Free Mock CBT</a></li>
            <li><a href="/tools/cat-college-predictor" data-route="tools" data-sub="cat">CAT College Predictor</a></li>
            <li><a href="/tools/xat-percentile-calculator" data-route="tools" data-sub="xat">XAT Score Calculator</a></li>
            <li><a href="/tools/cmat-percentile-calculator" data-route="tools" data-sub="cmat">CMAT Score Calculator</a></li>
            <li><a href="/programs/compare" data-route="programs" data-sub="compare">MBA vs PGDM Matrix</a></li>
            <li><a href="/programs/roi" data-route="programs">Specialization ROI Calculator</a></li>
            <li><a href="/ai-chat" data-route="ai-chat">AdmitIQ AI Profile Evaluator</a></li>
          </ul>
        </div>

        <!-- Newsletter & Contact -->
        <div class="footer-newsletter-col">
          <h4 class="footer-heading">Join 45,000+ Aspirants</h4>
          <p class="footer-sub-text">Get weekly curated MBA admission alerts, raw score vs percentile charts, and GD-PI secrets directly in your inbox.</p>
          <form class="newsletter-form" id="newsletterForm">
            <input type="email" placeholder="Enter your email..." required class="newsletter-input" />
            <button type="submit" class="btn-gradient-pill newsletter-btn">Subscribe</button>
          </form>
          <div class="live-status-pill">
            <span class="live-dot-pulse"></span>
            <span>CAT 2026 Countdown Active • Slot Predictor Live</span>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-bottom-container">
          <p class="copyright-text">© 2026 FindMyBSchool.com • India's Most Trusted B-School Search Portal • All Rights Reserved.</p>
          <div class="footer-bottom-links">
            <a href="/terms" data-route="terms">Terms & Conditions</a>
            <span>•</span>
            <a href="/privacy" data-route="privacy">Privacy Policy</a>
            <span>•</span>
            <a href="/scholarships" data-route="scholarships">MBA Scholarships</a>
            <span>•</span>
            <a href="/contact" data-route="contact">Counselor Directory</a>
            <span>•</span>
            <a href="/colleges" data-route="colleges">All Colleges</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
