import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, MessageCircle } from 'lucide-react';
import { homeFaqs as faqs } from '../content/faqs';
import { whatsappHref, contactLabels, contactAria, externalLinkProps } from '../utils/contact';

const easing = [0.16, 1, 0.3, 1] as const;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="hairline-top relative overflow-hidden bg-brand-charcoal py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-brand-red/[0.08] blur-[130px]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          {/* Sticky intro column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: easing }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="eyebrow mb-5">Common Questions</span>
            <h2 className="display mb-6 text-3xl md:text-5xl">Scrap car questions, answered</h2>
            <p className="lede mb-9 text-lg font-light leading-relaxed text-brand-subtle">
              Prices, documents, RC cancellation and pickup — the questions car owners ask us most. Still unsure? Send us your vehicle details and we will answer directly.
            </p>

            <a
              href={whatsappHref}
              {...externalLinkProps}
              aria-label={contactAria.whatsapp}
              className="btn btn-whatsapp"
            >
              <MessageCircle className="h-5 w-5" />
              <span>{contactLabels.whatsappLong}</span>
            </a>
          </motion.div>

          {/* Accordion */}
          <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: easing }}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-300 hover:text-brand-red focus:outline-none focus-visible:text-brand-red"
                    >
                      <span className="text-base font-bold tracking-tight md:text-lg">{faq.question}</span>
                      <span
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? 'rotate-45 border-brand-red bg-brand-red text-white'
                            : 'border-white/12 bg-white/[0.04] text-white/60'
                        }`}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>

                  {/* Answers stay in the DOM (collapsed to zero height) so crawlers and the
                      FAQPage schema see the same text. */}
                  <motion.div
                    id={`faq-panel-${index}`}
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: easing }}
                    aria-hidden={!isOpen}
                    className="overflow-hidden"
                  >
                    <p className="max-w-2xl pb-7 pr-12 text-[15px] font-light leading-relaxed text-brand-muted">
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
