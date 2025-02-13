import { motion } from "framer-motion";
import { Bot, Shield, Coins, Clock, Target, Layout, MessageSquare, BookMarked } from "lucide-react";

const features = [
    {
        icon: Bot,
        title: "전문가 작성",
        description: "각 분야 전문가들의 체계적인 프로세스로 정확하고 효과적인 사업계획서를 작성합니다."
    },
    {
        icon: Shield,
        title: "품질 보장",
        description: "전문가들의 꼼꼼한 검토로 완성도 높은 결과물을 보장합니다."
    },
    {
        icon: Coins,
        title: "합리적 비용",
        description: "체계적인 프로세스로 기존 대비 최대 3배까지 비용을 절감할 수 있습니다."
    },
    {
        icon: Clock,
        title: "신속한 작성",
        description: "평균 3일 이내 초안 작성, 1주일 이내 최종본 완성을 보장합니다."
    },
    {
        icon: Target,
        title: "맞춤형 전략",
        description: "각 사업의 특성과 목표에 맞는 맞춤형 전략을 제시합니다."
    },
    {
        icon: Layout,
        title: "체계적 구성",
        description: "심사기준에 맞춘 체계적인 구성으로 선정 가능성을 높입니다."
    },
    {
        icon: MessageSquare,
        title: "1:1 컨설팅",
        description: "전담 매니저의 1:1 맞춤형 컨설팅으로 성공을 지원합니다."
    },
    {
        icon: BookMarked,
        title: "사후 관리",
        description: "선정 이후에도 지속적인 사후 관리 서비스를 제공합니다."
    }
];

export function Features() {
    return (
        <section className='py-20 relative overflow-hidden bg-gradient-to-br from-[#626ae2]/10 to-[#7884eb]/5'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-4xl font-bold text-center mb-4 text-gray-900 font-aggro'
                >
                    사업계획서 작성의 강점
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-[#626ae2] text-center mb-12 max-w-2xl mx-auto px-4 font-tway'
                >
                    전문성과 체계적인 프로세스로 
                    <br />
                    성공적인 사업계획서 작성을 지원합니다
                </motion.p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className='bg-white/80 backdrop-blur-sm p-6 rounded-lg hover:bg-white transition-all duration-300 border border-[#7884eb]/20 hover:border-[#7884eb]/40'
                        >
                            <div className='w-12 h-12 rounded-lg bg-gradient-to-r from-[#626ae2] to-[#7884eb] flex items-center justify-center mb-4'>
                                <feature.icon className='w-6 h-6 text-white' />
                            </div>
                            <h3 className='text-xl font-bold mb-2 text-gray-900 font-aggro'>{feature.title}</h3>
                            <p className='text-gray-600 font-tway'>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 