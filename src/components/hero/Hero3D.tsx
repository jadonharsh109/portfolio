"use client";

import { Component, type ReactNode, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";

// Code-split the three.js scene so it never ships in the initial bundle and
// only loads on the client, after the rest of the hero is interactive.
const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

/** Swallows any WebGL/runtime error from the scene and renders nothing. */
class SilentBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

/**
 * Renders the WebGL hero centerpiece only on devices that can do it justice:
 * a desktop-class screen with a fine pointer and no reduced-motion preference.
 * Everywhere else it renders nothing and the CSS gradient orbs carry the hero.
 */
export default function Hero3D() {
  const prefersReduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (prefersReduced) {
      setEnabled(false);
      return;
    }
    const mq = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    const apply = () => setEnabled(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [prefersReduced]);

  if (!enabled) return null;

  return (
    <SilentBoundary>
      <HeroScene />
    </SilentBoundary>
  );
}
