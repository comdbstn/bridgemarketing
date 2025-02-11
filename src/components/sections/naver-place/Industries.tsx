import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Utensils, Building2, Stethoscope, Dumbbell, Scissors, Coffee } from "lucide-react";

const industries = [
    {
        icon: Utensils,
        title: "음식점",
        description: "맛집 검색 상위 노출로 신규 고객 유치"
    },
    {
        icon: Building2,
        title: "부동산",
        description: "지역 기반 매물 홍보 및 방문객 유치"
    },
    {
        icon: Stethoscope,
        title: "병원",
        description: "지역 내 의료기관 인지도 향상"
    },
    {
        icon: Dumbbell,
        title: "운동시설",
        description: "헬스장, 요가 등 운동시설 홍보"
    },
    {
        icon: Scissors,
        title: "미용실",
        description: "미용실, 네일샵 등 뷰티 업종 홍보"
    },
    {
        icon: Coffee,
        title: "카페",
        description: "카페 인지도 향상 및 방문객 유치"
    }
];

export function Industries() {
    return (
        <section className='py-20 bg-gradient-to-br from-white to-[#E5FFE8]'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-4xl font-bold text-center mb-4 font-aggro'
                >
                    추천 업종
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-gray-600 text-center mb-12 max-w-2xl mx-auto px-4 font-tway'
                >
                    네이버 플레이스의 지역 기반 검색을 활용하여 
                    <br />
                    효과적인 마케팅을 진행할 수 있는 업종을 소개합니다
                </motion.p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className='p-6 bg-white/50 backdrop-blur-sm border-none hover:bg-white/80 transition-colors'>
                                <industry.icon className='w-12 h-12 text-[#03AC0E] mb-4' />
                                <h3 className='text-xl font-bold mb-2 font-aggro'>{industry.title}</h3>
                                <p className='text-gray-600 font-tway'>{industry.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 