'use client';
import React from 'react';
import Image from 'next/image';
import HeroBG from '@/assets/images/hero-bg.jpeg';
import FirstHead from '@/assets/images/first-head.svg';
import SecondHead from '@/assets/images/second-head.svg';
import ThirdHead from '@/assets/images/last-head.svg';
import Seperator from '@/components/seperator';
import SocialButtons from './SocialButtons';
const HeroSection = () => {
  return (
    <div className='relative h-full flex items-center p-0'>
      {/* Background image */}
      <Image
        src='https://i.ibb.co.com/Wkcx2s3/hero-bg.jpg'
        alt='Hero background'
        layout='fill'
        objectFit='cover'
        quality={100}
      />

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
            style={{ height: '80vh' }}
            className='h-full md:w-1/4 flex md:ml-32 -mr-20 mt-6 flex-col gap-5 items-end justify-end -mt-40 pb-44'
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
        <div
          className='relative w-1/3 h-auto bg-cover pl-24  py-36 items-end justify-end '
          style={{
            backgroundImage: 'url("https://i.ibb.co.com/DW8XW73/BG.png")',
            backgroundSize: 'cover',
            objectFit: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            marginTop: '-20px',
            overflow: 'visible',
          }}
        >
          {/* Smart Contract Form */}
          <div className='font-cinzel  font-medium leading-[21.57px] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF1DE] to-[#8C6742] relative px-6 bg-transparent  items-center justify-center  '>
            <div className='flex flex-col ml-10 mr-1  py-10 '>
              <h3 className='text-2xl items-center justify-center mx-auto '>
                BUY $RISE PRESALE
              </h3>
              <div className='flex justify-between items-center'>
                <div className='text-center'>
                  <p>Days</p>
                  <p className='text-lg'>
                    <span
                      className=' w-3 inline-block bg-[#430109] text-[#F5E5D1] pl-1 pr-4 rounded-sm items-center justify-center mx-auto mr-1
                    '
                    >
                      2
                    </span>
                    <span
                      className=' w-3 inline-block bg-[#430109] text-[#F5E5D1] pl-1 pr-4 rounded-sm items-center justify-center mx-auto mr-1
                    '
                    >
                      9
                    </span>
                  </p>
                </div>
                <div className='text-center'>
                  <p>Hours</p>
                  <p className='text-lg'>
                    <span
                      className=' w-3 inline-block bg-[#430109] text-[#F5E5D1] pl-1 pr-4 rounded-sm items-center justify-center mx-auto mr-1
                    '
                    >
                      0
                    </span>
                    <span
                      className=' w-3 inline-block bg-[#430109] text-[#F5E5D1] pl-1 pr-4 rounded-sm items-center justify-center mx-auto mr-1
                    '
                    >
                      2
                    </span>
                  </p>
                </div>
                <div className='text-center'>
                  <p>Minutes</p>
                  <p className='text-lg'>
                    <span
                      className=' w-3 inline-block bg-[#430109] text-[#F5E5D1] pl-1 pr-4 rounded-sm items-center justify-center mx-auto mr-1
                    '
                    >
                      3
                    </span>
                    <span
                      className=' w-3 inline-block bg-[#430109] text-[#F5E5D1] pl-1 pr-4 rounded-sm items-center justify-center mx-auto mr-1
                    '
                    >
                      0
                    </span>
                  </p>
                </div>
                <div className='text-center'>
                  <p>Seconds</p>
                  <p className='text-lg'>
                    <span
                      className=' w-3 inline-block bg-[#430109] text-[#F5E5D1] pl-1 pr-4 rounded-sm items-center justify-center mx-auto mr-1
                    '
                    >
                      5
                    </span>
                    <span
                      className=' w-3 inline-block bg-[#430109] text-[#F5E5D1] pl-1 pr-4 rounded-sm items-center justify-center mx-auto mr-1
                    '
                    >
                      8
                    </span>
                  </p>
                </div>
              </div>

              <p className='text-center my-2'>$14,934,093.29</p>

              <div className='bg-[#430109] h-4 rounded-full'>
                <div
                  className='bg-[#B68D61] h-4 rounded-full'
                  style={{ width: '50%' }}
                ></div>
              </div>

              <div className='text-center justify-center flex flex-col gap-2 pt-2'>
                <p>Your Purchased $RISE = 0</p>
                <p>Your Stakeable $RISE = 0</p>
                <p>1 $RISE = $0.349000</p>
              </div>

              {/* Payment Methods */}
              <div className='flex justify-around py-4 text-[#ae8a65]'>
                <button className='bg-[#272413] p-2 px-4 rounded  border border-[#B68D61]'>
                  ETH
                </button>
                <button className='bg-[#430109] p-2 px-4 rounded'>SOL</button>
                <button className='bg-[#430109] p-2 px-4 rounded '>USDT</button>
                <button className='bg-[#430109] p-2 px-4 rounded '>CARD</button>
              </div>

              {/* ETH Input Field */}
              <div className='mt-6'>
                <p className='font-cinzel'>PAY WITH ETH</p>
                <div className='flex items-center justify-between mt-2 bg-[#430109] text-white'>
                  <span className='inline-block'>0</span>
                  <span className='p-2 inline-block'>MAX</span>
                </div>
              </div>
              <div className='space-y-2 py-2'>
                <label className='block'>$SRISE YOU RECEIVE = 0</label>
                <input
                  type='number'
                  className='w-full p-2  bg-[#430109] text-white rounded border border-[#B68D61]'
                  placeholder='0'
                />
              </div>

              {/* Buy Button */}

              <button
                className='text-[#ae8a65] pt-2 py-2 px-4 rounded-md shadow-lg border border-[#B68D61]'
                style={{
                  background:
                    ' radial-gradient(58.87% 100% at 49.13% 100%, #58482F 0%, #211811 100%)',
                }}
              >
                BUY
              </button>
              <p className='underline underline-offset-4  text-center text-xs pt-2'>
                <a
                  href=''
                  className='underline text-sm font-medium underline-offset-1'
                >
                  DON'T HAVE A WALLET?
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom features */}

      <div className='absolute bottom-0 left-0 right-0 bg-[#1A1408] bg-opacity-95  py-6 z-50'>
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
