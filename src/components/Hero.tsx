import { motion } from 'framer-motion';
import { Phone, MapPin, MessageCircle, ShieldCheck, Truck, FileCheck2, ChevronDown } from 'lucide-react';
import { business } from '../config/business';
import {
  telHref,
  whatsappHref,
  directionsHref,
  contactLabels,
  contactAria,
  externalLinkProps
} from '../utils/contact';

const easing = [0.16, 1, 0.3, 1] as const;

const assurances = [
  { icon: Truck, label: 'Free Scrap Car Pickup' },
  { icon: FileCheck2, label: 'RC Cancellation Support' },
  { icon: ShieldCheck, label: 'Transparent Valuation' }
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-brand-black pt-32 pb-24 md:pt-40 md:pb-28"
    >
      {/* Background photography */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: 'easeOut' }}
      >
        <img
          src={business.heroImage.src}
          srcSet={business.heroImage.srcSet}
          sizes="100vw"
          width={business.heroImage.width}
          height={business.heroImage.height}
          alt={business.heroImage.alt}
          title={business.heroImage.title}
          className="h-full w-full object-cover object-center opacity-45"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>

      {/* Cinematic overlays keep the left column fully legible */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-brand-black via-brand-black/92 to-brand-black/30" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-brand-black via-brand-black/20 to-brand-black/70" />
      <div className="absolute inset-0 z-[2] bg-grid opacity-70" />

      {/* Warm accent bloom behind the headline */}
      <div className="pointer-events-none absolute -left-40 top-1/3 z-[2] h-[520px] w-[520px] rounded-full bg-brand-red/20 blur-[140px]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easing }}
          >
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md">
              <span className="live-dot" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">
                Serving {business.serviceAreas.join(', ')}
              </span>
            </div>

            <h1 className="display mb-7 text-[2.75rem] text-white sm:text-6xl lg:text-[4.75rem]">
              Scrap Car Buyer
              <br className="hidden sm:block" />{' '}
              <span className="bg-gradient-to-r from-brand-red via-brand-accent to-brand-red bg-clip-text text-transparent">
                &amp; Vehicle Scrapping Service
              </span>
            </h1>

            <p className="lede mb-10 max-w-xl text-lg font-light leading-relaxed text-brand-subtle md:text-xl">
              We buy old, damaged and end-of-life vehicles across Punjab, Delhi NCR, Uttarakhand and
              Saharanpur — free scrap car pickup, a transparent price paid on handover, and RC cancellation
              handled end to end.
            </p>

            {/* Primary actions — the number stays hidden, the tap still dials */}
            <div className="flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
              <a href={telHref} aria-label={contactAria.call} className="btn btn-primary text-base sm:text-lg">
                <Phone className="w-5 h-5" />
                <span>{contactLabels.call}</span>
              </a>

              <a
                href={whatsappHref}
                {...externalLinkProps}
                aria-label={contactAria.whatsapp}
                className="btn btn-whatsapp text-base sm:text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{contactLabels.whatsapp}</span>
              </a>

              <a
                href={directionsHref}
                {...externalLinkProps}
                aria-label={contactAria.directions}
                className="btn btn-ghost text-base sm:text-lg"
              >
                <MapPin className="w-5 h-5" />
                <span>{contactLabels.directions}</span>
              </a>
            </div>

            {/* Assurance chips */}
            <motion.ul
              className="mt-12 flex flex-wrap gap-x-7 gap-y-3.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {assurances.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5 text-sm font-medium text-white/70">
                  <Icon className="h-4 w-4 text-brand-accent" />
                  {label}
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>

      {/* Floating hours card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8, ease: easing }}
        className="surface-dark absolute bottom-28 right-8 z-10 hidden w-64 rounded-2xl p-6 xl:block"
      >
        <div className="mb-3 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">Open for pickups</span>
        </div>
        <p className="mb-1 text-sm font-semibold text-white">{business.hours}</p>
        <p className="text-xs font-light leading-relaxed text-brand-muted">
          {business.address.city}, {business.address.state} — collection across all service areas.
        </p>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition-colors hover:text-white md:flex"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.25em]">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
