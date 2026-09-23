import { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Car, 
  AlertTriangle, 
  Wrench, 
  Clock, 
  Recycle, 
  Truck, 
  Phone, 
  MessageCircle, 
  Navigation, 
  ArrowLeft, 
  ChevronRight, 
  ChevronLeft, 
  ChevronDown, 
  X, 
  Eye, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  HelpCircle, 
  Layers 
} from 'lucide-react';
import { 
  serviceAreasData, 
  type HandledCategory, 
  type RegionGalleryItem 
} from '../config/serviceAreas';
import { business } from '../config/business';
import { telHref, whatsappHref, contactLabels, contactAria } from '../utils/contact';

const iconMap: Record<HandledCategory['iconName'], React.ComponentType<{ className?: string }>> = {
  Car,
  AlertTriangle,
  Wrench,
  Clock,
  Recycle,
  Truck
};

export default function ServiceAreaDetails() {
  const { slug } = useParams<{ slug: string }>();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0); // First FAQ open by default
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const easing = [0.16, 1, 0.3, 1] as const;

  const currentArea = slug ? serviceAreasData[slug.toLowerCase()] : undefined;

  // Dynamic SEO Title & Meta Description
  useEffect(() => {
    if (currentArea) {
      document.title = currentArea.metaTitle;
      
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', currentArea.metaDescription);
    }

    return () => {
      document.title = `${business.name} | Reliable Scrap Car & Vehicle Services`;
    };
  }, [currentArea]);

  // Gallery Navigation Handlers
  const handleNext = useCallback(() => {
    if (!currentArea) return;
    setSelectedImageIndex((prev) => 
      prev !== null ? (prev + 1) % currentArea.gallery.length : 0
    );
  }, [currentArea]);

  const handlePrev = useCallback(() => {
    if (!currentArea) return;
    setSelectedImageIndex((prev) => 
      prev !== null ? (prev - 1 + currentArea.gallery.length) % currentArea.gallery.length : 0
    );
  }, [currentArea]);

  // Keyboard navigation & body scroll lock for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImageIndex, handleNext, handlePrev]);

  // Touch Swipe for Lightbox
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStart(null);
  };

  if (!currentArea) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-brand-offwhite text-brand-black px-4 pt-32 pb-20">
        <h1 className="text-3xl font-extrabold mb-4">Service Area Not Found</h1>
        <p className="text-brand-muted mb-8 max-w-md text-center">
          The requested service region is not configured or does not exist.
        </p>
        <Link 
          to="/#service-areas" 
          className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-darkred transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Service Areas
        </Link>
      </div>
    );
  }

  const currentGalleryImage = selectedImageIndex !== null ? currentArea.gallery[selectedImageIndex] : null;

  const addressQuery = encodeURIComponent(
    `${business.address.line1}, ${business.address.city}, ${business.address.state} ${business.address.pinCode}, ${business.address.country}`
  );
  
  const mapsLink = `https://maps.google.com/?q=${addressQuery}`;

  // Reusable Contact CTA section
  const renderContactCTA = () => (
    <section className="py-24 bg-brand-black text-white relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: easing }}
        >
          <h2 className="text-xs font-bold text-brand-red uppercase tracking-[0.2em] mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-[2px] bg-brand-red/40"></span>
            Ready to Get in Touch?
            <span className="w-8 h-[2px] bg-brand-red/40"></span>
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Looking to Scrap an Old or Damaged Vehicle?
          </h3>
          <p className="text-brand-muted text-lg font-light leading-relaxed mb-10 max-w-xl mx-auto">
            Get in touch with our team for prompt coordination and transparent scrap vehicle assistance across {currentArea.name}.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={telHref}
              aria-label={contactAria.call}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-red text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:bg-brand-darkred hover:shadow-[0_10px_30px_-10px_rgba(220,38,38,0.5)] active:translate-y-0"
            >
              <Phone className="w-5 h-5" />
              <span>{contactLabels.call}</span>
            </a>

            <a 
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Chat with ${business.name} on WhatsApp`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:bg-[#1EBE5D] hover:shadow-[0_10px_30px_-10px_rgba(37,211,102,0.4)] active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>

            <a 
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Get directions to ${business.name}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/10 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 active:translate-y-0"
            >
              <Navigation className="w-5 h-5" />
              <span>Get Directions</span>
            </a>
          </div>

          <div className="mt-12">
            <Link 
              to="/#service-areas"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>← Back to Service Areas</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );

  // Reusable Gallery Section
  const renderGallery = () => (
    <section className="py-24 bg-brand-black text-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: easing }}
        >
          <h2 className="text-xs font-bold text-brand-red uppercase tracking-[0.2em] mb-4 flex items-center justify-center gap-4">
            <span className="w-8 h-[2px] bg-brand-red/50"></span>
            Authentic Scrap Yard Photography
            <span className="w-8 h-[2px] bg-brand-red/50"></span>
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Scrap Cars & Vehicle Yard
          </h3>
          <p className="text-brand-muted text-base md:text-lg font-light max-w-2xl mx-auto">
            Authentic imagery of end-of-life vehicles, damaged cars, salvage parts, and industrial yard operations in our coverage network.
          </p>
        </motion.div>

        {/* Responsive Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto auto-rows-[260px]">
          {currentArea.gallery.map((image: RegionGalleryItem, index: number) => {
            const isWide = index === 0 || index === 3;
            return (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.07, ease: easing }}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group shadow-lg bg-brand-charcoal ${
                  isWide ? 'sm:col-span-2' : ''
                }`}
                onClick={() => setSelectedImageIndex(index)}
              >
                <img 
                  src={image.thumbnail} 
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-350 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-brand-red mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {image.category}
                  </span>
                  <h4 className="text-base font-bold text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {image.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-white/90 bg-white/10 hover:bg-brand-red px-3 py-1 rounded-full w-fit backdrop-blur-md transition-colors">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Image</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );

  // Reusable Highlights Section
  const renderHighlights = () => {
    if (!currentArea.handledItems) return null;
    return (
      <section className="py-24 bg-brand-offwhite border-t border-gray-200/60">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: easing }}
          >
            <h2 className="text-xs font-bold text-brand-red uppercase tracking-[0.2em] mb-3 flex items-center justify-center gap-3">
              <span className="w-6 h-[2px] bg-brand-red/40"></span>
              Categories
              <span className="w-6 h-[2px] bg-brand-red/40"></span>
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-brand-black tracking-tight mb-4">
              {currentArea.highlightsHeading || "What We Handle"}
            </h3>
            <p className="text-brand-muted font-light leading-relaxed">
              {currentArea.highlightsSubheading || `Specialized vehicle handling across ${currentArea.name}.`}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {currentArea.handledItems.map((item, index) => {
              const Icon = iconMap[item.iconName];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: index * 0.08, ease: easing }}
                  className="group bg-white p-7 rounded-2xl border border-gray-200/70 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  
                  <div className="w-14 h-14 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h4 className="text-xl font-bold text-brand-black mb-3 tracking-tight group-hover:text-brand-red transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-brand-muted text-sm font-light leading-relaxed flex-1">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  // Reusable FAQ Component
  const renderFAQ = () => {
    if (!currentArea.faq) return null;
    return (
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: easing }}
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-red uppercase tracking-[0.2em] mb-3">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-brand-black tracking-tight mb-4">
                {currentArea.faq.heading}
              </h3>
              <p className="text-brand-muted font-light leading-relaxed">
                {currentArea.faq.subheading}
              </p>
            </motion.div>

            <div className="space-y-4">
              {currentArea.faq.questions.map((faqItem, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div 
                    key={idx}
                    className="border border-gray-200 rounded-2xl overflow-hidden bg-brand-offwhite/50 transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base md:text-lg text-brand-black hover:text-brand-red transition-colors focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span>{faqItem.question}</span>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 text-brand-red transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: easing }}
                        >
                          <div className="px-6 pb-6 pt-1 text-brand-muted text-sm md:text-base font-light leading-relaxed border-t border-gray-200/60">
                            {faqItem.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Reusable Regional Coverage Section
  const renderCoverage = () => {
    if (!currentArea.coverageInfo) return null;
    return (
      <section className="py-20 bg-brand-charcoal text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: easing }}
              className="text-center md:text-left"
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-red uppercase tracking-[0.2em] mb-3">
                <MapPin className="w-4 h-4" />
                <span>Coverage Details</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
                Our Service Area: {currentArea.coverageInfo.regionName}
              </h3>
              <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-8">
                {currentArea.coverageInfo.description}
              </p>

              <div className="bg-brand-black/60 border border-white/10 p-6 rounded-2xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-bold text-white block text-sm sm:text-base">
                    {currentArea.coverageInfo.highlight}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-400 font-light">
                    Direct coordination for vehicle owners across {currentArea.name}.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  // Reusable "Why Contact Us" Section
  const renderWhyContactUs = () => {
    if (!currentArea.whyContactUs) return null;
    return (
      <section className="py-24 bg-brand-offwhite">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: easing }}
          >
            <h2 className="text-xs font-bold text-brand-red uppercase tracking-[0.2em] mb-3 flex items-center justify-center gap-3">
              <span className="w-6 h-[2px] bg-brand-red/40"></span>
              Why Choose Us
              <span className="w-6 h-[2px] bg-brand-red/40"></span>
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-brand-black tracking-tight mb-4">
              {currentArea.whyContactUs.heading}
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {currentArea.whyContactUs.reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.1, ease: easing }}
                className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-brand-black mb-3 tracking-tight">
                  {reason.title}
                </h4>
                <p className="text-brand-muted text-sm font-light leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // NCR Custom Component: Horizontal "How It Works"
  const renderHowItWorks = () => {
    if (!currentArea.howItWorks) return null;
    return (
      <section className="py-24 bg-white border-y border-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: easing }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-red uppercase tracking-[0.2em] mb-3">
              <Layers className="w-4 h-4" />
              <span>Step-By-Step Process</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-brand-black tracking-tight mb-4">
              {currentArea.howItWorks.heading}
            </h3>
            <p className="text-brand-muted font-light leading-relaxed">
              {currentArea.howItWorks.subheading}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto relative">
            {currentArea.howItWorks.steps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.1, ease: easing }}
                className="group relative bg-brand-offwhite p-7 rounded-2xl border border-gray-200/80 hover:border-brand-red/30 transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-brand-red text-white font-extrabold flex items-center justify-center text-lg mb-6 shadow-md group-hover:scale-110 transition-transform">
                  0{step.step}
                </div>
                <h4 className="text-xl font-bold text-brand-black mb-3 group-hover:text-brand-red transition-colors">
                  {step.title}
                </h4>
                <p className="text-brand-muted text-sm font-light leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Uttarakhand Custom Component: Vehicle Types Grid
  const renderVehicleTypesGrid = () => {
    if (!currentArea.vehicleTypesSection) return null;
    return (
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: easing }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-red uppercase tracking-[0.2em] mb-3">
              <CheckCircle2 className="w-4 h-4" />
              <span>Vehicles Accepted</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-brand-black tracking-tight mb-4">
              {currentArea.vehicleTypesSection.heading}
            </h3>
            <p className="text-brand-muted font-light leading-relaxed">
              {currentArea.vehicleTypesSection.subheading}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
            {currentArea.vehicleTypesSection.types.map((vType, idx) => (
              <motion.div
                key={vType.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: easing }}
                className="bg-brand-offwhite p-6 rounded-2xl border border-gray-200/80 hover:border-brand-red/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-[11px] font-bold text-brand-red bg-brand-red/10 px-2.5 py-1 rounded-full mb-4">
                    {vType.tag}
                  </span>
                  <h4 className="text-lg font-bold text-brand-black mb-2">
                    {vType.title}
                  </h4>
                  <p className="text-brand-muted text-xs md:text-sm font-light leading-relaxed">
                    {vType.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Reusable Introduction Section
  const renderIntroSection = () => (
    <section className="py-20 md:py-28 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Featured Scrap Vehicle Image */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: easing }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-brand-charcoal group">
              <img 
                src={currentArea.featuredImage.src}
                srcSet={`${currentArea.featuredImage.thumbnail} 600w, ${currentArea.featuredImage.src} 1200w`}
                sizes="(max-width: 1024px) 100vw, 40vw"
                alt={currentArea.featuredImage.alt}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-[11px] font-bold text-brand-red uppercase tracking-widest block mb-1">
                  Regional Salvage
                </span>
                <p className="text-base font-bold">
                  {currentArea.featuredImage.title}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content & Action Buttons */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: easing }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-red uppercase tracking-[0.2em] mb-4">
              <span className="w-6 h-[2px] bg-brand-red"></span>
              <span>{currentArea.intro.badge}</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-brand-black mb-6 leading-tight tracking-tight">
              {currentArea.intro.heading}
            </h2>
            
            <div className="space-y-4 text-brand-muted text-base md:text-lg font-light leading-relaxed mb-8">
              {currentArea.intro.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Direct Action Bar */}
            <div className="p-6 bg-brand-offwhite rounded-2xl border border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-brand-charcoal block">
                  Have an old or damaged vehicle in {currentArea.name}?
                </span>
                <span className="text-sm text-brand-muted font-light">
                  Direct communication for scheduling and inquiries.
                </span>
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <a 
                  href={telHref}
                  aria-label={contactAria.call}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-brand-red text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-brand-darkred transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{contactLabels.call}</span>
                </a>
                <a 
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-[#1EBE5D] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );

  return (
    <div className="bg-brand-offwhite text-brand-black min-h-screen">
      
      {/* Top Breadcrumb Bar */}
      <div className="pt-28 pb-4 bg-brand-black/95 text-gray-300 border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs md:text-sm">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-gray-500">/</span>
              <Link to="/#service-areas" className="hover:text-white transition-colors">
                Service Areas
              </Link>
              <span className="text-gray-500">/</span>
              <span className="text-brand-red font-semibold">{currentArea.name}</span>
            </nav>

            <Link 
              to="/#service-areas"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-400 hover:text-brand-red transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Service Areas</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-brand-black text-white overflow-hidden flex items-center min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <img 
            src={currentArea.heroImage.src}
            srcSet={`${currentArea.heroImage.thumbnail} 600w, ${currentArea.heroImage.src} 1920w`}
            sizes="100vw"
            alt={currentArea.heroImage.alt}
            className="w-full h-full object-cover object-center opacity-35 mix-blend-luminosity"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/85 to-brand-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/70" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-2.5 w-2.5 rounded-full bg-brand-red relative">
                <span className="absolute inset-0 rounded-full bg-brand-red animate-ping opacity-75"></span>
              </span>
              <span className="text-brand-red font-bold text-xs uppercase tracking-[0.2em]">
                {currentArea.name} Service Region
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-[1.15]">
              {currentArea.title}
            </h1>

            <p className="text-lg md:text-xl text-brand-muted font-light leading-relaxed mb-8 max-w-2xl">
              {currentArea.heroSubtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href={telHref}
                aria-label={contactAria.call}
                className="inline-flex items-center gap-2 bg-brand-red text-white px-7 py-3.5 rounded-xl font-bold transition-all duration-300 hover:bg-brand-darkred hover:shadow-[0_10px_30px_-10px_rgba(220,38,38,0.5)] active:translate-y-0"
              >
                <Phone className="w-5 h-5" />
                <span>{contactLabels.call}</span>
              </a>
              <a 
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-7 py-3.5 rounded-xl font-bold transition-all duration-300 hover:bg-[#1EBE5D] hover:shadow-[0_10px_30px_-10px_rgba(37,211,102,0.4)] active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DISTINCT REGIONAL LAYOUTS */}
      {currentArea.layoutType === 'punjab' && (
        <>
          {/* Punjab Flow: Hero -> Services Intro -> Highlights -> Gallery -> Coverage -> FAQ -> Why Contact Us -> Contact CTA */}
          {renderIntroSection()}
          {renderHighlights()}
          {renderGallery()}
          {renderCoverage()}
          {renderFAQ()}
          {renderWhyContactUs()}
          {renderContactCTA()}
        </>
      )}

      {currentArea.layoutType === 'ncr' && (
        <>
          {/* NCR Flow: Hero -> Services Intro -> How It Works (Horizontal Timeline) -> Highlights -> Gallery -> Why Contact Us -> Contact CTA */}
          {renderIntroSection()}
          {renderHowItWorks()}
          {renderHighlights()}
          {renderGallery()}
          {renderWhyContactUs()}
          {renderContactCTA()}
        </>
      )}

      {currentArea.layoutType === 'uttarakhand' && (
        <>
          {/* Uttarakhand Flow: Hero -> Services Intro -> Vehicle Types Grid -> Gallery -> Coverage -> FAQ -> Why Contact Us -> Contact CTA */}
          {renderIntroSection()}
          {renderVehicleTypesGrid()}
          {renderGallery()}
          {renderCoverage()}
          {renderFAQ()}
          {renderWhyContactUs()}
          {renderContactCTA()}
        </>
      )}

      {/* Full-Featured Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && currentGalleryImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-brand-black/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-8 select-none"
            onClick={() => setSelectedImageIndex(null)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex items-center justify-between z-20" onClick={(e) => e.stopPropagation()}>
              <div className="text-sm font-semibold tracking-wider text-gray-400">
                <span className="text-white font-bold">{selectedImageIndex + 1}</span> / {currentArea.gallery.length}
                <span className="ml-3 hidden sm:inline text-brand-red uppercase text-xs tracking-widest">
                  {currentGalleryImage.category}
                </span>
              </div>
              <button 
                className="text-white/70 hover:text-white bg-white/10 hover:bg-brand-red p-2.5 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                onClick={() => setSelectedImageIndex(null)}
                aria-label="Close image lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-2 md:left-6 z-20 text-white/80 hover:text-white bg-brand-black/60 hover:bg-brand-red border border-white/10 p-3 md:p-4 rounded-full transition-all duration-200 backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentGalleryImage.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, ease: easing }}
                  src={currentGalleryImage.src} 
                  alt={currentGalleryImage.alt} 
                  className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-[0_0_60px_rgba(0,0,0,0.9)]"
                  loading="eager"
                />
              </AnimatePresence>

              <button 
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-2 md:right-6 z-20 text-white/80 hover:text-white bg-brand-black/60 hover:bg-brand-red border border-white/10 p-3 md:p-4 rounded-full transition-all duration-200 backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="text-center z-20 max-w-xl mx-auto" onClick={(e) => e.stopPropagation()}>
              <h4 className="text-base md:text-lg font-bold text-white mb-1">
                {currentGalleryImage.title}
              </h4>
              <p className="text-xs md:text-sm text-gray-400 font-light">
                {currentGalleryImage.alt}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
