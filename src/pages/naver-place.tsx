import { Hero } from "@/components/sections/naver-place/Hero";
import { Products } from "@/components/sections/naver-place/Products";
import { Features } from "@/components/sections/naver-place/Features";
import { Stats } from "@/components/sections/naver-place/Stats";
import { Advantages } from "@/components/sections/naver-place/Advantages";
import { Pricing } from "@/components/sections/naver-place/Pricing";
import { Industries } from "@/components/sections/naver-place/Industries";
import { Process } from "@/components/sections/naver-place/Process";
import { QA } from "@/components/sections/naver-place/QA";
import { Footer } from "@/components/common/Footer";
import { BackButton } from "@/components/common/back-button";
import { KakaoChatButton } from "@/components/common/kakao-chat-button";
import { useEffect } from "react";

export default function NaverPlaceServicePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen w-full bg-white overflow-hidden">
            <BackButton />
            <KakaoChatButton />
            <Hero />
            <Products />
            <Features />
            <Stats />
            <Advantages />
            <Industries />
            <Process />
            <Pricing />
            <QA />
            <Footer />
        </div>
    );
} 