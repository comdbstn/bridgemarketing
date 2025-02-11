import { motion } from "framer-motion";
import { useCountAnimation } from "@/hooks/use-count-animation";
import { MessageCircle } from "lucide-react";

export function Hero() {
    const { count: projectCount, ref: projectRef } = useCountAnimation(100);
    const { count: satisfactionRate, ref: satisfactionRef } = useCountAnimation(98);
    const { count: recontractRate, ref: recontractRef } = useCountAnimation(95);

    return (
        <section className="relative min-h-[100vh] w-full flex items-center bg-gradient-to-br from-[#f03e3e] via-[#ff6b6b] to-[#ff8787] overflow-hidden">
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
                    <div className="space-y-12 mb-12">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="font-['Changa'] text-[28px] sm:text-[50px] font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-[#ffe3e3] to-[#FFFFFF] select-none"
                        >
                            BRIDGE MARKETING
                        </motion.p>
                        <div className="flex items-center justify-center gap-12">
                            <motion.img
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                src="/logo/everytime.png"
                                alt="에브리타임 로고"
                                className="w-28 h-28 object-contain rounded-2xl bg-white p-2"
                            />
                            <motion.h1
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="font-['Changa'] text-[40px] sm:text-[100px] font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-[#ffe3e3] via-[#FFFFFF] to-[#ffe3e3] select-none leading-none"
                            >
                                EVERYTIME
                            </motion.h1>
                        </div>
                        <div className="space-y-8">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-3xl sm:text-5xl font-bold text-white font-aggro"
                            >
                                대학생 타겟 마케팅의 새로운 기준
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-lg sm:text-xl text-white/90 px-4 font-tway"
                            >
                                대학생 커뮤니티 1위 에브리타임에서
                                <br />
                                효과적인 마케팅을 시작하세요
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white"
                            >
                                <h3 className="text-2xl sm:text-4xl font-bold mb-2" ref={projectRef}>{projectCount}만+</h3>
                                <p className="text-sm sm:text-base text-white/80">일간 활성 사용자</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white"
                            >
                                <h3 className="text-2xl sm:text-4xl font-bold mb-2" ref={satisfactionRef}>{satisfactionRate}%</h3>
                                <p className="text-sm sm:text-base text-white/80">광고 도달률</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white"
                            >
                                <h3 className="text-2xl sm:text-4xl font-bold mb-2" ref={recontractRef}>{recontractRate}%</h3>
                                <p className="text-sm sm:text-base text-white/80">재계약률</p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="mt-12"
                        >
                            <a
                                href="http://pf.kakao.com/_CYGdn/chat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-white/90 text-[#f03e3e] rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
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
