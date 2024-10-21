import GameFeaturesSection from "@/components/gamePlay/GamePlay";
import HeroSection from "@/components/heroSection/Hero";
import HeroBottom from "@/components/heroSection/HeroBottom";
import Navbar from "@/components/navBar/Navbar";


export default function Home() {
  return (
    <>
      <div className="h-full">
        <Navbar />
        <HeroSection />
        <HeroBottom></HeroBottom>
      </div>
      <div className="h-screen">
      <GameFeaturesSection />
      </div>
    </>
  );
}
