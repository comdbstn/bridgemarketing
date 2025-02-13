import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const Hero: React.FC = () => {
    const stats = [
        { number: "450만+", label: "월간 활성 사용자" },
        { number: "200+", label: "대학교 커뮤니티" },
        { number: "99%", label: "광고 만족도" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3,
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 },
        },
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FF4B4B] via-[#FF6B6B] to-[#FF7070]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative pt-20 sm:pt-0">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto text-center"
                >
                    <div className="space-y-8">
                        <motion.p
                            variants={itemVariants}
                            className="font-['Changa'] text-[28px] sm:text-[50px] font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 select-none"
                        >
                            BRIDGE MARKETING
                        </motion.p>
                        <motion.div variants={itemVariants} className="flex items-center justify-center gap-12">
                            <img src="/logo/everytime.png" alt="에브리타임 로고" className="h-28 rounded-2xl" />
                            <h1 className="font-['Changa'] text-[50px] sm:text-[130px] font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/80 select-none leading-none">
                                EVERYTIME
                            </h1>
                        </motion.div>
                        <motion.div variants={itemVariants} className="space-y-4">
                            <h2 className="text-3xl sm:text-5xl font-bold text-white font-aggro">
                                대학생 커뮤니티 마케팅의 새로운 기준
                            </h2>
                            <p className="text-lg sm:text-xl text-white/90 px-4 font-tway">
                                450만 대학생이 사용하는 에브리타임에서 시작하세요.
                                <br className="hidden sm:block" />
                                자연스러운 게시글로 신뢰도 높은 마케팅을 진행합니다.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-8"
                        >
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="p-4 sm:p-6 mx-4 sm:mx-0 bg-white/10 backdrop-blur-sm rounded-lg border border-white/30 hover:border-white/40 transition-all duration-300 group"
                                >
                                    <h3 className="text-2xl sm:text-4xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300 font-aggro text-white">
                                        {stat.number}
                                    </h3>
                                    <p className="text-white/90">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div variants={itemVariants} className="mt-8 pb-16">
                            <a
                                href="http://pf.kakao.com/_CYGdn/chat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-white/90 text-[#FF4B4B] rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
                            >
                                <MessageCircle className="w-5 h-5" />더 빠른 성장을 원하시나요?
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}; 
