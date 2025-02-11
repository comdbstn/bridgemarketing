import { motion } from "framer-motion";
import { Globe, Smartphone, Code, Brain } from "lucide-react";

export function Products() {
    const products = [
        {
            icon: Globe,
            title: "홈/랜딩페이지",
            subtitle: "매력적인 브랜드 경험 제공",
            price: "₩100,000~",
            features: [
                "반응형 디자인",
                "최적화된 성능",
                "모던한 UI/UX",
                "Analytics 트래킹"
            ]
        },
        {
            icon: Code,
            title: "웹 플랫폼",
            subtitle: "확장 가능한 웹 서비스 개발",
            price: "₩400,000~",
            features: [
                "SaaS 플랫폼",
                "커머스 솔루션",
                "맞춤형 웹 서비스",
                "실시간 데이터 처리"
            ]
        },
        {
            icon: Smartphone,
            title: "모바일 앱",
            subtitle: "iOS/Android 앱 개발",
            price: "₩700,000~",
            features: [
                "네이티브 앱",
                "크로스플랫폼 앱",
                "하이브리드 앱",
                "PWA"
            ]
        },
        {
            icon: Brain,
            title: "AI 솔루션",
            subtitle: "인공지능 서비스 통합",
            price: "₩1,000,000~",
            features: [
                "LLM 통합",
                "머신러닝 모델",
                "데이터 분석",
                "AI 워크플로우"
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
                        최신 기술과 전문성으로 최고의 서비스를 제공합니다
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
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-14 h-14 rounded-full bg-[#626ae2]/10 flex items-center justify-center mb-4">
                                    <product.icon className="w-7 h-7 text-[#626ae2]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {product.title}
                                </h3>
                                <p className="text-gray-600 mb-2">
                                    {product.subtitle}
                                </p>
                                <p className="text-[#626ae2] font-bold mb-4">
                                    {product.price}
                                </p>
                                <ul className="space-y-2 text-left w-full">
                                    {product.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-center text-gray-600"
                                        >
                                            <span className="w-1.5 h-1.5 bg-[#626ae2] rounded-full mr-2" />
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