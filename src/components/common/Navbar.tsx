import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link as ScrollLink } from "react-scroll";

const navItems = [
    { name: "서비스", to: "services" },
    { name: "레퍼런스", to: "references" },
    { name: "프로세스", to: "process" },
    { name: "문의하기", to: "contact" }
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
                    <Link to="/" className="text-2xl font-bold text-white">
                        브릿지마케팅
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <ScrollLink
                                key={item.name}
                                to={item.to}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                className="text-gray-300 hover:text-white cursor-pointer transition-colors duration-200"
                            >
                                {item.name}
                            </ScrollLink>
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
                                    <ScrollLink
                                        key={item.name}
                                        to={item.to}
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                        className="text-gray-300 hover:text-white cursor-pointer transition-colors duration-200"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </ScrollLink>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
} 