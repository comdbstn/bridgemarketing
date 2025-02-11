import { motion } from "framer-motion";

export function Loading() {
    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
            <motion.div 
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <motion.div 
                    className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.15),transparent_70%)]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>
        </div>
    );
} 