import { useEffect } from "react";
import { BackButton } from "@/components/navigation/back-button";
import { KakaoChatButton } from "@/components/chat/kakao-chat-button";
import { Hero } from "@/components/sections/everytime-comment/Hero";
import { Footer } from "@/components/layout/Footer";

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
