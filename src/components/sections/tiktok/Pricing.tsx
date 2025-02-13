import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing: React.FC = () => {
    const plans = [
        {
            name: "Basic",
            price: "250,000원",
            description: "단발성 홍보가 필요한 소규모 프로젝트에 적합",
            features: ["1개 콘텐츠 업로드", "콘텐츠 기획", "7일 이내 업로드", "기본 리포트 제공"],
            highlighted: false,
            ctaText: "시작하기",
        },
        {
            name: "Pro",
            price: "2,000,000원",
            description: "대규모 마케팅 캠페인을 위한 최적의 선택",
            features: [
                "10개 콘텐츠 업로드",
                "인플루언서 리스팅",
                "브랜드 콘텐츠 기획",
                "프리미엄 리포트 제공",
                "전담 매니저 배정",
            ],
            highlighted: true,
            ctaText: "시작하기",
            badge: "BEST CHOICE",
        },
        {
            name: "Enterprise",
            price: "별도 문의",
            description: "글로벌 단위 바이럴을 원하는 기업을 위한 플랜",
            features: [
                "글로벌 인플루언서 타겟",
                "인플루언서 리스팅",
                "브랜드 콘텐츠 기획",
                "프리미엄 리포트 제공",
                "전담 매니저 배정",
            ],
            highlighted: false,
            ctaText: "문의하기",
        },
    ];

    return (
        <section className='py-20 bg-gradient-to-br from-[#00F2EA]/10 to-white overflow-hidden'>
            <div className='container mx-auto px-4'>
                <div className='text-center max-w-3xl mx-auto mb-16'>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='text-4xl font-bold mb-4 font-aggro text-gray-900'
                    >
                        합리적인 가격으로 시작하세요
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='text-gray-800 font-tway'
                    >
                        프로젝트 규모와 목표에 맞는 최적의 플랜을 선택하세요
                    </motion.p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {plan.badge && (
                                <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                                    <span className='bg-gradient-to-r from-[#00F2EA] to-[#FF0050] text-white text-sm font-bold px-4 py-1 rounded-full'>
                                        {plan.badge}
                                    </span>
                                </div>
                            )}

                            <Card className={`h-full ${
                                plan.highlighted
                                    ? "border-2 border-[#00F2EA] shadow-lg scale-105 relative z-10"
                                    : "border border-gray-200"
                            } hover:shadow-xl transition-all duration-300`}
                            >
                                <div className='p-8'>
                                    <h3 className='text-2xl font-bold mb-2 font-tway text-gray-900'>{plan.name}</h3>
                                    <div className='mb-4'>
                                        <span className='text-4xl font-bold text-gray-900'>{plan.price}</span>
                                        {plan.name !== "Enterprise" && <span className='text-gray-800'>/회</span>}
                                    </div>
                                    <p className='text-gray-800 mb-6 font-tway'>{plan.description}</p>

                                    <a
                                        href='http://pf.kakao.com/_CYGdn/chat'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className={`w-full block text-center py-3 ${
                                            plan.highlighted
                                                ? "bg-gradient-to-r from-[#00F2EA] to-[#FF0050] hover:from-[#FF0050] hover:to-[#00F2EA]"
                                                : "bg-gray-900 hover:bg-gray-800"
                                        } text-white rounded-full font-bold transition-all duration-300 hover:scale-[1.02] mb-8`}
                                    >
                                        {plan.ctaText}
                                    </a>

                                    <div className='space-y-4'>
                                        {plan.features.map((feature) => (
                                            <div key={feature} className='flex items-center gap-3'>
                                                <div
                                                    className={`rounded-full p-1 ${
                                                        plan.highlighted
                                                            ? "bg-[#00F2EA]/10 text-[#00F2EA]"
                                                            : "bg-gray-100 text-gray-600"
                                                    }`}
                                                >
                                                    <Check className='w-4 h-4' />
                                                </div>
                                                <span className='text-gray-600 font-tway'>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
