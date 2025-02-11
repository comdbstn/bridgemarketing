import { useEffect, useState } from "react";
import { Hero } from "@/components/sections/everytime/Hero";
import { Products } from "@/components/sections/everytime/Products";
import { Features } from "@/components/sections/everytime/Features";
import { Stats } from "@/components/sections/everytime/Stats";
import { Process } from "@/components/sections/everytime/Process";
import { Pricing } from "@/components/sections/everytime/Pricing";
import { QA } from "@/components/sections/everytime/QA";
import { Footer } from "@/components/layout/Footer";
import { BackButton } from "@/components/navigation/back-button";
import { KakaoChatButton } from "@/components/chat/kakao-chat-button";
import { motion } from "framer-motion";
import { ImageModal } from "@/components/ui/image-modal";

export function EverytimePage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    
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
            
            {/* References Section */}
            <section className="py-20 bg-[#f8faff]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            레퍼런스
                        </h2>
                        <p className="text-xl text-gray-600">
                            에브리타임 마케팅 성공 사례를 소개합니다
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
                            <motion.div
                                key={num}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: num * 0.1 }}
                                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 cursor-pointer"
                                onClick={() => setSelectedImage(`/everytime_reference/${num}.png`)}
                            >
                                <img
                                    src={`/everytime_reference/${num}.png`}
                                    alt={`에브리타임 레퍼런스 ${num}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        ))}
                    </div>
                </div>
                <ImageModal
                    isOpen={!!selectedImage}
                    onClose={() => setSelectedImage(null)}
                    imageSrc={selectedImage || ''}
                />
            </section>
            
            <Process />
            <Pricing />
            <QA />
            <Footer />
        </div>
    );
}
