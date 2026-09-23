import { motion } from 'framer-motion';
import { ShieldCheck, Target, Users, Check, Phone } from 'lucide-react';
import { business } from '../config/business';
import { telHref, contactLabels, contactAria } from '../utils/contact';

const easing = [0.16, 1, 0.3, 1] as const;

const highlights = [
  {
    icon: Target,
    title: 'Reliable Service',
    description: 'Straightforward, hassle-free vehicle scrapping from first call to final collection.'
  },
  {
    icon: Users,
    title: 'Customer Support',
    description: 'Dedicated assistance through the entire collection and documentation process.'
  },
  {
    icon: ShieldCheck,
    title: 'Transparent Pricing',
    description: 'Clear communication with no hidden fees or last-minute deductions.'
  }
];

const commitments = [
  'Any make, model or condition considered',
  'Free doorstep collection across our service areas',
  'Deregistration and RTO paperwork guided end to end',
  'Environmentally responsible depollution and recycling'
];

export default function AboutBusiness() {
  return (
    <section id="about" className="relative overflow-hidden bg-brand-offwhite py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid-light" />
      <div className="pointer-events-none absolute -right-32 top-24 h-[420px] w-[420px] rounded-full bg-brand-red/[0.06] blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-stretch lg:gap-20">
          {/* Imagery */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: easing }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              {/* Offset frame behind the photo adds depth */}
              <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-brand-red/20 md:-left-6 md:-top-6" />

              <div className="group relative overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(8,9,10,0.5)]">
                <img
                  src={business.aboutImage.src}
                  srcSet={`${business.aboutImage.thumbnail} 600w, ${business.aboutImage.src} 1200w`}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  alt={business.aboutImage.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full border border-white/15 bg-brand-black/70 px-4 py-2 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    {business.address.city} Facility
                  </span>
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-6 right-4 flex items-center gap-4 rounded-2xl border-l-4 border-brand-red bg-white px-7 py-5 shadow-[0_24px_48px_-24px_rgba(8,9,10,0.45)] md:-right-6">
                <span className="text-4xl font-extrabold tracking-tight text-brand-red">10+</span>
                <span className="text-[11px] font-bold uppercase leading-tight tracking-[0.15em] text-brand-charcoal">
                  Years
                  <br />
                  Experience
                </span>
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: easing }}
            >
              <span className="eyebrow mb-5">About Our Business</span>
              <h2 className="display mb-7 text-3xl text-brand-black md:text-5xl">
                Your trusted automotive partner in {business.address.city}
              </h2>

              <p className="lede mb-8 text-lg font-light leading-relaxed text-brand-muted">
                We provide scrap car and old vehicle services across {business.serviceAreas.join(', ')}. Our
                focus is reliable service, transparent communication, and convenient support for customers
                dealing with old, damaged, unwanted or scrap vehicles.
              </p>

              <ul className="mb-10 grid gap-3.5">
                {commitments.map((commitment) => (
                  <li key={commitment} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-red/10 text-brand-red">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-[15px] leading-relaxed text-brand-charcoal">{commitment}</span>
                  </li>
                ))}
              </ul>

              <a href={telHref} aria-label={contactAria.call} className="btn btn-outline-dark mb-12 text-sm">
                <Phone className="h-4 w-4" />
                <span>{contactLabels.callLong}</span>
              </a>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map(({ icon: Icon, title, description }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: easing }}
                  className="group surface-light rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-red/25 hover:shadow-[0_24px_48px_-24px_rgba(225,29,46,0.3)]"
                >
                  <span className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-brand-red/10 text-brand-red transition-colors duration-300 group-hover:bg-brand-red group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mb-2 text-base font-bold tracking-tight text-brand-black">{title}</h3>
                  <p className="text-sm leading-relaxed text-brand-muted">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
