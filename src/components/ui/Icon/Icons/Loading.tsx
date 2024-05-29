import { motion } from 'framer-motion';

const variantKeys = {
  end: 'end',
  initial: 'start',
};

const circleProps = {
  cy: 7,
  r: 2,
  transition: {
    duration: 0.35,
    easing: 'circInOut',
    mass: 1,
    yoyo: Infinity,
  },
  variants: {
    [variantKeys.initial]: {
      scale: 0.65,
      y: -1,
    },
    [variantKeys.end]: {
      scale: 1,
      y: 1,
    },
  },
};

const svgVariants = {
  [variantKeys.end]: {
    transition: {
      staggerChildren: 0.125,
    },
  },
};

const Loading: React.FC = () => (
  <motion.svg
    animate={variantKeys.end}
    initial={variantKeys.initial}
    variants={svgVariants}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.circle {...circleProps} cx="2" />
    <motion.circle {...circleProps} cx="8" />
    <motion.circle {...circleProps} cx="14" />
  </motion.svg>
);

export default Loading;
