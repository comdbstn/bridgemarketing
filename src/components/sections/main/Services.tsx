import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, Code, GraduationCap, Building2, ArrowRight } from "lucide-react";

const services = [
    {
        icon: FileText,
        title: "사업계획서 첨삭",
        description: "전문가의 체계적인 프로세스로 성공적인 사업계획서를 작성합니다",
        link: "/business-plan",
        gradient: "from-blue-400 to-indigo-400",
        features: ["전문가 작성", "품질 보장", "합리적 비용", "신속한 작성"]
    },
    {
        icon: Code,
        title: "개발 외주",
        description: "AI 기반 개발 플랫폼으로 최고의 프로덕트를 합리적인 가격에 제공합니다",
        link: "/boltlab",
        gradient: "from-purple-400 to-indigo-400",
        features: ["AI 기반 개발", "빠른 개발 속도", "저렴한 비용", "높은 품질"]
    },
    {
        icon: GraduationCap,
        title: "에브리타임",
        description: "450만 대학생이 사용하는 에브리타임에서 효과적인 마케팅을 진행합니다",
        link: "/everytime",
        gradient: "from-red-400 to-pink-400",
        features: ["대학생 타겟팅", "높은 도달률", "실시간 피드백", "데이터 분석"]
    },
    {
        icon: Building2,
        title: "블라인드",
        description: "800만 직장인이 사용하는 블라인드에서 자연스러운 바이럴마케팅을 진행합니다",
        link: "/blind",
        gradient: "from-blue-400 to-cyan-400",
        features: ["직장인 타겟팅", "자연스러운 바이럴", "높은 신뢰도", "실시간 모니터링"]
    }
];

export function Services() {
    return (
        <section className="py-32 relative overflow-hidden bg-gradient-to-b from-black to-purple-900/20">
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
                            className="inline-block px-8 py-3 bg-purple-500/10 rounded-full text-purple-300 text-lg border-2 border-purple-500/20 backdrop-blur-sm font-tway mb-8"
                        >
                            Our Services
                        </motion.span>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-5xl sm:text-6xl font-bold mb-8 font-aggro">
                                <span className="bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
                                    브릿지마케팅의
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                                    서비스
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
                            성공적인 비즈니스를 위한 최적의 솔루션을 제공합니다
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"
                            >
                                <Link to={service.link} className="block">
                                    <div className="absolute -inset-px bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                    <div className="relative bg-purple-500/5 backdrop-blur-xl border-2 border-purple-500/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-500">
                                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                            <service.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className={`text-2xl font-bold mb-4 font-aggro bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-400 font-tway mb-8">
                                            {service.description}
                                        </p>
                                        <div className="grid grid-cols-2 gap-4">
                                            {service.features.map((feature, i) => (
                                                <div key={i} className="flex items-center gap-2">
                                                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                                                    <span className="text-sm text-gray-400 font-tway">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="flex justify-center mt-16"
                    >
                        <Link
                            to="/service"
                            className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl font-tway text-lg overflow-hidden shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
                        >
                            <span className="relative z-10 flex items-center">
                                서비스 전체보기
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        </section>
    );
} 