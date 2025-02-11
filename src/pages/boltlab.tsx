import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BackButton } from "@/components/navigation/back-button";
import { KakaoChatButton } from "@/components/chat/kakao-chat-button";
import { Footer } from "@/components/layout/Footer";
import { useCountAnimation } from "@/hooks/use-count-animation";
import { ImageModal } from "@/components/ui/image-modal";

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
        <div className="min-h-screen bg-white">
            <BackButton />
            <KakaoChatButton />
            
            {/* Hero Section */}
            <section className="relative min-h-[100vh] w-full flex items-center bg-gradient-to-br from-[#626ae2] via-[#7884eb] to-[#95c5fa] overflow-hidden">
                {/* Background patterns */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIxMDAlIiB5MT0iMjEuMTgyJSIgeDI9IjUwJSIgeTI9IjEwMCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZGIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRiIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNLTM1Ljg5IDQ4NC4yMzdDLTEwLjI0NyA1MjIuMDg0IDIyNy4xNDIgNTE3LjMwMiAyNjcuMTAzIDUwOS4zMzFjNi42MDktMS4zMjEgMTguNDk1LTMuNjA3IDM1LjY1OC02Ljg1OCAxNDQuMDEtMjcuMjMgMjE3LjI0OC0xMDkuNDIgMzA2Ljk0NS0xMDkuNDIgODkuNjk3IDAgMTc0LjE1MSAxMC43MzMgMzY5LjI4NCA3Mi4yMyAxOTUuMTMyIDYxLjQ5NSAyOTUuMDExIDY5LjIzIDM5OS4wNTUgNTMuMjNDMTQ4Mi4wNDIgNDgxLjE4NSAxNTQ0IDQ1OS4xMTIgMTU0NCA0NTkuMTEyVjBILTYwLjA5MXY0MzkuNDk2YzEuNzMgOC44MzggMTEuNTMgMjUuNDYyIDI0LjIwMSA0NC43NDF6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')] bg-cover bg-center opacity-10 animate-pulse" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="space-y-12 mb-12">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="font-['Changa'] text-[28px] sm:text-[50px] font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-[#c6e0fc] to-[#FFFFFF] select-none"
                            >
                                BRIDGE MARKETING
                            </motion.p>
                            <div className="flex items-center justify-center gap-12">
                                <motion.img
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    src="/logo/boltlab.png"
                                    alt="서비스 개발 로고"
                                    className="w-28 h-28 object-contain rounded-2xl bg-white p-2"
                                />
                                <motion.h1
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="font-['Changa'] text-[40px] sm:text-[100px] font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-[#c6e0fc] via-[#FFFFFF] to-[#c6e0fc] select-none leading-none"
                                >
                                    DEVELOPMENT
                                </motion.h1>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-3xl sm:text-5xl font-bold text-white font-aggro"
                            >
                                최신 기술로 혁신하는 개발 서비스
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-lg sm:text-xl text-white/90 px-4 font-tway"
                            >
                                AI 기술과 전문성으로 비즈니스의 디지털 혁신을 지원합니다.
                                <br className="hidden sm:block" />
                                웹, 모바일, AI 솔루션까지 모든 개발 니즈를 충족시켜 드립니다.
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white"
                            >
                                <h3 className="text-2xl sm:text-4xl font-bold mb-2" ref={projectRef}>{projectCount}+</h3>
                                <p className="text-sm sm:text-base text-white/80">프로젝트 완수</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white"
                            >
                                <h3 className="text-2xl sm:text-4xl font-bold mb-2" ref={satisfactionRef}>{satisfactionRate}%</h3>
                                <p className="text-sm sm:text-base text-white/80">고객 만족도</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white"
                            >
                                <h3 className="text-2xl sm:text-4xl font-bold mb-2" ref={recontractRef}>{recontractRate}%</h3>
                                <p className="text-sm sm:text-base text-white/80">재계약률</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            AI 시대의 개발 비용과 효율
                            <br />
                            이제는 달라져야 합니다
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <p className="text-3xl font-bold text-[#626ae2] mb-2">{stat.number}</p>
                                <p className="text-gray-600">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-[#f8faff]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            주요 특징
                        </h2>
                        <p className="text-xl text-gray-600">
                            최신 기술과 전문성으로 최고의 서비스를 제공합니다
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-lg"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            개발 서비스
                        </h2>
                        <p className="text-xl text-gray-600">
                            비즈니스 성장을 위한 최적의 개발 솔루션을 제공합니다
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-[#f8faff] p-8 rounded-2xl"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h3>
                                <p className="text-gray-600 mb-4">{product.subtitle}</p>
                                <p className="text-2xl font-bold text-[#626ae2] mb-6">{product.price}</p>
                                <ul className="space-y-3">
                                    {product.features.map((feature) => (
                                        <li key={feature} className="flex items-center text-gray-600">
                                            <span className="w-1.5 h-1.5 bg-[#626ae2] rounded-full mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advantages Section */}
            <section className="py-20 bg-[#f8faff]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            서비스 강점
                        </h2>
                        <p className="text-xl text-gray-600">
                            차별화된 서비스로 고객의 성공을 지원합니다
                        </p>
                    </div>
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
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                                <p className="text-gray-600">{advantage.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            적용 분야
                        </h2>
                        <p className="text-xl text-gray-600">
                            다양한 산업 분야에서 검증된 개발 서비스를 제공합니다
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={industry.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-[#f8faff] p-8 rounded-2xl"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{industry.title}</h3>
                                <p className="text-gray-600">{industry.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-[#f8faff]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            개발 프로세스
                        </h2>
                        <p className="text-xl text-gray-600">
                            체계적이고 효율적인 개발 프로세스로 성공적인 프로젝트를 완성합니다
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {process.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative"
                            >
                                {index < process.length - 1 && (
                                    <div className="hidden md:block absolute top-1/4 right-0 w-full h-0.5 bg-[#c6e0fc]" />
                                )}
                                <div className="relative bg-white p-6 rounded-xl shadow-lg text-center z-10">
                                    <div className="w-12 h-12 bg-[#626ae2] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                                        {step.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* References Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our References
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

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-[#626ae2] via-[#7884eb] to-[#95c5fa]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        프로젝트 문의하기
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        전문가와 상담하고 최적의 개발 솔루션을 제안받으세요
                        <br />
                        지금 바로 무료 컨설팅을 받아보세요
                    </p>
                    <button className="px-8 py-4 bg-white text-[#626ae2] rounded-full font-bold hover:bg-opacity-90 transition-colors">
                        상담 시작하기
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default BoltlabPage; 