import { motion } from "framer-motion";
import { Bot, TrendingUp, Users } from "lucide-react";

const stats = [
    {
        icon: Bot,
        title: "마케팅 효율 증가",
        value: "300%",
        description: "AI 기반 자동화 시스템으로\n마케팅 효율성 대폭 향상"
    },
    {
        icon: TrendingUp,
        title: "배 빠른 집행",
        value: "3",
        description: "AI와 자동화를 활용한\n신속한 마케팅 집행"
    },
    {
        icon: Users,
        title: "배 저렴한 비용",
        value: "3",
        description: "개발 외주 10만원부터\n합리적인 비용 제공"
    }
];

const achievements = [
    {
        value: "50+",
        label: "프로젝트 완수"
    },
    {
        value: "3일",
        label: "평균 집행 기간"
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
                            Marketing Innovation
                        </motion.span>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-aggro leading-tight">
                                <span className="bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
                                    AI 시대의 사업 추진
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                                    이제는 달라져야 합니다
                                </span>
                            </h2>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-xl text-gray-400 max-w-3xl mx-auto font-tway"
                        >
                            AI와 자동화를 활용한 KPI의 최적화<br />
                            기술 발전을 그대로 외주 비용 감소에 녹여냈습니다
                        </motion.p>
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
                                    <motion.div
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 }}
                                        className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500"
                                    >
                                        <stat.icon className="w-8 h-8 text-white" />
                                    </motion.div>
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.3 }}
                                    >
                                        <h3 className="text-6xl font-bold mb-4 font-aggro bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                                            {stat.value}
                                        </h3>
                                        <h4 className="text-xl font-bold text-white mb-3 font-aggro">{stat.title}</h4>
                                        <p className="text-gray-400 whitespace-pre-line font-tway">{stat.description}</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={achievement.label}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="relative group"
                            >
                                <div className="absolute -inset-px bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                <div className="relative text-center p-6 rounded-2xl bg-purple-500/5 border border-purple-500/10 group-hover:border-purple-500/30 transition-all duration-300">
                                    <motion.h3
                                        initial={{ y: 10, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 }}
                                        className="text-3xl sm:text-4xl font-bold mb-2 font-aggro bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
                                    >
                                        {achievement.value}
                                    </motion.h3>
                                    <motion.p
                                        initial={{ y: 10, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.3 }}
                                        className="text-gray-400 font-tway"
                                    >
                                        {achievement.label}
                                    </motion.p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        </section>
    );
} 