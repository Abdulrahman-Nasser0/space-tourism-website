import React from 'react'
import PureButton from './PureButton'

const TabButton = ({text, isActive, onClick}) => {
    
    
  return (
    <PureButton 
        text={text}
        onClick={onClick}
        variant = "tab"
        isActive={isActive}
    >
        
    </PureButton>
  )
}

export default TabButton