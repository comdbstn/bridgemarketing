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

const Features: React.FC = () => {
    const features = [
        {
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
            title: "전 세계 150개국 이용 가능",
            description: "다양한 문화권을 대상으로 브랜드를 홍보할 수 있는 틱톡만의 유니크한 환경",
        },
        {
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800",
            title: "누적 다운로드 35억 건 돌파",
            description: "전 세계적으로 가장 빠르게 성장하는 소셜 플랫폼",
        },
        {
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
            title: "월간 사용자 수 15억 명 확보",
            description: "높은 활성 사용자 비율을 자랑하며 잠재 고객층 확보",
        },
        {
            image: "https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&q=80&w=800",
            title: "강력한 추천 알고리즘",
            description: "틱톡만의 FYP(For You Page) 알고리즘으로 타겟 사용자에게 효과적으로 도달",
        },
    ];

    return (
        <section className='py-20 relative overflow-hidden bg-gradient-to-br from-white to-[#00F2EA]/10'>
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
                        틱톡 최적화 마케팅 플랫폼
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className='text-gray-800 text-center mb-12 max-w-2xl mx-auto px-4 font-tway'
                    >
                        글로벌 트렌드가 만들어지는 곳, 틱톡에서
                        <br />
                        귀사의 브랜드를 세계에 알리세요.
                    </motion.p>
                    <motion.div
                        variants={containerVariants}
                        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'
                    >
                        {features.map((feature, index) => (
                            <motion.div key={index} variants={itemVariants} className='h-full mx-4 sm:mx-0'>
                                <Card className='h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden group'>
                                    <div className='aspect-video overflow-hidden'>
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                                        />
                                    </div>
                                    <div className='p-6'>
                                        <h3 className='text-xl font-bold mb-2 text-black group-hover:text-[#FF0050] transition-colors duration-300'>
                                            {feature.title}
                                        </h3>
                                        <p className='text-gray-800'>{feature.description}</p>
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

export default Features;
