import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VISIBLE_DESKTOP_IMAGES = 4;

// TODO: Replace these with actual desktop tablet kiosk collage images when ready
const BOOTH_ACTION_IMAGES = [
  {
    src: '/capture/desktop-tablet-kiosk/dtvk-office.jpg',
    alt: 'RealVo Desktop Tablet Kiosk – office activation',
  },
  {
    src: '/capture/desktop-tablet-kiosk/dtvk-college-2.jpg',
    alt: 'RealVo Desktop Tablet Kiosk – college activation 1',
  },
  {
    src: '/capture/desktop-tablet-kiosk/dtvk-healthcare-2.jpg',
    alt: 'RealVo Desktop Tablet Kiosk – healthcare activation 1',
  },
  {
    src: '/capture/desktop-tablet-kiosk/dtvk-community-3.jpg',
    alt: 'RealVo Desktop Tablet Kiosk – community activation 1',
  },
  {
    src: '/capture/desktop-tablet-kiosk/dtvk-tradeshow.jpg',
    alt: 'RealVo Desktop Tablet Kiosk – tradeshow activation',
  },
  {
    src: '/capture/desktop-tablet-kiosk/dtvk-college-4.jpg',
    alt: 'RealVo Desktop Tablet Kiosk – college activation 2',
  },
   {
  src: '/capture/desktop-tablet-kiosk/dtvk-healthcare-1.jpg',
    alt: 'RealVo Desktop Tablet Kiosk – healthcare activation 2',
  },
  {
    src: '/capture/desktop-tablet-kiosk/dtvk-community-6.jpg',
    alt: 'RealVo Desktop Tablet Kiosk – community activation 2',
  },
  {
    src: '/capture/desktop-tablet-kiosk/dtvk-auto-show.jpg',
    alt: 'RealVo Desktop Tablet Kiosk – auto show activation',
  },
  {
  src: '/capture/desktop-tablet-kiosk/dtvk-150th.jpg',
    alt: 'RealVo Desktop Tablet Kiosk – 150th activation',
  },
  {
  src: '/capture/desktop-tablet-kiosk/dtvk-product-launch.jpg',
    alt: 'RealVo Desktop Tablet Kiosk – product launch activation',
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
    h-[320px] sm:h-[380px] lg:h-[430px]
  "
>
  <img
    src="/tablet_booth.png"
    alt="RealVo Desktop Tablet Kiosk"
    className="
      h-full
      w-auto
      object-contain
      object-center
      scale-125
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
                      A compact, purpose-built solution for environments where space is limited or mobility is essential.
                    </span>
                  </h1>
                </div>

                {/* Tags / Feature Pills */}
                <div className="flex flex-wrap gap-2">
                  {[
                    'Set up in minutes',
                    'Adjustable height',
                    'Self-guided recording UX',
                    'Lightweight & portable',
                    'Carry-on friendly',
                  ].map(tag => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 py-1 text-[11px] sm:text-xs font-medium text-slate-700 dark:text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl">
                  The Desktop Tablet Kiosk supports flexible deployment on desktops, countertops, wall mounts, or within custom enclosures—making it ideal for trade show booths, lobbies, offices, libraries, and town halls.
                </p>

                {/* Primary CTA */}
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-realvo-blue text-white dark:bg-sky-500 dark:text-slate-950 hover:bg-realvo-blue/90 dark:hover:bg-sky-400 transition"
                  >
                    Request pricing &amp; availability
                  </a>
                </div>
              </div>
            </div>

            {/* Kiosk in action – carousel on desktop, swipe on mobile */}
            <div className="mt-10 sm:mt-14 lg:mt-16">
              <h2 className="text-lg sm:text-xl font-semibold text-realvo-blue mb-4 sm:mb-5">
                Kiosk in action
              </h2>

              {/* Desktop: 4-image carousel with arrows (no scrollbar) */}
              <div className="hidden md:flex items-center gap-4">
                {showDesktopArrows && (
                  <button
                    type="button"
                    onClick={handleDesktopPrev}
                    className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-realvo-slate/30 bg-white text-realvo-slate hover:bg-realvo-blue hover:border-realvo-blue hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-realvo-blue/60"
                    aria-label="Previous kiosk in action image"
                  >
                    ‹
                  </button>
                )}

                <div className="flex-1 grid grid-cols-4 gap-4">
                  {desktopIndices.map(imageIndex => {
                    const image = BOOTH_ACTION_IMAGES[imageIndex];
                    return (
                      <button
                        key={imageIndex}
                        type="button"
                        onClick={() => openLightbox(imageIndex)}
                        className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-realvo-blue/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </button>
                    );
                  })}
                </div>

                {showDesktopArrows && (
                  <button
                    type="button"
                    onClick={handleDesktopNext}
                    className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-realvo-slate/30 bg-white text-realvo-slate hover:bg-realvo-blue hover:border-realvo-blue hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-realvo-blue/60"
                    aria-label="Next kiosk in action image"
                  >
                    ›
                  </button>
                )}
              </div>

              {/* Mobile: horizontal swipe */}
              <div className="md:hidden overflow-x-auto mx-0">
                <div className="flex gap-4 pb-2 snap-x snap-mandatory">
                  {BOOTH_ACTION_IMAGES.map((image, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => openLightbox(index)}
                      className="group snap-start shrink-0 w-64 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-realvo-blue/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-44 sm:h-52 object-cover transform transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-400 md:hidden">
                Swipe sideways to see more images. Tap to view larger.
              </p>
            </div>

            {/* Features with purpose + Tech specs */}
            <div
              id="tech-specs"
              className="mt-10 sm:mt-14 lg:mt-16 grid gap-10 lg:grid-cols-2"
            >
              {/* Features with purpose / Benefits */}
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-realvo-blue mb-4 sm:mb-5">
                  Features with purpose
                </h2>

                <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-200">
                  <li className="pl-3 -indent-3">
                    • <strong>Invites participation without instruction</strong>, using a clear, self-guided recording flow
                  </li>
                  <li className="pl-3 -indent-3">
                    • <strong>Supports both brief responses and deeper reflection</strong>, depending on the prompt and context
                  </li>
                  <li className="pl-3 -indent-3">
                    • <strong>Operates without active facilitation</strong>, allowing programs to run smoothly in the background
                  </li>
                  <li className="pl-3 -indent-3">
                    • <strong>Brand-ready presentation</strong>, with on-screen UI and optional signage or skins based on placement
                  </li>
                  <li className="pl-3 -indent-3">
                    • <strong>Integrated with VideoBooth.tv</strong>, enabling centralized uploads, approvals, and publishing workflows
                  </li>
                </ul>
              </div>

              {/* Tech specs */}
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-realvo-blue mb-4 sm:mb-5">
                  Technical specifications
                </h2>
                <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 grid gap-y-3 sm:gap-y-4 sm:grid-cols-2 sm:gap-x-6">
                  <div>
                    <p className="font-semibold">Tablet</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      Microsoft Surface
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Camera</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      1080p full HD video (30 fps)
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Audio</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      Dual far field studio microphones
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Display &amp; interface</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      13" landscape touch screen
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Power</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      Single standard 15A outlet
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Internet</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      Wi-Fi with offline fallback workflows
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Storage</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      512GB Local SSD / USB export, VB.tv upload, or network transfer
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Set up time</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      ~.30 mins from arrival to first recording
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Footprint</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      Approx. 18"W x 10'D x 23"H
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Branding surfaces</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      Facia wrap and on-screen interface
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Use cases & customization */}
            <div className="mt-10 sm:mt-14 lg:mt-16 grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  Ideal use cases
                </h2>
                <ul className="mt-3 space-y-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-200 list-disc pl-5">
                  <li>Workplace onboarding, training, and pulse moments</li>
                  <li>Conference and trade show booths near product demo zones</li>
                  <li>Libraries, classrooms, and campus common areas</li>
                  <li>Waiting rooms, clinics, and healthcare staff break areas</li>
                  <li>Lobbies, corridors, and shared visitor spaces</li>
                  <li>Town halls, community events, and rotating pop-up placements</li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  Customization options
                </h2>
                <ul className="mt-3 space-y-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-200 list-disc pl-5">
                  <li>Audio, text, and photo capture support</li>
                  <li>Guided prompts tailored to your program goals</li>
                  <li>Branded on-screen interface (intros, outro, and overlays)</li>
                  <li>Placement signage and optional skins depending on location</li>
                  <li>Instant upload to VideoBooth.tv &amp; flexible integrations</li>
                </ul>
              </div>
            </div>

            {/* Capture option navigation – previous + next */}
            <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              {/* Back to Free-standing */}
              <a
                href="/capture/free-standing-kiosk"
                className="inline-flex items-center text-xs sm:text-sm font-medium text-realvo-blue dark:text-sky-400 hover:text-realvo-blue/80 dark:hover:text-sky-300"
              >
                <span className="mr-1 text-base">←</span>
                Previous capture option: Free-standing Kiosk
              </a>

              {/* Forward to Virtual */}
              <a
                href="/capture/virtual-video-booth"
                className="inline-flex items-center text-xs sm:text-sm font-medium text-realvo-blue dark:text-sky-400 hover:text-realvo-blue/80 dark:hover:text-sky-300"
              >
                Next capture option: Virtual Video Booth
                <span className="ml-1 text-base">→</span>
              </a>
            </div>

            {/* Final CTA band */}
            <div className="mt-12 sm:mt-16 lg:mt-20 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 px-5 sm:px-8 py-7 sm:py-9 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300 mb-2">
                  Ready to activate RealVo
                </p>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                  Add a simple capture point where people naturally pause.
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl">
                  Share your goals — we’ll help you configure the Desktop Tablet
                  Kiosk for your space and the stories you want to capture.
                </p>
              </div>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-white text-slate-900 hover:bg-slate-100 transition whitespace-nowrap"
              >
                Talk to the RealVo team
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox modal */}
      {currentLightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4 sm:px-8"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Kiosk in action image viewer"
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              className="absolute -top-10 right-0 text-slate-200 hover:text-white text-sm sm:text-base"
              onClick={closeLightbox}
            >
              Close ✕
            </button>

            {/* Image */}
            <div className="relative w-full flex items-center justify-center bg-white p-2">
              <img
                src={currentLightboxImage.src}
                alt={currentLightboxImage.alt}
                className="max-h-[80vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Nav arrows */}
            <button
              type="button"
              onClick={showPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 sm:-translate-x-10 rounded-full bg-black/60 hover:bg-black/80 text-white w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-lg"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={showNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 sm:translate-x-10 rounded-full bg-black/60 hover:bg-black/80 text-white w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-lg"
            >
              ›
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default DesktopTabletKiosk;
