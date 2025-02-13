import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function KakaoChatButton() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="fixed bottom-8 right-8 z-50"
        >
            <a
                href="http://pf.kakao.com/_CYGdn/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-tway text-sm shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
            >
                <MessageCircle className="w-5 h-5" />
                <span className="relative">
                    상담하기
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
            </a>
        </motion.div>
    );
}