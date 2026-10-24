import { BLOGS_DATA } from '../data/blogsData.js';
import { renderArticlesGrid, getSavedArticleIds } from './blog.js';
import { openInquiryModal } from '../components/inquiryModal.js';
import { navigateTo } from '../main.js';

export function initBlogInteractions(currentSub) {
  const article = currentSub ? BLOGS_DATA.find(b => b.id === currentSub || b.legacyId === currentSub) : null;
  if (article) {
    // ----------------------------------------------------
    // SINGLE ARTICLE READER INTERACTIONS
    // ----------------------------------------------------

    // 1. Reading Progress Bar
    const progressBar = document.getElementById('articleProgressBar');
    const updateProgress = () => {
      if (!progressBar) return;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      progressBar.style.width = `${progress}%`;
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    // 2. Table of Contents: Smooth scroll + Active link observer
    const tocLinks = document.querySelectorAll('#articleToc .toc-item');
    const headings = document.querySelectorAll('.article-rendered-body h3, .article-rendered-body h4');
    
    tocLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.replace('#', '');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          const headerOffset = 90;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      });
    });

    const highlightTocOnScroll = () => {
      let currentActiveId = '';
      headings.forEach(heading => {
        const top = heading.getBoundingClientRect().top;
        if (top <= 140) {
          currentActiveId = heading.id;
        }
      });
      if (currentActiveId) {
        tocLinks.forEach(link => {
          if (link.getAttribute('href') === `#${currentActiveId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    };
    window.addEventListener('scroll', highlightTocOnScroll, { passive: true });

    // 3. Bookmarking Toggle (Top and Bottom buttons)
    const toggleBookmark = (articleId) => {
      let saved = getSavedArticleIds();
      const isAlreadySaved = saved.includes(articleId);
      if (isAlreadySaved) {
        saved = saved.filter(id => id !== articleId);
      } else {
        saved.push(articleId);
      }
      localStorage.setItem('fmc_saved_articles', JSON.stringify(saved));

      const isNowSaved = !isAlreadySaved;
      const topBtn = document.getElementById('articleBookmarkTopBtn');
      const bottomBtn = document.getElementById('articleSaveBottomBtn');
      const bottomText = document.getElementById('saveBottomText');

      if (topBtn) {
        topBtn.classList.toggle('bookmarked', isNowSaved);
        const svg = topBtn.querySelector('svg');
        if (svg) svg.setAttribute('fill', isNowSaved ? 'currentColor' : 'none');
        const span = topBtn.querySelector('span');
        if (span) span.textContent = isNowSaved ? 'Saved' : 'Save';
      }
      if (bottomBtn) {
        bottomBtn.classList.toggle('bookmarked', isNowSaved);
        const svg = bottomBtn.querySelector('svg');
        if (svg) svg.setAttribute('fill', isNowSaved ? 'currentColor' : 'none');
      }
      if (bottomText) {
        bottomText.textContent = isNowSaved ? 'Saved to Your Deck' : 'Save to Study Deck';
      }
    };

    const bookmarkTopBtn = document.getElementById('articleBookmarkTopBtn');
    if (bookmarkTopBtn) {
      bookmarkTopBtn.addEventListener('click', () => toggleBookmark(article.id));
    }
    const bookmarkBottomBtn = document.getElementById('articleSaveBottomBtn');
    if (bookmarkBottomBtn) {
      bookmarkBottomBtn.addEventListener('click', () => toggleBookmark(article.id));
    }

    // 4. Claps / Valuable Reaction
    const clapBtn = document.getElementById('articleClapBtn');
    const clapCountDisplay = document.getElementById('clapCountDisplay');
    if (clapBtn && clapCountDisplay) {
      const savedLikes = parseInt(localStorage.getItem(`fmc_likes_${article.id}`) || article.likes, 10);
      clapCountDisplay.textContent = savedLikes;

      clapBtn.addEventListener('click', () => {
        let currentLikes = parseInt(clapCountDisplay.textContent, 10) || article.likes;
        currentLikes += 1;
        clapCountDisplay.textContent = currentLikes;
        localStorage.setItem(`fmc_likes_${article.id}`, currentLikes);
        
        clapBtn.classList.add('clapped-bounce');
        setTimeout(() => clapBtn.classList.remove('clapped-bounce'), 600);
      });
    }

    // 5. Share Handlers
    const copyToastMsg = document.getElementById('copyToastMsg');
    const showCopyToast = () => {
      if (copyToastMsg) {
        copyToastMsg.style.display = 'block';
        setTimeout(() => { copyToastMsg.style.display = 'none'; }, 2800);
      }
    };

    const copyBtns = [document.getElementById('copyArticleLinkBtn'), document.getElementById('articleShareTopBtn')];
    copyBtns.forEach(btn => {
      if (btn) {
        btn.addEventListener('click', () => {
          if (navigator.clipboard) {
            navigator.clipboard.writeText(window.location.href).then(showCopyToast);
          } else {
            prompt('Copy link to this playbook:', window.location.href);
          }
        });
      }
    });

    const shareWhatsappBtn = document.getElementById('shareWhatsappBtn');
    if (shareWhatsappBtn) {
      shareWhatsappBtn.addEventListener('click', () => {
        const text = `${article.title} - Read on FindMyBSchool:\n${window.location.href}`;
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
      });
    }

    const shareLinkedinBtn = document.getElementById('shareLinkedinBtn');
    if (shareLinkedinBtn) {
      shareLinkedinBtn.addEventListener('click', () => {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank');
      });
    }

    const shareTwitterBtn = document.getElementById('shareTwitterBtn');
    if (shareTwitterBtn) {
      shareTwitterBtn.addEventListener('click', () => {
        const text = `${article.title} by ${article.author}`;
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`, '_blank');
      });
    }

    return;
  }

  // ----------------------------------------------------
  // OVERVIEW / HUB PAGE INTERACTIONS
  // ----------------------------------------------------
  const searchInput = document.getElementById('blogSearchInput');
  const searchClearBtn = document.getElementById('blogSearchClear');
  const sortSelect = document.getElementById('blogSortSelect');
  const filterPills = document.querySelectorAll('#blogFilterPills .blog-pill');
  const gridContainer = document.getElementById('articlesGridContainer');
  const statusCountText = document.getElementById('statusCountText');
  const resetFilterBtn = document.getElementById('resetFilterBtn');
  const featuredSpotlight = document.getElementById('featuredSpotlight');
  const savedCountBadge = document.getElementById('savedCountBadge');

  const updateSavedBadge = () => {
    if (savedCountBadge) {
      const saved = getSavedArticleIds();
      savedCountBadge.textContent = saved.length;
    }
  };

  const attachCardBookmarkListeners = () => {
    const bookmarkBtns = document.querySelectorAll('.card-bookmark-btn, .bookmark-icon-btn');
    bookmarkBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const articleId = btn.getAttribute('data-bookmark-id');
        if (!articleId) return;

        let saved = getSavedArticleIds();
        const isAlreadySaved = saved.includes(articleId);
        if (isAlreadySaved) {
          saved = saved.filter(id => id !== articleId);
        } else {
          saved.push(articleId);
        }
        localStorage.setItem('fmc_saved_articles', JSON.stringify(saved));

        const isNowSaved = !isAlreadySaved;
        btn.classList.toggle('bookmarked', isNowSaved);
        const svg = btn.querySelector('svg');
        if (svg) svg.setAttribute('fill', isNowSaved ? 'currentColor' : 'none');

        updateSavedBadge();

        // If currently filtering by saved, refresh the view
        const activePill = document.querySelector('#blogFilterPills .blog-pill.active');
        if (activePill?.getAttribute('data-blog-category') === 'saved') {
          filterAndRenderArticles();
        }
      });
    });

    // Tag button filters within cards
    const tagBtns = document.querySelectorAll('.article-tag-btn');
    tagBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const tag = btn.getAttribute('data-tag-filter');
        if (tag && searchInput) {
          searchInput.value = tag;
          filterAndRenderArticles();
          searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    });
  };

  const filterAndRenderArticles = () => {
    const q = searchInput?.value.toLowerCase().trim() || '';
    if (searchClearBtn) {
      searchClearBtn.style.display = q ? 'block' : 'none';
    }

    const activePill = document.querySelector('#blogFilterPills .blog-pill.active');
    const activeCategory = activePill?.getAttribute('data-blog-category') || 'all';
    const sortVal = sortSelect?.value || 'latest';

    let filtered = [...BLOGS_DATA];
    const savedIds = getSavedArticleIds();

    // 1. Category Filter
    if (activeCategory === 'saved') {
      filtered = filtered.filter(b => savedIds.includes(b.id));
    } else if (activeCategory !== 'all') {
      filtered = filtered.filter(b => b.category === activeCategory);
    }

    // 2. Query Search
    if (q) {
      filtered = filtered.filter(b => 
        b.title.toLowerCase().includes(q) || 
        b.summary.toLowerCase().includes(q) || 
        b.author.toLowerCase().includes(q) ||
        b.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    // 3. Sorting
    if (sortVal === 'popular') {
      filtered.sort((a, b) => (b.likes || 0) - (a.likes || 0));
    } else if (sortVal === 'quick') {
      filtered.sort((a, b) => (a.readMinutes || 0) - (b.readMinutes || 0));
    } else {
      // Latest
      filtered.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    }

    // 4. Update Status Bar
    const isFiltered = activeCategory !== 'all' || q !== '';
    if (resetFilterBtn) {
      resetFilterBtn.style.display = isFiltered ? 'inline-flex' : 'none';
    }

    if (statusCountText) {
      if (activeCategory === 'saved') {
        statusCountText.textContent = `Showing ${filtered.length} saved playbook${filtered.length === 1 ? '' : 's'}`;
      } else if (q) {
        statusCountText.textContent = `Found ${filtered.length} playbook${filtered.length === 1 ? '' : 's'} for "${q}"`;
      } else if (activeCategory !== 'all') {
        statusCountText.textContent = `Showing ${filtered.length} playbook${filtered.length === 1 ? '' : 's'} in ${activeCategory}`;
      } else if (BLOGS_DATA.length === 0) {
        statusCountText.textContent = 'New editorial playbooks are being prepared';
      } else {
        statusCountText.textContent = `Showing all ${filtered.length} playbooks • Sorted by ${sortSelect ? sortSelect.options[sortSelect.selectedIndex].text : 'Latest'}`;
      }
    }

    // 5. Hide featured spotlight if search or category filter is active
    if (featuredSpotlight) {
      featuredSpotlight.style.display = isFiltered ? 'none' : 'block';
    }

    // 6. Render Grid
    if (gridContainer) {
      gridContainer.innerHTML = renderArticlesGrid(filtered, savedIds);
      attachCardBookmarkListeners();
    }
  };

  // Attach search input listeners
  if (searchInput) {
    searchInput.addEventListener('input', filterAndRenderArticles);
  }
  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      filterAndRenderArticles();
      searchInput?.focus();
    });
  }

  // Sort selector
  if (sortSelect) {
    sortSelect.addEventListener('change', filterAndRenderArticles);
  }

  // Category filter pills
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      filterAndRenderArticles();
    });
  });

  // Reset filters
  const resetAllFilters = () => {
    if (searchInput) searchInput.value = '';
    filterPills.forEach(p => p.classList.remove('active'));
    const allPill = document.querySelector('#blogFilterPills .blog-pill[data-blog-category="all"]');
    if (allPill) allPill.classList.add('active');
    filterAndRenderArticles();
  };

  if (resetFilterBtn) resetFilterBtn.addEventListener('click', resetAllFilters);
  document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'emptyResetBtn') {
      resetAllFilters();
    }
  });

  // Sidebar trending tags click
  const sidebarTopicTags = document.querySelectorAll('#sidebarTagsCloud .topic-tag-pill');
  sidebarTopicTags.forEach(tagBtn => {
    tagBtn.addEventListener('click', () => {
      const q = tagBtn.getAttribute('data-tag-query');
      if (q && searchInput) {
        searchInput.value = q;
        filterAndRenderArticles();
        window.scrollTo({ top: 320, behavior: 'smooth' });
      }
    });
  });

  // Newsletter form submission in sidebar
  const newsletterForm = document.getElementById('sidebarNewsletterForm');
  const newsletterEmail = document.getElementById('newsletterEmailInput');
  const newsletterFeedback = document.getElementById('newsletterFeedback');
  const newsletterSubmitBtn = document.getElementById('newsletterSubmitBtn');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterEmail?.value.trim();
      if (!email) return;

      sendLeadToCRM({
        email,
        name: email.split('@')[0],
        message: 'Subscribed to Tuesday MBA Admissions & Strategy Digest newsletter',
        form_name: 'Blog Newsletter Subscription',
        source: 'Website Newsletter',
      }).catch(() => {});

      if (newsletterSubmitBtn) {
        newsletterSubmitBtn.disabled = true;
        newsletterSubmitBtn.innerHTML = '<span>Subscribing...</span>';
      }

      setTimeout(() => {
        if (newsletterFeedback) {
          newsletterFeedback.style.display = 'block';
          newsletterFeedback.className = 'newsletter-feedback success';
          newsletterFeedback.innerHTML = `🎉 <strong>Success!</strong> ${email} has been subscribed to the Tuesday Strategy Digest.`;
        }
        if (newsletterEmail) newsletterEmail.value = '';
        if (newsletterSubmitBtn) {
          newsletterSubmitBtn.innerHTML = '<span>Subscribed! ✓</span>';
          newsletterSubmitBtn.classList.add('subscribed');
        }
      }, 500);
    });
  }

  // Footer newsletter submission
  const footerNewsletterForm = document.getElementById('newsletterForm');
  if (footerNewsletterForm) {
    footerNewsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = footerNewsletterForm.querySelector('input[type="email"]');
      const email = input?.value.trim();
      if (!email) return;

      sendLeadToCRM({
        email,
        name: email.split('@')[0],
        message: 'Subscribed to MBA Admission Alerts & Cutoff Digest (Footer Form)',
        form_name: 'Footer Newsletter Subscription',
        source: 'Footer Form',
      }).catch(() => {});

      const btn = footerNewsletterForm.querySelector('button');
      if (btn) {
        btn.textContent = 'Subscribed! ✓';
        btn.disabled = true;
      }
      if (input) input.value = '';
    });
  }

  // Initial attachment of card bookmark handlers
  attachCardBookmarkListeners();
}