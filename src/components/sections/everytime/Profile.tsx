import { motion } from "framer-motion";

export function Profile() {
    return (
        <section className="py-20 bg-gradient-to-br from-[#FF4B4B]/10 to-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 font-aggro">
                        에브리타임 마케팅 전문가
                    </h2>
                    <p className="text-xl text-[#FF4B4B] font-tway">
                        대학생 마케팅의 A to Z까지 책임집니다
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-xl p-8 shadow-lg"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 font-aggro">전문성</h3>
                        <ul className="space-y-3 text-gray-600 font-tway">
                            <li>• 5년 이상의 에브리타임 마케팅 경험</li>
                            <li>• 100개 이상의 성공 프로젝트 수행</li>
                            <li>• 대학생 타겟 마케팅 전략 전문가</li>
                            <li>• 실시간 트렌드 분석 및 적용</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-xl p-8 shadow-lg"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 font-aggro">차별성</h3>
                        <ul className="space-y-3 text-gray-600 font-tway">
                            <li>• 맞춤형 콘텐츠 제작 및 전략 수립</li>
                            <li>• 실시간 모니터링 및 피드백</li>
                            <li>• 데이터 기반 성과 분석</li>
                            <li>• 지속적인 사후 관리 서비스</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 