import { motion, useMotionValue, useMotionTemplate, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useEffect, useRef, useState, useMemo } from "react";
import { Loading } from "@/components/ui/loading";
import { Analytics } from "@vercel/analytics/react";
import Head from 'next/head';

// 로고 배열 생성
const timestamp = Date.now();
const clientLogos = [
    `/logo/0.png?t=${timestamp}`, `/logo/1.png?t=${timestamp}`, `/logo/2.png?t=${timestamp}`, `/logo/3.png?t=${timestamp}`, 
    `/logo/4.png?t=${timestamp}`, `/logo/5.png?t=${timestamp}`, `/logo/6.png?t=${timestamp}`, `/logo/8.png?t=${timestamp}`, 
    `/logo/9.png?t=${timestamp}`, `/logo/10.png?t=${timestamp}`, `/logo/11.png?t=${timestamp}`, `/logo/13.png?t=${timestamp}`, 
    `/logo/14.png?t=${timestamp}`, `/logo/15.png?t=${timestamp}`, `/logo/16.png?t=${timestamp}`, `/logo/17.png?t=${timestamp}`, 
    `/logo/18.png?t=${timestamp}`, `/logo/19.png?t=${timestamp}`, `/logo/20.png?t=${timestamp}`, `/logo/21.png?t=${timestamp}`,
    `/logo/22.png?t=${timestamp}`, `/logo/23.png?t=${timestamp}`, `/logo/24.png?t=${timestamp}`, `/logo/25.png?t=${timestamp}`, 
    `/logo/26.png?t=${timestamp}`, `/logo/27.png?t=${timestamp}`, `/logo/28.png?t=${timestamp}`, `/logo/29.png?t=${timestamp}`, 
    `/logo/30.png?t=${timestamp}`, `/logo/31.png?t=${timestamp}`, `/logo/32.png?t=${timestamp}`, `/logo/33.png?t=${timestamp}`,
    `/logo/34.png?t=${timestamp}`, `/logo/35.png?t=${timestamp}`, `/logo/36.png?t=${timestamp}`, `/logo/7.png?t=${timestamp}`,
    `/logo/12.png?t=${timestamp}`
];

export function MainPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const shouldRestore = location.state?.shouldRestore;
    const savedScrollPosition = location.state?.scrollPosition;

    useEffect(() => {
        if (shouldRestore && savedScrollPosition) {
            window.scrollTo(0, savedScrollPosition);
        }
    }, [shouldRestore, savedScrollPosition]);

    // 브라우저 뒤로가기 처리
    useEffect(() => {
        const handlePopState = () => {
            const currentScroll = window.scrollY;
            navigate('/', {
                state: { shouldRestore: true, scrollPosition: currentScroll }
            });
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, [navigate]);

    const handleServiceClick = () => {
        const currentScroll = window.scrollY;
        return {
            state: {
                from: '/',
                scrollPosition: currentScroll
            }
        };
    };

    // 1. State Hooks
    const [isLoading, setIsLoading] = useState(true);
    const [statsCounts, setStatsCounts] = useState([0, 0, 0]);

    // 2. Motion Hooks
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const gradientX = useTransform(mouseX, [0, window.innerWidth], [0, 100]);
    const gradientY = useTransform(mouseY, [0, window.innerHeight], [0, 100]);
    const background = useMotionTemplate`radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(147,51,234,0.15), transparent 70%)`;

    // 3. Ref Hooks
    const statsRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

    // 4. Constants
    const statsData = useMemo(() => [
        { value: 92, suffix: "%", label: "고객사 재구매율" },
        { value: 34000, suffix: "+", label: "누적 작업횟수" },
        { value: 4.9, suffix: "", label: "평균 만족도" }
    ], []);

    // 5. Effect Hooks
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            // 로딩이 끝나면 바로 통계 카운트 시작
            statsData.forEach((stat, index) => {
                let startTime: number;
                const endValue = stat.value;
                const duration = 0.8;

                const animate = (currentTime: number) => {
                    if (!startTime) startTime = currentTime;
                    const progress = (currentTime - startTime) / (duration * 1000);

                    if (progress < 1) {
                        setStatsCounts(prev => {
                            const newCounts = [...prev];
                            newCounts[index] = Number.isInteger(endValue) 
                                ? Math.floor(endValue * progress)
                                : Number((endValue * progress).toFixed(1));
                            return newCounts;
                        });
                        requestAnimationFrame(animate);
                    } else {
                        setStatsCounts(prev => {
                            const newCounts = [...prev];
                            newCounts[index] = endValue;
                            return newCounts;
                        });
                    }
                };
                requestAnimationFrame(animate);
            });
        }, 500);
        return () => clearTimeout(timer);
    }, [statsData]);

    // 6. Event Handlers
    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        mouseX.set(clientX);
        mouseY.set(clientY);
    };

    if (isLoading) return <Loading />;

    return (
        <>
            <Head>
                <title>브릿지마케팅 | 대한민국 1위 통합 마케팅 에이전시</title>
                <meta name="description" content="9년차 시니어 마케터의 전문성으로 검증된 마케팅 성과를 제공합니다. 블라인드, 에브리타임, 틱톡 등 다양한 플랫폼에서 300% 이상의 마케팅 효율을 달성하세요." />
                <meta name="keywords" content="브릿지마케팅, 통합마케팅, 디지털마케팅, 블라인드마케팅, 에브리타임마케팅, 틱톡마케팅" />
                <meta property="og:title" content="브릿지마케팅 | 대한민국 1위 통합 마케팅 에이전시" />
                <meta property="og:description" content="9년차 시니어 마케터의 전문성으로 검증된 마케팅 성과를 제공합니다. 300% 이상의 마케팅 효율, 98% 고객 만족도를 경험하세요." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://bridgemarketing.co.kr" />
                <meta property="og:image" content="/images/og-image.jpg" />
                <link rel="canonical" href="https://bridgemarketing.co.kr" />
                <meta name="robots" content="index, follow" />
            </Head>

            <Analytics />
            <Navbar />
            <main className="min-h-screen bg-black text-white" onMouseMove={handleMouseMove}>
                {/* 히어로 섹션 */}
                <section className="relative min-h-screen flex items-center pt-20">
                    <motion.div 
                        className="absolute inset-0" 
                        style={{ background }}
                    />
                    <div className="container mx-auto px-4 relative">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ 
                                    duration: 0.3,
                                    type: "spring",
                                    stiffness: 150 
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                                className="inline-block px-6 py-3 bg-purple-500/10 rounded-full text-purple-400 text-sm mb-8 border border-purple-500/20 backdrop-blur-sm"
                            >
                                Bridge Marketing
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4,
                                    type: "spring",
                                    stiffness: 150
                                }}
                                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-500 to-indigo-500 bg-clip-text text-transparent font-aggro leading-tight"
                            >
                                Your bridge to success
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.4 }}
                                className="text-xl md:text-2xl text-gray-400 mb-12 font-medium"
                            >
                                사업 성공을 위한 A to Z 솔루션
                                <br />
                                정확한 데이터와 KPI로 가치를 전달합니다
                            </motion.p>

                            {/* 통계 섹션 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                                className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 my-16"
                            >
                                {statsData.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        ref={statsRefs[index]}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            delay: 0.3 + index * 0.1,
                                            type: "spring",
                                            stiffness: 150
                                        }}
                                        whileHover={{ 
                                            scale: 1.05,
                                            transition: { duration: 0.2 }
                                        }}
                                        className="relative group"
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                            initial={false}
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                opacity: [0.5, 0.8, 0.5]
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        />
                                        <div className="relative p-6 rounded-2xl bg-purple-500/5 border border-purple-500/10 backdrop-blur-sm">
                                            <motion.div
                                                className="text-4xl md:text-5xl font-bold text-purple-400 mb-2"
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ 
                                                    delay: 0.5,
                                                    duration: 1.5,
                                                    ease: "easeOut"
                                                }}
                                            >
                                                {statsCounts[index]}{stat.suffix}
                                            </motion.div>
                                            <motion.div
                                                className="text-lg text-gray-400"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 1.2 + index * 0.2 }}
                                            >
                                        {stat.label}
                                            </motion.div>
                                    </div>
                                    </motion.div>
                            ))}
                            </motion.div>

                            {/* CTA 버튼 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.4 }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-6"
                            >
                                <a
                                    href="http://pf.kakao.com/_CYGdn/chat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-tway text-lg overflow-hidden"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600"
                                        initial={false}
                                        whileHover={{
                                            opacity: [0, 1],
                                            transition: { duration: 0.3 }
                                        }}
                                    />
                                    <motion.div
                                        className="relative flex items-center"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        문의하기
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </motion.div>
                                </a>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <Link
                                        to="/service"
                                        className="group relative px-8 py-4 border-2 border-purple-600/50 text-purple-400 rounded-xl font-tway text-lg overflow-hidden block"
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-purple-600/10"
                                            initial={false}
                                            whileHover={{
                                                opacity: [0, 1],
                                                transition: { duration: 0.3 }
                                            }}
                                        />
                                        <span className="relative">서비스 알아보기</span>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 실적 섹션 */}
                <section className="py-24 relative overflow-hidden">
                    <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
                        <motion.div
                            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.2),transparent_70%)]"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>
                    <div className="container mx-auto px-4 relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <motion.div
                                initial={{ scale: 0.9 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="inline-block relative"
                            >
                                <div className="text-xl text-purple-400 mb-2">
                                    누적 고객사
                    </div>
                                <div className="text-6xl md:text-7xl font-bold text-purple-400 mb-4 relative z-10">716</div>
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.6, 0.3]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        repeatType: "reverse"
                                    }}
                                    className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-2xl text-gray-300"
                            >
                                업체 총 작업 건수 34,000건
                            </motion.div>
                        </motion.div>

                        {/* 누적 고객사 로고 그리드 */}
                        <div className="relative w-full overflow-hidden">
                            {[0, 1, 2].map((row) => {
                                // 각 줄마다 다른 로고 세트 생성
                                const startIndex = row * Math.floor(clientLogos.length / 3);
                                const endIndex = startIndex + Math.floor(clientLogos.length / 3);
                                const rowLogos = [
                                    ...clientLogos.slice(startIndex, endIndex),
                                    ...clientLogos.slice(startIndex, endIndex),
                                    ...clientLogos.slice(startIndex, endIndex),
                                    ...clientLogos.slice(startIndex, endIndex)
                                ];

                                return (
                                    <motion.div
                                        key={row}
                                        className="flex gap-4 py-4"
                                        initial={{ x: "0%" }}
                                        animate={{ x: "-100%" }}
                                        transition={{
                                            duration: row === 1 ? 30 : 25,
                                            repeat: Infinity,
                                            ease: "linear",
                                            repeatType: "loop"
                                        }}
                                    >
                                        {rowLogos.map((logo, index) => (
                                            <div 
                                                key={`${row}-${index}`}
                                                className="flex-shrink-0 w-[150px] h-[60px] flex items-center justify-center bg-black/50 rounded-lg backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
                                            >
                                                <img
                                                    src={logo}
                                                    alt={`Client ${startIndex + (index % (endIndex - startIndex)) + 1}`}
                                                    className="w-[120px] h-[48px] object-contain opacity-80 hover:opacity-100 transition-all duration-300"
                                                    loading="lazy"
                                                />
                                            </div>
                                        ))}
                                    </motion.div>
                                );
                            })}
                            {/* 페이드 아웃 효과 */}
                            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#010002] via-[#010002]/50 to-transparent z-10" />
                            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#010002] via-[#010002]/50 to-transparent z-10" />
                        </div>
                    </div>
                </section>

                {/* 마케팅 패러다임 섹션 */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.1),transparent_70%)]" />
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.2, 0.4, 0.2]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-indigo-600/10 to-transparent blur-3xl"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="inline-block px-6 py-3 bg-purple-500/10 rounded-full text-purple-400 text-sm mb-6 border border-purple-500/20 backdrop-blur-sm"
                            >
                                Marketing Paradigm
                            </motion.span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                                마케팅의 새로운 관점을 제시합니다
                            </h2>
                            <p className="text-xl text-gray-400">경험, 분석, 기술이 합쳐진 마케팅</p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            {[
                                {
                                    title: "맞춤형 타겟팅",
                                    icon: <svg className="w-12 h-12 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 12L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>,
                                    value: "300%",
                                    description: "마케팅 효율 증가",
                                    subtext: "각 플랫폼별 특성을 고려한\n최적의 타겟팅 전략"
                                },
                                {
                                    title: "자연스러운 바이럴",
                                    icon: <svg className="w-12 h-12 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 11.5C21.0034 13.8199 19.9932 16.0358 18.1173 17.6987C16.2414 19.3617 13.6526 20.3146 11 20.3146C9.6555 20.3146 8.3458 20.0253 7.1654 19.4746L3 21L4.5254 16.8346C3.97474 15.6542 3.6854 14.3445 3.6854 13C3.6854 10.3474 4.63825 7.7586 6.30124 5.88276C7.96423 4.00693 10.1801 2.9966 12.5 3H13C16.0782 3.11499 19.0067 4.39533 21.1612 6.54976C23.3158 8.7042 24.5962 11.6327 24.7112 14.7109V15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>,
                                    value: "98%",
                                    description: "고객 만족도",
                                    subtext: "실제 유저들의 자연스러운\n입소문 마케팅"
                                },
                                {
                                    title: "검증된 성과",
                                    icon: <svg className="w-12 h-12 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3744C6.51168 20.6271 4.78465 19.246 3.61096 17.4369C2.43727 15.6279 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>,
                                    value: "92%",
                                    description: "재구매율",
                                    subtext: "수많은 성공 사례로\n입증된 마케팅 효과"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.8 }}
                                    className="group relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-indigo-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                    <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-purple-500/10 group-hover:border-purple-500/30 rounded-2xl p-8 transition-all duration-500 h-full">
                                        <div className="relative mb-8">
                                            <motion.div
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                    opacity: [0.5, 0.8, 0.5]
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                                className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full"
                                            />
                                            <div className="relative p-4 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl backdrop-blur-sm border border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-500 inline-block">
                                                {item.icon}
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-500 mb-4">
                                            {item.title}
                                        </h3>
                                        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                                            {item.value}
                                        </div>
                                        <div className="text-xl text-gray-300 mb-6">{item.description}</div>
                                        <p className="text-gray-400 whitespace-pre-line leading-relaxed">
                                            {item.subtext}
                                        </p>
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8 }}
                                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 서비스 섹션 */}
                <section className="py-32 relative">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="container mx-auto px-4"
                    >
                        <div className="text-center mb-16">
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="inline-block px-6 py-3 bg-purple-500/10 rounded-full text-purple-400 text-sm mb-6 border border-purple-500/20 backdrop-blur-sm"
                            >
                                Our Services
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-3xl md:text-4xl font-bold mb-6"
                            >
                                사업 성공을 위한 모든 수단
                                <br />
                                브릿지마케팅에 있습니다.
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-gray-400 text-lg mb-16"
                            >
                                기획부터 개발, 마케팅까지
                            </motion.p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: "/logo/business-plan.png",
                                    title: "사업계획서 첨삭",
                                    description: "정부지원사업 전문 컨설팅",
                                    features: [
                                        "1,600종 커버",
                                        "92% 합격률",
                                        "맞춤형 첨삭",
                                        "전문가 상담"
                                    ],
                                    gradient: "from-[#626ae2] to-[#95c5fa]",
                                    link: "/business-plan"
                                },
                                {
                                    icon: "/logo/boltlab.png",
                                    title: "개발 외주",
                                    description: "AI AgentForce 개발 에이전시",
                                    features: [
                                        "53% 효율 증가",
                                        "3배 빠른 개발",
                                        "3배 저렴한 비용",
                                        "품질 보장"
                                    ],
                                    gradient: "from-[#626ae2] to-[#95c5fa]",
                                    link: "/boltlab"
                                },
                                {
                                    icon: "/logo/everytime.png",
                                    title: "에브리타임",
                                    description: "대학생 커뮤니티 1위",
                                    features: [
                                        "대학생 타겟팅",
                                        "실시간 분석",
                                        "맞춤형 컨텐츠",
                                        "높은 전환율"
                                    ],
                                    gradient: "from-[#F44336] to-[#FF9800]",
                                    link: "/everytime"
                                },
                                {
                                    icon: "/logo/navercafe.png",
                                    title: "네이버 카페",
                                    description: "맘카페, 지역, 취준생 타겟팅",
                                    features: [
                                        "타겟 분석",
                                        "자연스러운 바이럴",
                                        "실시간 모니터링",
                                        "높은 도달률"
                                    ],
                                    gradient: "from-[#03C75A] to-[#00B843]",
                                    link: "/naver-cafe"
                                },
                                {
                                    icon: "/logo/naverplace.png",
                                    title: "네이버 플레이스",
                                    description: "지도 노출 최적화",
                                    features: [
                                        "트래픽 증가",
                                        "상위노출 최적화",
                                        "실시간 순위 분석",
                                        "리뷰 관리"
                                    ],
                                    gradient: "from-[#03C75A] to-[#00B843]",
                                    link: "/naver-place"
                                },
                                {
                                    icon: "/logo/tiktok.png",
                                    title: "틱톡",
                                    description: "MZ세대 타겟 바이럴 마케팅",
                                    features: [
                                        "MZ 타겟팅",
                                        "높은 전환율",
                                        "숏폼 컨텐츠",
                                        "뷰티, 성형, 화장품"
                                    ],
                                    gradient: "from-[#00F2EA] to-[#FF0050]",
                                    link: "/tiktok"
                                }
                            ].map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="group relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-indigo-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                <Link 
                                    to={service.link}
                                        state={handleServiceClick()}
                                        className="block relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 transform-gpu hover:-translate-y-1"
                                >
                                        <div className={`p-8 bg-gradient-to-br ${service.gradient} relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                                        <img 
                                                src={service.icon}
                                            alt={service.title}
                                                className="h-12 w-12 object-contain mb-4"
                                        />
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {service.title}
                                    </h3>
                                            <p className="text-gray-700">{service.description}</p>
                                        </div>

                                        <div className="p-6">
                                            <ul className="space-y-3">
                                                {service.features.map((feature, fIndex) => (
                                                    <motion.li
                                                        key={fIndex}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: 0.6 + fIndex * 0.1 }}
                                                        className="flex items-start gap-2 text-gray-400 group-hover:text-gray-300 transition-colors"
                                            >
                                                        <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-2" />
                                                        <span>{feature}</span>
                                                    </motion.li>
                                        ))}
                                    </ul>
                                    </div>
                                </Link>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="flex justify-center mt-12"
                        >
                            <Link
                                to="/service"
                                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative flex items-center">
                                    서비스 전체보기
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        </motion.div>
                    </motion.div>
                </section>

                {/* CTA 섹션 */}
                <section className="py-32 relative overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.2),transparent_70%)]" />
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-indigo-600/20 to-transparent blur-3xl"
                        />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="container mx-auto px-4 relative"
                    >
                        <div className="max-w-3xl mx-auto text-center">
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="inline-block px-6 py-3 bg-purple-500/10 rounded-full text-purple-400 text-sm mb-6 border border-purple-500/20 backdrop-blur-sm"
                            >
                                Ready to Start?
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-500 to-indigo-500 bg-clip-text text-transparent font-display"
                            >
                                지금 시작하세요
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="text-xl text-gray-300 mb-12 leading-relaxed"
                            >
                                상담만 받아도 필요한 마케팅 인사이트를 전달해드립니다.
                                <br />
                                혼자보단 여러명이 강합니다.
                                <br />
                                브릿지마케팅과 함께할때 더욱 강합니다.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="flex justify-center"
                            >
                                <a
                                    href="http://pf.kakao.com/_CYGdn/chat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative px-10 py-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-tway text-lg overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative flex items-center">
                                        상담 시작하기
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.8, duration: 0.8 }}
                                        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                </a>
                            </motion.div>

                    </div>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    );
} 