import React from "react";
import { motion } from "framer-motion";

export const Profile: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-[#FF4B4B]/5 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 font-aggro">
                        브릿지마케팅 에브리타임 마케팅
                    </h2>
                    <p className="text-xl text-gray-600 font-tway">
                        대학생 마케팅의 새로운 기준을 제시합니다
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-bold text-[#FF4B4B] mb-4 font-aggro">
                                에브리타임 마케팅 전문가
                            </h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#FF4B4B] rounded-full" />
                                    <span>5년 이상의 에브리타임 마케팅 경험</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#FF4B4B] rounded-full" />
                                    <span>1,000+ 성공적인 캠페인 진행</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#FF4B4B] rounded-full" />
                                    <span>전국 주요 대학 네트워크 보유</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-bold text-[#FF4B4B] mb-4 font-aggro">
                                차별화된 서비스
                            </h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#FF4B4B] rounded-full" />
                                    <span>맞춤형 타겟팅 전략 수립</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#FF4B4B] rounded-full" />
                                    <span>실시간 모니터링 및 피드백</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#FF4B4B] rounded-full" />
                                    <span>데이터 기반 성과 분석</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-6 rounded-xl shadow-lg"
                    >
                        <h3 className="text-2xl font-bold text-[#FF4B4B] mb-4 font-aggro">
                            마케팅 성과
                        </h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#FF4B4B] rounded-full" />
                                <span>평균 게시글 조회수 5,000+</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#FF4B4B] rounded-full" />
                                <span>댓글 참여율 200% 이상</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#FF4B4B] rounded-full" />
                                <span>광고 효과 지속기간 2주+</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#FF4B4B] rounded-full" />
                                <span>재계약률 85% 이상</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}; 