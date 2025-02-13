import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const menuItems = [
    { title: '서비스', path: '/service' },
    { title: '포트폴리오', path: '/portfolio' },
    { title: '인사이트', path: '/insights' },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-[#0f0f0f]/90 backdrop-blur-md shadow-lg shadow-purple-500/5' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center space-x-1.5 group">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300"
                        >
                            BRIDGE
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-xl font-bold text-[#a855f7] group-hover:text-white transition-colors duration-300"
                        >
                            MARKETING
                        </motion.span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-10">
                        {menuItems.map((item, index) => (
                            <motion.div
                                key={item.path}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link 
                                    to={item.path} 
                                    className="relative text-[14px] font-medium text-white/90 hover:text-white transition-colors duration-200 group"
                                >
                                    {item.title}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 group-hover:w-full transition-all duration-300" />
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <a 
                                href="https://pf.kakao.com/_xgxkExbxj" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="relative group inline-flex items-center justify-center px-4 py-1.5 text-[14px] font-medium rounded text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all duration-300"
                            >
                                <span className="relative z-10">문의하기</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-colors duration-200"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-white" />
                        ) : (
                            <Menu className="w-6 h-6 text-white" />
                        )}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-[#0f0f0f]/95 backdrop-blur-lg border-t border-gray-800"
                    >
                        <div className="container mx-auto px-4 py-4">
                            <div className="flex flex-col space-y-4">
                                {menuItems.map((item, index) => (
                                    <motion.div
                                        key={item.path}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <Link
                                            to={item.path}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block text-white/90 hover:text-white transition-colors duration-200 py-2"
                                        >
                                            {item.title}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.3 }}
                                >
                                    <a
                                        href="https://pf.kakao.com/_xgxkExbxj"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded hover:from-purple-500 hover:to-indigo-500 transition-colors duration-200"
                                    >
                                        문의하기
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
} 