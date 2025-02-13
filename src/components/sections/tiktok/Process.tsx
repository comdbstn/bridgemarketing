import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, FileEdit, Upload, BarChart } from "lucide-react";
import { Card } from "@/components/ui/card";

const Process: React.FC = () => {
    const steps = [
        {
            number: 1,
            icon: MessageSquare,
            title: "상담 및 견적 확인",
            description: "캠페인의 목표, 타겟, 예산 등으로 논의하며, 맞춤형 제안을 제공합니다.",
            color: "from-[#00F2EA] to-[#00D1C9]",
        },
        {
            number: 2,
            icon: FileEdit,
            title: "인플루언서 리스팅 및 콘텐츠 기획",
            description:
                "타겟층과 캠페인 성격에 맞는 인플루언서를 선별하여 리스팅하고, 캠페인의 목표 달성을 위한 콘텐츠를 기획합니다.",
            color: "from-[#00D1C9] to-[#FF0050]",
        },
        {
            number: 3,
            icon: Upload,
            title: "캠페인 진행",
            description:
                "확정된 인플루언서들과 협업하여 틱톡 콘텐츠를 제작하고, 캠페인을 진행합니다. 콘텐츠 업로드 일정 및 캠페인 진행 상황을 실시간 모니터링합니다.",
            color: "from-[#FF0050] to-[#FF3370]",
        },
        {
            number: 4,
            icon: BarChart,
            title: "보고 및 피드백",
            description: "캠페인이 완료되면, 영상 및 인사이트에 대해 전반적인 성과를 분석하여 보고드립니다.",
            color: "from-[#FF3370] to-[#FF6699]",
        },
    ];

    return (
        <section className='py-20 bg-gradient-to-br from-[#00F2EA]/10 via-white to-[#FF0050]/10'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='space-y-8'
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='text-4xl font-bold text-center mb-4 text-gray-900 font-aggro'
                    >
                        광고과정
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='text-gray-800 text-center mb-16 max-w-2xl mx-auto font-tway'
                    >
                        체계적인 프로세스로 캠페인의 성공을 이끌어냅니다
                    </motion.p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className='relative'
                            >
                                <Card className='h-full p-6 hover:shadow-lg transition-all duration-300'>
                                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center mb-4`}>
                                        <step.icon className='w-6 h-6 text-white' />
                                    </div>
                                    <div className='mb-4 flex items-center gap-2'>
                                        <span className='text-2xl font-bold text-gray-900 font-tway'>{step.number}</span>
                                        <h3 className='text-xl font-bold text-gray-900 font-tway'>{step.title}</h3>
                                    </div>
                                    <p className='text-gray-800 font-tway'>{step.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Process;
