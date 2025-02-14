import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BackButton } from "@/components/common/back-button";
import { KakaoChatButton } from "@/components/common/kakao-chat-button";
import { Footer } from "@/components/common/Footer";
import { ArrowRight } from "lucide-react";

const insights = [
    {
        id: 1,
        title: "2024년 마케팅 트렌드: MZ세대를 사로잡는 전략",
        description: "변화하는 소비자 트렌드와 함께 성장하는 마케팅 전략을 소개합니다. MZ세대의 특성을 이해하고, 그들과 효과적으로 소통하는 방법을 알아봅니다.",
        date: "2024.03.15",
        category: "마케팅 트렌드",
        image: "/insights/1.jpg"
    },
    {
        id: 2,
        title: "에브리타임 마케팅 성공사례 분석",
        description: "대학생 타겟 마케팅의 핵심 플랫폼인 에브리타임에서의 성공적인 캠페인 사례를 분석합니다.",
        date: "2024.03.10",
        category: "성공사례",
        image: "/insights/2.jpg"
    },
    {
        id: 3,
        title: "블라인드 마케팅의 효과적인 전략",
        description: "직장인 커뮤니티에서의 효과적인 마케팅 방법과 주의사항을 상세히 알아봅니다.",
        date: "2024.03.05",
        category: "마케팅 전략",
        image: "/insights/3.jpg"
    },
    {
        id: 4,
        title: "틱톡 마케팅: 숏폼 콘텐츠의 힘",
        description: "숏폼 콘텐츠가 주도하는 새로운 마케팅 트렌드와 틱톡 플랫폼의 특성을 분석합니다.",
        date: "2024.02.28",
        category: "콘텐츠 마케팅",
        image: "/insights/4.jpg"
    },
    {
        id: 5,
        title: "스타트업을 위한 사업계획서 작성 가이드",
        description: "투자 유치를 위한 효과적인 사업계획서 작성 방법과 주요 포인트를 소개합니다.",
        date: "2024.02.20",
        category: "사업계획",
        image: "/insights/5.jpg"
    },
    {
        id: 6,
        title: "AI 개발이 바꾸는 비즈니스의 미래",
        description: "AI 기술의 발전이 가져올 비즈니스 환경의 변화와 준비해야 할 점들을 알아봅니다.",
        date: "2024.02.15",
        category: "기술 트렌드",
        image: "/insights/6.jpg"
    }
];

export default function InsightsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "인사이트 | 브릿지마케팅";
    }, []);

    return (
        <div className="min-h-screen bg-black">
            <BackButton />
            <KakaoChatButton />
            
            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,80,220,0.15),transparent_70%)]" />
                </motion.div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-bold text-white mb-6 font-aggro"
                        >
                            마케팅 인사이트
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-gray-400 font-tway"
                        >
                            브릿지마케팅의 전문가들이 제공하는<br />
                            최신 마케팅 트렌드와 인사이트를 만나보세요
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Insights Grid */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {insights.map((insight, index) => (
                            <motion.div
                                key={insight.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group"
                            >
                                <Link to={`/insights/${insight.id}`} className="block">
                                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                                        <img
                                            src={insight.image}
                                            alt={insight.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute bottom-4 left-4 z-20">
                                            <span className="px-3 py-1 bg-purple-600/80 text-white text-sm rounded-full font-tway">
                                                {insight.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-200 font-aggro">
                                            {insight.title}
                                        </h3>
                                        <p className="text-gray-400 font-tway line-clamp-2">
                                            {insight.description}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-500 font-tway">{insight.date}</span>
                                            <ArrowRight className="w-5 h-5 text-purple-500 group-hover:translate-x-1 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
} 