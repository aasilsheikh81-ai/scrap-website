import { motion } from 'framer-motion';
import { PhoneCall, ClipboardCheck, Truck, BadgeIndianRupee, Phone, MessageCircle } from 'lucide-react';
import {
  telHref,
  whatsappHref,
  contactLabels,
  contactAria,
  externalLinkProps
} from '../utils/contact';

const easing = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    icon: PhoneCall,
    title: 'Get in touch',
    description:
      'Call or message us with your vehicle details. Photos over WhatsApp help us assess condition faster.'
  },
  {
    icon: ClipboardCheck,
    title: 'Receive your quote',
    description:
      'We review the make, model and condition, then share a clear valuation with no hidden deductions.'
  },
  {
    icon: Truck,
    title: 'Free collection',
    description:
      'Agree a convenient time and our recovery team collects the vehicle from your doorstep at no cost.'
  },
  {
    icon: BadgeIndianRupee,
    title: 'Payment & paperwork',
    description:
      'You are paid on handover, and we guide the deregistration and disposal documentation to completion.'
  }
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easing }}
        >
          <span className="eyebrow eyebrow--center mb-4">How It Works</span>
          <h2 className="display mb-4 text-3xl md:text-4xl lg:text-[42px]">
            Four Steps from Enquiry to Collection
          </h2>
          <p className="lede text-base sm:text-lg leading-relaxed text-[#667085]">
            A predictable process with no paperwork surprises — you always know what happens next.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line behind steps on desktop */}
          <div
            aria-hidden="true"
            className="absolute left-12 right-12 top-11 hidden h-0.5 bg-[#E5E7EB] lg:block"
          />

          <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, description }, index) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: easing }}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Step icon with number badge */}
                <div className="relative mb-6">
                  <span className="grid h-22 w-22 place-items-center rounded-3xl bg-[#EAF8EF] text-[#087A45] shadow-xs border-2 border-white transition-all duration-300 group-hover:bg-[#087A45] group-hover:text-white group-hover:scale-105">
                    <Icon className="h-8 w-8" />
                  </span>
                  <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-[#101C32] text-xs font-bold text-white shadow-sm">
                    {index + 1}
                  </span>
                </div>

                <h3 className="mb-2 text-lg font-bold tracking-tight text-[#101C32]">{title}</h3>
                <p className="max-w-[16rem] text-sm leading-relaxed text-[#667085]">
                  {description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Inline CTA Band */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: easing }}
          className="relative mt-16 overflow-hidden rounded-3xl bg-[#101C32] px-8 py-10 text-center md:px-12 md:py-12 md:text-left shadow-lg"
        >
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-radial from-[#087A45]/20 to-transparent" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight">
                Not sure what your vehicle is worth?
              </h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Tell us the make, model and condition — we will come back with a straightforward valuation.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row shrink-0">
              <a
                href={telHref}
                aria-label={contactAria.call}
                className="btn btn-orange !py-3 !px-6 rounded-xl font-bold flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4 fill-white" />
                <span>{contactLabels.call}</span>
              </a>
              <a
                href={whatsappHref}
                {...externalLinkProps}
                aria-label={contactAria.whatsapp}
                className="btn btn-whatsapp !py-3 !px-6 rounded-xl font-bold flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{contactLabels.whatsapp}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
