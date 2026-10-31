import { PHONE } from '../config';

export default function CallButton({ label, className = '' }) {
  const displayText = label ? `${label} ${PHONE.display}` : `Call ${PHONE.display}`;

  return (
    <a
      href={PHONE.tel}
      className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-coral text-forest font-bold text-sm tracking-wide shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral ${className}`}
      aria-label={`Call UK Locksmith at ${PHONE.display}`}
    >
      <svg
        className="w-4 h-4 shrink-0 fill-current"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
      <span>{displayText}</span>
    </a>
  );
}
