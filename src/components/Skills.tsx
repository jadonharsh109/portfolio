"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { AnimatedHeading, RevealOnScroll } from "./AnimatedText";

const iconMap: Record<string, string> = {
  AWS: "☁️",
  Terraform: "🏗️",
  CloudFormation: "📋",
  "AWS Lambda": "⚡",
  "AWS EKS": "🎯",
  "AWS AppRunner": "🚀",
  Docker: "🐳",
  Kubernetes: "☸️",
  Jenkins: "🔧",
  "GitHub Actions": "⚙️",
  ArgoCD: "🔄",
  Helm: "⎈",
  SonarQube: "🔍",
  Trivy: "🛡️",
  OWASP: "🔐",
  "AWS WAF": "🧱",
  "AWS Shield": "🛡️",
  Istio: "🕸️",
  React: "⚛️",
  "Next.js": "▲",
  TypeScript: "📘",
  JavaScript: "📒",
  HTML5: "🌐",
  "CSS3/SASS": "🎨",
  Git: "📂",
  GitLab: "🦊",
  Ansible: "📦",
  Vagrant: "📦",
  Linux: "🐧",
  "Shell Scripting": "💻",
  "Generative AI": "🤖",
  MLOps: "🧠",
  LangChain: "🔗",
  "Vector Databases": "📊",
  "LLM Fine-Tuning": "🎛️",
  "AI Agents": "🕵️",
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="gradient-orb w-[500px] h-[500px] bg-purple-600/50 bottom-0 left-1/4" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <RevealOnScroll>
            <span className="text-accent font-mono text-sm tracking-widest uppercase">
              02 — Skills
            </span>
          </RevealOnScroll>
          <AnimatedHeading
            text="Technologies & Tools"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-white"
            delay={0.1}
          />
          <AnimatedHeading
            text="I Work With"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient"
            delay={0.2}
          />
        </div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <RevealOnScroll
              key={category.title}
              delay={categoryIndex * 0.1}
              direction={categoryIndex % 2 === 0 ? "left" : "right"}
              className="h-full"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className={`group h-full flex flex-col p-6 rounded-2xl border transition-all duration-500 card-shine ${
                  category.title === "Currently Learning"
                    ? "border-amber-500/30 bg-amber-500/5 hover:border-amber-500/50 hover:bg-amber-500/10"
                    : "border-border bg-card hover:border-accent/30 hover:bg-card-hover"
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <h3
                    className={`text-lg font-semibold ${
                      category.title === "Currently Learning"
                        ? "text-amber-400"
                        : "text-white"
                    }`}
                  >
                    {category.title}
                  </h3>
                  {category.title === "Currently Learning" && (
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      <span className="text-xs font-mono text-amber-400">
                        Learning
                      </span>
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: categoryIndex * 0.05 + skillIndex * 0.05,
                        type: "spring",
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover-target ${
                        category.title === "Currently Learning"
                          ? "bg-amber-500/10 text-amber-300 border border-amber-500/20 hover:bg-amber-500/20"
                          : "bg-white/5 text-muted border border-white/5 hover:bg-accent/10 hover:text-white hover:border-accent/20"
                      }`}
                    >
                      <span className="text-base">
                        {iconMap[skill] || "🔹"}
                      </span>
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Marquee strip */}
        <RevealOnScroll delay={0.5}>
          <div className="mt-20 relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10" />
            <div className="marquee py-4 border-y border-border/30">
              <div className="marquee-content">
                {[
                  ...skillCategories.flatMap((c) => c.skills),
                  ...skillCategories.flatMap((c) => c.skills),
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="mx-6 text-lg font-light text-muted/30 whitespace-nowrap"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
