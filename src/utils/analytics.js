/**
 * Google Analytics 4 (GA4) Integration & Event Tracking Utility
 * FindMyBSchool (findmybschool.com)
 */

// Primary Measurement ID (Configurable via Vite env or fallback)
export const GA_MEASUREMENT_ID = 
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_GA_MEASUREMENT_ID) || 
  'G-J7B8H8M9FE';

/**
 * Initialize Google Analytics (gtag.js) script dynamically if not present in HTML.
 */
export function initGA(customId = null) {
  if (typeof window === 'undefined') return;

  const measurementId = customId || GA_MEASUREMENT_ID;

  // Don't initialize if using dummy placeholder during build unless running in browser
  if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
    // Setup stub gtag so track calls don't fail
    if (!window.gtag) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
    }
    return;
  }

  // 1. Setup dataLayer and gtag stub if not present
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
  }

  // 2. Inject Google Tag Manager Script tag if not already on page
  const scriptId = 'google-analytics-script';
  if (!document.getElementById(scriptId)) {
    const script = document.createElement('script');
    script.id = scriptId;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }

  // 3. Configure gtag with send_page_view disabled (SPA router handles page views)
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    send_page_view: false, // SPA handles pageviews to prevent duplicate counts
    cookie_flags: 'SameSite=None;Secure',
  });
}

/**
 * Track virtual page views on SPA route changes.
 * @param {string} pagePath - URL path (e.g. '/colleges/iim-ahmedabad')
 * @param {string} pageTitle - Document Title (e.g. 'IIM Ahmedabad Admission 2027-29...')
 */
export function trackPageView(pagePath, pageTitle) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  const currentPath = pagePath || window.location.pathname + window.location.search;
  const currentTitle = pageTitle || document.title;
  const currentUrl = window.location.href;

  window.gtag('event', 'page_view', {
    page_path: currentPath,
    page_title: currentTitle,
    page_location: currentUrl,
  });
}

/**
 * Dispatch a generic custom event to Google Analytics.
 * @param {string} eventName
 * @param {object} eventParams
 */
export function trackEvent(eventName, eventParams = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  try {
    window.gtag('event', eventName, {
      ...eventParams,
      timestamp: Date.now(),
    });
  } catch (err) {
    console.debug('[GA4] Event dispatch notice:', err);
  }
}

/**
 * Track Student Lead Generation (Standard GA4 Recommended Event)
 */
export function trackLeadSubmission({ formName, source, collegeName = '', leadCategory = 'counseling' }) {
  trackEvent('generate_lead', {
    lead_type: formName || 'Admissions Inquiry',
    lead_source: source || 'Website Modal',
    college_name: collegeName,
    lead_category: leadCategory,
    currency: 'INR',
    value: 100, // Nominal lead conversion value
  });
}

/**
 * Track College Brochure Downloads
 */
export function trackBrochureDownload(college) {
  const collegeName = college?.name || college?.shortName || 'MBA College';
  trackEvent('file_download', {
    file_name: `${collegeName} 2027-29 Brochure`,
    file_extension: 'pdf',
    link_text: 'Download Brochure',
    college_id: college?.id || '',
    college_name: collegeName,
  });

  trackEvent('generate_lead', {
    lead_type: 'Brochure Download',
    college_name: collegeName,
    currency: 'INR',
    value: 100,
  });
}

/**
 * Track Calculator & Predictor Engagements
 */
export function trackCalculatorUsage(toolName, details = {}) {
  trackEvent('use_calculator', {
    tool_name: toolName, // 'CAT Predictor' | 'XAT Calculator' | 'CMAT Calculator'
    ...details,
  });
}

/**
 * Track College Search Queries
 */
export function trackSearch(searchQuery, resultsCount = 0) {
  if (!searchQuery) return;
  trackEvent('search', {
    search_term: searchQuery,
    results_count: resultsCount,
  });
}

/**
 * Track AI Chat & Chatbot Interactions
 */
export function trackChatbotEngagement(action, message = '') {
  trackEvent('chatbot_interaction', {
    chat_action: action, // 'open' | 'send_message' | 'counseling_cta'
    query_snippet: message ? message.slice(0, 50) : '',
  });
}

// Bind to window for easy debugging or global scripts
if (typeof window !== 'undefined') {
  window.initGA = initGA;
  window.trackPageView = trackPageView;
  window.trackEvent = trackEvent;
}
