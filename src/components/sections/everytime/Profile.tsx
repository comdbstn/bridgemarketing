import { motion } from "framer-motion";
import { Trophy, Award, Briefcase } from "lucide-react";

const achievements = [
    {
        icon: Trophy,
        title: "대학생 마케팅 전문",
        items: [
            "450만+ 대학생 사용자",
            "200+ 대학교 커뮤니티",
            "99% 광고 만족도",
            "자연스러운 바이럴 마케팅"
        ]
    },
    {
        icon: Award,
        title: "다양한 광고 경험",
        items: [
            "자유게시판 마케팅",
            "홍보게시판 마케팅",
            "댓글 마케팅",
            "실시간 모니터링"
        ]
    },
    {
        icon: Briefcase,
        title: "전문 마케팅 인력",
        items: [
            "대학생 마케터 100명+",
            "컨텐츠 기획자 10명+",
            "실시간 모니터링 팀",
            "전문 CS 매니저"
        ]
    }
];

export function Profile() {
    return (
        <section className="py-20 bg-gradient-to-br from-white to-[#FF4B4B]/5">
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
                    <p className="text-xl text-[#FF4B4B] mb-8 font-tway">
                        450만 대학생이 사용하는 에브리타임에서 자연스러운 바이럴 마케팅을 진행합니다. 대학생 타겟 마케팅의 새로운 기준을 제시하며, 높은 광고 만족도를 자랑합니다.
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
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF4B4B] to-[#FF7070] opacity-50 group-hover:opacity-100 transition-all duration-300 rounded-2xl blur-[2px] group-hover:blur-[3px]" />
                            <div className="relative bg-white rounded-2xl p-8 h-full">
                                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-[#FF4B4B] to-[#FF7070] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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