import React from 'react';
import { motion } from 'framer-motion';

const HiringBanner = () => {
  // Check if the current date is before September 3, 2025
  const currentDate = new Date();
  const endDate = new Date('2025-09-03');
  
  // Don't show the banner if the hiring period has ended
  if (currentDate > endDate) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-gradient-to-r from-primary to-accent text-white py-1.5 px-2 text-center z-[60]"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-1 lg:gap-4">
          <span className="font-semibold text-xs lg:text-base">
            🎭 We're Hiring! Join our amazing team!
          </span>
          <span className="text-xs lg:text-sm opacity-90 hidden sm:inline">
            Applications open until Sep 3rd
          </span>
          <a
            href="https://forms.gle/toBjgh24YtqKtAXaA"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary px-3 py-0.5 lg:px-4 lg:py-1 rounded-full text-xs lg:text-sm font-medium hover:bg-gray-100 transition-colors duration-200 shadow-sm"
          >
            Apply Now
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default HiringBanner;