// components/Buttons.js
import { useState } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // Import Telegram and modern X icon from React Icons

const Button = ({ icon, text, defaultBg, hoverBg }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`relative w-full max-w-sm h-14 flex items-center justify-center text-white font-bold rounded-md bg-no-repeat bg-cover transition-all duration-300`}
      style={{
        backgroundImage: `url(${isHovered ? hoverBg : defaultBg})`,
        backgroundSize: 'cover', // Ensure background image covers the button
        backgroundPosition: 'center', // Center the background image
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div className='absolute left-4'>{icon}</div>
      {/* Button Text */}
      {text}
    </button>
  );
};

const SocialButtons = () => {
  return (
    <div className='flex flex-col space-y-4'>
      {/* Telegram Button */}
      <Button
        icon={<FaTelegramPlane size={24} />} // React Icons Telegram icon
        text='TELEGRAM'
        defaultBg='https://i.ibb.co.com/C1Yqnq8/telegram-default.png'
        hoverBg='https://i.ibb.co.com/0ykD6N1/telegram-hover.png'
      />

      {/* Twitter Button */}
      <Button
        icon={<FaXTwitter size={24} />} // React Icons modern X icon
        text='Join on X'
        defaultBg='https://i.ibb.co.com/C1Yqnq8/telegram-default.png'
        hoverBg='https://i.ibb.co.com/0ykD6N1/telegram-hover.png'
      />

      {/* Audit & KYC Button */}
      <Button
        icon={<FaXTwitter size={24} />} // React Icons modern X icon
        text='Audit & KYC'
        defaultBg='https://i.ibb.co.com/C1Yqnq8/telegram-default.png'
        hoverBg='https://i.ibb.co.com/0ykD6N1/telegram-hover.png'
      />
    </div>
  );
};

export default SocialButtons;
