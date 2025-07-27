import React from 'react'

const TechButton = ({ isActive = true, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-[2.5rem] h-[2.5rem] rounded-full text-base md:text-[1.5rem] lg:text-[2rem]
        md:w-[3.5rem] md:h-[3.5rem]
        lg:w-[5rem] lg:h-[5rem]
        transition-all duration-300 cursor-pointer
        ${isActive ? 'bg-white text-black' : 'bg-white/10 hover:bg-white/50 text-white'}
      `}
      aria-label={isActive ? 'Current' : 'Navigate'}
    >
        {children}
    
    </button>
  )
}

export default TechButton