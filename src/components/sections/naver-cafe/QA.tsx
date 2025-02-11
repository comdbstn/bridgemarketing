import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const questions = [
    {
        question: "어떤 카페에서 마케팅이 진행되나요?",
        answer: "맘카페, 지역카페, 취미카페, 팬카페 등 다양한 카테고리의 카페에서 마케팅을 진행합니다. 귀사의 제품이나 서비스에 가장 적합한 카페를 선정하여 효과적인 마케팅을 진행합니다.",
    },
    {
        question: "마케팅 기간은 얼마나 걸리나요?",
        answer: "기본적으로 한 달 단위로 진행되며, 선택하신 패키지와 마케팅 규모에 따라 진행 기간이 조정될 수 있습니다. 일반적으로 게시글 작성은 1-2주 내에 완료되며, 이후 모니터링과 피드백이 지속적으로 이루어집니다.",
    },
    {
        question: "컨텐츠는 어떻게 제작되나요?",
        answer: "전문 작성자가 카페별 특성과 회원들의 성향을 고려하여 자연스러운 컨텐츠를 제작합니다. 원고 초안을 검토하실 수 있으며, 피드백을 반영하여 수정이 가능합니다.",
    },
    {
        question: "효과는 어떻게 측정되나요?",
        answer: "조회수, 댓글, 공감 수 등의 기본 지표와 함께, 유입률, 전환율 등 세부적인 성과 지표를 제공합니다. 주간/월간 리포트를 통해 상세한 성과 분석 결과를 확인하실 수 있습니다.",
    },
    {
        question: "즉시 시작 가능한가요?",
        answer: "상담 신청 후 1-2일 내에 전담 매니저가 배정되어 마케팅 전략 수립이 시작됩니다. 계약 체결 후 평균 3-4일 내에 첫 컨텐츠 업로드가 가능합니다.",
    },
    {
        question: "위험 요소는 없나요?",
        answer: "15년 이상의 네이버 카페 마케팅 노하우를 바탕으로, 카페의 규정을 준수하며 안전하게 마케팅을 진행합니다. 모든 컨텐츠는 전문가의 검수를 거쳐 업로드됩니다.",
    },
];

function QAItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
    return (
        <div className="py-4">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left"
            >
                <span className="text-lg font-semibold font-tway">{question}</span>
                <Plus
                    className={`w-5 h-5 text-green-600 transform transition-transform ${
                        isOpen ? "rotate-45" : ""
                    }`}
                />
            </button>
            {isOpen && (
                <p className="mt-4 text-gray-600 font-tway">
                    {answer}
                </p>
            )}
        </div>
    );
}

export function QA() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
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
                        className="text-gray-600 text-center mb-12 font-tway"
                    >
                        네이버 카페 마케팅에 대해 자주 묻는 질문들을 모았습니다
                    </motion.p>

                    <div className="divide-y divide-gray-100">
                        {questions.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <QAItem
                                    question={item.question}
                                    answer={item.answer}
                                    isOpen={openIndex === index}
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 
