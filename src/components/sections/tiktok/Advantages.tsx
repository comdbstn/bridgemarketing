import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Award, TrendingUp, Brain } from "lucide-react";

const advantages = [
    {
        icon: Award,
        title: "업계 최초 상품",
        descriptions: [
            "업계 최초로 틱톡 시딩 상품을 진행했습니다.",
            "노하우와 경험을 바탕으로 최적의 마케팅 경험을 제공해드립니다."
        ]
    },
    {
        icon: TrendingUp,
        title: "압도적인 KPI",
        descriptions: [
            "100원대의 cpc/cpi 달성 가능",
            "장기 계약시 점진적으로 올라가는 성과"
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
        <section className="py-20 relative overflow-hidden bg-gradient-to-br from-white to-black/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center mb-12 font-aggro"
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
                            <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 overflow-hidden group">
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-black to-gray-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <advantage.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-gray-900 font-tway">{advantage.title}</h3>
                                    <ul className="space-y-3 text-gray-600 font-tway">
                                        {advantage.descriptions.map((desc, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="mr-2">•</span>
                                                <span>{desc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 