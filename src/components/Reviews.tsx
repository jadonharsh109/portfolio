"use client";

import { motion } from "framer-motion";
import { upworkReviews, siteConfig } from "@/lib/data";
import { AnimatedHeading, RevealOnScroll } from "./AnimatedText";
import { SiUpwork } from "react-icons/si";
import { FiArrowUpRight, FiStar } from "react-icons/fi";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <FiStar
          key={i}
          size={14}
          className={
            i < rating
              ? "text-amber-400 fill-amber-400"
              : "text-muted/30"
          }
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-32 overflow-hidden">
      <div className="gradient-orb w-[500px] h-[500px] bg-green-500/20 -bottom-40 -left-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <RevealOnScroll>
            <span className="text-accent font-mono text-sm tracking-widest uppercase">
              05 — Reviews
            </span>
          </RevealOnScroll>
          <AnimatedHeading
            text="What Clients"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-white"
            delay={0.1}
          />
          <AnimatedHeading
            text="Say About Me"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient"
            delay={0.2}
          />
          <RevealOnScroll delay={0.3}>
            <div className="flex items-center gap-3 mt-6">
              <SiUpwork className="text-green-400" size={24} />
              <span className="text-muted text-lg">
                Verified reviews from Upwork clients
              </span>
            </div>
          </RevealOnScroll>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upworkReviews.map((review, index) => (
            <RevealOnScroll key={index} delay={index * 0.1} className="h-full">
              <motion.div
                whileHover={{ y: -5 }}
                className="group h-full p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-green-500/20 hover:bg-card-hover transition-all duration-500 card-shine flex flex-col"
              >
                {/* Header: rating + date */}
                <div className="flex items-center justify-between mb-4">
                  <StarRating rating={review.rating} />
                  <span className="text-xs text-muted font-mono">
                    {review.date}
                  </span>
                </div>

                {/* Project name */}
                <div className="mb-3">
                  <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-mono border border-green-500/20">
                    {review.project}
                  </span>
                </div>

                {/* Review text */}
                <p className="text-muted leading-relaxed text-sm flex-grow mb-5">
                  &ldquo;{review.review}&rdquo;
                </p>

                {/* Footer: client info */}
                <div className="flex items-center pt-4 border-t border-border/30">
                  <div>
                    <div className="text-white font-medium text-sm">
                      {review.clientName}
                    </div>
                    <div className="text-xs text-muted">
                      {review.country}
                    </div>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        {/* CTA: View full Upwork profile */}
        <RevealOnScroll delay={0.4}>
          <div className="mt-16 text-center">
            <motion.a
              href={siteConfig.social.upwork}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-green-500/30 bg-green-500/5 hover:bg-green-500/10 hover:border-green-500/50 transition-all duration-300 hover-target group"
            >
              <SiUpwork className="text-green-400" size={22} />
              <span className="text-white font-medium">
                View Full Upwork Profile
              </span>
              <FiArrowUpRight
                className="text-green-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                size={18}
              />
            </motion.a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
