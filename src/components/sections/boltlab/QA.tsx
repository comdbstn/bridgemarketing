import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function QA() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const qas = [
        {
            question: "어떤 종류의 개발 서비스를 제공하시나요?",
            answer: "웹 개발, 모바일 앱 개발, AI 솔루션 개발 등 다양한 개발 서비스를 제공합니다. 홈페이지, 랜딩페이지부터 복잡한 웹 플랫폼까지 모든 종류의 디지털 서비스 개발이 가능합니다."
        },
        {
            question: "개발 기간은 얼마나 걸리나요?",
            answer: "프로젝트의 규모와 복잡도에 따라 다르지만, 일반적으로 랜딩페이지는 2주, 웹 플랫폼은 2-3개월, 모바일 앱은 3-4개월 정도 소요됩니다. 정확한 기간은 상담을 통해 안내해드립니다."
        },
        {
            question: "개발 비용은 어떻게 되나요?",
            answer: "AI 기술을 활용한 효율적인 개발 프로세스를 통해 기존 대비 최대 3배까지 비용을 절감할 수 있습니다. 구체적인 견적은 요구사항을 파악한 후에 안내해드립니다."
        },
        {
            question: "유지보수 서비스도 제공하시나요?",
            answer: "네, 프로젝트 완료 후에도 지속적인 유지보수와 기술 지원을 제공합니다. 24시간 모니터링과 신속한 이슈 대응으로 안정적인 서비스 운영을 보장합니다."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-gray-900 mb-4"
                    >
                        자주 묻는 질문
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-xl text-gray-600"
                    >
                        고객님들이 자주 문의하시는 내용을 모았습니다
                    </motion.p>
                </motion.div>
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
                                className="w-full flex items-center justify-between p-6 bg-[#f8faff] hover:bg-[#e8f0ff] rounded-lg transition-all duration-300"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                            >
                                <motion.span
                                    className="text-lg font-medium text-gray-900"
                                    initial={false}
                                    animate={{ color: openIndex === index ? "#626ae2" : "#111827" }}
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
                                        openIndex === index ? "text-[#626ae2]" : ""
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
                                            className="p-6 bg-white border border-gray-100 rounded-lg mt-2"
                                        >
                                            <p className="text-gray-600">{qa.answer}</p>
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
} 