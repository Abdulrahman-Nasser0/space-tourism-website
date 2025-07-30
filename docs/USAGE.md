# Usage Guide

## Table of Contents
- [Quick Start](#quick-start)
- [Common Scenarios](#common-scenarios)
- [Development Patterns](#development-patterns)
- [Component Integration](#component-integration)
- [State Management](#state-management)
- [Styling and Theming](#styling-and-theming)
- [Performance Optimization](#performance-optimization)
- [Troubleshooting](#troubleshooting)

## Quick Start

### Setting Up the Development Environment

1. **Clone and Install Dependencies**
```bash
# Clone the repository
git clone <repository-url>
cd space-tourism-website

# Install dependencies
npm install

# Start development server
npm run dev
```

2. **Project Structure Overview**
```
src/
├── components/
│   ├── layout/          # Page components
│   ├── common/          # Reusable UI components
│   └── NavigationContext.jsx
├── destinationData.jsx  # Destinations data
├── crewData.jsx        # Crew member data
├── technologyData.jsx  # Technology data
├── LazyImage.jsx       # Lazy loading utility
├── App.jsx             # Main app component
└── main.jsx           # Entry point
```

3. **Basic Usage**
```jsx
import { NavigationProvider } from './components/NavigationContext';
import Website from './components/Website';

function App() {
  return (
    <NavigationProvider>
      <Website />
    </NavigationProvider>
  );
}
```

## Common Scenarios

### 1. Adding a New Destination

**Step 1: Add destination data**
```jsx
// src/destinationData.jsx
export const destinations = {
  // ... existing destinations
  neptune: {
    name: "NEPTUNE",
    image: "/planets/Neptune.webp",
    description: "The windiest planet in our solar system...",
    distance: "4.5 BIL. km",
    travelTime: "12 years"
  }
};
```

**Step 2: Add corresponding image**
```
public/planets/Neptune.webp
```

**Step 3: The destination automatically appears in the UI**
- No code changes needed in components
- Tab navigation updates automatically
- Image lazy loading works out of the box

### 2. Adding a New Crew Member

**Step 1: Update crew data**
```jsx
// src/crewData.jsx
export const crewMembers = {
  // ... existing crew
  navigator: {
    id: "navigator",
    role: "Navigator",
    name: "Jane Smith",
    bio: "Expert in celestial navigation...",
    image: "/crew/jane-smith.webp"
  }
};

// Also add to array format
export const crew = [
  // ... existing crew
  {
    id: "navigator",
    role: "Navigator", 
    name: "Jane Smith",
    bio: "Expert in celestial navigation...",
    image: "/crew/jane-smith.webp"
  }
];
```

**Step 2: Add portrait image**
```
public/crew/jane-smith.webp
```

### 3. Creating Custom Navigation

**Using the Navigation Context**
```jsx
import { useNavigation } from './components/NavigationContext';

function CustomNavigator() {
  const { currentSection, handleSectionChange } = useNavigation();
  
  const sections = [
    { key: 'home', label: 'Home', icon: '🏠' },
    { key: 'destination', label: 'Destinations', icon: '🌍' },
    { key: 'crew', label: 'Crew', icon: '👨‍🚀' },
    { key: 'technology', label: 'Technology', icon: '🚀' }
  ];
  
  return (
    <nav className="custom-nav">
      {sections.map(section => (
        <button
          key={section.key}
          onClick={() => handleSectionChange(section.key)}
          className={`nav-item ${currentSection === section.key ? 'active' : ''}`}
        >
          <span className="icon">{section.icon}</span>
          <span className="label">{section.label}</span>
        </button>
      ))}
    </nav>
  );
}
```

### 4. Creating a Custom Data Display Component

**Destination Comparison Component**
```jsx
import { destinations } from '../destinationData.jsx';

function DestinationComparison() {
  const destinationList = Object.values(destinations);
  
  return (
    <div className="comparison-grid">
      <div className="comparison-header">
        <h2>Destination Comparison</h2>
      </div>
      
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Destination</th>
            <th>Distance</th>
            <th>Travel Time</th>
          </tr>
        </thead>
        <tbody>
          {destinationList.map(dest => (
            <tr key={dest.name}>
              <td>
                <img src={dest.image} alt={dest.name} className="w-8 h-8" />
                {dest.name}
              </td>
              <td>{dest.distance}</td>
              <td>{dest.travelTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

### 5. Building a Search Feature

**Universal Search Component**
```jsx
import { useState, useMemo } from 'react';
import { destinations } from '../destinationData.jsx';
import { crew } from '../crewData.jsx';
import { technologies } from '../technologyData.jsx';

function UniversalSearch() {
  const [query, setQuery] = useState('');
  
  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    
    const lowercaseQuery = query.toLowerCase();
    const results = [];
    
    // Search destinations
    Object.values(destinations).forEach(dest => {
      if (dest.name.toLowerCase().includes(lowercaseQuery) ||
          dest.description.toLowerCase().includes(lowercaseQuery)) {
        results.push({
          type: 'destination',
          title: dest.name,
          description: dest.description.substring(0, 100) + '...',
          data: dest
        });
      }
    });
    
    // Search crew
    crew.forEach(member => {
      if (member.name.toLowerCase().includes(lowercaseQuery) ||
          member.role.toLowerCase().includes(lowercaseQuery) ||
          member.bio.toLowerCase().includes(lowercaseQuery)) {
        results.push({
          type: 'crew',
          title: `${member.role}: ${member.name}`,
          description: member.bio.substring(0, 100) + '...',
          data: member
        });
      }
    });
    
    // Search technology
    Object.values(technologies).forEach(tech => {
      if (tech.name.toLowerCase().includes(lowercaseQuery) ||
          tech.description.toLowerCase().includes(lowercaseQuery)) {
        results.push({
          type: 'technology',
          title: tech.name,
          description: tech.description.substring(0, 100) + '...',
          data: tech
        });
      }
    });
    
    return results;
  }, [query]);
  
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search destinations, crew, or technology..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      
      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((result, index) => (
            <div key={index} className="search-result">
              <span className="result-type">{result.type}</span>
              <h3 className="result-title">{result.title}</h3>
              <p className="result-description">{result.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

## Development Patterns

### 1. Custom Hook for Data Management

```jsx
// hooks/useSpaceData.js
import { useState, useEffect } from 'react';
import { destinations } from '../destinationData.jsx';
import { crew } from '../crewData.jsx';
import { technologies } from '../technologyData.jsx';

export function useSpaceData() {
  const [data, setData] = useState({
    destinations: [],
    crew: [],
    technologies: []
  });
  
  useEffect(() => {
    // Simulate data loading/processing
    setData({
      destinations: Object.values(destinations),
      crew: crew,
      technologies: Object.values(technologies)
    });
  }, []);
  
  const searchAll = (query) => {
    // Implementation for searching across all data types
    // ... search logic
  };
  
  const getRandomDestination = () => {
    const destKeys = Object.keys(destinations);
    const randomKey = destKeys[Math.floor(Math.random() * destKeys.length)];
    return destinations[randomKey];
  };
  
  return {
    data,
    searchAll,
    getRandomDestination
  };
}
```

### 2. Error Boundary for Robust Components

```jsx
// components/ErrorBoundary.jsx
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Component error:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <p>Please refresh the page or try again later.</p>
          <button onClick={() => this.setState({ hasError: false, error: null })}>
            Try Again
          </button>
        </div>
      );
    }
    
    return this.props.children;
  }
}

// Usage
function App() {
  return (
    <ErrorBoundary>
      <NavigationProvider>
        <Website />
      </NavigationProvider>
    </ErrorBoundary>
  );
}
```

### 3. Custom Button Variants

```jsx
// Extending PureButton with new variants
import PureButton from './common/PureButton';

function CustomButton({ variant = 'custom', ...props }) {
  const customVariants = {
    custom: `
      bg-gradient-to-r from-blue-500 to-purple-600
      text-white px-6 py-3 rounded-lg
      hover:from-blue-600 hover:to-purple-700
      transition-all duration-300
    `,
    danger: `
      bg-red-500 text-white px-4 py-2 rounded
      hover:bg-red-600 border-2 border-red-500
    `
  };
  
  return (
    <PureButton
      {...props}
      className={`${customVariants[variant] || ''} ${props.className || ''}`}
    />
  );
}
```

## Component Integration

### 1. Creating a Dashboard Layout

```jsx
import { useNavigation } from './NavigationContext';
import { destinations } from '../destinationData.jsx';
import { crew } from '../crewData.jsx';

function Dashboard() {
  const { handleSectionChange } = useNavigation();
  
  return (
    <div className="dashboard">
      <div className="dashboard-grid">
        {/* Quick Stats */}
        <div className="stats-card">
          <h3>Available Destinations</h3>
          <p className="stat-number">{Object.keys(destinations).length}</p>
        </div>
        
        <div className="stats-card">
          <h3>Crew Members</h3>
          <p className="stat-number">{crew.length}</p>
        </div>
        
        {/* Quick Actions */}
        <div className="actions-card">
          <h3>Quick Actions</h3>
          <button onClick={() => handleSectionChange('destination')}>
            Plan Your Trip
          </button>
          <button onClick={() => handleSectionChange('crew')}>
            Meet the Crew
          </button>
        </div>
        
        {/* Featured Destination */}
        <div className="featured-card">
          <h3>Featured Destination</h3>
          <div className="destination-preview">
            <img src={destinations.mars.image} alt="Mars" />
            <h4>{destinations.mars.name}</h4>
            <p>{destinations.mars.description.substring(0, 100)}...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### 2. Modal Integration

```jsx
import { useState } from 'react';
import { crew } from '../crewData.jsx';

function CrewModal({ isOpen, onClose, crewMember }) {
  if (!isOpen || !crewMember) return null;
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-body">
          <img src={crewMember.image} alt={crewMember.name} />
          <div className="crew-details">
            <h2>{crewMember.name}</h2>
            <h3>{crewMember.role}</h3>
            <p>{crewMember.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CrewGrid() {
  const [selectedCrew, setSelectedCrew] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  
  const openModal = (member) => {
    setSelectedCrew(member);
    setModalOpen(true);
  };
  
  return (
    <>
      <div className="crew-grid">
        {crew.map(member => (
          <div 
            key={member.id} 
            className="crew-card"
            onClick={() => openModal(member)}
          >
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
      
      <CrewModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        crewMember={selectedCrew}
      />
    </>
  );
}
```

## State Management

### 1. Advanced Navigation State

```jsx
// Enhanced NavigationContext with history
import React, { createContext, useContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState('home');
  const [navigationHistory, setNavigationHistory] = useState(['home']);
  const [previousSection, setPreviousSection] = useState(null);
  
  const handleSectionChange = (section) => {
    setPreviousSection(currentSection);
    setCurrentSection(section);
    setNavigationHistory(prev => [...prev, section]);
  };
  
  const goBack = () => {
    if (previousSection) {
      setCurrentSection(previousSection);
      setPreviousSection(null);
    }
  };
  
  const canGoBack = () => previousSection !== null;
  
  return (
    <NavigationContext.Provider value={{
      currentSection,
      handleSectionChange,
      navigationHistory,
      previousSection,
      goBack,
      canGoBack
    }}>
      {children}
    </NavigationContext.Provider>
  );
};
```

### 2. Local Storage Integration

```jsx
// Hook for persistent state
import { useState, useEffect } from 'react';

export function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return defaultValue;
    }
  });
  
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, value]);
  
  return [value, setValue];
}

// Usage in components
function UserPreferences() {
  const [favorites, setFavorites] = useLocalStorage('spaceTourismFavorites', []);
  const [preferences, setPreferences] = useLocalStorage('userPreferences', {
    theme: 'dark',
    language: 'en'
  });
  
  const addToFavorites = (item) => {
    setFavorites(prev => [...prev, item]);
  };
  
  return { favorites, addToFavorites, preferences, setPreferences };
}
```

## Styling and Theming

### 1. Custom Theme Configuration

```jsx
// tailwind.config.js additions
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
        'bellefair': ['Bellefair', 'serif']
      },
      colors: {
        space: {
          dark: '#0B0D17',
          light: '#D0D6F9',
          white: '#FFFFFF'
        }
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'slideIn': 'slideIn 0.3s ease-out'
      }
    }
  }
}
```

### 2. Dynamic Styling Based on Section

```jsx
function DynamicBackground() {
  const { currentSection } = useNavigation();
  
  const backgroundStyles = {
    home: 'bg-[url("/Home.webp")] lg:bg-[url("/Home-lg.webp")]',
    destination: 'bg-[url("/Destination.webp")]',
    crew: 'bg-[url("/Crew.webp")]',
    technology: 'bg-[url("/Technology.webp")]'
  };
  
  return (
    <div className={`
      min-h-screen transition-all duration-500
      ${backgroundStyles[currentSection]}
      bg-cover bg-center bg-no-repeat
    `}>
      {/* Content */}
    </div>
  );
}
```

## Performance Optimization

### 1. Image Preloading Strategy

```jsx
// Preload critical images
import { useEffect } from 'react';

export function useImagePreloader(imagePaths) {
  useEffect(() => {
    const preloadImages = imagePaths.map(path => {
      const img = new Image();
      img.src = path;
      return img;
    });
    
    return () => {
      // Cleanup if needed
      preloadImages.forEach(img => {
        img.src = '';
      });
    };
  }, [imagePaths]);
}

// Usage
function App() {
  const criticalImages = [
    '/Home.webp',
    '/planets/Moon.webp',
    '/crew/douglas-hurley.webp'
  ];
  
  useImagePreloader(criticalImages);
  
  return <Website />;
}
```

### 2. Memoization for Heavy Computations

```jsx
import { useMemo } from 'react';
import { destinations } from '../destinationData.jsx';

function DestinationAnalytics() {
  const analytics = useMemo(() => {
    const destArray = Object.values(destinations);
    
    return {
      averageDistance: destArray.reduce((sum, dest) => {
        const distance = parseFloat(dest.distance.replace(/[^\d.]/g, ''));
        return sum + distance;
      }, 0) / destArray.length,
      
      shortestTrip: destArray.reduce((shortest, dest) => {
        if (!shortest) return dest;
        // Compare travel times...
        return dest.travelTime < shortest.travelTime ? dest : shortest;
      }, null),
      
      destinationsByDifficulty: destArray.sort((a, b) => {
        // Sort by travel time complexity
        const timeA = a.travelTime.includes('years') ? 10 : 1;
        const timeB = b.travelTime.includes('years') ? 10 : 1;
        return timeA - timeB;
      })
    };
  }, []); // Empty dependency array since destinations is static
  
  return (
    <div className="analytics">
      <h2>Destination Analytics</h2>
      <p>Average Distance: {analytics.averageDistance.toFixed(0)} km</p>
      <p>Shortest Trip: {analytics.shortestTrip?.name}</p>
      {/* More analytics */}
    </div>
  );
}
```

## Troubleshooting

### Common Issues and Solutions

#### 1. Navigation Context Error
**Problem**: "useNavigation must be used within NavigationProvider"

**Solution**:
```jsx
// Ensure NavigationProvider wraps your component tree
function App() {
  return (
    <NavigationProvider> {/* This wrapper is required */}
      <YourComponents />
    </NavigationProvider>
  );
}
```

#### 2. Image Loading Issues
**Problem**: Images not loading or showing broken links

**Solutions**:
```jsx
// 1. Verify image paths are correct
const imagePath = '/planets/Moon.webp'; // Should start with /

// 2. Add error handling to LazyImage
function LazyImageWithFallback({ src, alt, fallback = '/placeholder.jpg', ...props }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [hasError, setHasError] = useState(false);
  
  const handleError = () => {
    setHasError(true);
    setImageSrc(fallback);
  };
  
  return (
    <img
      src={imageSrc || fallback}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
}
```

#### 3. Responsive Design Issues
**Problem**: Components not responsive on mobile

**Solution**:
```jsx
// Use Tailwind's responsive classes consistently
className="
  w-full md:w-1/2 lg:w-1/3
  text-base md:text-lg lg:text-xl
  p-4 md:p-6 lg:p-8
"
```

#### 4. State Update Issues
**Problem**: State not updating as expected

**Solution**:
```jsx
// Use functional updates for state that depends on previous state
setSelected(prevSelected => {
  // Ensure the update is based on current state
  return newValue;
});

// Use useCallback for event handlers to prevent unnecessary re-renders
const handleClick = useCallback((value) => {
  setSelected(value);
}, []);
```

### Debugging Tips

1. **Use React Developer Tools**
   - Install React DevTools browser extension
   - Inspect component props and state
   - Profile component performance

2. **Console Logging**
```jsx
// Add debug logs to trace data flow
useEffect(() => {
  console.log('Current section changed:', currentSection);
}, [currentSection]);
```

3. **Network Tab**
   - Check if images are loading correctly
   - Verify no 404 errors for assets

4. **Responsive Testing**
   - Use browser dev tools device simulation
   - Test on actual mobile devices
   - Verify touch interactions work properly

### Performance Monitoring

```jsx
// Simple performance monitoring
function PerformanceMonitor({ children }) {
  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        console.log('Performance entry:', entry);
      });
    });
    
    observer.observe({ entryTypes: ['measure', 'navigation'] });
    
    return () => observer.disconnect();
  }, []);
  
  return children;
}
```

This usage guide provides comprehensive examples and patterns for working with the Space Tourism Website codebase. It covers everything from basic setup to advanced customization and troubleshooting.