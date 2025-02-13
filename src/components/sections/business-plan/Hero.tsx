import { motion } from "framer-motion";
import { useCountAnimation } from "@/hooks/use-count-animation";
import { MessageCircle } from "lucide-react";

export function Hero() {
    const { count: projectCount, ref: projectRef } = useCountAnimation(100);
    const { count: satisfactionRate, ref: satisfactionRef } = useCountAnimation(98);
    const { count: recontractRate, ref: recontractRef } = useCountAnimation(95);

    return (
        <section className="relative min-h-[100vh] w-full flex items-center bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 overflow-hidden">
            {/* Background patterns */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIxMDAlIiB5MT0iMjEuMTgyJSIgeDI9IjUwJSIgeTI9IjEwMCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZGIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRiIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNLTM1Ljg5IDQ4NC4yMzdDLTEwLjI0NyA1MjIuMDg0IDIyNy4xNDIgNTE3LjMwMiAyNjcuMTAzIDUwOS4zMzFjNi42MDktMS4zMjEgMTguNDk1LTMuNjA3IDM1LjY1OC02Ljg1OCAxNDQuMDEtMjcuMjMgMjE3LjI0OC0xMDkuNDIgMzA2Ljk0NS0xMDkuNDIgODkuNjk3IDAgMTc0LjE1MSAxMC43MzMgMzY5LjI4NCA3Mi4yMyAxOTUuMTMyIDYxLjQ5NSAyOTUuMDExIDY5LjIzIDM5OS4wNTUgNTMuMjNDMTQ4Mi4wNDIgNDgxLjE4NSAxNTQ0IDQ1OS4xMTIgMTU0NCA0NTkuMTEyVjBILTYwLjA5MXY0MzkuNDk2YzEuNzMgOC44MzggMTEuNTMgMjUuNDYyIDI0LjIwMSA0NC43NDF6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')] bg-cover bg-center opacity-10 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative pt-20 sm:pt-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <div className="space-y-12">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="font-['Changa'] text-[28px] sm:text-[50px] font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-indigo-200 select-none"
                        >
                            BRIDGE MARKETING
                        </motion.p>
                        <div className="flex items-center justify-center gap-12">
                            <motion.img
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                src="/logo/business-plan.png"
                                alt="사업계획서 로고"
                                className="w-28 h-28 object-contain rounded-2xl bg-white/10 backdrop-blur-sm p-2 border border-white/20"
                            />
                            <motion.h1
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="font-['Changa'] text-[40px] sm:text-[100px] font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-indigo-200 via-purple-200 to-indigo-200 select-none leading-none"
                            >
                                BUSINESS PLAN
                            </motion.h1>
                        </div>
                        <div className="space-y-8">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-3xl sm:text-5xl font-bold text-white font-aggro"
                            >
                                전문가가 만드는 완벽한 사업계획서
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-lg sm:text-xl text-purple-200 px-4 font-tway"
                            >
                                전문가의 노하우와 체계적인 프로세스로
                                <br />
                                맞춤형 사업계획서를 작성해드립니다
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="p-4 sm:p-6 mx-4 sm:mx-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 group"
                            >
                                <h3 className="text-2xl sm:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300 font-aggro">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-200 via-purple-200 to-purple-300/60" ref={projectRef}>
                                        {projectCount}+
                                    </span>
                                </h3>
                                <p className="text-purple-200/80">작성 완료</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="p-4 sm:p-6 mx-4 sm:mx-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 group"
                            >
                                <h3 className="text-2xl sm:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300 font-aggro">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-200 via-purple-200 to-purple-300/60" ref={satisfactionRef}>
                                        {satisfactionRate}%
                                    </span>
                                </h3>
                                <p className="text-purple-200/80">고객 만족도</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                className="p-4 sm:p-6 mx-4 sm:mx-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 group"
                            >
                                <h3 className="text-2xl sm:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300 font-aggro">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-200 via-purple-200 to-purple-300/60" ref={recontractRef}>
                                        {recontractRate}%
                                    </span>
                                </h3>
                                <p className="text-purple-200/80">선정 성공률</p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="mt-12 pb-16 sm:pb-20"
                        >
                            <a
                                href="http://pf.kakao.com/_CYGdn/chat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
                            >
                                <MessageCircle className="w-5 h-5" />
                                지금 바로 시작하세요
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 