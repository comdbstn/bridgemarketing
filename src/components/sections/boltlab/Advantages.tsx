import { motion } from "framer-motion";
import { Code, Settings, LineChart, Headphones } from "lucide-react";

export function Advantages() {
    const advantages = [
        {
            icon: Code,
            title: "기술 전문성",
            description: "최신 기술 스택과 개발 방법론을 활용한 전문적인 개발 서비스"
        },
        {
            icon: Settings,
            title: "맞춤형 솔루션",
            description: "고객의 비즈니스 요구사항에 최적화된 맞춤형 개발 솔루션 제공"
        },
        {
            icon: LineChart,
            title: "투명한 프로세스",
            description: "주간 보고와 실시간 진행 상황 공유를 통한 투명한 프로젝트 관리"
        },
        {
            icon: Headphones,
            title: "지속적인 지원",
            description: "프로젝트 완료 후에도 지속적인 유지보수와 기술 지원 제공"
        }
    ];

    return (
        <section className="py-20 bg-[#f8faff]">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        서비스 강점
                    </h2>
                    <p className="text-xl text-gray-600">
                        차별화된 서비스로 고객의 성공을 지원합니다
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {advantages.map((advantage, index) => (
                        <motion.div
                            key={advantage.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-lg"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-14 h-14 rounded-full bg-[#626ae2]/10 flex items-center justify-center mb-4">
                                    <advantage.icon className="w-7 h-7 text-[#626ae2]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {advantage.title}
                                </h3>
                                <p className="text-gray-600">
                                    {advantage.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 