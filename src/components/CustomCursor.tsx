"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip cursor logic on touch devices
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      // The label trails along with the smoothed ring position.
      label.style.left = `${ringX}px`;
      label.style.top = `${ringY}px`;
      requestAnimationFrame(animateRing);
    };

    const handleMouseEnter = (e: Event) => {
      document.body.classList.add("cursor-hover");
      const target = e.currentTarget as HTMLElement;
      const text = target.getAttribute("data-cursor-label");
      if (text) {
        label.textContent = text;
        document.body.classList.add("cursor-label-active");
      }
    };

    const handleMouseLeave = () => {
      document.body.classList.remove("cursor-hover");
      document.body.classList.remove("cursor-label-active");
    };

    window.addEventListener("mousemove", moveCursor);
    animateRing();

    const hoverElements = document.querySelectorAll(
      "a, button, .hover-target, [data-cursor-hover], [data-cursor-label]"
    );
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
      <div ref={labelRef} className="cursor-label hidden md:block" />
    </>
  );
}
