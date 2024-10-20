import React from "react";
import DynamicButton from "./DynamicButton";
import Image from "next/image";
import gameplayCharacter from "@/assets/images/gameplay-character.png";
const ShowingButton = () => {
  return (
    <div className="">
           
    <div className="flex  justify-center gap-4">
    <DynamicButton>
          <span
            className="uppercase border  rounded-[4px] text-[18px]  font-regular font-cinzel px-4 py-2"
            style={{ borderColor: "rgba(48, 40, 34, 0.4)" }}
          >
            Build and customize your city{" "}
          </span>
        </DynamicButton>
        <DynamicButton>
          <span
            className="uppercase border  rounded-[4px] text-[18px]  font-regular font-cinzel px-4 py-2"
            style={{ borderColor: "rgba(48, 40, 34, 0.4)" }}
          >
            Gather resources{" "}
          </span>
        </DynamicButton>
    
    </div>
    <div className="flex  justify-center gap-4 mt-5">
    <DynamicButton>
          <span
            className="uppercase border  rounded-[4px] text-[18px]  font-regular font-cinzel px-4 py-2"
            style={{ borderColor: "rgba(48, 40, 34, 0.4)" }}
          >
           Grow economy
          </span>
        </DynamicButton>
        <DynamicButton>
          <span
            className="uppercase border  rounded-[4px] text-[18px]  font-regular font-cinzel px-4 py-2"
            style={{ borderColor: "rgba(48, 40, 34, 0.4)" }}
          >
    Research technology
          </span>
        </DynamicButton>
    
    </div>
    <div className="flex  justify-center  mt-5">
    <DynamicButton>
          <span
            className="uppercase border  rounded-[4px] text-[18px]  font-regular font-cinzel px-4 py-2"
            style={{ borderColor: "rgba(48, 40, 34, 0.4)" }}
          >
    Explore the Kingdom of Memes lore
          </span>
        </DynamicButton>
     
    
    </div>
    
    <div className="flex  justify-center gap-4  mt-5">
    <DynamicButton>
          <span
            className="uppercase border  rounded-[4px] text-[18px]  font-regular font-cinzel px-4 py-2"
            style={{ borderColor: "rgba(48, 40, 34, 0.4)" }}
          >
Faction storylines
          </span>
        </DynamicButton>
        <DynamicButton>
          <span
            className="uppercase border  rounded-[4px] text-[18px]  font-regular font-cinzel px-4 py-2"
            style={{ borderColor: "rgba(48, 40, 34, 0.4)" }}
          >
Quests and Missions
          </span>
        </DynamicButton>
    
    </div>
    <div className="flex  justify-center  mt-5">
    <DynamicButton>
          <span
            className="uppercase border  rounded-[4px] text-[18px]  font-regular font-cinzel px-4 py-2"
            style={{ borderColor: "rgba(48, 40, 34, 0.4)" }}
          >
Raids and Dungeons
          </span>
        </DynamicButton>
     
    
    </div>

  {/* Features end*/}
        <div className="">
          <Image
            src={gameplayCharacter}
            alt="Image"
            className="blended-image h-[486px] w-[842px] mt-[-60px] ml-[-70px]"
          />
        </div>
      </div>
  );
};

export default ShowingButton;