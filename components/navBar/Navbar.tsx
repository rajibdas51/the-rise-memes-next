"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import buyBg from "@/assets/images/buyBg.png";
import { FlagIcon, FlagIconCode } from "react-flag-kit";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import union from "@/assets/images/union.png";

type Language = {
  code: FlagIconCode;
  name: string;
  langCode: string;
};

const languages: Language[] = [
  { code: "US", name: "English", langCode: "ENG" },
  { code: "ES", name: "Español", langCode: "SPA" },
  { code: "FR", name: "Français", langCode: "FRA" },
  { code: "DE", name: "Deutsch", langCode: "GER" },
  { code: "IT", name: "Italiano", langCode: "ITA" },
  { code: "PT", name: "Português", langCode: "POR" },
  { code: "RU", name: "Русский", langCode: "RUS" },
  { code: "CN", name: "中文", langCode: "CHI" },
  { code: "JP", name: "日本語", langCode: "JPN" },
  { code: "KR", name: "한국어", langCode: "KOR" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Language>(languages[0]);
  return (
    <nav className="bg-gradient-to-r from-[#8C6742] via-[#8C6742]/50 to-[#8C6742]/30  z-50 pb-[1px]">
      <div className=" bg-[#1A1408] ">
        <div className="container">
          <div className="flex justify-between items-center  gap-4 h-[80px] w-[100%]">
            {/* ..........main part ..... */}
            <div>
              <div className="flex  z-20 items-center justify-between 2xl:ml-[80px] xl:ml-[40px]">
                <a
                  href="#"
                  className=" pr-[35px]  font-cinzel tracking-[1.3px]  text-[17px] font-regular  leading-[21.57px] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] hover:text-white "
                >
                  GAME
                </a>
                <a
                  href="#"
                  className=" pr-[35px] font-cinzel tracking-[1.3px]  text-[17px]  font-normal leading-[21.57px] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] hover:text-white transition-colors"
                >
                  TOKEN INFO
                </a>
                <a
                  href="#"
                  className=" pr-[35px] font-cinzel tracking-[1.3px]  text-[17px]  font-normal leading-[21.57px] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] hover:text-white transition-colors"
                >
                  WHITEPAPER
                </a>
              </div>
            </div>

            {/* ..........main part ..... */}
            {/* ...................logo part............................*/}
            <div>
              <div className=" relative  ">
                <div className="-z-10">
                  <Image
                    src={union}
                    alt="Rise of union"
                    className="mt-[74px]  w-[240px] "
                  />
                </div>
                <div className="absolute top-[-42px] left-[29px]">
                  <Image
                    src={logo}
                    alt="Rise of Memes"
                    className="z-10 w-[170px] h-[115px]"
                  />
                </div> 
              </div>
            </div>
            {/* ....................logo part .................. */}
            {/* ....................last  part .................. */}
            <div>
              <div className="flex z-20 items-center ">
                <a
                  href="#"
                  className="pr-[35px] font-cinzel tracking-[1.3px]  text-[17px]  font-medium leading-[21.57px] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] hover:text-white transition-colors"
                >
                  AUDIT & KYC
                </a>
                <a
                  href="#"
                  className=" pr-[35px] font-cinzel tracking-[1.3px]  text-[17px]   font-medium leading-[21.57px] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] hover:text-white transition-colors"
                >
                  FAQ
                </a>

                {/*----------- flag dropdown-------------*/}

                <div className="relative">
                  <div
                    className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer font-cinzel tracking-[1.3px]  text-[17px]   font-regular leading-[21.57px] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF1DE] to-[#8C6742]"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <FlagIcon
                      code={selectedLang.code}
                      size={24}
                      className="rounded-[50%] h-[22px] w-[22px]"
                    />
                    <span>{selectedLang.langCode}</span>
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {isOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                            role="menuitem"
                            onClick={() => {
                              setSelectedLang(lang);
                              setIsOpen(false);
                            }}
                          >
                            <FlagIcon
                              code={lang.code}
                              size={24}
                              className="mr-3"
                            />
                            {lang.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                {/* Buy button*/}

                <div className=" flex items-center  justify-start  cursor-pointer  h-[99px] mt-10 relative mr-[30px]">
                  <Image
                    src={buyBg}
                    alt="My SVG Image"
                    className="w-[240px] h-[120px] "
                  />
                  <p className=" uppercase absolute top-[10px] right-[98px]  z-50 bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] text-transparent bg-clip-text text-[24px] ">
                    Buy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
