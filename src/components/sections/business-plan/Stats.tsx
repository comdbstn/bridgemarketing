import { motion } from "framer-motion";

export function Stats() {
    const stats = [
        {
            number: "1,600+",
            label: "정부지원사업 커버리지"
        },
        {
            number: "92%",
            label: "서류 1차 합격률"
        },
        {
            number: "2년+",
            label: "전략 기획자 경력"
        },
        {
            number: "100%",
            label: "고객 만족도"
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        검증된 실적으로 증명합니다
                    </h2>
                    <p className="text-xl text-gray-600">
                        사업 영위하시는 것도 힘드신데, 페이퍼 워크에게 고통 받는 대표님들께
                        <br />
                        작지만 큰 힘이 되어드리겠습니다.
                    </p>
                </motion.div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <p className="text-4xl font-bold text-[#626ae2] mb-2">{stat.number}</p>
                            <p className="text-gray-600">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 