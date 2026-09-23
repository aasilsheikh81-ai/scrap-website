import { Phone, MapPin, MessageCircle } from 'lucide-react';
import {
  telHref,
  whatsappHref,
  directionsHref,
  contactLabels,
  contactAria,
  externalLinkProps
} from '../utils/contact';

const actions = [
  {
    href: telHref,
    icon: Phone,
    label: contactLabels.call,
    ariaLabel: contactAria.call,
    accent: 'text-white',
    activeBg: 'active:bg-brand-red/25',
    external: false,
    primary: true
  },
  {
    href: whatsappHref,
    icon: MessageCircle,
    label: contactLabels.whatsapp,
    ariaLabel: contactAria.whatsapp,
    accent: 'text-brand-whatsapp',
    activeBg: 'active:bg-brand-whatsapp/20',
    external: true,
    primary: false
  },
  {
    href: directionsHref,
    icon: MapPin,
    label: 'Directions',
    ariaLabel: contactAria.directions,
    accent: 'text-brand-accent',
    activeBg: 'active:bg-brand-accent/20',
    external: true,
    primary: false
  }
];

/**
 * Thumb-reachable action bar pinned to the bottom of small screens.
 * Labels stay word-only; the number lives in the href so a tap dials it.
 */
export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 lg:hidden" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="flex overflow-hidden rounded-2xl border border-white/10 bg-brand-surface/90 shadow-[0_16px_48px_rgba(0,0,0,0.75)] backdrop-blur-2xl">
        {actions.map(({ href, icon: Icon, label, ariaLabel, accent, activeBg, external, primary }, index) => (
          <a
            key={label}
            href={href}
            {...(external ? externalLinkProps : {})}
            aria-label={ariaLabel}
            className={`group relative flex flex-1 flex-col items-center justify-center gap-1 py-3.5 text-white transition-colors duration-300 focus:outline-none focus-visible:bg-white/10 ${activeBg} ${
              primary ? 'bg-brand-red/90' : 'hover:bg-white/5'
            } ${index > 0 ? 'border-l border-white/10' : ''}`}
          >
            <Icon className={`h-5 w-5 ${primary ? 'text-white' : accent}`} />
            <span className="text-[10px] font-bold uppercase tracking-[0.12em]">{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
