import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageCircle, ArrowRight, Recycle, Clock } from 'lucide-react';
import { business } from '../config/business';
import {
  telHref,
  whatsappHref,
  directionsHref,
  phoneDisplay,
  contactLabels,
  contactAria,
  externalLinkProps
} from '../utils/contact';

const quickLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'How It Works', href: '/#process' },
  { name: 'Service Areas', href: '/#service-areas' },
  { name: 'Gallery', href: '/#gallery' },
  { name: 'FAQ', href: '/#faq' },
  { name: 'Location', href: '/#location' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="hairline-top relative overflow-hidden border-t border-white/[0.06] bg-brand-black pb-10 pt-20">
      <div className="pointer-events-none absolute inset-0 bg-grid" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link to="/" className="group mb-6 inline-flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-red to-brand-darkred text-white transition-transform duration-500 group-hover:rotate-[-8deg]">
                <Recycle className="h-5 w-5" />
              </span>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                {business.name}
                <span className="text-brand-accent">.</span>
              </span>
            </Link>

            <p className="mb-8 max-w-md font-light leading-relaxed text-brand-muted">
              Your trusted local partner for scrap cars, old vehicles and damaged vehicles. Fair valuations,
              transparent dealing and professional service across {business.serviceAreas.join(', ')}.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href={telHref} aria-label={contactAria.call} className="btn btn-primary !py-3 !px-6 text-sm">
                <Phone className="h-4 w-4" />
                <span>{contactLabels.call}</span>
              </a>
              <a
                href={whatsappHref}
                {...externalLinkProps}
                aria-label={contactAria.whatsapp}
                className="btn btn-whatsapp !py-3 !px-6 text-sm"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{contactLabels.whatsapp}</span>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <h2 className="mb-6 text-[11px] font-bold uppercase tracking-[0.18em] text-white">Quick Links</h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3.5 lg:grid-cols-1">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm font-light text-brand-muted transition-colors hover:text-white focus:outline-none focus-visible:text-white"
                  >
                    <ArrowRight className="h-3 w-3 shrink-0 -translate-x-1 text-brand-red opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h2 className="mb-6 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
              Contact Details
            </h2>
            <ul className="space-y-5 text-brand-muted">
              <li className="flex items-start gap-3.5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white/40">Yard</p>
                  <address className="text-sm font-light not-italic leading-relaxed">
                    {business.address.line1}, {business.address.city}, {business.address.state}{' '}
                    {business.address.pinCode}, {business.address.country}
                  </address>
                  <a
                    href={directionsHref}
                    {...externalLinkProps}
                    aria-label={contactAria.directions}
                    className="mt-2 inline-block text-xs font-bold uppercase tracking-[0.14em] text-brand-red transition-colors hover:text-white focus:outline-none focus-visible:text-white"
                  >
                    {contactLabels.directions} →
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white/40">Phone</p>
                  <a
                    href={telHref}
                    aria-label={contactAria.call}
                    className="text-[15px] font-semibold tracking-wide text-white transition-colors hover:text-brand-red focus:outline-none focus-visible:text-brand-red"
                  >
                    {phoneDisplay}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white/40">Hours</p>
                  <p className="text-sm font-light">{business.hours}</p>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-whatsapp" />
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white/40">Chat</p>
                  <a
                    href={whatsappHref}
                    {...externalLinkProps}
                    aria-label={contactAria.whatsapp}
                    className="text-sm font-light transition-colors hover:text-white focus:outline-none focus-visible:text-white"
                  >
                    WhatsApp available during opening hours
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-sm font-light text-brand-muted md:flex-row">
          <p>
            © {currentYear} {business.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
