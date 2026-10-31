import { useState, useEffect } from 'react';
import { PHONE } from '../config';

export default function FloatingCall() {
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const footer = document.getElementById('site-footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNearFooter(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <aside
      aria-label="Quick contact"
      className={`fixed bottom-6 right-6 z-30 transition-all duration-300 ease-in-out ${
        isNearFooter
          ? 'opacity-0 translate-y-6 pointer-events-none'
          : 'opacity-100 translate-y-0 pointer-events-auto'
      }`}
    >
      <a
        href={PHONE.tel}
        className="group flex items-center justify-center bg-coral text-forest font-bold rounded-full p-3.5 md:p-3.5 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
        aria-label={`Call UK Locksmith LTD at ${PHONE.display}`}
      >
        {/* Phone icon */}
        <span className="flex items-center justify-center shrink-0 w-6 h-6">
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </span>

        {/* Mobile: visible as a pill with the number */}
        <span className="inline-block md:hidden text-xs font-bold pl-2 tracking-wide whitespace-nowrap">
          {PHONE.display}
        </span>

        {/* Desktop: number appears on hover */}
        <span className="hidden md:inline-block max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out pl-0 group-hover:pl-2 text-sm font-bold tracking-wide">
          {PHONE.display}
        </span>
      </a>
    </aside>
  );
}

