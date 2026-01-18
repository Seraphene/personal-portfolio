"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

export default function OrbitRadio() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <button
        onClick={handleToggle}
        className={cn(
          "group relative w-14 h-14 rounded-full",
          "border border-white/20 glass hover:border-soft-lavender/50",
          "flex items-center justify-center transition-all duration-300",
          "hover:scale-110 active:scale-95"
        )}
        title={isPlaying ? "Pause" : "Play"}
      >
        <div className="absolute inset-0 rounded-full border border-soft-lavender/0 group-hover:border-soft-lavender/30 transition-all duration-300" />
        
        {isPlaying ? (
          <Pause className="w-5 h-5 text-soft-lavender" />
        ) : (
          <Play className="w-5 h-5 text-soft-lavender ml-0.5" />
        )}

        {/* Subtle glow when playing */}
        {isPlaying && (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full border border-soft-lavender/30"
          />
        )}
      </button>

      {/* Tooltip on hover */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: -5 }}
        className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap"
      >
        <div className="bg-black/80 border border-white/10 rounded px-3 py-1.5">
          <p className="font-mono text-xs text-soft-lavender">
            {isPlaying ? "cosmic_dreams.mp3" : "Orbit Radio"}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
