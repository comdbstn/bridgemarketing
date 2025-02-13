import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Products() {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-[#626ae2]/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <span className="text-[#626ae2] font-semibold text-lg font-tway mb-6 block">
                        AI AGENTFORCE DEVELOPMENT
                    </span>
                    <h2 className="text-[3.5rem] leading-tight font-bold mb-6 font-aggro bg-gradient-to-r from-[#626ae2] to-[#95c5fa] bg-clip-text text-transparent">
                        AI 기반 개발 외주
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
                        AgentForce AI 개발 플랫폼을 통해
                        <br />
                        <span className="text-[#626ae2] font-semibold">최고의 프로덕트를, 최고의 가격에 제공</span>하는 IT 개발 에이전시입니다.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-center text-gray-700 group">
                            <ArrowRight className="w-6 h-6 text-[#626ae2] mr-3 group-hover:translate-x-1 transition-transform" />
                            <span className="text-lg font-tway">53% 개발 효율 증가로 3배 빠른 개발 속도</span>
                        </div>
                        <div className="flex items-center text-gray-700 group">
                            <ArrowRight className="w-6 h-6 text-[#626ae2] mr-3 group-hover:translate-x-1 transition-transform" />
                            <span className="text-lg font-tway">AI 기반 자동화로 3배 저렴한 개발 비용</span>
                        </div>
                        <div className="flex items-center text-gray-700 group">
                            <ArrowRight className="w-6 h-6 text-[#626ae2] mr-3 group-hover:translate-x-1 transition-transform" />
                            <span className="text-lg font-tway">웹/앱 개발, AI/ML 솔루션, 블록체인/NFT 플랫폼 등 다양한 개발 경험</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 