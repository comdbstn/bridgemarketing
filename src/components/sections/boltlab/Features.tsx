import { motion } from "framer-motion";
import { Bot, Shield, Coins, Clock } from "lucide-react";

export function Features() {
    const features = [
        {
            icon: Bot,
            title: "AI 기반 개발",
            description: "최신 AI 기술을 활용한 효율적인 개발 프로세스로 빠르고 정확한 결과물을 제공합니다."
        },
        {
            icon: Shield,
            title: "품질 보장",
            description: "체계적인 테스트와 코드 리뷰를 통해 안정적이고 높은 품질의 서비스를 보장합니다."
        },
        {
            icon: Coins,
            title: "비용 절감",
            description: "AI 기술과 효율적인 프로세스를 통해 기존 대비 최대 3배까지 개발 비용을 절감합니다."
        },
        {
            icon: Clock,
            title: "신속한 대응",
            description: "24시간 모니터링과 즉각적인 이슈 대응으로 안정적인 서비스 운영을 지원합니다."
        }
    ];

    return (
        <section className="py-20 bg-[#f8faff]">
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
                        className="text-4xl font-bold text-gray-900 mb-4"
                    >
                        주요 특징
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-600"
                    >
                        최신 기술과 전문성으로 최고의 서비스를 제공합니다
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                                scale: 1.02,
                                boxShadow: "0 10px 30px -10px rgba(98, 106, 226, 0.3)"
                            }}
                            className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center">
                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-14 h-14 rounded-full bg-[#626ae2]/10 flex items-center justify-center mb-4 group-hover:bg-[#626ae2]/20 transition-colors duration-300"
                                >
                                    <feature.icon className="w-7 h-7 text-[#626ae2]" />
                                </motion.div>
                                <motion.h3
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#626ae2] transition-colors duration-300"
                                >
                                    {feature.title}
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300"
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