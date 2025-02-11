import { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function useCountAnimation(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(end);
          setHasAnimated(true);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration, hasAnimated]);

  return { count, ref };
}