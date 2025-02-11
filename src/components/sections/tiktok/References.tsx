import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const References: React.FC = () => {
    const reference = {
        client: "온아웃",
        period: "24.12.01~24.12.15(45일)",
        contentCount: "75개",
        targetKPI: "앱 설치 수",
        achievedKPI: "총 콘텐츠 뷰 수 2,380,000회 | CPI 295원",
    };

    return (
        <section className='py-20 bg-gradient-to-br from-white via-[#00F2EA]/5 to-white'>
            <div className='container mx-auto px-4'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-4xl font-bold text-center mb-12 text-black font-aggro'
                >
                    레퍼런스 예시
                </motion.h2>
                <div className='max-w-5xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className='p-8 bg-gradient-to-br from-white to-[#00F2EA]/5 hover:shadow-lg transition-shadow duration-300'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                                <div className='space-y-6'>
                                    <div>
                                        <h3 className='text-lg font-semibold text-black mb-2'>광고주</h3>
                                        <p className='text-gray-800'>{reference.client}</p>
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-semibold text-black mb-2'>캠페인 기간</h3>
                                        <p className='text-gray-800'>{reference.period}</p>
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-semibold text-black mb-2'>업로드 콘텐츠 수</h3>
                                        <p className='text-gray-800'>{reference.contentCount}</p>
                                    </div>
                                </div>
                                <div className='space-y-6'>
                                    <div>
                                        <h3 className='text-lg font-semibold text-black mb-2'>목표 KPI</h3>
                                        <p className='text-gray-800'>{reference.targetKPI}</p>
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-semibold text-black mb-2'>달성 KPI</h3>
                                        <p className='text-gray-800'>{reference.achievedKPI}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className='relative group'
                                >
                                    <div className='absolute inset-0 bg-gradient-to-r from-[#00F2EA] to-[#FF0050] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg' />
                                    <img
                                        src='/tiktok_reference/1.png'
                                        alt='레퍼런스 이미지 1'
                                        className='w-full rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300'
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className='relative group'
                                >
                                    <div className='absolute inset-0 bg-gradient-to-r from-[#00F2EA] to-[#FF0050] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg' />
                                    <img
                                        src='/tiktok_reference/2.png'
                                        alt='레퍼런스 이미지 2'
                                        className='w-full rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300'
                                    />
                                </motion.div>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default References;
