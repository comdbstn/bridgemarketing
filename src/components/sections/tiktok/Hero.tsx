import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const CountUpAnimation = ({ end, duration = 1500 }: { end: number; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
            setCount(Math.floor(easeOutQuart * end));

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [end, duration]);

    return <span>{count}</span>;
};

const Hero: React.FC = () => {
    const stats = [
        { number: 150, suffix: "개국", label: "전 세계 이용 가능" },
        { number: 35, suffix: "억", label: "누적 다운로드" },
        { number: 15, suffix: "억", label: "월간 사용자 수" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3,
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 },
        },
    };

    return (
        <section className='min-h-screen flex items-center justify-center bg-gradient-to-br from-[#00F2EA] via-[#00D1C9] to-[#FF0050]'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative pt-20 sm:pt-0'>
                <motion.div
                    variants={containerVariants}
                    initial='hidden'
                    animate='visible'
                    className='max-w-4xl mx-auto text-center'
                >
                    <div className='space-y-8'>
                        <motion.p
                            variants={itemVariants}
                            className="font-['Changa'] text-[28px] sm:text-[50px] font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-black to-black/80 select-none"
                        >
                            BRIDGE MARKETING
                        </motion.p>
                        <motion.div variants={itemVariants} className='flex items-center justify-center gap-12'>
                            <img src='/logo/tiktok.png' alt='TikTok Logo' className='h-28' />
                            <h1 className="font-['Changa'] text-[50px] sm:text-[130px] font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-[#FF0050] via-[#FF0050]/90 to-[#FF0050]/80 select-none leading-none">
                                TIKTOK
                            </h1>
                        </motion.div>
                        <motion.div variants={itemVariants} className='space-y-4'>
                            <h2 className='text-3xl sm:text-5xl font-bold text-[#00F2EA] font-aggro'>
                                바이럴 마케팅의 새로운 기준
                            </h2>
                            <p className='text-lg sm:text-xl text-black/90 px-4 font-tway'>
                                틱톡은 글로벌 단위 트렌드가 만들어지는 소셜 앱입니다.
                                <br className='hidden sm:block' />
                                대규모 바이럴 마케팅을 위한 최적의 플랫폼, 틱톡 시딩 마케팅을 시작하세요.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-8'
                        >
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className='p-4 sm:p-6 mx-4 sm:mx-0 bg-gradient-to-br from-[#00F2EA]/20 to-[#FF0050]/20 backdrop-blur-sm rounded-lg border border-[#00F2EA]/30 hover:border-[#FF0050]/40 transition-all duration-300 group'
                                >
                                    <h3 className='text-2xl sm:text-4xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300 font-aggro'>
                                        <span className='text-transparent bg-clip-text bg-gradient-to-b from-[#FF0050] via-[#FF0050] to-[#FF0050]/80'>
                                            <CountUpAnimation end={stat.number} />
                                            {stat.suffix}+
                                        </span>
                                    </h3>
                                    <p className='text-black/80'>{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div variants={itemVariants} className='mt-8 pb-16'>
                            <a
                                href='http://pf.kakao.com/_CYGdn/chat'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-white/90 text-[#FF0050] rounded-full font-bold text-lg transition-all duration-300 hover:scale-105'
                            >
                                <MessageCircle className='w-5 h-5' />더 빠른 성장을 원하시나요?
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
