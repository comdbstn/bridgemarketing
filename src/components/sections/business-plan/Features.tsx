import { motion } from "framer-motion";
import { Users, GraduationCap, Store, FileText, Briefcase, Target, FileCheck, Clock, Trophy } from "lucide-react";

export function Features() {
    const features = [
        {
            icon: Target,
            title: "맞춤형 정부지원사업 마일스톤 제시",
            description: "서비스 구매 시, 각 사업체 및 대표님의 커리어 상황에 적절한 맞춤형 정부지원사업 마일스톤 상담 제공 가능",
        },
        {
            icon: FileCheck,
            title: "전문가의 기획 산출물 제공",
            description: "대표님 사업의 특성과 현황, 심사기준을 맞춤 고려해 현실적으로 합격 가능성을 극대화한 기획 산출물을 제공합니다.",
        },
        {
            icon: Clock,
            title: "빠른 피드백",
            description: "24시간 이내 피드백을 제공하여 신속한 수정과 보완이 가능합니다.",
        },
        {
            icon: Trophy,
            title: "합격률 보장",
            description: "92%의 높은 서류 합격률을 자랑하며, 무료 수정 1회 요청 가능하십니다.",
        },
    ];

    const recommendations = [
        {
            icon: Users,
            title: "예비 창업자",
            description: "사업자를 아직 등록하시지 않은, 사업을 하시고 싶으신 분들"
        },
        {
            icon: GraduationCap,
            title: "대학생 분들",
            description: "공모전·경진대회·학교 창업 동아리에 제출할 발표 자료·사업계획서가 필요하신 분"
        },
        {
            icon: Store,
            title: "소상공인 분들",
            description: "소상공인 지원사업 혜택을 받고 싶으신 분들 (예술가, 요식업계 등)"
        },
        {
            icon: FileText,
            title: "IR·회사소개서 작성이 필요하신 분들",
            description: "투자 유치나 회사 홍보를 위한 전문적인 문서가 필요하신 분들"
        },
        {
            icon: Briefcase,
            title: "용역 수주를 원하는 분들",
            description: "B2B 제안서 또는 B2G제안서 작성이 필요하신 분들"
        }
    ];

    return (
        <>
            <section className="py-20 bg-[#f8faff]">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            서비스 특장점
                        </h2>
                        <p className="text-lg text-gray-600">
                            Bridge Marketing만의 차별화된 서비스를 경험해보세요
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-14 h-14 rounded-full bg-[#626ae2]/10 flex items-center justify-center mb-4">
                                        <feature.icon className="w-7 h-7 text-[#626ae2]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 추천 대상 섹션 */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            이런 분들께 추천드립니다
                        </h2>
                        <p className="text-lg text-gray-600">
                            다양한 분야의 전문가들이 여러분의 성공을 도와드립니다
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {recommendations.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-[#f8faff] p-6 rounded-xl text-center hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-4 shadow-sm">
                                    <item.icon className="w-7 h-7 text-[#626ae2]" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
} 