import React from 'react'

const Menu = ({children}) => {
  return (
    <>
      <img 
        src="menu.svg" 
        alt="Menu" 
        className="block md:hidden cursor-pointer"
      />
      
      <nav className="
      hidden 
      md:flex md:justify-end md:items-center md:gap-8 basis-2/3
      backdrop-blur-md
    bg-white/10
      
      ">
        {children}
      </nav>
    </>
  )
}

export default Menu