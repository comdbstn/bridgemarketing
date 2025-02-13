import { motion } from "framer-motion";

const features = [
    {
        title: "맞춤형 타겟팅",
        value: "300%",
        description: "마케팅 효율 증가",
        subtext: "각 플랫폼별 특성을 고려한\n최적의 타겟팅 전략"
    },
    {
        title: "자연스러운 바이럴",
        value: "98%",
        description: "고객 만족도",
        subtext: "실제 유저들의 자연스러운\n입소문 마케팅"
    },
    {
        title: "검증된 성과",
        value: "92%",
        description: "재구매율",
        subtext: "수많은 성공 사례로\n입증된 마케팅 효과"
    }
];

export function Features() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.1),transparent_70%)]" />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-indigo-600/10 to-transparent blur-3xl"
                />
            </div>
            <div className="container mx-auto px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-6 py-3 bg-purple-500/10 rounded-full text-purple-400 text-sm mb-6 border border-purple-500/20 backdrop-blur-sm"
                    >
                        Marketing Paradigm
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                        마케팅의 새로운 관점을 제시합니다
                    </h2>
                    <p className="text-xl text-gray-400">경험, 분석, 기술이 합쳐진 마케팅</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-indigo-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                            <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-purple-500/10 group-hover:border-purple-500/30 rounded-2xl p-8 transition-all duration-500 h-full">
                                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                                    {feature.value}
                                </div>
                                <div className="text-xl text-gray-300 mb-6">{feature.description}</div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-500 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 whitespace-pre-line leading-relaxed">
                                    {feature.subtext}
                                </p>
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 