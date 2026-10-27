/**
 * Cloudflare Pages Function Middleware
 * Handles:
 * 1. HTTP to HTTPS 301 Permanent Redirect
 * 2. WWW to non-WWW (findmybschool.com) 301 Permanent Redirect
 * 3. Trailing slash normalization (e.g. /colleges/iim-ahmedabad/ -> /colleges/iim-ahmedabad) 301
 * 4. X-Robots-Tag: noindex on 404 pages to drop non-existent pages from Google crawl queue
 */
export async function onRequest(context) {
  const url = new URL(context.request.url);

  // 1. Force HTTPS
  const proto = context.request.headers.get('x-forwarded-proto') || url.protocol.replace(':', '');
  if (proto === 'http') {
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }

  // 2. Force non-www
  if (url.hostname.startsWith('www.')) {
    url.hostname = url.hostname.replace(/^www\./, '');
    return Response.redirect(url.toString(), 301);
  }

  // 3. Trailing slash normalization for paths (except root /)
  if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1);
    return Response.redirect(url.toString(), 301);
  }

  // Pass through to static assets
  const response = await context.next();

  // 4. If 404, enforce strict X-Robots-Tag
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
