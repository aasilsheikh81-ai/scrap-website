import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Expand, Building2 } from 'lucide-react';
import { galleryImages } from '../config/images';

const easing = [0.16, 1, 0.3, 1] as const;

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(galleryImages.map((image) => image.category)))],
    []
  );

  const visibleImages = useMemo(
    () =>
      activeFilter === 'All'
        ? galleryImages
        : galleryImages.filter((image) => image.category === activeFilter),
    [activeFilter]
  );

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % visibleImages.length : 0));
  }, [visibleImages.length]);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + visibleImages.length) % visibleImages.length : 0
    );
  }, [visibleImages.length]);

  // Keyboard navigation and body scroll lock while the lightbox is open
  useEffect(() => {
    if (selectedIndex === null) {
      document.body.style.overflow = '';
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedIndex(null);
      if (event.key === 'ArrowRight') handleNext();
      if (event.key === 'ArrowLeft') handlePrev();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, handleNext, handlePrev]);

  const handleTouchStart = (event: React.TouchEvent) => setTouchStart(event.touches[0].clientX);

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStart === null) return;
    const distance = touchStart - event.changedTouches[0].clientX;
    if (distance > 50) handleNext();
    else if (distance < -50) handlePrev();
    setTouchStart(null);
  };

  const currentImage = selectedIndex !== null ? visibleImages[selectedIndex] : null;

  return (
    <section id="gallery" className="relative overflow-hidden bg-white py-20 md:py-28 border-t border-[#E5E7EB]">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          className="mx-auto mb-10 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easing }}
        >
          <span className="eyebrow eyebrow--center mb-4">Facility &amp; Work Gallery</span>
          <h2 className="display mb-4 text-3xl md:text-4xl lg:text-[42px]">
            Inside Our Workshop &amp; Scrap Yard
          </h2>
          <p className="lede mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-[#667085]">
            Authentic photographs of our AutoScrape Pro facility in Dehradun, workshop operations, salvaged auto parts, and vehicle recycling.
          </p>
        </motion.div>

        {/* Category filter pills */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveFilter(category);
                  setSelectedIndex(null);
                }}
                aria-pressed={isActive}
                className={`rounded-full px-4 py-2 text-xs font-bold tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087A45] ${
                  isActive
                    ? 'bg-[#087A45] text-white shadow-xs'
                    : 'border border-[#E5E7EB] bg-white text-[#101C32] hover:border-[#087A45] hover:text-[#087A45]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Responsive Gallery Grid */}
        <motion.div
          layout
          className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
        >
          <AnimatePresence mode="popLayout">
            {visibleImages.map((image, index) => {
              const isFacilityPhoto = image.id.startsWith('workshop-');
              const isPortrait = image.height > image.width;
              return (
                <motion.button
                  key={image.id}
                  type="button"
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: index * 0.04, ease: easing }}
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`Open image: ${image.title}`}
                  className={`group relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] text-left shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#087A45]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087A45] ${
                    isFacilityPhoto ? 'sm:col-span-1 ring-1 ring-[#087A45]/20' : ''
                  }`}
                >
                  <div
                    className={`relative w-full overflow-hidden bg-gray-100 ${
                      isPortrait ? 'aspect-[3/4]' : 'aspect-[4/3]'
                    }`}
                  >
                    <img
                      src={image.src}
                      srcSet={image.srcSet}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      width={image.width}
                      height={image.height}
                      alt={image.alt}
                      title={image.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      style={{
                        objectPosition:
                          image.id === 'workshop-signboard'
                            ? 'center 25%'
                            : image.id === 'workshop-interior'
                              ? 'center 45%'
                              : 'center'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101C32]/70 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-85" />

                    {/* Verified facility badge if real user photo */}
                    {isFacilityPhoto && (
                      <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold text-[#087A45] shadow-xs backdrop-blur-xs">
                        <Building2 className="h-3 w-3 text-[#087A45]" />
                        Official Premises
                      </span>
                    )}

                    {/* Expand icon on hover */}
                    <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-[#101C32] opacity-0 shadow-sm backdrop-blur-xs transition-opacity duration-200 group-hover:opacity-100">
                      <Expand className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="p-4 bg-white">
                    <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-[#087A45]">
                      {image.category}
                    </span>
                    <h3 className="text-sm font-bold text-[#101C32] line-clamp-1">{image.title}</h3>
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label={currentImage.title}
            className="fixed inset-0 z-[100] flex select-none flex-col justify-between bg-[#101C32]/95 p-4 backdrop-blur-md md:p-8"
            onClick={() => setSelectedIndex(null)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="z-20 flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
              <p className="text-sm font-semibold tracking-wider text-gray-300">
                <span className="font-bold text-white">{selectedIndex + 1}</span> / {visibleImages.length}
                <span className="ml-3 inline-block rounded-full bg-[#087A45] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
                  {currentImage.category}
                </span>
              </p>
              <button
                type="button"
                className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                onClick={() => setSelectedIndex(null)}
                aria-label="Close image viewer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div
              className="relative my-4 flex flex-1 items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2 z-20 rounded-full bg-white/15 p-3 text-white backdrop-blur-xs hover:bg-[#087A45] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:left-6 md:p-4"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="max-h-[82vh] max-w-full rounded-xl object-contain shadow-2xl"
                  loading="eager"
                />
              </AnimatePresence>

              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 z-20 rounded-full bg-white/15 p-3 text-white backdrop-blur-xs hover:bg-[#087A45] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-6 md:p-4"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <div className="z-20 mx-auto max-w-2xl text-center px-4" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-base font-bold text-white md:text-lg mb-1">{currentImage.title}</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{currentImage.alt}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
