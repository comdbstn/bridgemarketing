import { motion } from "framer-motion";
import { MessageSquare, Megaphone, BookOpen, Briefcase } from "lucide-react";

export function Products() {
    const products = [
        {
            icon: MessageSquare,
            title: "자유게시판",
            subtitle: "자연스러운 바이럴 마케팅",
            price: "₩30,000~",
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
            price: "₩50,000~",
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
            price: "₩40,000~",
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
            price: "₩45,000~",
            features: [
                "채용 공고 등록",
                "상세 근무 조건",
                "지원자 관리",
                "기업 정보 노출"
            ]
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        서비스 소개
                    </h2>
                    <p className="text-lg text-gray-600">
                        다양한 게시판을 활용한 효과적인 마케팅 서비스
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-[#f03e3e]/20"
                        >
                            <div className="flex flex-col items-center text-center">
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-14 h-14 rounded-full bg-[#f03e3e]/10 flex items-center justify-center mb-4 group-hover:bg-[#f03e3e]/20 transition-colors duration-300"
                                >
                                    <product.icon className="w-7 h-7 text-[#f03e3e]" />
                                </motion.div>
                                <motion.h3
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-xl font-bold text-gray-900 mb-2"
                                >
                                    {product.title}
                                </motion.h3>
                                <p className="text-gray-600 mb-2">
                                    {product.subtitle}
                                </p>
                                <motion.p
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-[#f03e3e] font-bold mb-4"
                                >
                                    {product.price}
                                </motion.p>
                                <ul className="space-y-2 text-left w-full">
                                    {product.features.map((feature, featureIndex) => (
                                        <motion.li
                                            key={feature}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-center text-gray-600 group-hover:text-gray-900 transition-colors duration-300"
                                        >
                                            <motion.span
                                                whileHover={{ scale: 1.5 }}
                                                transition={{ duration: 0.3 }}
                                                className="w-1.5 h-1.5 bg-[#f03e3e] rounded-full mr-2"
                                            />
                                            {feature}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 