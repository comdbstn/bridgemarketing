import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20">
            <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-indigo-600/10 to-purple-600/10"
                animate={{
                    opacity: [0.3, 0.4, 0.3]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            <div className="container mx-auto px-4 relative">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                            duration: 0.3,
                            type: "spring",
                            stiffness: 150 
                        }}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 }
                        }}
                        className="inline-block px-6 py-3 bg-purple-500/10 rounded-full text-purple-400 text-sm mb-8 border border-purple-500/20 backdrop-blur-sm"
                    >
                        Bridge Marketing
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.4,
                            type: "spring",
                            stiffness: 150
                        }}
                        className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-500 to-indigo-500 bg-clip-text text-transparent font-aggro leading-tight"
                    >
                        Your bridge to success
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="text-xl md:text-2xl text-gray-400 mb-12 font-medium"
                    >
                        사업 성공을 위한 A to Z 솔루션
                        <br />
                        정확한 데이터와 KPI로 가치를 전달합니다
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <a
                            href="http://pf.kakao.com/_CYGdn/chat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-tway text-lg overflow-hidden"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600"
                                initial={false}
                                whileHover={{
                                    opacity: [0, 1],
                                    transition: { duration: 0.3 }
                                }}
                            />
                            <motion.div
                                className="relative flex items-center"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                문의하기
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </motion.div>
                        </a>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <Link
                                to="/service"
                                className="group relative px-8 py-4 border-2 border-purple-600/50 text-purple-400 rounded-xl font-tway text-lg overflow-hidden block"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-purple-600/10"
                                    initial={false}
                                    whileHover={{
                                        opacity: [0, 1],
                                        transition: { duration: 0.3 }
                                    }}
                                />
                                <span className="relative">서비스 알아보기</span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 