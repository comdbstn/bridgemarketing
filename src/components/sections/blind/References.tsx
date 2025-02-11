import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const references = [
    {
        id: 1,
        image: "/blind_reference/1.jpeg",
        alt: "블라인드 레퍼런스 1",
    },
    {
        id: 2,
        image: "/blind_reference/2.jpeg",
        alt: "블라인드 레퍼런스 2",
    },
    {
        id: 3,
        image: "/blind_reference/3.jpeg",
        alt: "블라인드 레퍼런스 3",
    },
    {
        id: 4,
        image: "/blind_reference/4.png",
        alt: "블라인드 레퍼런스 4",
    },
];

export function References() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <section className='py-20 bg-gradient-to-br from-blue-50 to-white'>
                <div className='container mx-auto px-4'>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='text-4xl font-bold text-center mb-4 font-aggro'
                    >
                        레퍼런스
                    </motion.h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
                        {references.map((ref) => (
                            <motion.div
                                key={ref.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className='relative group cursor-pointer'
                                onClick={() => setSelectedImage(ref.image)}
                            >
                                <img
                                    src={ref.image}
                                    alt={ref.alt}
                                    className='rounded-lg shadow-lg w-full aspect-[4/3] object-cover object-top hover:shadow-xl transition-all duration-300'
                                />
                                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-lg transition-all duration-300 flex items-center justify-center'>
                                    <span className='text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-4 py-2 rounded-full text-sm font-medium'>
                                        크게 보기
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    {/* 포트폴리오 전체보기 버튼 임시 비활성화
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='mt-12 text-center'
                    >
                        <a
                            href='https://bridgemarketing.xyz/portfolio'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00A9FF] to-[#0077FF] hover:from-[#0077FF] hover:to-[#00A9FF] text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-105'
                        >
                            포트폴리오 전체보기
                        </a>
                    </motion.div>
                    */}
                </div>
            </section>

            {/* Modal */}
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80'
                    onClick={() => setSelectedImage(null)}
                >
                    <div className='relative max-w-5xl w-full'>
                        <button
                            onClick={() => setSelectedImage(null)}
                            className='absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200'
                        >
                            <X className='w-8 h-8' />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={selectedImage}
                            alt='Selected reference'
                            className='w-full h-[80vh] object-contain rounded-lg shadow-2xl'
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </motion.div>
            )}
        </>
    );
}
