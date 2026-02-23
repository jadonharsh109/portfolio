"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, siteConfig } from "@/lib/data";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <MagneticButton strength={0.2}>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#home");
                }}
                className="text-xl font-bold tracking-tight hover-target"
              >
                <span className="text-gradient">&lt;</span>
                <span className="text-white">
                  {siteConfig.shortName}
                </span>
                <span className="text-gradient">/&gt;</span>
              </a>
            </MagneticButton>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <MagneticButton key={link.href} strength={0.15}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 hover-target ${
                      activeSection === link.href.replace("#", "")
                        ? "text-white"
                        : "text-muted hover:text-white"
                    }`}
                  >
                    {activeSection === link.href.replace("#", "") && (
                      <motion.span
                        layoutId="navbar-indicator"
                        className="absolute inset-0 rounded-full bg-white/5 border border-white/10"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                </MagneticButton>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <MagneticButton strength={0.2}>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                  className="relative inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-accent/10 border border-accent/30 rounded-full hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 hover-target"
                >
                  <span className="relative z-10">Let&apos;s Talk</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </MagneticButton>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center hover-target"
            >
              <div className="flex flex-col gap-1.5">
                <motion.span
                  animate={{
                    rotate: mobileOpen ? 45 : 0,
                    y: mobileOpen ? 8 : 0,
                  }}
                  className="w-6 h-0.5 bg-white block"
                />
                <motion.span
                  animate={{ opacity: mobileOpen ? 0 : 1 }}
                  className="w-6 h-0.5 bg-white block"
                />
                <motion.span
                  animate={{
                    rotate: mobileOpen ? -45 : 0,
                    y: mobileOpen ? -8 : 0,
                  }}
                  className="w-6 h-0.5 bg-white block"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl md:hidden pt-24"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-2xl font-light text-muted hover:text-white transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="mt-4 px-8 py-3 text-lg font-medium text-white bg-accent rounded-full"
              >
                Let&apos;s Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
