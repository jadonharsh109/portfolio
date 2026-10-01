"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiDownload, FiExternalLink } from "react-icons/fi";
import {
  resumes,
  resumeFileUrl,
  siteConfig,
  type ResumeId,
} from "@/lib/data";

export default function ResumeViewer({
  initialId,
  initialOnePage,
}: {
  initialId: ResumeId;
  initialOnePage: boolean;
}) {
  const [activeId, setActiveId] = useState<ResumeId>(initialId);
  const [onePage, setOnePage] = useState(initialOnePage);

  const active = resumes.find((r) => r.id === activeId) ?? resumes[0];
  const fileUrl = resumeFileUrl(active.file, onePage);
  const fileName = fileUrl.split("/").pop();

  // Keep the URL shareable (e.g. /resume?domain=aws&pages=1) without a navigation.
  const syncUrl = (id: ResumeId, isOnePage: boolean) => {
    const params = new URLSearchParams();
    if (id !== "master") params.set("domain", id);
    if (isOnePage) params.set("pages", "1");
    const qs = params.toString();
    window.history.replaceState(null, "", qs ? `/resume?${qs}` : "/resume");
  };

  const selectDomain = (id: ResumeId) => {
    setActiveId(id);
    syncUrl(id, onePage);
  };

  const selectLength = (isOnePage: boolean) => {
    setOnePage(isOnePage);
    syncUrl(activeId, isOnePage);
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"
          >
            <FiArrowLeft size={16} />
            Back to portfolio
          </Link>
          <Link href="/" className="text-lg font-bold tracking-tight">
            <span className="text-gradient">&lt;</span>
            <span className="text-white">{siteConfig.shortName}</span>
            <span className="text-gradient">/&gt;</span>
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-accent-light mb-3">
            {"// resume"}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            {siteConfig.name}
          </h1>
          <p className="mt-3 text-muted max-w-2xl">
            Same experience, tailored for each role. Pick a domain to preview
            it, then download the PDF.
          </p>
        </motion.div>

        {/* Domain selector */}
        <div className="mt-8 flex flex-wrap gap-2" role="tablist">
          {resumes.map((r) => {
            const isActive = r.id === activeId;
            return (
              <button
                key={r.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => selectDomain(r.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full border transition-colors duration-300 ${
                  isActive
                    ? "text-white border-accent/50"
                    : "text-muted border-border hover:text-white hover:border-accent/30"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="resume-domain-indicator"
                    className="absolute inset-0 rounded-full bg-accent/20"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{r.label}</span>
              </button>
            );
          })}
        </div>

        {/* Toolbar */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-card border border-border">
          <div className="min-w-0">
            <p className="text-white font-medium truncate">{active.title}</p>
            <div className="mt-2 inline-flex p-1 rounded-full bg-white/5 border border-white/10 text-xs">
              {[
                { label: "Full (2 pages)", value: false },
                { label: "Short (1 page)", value: true },
              ].map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => selectLength(opt.value)}
                  aria-pressed={onePage === opt.value}
                  className={`px-3 py-1 rounded-full transition-colors ${
                    onePage === opt.value
                      ? "bg-white/10 text-white"
                      : "text-muted hover:text-white"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-2 shrink-0">
            <a
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-muted hover:text-white border border-border hover:border-accent/30 rounded-full transition-colors"
            >
              <FiExternalLink size={16} />
              Open
            </a>
            <a
              href={fileUrl}
              download={fileName}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-accent hover:bg-accent-dark rounded-full transition-colors"
            >
              <FiDownload size={16} />
              Download PDF
            </a>
          </div>
        </div>

        {/* Preview */}
        <div className="mt-6 rounded-2xl overflow-hidden border border-border bg-card">
          <iframe
            key={fileUrl}
            src={`${fileUrl}#view=FitH`}
            title={`${active.title} resume`}
            className="w-full h-[80vh] min-h-[600px] bg-white"
          />
        </div>
        <p className="mt-3 text-xs text-muted text-center">
          Preview not showing on your device?{" "}
          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-light hover:underline"
          >
            Open the PDF directly
          </a>
          .
        </p>
      </main>
    </div>
  );
}
