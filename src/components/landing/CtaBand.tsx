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
    <section className="relative overflow-hidden border-t border-[#E5E7EB] bg-[#EAF8EF]/60 py-16 text-[#101C32] md:py-20">
      <div className="container relative z-10 mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#101C32] md:text-4xl">{heading}</h2>
        <p className="mx-auto mb-8 max-w-xl text-base sm:text-lg leading-relaxed text-[#667085]">{text}</p>

        <div className="flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <a
            href={telHref}
            aria-label={contactAria.call}
            className="btn btn-primary w-full sm:w-auto !py-3 !px-6 rounded-xl font-bold flex items-center justify-center gap-2 shadow-sm"
          >
            <Phone className="h-4 w-4 fill-white" />
            <span>{contactLabels.call}</span>
          </a>
          <a
            href={whatsappHref}
            {...externalLinkProps}
            aria-label={contactAria.whatsapp}
            className="btn btn-whatsapp w-full sm:w-auto !py-3 !px-6 rounded-xl font-bold flex items-center justify-center gap-2"
          >
            <MessageCircle className="h-5 w-5 text-[#25D366] fill-[#25D366]/20" />
            <span>{contactLabels.whatsapp}</span>
          </a>
          <a
            href={directionsHref}
            {...externalLinkProps}
            aria-label={contactAria.directions}
            className="btn btn-outline w-full sm:w-auto !py-3 !px-6 rounded-xl font-bold flex items-center justify-center gap-2"
          >
            <Navigation className="h-4 w-4 text-[#101C32]" />
            <span>{contactLabels.directions}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
