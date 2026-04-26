import { useEffect, useState, useRef } from 'react';
import { useInView, animate } from 'motion/react';

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
}

export function AnimatedCounter({ from = 0, to, duration = 2, suffix = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(from.toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          setDisplay(Math.round(value).toLocaleString('pt-BR'));
        }
      });
      return controls.stop;
    }
  }, [from, to, duration, inView]);

  return <span ref={ref}>{display}{suffix}</span>;
}
