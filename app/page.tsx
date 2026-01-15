import Hero from "@/components/Hero";
import ConstellationMap from "@/components/ConstellationMap";
import TheDarkroom from "@/components/TheDarkroom";
import Frequency from "@/components/Frequency";
import CurrentFrequency from "@/components/CurrentFrequency";
import OrbitRadio from "@/components/OrbitRadio";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen relative" style={{ zIndex: 2 }}>
      <CustomCursor />
      <Navigation />
      <Hero />
      <ConstellationMap />
      <CurrentFrequency />
      <TheDarkroom />
      <Frequency />
      <OrbitRadio />
    </main>
  );
}
