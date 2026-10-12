import { BLOGS_DATA } from '../data/blogsData.js';

export function renderBlogPage(activeBlogId = null) {
  const currentBlog = activeBlogId ? BLOGS_DATA.find(b => b.id === activeBlogId) : null;

  return `
    <div class="page-blog">
      <!-- Blog Hero -->
      <section class="blog-hero">
        <div class="section-container">
          <div class="hero-badge-pill">
            <span class="badge-text">📰 Aspirant Editorial & Masterclasses</span>
          </div>
          <h1 class="page-title">MBA Admissions & Exam Playbooks</h1>
          <p class="page-subtitle">
            Unfiltered strategies from 99.8+ CAT/XAT crackers, IIM interview rubrics, and ROI deep-dives to guide your preparation.
          </p>

          <!-- Search and Category Filters -->
          <div class="blog-controls-wrap">
            <div class="blog-search-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
              <input type="text" id="blogSearchInput" placeholder="Search topics, IIM interviews, DILR hacks, ROI..." />
            </div>

            <div class="blog-filter-pills" id="blogFilterPills">
              <button class="blog-pill active" data-blog-category="all">All Articles</button>
              <button class="blog-pill" data-blog-category="CAT Strategy">CAT Strategy</button>
              <button class="blog-pill" data-blog-category="Exam Strategy">XAT & Speed Tests</button>
              <button class="blog-pill" data-blog-category="GD-PI-WAT">GD-PI & WAT</button>
              <button class="blog-pill" data-blog-category="B-School Guide">MBA vs PGDM</button>
              <button class="blog-pill" data-blog-category="College Rankings">High ROI</button>
            </div>
          </div>
        </div>
      </section>

      <div class="section-container blog-content-area">
        ${currentBlog ? renderFullArticleView(currentBlog) : renderArticlesGrid(BLOGS_DATA)}
      </div>
    </div>
  `;
}

export function renderArticlesGrid(articles) {
  if (articles.length === 0) {
    return `
      <div class="search-empty-state">
        <div class="search-empty-icon">📝</div>
        <h3>No articles found</h3>
        <p>Try searching for other keywords like "CAT", "Interview", or "ROI".</p>
      </div>
    `;
  }

  return `
    <div class="articles-grid" id="articlesGrid">
      ${articles.map(article => `
        <article class="article-card" data-category="${article.category}">
          <div class="article-card-header">
            <span class="category-badge">${article.category}</span>
            <span class="read-time-pill">${article.readTime}</span>
          </div>

          <h2 class="article-card-title">
            <a href="#blog?id=${article.id}" data-route="blog" data-sub="id=${article.id}">${article.title}</a>
          </h2>

          <p class="article-card-snippet">${article.summary}</p>

          <div class="article-tags-wrap">
            ${article.tags.map(t => `<span class="article-tag">#${t}</span>`).join('')}
          </div>

          <div class="article-card-footer">
            <div class="author-info">
              <div class="author-avatar">${article.author.charAt(0)}</div>
              <div>
                <div class="author-name">${article.author}</div>
                <div class="article-date">${article.date}</div>
              </div>
            </div>
            <a href="#blog?id=${article.id}" class="read-more-link" data-route="blog" data-sub="id=${article.id}">
              Read Guide →
            </a>
          </div>
        </article>
      `).join('')}
    </div>
  `;
}

function renderFullArticleView(article) {
  return `
    <div class="full-article-container">
      <div class="back-link-row">
        <a href="#blog" class="back-btn" data-route="blog">← Back to All Articles</a>
      </div>

      <header class="article-header">
        <div class="article-meta-top">
          <span class="category-badge">${article.category}</span>
          <span class="article-date">Published on ${article.date}</span>
          <span class="read-time-pill">${article.readTime}</span>
        </div>
        <h1 class="article-full-title">${article.title}</h1>
        <p class="article-full-lead">${article.summary}</p>
        
        <div class="article-author-card">
          <div class="author-avatar lg">${article.author.charAt(0)}</div>
          <div>
            <div class="author-name">${article.author}</div>
            <div class="author-badge">Verified Mentor • FindMyCollege Admissions Faculty</div>
          </div>
        </div>
      </header>

      <div class="article-content-body">
        ${article.content.split('\n\n').map(p => {
          if (p.startsWith('### ')) return `<h3>${p.replace('### ', '')}</h3>`;
          if (p.startsWith('#### ')) return `<h4>${p.replace('#### ', '')}</h4>`;
          if (p.startsWith('- ')) {
            const items = p.split('\n').filter(i => i.startsWith('- ')).map(i => `<li>${i.replace('- ', '')}</li>`).join('');
            return `<ul>${items}</ul>`;
          }
          if (p.startsWith('1. ')) {
            const items = p.split('\n').filter(i => /^\d+\.\s/.test(i)).map(i => `<li>${i.replace(/^\d+\.\s/, '')}</li>`).join('');
            return `<ol>${items}</ol>`;
          }
          return `<p>${p}</p>`;
        }).join('')}
      </div>

      <div class="article-footer-box">
        <div class="article-tags-wrap">
          ${article.tags.map(t => `<span class="article-tag">#${t}</span>`).join('')}
        </div>
        <div class="article-share-row">
          <span>Found this insightful? Share with your CAT study group:</span>
          <button class="share-pill-btn" onclick="navigator.clipboard.writeText(window.location.href); alert('Article link copied to clipboard!');">
            📋 Copy Link
          </button>
        </div>
      </div>
    </div>
  `;
}
