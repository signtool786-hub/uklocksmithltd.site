import { motion } from 'framer-motion';
import { WHY_US_STEPS, IMAGES } from '../config';
import CallButton from './CallButton';

export default function WhyUs() {
  return (
    <section
      aria-label="Why choose UK Locksmith LTD"
      className="bg-forest text-mist py-16 sm:py-24 border-t border-forest2"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
        >
          {/* Left Column: Short Heading and Call Action */}
          <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-28">
            <span className="text-xs uppercase font-bold tracking-widest text-coral">
              Our Commitment
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-mist tracking-tight leading-[1.15]">
              Why Londoners choose us
            </h2>
            <p className="text-mist/80 text-base sm:text-lg leading-relaxed font-normal">
              When you face an unexpected lock problem, you need an honest tradesperson
              who turns up quickly and does clean, reliable work with zero hidden costs.
            </p>
            <div className="pt-2">
              <CallButton label="Call" className="py-3.5 px-6 text-base shadow-md" />
            </div>

            {/* Why Us locksmith tools & keys knolling image */}
            <div className="pt-3 overflow-hidden rounded-[20px] shadow-lg border border-forest2/80 bg-forest2">
              <img
                src={IMAGES.whyUs.src}
                srcSet={IMAGES.whyUs.srcSet}
                sizes="(min-width: 1024px) 460px, 100vw"
                alt={IMAGES.whyUs.alt}
                width={IMAGES.whyUs.width}
                height={IMAGES.whyUs.height}
                loading="lazy"
                className="w-full h-auto object-cover rounded-[20px]"
              />
            </div>
          </div>

          {/* Right Column: Vertical Timeline of Four Reasons */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Vertical connecting coral line - centered at x=16px (left-4) */}
              <div
                className="absolute left-4 top-4 bottom-6 w-0.5 bg-coral"
                aria-hidden="true"
              />

              <div className="space-y-8 sm:space-y-10">
                {WHY_US_STEPS.map((step) => (
                  <div key={step.number} className="relative pl-12 sm:pl-14">
                    {/* Numbered dot sitting on the coral line (w-8 = 32px, center at 16px) */}
                    <div
                      className="absolute left-0 top-0 w-8 h-8 rounded-full bg-forest border-2 border-coral text-coral font-heading font-extrabold text-sm flex items-center justify-center z-10 shadow-sm"
                      aria-hidden="true"
                    >
                      {step.number}
                    </div>

                    {/* Step Title & Description */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-mist tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-mist/80 text-sm sm:text-base leading-relaxed mt-1.5 max-w-xl">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
