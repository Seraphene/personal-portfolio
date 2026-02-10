"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Maximize2, Move } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const assets = [
    { id: 1, src: "/projects/prizmak/1.png", title: "Visual Resonance", depth: 0.1 },
    { id: 2, src: "/projects/prizmak/2.png", title: "Kinetic Geometry", depth: 0.2 },
    { id: 3, src: "/projects/prizmak/3.png", title: "Prismatic Shift", depth: 0.15 },
    { id: 4, src: "/projects/prizmak/4.png", title: "Digital Texture", depth: 0.25 },
    { id: 5, src: "/projects/prizmak/5.png", title: "Chroma Core", depth: 0.1 },
    { id: 6, src: "/projects/prizmak/6.png", title: "Abstract Flow", depth: 0.3 },
    { id: 7, src: "/projects/prizmak/7.png", title: "Pixel Dream", depth: 0.12 },
    { id: 8, src: "/projects/prizmak/8.png", title: "Synthetic Light", depth: 0.18 },
    { id: 9, src: "/projects/prizmak/9.png", title: "Gravity Warp", depth: 0.22 },
    { id: 10, src: "/projects/prizmak/10.png", title: "Neon Pulse", depth: 0.14 },
    { id: 11, src: "/projects/prizmak/11.png", title: "Fluid Dynamics", depth: 0.28 },
    { id: 12, src: "/projects/prizmak/12.png", title: "Silicon Soul", depth: 0.16 },
    { id: 13, src: "/projects/prizmak/13.png", title: "Cybernetic Ether", depth: 0.24 },
    { id: 14, src: "/projects/prizmak/14.png", title: "Infinite Loop", depth: 0.2 }
];

export default function PrizmakPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Track mouse for 3D physics tilt
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 30, stiffness: 200 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY, currentTarget } = e;
        const { width, height, left, top } = currentTarget.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    return (
        <main
            ref={containerRef}
            className="bg-void-black min-h-[300vh] relative overflow-x-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* HUD Navigation */}
            <nav className="fixed top-8 left-8 z-50">
                <Link
                    href="/"
                    className="group flex items-center gap-2 font-mono text-soft-lavender hover:text-white transition-colors glass px-4 py-2 rounded-full border border-white/10"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span>Exit Simulation</span>
                </Link>
            </nav>

            <div className="fixed inset-0 pointer-events-none z-10">
                <div className="absolute top-8 right-8 text-right">
                    <h1 className="font-mono text-4xl font-bold text-white tracking-tighter">
                        PRIZMAK <span className="text-muted-peach">MEDIA</span>
                    </h1>
                    <p className="font-mono text-xs text-soft-lavender/50 mt-1 uppercase tracking-widest">
                        Kinetic Asset Stream // 14 Items Detected
                    </p>
                </div>
            </div>

            {/* 3D Scene */}
            <div className="fixed inset-0 perspective-1000 flex items-center justify-center pointer-events-none">
                <motion.div
                    style={{ rotateX, rotateY }}
                    className="relative w-full h-full flex items-center justify-center p-20"
                >
                    {assets.map((asset, index) => (
                        <AssetCard
                            key={asset.id}
                            asset={asset}
                            index={index}
                            scrollYProgress={scrollYProgress}
                            mouseX={mouseX}
                            mouseY={mouseY}
                        />
                    ))}
                </motion.div>
            </div>

            {/* Decorative Voids */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-soft-lavender/5 rounded-full blur-[120px] animate-nebula" />
                <div className="absolute bottom-[30%] right-[15%] w-[400px] h-[400px] bg-muted-peach/5 rounded-full blur-[100px] animate-nebula-delayed" />
            </div>

            {/* Interaction Hint */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-white/20"
                >
                    <Move className="w-6 h-6" />
                </motion.div>
                <p className="font-mono text-[10px] uppercase text-white/30 tracking-widest">
                    Scroll to Pilot // Move to Tilt
                </p>
            </div>
        </main>
    );
}

function AssetCard({ asset, index, scrollYProgress, mouseX, mouseY }: any) {
    // Parallax based on scroll
    const yTranslate = useTransform(
        scrollYProgress,
        [0, 1],
        [index * 200, -index * 400 - 1000]
    );

    // Depth based scale and opacity
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

    // Individual card float
    const floatY = useSpring(useTransform(mouseY, [-0.5, 0.5], [asset.depth * 100, -asset.depth * 100]));
    const floatX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-asset.depth * 100, asset.depth * 100]));

    return (
        <motion.div
            style={{
                y: yTranslate,
                scale,
                opacity,
                x: (index % 2 === 0 ? -1 : 1) * (200 + asset.depth * 1000),
                translateX: floatX,
                translateY: floatY,
                zIndex: 14 - index
            }}
            className="absolute w-[400px] group pointer-events-auto"
        >
            <div className="relative glass-strong rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 hover:glow-lavender">
                <div className="relative aspect-video">
                    <Image
                        src={asset.src}
                        alt={asset.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <h3 className="font-mono text-xl font-bold text-white mb-1">{asset.title}</h3>
                        <p className="font-mono text-[10px] text-soft-lavender/70 uppercase">Serial Artifact #{asset.id}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
