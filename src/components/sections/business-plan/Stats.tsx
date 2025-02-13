import { motion } from "framer-motion";
import { useCountAnimation } from "@/hooks/useCountAnimation";

export function Stats() {
    const { count: successRate, ref: successRef } = useCountAnimation(92);
    const { count: speedRate, ref: speedRef } = useCountAnimation(3);
    const { count: satisfactionRate, ref: satisfactionRef } = useCountAnimation(98);

    return (
        <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                    <h3 className="text-xl font-bold mb-8 text-purple-600 font-aggro">주요 통계</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple-700 mb-2" ref={successRef}>
                                {successRate}%
                            </div>
                            <div className="text-gray-600 font-tway">선정 성공률</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple-700 mb-2" ref={speedRef}>
                                {speedRate}배
                            </div>
                            <div className="text-gray-600 font-tway">빠른 작성</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple-700 mb-2" ref={satisfactionRef}>
                                {satisfactionRate}%
                            </div>
                            <div className="text-gray-600 font-tway">고객 만족도</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple-700 mb-2">
                                100+
                            </div>
                            <div className="text-gray-600 font-tway">작성 완료</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 