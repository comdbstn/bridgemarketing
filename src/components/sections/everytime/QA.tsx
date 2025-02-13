import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const QA: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const qas = [
        {
            question: "어떤 종류의 광고가 가능한가요?",
            answer: "에브리타임에서는 학교별 자유게시판, 홍보게시판, 책방, 아르바이트 등 다양한 게시판에 광고가 가능합니다. 서비스나 제품의 특성에 맞는 최적의 게시판을 추천해드립니다."
        },
        {
            question: "광고 집행 기간은 얼마나 걸리나요?",
            answer: "일반적으로 광고 집행은 3-5일 정도 소요됩니다. 단, 광고 규모와 타겟 학교 수에 따라 기간이 조정될 수 있으며, 긴급 집행도 가능합니다."
        },
        {
            question: "광고 비용은 어떻게 되나요?",
            answer: "광고 비용은 타겟 학교 수, 게시판 종류, 노출 기간 등에 따라 달라집니다. 기존 대학생 마케팅 채널 대비 최대 70%까지 비용을 절감할 수 있습니다."
        },
        {
            question: "광고 효과는 어떻게 측정되나요?",
            answer: "조회수, 댓글, 좋아요 등의 실시간 반응을 모니터링하며, 주간 리포트를 통해 상세한 성과 분석 결과를 제공합니다. 필요시 실시간 피드백을 통한 전략 수정도 가능합니다."
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-white to-[#FF4B4B]/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 font-aggro">
                        자주 묻는 질문
                    </h2>
                    <p className="text-xl text-gray-600 font-tway">
                        고객님들이 자주 문의하시는 내용을 모았습니다
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    {qas.map((qa, index) => (
                        <motion.div
                            key={qa.question}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="mb-4"
                        >
                            <motion.button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 bg-white hover:bg-[#FF4B4B]/5 rounded-xl border border-gray-100 hover:border-[#FF4B4B]/20 transition-all duration-300"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                            >
                                <motion.span
                                    className="text-lg font-medium text-gray-900 font-aggro"
                                    initial={false}
                                    animate={{ color: openIndex === index ? "#FF4B4B" : "#111827" }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {qa.question}
                                </motion.span>
                                <motion.div
                                    initial={false}
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-colors duration-300 ${
                                        openIndex === index ? "text-[#FF4B4B]" : ""
                                    }`} />
                                </motion.div>
                            </motion.button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <motion.div
                                            initial={{ y: -20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -20, opacity: 0 }}
                                            transition={{ duration: 0.3, delay: 0.1 }}
                                            className="p-6 bg-white border border-gray-100 rounded-xl mt-2"
                                        >
                                            <p className="text-gray-600 font-tway">{qa.answer}</p>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
