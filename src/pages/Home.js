import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Events from '../components/Events';
import EmbeddedSignupForm from '../components/EmbeddedSignupForm';
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

      <section id="about">
        <About />
      </section>

      <section id="events">
        <Events />
      </section>

      <section id="signup">
        <EmbeddedSignupForm />
      </section>
    </>
  );
};

export default Home;