import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-[#0f0f0f]/90 backdrop-blur-md' : 'bg-transparent'
        }`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center space-x-1.5">
                        <span className="text-xl font-bold text-white">
                            BRIDGE
                        </span>
                        <span className="text-xl font-bold text-[#a855f7]">
                            MARKETING
                        </span>
                    </Link>
                    <div className="hidden md:flex items-center space-x-10">
                        <Link 
                            to="/service" 
                            className="text-[14px] font-medium text-white/90 hover:text-white transition-colors duration-200"
                        >
                            서비스
                        </Link>
                        <Link 
                            to="/portfolio" 
                            className="text-[14px] font-medium text-white/90 hover:text-white transition-colors duration-200"
                        >
                            포트폴리오
                        </Link>
                        <Link 
                            to="/insights" 
                            className="text-[14px] font-medium text-white/90 hover:text-white transition-colors duration-200"
                        >
                            인사이트
                        </Link>
                        <a 
                            href="https://pf.kakao.com/_xgxkExbxj" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center justify-center px-4 py-1.5 text-[14px] font-medium rounded text-white bg-[#a855f7] hover:bg-[#9333ea] transition-colors duration-200"
                        >
                            문의하기
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
} 