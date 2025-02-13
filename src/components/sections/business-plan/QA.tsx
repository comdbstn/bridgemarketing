import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const questions = [
    {
        question: "어떤 종류의 사업계획서를 작성할 수 있나요?",
        answer: "정부지원사업, 투자 유치, 공모전, 창업 경진대회 등 모든 종류의 사업계획서를 작성할 수 있습니다. AI 기술과 전문가의 노하우를 결합하여 목적에 맞는 최적의 사업계획서를 제공합니다."
    },
    {
        question: "작성 기간은 얼마나 걸리나요?",
        answer: "일반적으로 초안은 3일 이내, 최종본은 1주일 이내에 완성됩니다. 단, 프로젝트의 규모와 복잡도에 따라 기간이 조정될 수 있으며, 긴급 작성 서비스도 제공 가능합니다."
    },
    {
        question: "비용은 어떻게 되나요?",
        answer: "AI 기술을 활용한 효율적인 작성 프로세스를 통해 기존 대비 최대 3배까지 비용을 절감할 수 있습니다. 구체적인 견적은 요구사항을 파악한 후에 안내해드립니다."
    },
    {
        question: "수정 서비스도 제공하시나요?",
        answer: "네, 초안 제출 후 1회 무료 수정을 제공하며, 추가 수정이 필요한 경우 합리적인 가격으로 진행 가능합니다. 또한 발표평가가 있는 경우 발표자료 작성 서비스도 제공합니다."
    }
];

interface QAItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

function QAItem({ question, answer, isOpen, onClick }: QAItemProps) {
    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                className="w-full py-6 flex items-center justify-between text-left"
                onClick={onClick}
            >
                <span className="text-lg font-medium text-gray-900 font-tway">{question}</span>
                <ChevronDown
                    className={cn(
                        "w-5 h-5 text-gray-500 transition-transform duration-200",
                        isOpen && "transform rotate-180"
                    )}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-gray-600 font-tway">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function QA() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className='py-20 bg-white'>
            <div className='container mx-auto px-4'>
                <div className='max-w-3xl mx-auto'>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='text-4xl font-bold text-center mb-4 font-aggro'
                    >
                        자주 묻는 질문
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='text-gray-600 text-center mb-12 font-tway'
                    >
                        사업계획서 작성에 대해 궁금하신 점을 확인하세요
                    </motion.p>

                    <div className='divide-y divide-gray-100'>
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
                                    onClick={() => handleToggle(index)}
                                />
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='mt-12 text-center'
                    >
                        <a
                            href='http://pf.kakao.com/_CYGdn/chat'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00A9FF] to-[#0077FF] hover:from-[#0077FF] hover:to-[#00A9FF] text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-105'
                        >
                            더 빠른 성장을 원하시나요?
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 