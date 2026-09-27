import { Check } from 'lucide-react';
import type { ContentSection } from '../../content/faqs';

/**
 * Long-form body copy for landing pages: each section is an H2 with optional
 * paragraphs, an H3 card grid and a checklist. Sections alternate background
 * so long pages stay scannable.
 */
export default function ContentSections({ sections }: { sections: ContentSection[] }) {
  return (
    <>
      {sections.map((section, index) => (
        <section
          key={section.heading}
          className={`border-t border-gray-100 py-16 md:py-20 ${index % 2 === 0 ? 'bg-brand-offwhite' : 'bg-white'}`}
        >
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-brand-black md:text-4xl">{section.heading}</h2>

            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mb-5 max-w-3xl text-base font-light leading-relaxed text-brand-muted md:text-lg">
                {paragraph}
              </p>
            ))}

            {section.subsections && (
              <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
                {section.subsections.map((sub) => (
                  <div key={sub.heading} className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm">
                    <h3 className="mb-2 text-lg font-bold tracking-tight text-brand-black">{sub.heading}</h3>
                    <p className="text-sm font-light leading-relaxed text-brand-muted md:text-[15px]">{sub.text}</p>
                  </div>
                ))}
              </div>
            )}

            {section.bullets && (
              <ul className="mt-6 grid max-w-3xl gap-3">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-red/10 text-brand-red">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-[15px] leading-relaxed text-brand-charcoal">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}
    </>
  );
}
