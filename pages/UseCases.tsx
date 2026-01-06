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
      src: '/use-cases/listening.png',
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
      src: '/use-cases/validation.png',
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
      src: '/use-cases/engagement.png',
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
      src: '/use-cases/action.png',
      alt: 'Use case: Action & Change',
    },
    imageSide: 'left',
  },
];

/**
 * Listening & Understanding branded visual (prototype)
 * Uses RealVo light blue outline speech bubble as the hero element.
 */
function ListeningVisual() {
  return (
    <div
      className="
        relative w-full h-full
        rounded-3xl overflow-hidden
        border border-slate-200/70 dark:border-slate-800/80
        bg-white dark:bg-slate-900
      "
    >
      {/* Base gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-realvo-light via-white to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />

      {/* Soft corner glow (very Snowflake-ish, but RealVo colors) */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-realvo-teal/25 blur-3xl" />
      <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-realvo-blue/10 blur-3xl" />

      {/* Subtle dotted texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.20] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.18) 1px, transparent 0)',
          backgroundSize: '14px 14px',
        }}
      />

      {/* Bubble "echo" (depth layer) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/Speech_Bubble_light_blue.png"
          alt=""
          className="
            w-[70%] max-w-[420px]
            opacity-[0.16]
            translate-x-10 -translate-y-8
            select-none pointer-events-none
          "
          draggable={false}
        />
      </div>

      {/* Main bubble */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/use_cases/Speech_Bubble_light_blue.png"
          alt="Listening & Understanding visual"
          className="
            w-[72%] max-w-[440px]
            drop-shadow-sm
            select-none pointer-events-none
          "
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
    <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
      {/* Text */}
      <div className={isImageRight ? '' : 'lg:order-2'}>
        {/* Hero-style Eyebrow */}
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

      {/* Visual */}
      <div className={isImageRight ? '' : 'lg:order-1'}>
        <div
          className="
            relative rounded-3xl overflow-hidden
            shadow-sm
            h-[260px] sm:h-[320px] lg:h-[360px]
          "
        >
          {/* Listening gets the new branded panel */}
          {isListening ? (
            <ListeningVisual />
          ) : (
            <div
              className="
                relative rounded-3xl overflow-hidden
                bg-white dark:bg-slate-900
                border border-slate-200/70 dark:border-slate-800/80
                shadow-sm
                h-full
                flex items-center justify-center
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
            {/* Back link */}
            <a
              href="/#industries"
              className="mb-6 inline-flex items-center text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-realvo-blue dark:hover:text-sky-400 transition"
            >
              <span className="mr-1.5 text-base">←</span>
              Back to Industries
            </a>

            {/* Hero */}
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-realvo-blue dark:text-sky-400 mb-2">
                Use Cases
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
                Understand how voices are used across real-world programs.
                <span className="block text-base sm:text-lg font-normal text-slate-500 dark:text-slate-400 mt-2">
                  Intent-based use cases help you design prompts, choose capture options, and publish the right stories in the right places.
                </span>
              </h1>
            </div>

            {/* Use case rows */}
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
