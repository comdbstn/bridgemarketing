import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

interface ServicePlan {
    name: string;
    price: string;
    description: string;
    features: string[];
}

interface Services {
    [key: string]: ServicePlan[];
}

export function Pricing() {
    const [selectedService, setSelectedService] = useState<string>("정부지원사업계획서");

    const services: Services = {
        "정부지원사업계획서": [
            {
                name: "Standard",
                price: "100만원",
                description: "초기 양식이 어느정도 준비된 분들을 위한 패키지",
                features: [
                    "제공해드리는 초기 현황 파악 설문 자료를 대표님께서 작성",
                    "1차 비대면 미팅 컨설팅",
                    "전문가의 맞춤형 첨삭",
                    "3회 수정 기회 제공",
                    "전화 및 비대면 화상채팅 상담 지원"
                ]
            },
            {
                name: "Premium",
                price: "250만원",
                description: "초기 양식이 거의 준비되지 않아, 처음부터 전문가와 함께 시작하시는 분들을 위한 패키지",
                features: [
                    "초기 양식 작성 가이드 제공",
                    "맞춤형 문서 기획 및 작성",
                    "심층 비대면 미팅 2회",
                    "프리미엄 전문가 컨설팅 및 산출물 제공",
                    "무제한 수정 기회",
                    "전화 및 비대면 화상채팅 상담 지원",
                    "전담 매니저 배정",
                    "6개월 사후관리"
                ]
            }
        ],
        "회사소개서": [
            {
                name: "Standard",
                price: "50만원",
                description: "초기 양식이 어느 정도 준비되어 고도화가 필요하신 분들을 위한 상품",
                features: [
                    "회사 소개서 고객 입장 약점 체크",
                    "B2C/B2B 특화 회사 소개서 작성 방향성 체크",
                    "1차 비대면 미팅 컨설팅",
                    "전문가의 맞춤형 첨삭",
                    "3회 수정 기회 제공",
                    "전화 및 비대면 화상채팅 상담 지원"
                ]
            },
            {
                name: "Premium",
                price: "100만원",
                description: "처음부터 전문가와 함께 회사소개서 제작을 시작하시는 분들을 위한 상품",
                features: [
                    "맞춤형 문서 기획 및 작성",
                    "심층 비대면 미팅 2회",
                    "프리미엄 컨설팅",
                    "10회 수정 기회",
                    "고객 유형에 따른 회사 소개서 심층 검토",
                    "미팅 시 회사 소개서 활용 방법 제시",
                    "회사 소개서 활용 이메일 영업 방법 안내",
                    "전담 매니저 배정",
                    "3개월 사후 관리"
                ]
            }
        ],
        "IR": [
            {
                name: "Standard",
                price: "50만원",
                description: "투자 제안서용 IR이 아닌, 가볍게 공모전, 경진대회 등에 갖고 가실 IR",
                features: [
                    "IR 독자 입장 약점 체크",
                    "B2C/B2B 특화 IR 작성 방향성 체크",
                    "1차 비대면 미팅 컨설팅",
                    "전문가의 맞춤형 첨삭",
                    "3회 수정 기회 제공",
                    "발표 준비 지원",
                    "전화 및 비대면 화상채팅 상담 지원"
                ]
            },
            {
                name: "Deluxe",
                price: "100만원 / 초안 없으실 시, 200만원",
                description: "정부지원사업 1차 선정 이후 IR 발표 자료가 필요하신 분들",
                features: [
                    "지원 사업 별 발표 자료 방향성 제안",
                    "2회 비대면 미팅컨설팅",
                    "전문가의 맞춤형 첨삭",
                    "10회 수정 기회 제공",
                    "전화 및 비대면 화상채팅 상담 지원",
                    "발표 피드백 및 코칭"
                ]
            },
            {
                name: "Premium",
                price: "200만원",
                description: "기업 투자 유치 제안용 IR 작성",
                features: [
                    "IR 고객 입장 강/약점 체크",
                    "B2C/B2B 특화 IR 작성 방향성 제안",
                    "2회 비대면 미팅 컨설팅",
                    "전문가의 맞춤형 첨삭",
                    "10회 수정 기회 제공",
                    "전화 및 비대면 화상채팅 상담 지원",
                    "발표 피드백 및 코칭",
                    "전문가 인맥 풀 내 AC/VC 미팅 제안권 1회 무료"
                ]
            }
        ],
        "B2B·G 제안서": [
            {
                name: "Premium",
                price: "500만원",
                description: "원하시는 영업 목표 고객 또는 수주하시고 싶은 B2B·G 용역 사업이 명확하신 분들",
                features: [
                    "원하시는 제안서 목적성 체크",
                    "1차 비대면 미팅 컨설팅",
                    "제안서 작성 방향성 제안",
                    "2회 비대면 미팅 컨설팅",
                    "전문가의 맞춤형 첨삭",
                    "10회 수정 기회 제공",
                    "전화 및 비대면 화상채팅 상담 지원"
                ]
            }
        ]
    };

    return (
        <section className="py-20 bg-gradient-to-br from-[#626ae2]/10 to-[#7884eb]/5">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative group inline-block"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#626ae2] to-[#7884eb] opacity-50 group-hover:opacity-100 transition-all duration-300 rounded-2xl blur-[2px] group-hover:blur-[3px]" />
                        <div className="relative bg-white rounded-2xl p-8">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-aggro">
                                서비스 요금제
                            </h2>
                            <p className="text-[#626ae2] font-tway">
                                합리적인 가격으로 최고의 서비스를 제공합니다
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* 서비스 선택 탭 */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex flex-wrap justify-center items-center gap-3">
                        {Object.keys(services).map((service) => (
                            <motion.button
                                key={service}
                                onClick={() => setSelectedService(service)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                                    selectedService === service
                                        ? "bg-[#626ae2] text-white"
                                        : "bg-white text-gray-600 hover:bg-gray-50"
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {service}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* 요금제 카드 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {services[selectedService].map((plan: ServicePlan) => (
                        <motion.div
                            key={plan.name}
                            className="relative group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative bg-white rounded-2xl p-8 border border-[#7884eb]/20 hover:border-[#7884eb]/40 transition-all duration-300">
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 font-aggro">{plan.name}</h3>
                                    <p className="text-gray-600 mb-4 min-h-[48px] font-tway">{plan.description}</p>
                                    <div className="text-[#626ae2] text-3xl font-bold font-tway">{plan.price}</div>
                                </div>
                                <ul className="space-y-4">
                                    {plan.features.map((feature: string) => (
                                        <li key={feature} className="flex items-start gap-2">
                                            <div className="rounded-full p-1 bg-gradient-to-r from-[#626ae2] to-[#7884eb] mt-0.5 shrink-0">
                                                <Check className="w-3 h-3 text-white" />
                                            </div>
                                            <span className="text-gray-600 font-tway">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8">
                                    <a
                                        href="http://pf.kakao.com/_CYGdn/chat"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full py-3 px-6 text-center text-white bg-gradient-to-r from-[#626ae2] to-[#7884eb] rounded-lg hover:opacity-90 transition-all duration-300 font-tway"
                                    >
                                        시작하기
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 