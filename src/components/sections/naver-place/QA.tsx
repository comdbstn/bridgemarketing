import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "네이버 플레이스 마케팅은 어떤 효과가 있나요?",
        answer: "네이버 플레이스 마케팅은 지도 검색 시 상위 노출, 리뷰 증가를 통한 신뢰도 향상, 실제 방문자 수 증가 등의 효과가 있습니다. 특히 지역 기반 검색에서 높은 효과를 보입니다."
    },
    {
        question: "마케팅 진행 기간은 얼마나 걸리나요?",
        answer: "기본적으로 1개월 단위로 진행되며, 리뷰 수와 마케팅 규모에 따라 진행 기간이 조정될 수 있습니다. 일반적으로 효과를 보기 위해서는 최소 3개월 이상의 진행을 추천드립니다."
    },
    {
        question: "어떤 업종에 효과적인가요?",
        answer: "음식점, 카페, 병원, 미용실, 운동시설 등 오프라인 매장을 운영하는 모든 업종에 효과적입니다. 특히 지역 기반 검색이 중요한 업종에서 높은 효과를 보입니다."
    },
    {
        question: "리뷰는 어떤 방식으로 작성되나요?",
        answer: "실제 방문자들의 자연스러운 경험을 바탕으로 리뷰가 작성됩니다. 사진, 평가, 상세한 이용 후기 등이 포함되어 신뢰도 높은 리뷰를 제공합니다."
    },
    {
        question: "성과 분석은 어떻게 진행되나요?",
        answer: "매주 리뷰 작성 현황, 조회수, 검색 노출 순위 등의 데이터를 종합적으로 분석하여 보고서를 제공합니다. 필요한 경우 전략 조정도 함께 진행됩니다."
    }
];

export function QA() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-gradient-to-br from-[#E5FFE8] to-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-4 font-aggro"
                >
                    자주 묻는 질문
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-gray-600 text-center mb-12 max-w-2xl mx-auto font-tway"
                >
                    네이버 플레이스 마케팅에 대해 자주 묻는 질문들을 모았습니다
                </motion.p>

                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="mb-4"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                            >
                                <span className="text-lg font-bold text-gray-800 text-left font-tway">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-[#2DB400] flex-shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-[#2DB400] flex-shrink-0" />
                                )}
                            </button>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="p-4 bg-white/50 rounded-lg mt-2"
                                >
                                    <p className="text-gray-600 font-tway">{faq.answer}</p>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 