import React from 'react';
import { useOutlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const AnimatedOutlet: React.FC = () => {
  const outlet = useOutlet();

  return (
    <AnimatePresence mode="wait">
      {outlet && (
        <motion.div
          key={outlet.props.children.props.match.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          {outlet}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedOutlet;
