"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";

interface VelocityMarqueeProps {
  children: React.ReactNode;
  /** Base scroll speed in %/sec. Negative scrolls left. */
  baseVelocity?: number;
  className?: string;
}

/**
 * Infinite marquee whose speed and direction react to scroll velocity:
 * scrolling down speeds it up, scrolling up reverses it, and it idles at a
 * gentle base drift. Falls back to a static row under reduced motion.
 */
export default function VelocityMarquee({
  children,
  baseVelocity = -4,
  className = "",
}: VelocityMarqueeProps) {
  const prefersReduced = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  // Two identical copies fill the row, so wrapping 0 .. -50% is seamless.
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    if (prefersReduced) return;
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  if (prefersReduced) {
    return (
      <div className={`flex flex-nowrap overflow-hidden ${className}`}>
        <div className="flex flex-nowrap">{children}</div>
      </div>
    );
  }

  return (
    <div className={`flex flex-nowrap overflow-hidden ${className}`}>
      <motion.div className="flex flex-nowrap" style={{ x }}>
        {/* Two identical copies wrapped separately so repeated child keys
            stay unique among their siblings. */}
        <div className="flex flex-nowrap">{children}</div>
        <div className="flex flex-nowrap" aria-hidden>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
