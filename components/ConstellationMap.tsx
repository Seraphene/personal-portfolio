"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cube, Zap, Star, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectNode {
  id: string;
  title: string;
  tech: string;
  vibe: string;
  icon: React.ReactNode;
  x: number;
  y: number;
  url?: string;
}

const projects: ProjectNode[] = [
  {
    id: "blockchain",
    title: "Blockchain Vehicle Registration",
    tech: "Hyperledger Fabric, DigitalOcean, Docker",
    vibe: "Hard Tech",
    icon: <Cube className="w-5 h-5" />,
    x: 20,
    y: 30,
    url: "https://ltoblockchain.duckdns.org/",
  },
  {
    id: "automation",
    title: "Lost & Found Automation",
    tech: "n8n, PHP, Webhooks",
    vibe: "Efficiency",
    icon: <Zap className="w-5 h-5" />,
    x: 60,
    y: 50,
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    tech: "Next.js, Framer Motion",
    vibe: "Creative",
    icon: <Star className="w-5 h-5" />,
    x: 40,
    y: 70,
  },
];

export default function ConstellationMap() {
  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold mb-16 text-center"
        >
          <span className="text-soft-lavender">Mission</span>{" "}
          <span className="text-muted-peach">Logs</span>
        </motion.h2>

        {/* Constellation Map Container */}
        <div className="relative w-full h-[600px] sm:h-[700px] md:h-[800px]">
          {/* SVG Connections */}
          <motion.svg
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: 1 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <path
              d={`M ${projects[0].x}% ${projects[0].y}% L ${projects[1].x}% ${projects[1].y}%`}
              stroke="rgba(230, 230, 250, 0.2)"
              strokeWidth="1"
              strokeDasharray="4 4"
              fill="none"
            />
            <path
              d={`M ${projects[1].x}% ${projects[1].y}% L ${projects[2].x}% ${projects[2].y}%`}
              stroke="rgba(230, 230, 250, 0.2)"
              strokeWidth="1"
              strokeDasharray="4 4"
              fill="none"
            />
            <path
              d={`M ${projects[0].x}% ${projects[0].y}% L ${projects[2].x}% ${projects[2].y}%`}
              stroke="rgba(255, 218, 185, 0.2)"
              strokeWidth="1"
              strokeDasharray="4 4"
              fill="none"
            />
          </motion.svg>

          {/* Project Nodes */}
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="absolute"
              style={{
                left: `${project.x}%`,
                top: `${project.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={cn(
                  "group relative glass-strong rounded-lg p-6 w-64 sm:w-72",
                  "border border-white/10",
                  "hover:glow-lavender transition-all duration-300",
                  "cursor-pointer"
                )}
              >
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <ProjectContent project={project} />
                  </a>
                ) : (
                  <ProjectContent project={project} />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectContent({ project }: { project: ProjectNode }) {
  return (
    <>
      <div className="flex items-start justify-between mb-3">
        <div className="text-soft-lavender">{project.icon}</div>
        <ExternalLink className="w-4 h-4 text-soft-lavender/50 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <h3 className="font-mono text-lg sm:text-xl font-bold mb-2 text-white">
        {project.title}
      </h3>
      <p className="font-serif text-xs sm:text-sm text-white/60 mb-3">
        {project.tech}
      </p>
      <span className="inline-block px-2 py-1 text-xs font-mono text-muted-peach border border-muted-peach/30 rounded">
        {project.vibe}
      </span>
    </>
  );
}
