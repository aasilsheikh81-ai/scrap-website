import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowUpRight, Navigation, Clock, MapPin } from 'lucide-react';
import { business } from '../config/business';
import { contactBackground } from '../config/images';
import {
  telHref,
  whatsappHref,
  directionsHref,
  contactLabels,
  contactAria,
  externalLinkProps
} from '../utils/contact';

const easing = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-brand-black py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={contactBackground.src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-full w-full object-cover object-center opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/92 to-brand-charcoal" />
        <div className="absolute inset-0 bg-grid" />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-10 z-[1] h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-brand-red/[0.12] blur-[140px]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: easing }}
        >
          <span className="eyebrow eyebrow--center mb-5">Get In Touch</span>
          <h2 className="display mb-6 text-4xl text-white md:text-6xl">Ready to scrap your vehicle?</h2>
          <p className="lede mx-auto max-w-2xl text-lg font-light leading-relaxed text-brand-subtle md:text-xl">
            Reach out for a quick estimate and hassle-free collection. One tap connects you straight to our
            team — no forms, no waiting.
          </p>
        </motion.div>

        {/* Two primary contact actions */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {/* Call */}
          <motion.a
            href={telHref}
            aria-label={contactAria.call}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.05, ease: easing }}
            className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.04] p-9 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-brand-red/50 hover:shadow-[0_32px_64px_-28px_rgba(225,29,46,0.55)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black md:p-10"
          >
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-red/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <span className="relative mb-7 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-red to-brand-darkred text-white shadow-[0_16px_32px_-16px_rgba(225,29,46,0.9)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
              <Phone className="h-7 w-7" />
            </span>

            <h3 className="relative mb-3 text-2xl font-bold tracking-tight text-white">Call Now</h3>
            <p className="relative mb-9 flex-1 font-light leading-relaxed text-brand-muted transition-colors duration-500 group-hover:text-brand-subtle">
              Speak directly with our team for immediate assistance and an on-the-spot scrap valuation.
            </p>

            <span className="relative inline-flex w-fit items-center gap-2.5 rounded-full bg-brand-red px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white shadow-[0_12px_28px_-14px_rgba(225,29,46,0.9)] transition-all duration-300 group-hover:gap-4">
              {contactLabels.call}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>

            <span className="relative mt-5 text-[11px] font-medium uppercase tracking-[0.16em] text-white/35">
              Opens your dialer
            </span>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href={whatsappHref}
            {...externalLinkProps}
            aria-label={contactAria.whatsapp}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: easing }}
            className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.04] p-9 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-brand-whatsapp/50 hover:shadow-[0_32px_64px_-28px_rgba(37,211,102,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-whatsapp focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black md:p-10"
          >
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-whatsapp/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <span className="relative mb-7 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-[#2BE26F] to-[#17A34A] text-[#042911] shadow-[0_16px_32px_-16px_rgba(37,211,102,0.9)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <MessageCircle className="h-7 w-7" />
            </span>

            <h3 className="relative mb-3 text-2xl font-bold tracking-tight text-white">WhatsApp</h3>
            <p className="relative mb-9 flex-1 font-light leading-relaxed text-brand-muted transition-colors duration-500 group-hover:text-brand-subtle">
              Send photos and your vehicle condition for a fast, convenient response at any time of day.
            </p>

            <span className="relative inline-flex w-fit items-center gap-2.5 rounded-full bg-brand-whatsapp px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-[#042911] shadow-[0_12px_28px_-14px_rgba(37,211,102,0.9)] transition-all duration-300 group-hover:gap-4">
              {contactLabels.whatsappLong}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>

            <span className="relative mt-5 text-[11px] font-medium uppercase tracking-[0.16em] text-white/35">
              Opens a chat with our team
            </span>
          </motion.a>
        </div>

        {/* Supporting details strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.25, ease: easing }}
          className="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-6 rounded-[2rem] border border-white/[0.07] bg-white/[0.025] p-8 backdrop-blur-md sm:grid-cols-3"
        >
          <div className="flex items-start gap-3.5">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
            <div>
              <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white/40">Hours</p>
              <p className="text-sm font-light text-white/85">{business.hours}</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
            <div>
              <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white/40">Yard</p>
              <p className="text-sm font-light text-white/85">
                {business.address.city}, {business.address.state}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <Navigation className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
            <div>
              <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white/40">Visit Us</p>
              <a
                href={directionsHref}
                {...externalLinkProps}
                aria-label={contactAria.directions}
                className="text-sm font-semibold text-white underline decoration-brand-red decoration-2 underline-offset-4 transition-colors hover:text-brand-red focus:outline-none focus-visible:text-brand-red"
              >
                {contactLabels.directions}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
