import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageCircle, ArrowRight, Car, Recycle, Clock } from 'lucide-react';
import { business } from '../config/business';
import { servicePages } from '../content/services';
import { locationPages } from '../content/locations';
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
  { name: 'Process', href: '/#process' },
  { name: 'Service Areas', href: '/#service-areas' },
  { name: 'Gallery', href: '/#gallery' },
  { name: 'Location', href: '/#location' },
  { name: 'Contact', href: '/#contact' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#101C32] text-white pt-16 pb-12 border-t border-[#1C2C4A]">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mb-14 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link to="/" className="group mb-5 inline-flex items-center gap-2.5">
              <span className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#EAF8EF] text-[#087A45] border border-[#087A45]/30">
                <Car className="w-5 h-5 text-[#FF8717]" />
                <Recycle className="w-3.5 h-3.5 absolute -bottom-1 -right-1 text-[#087A45] bg-white rounded-full p-0.5" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-2xl font-extrabold tracking-tight text-white">
                  {business.name}
                  <span className="text-[#FF8717]">.</span>
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-gray-400">
                  Scrap &amp; Salvage Experts
                </span>
              </span>
            </Link>

            <p className="mb-6 max-w-md text-sm text-gray-300 leading-relaxed">
              Scrap car buyer and vehicle scrapping service for old, damaged and end-of-life vehicles. Free
              pickup, fair valuations and RC cancellation support across {business.serviceAreas.join(', ')}.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={telHref}
                aria-label={contactAria.call}
                className="btn btn-orange !py-2.5 !px-5 text-sm rounded-xl font-bold flex items-center gap-2"
              >
                <Phone className="h-4 w-4 fill-white" />
                <span>{contactLabels.call}</span>
              </a>
              <a
                href={whatsappHref}
                {...externalLinkProps}
                aria-label={contactAria.whatsapp}
                className="btn btn-primary !py-2.5 !px-5 text-sm rounded-xl font-bold flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{contactLabels.whatsapp}</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h2 className="mb-5 text-xs font-bold uppercase tracking-wider text-[#FF8717]">
              Navigation
            </h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 lg:grid-cols-1">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    <ArrowRight className="h-3 w-3 text-[#087A45] transition-transform group-hover:translate-x-1" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4">
            <h2 className="mb-5 text-xs font-bold uppercase tracking-wider text-[#FF8717]">
              Contact Details
            </h2>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FF8717]" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Workshop Address</p>
                  <p className="font-medium text-white">Banshiwala Jaajra, Dehradun, Uttarakhand</p>
                  <a
                    href={directionsHref}
                    {...externalLinkProps}
                    aria-label={contactAria.directions}
                    className="mt-1 inline-block text-xs font-bold text-[#087A45] hover:underline"
                  >
                    {contactLabels.directions} →
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#087A45]" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Call Us</p>
                  <a
                    href={telHref}
                    aria-label={contactAria.call}
                    className="font-bold text-white hover:text-[#FF8717] transition-colors"
                  >
                    {phoneDisplay}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#FF8717]" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Business Hours</p>
                  <p className="font-medium text-white">{business.hours}</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#25D366]" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">WhatsApp</p>
                  <a
                    href={whatsappHref}
                    {...externalLinkProps}
                    aria-label={contactAria.whatsapp}
                    className="font-medium text-gray-300 hover:text-white"
                  >
                    Chat online for quick scrap quotes
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Internal Links for SEO */}
        <div className="mb-10 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 md:grid-cols-2">
          <nav aria-label="Services">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#FF8717]">
              Scrap Car Services
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {servicePages.map((page) => (
                <li key={page.slug}>
                  <Link
                    to={`/${page.slug}`}
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    {page.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Service areas">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#FF8717]">
              Service Areas
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {locationPages.map((page) => (
                <li key={page.slug}>
                  <Link
                    to={`/${page.slug}`}
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    {page.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-gray-400 md:flex-row">
          <p>
            © {currentYear} {business.name}. All rights reserved.
          </p>
          <p>
            Banshiwala Jaajra, Dehradun, Uttarakhand
          </p>
        </div>
      </div>
    </footer>
  );
}
