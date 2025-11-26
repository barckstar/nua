import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, language, setLanguage } = useLanguage();
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { path: '/', label: 'nav.home' },
        { path: '/about', label: 'nav.about' },
        { path: '/support', label: 'nav.support' },
        { path: '/blog', label: 'nav.blog' },
        { path: '/gallery', label: 'nav.gallery' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed w-full z-50 bg-nua-cream/90 backdrop-blur-md border-b border-nua-green-dark/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2 z-50">
                        <img src="/Logo-Sin-Fondo.png" alt="Logo" width={100} height={100} />
                    </Link>

                    {/* Controls */}
                    <div className="flex items-center gap-4 z-50">
                        <button
                            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                            className="p-2 rounded-full hover:bg-nua-green-light/20 transition-colors text-nua-green-dark flex items-center gap-1"
                        >
                            <Globe size={20} />
                            <span className="text-sm font-medium">{language.toUpperCase()}</span>
                        </button>

                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-full hover:bg-nua-green-light/20 transition-colors text-nua-green-dark"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Drawer Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMenu}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 h-screen w-full"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-screen w-2/3 md:w-1/3 bg-nua-green-dark z-50 shadow-2xl flex flex-col pt-8 px-8 sm:px-12"
                        >
                            {/* Drawer Header */}
                            <div className="flex justify-between items-center w-full mb-12">
                                <button
                                    onClick={toggleMenu}
                                    className="text-nua-cream hover:text-nua-green-light transition-colors p-2"
                                    aria-label="Close Menu"
                                >
                                    <X size={32} />
                                </button>
                            </div>
                            <div className="flex flex-col gap-6 items-end w-full">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={toggleMenu}
                                        className={clsx(
                                            "text-2xl md:text-4xl font-serif font-medium transition-all duration-300 text-right px-4 py-2 rounded-lg w-full",
                                            isActive(link.path)
                                                ? "text-nua-green-light bg-white/10"
                                                : "text-nua-cream hover:text-nua-green-light hover:bg-white/5"
                                        )}
                                    >
                                        {t(link.label)}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
