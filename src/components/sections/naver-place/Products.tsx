import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Products() {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#E5FFE8] to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <span className="text-[#03AC0E] font-semibold text-lg font-tway mb-6 block">
                        NAVER PLACE MARKETING
                    </span>
                    <h2 className="text-[3.5rem] leading-tight font-bold mb-6 font-aggro bg-gradient-to-r from-[#03AC0E] to-[#02891B] bg-clip-text text-transparent">
                        네이버 플레이스 마케팅
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
                        대한민국 최대 지도 서비스 "네이버 플레이스"에서
                        <br />
                        <span className="text-[#03AC0E] font-semibold">매장의 노출도를 높이고 방문자 수를 늘리는 마케팅</span>을 진행합니다.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center text-gray-700 group">
                            <ArrowRight className="w-6 h-6 text-[#03AC0E] mr-3 group-hover:translate-x-1 transition-transform" />
                            <span className="text-lg font-tway">네이버 지도 검색 상위 노출</span>
                        </div>
                        <div className="flex items-center text-gray-700 group">
                            <ArrowRight className="w-6 h-6 text-[#03AC0E] mr-3 group-hover:translate-x-1 transition-transform" />
                            <span className="text-lg font-tway">실제 방문자들의 리뷰로 신뢰도 향상</span>
                        </div>
                        <div className="flex items-center text-gray-700 group">
                            <ArrowRight className="w-6 h-6 text-[#03AC0E] mr-3 group-hover:translate-x-1 transition-transform" />
                            <span className="text-lg font-tway">지역 기반 타겟 마케팅 전략</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 