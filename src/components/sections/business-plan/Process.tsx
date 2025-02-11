import { motion } from "framer-motion";
import { FileSearch, FileEdit, FileCheck, Presentation } from "lucide-react";

export function Process() {
    const processes = [
        {
            icon: FileSearch,
            title: "현황 분석",
            description: "사업 현황을 파악하고,\n대표님과 의논 후, 적합한 지원 사업을 선별 추천해드립니다."
        },
        {
            icon: FileEdit,
            title: "문서 작성",
            description: "현실적인 BM 고도화 및 아이디어 구체화 등으로\n사업계획서, 제안서, 기획서를 작성해드립니다."
        },
        {
            icon: FileCheck,
            title: "검토 및 수정",
            description: "작성해드린 문서에 대해\n대표님께서 원하시는 부분을 수정해드리고, 추가해드립니다."
        },
        {
            icon: Presentation,
            title: "발표 준비",
            description: "1차 서류 합격 이후,\n발표 평가 준비 서비스 이용 시, 15% 할인된 가격에 제공해드립니다."
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
                        단순한 사업계획서 첨삭을 넘어,
                        <br />
                        1차 합격 이후 발표 컨설팅까지, 정부지원사업의 A to Z
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