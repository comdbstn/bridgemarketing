import { useEffect } from "react";
import Hero from "@/components/sections/tiktok/Hero";
import { Products } from "@/components/sections/tiktok/Products";
import Features from "@/components/sections/tiktok/Features";
import { Stats } from "@/components/sections/tiktok/Stats";
import { Advantages } from "@/components/sections/tiktok/Advantages";
import Pricing from "@/components/sections/tiktok/Pricing";
import Industries from "@/components/sections/tiktok/Industries";
import References from "@/components/sections/tiktok/References";
import Process from "@/components/sections/tiktok/Process";
import { QA } from "@/components/sections/tiktok/QA";
import { Footer } from "@/components/common/Footer";
import { BackButton } from "@/components/common/back-button";
import { KakaoChatButton } from "@/components/common/kakao-chat-button";

export function TiktokPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "틱톡 마케팅 | 브릿지마케팅";
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
