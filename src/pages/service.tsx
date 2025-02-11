import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { Loading } from "@/components/ui/loading";

interface Service {
    title: string;
    description: string;
    features: string[];
    minPrice: string;
    image: string;
    link: string;
    category: string;
}

export default function ServicePage() {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const location = useLocation();
    const navigate = useNavigate();
    const shouldRestore = location.state?.shouldRestore;
    const savedScrollPosition = location.state?.scrollPosition;

    useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (shouldRestore && savedScrollPosition) {
            window.scrollTo(0, savedScrollPosition);
        }
    }, [shouldRestore, savedScrollPosition]);

    // 브라우저 뒤로가기 처리
    useEffect(() => {
        const handlePopState = () => {
            const currentScroll = window.scrollY;
            navigate('/', {
                state: { shouldRestore: true, scrollPosition: currentScroll }
            });
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, [navigate]);

    if (isLoading) return <Loading />;

    const services: Service[] = [
        {
            title: "사업계획서 첨삭",
            description: "정부지원사업계획서 전문 컨설팅, 예비창업자와 초기창업자를 위한 맞춤형 첨삭 서비스입니다.",
            features: ["정부지원사업 1,600종 커버", "만족도 100%, 1차 합격률 92%", "최저가 보장제"],
            minPrice: "10만원",
            image: "/logo/business-plan.png",
            link: "/business-plan",
            category: "business"
        },
        {
            title: "서비스 개발",
            description: "웹사이트부터 모바일 앱, AI 솔루션까지 전문적인 IT 개발 서비스를 제공합니다.",
            features: ["웹/앱 개발", "AI 솔루션", "맞춤형 개발"],
            minPrice: "10만원",
            image: "/logo/boltlab.png",
            link: "/boltlab",
            category: "business"
        },
        {
            title: "에브리타임",
            description: "대학생 커뮤니티 1위 에브리타임에서 진행되는 마케팅 서비스입니다.",
            features: ["대학생 타겟 마케팅", "실시간 반응 분석", "맞춤형 컨텐츠 제작"],
            minPrice: "1만원",
            image: "/logo/everytime.png",
            link: "/everytime",
            category: "community"
        },
        {
            title: "네이버 카페",
            description: "맘카페, 뷰티, 지역, 취준생 등 다양한 네이버 카페에서 진행되는 바이럴 마케팅 서비스입니다.",
            features: ["타겟 카페 분석", "자연스러운 바이럴", "실시간 모니터링"],
            minPrice: "3만원",
            image: "/logo/navercafe.png",
            link: "/naver-cafe",
            category: "naver"
        },
        {
            title: "네이버 플레이스",
            description: "네이버 지도와 검색에서 매장의 노출도를 높여 방문자 수를 증가시키는 서비스입니다.",
            features: ["매장 트래픽 증가", "상위노출 최적화", "실시간 순위 분석"],
            minPrice: "5만원",
            image: "/logo/naverplace.png",
            link: "/naver-place",
            category: "naver"
        },
        {
            title: "블라인드",
            description: "직장인들의 솔직한 이야기가 있는 블라인드에서 진행되는 마케팅 서비스입니다.",
            features: ["직장인 타겟 마케팅", "실시간 모니터링", "전문가 컨설팅"],
            minPrice: "5만원",
            image: "/logo/blind.png",
            link: "/blind",
            category: "community"
        },
        {
            title: "틱톡",
            description: "글로벌 숏폼 플랫폼 틱톡에서 진행되는 마케팅 서비스입니다.",
            features: ["MZ세대 타겟 마케팅", "트렌드 분석", "바이럴 영상 제작"],
            minPrice: "25만원",
            image: "/logo/tiktok.png",
            link: "/tiktok",
            category: "influencer"
        }
    ];

    const categories = [
        { id: "all", name: "전체" },
        { id: "business", name: "사업지원" },
        { id: "naver", name: "네이버" },
        { id: "community", name: "커뮤니티" },
        { id: "influencer", name: "인플루언서" }
    ];

    const filteredServices = selectedCategory === "all" 
        ? services 
        : services.filter(service => service.category === selectedCategory);

    const handleServiceClick = () => {
        const currentScroll = window.scrollY;
        return {
            state: {
                from: '/service',
                scrollPosition: currentScroll
            }
        };
    };

    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <main>
                <section className="pt-40 pb-20">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                마케팅 서비스
                            </h1>
                            <p className="text-xl text-gray-400 mb-12">
                                브릿지마케팅의 다양한 서비스를 만나보세요
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                {categories.map((category) => (
                                    <motion.button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                                            selectedCategory === category.id
                                                ? "bg-purple-600 text-white"
                                                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                                        }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {category.name}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {filteredServices.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="group bg-gray-900/50 rounded-2xl p-8 hover:bg-gray-800/50 transition-colors"
                                >
                                    <div className="flex items-center justify-center mb-6">
                                        <img 
                                            src={service.image} 
                                            alt={service.title} 
                                            className="h-12"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 text-center">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 mb-6 text-center">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-3 mb-6">
                                        {service.features.map((feature, featureIndex) => (
                                            <motion.li
                                                key={feature}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.1 }}
                                                className="flex items-center text-gray-400"
                                            >
                                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2" />
                                                {feature}
                                            </motion.li>
                                        ))}
                                    </ul>
                                    <div className="text-center mb-6">
                                        <span className="text-purple-400 font-semibold">
                                            최소 {service.minPrice}
                                        </span>
                                    </div>
                                    <Link
                                        to={service.link}
                                        state={handleServiceClick()}
                                        className="block w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-center transition-colors"
                                    >
                                        자세히 보기
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 relative overflow-hidden">
                    <motion.div 
                        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.1),transparent_70%)]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                지금 바로 시작하세요
                            </h2>
                            <p className="text-xl text-gray-400 mb-8">
                                브릿지마케팅과 함께 효과적인 마케팅을 시작해보세요
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center py-3 px-8 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                            >
                                상담 시작하기
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
} 