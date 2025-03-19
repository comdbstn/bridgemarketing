import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

const references = [
    {
        id: 1,
        image: "/images/references/cafe/caferef1.png",
        title: "맘카페 마케팅",
        description: "육아, 교육 관련 제품/서비스 홍보",
    },
    {
        id: 2,
        image: "/images/references/cafe/caferef2.png",
        title: "지역카페 마케팅",
        description: "지역 기반 서비스 및 매장 홍보",
    },
    {
        id: 3,
        image: "/images/references/cafe/caferef3.png",
        title: "취미카페 마케팅",
        description: "취미, 여가 관련 제품/서비스 홍보",
    },
    {
        id: 4,
        image: "/images/references/cafe/caferef4.png",
        title: "팬카페 마케팅",
        description: "엔터테인먼트, 문화 콘텐츠 홍보",
    },
];

export function References() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-white to-green-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-green-600 font-semibold text-lg font-tway mb-4 block">
                        REFERENCES
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 font-aggro">
                        네이버 카페 마케팅 레퍼런스
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto font-tway">
                        다양한 카테고리의 카페에서 성공적인 마케팅을 진행한 사례입니다.
                        <br />
                        각 분야별 전문가가 최적의 마케팅 전략을 제시합니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {references.map((reference, index) => (
                        <motion.div
                            key={reference.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card
                                className="overflow-hidden cursor-pointer group"
                                onClick={() => setSelectedImage(reference.image)}
                            >
                                <div className="relative aspect-[4/3]">
                                    <img
                                        src={reference.image}
                                        alt={reference.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <p className="text-white text-lg font-bold">자세히 보기</p>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold mb-1 text-gray-900 font-tway">{reference.title}</h3>
                                    <p className="text-gray-800 text-sm font-tway">{reference.description}</p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                                onClick={() => setSelectedImage(null)}
                            >
                                <X className="w-8 h-8" />
                            </button>
                            <img
                                src={selectedImage}
                                alt="Selected reference"
                                className="w-full h-auto rounded-lg"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
} 
