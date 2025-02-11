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
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: 'rgba(0, 0, 0, 0.1)'
            }
        },
        x: {
            grid: {
                display: false
            }
        }
    }
};

const userGrowthData = {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
        {
            label: '사용자 수',
            data: [200, 250, 300, 350, 400, 420],
            fill: true,
            borderColor: '#2DB400',
            backgroundColor: 'rgba(45, 180, 0, 0.1)',
            tension: 0.4
        }
    ]
};

const engagementData = {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
        {
            label: '방문자 증가율',
            data: [70, 75, 80, 85, 90, 95],
            fill: true,
            borderColor: '#2DB400',
            backgroundColor: 'rgba(45, 180, 0, 0.1)',
            tension: 0.4
        }
    ]
};

export function Stats() {
    return (
        <section className='py-20 bg-gradient-to-br from-white via-[#E5FFE8] to-white'>
            <div className='container mx-auto px-4'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-4xl font-bold text-center mb-4 font-aggro'
                >
                    네이버 플레이스 성장 지표
                </motion.h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
                    >
                        <h3 className='text-xl font-bold mb-4 text-[#2DB400]'>연간 사용자 성장</h3>
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
                        <h3 className='text-xl font-bold mb-4 text-[#2DB400]'>방문자 증가율</h3>
                        <div className='h-[300px]'>
                            <Line options={lineOptions} data={engagementData} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 
