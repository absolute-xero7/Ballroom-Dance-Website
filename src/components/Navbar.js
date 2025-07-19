import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background change on scroll
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Only track sections on the home page
      if (isHomePage) {
        // Get all sections that have IDs
        const sections = ['home'];

        // Find which section is currently in view
        for (const sectionId of sections) {
          const section = document.getElementById(sectionId);
          if (section) {
            const rect = section.getBoundingClientRect();
            // Check if the section is in view (allowing for some buffer)
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);

    // Reset active section based on the current route
    if (location.pathname === '/') {
      setActiveSection('home');
    } else if (location.pathname === '/dance-styles') {
      setActiveSection('dance-styles');
    } else if (location.pathname === '/events') {
      setActiveSection('events');
    } else if (location.pathname === '/gallery') {
      setActiveSection('gallery');
    } else if (location.pathname === '/contact') {
      setActiveSection('contact');
    }
  }, [location]);

  // Map section IDs to navbar items
  const sectionToNavItem = {
    'home': '/',
    'gallery': '/gallery',
    'contact': '/contact'
  };

  const navItems = [
    { name: 'Home', path: '/', section: 'home' },
    { name: 'Events', path: '/events', section: 'events' },
    { name: 'Gallery', path: '/gallery', section: 'gallery' },
    { name: 'Contact', path: '/contact', section: 'contact' },
  ];

  // Check if a nav item should be highlighted
  const isActiveNavItem = (itemSection) => {
    // For home page, use section tracking
    if (isHomePage) {
      return activeSection === itemSection;
    }
    // For other pages, use the path matching
    return location.pathname === sectionToNavItem[itemSection];
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-secondary shadow-md py-2'
        : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl md:text-3xl font-serif font-bold text-primary">
              Ballroom Dance Society
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-4 lg:space-x-8"> {/* Change 'md:flex' to 'lg:flex' */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-primary hover:text-accent font-medium transition-colors text-sm lg:text-base ${isActiveNavItem(item.section)
                  ? 'border-b-2 border-accent'
                  : ''
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Join Now Button (Desktop) */}
          <div className="hidden lg:block">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdUUGmuWRoQfJNrhTXoHMEpEw8roE8O379qp8KB-cHoedtGtA/viewform" // TODO: Replace with your actual Google Forms link
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary whitespace-nowrap text-sm lg:text-base"
            >
              Join Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-primary p-2 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-secondary shadow-lg"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 px-4 text-primary hover:bg-primary-light hover:text-secondary rounded-md transition-colors ${isActiveNavItem(item.section)
                  ? 'bg-primary-light/10'
                  : ''
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdUUGmuWRoQfJNrhTXoHMEpEw8roE8O379qp8KB-cHoedtGtA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center btn btn-primary mt-4"
            >
              Join Now
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;