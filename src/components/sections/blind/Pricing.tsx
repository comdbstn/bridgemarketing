import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface Plan {
    name: string;
    price: string;
    description: string;
    features: string[];
    popular: boolean;
}

const plans: Plan[] = [
    {
        name: "Basic",
        price: "50,000/회",
        description: "소규모 마케팅이 필요한 기업을 위한 패키지",
        features: [
            "2개 게시글 or 1개 게시글 + 댓글 1개 작성",
            "24시간 이내 업로드",
            "기본 리포트 제공"
        ],
        popular: false
    },
    {
        name: "Standard",
        price: "500,000/회",
        description: "중규모 마케팅이 필요한 기업을 위한 패키지",
        features: [
            "12개 게시글 + 댓글 12개 작성",
            "최대 10개의 댓글/대댓글 작업",
            "댓글 관리 (2주)",
            "자연스러운 질문/답변 구성",
            "신뢰도 높은 바이럴 구성",
            "프리미엄 리포트 제공"
        ],
        popular: true
    },
    {
        name: "Premium",
        price: "별도 문의",
        description: "대규모 마케팅이 필요한 기업을 위한 패키지",
        features: [
            "무제한 게시글/댓글 작성",
            "무제한 댓글/대댓글 작업",
            "댓글관리 (2주)",
            "자연스러운 질문/답변 구성",
            "이미지 생성",
            "웹페이지/랜딩페이지 제작",
            "신뢰도 높은 바이럴 구성",
            "일별 프리미엄 리포트 제공"
        ],
        popular: false
    },
];

export function Pricing() {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-blue-600 font-semibold text-lg font-tway mb-4 block">
                        PRICING
                    </span>
                    <h2 className="text-4xl font-bold mb-4 font-aggro">
                        가격 안내
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto font-tway">
                        합리적인 가격으로 효과적인 블라인드 마케팅을 시작하세요
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
                                plan.popular ? 'border-2 border-blue-500 relative' : ''
                            }`}>
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                            인기
                                        </span>
                                    </div>
                                )}
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 font-aggro">{plan.name}</h3>
                                    <div className="text-gray-600 mb-4 font-tway">{plan.description}</div>
                                    <div className="text-3xl font-bold mb-6 font-aggro text-blue-600">
                                        {plan.price}
                                    </div>
                                </div>
                                <div className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-center text-gray-600 font-tway">
                                            <Check className="w-5 h-5 text-blue-500 mr-2" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                                <a
                                    href="http://pf.kakao.com/_CYGdn/chat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg text-center transition-all duration-300 hover:scale-105 font-bold"
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
