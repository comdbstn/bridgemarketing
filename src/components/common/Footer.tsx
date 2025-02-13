import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#0f0f0f] text-white/80 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Bridge Marketing</h3>
                        <p className="text-sm">
                            디지털 마케팅의 새로운 기준을 제시합니다.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <div className="space-y-2 text-sm">
                            <p>Email: contact@bridgemarketing.co.kr</p>
                            <p>Tel: 010-1234-5678</p>
                            <p>서울특별시 강남구</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-white transition-colors duration-200">
                                Instagram
                            </a>
                            <a href="#" className="hover:text-white transition-colors duration-200">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm">
                    <p>&copy; 2024 Bridge Marketing. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
} 