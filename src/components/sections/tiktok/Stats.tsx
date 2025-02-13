import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
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
    labels: ["2020년", "2021년", "2022년", "2023년"],
    datasets: [
        {
            label: "사용자 수(억)",
            data: [7.45, 11.2, 15.1, 16.35],
            borderColor: "#00F2EA",
            backgroundColor: "rgba(0, 242, 234, 0.1)",
            fill: true,
            tension: 0.3,
            borderWidth: 3,
            pointRadius: 6,
            pointBackgroundColor: "#00F2EA",
        },
    ],
};

const platformDistributionData = {
    labels: ["틱톡", "페이스북", "인스타그램", "트위터"],
    datasets: [
        {
            data: [95.2, 51.2, 45.3, 50.9],
            backgroundColor: ["#00F2EA", "#4267B2", "#E1306C", "#1DA1F2"],
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
                    return tickValue + "억";
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
        <section className='py-20 bg-gradient-to-br from-white via-[#00F2EA]/5 to-white'>
            <div className='container mx-auto px-4'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='space-y-8'
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='text-4xl font-bold text-center mb-12 text-gray-900 font-aggro'
                    >
                        틱톡 성장 지표
                    </motion.h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto'>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
                        >
                            <h3 className='text-xl font-bold mb-4 text-gray-900'>연간 사용자 성장</h3>
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
                            <h3 className='text-xl font-bold mb-4 text-gray-900'>SNS별 하루 이용 시간 비교</h3>
                            <div className='h-[300px]'>
                                <Doughnut options={doughnutOptions} data={platformDistributionData} />
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
                                    { label: "전 세계 이용 국가", value: "150개국+" },
                                    { label: "누적 다운로드", value: "35억+" },
                                    { label: "월간 사용자 수", value: "15억+" },
                                ].map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <Card className='p-6 text-center border-2 border-[#00F2EA] hover:border-[#FF0050] hover:shadow-lg transition-all duration-300'>
                                            <h4 className='text-lg font-medium mb-2 text-gray-900'>{stat.label}</h4>
                                            <p className='text-3xl font-bold text-gray-900'>{stat.value}</p>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
