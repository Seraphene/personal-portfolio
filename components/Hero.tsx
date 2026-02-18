"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale, y }}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 overflow-hidden"
    >
      {/* Background Abstract Shape */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-20"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="w-full h-full border border-soft-lavender/30 rounded-full relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-muted-peach/30 rounded-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-terminal-green/30 rounded-full">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-soft-lavender/20 rounded-full blur-3xl animate-pulse-glow" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Text Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6"
        >
          <span className="font-serif italic font-light text-soft-lavender">
            Kim Andrei
          </span>
          <br />
          <span
            className="glitch-text font-mono font-bold text-muted-peach tracking-tighter"
            data-text="BESMAR"
          >
            BESMAR
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "backOut" }}
          className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-2 border-soft-lavender/50 shadow-[0_0_30px_rgba(230,230,250,0.3)]"
        >
          <img
            src="/images/pfp.jfif"
            alt="Kim Andrei Besmar"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-xl sm:text-2xl md:text-3xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Architecting Systems on the Chain | Capturing Moments on Film.
        </motion.p>

        {/* Contact & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col items-center gap-6 mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 font-mono text-sm text-soft-lavender/80">
            <a href="mailto:kimandrei012@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
              <span className="text-acid-green">@</span> kimandrei012@gmail.com
            </a>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="flex items-center gap-2">
              <span className="text-acid-green">#</span> +639672564545
            </span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <button
            onClick={scrollToContent}
            className={cn(
              "group relative px-8 py-4 border border-white/20",
              "glass hover:bg-white/10",
              "font-mono text-sm text-soft-lavender uppercase tracking-wider",
              "transition-all duration-300",
              "flex items-center gap-2 mx-auto",
              "hover:glow-lavender"
            )}
          >
            <span>&gt; Initialize Sequence</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-white/40" />
      </motion.div>
    </motion.section>
  );
}