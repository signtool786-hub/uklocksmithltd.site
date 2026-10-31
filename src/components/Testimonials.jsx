import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../config';

export default function Testimonials() {
  return (
    <section
      aria-label="Customer feedback and sample reviews"
      className="py-16 sm:py-24 bg-mist"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="space-y-12 sm:space-y-16"
        >
          {/* Header */}
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-forest tracking-tight">
              What customers say
            </h2>
            <p className="text-text/80 text-base sm:text-lg mt-3">
              Straightforward feedback from London residents and business owners we have helped back inside.
            </p>
          </div>

          {/* Two-Column Masonry Layout */}
          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {TESTIMONIALS.map((review) => (
              <div
                key={review.id}
                className="break-inside-avoid bg-white p-7 sm:p-8 rounded-[20px] shadow-sm hover:shadow-md transition-shadow border border-sage/80 flex flex-col justify-between"
              >
                <div>
                  {/* Star Rating */}
                  <div
                    className="flex items-center gap-1 text-coral mb-4"
                    aria-label={`${review.rating} out of 5 stars`}
                  >
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-text/85 text-base sm:text-lg leading-relaxed font-normal italic">
                    “{review.quote}”
                  </p>
                </div>

                {/* Footer with Avatar and Caption */}
                <div className="pt-6 mt-6 border-t border-sage/60 flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full bg-coral text-forest font-heading font-extrabold text-lg flex items-center justify-center shrink-0 shadow-sm"
                    aria-hidden="true"
                  >
                    {review.initial}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-forest">
                      {review.name}
                    </h3>
                    <p className="text-xs text-text/70 font-medium">
                      {review.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

