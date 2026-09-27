import { MapPin, Phone, MessageCircle } from 'lucide-react';
import Seo from '../seo/Seo';
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  organizationSchema,
  serviceSchema,
  webPageSchema
} from '../seo/schema';
import type { LocationPageData } from '../content/locations';
import Breadcrumbs from '../components/Breadcrumbs';
import FaqList from '../components/FaqList';
import LandingHero from '../components/landing/LandingHero';
import ContentSections from '../components/landing/ContentSections';
import RelatedLinks from '../components/landing/RelatedLinks';
import CtaBand from '../components/landing/CtaBand';
import { telHref, whatsappHref, contactLabels, contactAria, externalLinkProps } from '../utils/contact';

export default function LocationPage({ page }: { page: LocationPageData }) {
  const path = `/${page.slug}`;
  const trail = [
    { name: 'Home', path: '/' },
    { name: page.h1, path }
  ];

  return (
    <main className="bg-brand-offwhite text-brand-black">
      <Seo
        title={page.metaTitle}
        description={page.metaDescription}
        path={path}
        preloadImage={{ src: page.heroImage.src, srcSet: page.heroImage.srcSet, sizes: '100vw' }}
        schema={[
          organizationSchema(),
          localBusinessSchema(),
          webPageSchema(path, page.metaTitle, page.metaDescription),
          serviceSchema({
            path,
            name: page.h1,
            serviceType: 'Scrap car buying and vehicle scrapping',
            description: page.metaDescription,
            area: [page.area]
          }),
          faqSchema(path, page.faqs),
          breadcrumbSchema(path, trail)
        ]}
      />

      <Breadcrumbs trail={trail} />
      <LandingHero eyebrow={page.eyebrow} title={page.h1} subtitle={page.heroSubtitle} image={page.heroImage} />

      {/* Intro */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <img
              src={page.featuredImage.src}
              srcSet={page.featuredImage.srcSet}
              sizes="(max-width: 1024px) 100vw, 40vw"
              width={page.featuredImage.width}
              height={page.featuredImage.height}
              alt={page.featuredImage.alt}
              title={page.featuredImage.title}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl"
            />
          </div>
          <div className="lg:col-span-7">
            <h2 className="mb-6 text-2xl font-extrabold leading-tight tracking-tight md:text-4xl">{page.intro.heading}</h2>
            {page.intro.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mb-5 text-base font-light leading-relaxed text-brand-muted md:text-lg">
                {paragraph}
              </p>
            ))}
            <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-gray-200/80 bg-brand-offwhite p-6 sm:flex-row">
              <p className="text-sm font-semibold text-brand-charcoal">
                Have a scrap car in {page.name}? Get a free quote in minutes.
              </p>
              <div className="flex w-full gap-3 sm:w-auto">
                <a href={telHref} aria-label={contactAria.call} className="btn btn-primary flex-1 !px-5 !py-3 text-sm">
                  <Phone className="h-4 w-4" />
                  <span>{contactLabels.call}</span>
                </a>
                <a href={whatsappHref} {...externalLinkProps} aria-label={contactAria.whatsapp} className="btn btn-whatsapp flex-1 !px-5 !py-3 text-sm">
                  <MessageCircle className="h-4 w-4" />
                  <span>{contactLabels.whatsapp}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContentSections sections={page.sections} />

      {/* Coverage */}
      <section className="bg-brand-charcoal py-16 text-white md:py-20">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="mb-5 text-2xl font-extrabold tracking-tight md:text-4xl">{page.coverage.heading}</h2>
          <p className="mb-8 max-w-3xl text-base font-light leading-relaxed text-brand-subtle md:text-lg">{page.coverage.text}</p>
          <ul className="flex flex-wrap gap-2.5">
            {page.coverage.places.map((place) => (
              <li
                key={place}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-white/85"
              >
                <MapPin className="h-3.5 w-3.5 text-brand-red" aria-hidden="true" />
                Scrap car pickup in {place}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-100 bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="mb-10 text-center text-2xl font-extrabold tracking-tight md:text-4xl">
            Scrap car FAQs for {page.name}
          </h2>
          <FaqList faqs={page.faqs} idPrefix={page.slug} />
        </div>
      </section>

      <RelatedLinks currentSlug={page.slug} />

      <CtaBand
        heading={`Ready to scrap your car in ${page.name}?`}
        text="Get a transparent quote, free doorstep pickup and RC cancellation support. One tap connects you to our team."
      />
    </main>
  );
}
