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

  // Gallery images with metadata
  // This is where you'll add your images
  const galleryImages = [
    {
      id: 1,
      src: '/assets/images/gallery/performance-1.jpg',
      alt: 'Annual showcase performance',
      category: 'performances',
      featured: true,
      description: 'Spring Ball 2024 - Waltz performance by our competition team'
    },
    {
      id: 2,
      src: '/assets/images/gallery/social-1.jpg',
      alt: 'Friday social dance night',
      category: 'social',
      featured: false,
      description: 'Weekly social dance night - March 2024'
    },
    {
      id: 3,
      src: '/assets/images/gallery/workshop-1.jpg',
      alt: 'Tango workshop',
      category: 'workshops',
      featured: false,
      description: 'Intensive Tango workshop with guest instructors'
    },
    {
      id: 4,
      src: '/assets/images/gallery/competition-1.jpg',
      alt: 'Regional ballroom competition',
      category: 'competitions',
      featured: true,
      description: 'Our team at the Regional Championships - 2nd place in Latin formation'
    },
    {
      id: 5,
      src: '/assets/images/gallery/social-2.jpg',
      alt: 'Valentine\'s Day dance',
      category: 'social',
      featured: false,
      description: 'Valentine\'s Day special dance event'
    },
    {
      id: 6,
      src: '/assets/images/gallery/performance-2.jpg',
      alt: 'Showcase finale',
      category: 'performances',
      featured: false,
      description: 'Final performance at our End of Year Showcase'
    },
    // Add more images following the same format
  ];

  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  // Filter images based on selected category
  const filteredImages = filter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  // Open image modal
  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  // Close image modal
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedImage) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedImage]);

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

            {/* Gallery Grid - Coming Soon Section */}
            <div className="flex items-center justify-center min-h-[60vh]">
              <motion.div
                className="text-center max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="mb-8">
                  <svg className="w-24 h-24 mx-auto text-accent opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
                  Gallery Coming Soon
                </h2>
                <p className="text-xl md:text-2xl text-primary-light mb-8">
                  We're preparing amazing photos from our events, performances, and social dances!
                </p>
                <div className="border-t border-gray-200 pt-8">
                  <p className="text-lg text-primary-light mb-6">
                    In the meantime, follow us on Instagram to see our latest photos and updates
                  </p>
                  <a
                    href="https://www.instagram.com/ballroomdance_uoft/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary inline-flex items-center gap-3 px-8 py-4 text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    Follow Us on Instagram
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
              <div
                className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
                onClick={closeModal}
              >
                <motion.div
                  className="relative max-w-4xl w-full"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors z-10"
                    onClick={closeModal}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  />
                  <div className="bg-white p-4 rounded-b-lg">
                    <p className="text-primary-light">{selectedImage.description}</p>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default GalleryPage;