import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowLeft, QrCode } from 'lucide-react';

const locations = [
    {
        id: 'plaza',
        title: 'PLAZA DE TOROS',
        subtitle: 'Porrazo de tigres, Jaripeo y Eventos Masivos',
        color: 'text-[#84bd00]', // Green from image
        bgColor: 'bg-[#84bd00]',
        description: 'La legendaria Plaza de Toros Belisario Arteaga, hogar del tradicional Porrazo del Tigre.',
        mapImage: `${import.meta.env.BASE_URL}sede/Recurso2.webp`,
        qrLink: 'https://goo.gl/maps/examplePlaza',
        pieceImage: `${import.meta.env.BASE_URL}sede/Recurso2.webp`,
        position: 'top-left'
    },
    {
        id: 'feria', // Changed ID to feria
        title: 'FERIA DE TODOS', // Changed Title from TERRENO to FERIA
        subtitle: '(A UN COSTADO DE LIVERPOOL)',
        features: ['Juegos Mecánicos', 'Muestra gastronómica', 'Muestra artesanal'],
        color: 'text-[#9c27b0]', // Purple (from Recurso 6)
        bgColor: 'bg-[#9c27b0]',
        description: 'El nuevo Recinto Ferial. Un espacio amplio para toda la familia.',
        mapImage: `${import.meta.env.BASE_URL}sede/Recurso1.webp`,
        qrLink: 'https://goo.gl/maps/exampleTerreno',
        pieceImage: `${import.meta.env.BASE_URL}sede/Recurso1.webp`,
        position: 'bottom' // Position Bottom
    },
    {
        id: 'zocalo',
        title: 'ZÓCALO',
        subtitle: 'Teatro del Pueblo',
        color: 'text-[#e91d63]', // Pink/Red (from Recurso 4)
        bgColor: 'bg-[#e91d63]',
        description: 'El corazón de la ciudad. Cultura, música y tradición en la plaza cívica.',
        mapImage: `${import.meta.env.BASE_URL}sede/Recurso3.webp`,
        qrLink: 'https://goo.gl/maps/exampleZocalo',
        pieceImage: `${import.meta.env.BASE_URL}sede/Recurso3.webp`,
        position: 'top-right' // Position Top Right
    }
];

export default function MapSection() {
    const [selectedLocation, setSelectedLocation] = useState(null);

    return (
        <section id="location" className="py-12 md:py-20 bg-[#0B1520] relative overflow-hidden min-h-[800px] flex items-center">
            {/* Decorative Side Borders (Grecas) */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-contain bg-repeat-y opacity-30 z-0" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}ELEMENTOS/GRECAS.webp)` }}></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-contain bg-repeat-y opacity-30 z-0" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}ELEMENTOS/GRECAS.webp)` }}></div>

            <div className="container mx-auto px-4 relative z-10">

                <AnimatePresence mode="wait">
                    {!selectedLocation ? (
                        <motion.div
                            key="selection"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center justify-center"
                        >
                            {/* Title: ¿YA SABES A DÓNDE IR? */}
                            <div className="bg-[#e91d63] text-white font-bold text-2xl md:text-4xl py-2 px-6 rounded-lg -rotate-2 mb-8 shadow-lg transform hover:scale-105 transition-transform cursor-default inline-block">
                                ¿YA SABES A
                            </div>
                            <div className="bg-[#84bd00] text-white font-extrabold text-4xl md:text-6xl py-2 px-10 rounded-lg rotate-1 mb-16 shadow-xl transform hover:scale-105 transition-transform cursor-default inline-block">
                                DÓNDE IR?
                            </div>

                            {/* Puzzle Container - Heart Shape Layout (approx 600x550 desktop) */}
                            <div className="relative w-[340px] h-[300px] md:w-[600px] md:h-[550px] mx-auto mt-8">

                                {/* Center Logo - La Feria es de Todos */}
                                <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 w-32 md:w-56 pointer-events-none drop-shadow-2xl">
                                    <img
                                        src={`${import.meta.env.BASE_URL}sede/LaFeriaEsDeTodos.webp`}
                                        alt="La Feria es de Todos"
                                        className="w-full animate-pulse-slow"
                                    />
                                </div>

                                {/* Clickable Puzzle Pieces - Forming a Heart */}

                                {/* Left Lobe - Plaza de Toros (Green) */}
                                <motion.div
                                    whileHover={{ scale: 1.05, zIndex: 30, rotate: -2 }}
                                    className="absolute top-0 left-[5%] w-[45%] h-[60%] cursor-pointer z-20"
                                    onClick={() => setSelectedLocation(locations[0])}
                                >
                                    <div className="relative w-full h-full">
                                        {/* Background Shape: Green (Recurso 5) */}
                                        <img src={`${import.meta.env.BASE_URL}sede/Recurso5.webp`} className="absolute inset-0 w-full h-full object-contain drop-shadow-lg" alt="Fondo Plaza" />

                                        {/* Icon: Plaza (PlazaIcon) */}
                                        <div className="absolute top-[25%] left-[20%] w-[60%] h-[60%] flex items-center justify-center">
                                            <img src={`${import.meta.env.BASE_URL}sede/PlazaIcon.webp`} className="w-full object-contain drop-shadow-md transform -rotate-12" alt="Icono Plaza" />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Right Lobe - Zócalo / Teatro del Pueblo (Pink) */}
                                <motion.div
                                    whileHover={{ scale: 1.05, zIndex: 30, rotate: 2 }}
                                    className="absolute top-[5%] right-[5%] w-[45%] h-[55%] cursor-pointer z-10"
                                    onClick={() => setSelectedLocation(locations[2])}
                                >
                                    <div className="relative w-full h-full">
                                        {/* Background Shape: Pink (Recurso 4) */}
                                        <img src={`${import.meta.env.BASE_URL}sede/Recurso4.webp`} className="absolute inset-0 w-full h-full object-contain drop-shadow-lg transform scale-x-[-1]" alt="Fondo Zócalo" />

                                        {/* Icon: Stage (Recurso 1) */}
                                        <div className="absolute top-[30%] right-[15%] w-[60%] h-[60%] flex items-center justify-center">
                                            <img src={`${import.meta.env.BASE_URL}sede/Recurso1.webp`} className="w-full object-contain drop-shadow-md" alt="Icono Teatro" />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Bottom Tip - Feria / Terreno (Purple) */}
                                <motion.div
                                    whileHover={{ scale: 1.05, zIndex: 30, translateY: -5 }}
                                    className="absolute bottom-[0%] left-[25%] w-[50%] h-[50%] cursor-pointer z-0"
                                    onClick={() => setSelectedLocation(locations[1])}
                                >
                                    <div className="relative w-full h-full">
                                        {/* Background Shape: Purple (Recurso 6) */}
                                        <img src={`${import.meta.env.BASE_URL}sede/Recurso6.webp`} className="absolute inset-0 w-full h-full object-contain drop-shadow-lg" alt="Fondo Feria" />

                                        {/* Icons: Tent (Recurso 3) + Carousel (Recurso 2) */}
                                        <div className="absolute top-[35%] left-[20%] w-[70%] h-[60%]">
                                            <img src={`${import.meta.env.BASE_URL}sede/Recurso3.webp`} className="absolute bottom-0 left-0 w-[55%] object-contain drop-shadow-md z-10" alt="Icono Carpa" />
                                            <img src={`${import.meta.env.BASE_URL}sede/Recurso2.webp`} className="absolute bottom-[20%] right-0 w-[55%] object-contain drop-shadow-md z-0" alt="Icono Carrusel" />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            <p className="mt-8 text-white/50 text-sm animate-pulse">
                                Toca una pieza para ver la ubicación
                            </p>

                        </motion.div>
                    ) : (
                        <motion.div
                            key="detail"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-6xl mx-auto w-full"
                        >
                            {/* Header Row */}
                            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
                                <button
                                    onClick={() => setSelectedLocation(null)}
                                    className="flex items-center gap-2 text-white/80 hover:text-white bg-white/10 px-4 py-2 rounded-full transition-all hover:bg-white/20"
                                >
                                    <ArrowLeft size={20} />
                                    <span>Volver al mapa</span>
                                </button>

                                <div className="text-center">
                                    <h2 className={`${selectedLocation.color} font-black text-3xl md:text-5xl uppercase tracking-wider drop-shadow-sm`}>
                                        {selectedLocation.title}
                                    </h2>
                                    <p className="text-white font-serif italic text-xl md:text-2xl mt-1">
                                        {selectedLocation.subtitle}
                                    </p>
                                </div>
                                <div className="w-32 hidden md:block"></div>
                            </div>

                            {/* Main Content Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">

                                {/* Left Side: Aesthetic Map Card */}
                                <div className="md:col-span-7 relative group">
                                    <div className="absolute inset-0 bg-white/30 transform rotate-1 rounded-3xl blur-lg"></div>
                                    <div className="bg-[#e8f5e9] rounded-3xl overflow-hidden p-3 shadow-2xl relative z-10 border-4 border-white transform hover:scale-[1.01] transition-transform duration-500">
                                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-inner bg-[#a5d6a7]">
                                            {/* Styled Maps Iframe */}
                                            <iframe
                                                title="Mapa Sede"
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.312961808092!2d-99.4993!3d17.5506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDMzJzAyLjIiTiA5OcKwMjknNTcuNSJX!5e0!3m2!1ses-419!2smx!4v1634567890123!5m2!1ses-419!2smx"
                                                width="100%"
                                                height="100%"
                                                className="w-full h-full opacity-90 contrast-[1.1] saturate-[0.8] mix-blend-multiply"
                                                style={{ border: 0 }}
                                                allowFullScreen=""
                                                loading="lazy"
                                            ></iframe>

                                            {/* Decorative Map overlay elements to look like a foldable map */}
                                            <div className="absolute top-0 right-0 p-4">
                                                <span className={`${selectedLocation.bgColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border-2 border-white`}>
                                                    VISTA SATELITAL DISPONIBLE
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side: Info & QR */}
                                <div className="md:col-span-5 flex flex-col justify-between space-y-8 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
                                    <div className="space-y-4">
                                        {selectedLocation.features && (
                                            <ul className="space-y-2">
                                                {selectedLocation.features.map((f, i) => (
                                                    <li key={i} className="text-white text-lg flex items-center gap-2">
                                                        <span className="text-feria-gold">★</span> {f}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        <p className="text-gray-300 leading-relaxed text-lg">
                                            {selectedLocation.description}
                                        </p>
                                    </div>

                                    {/* QR Section */}
                                    <div className="relative mt-4 flex-1 flex items-center justify-center">
                                        <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300 w-full max-w-sm border-b-8 border-gray-200">
                                            <div className="flex items-center gap-2 bg-[#e91d63] text-white font-bold text-lg px-4 py-2 rounded-full mb-4 shadow-md w-full justify-center">
                                                <span>📍</span> ESCANEA LA UBICACIÓN
                                            </div>

                                            <div className="p-2 bg-white rounded-xl">
                                                <QrCode size={160} className="text-[#0B1520]" />
                                            </div>
                                            <p className="text-center text-gray-400 text-xs mt-3 font-medium">
                                                Abre la cámara de tu celular
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
