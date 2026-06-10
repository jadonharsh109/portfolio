"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin gradient bar pinned to the top of the viewport that fills
 * as the page is scrolled. Sits above the navbar.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[70] h-[2.5px] origin-left bg-gradient-to-r from-accent via-accent-light to-accent"
    />
  );
}
