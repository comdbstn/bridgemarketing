import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Products() {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <span className="text-blue-600 font-semibold text-lg font-tway mb-6 block">
                        BLIND VIRAL MARKETING
                    </span>
                    <h2 className="text-[3.5rem] leading-tight font-bold mb-6 font-aggro text-gray-900">
                        블라인드 바이럴 마케팅
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="max-w-3xl"
                >
                    <p className="text-2xl text-gray-800 font-tway leading-relaxed mb-10">
                        가장 큰 직장인 커뮤니티 "블라인드"에서
                        <br />
                        <span className="text-blue-600 font-semibold">게시글과 댓글을 통한 자연스러운 바이럴마케팅</span>을 진행합니다.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-center text-gray-800 group">
                            <ArrowRight className="w-6 h-6 text-blue-500 mr-3 group-hover:translate-x-1 transition-transform" />
                            <span className="text-lg font-tway">직장인들의 일상적인 대화 속에 자연스럽게 녹아드는 마케팅</span>
                        </div>
                        <div className="flex items-center text-gray-800 group">
                            <ArrowRight className="w-6 h-6 text-blue-500 mr-3 group-hover:translate-x-1 transition-transform" />
                            <span className="text-lg font-tway">실제 직장인들의 경험담으로 신뢰도 높은 컨텐츠 제작</span>
                        </div>
                        <div className="flex items-center text-gray-800 group">
                            <ArrowRight className="w-6 h-6 text-blue-500 mr-3 group-hover:translate-x-1 transition-transform" />
                            <span className="text-lg font-tway">타겟층에 직접 도달하는 효과적인 마케팅 전략</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 