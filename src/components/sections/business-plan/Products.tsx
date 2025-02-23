import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Products() {
    return (
        <section className="py-20 bg-gradient-to-br from-[#626ae2]/5 to-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-[#626ae2] font-semibold text-lg font-tway mb-6 block">
                        BUSINESS PLAN SERVICE
                    </span>
                    <h2 className="text-[3.5rem] leading-tight font-bold mb-6 font-aggro bg-gradient-to-r from-[#626ae2] to-[#7884eb] bg-clip-text text-transparent">
                        사업계획서 작성 서비스
                    </h2>
                    <p className="text-2xl text-gray-700 font-tway leading-relaxed mb-10">
                        전문가의 노하우와 체계적인 프로세스로
                        <br />
                        <span className="text-[#626ae2] font-semibold">맞춤형 사업계획서를 작성</span>해드립니다.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-center text-gray-700 group">
                            <ArrowRight className="w-6 h-6 text-[#626ae2] mr-3 group-hover:translate-x-1 transition-transform" />
                            <span className="text-lg font-tway">정부지원사업 약 1,600종 커버</span>
                        </div>
                        <div className="flex items-center text-gray-700 group">
                            <ArrowRight className="w-6 h-6 text-[#626ae2] mr-3 group-hover:translate-x-1 transition-transform" />
                            <span className="text-lg font-tway">사업계획서 작성 전문가 직접 작성</span>
                        </div>
                        <div className="flex items-center text-gray-700 group">
                            <ArrowRight className="w-6 h-6 text-[#626ae2] mr-3 group-hover:translate-x-1 transition-transform" />
                            <span className="text-lg font-tway">사업 아이템 분석 및 컨설팅</span>
                        </div>
                        <div className="flex items-center text-gray-700 group">
                            <ArrowRight className="w-6 h-6 text-[#626ae2] mr-3 group-hover:translate-x-1 transition-transform" />
                            <span className="text-lg font-tway">맞춤형 사업계획서 작성</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 