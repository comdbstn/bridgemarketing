import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { useEffect, useState } from "react";
import { Loading } from "@/components/ui/loading";
import { Hero } from "@/components/sections/main/Hero";
import { Services } from "@/components/sections/main/Services";
import { Process } from "@/components/sections/main/Process";
import { References } from "@/components/sections/main/References";
import { About } from "@/components/sections/main/About";
import { Marketing } from "@/components/sections/main/Marketing";
import { Contact } from "@/components/sections/main/Contact";
import { KakaoChatButton } from "@/components/common/kakao-chat-button";

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
        document.title = "브릿지마케팅 - 디지털 마케팅의 새로운 기준";
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) return <Loading />;

    return (
        <div className="min-h-screen w-full bg-black overflow-hidden">
            <KakaoChatButton />
            <Navbar />
            <main>
                <Hero />
                <References />
                <Marketing />
                <About />
                <Process />
                <Services />
                <Contact />
            </main>
            <Footer />
        </div>
    );
} 