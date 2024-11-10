import React from 'react';

interface ButtonProps {
  textName: string;
  onClick?: () => void; // Optional onClick handler
  className?: string; // Optional custom class for extra styling
}

const Button: React.FC<ButtonProps> = ({ textName, onClick, className = '' }) => {
  return (
    <button 
      onClick={onClick} 
      className={`bg-[#5e503f] p-[.66rem_3rem_.66rem_3rem] rounded-[.5rem] text-[1rem] hover:bg-[#7d674c] ${className}`}
    >
      {textName}
    </button>
  );
}

export default Button;
