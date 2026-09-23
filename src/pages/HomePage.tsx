import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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

const pathSectionMap: Record<string, string> = {
  '/about': 'about',
  '/services': 'services',
  '/process': 'process',
  '/service-areas': 'service-areas',
  '/gallery': 'gallery',
  '/faq': 'faq',
  '/location': 'location',
  '/contact': 'contact'
};

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
