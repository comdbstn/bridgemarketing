import React from "react";
import { motion } from "framer-motion";
import { Users, Target, TrendingUp, BarChart } from "lucide-react";

export const Features: React.FC = () => {
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
        <section className="py-20 bg-gradient-to-br from-[#FF4B4B]/5 to-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 font-aggro">
                        에브리타임 마케팅의 특징
                    </h2>
                    <p className="text-xl text-gray-600 font-tway">
                        대학생 마케팅을 위한 최적의 플랫폼을 제공합니다
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-[#FF4B4B]/20"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[#FF4B4B]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF4B4B]/20 transition-colors duration-300">
                                    <feature.icon className="w-6 h-6 text-[#FF4B4B]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-aggro">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 font-tway">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
