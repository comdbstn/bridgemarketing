import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center">
                        <img src="/logo/bridgemlogo.png" alt="Bridge Marketing" className="h-8" />
                    </Link>
                    <div className="hidden md:flex space-x-8">
                        <Link to="/service" className="text-gray-600 hover:text-gray-900">서비스</Link>
                        <Link to="/portfolio" className="text-gray-600 hover:text-gray-900">포트폴리오</Link>
                        <Link to="/insights" className="text-gray-600 hover:text-gray-900">인사이트</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
} 