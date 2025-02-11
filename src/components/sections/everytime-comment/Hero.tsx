import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#C62917] to-[#A61F10]">
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative pt-20 sm:pt-0'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='max-w-4xl mx-auto text-center'
                >
                    <div className='space-y-12 mb-12'>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="font-['Changa'] text-[28px] sm:text-[50px] font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-[#FFE5E5] to-[#FFFFFF] select-none"
                        >
                            BRIDGE MARKETING
                        </motion.p>
                        <div className='flex items-center justify-center gap-12'>
                            <motion.img
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                src='/logo/everytime.png'
                                alt='에브리타임 로고'
                                className='h-28 rounded-2xl'
                            />
                            <motion.h1
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="font-['Changa'] text-[50px] sm:text-[130px] font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-[#FFE5E5] via-[#FFFFFF] to-[#FFF0F0] select-none leading-none"
                            >
                                COMMENT
                            </motion.h1>
                        </div>
                        <div className='space-y-8'>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className='text-3xl sm:text-5xl font-bold text-white font-aggro'
                            >
                                대학생 커뮤니티 댓글 마케팅의 새로운 기준
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className='text-lg sm:text-xl text-white/90 px-4 font-tway'
                            >
                                450만 대학생이 사용하는 에브리타임에서 시작하세요.
                                <br className='hidden sm:block' />
                                자연스러운 댓글로 신뢰도 높은 마케팅을 진행합니다.
                            </motion.p>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-12 pb-8 sm:pb-0'>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white'
                            >
                                <h3 className='text-2xl sm:text-4xl font-bold mb-2'>450만+</h3>
                                <p className='text-sm sm:text-base text-white/80'>월간 활성 사용자</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white'
                            >
                                <h3 className='text-2xl sm:text-4xl font-bold mb-2'>200+</h3>
                                <p className='text-sm sm:text-base text-white/80'>대학교 커뮤니티</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white'
                            >
                                <h3 className='text-2xl sm:text-4xl font-bold mb-2'>99%</h3>
                                <p className='text-sm sm:text-base text-white/80'>광고 만족도</p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className='mt-12 pb-16 sm:pb-20'
                        >
                            <a
                                href='http://pf.kakao.com/_CYGdn/chat'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-white/90 text-[#C62917] rounded-full font-bold text-lg transition-all duration-300 hover:scale-105'
                            >
                                <MessageCircle className='w-5 h-5' />더 빠른 성장을 원하시나요?
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 