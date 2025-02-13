import { motion } from "framer-motion";
import { Loading } from "@/components/ui/loading";
import { useState, useEffect } from "react";
import { BackButton } from "@/components/common/back-button";

export function ServiceDetailPage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) return <Loading />;

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