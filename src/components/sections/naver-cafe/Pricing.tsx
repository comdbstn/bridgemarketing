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
        <section className='py-32 bg-gradient-to-br from-white via-green-50 to-white'>
            <div className='container mx-auto px-4'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-center mb-16'
                >
                    <span className='text-green-600 font-semibold text-lg font-tway mb-4 block'>
                        PRICING
                    </span>
                    <h2 className='text-4xl font-bold mb-4 text-gray-900 font-aggro'>
                        가격 안내
                    </h2>
                    <p className='text-gray-700 font-tway'>
                        합리적인 가격
                        <br />
                        원가를 기준으로 가격을 산정하지 않았습니다.
                        <br />
                        KPI를 기반으로 비용대비 만족스러운 결과가 나올 수 있도록 하겠습니다.
                    </p>
                </motion.div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${
                                plan.popular ? 'border-2 border-green-500' : ''
                            }`}
                        >
                            {plan.popular && (
                                <div className='bg-green-500 text-white text-sm font-semibold py-1 px-4 text-center'>
                                    인기
                                </div>
                            )}
                            <div className='p-8'>
                                <h3 className='text-2xl font-bold mb-2 text-gray-900 font-aggro'>{plan.name}</h3>
                                <p className='text-gray-700 mb-6 min-h-[48px] font-tway'>{plan.description}</p>
                                <div className='text-3xl font-bold text-green-600 mb-8 font-tway'>
                                    {plan.price}
                                    <span className='text-lg text-gray-500'>/월</span>
                                </div>
                                <ul className='space-y-4 mb-8'>
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className='flex items-start gap-3'>
                                            <Check className='w-5 h-5 text-green-500 mt-0.5 shrink-0' />
                                            <span className='text-gray-700 font-tway'>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    className={`w-full py-3 px-6 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors duration-200 font-tway`}
                                >
                                    시작하기
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 
