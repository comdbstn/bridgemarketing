import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Basic",
        price: "50만원 (키워드별상이)",
        description: "소규모 매장을 위한 기본 플랜",
        features: [
            "5개 리뷰 작성",
            "기본 컨텐츠 제작",
            "주간 리포트 제공",
            "기본 키워드 최적화"
        ]
    },
    {
        name: "Standard",
        price: "150만원 (키워드별상이)",
        description: "효과적인 마케팅을 위한 표준 플랜",
        features: [
            "20개 리뷰 작성",
            "맞춤형 컨텐츠 제작",
            "실시간 모니터링",
            "상세 키워드 최적화",
            "일일 리포트 제공"
        ]
    },
    {
        name: "Premium",
        price: "500만원 (키워드별상이)",
        description: "프리미엄 마케팅을 위한 고급 플랜",
        features: [
            "프리미엄 컨텐츠 제작",
            "실시간 대시보드 제공",
            "키워드 상위노출 최적화",
            "전담 매니저 배정",
            "성과 분석 컨설팅"
        ]
    }
];

export function Pricing() {
    return (
        <section className="py-20 bg-gradient-to-br from-white to-[#E5FFE8]">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 font-aggro">가격 안내</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto font-tway">
                        합리적인 가격으로 효과적인 네이버 플레이스 마케팅을 시작하세요
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="p-8 bg-white hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold mb-2 font-aggro">{plan.name}</h3>
                                    <p className="text-gray-600 mb-4 font-tway">{plan.description}</p>
                                    <div className="text-3xl font-bold text-[#03AC0E] font-aggro">{plan.price}</div>
                                </div>
                                <div className="flex-grow">
                                    <ul className="space-y-4">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-center text-gray-600 font-tway">
                                                <Check className="w-5 h-5 text-[#03AC0E] mr-2 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <a
                                    href="http://pf.kakao.com/_CYGdn/chat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-8 block w-full py-3 px-6 bg-gradient-to-r from-[#03AC0E] to-[#02891B] hover:from-[#02891B] hover:to-[#03AC0E] text-white rounded-lg text-center transition-all duration-300 hover:scale-105 font-bold"
                                >
                                    시작하기
                                </a>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 