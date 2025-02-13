import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { Loading } from "@/components/ui/loading";
import { ArrowRight } from "lucide-react";

interface Service {
    title: string;
    description: string;
    features: string[];
    minPrice: string;
    image: string;
    link: string;
    category: string;
    gradient: string;
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
            minPrice: "100만원",
            image: "/logo/business-plan.png",
            link: "/business-plan",
            category: "business",
            gradient: "from-blue-500 to-purple-500"
        },
        {
            title: "개발 외주",
            description: "AI AgentForce를 통한 최고의 프로덕트를, 최고의 가격에 제공하는 IT 개발 에이전시입니다.",
            features: ["53% 개발 효율 증가", "3배 빠른 개발", "3배 저렴한 비용"],
            minPrice: "100만원",
            image: "/logo/boltlab.png",
            link: "/boltlab",
            category: "business",
            gradient: "from-[#626ae2] to-[#95c5fa]"
        },
        {
            title: "에브리타임",
            description: "대학생 커뮤니티 1위 에브리타임에서 진행되는 마케팅 서비스입니다.",
            features: ["대학생 타겟 마케팅", "실시간 반응 분석", "맞춤형 컨텐츠 제작"],
            minPrice: "1만원",
            image: "/logo/everytime.png",
            link: "/everytime",
            category: "community",
            gradient: "from-[#f03e3e] to-[#ff8787]"
        },
        {
            title: "네이버 카페",
            description: "맘카페, 뷰티, 지역, 취준생 등 다양한 네이버 카페에서 진행되는 바이럴 마케팅 서비스입니다.",
            features: ["타겟 카페 분석", "자연스러운 바이럴", "실시간 모니터링"],
            minPrice: "3만원",
            image: "/logo/navercafe.png",
            link: "/naver-cafe",
            category: "naver",
            gradient: "from-[#03AC0E] to-[#02891B]"
        },
        {
            title: "네이버 플레이스",
            description: "네이버 지도와 검색에서 매장의 노출도를 높여 방문자 수를 증가시키는 서비스입니다.",
            features: ["매장 트래픽 증가", "상위노출 최적화", "실시간 순위 분석"],
            minPrice: "50만원",
            image: "/logo/naverplace.png",
            link: "/naver-place",
            category: "naver",
            gradient: "from-[#03AC0E] to-[#02891B]"
        },
        {
            title: "블라인드",
            description: "직장인들의 솔직한 이야기가 있는 블라인드에서 진행되는 마케팅 서비스입니다.",
            features: ["직장인 타겟 마케팅", "실시간 모니터링", "전문가 컨설팅"],
            minPrice: "5만원",
            image: "/logo/blind.png",
            link: "/blind",
            category: "community",
            gradient: "from-gray-600 to-gray-800"
        },
        {
            title: "틱톡",
            description: "글로벌 숏폼 플랫폼 틱톡에서 진행되는 마케팅 서비스입니다.",
            features: ["MZ세대 타겟 마케팅", "트렌드 분석", "바이럴 영상 제작"],
            minPrice: "25만원",
            image: "/logo/tiktok.png",
            link: "/tiktok",
            category: "influencer",
            gradient: "from-[#00F2EA] to-[#FF0050]"
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
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6 font-aggro">
                                마케팅 서비스
                            </h1>
                            <p className="text-xl text-gray-400 mb-12 font-tway">
                                브릿지마케팅의 다양한 서비스를 만나보세요
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                {categories.map((category, index) => (
                                    <motion.button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                                            selectedCategory === category.id
                                                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                                                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                                        }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredServices.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="group relative"
                                >
                                    <div className="absolute inset-0.5 bg-gradient-to-r opacity-50 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-sm"></div>
                                    <div className="relative bg-gray-900 rounded-2xl p-8 hover:bg-gray-800/90 transition-colors">
                                        <div className="flex items-center justify-center mb-6">
                                            <img 
                                                src={service.image} 
                                                alt={service.title} 
                                                className="h-12 group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4 text-center font-aggro">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-400 mb-6 text-center font-tway">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-3 mb-6">
                                            {service.features.map((feature, featureIndex) => (
                                                <motion.li
                                                    key={feature}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.1 }}
                                                    className="flex items-center text-gray-400 font-tway"
                                                >
                                                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2" />
                                                    {feature}
                                                </motion.li>
                                            ))}
                                        </ul>
                                        <div className="text-center mb-6">
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-semibold font-tway">
                                                최소 {service.minPrice}
                                            </span>
                                        </div>
                                        <Link
                                            to={service.link}
                                            state={handleServiceClick()}
                                            className="group/button flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg text-center transition-all duration-300 font-tway"
                                        >
                                            자세히 보기
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
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
                        transition={{ duration: 0.6 }}
                    />
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-aggro">
                                맞춤형 서비스가 필요하신가요?
                            </h2>
                            <p className="text-xl text-gray-400 mb-8 font-tway">
                                브릿지마케팅의 전문가와 상담하세요
                            </p>
                            <motion.a
                                href="http://pf.kakao.com/_CYGdn/chat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 font-tway"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                무료 상담하기
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </motion.a>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
} 