import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { Loading } from "@/components/ui/loading";
import { BackButton } from "@/components/common/back-button";
import { KakaoChatButton } from "@/components/common/kakao-chat-button";

interface Post {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    category: string;
    date: string;
    readTime: string;
    tags: string[];
}

const insights = [
    {
        title: "에브리타임 마케팅 성공사례",
        description: "대학생 타겟 마케팅의 새로운 기준, 에브리타임 마케팅 성공 사례를 소개합니다.",
        category: "Case Study",
        date: "2024.03",
        image: "/insights/everytime-case.jpg",
        gradient: "from-red-400 to-pink-400",
        link: "/insights/everytime-case"
    },
    {
        title: "블라인드 바이럴 마케팅 전략",
        description: "직장인 커뮤니티 1위 블라인드에서의 효과적인 바이럴 마케팅 전략을 알아봅니다.",
        category: "Marketing",
        date: "2024.03",
        image: "/insights/blind-viral.jpg",
        gradient: "from-blue-400 to-cyan-400",
        link: "/insights/blind-viral"
    },
    {
        title: "AI 개발의 미래",
        description: "AgentForce AI가 가져올 개발 프로세스의 혁신과 미래에 대해 알아봅니다.",
        category: "Technology",
        date: "2024.03",
        image: "/insights/ai-future.jpg",
        gradient: "from-purple-400 to-indigo-400",
        link: "/insights/ai-future"
    },
    {
        title: "정부지원사업 선정 노하우",
        description: "정부지원사업 선정을 위한 사업계획서 작성 노하우와 주요 체크포인트를 공개합니다.",
        category: "Business",
        date: "2024.03",
        image: "/insights/government-support.jpg",
        gradient: "from-blue-400 to-indigo-400",
        link: "/insights/government-support"
    }
];

const glowAnimation = {
    opacity: [0.4, 0.6, 0.4],
    scale: [1, 1.2, 1],
    transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

export default function InsightsPage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) return <Loading />;

    return (
        <div className="min-h-screen bg-black overflow-hidden relative">
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
                            Our Insights
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
                                    인사이트
                                </span>
                            </h2>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-xl text-gray-400 max-w-3xl mx-auto font-tway"
                        >
                            마케팅과 기술에 대한 전문적인 인사이트를 공유합니다
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {insights.map((insight, index) => (
                            <motion.div
                                key={insight.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"
                            >
                                <Link to={insight.link} className="block">
                                    <div className="absolute -inset-px bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                    <div className="relative bg-purple-500/5 backdrop-blur-xl border-2 border-purple-500/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-500">
                                        <div className="relative aspect-[16/9] mb-6 rounded-lg overflow-hidden">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${insight.gradient} opacity-20`} />
                                            <img 
                                                src={insight.image} 
                                                alt={insight.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${insight.gradient} text-white font-tway`}>
                                                {insight.category}
                                            </span>
                                            <span className="text-gray-400 text-sm font-tway">
                                                {insight.date}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 text-white font-aggro group-hover:text-purple-400 transition-colors duration-300">
                                            {insight.title}
                                        </h3>
                                        <p className="text-gray-400 font-tway mb-8">
                                            {insight.description}
                                        </p>
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

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        </div>
    );
} 