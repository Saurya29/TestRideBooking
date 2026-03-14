"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export default function AnimatedCounter({
  from = 0,
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 2000,
  className = "",
}: AnimatedCounterProps) {
  const [value, setValue]   = useState(from);
  const ref                 = useRef<HTMLSpanElement>(null);
  const isInView            = useInView(ref, { once: true, margin: "-50px" });
  const startTime           = useRef<number | null>(null);
  const rafRef              = useRef<number | null>(null);

  useEffect(() => {
    if (!isInView) return;

    startTime.current = null;

    const tick = (now: number) => {
      if (!startTime.current) startTime.current = now;
      const elapsed  = now - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = easeOutExpo(progress);
      setValue(from + (to - from) * eased);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isInView, from, to, duration]);

  const display = value.toFixed(decimals);

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}
