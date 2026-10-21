import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone, MessageCircle, Car, Recycle } from 'lucide-react';
import { business } from '../config/business';
import { cn } from '../utils/cn';
import {
  telHref,
  whatsappHref,
  contactLabels,
  contactAria,
  externalLinkProps
} from '../utils/contact';

const navLinks = [
  { name: 'Home', href: '/#home', id: 'home' },
  { name: 'About', href: '/#about', id: 'about' },
  { name: 'Services', href: '/#services', id: 'services' },
  { name: 'Process', href: '/#process', id: 'process' },
  { name: 'Areas', href: '/#service-areas', id: 'service-areas' },
  { name: 'Gallery', href: '/#gallery', id: 'gallery' },
  { name: 'Location', href: '/#location', id: 'location' },
  { name: 'Contact', href: '/#contact', id: 'contact' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-spy: highlight the nav item for the section currently in view.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.2, 0.5, 0.8] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock the page behind the open mobile sheet.
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        'sticky top-0 w-full z-50 bg-white transition-all duration-300 border-b border-[#E5E7EB]',
        isScrolled ? 'py-3 shadow-sm' : 'py-3.5 md:py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          {/* Logo matching the reference design: green recycling badge + orange car + AutoScrape Pro */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 shrink-0"
            aria-label={`${business.name} — home`}
          >
            <span className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#EAF8EF] text-[#087A45] border border-[#087A45]/20 transition-transform duration-300 group-hover:scale-105">
              <Car className="w-5 h-5 text-[#FF8717]" />
              <Recycle className="w-3.5 h-3.5 absolute -bottom-1 -right-1 text-[#087A45] bg-white rounded-full p-0.5 shadow-sm" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-xl md:text-[22px] font-extrabold tracking-tight text-[#101C32]">
                {business.name}
                <span className="text-[#FF8717]">.</span>
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#667085]">
                Scrap &amp; Salvage Experts
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Primary">
            <ul className="flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = activeId === link.id;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      aria-current={isActive ? 'true' : undefined}
                      className={cn(
                        'relative px-3 py-1.5 text-sm font-semibold transition-colors duration-200',
                        isActive
                          ? 'text-[#087A45] font-bold'
                          : 'text-[#101C32] hover:text-[#087A45]'
                      )}
                    >
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="active-indicator"
                          className="absolute bottom-0 left-3 right-3 h-[2.5px] rounded-full bg-[#087A45]"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop contact actions: WhatsApp icon button + prominent Orange Call Now */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={whatsappHref}
              {...externalLinkProps}
              aria-label={contactAria.whatsapp}
              title={contactLabels.whatsappLong}
              className="grid place-items-center w-10 h-10 rounded-full bg-[#25D366] text-white shadow-sm transition-all duration-200 hover:bg-[#20ba59] hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
            </a>
            <a
              href={telHref}
              aria-label={contactAria.call}
              className="btn btn-orange !py-2.5 !px-5 text-sm rounded-full font-bold shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>{contactLabels.call}</span>
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={whatsappHref}
              {...externalLinkProps}
              aria-label={contactAria.whatsapp}
              className="grid place-items-center w-9 h-9 rounded-full bg-[#25D366] text-white shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
            </a>
            <a
              href={telHref}
              aria-label={contactAria.call}
              className="grid place-items-center w-9 h-9 rounded-full bg-[#FF8717] text-white shadow-sm"
            >
              <Phone className="w-4 h-4 fill-white" />
            </a>
            <button
              className="grid place-items-center w-10 h-10 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] text-[#101C32] transition-colors hover:bg-[#EAF8EF] hover:text-[#087A45] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087A45]"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden absolute top-full left-0 w-full border-t border-[#E5E7EB] bg-white shadow-xl"
          >
            <nav className="container mx-auto px-5 py-5 flex flex-col" aria-label="Mobile">
              <ul className="divide-y divide-[#E5E7EB]">
                {navLinks.map((link) => {
                  const isActive = activeId === link.id;
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className={cn(
                          'flex items-center justify-between py-3.5 text-base font-semibold transition-colors',
                          isActive ? 'text-[#087A45] font-bold' : 'text-[#101C32] hover:text-[#087A45]'
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>{link.name}</span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-[#087A45]" />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="grid grid-cols-2 gap-3 mt-6 pt-2 border-t border-[#E5E7EB]">
                <a
                  href={telHref}
                  aria-label={contactAria.call}
                  className="btn btn-orange w-full !py-3 rounded-xl text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>{contactLabels.call}</span>
                </a>
                <a
                  href={whatsappHref}
                  {...externalLinkProps}
                  aria-label={contactAria.whatsapp}
                  className="btn btn-primary w-full !py-3 rounded-xl text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{contactLabels.whatsapp}</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
