"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const moods = [
  {
    name: "Laufey",
    vibe: "Vintage Jazz",
    gradient: "from-amber-900/40 via-rose-800/30 to-amber-700/40",
    filter: "sepia(30%) contrast(90%)",
  },
  {
    name: "Wave to Earth",
    vibe: "Blurred Nature",
    gradient: "from-emerald-900/40 via-teal-800/30 to-cyan-700/40",
    filter: "blur(2px) brightness(0.9)",
  },
  {
    name: "Munimuni",
    vibe: "Melancholic Indie",
    gradient: "from-purple-900/40 via-pink-800/30 to-rose-700/40",
    filter: "contrast(80%) saturate(70%)",
  },
  {
    name: "Joji",
    vibe: "Grainy Dark",
    gradient: "from-gray-900/60 via-slate-800/50 to-zinc-900/60",
    filter: "grayscale(40%) contrast(110%)",
  },
];

export default function CurrentFrequency() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="text-soft-lavender">Current</span>{" "}
          <span className="text-muted-peach">Frequency</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {moods.map((mood, index) => (
            <motion.div
              key={mood.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group cursor-pointer"
            >
              <div className="glass-strong rounded-lg overflow-hidden border border-white/10 aspect-square relative">
                {/* Album Art Background */}
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br",
                    mood.gradient,
                    "opacity-80"
                  )}
                  style={{ filter: mood.filter }}
                />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <h3 className="font-mono text-lg font-bold text-white mb-2">
                    {mood.name}
                  </h3>
                  <p className="font-serif text-xs text-white/70">
                    {mood.vibe}
                  </p>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br",
                    mood.gradient,
                    "blur-xl"
                  )} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
