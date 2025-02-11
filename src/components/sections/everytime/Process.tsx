import { motion } from "framer-motion";
import { FileSearch, FileEdit, FileCheck, Presentation } from "lucide-react";

export function Process() {
    const processes = [
        {
            icon: FileSearch,
            title: "타겟 분석",
            description: "학교별, 학과별 특성을 분석하여 최적의 마케팅 전략을 수립합니다."
        },
        {
            icon: FileEdit,
            title: "컨텐츠 기획",
            description: "대학생들의 관심사와 트렌드를 반영한 맞춤형 컨텐츠를 기획합니다."
        },
        {
            icon: FileCheck,
            title: "광고 집행",
            description: "전략적인 시간대와 게시판을 선정하여 효과적으로 광고를 집행합니다."
        },
        {
            icon: Presentation,
            title: "성과 분석",
            description: "실시간 반응과 참여도를 분석하여 마케팅 효과를 측정합니다."
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
                        진행 프로세스
                    </h2>
                    <p className="text-xl text-gray-600">
                        체계적이고 효율적인 프로세스로 성공적인 마케팅을 실현합니다
                    </p>
                </motion.div>
                <div className="relative max-w-5xl mx-auto">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#f03e3e]/20 -translate-y-1/2 hidden md:block" />
                    
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
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f03e3e]/10 rounded-full mb-6 group-hover:bg-[#f03e3e]/20 transition-colors duration-300">
                                            <process.icon className="w-8 h-8 text-[#f03e3e]" />
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#f03e3e] rounded-full flex items-center justify-center text-white font-bold">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                                    <p className="text-gray-600 whitespace-pre-line">{process.description}</p>
                                </div>
                                
                                {/* Arrow for mobile */}
                                {index < processes.length - 1 && (
                                    <div className="absolute left-1/2 -bottom-6 transform -translate-x-1/2 w-4 h-4 text-[#f03e3e] md:hidden">
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
