import { useEffect } from "react";
import { BackButton } from "@/components/common/back-button";
import { KakaoChatButton } from "@/components/common/kakao-chat-button";
import { Hero } from "@/components/sections/everytime/Hero";
import { Footer } from "@/components/common/Footer";

export function EverytimeCommentPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen w-full bg-white overflow-hidden">
            <BackButton />
            <KakaoChatButton />
            <Hero />
            <Footer />
        </div>
    );
}
