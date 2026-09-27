import Seo from '../seo/Seo';
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  organizationSchema,
  serviceSchema,
  webPageSchema
} from '../seo/schema';
import type { ServicePageData } from '../content/services';
import Breadcrumbs from '../components/Breadcrumbs';
import FaqList from '../components/FaqList';
import LandingHero from '../components/landing/LandingHero';
import ContentSections from '../components/landing/ContentSections';
import RelatedLinks from '../components/landing/RelatedLinks';
import CtaBand from '../components/landing/CtaBand';

export default function ServicePage({ page }: { page: ServicePageData }) {
  const path = `/${page.slug}`;
  const trail = [
    { name: 'Home', path: '/' },
    { name: page.navLabel, path }
  ];

  return (
    <main className="bg-brand-offwhite text-brand-black">
      <Seo
        title={page.metaTitle}
        description={page.metaDescription}
        path={path}
        preloadImage={{ src: page.image.src, srcSet: page.image.srcSet, sizes: '100vw' }}
        schema={[
          organizationSchema(),
          localBusinessSchema(),
          webPageSchema(path, page.metaTitle, page.metaDescription),
          serviceSchema({ path, name: page.h1, serviceType: page.serviceType, description: page.metaDescription }),
          faqSchema(path, page.faqs),
          breadcrumbSchema(path, trail)
        ]}
      />

      <Breadcrumbs trail={trail} />
      <LandingHero eyebrow={page.eyebrow} title={page.h1} subtitle={page.heroSubtitle} image={page.image} />

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          {page.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mb-5 max-w-3xl text-base font-light leading-relaxed text-brand-muted md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <ContentSections sections={page.sections} />

      <section className="border-t border-gray-100 bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="mb-10 text-center text-2xl font-extrabold tracking-tight md:text-4xl">
            {page.navLabel}: frequently asked questions
          </h2>
          <FaqList faqs={page.faqs} idPrefix={page.slug} />
        </div>
      </section>

      <RelatedLinks currentSlug={page.slug} />

      <CtaBand
        heading="Get a free scrap car quote today"
        text="Share your vehicle details on WhatsApp or call us — transparent pricing, free pickup and paperwork support included."
      />
    </main>
  );
}
