import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[100vh] w-full flex items-center bg-gradient-to-br from-[#626ae2] via-[#7884eb] to-[#95c5fa] overflow-hidden">
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
                            className="font-['Changa'] text-[28px] sm:text-[50px] font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-[#c6e0fc] to-[#FFFFFF] select-none"
                        >
                            BRIDGE MARKETING
                        </motion.p>
                        <div className="flex items-center justify-center gap-12">
                            <motion.img
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                src="/logo/business-plan.png"
                                alt="사업계획서 첨삭 서비스 로고"
                                className="w-28 h-28 object-contain rounded-2xl bg-white p-2"
                            />
                            <motion.h1
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="font-['Changa'] text-[40px] sm:text-[100px] font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-[#c6e0fc] via-[#FFFFFF] to-[#c6e0fc] select-none leading-none"
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
                                정부지원사업 전문 컨설팅
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-lg sm:text-xl text-white/90 px-4 font-tway"
                            >
                                예비창업자, 초기예비창업자, 초기창업자 관련 정부지원사업 약 1,600종 커버 가능합니다.
                                <br />
                                사업계획서 뿐만 아니라, 제안서, IR, 보고서 등의 모든 기획 문서 제공 가능합니다.
                                <br />
                                한 번만 사업계획서 제대로 작성하시면, 모든 지원사업 난이도가 이전보다 훨씬 쉬워집니다.
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-8 mt-12 pb-8 sm:pb-0">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="p-4 sm:p-6 mx-4 sm:mx-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 group"
                            >
                                <h3 className="text-lg sm:text-xl font-bold text-white/90 mb-2">예비창업가</h3>
                                <p className="text-sm text-white/70">정부지원사업 지원을 준비하시는 분</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="p-4 sm:p-6 mx-4 sm:mx-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 group"
                            >
                                <h3 className="text-lg sm:text-xl font-bold text-white/90 mb-2">사업가</h3>
                                <p className="text-sm text-white/70">용역 수주를 위한 제안서가 필요하신 분</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                className="p-4 sm:p-6 mx-4 sm:mx-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 group"
                            >
                                <h3 className="text-lg sm:text-xl font-bold text-white/90 mb-2">스타트업</h3>
                                <p className="text-sm text-white/70">투자 제안서가 필요하신 분</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="p-4 sm:p-6 mx-4 sm:mx-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 group"
                            >
                                <h3 className="text-lg sm:text-xl font-bold text-white/90 mb-2">참가자</h3>
                                <p className="text-sm text-white/70">공모전·경진대회 발표자료가 필요하신 분</p>
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
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-white/90 text-[#626ae2] rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
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