import React, { useState, useEffect } from 'react';
import { Home, BookOpen, Image, Calendar, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import Dock from './Dock';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [isHero, setIsHero] = useState(true);
    const [isTimeline, setIsTimeline] = useState(false);
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
                {/* Mobile Dock - Only Visible when NOT in Hero */}
                <AnimatePresence>
                    {!isHero && (
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 100 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="fixed bottom-0 left-0 w-full z-50 pointer-events-none"
                        >
                            <div className="pointer-events-auto">
                                <Dock
                                    items={dockItems}
                                    panelHeight={68}
                                    baseItemSize={50}
                                    magnification={70}
                                    distance={200}
                                    outerClassName=""
                                    className="transition-all duration-500 ease-in-out"
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
