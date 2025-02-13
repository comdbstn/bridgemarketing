import { Hero } from "@/components/sections/blind/Hero";
import { Products } from "@/components/sections/blind/Products";
import { Features } from "@/components/sections/blind/Features";
import { Stats } from "@/components/sections/blind/Stats";
import { Advantages } from "@/components/sections/blind/Advantages";
import { Pricing } from "@/components/sections/blind/Pricing";
import { Industries } from "@/components/sections/blind/Industries";
import { References } from "@/components/sections/blind/References";
import { Process } from "@/components/sections/blind/Process";
import { QA } from "@/components/sections/blind/QA";
import { Footer } from "@/components/sections/blind/Footer";
import { BackButton } from "@/components/common/back-button";
import { KakaoChatButton } from "@/components/common/kakao-chat-button";
import { useEffect } from "react";

export function BlindPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "블라인드 마케팅 | 브릿지마케팅";
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