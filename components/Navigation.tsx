"use client";

import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Mission Logs", href: "#projects" },
  { label: "The Darkroom", href: "#creative" },
  { label: "Frequency", href: "#about" },
];

const projectLinks = [
  { label: "LTO Blockchain", href: "https://ltoblockchain.duckdns.org/" },
  { label: "UB Lost & Found", href: "https://ublf-2.onrender.com" },
  { label: "Budget Listing (AI + n8n + GCP VM)", href: "https://tracker-tau-blond.vercel.app/" },
  { label: "Envelope Locker Message", href: "https://envelope-sigma.vercel.app/open" },
  { label: "Coffee Shop REST API", href: "https://coffee-shop-firebase-96578.web.app" },
  { label: "Magazine", href: "/magazine", external: false },
  { label: "Prizmak", href: "/prizmak", external: false },
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

              <div className="relative group">
                <button
                  type="button"
                  className="font-serif text-sm text-white/70 hover:text-soft-lavender transition-colors"
                >
                  Projects
                </button>
                <div className="absolute right-0 top-full mt-3 w-80 rounded-lg border border-white/10 bg-black/80 backdrop-blur-md p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {projectLinks.map((item) => {
                    const isExternal = item.external ?? item.href.startsWith("http");
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="block rounded-md px-3 py-2 font-serif text-sm text-white/70 hover:text-soft-lavender hover:bg-white/5 transition-colors"
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
