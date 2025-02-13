import { useEffect, useState } from "react";
import { Hero } from "@/components/sections/boltlab/Hero";
import { Products } from "@/components/sections/boltlab/Products";
import { Features } from "@/components/sections/boltlab/Features";
import { Stats } from "@/components/sections/boltlab/Stats";
import { Profile } from "@/components/sections/boltlab/Profile";
import { Process } from "@/components/sections/boltlab/Process";
import { Pricing } from "@/components/sections/boltlab/Pricing";
import { QA } from "@/components/sections/boltlab/QA";
import { Footer } from "@/components/common/Footer";
import { BackButton } from "@/components/common/back-button";
import { KakaoChatButton } from "@/components/common/kakao-chat-button";
import { motion } from "framer-motion";
import { ImageModal } from "@/components/ui/image-modal";

const referenceImages = [
    {
        src: "/boltlab_reference/1.png",
        alt: "레퍼런스 1"
    },
    {
        src: "/boltlab_reference/2.png",
        alt: "레퍼런스 2"
    },
    {
        src: "/boltlab_reference/3.png",
        alt: "레퍼런스 3"
    },
    {
        src: "/boltlab_reference/4.jpeg",
        alt: "레퍼런스 4"
    }
];

export default function BoltlabPage() {
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
            <section className="py-20 bg-gradient-to-br from-[#626ae2]/5 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-aggro">
                            레퍼런스
                        </h2>
                        <p className="text-xl text-gray-600 font-tway">
                            볼트랩이 만든 다양한 프로젝트들을 소개합니다
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
                                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 cursor-pointer hover:shadow-xl hover:shadow-[#626ae2]/10 transition-all duration-300"
                                onClick={() => setSelectedImage(image.src)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#626ae2]/60 via-[#7884eb]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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