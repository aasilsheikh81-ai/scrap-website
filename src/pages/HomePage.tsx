import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Seo from '../seo/Seo';
import {
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
  webPageSchema,
  faqSchema
} from '../seo/schema';
import { heroImage } from '../config/images';
import { homeFaqs } from '../content/faqs';
import { pathSectionMap } from '../content/homeSections';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import AboutBusiness from '../components/AboutBusiness';
import Services from '../components/Services';
import Process from '../components/Process';
import ServiceAreas from '../components/ServiceAreas';
import Gallery from '../components/Gallery';
import FAQ from '../components/FAQ';
import Location from '../components/Location';
import Contact from '../components/Contact';

const title = 'Scrap Car Buyer | Free Pickup & RC Cancellation | AutoScrape Pro';
const description =
  'Scrap car buyer in Punjab, NCR, Uttarakhand & Saharanpur. Free pickup, transparent valuation and RC cancellation for old and damaged cars. Get a free quote now.';

export default function HomePage() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Arriving at /about (or #about) should land on the matching section.
    const targetSection = hash ? hash.replace('#', '') : pathSectionMap[pathname];
    if (!targetSection) return;

    const timer = setTimeout(() => {
      document.getElementById(targetSection)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return (
    <main>
      <Seo
        title={title}
        description={description}
        path="/"
        preloadImage={{ src: heroImage.src, srcSet: heroImage.srcSet, sizes: '100vw' }}
        schema={[
          organizationSchema(),
          localBusinessSchema(),
          websiteSchema(),
          webPageSchema('/', title, description),
          faqSchema('/', homeFaqs)
        ]}
      />
      <Hero />
      <TrustBar />
      <AboutBusiness />
      <Services />
      <Process />
      <ServiceAreas />
      <Gallery />
      <FAQ />
      <Location />
      <Contact />
    </main>
  );
}
