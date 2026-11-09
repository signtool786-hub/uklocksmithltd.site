import { Link, useLocation } from 'react-router-dom';
import { BRAND, PHONE, HOURS, NAV_LINKS, AREAS_LIST, AREAS } from '../config';
import CallButton from './CallButton';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const currentArea = AREAS.find((a) => `/locksmith/${a.slug}` === location.pathname);
  const isOutsideLondon = currentArea?.outside_london;

  return (
    <footer id="site-footer" className="bg-forest text-mist pt-16 pb-12 mt-auto border-t border-forest2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Callout Banner */}
        <div className="border-b border-forest2/80 pb-12 mb-12">
          <div className="max-w-3xl">
            <p className="text-coral font-bold text-sm tracking-widest uppercase mb-2">
              {isOutsideLondon ? 'Available 24/7 • Mobile Dispatch' : 'Available 24/7 Across London'}
            </p>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-mist mb-3">
              Locked out or need a lock changed immediately?
            </h2>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <a
                href={PHONE.tel}
                className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-coral hover:underline tracking-tight focus-visible:outline-2 focus-visible:outline-coral rounded-md inline-block"
              >
                {PHONE.display}
              </a>
              <CallButton label="Call" className="ml-0 sm:ml-4 py-3" />
            </div>
          </div>
        </div>

        {/* Multi-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-forest2/80">
          {/* Column 1: Business Overview */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg text-mist">{BRAND}</h3>
            <p className="text-mist/80 text-sm leading-relaxed">
              {isOutsideLondon
                ? 'Straightforward mobile locksmith services with upfront fixed quotes. Fast response for lockouts, snapped keys, lock changes, and emergency repairs.'
                : 'Straightforward mobile locksmith services serving Greater London. Fast response for lockouts, snapped keys, lock changes, and emergency repairs.'}
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-forest2 text-coral border border-coral/20">
                {HOURS}
              </span>
            </div>
          </div>

          {/* Column 2: Pages Navigation */}
          <div>
            <h3 className="font-heading font-bold text-base text-mist mb-4">Pages</h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-mist/80 hover:text-coral transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-coral rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/areas"
                  className="text-mist/80 hover:text-coral transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-coral rounded-sm"
                >
                  Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Coverage Areas */}
          <div>
            <h3 className="font-heading font-bold text-base text-mist mb-4">Service Areas</h3>
            <ul className="space-y-2.5 text-sm">
              {!isOutsideLondon &&
                AREAS_LIST.map((area) => (
                  <li key={area.name}>
                    <Link
                      to={area.path}
                      className="text-mist/80 hover:text-coral transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-coral rounded-sm"
                    >
                      {area.name}
                    </Link>
                  </li>
                ))}
              {isOutsideLondon && (
                <>
                  <li>
                    <Link
                      to="/areas"
                      className="text-mist/80 hover:text-coral transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-coral rounded-sm"
                    >
                      All Coverage Locations (A–Z)
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      className="text-mist/80 hover:text-coral transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-coral rounded-sm"
                    >
                      Emergency & Standard Services
                    </Link>
                  </li>
                </>
              )}
              <li>
                <Link
                  to="/areas"
                  className="inline-block text-xs font-bold text-coral hover:underline mt-1"
                >
                  {isOutsideLondon ? 'View all service areas →' : 'View all London coverage →'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours & Emergency */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-base text-mist mb-4">Operating Hours</h3>
            <p className="text-mist/80 text-sm leading-relaxed">
              <strong className="text-mist font-semibold">Emergency Dispatch:</strong> 24 hours a day, 365 days a year.
            </p>
            <p className="text-mist/80 text-sm leading-relaxed">
              <strong className="text-mist font-semibold">Location:</strong> {isOutsideLondon ? 'Serving your regional postcode area.' : 'Serving all London postcodes.'}
            </p>
            <div className="pt-2">
              <p className="text-xs text-mist/60">
                Direct phone line for quick response times and upfront quotes.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-mist/60">
          <p>© {currentYear} {BRAND}. All rights reserved.{isOutsideLondon ? ' UK.' : ' London, UK.'}</p>
          <p>Clear pricing. Honest advice. No hidden costs.</p>
        </div>
      </div>
    </footer>
  );
}

