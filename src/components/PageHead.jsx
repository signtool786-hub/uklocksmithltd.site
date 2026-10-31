import { motion } from 'framer-motion';

export default function PageHead({ title, description }) {
  return (
    <section className="bg-forest text-mist py-12 sm:py-16 border-b border-forest2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-mist tracking-tight leading-[1.15]">
            {title}
          </h1>
          {description && (
            <p className="text-mist/85 text-base sm:text-lg mt-3 font-normal leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

