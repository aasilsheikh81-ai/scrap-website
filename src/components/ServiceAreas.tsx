import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { locationPages } from '../content/locations';

const easing = [0.16, 1, 0.3, 1] as const;

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="relative overflow-hidden bg-[#F9FAFB] py-20 md:py-28 border-t border-[#E5E7EB]">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easing }}
        >
          <span className="eyebrow eyebrow--center mb-4">Where We Operate</span>
          <h2 className="display mb-4 text-3xl md:text-4xl lg:text-[42px]">
            Scrap Car Buyer Across Dehradun &amp; North India
          </h2>
          <p className="lede text-base sm:text-lg leading-relaxed text-[#667085]">
            Free scrap car pickup and vehicle scrapping across Dehradun, Uttarakhand, Punjab, Delhi NCR and
            Saharanpur — choose your region for local details and doorstep collection.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locationPages.map((page, index) => {
            const isWorkshop = page.slug === 'scrap-car-buyer-dehradun';
            return (
              <motion.div
                key={page.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: easing }}
              >
                <Link
                  to={`/${page.slug}`}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087A45] ${
                    isWorkshop ? 'border-[#087A45]/50 ring-1 ring-[#087A45]/20 shadow-xs' : 'border-[#E5E7EB] hover:border-[#087A45]/40'
                  }`}
                >
                  {/* Top subtle green accent strip on hover */}
                  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#087A45] transition-transform duration-300 group-hover:scale-x-100" />

                  {isWorkshop && (
                    <span className="absolute top-3.5 right-3.5 rounded-full bg-[#EAF8EF] border border-[#087A45]/30 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#087A45]">
                      Workshop Facility
                    </span>
                  )}

                  <span className={`mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                    isWorkshop ? 'bg-[#087A45] text-white' : 'bg-[#EAF8EF] text-[#087A45]'
                  }`}>
                    <MapPin className="h-6 w-6" />
                  </span>

                  <h3 className="mb-3 text-lg font-bold tracking-tight text-[#101C32] transition-colors duration-200 group-hover:text-[#087A45]">
                    {page.h1}
                  </h3>

                  <p className="mb-6 flex-grow text-xs sm:text-sm leading-relaxed text-[#667085]">
                    {page.cardSummary}
                  </p>

                  <span className={`mx-auto inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition-colors duration-200 ${
                    isWorkshop
                      ? 'bg-[#087A45] text-white group-hover:bg-[#075D37]'
                      : 'bg-[#EAF8EF] text-[#087A45] group-hover:bg-[#087A45] group-hover:text-white'
                  }`}>
                    <span>Scrap pickup in {page.name}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
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
