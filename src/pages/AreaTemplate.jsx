import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AREAS,
  AREA_DESCRIPTIONS,
  PILOT_AREAS,
  PHONE,
  SITE,
  BRAND,
} from '../config';
import Seo from '../components/Seo';
import CallButton from '../components/CallButton';
import ServicesBlock from '../components/ServicesBlock';
import Cta from '../components/Cta';
import NotFound from './NotFound';

export default function AreaTemplate({ slug: propSlug }) {
  const params = useParams();
  const slug = propSlug || params.slug;

  const area = AREAS.find((a) => a.slug === slug);
  if (!area) {
    return <NotFound />;
  }

  const isPilot = PILOT_AREAS[slug] !== undefined;
  const pilotData = isPilot ? PILOT_AREAS[slug] : null;

  // Final metadata
  const metaTitle = area.title;
  const metaDescription = AREA_DESCRIPTIONS[slug] || '';
  const canonicalPath = `/locksmith/${slug}`;
  const h1Text = area.outside_london
    ? `Locksmith in ${area.city}`
    : `Local Locksmith in ${area.city}`;

  const breadcrumbs = [
    { name: 'Home', item: SITE },
    { name: 'Areas', item: `${SITE}/areas` },
    { name: area.city, item: `${SITE}/locksmith/${slug}` },
  ];

  // Accordion state for FAQs
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <Seo
        title={metaTitle}
        description={metaDescription}
        path={canonicalPath}
        includeSchema={true}
        areaServed={area.city}
        breadcrumbs={breadcrumbs}
        noindex={!isPilot}
      />

      {/* 1. Hero: H1, one line written for that area, call button with the number */}
      <section className="bg-forest text-mist py-12 sm:py-16 lg:py-20 border-b border-forest2 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Breadcrumb visual navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-mist/70 font-medium">
              <li>
                <Link to="/" className="hover:text-coral transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">•</li>
              <li>
                <Link to="/areas" className="hover:text-coral transition-colors">
                  Areas
                </Link>
              </li>
              <li aria-hidden="true">•</li>
              <li className="text-coral font-bold" aria-current="page">
                {area.city}
              </li>
            </ol>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="max-w-3xl space-y-5"
          >
            <span className="text-xs uppercase font-bold tracking-widest text-coral">
              {area.outside_london ? 'Mobile Locksmith Unit' : 'London Mobile Locksmith Unit'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-mist tracking-tight leading-[1.15]">
              {h1Text}
            </h1>
            <p className="text-mist/85 text-base sm:text-lg font-normal leading-relaxed">
              {isPilot
                ? pilotData.heroLine
                : area.outside_london
                ? `Professional mobile lock opening, lock replacement, and key services across ${area.city}.`
                : `Fast mobile lock opening, lock replacements, and door repairs across ${area.city}.`}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <CallButton label="Call" className="py-3.5 px-6 text-base shadow-lg" />
              <a
                href={PHONE.tel}
                className="text-2xl sm:text-3xl font-heading font-extrabold text-coral hover:underline tracking-tight"
                aria-label={`Call directly: ${PHONE.display}`}
              >
                {PHONE.display}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FULL CONTENT FOR PILOT CITIES */}
      {isPilot && (
        <>
          {/* 2. Local Intro: 120 to 180 words, unique to the area */}
          <section aria-label={`About our locksmith service in ${area.city}`} className="py-16 sm:py-20 bg-white border-b border-sage/60">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/60 text-forest text-xs font-bold tracking-wide">
                  <span>Local mobile dispatch</span>
                  <span>•</span>
                  <span>{area.city}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-forest tracking-tight">
                  Direct locksmith support in {area.city}
                </h2>
                <div className="prose prose-lg text-text/85 leading-relaxed space-y-4 font-normal text-base sm:text-lg">
                  <p>{pilotData.intro}</p>
                  {/* TODO: Confirm with the business that this area is covered. */}
                </div>
              </motion.div>
            </div>
          </section>

          {/* 3. Common lock problems in {City}: 4 realistic problems */}
          <section aria-label={`Common lock problems in ${area.city}`} className="py-16 sm:py-24 bg-mist border-b border-sage/60">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
              <div className="max-w-2xl">
                <span className="text-xs uppercase font-bold tracking-widest text-coral">
                  Area Insights
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-forest tracking-tight mt-1">
                  Common lock problems in {area.city}
                </h2>
                <p className="text-text/80 text-base sm:text-lg mt-3 leading-relaxed">
                  Different types of property in {area.city} experience distinct lock challenges. Here are four common issues we resolve on site.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {pilotData.commonProblems.map((prob, idx) => (
                  <motion.div
                    key={prob.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: idx * 0.08, ease: 'easeOut' }}
                    className="bg-white p-6 sm:p-8 rounded-[20px] shadow-sm border border-sage/80 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="w-9 h-9 rounded-full bg-sage flex items-center justify-center text-forest font-bold text-sm font-heading">
                        {idx + 1}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold font-heading text-forest">
                        {prob.title}
                      </h3>
                      <p className="text-sm sm:text-base text-text/80 leading-relaxed">
                        {prob.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. Services section for this area */}
          <ServicesBlock area={area.city} full={true} />

          {/* 5. 3 area-specific FAQs, different questions per city */}
          <section aria-label={`Frequently asked questions about ${area.city} locksmith services`} className="py-16 sm:py-24 bg-white border-b border-sage/60">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-5">
                  <span className="text-xs uppercase font-bold tracking-widest text-coral">
                    {area.city} Advice
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-forest tracking-tight leading-[1.15]">
                    Frequently asked questions
                  </h2>
                  <p className="text-text/80 text-base leading-relaxed">
                    Clear answers regarding our lock opening, repair, and replacement services across {area.city}.
                  </p>
                  <div className="pt-2">
                    <CallButton label="Call" className="py-3.5 px-6 text-base shadow-md w-full sm:w-auto" />
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-4">
                  {pilotData.faqs.map((faq, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div
                        key={faq.question}
                        className="bg-mist rounded-[20px] border border-sage/80 shadow-sm overflow-hidden"
                      >
                        <button
                          type="button"
                          id={`faq-btn-${index}`}
                          aria-expanded={isOpen}
                          aria-controls={`faq-pnl-${index}`}
                          onClick={() => toggleFaq(index)}
                          className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-heading font-bold text-lg text-forest hover:text-coral transition-colors rounded-[20px] focus-visible:outline-2 focus-visible:outline-coral"
                        >
                          <span>{faq.question}</span>
                          <span
                            className={`w-8 h-8 rounded-full bg-sage flex items-center justify-center shrink-0 text-forest transition-all duration-300 ${
                              isOpen ? 'rotate-180 bg-coral text-forest' : ''
                            }`}
                            aria-hidden="true"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              id={`faq-pnl-${index}`}
                              role="region"
                              aria-labelledby={`faq-btn-${index}`}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-text/80 text-sm sm:text-base leading-relaxed border-t border-sage/50 pt-4">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* 6. Nearby areas: 3 to 5 neighbours that exist in AREAS list */}
          <section aria-label="Nearby service areas" className="py-16 sm:py-20 bg-mist border-b border-sage/60">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
              <div className="max-w-xl">
                <span className="text-xs uppercase font-bold tracking-widest text-coral">
                  Coverage
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-forest tracking-tight mt-1">
                  Nearby areas we cover
                </h2>
                <p className="text-text/80 text-sm sm:text-base mt-2">
                  Our mobile engineers cover {area.city} and surrounding neighbouring areas daily.
                </p>
                {/* TODO: Confirm verified postcode districts for each area before displaying postal codes. */}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {pilotData.nearbySlugs.map((nSlug) => {
                  const neighbour = AREAS.find((a) => a.slug === nSlug);
                  if (!neighbour) return null;
                  return (
                    <Link
                      key={neighbour.slug}
                      to={`/locksmith/${neighbour.slug}`}
                      className="bg-white p-4 sm:p-5 rounded-[16px] border border-sage/80 hover:border-coral shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
                    >
                      <span className="font-heading font-bold text-forest group-hover:text-coral transition-colors text-base">
                        {neighbour.city}
                      </span>
                      <span className="text-xs text-text/60 group-hover:text-coral mt-3 flex items-center gap-1 font-semibold">
                        <span>View area</span>
                        <span aria-hidden="true">→</span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}

      {/* TEMPORARY MINIMAL PAGE FOR THE OTHER 54 CITIES (noindex) */}
      {!isPilot && (
        <section
          aria-label={`Locksmith service overview for ${area.city}`}
          className="py-16 sm:py-24 bg-mist border-b border-sage/60"
        >
          {/* TEMPORARY MINIMAL PAGE (noindex) - Pending full content rollout for ${area.city}. Remove noindex once completed. */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8 text-center sm:text-left">
            <div className="bg-white p-8 sm:p-10 rounded-[20px] border border-sage/80 shadow-sm space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-sage/70 text-forest text-xs font-bold tracking-wide">
                Mobile Locksmith Dispatch
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-forest tracking-tight">
                Mobile locksmith service in {area.city}
              </h2>
              <div className="text-text/85 text-base sm:text-lg leading-relaxed space-y-4">
                {area.outside_london ? (
                  <>
                    <p>
                      We provide mobile lock opening, lock repairs, and lock replacement services across {area.city}.
                      Arrival time depends on distance and is confirmed when you call.
                    </p>
                    {/* TODO: Confirm with the business that this area is covered. */}
                    <p>
                      Every quotation is agreed over the phone before our engineer sets off. We carry British Standard locks, anti-snap euro cylinders, and precision non-destructive entry tools in our mobile inventory.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      We provide mobile lock opening, lock repairs, and lock replacement services across {area.city}.
                      Contact us directly for an upfront fixed quote.
                    </p>
                    <p>
                      Our mobile locksmith units carry British Standard mortice deadlocks, multi-point uPVC mechanisms, and non-destructive opening tools to resolve lockouts cleanly in a single visit.
                    </p>
                  </>
                )}
              </div>

              <div className="pt-4 border-t border-sage/60 flex flex-wrap items-center gap-4 justify-center sm:justify-start">
                <CallButton label="Call" className="py-3 px-6 text-sm" />
                <Link
                  to="/areas"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-sage text-forest font-bold text-sm hover:bg-forest hover:text-mist transition-colors"
                >
                  <span>View all coverage areas</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 7. CTA with the city in the title */}
      <Cta
        title={`Locked out or need a lock changed in ${area.city}?`}
        outsideLondon={area.outside_london}
      />
    </>
  );
}

