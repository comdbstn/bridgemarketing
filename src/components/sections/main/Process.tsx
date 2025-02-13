import { motion } from "framer-motion";
import { ArrowRight, FileSearch, FileEdit, FileCheck, Presentation } from "lucide-react";

const processes = [
    {
        number: 1,
        icon: FileSearch,
        title: "상담 및 분석",
        description: "현재 상황과 목표를 파악하고 최적의 마케팅 전략을 수립합니다",
        gradient: "from-purple-400 to-pink-400"
    },
    {
        number: 2,
        icon: FileEdit,
        title: "전문가 작업 진행",
        description: "각 분야 전문가들이 1차 작업물을 신속하고 심도 있게 작성하고 전달 드립니다",
        gradient: "from-blue-400 to-indigo-400"
    },
    {
        number: 3,
        icon: FileCheck,
        title: "피드백 반영",
        description: "대표님께서 1차 초안에 대한 피드백을 작성하여 전달해주시면 반영합니다",
        gradient: "from-purple-400 to-indigo-400"
    },
    {
        number: 4,
        icon: Presentation,
        title: "최종 완성",
        description: "전문가 작업과 피드백을 통해 최종 결과물을 완성합니다",
        gradient: "from-indigo-400 to-blue-400"
    },
];

export function Process() {
    return (
        <section className='py-32 relative overflow-hidden bg-gradient-to-b from-black to-purple-900/20'>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,80,220,0.15),transparent_70%)]" />
            </motion.div>
            
            <div className='container mx-auto px-4 relative z-10'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-block px-8 py-3 bg-purple-500/10 rounded-full text-purple-300 text-lg border-2 border-purple-500/20 backdrop-blur-sm font-tway mb-8"
                        >
                            Our Process
                        </motion.span>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-5xl sm:text-6xl font-bold mb-8 font-aggro">
                                <span className="bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
                                    체계적인 프로세스로
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                                    성공을 만듭니다
                                </span>
                            </h2>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-xl text-gray-400 max-w-3xl mx-auto font-tway"
                        >
                            평균 5일 이내 초안 작성, 1주일 이내 최종본 완성을 보장합니다
                        </motion.p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
                        {processes.map((process, index) => (
                            <motion.div
                                key={process.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className="absolute -inset-px bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                <div className="relative bg-purple-500/5 backdrop-blur-xl border-2 border-purple-500/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-500">
                                    <div className="relative mb-8">
                                        <div className={`absolute -top-4 left-6 w-8 h-8 rounded-full bg-gradient-to-r ${process.gradient} flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            {process.number}
                                        </div>
                                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${process.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                                            <process.icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    <h3 className='text-2xl font-bold text-white mb-4 font-aggro'>{process.title}</h3>
                                    <p className='text-gray-400 font-tway text-base'>{process.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="flex justify-center mt-16"
                    >
                        <a
                            href="http://pf.kakao.com/_CYGdn/chat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl font-tway text-lg overflow-hidden shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
                        >
                            <span className="relative z-10 flex items-center">
                                상담 시작하기
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        </section>
    );
} 