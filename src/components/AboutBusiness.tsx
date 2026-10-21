import { motion } from 'framer-motion';
import { ShieldCheck, Target, Users, Check, Phone, MapPin } from 'lucide-react';
import { business } from '../config/business';
import { photos } from '../config/images';
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
  'RC cancellation, deregistration and RTO paperwork guided end to end',
  'Environmentally responsible depollution and recycling'
];

export default function AboutBusiness() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Imagery: Authentic AutoScrape Pro Workshop Photos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: easing }}
            className="w-full lg:w-1/2"
          >
            <div className="relative mx-auto max-w-lg">
              {/* Main Photo 1: Business Signboard & Workshop Entrance */}
              <div className="relative overflow-hidden rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] shadow-xl">
                <img
                  src={photos.workshopSignboard.src}
                  srcSet={photos.workshopSignboard.srcSet}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  width={photos.workshopSignboard.width}
                  height={photos.workshopSignboard.height}
                  alt={photos.workshopSignboard.alt}
                  title={photos.workshopSignboard.title}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-102"
                  style={{ objectPosition: 'center 25%' }}
                />

                {/* Badge identifying the real location */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-white/95 p-3 shadow-md backdrop-blur-md border border-[#E5E7EB]">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-xl bg-[#EAF8EF] text-[#087A45]">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-[#101C32]">AutoScrape Pro Workshop</p>
                      <p className="text-[11px] text-[#667085]">Banshiwala Jaajra, Dehradun</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EAF8EF] px-2.5 py-1 text-[10px] font-bold text-[#087A45]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#087A45] animate-pulse" />
                    Verified Facility
                  </span>
                </div>
              </div>

              {/* Inset Photo 2: Workshop Interior */}
              <div className="absolute -bottom-8 -right-4 hidden sm:block w-48 rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-white">
                <img
                  src={photos.workshopInterior.src}
                  srcSet={photos.workshopInterior.srcSet}
                  sizes="200px"
                  width={photos.workshopInterior.width}
                  height={photos.workshopInterior.height}
                  alt={photos.workshopInterior.alt}
                  title={photos.workshopInterior.title}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/4] w-full object-cover"
                  style={{ objectPosition: 'center 45%' }}
                />
                <div className="p-2 bg-white text-center">
                  <p className="text-[10px] font-bold text-[#101C32]">Salvage &amp; Parts Workshop</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Copy Column */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: easing }}
            >
              <span className="eyebrow mb-4">About Our Business</span>
              <h2 className="display mb-5 text-3xl md:text-4xl lg:text-[42px]">
                A scrap car buyer you can trust, based in {business.address.city}
              </h2>

              <p className="lede mb-4 text-base sm:text-lg leading-relaxed text-[#667085]">
                {business.name} buys scrap, old, damaged and end-of-life vehicles across Punjab, Delhi
                NCR, Uttarakhand and {business.address.city}. We make old car disposal simple: a clear price,
                free doorstep collection, payment on handover and RC cancellation guided with the RTO.
              </p>
              <p className="mb-6 text-sm sm:text-base leading-relaxed text-[#667085]">
                Every vehicle is depolluted before dismantling, usable parts are salvaged, and the remaining
                metal goes for car recycling — responsible vehicle scrapping in line with India’s Vehicle
                Scrapping Policy, so your car is legally off your name and out of the environment.
              </p>

              <ul className="mb-8 grid gap-3">
                {commitments.map((commitment) => (
                  <li key={commitment} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#EAF8EF] text-[#087A45]">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-sm sm:text-[15px] font-medium text-[#101C32]">{commitment}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-10">
                <a
                  href={telHref}
                  aria-label={contactAria.call}
                  className="btn btn-primary text-sm !py-3 !px-6 rounded-xl font-bold inline-flex items-center gap-2"
                >
                  <Phone className="h-4 w-4 fill-white" />
                  <span>{contactLabels.callLong}</span>
                </a>
              </div>
            </motion.div>

            {/* 3 Highlight Cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map(({ icon: Icon, title, description }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: easing }}
                  className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-5 transition-all duration-300 hover:border-[#087A45]/30 hover:bg-[#EAF8EF]/40 hover:shadow-sm"
                >
                  <span className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-white text-[#087A45] shadow-xs border border-[#E5E7EB]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mb-1.5 text-sm font-bold text-[#101C32]">{title}</h3>
                  <p className="text-xs leading-relaxed text-[#667085]">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
