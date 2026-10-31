import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ABOUT_SUMMARY, IMAGES } from '../config';

export default function AboutBlock() {
  return (
    <section
      aria-label="About UK Locksmith LTD"
      className="py-16 sm:py-24 bg-mist overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
        >
          {/* Left Column: Image Slot */}
          <div className="lg:col-span-5">
            <div className="rounded-[20px] shadow-lg overflow-hidden border border-sage/80 bg-sage aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] flex items-center justify-center relative">
              <img
                src={IMAGES.about.src}
                srcSet={IMAGES.about.srcSet}
                sizes="(min-width: 1024px) 460px, 100vw"
                alt={IMAGES.about.alt}
                width={IMAGES.about.width}
                height={IMAGES.about.height}
                loading="lazy"
                className="w-full h-full object-cover rounded-[20px]"
              />
            </div>
          </div>

          {/* Right Column: Text & Content */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold font-heading text-forest tracking-tight leading-[1.18]">
              {ABOUT_SUMMARY.heading}
            </h2>

            <div className="space-y-4 text-text/85 text-base sm:text-lg leading-relaxed font-normal">
              <p>{ABOUT_SUMMARY.paragraphs[0]}</p>
              {/* Note: DBS & Insurance status subject to client confirmation as per TODO in config.js */}
              <p>{ABOUT_SUMMARY.paragraphs[1]}</p>
            </div>

            {/* Coral Pull-Quote */}
            <div className="pt-1">
              <p className="text-coral font-heading font-bold text-lg sm:text-xl leading-snug border-l-4 border-coral pl-4 py-1 italic">
                “{ABOUT_SUMMARY.pullQuote}”
              </p>
            </div>

            {/* Link button to /about */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-forest text-mist font-bold text-sm tracking-wide shadow-sm hover:bg-forest2 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-coral"
              >
                <span>{ABOUT_SUMMARY.buttonText}</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

