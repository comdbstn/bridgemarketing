import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Basic",
        price: "50만원",
        description: "소규모 마케팅이 필요한 기업을 위한 패키지",
        features: [
            "5개 학교 게시글 작성",
            "기본 컨텐츠 제작",
            "주간 리포트 제공",
            "기본 키워드 최적화",
            "1:1 전담 매니저",
        ],
    },
    {
        name: "Standard",
        price: "150만원",
        description: "중규모 마케팅이 필요한 기업을 위한 패키지",
        features: [
            "20개 학교 게시글 작성",
            "맞춤형 컨텐츠 제작",
            "실시간 모니터링",
            "상세 키워드 최적화",
            "일일 리포트 제공",
            "SEO 최적화",
        ],
    },
    {
        name: "Premium",
        price: "500만원",
        description: "대규모 마케팅이 필요한 기업을 위한 패키지",
        features: [
            "무제한 학교 게시글 작성",
            "프리미엄 컨텐츠 제작",
            "실시간 대시보드 제공",
            "고급 키워드 최적화",
            "전담 매니저 배정",
            "성과 분석 컨설팅",
            "24/7 긴급 대응",
        ],
    },
];

export function Pricing() {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-amber-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-amber-600 font-semibold text-lg font-tway mb-4 block">
                        PRICING
                    </span>
                    <h2 className="text-4xl font-bold mb-4 font-aggro">
                        가격 안내
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto font-tway">
                        합리적인 가격으로 효과적인 에브리타임 마케팅을 시작하세요.
                        <br />
                        귀사의 예산과 목표에 맞는 최적의 플랜을 제안드립니다.
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
                            <Card className="p-8 h-full hover:shadow-lg transition-all duration-300">
                                <h3 className="text-2xl font-bold mb-2 font-aggro">{plan.name}</h3>
                                <div className="text-3xl font-bold text-amber-600 mb-4">
                                    {plan.price}
                                    <span className="text-base font-normal text-gray-600">/월</span>
                                </div>
                                <p className="text-gray-600 mb-6 font-tway">{plan.description}</p>
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <Check className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0" />
                                            <span className="text-gray-600 font-tway">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="http://pf.kakao.com/_CYGdn/chat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-3 px-6 bg-gradient-to-r from-amber-600 to-green-600 hover:from-amber-700 hover:to-green-700 text-white rounded-lg text-center transition-colors font-tway"
                                >
                                    문의하기
                                </a>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
