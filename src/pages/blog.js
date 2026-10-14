import { BLOGS_DATA } from '../data/blogsData.js';

// Category color mappings and icons
export const CATEGORY_META = {
  'CAT Strategy': {
    theme: 'theme-cat',
    icon: '🎯',
    badge: 'CAT Strategy',
    gradient: 'linear-gradient(135deg, rgba(107, 44, 245, 0.12) 0%, rgba(31, 168, 245, 0.15) 100%)',
    accent: '#6B2CF5'
  },
  'Exam Strategy': {
    theme: 'theme-speed',
    icon: '⚡',
    badge: 'Speed & Tests',
    gradient: 'linear-gradient(135deg, rgba(31, 168, 245, 0.12) 0%, rgba(0, 199, 149, 0.15) 100%)',
    accent: '#1FA8F5'
  },
  'GD-PI-WAT': {
    theme: 'theme-gdpi',
    icon: '🎙️',
    badge: 'GD-PI & WAT',
    gradient: 'linear-gradient(135deg, rgba(255, 61, 139, 0.12) 0%, rgba(107, 44, 245, 0.15) 100%)',
    accent: '#FF3D8B'
  },
  'B-School Guide': {
    theme: 'theme-guide',
    icon: '⚖️',
    badge: 'B-School Guide',
    gradient: 'linear-gradient(135deg, rgba(255, 107, 53, 0.12) 0%, rgba(255, 212, 38, 0.15) 100%)',
    accent: '#FF6B35'
  },
  'College Rankings': {
    theme: 'theme-roi',
    icon: '📈',
    badge: 'High ROI',
    gradient: 'linear-gradient(135deg, rgba(0, 199, 149, 0.12) 0%, rgba(31, 168, 245, 0.15) 100%)',
    accent: '#00C795'
  }
};

export function getCategoryMeta(category) {
  return CATEGORY_META[category] || {
    theme: 'theme-default',
    icon: '📰',
    badge: category,
    gradient: 'linear-gradient(135deg, rgba(107, 44, 245, 0.1) 0%, rgba(20, 16, 58, 0.05) 100%)',
    accent: '#6B2CF5'
  };
}

export function getSavedArticleIds() {
  try {
    const saved = localStorage.getItem('fmc_saved_articles');
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    return [];
  }
}

/**
 * Main Page Entrypoint
 */
export function renderBlogPage(activeBlogId = null) {
  const currentBlog = activeBlogId ? BLOGS_DATA.find(b => b.id === activeBlogId) : null;

  if (currentBlog) {
    return renderFullArticleView(currentBlog);
  }

  return renderBlogOverview(BLOGS_DATA);
}

/**
 * Overview / Hub View
 */
export function renderBlogOverview(articles) {
  const savedIds = getSavedArticleIds();
  const featuredArticle = articles.find(a => a.featured) || articles[0];
  const regularArticles = articles;

  // Compute category counts
  const catCounts = {
    all: BLOGS_DATA.length,
    cat: BLOGS_DATA.filter(b => b.category === 'CAT Strategy').length,
    speed: BLOGS_DATA.filter(b => b.category === 'Exam Strategy').length,
    gdpi: BLOGS_DATA.filter(b => b.category === 'GD-PI-WAT').length,
    guide: BLOGS_DATA.filter(b => b.category === 'B-School Guide').length,
    roi: BLOGS_DATA.filter(b => b.category === 'College Rankings').length,
    saved: savedIds.length
  };

  return `
    <div class="page-blog">
      <!-- 1. Editorial Hero Header -->
      <section class="blog-hero-editorial">
        <div class="blog-hero-backdrop"></div>
        <div class="section-container blog-hero-inner">
          <div class="hero-badge-pill">
            <span class="badge-sparkle">✨</span>
            <span class="badge-text">FindMyBSchool Editorial & Masterclasses</span>
          </div>
          
          <h1 class="page-title editorial-title">MBA Admissions & Exam Playbooks</h1>
          <p class="page-subtitle editorial-subtitle">
            Unfiltered, data-backed blueprints from 99.8+ CAT/XAT crackers, IIM interview panellists, and verified ROI algorithms.
          </p>

          <!-- Key Metrics Trust Bar -->
          <div class="blog-trust-metrics-strip">
            <div class="trust-stat-item">
              <span class="trust-icon">📚</span>
              <div>
                <strong class="trust-val">${BLOGS_DATA.length > 0 ? `${BLOGS_DATA.length} Masterclasses` : 'Editorial Guides'}</strong>
                <span class="trust-lbl">${BLOGS_DATA.length > 0 ? 'Unrestricted Access' : 'Updates in Progress'}</span>
              </div>
            </div>
            <div class="trust-stat-item">
              <span class="trust-icon">👥</span>
              <div>
                <strong class="trust-val">45,000+ Readers</strong>
                <span class="trust-lbl">Active CAT/XAT Cohort</span>
              </div>
            </div>
            <div class="trust-stat-item">
              <span class="trust-icon">⭐</span>
              <div>
                <strong class="trust-val">4.9 / 5 Rating</strong>
                <span class="trust-lbl">From Verified Aspirants</span>
              </div>
            </div>
            <div class="trust-stat-item">
              <span class="trust-icon">🎓</span>
              <div>
                <strong class="trust-val">100% Free</strong>
                <span class="trust-lbl">No Paywalls</span>
              </div>
            </div>
          </div>

          <!-- Search & Filter Command Bar -->
          <div class="blog-command-bar">
            <div class="blog-search-box">
              <svg class="search-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <input 
                type="text" 
                id="blogSearchInput" 
                placeholder="Search topics, IIM interviews, DILR triage, ROI under 5 Lakhs..." 
                autocomplete="off"
              />
              <button class="search-clear-btn" id="blogSearchClear" style="display: none;" title="Clear search">✕</button>
            </div>

            <div class="blog-sort-wrapper">
              <label for="blogSortSelect" class="sort-label">Sort by:</label>
              <div class="styled-select-wrap">
                <select id="blogSortSelect" class="blog-sort-select">
                  <option value="latest">Latest Published</option>
                  <option value="popular">Most Popular</option>
                  <option value="quick">Quickest Read</option>
                </select>
                <svg class="select-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>
          </div>

          <!-- Category Filter Pills Bar -->
          <div class="blog-filter-pills" id="blogFilterPills">
            <button class="blog-pill active" data-blog-category="all">
              <span>All Playbooks</span>
              <span class="pill-counter">${catCounts.all}</span>
            </button>
            <button class="blog-pill" data-blog-category="B-School Guide">
              <span>🏛️ Colleges & PGDM</span>
              <span class="pill-counter">${catCounts.guide}</span>
            </button>
            <button class="blog-pill" data-blog-category="College Rankings">
              <span>📈 Fees, ROI & Placements</span>
              <span class="pill-counter">${catCounts.roi}</span>
            </button>
            <button class="blog-pill" data-blog-category="Exam Strategy">
              <span>⚡ Non-CAT / Exam Strategy</span>
              <span class="pill-counter">${catCounts.speed}</span>
            </button>
            <button class="blog-pill bookmark-filter-pill" data-blog-category="saved">
              <span>🔖 Saved</span>
              <span class="pill-counter" id="savedCountBadge">${catCounts.saved}</span>
            </button>
          </div>
        </div>
      </section>

      <!-- 2. Main Content Layout (Feed + Editorial Sidebar) -->
      <div class="section-container blog-hub-layout">
        <div class="blog-feed-column">
          <!-- Feed Status Banner (visible on search/filter) -->
          <div class="blog-feed-status-bar" id="blogStatusBar">
            <div class="status-left">
              <span class="status-indicator"></span>
              <span class="status-text" id="statusCountText">${BLOGS_DATA.length > 0 ? `Showing all ${articles.length} playbooks` : 'New editorial playbooks are being prepared'}</span>
            </div>
            <button class="reset-filter-btn" id="resetFilterBtn" style="display: none;">Reset Filters</button>
          </div>

          <!-- Featured Spotlight Article -->
          ${featuredArticle ? renderFeaturedSpotlight(featuredArticle, savedIds) : ''}

          <!-- Articles Grid Area -->
          <div class="articles-grid-container" id="articlesGridContainer">
            ${renderArticlesGrid(regularArticles, savedIds)}
          </div>
        </div>

        <!-- Editorial Sidebar -->
        <aside class="blog-sidebar">
          <!-- Widget 1: Free Prep Toolkit -->
          <div class="sidebar-widget widget-tools">
            <div class="widget-header">
              <span class="widget-tag">FREE ADMISSIONS SUITE</span>
              <h3 class="widget-title">Aspirant Prep Toolkit</h3>
            </div>
            <p class="widget-desc">Complement your reading with our live calculators and predictive score engines.</p>
            
            <div class="widget-tool-links">
              <a href="#tools?tool=cat" class="tool-quick-link" data-route="tools" data-sub="cat">
                <div class="tool-icon-box">📊</div>
                <div>
                  <div class="tool-link-title">CAT Percentile Predictor</div>
                  <div class="tool-link-desc">Slot raw score to 99+%ile conversion</div>
                </div>
                <span class="tool-arrow">→</span>
              </a>

              <a href="#programs?sub=compare" class="tool-quick-link" data-route="programs" data-sub="compare">
                <div class="tool-icon-box">⚖️</div>
                <div>
                  <div class="tool-link-title">MBA vs PGDM Matrix</div>
                  <div class="tool-link-desc">AIU status & recruiter salary parity</div>
                </div>
                <span class="tool-arrow">→</span>
              </a>

              <a href="#colleges" class="tool-quick-link" data-route="colleges">
                <div class="tool-icon-box">🏛️</div>
                <div>
                  <div class="tool-link-title">Cutoff & Fees Explorer</div>
                  <div class="tool-link-desc">Filter 111+ colleges by verified CTC</div>
                </div>
                <span class="tool-arrow">→</span>
              </a>
            </div>
          </div>

          <!-- Widget 2: Weekly Aspirant Digest Newsletter -->
          <div class="sidebar-widget widget-newsletter">
            <div class="newsletter-glow"></div>
            <span class="newsletter-badge">📬 WEEKLY EDITORIAL DIGEST</span>
            <h3 class="newsletter-title">Get CAT & IIM Playbooks Every Tuesday</h3>
            <p class="newsletter-sub">
              Join 45,000+ candidates. Receive raw-to-percentile trends, DILR puzzles, and verified IIM interview transcripts directly in your inbox.
            </p>
            <form class="newsletter-form" id="sidebarNewsletterForm">
              <div class="newsletter-input-group">
                <input 
                  type="email" 
                  id="newsletterEmailInput" 
                  placeholder="Enter your email address" 
                  required 
                />
                <button type="submit" class="newsletter-submit-btn" id="newsletterSubmitBtn">
                  <span>Subscribe Free</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
              <div class="newsletter-feedback" id="newsletterFeedback" style="display: none;"></div>
            </form>
            <div class="newsletter-security">
              <span>🔒 Zero spam • Unsubscribe anytime</span>
            </div>
          </div>

          <!-- Widget 3: Trending Topics Cloud -->
          <div class="sidebar-widget widget-tags">
            <h3 class="widget-title">Trending Search Topics</h3>
            <div class="sidebar-tags-cloud" id="sidebarTagsCloud">
              <button class="topic-tag-pill" data-tag-query="jaipur">#JaipurMBA</button>
              <button class="topic-tag-pill" data-tag-query="dehradun">#DehradunMBA</button>
              <button class="topic-tag-pill" data-tag-query="UPES">#UPESDehradun</button>
              <button class="topic-tag-pill" data-tag-query="Doon">#DoonBusinessSchool</button>
              <button class="topic-tag-pill" data-tag-query="without cat">#WithoutCAT</button>
              <button class="topic-tag-pill" data-tag-query="placement">#Placements2027</button>
              <button class="topic-tag-pill" data-tag-query="fees">#MBAFees</button>
              <button class="topic-tag-pill" data-tag-query="low fees">#LowFeesMBA</button>
              <button class="topic-tag-pill" data-tag-query="pgdm">#PGDM2027</button>
            </div>
          </div>

          <!-- Widget 4: Need Mentorship? -->
          <div class="sidebar-widget widget-mentorship">
            <div class="mentorship-avatar-cluster">
              <div class="cluster-avatar a1">A</div>
              <div class="cluster-avatar a2">K</div>
              <div class="cluster-avatar a3">P</div>
              <div class="cluster-count">+14</div>
            </div>
            <h4 class="mentorship-title">Need Profile Evaluation?</h4>
            <p class="mentorship-desc">
              Book a complimentary 1-on-1 strategy call with our verified IIM and XLRI alumni mentors.
            </p>
            <a href="#contact" class="btn-gradient-pill btn-sm" data-route="contact">
              <span>Book Free Strategy Call</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
            </a>
          </div>
        </aside>
      </div>
    </div>
  `;
}

/**
 * Featured Article Spotlight Banner
 */
function renderFeaturedSpotlight(article, savedIds = []) {
  const meta = getCategoryMeta(article.category);
  const isSaved = savedIds.includes(article.id);

  return `
    <div class="featured-spotlight-card ${meta.theme}" id="featuredSpotlight">
      <div class="featured-card-glow"></div>
      <div class="featured-card-body">
        <div class="featured-banner-left">
          <div class="spotlight-visual-box" style="background: ${meta.gradient}">
            <div class="visual-category-icon">${meta.icon}</div>
            <div class="visual-pattern-overlay"></div>
            <div class="visual-badge-overlay">
              <span class="spotlight-tag">⭐ EDITOR'S PICK</span>
              <span class="visual-reads">🔥 ${article.views} reads</span>
            </div>
          </div>
        </div>

        <div class="featured-content-right">
          <div class="featured-top-row">
            <span class="category-badge-featured ${meta.theme}">${meta.badge}</span>
            <span class="featured-read-time">⏱️ ${article.readTime}</span>
            <button 
              class="bookmark-icon-btn ${isSaved ? 'bookmarked' : ''}" 
              data-bookmark-id="${article.id}"
              title="${isSaved ? 'Remove bookmark' : 'Save for later'}"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
          </div>

          <h2 class="featured-headline">
            <a href="#blog?id=${article.id}" data-route="blog" data-sub="id=${article.id}">
              ${article.title}
            </a>
          </h2>

          <p class="featured-summary-lead">${article.summary}</p>

          <div class="featured-takeaways-preview">
            <span class="preview-label">💡 Key Takeaway:</span>
            <span class="preview-text">${article.keyTakeaways[0]}</span>
          </div>

          <div class="featured-author-row">
            <div class="author-meta-block">
              <div class="author-avatar md">${article.author.charAt(0)}</div>
              <div>
                <div class="author-name-bold">${article.author}</div>
                <div class="author-role-sub">${article.authorRole}</div>
              </div>
            </div>

            <div class="featured-action-group">
              <a href="#blog?id=${article.id}" class="btn-gradient-pill" data-route="blog" data-sub="id=${article.id}">
                <span>Read Masterclass</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Articles Grid
 */
export function renderArticlesGrid(articles, savedIds = null) {
  if (!savedIds) {
    savedIds = getSavedArticleIds();
  }

  if (articles.length === 0) {
    if (BLOGS_DATA.length === 0) {
      return `
        <div class="blog-empty-state">
          <div class="empty-icon-bubble">✍️</div>
          <h3 class="empty-title">New Articles & Masterclasses Coming Soon</h3>
          <p class="empty-subtitle">We are currently refreshing our editorial desk. Check back soon for brand-new MBA admissions playbooks, exam strategy breakdowns, and salary analysis.</p>
          <div class="empty-suggestions">
            <span>Explore our portal tools & colleges in the meantime:</span>
            <a href="#colleges" class="empty-tag-pill" data-route="colleges">🏛️ 111+ MBA Colleges</a>
            <a href="#tools" class="empty-tag-pill" data-route="tools">📊 Percentile Predictor</a>
            <a href="#exams" class="empty-tag-pill" data-route="exams">🎯 Exam Guides</a>
          </div>
        </div>
      `;
    }

    return `
      <div class="blog-empty-state">
        <div class="empty-icon-bubble">🔍</div>
        <h3 class="empty-title">No Matching Playbooks Found</h3>
        <p class="empty-subtitle">We couldn't find any articles matching your search query or selected filters.</p>
        <div class="empty-suggestions">
          <span>Try searching for:</span>
          <button class="empty-tag-pill" onclick="const input = document.getElementById('blogSearchInput'); if (input) { input.value = 'CAT'; input.dispatchEvent(new Event('input')); }">CAT 2026</button>
          <button class="empty-tag-pill" onclick="const input = document.getElementById('blogSearchInput'); if (input) { input.value = 'ROI'; input.dispatchEvent(new Event('input')); }">High ROI</button>
          <button class="empty-tag-pill" onclick="const input = document.getElementById('blogSearchInput'); if (input) { input.value = 'Interview'; input.dispatchEvent(new Event('input')); }">GD-PI</button>
        </div>
        <button class="btn-reset-search" id="emptyResetBtn">View All ${BLOGS_DATA.length} Playbooks</button>
      </div>
    `;
  }

  return `
    <div class="articles-grid" id="articlesGrid">
      ${articles.map(article => {
        const meta = getCategoryMeta(article.category);
        const isSaved = savedIds.includes(article.id);

        return `
          <article class="article-card ${meta.theme}" data-category="${article.category}" data-article-id="${article.id}">
            <!-- Top Card Decorative Accent Banner -->
            <div class="article-card-banner" style="background: ${meta.gradient}">
              <div class="banner-category-icon">${meta.icon}</div>
              <div class="banner-right-meta">
                <span class="card-badge-pill ${meta.theme}">${article.badge || meta.badge}</span>
                <button 
                  class="card-bookmark-btn ${isSaved ? 'bookmarked' : ''}" 
                  data-bookmark-id="${article.id}"
                  title="${isSaved ? 'Remove bookmark' : 'Save for later'}"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                    <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div class="article-card-main-content">
              <div class="article-card-meta">
                <span class="meta-read-time">⏱️ ${article.readTime}</span>
                <span class="meta-dot">•</span>
                <span class="meta-date">${article.date}</span>
                <span class="meta-dot">•</span>
                <span class="meta-reads">${article.views} reads</span>
              </div>

              <h2 class="article-card-title">
                <a href="#blog?id=${article.id}" data-route="blog" data-sub="id=${article.id}">
                  ${article.title}
                </a>
              </h2>

              <p class="article-card-snippet">${article.summary}</p>

              <div class="article-tags-wrap">
                ${article.tags.map(t => `<button class="article-tag-btn" data-tag-filter="${t}">#${t}</button>`).join('')}
              </div>
            </div>

            <div class="article-card-footer">
              <div class="author-info">
                <div class="author-avatar">${article.author.charAt(0)}</div>
                <div class="author-details-inline">
                  <div class="author-name">${article.author}</div>
                  <div class="author-role-tiny">${article.authorRole ? article.authorRole.split('•')[0].trim() : 'MBA Mentor'}</div>
                </div>
              </div>
              <a href="#blog?id=${article.id}" class="read-guide-btn" data-route="blog" data-sub="id=${article.id}">
                <span>Read Playbook</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </article>
        `;
      }).join('')}
    </div>
  `;
}

/**
 * Robust Markdown to HTML Parser
 */
export function parseMarkdown(md) {
  if (!md) return '';

  const lines = md.trim().split('\n');
  const html = [];
  let inUl = false;
  let inOl = false;
  let inBlockquote = false;
  let inTable = false;

  const closeLists = () => {
    if (inUl) { html.push('</ul>'); inUl = false; }
    if (inOl) { html.push('</ol>'); inOl = false; }
  };
  const closeBlockquote = () => {
    if (inBlockquote) { html.push('</blockquote>'); inBlockquote = false; }
  };
  const closeTable = () => {
    if (inTable) {
      html.push('</tbody></table></div>');
      inTable = false;
    }
  };

  const inlineFormat = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code class="code-inline">$1</code>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="article-inline-link">$1</a>');
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    if (!line) {
      closeLists();
      closeBlockquote();
      closeTable();
      continue;
    }

    // Markdown Table Support (| col1 | col2 |)
    if (line.startsWith('|') && line.endsWith('|')) {
      closeLists();
      closeBlockquote();

      // Check if table divider row (e.g. |---|---|)
      if (/^\|(\s*[-:]+\s*\|)+$/.test(line)) {
        continue;
      }

      const cells = line
        .slice(1, -1)
        .split('|')
        .map(c => inlineFormat(c.trim()));

      if (!inTable) {
        html.push('<div class="table-responsive blog-table-wrap"><table class="styled-compare-table"><thead><tr>');
        cells.forEach(cell => {
          html.push(`<th>${cell}</th>`);
        });
        html.push('</tr></thead><tbody>');
        inTable = true;
        continue;
      } else {
        html.push('<tr>');
        cells.forEach(cell => {
          html.push(`<td>${cell}</td>`);
        });
        html.push('</tr>');
        continue;
      }
    } else {
      closeTable();
    }

    // Headings
    if (line.startsWith('### ')) {
      closeLists();
      closeBlockquote();
      closeTable();
      const text = inlineFormat(line.slice(4));
      const id = line.slice(4).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      html.push(`<h3 id="${id}" class="article-subheading"><span class="heading-anchor-pip">#</span> ${text}</h3>`);
      continue;
    }
    if (line.startsWith('#### ')) {
      closeLists();
      closeBlockquote();
      closeTable();
      const text = inlineFormat(line.slice(5));
      const id = line.slice(5).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      html.push(`<h4 id="${id}" class="article-section-title"><span class="title-accent-pip"></span>${text}</h4>`);
      continue;
    }

    // Callout / Quote Box
    if (line.startsWith('> ')) {
      closeLists();
      closeTable();
      if (!inBlockquote) {
        html.push('<blockquote class="article-callout-quote"><div class="quote-icon">“</div>');
        inBlockquote = true;
      }
      const quoteText = inlineFormat(line.slice(2));
      html.push(`<p class="quote-text">${quoteText}</p>`);
      continue;
    } else {
      closeBlockquote();
    }

    // Unordered List
    if (line.startsWith('- ') || line.startsWith('* ')) {
      closeTable();
      if (inOl) { html.push('</ol>'); inOl = false; }
      if (!inUl) {
        html.push('<ul class="article-bullet-list">');
        inUl = true;
      }
      html.push(`<li><span class="bullet-pip"></span><span class="list-item-content">${inlineFormat(line.slice(2))}</span></li>`);
      continue;
    }

    // Ordered List
    const olMatch = line.match(/^(\d+)\.\s+(.*)/);
    if (olMatch) {
      closeTable();
      if (inUl) { html.push('</ul>'); inUl = false; }
      if (!inOl) {
        html.push('<ol class="article-numbered-list">');
        inOl = true;
      }
      const num = olMatch[1];
      const itemText = inlineFormat(olMatch[2]);
      html.push(`<li><span class="num-badge-pip">${num}</span><span class="list-item-content">${itemText}</span></li>`);
      continue;
    }

    // Standard Paragraph
    closeLists();
    closeBlockquote();
    closeTable();
    html.push(`<p class="article-paragraph">${inlineFormat(line)}</p>`);
  }

  closeLists();
  closeBlockquote();
  closeTable();
  return html.join('\n');
  return html.join('\n');
}

/**
 * Extract Headings for Table of Contents
 */
export function extractHeadings(content) {
  const lines = content.split('\n');
  const headings = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('### ')) {
      const text = trimmed.slice(4).replace(/\*\*/g, '').replace(/\*/g, '');
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      headings.push({ level: 3, text, id });
    } else if (trimmed.startsWith('#### ')) {
      const text = trimmed.slice(5).replace(/\*\*/g, '').replace(/\*/g, '');
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      headings.push({ level: 4, text, id });
    }
  }
  return headings;
}

/**
 * Single Article Reader View
 */
export function renderFullArticleView(article) {
  const meta = getCategoryMeta(article.category);
  const headings = extractHeadings(article.content);
  const parsedContent = parseMarkdown(article.content);
  const savedIds = getSavedArticleIds();
  const isSaved = savedIds.includes(article.id);

  // Find related articles (same category or top others)
  const relatedArticles = BLOGS_DATA
    .filter(b => b.id !== article.id)
    .sort((a, b) => (b.category === article.category ? 1 : 0) - (a.category === article.category ? 1 : 0))
    .slice(0, 3);

  // Find Previous and Next articles
  const currentIndex = BLOGS_DATA.findIndex(b => b.id === article.id);
  const prevArticle = currentIndex > 0 ? BLOGS_DATA[currentIndex - 1] : null;
  const nextArticle = currentIndex < BLOGS_DATA.length - 1 ? BLOGS_DATA[currentIndex + 1] : null;

  return `
    <div class="page-blog-article">
      <!-- Fixed Reading Progress Tracker -->
      <div class="article-progress-track">
        <div class="article-progress-bar" id="articleProgressBar"></div>
      </div>

      <div class="section-container article-view-wrapper">
        <!-- Top Navigation / Breadcrumb Bar -->
        <nav class="article-top-nav">
          <a href="#blog" class="article-back-pill" data-route="blog">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m15 18-6-6 6-6"/></svg>
            <span>Back to All Playbooks</span>
          </a>

          <div class="article-breadcrumbs-row">
            <a href="#blog" class="crumb-link" data-route="blog">Editorial</a>
            <span class="crumb-sep">/</span>
            <span class="crumb-current">${article.category}</span>
          </div>

          <div class="article-quick-actions">
            <button 
              class="quick-action-btn ${isSaved ? 'bookmarked' : ''}" 
              id="articleBookmarkTopBtn"
              data-bookmark-id="${article.id}"
              title="${isSaved ? 'Remove Bookmark' : 'Save Playbook'}"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
              <span>${isSaved ? 'Saved' : 'Save'}</span>
            </button>

            <button class="quick-action-btn share-trigger" id="articleShareTopBtn" title="Share Article">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
              <span>Share</span>
            </button>
          </div>
        </nav>

        <!-- Article Editorial Header Card -->
        <header class="article-editorial-header ${meta.theme}">
          <div class="header-accent-backdrop" style="background: ${meta.gradient}"></div>
          
          <div class="header-meta-pills-row">
            <span class="category-badge-lg ${meta.theme}">${meta.icon} ${article.category}</span>
            <span class="meta-pill-item">⏱️ ${article.readTime}</span>
            <span class="meta-pill-item">📅 ${article.date}</span>
            <span class="meta-pill-item">👁️ ${article.views} reads</span>
            <span class="meta-pill-item verified-tag">✓ Verified Editorial</span>
          </div>

          <h1 class="article-main-title">${article.title}</h1>
          <p class="article-main-lead">${article.summary}</p>

          <!-- Verified Author Credentials Card -->
          <div class="article-author-card-rich">
            <div class="author-avatar-badge-wrap">
              <div class="author-avatar xl">${article.author.charAt(0)}</div>
              <div class="author-check-badge" title="Verified FMC Mentor">✓</div>
            </div>
            <div class="author-info-expanded">
              <div class="author-title-line">
                <span class="author-name-lg">${article.author}</span>
                <span class="author-mentor-tag">Admissions Mentor & Verified Alum</span>
              </div>
              <p class="author-credentials">${article.authorRole}</p>
              <p class="author-mini-bio">${article.authorBio}</p>
            </div>
            <div class="author-card-action">
              <a href="#contact" class="btn-author-connect" data-route="contact">
                <span>Ask Arjun a Question</span>
              </a>
            </div>
          </div>
        </header>

        <!-- Two-Column Reader Experience (Article Stream + Sticky Companion Sidebar) -->
        <div class="article-reader-layout">
          <!-- Main Content Column -->
          <main class="article-content-stream">
            <!-- Executive Summary / TL;DR Box -->
            <div class="executive-summary-card">
              <div class="exec-summary-header">
                <span class="exec-icon">💡</span>
                <div>
                  <h3 class="exec-title">Executive Summary & Key Takeaways</h3>
                  <span class="exec-subtitle">Core principles distilled for rapid review</span>
                </div>
              </div>
              <ul class="exec-takeaways-list">
                ${article.keyTakeaways.map(t => `
                  <li>
                    <span class="takeaway-pip">✓</span>
                    <span>${t}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <!-- Parsed Article Body -->
            <div class="article-rendered-body" id="articleBody">
              ${parsedContent}
            </div>

            <!-- Interactive Claps / Value Rating Strip -->
            <div class="article-reaction-box" id="articleReactionBox">
              <div class="reaction-prompt">
                <h4>Did this playbook sharpen your strategy?</h4>
                <p>Support our mentor contributors with a clap or save this guide to your revision deck.</p>
              </div>
              <div class="reaction-buttons-group">
                <button class="clap-reaction-btn" id="articleClapBtn" data-likes="${article.likes}">
                  <span class="clap-emoji">👏</span>
                  <span class="clap-label">Valuable</span>
                  <span class="clap-badge-count" id="clapCountDisplay">${article.likes}</span>
                </button>
                <button 
                  class="save-deck-btn ${isSaved ? 'bookmarked' : ''}" 
                  id="articleSaveBottomBtn"
                  data-bookmark-id="${article.id}"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                    <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span id="saveBottomText">${isSaved ? 'Saved to Your Deck' : 'Save to Study Deck'}</span>
                </button>
              </div>
            </div>

            <!-- Social Share & Study Group Bar -->
            <div class="article-share-container">
              <div class="share-label-group">
                <span class="share-icon">📤</span>
                <span class="share-title">Share this masterclass with your CAT study cohort:</span>
              </div>
              <div class="share-pills-row">
                <button class="share-action-pill copy-link-btn" id="copyArticleLinkBtn">
                  <span>📋 Copy Link</span>
                </button>
                <button class="share-action-pill whatsapp-pill" id="shareWhatsappBtn">
                  <span>💬 WhatsApp</span>
                </button>
                <button class="share-action-pill linkedin-pill" id="shareLinkedinBtn">
                  <span>💼 LinkedIn</span>
                </button>
                <button class="share-action-pill twitter-pill" id="shareTwitterBtn">
                  <span>🐦 X / Twitter</span>
                </button>
              </div>
              <div class="copy-toast-msg" id="copyToastMsg" style="display: none;">
                ✓ Article link copied to clipboard!
              </div>
            </div>

            <!-- Topic Tags Cloud -->
            <div class="article-footer-tags-row">
              <span class="tags-lead-label">Topics Covered:</span>
              <div class="tags-cluster">
                ${article.tags.map(t => `<a href="#blog" class="article-footer-tag" data-route="blog" data-filter-tag="${t}">#${t}</a>`).join('')}
              </div>
            </div>

            <!-- Previous & Next Article Navigation Bar -->
            <div class="article-pagination-bar">
              ${prevArticle ? `
                <a href="#blog?id=${prevArticle.id}" class="pagination-card prev-card" data-route="blog" data-sub="id=${prevArticle.id}">
                  <span class="nav-direction">← Previous Playbook</span>
                  <span class="nav-article-title">${prevArticle.title}</span>
                </a>
              ` : `<div class="pagination-card empty"></div>`}

              ${nextArticle ? `
                <a href="#blog?id=${nextArticle.id}" class="pagination-card next-card" data-route="blog" data-sub="id=${nextArticle.id}">
                  <span class="nav-direction">Next Playbook →</span>
                  <span class="nav-article-title">${nextArticle.title}</span>
                </a>
              ` : `<div class="pagination-card empty"></div>`}
            </div>

            <!-- Recommended Next Reads Section -->
            <div class="related-articles-section">
              <div class="related-section-header">
                <span class="related-badge">CURATED RECOMMENDATIONS</span>
                <h3 class="related-title">Continue Reading Related Playbooks</h3>
              </div>
              <div class="related-articles-grid">
                ${relatedArticles.map(rel => {
                  const relMeta = getCategoryMeta(rel.category);
                  return `
                    <div class="related-mini-card ${relMeta.theme}">
                      <div class="related-mini-top">
                        <span class="related-cat-pill">${relMeta.icon} ${rel.category}</span>
                        <span class="related-time">⏱️ ${rel.readTime}</span>
                      </div>
                      <h4 class="related-mini-title">
                        <a href="#blog?id=${rel.id}" data-route="blog" data-sub="id=${rel.id}">
                          ${rel.title}
                        </a>
                      </h4>
                      <p class="related-mini-snippet">${rel.summary}</p>
                      <div class="related-mini-footer">
                        <span class="related-author">${rel.author}</span>
                        <a href="#blog?id=${rel.id}" class="related-link-btn" data-route="blog" data-sub="id=${rel.id}">
                          Read →
                        </a>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          </main>

          <!-- Sticky Reading Companion Sidebar -->
          <aside class="article-reader-sidebar">
            <!-- Table of Contents -->
            <div class="article-sidebar-card toc-card">
              <div class="toc-header">
                <span class="toc-icon">📑</span>
                <h4 class="toc-heading">In This Playbook</h4>
              </div>
              <nav class="toc-nav-list" id="articleToc">
                ${headings.map(h => `
                  <a href="#${h.id}" class="toc-item level-${h.level}">
                    <span class="toc-pip"></span>
                    <span class="toc-text">${h.text}</span>
                  </a>
                `).join('')}
              </nav>
            </div>

            <!-- Contextual Tool Banner -->
            <div class="article-sidebar-card tool-promo-card">
              <div class="tool-promo-badge">INSTANT ESTIMATOR</div>
              <h4 class="tool-promo-title">Evaluate Your CAT Percentile</h4>
              <p class="tool-promo-desc">
                Input your expected section raw scores to generate your composite percentile and shortlist chances across IIMs and FMS.
              </p>
              <a href="#tools?tool=cat" class="btn-gradient-pill btn-sm" data-route="tools" data-sub="cat">
                <span>Launch Calculator</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
              </a>
            </div>

            <!-- Mini Mentorship Banner -->
            <div class="article-sidebar-card mentor-side-card">
              <span class="mentor-side-badge">1-ON-1 GUIDANCE</span>
              <h4 class="mentor-side-title">Stuck in Mock Plateaus?</h4>
              <p class="mentor-side-desc">Get a 30-minute diagnostic session with an IIM alum to analyze your sectional accuracy bottlenecks.</p>
              <a href="#contact" class="btn-outline-pill btn-sm" data-route="contact">
                Schedule Diagnostic →
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  `;
}
