import React from 'react';

type DynamicButtonProps = {
  children: React.ReactNode; // Allow any valid React node
  className?: string;
  onClick?: () => void; // Optional click handler
};

const DynamicButton: React.FC<DynamicButtonProps> = ({ children, className = '', onClick }) => (
  <button
    className={`bg-[#211811]  py-[10px] px-[6px] rounded-[8px]  ${className}`}
    onClick={onClick}
    style={{
        boxShadow: '0 2px 16px rgba(70, 52, 39, 0.4)', 
      }}
  >
    {children}
  </button>
);

export default DynamicButton;
