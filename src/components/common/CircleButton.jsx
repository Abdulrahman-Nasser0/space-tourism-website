import React from 'react'

const CircleButton = ({ isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-3 h-3 rounded-full
        transition-all duration-300
        ${isActive ? 'bg-white' : 'bg-white/10 hover:bg-white/50'}
      `}
      aria-label={isActive ? 'Current' : 'Navigate'}
    />
  );
};

export default CircleButton