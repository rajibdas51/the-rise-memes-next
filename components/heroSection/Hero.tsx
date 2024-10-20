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
        // height:'100vh'
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
<p className=" text-[64px]  uppercase bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] text-transparent  bg-clip-text font-regular"  style={{fontFamily:'AVON' , textShadow: "0px  2px 4px #230203"}}> Build your empire </p>
<p className=" text-[64px]  uppercase bg-gradient-to-b from-[#E4D9BD] to-[#AA8246] text-transparent bg-clip-text font-regular mt-[-25px]"  style={{fontFamily:'AVON'}}> in the world of </p>
<p className=" text-[64px]  uppercase bg-gradient-to-b from-[#E4D9BD] to-[#AA8246] text-transparent bg-clip-text font-regular mt-[-25px]"  style={{fontFamily:'AVON'}}> crypto legends</p>
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
