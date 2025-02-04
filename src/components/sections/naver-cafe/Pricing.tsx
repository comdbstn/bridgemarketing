import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Plan {
    name: string;
    price: string;
    description: string;
    features: string[];
    popular?: boolean;
}

const plans: Plan[] = [
    {
        name: "Basic",
        price: "25만원",
        description: "소규모 마케팅이 필요한 기업을 위한 패키지",
        features: [
            "5개 카페 게시글 작성",
            "정보성/후기성 원고 작성",
            "댓글 3개 제공",
            "댓글관리 (2주간 모니터링)",
            "주간 리포트 제공",
            "기본 키워드 최적화",
            "1:1 전담 매니징"
        ],
        popular: false
    },
    {
        name: "Standard",
        price: "95만원",
        description: "중규모 마케팅이 필요한 기업을 위한 패키지",
        features: [
            "20개 카페 게시글 작성",
            "정보성/후기성 원고 작성",
            "댓글 3개 제공",
            "댓글관리 (2주간 모니터링)",
            "주간 리포트 제공",
            "기본 키워드 최적화",
            "1:1 전담 매니징"
        ],
        popular: true
    },
    {
        name: "Premium",
        price: "별도문의",
        description: "대규모 마케팅이 필요한 기업을 위한 패키지",
        features: [
            "무제한 카페 게시글 작성",
            "정보성/후기성 원고 작성",
            "댓글 3개 제공",
            "댓글관리 (2주간 모니터링)",
            "일별 리포트 제공",
            "프리미엄 키워드 최적화",
            "VIP 고객 지원",
            "우선 처리"
        ],
        popular: false
    },
];

export function Pricing() {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-green-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-green-600 font-semibold text-lg font-tway mb-4 block">
                        PRICING
                    </span>
                    <h2 className="text-4xl font-bold mb-4 font-aggro">
                        가격 안내
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto font-tway">
                        합리적인 가격
                        <br />
                        원가를 기준으로 가격을 산정하지 않았습니다.
                        <br />
                        KPI를 기반으로 비용대비 만족스러운 결과가 나올 수 있도록 하겠습니다.
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
                            <Card className={`p-8 h-full flex flex-col ${
                                plan.popular ? 'border-2 border-green-500 relative' : ''
                            }`}>
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                            인기
                                        </span>
                                    </div>
                                )}
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 font-aggro">{plan.name}</h3>
                                    <div className="text-gray-600 mb-4 font-tway">{plan.description}</div>
                                    <div className="text-3xl font-bold mb-6 font-aggro">
                                        {plan.price}
                                        <span className="text-lg text-gray-600 font-normal">만원~/월</span>
                                    </div>
                                </div>
                                <div className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-center text-gray-600 font-tway">
                                            <Check className="w-5 h-5 text-green-500 mr-2" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                                <Button
                                    className={`w-full ${
                                        plan.popular
                                            ? 'bg-green-500 hover:bg-green-600'
                                            : 'bg-gray-800 hover:bg-gray-900'
                                    } text-white font-tway`}
                                >
                                    시작하기
                                </Button>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 
