import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
    { name: "서비스", to: "/service" },
    { name: "포트폴리오", to: "/portfolio" },
    { name: "인사이트", to: "/insights" },
    { name: "문의하기", to: "http://pf.kakao.com/_CYGdn/chat", external: true }
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <Link 
                        to="/" 
                        className="flex items-center gap-2"
                    >
                        <img 
                            src="/logo/bridgemlogo.png" 
                            alt="브릿지마케팅 로고" 
                            className="h-8 w-8"
                        />
                        <span className="text-2xl font-bold text-white">브릿지마케팅</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            item.external ? (
                                <a
                                    key={item.name}
                                    href={item.to}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    {item.name}
                                </a>
                            ) : (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    {item.name}
                                </Link>
                            )
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden mt-4"
                        >
                            <div className="flex flex-col space-y-4">
                                {navItems.map((item) => (
                                    item.external ? (
                                        <a
                                            key={item.name}
                                            href={item.to}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-300 hover:text-white transition-colors duration-200"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </a>
                                    ) : (
                                        <Link
                                            key={item.name}
                                            to={item.to}
                                            className="text-gray-300 hover:text-white transition-colors duration-200"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
} 