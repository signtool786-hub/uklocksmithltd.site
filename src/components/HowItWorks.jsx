import { motion } from 'framer-motion';
import { CTA_STEPS, PHONE } from '../config';
import CallButton from './CallButton';

export default function HowItWorks() {
  return (
    <section
      aria-label="How our locksmith service works"
      className="bg-sage text-forest py-16 sm:py-20 border-b border-forest/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="space-y-12 sm:space-y-16"
        >
          {/* Section Heading */}
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-widest text-coral">
              Straightforward Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-forest tracking-tight mt-1">
              How it works
            </h2>
            <p className="text-text/80 text-base sm:text-lg mt-3">
              From your initial call to getting back inside your property, here is what to expect.
            </p>
          </div>

          {/* 3 Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CTA_STEPS.map((item) => (
              <div
                key={item.step}
                className="bg-mist p-7 sm:p-8 rounded-[20px] shadow-sm border border-sage/60 flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-10 h-10 rounded-full bg-forest text-coral font-heading font-extrabold text-base flex items-center justify-center shrink-0 mb-5 shadow-sm"
                    aria-hidden="true"
                  >
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold font-heading text-forest tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-text/80 text-sm sm:text-base leading-relaxed mt-2.5">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-sage/50 text-xs font-semibold text-text/70">
                  {item.step === 1 && 'Direct engineer line'}
                  {item.step === 2 && 'Zero surprise add-ons'}
                  {item.step === 3 && 'Non-destructive focus'}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Call CTA */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm font-semibold text-text/80">
              Need immediate advice or an urgent call-out?
            </p>
            <CallButton label="Call" className="py-2.5 px-5 text-sm" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

