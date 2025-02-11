import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Loading } from "@/components/ui/loading";

export default function PortfolioPage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setTimeout(() => setIsLoading(false), 300);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) return <Loading />;

    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <main className="flex items-center justify-center" style={{ minHeight: "calc(100vh - 200px)" }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-center px-4"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        포트폴리오 페이지는 개발중입니다.
                    </h1>
                    <p className="text-xl text-gray-400">
                        업종을 문의주시면 관련 레퍼런스를 제공해드리겠습니다
                    </p>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
} 