import { useEffect, useState } from "react";
import { Hero } from "@/components/sections/everytime/Hero";
import { Products } from "@/components/sections/everytime/Products";
import { Features } from "@/components/sections/everytime/Features";
import { Stats } from "@/components/sections/everytime/Stats";
import { Profile } from "@/components/sections/everytime/Profile";
import { Process } from "@/components/sections/everytime/Process";
import { Pricing } from "@/components/sections/everytime/Pricing";
import { QA } from "@/components/sections/everytime/QA";
import { Footer } from "@/components/common/Footer";
import { BackButton } from "@/components/common/back-button";
import { KakaoChatButton } from "@/components/common/kakao-chat-button";
import { motion } from "framer-motion";
import { ImageModal } from "@/components/ui/image-modal";

const referenceImages = [
    {
        src: "/everytime_reference/0.png",
        alt: "레퍼런스 1"
    },
    {
        src: "/everytime_reference/1.png",
        alt: "레퍼런스 2"
    },
    {
        src: "/everytime_reference/2.png",
        alt: "레퍼런스 3"
    },
    {
        src: "/everytime_reference/3.png",
        alt: "레퍼런스 4"
    }
];

export default function EverytimePage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "에브리타임 마케팅 | 브릿지마케팅";
    }, []);

    return (
        <div className="min-h-screen w-full bg-white overflow-hidden">
            <BackButton />
            <KakaoChatButton />
            <Hero />
            <Products />
            <Features />
            <Stats />
            <Profile />
            
            {/* References Section */}
            <section className="py-20 bg-gradient-to-br from-[#FF4B4B]/5 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-aggro">
                            레퍼런스
                        </h2>
                        <p className="text-xl text-gray-600 font-tway">
                            에브리타임 마케팅 성공 사례를 소개합니다
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {referenceImages.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 cursor-pointer hover:shadow-xl hover:shadow-[#FF4B4B]/10 transition-all duration-300"
                                onClick={() => setSelectedImage(image.src)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#FF4B4B]/60 via-[#FF7070]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
