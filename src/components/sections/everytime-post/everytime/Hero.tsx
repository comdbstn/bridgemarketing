import { motion } from "framer-motion";
import { useCountAnimation } from "@/hooks/use-count-animation";
import { formatNumber } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

export function Hero() {
    const { count: campusCount, ref: campusRef } = useCountAnimation(397);
    const { count: userPercentage, ref: percentageRef } = useCountAnimation(82);
    const { count: monthlyUsers, ref: monthlyRef } = useCountAnimation(280);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 to-green-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-800 to-green-700 bg-clip-text text-transparent font-aggro">
                            에브리타임 게시글 마케팅
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-tway">
                            대학생들의 필수 앱, 에브리타임에서
                            <br />
                            효과적인 마케팅을 시작하세요
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-12"
                    >
                        <img
                            src="/images/everytime-post/hero.png"
                            alt="에브리타임 마케팅"
                            className="max-w-4xl mx-auto w-full rounded-lg shadow-2xl"
                        />
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="p-6 bg-white/10 backdrop-blur-sm rounded-lg"
                            ref={campusRef}
                        >
                            <h3 className="text-3xl font-bold text-amber-800 mb-2 font-aggro">
                                {formatNumber(campusCount)}개
                            </h3>
                            <p className="text-gray-600 font-tway">전국 캠퍼스</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="p-6 bg-white/10 backdrop-blur-sm rounded-lg"
                            ref={percentageRef}
                        >
                            <h3 className="text-3xl font-bold text-amber-800 mb-2 font-aggro">
                                {formatNumber(userPercentage)}%
                            </h3>
                            <p className="text-gray-600 font-tway">20대 사용자 비율</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="p-6 bg-white/10 backdrop-blur-sm rounded-lg"
                            ref={monthlyRef}
                        >
                            <h3 className="text-3xl font-bold text-amber-800 mb-2 font-aggro">
                                {formatNumber(monthlyUsers)}만+
                            </h3>
                            <p className="text-gray-600 font-tway">월간 활성 사용자</p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex justify-center gap-4"
                    >
                        <a
                            href="http://pf.kakao.com/_CYGdn/chat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-amber-600 to-green-600 text-white font-semibold hover:from-amber-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl font-tway"
                        >
                            <MessageCircle className="w-5 h-5 mr-2" />
                            무료 상담하기
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Decorative elements */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 overflow-hidden"
            >
                <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-amber-200 to-green-200 rounded-full opacity-20 blur-3xl" />
                <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-green-200 to-amber-200 rounded-full opacity-20 blur-3xl" />
            </motion.div>
        </section>
    );
}
