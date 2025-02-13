import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

const glowAnimation = {
    opacity: [0.4, 0.6, 0.4],
    scale: [1, 1.2, 1],
    transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-indigo-900/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            />
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={glowAnimation}
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,80,220,0.15),transparent_50%)]" />
            </motion.div>

            {/* Animated Background Shapes */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
                animate={glowAnimation}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"
                animate={{
                    ...glowAnimation,
                    transition: { ...glowAnimation.transition, delay: 1 }
                }}
            />

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full text-purple-300 text-sm border border-purple-500/20 backdrop-blur-sm font-tway tracking-wide"
                        >
                            Bridge Marketing
                        </motion.span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl sm:text-7xl font-bold mb-8 font-aggro"
                    >
                        <motion.span
                            animate={floatingAnimation}
                            className="inline-block bg-gradient-to-r from-white via-purple-300 to-indigo-400 bg-clip-text text-transparent"
                        >
                            Your bridge to success
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-xl sm:text-2xl text-gray-400 mb-12 font-tway leading-relaxed"
                    >
                        사업 성공을 위한 A to Z 솔루션
                        <br />
                        정확한 데이터와 KPI로 가치를 전달합니다
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <motion.div 
                            whileHover={{ scale: 1.02 }} 
                            whileTap={{ scale: 0.98 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-300" />
                            <a
                                href="http://pf.kakao.com/_CYGdn/chat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl font-tway text-lg overflow-hidden shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow duration-300"
                            >
                                <span className="relative z-10 flex items-center">
                                    문의하기
                                    <motion.div
                                        className="ml-2"
                                        initial={{ x: 0 }}
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.div>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </a>
                        </motion.div>

                        <motion.div 
                            whileHover={{ scale: 1.02 }} 
                            whileTap={{ scale: 0.98 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-300" />
                            <Link
                                to="/service"
                                className="relative group inline-flex items-center px-8 py-4 bg-purple-500/10 text-purple-300 rounded-2xl font-tway text-lg overflow-hidden border border-purple-500/30 hover:border-purple-500/50 transition-colors duration-300"
                            >
                                <span className="relative z-10">서비스 알아보기</span>
                                <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        </section>
    );
} 