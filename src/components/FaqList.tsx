import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '../content/faqs';

/**
 * Light-theme FAQ accordion for landing pages. Answers stay in the DOM when
 * collapsed (hidden via the `hidden` attribute) so the prerendered HTML carries
 * every answer the FAQPage schema describes.
 */
export default function FaqList({ faqs, idPrefix }: { faqs: FaqItem[]; idPrefix: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const panelId = `${idPrefix}-faq-${index}`;
        return (
          <div key={faq.question} className="overflow-hidden rounded-2xl border border-gray-200 bg-brand-offwhite/50">
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 p-6 text-left text-base font-bold text-brand-black transition-colors hover:text-brand-red focus:outline-none focus-visible:text-brand-red md:text-lg"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-brand-red transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div id={panelId} hidden={!isOpen}>
              <p className="border-t border-gray-200/60 px-6 pb-6 pt-4 text-sm font-light leading-relaxed text-brand-muted md:text-base">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
