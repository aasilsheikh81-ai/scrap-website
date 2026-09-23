import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone, MessageCircle, Recycle } from 'lucide-react';
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
  // Empty until a section scrolls into the spy band, so region pages
  // (which have none of these sections) highlight nothing.
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
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
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
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
        'fixed top-0 w-full z-50 transition-all duration-500',
        isScrolled
          ? 'bg-brand-black/80 backdrop-blur-xl py-3 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.8)] border-b border-white/[0.07]'
          : 'bg-gradient-to-b from-brand-black/90 via-brand-black/40 to-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3 shrink-0" aria-label={`${business.name} — home`}>
            <span className="relative grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-red to-brand-darkred text-white shadow-[0_8px_20px_-8px_rgba(225,29,46,0.9)] transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105">
              <Recycle className="w-5 h-5" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-lg md:text-xl font-extrabold tracking-tight text-white">
                {business.name}
                <span className="text-brand-accent">.</span>
              </span>
              <span className="hidden sm:block text-[9px] font-bold uppercase tracking-[0.28em] text-brand-muted mt-1">
                Scrap &amp; Salvage Experts
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-2" aria-label="Primary">
            <ul className="flex items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.04] px-2 py-1.5 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeId === link.id;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      aria-current={isActive ? 'true' : undefined}
                      className={cn(
                        'relative block rounded-full px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors duration-300',
                        isActive ? 'text-white' : 'text-brand-subtle hover:text-white'
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-brand-red/90 shadow-[0_6px_18px_-8px_rgba(225,29,46,0.9)]"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span className="relative z-10">{link.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop contact actions */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <a
              href={whatsappHref}
              {...externalLinkProps}
              aria-label={contactAria.whatsapp}
              title={contactLabels.whatsappLong}
              className="grid place-items-center w-11 h-11 rounded-full border border-white/10 bg-white/[0.05] text-brand-whatsapp transition-all duration-300 hover:bg-brand-whatsapp hover:text-brand-black hover:border-brand-whatsapp hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-whatsapp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href={telHref} aria-label={contactAria.call} className="btn btn-primary !py-2.5 !px-5 text-sm">
              <Phone className="w-4 h-4" />
              <span>{contactLabels.call}</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden grid place-items-center w-11 h-11 rounded-xl border border-white/10 bg-white/[0.05] text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden absolute top-full left-0 w-full border-t border-white/[0.07] bg-brand-black/95 backdrop-blur-2xl shadow-2xl"
          >
            <nav className="container mx-auto px-4 py-5 flex flex-col" aria-label="Mobile">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * index, duration: 0.3 }}
                  className={cn(
                    'flex items-center justify-between border-b border-white/[0.06] py-3.5 text-sm font-bold uppercase tracking-[0.12em] transition-colors',
                    activeId === link.id ? 'text-brand-red' : 'text-brand-subtle hover:text-white'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                  <span className="text-[10px] font-mono text-white/20">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </motion.a>
              ))}

              <div className="grid grid-cols-2 gap-3 mt-6 mb-2">
                <a
                  href={telHref}
                  aria-label={contactAria.call}
                  className="btn btn-primary w-full !py-3.5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  <span>{contactLabels.call}</span>
                </a>
                <a
                  href={whatsappHref}
                  {...externalLinkProps}
                  aria-label={contactAria.whatsapp}
                  className="btn btn-whatsapp w-full !py-3.5"
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
