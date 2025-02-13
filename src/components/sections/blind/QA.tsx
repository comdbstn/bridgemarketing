import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const questions = [
    {
        question: "지정 가능한 회사는 어떻게 되나요?",
        answer: "광고주님께서 원하시는 회사를 저희와 협의하여 섭외가 가능합니다. 업계 특성과 타겟 회사의 상황을 고려하여 최적의 방향으로 진행해드립니다.",
    },
    {
        question: "마케팅 진행 상황은 어떻게 확인할 수 있나요?",
        answer: "컨텐츠 업로드 후 실시간으로 확인 가능한 링크를 제공해드립니다. 또한 광고주님께서도 직접 댓글에 참여하여 잠재 고객과의 실시간 소통이 가능합니다. 이를 통해 더욱 자연스럽고 효과적인 마케팅이 가능합니다.",
    },
    {
        question: "컨텐츠 작성 대행도 가능한가요?",
        answer: "네, 전문 작성자를 통한 컨텐츠 대필 서비스를 제공해드리고 있습니다. 원고 작성비는 3만원이며, 광고주님의 니즈에 맞춘 퀄리티 높은 컨텐츠를 제작해드립니다.",
    },
    {
        question: "업로드된 게시물의 삭제가 가능한가요?",
        answer: "블라인드 플랫폼의 특성상 한번 업로드된 게시물은 삭제가 불가능합니다. 따라서 더욱 신중하고 전략적인 컨텐츠 기획이 필요하며, 저희가 이 부분을 전문적으로 도와드리고 있습니다.",
    },
];

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
                        블라인드 마케팅에 대해 궁금하신 점을 확인하세요
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
                            <MessageCircle className='w-5 h-5' />더 빠른 성장을 원하시나요?
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
