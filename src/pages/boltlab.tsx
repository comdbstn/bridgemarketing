import { useEffect, useState } from "react";
import { Hero } from "@/components/sections/boltlab/Hero";
import { Products } from "@/components/sections/boltlab/Products";
import { Features } from "@/components/sections/boltlab/Features";
import { Stats } from "@/components/sections/boltlab/Stats";
import { Advantages } from "@/components/sections/boltlab/Advantages";
import { Industries } from "@/components/sections/boltlab/Industries";
import { Process } from "@/components/sections/boltlab/Process";
import { Pricing } from "@/components/sections/boltlab/Pricing";
import { QA } from "@/components/sections/boltlab/QA";
import { Footer } from "@/components/layout/Footer";
import { BackButton } from "@/components/navigation/back-button";
import { KakaoChatButton } from "@/components/chat/kakao-chat-button";
import { motion } from "framer-motion";
import { ImageModal } from "@/components/ui/image-modal";

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
            <Advantages />
            <Industries />
            
            {/* References Section */}
            <section className="py-20 bg-[#f8faff]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            레퍼런스
                        </h2>
                        <p className="text-xl text-gray-600">
                            볼트랩이 만든 다양한 프로젝트들을 소개합니다
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.from({ length: 17 }, (_, i) => i + 1).map((num) => (
                            <motion.div
                                key={num}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: num * 0.1 }}
                                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 cursor-pointer"
                                onClick={() => setSelectedImage(`/boltlab_reference/${num}.${num === 4 || num === 7 ? 'jpeg' : 'png'}`)}
                            >
                                <img
                                    src={`/boltlab_reference/${num}.${num === 4 || num === 7 ? 'jpeg' : 'png'}`}
                                    alt={`볼트랩 레퍼런스 ${num}`}
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