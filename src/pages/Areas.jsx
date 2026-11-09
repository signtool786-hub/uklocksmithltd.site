import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import PageHead from '../components/PageHead';
import { AREAS, PHONE, HOURS, BRAND } from '../config';
import CallButton from '../components/CallButton';
import Cta from '../components/Cta';

export default function Areas() {
  // Sort areas alphabetically by city
  const sortedAreas = useMemo(() => {
    return [...AREAS].sort((a, b) => a.city.localeCompare(b.city));
  }, []);

  // Group areas by first letter
  const groupedAreas = useMemo(() => {
    const groups = {};
    for (const a of sortedAreas) {
      const letter = a.city[0].toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(a);
    }
    return groups;
  }, [sortedAreas]);

  const letters = Object.keys(groupedAreas).sort();

  return (
    <>
      <Seo
        title="Areas We Cover | UK Locksmith LTD"
        description="Alphabetical directory of all 60 locksmith service areas across Greater London and surrounding regions. Fast mobile dispatch and fixed quotes on 07782 358 889."
        path="/areas"
        includeSchema={true}
      />
      <PageHead
        title="Areas We Cover"
        description="Alphabetical index of all 60 locations served by our mobile locksmith engineers. Direct phone line with agreed upfront quotes."
      />

      <section aria-label="Alphabetical area directory" className="py-16 sm:py-24 bg-mist">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          {/* Quick letter navigation bar */}
          <div className="bg-white p-4 sm:p-6 rounded-[20px] border border-sage/80 shadow-sm">
            <h2 className="text-xs uppercase font-bold tracking-widest text-text/60 mb-3">
              Jump to letter
            </h2>
            <div className="flex flex-wrap gap-2 text-sm font-bold font-heading">
              {letters.map((letter) => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="w-8 h-8 rounded-full bg-mist hover:bg-coral hover:text-forest transition-colors flex items-center justify-center text-forest"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>

          {/* Grouped Alphabetical Sections */}
          <div className="space-y-12">
            {letters.map((letter) => (
              <div
                key={letter}
                id={`letter-${letter}`}
                className="scroll-mt-24 space-y-4"
              >
                <div className="flex items-center gap-3 border-b border-sage/80 pb-2">
                  <span className="w-10 h-10 rounded-full bg-forest text-coral font-heading font-extrabold text-lg flex items-center justify-center shrink-0">
                    {letter}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-forest">
                    {letter} ({groupedAreas[letter].length} {groupedAreas[letter].length === 1 ? 'area' : 'areas'})
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {groupedAreas[letter].map((area) => (
                    <Link
                      key={area.slug}
                      to={`/locksmith/${area.slug}`}
                      className="bg-white p-4 rounded-[16px] border border-sage/80 hover:border-coral shadow-sm hover:shadow-md transition-all group flex items-center justify-between"
                    >
                      <div>
                        <h4 className="font-heading font-bold text-base text-forest group-hover:text-coral transition-colors">
                          {area.city}
                        </h4>
                        <span className="text-[11px] text-text/60 font-semibold uppercase tracking-wider">
                          {area.outside_london ? 'Mobile Unit' : '24/7 Mobile'}
                        </span>
                      </div>
                      <span className="text-forest group-hover:text-coral transition-colors" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom helper card */}
          <div className="p-8 rounded-[20px] bg-sage border border-forest/10 flex flex-wrap items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="font-heading font-bold text-xl text-forest">
                Do not see your exact neighbourhood listed?
              </h3>
              <p className="text-text/80 text-sm">
                If you are in or near Greater London, our mobile units cover surrounding postcodes daily.
              </p>
            </div>
            <CallButton label="Call" className="py-3 px-6 text-sm" />
          </div>
        </div>
      </section>

      <Cta title="Locked out or need a lock replaced?" />
    </>
  );
}
