import GameFeaturesSection from "@/components/gamePlay/GamePlay";
import HeroSection from "@/components/heroSection/Hero";
import Navbar from "@/components/navBar/Navbar";


export default function Home() {
  return (
    <>
      <div className="">
        <Navbar />
        <HeroSection />
      </div>
      <div className="h-screen">
      <GameFeaturesSection />
      </div>
    </>
  );
}
