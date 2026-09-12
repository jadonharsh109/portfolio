"use client";

import { motion, AnimatePresence } from "framer-motion";
import { projects, flagshipProject } from "@/lib/data";
import { AnimatedHeading, RevealOnScroll } from "./AnimatedText";
import ScrambleText from "./ScrambleText";
import TiltCard from "./TiltCard";
import { useParallax } from "@/lib/useParallax";
import {
  FiGithub,
  FiExternalLink,
  FiLayers,
  FiUsers,
  FiMapPin,
  FiWifiOff,
  FiSearch,
  FiTag,
} from "react-icons/fi";

export default function Projects() {
  const { ref, y } = useParallax<HTMLElement>(70);

  return (
    <section
      ref={ref}
      id="projects"
      className="relative pt-16 md:pt-32 pb-16 md:pb-20 overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="gradient-orb w-[600px] h-[600px] bg-violet-600/50 -bottom-40 -left-60"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-20">
          <RevealOnScroll>
            <ScrambleText
              text="04 — Projects"
              className="text-accent font-mono text-sm tracking-widest uppercase"
            />
          </RevealOnScroll>
          <AnimatedHeading
            text="Featured"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-white"
            delay={0.1}
          />
          <AnimatedHeading
            text="Projects"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient"
            delay={0.2}
          />
          <RevealOnScroll delay={0.3}>
            <p className="text-muted text-lg mt-6 max-w-2xl">
              Production platforms and infrastructure projects spanning
              multi-tenant SaaS, cloud automation, fintech, and security.
            </p>
          </RevealOnScroll>
        </div>

        {/* Flagship Product: Smriti */}
        <RevealOnScroll delay={0.1}>
          <TiltCard intensity={4} className="mb-8 md:mb-12 block">
            <div className="relative overflow-hidden p-6 sm:p-10 rounded-3xl border border-accent/25 bg-gradient-to-br from-card via-card to-accent/5 card-shine">
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
              <div className="relative grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
                {/* Text */}
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-2 flex-wrap mb-4">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-white text-xs font-mono uppercase tracking-wider">
                      <FiTag size={11} />
                      Featured Product
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-muted text-xs font-mono border border-white/10">
                      {flagshipProject.version}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-muted text-xs font-mono border border-white/10">
                      {flagshipProject.license}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-1">
                    {flagshipProject.name}{" "}
                    <span className="text-accent">{flagshipProject.sanskrit}</span>
                  </h3>
                  <p className="text-muted text-sm italic mb-5">
                    Sanskrit for &ldquo;{flagshipProject.meaning}&rdquo;
                  </p>

                  <p className="text-muted leading-relaxed mb-5">
                    {flagshipProject.description}
                  </p>

                  <div className="mb-6 p-4 rounded-xl border border-accent/20 bg-accent/5">
                    <p className="text-white font-medium text-sm sm:text-base">
                      {flagshipProject.highlight}
                    </p>
                  </div>

                  <ul className="mb-6 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                    {flagshipProject.features.map((f, i) => (
                      <li
                        key={i}
                        className="text-muted text-sm flex items-start gap-2"
                      >
                        <span className="text-accent mt-0.5 shrink-0">▹</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {flagshipProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono bg-white/5 text-muted/80 rounded-md border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={flagshipProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-label="View on GitHub"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white hover:bg-accent-light transition-all font-mono text-sm hover-target"
                    >
                      <FiGithub size={16} />
                      View on GitHub
                      <FiExternalLink size={14} />
                    </a>
                    {flagshipProject.homepage && (
                      <a
                        href={flagshipProject.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-label="Visit site"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-white hover:bg-white/5 hover:border-white/20 transition-all font-mono text-sm hover-target"
                      >
                        Visit site
                        <FiExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Visual side */}
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {[
                      {
                        icon: <FiUsers size={20} />,
                        label: "On-device faces",
                        desc: "SCRFD + ArcFace",
                      },
                      {
                        icon: <FiMapPin size={20} />,
                        label: "Offline places",
                        desc: "0 map tiles fetched",
                      },
                      {
                        icon: <FiWifiOff size={20} />,
                        label: "Fully offline",
                        desc: "No cloud, no account",
                      },
                      {
                        icon: <FiSearch size={20} />,
                        label: "AI-powered search",
                        desc: "MobileCLIP, on your CPU",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:border-accent/30 transition-colors"
                      >
                        <div className="text-accent mb-2">{item.icon}</div>
                        <div className="text-white text-sm font-semibold">
                          {item.label}
                        </div>
                        <div className="text-muted text-xs mt-0.5">
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </RevealOnScroll>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 100,
                }}
                className="h-full"
              >
                <TiltCard className="h-full">
                  <div className="group h-full p-6 rounded-2xl border border-border bg-card hover:border-accent/30 hover:bg-card-hover transition-all duration-500 card-shine hover-target flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <FiLayers
                        className="text-accent group-hover:scale-110 transition-transform"
                        size={22}
                      />
                    </div>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-label="Source"
                        className="flex items-center gap-1.5 text-muted hover:text-accent transition-colors"
                      >
                        <FiGithub size={16} />
                        <FiExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="mb-5 space-y-1.5">
                      {project.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="text-muted text-xs flex items-start gap-2"
                        >
                          <span className="text-accent mt-0.5 shrink-0">▹</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono bg-white/5 text-muted/80 rounded-md border border-white/5 group-hover:border-accent/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* GitHub CTA */}
        <RevealOnScroll delay={0.4}>
          <div className="mt-10 text-center">
            <a
              href="https://github.com/jadonharsh109"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors font-mono text-sm hover-target"
            >
              <FiGithub size={16} />
              View more repositories on GitHub
              <FiExternalLink size={14} />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
