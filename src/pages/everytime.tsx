import { Hero } from "@/components/sections/everytime/Hero";
import { Products } from "@/components/sections/everytime/Products";
import { Features } from "@/components/sections/everytime/Features";
import { Stats } from "@/components/sections/everytime/Stats";
import { Advantages } from "@/components/sections/everytime/Advantages";
import { Pricing } from "@/components/sections/everytime/Pricing";
import { Industries } from "@/components/sections/everytime/Industries";
import { References } from "@/components/sections/everytime/References";
import { Process } from "@/components/sections/everytime/Process";
import { QA } from "@/components/sections/everytime/QA";
import { Footer } from "@/components/sections/everytime/Footer";
import { BackButton } from "@/components/navigation/back-button";
import { KakaoChatButton } from "@/components/chat/kakao-chat-button";
import { useEffect } from "react";

export function EverytimePage() {
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
