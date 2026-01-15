"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const skills = {
  languages: ["TypeScript", "JavaScript", "PHP", "Python"],
  tools: ["Linux", "Git", "Docker", "n8n"],
  frameworks: ["Next.js", "React", "Node.js"],
  blockchain: ["Hyperledger Fabric", "Solidity"],
};

export default function Frequency() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold mb-16 text-center"
        >
          <span className="text-terminal-green">Frequency</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-lg p-6 border border-white/10"
          >
            <div className="font-mono text-sm mb-4">
              <span className="text-terminal-green">$</span>{" "}
              <span className="text-soft-lavender">cat</span>{" "}
              <span className="text-muted-peach">skills.json</span>
            </div>
            <pre className="font-mono text-xs text-white/80 overflow-x-auto">
              {JSON.stringify(skills, null, 2)}
            </pre>
          </motion.div>

          {/* Right: Journal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-lg p-6 border border-white/10"
          >
            <div className="font-serif text-base sm:text-lg text-white/80 leading-relaxed space-y-4">
              <p>
                When I'm not architecting systems on the blockchain or automating
                workflows, you'll find me lost in the pages of{" "}
                <span className="text-soft-lavender italic">"Lord of the Mysteries"</span>,
                following the melancholic journey of{" "}
                <span className="text-muted-peach italic">Frieren</span> through
                time, or hunting for vintage cameras in second-hand shops.
              </p>
              <p>
                There's something beautiful about the intersection of hard tech and
                soft aesthetics—the way a perfectly structured blockchain transaction
                can feel as elegant as a well-composed photograph, or how a vintage
                camera's mechanical precision mirrors the logic of clean code.
              </p>
              <p className="text-sm text-white/60 italic">
                "Listening to jazz while drifting through space."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
