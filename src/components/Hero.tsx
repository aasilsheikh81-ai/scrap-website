import { motion } from 'framer-motion';
import {
  Phone,
  MapPin,
  MessageCircle,
  Truck,
  Tag,
  FileCheck2,
  Recycle,
  Clock,
  Car,
  Users
} from 'lucide-react';
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

const benefits = [
  {
    icon: Truck,
    title: 'Free Pickup',
    subtitle: 'At your location',
    bgColor: 'bg-[#EAF8EF]',
    iconColor: 'text-[#087A45]'
  },
  {
    icon: Tag,
    title: 'Transparent Price',
    subtitle: 'Instant payment',
    bgColor: 'bg-[#FFF3E5]',
    iconColor: 'text-[#FF8717]'
  },
  {
    icon: FileCheck2,
    title: 'RC Cancellation',
    subtitle: 'Handled for you',
    bgColor: 'bg-[#EBF5FF]',
    iconColor: 'text-[#0066CC]'
  }
];

const stats = [
  {
    icon: Car,
    value: '5000+',
    label: 'Vehicles Scrapped',
    color: 'text-[#FF8717]'
  },
  {
    icon: Users,
    value: '1000+',
    label: 'Happy Customers',
    color: 'text-[#087A45]'
  },
  {
    icon: MapPin,
    value: '4+',
    label: 'States Covered',
    color: 'text-[#FF8717]'
  }
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-6 pb-0 lg:pt-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8 pb-12 lg:pb-16">
          {/* Left Column */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easing }}
          >
            {/* Service coverage badge */}
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#FF8717]/30 bg-[#FFF3E5] px-3.5 py-1.5 shadow-xs">
              <MapPin className="h-4 w-4 text-[#FF8717] fill-[#FF8717]/20 shrink-0" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF8717]">
                Serving Dehradun, Uttarakhand, Punjab, NCR &amp; Saharanpur
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="display text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] leading-[1.12] mb-5">
              <span className="text-[#101C32]">Scrap Car Buyer &amp;</span>
              <br />
              <span className="text-[#087A45]">Vehicle Scrapping Service</span>
            </h1>

            {/* Description */}
            <p className="lede mb-8 max-w-xl text-base sm:text-lg leading-relaxed text-[#667085]">
              We buy old, damaged and end-of-life vehicles across Dehradun, Uttarakhand, Punjab, Delhi NCR
              and Saharanpur — free pickup, a transparent price paid on handover, and RC cancellation
              handled end to end.
            </p>

            {/* 3 Benefits */}
            <div className="mb-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div key={b.title} className="flex items-center gap-3">
                    <span
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${b.bgColor} ${b.iconColor}`}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h2 className="text-sm font-bold text-[#101C32] leading-tight">{b.title}</h2>
                      <p className="text-xs text-[#667085] mt-0.5">{b.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 3 CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              {/* Call Now - Green Filled */}
              <a
                href={telHref}
                aria-label={contactAria.call}
                className="btn btn-primary !py-3.5 !px-6 rounded-xl text-base font-bold shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <Phone className="h-4 w-4 fill-white" />
                <span>{contactLabels.call}</span>
              </a>

              {/* WhatsApp - Light Green / White with Green text */}
              <a
                href={whatsappHref}
                {...externalLinkProps}
                aria-label={contactAria.whatsapp}
                className="btn btn-whatsapp !py-3.5 !px-6 rounded-xl text-base font-bold flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5 text-[#25D366] fill-[#25D366]/20" />
                <span>{contactLabels.whatsapp}</span>
              </a>

              {/* Get Directions - White Outlined */}
              <a
                href={directionsHref}
                {...externalLinkProps}
                aria-label={contactAria.directions}
                className="btn btn-outline !py-3.5 !px-6 rounded-xl text-base font-bold flex items-center gap-2"
              >
                <MapPin className="h-4 w-4 text-[#101C32]" />
                <span>{contactLabels.directions}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Vehicle Scrapping Photography with organic curve & floating cards */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: easing }}
          >
            {/* Organic soft green background backdrop */}
            <div className="absolute -top-6 -right-6 -bottom-6 left-6 rounded-[2.5rem] bg-[#EAF8EF] -z-10 overflow-hidden">
              <div className="absolute top-4 left-6 h-24 w-24 bg-dot-pattern-green opacity-40" />
            </div>

            {/* Main Vehicle Scrapping Image */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl border-4 border-white aspect-[4/3] sm:aspect-[16/11] bg-gray-100">
              <img
                src={business.heroImage.src}
                srcSet={business.heroImage.srcSet}
                sizes="(max-width: 1024px) 100vw, 45vw"
                width={business.heroImage.width}
                height={business.heroImage.height}
                alt={business.heroImage.alt}
                title={business.heroImage.title}
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101C32]/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Top Right Floating Card: Eco-Friendly Vehicle Disposal */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -top-4 -right-2 sm:-right-4 z-20 flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-lg border border-[#E5E7EB] max-w-[240px]"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#EAF8EF] text-[#087A45]">
                <Recycle className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold text-[#101C32] leading-tight">Eco-Friendly Vehicle Disposal</p>
                <p className="text-[11px] text-[#667085] mt-0.5">Help keep our cities clean and green.</p>
              </div>
            </motion.div>

            {/* Bottom Right Floating Card: Operating Hours */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-4 right-2 sm:right-4 z-20 flex items-center gap-3 rounded-2xl bg-[#075D37] text-white p-3.5 px-4 shadow-xl border border-white/20"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/15 text-[#FF8717]">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#FF8717]">Open for pickups</p>
                <p className="text-xs font-bold text-white mt-0.5">{business.hours}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Strip matching the reference mockup */}
        <div className="border-t border-[#E5E7EB] py-6 sm:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 items-center divide-y sm:divide-y-0 sm:divide-x divide-[#E5E7EB]">
            {stats.map((s, index) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className={`flex items-center gap-4 ${index > 0 ? 'pt-4 sm:pt-0 sm:pl-8' : ''}`}
                >
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB] ${s.color}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-[#101C32] tracking-tight">
                      {s.value}
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-[#667085]">{s.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
