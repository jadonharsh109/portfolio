"use client";

import { siteConfig } from "@/lib/data";
import { RevealOnScroll } from "./AnimatedText";
import CountUp from "./CountUp";
import ScrambleText from "./ScrambleText";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const githubStats = [
  { value: "2,580+", label: "Contributions" },
  { value: "37+", label: "Repositories" },
  { value: "143+", label: "Stars Earned" },
  { value: "4+", label: "Years Active" },
];

// Real contribution calendar (last 12 months, snapshot) — 53 weeks x 7 days
// (Sun-Sat), each cell a GitHub-style intensity level from 0 (none) to 4
// (most active). Pulled from github.com/users/jadonharsh109/contributions.
const CONTRIBUTION_LEVELS: number[][] = [
  [0,1,0,0,0,1,0],
  [0,1,0,1,1,0,0],
  [0,1,3,1,1,1,0],
  [0,1,1,1,1,1,1],
  [1,1,1,1,1,1,0],
  [0,1,0,0,0,1,1],
  [1,1,2,1,2,1,1],
  [0,1,1,1,1,1,1],
  [1,1,1,1,1,1,0],
  [0,1,1,0,0,0,0],
  [0,0,1,1,1,1,0],
  [0,1,1,2,4,0,0],
  [0,1,3,2,2,2,1],
  [1,0,1,1,2,1,0],
  [0,0,4,4,4,2,2],
  [4,3,4,3,1,1,1],
  [0,0,0,0,0,0,0],
  [0,1,1,0,0,1,0],
  [0,1,1,2,1,1,0],
  [1,2,2,0,0,0,0],
  [0,3,3,1,2,1,0],
  [0,1,1,0,1,1,0],
  [0,1,2,1,1,1,0],
  [0,2,1,2,2,1,0],
  [0,1,0,1,1,1,0],
  [0,0,1,1,2,1,1],
  [0,1,1,1,2,1,1],
  [0,0,1,1,1,1,0],
  [0,1,1,1,0,1,0],
  [0,1,2,0,3,2,0],
  [0,0,0,0,2,1,0],
  [0,2,0,1,2,3,0],
  [0,1,1,1,1,1,0],
  [0,1,1,2,1,2,1],
  [0,1,1,2,1,2,3],
  [0,1,1,4,1,1,1],
  [0,1,0,0,2,1,0],
  [0,1,0,0,0,0,0],
  [0,3,1,1,2,1,0],
  [0,2,1,2,1,1,0],
  [0,1,1,4,2,0,0],
  [0,0,1,0,0,0,0],
  [1,1,2,1,1,1,0],
  [0,0,1,1,1,1,0],
  [0,0,1,2,2,2,1],
  [0,1,1,1,1,3,2],
  [0,2,3,3,1,1,1],
  [0,1,2,1,1,1,0],
  [0,1,2,1,4,4,3],
  [0,3,2,2,2,3,2],
  [3,1,1,0,2,0,0],
  [0,1,1,1,1,0,0],
  [0,1,3,2,0,1,0],
];

const LEVEL_COLORS = [
  "rgba(124,58,237,0.06)",
  "rgba(124,58,237,0.25)",
  "rgba(124,58,237,0.45)",
  "rgba(124,58,237,0.7)",
  "#7c3aed",
];

export default function GitHub() {
  return (
    <section className="relative pt-10 md:pt-14 pb-16 md:pb-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-10 md:mb-14">
            <div>
              <ScrambleText
                text="Open Source"
                className="text-accent font-mono text-sm tracking-widest uppercase block mb-4"
              />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                GitHub Activity
              </h2>
              <p className="text-muted mt-3 max-w-lg">
                Infrastructure-as-Code, CI/CD templates, and DevOps
                projects shared with the community.
              </p>
            </div>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent/30 text-accent hover:bg-accent/10 transition-all font-mono text-sm shrink-0 hover-target"
            >
              <FiGithub size={16} />
              @jadonharsh109
              <FiExternalLink size={14} />
            </a>
          </div>
        </RevealOnScroll>

        {/* Stats Row */}
        <RevealOnScroll delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {githubStats.map((stat) => (
              <div
                key={stat.label}
                className="p-5 rounded-xl border border-border bg-card text-center"
              >
                <div className="text-2xl font-bold text-white">
                  <CountUp value={stat.value} />
                </div>
                <div className="text-muted text-xs font-mono mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Contribution Graph */}
        <RevealOnScroll delay={0.15}>
          <div className="p-4 sm:p-6 rounded-2xl border border-border bg-card">
            <div className="text-xs text-muted uppercase tracking-wider font-mono mb-4">
              Contribution Graph
            </div>
            <div className="overflow-x-auto -mx-2 px-2 pb-2">
              <div className="flex gap-[3px] w-max sm:w-auto sm:flex-wrap sm:justify-center">
                {CONTRIBUTION_LEVELS.map((week, weekIdx) => (
                  <div key={weekIdx} className="flex flex-col gap-[3px]">
                    {week.map((level, dayIdx) => (
                      <div
                        key={dayIdx}
                        className="w-[9px] h-[9px] sm:w-[11px] sm:h-[11px] rounded-[2px]"
                        style={{ backgroundColor: LEVEL_COLORS[level] }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
