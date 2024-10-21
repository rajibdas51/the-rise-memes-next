import React from "react";
import DynamicButton from "./DynamicButton";
import Image from "next/image";

const ShowingButton = () => {
  return (
    <div className=" z-20 ">
      <div className="2xl:pr-0 pr-4">
        <div className="flex justify-center  gap-4">
          <DynamicButton>
            <span
              className="uppercase border  rounded-[4px] text-[18px]  font-regular font-cinzel px-4 py-2"
              style={{ borderColor: "rgba(48, 40, 34, 0.4)" ,
                background: "linear-gradient(180deg, #E2DDD8  100%, #E2DDD8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: '0  -1px 2px #0D0A08/35', 
              }}
               
            >
              Build and customize your city
            </span>
          </DynamicButton>
          <DynamicButton>
            <span
              className="uppercase border  rounded-[4px] text-[18px]   font-regular font-cinzel px-4 py-2"
              style={{ borderColor: "rgba(48, 40, 34, 0.4)" ,
                background: "linear-gradient(180deg, #E2DDD8  100%, #E2DDD8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: '0  -1px 2px #0D0A08/35', 
              }}
            >
              Gather resources
            </span>
          </DynamicButton>
        </div>

        
        <div className="flex  justify-center gap-4 mt-5">
          <DynamicButton>
            <span
              className="uppercase border  rounded-[4px] text-[18px]  font-regular font-cinzel px-4 py-2"
              style={{ borderColor: "rgba(48, 40, 34, 0.4)" ,
                background: "linear-gradient(180deg, #E2DDD8  100%, #E2DDD8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: '0  -1px 2px #0D0A08/35', 
              }}
            >
              Grow economy
            </span>
          </DynamicButton>
          <DynamicButton>
            <span
              className="uppercase border  rounded-[4px] text-[18px]  font-regular font-cinzel px-4 py-2"
              style={{ borderColor: "rgba(48, 40, 34, 0.4)" ,
                background: "linear-gradient(180deg, #E2DDD8  100%, #E2DDD8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: '0  -1px 2px #0D0A08/35', 
              }}
            >
              Research technology
            </span>
          </DynamicButton>
        </div>
        <div className="flex  justify-center  mt-5">
          <DynamicButton>
            <span
              className="uppercase border  rounded-[4px] text-[18px]  font-regular font-cinzel px-4 py-2"
              style={{ borderColor: "rgba(48, 40, 34, 0.4)" ,
                background: "linear-gradient(180deg, #E2DDD8  100%, #E2DDD8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: '0  -1px 2px #0D0A08/35', 
              }}
            >
              Explore the Kingdom of Memes lore
            </span>
          </DynamicButton>
        </div>

        <div className="flex  justify-center gap-4  mt-5">
          <DynamicButton>
            <span
              className="uppercase border  rounded-[4px] text-[18px]  font-regular font-cinzel px-4 py-2"
              style={{ borderColor: "rgba(48, 40, 34, 0.4)" ,
                background: "linear-gradient(180deg, #E2DDD8  100%, #E2DDD8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: '0  -1px 2px #0D0A08/35', 
              }}
            >
              Faction storylines
            </span>
          </DynamicButton>
          <DynamicButton>
            <span
              className="uppercase border  rounded-[4px] text-[18px]  font-regular font-cinzel px-4 py-2"
              style={{ borderColor: "rgba(48, 40, 34, 0.4)" ,
                background: "linear-gradient(180deg, #E2DDD8  100%, #E2DDD8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: '0  -1px 2px #0D0A08/35', 
              }}
            >
              Quests and Missions
            </span>
          </DynamicButton>
        </div>
        <div className="flex  justify-center  mt-5 ">
          <DynamicButton>
            <span
              className="uppercase border  rounded-[4px] text-[18px]  font-regular font-cinzel px-4 py-2"
              style={{ borderColor: "rgba(48, 40, 34, 0.4)" ,
                background: "linear-gradient(180deg, #E2DDD8  100%, #E2DDD8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: '0 -1px 2px #0D0A08/35', 
              }}
            >
              Raids and Dungeons
            </span>
          </DynamicButton>
        </div>
      </div>

      {/* Features end*/}
   
    </div>
  );
};

export default ShowingButton;
