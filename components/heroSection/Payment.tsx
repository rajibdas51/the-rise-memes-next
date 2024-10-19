import React from "react";

const Payment = () => {
  return (
    <div>
      <div className="flex gap-2   py-4  justify-center ">
        <button
          className="   border border-[#E1C790] rounded-none w-[75px] h-[38px]"
          style={{
            background: "radial-gradient(circle, #58482F 6%, #211811 80%)",
          }}
        >
          <p className="bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] text-transparent bg-clip-text  font-cinzel text-[16px] leading-[21.57px] font-[400]  ">
            ETH
          </p>
        </button>

        <button className=" bg-[#380106]  border border-[#E1C790] rounded-none w-[75px] h-[38px] ">
          <p className="bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] text-transparent bg-clip-text  font-cinzel text-[16px] leading-[21.57px] font-[400]  ">
            SOL
          </p>
        </button>
        <button className=" bg-[#380106]  border border-[#E1C790] rounded-none w-[75px] h-[38px] ">
          <p className="bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] text-transparent bg-clip-text  font-cinzel text-[16px] leading-[21.57px] font-[400]  ">
            USDT
          </p>
        </button>
        <button className=" bg-[#380106]  border border-[#E1C790] rounded-none w-[75px] h-[38px] ">
          <p className="bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] text-transparent bg-clip-text  font-cinzel text-[16px] leading-[21.57px] font-[400]  ">
            CARD
          </p>
        </button>
      </div>
    </div>
  );
};

export default Payment;
