"use client";

import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import { AnimatedHeading, RevealOnScroll } from "./AnimatedText";
import { FiGithub, FiExternalLink, FiLayers } from "react-icons/fi";

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="gradient-orb w-[600px] h-[600px] bg-violet-600/50 -bottom-40 -left-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <RevealOnScroll>
            <span className="text-accent font-mono text-sm tracking-widest uppercase">
              04 — Projects
            </span>
          </RevealOnScroll>
          <AnimatedHeading
            text="Featured"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-white"
            delay={0.1}
          />
          <AnimatedHeading
            text="Projects"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient"
            delay={0.2}
          />
          <RevealOnScroll delay={0.3}>
            <p className="text-muted text-lg mt-6 max-w-2xl">
              Production platforms and infrastructure projects spanning
              multi-tenant SaaS, cloud automation, fintech, and security.
            </p>
          </RevealOnScroll>
        </div>

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
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group h-full p-6 rounded-2xl border border-border bg-card hover:border-accent/30 hover:bg-card-hover transition-all duration-500 card-shine hover-target flex flex-col"
                >
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
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* GitHub CTA */}
        <RevealOnScroll delay={0.4}>
          <div className="mt-16 text-center">
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
