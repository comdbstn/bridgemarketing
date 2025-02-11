import { useEffect } from "react";
import { Hero } from "@/components/sections/everytime-post/everytime/Hero";
import { Products } from "@/components/sections/everytime-post/everytime/Products";
import { Features } from "@/components/sections/everytime-post/everytime/Features";
import { Stats } from "@/components/sections/everytime-post/everytime/Stats";
import { Advantages } from "@/components/sections/everytime-post/everytime/Advantages";
import { Industries } from "@/components/sections/everytime-post/everytime/Industries";
import { References } from "@/components/sections/everytime-post/everytime/References";
import { Process } from "@/components/sections/everytime-post/everytime/Process";
import { Pricing } from "@/components/sections/everytime-post/everytime/Pricing";
import { QA } from "@/components/sections/everytime-post/everytime/QA";
import { Footer } from "@/components/layout/Footer";
import { BackButton } from "@/components/navigation/back-button";
import { KakaoChatButton } from "@/components/chat/kakao-chat-button";

export function EverytimePostPage() {
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

