import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  Lock,
  Search,
  FileText,
  Play,
  Download,
  BarChart2,
  CheckCircle2,
  Layers,
  Globe,
} from 'lucide-react';

type FeatureBlock = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  bullets: string[];
  image?: { src: string; alt: string }; // kept for now (ignored)
  icon: React.ElementType;
  imageSide: 'left' | 'right'; // kept for now (ignored)
};

const FEATURE_BLOCKS: FeatureBlock[] = [
  {
    id: 'library',
    kicker: 'Content Management',
    title: 'A centralized content library for every recording.',
    description:
      'Keep campaigns, groups, and sessions organized — so teams can review, shortlist, and deliver without chasing files.',
    bullets: [
      'Campaign + group structure for large programs',
      'Fast browsing with thumbnails + playback',
      'Consistent organization across activations',
      'Built for high-volume capture',
    ],
    image: { src: '/vbplatform/vbtv_screens_1.png', alt: 'VideoBooth.tv library view' },
    icon: Layers,
    imageSide: 'right',
  },
  {
    id: 'search',
    kicker: 'Search & Filters',
    title: 'Find what you need in seconds.',
    description:
      'Search and filter across sessions to isolate the moments that matter — by campaign, group, and more.',
    bullets: [
      'Search across groups and sessions',
      'Filter to narrow large results sets',
      'Quickly shortlist usable clips',
      'Designed for repeatable review workflows',
    ],
    image: { src: '/vbplatform/vbtv_screens_2.png', alt: 'VideoBooth.tv search and filters' },
    icon: Search,
    imageSide: 'left',
  },
  {
    id: 'notes-tags',
    kicker: 'Notes & Tags',
    title: 'Add context teams can act on.',
    description:
      'Annotate content with notes and tags to capture themes, outcomes, or next steps — without changing the original recordings.',
    bullets: [
      'Notes per video/session',
      'Tag content by theme or category',
      'Organize clips for comms and reporting',
      'Support internal review consistency',
    ],
    image: { src: '/vbplatform/vbtv_screens_3.png', alt: 'VideoBooth.tv notes and tagging' },
    icon: FileText,
    imageSide: 'right',
  },
  {
    id: 'governance',
    kicker: 'Governance & Permissions',
    title: 'Control who can access what.',
    description:
      'Give teams and stakeholders secure access to content — with permission controls that support enterprise workflows.',
    bullets: [
      'Permission-based access',
      'Secure stakeholder review',
      'Reduce file-sharing and duplication',
      'Built for professional programs',
    ],
    image: { src: '/vbplatform/vbtv_screens_1.png', alt: 'VideoBooth.tv permissions' },
    icon: Lock,
    imageSide: 'left',
  },
  {
    id: 'moderation',
    kicker: 'Moderation & Approvals',
    title: 'Keep publishing under control.',
    description:
      'Review content before it goes live. Maintain brand and program standards with moderation-friendly workflows.',
    bullets: [
      'Approve or decline before publishing',
      'Keep internal content private',
      'Support brand-safe publishing',
      'Clear review flow for teams',
    ],
    image: { src: '/vbplatform/vbtv_screens_2.png', alt: 'VideoBooth.tv moderation workflow' },
    icon: CheckCircle2,
    imageSide: 'right',
  },
  {
    id: 'transcription',
    kicker: 'AI Transcription',
    title: 'Turn video into searchable text.',
    description:
      'Add transcription to make content easier to scan, review, and reuse — especially at scale.',
    bullets: [
      'Transcribe recordings for quicker review',
      'Improve searchability and accessibility',
      'Support faster insight extraction',
      'Reduce manual admin time',
    ],
    image: { src: '/vbplatform/vbtv_screens_3.png', alt: 'VideoBooth.tv transcription' },
    icon: Play,
    imageSide: 'left',
  },
  {
    id: 'analytics',
    kicker: 'Engagement & Reporting',
    title: 'Understand performance across campaigns.',
    description:
      'Track activity and engagement to understand what’s working — and what content is resonating most.',
    bullets: [
      'Engagement analytics at a glance',
      'Activity snapshots by time range',
      'Identify trending sessions',
      'Support post-activation reporting',
    ],
    image: { src: '/vbplatform/vbtv_screens_1.png', alt: 'VideoBooth.tv analytics view' },
    icon: BarChart2,
    imageSide: 'right',
  },
  {
    id: 'exports',
    kicker: 'Exports & Delivery',
    title: 'Export content and data in CRM-ready formats.',
    description:
      'Move content into the rest of your workflow — from internal archives to stakeholder reporting and CRM-ready exports.',
    bullets: [
      'Download videos and assets',
      'Export structured metadata',
      'CRM-ready outputs',
      'Designed for real-world delivery needs',
    ],
    image: { src: '/vbplatform/vbtv_screens_2.png', alt: 'VideoBooth.tv exports view' },
    icon: Download,
    imageSide: 'left',
  },
  {
    id: 'online-sharing',
    kicker: 'Online Sharing Service',
    title: 'Publish curated stories through microsites, galleries, and embeds.',
    description:
      'Extend the program beyond capture with controlled publishing workflows and branded viewing experiences for internal or public audiences.',
    bullets: [
      'Branded microsite viewing experiences',
      'Curated galleries and embeddable layouts',
      'Moderation and approvals before publishing',
      'Designed to support brand-safe sharing',
    ],
    image: { src: '/vbplatform/vbtv_screens_3.png', alt: 'VideoBooth.tv online sharing workflows' },
    icon: Globe,
    imageSide: 'right',
  },
];

function FeatureCard({ block }: { block: FeatureBlock }) {
  const Icon = block.icon;

  return (
    <div className="group rounded-3xl bg-white/90 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-7">
      {/* subtle brand accent */}

      <div
  className="
    inline-flex items-center gap-2
    h-8 px-3
    rounded-full
    text-xs font-semibold tracking-wide
    bg-realvo-light text-realvo-blue
    dark:bg-slate-950 dark:text-sky-400
    transition-colors duration-200
    group-hover:bg-realvo-blue group-hover:text-white
    mb-4
    whitespace-nowrap
  "
>
  <span className="h-2 w-2 rounded-full bg-realvo-teal group-hover:bg-white transition-colors duration-200" />
  {block.kicker}
</div>

      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 dark:text-white flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-realvo-light dark:bg-slate-950 border border-slate-200/70 dark:border-slate-800/80 text-realvo-blue dark:text-sky-400">
          <Icon size={18} />
        </span>
        <span>{block.title}</span>
      </h2>

      <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
        {block.description}
      </p>

      <ul className="mt-5 space-y-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-200 list-disc pl-5">
        {block.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

const VBPlatform_More: React.FC = () => {
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
            <Link
              to="/#vbtv"
              className="mb-6 inline-flex items-center text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-realvo-blue dark:hover:text-sky-400 transition"
            >
              <span className="mr-1.5 text-base">←</span>
              Back to Platform
            </Link>

            {/* HERO */}
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-realvo-blue dark:text-sky-400 mb-2">
                Platform
              </p>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
                VideoBooth.tv Online Portal
                <span className="block text-base sm:text-lg font-normal text-slate-500 dark:text-slate-400 mt-2">
  Everything teams need to manage, review, and deliver content at scale.
</span>
              </h1>
            </div>

            {/* Feature cards (2-column on desktop) */}
            <div className="mt-10 sm:mt-14 lg:mt-16">
              <div className="rounded-3xl border border-slate-200/70 dark:border-slate-800/80 bg-slate-100 dark:bg-slate-900/50 p-4 sm:p-6 lg:p-8">
                <div className="mb-5 sm:mb-7">
  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
    Platform features
  </p>
</div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
                  {FEATURE_BLOCKS.map((block) => (
                    <div key={block.id} id={block.id} className="scroll-mt-24">
                      <FeatureCard block={block} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom nav */}
            <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <Link
                to="/#vbtv"
                className="inline-flex items-center text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-realvo-blue dark:hover:text-sky-400 transition"
              >
                <span className="mr-1.5 text-base">←</span>
                Back to Platform section
              </Link>

              <a
                href="/#contact"
                className="inline-flex items-center text-xs sm:text-sm font-medium text-realvo-blue dark:text-sky-400 hover:text-realvo-blue/80 dark:hover:text-sky-300"
              >
                Talk to us about your workflow
                <span className="ml-1 text-base">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VBPlatform_More;
