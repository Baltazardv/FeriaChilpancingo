import React from 'react';
import { Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer({ className }) {
    return (
        <footer className={`text-white pt-12 pb-6 ${className || 'bg-feria-blue'}`}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="font-serif text-2xl font-bold text-feria-gold">Feria Chilpancingo</h3>
                        <p className="text-gray-300 text-sm">
                            Celebrando 200 años de historia, tradición y cultura. La fiesta más grande de Guerrero.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/share/1ADuDhPx6C/" target="_blank" rel="noopener noreferrer" className="hover:text-feria-gold transition-colors"><Facebook size={20} /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="md:text-right">
                        <h4 className="font-bold text-lg mb-4 text-feria-gold">Enlaces Rápidos</h4>
                        <ul className="space-y-2 text-sm text-gray-300 inline-block text-left">
                            <li><a href="#hero" className="hover:text-white transition-colors">Inicio</a></li>
                            <li><a href="#history" className="hover:text-white transition-colors">Historia</a></li>
                            <li><a href="#historical-gallery" className="hover:text-white transition-colors">Contenido Histórico</a></li>
                            <li><Link to="/videos" className="hover:text-white transition-colors">Cine Feria</Link></li>
                            <li><a href="#program" className="hover:text-white transition-colors">Programa y Sede</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
                    <p>© 2025 Feria de San Mateo, Navidad y Año Nuevo. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
