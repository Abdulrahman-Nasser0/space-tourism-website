import React, { useState } from 'react'
import Logo from '../common/Logo'
import Menu from '../common/Menu'
import NavButton from '../common/NavButton'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <nav className='flex justify-between p-6 md:p-0 relative'>
      <Logo/>
      <Menu open={menuOpen} setOpen={setMenuOpen}>
        <NavButton text={'00 Home'} handleCloseMenu={handleCloseMenu}/>
        <NavButton text={'01 Destination'} handleCloseMenu={handleCloseMenu}/>
        <NavButton text={'02 Crew'} handleCloseMenu={handleCloseMenu}/>
        <NavButton text={'03 Technology'} handleCloseMenu={handleCloseMenu}/>
      </Menu>
    </nav>
  )
}

export default Navbar