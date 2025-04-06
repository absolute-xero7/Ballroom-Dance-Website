// Animation utilities for Framer Motion

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export const slideRight = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 }
};
