import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../config';
import CallButton from './CallButton';

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      aria-label="Frequently asked questions"
      className="py-16 sm:py-24 bg-mist"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
        >
          {/* Left Column: Sticky Intro with CallButton */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-5">
            <span className="text-xs uppercase font-bold tracking-widest text-coral">
              Helpful Answers
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-forest tracking-tight leading-[1.15]">
              Frequently asked questions
            </h2>
            <p className="text-text/80 text-base sm:text-lg leading-relaxed font-normal">
              Straightforward details about how our mobile locksmiths operate across London.
              No surprises, no hidden call-out charges.
            </p>
            <div className="pt-2">
              <CallButton label="Call" className="py-3.5 px-6 text-base shadow-md w-full sm:w-auto" />
            </div>
            <div className="pt-4 border-t border-sage/80 text-xs text-text/70 space-y-1">
              <p className="font-semibold text-forest">Need advice right now?</p>
              <p>Our line is open 24/7 for urgent lock assistance and quotes.</p>
            </div>
          </div>

          {/* Right Column: Accessible Animated Accordion */}
          <div className="lg:col-span-8 space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="bg-white rounded-[20px] border border-sage/80 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    id={`faq-button-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => toggle(index)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-heading font-bold text-lg sm:text-xl text-forest hover:text-coral transition-colors rounded-[20px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`w-8 h-8 rounded-full bg-sage flex items-center justify-center shrink-0 text-forest transition-all duration-300 ${
                        isOpen ? 'rotate-180 bg-coral text-forest' : ''
                      }`}
                      aria-hidden="true"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${index}`}
                        role="region"
                        aria-labelledby={`faq-button-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-text/85 text-sm sm:text-base leading-relaxed border-t border-sage/40 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
