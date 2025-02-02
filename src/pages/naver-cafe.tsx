import { useEffect } from "react";
import { Hero } from "@/components/sections/naver-cafe/Hero";
import { Products } from "@/components/sections/naver-cafe/Products";
import { Features } from "@/components/sections/naver-cafe/Features";
import { Stats } from "@/components/sections/naver-cafe/Stats";
import { Advantages } from "@/components/sections/naver-cafe/Advantages";
import { Industries } from "@/components/sections/naver-cafe/Industries";
import { References } from "@/components/sections/naver-cafe/References";
import { Process } from "@/components/sections/naver-cafe/Process";
import { Pricing } from "@/components/sections/naver-cafe/Pricing";
import { QA } from "@/components/sections/naver-cafe/QA";
import { Footer } from "@/components/layout/Footer";
import { BackButton } from "@/components/navigation/back-button";
import { KakaoChatButton } from "@/components/chat/kakao-chat-button";
import { motion } from "framer-motion";

const ANIMATION_DELAY_BASE = 0.1;
const ANIMATION_DURATION = 0.5;

export default function NaverCafeServicePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: ANIMATION_DURATION }}
            className="min-h-screen w-full bg-white overflow-hidden"
        >
            <BackButton />
            <KakaoChatButton />
            <Hero />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: ANIMATION_DURATION, delay: ANIMATION_DELAY_BASE }}
            >
                <Products />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: ANIMATION_DURATION, delay: ANIMATION_DELAY_BASE * 2 }}
            >
                <Features />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: ANIMATION_DURATION, delay: ANIMATION_DELAY_BASE * 3 }}
            >
                <Stats />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: ANIMATION_DURATION, delay: ANIMATION_DELAY_BASE * 4 }}
            >
                <Advantages />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: ANIMATION_DURATION, delay: ANIMATION_DELAY_BASE * 5 }}
            >
                <Industries />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: ANIMATION_DURATION, delay: ANIMATION_DELAY_BASE * 6 }}
            >
                <References />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: ANIMATION_DURATION, delay: ANIMATION_DELAY_BASE * 7 }}
            >
                <Process />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: ANIMATION_DURATION, delay: ANIMATION_DELAY_BASE * 8 }}
            >
                <Pricing />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: ANIMATION_DURATION, delay: ANIMATION_DELAY_BASE * 9 }}
            >
                <QA />
            </motion.div>
            <Footer />
        </motion.div>
    );
}
