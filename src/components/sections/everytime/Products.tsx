import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Megaphone, BookOpen, Briefcase } from "lucide-react";

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
        },
        {
            icon: BookOpen,
            title: "책방",
            subtitle: "중고거래 플랫폼 활용",
            description: "중고거래 플랫폼을 활용하여 제품을 판매하고 구매자와 직접 소통합니다.",
            features: [
                "제품 판매 가능",
                "가격 정보 노출",
                "구매자 직접 소통",
                "재고 관리 기능"
            ]
        },
        {
            icon: Briefcase,
            title: "아르바이트",
            subtitle: "채용 정보 홍보",
            description: "아르바이트 게시판을 통해 채용 정보를 홍보하고 지원자를 관리합니다.",
            features: [
                "채용 공고 등록",
                "상세 근무 조건",
                "지원자 관리",
                "기업 정보 노출"
            ]
        }
    ];

    return (
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
    );
}; 