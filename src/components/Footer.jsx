import React from 'react';
import { Facebook } from 'lucide-react';

export default function Footer({ className }) {
    return (
        <footer className={`text-white pt-12 pb-6 ${className || 'bg-feria-blue'}`}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-feria-gold">Enlaces Rápidos</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="#history" className="hover:text-white transition-colors">Historia</a></li>
                            <li><a href="#program" className="hover:text-white transition-colors">Programa Oficial</a></li>
                            <li><a href="#location" className="hover:text-white transition-colors">Ubicación</a></li>
                            <li><a href="#convocatorias" className="hover:text-white transition-colors">Convocatorias</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-feria-gold">Institucional</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="#" className="hover:text-white transition-colors">Gobierno Municipal</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Patronato de la Feria</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Transparencia</a></li>
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
