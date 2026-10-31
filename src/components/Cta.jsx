import { motion } from 'framer-motion';
import { PHONE, HOURS, CTA_STEPS, IMAGES } from '../config';
import CallButton from './CallButton';

export default function Cta({ title }) {
  const displayTitle = title || 'Locked out or need a lock replaced right now?';

  return (
    <section
      aria-label="Emergency call to action"
      className="bg-forest text-mist py-16 sm:py-20 border-y border-forest2 relative overflow-hidden"
    >
      {/* Out-of-focus London street background with dark forest overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-20 mix-blend-luminosity"
        style={{ backgroundImage: `url(${IMAGES.ctaBg.src})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-forest/85 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
        >
          {/* Left Column: Direct Call Info */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-coral">
              Direct London Dispatch Line
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-mist tracking-tight leading-[1.15]">
              {displayTitle}
            </h2>
            <p className="text-mist/85 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Speak straight to an experienced local engineer. No overseas call centres,
              no automated phone menus, and no surprise add-on fees.
            </p>

            {/* Very large phone number as a tel: link */}
            <div className="pt-2">
              <a
                href={PHONE.tel}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-coral hover:underline tracking-tight inline-block focus-visible:outline-2 focus-visible:outline-coral rounded-md"
                aria-label={`Call directly: ${PHONE.display}`}
              >
                {PHONE.display}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <CallButton label="Call" className="py-3.5 px-6 text-base shadow-lg" />
              <span className="text-xs text-mist/70 font-semibold uppercase tracking-wider">
                Open {HOURS}
              </span>
            </div>
          </div>

          {/* Right Column: 3-Step What Happens When You Call */}
          <div className="lg:col-span-5 bg-forest2/70 p-6 sm:p-8 rounded-[20px] border border-forest2/90 shadow-md">
            <h3 className="text-xl font-bold font-heading text-mist mb-6 flex items-center gap-2">
              <span>What happens when you call</span>
            </h3>

            <div className="space-y-6">
              {CTA_STEPS.map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div
                    className="w-8 h-8 rounded-full bg-forest border-2 border-coral text-coral font-heading font-extrabold text-sm flex items-center justify-center shrink-0 shadow-sm mt-0.5"
                    aria-hidden="true"
                  >
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-heading text-mist">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-mist/80 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-forest2/90 flex items-center justify-between text-xs text-mist/70">
              <span>Fixed quote over the phone</span>
              <span>•</span>
              <span>All London postcodes</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

