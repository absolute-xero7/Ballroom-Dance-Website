import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const GalleryPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Gallery categories
  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'performances', name: 'Performances' },
    { id: 'social', name: 'Social Dances' },
    { id: 'workshops', name: 'Workshops' },
    { id: 'competitions', name: 'Competitions' }
  ];

  const [filter, setFilter] = useState('all');

  return (
    <>
      <Helmet>
        <title>UofT Ballroom Dance Club | Gallery</title>
        <meta name="description" content="View photos and memories from UofT Ballroom Dance Club events and classes at UofT." />
        <meta property="og:title" content="UofT Ballroom Dance Club | Gallery" />
        <meta property="og:description" content="View photos and memories from UofT Ballroom Dance Club events and classes at UofT." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ballroomdanceuoft.com/gallery" />
      </Helmet>
      <div className="pt-20 bg-secondary min-h-screen">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <motion.h1
                className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Photo Gallery
              </motion.h1>
              <motion.div
                className="w-24 h-1 bg-accent mx-auto mb-6"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <motion.p
                className="max-w-2xl mx-auto text-lg text-primary-light mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Browse photos from our performances, social dances, workshops, and competitions.
                Get a glimpse of what makes our ballroom dance community special!
              </motion.p>
            </div>

            {/* Gallery Filters */}
            <motion.div
              className="mb-10 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === category.id
                      ? 'bg-primary text-white'
                      : 'bg-secondary-dark text-primary hover:bg-primary/10'
                      }`}
                    onClick={() => setFilter(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* PhotoCircle Gallery Section */}
            <div className="flex items-center justify-center min-h-[60vh]">
              <motion.div
                className="text-center max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="mb-8">
                  <svg className="w-24 h-24 mx-auto text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                  View & Share Photos
                </h2>
                <p className="text-xl md:text-2xl text-primary-light mb-8">
                  Browse photos from our events, classes, and performances - or upload your own!
                </p>
                <a
                  href="https://join.photocircleapp.com/2QB34Y9X0N"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 mb-8"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Open Photo Gallery
                </a>
                <p className="text-primary-light text-sm mb-8">
                  Powered by PhotoCircle - view, download, and share your favorite moments
                </p>
                <div className="border-t border-gray-200 pt-8">
                  <p className="text-lg text-primary-light mb-6">
                    Follow us on Instagram for more updates and highlights
                  </p>
                  <a
                    href="https://www.instagram.com/ballroomdance_uoft/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline inline-flex items-center gap-3 px-6 py-3 text-base font-medium"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    Follow on Instagram
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GalleryPage;