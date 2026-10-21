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
    <main className="bg-white text-[#667085]">
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
      <section className="bg-white py-14 md:py-20">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:px-6 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-[#E5E7EB] shadow-lg">
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
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 className="mb-5 text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight text-[#101C32]">
              {page.intro.heading}
            </h2>
            {page.intro.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mb-4 text-base leading-relaxed text-[#667085]">
                {paragraph}
              </p>
            ))}
            <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#087A45]/20 bg-[#EAF8EF] p-5 sm:flex-row">
              <p className="text-sm font-bold text-[#101C32]">
                Have a scrap car in {page.name}? Get a free quote in minutes.
              </p>
              <div className="flex w-full gap-3 sm:w-auto">
                <a href={telHref} aria-label={contactAria.call} className="btn btn-primary flex-1 !px-5 !py-2.5 text-xs font-bold rounded-xl shadow-xs">
                  <Phone className="h-4 w-4 fill-white" />
                  <span>{contactLabels.call}</span>
                </a>
                <a href={whatsappHref} {...externalLinkProps} aria-label={contactAria.whatsapp} className="btn btn-whatsapp flex-1 !px-5 !py-2.5 text-xs font-bold rounded-xl">
                  <MessageCircle className="h-4 w-4" />
                  <span>{contactLabels.whatsapp}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContentSections sections={page.sections} />

      {/* Coverage Areas */}
      <section className="bg-[#EAF8EF]/60 py-16 text-[#101C32] md:py-20 border-t border-[#E5E7EB]">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="mb-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#101C32]">
            {page.coverage.heading}
          </h2>
          <p className="mb-8 max-w-3xl text-base leading-relaxed text-[#667085]">
            {page.coverage.text}
          </p>
          <ul className="flex flex-wrap gap-2.5">
            {page.coverage.places.map((place) => (
              <li
                key={place}
                className="flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-[#101C32] shadow-xs"
              >
                <MapPin className="h-3.5 w-3.5 text-[#FF8717]" aria-hidden="true" />
                Scrap car pickup in {place}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#E5E7EB] bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="mb-8 text-center text-2xl sm:text-3xl font-extrabold tracking-tight text-[#101C32]">
            Scrap Car FAQs for {page.name}
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
