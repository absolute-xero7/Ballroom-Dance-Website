#!/usr/bin/env python3
import os
import shutil
import json

def create_directory(path):
    """Create directory if it doesn't exist"""
    if not os.path.exists(path):
        os.makedirs(path)
        print(f"Created directory: {path}")

def create_file(path, content=""):
    """Create file with content"""
    with open(path, 'w') as f:
        f.write(content)
    print(f"Created file: {path}")

def create_project_structure():
    """Create the entire project structure for the Ballroom Dance Society website"""
    
    # Project root directory
    root_dir = "ballroom-dance-society"
    create_directory(root_dir)
    
    # Public directory and assets
    public_dir = os.path.join(root_dir, "public")
    create_directory(public_dir)
    
    # Create public/assets directories
    assets_dir = os.path.join(public_dir, "assets")
    create_directory(assets_dir)
    
    # Create images directories
    images_dir = os.path.join(assets_dir, "images")
    create_directory(images_dir)
    
    # Create subdirectories for different image categories
    create_directory(os.path.join(images_dir, "dance-types"))
    create_directory(os.path.join(images_dir, "events"))
    create_directory(os.path.join(images_dir, "team"))
    
    # Create fonts directory
    fonts_dir = os.path.join(assets_dir, "fonts")
    create_directory(fonts_dir)
    
    # Create index.html
    create_file(os.path.join(public_dir, "index.html"), """<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Ballroom Dance Society - Join our community of dancers"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>Ballroom Dance Society</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
""")
    
    # Create src directory
    src_dir = os.path.join(root_dir, "src")
    create_directory(src_dir)
    
    # Create components directory and subdirectories
    components_dir = os.path.join(src_dir, "components")
    create_directory(components_dir)
    create_directory(os.path.join(components_dir, "ui"))
    
    # Create pages directory
    pages_dir = os.path.join(src_dir, "pages")
    create_directory(pages_dir)
    
    # Create styles directory
    styles_dir = os.path.join(src_dir, "styles")
    create_directory(styles_dir)
    
    # Create utils directory
    utils_dir = os.path.join(src_dir, "utils")
    create_directory(utils_dir)
    
    # Create package.json
    package_json = {
        "name": "ballroom-dance-society",
        "version": "0.1.0",
        "private": True,
        "dependencies": {
            "@testing-library/jest-dom": "^5.17.0",
            "@testing-library/react": "^13.4.0",
            "@testing-library/user-event": "^13.5.0",
            "framer-motion": "^10.16.4",
            "react": "^18.2.0",
            "react-dom": "^18.2.0",
            "react-icons": "^4.11.0",
            "react-router-dom": "^6.16.0",
            "react-scripts": "5.0.1",
            "web-vitals": "^2.1.4"
        },
        "scripts": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test",
            "eject": "react-scripts eject"
        },
        "eslintConfig": {
            "extends": [
                "react-app",
                "react-app/jest"
            ]
        },
        "browserslist": {
            "production": [
                ">0.2%",
                "not dead",
                "not op_mini all"
            ],
            "development": [
                "last 1 chrome version",
                "last 1 firefox version",
                "last 1 safari version"
            ]
        },
        "devDependencies": {
            "autoprefixer": "^10.4.16",
            "postcss": "^8.4.31",
            "tailwindcss": "^3.3.3"
        }
    }
    
    create_file(os.path.join(root_dir, "package.json"), json.dumps(package_json, indent=2))
    
    # Create tailwind.config.js
    create_file(os.path.join(root_dir, "tailwind.config.js"), """/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B4A6B', // Navy blue from the image
          light: '#4F5F80',
          dark: '#2A3A5B'
        },
        secondary: {
          DEFAULT: '#F5F2E9', // Cream background from the image
          dark: '#E8E4D8'
        },
        accent: {
          DEFAULT: '#A67C52', // Brown accent for buttons and highlights
          dark: '#8A6642'
        },
        dancer: {
          light: '#F5EFE5', // Light beige for dancer's light suit
          dark: '#4A2D29'  // Dark brown for dancer's dress
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/images/hero-bg.jpg')",
      }
    },
  },
  plugins: [],
}
""")
    
    # Create .gitignore
    create_file(os.path.join(root_dir, ".gitignore"), """# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
""")
    
    # Create README.md
    create_file(os.path.join(root_dir, "README.md"), """# Ballroom Dance Society Website

This is the official website for the Ballroom Dance Society.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.
""")
    
    # Create basic component placeholders
    component_list = [
        "Navbar", "Hero", "About", "DanceStyles", "Events", 
        "SignupForm", "Footer"
    ]
    
    for component in component_list:
        create_file(os.path.join(components_dir, f"{component}.js"), 
                   f"""import React from 'react';

const {component} = () => {{
  return (
    <div>
      {component} Component
    </div>
  );
}};

export default {component};
""")
    
    # Create UI component placeholders
    ui_components = ["Button", "Card", "Modal"]
    
    for component in ui_components:
        create_file(os.path.join(components_dir, "ui", f"{component}.js"), 
                   f"""import React from 'react';

const {component} = ({{ children, ...props }}) => {{
  return (
    <div {{...props}}>
      {{children}}
    </div>
  );
}};

export default {component};
""")
    
    # Create page placeholders
    page_list = ["Home", "DanceInfo", "EventsPage", "GalleryPage", "Contact"]
    
    for page in page_list:
        create_file(os.path.join(pages_dir, f"{page}.js"), 
                   f"""import React from 'react';

const {page} = () => {{
  return (
    <div>
      {page} Page
    </div>
  );
}};

export default {page};
""")
    
    # Create index.css
    create_file(os.path.join(styles_dir, "index.css"), """@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

:root {
  --color-primary: #3B4A6B;
  --color-primary-light: #4F5F80;
  --color-primary-dark: #2A3A5B;
  --color-secondary: #F5F2E9;
  --color-secondary-dark: #E8E4D8;
  --color-accent: #A67C52;
  --color-accent-dark: #8A6642;
  --color-dancer-light: #F5EFE5;
  --color-dancer-dark: #4A2D29;
}

body {
  margin: 0;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--color-secondary);
  color: var(--color-primary);
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
}
""")
    
    # Create utility files
    create_file(os.path.join(utils_dir, "animations.js"), """// Animation utilities for Framer Motion

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export const slideRight = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 }
};
""")
    
    create_file(os.path.join(utils_dir, "helpers.js"), """// Helper functions

export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};
""")
    
    # Create main app files
    create_file(os.path.join(src_dir, "index.js"), """import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
""")
    
    create_file(os.path.join(src_dir, "App.js"), """import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DanceInfo from './pages/DanceInfo';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-secondary">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-primary mb-4">
            Ballroom Dance Society
          </h1>
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent">
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dance-styles" element={<DanceInfo />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
""")
    
    create_file(os.path.join(src_dir, "reportWebVitals.js"), """const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
""")

    print("\nProject structure created successfully!")
    print(f"The project is located at: {os.path.abspath(root_dir)}")
    print("\nNext steps:")
    print("1. Navigate to the project directory: cd ballroom-dance-society")
    print("2. Install dependencies: npm install")
    print("3. Start the development server: npm start")
    print("\nDon't forget to add your image assets to the public/assets/images directory!")

if __name__ == "__main__":
    create_project_structure()