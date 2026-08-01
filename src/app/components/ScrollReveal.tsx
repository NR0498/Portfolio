import { useEffect, useRef, ReactNode } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export function ScrollReveal({ children, delay = 0, direction = 'up', className = '' }: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        y: directions[direction].y,
        x: directions[direction].x,
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        x: 0,
      } : {}}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function Parallax({ children, speed = 0.5, className = '' }: ParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

  // Ensure non-static position for scroll offset calculation
  const ensuredClassName = className.includes('absolute') || className.includes('fixed') || className.includes('relative')
    ? className
    : `relative ${className}`;

  return (
    <motion.div ref={ref} style={{ y }} className={ensuredClassName}>
      {children}
    </motion.div>
  );
}

interface ScaleOnScrollProps {
  children: ReactNode;
  className?: string;
}

export function ScaleOnScroll({ children, className = '' }: ScaleOnScrollProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={ref} 
      style={{ scale, opacity }} 
      className={className}
    >
      {children}
    </motion.div>
  );
}
