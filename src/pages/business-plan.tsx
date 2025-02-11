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
        src: "/images/business-plan/references/일반 레퍼런스 한번에.png",
        alt: "일반 레퍼런스"
    },
    {
        src: "/images/business-plan/references/애스크미_ai바우처.png",
        alt: "애스크미 AI바우처"
    },
    {
        src: "/images/business-plan/references/사업계획서 레퍼런스 이미지2.png",
        alt: "사업계획서 레퍼런스"
    },
    {
        src: "/images/business-plan/references/분석 보고서 리포트.png",
        alt: "분석 보고서 리포트"
    },
    {
        src: "/images/business-plan/references/zolv_신사업창업사관학교_선정_사업계획서.png",
        alt: "ZOLV 신사업창업사관학교"
    },
    {
        src: "/images/business-plan/references/GYMPT.png",
        alt: "GYMPT"
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
            <Stats />
            <Features />
            <Products />
            <Process />
            <Profile />
            
            {/* References Section */}
            <section className="py-20 bg-[#f8faff]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            레퍼런스
                        </h2>
                        <p className="text-xl text-gray-600">
                            성공적인 사업계획서 작성 사례를 소개합니다
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {referenceImages.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 cursor-pointer"
                                onClick={() => setSelectedImage(image.src)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
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
            
            <Pricing />
            <QA />
            <Footer />
        </div>
    );
} 