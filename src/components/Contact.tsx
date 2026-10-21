import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowUpRight, Navigation, Clock, MapPin } from 'lucide-react';
import { business } from '../config/business';
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
    <section id="contact" className="relative overflow-hidden bg-[#EAF8EF]/50 py-20 md:py-28 border-t border-[#E5E7EB]">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easing }}
        >
          <span className="eyebrow eyebrow--center mb-4">Get In Touch</span>
          <h2 className="display mb-4 text-3xl md:text-4xl lg:text-[42px]">
            Ready to Scrap Your Vehicle?
          </h2>
          <p className="lede mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-[#667085]">
            Reach out for a quick estimate and hassle-free vehicle collection. One tap connects you straight
            to our team — transparent pricing and fast response.
          </p>
        </motion.div>

        {/* Two Primary Contact Cards: Call & WhatsApp */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 mb-10">
          {/* Call Card */}
          <motion.a
            href={telHref}
            aria-label={contactAria.call}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.05, ease: easing }}
            className="group relative flex flex-col justify-between rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-[#FF8717]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8717]"
          >
            <div>
              <span className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#FFF3E5] text-[#FF8717] transition-transform duration-300 group-hover:scale-110">
                <Phone className="h-7 w-7 fill-[#FF8717]" />
              </span>

              <h3 className="mb-2 text-2xl font-bold tracking-tight text-[#101C32]">Call Now</h3>
              <p className="mb-8 font-normal leading-relaxed text-[#667085]">
                Speak directly with our team for immediate assistance and an on-the-spot scrap valuation.
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB]">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#FF8717] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-transform duration-200 group-hover:translate-x-1">
                {contactLabels.call}
                <ArrowUpRight className="h-4 w-4" />
              </span>
              <span className="text-xs text-[#667085] font-medium">Opens dialer</span>
            </div>
          </motion.a>

          {/* WhatsApp Card */}
          <motion.a
            href={whatsappHref}
            {...externalLinkProps}
            aria-label={contactAria.whatsapp}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: easing }}
            className="group relative flex flex-col justify-between rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-[#087A45]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087A45]"
          >
            <div>
              <span className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#EAF8EF] text-[#087A45] transition-transform duration-300 group-hover:scale-110">
                <MessageCircle className="h-7 w-7 text-[#087A45] fill-[#087A45]/20" />
              </span>

              <h3 className="mb-2 text-2xl font-bold tracking-tight text-[#101C32]">WhatsApp</h3>
              <p className="mb-8 font-normal leading-relaxed text-[#667085]">
                Send vehicle photos and RC details for an instant scrap estimate right on WhatsApp.
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB]">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#087A45] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-transform duration-200 group-hover:translate-x-1">
                {contactLabels.whatsappLong}
                <ArrowUpRight className="h-4 w-4" />
              </span>
              <span className="text-xs text-[#667085] font-medium">Quick response</span>
            </div>
          </motion.a>
        </div>

        {/* Supporting Details Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: easing }}
          className="mx-auto grid max-w-4xl grid-cols-1 gap-6 rounded-2xl border border-[#E5E7EB] bg-white p-6 sm:p-7 shadow-xs sm:grid-cols-3"
        >
          <div className="flex items-start gap-3.5">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#FFF3E5] text-[#FF8717]">
              <Clock className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#667085]">Operating Hours</p>
              <p className="text-sm font-bold text-[#101C32] mt-0.5">{business.hours}</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#EAF8EF] text-[#087A45]">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#667085]">Workshop Address</p>
              <p className="text-sm font-bold text-[#101C32] mt-0.5">
                Banshiwala Jaajra, Dehradun, Uttarakhand
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#F9FAFB] text-[#101C32] border border-[#E5E7EB]">
              <Navigation className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#667085]">Directions</p>
              <a
                href={directionsHref}
                {...externalLinkProps}
                aria-label={contactAria.directions}
                className="inline-block text-sm font-bold text-[#087A45] hover:underline mt-0.5"
              >
                {contactLabels.directions} →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
