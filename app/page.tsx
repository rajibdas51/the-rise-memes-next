import GameFeaturesSection from "@/components/Gameplay";
import HeroSection from "@/components/heroSection/Hero";
import Navbar from "@/components/navBar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <HeroSection />
      </div>
      <GameFeaturesSection />
    </>
  );
}
