import { motion, useMotionValue, useMotionTemplate, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { useEffect, useRef, useState, useMemo } from "react";
import { Loading } from "@/components/ui/loading";
import { Analytics } from "@vercel/analytics/react";
import { Hero } from "@/components/sections/main/Hero";
import { Features } from "@/components/sections/main/Features";
import { Services } from "@/components/sections/main/Services";
import { Process } from "@/components/sections/main/Process";

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

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Bridge Marketing - 디지털 마케팅의 새로운 기준";
    }, []);

    if (isLoading) return <Loading />;

    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <Services />
                <Process />
            </main>
            <Footer />
        </div>
    );
} 