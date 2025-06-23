import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary pt-24">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-secondary z-0 opacity-60">
        <div className="absolute h-full w-full bg-[radial-gradient(#3B4A6B_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>

      {/* Decorative elements */}

      {/* Removed missing SVG decorative images */}

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="text-center md:text-left md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary mb-4">
              Ballroom Dance Society
            </h1>
            <p className="text-lg md:text-xl text-primary-light mb-8 max-w-xl">
              Join our vibrant community of dancers and discover the elegance,
              joy, and passion of ballroom dancing. From beginners to advanced dancers,
              everyone is welcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/contact"
                className="btn btn-primary"
              >
                Join Today
              </Link>
              <Link
                to="/events"
                className="btn btn-outline"
              >
                Upcoming Events
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
              src="/assets/images/dancers.jpg"
              alt="Ballroom dancers in elegant pose"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;