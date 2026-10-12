// Cloudflare Worker entry — serves the static Astro build (./dist) as assets
// and adds a small server-side, cached weather endpoint used by the page.
//
// Deployment: `astro build` produces ./dist, then `wrangler deploy`.
import { buildWeatherUrl } from './lib/weather';

export interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // Canonicalize to the www domain over HTTPS (301). Google Search Console
    // shows both www and non-www versions indexed, which splits ranking
    // signals; the canonical tag alone is not enough, so redirect explicitly.
    const needsWww = !url.hostname.startsWith('www.');
    const isHttp = url.protocol === 'http:';
    if (needsWww || isHttp) {
      if (needsWww) url.hostname = `www.${url.hostname}`;
      if (isHttp) url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === '/api/weather') {
      const cache = caches.default;
      const cacheKey = new Request(url.toString(), request);
      let response = await cache.match(cacheKey);
      if (!response) {
        try {
          const upstream = await fetch(buildWeatherUrl(), {
            cf: { cacheTtl: 600, cacheEverything: true },
          } as unknown as RequestInit);
          const body = await upstream.text();
          response = new Response(body, {
            status: 200,
            headers: {
              'content-type': 'application/json; charset=utf-8',
              'cache-control': 'max-age=600, s-maxage=600',
              'access-control-allow-origin': '*',
            },
          });
          ctx.waitUntil(cache.put(cacheKey, response.clone()));
        } catch {
          response = new Response(JSON.stringify({ error: 'unavailable' }), {
            status: 503,
            headers: { 'content-type': 'application/json; charset=utf-8' },
          });
        }
      }
      return response;
    }

    // Everything else is served from the static build assets.
    return env.ASSETS.fetch(request);
  },
};
