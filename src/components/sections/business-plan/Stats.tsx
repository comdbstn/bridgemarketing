import { motion } from "framer-motion";
import { useCountAnimation } from "@/hooks/useCountAnimation";

const stats = [
    { number: 92, suffix: "%", label: "선정 성공률" },
    { number: 3, suffix: "배", label: "빠른 작성" },
    { number: 98, suffix: "%", label: "고객 만족도" },
    { number: 3, suffix: "배", label: "저렴한 비용" },
    { number: 100, suffix: "+", label: "작성 완료" },
    { number: 85, suffix: "%", label: "재계약률" }
];

const companyStats = [
    {
        name: "삼성",
        logo: "/logo/samsung.png",
        percentage: 88
    },
    {
        name: "SK",
        logo: "/logo/sk.png",
        percentage: 89
    },
    {
        name: "현대",
        logo: "/logo/hyundai.png",
        percentage: 62
    }
];

export function Stats() {
    const { count: successRate, ref: successRef } = useCountAnimation(92);
    const { count: speedRate, ref: speedRef } = useCountAnimation(3);
    const { count: satisfactionRate, ref: satisfactionRef } = useCountAnimation(98);

    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <h3 className="text-xl font-bold mb-6 text-[#00A9FF]">주요 통계</h3>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900 mb-2" ref={successRef}>
                                    {successRate}%
                                </div>
                                <div className="text-gray-600">선정 성공률</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900 mb-2" ref={speedRef}>
                                    {speedRate}배
                                </div>
                                <div className="text-gray-600">빠른 작성</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900 mb-2" ref={satisfactionRef}>
                                    {satisfactionRate}%
                                </div>
                                <div className="text-gray-600">고객 만족도</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900 mb-2">
                                    100+
                                </div>
                                <div className="text-gray-600">작성 완료</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <h3 className="text-xl font-bold mb-6 text-[#00A9FF]">주요 기업 선정률</h3>
                        <div className="space-y-6">
                            {companyStats.map((company, index) => (
                                <div key={company.name} className="flex items-center gap-4 mb-2">
                                    <img src={company.logo} alt={company.name} className="h-6 w-24 object-contain" />
                                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-[#00A9FF] h-2 rounded-full transition-all duration-1000"
                                            style={{ width: `${company.percentage}%` }}
                                        />
                                    </div>
                                    <span className="text-gray-600 font-medium">{company.percentage}%</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 