import { Card } from "@/components/ui/card";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, FileEdit, Upload, BarChart, ArrowRight } from "lucide-react";

const steps = [
    {
        number: 1,
        icon: MessageSquare,
        title: "상담 및 견적 확인",
        description:
            "홍보가 필요한 서비스 종류, 타겟 카페 등 구매자 측이 희망하는 요소를 파악하고 그에 맞는 마케팅 방법을 제시합니다.",
        color: "from-[#2DB400] to-[#1EC800]",
    },
    {
        number: 2,
        icon: FileEdit,
        title: "초안 검토 및 수정",
        description:
            "구매자 측에서 준비한 원고를 바탕으로 네이버 카페의 분위기와 감성에 맞게 수정하는 절차를 거칩니다. 구매자 측의 확인이 완료되면 최종원고가 확정됩니다.",
        color: "from-[#1EC800] to-[#00C73C]",
    },
    {
        number: 3,
        icon: Upload,
        title: "업로드 진행",
        description:
            "업로드에 필요한 기한은 업로드 게시물 수에 따라 달라지지만, 통상 영업일 기준 약 3일 정도 소요됩니다.",
        color: "from-[#00C73C] to-[#2DB400]",
    },
    {
        number: 4,
        icon: BarChart,
        title: "보고 및 피드백",
        description: "업로드가 완료되면 캡쳐 및 스크린샷으로 홍보글 업로드 여부 확인 등을 종합하여 보고드립니다.",
        color: "from-[#2DB400] to-[#E5F7FF]",
    },
];

export function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    return (
        <section className='py-32 bg-white overflow-hidden' ref={containerRef}>
            <div className='container mx-auto px-4'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-4xl font-bold text-center mb-4 text-gray-900 font-aggro'
                >
                    광고 진행 과정
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-gray-700 text-center mb-24 max-w-2xl mx-auto font-tway'
                >
                    체계적인 프로세스로 효과적인 마케팅을 진행합니다
                </motion.p>

                <div className='max-w-5xl mx-auto'>
                    <div className='relative'>
                        {/* Progress Line */}
                        <div className='absolute left-[45px] top-0 bottom-0 w-1 bg-gray-100 sm:left-1/2 sm:-ml-[2px]' />
                        <motion.div
                            className='absolute left-[45px] top-0 w-1 bg-gradient-to-b from-[#2DB400] to-[#E5F7FF] origin-top sm:left-1/2 sm:-ml-[2px]'
                            style={{
                                scaleY: scrollYProgress,
                                height: "100%",
                            }}
                        />

                        {/* Steps */}
                        <div className='space-y-20'>
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className={`relative flex items-center ${
                                        index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                                    } flex-col`}
                                >
                                    {/* Number Circle - Moved above content on mobile */}
                                    <div className='flex items-center justify-center w-24 h-24 relative mb-4 sm:mb-0 order-first sm:order-none'>
                                        <motion.div
                                            className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-2xl font-bold text-white z-10`}
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            {step.number}
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <div className={`flex-1 ${index % 2 === 0 ? "sm:pr-16" : "sm:pl-16"}`}>
                                        <Card className='p-6 hover:shadow-lg transition-all duration-300 group'>
                                            <div className='flex flex-col sm:flex-row items-start gap-4'>
                                                <div
                                                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                                                >
                                                    <step.icon className='w-6 h-6 text-white' />
                                                </div>
                                                <div className='flex-1'>
                                                    <h3 className='text-xl font-bold mb-2 flex items-center gap-2 font-tway'>
                                                        {step.title}
                                                    </h3>
                                                    <p className='text-gray-600 leading-relaxed font-tway'>
                                                        {step.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>

                                    {/* Arrow for mobile */}
                                    <div className='sm:hidden absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full'>
                                        <ArrowRight className='w-6 h-6 text-gray-400 transform rotate-90' />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 
