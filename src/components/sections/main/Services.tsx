import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
    {
        icon: "/logo/business-plan.png",
        title: "사업계획서 첨삭",
        description: "정부지원사업 전문 컨설팅",
        features: [
            "1,600종 커버",
            "92% 합격률",
            "맞춤형 첨삭",
            "전문가 상담"
        ],
        gradient: "from-[#626ae2] to-[#95c5fa]",
        link: "/business-plan"
    },
    {
        icon: "/logo/boltlab.png",
        title: "개발 외주",
        description: "AI AgentForce 개발 에이전시",
        features: [
            "53% 효율 증가",
            "3배 빠른 개발",
            "3배 저렴한 비용",
            "품질 보장"
        ],
        gradient: "from-[#626ae2] to-[#95c5fa]",
        link: "/boltlab"
    },
    {
        icon: "/logo/everytime.png",
        title: "에브리타임",
        description: "대학생 커뮤니티 1위",
        features: [
            "대학생 타겟팅",
            "실시간 분석",
            "맞춤형 컨텐츠",
            "높은 전환율"
        ],
        gradient: "from-[#F44336] to-[#FF9800]",
        link: "/everytime"
    },
    {
        icon: "/logo/navercafe.png",
        title: "네이버 카페",
        description: "맘카페, 지역, 취준생 타겟팅",
        features: [
            "타겟 분석",
            "자연스러운 바이럴",
            "실시간 모니터링",
            "높은 도달률"
        ],
        gradient: "from-[#03C75A] to-[#00B843]",
        link: "/naver-cafe"
    },
    {
        icon: "/logo/naverplace.png",
        title: "네이버 플레이스",
        description: "지도 노출 최적화",
        features: [
            "트래픽 증가",
            "상위노출 최적화",
            "실시간 순위 분석",
            "리뷰 관리"
        ],
        gradient: "from-[#03C75A] to-[#00B843]",
        link: "/naver-place"
    },
    {
        icon: "/logo/tiktok.png",
        title: "틱톡",
        description: "MZ세대 타겟 바이럴 마케팅",
        features: [
            "MZ 타겟팅",
            "높은 전환율",
            "숏폼 컨텐츠",
            "뷰티, 성형, 화장품"
        ],
        gradient: "from-[#00F2EA] to-[#FF0050]",
        link: "/tiktok"
    }
];

export function Services() {
    return (
        <section className="py-32 relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="container mx-auto px-4"
            >
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-6 py-3 bg-purple-500/10 rounded-full text-purple-400 text-sm mb-6 border border-purple-500/20 backdrop-blur-sm"
                    >
                        Our Services
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl md:text-4xl font-bold mb-6 text-white"
                    >
                        사업 성공을 위한 모든 수단
                        <br />
                        브릿지마케팅에 있습니다.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 text-lg mb-16"
                    >
                        기획부터 개발, 마케팅까지
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-indigo-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                            <Link 
                                to={service.link}
                                className="block relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 transform-gpu hover:-translate-y-1"
                            >
                                <div className={`p-8 bg-gradient-to-br ${service.gradient} relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                                    <img 
                                        src={service.icon}
                                        alt={service.title}
                                        className="h-12 w-12 object-contain mb-4"
                                    />
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-700">{service.description}</p>
                                </div>

                                <div className="p-6">
                                    <ul className="space-y-3">
                                        {service.features.map((feature, fIndex) => (
                                            <motion.li
                                                key={fIndex}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.6 + fIndex * 0.1 }}
                                                className="flex items-start gap-2 text-gray-400 group-hover:text-gray-300 transition-colors"
                                            >
                                                <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-2" />
                                                <span>{feature}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="flex justify-center mt-12"
                >
                    <Link
                        to="/service"
                        className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative flex items-center">
                            서비스 전체보기
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
} 