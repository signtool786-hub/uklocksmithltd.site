import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PHONE, HOURS, IMAGES } from '../config';
import CallButton from './CallButton';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative overflow-hidden bg-mist pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial={false}
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center"
        >
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 z-10">
            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-forest tracking-tight leading-[1.14]"
            >
              Locked out?{' '}
              <span className="relative inline-block">
                <span className="relative z-10">We'll be there fast.</span>
                <span
                  className="absolute left-0 bottom-1 sm:bottom-2 w-full h-3 sm:h-4 bg-coral -z-0 rounded-sm opacity-90"
                  aria-hidden="true"
                />
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-text/85 max-w-xl leading-relaxed font-normal"
            >
              Vetted local London locksmith. Honest price quoted before we set off,
              open {HOURS}. Fast response across all boroughs with non-destructive
              entry whenever possible.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 sm:gap-5 pt-2"
            >
              <CallButton label="Call" className="py-3.5 px-6 text-base shadow-md" />
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 font-bold text-forest hover:text-coral transition-colors underline underline-offset-4 decoration-2 focus-visible:outline-2 focus-visible:outline-coral rounded-sm text-base py-2"
              >
                <span>See what we fix</span>
                <span aria-hidden="true">→</span>
              </Link>
            </motion.div>

            {/* Highlights */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 sm:gap-6 pt-3 text-xs sm:text-sm text-text/75 font-semibold"
            >
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-forest shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>No call-out fee</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-forest shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Non-destructive entry</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-forest shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>All London postcodes</span>
              </div>
            </motion.div>
          </div>

          {/* Right Image Column with Bleed on Desktop */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
          >
            <div className="lg:-mr-16 xl:-mr-28 lg:w-[calc(100%+4rem)] xl:w-[calc(100%+7rem)] relative">
              {/* Image slot with rounded 20px corners */}
              <div className="rounded-[20px] shadow-lg overflow-hidden border border-sage/80 bg-sage aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] flex items-center justify-center relative">
                <img
                  src={IMAGES.hero.src}
                  srcSet={IMAGES.hero.srcSet}
                  sizes="(min-width: 1280px) 680px, (min-width: 1024px) 520px, 100vw"
                  alt={IMAGES.hero.alt}
                  width={IMAGES.hero.width}
                  height={IMAGES.hero.height}
                  loading="eager"
                  fetchpriority="high"
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div>

              {/* Overlapping White Call Card: Below on 390px, overlapping at bottom-left on sm+ */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:left-4 lg:-left-8 z-20 bg-white text-forest p-4 sm:p-5 rounded-[20px] shadow-xl border border-sage/80 max-w-sm">
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-forest/70 block">
                    Direct Dispatch Line
                  </span>
                  <a
                    href={PHONE.tel}
                    className="text-xl sm:text-2xl font-extrabold font-heading text-forest hover:text-coral transition-colors flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-coral rounded-md"
                    aria-label={`Call direct: ${PHONE.display}`}
                  >
                    <svg
                      className="w-5 h-5 text-coral shrink-0 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    <span>{PHONE.display}</span>
                  </a>

                  <p className="text-xs font-bold text-forest/80 uppercase tracking-wide flex items-center gap-1.5 pt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                    <span>Open {HOURS}</span>
                  </p>
                  <p className="text-xs text-text/80 font-medium">
                    Price quoted before we set off
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
