import React from 'react'
const Button = ({text = "MENU", onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`
        font-barlow-condensed  
        uppercase cursor-pointer text-left w-full md:w-fit py-4
        transition-all duration-500 ease-in-out
        
        border-r-4 border-transparent
        hover:border-white/50
        
        md:border-r-0 md:border-b-4
        tracking-[0.125rem]
      `}>
      {text}
    </button>
  )
}


export default Button

// sub-nav-text uppercase cursor-pointer text-left w-full py-4
//         border-r-4 border-b-4
//         border-transparent
//         transition-all duration-500 ease-in-out

//         hover:border-white/50 hover:border-r-4  
        
//         md:hover:border-b-4 md:hover:border-r-0 md:w-fit
         