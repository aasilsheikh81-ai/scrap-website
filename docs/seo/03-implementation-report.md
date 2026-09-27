# SEO Implementation Report

## What changed

### Architecture
- **Build-time prerendering.** `npm run build` now runs the client build, then an SSR build of `src/entry-server.tsx`, then `scripts/prerender.mjs`. That writes a full HTML file per route with its own `<head>`, so every crawler and social bot sees content and metadata without running JavaScript. The browser hydrates the markup (`src/main.tsx`).
- **Per-page head management.** A `<Seo>` component on each page (`src/seo/Seo.tsx`) feeds one renderer (`src/seo/head.ts`). It is used at build time and again on client-side navigation. It handles title, description, robots, canonical, hreflang `en-IN`, Open Graph (title, description, url, image, dimensions, alt, locale) and Twitter cards.
- **Build-time checks.** The prerender step **fails the build** if an indexable page's title isn't 30–65 characters or its description isn't 120–160. It also prints a word count per page.
- **URLs:**

| URL | Page | Target keyword |
|---|---|---|
| `/` | Homepage | scrap car buyer, vehicle scrapping service |
| `/scrap-car-buyer-punjab` | Location | scrap car buyer Punjab |
| `/scrap-car-buyer-ncr` | Location | scrap car buyer NCR / Delhi |
| `/scrap-car-buyer-uttarakhand` | Location | scrap car buyer Uttarakhand |
| `/scrap-car-buyer-saharanpur` | Location | scrap car buyer Saharanpur |
| `/scrap-car-pickup` | Service | scrap car pickup, free vehicle collection |
| `/vehicle-disposal` | Service | old car disposal, vehicle disposal |
| `/elv-scrapping` | Service | ELV scrapping, car recycling |
| `/scrap-car-valuation` | Service | scrap car valuation / price |
| `/rc-cancellation-rto-documentation` | Service | RC cancellation, RTO documentation |

- **Old URLs:** `/service-areas/{punjab,ncr,uttarakhand}` now redirect: client-side, plus 301s in `public/_redirects` for Netlify and Cloudflare. `/about`, `/services` and the other section aliases still work but canonicalise to `/`. Unknown URLs render a `noindex` 404 page, and `dist/404.html` is generated.
- **`robots.txt`** and a generated **`sitemap.xml`** (10 URLs, lastmod set to the build date).

### Schema (JSON-LD `@graph`, one per page, cross-linked by `@id`)
- **Every page:** `Organization` (with `ContactPoint`) and `AutomotiveBusiness` + `RecyclingCenter` (address, geo, hours, areaServed, OfferCatalog of services).
- **Homepage:** also `WebSite`, `WebPage` and `FAQPage` (9 questions).
- **Location and service pages:** also `WebPage`, `Service` (areaServed per region), `FAQPage` and `BreadcrumbList`.
- Removed the invalid `AutoWrecker` type. FAQ schema is generated from the same data as the visible FAQ, so the two can't drift apart.

### Content
- **Homepage:**
  - New H1: "Scrap Car Buyer & Vehicle Scrapping Service".
  - Keyword-aligned H2s throughout.
  - About copy now covers the semantic entities: ELV, depollution, dismantling, car recycling, RC cancellation, deregistration, Vehicle Scrapping Policy.
  - FAQ expanded to 9 high-intent questions (worth, how to scrap, documents, RC cancellation, free pickup, time taken).
- **4 location pages** of 1,150–1,340 words each, with unique angles:
  - Punjab: NRI-owned cars, flood damage, Majha/Doaba/Malwa coverage.
  - NCR: the 10/15-year rule, NOC vs scrapping, society basements.
  - Uttarakhand: hill-worn vehicles, landslide damage, pickup planning.
  - Saharanpur: the local yard, UP-11 RTO, yard visits.
- **5 service pages** of 520–620 words each, with FAQs.
- **Brand renamed** from "Elite Scrap Vehicles" to **AutoScrape Pro** everywhere. It's one field in `src/config/business.ts`.

### Internal linking
- The footer links every service and location page on every page of the site.
- Homepage service cards link to their service pages; service-area cards (now including Saharanpur) link to the location pages.
- Every landing page ends with a "related" block linking all other services and areas with descriptive anchors, plus visible breadcrumbs.

### Images
- Source photos moved to `images-src/` with descriptive names (e.g. `accident-damaged-car-for-scrap.jpg`). `npm run images` generates 640/1280/1920 px WebP plus a 1600 px JPEG and a 1200×630 OG image.
- Every `<img>` now has a responsive `srcset`, `width`/`height`, `title`, keyword-aware `alt` and `decoding="async"`. Hero images are `fetchpriority="high"`.
- **Desktop hero: 417 KB JPEG → 116 KB WebP. Mobile hero: 30 KB.**

### Core Web Vitals
- **LCP:** per-route hero preload using `imagesrcset`, so mobile no longer downloads the 1920 px image. Google Fonts load without blocking render. Prerendered HTML paints before JavaScript runs.
- **CLS:** intrinsic `width`/`height` on images.
- **Caching:** the JS is split into `react-vendor` (82 KB gzipped), `motion` (42 KB gzipped) and app code (46 KB gzipped). Vendor chunks stay cached across content deploys.
- FAQ answers stay in the DOM (collapsed), so the visible text matches the FAQ schema.

### Verified
- `npm run build` and `npm run lint` are clean.
- In headless Chrome, all 10 indexable pages plus an alias hydrate with **zero console errors**, one H1 and one `<title>` each, and the correct canonical.
- Client-side navigation swaps the head correctly, and the legacy URL redirects.

---

## Things you must do or confirm (can't be done in code)

1. **Brand name.** The site was "Elite Scrap Vehicles". I switched it to **AutoScrape Pro** per your brief. Your Google Business Profile and all citations must use exactly the same name, address and phone.
2. **Hosting.** Pages are written as `dist/<slug>.html`. Netlify, Cloudflare Pages and GitHub Pages serve them at `/<slug>` automatically. On Vercel, set `"cleanUrls": true`. Also check that `dist/404.html` is served with a 404 status, and carry the `_redirects` rules into your host's format if it isn't Netlify or Cloudflare.
3. **RVSF status.** The copy deliberately does **not** claim AutoScrape Pro is a Registered Vehicle Scrapping Facility or issues Certificates of Deposit. If you are one, or have a documented RVSF partner, add that (with the registration number). It's the strongest trust and ranking signal in this niche.
4. **Social and GBP URLs.** Fill `business.social` in `src/config/business.ts`. They flow into schema `sameAs` automatically.
5. **Real photos.** The current images are stock. Photos of your actual yard, trucks and team improve trust, conversions and image search.
6. **Search Console and Bing Webmaster.** Verify the domain, submit `/sitemap.xml`, and request indexing of the 9 new pages.

---

## Priority fixes

### High (done in this change set, unless marked)
- ✅ Prerendered HTML and per-page metadata (fixes JS-only indexing and identical heads)
- ✅ Canonicals, 404 handling, alias de-duplication, robots.txt, sitemap
- ✅ Location pages for Punjab, NCR, Uttarakhand and Saharanpur
- ✅ Service pages for each core service
- ✅ Valid, complete JSON-LD graph
- ⏳ **Google Business Profile** creation or verification, plus reviews (owner action)
- ⏳ Confirm the brand name and NAP consistency (owner action)

### Medium
- Build the blog route and publish the first 7 posts (`02-blog-content-plan.md`)
- Scrap-value estimator widget on `/scrap-car-valuation`
- Replace stock photos with real yard and pickup photos
- Build 20+ citations (Justdial, Sulekha, IndiaMART, Bing Places, Apple Maps)
- Collect Google reviews. Only add `aggregateRating` schema once you show genuine reviews on-page.
- Swap `framer-motion` for `LazyMotion` + `m` to cut about 20–25 KB gzipped of JavaScript

### Low
- City-level pages (Ludhiana, Noida, Dehradun…) once the region pages index and rank
- Hindi versions of the location pages (`hreflang="hi-IN"`)
- Real Privacy Policy and Terms pages (the footer links currently point to `#`)
- A raster logo (PNG, at least 112 px) for Organization `logo` instead of the SVG favicon
- A click-to-load facade for the Google Maps iframe

---

## Estimated impact
These are directional estimates, not guarantees. Actual results depend on domain age, backlinks, GBP and reviews, and competitor activity.

| Keyword group | Today (est.) | 90 days (est.) | Main lever |
|---|---|---|---|
| "scrap car buyer saharanpur" and variants | Not ranking / unindexed | **Top 3–5, plus the local pack if GBP is verified** | Location page + GBP + local yard |
| "scrap car buyer uttarakhand", "…dehradun" | Not ranking | Top 10–20 | Location page + city blog posts |
| "scrap car buyer punjab" | Not ranking | Top 10–30 | Location page + citations |
| "scrap car buyer ncr / delhi" | Not ranking | Top 20–50 (very competitive, many RVSFs) | Needs backlinks, city posts and ideally RVSF status |
| Long-tail informational (RC cancellation, documents, 10-year rule) | — | Top 10 for several, once the blog is live | Blog clusters A–C |

- **Traffic:** from a near-zero base, 300–1,200 organic visits a month by day 90 is realistic if GBP, citations and the first 10 blog posts ship. Most leads will come from Saharanpur and Uttarakhand first.
- **Leads:** local scrap queries convert well (phone and WhatsApp). Expect roughly 3–6% of organic visits to call or message.

---

## 90-day roadmap

**Days 1–14: Foundation**
- Deploy this build. Confirm `/slug` URLs return 200 with no redirects and `/404` returns a 404.
- Verify Search Console and Bing, submit the sitemap, and request indexing of all 10 URLs.
- Create or verify the Google Business Profile: categories, service areas, 10+ real photos, hours, services list.
- Fill `business.social`, add a PNG logo, and decide on the RVSF claim and its wording.
- Ask the last 20 customers for Google reviews.

**Days 15–45: Content and citations**
- Ship the blog route. Publish posts #1, 11, 12, 21, 22, 31 and 47.
- Build 20 citations with identical NAP.
- Add the scrap-value estimator. Replace stock hero photos with real ones.
- Weekly GBP posts. Reply to every review.

**Days 46–75: Authority**
- Publish posts #2, 3, 7, 13, 28, 32, 41 and 45 (Ludhiana and Noida city guides).
- Outreach to dealerships, insurance surveyors and RWAs for partner links. Pitch one local press story.
- Search Console review: rewrite titles and descriptions for pages with high impressions but under 2% CTR.

**Days 76–90: Expand**
- Publish the city guides for Dehradun, Haridwar/Roorkee, Jalandhar, Amritsar and Gurugram.
- Promote city guides that show traction to full city landing pages.
- Performance pass with real CrUX data: LazyMotion and a map facade if INP or LCP need it.
- Review rankings and plan the next quarter.
