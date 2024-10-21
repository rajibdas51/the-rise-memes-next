"use client";

import React from "react";
import Image from "next/image";
import GoogleStore from "@/assets/images/googleStore.png";
import AppleStore from "@/assets/images/appleStore.png";
import mobileScreen from "@/assets/images/mobileScreen.png";
import ShowingButton from "./ShowingButton";

const GameFeaturesSection = () => {
  return (
    <div className="bg-[#130E08] w-[100%] h-full">
      <div className="relative">
        <h2
          className="font-cinzel  font-regular leading-[75.57px] text-[60px] text-center  mb-12 drop-shadow-lg pt-16"
          style={{
            // background: "linear-gradient(to bottom, #E4D9BD 0%, #B18D54 88%, #AA8246 100%)",
            background: "linear-gradient(to bottom, #E4D9BD, #AA8246)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 2px 40px rgba(70, 52, 39, 0.5)",
            filter: "blur(18px)", // Initial blur effect
            opacity: 0.5, // Initial opacity
            animation: "blurAnimation 2s forwards",
          }}
        >
          BUILD, CONQUER, RISE AND EARN
        </h2>
        <div className="flex justify-center">
          <h2
            className="font-cinzel  font-regular leading-[75.57px] text-[56px]   mb-12 drop-shadow-lg pt-16 absolute top-0 2xl:left-[26%] left-[13%] "
            style={{
              background: "linear-gradient(to bottom, #E4D9BD, #AA8246)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow:
                "0 4px 8px rgba(234, 143, 36, 0.1),0 4px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            BUILD, CONQUER, RISE AND EARN
          </h2>
        </div>
      </div>

      <div className="container pt-[83px] 2xl:px-0 xl:px-4">
        <div className="flex gap-6 justify-center">
          {/* Mobile Image */}
          <div className="w-[600px]">
            <Image
              src={mobileScreen}
              alt="Game Screenshot"
              layout="responsive"
              className="rounded-3xl "
            />

            {/* App Store Buttons */}
            <div className="flex mt-12">
              <div className="cursor-pointer ">
                <Image src={AppleStore} alt="AppleStore" />
              </div>

              <div className="cursor-pointer">
                <Image src={GoogleStore} alt="GoogleStore" />
              </div>
            </div>
          </div>

          {/* Features */}
          <ShowingButton></ShowingButton> 
        </div>
      </div>
    </div>
  );
};

export default GameFeaturesSection;
