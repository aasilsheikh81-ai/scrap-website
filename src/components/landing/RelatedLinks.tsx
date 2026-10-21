import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Wrench } from 'lucide-react';
import { servicePages } from '../../content/services';
import { locationPages } from '../../content/locations';

export default function RelatedLinks({ currentSlug }: { currentSlug: string }) {
  const services = servicePages.filter((page) => page.slug !== currentSlug);
  const areas = locationPages.filter((page) => page.slug !== currentSlug);

  const linkClass =
    'group flex items-center justify-between gap-3 rounded-xl border border-[#E5E7EB] bg-white px-5 py-3.5 text-sm font-semibold text-[#101C32] transition-all hover:-translate-y-0.5 hover:border-[#087A45]/40 hover:text-[#087A45] hover:shadow-xs';

  return (
    <section className="border-t border-[#E5E7EB] bg-[#F9FAFB] py-16 md:py-20">
      <div className="container mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-2 md:px-6">
        <div>
          <h2 className="mb-5 flex items-center gap-2.5 text-lg sm:text-xl font-extrabold tracking-tight text-[#101C32]">
            <Wrench className="h-5 w-5 text-[#087A45]" aria-hidden="true" />
            Our Vehicle Scrapping Services
          </h2>
          <ul className="grid gap-2.5">
            {services.map((page) => (
              <li key={page.slug}>
                <Link to={`/${page.slug}`} className={linkClass}>
                  <span>{page.h1}</span>
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 flex items-center gap-2.5 text-lg sm:text-xl font-extrabold tracking-tight text-[#101C32]">
            <MapPin className="h-5 w-5 text-[#FF8717]" aria-hidden="true" />
            Scrap Car Buyer Near You
          </h2>
          <ul className="grid gap-2.5">
            {areas.map((page) => (
              <li key={page.slug}>
                <Link to={`/${page.slug}`} className={linkClass}>
                  <span>{page.h1}</span>
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </li>
            ))}
            <li>
              <Link to="/" className={linkClass}>
                <span>AutoScrape Pro Home — Scrap Car Buyer</span>
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
