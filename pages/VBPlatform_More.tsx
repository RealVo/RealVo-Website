import React from "react";
import { Link } from "react-router-dom";

type FeatureSectionProps = {
  kicker: string;
  title: string;
  description: string;
  bullets?: string[];
  outcomes?: string[];
  align?: "left" | "right";
  accent?: React.ReactNode; // optional: screenshot, diagram, stat card, etc.
};

function FeatureSection({
  kicker,
  title,
  description,
  bullets,
  outcomes,
  align = "left",
  accent,
}: FeatureSectionProps) {
  const isLeft = align === "left";

  return (
    <section className="py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Text */}
          <div className={`lg:col-span-7 ${isLeft ? "lg:order-1" : "lg:order-2"}`}>
            <p className="text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-400">
              {kicker}
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              {title}
            </h2>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              {description}
            </p>

            {bullets?.length ? (
              <ul className="mt-6 space-y-3 text-slate-700 dark:text-slate-300">
                {bullets.map((b, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {outcomes?.length ? (
              <div className="mt-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-5">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  What this enables
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  {outcomes.map((o, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          {/* Optional Accent */}
          <div className={`lg:col-span-5 ${isLeft ? "lg:order-2" : "lg:order-1"}`}>
            {accent ? (
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm overflow-hidden">
                <div className="p-4 sm:p-5">{accent}</div>
              </div>
            ) : (
              // If you want absolutely no visual block, delete this entire fallback.
              <div className="hidden lg:block rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 p-6">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Optional visual accent area (leave empty or add a screenshot later).
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-slate-200 dark:bg-slate-800" />
      </div>
    </section>
  );
}

export default function VBPlatform_More() {
  return (
    <main className="bg-white dark:bg-slate-950">
      {/* Hero (matches UseCases.tsx style: kicker + headline + subline) */}
      <section className="pt-16 sm:pt-20 pb-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-400">
            VBPlatform
          </p>

          <h1 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
            A platform built to capture voices—and make them usable.
          </h1>

          <p className="mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            RealVo combines structured capture, review-ready output, and organization-first controls so
            stories can be collected consistently—and shared responsibly across teams, channels, and stakeholders.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold
                         bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Back to homepage
            </Link>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold
                         border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white
                         hover:bg-slate-50 dark:hover:bg-slate-900"
            >
              Explore features
            </a>
          </div>
        </div>
      </section>

      {/* Feature sections */}
      <div id="features" />

      <FeatureSection
        kicker="Capture experience"
        title="Guided workflows that produce consistent, usable stories."
        description="Collect video, audio, or text through prompts that keep people focused and comfortable—while ensuring every submission is structured for review, curation, and publishing."
        bullets={[
          "Prompt-led capture that reduces rambling and improves clarity.",
          "Supports repeatable formats: testimonials, insights, reflections, feedback, and more.",
          "Designed for in-person and distributed environments.",
        ]}
        outcomes={[
          "Higher completion rates and stronger story quality.",
          "Comparable submissions you can actually analyze and curate.",
          "A repeatable capture format you can deploy across programs.",
        ]}
        align="left"
        // accent: optional (add later). Example:
        // accent={<img src="/platform/screenshot_01.png" alt="Capture flow" className="w-full rounded-xl" />}
      />

      <FeatureSection
        kicker="Quality and control"
        title="Built for review, approvals, and governance."
        description="Every submission can move through a structured review flow—so what gets shared reflects the right standards, context, and permissions."
        bullets={[
          "Moderation-ready: review before publish.",
          "Clear separation between capture and distribution.",
          "Supports internal-only and public-facing publishing patterns.",
        ]}
        outcomes={[
          "Safer publishing for sensitive environments.",
          "Less manual back-and-forth when content must be approved.",
          "A reliable system of record for collected stories.",
        ]}
        align="right"
      />

      <FeatureSection
        kicker="Organize at scale"
        title="Find, sort, and reuse content without losing context."
        description="Stories only become valuable when you can retrieve them. VBPlatform is designed for structured organization—so teams can browse by program, theme, audience, or outcome."
        bullets={[
          "Organize submissions into programs or collections.",
          "Tagging and consistent metadata patterns.",
          "Reuse content across campaigns and reporting cycles.",
        ]}
        outcomes={[
          "Faster content turnaround for comms and storytelling.",
          "Better institutional memory and knowledge capture.",
          "A library that grows more valuable over time.",
        ]}
        align="left"
      />

      <FeatureSection
        kicker="Online Sharing Service"
        title="Share stories responsibly—with the right experience for viewers."
        description="Make it easy for audiences to explore stories without turning your program into a content management burden. Publish collections that feel intentional, curated, and trustworthy."
        bullets={[
          "Viewer-friendly galleries and curated collections.",
          "Share links internally or externally based on your needs.",
          "Designed to support ongoing programs—not one-off posts.",
        ]}
        outcomes={[
          "Stronger trust with audiences and stakeholders.",
          "A consistent way to publish and update story libraries.",
          "Less friction between collecting stories and using them.",
        ]}
        align="right"
      />

      {/* Final CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Want to see how this fits your use case?
            </h2>
            <p className="mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              VBPlatform is designed to support repeatable programs—listening initiatives, testimonials,
              engagement campaigns, internal learning, and community storytelling.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/use-cases"
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold
                           bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Explore use cases
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold
                           border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white
                           hover:bg-white/60 dark:hover:bg-slate-950"
              >
                Talk to RealVo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
