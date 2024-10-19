"use client";
import React from "react";
import Image from "next/image";
import FirstHead from "@/assets/images/first-head.svg";
import SecondHead from "@/assets/images/second-head.svg";
import ThirdHead from "@/assets/images/last-head.svg";
import heroBg from "../../assets/images/hero-bg.png";
import HeroForm from "./HeroForm";
import HeroBottom from "./HeroBottom";
import SocialButton from "./SocialButton";
const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center w-full h-screen"
      style={{
        backgroundImage: `url(${heroBg.src})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container  flex flex-col lg:flex-row items-center justify-between  ">
        <div className="flex ">
          <div className=" mt-[-40px]">
            <Image
              src={FirstHead}
              alt="second heading"
              className="pb-5"
            />
            <Image src={SecondHead} alt="second heading"   className="pb-5"/>
            <Image src={ThirdHead} alt="second heading" />
          </div>

          <SocialButton></SocialButton>
        </div>

        <HeroForm></HeroForm>
      </div>

      <HeroBottom></HeroBottom>
    </div>
  );
};

export default HeroSection;
