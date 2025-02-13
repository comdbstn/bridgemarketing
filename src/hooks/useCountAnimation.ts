import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function useCountAnimation(end: number, duration: number = 2000) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        let startTime: number;
        let animationFrame: number;

        const updateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            if (progress < duration) {
                const nextCount = Math.min(end, Math.floor((progress / duration) * end));
                setCount(nextCount);
                animationFrame = requestAnimationFrame(updateCount);
            } else {
                setCount(end);
            }
        };

        if (isInView) {
            animationFrame = requestAnimationFrame(updateCount);
        }

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [end, duration, isInView]);

    return { count, ref };
} 