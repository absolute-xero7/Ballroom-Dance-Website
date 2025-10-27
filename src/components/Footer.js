import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">UofT Ballroom Dance Club</h3>
            <p className="text-secondary-dark opacity-80 mb-4">
              Bringing the joy and elegance of ballroom dancing to the University of Toronto community.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/ballroomdance_uoft/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="mailto:ballroomdance.uoft@studentorg.utoronto.ca" className="text-white hover:text-accent transition-colors" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-dark opacity-80 hover:text-accent hover:opacity-100 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-secondary-dark opacity-80 hover:text-accent hover:opacity-100 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-secondary-dark opacity-80 hover:text-accent hover:opacity-100 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/playlists" className="text-secondary-dark opacity-80 hover:text-accent hover:opacity-100 transition-colors">
                  Playlists
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-dark opacity-80 hover:text-accent hover:opacity-100 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-secondary-dark opacity-80">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:ballroomdance.uoft@studentorg.utoronto.ca" className="hover:text-accent transition-colors break-all">
                  ballroomdance.uoft@<wbr/>studentorg.utoronto.ca
                </a>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>University of Toronto<br/>St. George Campus</span>
              </li>
            </ul>
          </div>

          {/* Membership */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Join Us</h4>
            <p className="text-secondary-dark opacity-80 mb-4">
              Become a member and join our vibrant dance community!
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdhjnALhvqlGHPQt_mxasVbZgfC_bHluIjF4yEahuKYuTFDIg/viewform?pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent hover:bg-accent-dark text-white font-medium px-6 py-2 rounded-md transition-colors"
            >
              Join Now
            </a>
            <p className="text-secondary-dark opacity-70 text-sm mt-4">
              Weekly classes every Sunday.<br/>
              All skill levels welcome!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-secondary-dark opacity-70 text-sm">
            © {new Date().getFullYear()} UofT Ballroom Dance Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;