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
      className="bg-cover bg-center w-full"
      style={{
        backgroundImage: `url(${heroBg.src})`,
        backgroundRepeat: "no-repeat",
        height: "calc(100vh - 71px)"
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


<div className="relative">
<p className=" text-[64px]  uppercase bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] text-transparent  bg-clip-text font-regular"  style={{fontFamily:'AVON' , textShadow: "0px  2px 4px rgba(35, 2, 3, 0.5)"}}> Build your empire </p>
<p className=" text-[64px]  uppercase bg-gradient-to-b from-[#E4D9BD] to-[#AA8246] text-transparent bg-clip-text font-regular mt-[-25px]"  style={{fontFamily:'AVON' ,}}> in the world of </p>
<p className=" text-[64px]  uppercase bg-gradient-to-b from-[#E4D9BD] to-[#AA8246] text-transparent bg-clip-text font-regular mt-[-25px]"  style={{fontFamily:'AVON'}}> crypto legends</p>
</div> 

<div className="relative text-[64px] font-regular uppercase" style={{ fontFamily: 'AVON' }}>
  <p className="text-transparent bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] bg-clip-text">
    Build your empire
  </p>
  <p className="absolute top-0 left-0 w-full h-full text-black" style={{ textShadow: "2px 2px 4px rgba(35, 2, 3, 0.5)" }}>
    Build your empire
  </p>
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
