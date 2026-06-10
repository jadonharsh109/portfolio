"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

interface CountUpProps {
  /** Stat string such as "4+", "1688+", "30+" or "3". */
  value: string;
  className?: string;
  duration?: number;
}

/**
 * Counts a numeric stat up from zero the first time it enters the viewport,
 * preserving any non-numeric prefix/suffix (e.g. the "+" in "30+").
 */
export default function CountUp({
  value,
  className = "",
  duration = 2,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const prefersReduced = useReducedMotion();

  const match = value.match(/^(\D*)([\d,]+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const rawNum = match?.[2] ?? "";
  const suffix = match?.[3] ?? "";
  const hasComma = rawNum.includes(",");
  const target = rawNum ? parseInt(rawNum.replace(/,/g, ""), 10) : NaN;
  const numeric = !Number.isNaN(target);

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!numeric) return;
    if (prefersReduced) {
      setDisplay(target);
      return;
    }
    if (!inView) return;
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, numeric, target, duration, prefersReduced]);

  if (!numeric) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  const formatted = hasComma ? display.toLocaleString("en-US") : String(display);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
