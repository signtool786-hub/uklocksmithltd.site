import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SERVICES, PHONE, IMAGES } from '../config';
import CallButton from './CallButton';

function ServiceIcon({ id, className = 'w-8 h-8' }) {
  switch (id) {
    case 'emergency-lockout':
      return (
        <svg
          className={`${className} text-coral shrink-0`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
          />
        </svg>
      );
    case 'lock-change-repair':
      return (
        <svg
          className={`${className} text-coral shrink-0`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      );
    case 'snapped-key-extraction':
      return (
        <svg
          className={`${className} text-coral shrink-0`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
          />
        </svg>
      );
    case 'upvc-door-locks':
      return (
        <svg
          className={`${className} text-coral shrink-0`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m-4-8h8" />
        </svg>
      );
    case 'commercial-locks':
      return (
        <svg
          className={`${className} text-coral shrink-0`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      );
    case 'burglary-repairs':
    default:
      return (
        <svg
          className={`${className} text-coral shrink-0`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      );
  }
}

export default function ServicesBlock({ full = false, area }) {
  // Heading text adapts according to props
  let headingText = 'What we fix';
  let subText = 'Direct emergency and scheduled locksmith services across London.';

  if (area) {
    headingText = `Locksmith services in ${area}`;
    subText = `Emergency lockouts, lock replacements, and repair services for ${area} homes and businesses.`;
  } else if (full) {
    headingText = 'All locksmith services';
    subText = 'Comprehensive domestic and commercial lock solutions with upfront fixed pricing.';
  }

  const primaryServices = SERVICES.filter((s) => s.isPrimary);
  const secondaryServices = SERVICES.filter((s) => !s.isPrimary);

  return (
    <section
      aria-label="Locksmith services"
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
          {/* Header section */}
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-forest tracking-tight">
              {headingText}
            </h2>
            <p className="text-text/80 text-base sm:text-lg mt-3">
              {subText}
            </p>
          </div>

          {/* Desktop Bento Grid: 2 large tiles + 4 smaller tiles. Mobile: 1 column */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {/* Tile 1 (Large - Emergency Lockout): 7 columns on desktop */}
            {primaryServices[0] && (
              <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-[20px] shadow-sm hover:shadow-md transition-shadow border border-sage/80 flex flex-col justify-between group">
                <div>
                  {/* Service Image with subtle hover zoom */}
                  <div className="overflow-hidden rounded-[16px] mb-5 aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/9] bg-sage border border-sage/60">
                    <img
                      src={IMAGES.services[primaryServices[0].id]?.src}
                      srcSet={IMAGES.services[primaryServices[0].id]?.srcSet}
                      sizes="(min-width: 1024px) 580px, 100vw"
                      alt={IMAGES.services[primaryServices[0].id]?.alt}
                      width={IMAGES.services[primaryServices[0].id]?.width}
                      height={IMAGES.services[primaryServices[0].id]?.height}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="p-3 bg-sage/60 rounded-2xl w-fit">
                      <ServiceIcon id={primaryServices[0].id} className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-forest text-coral">
                      Fast 24/7 Response
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-forest tracking-tight">
                    {primaryServices[0].title}
                  </h3>
                  <p className="text-text/85 text-base sm:text-lg leading-relaxed mt-3">
                    {primaryServices[0].shortDesc}
                  </p>
                  <p className="text-text/75 text-sm leading-relaxed mt-2">
                    {primaryServices[0].longDesc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-sage/50 flex flex-wrap items-center justify-between gap-4">
                  <CallButton label="Call" className="py-2.5 px-5 text-sm" />
                  <span className="text-xs font-semibold text-text/70">
                    Non-destructive methods prioritised
                  </span>
                </div>
              </div>
            )}

            {/* Tile 2 (Large - Lock Change and Repair): 5 columns on desktop */}
            {primaryServices[1] && (
              <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-[20px] shadow-sm hover:shadow-md transition-shadow border border-sage/80 flex flex-col justify-between group">
                <div>
                  {/* Service Image with subtle hover zoom */}
                  <div className="overflow-hidden rounded-[16px] mb-5 aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/9] bg-sage border border-sage/60">
                    <img
                      src={IMAGES.services[primaryServices[1].id]?.src}
                      srcSet={IMAGES.services[primaryServices[1].id]?.srcSet}
                      sizes="(min-width: 1024px) 440px, 100vw"
                      alt={IMAGES.services[primaryServices[1].id]?.alt}
                      width={IMAGES.services[primaryServices[1].id]?.width}
                      height={IMAGES.services[primaryServices[1].id]?.height}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="p-3 bg-sage/60 rounded-2xl w-fit">
                      <ServiceIcon id={primaryServices[1].id} className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-sage text-forest">
                      British Standard
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-forest tracking-tight">
                    {primaryServices[1].title}
                  </h3>
                  <p className="text-text/85 text-base leading-relaxed mt-3">
                    {primaryServices[1].shortDesc}
                  </p>
                  <p className="text-text/75 text-sm leading-relaxed mt-2">
                    {primaryServices[1].longDesc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-sage/50 flex flex-wrap items-center justify-between gap-4">
                  <a
                    href={PHONE.tel}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-forest hover:text-coral transition-colors underline underline-offset-4"
                  >
                    <span>Get a fixed lock quote</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            )}

            {/* 4 Smaller Tiles: 3 columns each on desktop */}
            {secondaryServices.map((service) => (
              <div
                key={service.id}
                className="lg:col-span-3 bg-white p-5 sm:p-6 rounded-[20px] shadow-sm hover:shadow-md transition-shadow border border-sage/80 flex flex-col justify-between group"
              >
                <div>
                  {/* Service Image with subtle hover zoom */}
                  <div className="overflow-hidden rounded-[14px] mb-4 aspect-[16/10] bg-sage border border-sage/50">
                    <img
                      src={IMAGES.services[service.id]?.src}
                      srcSet={IMAGES.services[service.id]?.srcSet}
                      sizes="(min-width: 1024px) 280px, 100vw"
                      alt={IMAGES.services[service.id]?.alt}
                      width={IMAGES.services[service.id]?.width}
                      height={IMAGES.services[service.id]?.height}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-2.5 bg-sage/50 rounded-xl w-fit mb-3">
                    <ServiceIcon id={service.id} className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-forest tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-text/80 text-xs sm:text-sm leading-relaxed mt-2">
                    {service.shortDesc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-sage/40">
                  <a
                    href={PHONE.tel}
                    className="inline-flex items-center gap-1 text-xs font-bold text-coral hover:underline"
                  >
                    <span>Book engineer</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Action Row: 'All services' button when full is false and no area is set */}
          {!full && !area && (
            <div className="pt-4 flex flex-wrap items-center gap-4 justify-between">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-forest text-mist font-bold text-sm tracking-wide shadow-sm hover:bg-forest2 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-coral"
              >
                <span>All services</span>
                <span aria-hidden="true">→</span>
              </Link>
              <div className="flex items-center gap-3">
                <span className="text-xs text-text/70 hidden sm:inline">
                  Need immediate help?
                </span>
                <CallButton label="Call" className="py-2.5 px-5 text-sm" />
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

