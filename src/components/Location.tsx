import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { business } from '../config/business';
import { photos } from '../config/images';
import {
  telHref,
  directionsHref,
  mapEmbedSrc,
  contactLabels,
  contactAria,
  externalLinkProps
} from '../utils/contact';

const easing = [0.16, 1, 0.3, 1] as const;

export default function Location() {
  return (
    <section id="location" className="relative overflow-hidden bg-white py-20 md:py-28 border-t border-[#E5E7EB]">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easing }}
        >
          <span className="eyebrow eyebrow--center mb-4">Physical Business Location</span>
          <h2 className="display mb-4 text-3xl md:text-4xl lg:text-[42px]">
            Visit Our Scrap Yard in Dehradun
          </h2>
          <p className="mb-2 text-xl font-bold text-[#087A45]">
            Banshiwala Jaajra, Dehradun, Uttarakhand
          </p>
          <p className="lede text-base sm:text-lg leading-relaxed text-[#667085]">
            Visit our workshop in Dehradun to discuss your vehicle in person, or call ahead and we will have a transparent valuation ready.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: easing }}
          className="flex flex-col overflow-hidden rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] shadow-md lg:flex-row"
        >
          {/* Details Column */}
          <div className="order-2 flex w-full flex-col justify-center p-6 sm:p-10 lg:order-1 lg:w-5/12 bg-white border-t lg:border-t-0 lg:border-r border-[#E5E7EB]">
            {/* Workshop Signboard & Entrance Photo */}
            <div className="group relative mb-8 overflow-hidden rounded-2xl border border-[#E5E7EB] shadow-xs">
              <img
                src={photos.workshopSignboard.src}
                srcSet={photos.workshopSignboard.srcSet}
                sizes="(max-width: 1024px) 100vw, 40vw"
                width={photos.workshopSignboard.width}
                height={photos.workshopSignboard.height}
                alt={photos.workshopSignboard.alt}
                title={photos.workshopSignboard.title}
                loading="lazy"
                decoding="async"
                className="aspect-[16/9] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101C32]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-x-4 bottom-3 flex items-center justify-between gap-3 text-white">
                <span className="flex items-center gap-2 text-xs font-bold">
                  <span className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
                  AutoScrape Pro Signboard &amp; Facility
                </span>
                <span className="rounded-md bg-white/20 px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider backdrop-blur-xs">
                  Dehradun
                </span>
              </div>
            </div>

            {/* Address Card as required by prompt Section 5 */}
            <div className="mb-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#EAF8EF] text-[#087A45]">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#667085]">Workshop Address</h3>
                  <p className="text-lg font-extrabold text-[#101C32]">{business.name}</p>
                </div>
              </div>

              <address className="mb-6 pl-13 text-base not-italic font-medium leading-relaxed text-[#101C32]">
                Banshiwala Jaajra, Dehradun, Uttarakhand
              </address>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={directionsHref}
                  {...externalLinkProps}
                  aria-label={contactAria.directions}
                  className="btn btn-primary flex-1 !py-3 !px-5 text-sm font-bold flex items-center justify-center gap-2 shadow-xs"
                >
                  <Navigation className="h-4 w-4" />
                  <span>{contactLabels.directions}</span>
                </a>
                <a
                  href={telHref}
                  aria-label={contactAria.call}
                  className="btn btn-orange flex-1 !py-3 !px-5 text-sm font-bold flex items-center justify-center gap-2 shadow-xs"
                >
                  <Phone className="h-4 w-4 fill-white" />
                  <span>{contactLabels.call}</span>
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="border-t border-[#E5E7EB] pt-6">
              <div className="mb-2 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#FFF3E5] text-[#FF8717]">
                  <Clock className="h-4 w-4" />
                </span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#667085]">Working Hours</h4>
                  <p className="text-sm font-bold text-[#101C32]">{business.hours}</p>
                </div>
              </div>
              <p className="pl-12 text-xs text-[#667085]">
                Sunday closed. Collection and pickup available across Punjab, NCR, Uttarakhand and Saharanpur.
              </p>
            </div>
          </div>

          {/* Embedded Map Column */}
          <div className="order-1 h-[340px] w-full lg:order-2 lg:h-auto lg:min-h-[500px] lg:w-7/12 bg-gray-50">
            <iframe
              src={mapEmbedSrc}
              className="h-full w-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map showing location of ${business.name} in Banshiwala Jaajra, Dehradun, Uttarakhand`}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
