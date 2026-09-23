import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { business } from '../config/business';

const easing = [0.16, 1, 0.3, 1] as const;

const areaSlugMap: Record<string, string> = {
  Punjab: 'punjab',
  NCR: 'ncr',
  Uttarakhand: 'uttarakhand'
};

const areaDescriptions: Record<string, string> = {
  Punjab: 'Serving customers across selected locations in Punjab with rapid collection and straightforward paperwork.',
  NCR: 'Comprehensive scrap and end-of-life vehicle coverage across the National Capital Region.',
  Uttarakhand: 'Reliable vehicle scrap services across selected locations in Uttarakhand with prompt recovery.'
};

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-offwhite blur-[100px]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: easing }}
        >
          <span className="eyebrow eyebrow--center mb-5">Where We Operate</span>
          <h2 className="display mb-6 text-3xl text-brand-black md:text-5xl">Service areas</h2>
          <p className="lede text-lg font-light leading-relaxed text-brand-muted">
            Convenient scrap car collection and related services across these major regions.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-7 md:grid-cols-3">
          {business.serviceAreas.map((area, index) => {
            const slug = areaSlugMap[area] || area.toLowerCase();

            return (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: easing }}
              >
                <Link
                  to={`/service-areas/${slug}`}
                  aria-label={`View scrap car service details for ${area}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/[0.06] bg-brand-offwhite p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-brand-red/25 hover:bg-white hover:shadow-[0_32px_64px_-32px_rgba(225,29,46,0.28)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
                >
                  {/* Top accent that wipes in on hover */}
                  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-red to-brand-accent transition-transform duration-500 group-hover:scale-x-100" />

                  <span className="mx-auto mb-7 grid h-16 w-16 place-items-center rounded-2xl bg-white text-brand-red shadow-[0_12px_28px_-14px_rgba(8,9,10,0.35)] transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white">
                    <MapPin className="h-7 w-7" />
                  </span>

                  <h3 className="mb-4 text-2xl font-bold tracking-tight text-brand-black transition-colors duration-300 group-hover:text-brand-red">
                    {area}
                  </h3>

                  <p className="mb-8 flex-grow text-sm font-light leading-relaxed text-brand-muted">
                    {areaDescriptions[area] || `Providing reliable scrap services across ${area}.`}
                  </p>

                  <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-brand-red/15 bg-brand-red/[0.06] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-brand-red transition-all duration-300 group-hover:border-brand-red group-hover:bg-brand-red group-hover:text-white">
                    View Details
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
