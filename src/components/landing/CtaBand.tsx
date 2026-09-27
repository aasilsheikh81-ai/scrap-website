import { Phone, MessageCircle, Navigation } from 'lucide-react';
import {
  telHref,
  whatsappHref,
  directionsHref,
  contactLabels,
  contactAria,
  externalLinkProps
} from '../../utils/contact';

export default function CtaBand({ heading, text }: { heading: string; text: string }) {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-brand-black py-20 text-white md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="container relative z-10 mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="mb-5 text-3xl font-extrabold tracking-tight md:text-5xl">{heading}</h2>
        <p className="mx-auto mb-10 max-w-xl text-lg font-light leading-relaxed text-brand-muted">{text}</p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={telHref} aria-label={contactAria.call} className="btn btn-primary w-full sm:w-auto">
            <Phone className="h-5 w-5" />
            <span>{contactLabels.call}</span>
          </a>
          <a href={whatsappHref} {...externalLinkProps} aria-label={contactAria.whatsapp} className="btn btn-whatsapp w-full sm:w-auto">
            <MessageCircle className="h-5 w-5" />
            <span>{contactLabels.whatsapp}</span>
          </a>
          <a href={directionsHref} {...externalLinkProps} aria-label={contactAria.directions} className="btn btn-ghost w-full sm:w-auto">
            <Navigation className="h-5 w-5" />
            <span>{contactLabels.directions}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
