"use client";

import { motion } from "framer-motion";

const skills = [
  "n8n",
  "Docker",
  "Git",
  "Hyperledger Fabric",
  "Next.js",
  "DigitalOcean",
  "Linux",
  "TypeScript",
  "Node.js",
  "React",
];

export default function StackMarquee() {
  return (
    <section className="py-12 overflow-hidden border-y-2 border-acid-green border-sharp">
      <div className="flex whitespace-nowrap">
        <div className="flex animate-marquee">
          {skills.map((skill, index) => (
            <motion.div
              key={`first-${index}`}
              className="inline-block mx-8 font-mono text-2xl sm:text-3xl md:text-4xl text-acid-green"
              whileHover={{ scale: 1.1 }}
            >
              {skill}
              <span className="mx-8 text-gray-600">/</span>
            </motion.div>
          ))}
        </div>
        <div className="flex animate-marquee" aria-hidden="true">
          {skills.map((skill, index) => (
            <motion.div
              key={`second-${index}`}
              className="inline-block mx-8 font-mono text-2xl sm:text-3xl md:text-4xl text-acid-green"
              whileHover={{ scale: 1.1 }}
            >
              {skill}
              <span className="mx-8 text-gray-600">/</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
