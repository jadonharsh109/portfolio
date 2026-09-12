"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const LINES: [string, string][] = [
  ["whoami", "harsh — devops & platform engineer"],
  ["terraform apply", "12 resources provisioned"],
  ["kubectl rollout status deploy/api", "successfully rolled out"],
  ["./migrate.sh --aws-to-azure", "cutover complete"],
];

/**
 * Small floating terminal that types out a rotating set of commands.
 * Pure CSS/Framer Motion — no WebGL — so it's cheap and dependency-free.
 */
export default function HeroTerminal() {
  const prefersReduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [chars, setChars] = useState(0);
  const [showOutput, setShowOutput] = useState(false);

  const [cmd, output] = LINES[index];

  useEffect(() => {
    if (prefersReduced) return;

    if (chars < cmd.length) {
      const t = setTimeout(() => setChars((c) => c + 1), 32);
      return () => clearTimeout(t);
    }
    if (!showOutput) {
      const t = setTimeout(() => setShowOutput(true), 300);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setChars(0);
      setShowOutput(false);
      setIndex((i) => (i + 1) % LINES.length);
    }, 1800);
    return () => clearTimeout(t);
  }, [chars, showOutput, cmd, prefersReduced]);

  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="hidden lg:block absolute top-28 right-[6%] w-[320px] float"
    >
      <div className="rounded-2xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-sm shadow-[0_0_50px_rgba(124,58,237,0.15)] overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          <span className="ml-2 text-[11px] text-muted/60 font-mono">
            harsh@portfolio
          </span>
        </div>
        <div className="p-4 font-mono text-sm min-h-[88px]">
          <div className="text-muted">
            <span className="text-accent-light">$</span>{" "}
            {prefersReduced ? cmd : cmd.slice(0, chars)}
            {!prefersReduced && chars < cmd.length && (
              <span className="inline-block w-[7px] h-[14px] bg-accent-light/80 ml-0.5 align-middle animate-pulse" />
            )}
          </div>
          <AnimatePresence>
            {(prefersReduced || showOutput) && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-accent mt-1.5"
              >
                {output} ✓
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
