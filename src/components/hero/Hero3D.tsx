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
 * Renders the WebGL hero centerpiece on phones and desktops alike (anyone who
 * hasn't asked for reduced motion). On coarse-pointer / small screens it runs
 * in a lighter "low power" mode. If WebGL is unavailable the error boundary
 * renders nothing and the CSS gradient orbs carry the hero.
 */
export default function Hero3D() {
  const prefersReduced = useReducedMotion();
  const [config, setConfig] = useState<{ on: boolean; lowPower: boolean }>({
    on: false,
    lowPower: false,
  });

  useEffect(() => {
    if (prefersReduced) {
      setConfig({ on: false, lowPower: false });
      return;
    }
    const coarse = window.matchMedia("(pointer: coarse)");
    const small = window.matchMedia("(max-width: 768px)");
    const apply = () =>
      setConfig({ on: true, lowPower: coarse.matches || small.matches });
    apply();
    coarse.addEventListener("change", apply);
    small.addEventListener("change", apply);
    return () => {
      coarse.removeEventListener("change", apply);
      small.removeEventListener("change", apply);
    };
  }, [prefersReduced]);

  if (!config.on) return null;

  return (
    <SilentBoundary>
      <HeroScene lowPower={config.lowPower} />
    </SilentBoundary>
  );
}
