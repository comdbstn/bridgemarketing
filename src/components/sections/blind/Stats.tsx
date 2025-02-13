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
    TooltipItem,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const userGrowthData = {
    labels: ["18년 12월", "20년 9월", "22년 1월", "23년 1월"],
    datasets: [
        {
            label: "가입자 수(만)",
            data: [200, 400, 600, 800],
            borderColor: "#00A9FF",
            backgroundColor: "rgba(0, 169, 255, 0.1)",
            fill: true,
            tension: 0.3,
            borderWidth: 3,
            pointRadius: 6,
            pointBackgroundColor: "#00A9FF",
        },
    ],
};

const companyStats = [
    {
        company: "삼성",
        percentage: 88,
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    },
    {
        company: "SK",
        percentage: 89,
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/b4/SK_logo.svg",
    },
    {
        company: "현대",
        percentage: 62,
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Hyundai_Motor_Company_logo.svg",
    },
];

const lineOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            callbacks: {
                label: function (tooltipItem: TooltipItem<"line">) {
                    return `${tooltipItem.raw}만명`;
                },
            },
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: "rgba(0, 0, 0, 0.1)",
            },
            ticks: {
                callback: function (value) {
                    return `${value}만`;
                },
            },
        },
        x: {
            grid: {
                display: false,
            },
        },
    },
    animation: false,
};

export function Stats() {
    return (
        <section className='py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50'>
            <div className='container mx-auto px-4'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-4xl font-bold text-center mb-4 font-aggro text-gray-900'
                >
                    블라인드 성장 지표
                </motion.h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100'
                    >
                        <h3 className='text-xl font-bold mb-4 text-[#00A9FF]'>연간 사용자 성장</h3>
                        <div className='h-[300px]'>
                            <Line options={lineOptions} data={userGrowthData} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100'
                    >
                        <h3 className='text-xl font-bold mb-6 text-[#00A9FF]'>국내 3대 그룹사 가입률</h3>
                        <div className='space-y-6'>
                            <div className='flex items-center gap-4 mb-2'>
                                <img src={companyStats[0].logo} alt='삼성' className='h-6 w-24 object-contain' />
                                <div className='flex-1 bg-gray-200 rounded-full h-2'>
                                    <div className='bg-[#00A9FF] h-2 rounded-full' style={{ width: "88%" }} />
                                </div>
                                <span className='text-gray-800 font-medium'>88%</span>
                            </div>
                            <div className='flex items-center gap-4 mb-2'>
                                <img src={companyStats[1].logo} alt='SK' className='h-6 w-24 object-contain' />
                                <div className='flex-1 bg-gray-200 rounded-full h-2'>
                                    <div className='bg-[#00A9FF] h-2 rounded-full' style={{ width: "89%" }} />
                                </div>
                                <span className='text-gray-800 font-medium'>89%</span>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={companyStats[2].logo} alt='현대' className='h-6 w-24 object-contain' />
                                <div className='flex-1 bg-gray-200 rounded-full h-2'>
                                    <div className='bg-[#00A9FF] h-2 rounded-full' style={{ width: "62%" }} />
                                </div>
                                <span className='text-gray-800 font-medium'>62%</span>
                            </div>
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
                                { label: "글로벌 가입자", value: "800만+" },
                                { label: "한국 가입자", value: "600만+" },
                                { label: "월간 활성 사용자", value: "900만+" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className='p-6 text-center border-2 border-[#00A9FF] hover:shadow-lg transition-all duration-300'>
                                        <h4 className='text-lg font-medium mb-2 text-gray-600'>{stat.label}</h4>
                                        <p className='text-3xl font-bold text-[#00A9FF]'>{stat.value}</p>
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
