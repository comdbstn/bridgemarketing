import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Products() {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-black/5 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <span className="text-black font-semibold text-lg font-tway mb-6 block">
                        TIKTOK SEEDING
                    </span>
                    <h2 className="text-[3.5rem] leading-tight font-bold mb-6 font-aggro bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                        틱톡 시딩
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="max-w-3xl"
                >
                    <p className="text-2xl text-gray-700 font-tway leading-relaxed mb-10">
                        이전에 없었던
                        <br />
                        <span className="text-black font-semibold">놀라운 마케팅 상품, 틱톡 시딩</span>을 소개합니다.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-center text-gray-700 group">
                            <ArrowRight className="w-6 h-6 text-black mr-3 group-hover:translate-x-1 transition-transform" />
                            <span className="text-lg font-tway">MZ세대를 사로잡는 숏폼 콘텐츠</span>
                        </div>
                        <div className="flex items-center text-gray-700 group">
                            <ArrowRight className="w-6 h-6 text-black mr-3 group-hover:translate-x-1 transition-transform" />
                            <span className="text-lg font-tway">자연스러운 바이럴로 높은 전환율</span>
                        </div>
                        <div className="flex items-center text-gray-700 group">
                            <ArrowRight className="w-6 h-6 text-black mr-3 group-hover:translate-x-1 transition-transform" />
                            <span className="text-lg font-tway">압도적인 비용 효율의 마케팅</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 