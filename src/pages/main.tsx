import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { useEffect, useState } from "react";
import { Loading } from "@/components/ui/loading";
import { Hero } from "@/components/sections/main/Hero";
import { Features } from "@/components/sections/main/Features";
import { Services } from "@/components/sections/main/Services";
import { Process } from "@/components/sections/main/Process";

export function MainPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (location.state?.shouldRestore && location.state?.scrollPosition) {
            window.scrollTo(0, location.state.scrollPosition);
        }
    }, [location.state]);

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

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Bridge Marketing - 디지털 마케팅의 새로운 기준";
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) return <Loading />;

    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <Services />
                <Process />
            </main>
            <Footer />
        </div>
    );
} 