import { business } from '../config/business';
import { ogImage } from '../config/images';

export interface SeoData {
  /** Full <title>, 30–65 characters. */
  title: string;
  /** 120–160 characters, ends with a call to action. */
  description: string;
  /** Route path starting with "/", e.g. "/scrap-car-buyer-punjab". */
  path: string;
  image?: { src: string; width: number; height: number; alt: string };
  /** Hero image to preload for LCP. */
  preloadImage?: { src: string; srcSet: string; sizes: string };
  noindex?: boolean;
  /** JSON-LD nodes, merged into one @graph. */
  schema?: object[];
}

export const absoluteUrl = (path: string) =>
  path.startsWith('http') ? path : `${business.siteUrl}${path === '/' ? '/' : path}`;

const escapeAttr = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** JSON safe to inline inside <script>: no `</script>` breakouts. */
const safeJson = (data: unknown) => JSON.stringify(data).replace(/</g, '\\u003c');

/**
 * Head tags for one route. Used twice: the prerender script writes this string
 * into each static HTML file, and `applyHead` swaps it in on client navigation.
 * Every tag carries `data-seo` so it can be replaced wholesale.
 */
export function renderHeadTags(seo: SeoData): string {
  const url = absoluteUrl(seo.path);
  const image = seo.image ?? ogImage;
  const imageUrl = absoluteUrl(image.src);
  const robots = seo.noindex
    ? 'noindex, follow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  const meta = (attr: 'name' | 'property', key: string, content: string | number) =>
    `<meta data-seo ${attr}="${key}" content="${escapeAttr(String(content))}" />`;

  const tags = [
    `<title data-seo>${escapeAttr(seo.title)}</title>`,
    meta('name', 'description', seo.description),
    meta('name', 'robots', robots),
    seo.noindex ? '' : `<link data-seo rel="canonical" href="${url}" />`,
    `<link data-seo rel="alternate" hreflang="en-IN" href="${url}" />`,
    meta('property', 'og:type', 'website'),
    meta('property', 'og:locale', 'en_IN'),
    meta('property', 'og:site_name', business.name),
    meta('property', 'og:title', seo.title),
    meta('property', 'og:description', seo.description),
    meta('property', 'og:url', url),
    meta('property', 'og:image', imageUrl),
    meta('property', 'og:image:width', image.width),
    meta('property', 'og:image:height', image.height),
    meta('property', 'og:image:alt', image.alt),
    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', seo.title),
    meta('name', 'twitter:description', seo.description),
    meta('name', 'twitter:image', imageUrl),
    meta('name', 'twitter:image:alt', image.alt),
    seo.preloadImage
      ? `<link data-seo rel="preload" as="image" type="image/webp" href="${seo.preloadImage.src}" imagesrcset="${seo.preloadImage.srcSet}" imagesizes="${seo.preloadImage.sizes}" fetchpriority="high" />`
      : '',
    seo.schema?.length
      ? `<script data-seo type="application/ld+json">${safeJson({ '@context': 'https://schema.org', '@graph': seo.schema })}</script>`
      : ''
  ];

  return tags.filter(Boolean).join('\n    ');
}

/** Client-side: replace the managed head tags after a route change. */
export function applyHead(seo: SeoData) {
  // Also drop the untagged fallback title/description index.html ships for the dev server.
  document.head
    .querySelectorAll('[data-seo], title, meta[name="description"]')
    .forEach((node) => node.remove());
  const template = document.createElement('template');
  template.innerHTML = renderHeadTags(seo);
  document.head.append(template.content);
}
