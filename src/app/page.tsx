"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import GitHub from "@/components/GitHub";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});
const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), {
  ssr: false,
});

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <div className="noise-bg">
        <Navbar />
        <main>
          <Hero />
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
            <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          </div>
          <About />
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
            <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          </div>
          <Skills />
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
            <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          </div>
          <Experience />
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
            <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          </div>
          <Projects />
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
            <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          </div>
          <GitHub />
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
            <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          </div>
          <Reviews />
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
            <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          </div>
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
