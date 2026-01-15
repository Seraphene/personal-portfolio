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
    category: "Product Design",
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

export default function CreativeLab() {
  return (
    <section id="creative" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-sunset-amber">Creative</span> Lab
        </h2>

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
              <div className="relative border-2 border-sunset-amber border-sharp border-thick overflow-hidden bg-background">
                <div className="relative aspect-[4/3] bg-gray-900">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-mono text-sm">
                    {item.imageUrl.replace("/", "").replace(".jpg", "")}
                  </div>
                </div>
                <div className="p-4">
                  <span className="inline-block px-3 py-1 text-xs font-mono uppercase border-2 border-sharp border-thick border-sunset-amber text-sunset-amber mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-mono text-lg font-bold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-300">
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
