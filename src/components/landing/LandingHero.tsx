import { Phone, MessageCircle, Truck, FileCheck2, ShieldCheck } from 'lucide-react';
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

/** Hero for location and service landing pages. The photo is the LCP element, so it loads eagerly. */
export default function LandingHero({ eyebrow, title, subtitle, image }: LandingHeroProps) {
  return (
    <section className="relative flex min-h-[480px] items-center overflow-hidden bg-brand-black py-20 text-white md:py-28">
      <div className="absolute inset-0 z-0">
        <img
          src={image.src}
          srcSet={image.srcSet}
          sizes="100vw"
          width={image.width}
          height={image.height}
          alt={image.alt}
          title={image.title}
          loading="eager"
          fetchPriority="high"
          className="h-full w-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/85 to-brand-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/70" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
            <span className="live-dot" />
            {eyebrow}
          </p>

          <h1 className="mb-6 text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl md:text-6xl">{title}</h1>

          <p className="mb-8 max-w-2xl text-lg font-light leading-relaxed text-brand-subtle md:text-xl">{subtitle}</p>

          <div className="flex flex-wrap gap-4">
            <a href={telHref} aria-label={contactAria.call} className="btn btn-primary">
              <Phone className="h-5 w-5" />
              <span>{contactLabels.call}</span>
            </a>
            <a href={whatsappHref} {...externalLinkProps} aria-label={contactAria.whatsapp} className="btn btn-whatsapp">
              <MessageCircle className="h-5 w-5" />
              <span>{contactLabels.whatsapp}</span>
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {assurances.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-sm font-medium text-white/75">
                <Icon className="h-4 w-4 text-brand-accent" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
