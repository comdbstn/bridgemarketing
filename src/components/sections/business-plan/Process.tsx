import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FileSearch, FileEdit, FileCheck, Presentation } from "lucide-react";

const steps = [
    {
        number: 1,
        icon: FileSearch,
        title: "요구사항 분석",
        description:
            "사업의 특성과 목표를 상세히 분석하여 최적의 방향성을 도출합니다.",
        color: "from-[#626ae2] to-[#7884eb]",
    },
    {
        number: 2,
        icon: FileEdit,
        title: "초안 작성",
        description:
            "AI 기술을 활용하여 핵심 내용을 담은 초안을 신속하게 작성합니다.",
        color: "from-[#626ae2] to-[#7884eb]",
    },
    {
        number: 3,
        icon: FileCheck,
        title: "전문가 검수",
        description:
            "각 분야 전문가들의 검토를 통해 완성도를 높입니다.",
        color: "from-[#626ae2] to-[#7884eb]",
    },
    {
        number: 4,
        icon: Presentation,
        title: "최종 완성",
        description: "피드백을 반영하여 최종 사업계획서를 완성합니다.",
        color: "from-[#626ae2] to-[#7884eb]",
    },
];

export function Process() {
    return (
        <section className='py-20 bg-gradient-to-br from-[#626ae2]/5 to-white overflow-hidden'>
            <div className='container mx-auto px-4'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-4xl font-bold text-center mb-4 text-gray-900 font-aggro'
                >
                    작성 프로세스
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-[#626ae2] text-center mb-16 max-w-2xl mx-auto font-tway'
                >
                    체계적인 프로세스로 완벽한 사업계획서를 작성합니다
                </motion.p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative'>
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className='p-6 relative h-full bg-white hover:shadow-lg transition-shadow duration-300'>
                                <div className='flex flex-col h-full'>
                                    {/* Number Badge */}
                                    <div className={`absolute -top-4 left-6 w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold shadow-lg`}>
                                        {step.number}
                                    </div>

                                    {/* Icon */}
                                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 mt-2 shadow-md`}>
                                        <step.icon className="w-6 h-6 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className='text-xl font-bold mb-2 text-gray-900 font-aggro'>{step.title}</h3>
                                    <p className='text-gray-600 font-tway text-base'>{step.description}</p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 