import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BackButton } from "@/components/common/back-button";
import { KakaoChatButton } from "@/components/common/kakao-chat-button";
import { FileText, Code, GraduationCap, Building2 } from "lucide-react";
import { Loading } from "@/components/ui/loading";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";

interface Service {
    title: string;
    description: string;
    features: string[];
    minPrice: string;
    image: string;
    link: string;
    category: string;
    gradient: string;
    icon: React.ComponentType<{ className?: string }>;
}

const glowAnimation = {
    opacity: [0.4, 0.6, 0.4],
    scale: [1, 1.2, 1],
    transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

const categories = [
    { id: "all", name: "전체" },
    { id: "business", name: "사업지원" },
    { id: "viral", name: "바이럴마케팅" },
    { id: "naver", name: "네이버 마케팅" },
    { id: "influencer", name: "인플루언서 마케팅" }
];

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
            description: "전문가의 체계적인 프로세스로 성공적인 사업계획서를 작성합니다",
            features: ["전문가 작성", "품질 보장", "합리적 비용", "신속한 작성"],
            minPrice: "50만원",
            image: "/logo/business-plan.png",
            link: "/business-plan",
            category: "business",
            gradient: "from-blue-400 to-indigo-400",
            icon: FileText
        },
        {
            title: "개발 외주",
            description: "AI 기반 개발 플랫폼으로 최고의 프로덕트를 합리적인 가격에 제공합니다",
            features: ["AI 기반 개발", "빠른 개발 속도", "저렴한 비용", "높은 품질"],
            minPrice: "100만원",
            image: "/logo/boltlab.png",
            link: "/boltlab",
            category: "business",
            gradient: "from-purple-400 to-indigo-400",
            icon: Code
        },
        {
            title: "에브리타임",
            description: "450만 대학생이 사용하는 에브리타임에서 효과적인 마케팅을 진행합니다",
            features: ["대학생 타겟팅", "높은 도달률", "실시간 피드백", "데이터 분석"],
            minPrice: "1만원",
            image: "/logo/everytime.png",
            link: "/everytime",
            category: "community",
            gradient: "from-red-400 to-pink-400",
            icon: GraduationCap
        },
        {
            title: "네이버 카페",
            description: "맘카페, 뷰티, 지역, 취준생 등 다양한 네이버 카페에서 진행되는 바이럴 마케팅 서비스입니다.",
            features: ["타겟 카페 분석", "자연스러운 바이럴", "실시간 모니터링"],
            minPrice: "3만원",
            image: "/logo/navercafe.png",
            link: "/naver-cafe",
            category: "naver",
            gradient: "from-[#03AC0E] to-[#02891B]",
            icon: Building2
        },
        {
            title: "네이버 플레이스",
            description: "네이버 지도와 검색에서 매장의 노출도를 높여 방문자 수를 증가시키는 서비스입니다.",
            features: ["매장 트래픽 증가", "상위노출 최적화", "실시간 순위 분석"],
            minPrice: "50만원",
            image: "/logo/naverplace.png",
            link: "/naver-place",
            category: "naver",
            gradient: "from-[#03AC0E] to-[#02891B]",
            icon: Building2
        },
        {
            title: "블라인드",
            description: "800만 직장인이 사용하는 블라인드에서 자연스러운 바이럴마케팅을 진행합니다",
            features: ["직장인 타겟팅", "자연스러운 바이럴", "높은 신뢰도", "실시간 모니터링"],
            minPrice: "5만원",
            image: "/logo/blind.png",
            link: "/blind",
            category: "community",
            gradient: "from-blue-400 to-cyan-400",
            icon: Building2
        },
        {
            title: "틱톡",
            description: "글로벌 숏폼 플랫폼 틱톡에서 진행되는 마케팅 서비스입니다.",
            features: ["MZ세대 타겟 마케팅", "트렌드 분석", "바이럴 영상 제작"],
            minPrice: "25만원",
            image: "/logo/tiktok.png",
            link: "/tiktok",
            category: "influencer",
            gradient: "from-[#00F2EA] to-[#FF0050]",
            icon: Building2
        }
    ];

    const filteredServices = selectedCategory === "all"
        ? services
        : services.filter(service => service.category === selectedCategory);

    return (
        <div className="min-h-screen bg-black overflow-hidden relative">
            <Navbar />
            <BackButton />
            <KakaoChatButton />

            {/* Background Elements */}
            <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-indigo-900/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            />
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={glowAnimation}
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,80,220,0.15),transparent_50%)]" />
            </motion.div>

            {/* Content */}
            <div className="container mx-auto px-4 py-32 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-block px-8 py-3 bg-purple-500/10 rounded-full text-purple-300 text-lg border-2 border-purple-500/20 backdrop-blur-sm font-tway mb-8"
                        >
                            Our Services
                        </motion.span>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-5xl sm:text-6xl font-bold mb-8 font-aggro">
                                <span className="bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
                                    브릿지마케팅의
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                                    모든 서비스
                                </span>
                            </h2>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-xl text-gray-400 max-w-3xl mx-auto font-tway"
                        >
                            성공적인 비즈니스를 위한 최적의 솔루션을 제공합니다
                        </motion.p>
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-2 rounded-full font-tway text-sm transition-all duration-300 ${
                                    selectedCategory === category.id
                                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                                        : "bg-purple-500/10 text-purple-300 hover:bg-purple-500/20"
                                }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filteredServices.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"
                            >
                                <Link to={service.link} className="block">
                                    <div className="absolute -inset-px bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                    <div className="relative bg-purple-500/5 backdrop-blur-xl border-2 border-purple-500/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-500">
                                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                            <service.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className={`text-2xl font-bold mb-4 font-aggro bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-400 font-tway mb-8">
                                            {service.description}
                                        </p>
                                        <div className="grid grid-cols-2 gap-4">
                                            {service.features.map((feature, i) => (
                                                <div key={i} className="flex items-center gap-2">
                                                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                                                    <span className="text-sm text-gray-400 font-tway">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <ArrowRight className="w-6 h-6 text-purple-400" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
} 