"use client";

import { motion } from "framer-motion";

interface CreativeItem {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const creativeItems: CreativeItem[] = [
  {
    title: "Everscent",
    description: "Product packaging and label design for coffee-scented candles.",
    imageUrl: "/placeholder-everscent.jpg",
    category: "Branding",
  },
  {
    title: "Prizmak Media",
    description: "Multimedia assets and teaser campaigns for a creative agency.",
    imageUrl: "/placeholder-prizmak.jpg",
    category: "Multimedia",
  },
  {
    title: "Digital Vintage",
    description: "Film photography aesthetic captured with Canon G7X.",
    imageUrl: "/placeholder-photo-1.jpg",
    category: "Photography",
  },
  {
    title: "Digital Vintage",
    description: "Kodak-inspired color grading and composition.",
    imageUrl: "/placeholder-photo-2.jpg",
    category: "Photography",
  },
  {
    title: "Digital Vintage",
    description: "Nostalgic moments frozen in time.",
    imageUrl: "/placeholder-photo-3.jpg",
    category: "Photography",
  },
];

export default function TheDarkroom() {
  return (
    <section id="creative" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold mb-16 text-center"
        >
          <span className="text-muted-peach">The</span>{" "}
          <span className="text-soft-lavender">Darkroom</span>
        </motion.h2>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {creativeItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="break-inside-avoid mb-6 group"
              whileHover={{ rotate: [0, -2, 2, -2, 0], transition: { duration: 0.3 } }}
            >
              <div className="glass-strong rounded-lg overflow-hidden border border-white/10">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-soft-lavender/10 to-muted-peach/10 vintage-filter">
                  <div className="absolute inset-0 flex items-center justify-center text-white/20 font-mono text-sm">
                    {item.imageUrl.replace("/", "").replace(".jpg", "")}
                  </div>
                </div>
                <div className="p-4">
                  <span className="inline-block px-2 py-1 text-xs font-mono uppercase border border-white/20 text-muted-peach mb-2 rounded">
                    {item.category}
                  </span>
                  <h3 className="font-mono text-base font-bold mb-1 text-white">
                    {item.title}
                  </h3>
                  <p className="font-serif text-xs text-white/70">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
