import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";

export const QA: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const questions = [
        {
            question: "얼마나 많은 인플루언서 시딩이 필요한가요?",
            answer: "캠페인의 목표와 성격에 따라 다를 수 있습니다. 다만, 틱톡 내부의 바이럴 알고리즘을 타기 위해서는 세밀한 시딩 플랜 및 콘텐츠 업로드가 필요합니다. 때문에 진행 상담시 이 부분을 함께 논의합니다.",
        },
        {
            question: "콘텐츠 기획도 담당해주시나요?",
            answer: "네, 맞습니다. 우리 브랜드와 핏한 크리에이터를 발굴하는 것 만큼이나 탁월한 콘텐츠 기획을 통해 바이럴리티를 높이는 것은 매우 중요합니다. 이를 위해 고객사와 캠페인의 목표 및 소구점을 상담시 자세히 논의합니다.",
        },
        {
            question: "콘텐츠 주요 지표는 어떻게 확인할 수 있나요?",
            answer: "고객사에서 실시간으로 업로드 및 인게이지먼트 수치를 확인할 수 있는 대시보드를 제공해드립니다. 해당 대시보드를 통해 주요 지표를 확인하실 수 있습니다.",
        },
        {
            question: "콘텐츠 2차 활용이 가능한가요?",
            answer: "콘텐츠의 2차 활용은 크리에이터와 협의하여 결정 가능합니다. 콘텐츠 2차 활용시 틱톡에서 반응 좋은 콘텐츠를 활용하여 퍼포먼스 마케팅을 진행하여, 추가 성과를 기대할 수 있다는는 점에서 메리트가 있습니다.",
        },
    ];

    return (
        <section className='py-20 bg-gradient-to-br from-[#00F2EA]/10 to-white'>
            <div className='container mx-auto px-4'>
                <div className='max-w-3xl mx-auto'>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='text-4xl font-bold text-center mb-4 font-aggro text-gray-900'
                    >
                        자주 묻는 질문
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='text-gray-800 text-center mb-12 font-tway'
                    >
                        틱톡 마케팅에 대해 자주 묻는 질문들을 모았습니다
                    </motion.p>

                    <div className='bg-white rounded-lg shadow-lg p-8'>
                        <div className='divide-y divide-gray-100'>
                            {questions.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div
                                        className='py-6 cursor-pointer'
                                        onClick={() => handleToggle(index)}
                                    >
                                        <div className='flex justify-between items-center'>
                                            <h3 className='text-lg font-bold text-gray-900 font-tway'>{item.question}</h3>
                                            <ChevronDown
                                                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                                                    openIndex === index ? 'transform rotate-180' : ''
                                                }`}
                                            />
                                        </div>
                                        {openIndex === index && (
                                            <motion.p
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className='mt-4 text-gray-800 font-tway'
                                            >
                                                {item.answer}
                                            </motion.p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
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
                            className='inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00F2EA] to-[#FF0050] hover:from-[#FF0050] hover:to-[#00F2EA] text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-105'
                        >
                            <MessageCircle className='w-5 h-5' />더 빠른 성장을 원하시나요?
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default QA;
