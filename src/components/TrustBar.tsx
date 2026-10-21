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
 * Continuous marquee strip with clean light styling bridging the hero and about section.
 */
export default function TrustBar() {
  return (
    <div className="marquee relative overflow-hidden border-y border-[#E5E7EB] bg-[#F9FAFB] py-4">
      {/* Edge gradient masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#F9FAFB] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#F9FAFB] to-transparent" />

      <div className="marquee-track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {promises.map((promise) => (
              <span key={`${copy}-${promise}`} className="flex items-center gap-3 px-8">
                <Sparkles className="h-4 w-4 shrink-0 text-[#087A45]" />
                <span className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.18em] text-[#101C32]">
                  {promise}
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>

      <ul className="sr-only">
        {promises.map((promise) => (
          <li key={promise}>{promise}</li>
        ))}
      </ul>
    </div>
  );
}
