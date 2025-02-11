import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full bg-gray-900 py-12 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                        {/* 회사 정보 */}
                        <div className="space-y-2">
                            <div className="mb-4">
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold text-white mb-2">
                                        bridgemarketing
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-3 text-gray-400">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0" />
                                    <span>서울시 성동구 뚝섬로 13길 38 (성수동 2가)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-purple-400 flex-shrink-0" />
                                    <span>사업자등록번호: 405-06-65006</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                                    <a 
                                        href="mailto:director@bridgemarketing.xyz" 
                                        className="hover:text-purple-400 transition-colors duration-200"
                                    >
                                        director@bridgemarketing.xyz
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 링크 섹션 */}
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-sm font-semibold text-purple-400 uppercase mb-4">서비스</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="/everytime" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                                            에브리타임
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/blind" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                                            블라인드
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/tiktok" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                                            틱톡
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-purple-400 uppercase mb-4">회사</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="/portfolio" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                                            포트폴리오
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/insight" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                                            인사이트
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <hr className="my-8 border-gray-800" />

                    <div className="text-center text-gray-500">
                        © {new Date().getFullYear()} Bridge Marketing™. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
} 