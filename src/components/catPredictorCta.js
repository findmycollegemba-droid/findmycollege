/**
 * Reusable Call-to-Action (CTA) component for Blog Posts and Editorial Guides.
 * Promotes the CAT College Predictor tool with descriptive anchor text.
 */
export function renderCatPredictorCta(variant = 'inline') {
  if (variant === 'compact') {
    return `
      <div class="cat-predictor-cta-compact">
        <div class="cta-compact-content">
          <div class="cta-compact-badge">⚡ Free CAT Tool</div>
          <div class="cta-compact-text">
            <strong>Wondering where you stand?</strong> Check your admission probability across IIMs, FMS & top PGDM colleges.
          </div>
        </div>
        <a href="/tools/cat-college-predictor" class="btn-gradient-pill btn-sm cat-predictor-cta-link" data-route="tools" data-sub="cat">
          <span>CAT College Predictor</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
        </a>
      </div>
    `;
  }

  return `
    <div class="cat-predictor-blog-cta" id="catPredictorBlogCta">
      <div class="cta-glow-accent"></div>
      <div class="cta-inner-layout">
        <div class="cta-text-side">
          <div class="cta-pill-badge">
            <span class="cta-pulse-dot"></span>
            <span>CAT 2026 Admissions Suite</span>
          </div>
          <h3 class="cta-heading">Find Your Dream B-School by CAT Percentile</h3>
          <p class="cta-description">
            Calculate your slot-normalized scaled score from raw marks or paste your Digialm response sheet link. Discover verified cutoffs, 2-year audited fees, and average CTCs across 600+ IIMs and premier PGDM institutes.
          </p>
          <div class="cta-features-strip">
            <span class="cta-feature-tag">✓ Official +3/−1/0 Marking</span>
            <span class="cta-feature-tag">✓ Slot 1/2/3 Normalization</span>
            <span class="cta-feature-tag">✓ 21 IIMs + Top 50 PGDM</span>
          </div>
        </div>
        <div class="cta-action-side">
          <div class="cta-card-highlight">
            <div class="cta-icon-box">📊</div>
            <div class="cta-target-stat">99.8%ile Accuracy</div>
            <a href="/tools/cat-college-predictor" class="btn-gradient-pill btn-lg full-width-btn cat-predictor-cta-btn" data-route="tools" data-sub="cat">
              <span>CAT College Predictor</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
            </a>
            <span class="cta-micro-note">100% Free • No Sign-up Required</span>
          </div>
        </div>
      </div>
    </div>
  `;
}
