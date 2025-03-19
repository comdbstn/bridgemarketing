import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
    Chart,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    ChartOptions as ChartOptionsType,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const userGrowthData = {
    labels: ["2020년", "2021년", "2022년", "2023년", "2024년"],
    datasets: [
        {
            label: "월간 순방문자 수(만)",
            data: [3200, 3600, 4000, 4300, 4500],
            borderColor: "#2DB400",
            backgroundColor: "rgba(45, 180, 0, 0.1)",
            fill: true,
            tension: 0.3,
            borderWidth: 3,
            pointRadius: 6,
            pointBackgroundColor: "#2DB400",
        },
    ],
};

const categoryDistributionData = {
    labels: ["맘카페", "지역카페", "취미카페", "팬카페", "기타"],
    datasets: [
        {
            data: [35, 25, 20, 15, 5],
            backgroundColor: [
                "#2DB400", // 네이버 그린
                "#1EC800", // 밝은 그린
                "#00C73C", // 라이트 그린
                "#00B843", // 민트 그린
                "#19CE60", // 연한 그린
            ],
            borderWidth: 0,
        },
    ],
};

const lineOptions: ChartOptionsType<'line'> = {
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

const doughnutOptions: ChartOptionsType<'doughnut'> = {
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
        <section className='py-20 bg-gradient-to-br from-white via-green-50 to-white'>
            <div className='container mx-auto px-4'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-4xl font-bold text-center mb-12 font-aggro'
                >
                    네이버 카페 성장 지표
                </motion.h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
                    >
                        <h3 className='text-xl font-bold mb-4 text-green-600'>연간 방문자 성장</h3>
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
                        <h3 className='text-xl font-bold mb-4 text-green-600'>카페 카테고리 분포</h3>
                        <div className='h-[300px]'>
                            <Doughnut options={doughnutOptions} data={categoryDistributionData} />
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
                                { label: "월간 순방문자 수", value: "4,500만+" },
                                { label: "누적 가입자 수", value: "4,800만+" },
                                { label: "활성 카페 수", value: "1,000만+" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className='p-6 text-center border-2 border-green-600 hover:shadow-lg transition-all duration-300'>
                                        <h4 className='text-lg font-medium mb-2 text-gray-600'>{stat.label}</h4>
                                        <p className='text-3xl font-bold text-green-600'>{stat.value}</p>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-center mb-12'
                >
                    <h2 className='text-4xl font-bold text-gray-900 mb-4 font-aggro'>
                        업계 최대 경력
                    </h2>
                    <p className='text-gray-800 font-tway'>
                        업계 최초로 네이버 카페 마케팅을 시작했습니다. 노하우와 경험을 바탕으로 최적의 마케팅 경험을 제공해드립니다.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-center mb-12'
                >
                    <h2 className='text-4xl font-bold text-gray-900 mb-4 font-aggro'>
                        업계 최저가
                    </h2>
                    <p className='text-gray-800 font-tway'>
                        장기간 확보해온 계정 및 계약을 맺은 카페 회원 풀을 통하여 합리적인 가격
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-center mb-12'
                >
                    <h2 className='text-4xl font-bold text-gray-900 mb-4 font-aggro'>
                        9년경력의 마케팅 노하우
                    </h2>
                    <p className='text-gray-800 font-tway'>
                        보고하기 쉬운 마케팅 보고서 제공, 1:1 담당자 매칭 및 매니징
                    </p>
                </motion.div>
            </div>
        </section>
    );
} 
