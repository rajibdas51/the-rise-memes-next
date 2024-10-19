import React from "react";
import Image from "next/image";
import socialButton1 from "../../assets/images/socialButton1.png";
import socialButton2 from "../../assets/images/socialButton2.png";
export default function SocialButton() {
  return (
    <div   className="mt-[450px] ">
   <div className="relative cursor-pointer" >
   <Image
        src={socialButton1}
        alt=""
        className="w-[234px] h-[56px]"
      />
      <div className="absolute top-[14px] left-[77px]">
        <p  className="font-cinzel text-[18px] leading-[24px] font-semibold bg-gradient-to-b from-[#ECE6DF] to-[#D8C8AE] text-transparent bg-clip-text uppercase">Telegram</p>
      </div>
   </div>
  <div className="relative cursor-pointer" >
  <Image
        src={socialButton2}
        alt=""
        className="mt-1"
      />
          <div className="absolute top-[11px] left-[77px]">
        <p  className="font-cinzel text-[18px] leading-[24px] font-semibold text-[#808080] uppercase">join on x</p>
      </div>
    </div>
    <div className="relative cursor-pointer" >
    <Image
        src={socialButton2}
        alt=""
        className=""
      />
      <div className="absolute top-[11px] left-[74px]">
        <p  className="font-cinzel text-[18px] leading-[24px] font-semibold text-[#808080] uppercase"> audio & kyc</p>
      </div>
    </div>
    </div>
  );
}
