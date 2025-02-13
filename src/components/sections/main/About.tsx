import { motion } from "framer-motion";
import { Bot, TrendingUp, Users } from "lucide-react";

const features = [
    {
        icon: Bot,
        title: "AI 기반 가격 경쟁력",
        description: "최신 AI 기술을 활용하여 효율적인 마케팅 전략을 수립하고, 합리적인 가격으로 최고의 서비스를 제공합니다.",
        gradient: "from-purple-400 to-pink-400"
    },
    {
        icon: TrendingUp,
        title: "데이터 기반 성과 분석",
        description: "전문 개발자들이 구축한 시스템으로 실시간 KPI 분석 및 최적화를 진행하여 최상의 결과를 도출합니다.",
        gradient: "from-blue-400 to-indigo-400"
    },
    {
        icon: Users,
        title: "창업가의 시선",
        description: "직접 창업을 경험한 팀원들이 여러분의 사업을 자신의 일처럼 생각하고, 진정한 성장 파트너가 되어드립니다.",
        gradient: "from-purple-400 to-indigo-400"
    }
];

export function About() {
    return (
        <section className="py-32 relative overflow-hidden bg-gradient-to-b from-purple-900/20 to-black">
            {/* Background Elements */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,80,220,0.3),transparent_70%)]" />
            </motion.div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="text-center mb-20">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-block px-8 py-3 bg-purple-500/10 rounded-full text-purple-300 text-lg border-2 border-purple-500/20 backdrop-blur-sm font-tway mb-8"
                        >
                            About Us
                        </motion.span>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-5xl sm:text-6xl font-bold mb-8 font-aggro">
                                <span className="bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
                                    브릿지마케팅은
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                                    어떤 기업인가요?
                                </span>
                            </h2>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-xl text-gray-400 font-tway max-w-3xl mx-auto leading-relaxed"
                        >
                            기술과 경험을 바탕으로<br />
                            여러분의 사업에 실질적인 가치를 더하는 마케팅 파트너입니다
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative group"
                            >
                                <div className="absolute -inset-px bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                <div className="relative bg-purple-500/5 backdrop-blur-xl border-2 border-purple-500/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-500">
                                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                        <feature.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 font-aggro">{feature.title}</h3>
                                    <p className="text-gray-400 leading-relaxed font-tway">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        </section>
    );
} 