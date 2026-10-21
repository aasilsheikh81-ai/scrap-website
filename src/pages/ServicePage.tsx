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
    <main className="bg-white text-[#667085]">
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

      <section className="bg-white py-14 md:py-18">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          {page.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mb-4 max-w-3xl text-base leading-relaxed text-[#667085] md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <ContentSections sections={page.sections} />

      <section className="border-t border-[#E5E7EB] bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="mb-8 text-center text-2xl sm:text-3xl font-extrabold tracking-tight text-[#101C32]">
            {page.navLabel}: Frequently Asked Questions
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
