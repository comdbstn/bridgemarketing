import { useEffect, useState } from "react";
import { Hero } from "@/components/sections/business-plan/Hero";
import { Products } from "@/components/sections/business-plan/Products";
import { Features } from "@/components/sections/business-plan/Features";
import { Stats } from "@/components/sections/business-plan/Stats";
import { Process } from "@/components/sections/business-plan/Process";
import { Profile } from "@/components/sections/business-plan/Profile";
import { Pricing } from "@/components/sections/business-plan/Pricing";
import { QA } from "@/components/sections/business-plan/QA";
import { Footer } from "@/components/common/Footer";
import { BackButton } from "@/components/common/back-button";
import { KakaoChatButton } from "@/components/common/kakao-chat-button";
import { motion } from "framer-motion";
import { ImageModal } from "@/components/ui/image-modal";

const referenceImages = [
    {
        src: "/images/business-plan/references/01.png",
        alt: "레퍼런스 1"
    },
    {
        src: "/images/business-plan/references/02.png",
        alt: "레퍼런스 2"
    },
    {
        src: "/images/business-plan/references/03.png",
        alt: "레퍼런스 3"
    },
    {
        src: "/images/business-plan/references/04.png",
        alt: "레퍼런스 4"
    }
];

export default function BusinessPlanPage() {
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
            <Profile />
            
            {/* References Section */}
            <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
                            레퍼런스
                        </h2>
                        <p className="text-xl text-purple-600">
                            성공적인 사업계획서 작성 사례를 소개합니다
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        {referenceImages.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 cursor-pointer hover:shadow-xl hover:shadow-purple-100 transition-all duration-300"
                                onClick={() => setSelectedImage(image.src)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-purple-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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