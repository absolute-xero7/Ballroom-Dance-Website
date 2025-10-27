import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import OptimizedImage from './ui/OptimizedImage';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-secondary to-secondary-dark pt-28 lg:pt-32">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute h-full w-full bg-[radial-gradient(#3B4A6B_1.5px,transparent_1.5px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Content */}
          <motion.div
            className="text-center md:text-left md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
                University of Toronto
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-extrabold text-primary mb-6 leading-tight tracking-tight">
              UofT Ballroom<br />
              <span className="text-accent">Dance Club</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-primary-light mb-10 max-w-xl leading-relaxed">
              Join our vibrant community of dancers and discover the elegance,
              joy, and passion of ballroom dancing. From beginners to advanced dancers,
              everyone is welcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdhjnALhvqlGHPQt_mxasVbZgfC_bHluIjF4yEahuKYuTFDIg/viewform?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full sm:w-auto px-10 py-5 text-lg font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200 rounded-xl"
              >
                Join Now
              </a>
              <Link
                to="/events"
                className="btn btn-outline w-full sm:w-auto px-10 py-5 text-lg font-semibold rounded-xl"
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
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-2xl"></div>
              <OptimizedImage
                src="/assets/images/dancers.jpg"
                alt="Ballroom dancers in elegant pose"
                className="relative max-w-full h-auto rounded-2xl shadow-2xl ring-1 ring-primary/10"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;