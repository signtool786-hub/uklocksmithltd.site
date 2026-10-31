import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BRAND, NAV_LINKS, PHONE, HOURS } from '../config';
import CallButton from './CallButton';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Lock scroll when mobile menu is active
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'bg-forest text-mist shadow-md py-3.5'
            : 'bg-mist/90 backdrop-blur-md text-forest py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl sm:text-2xl font-extrabold font-heading tracking-tight flex items-center gap-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
            aria-label={`${BRAND} Home`}
          >
            <span
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-mist' : 'text-forest'
              }`}
            >
              {BRAND}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors duration-200 relative py-1 focus-visible:outline-2 focus-visible:outline-coral rounded-sm ${
                    isActive
                      ? 'text-coral font-bold'
                      : isScrolled
                      ? 'text-mist/90 hover:text-coral'
                      : 'text-text/90 hover:text-coral'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-0 h-0.5 bg-coral rounded-full" />
                  )}
                </Link>
              );
            })}
            <CallButton label="Call" className="ml-2" />
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            className="p-2 -mr-2 rounded-lg md:hidden focus-visible:outline-2 focus-visible:outline-coral"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between" aria-hidden="true">
              <span
                className={`w-full h-0.5 rounded-full transition-all duration-300 origin-left ${
                  isScrolled ? 'bg-mist' : 'bg-forest'
                } ${isMenuOpen ? 'rotate-45 translate-x-1' : ''}`}
              />
              <span
                className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                  isScrolled ? 'bg-mist' : 'bg-forest'
                } ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <span
                className={`w-full h-0.5 rounded-full transition-all duration-300 origin-left ${
                  isScrolled ? 'bg-mist' : 'bg-forest'
                } ${isMenuOpen ? '-rotate-45 translate-x-1' : ''}`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Panel */}
      <div
        className={`fixed inset-0 bg-forest text-mist z-50 flex flex-col justify-between p-6 transition-all duration-300 md:hidden ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto visible'
            : 'opacity-0 pointer-events-none invisible'
        }`}
        aria-modal="true"
        role="dialog"
        aria-label="Navigation menu"
      >
        {/* Mobile Header Bar with Logo and Close */}
        <div className="flex items-center justify-between">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-extrabold font-heading text-mist focus-visible:outline-2 focus-visible:outline-coral"
          >
            {BRAND}
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 text-mist hover:text-coral transition-colors focus-visible:outline-2 focus-visible:outline-coral rounded-lg"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Links */}
        <nav className="flex flex-col gap-6 py-8">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl font-bold font-heading transition-colors focus-visible:outline-2 focus-visible:outline-coral ${
                  isActive ? 'text-coral pl-2 border-l-4 border-coral' : 'text-mist hover:text-coral'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Panel Footer */}
        <div className="pt-6 border-t border-forest2/70 space-y-4">
          <p className="text-xs uppercase tracking-wider text-mist/70 font-semibold">
            {HOURS}
          </p>
          <CallButton label="Call" className="w-full py-3.5 text-base shadow-lg" />
        </div>
      </div>
    </>
  );
}

