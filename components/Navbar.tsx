'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import BuyBG from '@/assets/images/buyBg.png';
import Logo from '@/assets/images/logo.png';
import BuyButton from '@/assets/images/BuyButton.png';
import { FlagIcon, FlagIconCode } from 'react-flag-kit';
import Image from 'next/image';

type Language = {
  code: FlagIconCode;
  name: string;
  langCode: string;
};

const languages: Language[] = [
  { code: 'US', name: 'English', langCode: 'ENG' },
  { code: 'ES', name: 'Español', langCode: 'SPA' },
  { code: 'FR', name: 'Français', langCode: 'FRA' },
  { code: 'DE', name: 'Deutsch', langCode: 'GER' },
  { code: 'IT', name: 'Italiano', langCode: 'ITA' },
  { code: 'PT', name: 'Português', langCode: 'POR' },
  { code: 'RU', name: 'Русский', langCode: 'RUS' },
  { code: 'CN', name: '中文', langCode: 'CHI' },
  { code: 'JP', name: '日本語', langCode: 'JPN' },
  { code: 'KR', name: '한국어', langCode: 'KOR' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Language>(languages[0]);
  return (
    <nav className='md:h-24 bg-[#1A1408] text-[#c0a060] py-0 px-4 flex items-center justify-center relative z-10'>
      <div className='container relative  flex items-center justify-center gap-16 w-full'>
        <div className='flex items-center justify-center space-x-6 z-10 gap-5 pr-5'>
          <a
            href='#'
            className='font-cinzel text-[16px] font-medium leading-[21.57px] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] hover:text-white transition-colors'
          >
            GAME
          </a>
          <a
            href='#'
            className='font-cinzel text-[16px] font-medium leading-[21.57px] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] hover:text-white transition-colors'
          >
            TOKEN INFO
          </a>
          <a
            href='#'
            className='font-cinzel text-[16px] font-medium leading-[21.57px] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] hover:text-white transition-colors'
          >
            WHITEPAPER
          </a>
        </div>

        {/*
   <div>
          <div>
            <Image src={Logo} alt='logo' width={100} />
          </div>
        </div>
 */}
        <div className='w-30 pl-16 mx-20 '></div>
        <div
          style={{ bottom: '-18px' }}
          className='absolute left-1/2 transform -translate-x-1/2 -bottom-7 '
        >
          <div className='relative '>
            <img
              src='https://i.ibb.co.com/m9MZvhM/union.png'
              alt='Logo Background'
              className='w-100 h-38 pt-3 -z-100'
            />
            <img
              src='https://i.ibb.co.com/mhKQT5K/logo.png'
              alt='Rise of Memes'
              className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24'
            />
          </div>
        </div>

        <div className='flex items-center space-x-6 justify-end gap-5  z-20 -mr-60'>
          <a
            href='#'
            className='font-cinzel text-[16px] font-medium leading-[21.57px] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] hover:text-white transition-colors'
          >
            AUDIT & KYC
          </a>
          <a
            href='#'
            className='font-cinzel text-[16px] font-medium leading-[21.57px] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] hover:text-white transition-colors'
          >
            FAQ
          </a>
          {/*----------- flag dropdown-------------*/}

          <div className='relative'>
            <div
              className='flex items-center space-x-2 hover:text-white transition-colors cursor-pointer font-cinzel text-[16px] font-medium leading-[21.57px] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF1DE] to-[#8C6742]'
              onClick={() => setIsOpen(!isOpen)}
            >
              <FlagIcon code={selectedLang.code} size={24} />
              <span>{selectedLang.langCode}</span>
              <ChevronDown
                size={16}
                className={`transform transition-transform ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </div>
            {isOpen && (
              <div className='absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50'>
                <div
                  className='py-1'
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='options-menu'
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className='flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left'
                      role='menuitem'
                      onClick={() => {
                        setSelectedLang(lang);
                        setIsOpen(false);
                      }}
                    >
                      <FlagIcon code={lang.code} size={24} className='mr-3' />
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Buy button*/}

          <div className='items-center justify-center cursor-pointer mt-6'>
            <Image src={BuyButton} alt='My SVG Image' className='w-48 h-24 ' />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
