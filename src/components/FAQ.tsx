import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, MessageCircle } from 'lucide-react';
import { homeFaqs as faqs } from '../content/faqs';
import { whatsappHref, contactLabels, contactAria, externalLinkProps } from '../utils/contact';

const easing = [0.16, 1, 0.3, 1] as const;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-[#F9FAFB] py-20 md:py-28 border-t border-[#E5E7EB]">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          {/* Sticky intro column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: easing }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <span className="eyebrow mb-4">Common Questions</span>
            <h2 className="display mb-4 text-3xl md:text-4xl lg:text-[42px]">
              Scrap Car Questions, Answered
            </h2>
            <p className="lede mb-8 text-base sm:text-lg leading-relaxed text-[#667085]">
              Prices, documents, RC cancellation and pickup — the questions vehicle owners ask us most.
              Still unsure? Send us your vehicle details on WhatsApp and we will answer directly.
            </p>

            <a
              href={whatsappHref}
              {...externalLinkProps}
              aria-label={contactAria.whatsapp}
              className="btn btn-primary !py-3.5 !px-6 rounded-xl font-bold inline-flex items-center gap-2 shadow-sm"
            >
              <MessageCircle className="h-5 w-5" />
              <span>{contactLabels.whatsappLong}</span>
            </a>
          </motion.div>

          {/* Accordion List */}
          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: index * 0.04, ease: easing }}
                  className="rounded-2xl border border-[#E5E7EB] bg-white transition-all duration-200 shadow-xs"
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors duration-200 hover:text-[#087A45] focus:outline-none focus-visible:text-[#087A45]"
                    >
                      <span className="text-base sm:text-lg font-bold text-[#101C32]">
                        {faq.question}
                      </span>
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? 'rotate-45 bg-[#087A45] text-white'
                            : 'bg-[#EAF8EF] text-[#087A45]'
                        }`}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>

                  <motion.div
                    id={`faq-panel-${index}`}
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: easing }}
                    aria-hidden={!isOpen}
                    className="overflow-hidden"
                  >
                    <p className="px-5 sm:px-6 pb-6 text-sm sm:text-[15px] leading-relaxed text-[#667085]">
                      {faq.answer}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
