import { motion } from "framer-motion";
import { Trophy, Award, Briefcase } from "lucide-react";

const achievements = [
    {
        icon: Trophy,
        title: "창업 경진대회 15회 수상",
        items: [
            "UN주최 헐트프라이즈",
            "정주영 창업경진대회",
            "Citypreneurs Ulsan 공동주최",
            "U300",
            "환경창업대전"
        ]
    },
    {
        icon: Award,
        title: "정부지원사업 선정 경험",
        items: [
            "예비창업패키지",
            "신사업창업사관학교",
            "청년그린창업스프링캠프",
            "수출/AI/데이터 바우처"
        ]
    },
    {
        icon: Briefcase,
        title: "전문 컨설팅 경력",
        items: [
            "스타트업 및 전략·오퍼레이팅 컨설팅 펌 전략 기획자 2년+",
            "IR 및 회사소개서 작성 전문",
            "B2B·G 영업·용역 수주 제안서 작성 전문",
            "정부지원사업 수혜 경험 다수"
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
                        정부지원 사업계획서 컨설팅·회사 소개서·투자 라운딩용 IR·각종 아이디어 공모전 및 창업경진대회 발표 자료 작성업을 2년 간 진행해왔습니다. 더불어 ESG 분야 창업을 1년 간 경험하며, 정부지원사업을 창업가 입장에서 생각할 수 있는 작업자임을 말씀드립니다.
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
                            className="relative group"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#626ae2] to-[#7884eb] opacity-50 group-hover:opacity-100 transition-all duration-300 rounded-2xl blur-[2px] group-hover:blur-[3px]" />
                            <div className="relative bg-white rounded-2xl p-8">
                                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-[#626ae2] to-[#7884eb] flex items-center justify-center mb-6">
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