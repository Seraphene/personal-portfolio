"use client";

import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Blockchain Vehicle Registration",
    tag: "Capstone / Hyperledger Fabric / DigitalOcean",
    description:
      "A decentralized system for government vehicle registration and ownership transfer.",
    accentColor: "green" as const,
    url: "https://ltoblockchain.duckdns.org/",
  },
  {
    title: "Lost & Found Automation",
    tag: "n8n / Automation / Workflow",
    description:
      "Automated retrieval system logic designed for rapid item recovery.",
    accentColor: "green" as const,
  },
  {
    title: "Prizmak Media",
    tag: "Multimedia / Web",
    description:
      "Multimedia assets and teaser campaigns for a creative agency.",
    accentColor: "amber" as const,
  },
];

export default function SelectedWorks() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-acid-green">Selected</span> Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              tag={project.tag}
              description={project.description}
              accentColor={project.accentColor}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
