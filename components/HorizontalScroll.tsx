"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Blockchain Vehicle Registration",
    tag: "Capstone / Hyperledger Fabric",
    description: "Decentralized government vehicle tracking system on DigitalOcean.",
    accentColor: "green" as const,
  },
  {
    title: "Lost & Found Automation",
    tag: "n8n / Workflow",
    description: "Automated retrieval logic for rapid item recovery.",
    accentColor: "green" as const,
  },
  {
    title: "Prizmak Media",
    tag: "Multimedia / Branding",
    description: "Teaser campaigns and asset design for creative agency.",
    accentColor: "amber" as const,
  },
  {
    title: "Portfolio V1",
    tag: "Next.js / Framer",
    description: "The cosmic archive you are currently browsing.",
    accentColor: "amber" as const,
  },
];

export default function HorizontalScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform vertical scroll (0 to 1) into horizontal movement (1% to -75%)
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Title pinned to the background */}
        <div className="absolute top-10 left-10 z-20 mix-blend-difference pointer-events-none">
          <h2 className="font-mono text-4xl md:text-6xl font-bold text-soft-lavender opacity-80">
            MISSION<br />LOGS
          </h2>
          <div className="h-1 w-20 bg-terminal-green mt-4" />
        </div>

        {/* The Moving Stream */}
        <motion.div style={{ x }} className="flex gap-20 px-24 pl-[20vw] items-center">
          {projects.map((project, index) => (
            <div key={index} className="relative w-[80vw] md:w-[60vw] lg:w-[40vw] flex-shrink-0 group">
              {/* Connector Line */}
              <div className="absolute top-1/2 -left-20 w-20 h-[2px] bg-white/10" />
              
              <ProjectCard
                title={project.title}
                tag={project.tag}
                description={project.description}
                accentColor={project.accentColor}
                className="h-[60vh] w-full transform transition-transform duration-500 group-hover:scale-[1.02] border-white/10 bg-black/40 backdrop-blur-md"
              />
              
              {/* Giant Background Number */}
              <span className="absolute -top-20 -left-10 font-mono text-[10rem] text-white/5 font-bold pointer-events-none z-[-1]">
                0{index + 1}
              </span>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
