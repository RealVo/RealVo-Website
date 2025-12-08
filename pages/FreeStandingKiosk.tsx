import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VISIBLE_DESKTOP_IMAGES = 4;

// TODO: Update these image paths once you have kiosk-specific collages
const BOOTH_ACTION_IMAGES = [
  {
    src: '/capture/free-standing-kiosk/kiosk-collage-1.jpg',
    alt: 'RealVo free-standing kiosk activation – collage 1',
  },
  {
    src: '/capture/free-standing-kiosk/kiosk-collage-2.jpg',
    alt: 'RealVo free-standing kiosk activation – collage 2',
  },
  {
    src: '/capture/free-standing-kiosk/kiosk-collage-3.jpg',
    alt: 'RealVo free-standing kiosk activation – collage 3',
  },
  {
    src: '/capture/free-standing-kiosk/kiosk-collage-4.jpg',
    alt: 'RealVo free-standing kiosk activation – collage 4',
  },
  {
    src: '/capture/free-standing-kiosk/kiosk-collage-5.jpg',
    alt: 'RealVo free-standing kiosk activation – collage 5',
  },
];

const FreeStandingKiosk: React.FC = () => {
  // Scroll to top when navigating to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex(prev =>
      prev === null
        ? null
        : (prev + BOOTH_ACTION_IMAGES.length - 1) % BOOTH_ACTION_IMAGES.length
    );
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex(prev =>
      prev === null ? null : (prev + 1) % BOOTH_ACTION_IMAGES.length
    );
  };

  const currentLightboxImage =
    lightboxIndex !== null ? BOOTH_ACTION_IMAGES[lightboxIndex] : null;

  // Desktop carousel state (for Booth in action thumbnails)
  const [desktopStartIndex, setDesktopStartIndex] = useState(0);
  const totalImages = BOOTH_ACTION_IMAGES.length;
  const showDesktopArrows = totalImages > VISIBLE_DESKTOP_IMAGES;

  const desktopIndices = Array.from(
    { length: Math.min(VISIBLE_DESKTOP_IMAGES, totalImages) },
    (_, i) => (desktopStartIndex + i) % totalImages
  );

  const handleDesktopNext = () => {
    if (!showDesktopArrows) return;
    setDesktopStartIndex(prev => (prev + 1) % totalImages);
  };

  const handleDesktopPrev = () => {
    if (!showDesktopArrows) return;
    setDesktopStartIndex(prev => (prev - 1 + totalImages) % totalImages);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <Header />

      <main className="flex-grow">
        <section className="w-full">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
            {/* Back link */}
            <button
              type="button"
              className="mb-6 inline-flex items-center text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-realvo-blue dark:hover:text-sky-400 transition"
              onClick={() => window.history.back()}
            >
              <span className="mr-1.5 text-base">←</span>
              Back to Capture Options
            </button>

            {/* Hero / Overview */}
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
              {/* Image / hero visual */}
              <div className="relative rounded-3xl bg-slate-100 dark:bg-slate-900 overflow-hidden shadow-sm border border-slate-200/70 dark:border-slate-800/80">
                <img
                  src="/kiosk_booth.png"
                  alt="RealVo Free-standing Kiosk"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text content */}
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-realvo-blue dark:text-sky-400 mb-2">
                    Capture Option
                  </p>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
                    F
