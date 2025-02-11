import { motion } from "framer-motion";
import { Users, Target, TrendingUp, BarChart } from "lucide-react";

export function Features() {
    const features = [
        {
            icon: Users,
            title: "대학생 타겟팅",
            description: "전국 397개 대학교의 재학생들을 대상으로 정확한 타겟 마케팅이 가능합니다."
        },
        {
            icon: Target,
            title: "정확한 도달",
            description: "학교별, 학과별, 학년별 등 세분화된 타겟팅으로 높은 광고 효율을 제공합니다."
        },
        {
            icon: TrendingUp,
            title: "높은 참여율",
            description: "대학생들의 일상 속 필수 앱으로, 자연스러운 바이럴 효과를 기대할 수 있습니다."
        },
        {
            icon: BarChart,
            title: "실시간 분석",
            description: "게시물 반응과 참여도를 실시간으로 분석하여 마케팅 효과를 측정합니다."
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
                        대학생 마케팅을 위한 최적의 플랫폼
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
                                boxShadow: "0 10px 30px -10px rgba(240, 62, 62, 0.3)"
                            }}
                            className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center">
                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-14 h-14 rounded-full bg-[#f03e3e]/10 flex items-center justify-center mb-4 group-hover:bg-[#f03e3e]/20 transition-colors duration-300"
                                >
                                    <feature.icon className="w-7 h-7 text-[#f03e3e]" />
                                </motion.div>
                                <motion.h3
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#f03e3e] transition-colors duration-300"
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
