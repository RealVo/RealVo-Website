import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UseCaseSpeechBubble from '../components/UseCaseSpeechBubble';

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

/**
 * ✅ 3 assets per use case (photo + mask + bubble)
 * You said you created 12 images total and each use case may have a flipped bubble,
 * so we declare them explicitly per use case for clarity and zero surprises.
 */
const USE_CASE_ASSETS: Record<
  string,
  { photo: string; mask: string; bubble: string }
> = {
  listening: {
    bubble: '/use_cases/uc_listening_understanding_bubble.png',
    photo: '/use_cases/uc_listening_understanding_photo.png',
    mask: '/use_cases/uc_listening_understanding_mask.png',
  },
  validation: {
    bubble: '/use_cases/uc_validation_trust_bubble.png',
    photo: '/use_cases/uc_validation_trust_photo.png',
    mask: '/use_cases/uc_validation_trust_mask.png',
  },
  engagement: {
    bubble: '/use_cases/uc_engagement_participation_bubble.png',
    photo: '/use_cases/uc_engagement_participation_photo.png',
    mask: '/use_cases/uc_engagement_participation_mask.png',
  },
  action: {
    bubble: '/use_cases/uc_action_change_bubble.png',
    photo: '/use_cases/uc_action_change_photo.png',
    mask: '/use_cases/uc_action_change_mask.png',
  },
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
      src: USE_CASE_ASSETS.listening.photo,
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
      src: USE_CASE_ASSETS.validation.photo,
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
      src: USE_CASE_ASSETS.engagement.photo,
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
      src: USE_CASE_ASSETS.action.photo,
      alt: 'Use case: Action & Change',
    },
    imageSide: 'left',
  },
];

function UseCaseRow({ block }: { block: UseCaseBlock }) {
  const isImageRight = block.imageSide === 'right';

  const assets = USE_CASE_ASSETS[block.id];

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
        {/* ✅ Use the component for ALL use cases (same bubble system) */}
        <UseCaseSpeechBubble
          photoSrc={assets.photo}
          maskSrc={assets.mask}
          bubbleSrc={assets.bubble}
          alt={block.image.alt}
        />
      </div>
    </div>
  );
}

const UseCases: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Preload all bubble assets (prevents “photo missing until refresh” on SPA nav)
    Object.values(USE_CASE_ASSETS).forEach(({ bubble, photo, mask }) => {
      [bubble, photo, mask].forEach((src) => {
        const img = new Image();
        img.src = src;
      });
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
