import { motion } from 'framer-motion';
import { FEATURES } from '../config';

function FeatureIcon({ id }) {
  switch (id) {
    case 'quick-response':
      return (
        <svg
          className="w-7 h-7 text-coral fill-none stroke-current"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    case 'price-upfront':
      return (
        <svg
          className="w-7 h-7 text-coral fill-none stroke-current"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    case 'vetted-engineers':
      return (
        <svg
          className="w-7 h-7 text-coral fill-none stroke-current"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case 'damage-free':
      return (
        <svg
          className="w-7 h-7 text-coral fill-none stroke-current"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 9.9-1" />
        </svg>
      );
    case 'hours':
    default:
      return (
        <svg
          className="w-7 h-7 text-coral fill-none stroke-current"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
  }
}

export default function Features() {
  return (
    <section
      aria-label="Core service features"
      className="bg-sage text-forest py-16 sm:py-20 border-b border-forest/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          {/* Section Heading */}
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-forest tracking-tight">
              What you get when you call
            </h2>
          </div>

          {/* 5 Features: Divided by thin vertical lines on desktop, stacked on mobile (not boxed cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-forest/15 mt-10 sm:mt-12">
            {FEATURES.map((feature) => (
              <div
                key={feature.id}
                className="py-6 lg:py-0 lg:px-6 first:lg:pl-0 last:lg:pr-0 space-y-2.5 flex flex-col justify-start"
              >
                <div className="shrink-0" aria-hidden="true">
                  <FeatureIcon id={feature.id} />
                </div>
                <h3 className="text-lg font-extrabold font-heading text-forest tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-text/80 leading-relaxed font-normal">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

