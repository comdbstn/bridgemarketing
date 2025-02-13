import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
    {
        title: "사업계획서 첨삭",
        description: "전문가의 체계적인 프로세스로 성공적인 사업계획서를 작성합니다",
        image: "/images/business-plan.jpg",
        link: "/business-plan",
        color: "from-blue-600 to-indigo-600",
        bgColor: "from-blue-600/10 to-indigo-600/10"
    },
    {
        title: "개발 외주",
        description: "AI 기반 개발 플랫폼으로 최고의 프로덕트를 합리적인 가격에 제공합니다",
        image: "/images/boltlab.jpg",
        link: "/boltlab",
        color: "from-purple-600 to-indigo-600",
        bgColor: "from-purple-600/10 to-indigo-600/10"
    },
    {
        title: "에브리타임",
        description: "450만 대학생이 사용하는 에브리타임에서 효과적인 마케팅을 진행합니다",
        image: "/images/everytime.jpg",
        link: "/everytime",
        color: "from-red-500 to-red-600",
        bgColor: "from-red-500/10 to-red-600/10"
    },
    {
        title: "블라인드",
        description: "800만 직장인이 사용하는 블라인드에서 자연스러운 바이럴마케팅을 진행합니다",
        image: "/images/blind.jpg",
        link: "/blind",
        color: "from-blue-500 to-blue-600",
        bgColor: "from-blue-500/10 to-blue-600/10"
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
                        className="text-center mb-16"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-block px-6 py-2 bg-purple-500/10 rounded-full text-purple-300 text-sm border border-purple-500/20 backdrop-blur-sm font-tway mb-6"
                        >
                            Our Services
                        </motion.span>
                        <h2 className="text-4xl font-bold text-white mb-4 font-aggro">
                            브릿지마케팅의 서비스
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-tway">
                            성공적인 비즈니스를 위한 최적의 솔루션을 제공합니다
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link to={service.link} className="block group">
                                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black p-1">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                                            <div className="aspect-[16/9] relative overflow-hidden">
                                                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-20`} />
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                                            </div>
                                            <div className="p-8">
                                                <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${service.color} bg-clip-text text-transparent font-aggro`}>
                                                    {service.title}
                                                </h3>
                                                <p className="text-gray-400 font-tway leading-relaxed">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
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