import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Loading } from "@/components/ui/loading";

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

export default function InsightsPage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setTimeout(() => setIsLoading(false), 300);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) return <Loading />;

    const posts: Post[] = [
        {
            id: "1",
            title: "에브리타임 마케팅 완벽 가이드: 대학생 마케팅의 새로운 지평",
            description: "대학생 마케팅의 핵심 채널 에브리타임, 월간 활성 사용자 450만 명을 보유한 이 플랫폼의 마케팅 전략을 상세히 공개합니다.",
            thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000",
            category: "마케팅 가이드",
            date: "2024.01.15",
            readTime: "10분",
            tags: ["대학생 마케팅", "에브리타임", "커뮤니티 마케팅"]
        },
        {
            id: "2",
            title: "블라인드로 시작하는 B2B 마케팅: 직장인 커뮤니티 공략 가이드",
            description: "500만 직장인이 선택한 블라인드, B2B 마케팅의 새로운 기회를 제시합니다. 블라인드를 통한 브랜드 신뢰도 구축과 리드 확보 전략을 공개합니다.",
            thumbnail: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000",
            category: "B2B 마케팅",
            date: "2024.01.10",
            readTime: "12분",
            tags: ["B2B 마케팅", "블라인드", "브랜드 신뢰도", "리드 제너레이션"]
        },
        {
            id: "3",
            title: "틱톡 마케팅의 모든 것: MZ세대 공략을 위한 숏폼 콘텐츠 전략",
            description: "월간 활성 사용자 10억 명을 보유한 틱톡, Z세대의 80%가 사용하는 이 플랫폼에서 성공적인 마케팅 전략을 공개합니다.",
            thumbnail: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?q=80&w=1000",
            category: "소셜 마케팅",
            date: "2024.01.05",
            readTime: "15분",
            tags: ["틱톡", "숏폼", "MZ세대", "바이럴 마케팅", "소셜미디어"]
        },
        {
            id: "4",
            title: "데이터 기반 마케팅의 완벽 가이드: 성과를 두 배로 높이는 전략",
            description: "구글 애널리틱스 4와 메타 픽셀부터 고급 데이터 분석까지, 실제 사례를 통해 배우는 데이터 기반 마케팅 성공 전략",
            thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
            category: "데이터 분석",
            date: "2024.01.01",
            readTime: "13분",
            tags: ["데이터 분석", "GA4", "메타 픽셀", "ROI", "퍼포먼스 마케팅"]
        },
        {
            id: "5",
            title: "2024 디지털 마케팅 트렌드: AI와 퍼스널라이제이션의 시대",
            description: "ChatGPT부터 생성형 AI까지, 2024년 디지털 마케팅의 판도를 바꿀 핵심 트렌드와 실전 적용 전략을 공개합니다.",
            thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000",
            category: "트렌드",
            date: "2024.01.15",
            readTime: "14분",
            tags: ["AI 마케팅", "ChatGPT", "퍼스널라이제이션", "마케팅 자동화", "디지털 트렌드"]
        },
        {
            id: "6",
            title: "브랜드 스토리텔링의 힘: 감동을 전하는 콘텐츠 제작 가이드",
            description: "단순한 정보 전달을 넘어 고객의 마음을 움직이는 브랜드 스토리텔링 전략과 실전 사례를 소개합니다.",
            thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1000",
            category: "콘텐츠 마케팅",
            date: "2024.01.20",
            readTime: "11분",
            tags: ["브랜드 스토리", "콘텐츠 마케팅", "디지털 스토리텔링", "브랜딩", "바이럴"]
        }
    ];

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
                                인사이트
                            </h1>
                            <p className="text-xl text-gray-400">
                                브릿지마케팅의 마케팅 인사이트를 만나보세요
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="group bg-gray-900/50 rounded-2xl overflow-hidden hover:bg-gray-800/50 transition-colors"
                                >
                                    <Link to={`/insights/${post.id}`} className="block p-6">
                                        <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                            <img 
                                                src={post.thumbnail} 
                                                alt={post.title}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 left-4 z-20">
                                                <span className="px-3 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-400 text-sm border border-purple-500/20">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{post.date}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{post.readTime} 읽기</span>
                                                </div>
                                            </div>
                                            <h2 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors line-clamp-2">
                                                {post.title}
                                            </h2>
                                            <p className="text-gray-400 line-clamp-2">
                                                {post.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {post.tags.map(tag => (
                                                    <span 
                                                        key={tag}
                                                        className="inline-flex items-center gap-1 px-3 py-1 bg-gray-800/50 rounded-full text-gray-400 text-sm group-hover:bg-purple-500/10 group-hover:text-purple-400 transition-colors"
                                                    >
                                                        <Tag className="w-3 h-3" />
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
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
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                마케팅 인사이트를 구독하세요
                            </h2>
                            <p className="text-xl text-gray-400 mb-8">
                                브릿지마케팅의 최신 마케팅 인사이트를 이메일로 받아보세요
                            </p>
                            <form className="flex gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="이메일 주소를 입력하세요"
                                    className="flex-1 px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                                >
                                    구독하기
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
} 