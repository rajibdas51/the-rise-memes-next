import Image from 'next/image';

const HeroSection = () => {
  return (
    <section
      className=' bg-cover bg-center h-screen flex flex-col justify-between items-center'
      style={{
        backgroundImage: 'url("https://i.ibb.co.com/Wkcx2s3/hero-bg.jpg")',
      }}
    >
      <div className='container flex justify-between w-full p-4 h-full'>
        {/* Left side content */}
        <div className='flex flex-col justify-start items-start text-left   space-y-6 pl-10'>
          <h1
            className='pt-20 font-cinzel text-[64px] font-bold leading-[76.8px] text-transparent bg-clip-text bg-gradient-to-b from-[#E4d9bd] to-[#e9b98a] hover:text-white transition-colors drop-shadow-xl

'
            style={{
              fontFamily: 'AVON Stamp',
              fontWeight: 600,
            }}
          >
            BUILD YOUR EMPIRE <br></br> IN THE WORLD OF<br></br> CRYPTO LEGENDS!
          </h1>
        </div>

        {/* Right side form */}
        <div
          className='w-1/3 h-auto bg-no-repeat bg-center bg-cover p-8 -mt-16 pt-32'
          style={{
            backgroundImage: 'url("https://i.ibb.co.com/DW8XW73/BG.png")',
            backgroundPosition: 'top',
            backgroundSize: 'cover',
          }}
        >
          {/* Smart Contract Form */}
          <div className='bg-transparent border border-[#B68D61] p-6 space-y-4 text-[#FFF1DE] font-cinzel'>
            <h3 className='text-2xl'>BUY $RISE PRESALE</h3>
            <div className='flex justify-between items-center'>
              <div className='text-center'>
                <p>Days</p>
                <p className='text-lg'>29</p>
              </div>
              <div className='text-center'>
                <p>Hours</p>
                <p className='text-lg'>02</p>
              </div>
              <div className='text-center'>
                <p>Minutes</p>
                <p className='text-lg'>30</p>
              </div>
              <div className='text-center'>
                <p>Seconds</p>
                <p className='text-lg'>58</p>
              </div>
            </div>

            <p className='text-center'>$14,934,093.29</p>

            <div className='bg-[#8C6742] h-2 rounded-full'>
              <div
                className='bg-[#B68D61] h-2 rounded-full'
                style={{ width: '50%' }}
              ></div>
            </div>

            <p>Your Purchased $RISE = 0</p>
            <p>Your Stakeable $RISE = 0</p>
            <p>1 $RISE = $0.349000</p>

            {/* Payment Methods */}
            <div className='flex justify-around py-4'>
              <button className='bg-[#8C6742] p-2 px-4 rounded text-white'>
                ETH
              </button>
              <button className='bg-[#8C6742] p-2 px-4 rounded text-white'>
                SOL
              </button>
              <button className='bg-[#8C6742] p-2 px-4 rounded text-white'>
                USDT
              </button>
              <button className='bg-[#8C6742] p-2 px-4 rounded text-white'>
                CARD
              </button>
            </div>

            {/* ETH Input Field */}
            <div className='space-y-2'>
              <label className='block'>Pay with ETH</label>
              <input
                type='number'
                className='w-full p-2 bg-[#8C6742] text-white rounded border border-[#B68D61]'
                placeholder='0'
              />
              <p className='text-right'>MAX</p>
              <p className='text-center'>SRISE YOU RECEIVE = 0</p>
            </div>

            {/* Buy Button */}
            <button className='w-full bg-[#B68D61] text-[#1A1408] p-2 rounded'>
              BUY
            </button>

            <p className='text-center text-xs'>DON'T HAVE A WALLET?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
