import React from 'react';
import Navigation from './Navigation';

export default function Header() {
    return (
        <header className="absolute top-0 w-full z-40">
            {/* Institutional Bar */}
            <div className="bg-white/90 backdrop-blur-sm py-2 px-4 shadow-sm hidden md:block">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-6">
                        {/* Logos removed as per user request */}
                    </div>
                    <div className="text-feria-blue font-serif text-sm italic">
                        Edición Bicentenario 1825-2025
                    </div>
                </div>
            </div>

            {/* Navigation Overlay */}
            <Navigation />
        </header>
    );
}
