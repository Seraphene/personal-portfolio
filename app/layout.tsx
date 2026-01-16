import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Lora } from "next/font/google";
import "./globals.css";
import PortalSystem from "@/components/PortalSystem";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kim Andrei Besmar | Cosmic Lo-Fi Archive",
  description: "Architecting Systems on the Chain | Capturing Moments on Film. A Creative Technologist's Portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${lora.variable}`}>
      <body className="noise-overlay">
        <Preloader />
        <SmoothScroll>
          <div className="nebula-bg" />
          <PortalSystem />
          <div className="vignette" />
          <div className="scanlines" />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
