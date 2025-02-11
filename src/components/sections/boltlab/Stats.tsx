import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function CountUp({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
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
    
    return <span ref={ref}>{count}{suffix}</span>;
}

export function Stats() {
    const stats = [
        { number: 53, suffix: "%", label: "개발 효율 증가" },
        { number: 3, suffix: "배", label: "빠른 개발" },
        { number: 98, suffix: "%", label: "고객 만족도" },
        { number: 3, suffix: "배", label: "저렴한 비용" },
        { number: 100, suffix: "+", label: "프로젝트 완수" },
        { number: 85, suffix: "%", label: "재계약률" }
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-gray-900 mb-4"
                    >
                        AI 시대의 개발 비용과 효율
                        <br />
                        이제는 달라져야 합니다
                    </motion.h2>
                </motion.div>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="text-center group"
                        >
                            <motion.p
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-3xl font-bold text-[#626ae2] mb-2 group-hover:text-[#7884eb] transition-colors duration-300"
                            >
                                <CountUp end={stat.number} suffix={stat.suffix} />
                            </motion.p>
                            <motion.p
                                initial={{ y: 10, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                                viewport={{ once: true }}
                                className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300"
                            >
                                {stat.label}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 