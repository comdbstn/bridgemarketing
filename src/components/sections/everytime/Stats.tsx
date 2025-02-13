import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

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

export const Stats: React.FC = () => {
    const stats = [
        { number: 53, suffix: "%", label: "광고 효율 증가" },
        { number: 3, suffix: "배", label: "빠른 집행" },
        { number: 98, suffix: "%", label: "고객 만족도" },
        { number: 3, suffix: "배", label: "저렴한 비용" },
        { number: 100, suffix: "+", label: "프로젝트 완수" },
        { number: 85, suffix: "%", label: "재계약률" }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 font-aggro">
                        에브리타임 마케팅의 성과
                    </h2>
                    <p className="text-xl text-gray-600 font-tway">
                        수많은 프로젝트를 통해 검증된 마케팅 효과를 확인하세요
                    </p>
                </motion.div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-[#FF4B4B]/20 group"
                        >
                            <div className="text-center">
                                <p className="text-4xl font-bold text-[#FF4B4B] mb-3 group-hover:scale-105 transition-transform duration-300 font-aggro">
                                    <CountUp end={stat.number} suffix={stat.suffix} />
                                </p>
                                <p className="text-gray-600 font-tway">
                                    {stat.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
