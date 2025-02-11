import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Award, Coins, Brain } from "lucide-react";

const advantages = [
    {
        icon: Award,
        title: "업계 최대 경력",
        descriptions: [
            "업계 최초로 네이버 플레이스 마케팅을 시작했습니다. (크몽 기준)",
            "노하우와 경험을 바탕으로 최적의 마케팅 경험을 제공해드립니다."
        ]
    },
    {
        icon: Coins,
        title: "업계 최저가",
        descriptions: [
            "장기간 확보해온 계정 및 계약을 맺은 리뷰어 풀을 통하여 합리적인 가격"
        ]
    },
    {
        icon: Brain,
        title: "9년경력의 마케팅 노하우",
        descriptions: [
            "보고하기 쉬운 마케팅 보고서 제공",
            "1:1 담당자 매칭 및 매니징"
        ]
    }
];

export function Advantages() {
    return (
        <section className='py-20 bg-gradient-to-br from-[#E5FFE8] to-white'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-4xl font-bold text-center mb-4 font-aggro'
                >
                    브릿지마케팅의 특별함
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-gray-600 text-center mb-12 max-w-2xl mx-auto px-4 font-tway'
                >
                    9년간의 노하우로 최고의 네이버 플레이스 마케팅 서비스를 제공합니다
                </motion.p>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
                    {advantages.map((advantage, index) => (
                        <motion.div
                            key={advantage.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className='p-6 bg-white/50 backdrop-blur-sm border-none hover:bg-white/80 transition-colors h-full'>
                                <advantage.icon className='w-12 h-12 text-[#03AC0E] mb-4' />
                                <h3 className='text-xl font-bold mb-4 font-aggro'>{advantage.title}</h3>
                                <ul className='space-y-2'>
                                    {advantage.descriptions.map((description, i) => (
                                        <li key={i} className='text-gray-600 font-tway'>{description}</li>
                                    ))}
                                </ul>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 