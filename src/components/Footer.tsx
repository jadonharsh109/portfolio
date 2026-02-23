"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { FiGithub, FiLinkedin, FiHeart } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="#home" className="text-xl font-bold tracking-tight">
              <span className="text-gradient">&lt;</span>
              <span className="text-white">{siteConfig.shortName}</span>
              <span className="text-gradient">/&gt;</span>
            </a>
            <span className="text-muted/30 hidden md:inline">|</span>
            <span className="text-sm text-muted hidden md:inline">
              {siteConfig.domain}
            </span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {[
              {
                icon: <FiGithub size={18} />,
                href: siteConfig.social.github,
              },
              {
                icon: <FiLinkedin size={18} />,
                href: siteConfig.social.linkedin,
              },
              {
                icon: <SiUpwork size={18} />,
                href: siteConfig.social.upwork,
              },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-muted hover:text-white hover:border-accent/30 transition-all duration-300 hover-target"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-muted">
            <span>© {currentYear}</span>
            <span className="text-white font-medium">{siteConfig.shortName}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              Built with <FiHeart className="text-accent" size={12} />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
