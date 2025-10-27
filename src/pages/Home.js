import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
// ...existing imports...

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
      <Helmet>
        <title>UofT Ballroom Dance Club | Home</title>
        <meta name="description" content="Join the UofT Ballroom Dance Club at the University of Toronto. Discover the elegance, joy, and passion of ballroom dancing for all levels." />
        <meta property="og:title" content="UofT Ballroom Dance Club | Home" />
        <meta property="og:description" content="Join the UofT Ballroom Dance Club at the University of Toronto. Discover the elegance, joy, and passion of ballroom dancing for all levels." />
        <meta property="og:image" content="/assets/images/dancers.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ballroomdanceuoft.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UofT Ballroom Dance Club | Home" />
        <meta name="twitter:description" content="Join the UofT Ballroom Dance Club at the University of Toronto. Discover the elegance, joy, and passion of ballroom dancing for all levels." />
        <meta name="twitter:image" content="/assets/images/dancers.jpg" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "UofT Ballroom Dance Club",
            "url": "https://ballroomdanceuoft.com/",
            "logo": "/favicon.ico",
            "sameAs": [
              "https://www.instagram.com/ballroomdance_uoft/"
            ]
          }
        `}</script>
      </Helmet>

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Add section id for navbar tracking */}
      <section id="home">
        <Hero />
      </section>

      {/* ... Home content without playlists button ... */}
    </>
  );
};

export default Home;