"use client";

import { motion } from "framer-motion";
import { experiences, certifications, achievements } from "@/lib/data";
import { AnimatedHeading, RevealOnScroll } from "./AnimatedText";
import { FiAward, FiStar } from "react-icons/fi";

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="gradient-orb w-[500px] h-[500px] bg-accent/50 top-1/2 -right-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <RevealOnScroll>
            <span className="text-accent font-mono text-sm tracking-widest uppercase">
              03 — Experience
            </span>
          </RevealOnScroll>
          <AnimatedHeading
            text="Where I've"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-white"
            delay={0.1}
          />
          <AnimatedHeading
            text="Made Impact"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient"
            delay={0.2}
          />
        </div>

        {/* Experience Grid */}
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <RevealOnScroll
                key={index}
                delay={index * 0.15}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`relative flex flex-col md:flex-row items-start gap-4 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-[7px] md:-translate-x-1/2 top-2">
                    <div className="w-4 h-4 rounded-full bg-accent border-4 border-[#050505]" />
                    <motion.div
                      className="absolute inset-0 rounded-full bg-accent"
                      animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 pl-8 md:pl-0 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-accent/20 transition-all duration-500 card-shine group"
                    >
                      <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-accent-light font-medium">
                            {exp.company}
                          </p>
                          <p className="text-muted text-sm mt-0.5">
                            {exp.location}
                          </p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-mono border border-accent/20">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-muted leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      {exp.highlights && (
                        <ul className="mb-5 space-y-1.5">
                          {exp.highlights.map((h, i) => (
                            <li key={i} className="text-muted text-sm flex items-start gap-2">
                              <span className="text-accent mt-1 shrink-0">▹</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-mono bg-white/5 text-muted rounded-md border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block w-1/2" />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Certifications & Achievements */}
        <div className="mt-24">
          <RevealOnScroll>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
              Certifications & Achievements
            </h3>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <RevealOnScroll key={`cert-${index}`} delay={index * 0.1} className="h-full">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="h-full p-6 rounded-2xl border border-border bg-card hover:border-accent/20 transition-all duration-500 card-shine group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <FiAward className="text-accent text-xl" />
                    </div>
                    <div>
                      <div className="text-white font-semibold group-hover:text-accent transition-colors">
                        {cert.title}
                      </div>
                      <div className="text-muted text-sm mt-1">
                        {cert.issuer}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </RevealOnScroll>
            ))}

            {achievements.map((ach, index) => (
              <RevealOnScroll key={`ach-${index}`} delay={(certifications.length + index) * 0.1} className="h-full">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="h-full p-6 rounded-2xl border border-border bg-card hover:border-amber-500/20 transition-all duration-500 card-shine group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                      <FiStar className="text-amber-400 text-xl" />
                    </div>
                    <div>
                      <div className="text-white font-semibold group-hover:text-amber-400 transition-colors">
                        {ach.title}
                      </div>
                      <div className="text-muted text-sm mt-1">
                        {ach.description}
                      </div>
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
