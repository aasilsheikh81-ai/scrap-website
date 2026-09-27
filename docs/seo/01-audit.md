# SEO Audit: autoscrapepro.com (pre-change baseline)

Audit date: 2026-09-26 · Stack: Vite 8 + React 19 SPA, react-router 7, Tailwind 4, framer-motion.

## 1. Architecture findings (site-wide)

| # | Issue | Severity | Evidence |
|---|-------|----------|----------|
| A1 | **Client-side only rendering.** `index.html` ships an empty `<div id="root">`. Bots that don't run JavaScript (WhatsApp, Facebook and LinkedIn previews, many SEO crawlers) see no content. Google has to queue every page for rendering. | High | `index.html`, `src/main.tsx` |
| A2 | **Same `<head>` on every URL.** Title, description, OG and schema are hard-coded in `index.html`. Region pages change only `document.title` and the description, and only after JavaScript runs. | High | `index.html`, `ServiceAreaDetails.tsx` |
| A3 | **No canonical tags** anywhere. | High | — |
| A4 | **Duplicate content from alias routes.** `/about`, `/services`, `/process`, `/gallery`, `/faq`, `/location` and `/contact` all render the full homepage. | High | `App.tsx` |
| A5 | **Soft 404s.** The `*` route renders the homepage with a 200 status for any URL. | High | `App.tsx` |
| A6 | **No `robots.txt` and no `sitemap.xml`.** | High | `public/` |
| A7 | **Brand mismatch.** The code says "Elite Scrap Vehicles" but the domain and brief say "AutoScrape Pro". Name, Address, Phone (NAP) consistency is a core local ranking factor. | High | `business.ts`, `index.html` |
| A8 | **OG and schema images use relative URLs** (`/images/...`). Facebook, X and Google require absolute URLs. | Medium | `index.html` |
| A9 | **Schema is incomplete and uses an invalid type.** `AutoWrecker` is not a schema.org type. There is no Organization, WebSite, Service or BreadcrumbList. The FAQ JSON-LD is hand-copied, so it can drift from the on-page FAQ. | Medium | `index.html` |
| A10 | **Saharanpur isn't targeted** even though the yard is there. No location page, and it is missing from `areaServed`. | High | `business.ts` |
| A11 | **Thin internal linking.** There are no service pages. Footer and header link only to `#anchors`. Region pages are reachable only from one homepage block. | Medium | `Header.tsx`, `Footer.tsx` |

## 2. Page-by-page

### `/` (Homepage)
- **Title:** "Elite Scrap Vehicles | Scrap Car & Vehicle Services in Punjab, NCR & Uttarakhand" (86 characters, truncated in the SERP, wrong brand).
- **Meta description:** 181 characters (truncated), wrong brand.
- **H1:** "Reliable Scrap Car & Vehicle Services". It contains none of the target head terms ("scrap car buyer", "vehicle scrapping").
- **H2s:** Generic ("Premium vehicle services", "Our work in action", "Service areas", "Everything you need to know"). No keyword or location relevance.
- **Semantic gaps:** No mention of End-of-Life Vehicle (ELV), RVSF, Certificate of Deposit, RC cancellation or deregistration, the Vehicle Scrapping Policy, car recycling or dismantling.
- **Location gaps:** Saharanpur appears only in the address. Punjab, NCR and Uttarakhand appear once each.
- **FAQ:** 6 questions. Missing high-intent ones: price or worth, the scrapping process, how long it takes, whether RC cancellation is included.
- **Conversion:** Strong. Call and WhatsApp appear on every section plus a sticky mobile bar.

### `/service-areas/punjab`, `/ncr`, `/uttarakhand`
- **Titles:** "Scrap Car Services in {Region} | Elite Scrap Vehicles". Weak intent match: no "buyer" and no benefit.
- **Descriptions:** Under 140 characters, with no CTA or unique selling point.
- **Content:** About 250–350 words each. **Thin**, and the three pages are near-duplicates of each other.
- **Headings:** Visual eyebrow labels are marked up as `<h2>` and real headings as `<h3>`/`<h4>`, so the outline is inverted.
- No schema, canonical, FAQ schema or breadcrumb schema. The NCR page has no FAQ.
- No links to sibling regions or to services.

### Missing pages
- Service pages: Scrap Car Pickup, Vehicle Disposal, ELV Scrapping, Scrap Car Valuation, RTO/RC Cancellation.
- A Saharanpur location page.
- A real 404 page.

## 3. Images
- File names are generic ("user-reference-scrap-yard.jpg"). Alt text is decent but has no service keywords.
- Full-size JPEGs are 1920 px and 300–830 KB. The only responsive variant is a 600 px WebP, so desktop always downloads the full JPEG.
- No `title` attributes and no `decoding="async"`.
- The hero preload in `index.html` always fetches the 1920 px JPEG, even on mobile where the `srcset` picks the 600 px WebP. That's a double download.

## 4. Core Web Vitals (lab reasoning from the code)
- **LCP:** The hero image is the LCP element. It is preloaded, but at the wrong size on mobile. Google Fonts CSS blocks rendering. The single 537 KB JS bundle (160 KB gzipped) must parse before anything renders, because nothing is prerendered.
- **CLS:** Low risk. Images sit in fixed-aspect containers. Font swap can shift hero text slightly.
- **INP/FID:** Moderate. framer-motion animates many `whileInView` elements, and there is a single large bundle.

## 5. Conversion elements
Present: Call, WhatsApp, directions, sticky mobile bar, trust marquee.
Missing: no service-specific CTAs, no "what documents to bring" checklist, no pricing-factor explainer.

## 6. Fix plan
Implemented in this change set (see `03-implementation-report.md`): build-time prerendering with a per-route `<head>`, canonicals, OG and Twitter tags, a JSON-LD `@graph`, a sitemap, robots.txt and a real 404; 4 location pages of 1,000+ words each; 5 service pages; homepage copy rewrite; a responsive WebP image pipeline with descriptive file names; sitewide internal linking.
