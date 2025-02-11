import { motion } from "framer-motion";
import { FileText, FileCheck, FileSearch } from "lucide-react";

export function Products() {
    const products = [
        {
            icon: <FileText className="w-12 h-12 text-[#626ae2]" />,
            title: "사업계획서 작성",
            description: "정부지원사업 사업계획서 작성 대행",
            features: [
                "정부지원사업 약 1,600종 커버",
                "사업계획서 작성 전문가 직접 작성",
                "사업 아이템 분석 및 컨설팅",
                "맞춤형 사업계획서 작성",
            ],
        },
        {
            icon: <FileCheck className="w-12 h-12 text-[#626ae2]" />,
            title: "사업계획서 첨삭",
            description: "기존 사업계획서 첨삭 및 보완",
            features: [
                "전문가의 상세한 첨삭",
                "사업계획서 보완점 분석",
                "심사기준에 맞춘 수정 제안",
                "합격률 향상을 위한 조언",
            ],
        },
        {
            icon: <FileSearch className="w-12 h-12 text-[#626ae2]" />,
            title: "사업계획서 컨설팅",
            description: "1:1 맞춤형 사업계획서 컨설팅",
            features: [
                "사업 아이템 경쟁력 분석",
                "시장성 및 사업성 검토",
                "재무계획 수립 지원",
                "정부지원사업 선정 전략",
            ],
        },
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
                        전문가의 노하우로 완성하는 맞춤형 사업계획서
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-6">{product.icon}</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {product.title}
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    {product.description}
                                </p>
                                <ul className="space-y-3 text-left w-full">
                                    {product.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center text-gray-700"
                                        >
                                            <svg
                                                className="w-5 h-5 text-[#626ae2] mr-3"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            {feature}
                                        </li>
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