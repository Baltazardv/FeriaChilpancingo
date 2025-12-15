import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ElementCard from './ElementCard';
import InfoModal from './InfoModal';

const elementsData = [
    { id: 1, title: 'Nicolás Bravo', image: `${import.meta.env.BASE_URL}ELEMENTOS/NICOLAS BRAVO_Mesa de trabajo 1.png`, category: 'Historia', description: 'El "Héroe del Perdón" y personaje ilustre de Chilpancingo.' },
    { id: 2, title: 'Catedral de la Asunción', image: `${import.meta.env.BASE_URL}ELEMENTOS/CATEDRAL_Mesa de trabajo 1.png`, category: 'Arquitectura', description: 'Sede de los Sentimientos de la Nación y joya arquitectónica.' },
    { id: 3, title: 'Tlacololeros', image: `${import.meta.env.BASE_URL}ELEMENTOS/TLACOLOLERO_Mesa de trabajo 1.png`, category: 'Danza', description: 'La danza más antigua y representativa de la región centro de Guerrero. Representa la siembra y la caza del tigre.' },
    { id: 4, title: 'El Tigre', image: `${import.meta.env.BASE_URL}ELEMENTOS/TIGRE_Mesa de trabajo 1.png`, category: 'Símbolo', description: 'Personaje central de varias danzas y del "Porrazo del Tigre".' },
    { id: 5, title: 'Barrio de San Mateo', image: `${import.meta.env.BASE_URL}ELEMENTOS/IGLESIA DE SAN MATEO_Mesa de trabajo 1.png`, category: 'Barrio', description: 'El barrio anfitrión de la feria, fundado en tiempos coloniales.' },
    { id: 6, title: 'Diablos de Teloloapan', image: `${import.meta.env.BASE_URL}ELEMENTOS/DIABLO DE TELOLOAPAN_Mesa de trabajo 1.png`, category: 'Tradición', description: 'Danza histórica que conmemora la lucha de independencia.' },
    { id: 7, title: 'Plaza de Toros', image: `${import.meta.env.BASE_URL}ELEMENTOS/PLAZA DE TOROS_Mesa de trabajo 1.png`, category: 'Lugar', description: 'Sede de los eventos masivos y el tradicional jaripeo.' },
    { id: 8, title: 'Porrazo del Tigre', image: `${import.meta.env.BASE_URL}ELEMENTOS/PORRAZO_Mesa de trabajo 1.png`, category: 'Evento', description: 'Tradición prehispánica donde los barrios compiten midiendo fuerza.' },
    { id: 9, title: 'Flor de Nochebuena', image: `${import.meta.env.BASE_URL}ELEMENTOS/pascua_Mesa de trabajo 1.png`, category: 'Naturaleza', description: 'Símbolo de la navidad, originaria de Taxco y Guerrero.' },
    { id: 10, title: 'Señorita Flor de Nochebuena', image: `${import.meta.env.BASE_URL}ELEMENTOS/CORONA.png`, category: 'Certamen', description: 'Representante de la belleza y cultura de Chilpancingo.' },
    { id: 11, title: 'Barrio de San Francisco', image: `${import.meta.env.BASE_URL}ELEMENTOS/IGLESIA SAN FRANCISCO_Mesa de trabajo 1.png`, category: 'Barrio' },
    { id: 12, title: 'Barrio de Santa Cruz', image: `${import.meta.env.BASE_URL}ELEMENTOS/IGLESIA DE SANTA CRUZ_Mesa de trabajo 1.png`, category: 'Barrio' },
    { id: 13, title: 'Barrio de San Antonio', image: `${import.meta.env.BASE_URL}ELEMENTOS/IGLESIA DE SAN ANTONIO_Mesa de trabajo 1.png`, category: 'Barrio' },
    { id: 14, title: 'Barrio de Tequicorral', image: `${import.meta.env.BASE_URL}ELEMENTOS/IGLESIA DE TEQUICORRAL_Mesa de trabajo 1.png`, category: 'Barrio' },
];

export default function ElementsGrid() {
    const [selectedElement, setSelectedElement] = useState(null);

    return (
        <section id="interactive" className="py-20 bg-slate-50 min-h-screen relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-feria-blue mb-4">Elementos Culturales</h2>
                    <div className="h-1 w-24 bg-feria-gold mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Explora los íconos que dan vida a nuestra historia. Haz clic en cada elemento para descubrir su significado.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {elementsData.map((element, index) => (
                        <ElementCard
                            key={element.id}
                            element={element}
                            onClick={setSelectedElement}
                        />
                    ))}
                </div>
            </div>

            <InfoModal
                selectedElement={selectedElement}
                onClose={() => setSelectedElement(null)}
            />
        </section>
    );
}
