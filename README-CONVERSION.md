# HTML to React Conversion System

This document explains how the HTML-to-React conversion system works in the no-code platform.

## Overview

When a user selects `exportFramework: "react"`, the system automatically converts HTML pages into a modern React application using Vite as the build tool.

## Conversion Process

### 1. HTML Processing
- **Script Extraction**: All `<script>` tags are extracted and converted to separate JavaScript modules
- **JSX Conversion**: HTML attributes are converted to React-friendly JSX:
  - `class` → `className`
  - Self-closing tags are properly formatted (`<img>` → `<img />`)
  - Style attributes are converted to React style objects
  - HTML entities are properly handled

### 2. Script Management
Scripts are intelligently processed and separated:

- **HumbleScroll Library**: Converted to ES6 module (`./utils/humbleScroll.js`)
- **HumbleScroll Initialization**: Converted to React hook (`./utils/useHumbleScroll.js`)
- **Generic Scripts**: Converted to utility modules in `/utils/` directory
- **Deduplication**: Scripts appearing on multiple pages are only created once

### 3. Component Generation
Each page becomes a React component:
- **File Structure**: `./src/components/PageName.jsx` and `./src/components/PageName.css`
- **React Hooks**: Components use `useEffect` for initialization
- **Clean JSX**: No inline scripts, proper React patterns

### 4. Routing Setup
- **React Router**: Automatic routing setup for all pages
- **Home Page**: Maps to `/` route
- **Other Pages**: Map to `/{pagename}` routes
- **App.jsx**: Generated with proper imports and route configuration

## File Structure

```
react-export/
├── package.json          # Vite React dependencies
├── vite.config.js        # Vite configuration
├── index.html           # Main HTML entry point
└── src/
    ├── main.jsx         # React app entry point
    ├── App.jsx          # Generated router with all pages
    ├── App.css          # App-level styles
    ├── index.css        # Global styles
    ├── components/      # Page components
    │   ├── Home.jsx
    │   ├── Home.css
    │   ├── About.jsx
    │   └── About.css
    └── utils/           # Extracted scripts
        ├── humbleScroll.js
        ├── useHumbleScroll.js
        └── scriptManager.js
```

## Features

### ✅ Clean Conversion
- No inline scripts in JSX
- Proper React patterns and hooks
- JSX-compliant attributes and elements

### ✅ Script Management
- Scripts extracted to separate files
- React hooks for script functionality
- Deduplication across pages
- Proper ES6 module exports

### ✅ Modern React Stack
- **Vite**: Fast development and optimized builds
- **React Router v6**: Modern routing
- **React 19**: Latest React features
- **ES6 Modules**: Modern JavaScript patterns

### ✅ Production Ready
- `npm run build` for production builds
- `npm run dev` for development server
- `npm run preview` for production preview
- Optimized bundle sizes

## Usage

1. **Development**: `npm run dev`
2. **Build**: `npm run build`
3. **Preview**: `npm run preview`

## Script Conversion Examples

### Before (HTML):
```html
<script id="humble-scroll-lib">
  class HumbleScroll {
    constructor(options) {
      // implementation
    }
  }
</script>
```

### After (React Hook):
```javascript
// utils/useHumbleScroll.js
import { useEffect } from 'react';
import HumbleScroll from './humbleScroll';

export const useHumbleScroll = (options = {}) => {
  useEffect(() => {
    const scroll = new HumbleScroll(options, window, document);
    return () => {
      // cleanup
    };
  }, []);
};
```

### Usage in App:
```javascript
// App.jsx
import useHumbleScroll from './utils/useHumbleScroll';

function App() {
  useHumbleScroll(); // Initialized once for entire app
  
  return (
    // Router and routes
  );
}
```

## Benefits

1. **No Corrupt Pages**: Clean JSX without inline scripts
2. **Reusable Scripts**: Scripts loaded once, used across all pages
3. **Modern Development**: Hot reloading, fast builds, modern tooling
4. **Maintainable Code**: Proper component structure and separation of concerns
5. **Production Ready**: Optimized builds and deployment-ready output


