import { motion } from "framer-motion";
import { FileSearch, FileEdit, FileCheck, Presentation } from "lucide-react";

export function Process() {
    const processes = [
        {
            icon: FileSearch,
            title: "요구사항 분석",
            description: "사업의 특성과 목표를 상세히 분석하여 최적의 방향성을 도출합니다."
        },
        {
            icon: FileEdit,
            title: "초안 작성",
            description: "AI 기술을 활용하여 핵심 내용을 담은 초안을 신속하게 작성합니다."
        },
        {
            icon: FileCheck,
            title: "전문가 검수",
            description: "각 분야 전문가들의 검토를 통해 완성도를 높입니다."
        },
        {
            icon: Presentation,
            title: "최종 완성",
            description: "피드백을 반영하여 최종 사업계획서를 완성합니다."
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
                        작성 프로세스
                    </h2>
                    <p className="text-xl text-gray-600">
                        체계적이고 효율적인 프로세스로 완벽한 사업계획서를 작성합니다
                    </p>
                </motion.div>
                <div className="relative max-w-5xl mx-auto">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#626ae2]/20 -translate-y-1/2 hidden md:block" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {processes.map((process, index) => (
                            <motion.div
                                key={process.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="relative bg-white p-6 rounded-xl shadow-lg text-center z-10 hover:shadow-xl transition-shadow duration-300">
                                    <div className="relative">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#626ae2]/10 rounded-full mb-6 group-hover:bg-[#626ae2]/20 transition-colors duration-300">
                                            <process.icon className="w-8 h-8 text-[#626ae2]" />
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#626ae2] rounded-full flex items-center justify-center text-white font-bold">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                                    <p className="text-gray-600 whitespace-pre-line">{process.description}</p>
                                </div>
                                
                                {/* Arrow for mobile */}
                                {index < processes.length - 1 && (
                                    <div className="absolute left-1/2 -bottom-6 transform -translate-x-1/2 w-4 h-4 text-[#626ae2] md:hidden">
                                        ↓
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 