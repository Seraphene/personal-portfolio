"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Music } from "lucide-react";
import { cn } from "@/lib/utils";

export default function OrbitRadio() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    setIsPlaying(!isPlaying);
    // Toast notification could go here
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="glass-strong rounded-lg p-4 w-64 border border-white/10">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <Music className="w-4 h-4 text-soft-lavender" />
          <span className="font-mono text-xs text-soft-lavender uppercase tracking-wider">
            Orbit Radio
          </span>
        </div>

        {/* Track Info */}
        <div className="mb-3">
          <p className="font-serif text-sm text-white/80 mb-1">
            Now Playing:
          </p>
          <p className="font-mono text-xs text-soft-lavender truncate">
            {isPlaying ? "cosmic_dreams.mp3" : "Station: 004-LIP"}
          </p>
        </div>

        {/* Visualizer */}
        <div className="flex items-end justify-center gap-1 h-12 mb-3">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-gradient-to-t from-soft-lavender to-muted-peach rounded-full"
              animate={
                isPlaying
                  ? {
                      height: [
                        `${8 + Math.random() * 20}px`,
                        `${12 + Math.random() * 16}px`,
                        `${8 + Math.random() * 20}px`,
                      ],
                    }
                  : { height: "8px" }
              }
              transition={{
                duration: 0.5 + Math.random() * 0.5,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={handleToggle}
          className={cn(
            "w-full py-2 px-4 rounded border border-white/10",
            "glass hover:bg-white/10 transition-all duration-200",
            "flex items-center justify-center gap-2",
            "font-mono text-xs text-soft-lavender"
          )}
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4" />
              Pause
            </>
          ) : (
            <>
              <Play className="w-4 h-4" />
              Play
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
