import React from 'react';
import Image from 'next/image';
import GoogleStore from '@/assets/images/googleStore.png';
import AppleStore from '@/assets/images/appleStore.png';
import GameCharacters from '@/assets/images/gameplay-characters.jpeg';
const GameFeaturesSection = () => {
  return (
    <div className='  bg-[#130E08] text-gold-300 py-16 px-4 md:px-8 lg:px-16 mx-auto items-start justify-start'>
      <div
        style={{
          height: '80vh',
        }}
        className=' container items-start justify-start mx-auto'
      >
        <h2
          className='font-cinzel  font-medium leading-[75.57px] text-4xl md:text-5xl lg:text-6xl text-center justify-center  mb-12 drop-shadow-lg'
          style={{
            background: 'linear-gradient(to bottom, #e2c58d, #8e6b3d)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          BUILD, CONQUER, RISE AND EARN
        </h2>

        <div className='flex flex-col lg:flex-row justify-between items-start gap-8 pt-10'>
          {/* Mobile Image */}
          <div className='w-full lg:w-1/2  '>
            <Image
              src='https://i.ibb.co.com/FH03qv7/mobile.png'
              alt='Game Screenshot'
              width={560}
              height={844}
              layout='responsive'
              className='rounded-3xl'
            />

            {/* App Store Buttons */}
            <div className='flex justify-center mt-12 gap-2 px-10 cursor-pointer'>
              <div className='cursor-pointer'>
                {' '}
                <Image
                  src={AppleStore}
                  alt='AppleStore'
                  width={160}
                  height={100}
                  layout='responsive'
                  className='rounded-3xl'
                />
              </div>

              <div className='cursor-pointer'>
                <Image
                  src={GoogleStore}
                  alt='GoogleStore'
                  width={200}
                  height={100}
                  layout='responsive'
                  className='rounded-3xl'
                />
              </div>
            </div>

            <div>hello</div>
          </div>

          {/* Features */}
          <div className='w-full lg:w-2/5 space-y-4 items-center justify-center mx-auto'>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-between gap-3 items-center justify-center'>
                <FeatureButton text='BUILD AND CUSTOMIZE YOUR CITY' />
                <FeatureButton text='GATHER RESOURCES' />
              </div>

              <div className='flex flex-col sm:flex-row gap-3  items-center justify-center'>
                <FeatureButton text='GROW ECONOMY' />
                <FeatureButton text='RESEARCH TECHNOLOGY' />
              </div>
              <div className='flex items-center justify-center'>
                <FeatureButton text='EXPLORE THE KINGDOM OF MEMES LORE' />
              </div>

              <div className='flex flex-col sm:flex-row gap-4  items-center justify-center'>
                <FeatureButton text='FACTION STORYLINES' />
                <FeatureButton text='QUESTS AND MISSIONS' />
              </div>
              <div className='flex items-center justify-center'>
                <FeatureButton text='RAIDS AND DUNGEONS' />
              </div>
            </div>
            <div className='image-container'>
              {' '}
              <img
                src='https://i.ibb.co.com/KsZZyWy/gameplay-characters.jpg'
                alt='Image'
                className='blended-image'
              />
              <div className='overlay'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureButton = ({ text, className = '' }: any) => (
  <button
    className={`w-max font-cinzel text-[18px] leading-[24.26px] bg-[#8a693e33] shadow-2xl

 bg-opacity-50 text-gold-300 w-full border border-[#54504b] text-gray-400 py-3 px-6 rounded-lg hover:bg-opacity-70 transition duration-300 ${className}`}
    style={{
      border: '.5px solid #543f22',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      boxShadow: '0 0 10px rgba(142, 107, 61, 0.5)', // Even shadow on all 4 sides

      transition: 'box-shadow 0.3s ease',
    }}
  >
    {text}
  </button>
);

const StoreButton = ({ store, icon }: any) => (
  <button className='bg-black text-white px-6 py-3 rounded-lg border border-gold-300 hover:bg-gray-900 transition duration-300 flex items-center gap-2'>
    <span>{icon}</span>
    <div className='text-left'>
      <p className='text-xs'>COMING SOON</p>
      <p className='font-bold'>{store}</p>
    </div>
  </button>
);

export default GameFeaturesSection;
