import React from 'react'

const Logo = () => {
  return (
    <div className='md:max-w-[10rem] flex justify-center items-center'>

      <img src="/Logo.svg" alt="Logo" 
          className='w-10 h-10 object-contain 
            md:w-[3rem] md:h-[3rem] 
          '
          />
    </div>
  )
}

export default Logo