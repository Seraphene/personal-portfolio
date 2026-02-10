import Hero from "@/components/Hero";
import AboutContact from "@/components/AboutContact";
import HorizontalScroll from "@/components/HorizontalScroll";
import TheDarkroom from "@/components/TheDarkroom";
import Frequency from "@/components/Frequency";
import CurrentFrequency from "@/components/CurrentFrequency";
import OrbitRadio from "@/components/OrbitRadio";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen relative">
        <CustomCursor />
        <Navigation />

        <Hero />

        {/* The New Horizontal Stream */}
        <HorizontalScroll />

        {/* The Creative Grid */}
        <CurrentFrequency />
        <TheDarkroom />



        <Frequency />
        <AboutContact />
        <OrbitRadio />
      </main>
    </SmoothScroll>
  );
}
