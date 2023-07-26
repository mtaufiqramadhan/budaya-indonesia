'use client';

import { createContext, useContext } from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

const FadeInStaggerContext = createContext(false);

const viewport = { once: true, margin: '0px 0px -200px' };

interface FadeInProps {
  [key: string]: any;
}

export const FadeIn: React.FC<FadeInProps> = (props) => {
  let shouldReduceMotion = useReducedMotion();
  let isInStaggerGroup = useContext(FadeInStaggerContext);

  const fadeInVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={fadeInVariants}
      transition={{ duration: 0.5 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: 'hidden',
            whileInView: 'visible',
            viewport,
          })}
      {...props}
    />
  );
};

interface FadeInStaggerProps {
  faster?: boolean;
  [key: string]: any;
}

export const FadeInStagger: React.FC<FadeInStaggerProps> = ({
  faster = false,
  ...props
}) => {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  );
};
