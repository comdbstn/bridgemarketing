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
            isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    <Link to="/" className="flex items-center space-x-1.5">
                        <span className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">
                            Bridge
                        </span>
                        <span className={`text-2xl font-bold tracking-tight ${
                            isScrolled ? 'text-gray-900' : 'text-white'
                        }`}>
                            Marketing
                        </span>
                    </Link>
                    <div className="hidden md:flex items-center space-x-10">
                        <Link 
                            to="/service" 
                            className={`text-[15px] font-medium transition-colors duration-200 ${
                                isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white/90 hover:text-white'
                            }`}
                        >
                            서비스
                        </Link>
                        <Link 
                            to="/portfolio" 
                            className={`text-[15px] font-medium transition-colors duration-200 ${
                                isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white/90 hover:text-white'
                            }`}
                        >
                            포트폴리오
                        </Link>
                        <Link 
                            to="/insights" 
                            className={`text-[15px] font-medium transition-colors duration-200 ${
                                isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white/90 hover:text-white'
                            }`}
                        >
                            인사이트
                        </Link>
                        <a 
                            href="https://pf.kakao.com/_xgxkExbxj" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center justify-center px-5 py-2 text-[15px] font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200 shadow-sm hover:shadow-md"
                        >
                            상담하기
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
} 