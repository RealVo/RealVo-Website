import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VISIBLE_DESKTOP_IMAGES = 4;

// TODO: Replace these with actual desktop tablet kiosk collage images when ready
const BOOTH_ACTION_IMAGES = [
  {
    src: '/capture/desktop-tablet-kiosk/office-collage.jpg',
    alt: 'RealVo Desktop Tablet Kiosk – office activation',
  },
  {
    src: '/capture/desktop-tablet-kiosk/clinic-collage.jpg',
    alt: 'RealVo Desktop Tablet Kiosk – clinic activation',
  },
  {
    src: '/capture/desktop-tablet-kiosk/campus-collage.jpg',
    alt: 'RealVo Desktop Tablet Kiosk – campus activation',
  },
  {
    src: '/capture/desktop-tablet-kiosk/community-collage.jpg',
    alt: 'RealVo Desktop Tablet Kiosk – community activation',
  },
  {
    src: '/capture/desktop-tablet-kiosk/reception-collage.jpg',
    alt: 'RealVo Desktop Tablet Kiosk – reception activation',
  },
  {
    src: '/capture/desktop-tablet-kiosk/event-table-collage.jpg',
    alt: 'RealVo Desktop Tablet Kiosk – tabletop event activation',
  },
];

const DesktopTabletKiosk: React.FC = () => {
  // Scroll to top when navigating to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

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

  // Desktop carousel state (for Kiosk in action thumbnails)
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
            <a
              href="/#solutions"
              className="mb-6 inline-flex items-center text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-realvo-blue dark:hover:text-sky-400 transition"
            >
              <span className="mr-1.5 text-base">←</span>
              Back to Capture Options
            </a>

            {/* Hero / Overview */}
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
              {/* Image / hero visual */}
              <div
                className="
                  relative rounded-3xl bg-white dark:bg-slate-900 overflow-hidden
                  shadow-sm border border-slate-200/70 dark:border-slate-800/80
                  flex items-center justify-center
                  px-3 sm:px-4
                  h-[320px] sm:h-[380px] lg:h-[430px]
                "
              >
                <img
                  src="/tablet_booth.png"
                  alt="RealVo Desktop Tablet Kiosk"
                  className="
                    max-w-full
                    max-h-full
                    w-auto
                    h-auto
                    object-contain
                    object-center
                  "
                />
              </div>

              {/* Text content */}
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-realvo-blue dark:text-sky-400 mb-2">
                    Capture Option
                  </p>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
                    Desktop Tablet Kiosk
                    <span className="block text-base sm:text-lg font-normal text-slate-500 dark:text-slate-400 mt-1">
                      A compact capture point designed for counters, desks, and
                      reception areas — wherever people naturally pause.
                    </span>
                  </h1>
                </div>

                {/* Tags / Feature Pills */}
                <div className="flex flex-wrap gap-2">
