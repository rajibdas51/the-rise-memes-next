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
   
      }}
    >
      <div className="container flex flex-col lg:flex-row items-center justify-between 2xl:px-0 xl:px-4 ">
        <div className="flex">
          <div className=" 2xl:mt-[40px] mt-[90px]">
            <div className="">
              <div className="relative">
                <p
                  className="absolute top-0 left-0 2xl:text-[64px] text-[47px] uppercase font-regular text-[#472B03] blur-[3px] opacity-540"
                  style={{
                    fontFamily: "AVON",
                    zIndex: 0,
                  }}
                >
                  Build your empire
                </p>
                <p
                  className="relative  uppercase font-regular  2xl:text-[64px] text-[47px]"
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
                  className="absolute top-0 left-0 2xl:text-[64px] text-[47px] uppercase font-regular text-[#472B03] blur-[3px] opacity-540 leading-[50px]"
                  style={{
                    fontFamily: "AVON",
                    zIndex: 0,
                  }}
                >
                  in the world of
                </p>
                <p
                  className="relative 2xl:text-[64px] text-[47px] uppercase font-regular leading-[50px]"
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
                  className="absolute top-0 left-0 2xl:text-[64px] text-[47px] uppercase font-regular text-[#472B03] blur-[3px] opacity-540 leading-[80px]"
                  style={{
                    fontFamily: "AVON",
                    zIndex: 0,
                  }}
                >
                  crypto legend!
                </p>
                <p
                  className="relative 2xl:text-[64px] text-[47px] uppercase font-regular leading-[80px]"
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

      {/* <HeroBottom></HeroBottom> */}
    </div>
  );
};

export default HeroSection;
