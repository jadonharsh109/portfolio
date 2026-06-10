"use client";

import { useRef, type RefObject } from "react";
import { useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * Drives a vertical parallax offset for an element based on the scroll
 * progress of a container ref. Attach `ref` to the section and bind `y`
 * to a decorative child. Returns a zero offset under reduced motion.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(
  distance = 80
) {
  const ref = useRef<T>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref as RefObject<HTMLElement>,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? [0, 0] : [distance, -distance]
  );
  return { ref, y };
}
