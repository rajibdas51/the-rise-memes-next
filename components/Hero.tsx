'use client';
import React from 'react';
import Image from 'next/image';
import HeroBG from '@/assets/images/hero-bg.jpeg';
import FirstHead from '@/assets/images/first-head.svg';
import SecondHead from '@/assets/images/second-head.svg';
import ThirdHead from '@/assets/images/last-head.svg';
import Seperator from '@/components/seperator';
import SocialButtons from './SocialButtons';
import heroBg from "../assets/images/hero-bg.jpeg";
import HeroForm from './HeroForm';
const HeroSection = () => {
  return (
    <div  className="bg-cover bg-center h-[100%]"   
    style={{
    backgroundImage: `url(${heroBg.src})`,
    backgroundRepeat: "no-repeat",
  }}>
      {/* Background image */}
      {/* <Image
        src='https://i.ibb.co.com/Wkcx2s3/hero-bg.jpg'
        alt='Hero background'
        layout='fill'
        objectFit='cover'
        quality={100}
      /> */}
{/* className=' h-full flex items-center p-0'  */}
      <div className='container mx-auto  flex flex-col lg:flex-row items-center justify-between relative z-0 p-0'>
        {/* Left side content */}
        <div className=' flex flex-row lg:w-2/3 mb-8 lg:mb-0 items-start justify-start'>
          <div
            style={{ height: '80vh' }}
            className=' flex flex-col gap-4 pt-20 items-start justify-start '
          >
            <Image
              src={FirstHead}
              alt='second heading'
              className='hover:text-black'
            />
            <Image src={SecondHead} alt='second heading' />
            <Image src={ThirdHead} alt='second heading' />
          </div>
          {/*
             <h1
            className="font-['AVON_Stamp'] text-4xl md:text-6xl font-bold leading-tight text-justify mb-4 items-start justify-start"
            style={{
              background: 'linear-gradient(180deg, #E4D9BD 0%, #AA8246 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0px 2px 4px #472B03)',
            }}
          >
            BUILD YOUR EMPIRE IN THE WORLD OF CRYPTO LEGENDS!
          </h1>
          */}

          <div
            // style={{ height: '80vh' }}
            className='h-full md:w-1/4 flex md:ml-32 -mr-20 flex-col gap-5 items-end justify-end pb-44'
          >
            <img
              style={{
                width: '350px!important',
                maxWidth: '200%',
              }}
              className=''
              src='https://i.ibb.co.com/2h69g1w/Frame-43.png'
              alt=''
            />
          </div>
        </div>

        {/* Right side form */}
         <HeroForm></HeroForm>
      </div>

      {/* Bottom features */}

      <div className=' bg-[#1A1408] bg-opacity-95  py-6 z-50'>
        <div className='container mx-auto flex justify-between text-md font-cinzel text-[18px] leading-[24px] font-medium  text-transparent bg-clip-text bg-gradient-to-b from-[#FFF1DE] to-[#8C6742]'>
          <div className='flex items-center'>
            <span>BUILD & CONQUER</span>
          </div>
          <Seperator />
          <div className='flex items-center'>
            <span>REAL TIME BATTLES</span>
          </div>
          <Seperator />
          <div className='flex items-center'>
            <span>PLAY TO EARN</span>
          </div>
          <Seperator />
          <div className='flex items-center'>
            <span>TRADE & PLUNDER</span>
          </div>
          <Seperator />
          <div className='flex items-center'>
            <span>HIGH-QUALITY GRAPHICS</span>
          </div>
        </div>
      </div>
    </div>

  );
};

export default HeroSection;
