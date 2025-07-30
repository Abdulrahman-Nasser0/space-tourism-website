# Component Documentation

## Table of Contents
- [Layout Components](#layout-components)
- [Common Components](#common-components)
- [Button Components](#button-components)
- [Utility Components](#utility-components)
- [Component Architecture](#component-architecture)

## Layout Components

### Website

**Location:** `src/components/Website.jsx`

The main application wrapper component that handles routing and background styling.

**Props:** None

**Features:**
- Dynamic background images based on current section
- Lazy loading of route components with Suspense
- Responsive background handling
- Smooth transitions between sections

**Usage:**
```jsx
import Website from './components/Website';
import { NavigationProvider } from './components/NavigationContext';

function App() {
  return (
    <NavigationProvider>
      <Website />
    </NavigationProvider>
  );
}
```

**Dependencies:**
- `useNavigation` hook
- `Navbar` component
- Lazy-loaded page components

---

### Navbar

**Location:** `src/components/layout/Navbar.jsx`

Responsive navigation bar with mobile menu support.

**Props:** None

**State:**
- `menuOpen` (boolean): Controls mobile menu visibility

**Features:**
- Responsive design (mobile hamburger menu, desktop horizontal)
- Logo integration
- Navigation button integration
- Mobile menu overlay

**Usage:**
```jsx
import Navbar from './layout/Navbar';

function Layout() {
  return (
    <div>
      <Navbar />
      {/* Other content */}
    </div>
  );
}
```

**Child Components:**
- `Logo`
- `Menu`
- `NavButton` (multiple instances)

---

### Homepage

**Location:** `src/components/layout/Homepage.jsx`

Landing page component with hero content and exploration call-to-action.

**Props:** None

**Features:**
- Hero text with space tourism messaging
- Responsive typography and layout
- Integration with explore button
- Smooth fade-in animation

**Usage:**
```jsx
import Homepage from './layout/Homepage';

// Used automatically by Website component
// when currentSection === 'home'
```

**Child Components:**
- `ExploreBtn`

**Styling:**
- Uses Tailwind classes for responsive design
- Custom font families: `font-barlow-condensed`, `font-bellefair`
- Fade-in animation: `animate-[fadeIn_0.5s_ease-in-out]`

---

### Destination

**Location:** `src/components/layout/Destination.jsx`

Interactive destination selection and information display component.

**Props:** None

**State:**
- `selectedDestination` (string): Currently selected planet/destination

**Features:**
- Tab-based destination selection
- Animated destination images
- Responsive layout with image and content sections
- Integration with destination data

**Usage:**
```jsx
import Destination from './layout/Destination';

// Used automatically by Website component
// when currentSection === 'destination'
```

**Methods:**
- `handleTabClick(destination)`: Changes selected destination

**Data Source:**
- Imports from `../../destinationData.jsx`

**Child Components:**
- `TabButton` (for each destination)

---

### Crew

**Location:** `src/components/layout/Crew.jsx`

Crew member profiles with navigation and detailed information.

**Props:** None

**State:**
- `selectedCrew` (string): Currently selected crew member

**Features:**
- Crew member selection with circular navigation
- Animated transitions between crew members
- Responsive image and content layout
- Integration with crew data

**Usage:**
```jsx
import Crew from './layout/Crew';

// Used automatically by Website component
// when currentSection === 'crew'
```

**Data Source:**
- Imports from `../../crewData.jsx`

---

### Technology

**Location:** `src/components/layout/Technology.jsx`

Technology showcase with detailed specifications and imagery.

**Props:** None

**State:**
- `selectedTech` (string): Currently selected technology

**Features:**
- Technology selection with numbered buttons
- Side-by-side image and content layout
- Responsive design with mobile adaptations
- Integration with technology data

**Usage:**
```jsx
import Technology from './layout/Technology';

// Used automatically by Website component
// when currentSection === 'technology'
```

**Data Source:**
- Imports from `../../technologyData.jsx`

## Common Components

### Menu

**Location:** `src/components/common/Menu.jsx`

Responsive navigation menu with mobile slide-out functionality.

**Props:**
```typescript
interface MenuProps {
  children: ReactNode;     // Navigation items to render
  open: boolean;          // Whether mobile menu is open
  setOpen: (open: boolean) => void;  // Function to control menu state
}
```

**Features:**
- Mobile hamburger/close icon toggle
- Slide-out menu animation on mobile
- Backdrop overlay for mobile menu
- Responsive layout (mobile: vertical, desktop: horizontal)
- Glass-morphism styling with backdrop blur

**Usage:**
```jsx
import Menu from './common/Menu';
import NavButton from './common/NavButton';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <Menu open={menuOpen} setOpen={setMenuOpen}>
      <NavButton text="00 Home" handleCloseMenu={() => setMenuOpen(false)} />
      <NavButton text="01 Destination" handleCloseMenu={() => setMenuOpen(false)} />
      {/* More nav buttons */}
    </Menu>
  );
}
```

**Styling:**
- Fixed positioning on mobile
- Backdrop blur effect: `backdrop-blur-2xl`
- Smooth transitions: `transition-all duration-300 ease-in-out`

---

### Logo

**Location:** `src/components/common/Logo.jsx`

Application logo component with responsive sizing.

**Props:** None

**Features:**
- SVG logo rendering
- Responsive sizing (mobile: 40px, desktop: 48px)
- Consistent positioning and spacing

**Usage:**
```jsx
import Logo from './common/Logo';

function Header() {
  return (
    <header>
      <Logo />
      {/* Other header content */}
    </header>
  );
}
```

**Asset:**
- Uses `/Logo.svg` from public directory

## Button Components

### PureButton

**Location:** `src/components/common/PureButton.jsx`

Base button component with multiple style variants.

**Props:**
```typescript
interface PureButtonProps {
  text?: string;          // Button text (default: "BUTTON")
  onClick?: () => void;   // Click handler
  isActive?: boolean;     // Active state styling (default: false)
  variant?: 'navigation' | 'tab';  // Style variant (default: "navigation")
  className?: string;     // Additional CSS classes
}
```

**Variants:**
- **navigation**: For main navigation buttons with border indicators
- **tab**: For tab-style buttons with bottom borders

**Features:**
- Consistent base styling across variants
- Active state management
- Hover effects
- Responsive design
- Uppercase text transformation

**Usage:**
```jsx
import PureButton from './common/PureButton';

function Example() {
  return (
    <div>
      <PureButton 
        text="Navigation Item"
        variant="navigation"
        isActive={true}
        onClick={() => console.log('clicked')}
      />
      <PureButton 
        text="Tab Item"
        variant="tab"
        isActive={false}
        onClick={() => console.log('tab clicked')}
      />
    </div>
  );
}
```

---

### NavButton

**Location:** `src/components/common/NavButton.jsx`

Navigation button with automatic section detection and navigation.

**Props:**
```typescript
interface NavButtonProps {
  text?: string;                    // Button text with optional number prefix
  handleCloseMenu: () => void;      // Callback to close mobile menu
}
```

**Features:**
- Automatic section extraction from text (removes number prefix)
- Integration with navigation context
- Active state based on current section
- Mobile menu closing

**Usage:**
```jsx
import NavButton from './common/NavButton';

function Navigation() {
  const closeMenu = () => setMenuOpen(false);
  
  return (
    <nav>
      <NavButton text="00 Home" handleCloseMenu={closeMenu} />
      <NavButton text="01 Destination" handleCloseMenu={closeMenu} />
      <NavButton text="02 Crew" handleCloseMenu={closeMenu} />
      <NavButton text="03 Technology" handleCloseMenu={closeMenu} />
    </nav>
  );
}
```

**Text Processing:**
- Removes number prefix (e.g., "01 Destination" → "destination")
- Converts to lowercase for section matching

---

### TabButton

**Location:** `src/components/common/TabButton.jsx`

Tab-style button wrapper for the PureButton component.

**Props:**
```typescript
interface TabButtonProps {
  text: string;           // Tab label
  isActive: boolean;      // Whether tab is currently active
  onClick: () => void;    // Click handler
}
```

**Features:**
- Pre-configured for tab variant styling
- Simplified interface for tab use cases

**Usage:**
```jsx
import TabButton from './common/TabButton';

function TabNavigation() {
  const [activeTab, setActiveTab] = useState('moon');
  
  return (
    <div>
      <TabButton 
        text="MOON"
        isActive={activeTab === 'moon'}
        onClick={() => setActiveTab('moon')}
      />
      <TabButton 
        text="MARS"
        isActive={activeTab === 'mars'}
        onClick={() => setActiveTab('mars')}
      />
    </div>
  );
}
```

---

### ExploreBtn

**Location:** `src/components/common/ExploreBtn.jsx`

Large circular call-to-action button for the homepage.

**Props:**
```typescript
interface ExploreBtnProps {
  onClick?: () => void;   // Optional additional click handler
}
```

**Features:**
- Large, responsive circular design
- Hover effects with expanding shadow
- Automatic navigation to destination section
- Disabled state when already on destination
- Accessibility attributes

**Usage:**
```jsx
import ExploreBtn from './common/ExploreBtn';

function Hero() {
  const handleExploreClick = () => {
    console.log('User wants to explore!');
  };
  
  return (
    <section>
      <h1>Ready for adventure?</h1>
      <ExploreBtn onClick={handleExploreClick} />
    </section>
  );
}
```

**Styling:**
- Responsive sizing: 9rem (mobile) → 17rem (tablet) → 23rem (desktop)
- Hover effect: `hover:shadow-[0_0_0_50px_rgba(255,255,255,0.15)]`
- Smooth transitions: `transition-all duration-500 ease-in-out`

---

### CircleButton

**Location:** `src/components/common/CircleButton.jsx`

Small circular button for navigation dots/indicators.

**Props:**
```typescript
interface CircleButtonProps {
  onClick: () => void;    // Click handler
  isActive: boolean;      // Active state
}
```

**Features:**
- Small circular design
- Active/inactive state styling
- Hover effects

**Usage:**
```jsx
import CircleButton from './common/CircleButton';

function Pagination() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  return (
    <div>
      {items.map((_, index) => (
        <CircleButton
          key={index}
          isActive={currentIndex === index}
          onClick={() => setCurrentIndex(index)}
        />
      ))}
    </div>
  );
}
```

---

### TechButton

**Location:** `src/components/common/TechButton.jsx`

Numbered circular button for technology navigation.

**Props:**
```typescript
interface TechButtonProps {
  number: string | number;  // Display number/label
  isActive: boolean;        // Active state
  onClick: () => void;      // Click handler
}
```

**Features:**
- Numbered circular design
- Active state with different styling
- Hover effects

**Usage:**
```jsx
import TechButton from './common/TechButton';

function TechNavigation() {
  const [activeTech, setActiveTech] = useState(0);
  
  return (
    <div>
      {technologies.map((tech, index) => (
        <TechButton
          key={tech.id}
          number={index + 1}
          isActive={activeTech === index}
          onClick={() => setActiveTech(index)}
        />
      ))}
    </div>
  );
}
```

## Utility Components

### LazyImage

**Location:** `src/LazyImage.jsx`

Performance-optimized image component with lazy loading.

**Props:**
```typescript
interface LazyImageProps {
  src: string;        // Image source URL
  alt: string;        // Alt text for accessibility
  className?: string; // Additional CSS classes
}
```

**Features:**
- Intersection Observer-based lazy loading
- Automatic cleanup of observers
- Placeholder handling during load
- Performance optimized

**Usage:**
```jsx
import LazyImage from './LazyImage';

function Gallery() {
  return (
    <div>
      <LazyImage 
        src="/planets/mars.webp"
        alt="Planet Mars"
        className="w-full h-auto rounded-lg"
      />
    </div>
  );
}
```

**Technical Details:**
- 10% intersection threshold for loading trigger
- Transparent SVG placeholder while loading
- Automatic observer cleanup on unmount

## Component Architecture

### Design Patterns

1. **Composition over Inheritance**
   - PureButton serves as base for specialized buttons
   - Menu component accepts children for flexible content

2. **Separation of Concerns**
   - Layout components handle page structure
   - Common components provide reusable UI elements
   - Data components provide static content

3. **Responsive Design**
   - All components include mobile-first responsive styling
   - Consistent breakpoints: `md:` (768px+), `lg:` (1024px+)

4. **State Management**
   - Local state for component-specific data (selected items)
   - Context for global state (navigation)

### Component Hierarchy

```
App
└── NavigationProvider
    └── Website
        ├── Navbar
        │   ├── Logo
        │   └── Menu
        │       └── NavButton (×4)
        │           └── PureButton
        └── [Page Components]
            ├── Homepage
            │   └── ExploreBtn
            ├── Destination
            │   └── TabButton (×4)
            │       └── PureButton
            ├── Crew
            │   └── CircleButton (×4)
            └── Technology
                └── TechButton (×3)
```

### Styling Approach

- **Tailwind CSS**: Utility-first CSS framework
- **Custom Fonts**: Barlow Condensed, Bellefair
- **Responsive Design**: Mobile-first approach
- **Animations**: CSS transitions and custom keyframes
- **Glass-morphism**: Backdrop blur effects for modern UI

### Performance Optimizations

1. **Lazy Loading**
   - React.lazy() for code splitting
   - LazyImage for image optimization

2. **Minimal Re-renders**
   - Proper dependency arrays in useEffect
   - State isolation in components

3. **Asset Optimization**
   - WebP image format
   - SVG icons for scalability

### Accessibility Features

- **Semantic HTML**: Proper use of nav, button, img elements
- **Alt Text**: All images include descriptive alt text
- **ARIA Labels**: Interactive elements include aria-label
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Focus Management**: Visible focus indicators

### Testing Considerations

- **Test IDs**: Components include data-testid attributes
- **Isolated Components**: Each component can be tested independently
- **Props Interface**: Clear prop definitions enable effective testing
- **State Management**: Predictable state changes for testing

### Future Enhancements

1. **Error Boundaries**: Add error handling for production
2. **Loading States**: Enhance loading feedback
3. **Animations**: More sophisticated page transitions
4. **Accessibility**: Enhanced screen reader support
5. **Performance**: Image preloading and caching