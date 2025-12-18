import React, { useState, useEffect } from 'react';
import { Home, BookOpen, Image, Calendar, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import Dock from './Dock';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = async (e, href) => {
        e.preventDefault();
        setIsOpen(false);

        const targetId = href.replace('#', '');

        const scrollToElement = (elementId) => {
            const element = document.getElementById(elementId);
            if (element) {
                const headerOffset = 85; // Slightly increased offset
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
            // If already on home, try to scroll immediately
            if (!scrollToElement(targetId)) {
                // If element not found yet (rare), retry briefly
                setTimeout(() => scrollToElement(targetId), 100);
            }
        } else {
            // If on another page, navigate to home then scroll
            await navigate('/');
            // Retry a few times to ensure page is loaded
            setTimeout(() => {
                if (!scrollToElement(targetId)) {
                    setTimeout(() => scrollToElement(targetId), 300);
                }
            }, 100);
        }
    };

    const links = [
        { name: 'Inicio', href: '#hero', icon: <Home size={22} className="text-white" /> },
        { name: 'Carteles', href: '#posters', icon: <Image size={22} className="text-white" /> },
        { name: 'Historia', href: '#history', icon: <BookOpen size={22} className="text-white" /> },
        { name: 'Cartelera', href: '#program', icon: <Calendar size={22} className="text-white" /> },
        { name: 'Mapa', href: '#location', icon: <MapPin size={22} className="text-white" /> },
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
                <div className={`fixed top-0 left-0 w-full z-40 p-4 transition-all duration-300 ${scrolled ? 'bg-feria-blue/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
                    <div className="text-white font-serif font-bold text-lg text-center drop-shadow-md">
                        Feria Chilpancingo
                    </div>
                </div>

                <Dock
                    items={dockItems}
                    panelHeight={60}
                    baseItemSize={40}
                    magnification={60}
                />
            </div>
        </>
    );
}
