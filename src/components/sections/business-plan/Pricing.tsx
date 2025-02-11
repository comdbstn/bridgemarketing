import { motion } from "framer-motion";
import { Check, FileText, FileCheck, Presentation, BarChart, Building2, PieChart, FileSpreadsheet } from "lucide-react";
import { useState } from "react";

interface ServicePlan {
    name: string;
    price: string;
    description: string;
    features: string[];
    process: string[];
}

interface Services {
    [key: string]: ServicePlan[];
}

export function Pricing() {
    const [selectedService, setSelectedService] = useState<string>("정부지원사업계획서");

    const getServiceIcon = (service: string, plan: string) => {
        switch(service) {
            case "정부지원사업계획서":
                return plan === "Standard" ? FileText : FileCheck;
            case "회사소개서":
                return plan === "Standard" ? Building2 : Presentation;
            case "IR":
                switch(plan) {
                    case "Standard":
                        return FileSpreadsheet;
                    case "Deluxe":
                        return PieChart;
                    default:
                        return BarChart;
                }
            default:
                return BarChart;
        }
    };

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
                ],
                process: [
                    "서비스 문의 및 상담",
                    "제공해드리는 초기 현황 파악 설문 자료를 대표님께서 작성",
                    "필요 자료 수집",
                    "1차 비대면 미팅 컨설팅",
                    "전문가 첨삭 진행",
                    "1차 결과물 확인",
                    "수정 및 완료"
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
                ],
                process: [
                    "서비스 문의 및 상담",
                    "제공해드리는 초기 현황 파악 설문 자료를 대표님께서 작성",
                    "아이디어 기획 미팅",
                    "필요 자료 수집",
                    "전략 수립 미팅",
                    "전문가 문서 작성",
                    "중간 점검 미팅",
                    "수정 및 완료"
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
                ],
                process: [
                    "서비스 문의 및 상담",
                    "제공해드리는 초기 현황 파악 설문 자료를 대표님께서 작성",
                    "필요 자료 수집",
                    "1차 비대면 미팅 컨설팅",
                    "전문가 첨삭 진행",
                    "1차 결과물 확인",
                    "수정 및 완료"
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
                ],
                process: [
                    "서비스 문의 및 상담",
                    "제공해드리는 초기 현황 파악 설문 자료를 대표님께서 작성",
                    "심층 비대면 비팅 2회",
                    "프리미엄 전문가 컨설팅 및 산출물 제공",
                    "10회 수정 기회 제공",
                    "전화 및 비대면 화상채팅 상담 지원"
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
                ],
                process: [
                    "서비스 문의 및 상담",
                    "제공해드리는 초기 현황 파악 설문 자료를 대표님께서 작성",
                    "필요 자료 수집",
                    "1차 비대면 미팅 컨설팅",
                    "전문가 첨삭 진행",
                    "1차 결과물 확인",
                    "수정 및 완료"
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
                ],
                process: [
                    "서비스 문의 및 상담",
                    "제공해드리는 초기 현황 파악 설문 자료를 대표님께서 작성",
                    "필요 자료 수집",
                    "심층 비대면 미팅 2회",
                    "전문가 컨설팅 및 산출물 제공",
                    "전화 및 비대면 화상채팅 상담 지원"
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
                ],
                process: [
                    "서비스 문의 및 상담",
                    "제공해드리는 초기 현황 파악 설문 자료를 대표님께서 작성",
                    "필요 자료 수집",
                    "심층 비대면 미팅 2회",
                    "프리미엄 전문가 컨설팅 및 산출물 제공",
                    "전화 및 비대면 화상채팅 상담 지원"
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
                ],
                process: [
                    "서비스 문의 및 상담",
                    "제공해드리는 초기 현황 파악 설문 자료를 대표님께서 작성",
                    "필요 자료 수집",
                    "심층 비대면 미팅 2회",
                    "프리미엄 전문가 컨설팅 및 산출물 제공",
                    "전화 및 비대면 화상채팅 상담 지원",
                    "수정 및 완료"
                ]
            }
        ]
    };

    return (
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
                        서비스 요금제
                    </h2>
                    <p className="text-xl text-gray-600">
                        프리랜서 플랫폼 판매자 비교 첨삭 완료 기준 최저가
                    </p>
                </motion.div>

                {/* 서비스 선택 탭 */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex flex-wrap justify-center items-center gap-4">
                        {Object.keys(services).map((service) => (
                            <motion.button
                                key={service}
                                onClick={() => setSelectedService(service)}
                                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
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
                    {services[selectedService].map((plan: ServicePlan, index: number) => {
                        const Icon = getServiceIcon(selectedService, plan.name);
                        return (
                            <motion.div
                                key={plan.name}
                                className="flex flex-col p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* 아이콘 */}
                                <div className="flex justify-center items-center h-20">
                                    <div className="w-14 h-14 rounded-full bg-[#626ae2]/10 flex items-center justify-center">
                                        <Icon className="w-7 h-7 text-[#626ae2]" />
                                    </div>
                                </div>

                                {/* 이름 & 가격 */}
                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                    <div className="flex flex-col items-center">
                                        <p className="text-3xl font-bold text-[#626ae2]">{plan.price}</p>
                                        <p className="text-sm text-gray-500 mt-1">/ 1회</p>
                                    </div>
                                </div>

                                {/* 설명 */}
                                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                    <p className="text-gray-600 text-center text-sm leading-relaxed">{plan.description}</p>
                                </div>

                                {/* 혜택 & 과정 */}
                                <div className="flex-1 space-y-6">
                                    {/* 주요 혜택 */}
                                    <div>
                                        <h4 className="font-bold text-lg mb-3 text-gray-900 text-center">주요 혜택</h4>
                                        <ul className="space-y-2">
                                            {plan.features.map((feature: string) => (
                                                <li key={feature} className="flex items-start bg-white p-2 rounded-lg">
                                                    <Check className="w-4 h-4 text-[#626ae2] mr-2 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* 진행 과정 */}
                                    <div>
                                        <h4 className="font-bold text-lg mb-3 text-gray-900 text-center">진행 과정</h4>
                                        <ul className="space-y-2">
                                            {plan.process.map((step: string, stepIndex: number) => (
                                                <li key={stepIndex} className="flex items-start bg-white p-2 rounded-lg">
                                                    <span className="w-5 h-5 rounded-full bg-[#626ae2] text-white flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                                                        {stepIndex + 1}
                                                    </span>
                                                    <span className="text-gray-600 text-sm leading-relaxed">{step}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* 시작하기 버튼 */}
                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <a
                                        href="http://pf.kakao.com/_CYGdn/chat"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full py-3 px-6 bg-[#626ae2] hover:bg-[#7884eb] text-white font-medium rounded-lg text-center transition-colors duration-300"
                                    >
                                        시작하기
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
} 