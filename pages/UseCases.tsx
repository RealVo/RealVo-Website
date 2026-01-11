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
    src: string; // used for standard blocks (non-listening)
    alt: string;
  };
  imageSide: 'right' | 'left';
};

// ✅ Listening assets (UPDATE extensions if needed)
const LISTENING_BUBBLE_SRC = '/use_cases/uc_listening_understanding_bubble.png';
const LISTENING_PHOTO_SRC = '/use_cases/uc_listening_understanding_photo.png';
const LISTENING_MASK_SRC = '/use_cases/uc_listening_understanding_mask.png';

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
      // not used for listening (we render a 3-layer composite instead)
      src: LISTENING_BUBBLE_SRC,
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

function ListeningComposite() {
  return (
    <div
      className="
        relative
        w-full
        flex items-center justify-center
        bg-transparent
        border-0
        ring-0
        shadow-none
        overflow-visible
      "
    >
      {/* Sizer (controls overall size) */}
      <div className="relative w-[320px] sm:w-[400px] lg:w-[460px] aspect-square overflow-visible">
        {/* PHOTO layer (masked) */}
        <div
          className="absolute inset-0"
          style={{
            WebkitMaskImage: `url(${LISTENING_MASK_SRC})`,
            maskImage: `url(${LISTENING_MASK_SRC})`,
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
          }}
        >
          <img
            src={LISTENING_PHOTO_SRC}
            alt="Listening & Understanding photo"
            className="w-full h-full object-cover"
            loading="lazy"
            draggable={false}
          />
        </div>

        {/* BUBBLE outline layer (on top) + shadow applied here ONLY */}
        <img
          src={LISTENING_BUBBLE_SRC}
          alt="Speech bubble outline"
          className="
            absolute inset-0
            w-full h-full
            object-contain
            pointer-events-none
            select-none
            [filter:drop-shadow(0px_18px_28px_rgba(15,23,42,0.22))]
            dark:[filter:drop-shadow(0px_18px_28px_rgba(0,0,0,0.45))]
          "
          loading="lazy"
          draggable={false}
        />
      </div>
    </div>
  );
}

function UseCaseRow({ block }: { block: UseCaseBlock }) {
  const isImageRight = block.imageSide === 'right';
  const isListening = block.id === 'listening';

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
        `}
      >
        {isListening ? (
          <ListeningComposite />
        ) : (
          <div
            className="
              relative overflow-hidden rounded-3xl
              border border-slate-200/70 dark:border-slate-800/80
              shadow-sm
              h-[260px] sm:h-[320px] lg:h-[360px]
              bg-slate-100 dark:bg-slate-900
            "
          >
            <img
              src={block.image.src}
              alt={block.image.alt}
              className="w-full h-full object-cover"
              loading="lazy"
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

