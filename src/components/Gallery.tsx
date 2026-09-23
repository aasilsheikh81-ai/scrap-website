import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Expand } from 'lucide-react';
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
    <section id="gallery" className="relative overflow-hidden bg-brand-black py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: easing }}
        >
          <span className="eyebrow eyebrow--center mb-5">Facility &amp; Work Gallery</span>
          <h2 className="display mb-6 text-3xl md:text-5xl">Our work in action</h2>
          <p className="lede mx-auto max-w-2xl text-lg font-light text-brand-muted">
            A visual overview of our yard, vehicle storage and daily scrap vehicle operations.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-2.5">
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
                className={`rounded-full border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red ${
                  isActive
                    ? 'border-brand-red bg-brand-red text-white shadow-[0_10px_24px_-14px_rgba(225,29,46,0.9)]'
                    : 'border-white/10 bg-white/[0.04] text-brand-subtle hover:border-white/25 hover:text-white'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Masonry-style grid */}
        <motion.div
          layout
          className="mx-auto grid max-w-6xl auto-rows-[260px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visibleImages.map((image, index) => (
              <motion.button
                key={image.id}
                type="button"
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: easing }}
                onClick={() => setSelectedIndex(index)}
                aria-label={`Open image: ${image.title}`}
                className={`group relative overflow-hidden rounded-2xl bg-brand-surface text-left shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black ${
                  activeFilter === 'All' ? image.span ?? '' : ''
                }`}
              >
                <img
                  src={image.thumbnail}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
                />

                {/* Always-on bottom scrim keeps captions readable on touch devices */}
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/25 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />

                <span className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col p-6">
                  <span className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-red">
                    {image.category}
                  </span>
                  <span className="text-base font-bold leading-snug text-white">{image.title}</span>
                </span>

                <span className="pointer-events-none absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-brand-black/60 text-white/70 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Expand className="h-4 w-4" />
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label={currentImage.title}
            className="fixed inset-0 z-[100] flex select-none flex-col justify-between bg-brand-black/96 p-4 backdrop-blur-xl md:p-8"
            onClick={() => setSelectedIndex(null)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="z-20 flex items-center justify-between" onClick={(event) => event.stopPropagation()}>
              <p className="text-sm font-semibold tracking-wider text-brand-muted">
                <span className="font-bold text-white">{selectedIndex + 1}</span> / {visibleImages.length}
                <span className="ml-3 hidden text-xs uppercase tracking-[0.18em] text-brand-red sm:inline">
                  {currentImage.category}
                </span>
              </p>
              <button
                type="button"
                className="rounded-full bg-white/10 p-2.5 text-white/70 transition-all duration-300 hover:bg-brand-red hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                onClick={() => setSelectedIndex(null)}
                aria-label="Close image viewer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div
              className="relative my-4 flex flex-1 items-center justify-center overflow-hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-1 z-20 rounded-full border border-white/10 bg-brand-black/60 p-3 text-white/80 backdrop-blur-md transition-all duration-200 hover:bg-brand-red hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red md:left-6 md:p-4"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </button>

              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage.id}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25, ease: easing }}
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="max-h-[74vh] max-w-full rounded-xl object-contain shadow-[0_0_80px_rgba(0,0,0,0.9)]"
                  loading="eager"
                />
              </AnimatePresence>

              <button
                type="button"
                onClick={handleNext}
                className="absolute right-1 z-20 rounded-full border border-white/10 bg-brand-black/60 p-3 text-white/80 backdrop-blur-md transition-all duration-200 hover:bg-brand-red hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red md:right-6 md:p-4"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>

            <div className="z-20 mx-auto max-w-xl text-center" onClick={(event) => event.stopPropagation()}>
              <h3 className="mb-1 text-base font-bold text-white md:text-lg">{currentImage.title}</h3>
              <p className="text-xs font-light text-brand-muted md:text-sm">{currentImage.alt}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
