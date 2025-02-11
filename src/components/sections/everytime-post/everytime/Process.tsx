import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MessageSquare, FileSearch, Upload, BarChart } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: MessageSquare,
        title: "상담 및 견적 확인",
        description: "서비스 종류와 타겟 학교를 파악하여 최적의 마케팅 전략을 수립합니다.",
        color: "text-amber-600",
    },
    {
        number: "02",
        icon: FileSearch,
        title: "초안 검토 및 수정",
        description: "작성된 컨텐츠 초안을 검토하고 수정하여 완성도를 높입니다.",
        color: "text-amber-500",
    },
    {
        number: "03",
        icon: Upload,
        title: "업로드 진행",
        description: "검토가 완료된 컨텐츠를 선정된 학교 게시판에 업로드합니다.",
        color: "text-green-600",
    },
    {
        number: "04",
        icon: BarChart,
        title: "보고 및 피드백",
        description: "업로드 결과와 반응을 분석하여 상세 리포트를 제공합니다.",
        color: "text-green-500",
    },
];

export function Process() {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-amber-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-amber-600 font-semibold text-lg font-tway mb-4 block">
                        PROCESS
                    </span>
                    <h2 className="text-4xl font-bold mb-4 font-aggro">
                        광고 진행 과정
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto font-tway">
                        체계적인 프로세스로 효과적인 마케팅을 진행합니다.
                        <br />
                        각 단계별 전문가의 검수를 통해 높은 퀄리티를 보장합니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="p-6 hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center justify-between mb-4">
                                    <step.icon className={`w-12 h-12 ${step.color}`} />
                                    <span className={`text-4xl font-bold ${step.color} font-tway`}>
                                        {step.number}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 font-aggro">{step.title}</h3>
                                <p className="text-gray-600 font-tway">{step.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
