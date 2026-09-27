import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { HeadCollectorContext } from './seo/headCollector';
import { renderHeadTags, type SeoData } from './seo/head';
import { sectionAliases } from './content/homeSections';
import { locationPages } from './content/locations';
import { servicePages } from './content/services';
import { business } from './config/business';

export const siteUrl = business.siteUrl;

/** Indexable routes, in sitemap order, with their sitemap priority. */
export const sitemapRoutes: { path: string; priority: number; changefreq: string }[] = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  ...locationPages.map((page) => ({ path: `/${page.slug}`, priority: 0.9, changefreq: 'monthly' })),
  ...servicePages.map((page) => ({ path: `/${page.slug}`, priority: 0.8, changefreq: 'monthly' }))
];

/** Everything the build writes as static HTML: indexable routes, homepage aliases and the 404 page. */
export const prerenderPaths = [...sitemapRoutes.map((route) => route.path), ...sectionAliases, '/404'];

export function render(url: string): { html: string; head: string; seo: SeoData } {
  let collected: SeoData | null = null;
  const html = renderToString(
    <StrictMode>
      <HeadCollectorContext.Provider value={(seo) => (collected = seo)}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HeadCollectorContext.Provider>
    </StrictMode>
  );
  if (!collected) throw new Error(`No <Seo> rendered for ${url}`);
  const seo: SeoData = collected;
  return { html, head: renderHeadTags(seo), seo };
}
