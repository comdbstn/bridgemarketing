import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Products() {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-green-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <span className="text-green-600 font-semibold text-lg font-tway mb-6 block">
                        NAVER CAFE VIRAL MARKETING
                    </span>
                    <h2 className="text-[3.5rem] leading-tight font-bold mb-6 font-aggro bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                        네이버 카페 바이럴 마케팅
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
                        월간 순방문자 수 4,500만 명, 국내 최대 커뮤니티
                        <br />
                        <span className="text-green-600 font-semibold">"자유게시판", "정보게시판"에 바이럴 게시글</span>을 작성합니다.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-center text-gray-700 group">
                            <ArrowRight className="w-6 h-6 text-green-600 mr-3 group-hover:translate-x-1 transition-transform" />
                            <span className="text-lg font-tway">관심사 기반 타겟팅으로 정확한 고객층 공략</span>
                        </div>
                        <div className="flex items-center text-gray-700 group">
                            <ArrowRight className="w-6 h-6 text-green-600 mr-3 group-hover:translate-x-1 transition-transform" />
                            <span className="text-lg font-tway">실제 카페 회원들의 자연스러운 바이럴 마케팅</span>
                        </div>
                        <div className="flex items-center text-gray-700 group">
                            <ArrowRight className="w-6 h-6 text-green-600 mr-3 group-hover:translate-x-1 transition-transform" />
                            <span className="text-lg font-tway">대한민국 대표 커뮤니티 플랫폼</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 
