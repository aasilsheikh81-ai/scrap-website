import { Sparkles } from 'lucide-react';

const promises = [
  'Free Vehicle Pickup',
  'Transparent Valuation',
  'RTO Paperwork Handled',
  'Certified Eco Disposal',
  'No Hidden Deductions',
  'Any Condition Accepted',
  'Salvage Parts Available',
  'Doorstep Collection'
];

/**
 * Continuous marquee strip that bridges the hero and the about section.
 * Duplicated track + 50% translate keeps the loop seamless.
 */
export default function TrustBar() {
  return (
    <div className="marquee relative overflow-hidden border-y border-white/[0.07] bg-brand-charcoal py-5">
      {/* Fade the strip into the background at both edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-brand-charcoal to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-brand-charcoal to-transparent" />

      <div className="marquee-track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {promises.map((promise) => (
              <span key={`${copy}-${promise}`} className="flex items-center gap-4 px-7">
                <Sparkles className="h-3.5 w-3.5 shrink-0 text-brand-red" />
                <span className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                  {promise}
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Screen readers get the list once, without the duplicated marquee copy */}
      <ul className="sr-only">
        {promises.map((promise) => (
          <li key={promise}>{promise}</li>
        ))}
      </ul>
    </div>
  );
}
