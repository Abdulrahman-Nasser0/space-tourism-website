# Space Tourism Website

A modern, responsive React application showcasing space tourism destinations, crew members, and cutting-edge technology. Built with React 19, Tailwind CSS, and Vite for optimal performance and user experience.

## 🌐 Live Demo
**👉 [View Live Website](https://space-website-challenge.netlify.app/)**

![Space Tourism Website](https://img.shields.io/badge/React-19.1.0-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1.11-38bdf8)
![Vite](https://img.shields.io/badge/Vite-7.0.4-646cff)

## ✨ Features

- **🚀 Interactive Navigation** - Seamless single-page application experience
- **🌍 Destination Explorer** - Detailed information about space travel destinations
- **👨‍🚀 Crew Profiles** - Meet the experienced space tourism crew
- **🔧 Technology Showcase** - Learn about cutting-edge space technology
- **📱 Responsive Design** - Optimized for desktop, tablet, and mobile
- **⚡ Performance Optimized** - Lazy loading, code splitting, and image optimization
- **🎨 Modern UI** - Beautiful glass-morphism effects and smooth animations

## 🏗️ Architecture

### Component Structure
```
src/
├── components/
│   ├── layout/              # Page components (Homepage, Destination, Crew, Technology)
│   ├── common/              # Reusable UI components (buttons, navigation)
│   └── NavigationContext.jsx # Global state management
├── data files              # Static content (destinations, crew, technology)
├── LazyImage.jsx          # Performance optimization utility
└── App.jsx               # Application root
```

### Key Technologies
- **React 19** - Latest React features with concurrent rendering
- **Tailwind CSS 4.1** - Utility-first styling with modern features
- **Vite 7** - Fast build tool and development server
- **Context API** - Lightweight state management
- **Intersection Observer** - Lazy loading implementation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd space-tourism-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## 🧩 Core Components

### Navigation System
The application uses a centralized navigation system powered by React Context:

```jsx
import { NavigationProvider, useNavigation } from './components/NavigationContext';

function MyComponent() {
  const { currentSection, handleSectionChange } = useNavigation();
  
  return (
    <button onClick={() => handleSectionChange('destination')}>
      Go to Destinations
    </button>
  );
}
```

### Data Management
Static data is organized in dedicated files with consistent interfaces:

```jsx
import { destinations } from './destinationData.jsx';
import { crew } from './crewData.jsx';
import { technologies } from './technologyData.jsx';

// Access specific items
const mars = destinations.mars;
const commander = crew.find(member => member.role === 'Commander');
```

### Performance Features
- **Lazy Loading**: Components and images load only when needed
- **Code Splitting**: Automatic chunking for optimal bundle size
- **Image Optimization**: WebP format with fallbacks
- **Responsive Images**: Different sizes for different screen resolutions

## 🎨 Styling

### Design System
- **Typography**: Barlow Condensed, Bellefair fonts
- **Color Palette**: Space-themed dark colors with blue accents
- **Responsive Breakpoints**: Mobile-first approach
- **Animations**: Smooth transitions and fade effects



## 📁 Project Structure

```
space-tourism-website/
├── public/                 # Static assets
│   ├── crew/              # Crew member images
│   ├── planets/           # Destination images  
│   ├── technology/        # Technology images
│   └── *.webp            # Background images
├── src/
│   ├── components/
│   │   ├── layout/        # Page components
│   │   │   ├── Homepage.jsx
│   │   │   ├── Destination.jsx
│   │   │   ├── Crew.jsx
│   │   │   ├── Technology.jsx
│   │   │   └── Navbar.jsx
│   │   ├── common/        # Reusable components
│   │   │   ├── PureButton.jsx
│   │   │   ├── NavButton.jsx
│   │   │   ├── TabButton.jsx
│   │   │   ├── ExploreBtn.jsx
│   │   │   ├── Menu.jsx
│   │   │   └── Logo.jsx
│   │   ├── Website.jsx    # Main layout component
│   │   └── NavigationContext.jsx
│   ├── destinationData.jsx # Planet/destination data
│   ├── crewData.jsx       # Crew member profiles
│   ├── technologyData.jsx # Technology information
│   ├── LazyImage.jsx      # Image optimization utility
│   ├── App.jsx           # Application root
│   ├── App.css          # Global styles
│   └── main.jsx         # Entry point
├── docs/                 # Documentation
├── package.json
├── vite.config.js
├── tailwind.config.js
└── eslint.config.js
```

## 🙏 Acknowledgments

- **Design Inspiration**: Frontend Mentor Space Tourism Challenge
- **Images**: NASA and SpaceX public domain images
- **Icons**: Custom SVG implementations
- **Fonts**: Google Fonts (Barlow Condensed, Bellefair)
