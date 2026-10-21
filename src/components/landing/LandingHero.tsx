import { Phone, MessageCircle, Truck, FileCheck2, ShieldCheck, MapPin } from 'lucide-react';
import type { ImageAsset } from '../../config/images';
import { telHref, whatsappHref, contactLabels, contactAria, externalLinkProps } from '../../utils/contact';

const assurances = [
  { icon: Truck, label: 'Free Scrap Car Pickup' },
  { icon: FileCheck2, label: 'RC Cancellation Support' },
  { icon: ShieldCheck, label: 'Transparent Valuation' }
];

interface LandingHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: ImageAsset;
}

/** Hero for location and service landing pages in the new light theme. */
export default function LandingHero({ eyebrow, title, subtitle, image }: LandingHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16 border-b border-[#E5E7EB]">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Text */}
          <div className="lg:col-span-7">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#087A45]/20 bg-[#EAF8EF] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#087A45]">
              <span className="h-2 w-2 rounded-full bg-[#087A45] animate-pulse" />
              {eyebrow}
            </div>

            <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#101C32] leading-[1.15]">
              {title}
            </h1>

            <p className="mb-8 max-w-2xl text-base sm:text-lg leading-relaxed text-[#667085]">
              {subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a href={telHref} aria-label={contactAria.call} className="btn btn-primary !py-3 !px-6 rounded-xl font-bold flex items-center gap-2 shadow-sm">
                <Phone className="h-4 w-4 fill-white" />
                <span>{contactLabels.call}</span>
              </a>
              <a href={whatsappHref} {...externalLinkProps} aria-label={contactAria.whatsapp} className="btn btn-whatsapp !py-3 !px-6 rounded-xl font-bold flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-[#25D366] fill-[#25D366]/20" />
                <span>{contactLabels.whatsapp}</span>
              </a>
            </div>

            <ul className="flex flex-wrap gap-x-6 gap-y-2.5 pt-4 border-t border-[#E5E7EB]">
              {assurances.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#101C32]">
                  <Icon className="h-4 w-4 text-[#087A45]" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-[#E5E7EB] shadow-lg bg-[#F9FAFB] aspect-[4/3] sm:aspect-[16/11]">
              <img
                src={image.src}
                srcSet={image.srcSet}
                sizes="(max-width: 1024px) 100vw, 45vw"
                width={image.width}
                height={image.height}
                alt={image.alt}
                title={image.title}
                loading="eager"
                fetchPriority="high"
                className="h-full w-full object-cover"
                style={{
                  objectPosition: image.src.includes('workshop-signboard') ? 'center 25%' : 'center'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101C32]/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 rounded-xl bg-white/95 p-2.5 backdrop-blur-xs border border-[#E5E7EB] shadow-xs">
                <MapPin className="h-4 w-4 text-[#FF8717]" />
                <span className="text-xs font-bold text-[#101C32]">{image.title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
