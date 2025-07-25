import React from 'react'
import Logo from '../common/Logo'
import Menu from '../common/Menu'
import Button from '../common/Button'

const Navbar = () => {
  return (
    <nav className='flex justify-between p-6'>
            <Logo/>
            <Menu>
              <Button text={'00 Home'}/>
              <Button text={'01 Destination'}/>
              <Button text={'02 Crew'}/>
              <Button text={'03 Technology'}/>
            </Menu>
    </nav>
  )
}

export default Navbar