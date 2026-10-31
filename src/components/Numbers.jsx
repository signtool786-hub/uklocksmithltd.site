import { useState, useEffect, useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { STATS } from '../config';

function CounterItem({ stat }) {
  const [displayValue, setDisplayValue] = useState(stat.value);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();
  const started = useRef(false);

  useEffect(() => {
    if (shouldReduceMotion) return;

    if (isInView && !started.current) {
      started.current = true;
      const target = stat.value;
      if (target === 0) return;

      const duration = 1200;
      const startTime = performance.now();

      const step = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.floor(eased * target));

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setDisplayValue(target);
        }
      };

      setDisplayValue(0);
      requestAnimationFrame(step);
    }
  }, [isInView, shouldReduceMotion, stat.value]);

  return (
    <div ref={ref} className="space-y-1">
      <div className="text-white font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight tabular-nums">
        <span>{stat.prefix}</span>
        <span>{displayValue}</span>
        <span>{stat.suffix}</span>
      </div>
      <p className="text-coral font-bold text-sm sm:text-base tracking-wide">
        {stat.label}
      </p>
      {stat.detail && (
        <p className="text-mist/75 text-xs sm:text-sm">
          {stat.detail}
        </p>
      )}
    </div>
  );
}

export default function Numbers() {
  return (
    <section
      aria-label="Key statistics and response commitments"
      className="bg-forest text-mist py-12 sm:py-16 border-y border-forest2/70"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {STATS.map((stat) => (
            <CounterItem key={stat.id || stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
