import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

// 로고 이미지 배열 생성
const logos = Array.from({ length: 47 }, (_, i) => `/logo/${i}.png`);

export function Hero() {
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const scroll = () => {
            if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth)) {
                slider.scrollLeft = 0;
            } else {
                slider.scrollLeft += 1;
            }
        };

        const interval = setInterval(scroll, 30);
        return () => clearInterval(interval);
    }, []);

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
                animate={{ opacity: 0.4 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,80,220,0.15),transparent_50%)]" />
            </motion.div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <span className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full text-purple-300 text-sm border border-purple-500/20 backdrop-blur-sm font-tway tracking-wide">
                            Bridge Marketing
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl sm:text-7xl font-bold mb-8 font-aggro"
                    >
                        <span className="bg-gradient-to-r from-white via-purple-300 to-indigo-400 bg-clip-text text-transparent">
                            Your bridge to success
                        </span>
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
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
                    >
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <a
                                href="http://pf.kakao.com/_CYGdn/chat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl font-tway text-lg overflow-hidden shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow duration-300"
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

                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Link
                                to="/service"
                                className="group relative inline-flex items-center px-8 py-4 bg-purple-500/10 text-purple-300 rounded-2xl font-tway text-lg overflow-hidden border border-purple-500/30 hover:border-purple-500/50 transition-colors duration-300"
                            >
                                <span className="relative z-10">서비스 알아보기</span>
                                <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="grid grid-cols-2 gap-8 max-w-2xl mx-auto mb-20"
                    >
                        <div className="text-center p-6 rounded-2xl bg-purple-500/5 border border-purple-500/10">
                            <h3 className="text-4xl font-bold text-white mb-2 font-aggro">716<span className="text-purple-400">+</span></h3>
                            <p className="text-gray-400 font-tway">누적 고객사</p>
                        </div>
                        <div className="text-center p-6 rounded-2xl bg-purple-500/5 border border-purple-500/10">
                            <h3 className="text-4xl font-bold text-white mb-2 font-aggro">13,000<span className="text-purple-400">+</span></h3>
                            <p className="text-gray-400 font-tway">총 업로드</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Logo Slider */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute bottom-0 left-0 right-0 overflow-hidden py-12 bg-gradient-to-t from-black/80 to-transparent"
            >
                <div
                    ref={sliderRef}
                    className="flex gap-8 overflow-x-hidden whitespace-nowrap"
                    style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
                >
                    {[...logos, ...logos].map((logo, index) => (
                        <motion.img
                            key={index}
                            src={logo}
                            alt={`Client Logo ${index}`}
                            className="h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                            style={{ minWidth: '120px' }}
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                            }}
                        />
                    ))}
                </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        </section>
    );
} 