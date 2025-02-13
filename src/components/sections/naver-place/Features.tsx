import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MapPin, Star, BarChart3, MessageSquare, Search, TrendingUp } from "lucide-react";

const features = [
    {
        icon: MapPin,
        title: "지역 기반 마케팅",
        description: "매장 주변 지역 사용자들에게 효과적으로 도달하는 지역 기반 마케팅을 진행합니다."
    },
    {
        icon: Star,
        title: "리뷰 관리",
        description: "실제 방문자들의 긍정적인 리뷰를 통해 매장의 신뢰도를 높입니다."
    },
    {
        icon: BarChart3,
        title: "데이터 기반 전략",
        description: "실시간 데이터 분석을 통해 최적의 마케팅 전략을 수립하고 실행합니다."
    },
    {
        icon: MessageSquare,
        title: "방문자 리뷰",
        description: "실제 방문자들의 자연스러운 후기로 신뢰도 높은 컨텐츠를 제작합니다."
    },
    {
        icon: Search,
        title: "검색 최적화",
        description: "네이버 지도 검색 상위 노출을 위한 최적화 전략을 제공합니다."
    },
    {
        icon: TrendingUp,
        title: "성과 분석",
        description: "상세한 성과 분석 리포트를 제공하여 마케팅 효과를 정확하게 측정합니다."
    }
];

export function Features() {
    return (
        <section className='py-20 relative overflow-hidden bg-gradient-to-br from-white to-[#E5FFE8]'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-4xl font-bold text-center mb-4 text-gray-900 font-aggro'
                >
                    네이버 플레이스 마케팅의 특징
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-gray-800 text-center mb-12 max-w-2xl mx-auto px-4 font-tway'
                >
                    브랜드의 대량 노출 및 즉각적인 전환이 필요한 다양한 업종에서
                    <br />
                    네이버 플레이스 마케팅을 통해 성공적인 결과를 얻고 있습니다.
                </motion.p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
                    {features.map((feature, index) => (
                        <motion.div 
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className='h-full'
                        >
                            <Card className='h-full hover:shadow-lg transition-shadow duration-300'>
                                <div className='p-6'>
                                    <div className='w-12 h-12 rounded-lg bg-gradient-to-r from-[#03AC0E] to-[#02891B] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                                        <feature.icon className='w-6 h-6 text-white' />
                                    </div>
                                    <h3 className='text-xl font-bold mb-2 text-gray-900 font-tway'>{feature.title}</h3>
                                    <p className='text-gray-800 font-tway'>{feature.description}</p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 