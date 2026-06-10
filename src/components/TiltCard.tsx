"use client";

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  /** Maximum tilt in degrees. */
  intensity?: number;
  /** Scale applied while hovered. */
  scale?: number;
  /** Render a soft light glare that tracks the cursor. */
  glare?: boolean;
  /** Border radius utility used by the glare overlay (match the card). */
  radiusClass?: string;
}

/**
 * Wraps a card in a cursor-reactive 3D tilt with an optional moving glare.
 * Falls back to a plain container when the user prefers reduced motion
 * (and naturally stays flat on touch devices, where there is no pointer).
 */
export default function TiltCard({
  children,
  className = "",
  intensity = 7,
  scale = 1.02,
  glare = true,
  radiusClass = "rounded-2xl",
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  // Pointer position normalized to the range -0.5 .. 0.5.
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const spring = { stiffness: 200, damping: 20, mass: 0.3 };
  const rotateX = useSpring(
    useTransform(py, [-0.5, 0.5], [intensity, -intensity]),
    spring
  );
  const rotateY = useSpring(
    useTransform(px, [-0.5, 0.5], [-intensity, intensity]),
    spring
  );

  const glareX = useTransform(px, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(py, [-0.5, 0.5], ["0%", "100%"]);
  const glareOpacity = useSpring(0, { stiffness: 150, damping: 25 });
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(196,181,253,0.22), transparent 55%)`;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleEnter = () => glareOpacity.set(1);
  const handleLeave = () => {
    px.set(0);
    py.set(0);
    glareOpacity.set(0);
  };

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      whileHover={{ scale }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      transition={{ type: "spring", ...spring }}
      className={`relative ${className}`}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden
          className={`pointer-events-none absolute inset-0 z-[2] ${radiusClass}`}
          style={{ background: glareBg, opacity: glareOpacity }}
        />
      )}
    </motion.div>
  );
}
