"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { RevealOnScroll } from "./AnimatedText";
import { FiGithub, FiExternalLink, FiStar, FiGitBranch } from "react-icons/fi";

const pinnedRepos = [
  {
    name: "IaC-Master-Actions",
    description:
      "End-to-end CI/CD with GitHub Actions, Docker, Terraform & SonarQube across multiple environments.",
    language: "HCL",
    stars: 11,
  },
  {
    name: "aws-zero-trust",
    description:
      "Zero-Trust Kubernetes environment on AWS EKS with Kyverno, Calico & strict RBAC policies.",
    language: "HCL",
    stars: 7,
  },
  {
    name: "Terraform-EKS",
    description:
      "Streamlined EKS cluster deployment with Terraform for EC2 & Fargate workloads with Helm charts.",
    language: "HCL",
    stars: 7,
  },
  {
    name: "Terraform-AWS-AppRunner",
    description:
      "Terraform scripts for AWS infrastructure, IAM roles & Docker deployment to AWS AppRunner.",
    language: "HCL",
    stars: 8,
  },
  {
    name: "DevSecOps-Complete-Project",
    description:
      "End-to-end DevSecOps automation with SonarQube, OWASP & Trivy for multi-phase security checks.",
    language: "Shell",
    stars: 5,
  },
  {
    name: "AuthFlow-JenkinsK8s",
    description:
      "Kubernetes infrastructure automation with Jenkins CI/CD, centralized logging & monitoring.",
    language: "HCL",
    stars: 4,
  },
];

const githubStats = [
  { value: "1,688+", label: "Contributions" },
  { value: "32+", label: "Repositories" },
  { value: "42+", label: "Stars Earned" },
  { value: "3+", label: "Years Active" },
];

const langColors: Record<string, string> = {
  HCL: "#844FBA",
  Shell: "#89e051",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  JavaScript: "#f1e05a",
};

export default function GitHub() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <span className="text-accent font-mono text-sm tracking-widest uppercase block mb-4">
                Open Source
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
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
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-muted text-xs font-mono mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Contribution Graph */}
        <RevealOnScroll delay={0.15}>
          <div className="p-6 rounded-2xl border border-border bg-card mb-12">
            <div className="text-xs text-muted uppercase tracking-wider font-mono mb-4">
              Contribution Graph
            </div>
            <div className="flex gap-[3px] flex-wrap justify-center">
              {Array.from({ length: 52 }).map((_, weekIdx) => (
                <div key={weekIdx} className="flex flex-col gap-[3px]">
                  {Array.from({ length: 7 }).map((_, dayIdx) => {
                    // Deterministic pseudo-random based on position
                    const seed = (weekIdx * 7 + dayIdx + 42) * 2654435761;
                    const intensity = ((seed >>> 0) % 100) / 100;
                    return (
                      <div
                        key={dayIdx}
                        className="w-[11px] h-[11px] rounded-[2px]"
                        style={{
                          backgroundColor:
                            intensity > 0.75
                              ? "#7c3aed"
                              : intensity > 0.5
                                ? "rgba(124,58,237,0.55)"
                                : intensity > 0.3
                                  ? "rgba(124,58,237,0.25)"
                                  : "rgba(124,58,237,0.06)",
                        }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Pinned Repos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pinnedRepos.map((repo, index) => (
            <RevealOnScroll key={repo.name} delay={index * 0.08} className="h-full">
              <motion.a
                href={`${siteConfig.social.github}/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="group flex flex-col p-5 rounded-xl border border-border bg-card hover:border-accent/25 transition-all duration-300 card-shine hover-target h-full"
              >
                <div className="flex items-center gap-2 mb-3">
                  <FiGitBranch className="text-accent" size={16} />
                  <span className="text-white font-semibold text-sm group-hover:text-accent transition-colors truncate">
                    {repo.name}
                  </span>
                </div>
                <p className="text-muted text-xs leading-relaxed mb-4 line-clamp-2">
                  {repo.description}
                </p>
                <div className="flex items-center gap-4 mt-auto pt-2">
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{
                        backgroundColor:
                          langColors[repo.language] || "#8b8b8b",
                      }}
                    />
                    <span className="text-muted text-xs">{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted">
                    <FiStar size={12} />
                    <span className="text-xs">{repo.stars}</span>
                  </div>
                </div>
              </motion.a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
