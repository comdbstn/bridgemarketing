import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, Building2, Stethoscope, ShoppingBag, Briefcase, Gamepad2 } from "lucide-react";

const industries = [
    {
        icon: GraduationCap,
        title: "교육",
        items: ["학원", "교육기관", "온라인 강의", "교재/교구"],
    },
    {
        icon: Building2,
        title: "부동산",
        items: ["아파트", "상가", "분양", "임대"],
    },
    {
        icon: Stethoscope,
        title: "의료/건강",
        items: ["병원", "의료기기", "건강식품", "운동"],
    },
    {
        icon: ShoppingBag,
        title: "쇼핑",
        items: ["패션", "뷰티", "육아용품", "생활용품"],
    },
    {
        icon: Briefcase,
        title: "비즈니스",
        items: ["창업", "프랜차이즈", "자영업", "투자"],
    },
    {
        icon: Gamepad2,
        title: "문화/여가",
        items: ["여행", "취미", "공연", "전시"],
    },
];

export function Industries() {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-green-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-green-600 font-semibold text-lg font-tway mb-4 block">
                        INDUSTRIES
                    </span>
                    <h2 className="text-4xl font-bold mb-4 font-aggro">
                        다양한 산업군의 마케팅
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto font-tway">
                        각 산업별 특성을 고려한 맞춤형 마케팅 전략을 제공합니다.
                        <br />
                        업종별 전문가가 최적의 마케팅 솔루션을 제시합니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="p-6 hover:shadow-lg transition-all duration-300">
                                <industry.icon className="w-12 h-12 text-green-600 mb-4" />
                                <h3 className="text-xl font-bold mb-4 font-aggro">{industry.title}</h3>
                                <ul className="space-y-2">
                                    {industry.items.map((item, i) => (
                                        <li
                                            key={i}
                                            className="text-gray-600 font-tway flex items-center"
                                        >
                                            <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 
