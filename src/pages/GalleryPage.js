import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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

  return (
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

          {/* Gallery Grid */}
          <div className="flex items-center justify-center min-h-[60vh]">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-6xl md:text-8xl font-serif font-bold text-primary mb-6">
                Coming Soon
              </h2>
              <p className="text-xl md:text-2xl text-primary-light max-w-2xl mx-auto">
                We're working on some amazing photos for you. Stay tuned for updates!
              </p>
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
  );
};

export default GalleryPage;