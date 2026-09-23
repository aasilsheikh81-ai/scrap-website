import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { business } from '../config/business';
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
    <section id="location" className="relative overflow-hidden bg-brand-black py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-charcoal via-brand-black to-brand-black" />
      <div className="pointer-events-none absolute inset-0 bg-grid" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: easing }}
        >
          <span className="eyebrow eyebrow--center mb-5">Physical Business Location</span>
          <h2 className="display mb-5 text-3xl md:text-5xl">Our location</h2>
          <p className="mb-3 text-xl font-bold text-brand-red md:text-2xl">
            {business.address.city}, {business.address.state}
          </p>
          <p className="lede text-lg font-light leading-relaxed text-brand-muted">
            Visit the yard or get in touch for more information about our scrap vehicle services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: easing }}
          className="surface-dark flex flex-col overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)] lg:flex-row"
        >
          {/* Details */}
          <div className="order-2 flex w-full flex-col justify-center p-8 md:p-12 lg:order-1 lg:w-2/5">
            {/* Facility photo */}
            <div className="group relative mb-9 overflow-hidden rounded-2xl border border-white/10 shadow-lg">
              <img
                src={business.locationImage.src}
                srcSet={`${business.locationImage.thumbnail} 400w, ${business.locationImage.src} 800w`}
                sizes="(max-width: 1024px) 100vw, 40vw"
                alt={business.locationImage.alt}
                loading="lazy"
                className="aspect-[16/8] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/10 to-transparent" />
              <div className="absolute inset-x-4 bottom-3 flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-xs font-bold tracking-wide text-white">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  {business.locationImage.title}
                </span>
                <span className="rounded border border-white/10 bg-brand-black/60 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-brand-subtle backdrop-blur-sm">
                  Physical Yard
                </span>
              </div>
            </div>

            {/* Address */}
            <div className="mb-9">
              <div className="mb-5 flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-red/12 text-brand-red">
                  <MapPin className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-bold tracking-tight">Address</h3>
              </div>

              <p className="mb-2 text-lg font-bold text-white">{business.name}</p>
              <address className="mb-8 text-[15px] font-light not-italic leading-relaxed text-brand-muted">
                {business.address.line1}
                <br />
                {business.address.city}, {business.address.state} {business.address.pinCode},{' '}
                {business.address.country}
              </address>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={directionsHref}
                  {...externalLinkProps}
                  aria-label={contactAria.directions}
                  className="btn btn-primary flex-1 !px-5 text-sm"
                >
                  <Navigation className="h-4 w-4" />
                  <span>{contactLabels.directions}</span>
                </a>
                <a
                  href={telHref}
                  aria-label={contactAria.call}
                  className="btn btn-ghost flex-1 !px-5 text-sm"
                >
                  <Phone className="h-4 w-4" />
                  <span>{contactLabels.call}</span>
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="border-t border-white/10 pt-8">
              <div className="mb-4 flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/[0.06] text-brand-subtle">
                  <Clock className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold tracking-tight">Opening Hours</h3>
              </div>
              <p className="text-[15px] font-light text-brand-muted">{business.hours}</p>
              <p className="mt-1.5 text-[13px] font-light text-brand-muted/70">
                Closed on Sunday.
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="group relative order-1 h-[420px] w-full lg:order-2 lg:h-auto lg:min-h-[560px] lg:w-3/5">
            <div className="pointer-events-none absolute inset-0 z-10 bg-brand-red/10 opacity-0 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-100" />
            <iframe
              src={mapEmbedSrc}
              className="h-full w-full border-0 opacity-80 grayscale invert contrast-125 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:filter-none"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map showing the location of ${business.name}`}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
