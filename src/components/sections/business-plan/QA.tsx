import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function QA() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const qas = [
        {
            question: "어떤 종류의 사업계획서를 작성해주시나요?",
            answer: "예비창업자, 초기창업자 관련 정부지원사업 약 1,600종의 사업계획서를 작성해드립니다. 사업계획서 뿐만 아니라, 제안서, IR, 보고서 등의 모든 기획 문서도 제공 가능합니다."
        },
        {
            question: "서비스 진행 기간은 얼마나 걸리나요?",
            answer: "기본적으로 첫 미팅 후 3~5일 이내에 초안을 전달해드립니다. 수정 요청사항에 따라 추가로 1~2일이 소요될 수 있습니다. 급하신 경우 빠른 처리도 가능하니 문의 주시기 바랍니다."
        },
        {
            question: "수정은 몇 번까지 가능한가요?",
            answer: "패키지별로 수정 횟수가 다릅니다. Standard는 3회, Premium은 10회 수정이 가능합니다. 모든 패키지는 고객님이 만족하실 때까지 꼼꼼히 검토하여 수정해드립니다."
        },
        {
            question: "사업계획서 작성 전에 상담이 가능한가요?",
            answer: "네, 무료로 전화 상담을 제공해드립니다. 상담을 통해 현재 상황을 파악하고, 가장 적합한 서비스를 추천해드립니다."
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        자주 묻는 질문
                    </h2>
                    <p className="text-xl text-gray-600">
                        고객님들이 자주 문의하시는 내용을 모았습니다
                    </p>
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
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 bg-[#f8faff] hover:bg-[#e8f0ff] rounded-lg transition-colors"
                            >
                                <span className="text-lg font-medium text-gray-900">{qa.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-500 transition-transform ${
                                        openIndex === index ? "transform rotate-180" : ""
                                    }`}
                                />
                            </button>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="p-6 bg-white border border-gray-100 rounded-lg mt-2"
                                >
                                    <p className="text-gray-600">{qa.answer}</p>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 