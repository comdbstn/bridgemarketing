import { motion } from "framer-motion";

export function Stats() {
    const stats = [
        { number: "53%", label: "개발 효율 증가" },
        { number: "3배", label: "빠른 개발" },
        { number: "98%", label: "고객 만족도" },
        { number: "3배", label: "저렴한 비용" },
        { number: "100+", label: "프로젝트 완수" },
        { number: "85%", label: "재계약률" }
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        AI 시대의 개발 비용과 효율
                        <br />
                        이제는 달라져야 합니다
                    </h2>
                </motion.div>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <p className="text-3xl font-bold text-[#626ae2] mb-2">{stat.number}</p>
                            <p className="text-gray-600">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 