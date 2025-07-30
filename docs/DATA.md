# Data Documentation

## Table of Contents
- [Overview](#overview)
- [Destination Data](#destination-data)
- [Crew Data](#crew-data)
- [Technology Data](#technology-data)
- [Data Schema Reference](#data-schema-reference)
- [Usage Patterns](#usage-patterns)

## Overview

The Space Tourism Website uses static data structures to provide information about destinations, crew members, and space technology. All data is exported as JavaScript objects and arrays from dedicated data files.

### File Structure
```
src/
├── destinationData.jsx    # Planet/destination information
├── crewData.jsx          # Crew member profiles
└── technologyData.jsx    # Space technology details
```

### Import Pattern
```jsx
// Individual imports
import { destinations } from './destinationData.jsx';
import { crewMembers, crew } from './crewData.jsx';
import { technologies } from './technologyData.jsx';
```

## Destination Data

**Location:** `src/destinationData.jsx`

### Export: `destinations`

A comprehensive object containing information about space travel destinations.

**Structure:**
```typescript
interface Destination {
  name: string;        // Display name (UPPERCASE)
  image: string;       // WebP image path
  description: string; // Marketing description
  distance: string;    // Distance from Earth
  travelTime: string;  // Estimated travel duration
}

interface Destinations {
  moon: Destination;
  mars: Destination;
  europa: Destination;
  titan: Destination;
}
```

### Available Destinations

#### Moon
```javascript
{
  name: "MOON",
  image: "/planets/Moon.webp",
  description: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
  distance: "384,400 km",
  travelTime: "3 days"
}
```

#### Mars
```javascript
{
  name: "MARS", 
  image: "/planets/Mars.webp",
  description: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
  distance: "225 MIL. km",
  travelTime: "9 months"
}
```

#### Europa
```javascript
{
  name: "EUROPA",
  image: "/planets/Europa.webp", 
  description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
  distance: "628 MIL. km",
  travelTime: "3 years"
}
```

#### Titan
```javascript
{
  name: "TITAN",
  image: "/planets/Titan.webp",
  description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
  distance: "1.6 BIL. km", 
  travelTime: "7 years"
}
```

### Usage Examples

```jsx
import { destinations } from './destinationData.jsx';

// Get specific destination
const moonTrip = destinations.moon;
console.log(moonTrip.name); // "MOON"

// Get all destination names
const destinationNames = Object.values(destinations).map(dest => dest.name);
// ["MOON", "MARS", "EUROPA", "TITAN"]

// Get destination keys for iteration
const destinationKeys = Object.keys(destinations);
// ["moon", "mars", "europa", "titan"]

// Find destination by travel time
const shortTrips = Object.values(destinations).filter(dest => 
  !dest.travelTime.includes('years')
);

// Dynamic destination selection
const getDestination = (key) => destinations[key] || destinations.moon;
```

## Crew Data

**Location:** `src/crewData.jsx`

### Exports: `crewMembers`, `crew`

Crew information is available in two formats: object (for key-based access) and array (for ordered iteration).

**Structure:**
```typescript
interface CrewMember {
  id: string;          // Unique identifier (matches object key)
  role: string;        // Job title/position
  name: string;        // Full name
  bio: string;         // Professional biography
  image: string;       // WebP portrait path
}
```

### Export: `crewMembers` (Object Format)

```typescript
interface CrewMembers {
  commander: CrewMember;
  specialist: CrewMember; 
  pilot: CrewMember;
  engineer: CrewMember;
}
```

### Export: `crew` (Array Format)

```typescript
type Crew = CrewMember[]; // Array of 4 crew members
```

### Crew Member Profiles

#### Commander - Douglas Hurley
```javascript
{
  id: "commander",
  role: "Commander",
  name: "Douglas Hurley", 
  bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  image: "/crew/douglas-hurley.webp"
}
```

#### Mission Specialist - Mark Shuttleworth
```javascript
{
  id: "specialist",
  role: "Mission Specialist",
  name: "Mark Shuttleworth",
  bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  image: "/crew/mark-shuttleworth.webp"
}
```

#### Pilot - Victor Glover
```javascript
{
  id: "pilot", 
  role: "Pilot",
  name: "Victor Glover",
  bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  image: "/crew/victor-glover.webp"
}
```

#### Flight Engineer - Anousheh Ansari
```javascript
{
  id: "engineer",
  role: "Flight Engineer", 
  name: "Anousheh Ansari",
  bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  image: "/crew/anousheh-ansari.webp"
}
```

### Usage Examples

```jsx
import { crewMembers, crew } from './crewData.jsx';

// Object-based access
const commander = crewMembers.commander;
console.log(commander.name); // "Douglas Hurley"

// Array iteration  
crew.forEach((member, index) => {
  console.log(`${index + 1}. ${member.role}: ${member.name}`);
});

// Find crew member by ID
const findCrewById = (id) => crewMembers[id] || crew.find(member => member.id === id);

// Get all roles
const roles = crew.map(member => member.role);
// ["Commander", "Mission Specialist", "Pilot", "Flight Engineer"]

// Filter by experience (contains specific keywords)
const experiencedAstronauts = crew.filter(member => 
  member.bio.toLowerCase().includes('nasa') || 
  member.bio.toLowerCase().includes('space station')
);
```

## Technology Data

**Location:** `src/technologyData.jsx`

### Export: `technologies`

Information about space technology and equipment used for missions.

**Structure:**
```typescript
interface Technology {
  id: string;          // Unique identifier (matches object key)
  name: string;        // Display name
  terminology: string; // Technical term (usually same as name)
  description: string; // Detailed technical description
  image: string;       // WebP image path
}

interface Technologies {
  vehicle: Technology;
  spaceport: Technology;
  capsule: Technology;
}
```

### Technology Details

#### Launch Vehicle
```javascript
{
  id: "vehicle",
  name: "Launch Vehicle", 
  terminology: "Launch Vehicle",
  description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  image: "/technology/launch-vehicle.webp"
}
```

#### Spaceport
```javascript
{
  id: "spaceport",
  name: "Spaceport",
  terminology: "Spaceport", 
  description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
  image: "/technology/spaceport.webp"
}
```

#### Space Capsule
```javascript
{
  id: "capsule",
  name: "Space Capsule",
  terminology: "Space Capsule",
  description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  image: "/technology/space-capsule.webp"
}
```

### Usage Examples

```jsx
import { technologies } from './technologyData.jsx';

// Get specific technology
const rocket = technologies.vehicle;
console.log(rocket.name); // "Launch Vehicle"

// Get all technology IDs
const techIds = Object.keys(technologies);
// ["vehicle", "spaceport", "capsule"]

// Find technology by name (case-insensitive)
const findTechnology = (searchTerm) => {
  return Object.values(technologies).find(tech =>
    tech.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tech.terminology.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

// Get technologies as array with index
const techArray = Object.entries(technologies).map(([key, tech], index) => ({
  ...tech,
  index: index + 1,
  key
}));

// Filter by description keywords
const findByKeyword = (keyword) => {
  return Object.values(technologies).filter(tech =>
    tech.description.toLowerCase().includes(keyword.toLowerCase())
  );
};
```

## Data Schema Reference

### Common Patterns

All data structures follow consistent patterns:

1. **Unique Identifiers**: Every item has an `id` field matching its object key
2. **Display Names**: User-facing names are often UPPERCASE for styling
3. **Image Paths**: All images are WebP format in organized directories
4. **Descriptions**: Rich text content for user engagement

### Image Asset Structure

```
public/
├── crew/
│   ├── douglas-hurley.webp
│   ├── mark-shuttleworth.webp
│   ├── victor-glover.webp
│   └── anousheh-ansari.webp
├── planets/
│   ├── Moon.webp
│   ├── Mars.webp
│   ├── Europa.webp
│   └── Titan.webp
└── technology/
    ├── launch-vehicle.webp
    ├── spaceport.webp
    └── space-capsule.webp
```

### TypeScript Definitions

```typescript
// Consolidated type definitions
export interface Destination {
  name: string;
  image: string;
  description: string;
  distance: string;
  travelTime: string;
}

export interface CrewMember {
  id: string;
  role: string;
  name: string;
  bio: string;
  image: string;
}

export interface Technology {
  id: string;
  name: string;
  terminology: string;
  description: string;
  image: string;
}

export interface Destinations {
  moon: Destination;
  mars: Destination;
  europa: Destination;
  titan: Destination;
}

export interface CrewMembers {
  commander: CrewMember;
  specialist: CrewMember;
  pilot: CrewMember;
  engineer: CrewMember;
}

export interface Technologies {
  vehicle: Technology;
  spaceport: Technology;
  capsule: Technology;
}
```

## Usage Patterns

### State Management Integration

```jsx
import { useState } from 'react';
import { destinations } from './destinationData.jsx';

function DestinationSelector() {
  // Use object keys for state management
  const [selected, setSelected] = useState('moon');
  const currentDestination = destinations[selected];
  
  return (
    <div>
      <h2>{currentDestination.name}</h2>
      <p>{currentDestination.description}</p>
      
      {/* Navigation */}
      {Object.keys(destinations).map(key => (
        <button 
          key={key}
          onClick={() => setSelected(key)}
          className={selected === key ? 'active' : ''}
        >
          {destinations[key].name}
        </button>
      ))}
    </div>
  );
}
```

### Dynamic Content Rendering

```jsx
import { crew } from './crewData.jsx';

function CrewGrid() {
  return (
    <div className="crew-grid">
      {crew.map((member, index) => (
        <div key={member.id} className="crew-card">
          <img src={member.image} alt={member.name} />
          <h3>{member.role}</h3>
          <h4>{member.name}</h4>
          <p>{member.bio}</p>
        </div>
      ))}
    </div>
  );
}
```

### Search and Filter Utilities

```jsx
// Utility functions for data manipulation
export const searchDestinations = (query) => {
  return Object.values(destinations).filter(dest =>
    dest.name.toLowerCase().includes(query.toLowerCase()) ||
    dest.description.toLowerCase().includes(query.toLowerCase())
  );
};

export const getCrewByRole = (role) => {
  return crew.filter(member => 
    member.role.toLowerCase().includes(role.toLowerCase())
  );
};

export const getTechnologyByCapability = (capability) => {
  return Object.values(technologies).filter(tech =>
    tech.description.toLowerCase().includes(capability.toLowerCase())
  );
};
```

### Data Validation Helpers

```jsx
// Validation utilities
export const validateDestinationKey = (key) => {
  return Object.keys(destinations).includes(key);
};

export const validateCrewId = (id) => {
  return crew.some(member => member.id === id);
};

export const validateTechnologyId = (id) => {
  return Object.keys(technologies).includes(id);
};

// Safe getters with fallbacks
export const getDestinationSafe = (key) => {
  return destinations[key] || destinations.moon;
};

export const getCrewMemberSafe = (id) => {
  return crewMembers[id] || crew[0];
};

export const getTechnologySafe = (id) => {
  return technologies[id] || technologies.vehicle;
};
```

### Performance Considerations

1. **Static Data**: All data is static and can be safely cached
2. **Image Preloading**: Consider preloading images for better UX
3. **Memory Usage**: Data objects are small and have minimal memory impact
4. **Bundle Size**: Data files are minimal and well-optimized

### Future Enhancements

1. **CMS Integration**: Replace static data with headless CMS
2. **Localization**: Add multi-language support
3. **Dynamic Updates**: Implement real-time data updates
4. **Validation**: Add runtime data validation
5. **Caching**: Implement intelligent caching strategies

### Error Handling

```jsx
// Safe data access patterns
const safeGet = (obj, key, fallback) => {
  try {
    return obj[key] || fallback;
  } catch (error) {
    console.warn(`Data access error for key: ${key}`, error);
    return fallback;
  }
};

// Usage example
const destination = safeGet(destinations, selectedKey, destinations.moon);
```