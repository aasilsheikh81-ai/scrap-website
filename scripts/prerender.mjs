/**
 * Static prerendering (runs after `vite build` and the SSR build).
 *
 * For every route it renders the React app to HTML, injects that route's head
 * tags (title, meta, canonical, OG, JSON-LD) and writes dist/<route>.html.
 * It also writes sitemap.xml and 404.html, and fails the build if a page's
 * title or description falls outside the target lengths.
 */
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const DIST = path.resolve('dist');
const SSR_ENTRY = path.resolve('dist-ssr/entry-server.js');

const { render, prerenderPaths, sitemapRoutes, siteUrl } = await import(pathToFileURL(SSR_ENTRY).href);

const template = await readFile(path.join(DIST, 'index.html'), 'utf8');
const SEO_BLOCK = /<!--seo:start-->[\s\S]*?<!--seo:end-->/;
if (!SEO_BLOCK.test(template) || !template.includes('<!--app-html-->')) {
  throw new Error('dist/index.html is missing the <!--seo:start/end--> or <!--app-html--> markers');
}

const problems = [];
const report = [];

const wordCount = (html) =>
  html
    .replace(/<header[\s\S]*?<\/header>|<footer[\s\S]*?<\/footer>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ')
    .split(/\s+/)
    .filter((w) => /\w/.test(w)).length;

for (const route of prerenderPaths) {
  const { html, head, seo } = render(route);

  if (!seo.noindex) {
    const t = seo.title.length;
    const d = seo.description.length;
    if (t < 30 || t > 65) problems.push(`${route}: title is ${t} chars (want 30–65): "${seo.title}"`);
    if (d < 120 || d > 160) problems.push(`${route}: description is ${d} chars (want 120–160)`);
  }

  const page = template.replace(SEO_BLOCK, head).replace('<!--app-html-->', html);
  // `/slug` → dist/slug.html: static hosts (Netlify, Cloudflare Pages, GitHub
  // Pages, Vercel with cleanUrls) serve it at `/slug` with no trailing-slash
  // redirect, matching the canonical URLs.
  const file =
    route === '/' ? path.join(DIST, 'index.html')
    : route === '/404' ? path.join(DIST, '404.html')
    : path.join(DIST, `${route.slice(1)}.html`);

  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, page);
  report.push({ route, words: wordCount(html), title: seo.title.length, description: seo.description.length });
}

// sitemap.xml
const lastmod = new Date().toISOString().slice(0, 10);
const origin = siteUrl;
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapRoutes
  .map(
    (r) => `  <url>
    <loc>${origin}${r.path === '/' ? '/' : r.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;
await writeFile(path.join(DIST, 'sitemap.xml'), sitemap);
await rm(path.resolve('dist-ssr'), { recursive: true, force: true });

console.table(report);
console.log(`✓ prerendered ${prerenderPaths.length} routes, sitemap with ${sitemapRoutes.length} URLs`);

if (problems.length) {
  console.error('\nSEO length check failed:\n  ' + problems.join('\n  '));
  process.exit(1);
}
