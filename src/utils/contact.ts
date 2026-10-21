import { business } from '../config/business';

/**
 * Single source of truth for every contact action on the site.
 *
 * Buttons never spell the number out — they read "Call Now" / "WhatsApp" and
 * carry it only inside the `tel:` / `wa.me` target, so a tap opens the dialer
 * or chat. Use the labels below instead of interpolating digits into markup.
 *
 * `phoneDisplay` is the single sanctioned exception, for the footer's contact
 * details block where a business would normally list the number in full.
 */

const fullAddress =
  business.address.formatted || `${business.address.line1}, ${business.address.city}, ${business.address.state}`;

export const telHref = `tel:${business.phoneTel}`;

/** Formatted number — footer contact details only, never on a button. */
export const phoneDisplay = business.phoneDisplay;

export const whatsappHref = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
  `Hi ${business.name}, I'd like a quote for scrapping my vehicle.`
)}`;

export const directionsHref =
  business.location.directionsUrl ||
  `https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`;

export const mapEmbedSrc = business.location.mapsUrl.includes('embed')
  ? business.location.mapsUrl
  : `https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

/** Visible copy for contact buttons — no digits, ever. */
export const contactLabels = {
  call: 'Call Now',
  callLong: 'Call Us Now',
  whatsapp: 'WhatsApp',
  whatsappLong: 'Chat on WhatsApp',
  directions: 'Get Directions'
} as const;

/** Accessible names that stay number-free for screen readers too. */
export const contactAria = {
  call: `Call ${business.name}`,
  whatsapp: `Chat with ${business.name} on WhatsApp`,
  directions: `Get directions to ${business.name}`
} as const;

/** Props spread onto any external link so we never forget rel/target. */
export const externalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer'
} as const;

export { fullAddress };
