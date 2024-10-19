import React from 'react';
import Seperator from "@/components/seperator";
const HeroBottom = () => {
    return (
<div>
<div className=' bg-[#130F0C] bg-opacity-95  py-6 z-50'>
        <div className='container  flex justify-between'>
          <div className='flex items-center'>
            <span className=" px-6 font-cinzel text-[20px] leading-[24px] font-medium bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] text-transparent bg-clip-text  ">BUILD & CONQUER</span>
          </div>
          <Seperator />
          <div className='flex items-center'>
            <span className="px-6  font-cinzel text-[20px] leading-[24px] font-medium bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] text-transparent bg-clip-text  ">REAL TIME BATTLES</span>
          </div>
          <Seperator />
          <div className='flex items-center'>
            <span className="px-6  font-cinzel text-[20px] leading-[24px] font-medium bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] text-transparent bg-clip-text  ">PLAY TO EARN</span>
          </div>
          <Seperator />
          <div className='flex items-center'>
            <span className="px-6  font-cinzel text-[20px] leading-[24px] font-medium bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] text-transparent bg-clip-text  ">TRADE & PLUNDER</span>
          </div>
          <Seperator />
          <div className='flex items-center'>
            <span className="px-6  font-cinzel text-[20px] leading-[24px] font-medium bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] text-transparent bg-clip-text  ">HIGH-QUALITY GRAPHICS</span>
          </div>
        </div>
      </div>
</div>
    );
};

export default HeroBottom;
