import { motion } from "framer-motion";

const stats = [
    {
        title: "개발 효율 증가",
        value: "300%",
        description: "AI 기반 자동화 시스템으로\n개발 효율성 대폭 향상"
    },
    {
        title: "배 빠른 개발",
        value: "3",
        description: "웹/모바일 앱, AI 솔루션 등\n다양한 분야의 프로젝트 수행"
    },
    {
        title: "배 저렴한 비용",
        value: "3",
        description: "높은 품질과 합리적인 비용으로\n고객 만족 실현"
    }
];

const achievements = [
    {
        value: "50+",
        label: "프로젝트 완수"
    },
    {
        value: "1.5개월",
        label: "평균 개발기간"
    },
    {
        value: "98%",
        label: "고객 만족도"
    },
    {
        value: "85%",
        label: "재계약률"
    }
];

export function Marketing() {
    return (
        <section className="py-32 relative overflow-hidden bg-gradient-to-b from-purple-900/20 to-black">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,80,220,0.15),transparent_70%)]" />
            </motion.div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-block px-6 py-2 bg-purple-500/10 rounded-full text-purple-300 text-sm border border-purple-500/20 backdrop-blur-sm font-tway mb-6"
                        >
                            New Perspective
                        </motion.span>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-aggro leading-tight">
                            AI 시대의 개발 비용<br />
                            이제는 달라져야 합니다
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto font-tway">
                            자체 개발 자동화 시스템으로<br />
                            AI의 기술 발전을 그대로 외주 비용에 녹여냈습니다
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className="absolute -inset-px bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                <div className="relative bg-purple-500/5 backdrop-blur-xl border border-purple-500/10 rounded-2xl p-8 hover:border-purple-500/20 transition-all duration-500">
                                    <h3 className="text-6xl font-bold text-white mb-4 font-aggro bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                                        {stat.value}
                                    </h3>
                                    <h4 className="text-xl font-bold text-white mb-3 font-aggro">{stat.title}</h4>
                                    <p className="text-gray-400 whitespace-pre-line font-tway">{stat.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={achievement.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-6 rounded-2xl bg-purple-500/5 border border-purple-500/10"
                            >
                                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2 font-aggro">
                                    {achievement.value}
                                </h3>
                                <p className="text-gray-400 font-tway">{achievement.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        </section>
    );
} 