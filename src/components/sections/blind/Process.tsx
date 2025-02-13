import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MessageSquare, FileEdit, Upload, BarChart } from "lucide-react";

const steps = [
    {
        number: 1,
        icon: MessageSquare,
        title: "상담 및 견적 확인",
        description:
            "홍보가 필요한 서비스 종류, 타겟 회사 등 구매자 측이 희망하는 요소를 파악하고 그에 맞는 마케팅 방법을 제시합니다.",
        color: "from-[#00A9FF] to-[#0077FF]",
    },
    {
        number: 2,
        icon: FileEdit,
        title: "초안 검토 및 수정",
        description:
            "구매자 측에서 준비한 원고를 바탕으로 블라인드 커뮤니티의 분위기와 감성에 맞게 수정하는 절차를 거칩니다. 구매자 측의 확인이 완료되면 최종원고가 확정됩니다.",
        color: "from-[#0077FF] to-[#0095FF]",
    },
    {
        number: 3,
        icon: Upload,
        title: "업로드 진행",
        description:
            "업로드에 필요한 기한은 업로드 게시물 수에 따라 달라지지만, 통상 영업일 기준 약 3일 정도 소요됩니다.",
        color: "from-[#0095FF] to-[#00A9FF]",
    },
    {
        number: 4,
        icon: BarChart,
        title: "보고 및 피드백",
        description: "업로드가 완료되면 캡쳐 및 스크린샷으로 홍보글 업로드 여부 확인 등을 종합하여 보고드립니다.",
        color: "from-[#00A9FF] to-[#E5F7FF]",
    },
];

export function Process() {
    return (
        <section className='py-20 bg-white overflow-hidden'>
            <div className='container mx-auto px-4'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-4xl font-bold text-center mb-4 font-aggro text-gray-900'
                >
                    광고 진행 과정
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-gray-800 text-center mb-16 max-w-2xl mx-auto font-tway'
                >
                    체계적인 프로세스로 효과적인 마케팅을 진행합니다
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
            </div>
        </section>
    );
}
