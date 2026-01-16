"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  tag: string;
  description: string;
  accentColor?: "green" | "amber";
  delay?: number;
  url?: string;
  className?: string;
}

export default function ProjectCard({
  title,
  tag,
  description,
  accentColor = "green",
  delay = 0,
  url,
  className,
}: ProjectCardProps) {
  const borderColor =
    accentColor === "green" ? "border-acid-green" : "border-sunset-amber";
  const textColor =
    accentColor === "green" ? "text-acid-green" : "text-sunset-amber";
  const hoverBg =
    accentColor === "green" ? "hover:bg-acid-green" : "hover:bg-sunset-amber";

  const CardContent = (
    <>
      <div className="flex items-start justify-between mb-4">
        <div>
          <span
            className={cn(
              "inline-block px-3 py-1 text-xs font-mono uppercase border-2 border-sharp border-thick",
              borderColor,
              textColor
            )}
          >
            {tag}
          </span>
        </div>
        <ExternalLink
          className={cn("w-5 h-5", textColor, "opacity-0 group-hover:opacity-100 transition-opacity")}
        />
      </div>

      <h3 className="font-mono text-xl sm:text-2xl font-bold mb-3 text-white">
        {title}
      </h3>

      <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        "group relative p-6 border-2 border-sharp border-thick",
        borderColor,
        "bg-background hover:bg-opacity-10",
        "glitch-hover transition-all duration-200",
        url && "cursor-pointer",
        className
      )}
    >
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {CardContent}
        </a>
      ) : (
        CardContent
      )}
    </motion.div>
  );
}
