import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            mass: 0.2,
        },
    },
};

const Industries: React.FC = () => {
    const industries = [
        {
            title: "뷰티 브랜드 (스킨케어/메이크업)",
            description: "요즘 틱톡에서 핫하다는 그 브랜드, 직접 만드는 방법이 궁금하신가요?",
            image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800",
        },
        {
            title: "F&B (Food & Beverage)",
            description: "신제품 음료, 디저트, 간편식을 감각적으로 소개해서 새로운 트렌드를 이끌어보세요",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
        },
        {
            title: "엔터테인먼트/게임",
            description: '"꽁꽁 얼어붙은 한강 고양이" 같은 콘텐츠를 퍼뜨리고 싶으신가요?',
            image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
        },
        {
            title: "매스 노출이 필요한 영화/행사",
            description: "짧은 시간 안에 화제성을 극대화하고 싶다면?",
            image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
        },
    ];

    return (
        <section className='py-20 bg-gradient-to-br from-[#00F2EA]/10 to-white'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.div
                    variants={containerVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, margin: "-50px" }}
                    className='space-y-8'
                >
                    <motion.h2
                        variants={itemVariants}
                        className='text-4xl font-bold text-center mb-4 text-black font-aggro'
                    >
                        추천 업종
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className='text-gray-800 text-center mb-12 max-w-2xl mx-auto px-4 font-tway'
                    >
                        브랜드의 대량 노출 및 즉각적인 전환이 필요한 다양한 업종에서
                        <br />
                        틱톡 시딩 마케팅을 통해 성공적인 결과를 얻고 있습니다.
                    </motion.p>
                    <motion.div
                        variants={containerVariants}
                        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8'
                    >
                        {industries.map((industry, index) => (
                            <motion.div key={index} variants={itemVariants} className='h-full'>
                                <Card className='group relative overflow-hidden hover:shadow-lg transition-shadow duration-300'>
                                    <div className='absolute inset-0'>
                                        <img
                                            src={industry.image}
                                            alt={industry.title}
                                            className='w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-300'
                                        />
                                    </div>
                                    <div className='relative p-8'>
                                        <h3 className='text-xl font-bold mb-2 text-black group-hover:text-[#FF0050] transition-colors duration-300'>
                                            {industry.title}
                                        </h3>
                                        <p className='text-gray-800'>{industry.description}</p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Industries;
