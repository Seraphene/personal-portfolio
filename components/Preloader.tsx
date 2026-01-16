"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Fake loading counter
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500); // Wait a bit at 100%
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-void-black flex flex-col items-center justify-center font-mono text-terminal-green"
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="text-4xl font-bold mb-4">
            SYSTEM BOOT... {Math.min(counter, 100)}%
          </div>
          <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-terminal-green"
              style={{ width: `${Math.min(counter, 100)}%` }}
            />
          </div>
          <div className="mt-2 text-xs opacity-50">
            {counter < 40 ? "LOADING ASSETS" : counter < 80 ? "ESTABLISHING UPLINK" : "ACCESS GRANTED"}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
