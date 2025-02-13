import { motion } from "framer-motion";
import { Bot, TrendingUp, Users } from "lucide-react";

export function References() {
    return (
        <section className="py-32 relative overflow-hidden bg-gradient-to-b from-black to-purple-900/20">
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

                <div className="space-y-16">
                    {[1, 2, 3].map((row, rowIndex) => (
                        <motion.div
                            key={rowIndex}
                            initial={{ opacity: 0, x: rowIndex === 1 ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex gap-12 items-center"
                        >
                            {Array.from({ length: 15 }, (_, i) => `/logo/${i + rowIndex * 15}.png`).map((logo, index) => (
                                <motion.div
                                    key={index}
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
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        </section>
    );
} 