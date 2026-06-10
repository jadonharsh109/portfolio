"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!<>-_\\/[]{}=+*^?#%";

interface ScrambleTextProps {
  text: string;
  className?: string;
  /** Re-run the decode effect when the cursor enters the text. */
  hover?: boolean;
}

/**
 * "Decodes" text from random glyphs into the final string the first time it
 * enters the viewport — a terminal-flavoured reveal that fits the DevOps vibe.
 * Renders the real text on the server so it stays SEO-friendly and shift-free.
 */
export default function ScrambleText({
  text,
  className = "",
  hover = false,
}: ScrambleTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  const prefersReduced = useReducedMotion();
  const [output, setOutput] = useState(text);
  const rafRef = useRef<number | null>(null);
  const startedRef = useRef(false);

  const run = useCallback(() => {
    if (prefersReduced) {
      setOutput(text);
      return;
    }
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const chars = text.split("");
    const settled = chars.filter((c) => c !== " ").length;
    // Each character locks into place at a staggered frame.
    const resolveAt = chars.map(
      (_, i) => Math.floor(i * 1.4) + 6 + Math.floor(Math.random() * 8)
    );

    let frame = 0;
    const tick = () => {
      let done = 0;
      const next = chars.map((ch, i) => {
        if (ch === " ") return " ";
        if (frame >= resolveAt[i]) {
          done++;
          return ch;
        }
        return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      });
      setOutput(next.join(""));
      if (done >= settled) {
        rafRef.current = null;
        return;
      }
      frame++;
      rafRef.current = requestAnimationFrame(tick);
    };
    tick();
  }, [text, prefersReduced]);

  useEffect(() => {
    if (inView && !startedRef.current) {
      startedRef.current = true;
      run();
    }
  }, [inView, run]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <span
      ref={ref}
      className={className}
      onMouseEnter={hover ? run : undefined}
    >
      {output}
    </span>
  );
}
