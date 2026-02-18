"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface MagazineViewerProps {
    images: string[];
}

export default function MagazineViewer({ images }: MagazineViewerProps) {
    const [currentPage, setCurrentPage] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));

    // Preload next/prev images logic
    useEffect(() => {
        const preloadImage = (index: number) => {
            if (index >= 0 && index < images.length && !loadedImages.has(index)) {
                const img = new Image();
                img.src = images[index];
                img.onload = () => {
                    setLoadedImages((prev) => new Set(prev).add(index));
                };
            }
        };

        preloadImage(currentPage + 1);
        preloadImage(currentPage - 1);
        preloadImage(currentPage + 2); // Lookahead even further
    }, [currentPage, images, loadedImages]);

    const paginate = useCallback((newDirection: number) => {
        setDirection(newDirection);
        setCurrentPage((prev) => {
            const nextPage = prev + newDirection;
            if (nextPage < 0) return 0;
            if (nextPage >= images.length) return images.length - 1;
            return nextPage;
        });
    }, [images.length]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") paginate(1);
            if (e.key === "ArrowLeft") paginate(-1);
            if (e.key === "Escape") setIsFullscreen(false);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [paginate]);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
            rotateY: direction > 0 ? 45 : -45,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
            rotateY: direction < 0 ? 45 : -45,
        }),
    };

    const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

    return (
        <div className={cn(
            "relative flex flex-col items-center justify-center w-full transition-all duration-300",
            isFullscreen ? "fixed inset-0 z-50 bg-black/90 h-screen" : "h-[80vh] min-h-[600px]"
        )}>
            {/* Controls Container */}
            <div className="absolute top-4 right-4 z-20 flex gap-2">
                <button
                    onClick={toggleFullscreen}
                    className="p-2 rounded-full bg-black/50 hover:bg-white/20 text-white transition-colors backdrop-blur-sm"
                >
                    {isFullscreen ? <X size={20} /> : <Maximize2 size={20} />}
                </button>
            </div>

            {/* Main Viewer Area */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden perspective-1000">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                        key={currentPage}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                            scale: { duration: 0.2 },
                            rotateY: { duration: 0.4 },
                        }}
                        className={cn(
                            "absolute w-full flex items-center justify-center",
                            isFullscreen ? "h-full p-4" : "h-full max-w-4xl"
                        )}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = offset.x; // swipe power can be incorporated here
                            if (swipe < -100) {
                                paginate(1);
                            } else if (swipe > 100) {
                                paginate(-1);
                            }
                        }}
                    >
                        <div className={cn(
                            "relative bg-white shadow-2xl rounded-sm overflow-hidden",
                            isFullscreen ? "h-[90vh] aspect-[3/4]" : "h-[90%] aspect-[3/4]"
                        )}>
                            <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center">
                                {!loadedImages.has(currentPage) && (
                                    <div className="animate-pulse text-gray-400">Loading Page...</div>
                                )}
                            </div>
                            <img
                                src={images[currentPage]}
                                alt={`Page ${currentPage + 1}`}
                                className="w-full h-full object-contain pointer-events-none"
                                loading="eager"
                            />

                            {/* Spine Shader */}
                            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button
                    className={cn(
                        "absolute left-4 z-10 p-4 rounded-full bg-black/20 hover:bg-white/10 text-white backdrop-blur-md transition-all",
                        currentPage === 0 && "opacity-50 cursor-not-allowed hover:bg-black/20"
                    )}
                    onClick={() => paginate(-1)}
                    disabled={currentPage === 0}
                >
                    <ChevronLeft size={32} />
                </button>

                <button
                    className={cn(
                        "absolute right-4 z-10 p-4 rounded-full bg-black/20 hover:bg-white/10 text-white backdrop-blur-md transition-all",
                        currentPage === images.length - 1 && "opacity-50 cursor-not-allowed hover:bg-black/20"
                    )}
                    onClick={() => paginate(1)}
                    disabled={currentPage === images.length - 1}
                >
                    <ChevronRight size={32} />
                </button>
            </div>

            {/* Footer Info */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
                <div className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white font-mono text-sm">
                    Page {currentPage + 1} of {images.length}
                </div>
                <div className="flex gap-1">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setDirection(idx > currentPage ? 1 : -1);
                                setCurrentPage(idx);
                            }}
                            className={cn(
                                "w-1.5 h-1.5 rounded-full transition-all duration-300",
                                idx === currentPage ? "bg-acid-green w-4" : "bg-white/20 hover:bg-white/40"
                            )}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
