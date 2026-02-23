"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { aboutParagraphs, siteConfig } from "@/lib/data";
import { AnimatedHeading, RevealOnScroll } from "./AnimatedText";
import { FiMapPin, FiBriefcase, FiMail, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

export default function About() {
  const [clicked, setClicked] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const messages = [
    "Hey there! 👋",
    "Yes, that's me! 😄",
    "Stop poking me! 😂",
    "Okay fine, hire me? 🚀",
    "I do Terraform btw 🏗️",
    "kubectl get pods 🤓",
    "Still here? Let's connect! 💬",
  ];

  const handlePhotoClick = () => {
    setClicked(true);
    setClickCount((prev) => prev + 1);
    setTimeout(() => setClicked(false), 4000);
  };

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div className="gradient-orb w-[600px] h-[600px] bg-accent/50 -top-40 -right-80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-20">
          <RevealOnScroll>
            <span className="text-accent font-mono text-sm tracking-widest uppercase">
              01 — About
            </span>
          </RevealOnScroll>
          <AnimatedHeading
            text="Crafting Cloud Infrastructure"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-white"
            delay={0.1}
          />
          <AnimatedHeading
            text="That Scales"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient"
            delay={0.2}
          />
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left column: text */}
          <div className="lg:col-span-3 space-y-6">
            {aboutParagraphs.map((paragraph, index) => (
              <RevealOnScroll key={index} delay={index * 0.15}>
                <p className="text-lg text-muted leading-relaxed">
                  {paragraph}
                </p>
              </RevealOnScroll>
            ))}

            {/* Currently Learning highlight */}
            <RevealOnScroll delay={0.4}>
              <div className="mt-8 p-6 rounded-2xl border border-accent/20 bg-accent/5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-sm font-mono text-accent-light tracking-wide uppercase">
                    Currently Exploring
                  </span>
                </div>
                <p className="text-white font-medium text-lg">
                  Generative AI & MLOps
                </p>
                <p className="text-muted text-sm mt-2">
                  Building intelligent AI/ML pipelines integrated with modern
                  cloud infrastructure — LangChain, Vector Databases, LLM
                  Fine-Tuning, and AI Agents.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right column: photo + info cards */}
          <div className="lg:col-span-2 space-y-4">
            {/* Profile Photo */}
            <RevealOnScroll direction="right">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  {/* Speech bubble popup */}
                  <AnimatePresence>
                    {clicked && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: -20, scale: 1 }}
                        exit={{ opacity: 0, y: -40, scale: 0.5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="absolute -top-16 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap"
                      >
                        <div className="px-4 py-2 rounded-xl bg-accent text-white text-sm font-medium shadow-lg shadow-accent/30">
                          {messages[(clickCount - 1) % messages.length]}
                          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-accent rotate-45" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Emoji burst on click */}
                  <AnimatePresence>
                    {clicked && (
                      <>
                        {["✨", "🚀", "⚡", "💜"].map((emoji, i) => (
                          <motion.span
                            key={`${clickCount}-${i}`}
                            initial={{ opacity: 1, scale: 0 }}
                            animate={{
                              opacity: [1, 0],
                              scale: [0.5, 1.2],
                              x: [0, (i % 2 === 0 ? 1 : -1) * (40 + i * 15)],
                              y: [0, -(50 + i * 20)],
                            }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="absolute top-1/2 left-1/2 text-xl z-10 pointer-events-none"
                          >
                            {emoji}
                          </motion.span>
                        ))}
                      </>
                    )}
                  </AnimatePresence>

                  <motion.div
                    onClick={handlePhotoClick}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97, rotate: -3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="relative cursor-pointer group/photo"
                  >
                    {/* Subtle glow — static, no spinning */}
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-accent via-purple-500 to-violet-400 opacity-30 blur-lg group-hover/photo:opacity-60 transition-opacity duration-500" />

                    {/* Outer gradient ring */}
                    <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-[3px] bg-gradient-to-br from-accent via-purple-500 to-violet-400">
                      {/* Inner container */}
                      <div className="w-full h-full rounded-full bg-[#0a0a0a] p-1.5 overflow-hidden">
                        <div className="relative w-full h-full rounded-full overflow-hidden">
                          <Image
                            src="/profile.png"
                            alt="Harshvardhan Singh Jadon"
                            fill
                            className="object-cover transition-transform duration-500 group-hover/photo:scale-105"
                            priority
                          />
                        </div>
                      </div>
                    </div>

                    {/* "Click me" hint */}
                    {clickCount === 0 && (
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted/50 font-mono whitespace-nowrap"
                      >
                        click me :)
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </div>
            </RevealOnScroll>

            {[
              {
                icon: <FiBriefcase className="text-accent" size={20} />,
                label: "Currently",
                value: `Engineering @ ${siteConfig.company}`,
              },
              {
                icon: <FiMapPin className="text-accent" size={20} />,
                label: "Location",
                value: siteConfig.location,
              },
              {
                icon: <FiMail className="text-accent" size={20} />,
                label: "Email",
                value: siteConfig.email,
                href: `mailto:${siteConfig.email}`,
              },
              {
                icon: <FiExternalLink className="text-accent" size={20} />,
                label: "Freelancing",
                value: "Available on Upwork",
                href: siteConfig.social.upwork,
              },
            ].map((item, index) => (
              <RevealOnScroll
                key={item.label}
                delay={index * 0.1}
                direction="right"
              >
                <motion.div
                  whileHover={{ x: 5 }}
                  className="group p-5 rounded-xl border border-border bg-card hover:bg-card-hover hover:border-accent/20 transition-all duration-300 card-shine"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-muted uppercase tracking-wider font-mono">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white font-medium hover:text-accent transition-colors hover-target"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-white font-medium">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
