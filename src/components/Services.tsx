import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileCheck2, BadgeIndianRupee, Recycle, ArrowUpRight, Cog, Truck } from 'lucide-react';
import { servicePages } from '../content/services';
import { serviceImages } from '../config/images';

const serviceIcons = [Truck, Recycle, Recycle, BadgeIndianRupee, FileCheck2, Cog];
const easing = [0.16, 1, 0.3, 1] as const;

// Each card links to its own service page; used auto parts has no page, so it points to contact.
const services = [
  ...servicePages.map((page) => ({
    title: page.navLabel,
    description: page.summary,
    image: page.image,
    href: `/${page.slug}`,
    linkLabel: `Learn about ${page.navLabel.toLowerCase()}`
  })),
  {
    title: 'Used Auto Parts',
    description: 'Quality-inspected salvage parts — engines, gearboxes and body panels — recovered during vehicle dismantling.',
    image: serviceImages.autoParts,
    href: '/#contact',
    linkLabel: 'Enquire about parts'
  }
];

export default function Services() {
  return (
    <section id="services" className="hairline-top relative overflow-hidden bg-brand-charcoal py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-black via-brand-charcoal to-brand-charcoal" />
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-brand-red/[0.07] blur-[130px]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: easing }}
          >
            <span className="eyebrow mb-5">Our Expertise</span>
            <h2 className="display mb-6 text-3xl md:text-5xl">Vehicle scrapping services</h2>
            <p className="lede max-w-xl text-lg font-light leading-relaxed text-brand-subtle">
              From free scrap car pickup to ELV scrapping, car recycling and RC cancellation — every job
              runs through a process that is efficient, environmentally sound and fully documented.
            </p>
          </motion.div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: easing }}
            className="group hidden shrink-0 items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-brand-red hover:bg-brand-red md:flex"
          >
            Request a Quote
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.07, ease: easing }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.07] bg-brand-surface/70 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-brand-red/40 hover:shadow-[0_32px_64px_-32px_rgba(0,0,0,0.9)]"
              >
                {/* Red wash that fades in on hover */}
                <span className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-brand-red/[0.09] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-charcoal">
                  <img
                    src={service.image.src}
                    srcSet={service.image.srcSet}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    width={service.image.width}
                    height={service.image.height}
                    alt={service.image.alt}
                    title={service.image.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-brand-surface/25 to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full border border-white/12 bg-brand-black/70 px-3 py-1 font-mono text-[10px] font-bold tracking-[0.15em] text-white/60 backdrop-blur-md">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-brand-black/75 text-brand-red shadow-lg backdrop-blur-md transition-all duration-500 group-hover:bg-brand-red group-hover:text-white group-hover:rotate-[-6deg]">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>

                <div className="relative z-30 flex flex-1 flex-col p-7">
                  <h3 className="mb-3 text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-brand-red">
                    {service.title}
                  </h3>
                  <p className="mb-6 flex-1 text-sm font-light leading-relaxed text-brand-muted">
                    {service.description}
                  </p>
                  <Link
                    to={service.href}
                    className="inline-flex w-fit items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-white/60 transition-colors duration-300 hover:text-brand-red focus:outline-none focus-visible:text-brand-red after:absolute after:inset-0 after:z-40 after:content-['']"
                  >
                    {service.linkLabel}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
