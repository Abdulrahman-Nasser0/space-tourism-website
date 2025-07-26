// NavigationContext.js
import React, { createContext, useContext,useState } from 'react';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {

  const [currentSection, setCurrentSection] = useState('home');
  
  const handleSectionChange = (section) => {
    console.log('Navigating to:', section);
    setCurrentSection(section);
  };

  return (
    <NavigationContext.Provider value={{ 
      currentSection, 
      handleSectionChange 
    }}>
      {children}
    </NavigationContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
};