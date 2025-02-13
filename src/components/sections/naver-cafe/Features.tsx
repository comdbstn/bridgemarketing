import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Clock, Users, DollarSign, Users2, Target, Layout, MessageSquare, BookMarked } from "lucide-react";

const features = [
    {
        icon: Clock,
        title: "높은 리텐션",
        description: "하루 평균 이용시간 40분, MAU 4500만 등 압도적인 사용자 참여도",
    },
    {
        icon: Users,
        title: "4500만+ 이용자",
        description: "대한민국의 대부분의 인터넷 사용자가 이용하는 최대 규모의 커뮤니티",
    },
    {
        icon: DollarSign,
        title: "높은 구매력",
        description: "30-50대 주부 및 직장인 중심으로 높은 구매 전환율",
    },
    {
        icon: Users2,
        title: "다양한 연령층",
        description: "10대부터 60대까지 전 연령대가 고르게 분포",
    },
    {
        icon: Target,
        title: "타겟 설정 용이",
        description: "지역, 관심사, 연령대별 타겟팅 가능",
    },
    {
        icon: Layout,
        title: "관심사별 커뮤니티",
        description: "관심사 기반으로 나누어진 카페로 효과적인 타겟팅",
    },
    {
        icon: MessageSquare,
        title: "활발한 반응",
        description: "댓글과 대댓글이 활발하게 이루어져 높은 참여도",
    },
    {
        icon: BookMarked,
        title: "영구 보관",
        description: "게시물이 삭제되지 않고 언제나 확인 가능",
    },
];

export function Features() {
    return (
        <section className='py-20 relative overflow-hidden bg-gradient-to-br from-white to-green-50'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-4xl font-bold text-center mb-4 text-gray-900 font-aggro'
                >
                    네이버 카페 마케팅의 특징
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-gray-800 text-center mb-12 max-w-2xl mx-auto px-4 font-tway'
                >
                    브랜드의 대량 노출 및 즉각적인 전환이 필요한 다양한 업종에서
                    <br />
                    네이버 카페 마케팅을 통해 성공적인 결과를 얻고 있습니다.
                </motion.p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className='h-full'
                        >
                            <Card className='h-full flex flex-col hover:shadow-lg transition-all duration-300 overflow-hidden group'>
                                <div className='p-6 flex flex-col flex-grow'>
                                    <div className='w-12 h-12 rounded-lg bg-gradient-to-r from-[#2DB400] to-[#1EC800] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
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
