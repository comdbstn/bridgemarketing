import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Bot, TrendingUp, Users } from "lucide-react";

// 로고 이미지 배열 생성 (3줄)
const logoRows = [
    Array.from({ length: 15 }, (_, i) => `/logo/${i}.png`),
    Array.from({ length: 15 }, (_, i) => `/logo/${i + 15}.png`),
    Array.from({ length: 15 }, (_, i) => `/logo/${i + 30}.png`)
];

const features = [
    {
        icon: Bot,
        title: "AI 기반 가격 경쟁력",
        description: "최신 AI 기술을 활용하여 효율적인 마케팅 전략을 수립하고, 합리적인 가격으로 최고의 서비스를 제공합니다."
    },
    {
        icon: TrendingUp,
        title: "데이터 기반 성과 분석",
        description: "전문 개발자들이 구축한 시스템으로 실시간 KPI 분석 및 최적화를 진행하여 최상의 결과를 도출합니다."
    },
    {
        icon: Users,
        title: "창업가의 시선",
        description: "직접 창업을 경험한 팀원들이 여러분의 사업을 자신의 일처럼 생각하고, 진정한 성장 파트너가 되어드립니다."
    }
];

export function References() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const row1Translate = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const row2Translate = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const row3Translate = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <section ref={containerRef} className="py-32 relative overflow-hidden bg-gradient-to-b from-black to-purple-900/20">
            {/* Background Elements */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,80,220,0.15),transparent_70%)]" />
            </motion.div>

            <div className="container mx-auto px-4 relative z-10">
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
                        References
                    </motion.span>
                    <h2 className="text-4xl font-bold text-white mb-4 font-aggro">
                        마케팅의 새로운 관점을 제시합니다
                    </h2>
                    <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
                        <div className="text-center p-6 rounded-2xl bg-purple-500/5 border border-purple-500/10">
                            <h3 className="text-4xl font-bold text-white mb-2 font-aggro">716<span className="text-purple-400">+</span></h3>
                            <p className="text-gray-400 font-tway">누적 고객사</p>
                        </div>
                        <div className="text-center p-6 rounded-2xl bg-purple-500/5 border border-purple-500/10">
                            <h3 className="text-4xl font-bold text-white mb-2 font-aggro">13,000<span className="text-purple-400">+</span></h3>
                            <p className="text-gray-400 font-tway">총 업로드</p>
                        </div>
                    </div>
                </motion.div>

                <div className="space-y-16 mb-32">
                    {logoRows.map((logos, rowIndex) => (
                        <motion.div
                            key={rowIndex}
                            style={{ 
                                x: rowIndex === 1 ? row2Translate : rowIndex === 2 ? row3Translate : row1Translate
                            }}
                            className="flex gap-12 items-center"
                        >
                            {[...logos, ...logos].map((logo, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.1 }}
                                    className="relative group"
                                >
                                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg blur-lg group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
                                    <img
                                        src={logo}
                                        alt={`Client Logo ${index}`}
                                        className="h-12 w-auto object-contain relative filter grayscale hover:grayscale-0 transition-all duration-500"
                                        style={{ minWidth: '120px' }}
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                        }}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    ))}
                </div>

                {/* Company Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-block px-6 py-2 bg-purple-500/10 rounded-full text-purple-300 text-sm border border-purple-500/20 backdrop-blur-sm font-tway mb-6"
                        >
                            About Us
                        </motion.span>
                        <h2 className="text-4xl font-bold text-white mb-4 font-aggro">
                            브릿지마케팅은 어떤 기업인가요?
                        </h2>
                        <p className="text-gray-400 text-lg font-tway max-w-3xl mx-auto">
                            기술과 경험을 바탕으로 여러분의 사업에 실질적인 가치를 더하는 마케팅 파트너입니다
                        </p>
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
                                <div className="relative bg-purple-500/5 backdrop-blur-xl border border-purple-500/10 rounded-2xl p-8 hover:border-purple-500/20 transition-all duration-500">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <feature.icon className="w-7 h-7 text-white" />
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