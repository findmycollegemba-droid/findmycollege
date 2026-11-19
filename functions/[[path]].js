/**
 * Cloudflare Pages Function Middleware
 * Handles:
 * 1. Single-hop 301 Permanent Redirects:
 *    - HTTP -> HTTPS (via cf-visitor, x-forwarded-proto, and url.protocol)
 *    - WWW -> non-WWW (findmybschool.com)
 *    - Uppercase path normalization to lowercase (e.g. /Colleges -> /colleges)
 *    - Trailing slash removal (e.g. /colleges/iim-ahmedabad/ -> /colleges/iim-ahmedabad, except root /)
 *    - Legacy query-string parameters:
 *      * /?page=colleges&id=<slug> -> /colleges/<slug>
 *      * /?page=exams&exam=<x> -> /exams/<x>
 *      * /?page=blog&id=<slug> -> /blog/<slug>
 *      * /?page=programs&sub=<x> -> /programs/<x>
 *      * /?page=scholarships&id=<slug> -> /scholarships/<slug>
 *      * /?page=mock-test&id=<slug> -> /mock-test/<slug>
 *      * /?page=tools&sub=xat -> /tools/xat-percentile-calculator
 *      * /?page=tools -> /tools/cat-college-predictor
 *      * /colleges?id=<slug> -> /colleges/<slug>
 *      * /exams?exam=<x> -> /exams/<x>
 *      * /blog?id=<slug> -> /blog/<slug>
 *    - Duplicate college slugs and aliases:
 *      * /colleges/imi-delhi -> /colleges/imi-new-delhi
 *      * /colleges/indus-business-academy-bangalore -> /colleges/iba-bangalore
 *      * /colleges/upes-dehradun -> /colleges/upes-school-of-business-dehradun
 *      * /colleges/noida-institute-of-engineering-technology -> /colleges/niet-greater-noida
 *      * /colleges/lovely-professional-phagwara -> /colleges/lpu-mittal-school-of-business
 *      * /colleges/maharishi-markandeshwar-ambala -> /colleges/maharishi-markandeshwar-university-ambala
 *      * /colleges/sjmsom-iit-bombay -> /colleges/iit-bombay-sjmsom
 *      * /colleges/k-j-somaiya-mumbai -> /colleges/kj-somaiya-mumbai
 *      * /colleges/city/delhi -> /colleges/city/delhi-ncr
 *    - Legacy calculator & utility routes:
 *      * /cat-score-calculator, /tools/cat-score-calculator -> /tools/cat-college-predictor
 *      * /scholarship -> /scholarships, /free-mock-test -> /mock-test, /search -> /colleges
 * 2. Flat .html asset resolution from ASSETS returning 200 OK without trailing-slash redirects.
 * 3. Enforces X-Robots-Tag: noindex, nofollow on all 404 responses.
 */

const EXACT_REDIRECTS = {
  // Duplicate / alias college slugs
  '/colleges/imi-delhi': '/colleges/imi-new-delhi',
  '/colleges/sjmsom-iit-bombay': '/colleges/iit-bombay-sjmsom',
  '/colleges/k-j-somaiya-mumbai': '/colleges/kj-somaiya-mumbai',
  '/colleges/city/delhi': '/colleges/city/delhi-ncr',
  '/colleges/indus-business-academy-bangalore': '/colleges/iba-bangalore',
  '/colleges/upes-dehradun': '/colleges/upes-school-of-business-dehradun',
  '/colleges/noida-institute-of-engineering-technology': '/colleges/niet-greater-noida',
  '/colleges/lovely-professional-phagwara': '/colleges/lpu-mittal-school-of-business',
  '/colleges/maharishi-markandeshwar-ambala': '/colleges/maharishi-markandeshwar-university-ambala',

  // Calculator & tools redirects
  '/tools': '/tools/cat-college-predictor',
  '/cat-score-calculator': '/tools/cat-college-predictor',
  '/tools/cat-score-calculator': '/tools/cat-college-predictor',
  '/cat-percentile-calculator': '/tools/cat-college-predictor',
  '/tools/cat-percentile-calculator': '/tools/cat-college-predictor',
  '/cat-response-sheet-calculator': '/tools/cat-college-predictor',
  '/cat-calculator': '/tools/cat-college-predictor',
  '/tools/xat': '/tools/xat-percentile-calculator',
  '/tools/cmat': '/tools/cmat-percentile-calculator',
  '/tools/snap': '/tools/snap-score-calculator',
  '/tools/nmat': '/tools/nmat-score-predictor',

  // Core aliases & legacy paths
  '/scholarship': '/scholarships',
  '/free-mock-test': '/mock-test',
  '/terms-and-conditions': '/terms',
  '/privacy-policy': '/privacy',
  '/aiu-approved-colleges': '/aiu-approved-campuses',
  '/aiu-approved-campus': '/aiu-approved-campuses',
  '/search': '/colleges'
};

export async function onRequest(context) {
  const url = new URL(context.request.url);
  let redirectNeeded = false;

  // 1. Force HTTPS (inspect cf-visitor, x-forwarded-proto, and url.protocol)
  let isHttp = false;
  const cfVisitor = context.request.headers.get('cf-visitor');
  if (cfVisitor) {
    try {
      const parsed = JSON.parse(cfVisitor);
      if (parsed.scheme === 'http') isHttp = true;
    } catch (_) {}
  }
  const proto = context.request.headers.get('x-forwarded-proto') || url.protocol.replace(':', '');
  if (isHttp || proto === 'http') {
    url.protocol = 'https:';
    redirectNeeded = true;
  }

  // 2. Force non-www host (findmybschool.com)
  if (url.hostname.startsWith('www.')) {
    url.hostname = url.hostname.replace(/^www\./, '');
    redirectNeeded = true;
  }

  // 3. Normalize uppercase path to lowercase (paths only, preserving query strings)
  if (url.pathname !== url.pathname.toLowerCase()) {
    url.pathname = url.pathname.toLowerCase();
    redirectNeeded = true;
  }

  // 4. Trailing slash normalization for paths (except root /)
  if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.replace(/\/+$/, '');
    redirectNeeded = true;
  }

  // 5. Handle legacy query-string redirects (?page=... and /section?id=...)
  if (url.searchParams.has('page')) {
    const page = (url.searchParams.get('page') || '').toLowerCase().trim();
    const id = url.searchParams.get('id');
    const exam = url.searchParams.get('exam');
    const sub = url.searchParams.get('sub');
    const tool = url.searchParams.get('tool');
    const city = url.searchParams.get('city');
    const type = url.searchParams.get('type');

    if (page === 'colleges') {
      if (id) {
        url.pathname = `/colleges/${encodeURIComponent(id.trim())}`;
      } else if (city) {
        url.pathname = `/colleges/city/${encodeURIComponent(city.trim().toLowerCase())}`;
      } else if (type && (type.toLowerCase() === 'mba' || type.toLowerCase() === 'pgdm')) {
        url.pathname = `/colleges/${type.toLowerCase()}`;
      } else {
        url.pathname = '/colleges';
      }
    } else if (page === 'exams') {
      const examTarget = exam || id;
      if (examTarget) {
        url.pathname = `/exams/${encodeURIComponent(examTarget.trim().toLowerCase())}`;
      } else {
        url.pathname = '/exams';
      }
    } else if (page === 'blog') {
      if (id) {
        url.pathname = `/blog/${encodeURIComponent(id.trim())}`;
      } else {
        url.pathname = '/blog';
      }
    } else if (page === 'programs') {
      if (sub) {
        url.pathname = `/programs/${encodeURIComponent(sub.trim().toLowerCase())}`;
      } else {
        url.pathname = '/programs';
      }
    } else if (page === 'scholarships' || page === 'scholarship') {
      if (id) {
        url.pathname = `/scholarships/${encodeURIComponent(id.trim())}`;
      } else {
        url.pathname = '/scholarships';
      }
    } else if (page === 'mock-test' || page === 'free-mock-test') {
      if (id) {
        url.pathname = `/mock-test/${encodeURIComponent(id.trim())}`;
      } else {
        url.pathname = '/mock-test';
      }
    } else if (page === 'tools') {
      const t = (sub || tool || '').toLowerCase().trim();
      if (t === 'xat') {
        url.pathname = '/tools/xat-percentile-calculator';
      } else if (t === 'cmat') {
        url.pathname = '/tools/cmat-percentile-calculator';
      } else if (t === 'snap') {
        url.pathname = '/tools/snap-score-calculator';
      } else if (t === 'nmat') {
        url.pathname = '/tools/nmat-score-predictor';
      } else {
        url.pathname = '/tools/cat-college-predictor';
      }
    } else if (page === 'aiu-approved-campuses' || page === 'aiu-approved-colleges') {
      if (city) {
        url.pathname = `/aiu-approved-campuses/${encodeURIComponent(city.trim().toLowerCase())}`;
      } else {
        url.pathname = '/aiu-approved-campuses';
      }
    } else if (page === 'contact') {
      url.pathname = '/contact';
    } else if (page === 'terms' || page === 'terms-and-conditions') {
      url.pathname = '/terms';
    } else if (page === 'privacy' || page === 'privacy-policy') {
      url.pathname = '/privacy';
    } else if (page === 'ai-chat') {
      url.pathname = '/ai-chat';
    } else if (page) {
      url.pathname = `/${page}`;
    }

    // Strip legacy parameters
    url.searchParams.delete('page');
    url.searchParams.delete('id');
    url.searchParams.delete('exam');
    url.searchParams.delete('sub');
    url.searchParams.delete('tool');
    url.searchParams.delete('city');
    url.searchParams.delete('type');
    redirectNeeded = true;
  } else if (url.pathname === '/colleges' && url.searchParams.has('id')) {
    const id = url.searchParams.get('id');
    if (id) {
      url.pathname = `/colleges/${encodeURIComponent(id.trim())}`;
      url.searchParams.delete('id');
      redirectNeeded = true;
    }
  } else if (url.pathname === '/colleges' && url.searchParams.has('city')) {
    const city = url.searchParams.get('city');
    if (city) {
      url.pathname = `/colleges/city/${encodeURIComponent(city.trim().toLowerCase())}`;
      url.searchParams.delete('city');
      redirectNeeded = true;
    }
  } else if (url.pathname === '/colleges' && url.searchParams.has('type')) {
    const type = url.searchParams.get('type');
    if (type && (type.toLowerCase() === 'mba' || type.toLowerCase() === 'pgdm')) {
      url.pathname = `/colleges/${type.toLowerCase()}`;
      url.searchParams.delete('type');
      redirectNeeded = true;
    }
  } else if (url.pathname === '/exams' && (url.searchParams.has('exam') || url.searchParams.has('id'))) {
    const ex = url.searchParams.get('exam') || url.searchParams.get('id');
    if (ex) {
      url.pathname = `/exams/${encodeURIComponent(ex.trim().toLowerCase())}`;
      url.searchParams.delete('exam');
      url.searchParams.delete('id');
      redirectNeeded = true;
    }
  } else if (url.pathname === '/blog' && url.searchParams.has('id')) {
    const bId = url.searchParams.get('id');
    if (bId) {
      url.pathname = `/blog/${encodeURIComponent(bId.trim())}`;
      url.searchParams.delete('id');
      redirectNeeded = true;
    }
  }

  // 6. Exact & prefix path redirects
  if (EXACT_REDIRECTS[url.pathname]) {
    url.pathname = EXACT_REDIRECTS[url.pathname];
    redirectNeeded = true;
  } else if (url.pathname.startsWith('/free-mock-test/')) {
    url.pathname = url.pathname.replace('/free-mock-test/', '/mock-test/');
    redirectNeeded = true;
  } else if (url.pathname.startsWith('/aiu-approved-colleges/')) {
    url.pathname = url.pathname.replace('/aiu-approved-colleges/', '/aiu-approved-campuses/');
    redirectNeeded = true;
  } else if (url.pathname.startsWith('/terms-and-conditions/')) {
    url.pathname = '/terms';
    redirectNeeded = true;
  } else if (url.pathname.startsWith('/privacy-policy/')) {
    url.pathname = '/privacy';
    redirectNeeded = true;
  } else if (url.pathname.startsWith('/search/')) {
    url.pathname = '/colleges';
    redirectNeeded = true;
  }

  // Perform single consolidated 301 Permanent Redirect if any normalization was needed
  if (redirectNeeded) {
    return Response.redirect(url.toString(), 301);
  }

  // 7. Direct flat .html asset resolution for clean routes:
  // Fetches /cleanPath.html directly from ASSETS to return 200 OK directly
  if (context.env && context.env.ASSETS && !url.pathname.includes('.')) {
    try {
      const cleanPath = url.pathname === '/' ? '/index' : url.pathname;
      const assetUrl = new URL(`${cleanPath}.html`, url.origin);
      const assetReq = new Request(assetUrl, context.request);
      const assetRes = await context.env.ASSETS.fetch(assetReq);
      if (assetRes && assetRes.status === 200) {
        return assetRes;
      }
    } catch (e) {
      // Fall through to context.next() if asset fetch fails
    }
  }

  // Pass through to static assets
  const response = await context.next();

  // 8. If 404, enforce strict X-Robots-Tag: noindex, nofollow and return 404 status
  if (response.status === 404) {
    const newHeaders = new Headers(response.headers);
    newHeaders.set('X-Robots-Tag', 'noindex, nofollow');
    return new Response(response.body, {
      status: 404,
      statusText: response.statusText,
      headers: newHeaders
    });
  }

  return response;
}
