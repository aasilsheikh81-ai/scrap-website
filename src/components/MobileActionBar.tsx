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
    activeBg: 'active:bg-[#075D37]',
    bg: 'bg-[#087A45] text-white shadow-sm',
    external: false,
    primary: true
  },
  {
    href: whatsappHref,
    icon: MessageCircle,
    label: contactLabels.whatsapp,
    ariaLabel: contactAria.whatsapp,
    accent: 'text-[#25D366]',
    activeBg: 'active:bg-[#EAF8EF]',
    bg: 'bg-white text-[#101C32] hover:bg-gray-50',
    external: true,
    primary: false
  },
  {
    href: directionsHref,
    icon: MapPin,
    label: 'Directions',
    ariaLabel: contactAria.directions,
    accent: 'text-[#FF8717]',
    activeBg: 'active:bg-[#FFF3E5]',
    bg: 'bg-white text-[#101C32] hover:bg-gray-50',
    external: true,
    primary: false
  }
];

/**
 * Thumb-reachable action bar pinned to the bottom of small screens in the new light theme.
 */
export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 lg:hidden" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="flex overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white/95 shadow-xl backdrop-blur-md">
        {actions.map(({ href, icon: Icon, label, ariaLabel, accent, activeBg, bg, external, primary }, index) => (
          <a
            key={label}
            href={href}
            {...(external ? externalLinkProps : {})}
            aria-label={ariaLabel}
            className={`group relative flex flex-1 flex-col items-center justify-center gap-1 py-3 text-center transition-colors duration-200 focus:outline-none ${bg} ${activeBg} ${
              index > 0 ? 'border-l border-[#E5E7EB]' : ''
            }`}
          >
            <Icon className={`h-5 w-5 ${primary ? 'text-white fill-white' : accent}`} />
            <span className={`text-[11px] font-bold tracking-tight ${primary ? 'text-white' : 'text-[#101C32]'}`}>
              {label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
