import { motion } from "framer-motion";
import { Bot, Shield, Coins, Clock } from "lucide-react";

export function Features() {
    const features = [
        {
            icon: Bot,
            title: "전문가 작성",
            description: "각 분야 전문가들의 체계적인 프로세스로 정확하고 효과적인 사업계획서를 작성합니다."
        },
        {
            icon: Shield,
            title: "품질 보장",
            description: "전문가들의 꼼꼼한 검토로 완성도 높은 결과물을 보장합니다."
        },
        {
            icon: Coins,
            title: "합리적 비용",
            description: "체계적인 프로세스로 기존 대비 최대 3배까지 비용을 절감할 수 있습니다."
        },
        {
            icon: Clock,
            title: "신속한 작성",
            description: "평균 3일 이내 초안 작성, 1주일 이내 최종본 완성을 보장합니다."
        }
    ];

    return (
        <section className="py-20 relative overflow-hidden bg-gradient-to-br from-white to-blue-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-gray-900 mb-4 font-aggro"
                    >
                        주요 특징
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-600 font-tway"
                    >
                        업계에 대한 깊은 이해도와 전문성으로 사업계획서를 작성합니다
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                                scale: 1.02,
                                boxShadow: "0 10px 30px -10px rgba(0, 169, 255, 0.3)"
                            }}
                            className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center">
                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-14 h-14 rounded-full bg-[#00A9FF]/10 flex items-center justify-center mb-4 group-hover:bg-[#00A9FF]/20 transition-colors duration-300"
                                >
                                    <feature.icon className="w-7 h-7 text-[#00A9FF]" />
                                </motion.div>
                                <motion.h3
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00A9FF] transition-colors duration-300 font-aggro"
                                >
                                    {feature.title}
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300 font-tway"
                                >
                                    {feature.description}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 