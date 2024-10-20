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
      className="bg-cover bg-center w-full h-full"
      style={{
        backgroundImage: `url(${heroBg.src})`,
        backgroundRepeat: "no-repeat",
        // height: "calc(100vh - 71px)",
      }}
    >
      <div className="container flex flex-col lg:flex-row items-center justify-between  ">
        <div className="flex">
          <div className=" mt-[80px]">
            {/* <Image
              src={FirstHead}
              alt="second heading"
              className="pb-5"
            /> */}
            {/* <Image src={SecondHead} alt="second heading"   className="pb-5"/>
            <Image src={ThirdHead} alt="second heading" /> */}

            {/* textShadow: "0px  2px 4px rgba(35, 2, 3, 0.5)" */}
            <div className="">


            <div className="relative">
  <p
    className="absolute top-0 left-0 text-[64px] uppercase font-regular text-[#472B03] blur-[4px] opacity-540"
    style={{
      fontFamily: "AVON",
      zIndex: 0,
    }}
  >
    Build your empire
  </p>
  <p
    className="relative text-[64px] uppercase font-regular"
    style={{
      fontFamily: "AVON",
      background: "linear-gradient(to bottom, #E4D9BD, #AA8246)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      zIndex: 1,
    }}
  >
    Build your empire
  </p>
</div>






<div className="relative">
  <p
    className="absolute top-0 left-0 text-[64px] uppercase font-regular text-[#472B03] blur-[4px] opacity-540 leading-[50px]"
    style={{
      fontFamily: "AVON",
      zIndex: 0,
    }}
  >
 in the world of
  </p>
  <p
    className="relative text-[64px] uppercase font-regular leading-[50px]"
    style={{
      fontFamily: "AVON",
      background: "linear-gradient(to bottom, #E4D9BD, #AA8246)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      zIndex: 1,
    }}
  >
     in the world of

  </p>
</div>






<div className="relative">
  <p
    className="absolute top-0 left-0 text-[64px] uppercase font-regular text-[#472B03] blur-[4px] opacity-540 leading-[90px]"
    style={{
      fontFamily: "AVON",
      zIndex: 0,
    }}
  >
  crypto legend!
  </p>
  <p
    className="relative text-[64px] uppercase font-regular leading-[90px]"
    style={{
      fontFamily: "AVON",
      background: "linear-gradient(to bottom, #E4D9BD, #AA8246)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      zIndex: 1,
    }}
  >
  crypto legend!
  </p>
</div>









            </div>
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
