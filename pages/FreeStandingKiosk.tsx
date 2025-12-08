import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';

const FreeStandingKiosk: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* HERO / INTRO */}
        <Section
          id="free-standing-kiosk"
          background="white"
          padding="xl"
          className="border-b border-gray-100"
        >
          <div className="max-w-6xl mx-auto">
            {/* Back link */}
            <a
              href="/#capture-options"
              className="inline-flex items-center text-sm text-realvo-blue mb-6 hover:underline"
            >
              ← Back to Capture Options
            </a>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* LEFT: COPY */}
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-realvo-slate mb-2">
                  Capture Option
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-realvo-charcoal mb-4">
                  Free-standing Kiosk
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  A sleek, open-air kiosk designed for lobbies, corridors, and
                  public spaces—perfect for capturing quick, high-quality
                  messages without needing a full booth footprint.
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    'Open, approachable footprint',
                    'Compact, space-efficient design',
                    'Brand-forward screen + body wrap',
                    'Self-guided recording UX',
                    'Multi-location rollout friendly',
                    'Efficient high-traffic throughput',
                  ].map((pill) => (
                    <span
                      key={pill}
                      className="inline-flex items-center rounded-full border border-realvo-light bg-realvo-light/60 px-3 py-1 text-xs font-medium text-realvo-slate"
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-gray-500">
                  Ideal when you want a visible, always-on capture point where
                  people already walk, wait, or queue.
                </p>
              </div>

              {/* RIGHT: IMAGE */}
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-realvo-teal/10 transform rotate-2" />
                <div className="relative rounded-3xl bg-white shadow-2xl overflow-hidden border border-gray-200">
                  <img
                    src="/capture/free-standing-kiosk/kiosk_booth_hero.jpg"
                    // Update this path/filename to match your actual kiosk asset
                    alt="RealVo free-standing video kiosk"
                    className="w-full h-full object-contain bg-gray-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* FEATURES + BENEFITS + CUSTOMIZATION */}
        <Section background="white" padding="lg">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
            {/* COLUMN 1 – Features with purpose */}
            <div className="lg:col-span-2">
              <h2 className="text-xl md:text-2xl font-bold text-realvo-charcoal mb-3">
                Features with purpose
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                The Free-standing Kiosk is built to slot into busy environments
                while still delivering clean, confident recordings that feel
                considered—not improvised.
              </p>

              <ul className="space-y-2.5 text-sm text-gray-700">
                {[
                  'Open, standing-height design encourages spontaneous participation in high-traffic spaces.',
                  'Consistent, studio-grade lighting delivers professional-looking results in varied venue conditions.',
                  'Self-guided prompts support clear, structured content—from quick feedback to short reflections.',
                  'Compact footprint keeps aisles clear while still offering a strong branded presence.',
                  'Fast setup and go-live handled by RealVo or approved partners—low client lift.',
                  'Tight integration with RealVo’s VideoBooth.tv platform for instant uploads, approvals, and publishing.',
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-realvo-teal shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 2 – Customization + Ideal use cases */}
            <div className="space-y-8">
              {/* Customization options */}
              <div>
                <h3 className="text-lg font-semibold text-realvo-charcoal mb-3">
                  Customization options
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    'Audio, text, and photo capture support.',
                    'Immersive branded interface (video intros + voice-over prompts).',
                    'Full exterior kiosk wrap plus on-screen brand elements.',
                    'White-label activation ready for agency or partner programs.',
                    'External display options for live-feed, promo video, or dynamic content.',
                    'Instant upload to VideoBooth.tv with flexible media integrations.',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-realvo-teal shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal use cases */}
              <div>
                <h3 className="text-lg font-semibold text-realvo-charcoal mb-3">
                  Ideal use cases
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    'Event & tradeshow engagement in open areas.',
                    'Product feedback or launch reactions near demo zones.',
                    'Customer or visitor testimonials in lobbies or corridors.',
                    'Training or workshop reflections outside session rooms.',
                    'Community or public program feedback in shared spaces.',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-realvo-teal shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* TECH SPECS */}
        <Section
          background="light"
          padding="lg"
          className="border-t border-gray-100"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-realvo-charcoal mb-6">
              Technical Specifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-700">
              {/* LEFT COLUMN */}
              <div className="space-y-6">
                {/* Camera & Audio */}
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.16em] uppercase text-realvo-slate mb-2">
                    Camera &amp; audio
                  </h3>
                  <ul className="space-y-1.5">
                    <li>High-definition 1080p camera (30 fps recording).</li>
                    <li>Directional microphone system for clear voice capture.</li>
                    <li>External XLR mic input (with optional phantom power).</li>
                  </ul>
                </div>

                {/* Display & Lighting */}
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.16em] uppercase text-realvo-slate mb-2">
                    Display &amp; lighting
                  </h3>
                  <ul className="space-y-1.5">
                    <li>19&quot; portrait-orientation LCD touchscreen.</li>
                    <li>Integrated LED light ring for studio-quality front fill.</li>
                  </ul>
                </div>

                {/* Connectivity & Storage */}
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.16em] uppercase text-realvo-slate mb-2">
                    Connectivity &amp; storage
                  </h3>
                  <ul className="space-y-1.5">
                    <li>Gigabit ethernet (RJ45) and Wireless-N connectivity.</li>
                    <li>970 GB removable SSD / HDD (USB3 / SATA).</li>
                  </ul>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-6">
                {/* Power & Operating System */}
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.16em] uppercase text-realvo-slate mb-2">
                    Power &amp; operating system
                  </h3>
                  <ul className="space-y-1.5">
                    <li>PowerCon mains connection.</li>
                    <li>Approx. 109 W consumption @ 220 V.</li>
                    <li>Windows 10 Pro (64-bit).</li>
                  </ul>
                </div>

                {/* Software & Workflow */}
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.16em] uppercase text-realvo-slate mb-2">
                    Software &amp; workflow
                  </h3>
                  <ul className="space-y-1.5">
                    <li>VideoBooth 3 software with branded UI and prompts.</li>
                    <li>Output via USB export, FTP upload, or network transfer.</li>
                  </ul>
                </div>

                {/* Support & Options */}
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.16em] uppercase text-realvo-slate mb-2">
                    Support &amp; options
                  </h3>
                  <ul className="space-y-1.5">
                    <li>24-month hardware warranty.</li>
                    <li>Lifetime technical support (phone / web / email).</li>
                    <li>
                      Optional extras: wide-angle lens, lighting controller,
                      contact closure I/O, chroma-key backdrop, and
                      international transit cases.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default FreeStandingKiosk;

