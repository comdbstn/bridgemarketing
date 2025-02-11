import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer: React.FC = () => {
    return (
        <footer className='w-full bg-gradient-to-br from-[#00F2EA]/5 to-white py-12 border-t'>
            <div className='container mx-auto px-4'>
                <div className='max-w-4xl mx-auto'>
                    <div className='flex flex-col md:flex-row justify-between items-start gap-8'>
                        {/* Company Info */}
                        <div className='space-y-2'>
                            <h3 className='text-xl font-bold mb-4 bg-gradient-to-r from-[#00F2EA] to-[#FF0050] bg-clip-text text-transparent'>
                                Bridge Marketing
                            </h3>
                            <div className='space-y-3 text-gray-600'>
                                <div className='flex items-center gap-2'>
                                    <MapPin className='w-4 h-4 text-[#00F2EA] flex-shrink-0' />
                                    <span>서울시 성동구 뚝섬로 13길 38 (성수동 2가)</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Phone className='w-4 h-4 text-[#00F2EA] flex-shrink-0' />
                                    <span>사업자등록번호: 405-06-65006</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Mail className='w-4 h-4 text-[#00F2EA] flex-shrink-0' />
                                    <a
                                        href='mailto:director@bridgemarketing.xyz'
                                        className='hover:text-[#FF0050] transition-colors duration-200'
                                    >
                                        director@bridgemarketing.xyz
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Links */}
                        <div className='grid grid-cols-2 gap-8 md:grid-cols-3'>
                            <div>
                                <h4 className='text-sm font-semibold text-[#00F2EA] uppercase mb-4'>Company</h4>
                                <ul className='space-y-2'>
                                    <li>
                                        <a
                                            href='#'
                                            className='text-gray-600 hover:text-[#FF0050] transition-colors duration-200'
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href='#'
                                            className='text-gray-600 hover:text-[#FF0050] transition-colors duration-200'
                                        >
                                            Careers
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href='#'
                                            className='text-gray-600 hover:text-[#FF0050] transition-colors duration-200'
                                        >
                                            Blog
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className='text-sm font-semibold text-[#00F2EA] uppercase mb-4'>Support</h4>
                                <ul className='space-y-2'>
                                    <li>
                                        <a
                                            href='#'
                                            className='text-gray-600 hover:text-[#FF0050] transition-colors duration-200'
                                        >
                                            Help Center
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href='#'
                                            className='text-gray-600 hover:text-[#FF0050] transition-colors duration-200'
                                        >
                                            Contact
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href='#'
                                            className='text-gray-600 hover:text-[#FF0050] transition-colors duration-200'
                                        >
                                            FAQ
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className='text-sm font-semibold text-[#00F2EA] uppercase mb-4'>Legal</h4>
                                <ul className='space-y-2'>
                                    <li>
                                        <a
                                            href='#'
                                            className='text-gray-600 hover:text-[#FF0050] transition-colors duration-200'
                                        >
                                            Privacy
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href='#'
                                            className='text-gray-600 hover:text-[#FF0050] transition-colors duration-200'
                                        >
                                            Terms
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <hr className='my-8 border-gray-200' />

                    <div className='text-center text-gray-600'>
                        © {new Date().getFullYear()} Bridge Marketing™. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
