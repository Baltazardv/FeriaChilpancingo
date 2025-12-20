import React, { useState, useEffect } from 'react';
import { Home, BookOpen, Image, Calendar, MapPin, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import Dock from './Dock';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [isHero, setIsHero] = useState(true);
    const [isTimeline, setIsTimeline] = useState(false);
    const [isMenuExpanded, setIsMenuExpanded] = useState(false); // New state for mobile menu
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrolled(scrollY > 50);

            // Check if we are in the Hero section
            setIsHero(scrollY < window.innerHeight * 0.8);

            // Check if we are in the Timeline section
            const historySection = document.getElementById('history');
            if (historySection) {
                const rect = historySection.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const isVisible = rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2;
                setIsTimeline(isVisible);
            }
        };
        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = async (e, href) => {
        e.preventDefault();

        // Close mobile menu if open
        setIsMenuExpanded(false);

        const targetId = href.replace('#', '');

        const scrollToElement = (elementId) => {
            const element = document.getElementById(elementId);
            if (element) {
                if (elementId === 'hero') {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                    return true;
                }

                const headerOffset = 85;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
                return true;
            }
            return false;
        };

        if (location.pathname === '/') {
            if (!scrollToElement(targetId)) {
                setTimeout(() => scrollToElement(targetId), 100);
            }
        } else {
            await navigate('/');
            setTimeout(() => {
                if (!scrollToElement(targetId)) {
                    setTimeout(() => scrollToElement(targetId), 300);
                }
            }, 100);
        }
    };

    const links = [
        { name: 'Inicio', href: '#hero', icon: <Home size={isTimeline ? 16 : 22} className="text-white" /> },
        { name: 'Carteles', href: '#posters', icon: <Image size={isTimeline ? 16 : 22} className="text-white" /> },
        { name: 'Historia', href: '#history', icon: <BookOpen size={isTimeline ? 16 : 22} className="text-white" /> },
        { name: 'Cartelera', href: '#program', icon: <Calendar size={isTimeline ? 16 : 22} className="text-white" /> },
        { name: 'Mapa', href: '#location', icon: <MapPin size={isTimeline ? 16 : 22} className="text-white" /> },
    ];

    const dockItems = links.map(link => ({
        icon: link.icon,
        label: link.name,
        onClick: (e) => handleNavClick(e, link.href)
    }));

    return (
        <>
            <nav className={`fixed w-full z-40 transition-all duration-300 hidden md:block ${scrolled ? 'bg-feria-blue/90 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'}`}>
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div
                        className="text-white font-serif font-bold text-xl cursor-pointer"
                        onClick={(e) => handleNavClick(e, '#hero')}
                    >
                        Feria Chilpancingo
                    </div>

                    {/* Desktop Menu */}
                    <div className="flex justify-center space-x-8">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-white font-medium hover:text-feria-accent transition-colors uppercase tracking-wider text-sm cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <div className="md:hidden mobile-nav-root">
                {/* Hero Section Toggle Button */}
                <AnimatePresence>
                    {isHero && !isMenuExpanded && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            onClick={() => setIsMenuExpanded(true)}
                            className="fixed top-4 right-4 z-50 p-3 bg-feria-blue/80 backdrop-blur-md border border-amber-500/30 rounded-full shadow-lg text-amber-400"
                        >
                            <Menu size={24} />
                        </motion.button>
                    )}
                </AnimatePresence>

                {/* Mobile Dock */}
                {/* Render Dock if: (It's NOT hero) OR (It IS hero AND expanded) */}
                {(!isHero || (isHero && isMenuExpanded)) && (
                    <motion.div
                        initial={isHero ? { opacity: 0, y: -20 } : { opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className={isHero ? "fixed top-0 left-0 w-full z-50 flex flex-col items-center pt-4" : ""}
                    >
                        {/* Close button inside Dock area for Hero mode */}
                        {isHero && isMenuExpanded && (
                            <button
                                onClick={() => setIsMenuExpanded(false)}
                                className="mb-4 p-2 bg-black/40 rounded-full text-white/80 hover:text-white"
                            >
                                <X size={20} />
                            </button>
                        )}

                        <Dock
                            items={dockItems}
                            panelHeight={68}
                            baseItemSize={50}
                            magnification={70}
                            distance={200}
                            outerClassName={isHero ? "dock-top" : ""} // Position at top if in Hero
                            className="transition-all duration-500 ease-in-out"
                        />
                    </motion.div>
                )}
            </div>
        </>
    );
}

