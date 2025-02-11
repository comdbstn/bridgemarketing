import { useEffect } from "react";
import { Hero } from "@/components/sections/naver-cafe/Hero";
import { Products } from "@/components/sections/naver-cafe/Products";
import { Features } from "@/components/sections/naver-cafe/Features";
import { Stats } from "@/components/sections/naver-cafe/Stats";
import { Advantages } from "@/components/sections/naver-cafe/Advantages";
import { Industries } from "@/components/sections/naver-cafe/Industries";
import { References } from "@/components/sections/naver-cafe/References";
import { Process } from "@/components/sections/naver-cafe/Process";
import { Pricing } from "@/components/sections/naver-cafe/Pricing";
import { QA } from "@/components/sections/naver-cafe/QA";
import { Footer } from "@/components/common/Footer";
import { BackButton } from "@/components/common/back-button";
import { KakaoChatButton } from "@/components/common/kakao-chat-button";

export default function NaverCafeServicePage() {
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
            <References />
            <Process />
            <Pricing />
            <QA />
            <Footer />
        </div>
    );
}
