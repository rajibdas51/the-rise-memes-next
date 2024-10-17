import React from "react";
import bg from "../assets/images/BG.png";
const HeroForm = () => {
  return (
    <div
      className="bg-cover bg-center w-[860px] h-[100%]"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
      }}
    >

{/* className="font-cinzel  font-medium leading-[21.57px] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] relative px-6 bg-transparent  items-center justify-center  " */}
      {/* Smart Contract Form */}
   <div className="flex justify-center w-[100%] h-[100%] pl-[130px]">
   <div className="py-[90px] ">
        <div className="flex flex-col  ">
          <h3 className="font-cinzel text-[30px] leading-[40.44px] items-center justify-center px-3 ">
            BUY $RISE PRESALE
          </h3>
          <div className="flex justify-between items-center">
            <div className="text-center">
              <p>Days</p>
              <p className="text-lg">
                <span
                  className=" w-3 inline-block bg-[#430109] text-[#F5E5D1] pl-1 pr-4 rounded-sm items-center justify-center mx-auto mr-1
                    "
                >
                  2
                </span>
                <span
                  className=" w-3 inline-block bg-[#430109] text-[#F5E5D1] pl-1 pr-4 rounded-sm items-center justify-center mx-auto mr-1
                    "
                >
                  9
                </span>
              </p>
            </div>
            <div className="text-center">
              <p>Hours</p>
              <p className="text-lg">
                <span
                  className=" w-3 inline-block bg-[#430109] text-[#F5E5D1] pl-1 pr-4 rounded-sm items-center justify-center mx-auto mr-1
                    "
                >
                  0
                </span>
                <span
                  className=" w-3 inline-block bg-[#430109] text-[#F5E5D1] pl-1 pr-4 rounded-sm items-center justify-center mx-auto mr-1
                    "
                >
                  2
                </span>
              </p>
            </div>
            <div className="text-center">
              <p>Minutes</p>
              <p className="text-lg">
                <span
                  className=" w-3 inline-block bg-[#430109] text-[#F5E5D1] pl-1 pr-4 rounded-sm items-center justify-center mx-auto mr-1
                    "
                >
                  3
                </span>
                <span
                  className=" w-3 inline-block bg-[#430109] text-[#F5E5D1] pl-1 pr-4 rounded-sm items-center justify-center mx-auto mr-1
                    "
                >
                  0
                </span>
              </p>
            </div>
            <div className="text-center">
              <p>Seconds</p>
              <p className="text-lg">
                <span
                  className=" w-3 inline-block bg-[#430109] text-[#F5E5D1] pl-1 pr-4 rounded-sm items-center justify-center mx-auto mr-1
                    "
                >
                  5
                </span>
                <span
                  className=" w-3 inline-block bg-[#430109] text-[#F5E5D1] pl-1 pr-4 rounded-sm items-center justify-center mx-auto mr-1
                    "
                >
                  8
                </span>
              </p>
            </div>
          </div>

          <p className="text-center my-2">$14,934,093.29</p>

          <div className="bg-[#430109] h-4 rounded-full">
            <div
              className="bg-[#B68D61] h-4 rounded-full"
              style={{ width: "50%" }}
            ></div>
          </div>

          <div className="text-center justify-center flex flex-col gap-2 pt-2">
            <p>Your Purchased $RISE = 0</p>
            <p>Your Stakeable $RISE = 0</p>
            <p>1 $RISE = $0.349000</p>
          </div>

          {/* Payment Methods */}
          <div className="flex justify-around py-4 text-[#ae8a65]">
            <button className="bg-[#272413] p-2 px-4 rounded  border border-[#B68D61]">
              ETH
            </button>
            <button className="bg-[#430109] p-2 px-4 rounded">SOL</button>
            <button className="bg-[#430109] p-2 px-4 rounded ">USDT</button>
            <button className="bg-[#430109] p-2 px-4 rounded ">CARD</button>
          </div>

          {/* ETH Input Field */}
          <div className="mt-6">
            <p className="font-cinzel">PAY WITH ETH</p>
            <div className="flex items-center justify-between mt-2 bg-[#430109] text-white">
              <span className="inline-block">0</span>
              <span className="p-2 inline-block">MAX</span>
            </div>
          </div>
          <div className="space-y-2 py-2">
            <label className="block">$SRISE YOU RECEIVE = 0</label>
            <input
              type="number"
              className="w-full p-2  bg-[#430109] text-white rounded border border-[#B68D61]"
              placeholder="0"
            />
          </div>

          {/* Buy Button */}

          <button
            className="text-[#ae8a65] pt-2 py-2 px-4 rounded-md shadow-lg border border-[#B68D61]"
            style={{
              background:
                " radial-gradient(58.87% 100% at 49.13% 100%, #58482F 0%, #211811 100%)",
            }}
          >
            BUY
          </button>
          <p className="underline underline-offset-4  text-center text-xs pt-2">
            <a
              href=""
              className="underline text-sm font-medium underline-offset-1"
            >
              DON'T HAVE A WALLET?
            </a>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroForm;
