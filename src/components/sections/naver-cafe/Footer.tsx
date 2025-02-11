import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#FF812D] text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-bold mb-4 font-aggro">브릿지마케팅</h3>
                        <p className="text-white/80 font-tway">
                            대한민국 최고의 네이버 카페 마케팅 전문 기업입니다.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h3 className="text-xl font-bold mb-4 font-aggro">연락처</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center text-white/80 font-tway">
                                <Phone className="w-5 h-5 mr-2" />
                                010-1234-5678
                            </li>
                            <li className="flex items-center text-white/80 font-tway">
                                <Mail className="w-5 h-5 mr-2" />
                                contact@bridgemarketing.co.kr
                            </li>
                            <li className="flex items-center text-white/80 font-tway">
                                <MapPin className="w-5 h-5 mr-2" />
                                서울특별시 강남구 테헤란로 123
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-xl font-bold mb-4 font-aggro">서비스</h3>
                        <ul className="space-y-2 text-white/80 font-tway">
                            <li>네이버 카페 마케팅</li>
                            <li>네이버 플레이스 마케팅</li>
                            <li>네이버 블로그 마케팅</li>
                            <li>네이버 키워드 광고</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h3 className="text-xl font-bold mb-4 font-aggro">고객센터</h3>
                        <ul className="space-y-2 text-white/80 font-tway">
                            <li>평일 09:00 - 18:00</li>
                            <li>점심시간 12:00 - 13:00</li>
                            <li>주말 및 공휴일 휴무</li>
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 pt-8 border-t border-white/20 text-center text-white/60 font-tway"
                >
                    <p>© 2024 브릿지마케팅. All rights reserved.</p>
                </motion.div>
            </div>
        </footer>
    );
} 