import { motion } from "framer-motion";
import { useCountAnimation } from "@/hooks/use-count-animation";
import { formatNumber } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

const ANIMATION_DELAY_BASE = 0.1;
const ANIMATION_DURATION = 0.5;

export function Hero() {
    const { count: totalUsers, ref: totalRef } = useCountAnimation(500);
    const { count: koreanUsers, ref: koreanRef } = useCountAnimation(300);
    const { count: mau, ref: mauRef } = useCountAnimation(200);

    return (
        <section className='min-h-screen relative bg-gradient-to-br from-[#2DB400] to-[#1EC800] flex items-center justify-center overflow-hidden'>
            {/* Background Pattern */}
            <div className='absolute inset-0 bg-[url("/patterns/grid.svg")] opacity-10' />

            <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative pt-20 sm:pt-0'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: ANIMATION_DURATION }}
                    className='max-w-4xl mx-auto text-center'
                >
                    <div className='space-y-12 mb-12'>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: ANIMATION_DURATION, delay: ANIMATION_DELAY_BASE }}
                            className="font-['Changa'] text-[28px] sm:text-[50px] font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-[#E5F7FF] to-[#FFFFFF] select-none"
                        >
                            BRIDGE MARKETING
                        </motion.p>
                        <div className='flex items-center justify-center gap-12'>
                            <motion.img
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: ANIMATION_DURATION, delay: ANIMATION_DELAY_BASE * 1.5 }}
                                src='/logo/navercafe.png'
                                alt='네이버 카페 로고'
                                className='h-28 rounded-2xl'
                            />
                            <motion.h1
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: ANIMATION_DURATION * 1.3, delay: ANIMATION_DELAY_BASE * 2 }}
                                className="font-['Changa'] text-[50px] sm:text-[130px] font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-[#E5F7FF] via-[#FFFFFF] to-[#F5FBFF] select-none leading-none"
                            >
                                CAFE
                            </motion.h1>
                        </div>
                        <div className='space-y-8'>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className='text-3xl sm:text-5xl font-bold text-[#2DB400] font-aggro'
                            >
                                입소문엔 역시, 네이버 카페 마케팅
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: ANIMATION_DURATION, delay: ANIMATION_DELAY_BASE * 3 }}
                                className='text-lg sm:text-xl text-[#1E881E] font-tway'
                            >
                                대한민국 최대 커뮤니티 네이버 카페에서
                                <br className='hidden sm:block' />
                                효과적인 마케팅을 시작하세요
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: ANIMATION_DURATION, delay: ANIMATION_DELAY_BASE * 5 }}
                            className='mt-8'
                        >
                            <a
                                href='http://pf.kakao.com/_CYGdn/chat'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-white/90 text-[#2DB400] rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 font-tway'
                            >
                                <MessageCircle className='w-5 h-5' />더 빠른 성장을 원하시나요?
                            </a>
                        </motion.div>

                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-12'>
                            {[
                                { number: totalUsers, suffix: "만+", label: "월간 활성 카페", ref: totalRef },
                                { number: koreanUsers, suffix: "만+", label: "일간 방문자", ref: koreanRef },
                                { number: mau, suffix: "만+", label: "월간 게시글", ref: mauRef },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: ANIMATION_DURATION, delay: ANIMATION_DELAY_BASE * (3.5 + index * 0.5) }}
                                    className='bg-white/10 backdrop-blur-sm rounded-2xl p-6'
                                    ref={stat.ref}
                                >
                                    <h3 className='text-2xl sm:text-4xl font-bold mb-2 text-[#2DB400]'>
                                        {formatNumber(stat.number, stat.suffix)}
                                    </h3>
                                    <p className='text-sm sm:text-base text-[#1E881E]'>{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 
