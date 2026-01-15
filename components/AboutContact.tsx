"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AboutContact() {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "4th-year student, tech enthusiast, photography hobbyist.";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setShowCursor(false);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t-2 border-acid-green border-sharp">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About Section */}
          <div>
            <h2 className="font-mono text-3xl sm:text-4xl font-bold mb-8 text-acid-green">
              About
            </h2>
            <div className="border-2 border-acid-green border-sharp border-thick p-6 bg-background">
              <div className="font-mono text-sm text-acid-green mb-4">
                <span className="text-gray-500">$</span> whoami
              </div>
              <div className="font-mono text-base text-white">
                {typedText}
                {showCursor && (
                  <span className="inline-block w-2 h-5 bg-acid-green ml-1 animate-pulse" />
                )}
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-3 border-2 border-acid-green border-sharp border-thick",
                  "text-acid-green hover:bg-acid-green hover:text-background",
                  "glitch-hover transition-colors duration-200"
                )}
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-3 border-2 border-acid-green border-sharp border-thick",
                  "text-acid-green hover:bg-acid-green hover:text-background",
                  "glitch-hover transition-colors duration-200"
                )}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className={cn(
                  "p-3 border-2 border-acid-green border-sharp border-thick",
                  "text-acid-green hover:bg-acid-green hover:text-background",
                  "glitch-hover transition-colors duration-200"
                )}
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-mono text-3xl sm:text-4xl font-bold mb-8 text-sunset-amber">
              Contact
            </h2>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                // Handle form submission
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-sm text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={cn(
                    "w-full px-4 py-3 bg-background border-2 border-gray-700",
                    "border-sharp border-thick text-white font-sans",
                    "focus:border-acid-green focus:outline-none",
                    "transition-colors duration-200"
                  )}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-sm text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={cn(
                    "w-full px-4 py-3 bg-background border-2 border-gray-700",
                    "border-sharp border-thick text-white font-sans",
                    "focus:border-acid-green focus:outline-none",
                    "transition-colors duration-200"
                  )}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-sm text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className={cn(
                    "w-full px-4 py-3 bg-background border-2 border-gray-700",
                    "border-sharp border-thick text-white font-sans",
                    "focus:border-acid-green focus:outline-none",
                    "transition-colors duration-200 resize-none"
                  )}
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "w-full px-6 py-3 border-2 border-acid-green border-sharp border-thick",
                  "bg-transparent text-acid-green font-mono text-sm uppercase",
                  "glitch-hover hover:bg-acid-green hover:text-background",
                  "transition-colors duration-200 flex items-center justify-center gap-2"
                )}
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
