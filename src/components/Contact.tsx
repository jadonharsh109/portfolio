"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { AnimatedHeading, RevealOnScroll } from "./AnimatedText";
import MagneticButton from "./MagneticButton";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
} from "react-icons/fi";
import { SiUpwork, SiDiscord, SiInstagram } from "react-icons/si";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="gradient-orb w-[600px] h-[600px] bg-accent/40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <RevealOnScroll>
            <span className="text-accent font-mono text-sm tracking-widest uppercase">
              06 — Contact
            </span>
          </RevealOnScroll>
          <AnimatedHeading
            text="Let's Build Something"
            className="text-4xl md:text-5xl lg:text-7xl font-bold mt-4 text-white justify-center"
            delay={0.1}
          />
          <AnimatedHeading
            text="Amazing Together"
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-gradient justify-center"
            delay={0.2}
          />
          <RevealOnScroll delay={0.3}>
            <p className="text-muted text-lg mt-6 max-w-2xl mx-auto">
              Got a project in mind? Need help with cloud infrastructure,
              DevOps pipelines, or want to discuss AI/ML integration? I&apos;m
              just an email away.
            </p>
          </RevealOnScroll>
        </div>

        {/* Big Email CTA */}
        <RevealOnScroll delay={0.3}>
          <div className="text-center mb-16">
            <MagneticButton strength={0.15}>
              <a
                href={`mailto:${siteConfig.email}`}
                className="group inline-flex items-center gap-4 px-10 py-6 rounded-2xl border border-accent/30 bg-accent/5 hover:bg-accent/10 hover:border-accent/50 transition-all duration-500 hover-target"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <FiMail className="text-accent" size={24} />
                </div>
                <div className="text-left">
                  <div className="text-xs text-muted uppercase tracking-wider font-mono mb-1">
                    Drop me a line
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors">
                    {siteConfig.email}
                  </div>
                </div>
                <FiArrowUpRight
                  className="text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all ml-4"
                  size={24}
                />
              </a>
            </MagneticButton>
          </div>
        </RevealOnScroll>

        {/* Social Grid */}
        <RevealOnScroll delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
            {[
              {
                icon: <FiGithub size={22} />,
                label: "GitHub",
                href: siteConfig.social.github,
                color: "hover:border-white/30",
              },
              {
                icon: <FiLinkedin size={22} />,
                label: "LinkedIn",
                href: siteConfig.social.linkedin,
                color: "hover:border-blue-500/30",
              },
              {
                icon: <SiUpwork size={22} />,
                label: "Upwork",
                href: siteConfig.social.upwork,
                color: "hover:border-green-500/30",
              },
              {
                icon: <SiDiscord size={22} />,
                label: "Discord",
                href: siteConfig.social.discord,
                color: "hover:border-indigo-500/30",
              },
              {
                icon: <SiInstagram size={22} />,
                label: "Instagram",
                href: siteConfig.social.instagram,
                color: "hover:border-pink-500/30",
              },
            ].map((social, index) => (
              <MagneticButton key={social.label} strength={0.2}>
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className={`group flex flex-col items-center gap-3 p-6 rounded-2xl border border-border bg-card hover:bg-card-hover transition-all duration-300 hover-target ${social.color}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <span className="text-muted group-hover:text-white transition-colors">
                    {social.icon}
                  </span>
                  <span className="text-sm text-muted group-hover:text-white transition-colors font-medium">
                    {social.label}
                  </span>
                </motion.a>
              </MagneticButton>
            ))}
          </div>
        </RevealOnScroll>

        {/* Upwork highlight */}
        <RevealOnScroll delay={0.5}>
          <div className="mt-16 text-center">
            <motion.a
              href={siteConfig.social.upwork}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-4 p-6 rounded-2xl border border-green-500/20 bg-green-500/5 hover:bg-green-500/10 hover:border-green-500/30 transition-all duration-300 hover-target"
            >
              <SiUpwork className="text-green-400" size={28} />
              <div className="text-left">
                <div className="text-white font-semibold">
                  Hire me on Upwork
                </div>
                <div className="text-muted text-sm">
                  Top-rated freelancer for DevOps, AWS & Cloud projects
                </div>
              </div>
              <FiArrowUpRight className="text-green-400" size={20} />
            </motion.a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
