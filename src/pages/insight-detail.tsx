import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Loading } from "@/components/ui/loading";
import { useState, useEffect } from "react";

interface Section {
    title: string;
    content: string;
}

interface InsightPost {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    category: string;
    date: string;
    readTime: string;
    tags: string[];
    content: {
        introduction: string;
        sections: Section[];
        conclusion: string;
    };
}

export function InsightDetailPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    const posts: InsightPost[] = [
        {
            id: "1",
            title: "바이럴 마케팅의 새로운 트렌드와 브릿지마케팅의 전략",
            description: "2024년 바이럴 마케팅의 핵심 트렌드와 브릿지마케팅만의 차별화된 전략을 소개합니다",
            thumbnail: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1000",
            category: "바이럴 마케팅",
            date: "2024.03.15",
            readTime: "8분",
            tags: ["바이럴마케팅", "브릿지마케팅", "마케팅전략"],
            content: {
                introduction: "디지털 시대의 바이럴 마케팅은 끊임없이 진화하고 있습니다. 특히 브릿지마케팅은 차별화된 전략과 풍부한 경험을 바탕으로 고객사의 성공적인 바이럴 마케팅을 이끌어내고 있습니다. 오늘은 2024년 바이럴 마케팅의 주요 트렌드와 브릿지마케팅이 제시하는 혁신적인 전략에 대해 자세히 알아보겠습니다.",
                sections: [
                    {
                        title: "바이럴 마케팅의 현주소",
                        content: "현대의 바이럴 마케팅은 단순한 입소문을 넘어 과학적이고 전략적인 접근이 필요한 분야가 되었습니다. 브릿지마케팅은 수년간의 경험을 통해 효과적인 바이럴 마케팅 방법론을 개발했습니다. 특히 데이터 기반의 타겟팅, 실시간 모니터링, 그리고 콘텐츠 최적화를 통해 높은 성과를 달성하고 있습니다. 바이럴 마케팅의 성공을 위해서는 정확한 타겟 설정, 진정성 있는 메시지 전달, 그리고 지속적인 관리가 핵심입니다."
                    },
                    {
                        title: "브릿지마케팅의 차별화 전략",
                        content: "브릿지마케팅은 독자적인 바이럴 마케팅 전략을 통해 높은 성과를 창출하고 있습니다. 첫째, 각 플랫폼별 특성을 고려한 맞춤형 콘텐츠 제작으로 높은 공감대를 형성합니다. 둘째, 실제 사용자들의 자연스러운 리뷰와 후기를 통해 신뢰도를 높입니다. 셋째, AI 기반의 데이터 분석으로 캠페인 효과를 실시간으로 측정하고 최적화합니다. 이러한 전략적 접근을 통해 브릿지마케팅은 92%의 높은 고객 만족도를 달성하고 있습니다."
                    },
                    {
                        title: "성공적인 바이럴 마케팅의 핵심 요소",
                        content: "바이럴 마케팅의 성공을 위해서는 몇 가지 핵심 요소가 필요합니다. 먼저, 타겟 고객의 관심사와 니즈를 정확히 파악해야 합니다. 다음으로, 공감을 일으키는 스토리텔링이 중요합니다. 마지막으로, 지속적인 모니터링과 피드백 반영을 통한 개선이 필요합니다. 브릿지마케팅은 이러한 요소들을 체계적으로 관리하여 최적의 결과를 도출합니다."
                    }
                ],
                conclusion: "바이럴 마케팅의 성공은 전문성과 경험에서 비롯됩니다. 브릿지마케팅은 차별화된 전략과 체계적인 접근으로 고객사의 성공적인 바이럴 마케팅을 지원하고 있습니다. 앞으로도 끊임없는 혁신과 발전을 통해 더 나은 마케팅 솔루션을 제공할 것입니다."
            }
        },
        {
            id: "2",
            title: "에브리타임 마케팅으로 MZ세대 공략하기",
            description: "대학생 타겟 마케팅의 핵심 플랫폼, 에브리타임 마케팅 전략 가이드",
            thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000",
            category: "에브리타임 마케팅",
            date: "2024.03.10",
            readTime: "7분",
            tags: ["에브리타임마케팅", "대학생마케팅", "MZ세대"],
            content: {
                introduction: "에브리타임은 900만 대학생 회원을 보유한 국내 최대의 대학생 커뮤니티 플랫폼입니다. 브릿지마케팅은 에브리타임을 통해 MZ세대를 겨냥한 효과적인 마케팅 전략을 제시하고 있습니다. 대학생들의 일상이 된 에브리타임에서 어떻게 성공적인 마케팅을 펼칠 수 있는지 자세히 알아보겠습니다.",
                sections: [
                    {
                        title: "에브리타임 마케팅의 특징과 장점",
                        content: "에브리타임 마케팅의 가장 큰 장점은 정확한 타겟팅입니다. 학교별, 학과별로 세분화된 타겟팅이 가능하며, 실제 재학생들의 자연스러운 후기와 리뷰를 통해 높은 신뢰도를 확보할 수 있습니다. 브릿지마케팅은 이러한 에브리타임의 특성을 활용하여 자연스러운 바이럴 마케팅을 진행하고 있으며, 평균 300% 이상의 마케팅 효율을 달성하고 있습니다."
                    },
                    {
                        title: "효과적인 에브리타임 마케팅 전략",
                        content: "성공적인 에브리타임 마케팅을 위해서는 몇 가지 핵심 전략이 필요합니다. 첫째, 대학생들의 관심사와 트렌드를 반영한 콘텐츠 제작이 중요합니다. 둘째, 각 학교의 특성과 문화를 고려한 맞춤형 접근이 필요합니다. 셋째, 자연스러운 대화와 정보 공유를 통한 진정성 있는 커뮤니케이션이 핵심입니다. 브릿지마케팅은 이러한 전략을 통해 높은 참여율과 호응을 이끌어내고 있습니다."
                    },
                    {
                        title: "에브리타임 마케팅 성공 사례",
                        content: "브릿지마케팅의 에브리타임 마케팅 성공 사례를 살펴보면, 학생들의 실제 니즈를 반영한 자연스러운 정보 공유가 핵심이었습니다. 특히 취업, 학업, 생활 정보 등 대학생들의 관심사에 부합하는 콘텐츠를 제작하여 높은 참여율을 달성했습니다. 또한 학교별 특성을 고려한 맞춤형 콘텐츠로 타겟 고객과의 공감대를 형성했습니다."
                    }
                ],
                conclusion: "에브리타임 마케팅은 MZ세대를 공략하는 가장 효과적인 방법 중 하나입니다. 브릿지마케팅은 풍부한 경험과 전문성을 바탕으로 최적화된 에브리타임 마케팅 솔루션을 제공하고 있습니다. 정확한 타겟팅과 진정성 있는 콘텐츠로 높은 마케팅 효과를 경험해보세요."
            }
        },
        {
            id: "3",
            title: "틱톡 마케팅으로 글로벌 시장 공략하기",
            description: "숏폼 콘텐츠의 강자, 틱톡을 활용한 글로벌 마케팅 전략",
            thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000",
            category: "틱톡 마케팅",
            date: "2024.03.05",
            readTime: "6분",
            tags: ["틱톡마케팅", "숏폼", "글로벌마케팅"],
            content: {
                introduction: "틱톡은 전 세계 10억 명 이상의 사용자를 보유한 글로벌 숏폼 플랫폼입니다. 브릿지마케팅은 틱톡의 특성을 활용한 효과적인 마케팅 전략으로 글로벌 시장에서 성과를 창출하고 있습니다. 틱톡 마케팅의 핵심 전략과 성공 비결을 상세히 알아보겠습니다.",
                sections: [
                    {
                        title: "틱톡 마케팅의 강점",
                        content: "틱톡 마케팅의 가장 큰 장점은 바이럴 효과입니다. 짧고 임팩트 있는 영상을 통해 전 세계 사용자들에게 브랜드 메시지를 전달할 수 있습니다. 브릿지마케팅은 틱톡의 알고리즘을 깊이 이해하고, 이를 활용한 최적의 콘텐츠 전략을 수립합니다. 특히 MZ세대의 트렌드를 반영한 창의적인 콘텐츠로 높은 참여율을 달성하고 있습니다."
                    },
                    {
                        title: "효과적인 틱톡 마케팅 전략",
                        content: "성공적인 틱톡 마케팅을 위해서는 플랫폼의 특성을 이해하고 이에 맞는 전략이 필요합니다. 첫째, 트렌디하고 재미있는 숏폼 콘텐츠 제작이 핵심입니다. 둘째, 해시태그 챌린지 등 참여형 캠페인을 통해 바이럴 효과를 극대화합니다. 셋째, 인플루언서 협업을 통해 브랜드 인지도를 높입니다. 브릿지마케팅은 이러한 전략적 접근으로 평균 500% 이상의 마케팅 ROI를 달성하고 있습니다."
                    },
                    {
                        title: "글로벌 시장 공략 전략",
                        content: "틱톡을 통한 글로벌 마케팅은 각 국가별 특성을 고려한 맞춤형 전략이 필요합니다. 브릿지마케팅은 국가별 트렌드 분석, 현지화된 콘텐츠 제작, 그리고 글로벌 인플루언서 네트워크를 활용하여 효과적인 글로벌 마케팅을 지원합니다. 특히 한류 콘텐츠의 강점을 활용한 크로스보더 마케팅으로 높은 성과를 창출하고 있습니다."
                    }
                ],
                conclusion: "틱톡 마케팅은 글로벌 시장 진출의 강력한 도구입니다. 브릿지마케팅의 전문적인 틱톡 마케팅 서비스로 글로벌 고객과의 효과적인 소통을 시작하세요. 창의적인 콘텐츠와 전략적인 운영으로 당신의 브랜드를 세계에 알리는 기회를 제공합니다."
            }
        },
        {
            id: "4",
            title: "블라인드 마케팅으로 직장인 타겟 공략하기",
            description: "직장인 커뮤니티의 특성을 활용한 효과적인 블라인드 마케팅 전략",
            thumbnail: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1000",
            category: "블라인드 마케팅",
            date: "2024.03.01",
            readTime: "7분",
            tags: ["블라인드마케팅", "직장인", "커뮤니티마케팅"],
            content: {
                introduction: "블라인드는 300만 직장인이 활동하는 대표적인 직장인 커뮤니티입니다. 브릿지마케팅은 블라인드의 특성을 활용한 전문적인 마케팅 서비스를 제공하고 있습니다. 직장인들의 신뢰를 얻을 수 있는 효과적인 블라인드 마케팅 전략에 대해 자세히 알아보겠습니다.",
                sections: [
                    {
                        title: "블라인드 마케팅의 특징",
                        content: "블라인드 마케팅의 핵심은 직장인들의 신뢰를 얻는 것입니다. 실제 직장인들의 경험과 후기를 바탕으로 한 진정성 있는 콘텐츠가 중요합니다. 브릿지마케팅은 직장인들의 관심사와 니즈를 정확히 파악하여, 자연스러운 정보 공유와 토론을 유도합니다. 특히 금융, IT, 커리어 관련 콘텐츠에서 높은 참여율을 보이고 있습니다."
                    },
                    {
                        title: "효과적인 블라인드 마케팅 방법",
                        content: "성공적인 블라인드 마케팅을 위해서는 플랫폼의 특성을 이해하고 이에 맞는 전략이 필요합니다. 첫째, 직장인들의 실제 고민과 관심사를 반영한 콘텐츠 제작이 중요합니다. 둘째, 객관적인 정보와 데이터를 바탕으로 한 신뢰성 있는 내용 전달이 필요합니다. 셋째, 업종별, 직무별 특성을 고려한 타겟팅이 효과적입니다. 브릿지마케팅은 이러한 전략을 통해 평균 200% 이상의 마케팅 효율을 달성하고 있습니다."
                    },
                    {
                        title: "블라인드 마케팅 성공 사례",
                        content: "브릿지마케팅의 블라인드 마케팅 성공 사례를 보면, 직장인들의 실제 니즈를 반영한 정보성 콘텐츠가 높은 호응을 얻었습니다. 특히 재테크, 자기계발, 커리어 관련 정보를 제공하는 콘텐츠에서 높은 참여율을 기록했습니다. 또한 업종별 특성을 고려한 맞춤형 콘텐츠로 타겟 고객과의 공감대를 형성했습니다."
                    }
                ],
                conclusion: "블라인드 마케팅은 직장인 타겟 마케팅의 핵심 채널입니다. 브릿지마케팅의 전문적인 블라인드 마케팅 서비스로 직장인 고객과의 효과적인 소통을 시작하세요. 신뢰성 있는 콘텐츠와 전략적인 운영으로 높은 마케팅 효과를 경험할 수 있습니다."
            }
        },
        {
            id: "5",
            title: "2024 바이럴 마케팅 성공 전략",
            description: "브릿지마케팅이 제안하는 2024년 바이럴 마케팅 트렌드와 전략",
            thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000",
            category: "마케팅 전략",
            date: "2024.02.25",
            readTime: "8분",
            tags: ["바이럴마케팅", "마케팅전략", "트렌드"],
            content: {
                introduction: "2024년 바이럴 마케팅은 더욱 정교하고 전략적인 접근이 필요합니다. 브릿지마케팅은 수년간의 경험과 데이터를 바탕으로 최적화된 바이럴 마케팅 전략을 제시합니다. 성공적인 바이럴 마케팅을 위한 핵심 전략과 트렌드를 상세히 알아보겠습니다.",
                sections: [
                    {
                        title: "2024 바이럴 마케팅 트렌드",
                        content: "2024년 바이럴 마케팅의 주요 트렌드는 '진정성'과 '개인화'입니다. 소비자들은 더 이상 일방적인 광고 메시지에 반응하지 않으며, 진정성 있는 스토리와 개인화된 콘텐츠를 원합니다. 브릿지마케팅은 이러한 트렌드를 반영하여 자연스럽고 효과적인 바이럴 마케팅 전략을 수립합니다. 특히 AI 기술을 활용한 개인화된 콘텐츠 제작과 타겟팅으로 높은 성과를 창출하고 있습니다."
                    },
                    {
                        title: "플랫폼별 최적화 전략",
                        content: "각 플랫폼의 특성을 이해하고 이에 맞는 최적화된 전략이 필요합니다. 에브리타임에서는 대학생들의 관심사에 맞는 정보성 콘텐츠가, 틱톡에서는 재미있고 트렌디한 숏폼 콘텐츠가, 블라인드에서는 전문성 있는 정보 공유가 효과적입니다. 브릿지마케팅은 각 플랫폼의 특성을 고려한 맞춤형 콘텐츠 전략으로 평균 300% 이상의 마케팅 효율을 달성하고 있습니다."
                    },
                    {
                        title: "데이터 기반 성과 분석",
                        content: "성공적인 바이럴 마케팅을 위해서는 정확한 성과 측정과 분석이 필수적입니다. 브릿지마케팅은 독자적인 분석 툴을 통해 캠페인의 효과를 실시간으로 모니터링하고 최적화합니다. 도달률, 참여율, 전환율 등 주요 지표를 체계적으로 관리하여 마케팅 ROI를 극대화합니다."
                    }
                ],
                conclusion: "2024년 바이럴 마케팅의 성공은 전문성과 전략적 접근에 달려있습니다. 브릿지마케팅은 풍부한 경험과 전문성을 바탕으로 최적화된 바이럴 마케팅 솔루션을 제공합니다. 데이터 기반의 전략적 접근으로 당신의 브랜드를 성공으로 이끌어드리겠습니다."
            }
        },
        {
            id: "6",
            title: "브릿지마케팅의 통합 마케팅 전략",
            description: "다양한 플랫폼을 아우르는 브릿지마케팅의 통합 마케팅 솔루션",
            thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000",
            category: "통합 마케팅",
            date: "2024.02.20",
            readTime: "9분",
            tags: ["브릿지마케팅", "통합마케팅", "마케팅전략"],
            content: {
                introduction: "브릿지마케팅은 에브리타임, 틱톡, 블라인드 등 다양한 플랫폼을 아우르는 통합 마케팅 서비스를 제공합니다. 각 플랫폼의 특성을 살린 맞춤형 전략으로 시너지를 창출하는 브릿지마케팅만의 통합 마케팅 전략을 소개합니다.",
                sections: [
                    {
                        title: "통합 마케팅의 강점",
                        content: "브릿지마케팅의 통합 마케팅은 각 플랫폼의 장점을 극대화하면서 일관된 브랜드 메시지를 전달합니다. 에브리타임의 대학생 타겟팅, 틱톡의 글로벌 영향력, 블라인드의 직장인 네트워크를 유기적으로 연결하여 최대의 마케팅 효과를 창출합니다. 특히 크로스 플랫폼 전략을 통해 브랜드 인지도와 신뢰도를 동시에 높이는 것이 특징입니다."
                    },
                    {
                        title: "맞춤형 솔루션 제공",
                        content: "각 기업의 특성과 목표에 맞는 최적의 마케팅 믹스를 제공합니다. 브릿지마케팅은 풍부한 경험을 바탕으로 업종별, 타겟별 최적의 플랫폼 조합을 제안합니다. 또한 실시간 성과 분석을 통해 전략을 지속적으로 최적화하여 마케팅 효율을 극대화합니다. 이러한 맞춤형 접근으로 평균 400% 이상의 마케팅 ROI를 달성하고 있습니다."
                    },
                    {
                        title: "전문가 팀의 밀착 관리",
                        content: "브릿지마케팅의 전문가 팀이 캠페인의 기획부터 실행, 성과 분석까지 모든 과정을 밀착 관리합니다. 각 플랫폼별 전문가들이 협업하여 시너지를 창출하며, 주기적인 리포트를 통해 투명한 성과 관리를 제공합니다. 특히 24시간 모니터링 체계를 통해 실시간 대응이 가능한 것이 강점입니다."
                    }
                ],
                conclusion: "브릿지마케팅의 통합 마케팅 서비스로 귀사의 마케팅 효과를 극대화하세요. 플랫폼별 전문성과 통합적 시각을 겸비한 브릿지마케팅이 귀사의 성공적인 마케팅을 지원하겠습니다. 지금 바로 브릿지마케팅과 함께 새로운 마케팅의 지평을 열어보세요."
            }
        }
    ];

    const currentPost = posts.find(post => post.id === id);
    const recentPosts = posts.filter(post => post.id !== id).slice(0, 3);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) return <Loading />;

    const handleGoBack = () => {
        navigate('/insights');
    };

    if (!currentPost) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-white mb-4">
                        포스트를 찾을 수 없습니다
                    </h1>
                    <button
                        onClick={handleGoBack}
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        인사이트 목록으로 돌아가기
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <main>
                <section className="pt-32 md:pt-40 pb-16 md:pb-20 relative overflow-hidden">
                    <motion.div 
                        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.15),transparent_70%)]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    />
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="space-y-4 md:space-y-6"
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                    className="flex flex-wrap items-center gap-3 md:gap-4"
                                >
                                    <motion.span 
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.2 }}
                                        className="px-3 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-400 text-sm border border-purple-500/20"
                                    >
                                        {currentPost.category}
                                    </motion.span>
                                    <motion.div 
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.3 }}
                                        className="flex items-center text-gray-400 text-sm"
                                    >
                                        <Calendar className="w-4 h-4 mr-1" />
                                        {currentPost.date}
                                    </motion.div>
                                    <motion.div 
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.4 }}
                                        className="flex items-center text-gray-400 text-sm"
                                    >
                                        <Clock className="w-4 h-4 mr-1" />
                                        {currentPost.readTime} 읽기
                                    </motion.div>
                                </motion.div>
                                <motion.h1 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.5 }}
                                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                                >
                                    {currentPost.title}
                                </motion.h1>
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.6 }}
                                    className="text-lg md:text-xl text-gray-400"
                                >
                                    {currentPost.description}
                                </motion.p>
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.7 }}
                                    className="flex flex-wrap gap-2"
                                >
                                    {currentPost.tags.map((tag, index) => (
                                        <motion.span
                                            key={tag}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                                            className="px-3 py-1 bg-gray-800/50 text-gray-400 rounded-full text-sm flex items-center hover:bg-purple-500/10 hover:text-purple-400 transition-colors"
                                        >
                                            <Tag className="w-3 h-3 mr-1" />
                                            {tag}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <motion.div 
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="relative aspect-[4/3] md:aspect-[21/9] mb-12 md:mb-16 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
                            >
                        <img
                            src={currentPost.thumbnail}
                            alt={currentPost.title}
                            className="w-full h-full object-cover"
                        />
                            </motion.div>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="mb-12 md:mb-16"
                                >
                                    <h2 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Introduction</h2>
                                    <p className="text-gray-400 mb-12 md:mb-16 whitespace-pre-line leading-relaxed text-base md:text-lg">{currentPost.content.introduction}</p>
                                </motion.div>

                        {currentPost.content.sections.map((section, index) => (
                                    <motion.div
                                        key={section.title}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="mb-12 md:mb-16"
                                    >
                                        <h2 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">{section.title}</h2>
                                        <p className="text-gray-400 whitespace-pre-line leading-relaxed text-base md:text-lg">{section.content}</p>
                                    </motion.div>
                        ))}

                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="mb-12 md:mb-16"
                                >
                                    <h2 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Conclusion</h2>
                                    <p className="text-gray-400 whitespace-pre-line leading-relaxed text-base md:text-lg">{currentPost.content.conclusion}</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 최근 게시글 섹션 */}
                <section className="pb-20 md:pb-32 border-t border-gray-800">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mt-16 md:mt-20 mb-8 md:mb-12">최근 게시글</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                                {recentPosts.map(post => (
                                    <Link 
                                        key={post.id} 
                                        to={`/insights/${post.id}`}
                                        onClick={() => {
                                            window.scrollTo(0, 0);
                                        }}
                                        className="group block bg-gray-900/50 rounded-lg md:rounded-xl p-3 md:p-4 hover:bg-gray-800/50 transition-colors"
                                    >
                                        <div className="relative aspect-[16/9] rounded-md md:rounded-lg overflow-hidden mb-3 md:mb-4">
                                            <img 
                                                src={post.thumbnail} 
                                                alt={post.title}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute top-2 md:top-3 left-2 md:left-3">
                                                <span className="px-2 md:px-3 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-400 text-xs md:text-sm border border-purple-500/20">
                                                    {post.category}
                            </span>
                                            </div>
                                        </div>
                                        <h3 className="text-base md:text-lg font-bold text-white group-hover:text-purple-400 transition-colors line-clamp-2 mb-2 md:mb-3">
                                            {post.title}
                                        </h3>
                                        <p className="text-xs md:text-sm text-gray-400 line-clamp-2 mb-3 md:mb-4">
                                            {post.description}
                                        </p>
                                        <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                                                {post.date}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-3 h-3 md:w-4 md:h-4" />
                                                {post.readTime}
                                            </div>
                                        </div>
                                    </Link>
                        ))}
                    </div>
            </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
} 