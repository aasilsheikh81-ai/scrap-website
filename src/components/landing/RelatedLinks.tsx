import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Wrench } from 'lucide-react';
import { servicePages } from '../../content/services';
import { locationPages } from '../../content/locations';

/**
 * Internal-linking block for landing pages: links to every service and every
 * service area except the current page, with descriptive anchor text.
 */
export default function RelatedLinks({ currentSlug }: { currentSlug: string }) {
  const services = servicePages.filter((page) => page.slug !== currentSlug);
  const areas = locationPages.filter((page) => page.slug !== currentSlug);

  const linkClass =
    'group flex items-center justify-between gap-3 rounded-xl border border-gray-200/80 bg-white px-5 py-4 text-[15px] font-semibold text-brand-black transition-all hover:-translate-y-0.5 hover:border-brand-red/30 hover:text-brand-red';

  return (
    <section className="border-t border-gray-100 bg-brand-offwhite py-16 md:py-20">
      <div className="container mx-auto grid max-w-5xl gap-12 px-4 md:grid-cols-2 md:px-6">
        <div>
          <h2 className="mb-6 flex items-center gap-3 text-xl font-extrabold tracking-tight text-brand-black md:text-2xl">
            <Wrench className="h-5 w-5 text-brand-red" aria-hidden="true" />
            Our vehicle scrapping services
          </h2>
          <ul className="grid gap-3">
            {services.map((page) => (
              <li key={page.slug}>
                <Link to={`/${page.slug}`} className={linkClass}>
                  {page.h1}
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-6 flex items-center gap-3 text-xl font-extrabold tracking-tight text-brand-black md:text-2xl">
            <MapPin className="h-5 w-5 text-brand-red" aria-hidden="true" />
            Scrap car buyer near you
          </h2>
          <ul className="grid gap-3">
            {areas.map((page) => (
              <li key={page.slug}>
                <Link to={`/${page.slug}`} className={linkClass}>
                  {page.h1}
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </li>
            ))}
            <li>
              <Link to="/" className={linkClass}>
                AutoScrape Pro home — scrap car buyer
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
