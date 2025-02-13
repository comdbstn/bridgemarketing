import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Award, Coins, Brain } from "lucide-react";

const advantages = [
    {
        icon: Award,
        title: "업계 최대 경력",
        descriptions: [
            "업계 최초로 블라인드 마케팅을 시작했습니다. (크몽 기준)",
            "노하우와 경험을 바탕으로 최적의 마케팅 경험을 제공해드립니다."
        ]
    },
    {
        icon: Coins,
        title: "업계 최저가",
        descriptions: [
            "장기간 확보해온 계정 및 계약을 맺은 직장인 풀을 통하여 합리적인 가격"
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
        <section className="py-20 relative overflow-hidden bg-gradient-to-br from-white to-blue-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center mb-12 font-aggro text-gray-900"
                >
                    브릿지마케팅만의 장점
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {advantages.map((advantage, index) => (
                        <motion.div
                            key={advantage.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <Card className="h-full p-6 hover:shadow-lg transition-all duration-300">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#00A9FF] to-[#0077FF] flex items-center justify-center mb-4">
                                    <advantage.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900 font-tway">{advantage.title}</h3>
                                <div className="space-y-2">
                                    {advantage.descriptions.map((desc, i) => (
                                        <p key={i} className="text-gray-800 font-tway">{desc}</p>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 