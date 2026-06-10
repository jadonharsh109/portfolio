"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/data";

/**
 * First-visit intro overlay: a counter races to 100% over the site name, then
 * the whole panel slides up like a curtain to reveal the page. Shows once per
 * browser session and is skipped entirely under reduced motion.
 */
export default function Preloader() {
  const prefersReduced = useReducedMotion();
  const [active, setActive] = useState(true);
  const [count, setCount] = useState(0);
  const instant = useRef(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("preloaded") === "1";
    } catch {}

    if (prefersReduced || seen) {
      instant.current = true;
      setActive(false);
      return;
    }

    document.documentElement.style.overflow = "hidden";

    let raf = 0;
    let start = 0;
    const duration = 1400;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min(1, (ts - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = requestAnimationFrame(() =>
          window.setTimeout(() => setActive(false), 250)
        );
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [prefersReduced]);

  const handleExitComplete = () => {
    document.documentElement.style.overflow = "";
    try {
      sessionStorage.setItem("preloaded", "1");
    } catch {}
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {active && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
          exit={{ y: "-100%" }}
          transition={{
            duration: instant.current ? 0 : 0.9,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="px-6 text-center"
          >
            <div className="mb-4 font-mono text-[0.65rem] sm:text-xs uppercase tracking-[0.35em] text-muted">
              {siteConfig.title}
            </div>
            <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl text-gradient">
              {siteConfig.name}
            </h1>
          </motion.div>

          <div className="absolute bottom-8 right-6 font-mono text-5xl font-bold tabular-nums text-white/90 sm:bottom-14 sm:right-14 sm:text-7xl">
            {count}
            <span className="text-accent">%</span>
          </div>

          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white/5">
            <div
              className="h-full bg-gradient-to-r from-accent to-accent-light"
              style={{ width: `${count}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
