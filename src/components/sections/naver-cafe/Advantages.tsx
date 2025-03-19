import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Award, Coins, Brain } from "lucide-react";

const advantages = [
    {
        icon: Award,
        title: "업계 최대 경력",
        description: "업계 최초로 네이버 카페 마케팅을 시작했습니다. 노하우와 경험을 바탕으로 최적의 마케팅 경험을 제공해드립니다."
    },
    {
        icon: Coins,
        title: "업계 최저가",
        description: "장기간 확보해온 계정 및 계약을 맺은 카페 회원 풀을 통하여 합리적인 가격"
    },
    {
        icon: Brain,
        title: "9년경력의 마케팅 노하우",
        description: "보고하기 쉬운 마케팅 보고서 제공, 1:1 담당자 매칭 및 매니징"
    }
];

export function Advantages() {
    return (
        <section className='py-24 relative overflow-hidden bg-gradient-to-br from-white to-green-50'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-4xl font-bold text-center mb-4 text-gray-900 font-aggro'
                >
                    네이버 카페 마케팅의 장점
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-gray-700 text-center mb-16 max-w-2xl mx-auto font-tway'
                >
                    대한민국 최대 커뮤니티 네이버 카페에서 
                    <br />
                    효과적인 마케팅을 시작하세요
                </motion.p>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                    {advantages.map((advantage, index) => (
                        <motion.div
                            key={advantage.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className='relative'
                        >
                            <Card className='p-8 h-full hover:shadow-lg transition-all duration-300 group'>
                                <div className='flex flex-col items-center text-center'>
                                    <div className='w-16 h-16 bg-gradient-to-r from-[#2DB400] to-[#00C73C] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                                        <advantage.icon className='w-8 h-8 text-white' />
                                    </div>
                                    <h3 className='text-xl font-bold mb-4 text-gray-900 font-tway'>
                                        {advantage.title}
                                    </h3>
                                    <p className='text-gray-700 leading-relaxed font-tway'>
                                        {advantage.description}
                                    </p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 
