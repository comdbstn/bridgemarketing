import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Megaphone, ArrowRight } from "lucide-react";

export const Products: React.FC = () => {
    const products = [
        {
            icon: MessageSquare,
            title: "자유게시판",
            subtitle: "자연스러운 바이럴 마케팅",
            description: "자연스러운 게시글을 통해 제품/서비스를 홍보하고 대학생들의 관심을 유도합니다.",
            features: [
                "자연스러운 홍보 효과",
                "높은 조회수",
                "실시간 피드백",
                "타겟 학교 선택"
            ]
        },
        {
            icon: Megaphone,
            title: "홍보게시판",
            subtitle: "직접적인 제품/서비스 홍보",
            description: "홍보게시판을 통해 제품/서비스를 직접적으로 알리고 상세 정보를 전달합니다.",
            features: [
                "직접적인 홍보 가능",
                "장기 노출 보장",
                "상세 정보 전달",
                "링크 삽입 가능"
            ]
        }
    ];

    return (
        <>
            <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-[#FF4B4B]/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <span className="text-[#FF4B4B] font-semibold text-lg font-tway mb-6 block">
                            에브리타임 마케팅 서비스
                        </span>
                        <h2 className="text-[3.5rem] leading-tight font-bold mb-6 font-aggro bg-gradient-to-r from-[#FF4B4B] to-[#FF7070] bg-clip-text text-transparent">
                            에브리타임 바이럴 마케팅
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-3xl"
                    >
                        <p className="text-2xl text-gray-700 font-tway leading-relaxed mb-10">
                            다양한 게시판을 활용한 효과적인
                            <br />
                            <span className="text-[#FF4B4B] font-semibold">홍보 마케팅을 진행합니다.</span>
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex items-center text-gray-700 group">
                                <ArrowRight className="w-6 h-6 text-[#FF4B4B] mr-3 group-hover:translate-x-1 transition-transform" />
                                <span className="text-lg font-tway">전국 397개 대학교 커버리지</span>
                            </div>
                            <div className="flex items-center text-gray-700 group">
                                <ArrowRight className="w-6 h-6 text-[#FF4B4B] mr-3 group-hover:translate-x-1 transition-transform" />
                                <span className="text-lg font-tway">450만+ 대학생 사용자 보유</span>
                            </div>
                            <div className="flex items-center text-gray-700 group">
                                <ArrowRight className="w-6 h-6 text-[#FF4B4B] mr-3 group-hover:translate-x-1 transition-transform" />
                                <span className="text-lg font-tway">학교별 맞춤형 마케팅 전략</span>
                            </div>
                            <div className="flex items-center text-gray-700 group">
                                <ArrowRight className="w-6 h-6 text-[#FF4B4B] mr-3 group-hover:translate-x-1 transition-transform" />
                                <span className="text-lg font-tway">실시간 모니터링 및 피드백</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-white to-[#FF4B4B]/5">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-aggro">
                            에브리타임 마케팅 서비스
                        </h2>
                        <p className="text-xl text-gray-600 font-tway">
                            다양한 게시판을 활용한 효과적인 마케팅 서비스를 제공합니다
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-[#FF4B4B]/20"
                            >
                                <div className="flex flex-col h-full">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-lg bg-[#FF4B4B]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF4B4B]/20 transition-colors duration-300">
                                            <product.icon className="w-6 h-6 text-[#FF4B4B]" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-1 font-aggro">
                                                {product.title}
                                            </h3>
                                            <p className="text-[#FF4B4B] font-bold">
                                                {product.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-6 font-tway">
                                        {product.description}
                                    </p>
                                    <div className="mt-auto">
                                        <ul className="space-y-3">
                                            {product.features.map((feature) => (
                                                <li
                                                    key={feature}
                                                    className="flex items-center gap-2 text-gray-600 group-hover:text-gray-900 transition-colors duration-300 font-tway"
                                                >
                                                    <span className="w-1.5 h-1.5 bg-[#FF4B4B] rounded-full" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}; 