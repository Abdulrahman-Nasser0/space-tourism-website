import React from 'react'

const ExploreBtn = () => {
  return (
    <button 
    className='
    w-[9rem] h-[9rem] 
    md:w-[17rem] md:h-[17rem] md:text-[2rem]
  bg-white rounded-full cursor-pointer
    flex items-center justify-center
    transition-all duration-500 ease-in-out
  text-black font-bellefair uppercase text-lg
    hover:text-black/50
    hover:shadow-[0_0_0_50px_rgba(255,255,255,0.15)]
     
     '>
        explore
    </button>
  )
}

export default ExploreBtn