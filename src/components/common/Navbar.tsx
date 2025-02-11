import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            Bridge
                        </span>
                        <span className="text-2xl font-bold text-gray-900">
                            Marketing
                        </span>
                    </Link>
                    <div className="hidden md:flex items-center space-x-12">
                        <Link 
                            to="/service" 
                            className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                        >
                            서비스
                        </Link>
                        <Link 
                            to="/portfolio" 
                            className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                        >
                            포트폴리오
                        </Link>
                        <Link 
                            to="/insights" 
                            className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                        >
                            인사이트
                        </Link>
                        <a 
                            href="https://pf.kakao.com/_xgxkExbxj" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                        >
                            상담하기
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
} 