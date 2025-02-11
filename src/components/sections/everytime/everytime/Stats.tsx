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

export function Stats() {
    return (
        <section className='py-20 bg-gradient-to-br from-white via-pink-50 to-white'>
            <div className='container mx-auto px-4'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-4xl font-bold text-center mb-12 font-aggro'
                >
                    에브리타임 성장 지표
                </motion.h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
                    >
                        <h3 className='text-xl font-bold mb-4 text-[#e1595e]'>연간 사용자 성장</h3>
                        <div className='h-[300px]'>
                            <Line options={lineOptions} data={userGrowthData} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
                    >
                        <h3 className='text-xl font-bold mb-4 text-[#e1595e]'>캠퍼스 분포</h3>
                        <div className='h-[300px]'>
                            <Doughnut options={doughnutOptions} data={campusDistributionData} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='lg:col-span-2'
                    >
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            {[
                                { label: "전국 캠퍼스", value: "397개" },
                                { label: "누적 가입자 수", value: "700만+" },
                                { label: "월간 사용자 수", value: "280만+" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className='p-6 text-center border-2 border-[#e1595e] hover:shadow-lg transition-all duration-300'>
                                        <h4 className='text-lg font-medium mb-2 text-gray-600'>{stat.label}</h4>
                                        <p className='text-3xl font-bold text-[#e1595e]'>{stat.value}</p>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
