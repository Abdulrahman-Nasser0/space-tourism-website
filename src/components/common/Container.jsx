import React from 'react'

const Container = ({children}) => {
  return (
    <div className="min-h-screen bg-black 
    bg-home-mobile lg:bg-home-desktop
    bg-cover bg-center bg-no-repeat" 
         
         >

          <div className="
            mx-auto
            
            /* Tablet: 8 columns */
            md:grid-cols-8 
            md:gap-6
            md:max-w-3xl
            md:px-6
            
            /* Desktop: 12 columns */
            lg:grid-cols-12 
            lg:gap-8
            lg:max-w-7xl
            lg:px-8
          ">
            {children}
          </div>
        </div>
  )
}

export default Container