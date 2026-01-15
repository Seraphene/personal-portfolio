"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Mission Logs", href: "#projects" },
  { label: "The Darkroom", href: "#creative" },
  { label: "Frequency", href: "#about" },
];

export default function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-strong rounded-lg px-6 py-3 border border-white/10">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="font-mono text-sm text-soft-lavender hover:text-white transition-colors"
            >
              KAB
            </a>
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-serif text-sm text-white/70 hover:text-soft-lavender transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
