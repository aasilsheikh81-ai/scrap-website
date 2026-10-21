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
    <section id="services" className="relative overflow-hidden bg-[#EAF8EF]/60 py-20 md:py-28 border-y border-[#E5E7EB]">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: easing }}
          >
            <span className="eyebrow mb-4">Our Expertise</span>
            <h2 className="display mb-4 text-3xl md:text-4xl lg:text-[42px]">
              Vehicle Scrapping Services
            </h2>
            <p className="lede max-w-xl text-base sm:text-lg leading-relaxed text-[#667085]">
              From free scrap car pickup to ELV scrapping, car recycling and RC cancellation — every job
              runs through a process that is efficient, environmentally sound and fully documented.
            </p>
          </motion.div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: easing }}
            className="btn btn-primary hidden md:inline-flex !py-3 !px-6 rounded-xl text-sm font-bold shadow-sm"
          >
            <span>Request a Quote</span>
            <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: easing }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-[#087A45]/30"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
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
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Index badge */}
                  <span className="absolute left-4 top-4 rounded-lg bg-white/90 px-2.5 py-1 font-mono text-[11px] font-bold tracking-wider text-[#101C32] backdrop-blur-xs shadow-xs">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Icon badge */}
                  <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-xl bg-white text-[#087A45] shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2.5 text-lg font-bold tracking-tight text-[#101C32] transition-colors duration-200 group-hover:text-[#087A45]">
                    {service.title}
                  </h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-[#667085]">
                    {service.description}
                  </p>
                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#087A45] transition-colors hover:text-[#075D37] after:absolute after:inset-0 after:content-['']"
                  >
                    <span>{service.linkLabel}</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
