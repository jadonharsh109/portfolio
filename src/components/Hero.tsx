"use client";

import { motion } from "framer-motion";
import { siteConfig, stats } from "@/lib/data";
import MagneticButton from "./MagneticButton";
import { FiGithub, FiLinkedin, FiArrowDown } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern pt-20 pb-16"
    >
      {/* Background orbs */}
      <div className="gradient-orb pulse-glow w-[500px] h-[500px] bg-accent top-1/4 -left-40" />
      <div className="gradient-orb pulse-glow w-[400px] h-[400px] bg-purple-600 bottom-1/4 -right-32" />
      <div className="gradient-orb w-[300px] h-[300px] bg-violet-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-32 right-20 w-20 h-20 border border-accent/20 rounded-lg"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-16 h-16 border border-accent/10 rounded-full"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent/30 rounded-full"
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-accent-light/40 rounded-full"
        animate={{ scale: [1, 2, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-muted font-mono">
                Available for Freelance
              </span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9]">
              <span className="block text-white">Hi, I&apos;m</span>
              <span className="block text-gradient mt-2">
                {siteConfig.shortName}
              </span>
            </h1>
          </motion.div>

          {/* Subtitle with typing effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 mb-8"
          >
            <p className="text-xl md:text-2xl text-muted font-light">
              <span className="text-accent-light font-mono">&gt;</span>{" "}
              {siteConfig.title}
            </p>
            <p className="text-base md:text-lg text-muted/70 mt-2 max-w-2xl">
              {siteConfig.description}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <MagneticButton strength={0.2}>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("#projects");
                }}
                className="group relative px-8 py-4 bg-accent text-white rounded-full font-medium text-base overflow-hidden hover-target transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                </span>
              </a>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("#contact");
                }}
                className="px-8 py-4 border border-white/10 text-white rounded-full font-medium text-base hover:bg-white/5 hover:border-white/20 transition-all duration-300 hover-target"
              >
                Get In Touch
              </a>
            </MagneticButton>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex items-center gap-5 mb-16"
          >
            {[
              {
                icon: <FiGithub size={20} />,
                href: siteConfig.social.github,
                label: "GitHub",
              },
              {
                icon: <FiLinkedin size={20} />,
                href: siteConfig.social.linkedin,
                label: "LinkedIn",
              },
              {
                icon: <SiUpwork size={20} />,
                href: siteConfig.social.upwork,
                label: "Upwork",
              },
            ].map((social) => (
              <MagneticButton key={social.label} strength={0.3}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-muted hover:text-white hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 hover-target"
                >
                  {social.icon}
                </a>
              </MagneticButton>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-sm text-muted mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex justify-center mt-12"
          >
            <motion.button
              onClick={() => handleScroll("#about")}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-muted/50 hover:text-accent transition-colors hover-target"
            >
              <span className="text-xs font-mono">Scroll Down</span>
              <FiArrowDown size={16} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
