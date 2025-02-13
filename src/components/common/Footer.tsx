import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Company Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent font-aggro">
                                브릿지마케팅
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                    <span className="font-tway">서울특별시 관악구 신림로19길 46-3</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                    <span className="font-tway">사업자등록번호: 405-06-65006</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                    <a 
                                        href="mailto:director@bridgemarketing.xyz" 
                                        className="hover:text-purple-400 transition-colors duration-200 font-tway"
                                    >
                                        director@bridgemarketing.xyz
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Services */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="space-y-6"
                        >
                            <h3 className="text-xl font-bold text-white mb-4 font-aggro">서비스</h3>
                            <ul className="space-y-3 font-tway">
                                <li>
                                    <a href="/business-plan" className="hover:text-purple-400 transition-colors duration-200">
                                        사업계획서 첨삭
                                    </a>
                                </li>
                                <li>
                                    <a href="/boltlab" className="hover:text-purple-400 transition-colors duration-200">
                                        개발 외주
                                    </a>
                                </li>
                                <li>
                                    <a href="/everytime" className="hover:text-purple-400 transition-colors duration-200">
                                        에브리타임
                                    </a>
                                </li>
                                <li>
                                    <a href="/blind" className="hover:text-purple-400 transition-colors duration-200">
                                        블라인드
                                    </a>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Contact */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6"
                        >
                            <h3 className="text-xl font-bold text-white mb-4 font-aggro">문의하기</h3>
                            <div className="space-y-4 font-tway">
                                <p>
                                    궁금하신 점이 있으시다면 언제든 문의해주세요.
                                </p>
                                <a
                                    href="http://pf.kakao.com/_CYGdn/chat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
                                >
                                    카카오톡 문의하기
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Copyright */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-400 font-tway"
                    >
                        <p>© {new Date().getFullYear()} 브릿지마케팅. All rights reserved.</p>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
} 