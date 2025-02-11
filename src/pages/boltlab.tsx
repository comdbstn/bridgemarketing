import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BackButton } from "@/components/navigation/back-button";
import { KakaoChatButton } from "@/components/chat/kakao-chat-button";
import { Footer } from "@/components/layout/Footer";
import { useCountAnimation } from "@/hooks/use-count-animation";
import { ImageModal } from "@/components/ui/image-modal";
import { Hero } from "@/components/sections/boltlab/Hero";
import { Products } from "@/components/sections/boltlab/Products";
import { Features } from "@/components/sections/boltlab/Features";
import { Stats } from "@/components/sections/boltlab/Stats";
import { Advantages } from "@/components/sections/boltlab/Advantages";
import { Industries } from "@/components/sections/boltlab/Industries";
import { References } from "@/components/sections/boltlab/References";
import { Process } from "@/components/sections/boltlab/Process";
import { Pricing } from "@/components/sections/boltlab/Pricing";
import { QA } from "@/components/sections/boltlab/QA";

interface Product {
    title: string;
    subtitle: string;
    price: string;
    features: string[];
}

interface Stat {
    number: string;
    label: string;
}

interface Feature {
    title: string;
    description: string;
}

interface Advantage {
    title: string;
    description: string;
}

interface Industry {
    title: string;
    description: string;
}

interface ProcessStep {
    step: string;
    title: string;
    description: string;
}

const BoltlabPage: React.FC = () => {
    const { count: projectCount, ref: projectRef } = useCountAnimation(100);
    const { count: satisfactionRate, ref: satisfactionRef } = useCountAnimation(98);
    const { count: recontractRate, ref: recontractRef } = useCountAnimation(85);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const products: Product[] = [
        {
            title: "홈/랜딩페이지",
            subtitle: "매력적인 브랜드 경험 제공",
            price: "₩100,000~",
            features: [
                "반응형 디자인",
                "최적화된 성능",
                "모던한 UI/UX",
                "Analytics 트래킹"
            ]
        },
        {
            title: "웹 플랫폼",
            subtitle: "확장 가능한 웹 서비스 개발",
            price: "₩400,000~",
            features: [
                "SaaS 플랫폼",
                "커머스 솔루션",
                "맞춤형 웹 서비스",
                "실시간 데이터 처리"
            ]
        },
        {
            title: "모바일 앱",
            subtitle: "iOS/Android 앱 개발",
            price: "₩700,000~",
            features: [
                "네이티브 앱",
                "크로스플랫폼 앱",
                "하이브리드 앱",
                "PWA"
            ]
        },
        {
            title: "AI 솔루션",
            subtitle: "인공지능 서비스 통합",
            price: "₩1,000,000~",
            features: [
                "LLM 통합",
                "머신러닝 모델",
                "데이터 분석",
                "AI 워크플로우"
            ]
        }
    ];

    const stats: Stat[] = [
        { number: "53%", label: "개발 효율 증가" },
        { number: "3배", label: "빠른 개발" },
        { number: "98%", label: "고객 만족도" },
        { number: "3배", label: "저렴한 비용" },
        { number: "100+", label: "프로젝트 완수" },
        { number: "85%", label: "재계약률" }
    ];

    const features: Feature[] = [
        {
            title: "AI 기반 개발",
            description: "최신 AI 기술을 활용한 효율적인 개발 프로세스로 빠르고 정확한 결과물을 제공합니다."
        },
        {
            title: "품질 보장",
            description: "체계적인 테스트와 코드 리뷰를 통해 안정적이고 높은 품질의 서비스를 보장합니다."
        },
        {
            title: "비용 절감",
            description: "AI 기술과 효율적인 프로세스를 통해 기존 대비 최대 3배까지 개발 비용을 절감합니다."
        },
        {
            title: "신속한 대응",
            description: "24시간 모니터링과 즉각적인 이슈 대응으로 안정적인 서비스 운영을 지원합니다."
        }
    ];

    const advantages: Advantage[] = [
        {
            title: "기술 전문성",
            description: "최신 기술 스택과 개발 방법론을 활용한 전문적인 개발 서비스"
        },
        {
            title: "맞춤형 솔루션",
            description: "고객의 비즈니스 요구사항에 최적화된 맞춤형 개발 솔루션 제공"
        },
        {
            title: "투명한 프로세스",
            description: "주간 보고와 실시간 진행 상황 공유를 통한 투명한 프로젝트 관리"
        },
        {
            title: "지속적인 지원",
            description: "프로젝트 완료 후에도 지속적인 유지보수와 기술 지원 제공"
        }
    ];

    const industries: Industry[] = [
        {
            title: "스타트업",
            description: "빠른 시장 진입과 확장을 위한 MVP 개발 및 스케일업 지원"
        },
        {
            title: "기업",
            description: "기업 맞춤형 시스템 개발 및 레거시 시스템 현대화"
        },
        {
            title: "공공기관",
            description: "보안과 안정성이 검증된 공공 서비스 시스템 개발"
        },
        {
            title: "커머스",
            description: "확장 가능한 이커머스 플랫폼 개발 및 결제 시스템 통합"
        }
    ];

    const process: ProcessStep[] = [
        {
            step: "1",
            title: "요구사항 분석",
            description: "비즈니스 목표와 기술적 요구사항을 상세히 분석합니다."
        },
        {
            step: "2",
            title: "설계 및 기획",
            description: "최적의 아키텍처와 기술 스택을 선정하여 상세 설계를 진행합니다."
        },
        {
            step: "3",
            title: "개발 및 테스트",
            description: "애자일 방법론을 통한 반복적인 개발과 품질 검증을 수행합니다."
        },
        {
            step: "4",
            title: "배포 및 유지보수",
            description: "안정적인 서비스 운영과 지속적인 성능 최적화를 지원합니다."
        }
    ];

    return (
        <div className="min-h-screen w-full bg-white overflow-hidden">
            <BackButton />
            <KakaoChatButton />
            <Hero />
            <Products />
            <Features />
            <Stats />
            <Advantages />
            <Industries />
            
            {/* References Section */}
            <section className="py-20 bg-[#f8faff]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            레퍼런스
                        </h2>
                        <p className="text-xl text-gray-600">
                            볼트랩이 만든 다양한 프로젝트들을 소개합니다
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.from({ length: 17 }, (_, i) => i + 1).map((num) => (
                            <motion.div
                                key={num}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: num * 0.1 }}
                                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 cursor-pointer"
                                onClick={() => setSelectedImage(`/boltlab_reference/${num}.${num === 4 || num === 7 ? 'jpeg' : 'png'}`)}
                            >
                                <img
                                    src={`/boltlab_reference/${num}.${num === 4 || num === 7 ? 'jpeg' : 'png'}`}
                                    alt={`볼트랩 레퍼런스 ${num}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        ))}
                    </div>
                </div>
                <ImageModal
                    isOpen={!!selectedImage}
                    onClose={() => setSelectedImage(null)}
                    imageSrc={selectedImage || ''}
                />
            </section>
            
            <Process />
            <Pricing />
            <QA />
            <Footer />
        </div>
    );
}

export default BoltlabPage; 