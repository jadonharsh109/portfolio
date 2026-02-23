"use client";

import { motion } from "framer-motion";
import { aboutParagraphs, siteConfig } from "@/lib/data";
import { AnimatedHeading, RevealOnScroll } from "./AnimatedText";
import { FiMapPin, FiBriefcase, FiMail, FiExternalLink } from "react-icons/fi";

export default function About() {
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

          {/* Right column: info cards */}
          <div className="lg:col-span-2 space-y-4">
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
