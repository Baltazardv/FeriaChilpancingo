import React, { useState, useEffect } from 'react';
import { Home, BookOpen, Image, Calendar, MapPin, Film, Palette } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';


export default function Navigation({ scrolledBgClass, mobileDockClass }) {
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

        // Check if it's a route navigation (starts with /)
        if (href.startsWith('/')) {
            navigate(href);
            return;
        }

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
        { name: 'Historia', href: '#history', icon: <BookOpen size={isTimeline ? 16 : 22} className="text-white" /> },
        { name: 'Contenido Histórico', href: '#historical-gallery', icon: <Image size={isTimeline ? 16 : 22} className="text-white" /> },
        { name: 'Cine Feria', href: '/videos', icon: <Film size={isTimeline ? 16 : 22} className="text-white" /> },
        { name: 'Programa y Sede', href: '#program', icon: <Calendar size={isTimeline ? 16 : 22} className="text-white" /> },
    ];

    const dockItems = links.map(link => ({
        icon: link.icon,
        label: link.name,
        onClick: (e) => handleNavClick(e, link.href)
    }));

    return (
        <>
            <nav className={`fixed w-full z-40 transition-all duration-300 hidden md:block ${scrolled ? `${scrolledBgClass || 'bg-feria-blue/90'} backdrop-blur-sm shadow-lg py-2` : 'bg-transparent py-4'}`}>
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div
                        className="cursor-pointer"
                        onClick={(e) => handleNavClick(e, '#hero')}
                    >
                        <img
                            src="/LOGOS/feria de chilpo_1.webp"
                            alt="Feria Chilpancingo"
                            className="h-8 w-auto"
                        />
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
            <div className="md:hidden">
                <AnimatePresence>
                    {!isHero && (
                        <motion.nav
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="fixed bottom-0 left-0 w-full bg-[#0B1520]/95 backdrop-blur-xl border-t border-white/10 z-50 safe-area-pb"
                        >
                            <div className="flex justify-around items-center w-full px-2 py-2">
                                {links.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="flex flex-col items-center justify-center gap-1 p-1 text-gray-400 hover:text-amber-500 active:text-amber-500 transition-colors group flex-1"
                                    >
                                        <div className="p-1 rounded-full group-active:bg-white/5 transition-colors">
                                            {React.cloneElement(link.icon, {
                                                size: 18,
                                                className: "opacity-70 group-hover:opacity-100 group-active:stroke-amber-500 transition-all"
                                            })}
                                        </div>
                                        <span className="text-[9px] font-medium tracking-wide text-center leading-none truncate max-w-full px-0.5">
                                            {link.name.replace('Contenido Histórico', 'Histórico').replace('Programa y Sede', 'Programa')}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
