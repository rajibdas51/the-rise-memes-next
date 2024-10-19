import React from "react";
import bg from "../../assets/images/BG.png";
import isIcon from "../../assets/images/lsicon.png";
import leftIcon from "../../assets/images/leftIcon.png";
import rightIcon from "../../assets/images/rightIcon.png";
import bigBuyButton from "../../assets/images/bigBuyButton.png";
import ProgressBar from "../heroSection/ProgressBar";
import HeroTimes from "../heroSection/HeroTimes";
import Image from "next/image";
import Payment from "./Payment";
const HeroForm = () => {
  return (
    <div
      className="bg-cover bg-center    md:w-[46%]     xl:w-[47%]  2xl:w-[37%]  h-screen"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-center px-4">
        <div className=" pt-[90px]  2xl:pt-[130px] pb-[35px]">
          <div className="flex flex-col w-[100%]">
            <h3
              className="font-cinzel text-[30px] leading-[40.44px] text-center px-3 bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] text-transparent bg-clip-text pb-[7px]"
              style={{ textShadow: "0 9px 18px #230203" }}
            >
              BUY $RISE PRESALE
            </h3>

            <HeroTimes></HeroTimes>

            <div className="flex justify-center gap-20  pt-4 ">
              <p
                className=" font-cinzel text-[16px] leading-[26.96px] bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] text-transparent bg-clip-text font-[400]"
                style={{ textShadow: "0 9px 10px #230203" }}
              >
                $14,934,093.29
              </p>
              <p className="font-cinzel text-[16px] leading-[26.96px] bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] text-transparent bg-clip-text font-[400]">
                $14,934,093.29
              </p>
            </div>

            <ProgressBar></ProgressBar>

            <div className=" mt-[20px]">
              <div className="flex gap-8 justify-center ">
                <p
                  className=" font-cinzel text-[14px] leading-[26.96px] bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] text-transparent bg-clip-text font-[400]"
                  style={{ textShadow: "0 9px 18px #230203" }}
                >
                  Your Purchased $RISE{" "}
                </p>
                <div className="flex gap-3">
                  <p
                    className=" font-cinzel text-[14px] leading-[26.96px] bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] text-transparent bg-clip-text font-[400]"
                    style={{ textShadow: "0 9px 18px #230203" }}
                  >
                    =
                  </p>
                  <p
                    className=" font-cinzel text-[14px] leading-[26.96px] bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] text-transparent bg-clip-text font-[400]"
                    style={{ textShadow: "0 9px 18px #230203" }}
                  >
                    0
                  </p>
                  <span className="flex justify-center items-center">
                    <Image
                      src={isIcon}
                      alt="isIcon"
                      className="w-[16px] h-[16px] "
                    />
                  </span>
                </div>
              </div>

              <div className="flex gap-8 justify-center ">
                <p
                  className=" font-cinzel text-[14px] leading-[26.96px] bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] text-transparent bg-clip-text font-[400]"
                  style={{ textShadow: "0 9px 18px #230203" }}
                >
                  Your Stakeable $RISE
                </p>
                <div className="flex gap-2">
                  <p
                    className=" font-cinzel text-[14px] leading-[26.96px] bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] text-transparent bg-clip-text font-[400]"
                    style={{ textShadow: "0 9px 18px #230203" }}
                  >
                    =
                  </p>
                  <p
                    className=" font-cinzel text-[14px] leading-[26.96px] bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] text-transparent bg-clip-text font-[400]"
                    style={{ textShadow: "0 9px 18px #230203" }}
                  >
                    0
                  </p>
                  <span className="flex justify-center items-center">
                    <Image
                      src={isIcon}
                      alt="isIcon"
                      className="w-[16px] h-[16px] "
                    />
                  </span>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <div className="flex gap-2">
                  <span className="flex justify-center items-center">
                    <Image src={leftIcon} alt="isIcon" className="" />
                  </span>

                  <p
                    className=" font-cinzel text-[14px] leading-[26.96px] bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] text-transparent bg-clip-text font-[400]"
                    style={{ textShadow: "0 9px 18px #230203" }}
                  >
                    1 $RISE
                  </p>
                </div>
                <div>
                  <p className="font-cinzel text-[14px] leading-[26.96px] bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] text-transparent bg-clip-text font-[400]">
                    =
                  </p>
                </div>
                <div className="flex gap-2">
                  <p
                    className=" font-cinzel text-[14px] leading-[26.96px] bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] text-transparent bg-clip-text font-[400]"
                    style={{ textShadow: "0 9px 18px #230203" }}
                  >
                    $0.349000
                  </p>
                  <span className="flex justify-center items-center">
                    <Image src={rightIcon} alt="isIcon" className="" />
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <Payment></Payment>
            {/* ETH Input Field */}
            <div className="flex justify-center">
              <div className="mt-6 w-[100%]">
                <p className="bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] text-transparent bg-clip-text  font-cinzel text-[16px] leading-[21.57px] font-[400]  ">
                  PAY WITH ETH
                </p>
                <div className="flex items-center justify-between mt-2 bg-[#430109] text-white bg-gradient-to-b from-[#230203] to-[#430109] py-2 px-1 rounded-[4px]">
                  <span className="bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] text-transparent bg-clip-text  font-cinzel text-[20px] leading-[21.57px] font-[400]">
                    0
                  </span>
                  <span className="bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] text-transparent bg-clip-text  font-cinzel text-[20px] leading-[21.57px] font-[400] pr-2">
                    MAX
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="mt-4 w-[100%]">
                <label className="bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] text-transparent bg-clip-text  font-cinzel text-[16px] leading-[21.57px] font-[400]">
                  $SRISE YOU RECEIVE
                </label>
                <input
                  type="number"
                  className="w-full p-2  bg-[#430109] text-white rounded-[4px] mt-2 bg-gradient-to-b from-[#230203] to-[#430109]"
                  placeholder="0"
                />
              </div>
            </div>
            {/* Buy Button */}

            <div className="mt-4 relative flex  justify-center ">
              <Image
                src={bigBuyButton}
                alt="second heading"
                className=" w-[100%]"
              />

              <div className="absolute top-[15px] left-44   ">
                <p className="font-cinzel  bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] text-transparent bg-clip-text  font-cinzel text-[18px] leading-[21.57px] font-[400]  uppercase">
                  Buy
                </p>
              </div>
            </div>

            <div className="underline  decoration-[#8C6742] text-center text-xs pt-2 mt-4">
              <a
                href=""
                className="bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] text-transparent bg-clip-text  font-cinzel text-[14px] leading-[18.87px] font-[400]  "
              >
                DON'T HAVE A WALLET?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroForm;
