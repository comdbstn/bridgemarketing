import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { Loading } from "@/components/ui/loading";
import { useState, useEffect } from "react";
import { BackButton } from "@/components/common/back-button";

interface ServiceDetail {
    title: string;
    description: string;
    features: string[];
    benefits: string[];
    process: {
        title: string;
        description: string;
    }[];
    pricing: {
        title: string;
        price: string;
        features: string[];
    }[];
}

export function ServiceDetailPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const fromPage = location.state?.from || '/';
    const scrollPosition = location.state?.scrollPosition || 0;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    const handleGoBack = () => {
        navigate(fromPage, {
            state: { shouldRestore: true, scrollPosition }
        });
    };

    if (isLoading) return <Loading />;

    const serviceDetail: ServiceDetail = {
        title: "에브리타임 마케팅",
        description: "대학생 커뮤니티 1위 에브리타임에서 진행되는 마케팅 서비스입니다.",
        features: [
            "대학생 타겟 마케팅",
            "실시간 반응 분석",
            "맞춤형 컨텐츠 제작"
        ],
        benefits: [
            "정확한 타겟 도달",
            "높은 전환율",
            "브랜드 인지도 상승"
        ],
        process: [
            {
                title: "전략 수립",
                description: "목표 설정 및 타겟 분석을 통한 전략 수립"
            },
            {
                title: "컨텐츠 제작",
                description: "타겟에 맞는 맞춤형 컨텐츠 제작"
            },
            {
                title: "캠페인 실행",
                description: "효과적인 캠페인 실행 및 모니터링"
            },
            {
                title: "성과 분석",
                description: "데이터 기반의 성과 분석 및 리포트 제공"
            }
        ],
        pricing: [
            {
                title: "Basic",
                price: "100만원",
                features: [
                    "기본 컨텐츠 제작",
                    "1회 캠페인 진행",
                    "기본 리포트 제공"
                ]
            },
            {
                title: "Standard",
                price: "300만원",
                features: [
                    "맞춤형 컨텐츠 제작",
                    "3회 캠페인 진행",
                    "상세 리포트 제공",
                    "실시간 모니터링"
                ]
            },
            {
                title: "Premium",
                price: "500만원",
                features: [
                    "프리미엄 컨텐츠 제작",
                    "무제한 캠페인 진행",
                    "실시간 대시보드 제공",
                    "전담 매니저 배정",
                    "성과 분석 컨설팅"
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center relative">
            <BackButton />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center px-4"
            >
                <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-block px-6 py-2 bg-purple-500/10 rounded-full text-purple-300 text-sm border border-purple-500/20 backdrop-blur-sm font-tway mb-6"
                >
                    Coming Soon
                </motion.span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-aggro">
                    포트폴리오 페이지는 현재 개발 중입니다
                </h1>
                <p className="text-gray-400 text-lg md:text-xl font-tway">
                    더 나은 서비스를 위해 준비 중입니다.<br />
                    조금만 기다려주세요.
                </p>
            </motion.div>
        </div>
    );
} 