import { motion } from "framer-motion";
import { Rocket, Building2, Landmark, ShoppingBag } from "lucide-react";

export function Industries() {
    const industries = [
        {
            icon: Rocket,
            title: "스타트업",
            description: "빠른 시장 진입과 확장을 위한 MVP 개발 및 스케일업 지원"
        },
        {
            icon: Building2,
            title: "기업",
            description: "기업 맞춤형 시스템 개발 및 레거시 시스템 현대화"
        },
        {
            icon: Landmark,
            title: "공공기관",
            description: "보안과 안정성이 검증된 공공 서비스 시스템 개발"
        },
        {
            icon: ShoppingBag,
            title: "커머스",
            description: "확장 가능한 이커머스 플랫폼 개발 및 결제 시스템 통합"
        }
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        적용 분야
                    </h2>
                    <p className="text-xl text-gray-600">
                        다양한 산업 분야에서 검증된 개발 서비스를 제공합니다
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-[#f8faff] p-8 rounded-2xl"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-14 h-14 rounded-full bg-[#626ae2]/10 flex items-center justify-center mb-4">
                                    <industry.icon className="w-7 h-7 text-[#626ae2]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {industry.title}
                                </h3>
                                <p className="text-gray-600">
                                    {industry.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 