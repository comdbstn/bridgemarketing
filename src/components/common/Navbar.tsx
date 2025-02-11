import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    <Link to="/" className="flex items-center space-x-1.5">
                        <span className="text-2xl font-extrabold bg-gradient-to-r from-[#2563eb] to-[#4f46e5] bg-clip-text text-transparent tracking-tight">
                            Bridge
                        </span>
                        <span className="text-2xl font-bold text-[#1e293b] tracking-tight">
                            Marketing
                        </span>
                    </Link>
                    <div className="hidden md:flex items-center space-x-10">
                        <Link 
                            to="/service" 
                            className="text-[15px] font-medium text-[#1e293b] hover:text-[#2563eb] transition-colors duration-200"
                        >
                            서비스
                        </Link>
                        <Link 
                            to="/portfolio" 
                            className="text-[15px] font-medium text-[#1e293b] hover:text-[#2563eb] transition-colors duration-200"
                        >
                            포트폴리오
                        </Link>
                        <Link 
                            to="/insights" 
                            className="text-[15px] font-medium text-[#1e293b] hover:text-[#2563eb] transition-colors duration-200"
                        >
                            인사이트
                        </Link>
                        <a 
                            href="https://pf.kakao.com/_xgxkExbxj" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center justify-center px-5 py-2 text-[15px] font-medium rounded-lg text-white bg-[#2563eb] hover:bg-[#1d4ed8] transition-colors duration-200 shadow-sm hover:shadow-md"
                        >
                            상담하기
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
} 