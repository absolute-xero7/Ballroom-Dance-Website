import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import { motion, useScroll, useSpring } from 'framer-motion';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Check if URL has a hash and scroll to that section
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Add section id for navbar tracking */}
      <section id="home">
        <Hero />
      </section>

      {/* Ballroom Dance Society Spotify Playlist & Official Club Page */}
      <section className="flex flex-col md:flex-row gap-8 items-center justify-center my-12 px-4">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4 text-primary">Dance to Our Playlist!</h2>
          <iframe
            src="https://open.spotify.com/embed/playlist/3BwKFw5saNRuKVEwP1WLsN?utm_source=generator"
            width="100%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Ballroom Dance Society Spotify Playlist"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4 text-primary">Learn More About Us</h2>
          <a
            href="https://sop.utoronto.ca/group/ballroom-dance-society/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Official UofT Club Page
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;