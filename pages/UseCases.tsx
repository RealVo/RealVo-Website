import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type UseCaseBlock = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  bullets: string[];
  image: {
    src: string;
    alt: string;
  };
  imageSide: 'right' | 'left';
};

// Listening composite assets (bubble + photo + mask)
const LISTENING_ASSETS = {
  bubble: '/use_cases/uc_listening_understanding_bubble.png',
  photo: '/use_cases/uc_listening_understanding_photo.png',
  mask: '/use_cases/uc_listening_understanding_mask.png',
};

// 🔧 Adjust this number to change shadow darkness (0.10–0.30 typical)
const LISTENING_SHADOW_ALPHA_LIGHT = 0.18;
const LISTENING_SHADOW_ALPHA_DARK = 0.45;

const USE_CASE_BLOCKS: UseCaseBlock[] = [
  {
    id: 'listening',
    kicker: 'Listening & Understanding',
    title: 'Hear what people really think — in their own words.',
    description:
      'Capture nuanced perspectives that surveys and forms miss — tone, emotion, and context included.',
    bullets: [
      'What’s on their mind check-ins',
      'Confessions and honest reflections',
      'Wishes, hopes, and future vision',
      'Community issues and lived experience',
      'Pulse feedback for quick insight',
    ],
    image: {
      // (Not used for listening; we use the 3-asset composite above)
      src: '/use_cases/uc_listening_understanding_photo.png',
      alt: 'Use case: Listening & Understanding',
    },
    imageSide: 'right',
  },
  {
    id: 'validation',
    kicker: 'Validation & Trust',
    title: 'Build credibility with real voices.',
    description:
      'Turn authentic stories into proof — showing impact, outcomes, and trust through first-person video.',
    bullets: [
      'Testimonials from customers, patients, students, or members',
      'Stories of impact and transformation',
      'Program reflections and outcomes',
      'Lived experiences that add depth and meaning',
      'Leadership or stakeholder perspectives',
    ],
    image: {
      src: '/use_cases/validation.jpg',
      alt: 'Use case: Validation & Trust',
    },
    imageSide: 'left',
  },
  {
    id: 'engagement',
    kicker: 'Engagement & Participation',
    title: 'Invite participation without pressure.',
    description:
      'Use guided prompts to make it easy for people to contribute — quickly, comfortably, and consistently.',
    bullets: [
      'Storytelling prompts (open-ended)',
      'Voice-based check-ins at events or programs',
      '“Have your say” moments in public spaces',
      'Conference reactions and speaker reflections',
      'Culture and belonging participation prompts',
    ],
    image: {
      src: '/use_cases/engagement.jpg',
      alt: 'Use case: Engagement & Participation',
    },
    imageSide: 'right',
  },
  {
    id: 'action',
    kicker: 'Action & Change',
    title: 'Turn feedback into better decisions.',
    description:
      'Capture structured insight that helps organizations improve programs, culture, policies, and services.',
    bullets: [
      'Feedback for improvement',
      'Insight for decision-making',
      'Change initiatives and change management',
      'Program evolution and iteration',
      'Culture, policy, or service redesign input',
    ],
    image: {
      src: '/use_cases/action.jpg',
      alt: 'Use case: Action & Change',
    },
    imageSide: 'left',
  },
];

function UseCaseRow({ block }: { block: UseCaseBlock }) {
  const isImageRight = block.imageSide === 'right';
  const isListening = block.id === 'listening';

  // Build shadow filters with adjustable darkness
  const lightShadow = `drop-shadow(0px 20px 32px rgba(15, 23, 42, ${LISTENING_SHADOW_ALPHA_LIGHT}))`;
  const darkShadow = `drop-shadow(0px 20px 32px rgba(0, 0, 0, ${LISTENING_SHADOW_ALPHA_DARK}))`;

  return (
    <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-stretch">
      {/* Text */}
      <div className={isImageRight ? '' : 'lg:order-2'}>
        <div className="inline-flex items-center gap-2 bg-realvo-light dark:bg-slate-900 px-3 py-1.5 rounded-full text-sm font-medium text-realvo-blue dark:text-sky-400 mb-3">
          <span className="h-2 w-2 rounded-full bg-realvo-teal animate-pulse" />
          {block.kicker}
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
          {block.title}
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl">
          {block.description}
        </p>

        <ul className="mt-5 space-y-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-200 list-disc pl-5">
          {block.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>

      {/* Image */}
      <div
        className={`
          ${isImageRight ? '' : 'lg:order-1'}
          bg-transparent !bg-transparent
          shadow-none !shadow-none
          border-0 !border-0
          ring-0 !ring-0
          overflow-visible
          flex items-center justify-center
        `}
      >
        {isListening ? (
          // LISTENING: bubble + masked photo + shadow on composite only (no container)
          <div className="contents">
            <div
              className="
                relative
                bg-transparent
                w-[360px] sm:w-[420px] lg:w-[460px]
                aspect-square
              "
              style={{
                filter: lightShadow,
              }}
            >
              {/* Dark mode shadow override */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  filter: darkShadow,
                  opacity: 0,
                }}
              />

              {/* PHOTO (masked) */}
              <div
                className="absolute inset-0"
                style={{
                  WebkitMaskImage: `url(${LISTENING_ASSETS.mask})`,
                  maskImage: `url(${LISTENING_ASSETS.mask})`,
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskPosition: 'center',
                  WebkitMaskSize: '100% 100%',
                  maskSize: '100% 100%',
                }}
              >
                <img
                  src={LISTENING_ASSETS.photo}
                  alt={block.image.alt}
                  className="w-full h-full object-cover select-none"
                  draggable={false}
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* BUBBLE (on top) */}
              <img
                src={LISTENING_ASSETS.bubble}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full select-none pointer-events-none"
                draggable={false}
                loading="eager"
                decoding="async"
              />

              {/* Dark-mode filter switch (pure CSS) */}
              <style>{`
                @media (prefers-color-scheme: dark) {
                  [data-realvo-dark-shadow="1"] { filter: ${darkShadow} !important; }
                }
              `}</style>
            </div>

            {/* Apply dark shadow when your site is in dark mode class-based */}
            <div className="hidden dark:block">
              <style>{`
                .dark .realvo-listening-shadow { filter: ${darkShadow} !important; }
              `}</style>
            </div>
          </div>
        ) : (
          // OTHER USE CASES: keep standard photo card styling
          <div
            className="
              relative overflow-hidden rounded-3xl
              border border-slate-200/70 dark:border-slate-800/80
              shadow-sm
              h-[260px] sm:h-[320px] lg:h-[360px]
              bg-slate-100 dark:bg-slate-900
              w-full
            "
          >
            <img
              src={block.image.src}
              alt={block.image.alt}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}
      </div>
    </div>
  );
}

const UseCases: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Preload listening composite assets to prevent SPA route-change "empty mask" flash
    [LISTENING_ASSETS.bubble, LISTENING_ASSETS.photo, LISTENING_ASSETS.mask].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <Header />

      <main className="flex-grow">
        <section className="w-full">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
            <a
              href="/#industries"
              className="mb-6 inline-flex items-center text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-realvo-blue dark:hover:text-sky-400 transition"
            >
              <span className="mr-1.5 text-base">←</span>
              Back to Industries
            </a>

            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-realvo-blue dark:text-sky-400 mb-2">
                Use Cases
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
                Understand how voices are used across real-world programs.
                <span className="block text-base sm:text-lg font-normal text-slate-500 dark:text-slate-400 mt-2">
                  Intent-based use cases help you design prompts, choose capture options, and publish
                  the right stories in the right places.
                </span>
              </h1>
            </div>

            <div className="mt-10 sm:mt-14 lg:mt-16 space-y-12 sm:space-y-14 lg:space-y-16">
              {USE_CASE_BLOCKS.map((block) => (
                <div key={block.id} id={block.id} className="scroll-mt-24">
                  <UseCaseRow block={block} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UseCases;
