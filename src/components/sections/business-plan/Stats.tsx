import { motion } from "framer-motion";
import { useCountAnimation } from "@/hooks/useCountAnimation";

export function Stats() {
    const { count: successRate, ref: successRef } = useCountAnimation(92);
    const { count: speedRate, ref: speedRef } = useCountAnimation(3);
    const { count: satisfactionRate, ref: satisfactionRef } = useCountAnimation(98);

    return (
        <section className="py-20 bg-gradient-to-br from-[#626ae2]/5 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#626ae2] to-[#7884eb] opacity-50 group-hover:opacity-100 transition-all duration-300 rounded-2xl blur-[2px] group-hover:blur-[3px]" />
                        <div className="relative bg-white rounded-2xl p-8 text-center">
                            <div className="text-4xl font-bold text-[#626ae2] mb-2" ref={successRef}>
                                {successRate}%
                            </div>
                            <div className="text-gray-600 font-tway">선정 성공률</div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#626ae2] to-[#7884eb] opacity-50 group-hover:opacity-100 transition-all duration-300 rounded-2xl blur-[2px] group-hover:blur-[3px]" />
                        <div className="relative bg-white rounded-2xl p-8 text-center">
                            <div className="text-4xl font-bold text-[#626ae2] mb-2" ref={speedRef}>
                                {speedRate}배
                            </div>
                            <div className="text-gray-600 font-tway">빠른 작성</div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#626ae2] to-[#7884eb] opacity-50 group-hover:opacity-100 transition-all duration-300 rounded-2xl blur-[2px] group-hover:blur-[3px]" />
                        <div className="relative bg-white rounded-2xl p-8 text-center">
                            <div className="text-4xl font-bold text-[#626ae2] mb-2" ref={satisfactionRef}>
                                {satisfactionRate}%
                            </div>
                            <div className="text-gray-600 font-tway">고객 만족도</div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#626ae2] to-[#7884eb] opacity-50 group-hover:opacity-100 transition-all duration-300 rounded-2xl blur-[2px] group-hover:blur-[3px]" />
                        <div className="relative bg-white rounded-2xl p-8 text-center">
                            <div className="text-4xl font-bold text-[#626ae2] mb-2">
                                100+
                            </div>
                            <div className="text-gray-600 font-tway">작성 완료</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 