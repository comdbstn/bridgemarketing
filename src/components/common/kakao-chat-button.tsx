import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function KakaoChatButton() {
  return (
    <motion.a
      href="http://pf.kakao.com/_CYGdn/chat"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <div className="flex items-center gap-2 px-6 py-3 bg-[#391B1B] hover:bg-[#4D2828] text-white rounded-full shadow-lg transition-all duration-300 group">
        <MessageCircle className="w-5 h-5" />
        <span className="font-medium">지금 상담하기</span>
      </div>
    </motion.a>
  );
}