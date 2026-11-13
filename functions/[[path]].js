/**
 * Cloudflare Pages Function Middleware
 * Handles:
 * 1. Single-hop 301 Permanent Redirects:
 *    - HTTP -> HTTPS
 *    - WWW -> non-WWW (findmybschool.com)
 *    - Trailing slash removal (e.g. /colleges/iim-ahmedabad/ -> /colleges/iim-ahmedabad)
 *    - Uppercase path normalization to lowercase (e.g. /Colleges -> /colleges)
 * 2. Prevents Cloudflare Pages directory trailing-slash 308 redirect loops:
 *    Fetches /index.html directly from ASSETS to return 200 OK directly.
 * 3. Enforces X-Robots-Tag: noindex, nofollow on all 404 responses.
 */
export async function onRequest(context) {
  const url = new URL(context.request.url);
  let redirectNeeded = false;

  // 1. Force HTTPS
  const proto = context.request.headers.get('x-forwarded-proto') || url.protocol.replace(':', '');
  if (proto === 'http') {
    url.protocol = 'https:';
    redirectNeeded = true;
  }

  // 2. Force non-www
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

  // Perform single consolidated 301 redirect if any normalization was needed
  if (redirectNeeded) {
    return Response.redirect(url.toString(), 301);
  }

  // 5. Prevent Cloudflare Pages directory trailing-slash 308 redirect loops:
  // For clean static routes without trailing slash and without file extension,
  // fetch /index.html directly from ASSETS and return 200 OK directly.
  if (context.env && context.env.ASSETS && !url.pathname.includes('.')) {
    try {
      const cleanPath = url.pathname === '/' ? '' : url.pathname;
      const assetUrl = new URL(`${cleanPath}/index.html`, url.origin);
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

  // 6. If 404, enforce strict X-Robots-Tag and return 404 status
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
