# API Documentation

## Table of Contents
- [Context API](#context-api)
- [Custom Hooks](#custom-hooks)
- [Utility Components](#utility-components)
- [Data APIs](#data-apis)

## Context API

### NavigationContext

The NavigationContext provides centralized state management for navigation across the application.

#### Provider: NavigationProvider

**Location:** `src/components/NavigationContext.jsx`

**Props:**
- `children` (ReactNode): Child components that will have access to the navigation context

**Usage:**
```jsx
import { NavigationProvider } from './components/NavigationContext';

function App() {
  return (
    <NavigationProvider>
      <YourAppComponents />
    </NavigationProvider>
  );
}
```

#### Hook: useNavigation

**Location:** `src/components/NavigationContext.jsx`

**Returns:**
```typescript
{
  currentSection: string;        // Current active section ('home' | 'destination' | 'crew' | 'technology')
  handleSectionChange: (section: string) => void;  // Function to change active section
}
```

**Usage:**
```jsx
import { useNavigation } from './NavigationContext';

function MyComponent() {
  const { currentSection, handleSectionChange } = useNavigation();
  
  const navigateToDestination = () => {
    handleSectionChange('destination');
  };
  
  return (
    <div>
      <p>Current section: {currentSection}</p>
      <button onClick={navigateToDestination}>Go to Destinations</button>
    </div>
  );
}
```

**Error Handling:**
- Throws an error if used outside of NavigationProvider context
- Error message: "useNavigation must be used within NavigationProvider"

## Custom Hooks

### useNavigation

See [NavigationContext Hook](#hook-usenavigation) above.

## Utility Components

### LazyImage

**Location:** `src/LazyImage.jsx`

A performance-optimized image component that implements lazy loading using the Intersection Observer API.

**Props:**
```typescript
interface LazyImageProps {
  src: string;        // Image source URL
  alt: string;        // Alt text for accessibility
  className?: string; // Additional CSS classes
}
```

**Features:**
- Lazy loading with intersection observer
- 10% threshold for loading trigger
- Automatic cleanup of observers
- Placeholder SVG while loading

**Usage:**
```jsx
import LazyImage from './LazyImage';

function MyComponent() {
  return (
    <LazyImage 
      src="/path/to/image.jpg"
      alt="Description of image"
      className="w-full h-auto"
    />
  );
}
```

**Technical Details:**
- Uses `IntersectionObserver` with 0.1 threshold
- Provides a transparent SVG placeholder
- Automatically unobserves elements after loading
- Handles cleanup in useEffect

## Data APIs

### Destinations API

**Location:** `src/destinationData.jsx`

**Export:** `destinations`

**Type:**
```typescript
interface Destination {
  name: string;        // Display name (uppercase)
  image: string;       // Path to planet image
  description: string; // Detailed description
  distance: string;    // Distance from Earth
  travelTime: string;  // Estimated travel time
}

interface Destinations {
  moon: Destination;
  mars: Destination;
  europa: Destination;
  titan: Destination;
}
```

**Usage:**
```jsx
import { destinations } from './destinationData';

// Access specific destination
const moonData = destinations.moon;

// Get all destination keys
const destinationKeys = Object.keys(destinations);

// Iterate through all destinations
Object.entries(destinations).forEach(([key, destination]) => {
  console.log(`${key}: ${destination.name}`);
});
```

### Crew API

**Location:** `src/crewData.jsx`

**Exports:** `crewMembers`, `crew`

**Types:**
```typescript
interface CrewMember {
  id: string;          // Unique identifier
  role: string;        // Job title/role
  name: string;        // Full name
  bio: string;         // Biography
  image: string;       // Path to crew member image
}

// Object format
interface CrewMembers {
  commander: CrewMember;
  specialist: CrewMember;
  pilot: CrewMember;
  engineer: CrewMember;
}

// Array format
type Crew = CrewMember[];
```

**Usage:**
```jsx
import { crewMembers, crew } from './crewData';

// Object access
const commander = crewMembers.commander;

// Array iteration
crew.forEach(member => {
  console.log(`${member.role}: ${member.name}`);
});

// Get crew member by ID
const findCrewMember = (id) => {
  return crew.find(member => member.id === id);
};
```

### Technology API

**Location:** `src/technologyData.jsx`

**Export:** `technologies`

**Type:**
```typescript
interface Technology {
  id: string;          // Unique identifier
  name: string;        // Display name
  terminology: string; // Technical terminology
  description: string; // Detailed description
  image: string;       // Path to technology image
}

interface Technologies {
  vehicle: Technology;
  spaceport: Technology;
  capsule: Technology;
}
```

**Usage:**
```jsx
import { technologies } from './technologyData';

// Access specific technology
const launchVehicle = technologies.vehicle;

// Get all technology IDs
const techIds = Object.keys(technologies);

// Find technology by name
const findTechnology = (name) => {
  return Object.values(technologies).find(tech => 
    tech.name.toLowerCase().includes(name.toLowerCase())
  );
};
```

## Navigation Flow

### Section Management

The application uses a centralized navigation system with the following sections:

1. **home** - Landing page with exploration prompt
2. **destination** - Planet/destination selection and information
3. **crew** - Crew member profiles and information
4. **technology** - Space technology details and specifications

### Navigation Methods

**Programmatic Navigation:**
```jsx
const { handleSectionChange } = useNavigation();

// Navigate to specific section
handleSectionChange('destination');
handleSectionChange('crew');
handleSectionChange('technology');
handleSectionChange('home');
```

**Component-based Navigation:**
```jsx
// Using ExploreBtn (automatically navigates to 'destination')
<ExploreBtn onClick={optionalCallback} />

// Using NavButton with automatic section extraction
<NavButton text="01 Destination" handleCloseMenu={closeMenuCallback} />
```

## Error Handling

### Context Errors
- **NavigationContext**: Throws error if `useNavigation` is used outside provider
- **Error boundaries**: Not implemented - consider adding for production

### Image Loading
- **LazyImage**: Gracefully handles loading states with placeholder
- **Missing images**: Will show broken image icon - ensure all image paths are valid

### Data Access
- **Static data**: All data is statically imported - no runtime errors expected
- **Missing data**: Accessing non-existent keys will return `undefined`

## Performance Considerations

### Lazy Loading
- Components use React.lazy() for code splitting
- Images use intersection observer for lazy loading
- Suspense boundaries provide loading states

### Re-renders
- Navigation context optimized to minimize re-renders
- State changes only trigger necessary component updates
- Consider memoization for complex computations

### Bundle Size
- Separate lazy-loaded chunks for each main section
- Images are optimized WebP format
- Consider implementing image preloading for better UX

## Browser Support

### Required APIs
- **IntersectionObserver**: Required for LazyImage component
- **ES6+ features**: Arrow functions, destructuring, template literals
- **React 19**: Uses latest React features and hooks

### Polyfills
- No polyfills currently included
- Consider adding IntersectionObserver polyfill for older browsers