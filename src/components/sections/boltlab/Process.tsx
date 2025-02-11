import { motion } from "framer-motion";
import { FileSearch, FileEdit, FileCheck, Presentation } from "lucide-react";

export function Process() {
    const processes = [
        {
            icon: FileSearch,
            title: "요구사항 분석",
            description: "비즈니스 목표와 기술적 요구사항을 상세히 분석합니다."
        },
        {
            icon: FileEdit,
            title: "설계 및 기획",
            description: "최적의 아키텍처와 기술 스택을 선정하여 상세 설계를 진행합니다."
        },
        {
            icon: FileCheck,
            title: "개발 및 테스트",
            description: "애자일 방법론을 통한 반복적인 개발과 품질 검증을 수행합니다."
        },
        {
            icon: Presentation,
            title: "배포 및 유지보수",
            description: "안정적인 서비스 운영과 지속적인 성능 최적화를 지원합니다."
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
                        개발 프로세스
                    </h2>
                    <p className="text-xl text-gray-600">
                        체계적이고 효율적인 개발 프로세스로 성공적인 프로젝트를 완성합니다
                    </p>
                </motion.div>
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
                            {index < processes.length - 1 && (
                                <div className="hidden md:block absolute top-1/4 right-0 w-full h-0.5 bg-[#c6e0fc]" />
                            )}
                            <div className="relative bg-white p-6 rounded-xl shadow-lg text-center z-10">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f8faff] rounded-full mb-6">
                                    <process.icon className="w-8 h-8 text-[#626ae2]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                                <p className="text-gray-600 whitespace-pre-line">{process.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 