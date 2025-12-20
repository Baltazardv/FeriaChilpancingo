import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navigation from './Navigation';
import { ArrowLeft } from 'lucide-react';

export default function Header({ mobileBgClass, desktopBgClass, scrolledBgClass, mobileTextClass, mobileDockClass, desktopTextClass }) {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <header className="absolute top-0 w-full z-40">
            {/* Mobile Header for Subpages */}
            {!isHome && (
                <div className={`md:hidden relative backdrop-blur-sm text-white text-center py-2 px-4 shadow-md border-b border-feria-gold/30 ${mobileBgClass || 'bg-feria-blue/95'}`}>
                    <Link
                        to="/"
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white transition-colors"
                        aria-label="Regresar al inicio"
                    >
                        <ArrowLeft size={20} />
                    </Link>
                    <div className="flex items-center justify-center gap-2">
                        <img
                            src="/LOGOS/feria de chilpo_1.webp"
                            alt="Logo Feria Chilpancingo"
                            className="h-8 w-auto"
                        />
                    </div>
                </div>
            )}

            {/* Institutional Bar */}
            <div className={`backdrop-blur-sm py-2 px-4 shadow-sm hidden md:block ${desktopBgClass || 'bg-white/90'}`}>
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-6">
                        {/* Logos removed as per user request */}
                    </div>
                    <div className={`${desktopTextClass || 'text-feria-blue'} font-serif text-sm italic`}>
                        Edición Bicentenario 1825-2025
                    </div>
                </div>
            </div>

            {/* Navigation Overlay */}
            <Navigation scrolledBgClass={scrolledBgClass} mobileDockClass={mobileDockClass} />
        </header>
    );
}
