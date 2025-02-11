import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const questions = [
    {
        question: "홍보 가능한 대학은 어디까지인가요?",
        answer: "서울을 비롯한 수도권 주요 대학 및 지방 소재 주요 대학에 홍보 가능합니다! 200여 개 주요 대학 커뮤니티에 홍보 가능하며, 협의 후 세부사항을 결정해드립니다.",
    },
    {
        question: "한번 올라간 글은 얼마나 유지되나요? 글이 삭제되지는 않나요?",
        answer: "게시판에 올라가는 글은 계속해서 유지되며, 시간이 지남에 따라 글이 자연스럽게 노출에서 밀려날 때까지 24시간 365일 지속됩니다. 커뮤니티 규정에 걸맞게 글을 구성하고 업로드하기 때문에 글이 삭제되는 경우는 매우 드물다는 점을 수천 건의 업로드 진행 경험과 함께 확실히 강조드립니다.",
    },
    {
        question: "조회수 등 지표는 어떻게 확인할 수 있나요?",
        answer: "대학 커뮤니티 특성상 조회수를 직접적으로 확인하는 것은 어렵습니다. 다만 별도의 단축링크(bit.ly 등)를 통해 제품 및 서비스의 홍보 페이지와 연결하여 유입 수를 측정하는 방법을 권장드립니다. 또한 자유게시판 바이럴 등의 경우에는 추천/스크랩 및 기타 반응 등을 종합하여 전달드리고 있습니다.",
    },
    {
        question: "마케팅원고 대필은 불가능한가요?",
        answer: "마케팅원고는 구매자 측에서 초안을 제시하는 것을 원칙으로 하되, 대학 커뮤니티 분위기에 맞게 글을 무료로 수정해드리고 있습니다. 만약 초안을 포함한 완전한 대필을 원하신다면 추가비용 30,000원과 함께 글을 작성드리고 있으니 참고해주시면 감사하겠습니다.",
    },
];

function QAItem({
    question,
    answer,
    isOpen,
    onClick,
}: {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}) {
    return (
        <div className='group'>
            <button
                className='w-full py-6 flex items-start gap-6 text-left hover:bg-gray-50/50 rounded-lg px-4 transition-colors duration-200'
                onClick={onClick}
            >
                <div className='flex-shrink-0'>
                    <span className='inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#FF416C]/10 text-[#FF416C] font-bold'>
                        Q
                    </span>
                </div>
                <div className='flex-grow'>
                    <span className='text-lg font-medium block mb-2 font-tway'>{question}</span>
                    <div className={cn("overflow-hidden transition-all duration-300", isOpen ? "max-h-96" : "max-h-0")}>
                        <div className='flex gap-6 mt-4'>
                            <div className='flex-shrink-0'>
                                <span className='inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-500 font-bold'>
                                    A
                                </span>
                            </div>
                            <p className='text-gray-600 font-tway'>{answer}</p>
                        </div>
                    </div>
                </div>
                <div className='flex-shrink-0 pt-1'>
                    <div
                        className={cn(
                            "w-6 h-6 relative transition-transform duration-300",
                            isOpen ? "transform rotate-180" : ""
                        )}
                    >
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <div className='w-0.5 h-6 bg-[#FF416C] rounded-full transition-transform duration-300' />
                            <div
                                className={cn(
                                    "absolute w-6 h-0.5 bg-[#FF416C] rounded-full transition-transform duration-300",
                                    isOpen ? "transform rotate-90" : ""
                                )}
                            />
                        </div>
                    </div>
                </div>
            </button>
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
                        에브리타임 마케팅에 대해 자주 묻는 질문들을 모았습니다
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
                            className='inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] hover:from-[#FF4B2B] hover:to-[#FF416C] text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-105'
                        >
                            <MessageCircle className='w-5 h-5' />더 빠른 성장을 원하시나요?
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
