import { motion } from "framer-motion";
import { Trophy, Award, Briefcase } from "lucide-react";

const achievements = [
    {
        icon: Trophy,
        title: "AI 기반 개발 경험",
        items: [
            "AgentForce AI 개발 플랫폼",
            "53% 개발 효율 증가",
            "3배 빠른 개발 속도",
            "3배 저렴한 비용"
        ]
    },
    {
        icon: Award,
        title: "다양한 프로젝트 경험",
        items: [
            "웹/앱 개발 100+ 프로젝트",
            "AI/ML 솔루션 개발",
            "블록체인/NFT 플랫폼",
            "SaaS/커머스 플랫폼"
        ]
    },
    {
        icon: Briefcase,
        title: "전문 개발 인력",
        items: [
            "풀스택 개발자 10명+",
            "AI/ML 엔지니어 5명+",
            "UI/UX 디자이너 3명+",
            "프로젝트 매니저 3명+"
        ]
    }
];

export function Profile() {
    return (
        <section className="py-20 bg-gradient-to-br from-white to-[#626ae2]/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-6 font-aggro">
                        검증된 전문가가 도와드립니다
                    </h2>
                    <p className="text-xl text-[#626ae2] mb-8 font-tway">
                        AgentForce AI 개발 플랫폼을 통해 최고의 프로덕트를, 최고의 가격에 제공하는 IT 개발 에이전시입니다. 웹/앱 개발, AI/ML 솔루션, 블록체인/NFT 플랫폼 등 다양한 프로젝트를 성공적으로 수행해왔습니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group h-full"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#626ae2] to-[#7884eb] opacity-50 group-hover:opacity-100 transition-all duration-300 rounded-2xl blur-[2px] group-hover:blur-[3px]" />
                            <div className="relative bg-white rounded-2xl p-8 h-full">
                                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-[#626ae2] to-[#7884eb] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <achievement.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-900 font-aggro">{achievement.title}</h3>
                                <ul className="space-y-3">
                                    {achievement.items.map((item, i) => (
                                        <li key={i} className="text-gray-600 font-tway text-base">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 