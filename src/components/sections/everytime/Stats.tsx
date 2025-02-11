import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    ChartOptions,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const userGrowthData = {
    labels: ["2016년 3월", "2020년 1월", "2024년 2월"],
    datasets: [
        {
            label: "사용자 수(만)",
            data: [100, 400, 700],
            borderColor: "#FF0000",
            backgroundColor: "rgba(255, 0, 0, 0.1)",
            fill: true,
            tension: 0.3,
            borderWidth: 3,
            pointRadius: 6,
            pointBackgroundColor: "#FF0000",
        },
    ],
};

const campusDistributionData = {
    labels: ["수도권", "영남권", "충청권", "호남권", "강원/제주"],
    datasets: [
        {
            data: [127, 98, 82, 76, 14],
            backgroundColor: [
                "#FF6B6B", // 붉은 계열
                "#4ECDC4", // 청록색
                "#45B7D1", // 하늘색
                "#96CEB4", // 민트색
                "#FFEEAD", // 연한 노란색
            ],
            borderWidth: 0,
        },
    ],
};

const lineOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: "rgba(0, 0, 0, 0.1)",
            },
            ticks: {
                callback: function (tickValue: number | string) {
                    return tickValue + "만";
                },
            },
        },
        x: {
            grid: {
                display: false,
            },
        },
    },
    animation: {
        duration: 2000,
        easing: "easeInOutQuart",
    },
};

const doughnutOptions: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: "bottom",
            labels: {
                padding: 20,
                usePointStyle: true,
            },
        },
    },
    animation: {
        animateRotate: true,
        animateScale: true,
        duration: 2000,
        easing: "easeInOutQuart",
    },
};

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
        { number: 397, suffix: "개", label: "전국 캠퍼스" },
        { number: 82, suffix: "%", label: "20대 사용률" },
        { number: 280, suffix: "만+", label: "월간 활성 사용자" },
        { number: 3, suffix: "배", label: "빠른 효과" },
        { number: 100, suffix: "+", label: "광고 집행" },
        { number: 95, suffix: "%", label: "재계약률" }
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
                        대학생 마케팅의 새로운 기준
                        <br />
                        에브리타임이 만듭니다
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
                                className="text-3xl font-bold text-[#f03e3e] mb-2 group-hover:text-[#ff6b6b] transition-colors duration-300"
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
