"use client";

import { motion } from "framer-motion";

export default function PortalSystem() {
  // CONFIGURATION
  // Make sure 'rick.gif' is in your 'public' folder!
  const travelerImage = "/rick.gif"; 
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen">
      
      {/* ================= LEFT PORTAL (ENTRY) ================= */}
      {/* Rick enters here. Green Portal to match the show. */}
      <motion.div
        className="absolute left-[-60px] top-1/2 -translate-y-1/2 w-[120px] h-[400px]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: [0, 1, 1, 0], 
          scale: [0, 1.2, 1.2, 0], 
        }}
        transition={{
          duration: 2.5,
          times: [0, 0.1, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 10, 
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-terminal-green via-white to-transparent blur-xl opacity-60 rounded-[100%]" />
        <div className="absolute inset-0 border-r-4 border-white blur-sm rounded-[100%]" />
      </motion.div>


      {/* ================= RIGHT PORTAL (EXIT) ================= */}
      <motion.div
        className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[120px] h-[400px]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: [0, 1, 1, 0], 
          scale: [0, 1.2, 1.2, 0], 
        }}
        transition={{
          duration: 2.5,
          delay: 4, 
          times: [0, 0.1, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 10,
          ease: "easeInOut"
        }}
      >
        {/* We keep the Right portal Purple/Lavender to match your theme (Inter-dimensional travel!) */}
        <div className="w-full h-full bg-gradient-to-l from-soft-lavender via-white to-transparent blur-xl opacity-60 rounded-[100%]" />
        <div className="absolute inset-0 border-l-4 border-white blur-sm rounded-[100%]" />
      </motion.div>


      {/* ================= RICK SANCHEZ ================= */}
      <motion.img
        src={travelerImage}
        alt="Rick Sanchez"
        // Increased size slightly for Rick (w-40) and fixed aspect ratio
        className="absolute top-1/2 w-40 h-40 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        initial={{ x: -200, opacity: 0 }}
        animate={{
          x: ["5vw", "45vw", "55vw", "95vw"], // Move across screen
          y: [0, -10, 10, 0], // Slight chaotic float (he is Rick after all)
          scale: [0, 1, 1, 0], // Grow out of portal, Shrink into portal
          // REMOVED: rotate (No spinning, he's running)
          opacity: [0, 1, 1, 0]
        }}
        transition={{
          duration: 5, 
          times: [0, 0.2, 0.8, 1],
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 7.5, 
          delay: 0.2 
        }}
      />
      
    </div>
  );
}
