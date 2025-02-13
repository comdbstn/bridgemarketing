import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer className="w-full bg-gray-50 py-12 border-t">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                        {/* Company Info */}
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                브릿지마케팅
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-purple-500 flex-shrink-0" />
                                    <span className="text-gray-600 hover:text-purple-600 transition-colors duration-200">서울특별시 관악구 신림로19길 46-3</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-purple-500 flex-shrink-0" />
                                    <span className="text-gray-600 hover:text-purple-600 transition-colors duration-200">사업자등록번호: 405-06-65006</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-purple-500 flex-shrink-0" />
                                    <a 
                                        href="mailto:director@bridgemarketing.xyz" 
                                        className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                                    >
                                        director@bridgemarketing.xyz
                                    </a>
                                </div>
                            </div>
                        </div>

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

                        {/* Copyright */}
                        <div className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-200">
                            © {new Date().getFullYear()} 브릿지마케팅. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
} 