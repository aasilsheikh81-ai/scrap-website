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
    <section id="process" className="relative overflow-hidden bg-brand-offwhite py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid-light" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          className="mx-auto mb-20 max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: easing }}
        >
          <span className="eyebrow eyebrow--center mb-5">How It Works</span>
          <h2 className="display mb-6 text-3xl text-brand-black md:text-5xl">
            Four steps from enquiry to collection
          </h2>
          <p className="lede text-lg font-light leading-relaxed text-brand-muted">
            A predictable process with no paperwork surprises — you always know what happens next.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting rail behind the step cards on large screens */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-brand-red/25 to-transparent lg:block"
          />

          <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, description }, index) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: easing }}
                className="group relative text-center"
              >
                <div className="relative mx-auto mb-7 grid h-[6.5rem] w-[6.5rem] place-items-center">
                  <span className="absolute inset-0 rounded-full bg-brand-offwhite" />
                  <span className="absolute inset-2 rounded-full border border-brand-red/15 transition-all duration-500 group-hover:scale-110 group-hover:border-brand-red/40" />
                  <span className="relative grid h-16 w-16 place-items-center rounded-full bg-white text-brand-red shadow-[0_16px_32px_-16px_rgba(8,9,10,0.4)] transition-all duration-500 group-hover:bg-brand-red group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="absolute -right-1 top-0 grid h-7 w-7 place-items-center rounded-full bg-brand-black text-[11px] font-bold text-white shadow-lg">
                    {index + 1}
                  </span>
                </div>

                <h3 className="mb-3 text-lg font-bold tracking-tight text-brand-black">{title}</h3>
                <p className="mx-auto max-w-[17rem] text-sm font-light leading-relaxed text-brand-muted">
                  {description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Inline CTA band */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: easing }}
          className="relative mt-20 overflow-hidden rounded-[2rem] bg-brand-black px-8 py-12 text-center md:px-14 md:py-14 md:text-left"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-red/25 blur-[100px]" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="max-w-xl">
              <h3 className="display mb-3 text-2xl text-white md:text-3xl">
                Not sure what your vehicle is worth?
              </h3>
              <p className="lede text-brand-subtle font-light leading-relaxed">
                Tell us the make, model and condition — we will come back with a straightforward valuation.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a href={telHref} aria-label={contactAria.call} className="btn btn-primary">
                <Phone className="h-5 w-5" />
                <span>{contactLabels.call}</span>
              </a>
              <a
                href={whatsappHref}
                {...externalLinkProps}
                aria-label={contactAria.whatsapp}
                className="btn btn-whatsapp"
              >
                <MessageCircle className="h-5 w-5" />
                <span>{contactLabels.whatsapp}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
