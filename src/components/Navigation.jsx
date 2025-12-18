import React, { useState, useEffect } from 'react';
import { Home, BookOpen, Image, Calendar, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import Dock from './Dock';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isHero, setIsHero] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrolled(scrollY > 50);

            // Check if we are in the Hero section (approx first 80% of viewport or 100vh)
            // User requested: "only in the section of hero it has to reduce"
            // So if scrollY is small (user is at top), isHero = true -> reduced dock
            setIsHero(scrollY < window.innerHeight * 0.8);
        };
        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = async (e, href) => {
        e.preventDefault();
        // setIsOpen(false); // Mobile menu removed, no need for this

        const targetId = href.replace('#', '');

        const scrollToElement = (elementId) => {
            const element = document.getElementById(elementId);
            if (element) {
                // If it's the hero/home, scroll to 0 to be exact
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

        if (location.pathname === '/' || location.pathname === '/FeriaChilpancingo/') {
            // If already on home, try to scroll immediately
            if (!scrollToElement(targetId)) {
                setTimeout(() => scrollToElement(targetId), 100);
            }
        } else {
            // If on another page, navigate to home then scroll
            // Handle GH pages base url if needed, but router usually handles relative paths
            await navigate('/');
            setTimeout(() => {
                if (!scrollToElement(targetId)) {
                    setTimeout(() => scrollToElement(targetId), 300);
                }
            }, 100);
        }
    };

    const links = [
        { name: 'Inicio', href: '#hero', icon: <Home size={isHero ? 18 : 22} className="text-white" /> },
        { name: 'Carteles', href: '#posters', icon: <Image size={isHero ? 18 : 22} className="text-white" /> },
        { name: 'Historia', href: '#history', icon: <BookOpen size={isHero ? 18 : 22} className="text-white" /> },
        { name: 'Cartelera', href: '#program', icon: <Calendar size={isHero ? 18 : 22} className="text-white" /> },
        { name: 'Mapa', href: '#location', icon: <MapPin size={isHero ? 18 : 22} className="text-white" /> },
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

            {/* Mobile Dock Navigation */}
            <div className="md:hidden">
                {/* Mobile Logo added to top for branding presence if needed, or rely on Hero */}
                {/* Hide logo in Hero section to avoid redundancy with main logo and to give space to top Dock */}
                <div className={`fixed top-0 left-0 w-full z-40 p-4 transition-all duration-300 ${!isHero ? 'opacity-100 visible' : 'opacity-0 invisible'} ${scrolled ? 'bg-feria-blue/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
                    <div className="text-white font-serif font-bold text-lg text-center drop-shadow-md">
                        Feria Chilpancingo
                    </div>
                </div>

                <Dock
                    items={dockItems}
                    panelHeight={isHero ? 50 : 68}
                    baseItemSize={isHero ? 40 : 50}
                    magnification={isHero ? 60 : 70}
                    distance={200}
                    outerClassName={isHero ? "dock-top" : ""}
                    className="transition-all duration-500 ease-in-out"
                />
            </div>
        </>
    );
}

