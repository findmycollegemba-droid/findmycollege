import { COLLEGES_DATA } from '../data/collegesData.js';
import { EXAMS_DATA } from '../data/examsData.js';
import { BLOGS_DATA } from '../data/blogsData.js';

export function renderQuickSearchModal() {
  return `
    <div class="search-modal-backdrop" id="searchModalBackdrop">
      <div class="search-modal-container">
        <div class="search-input-header">
          <svg class="search-icon-active" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
          <input type="text" id="globalSearchInput" placeholder="Search colleges, exams, score calculators, GD-PI tips..." autocomplete="off" />
          <button class="close-search-btn" id="closeSearchBtn">ESC</button>
        </div>

        <div class="search-tags-row">
          <span class="search-tag-chip" data-search="CAT">🔥 CAT 2026</span>
          <span class="search-tag-chip" data-search="XLRI">🏛️ XLRI Jamshedpur</span>
          <span class="search-tag-chip" data-search="calculator">📊 Score Calculators</span>
          <span class="search-tag-chip" data-search="FMS">💰 FMS Delhi ROI</span>
          <span class="search-tag-chip" data-search="MBA vs PGDM">⚖️ MBA vs PGDM</span>
          <span class="search-tag-chip" data-search="SNAP">⚡ SNAP Exam</span>
        </div>

        <div class="search-results-list" id="searchResultsList">
          <div class="search-empty-state">
            <div class="search-empty-icon">🔍</div>
            <p>Type college names, exams (CAT, XAT, SNAP, etc.), or tools to jump directly.</p>
          </div>
        </div>

        <div class="search-modal-footer">
          <span>Navigate with <kbd>↑</kbd> <kbd>↓</kbd></span>
          <span>Select with <kbd>Enter</kbd></span>
          <span>Close with <kbd>Esc</kbd></span>
        </div>
      </div>
    </div>
  `;
}

export function handleSearchQuery(query) {
  const q = (query || '').trim().toLowerCase();
  const listEl = document.getElementById('searchResultsList');
  if (!listEl) return;

  if (!q) {
    listEl.innerHTML = `
      <div class="search-empty-state">
        <div class="search-empty-icon">🔍</div>
        <p>Type college names, exams (CAT, XAT, SNAP, etc.), or tools to jump directly.</p>
      </div>
    `;
    return;
  }

  const results = [];

  // Search Exams
  EXAMS_DATA.forEach(exam => {
    if (exam.name.toLowerCase().includes(q) || exam.fullName.toLowerCase().includes(q) || exam.id.includes(q)) {
      results.push({
        type: 'Exam',
        icon: '📝',
        title: exam.fullName,
        sub: `${exam.name} • ${exam.conductingBody} • ${exam.examDate}`,
        route: `/exams/${exam.id}`
      });
    }
  });

  // Search Tools
  if ('cat score calculator percentile predictor response sheet'.includes(q) || 'score'.includes(q) || 'percentile'.includes(q) || 'predictor'.includes(q)) {
    results.push({
      type: 'Tool',
      icon: '📊',
      title: 'CAT College Predictor 2026',
      sub: 'VARC, DILR, QA slot normalization and 21 IIMs call simulator',
      route: '/tools/cat-college-predictor'
    });
  }
  if ('xat score calculator xlri decision making predictor'.includes(q) || 'xlri'.includes(q) || 'decision making'.includes(q)) {
    results.push({
      type: 'Tool',
      icon: '🎯',
      title: 'XAT Score Calculator & XLRI Predictor',
      sub: 'VALR, DM, QADI sectional scoring and negative penalty evaluator',
      route: '/tools/xat-percentile-calculator'
    });
  }
  if ('cmat score calculator jbims simsree gim'.includes(q) || 'cmat'.includes(q)) {
    results.push({
      type: 'Tool',
      icon: '⚡',
      title: 'CMAT Score Calculator',
      sub: '400-mark evaluator for JBIMS MMS, SIMSREE & GIM',
      route: '/tools/cmat-percentile-calculator'
    });
  }

  // Search Colleges
  let collegeMatches = 0;
  for (const col of COLLEGES_DATA) {
    const nameMatch = (col.name || '').toLowerCase().includes(q);
    const shortMatch = (col.shortName || '').toLowerCase().includes(q);
    const locMatch = (col.location || '').toLowerCase().includes(q) || (col.city || '').toLowerCase().includes(q);
    const examMatch = (col.examsAccepted || []).some(ex => ex.toLowerCase().includes(q));

    if (nameMatch || shortMatch || locMatch || examMatch) {
      results.push({
        type: 'B-School',
        icon: '🏛️',
        title: col.name,
        sub: `${col.location || col.city} • Avg CTC: ${col.avgSalary || 'N/A'} • Fees: ${col.fees || 'N/A'} • Cutoff: ${col.cutoffCAT !== 'N/A' ? 'CAT: ' + col.cutoffCAT : (col.cutoffXAT !== 'N/A' ? 'XAT: ' + col.cutoffXAT : 'Exam Mapped')}`,
        route: `/colleges/${col.id}`,
        id: col.id
      });
      collegeMatches++;
      if (collegeMatches >= 20) break; // Keep modal crisp and performant
    }
  }

  // Search Blogs
  BLOGS_DATA.forEach(blog => {
    if (blog.title.toLowerCase().includes(q) || blog.category.toLowerCase().includes(q) || blog.tags.some(t => t.toLowerCase().includes(q))) {
      results.push({
        type: 'Editorial',
        icon: '📰',
        title: blog.title,
        sub: `${blog.category} • ${blog.readTime} • by ${blog.author}`,
        route: `/blog/${blog.id}`
      });
    }
  });

  // Legal & Transparency Pages
  if ('terms condition agreement rules disclaimer'.includes(q)) {
    results.push({
      type: 'Policy',
      icon: '⚖️',
      title: 'Terms and Conditions',
      sub: 'Official User Agreement, Disclaimers & Portal Terms',
      route: '/terms'
    });
  }
  if ('privacy policy data protection security gdpr dpdp'.includes(q)) {
    results.push({
      type: 'Policy',
      icon: '🛡️',
      title: 'Privacy Policy',
      sub: 'DPDP Act 2023 & Student Data Protection Standards',
      route: '/privacy'
    });
  }

  if (results.length === 0) {
    listEl.innerHTML = `
      <div class="search-empty-state">
        <p>No matches found for "<strong>${query}</strong>". Try searching for "CAT", "XLRI", "FMS", or "Score Calculator".</p>
      </div>
    `;
    return;
  }

  // Prepend a "View all in Directory" link if query is active
  const viewAllHeader = `
    <a href="/colleges?search=${encodeURIComponent(query)}" class="search-result-item search-result-highlight" data-route="colleges" data-search="${encodeURIComponent(query)}">
      <span class="search-item-badge all">🔍 Search Directory</span>
      <div class="search-item-info">
        <div class="search-item-title">Search entire directory for "${query}"</div>
        <div class="search-item-sub">View all colleges, filters, cutoffs & fee ranges matching "${query}"</div>
      </div>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
    </a>
  `;

  listEl.innerHTML = viewAllHeader + results.map(item => {
    const routeHref = item.route.startsWith('/') ? item.route : '/' + item.route;
    return `
      <a href="${routeHref}" class="search-result-item" ${item.id ? `data-college-id="${item.id}"` : ''}>
        <span class="search-item-badge ${item.type.toLowerCase().replace(/[^a-z]/g, '')}">${item.icon} ${item.type}</span>
        <div class="search-item-info">
          <div class="search-item-title">${item.title}</div>
          <div class="search-item-sub">${item.sub}</div>
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
      </a>
    `;
  }).join('');
}
