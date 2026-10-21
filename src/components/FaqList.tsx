import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '../content/faqs';

/**
 * Clean light-theme FAQ accordion for landing pages.
 */
export default function FaqList({ faqs, idPrefix }: { faqs: FaqItem[]; idPrefix: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3.5">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const panelId = `${idPrefix}-faq-${index}`;
        return (
          <div key={faq.question} className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-xs">
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left text-base font-bold text-[#101C32] transition-colors hover:text-[#087A45] focus:outline-none focus-visible:text-[#087A45] md:text-lg"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[#087A45] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div id={panelId} hidden={!isOpen}>
              <p className="border-t border-[#E5E7EB] px-5 sm:px-6 pb-6 pt-4 text-sm leading-relaxed text-[#667085] md:text-base">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
