import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowLeft, QrCode } from 'lucide-react';

// Location Data
const locations = [
    {
        id: 'plaza',
        title: 'PLAZA DE TOROS',
        subtitle: 'Porrazo de tigres', // Shortened for legend
        features: ['Jaripeo', 'Eventos Masivos', 'Porrazo de Tigre'],
        color: 'text-[#84bd00]', // Green from image
        bgColor: 'bg-[#84bd00]',
        description: 'La legendaria Plaza de Toros Belisario Arteaga, hogar del tradicional Porrazo del Tigre.',
        mapImage: `${import.meta.env.BASE_URL}sede/Map_Plaza.png`, // Updated to static map w/ QR
        qrLink: 'https://goo.gl/maps/examplePlaza',
        pieceImage: `${import.meta.env.BASE_URL}sede/Recurso2.webp`,
        iconImage: `${import.meta.env.BASE_URL}sede/PlazaIcon.webp`, // Explicit icon
        position: 'top-left'
    },
    {
        id: 'zocalo',
        title: 'ZÓCALO',
        subtitle: 'Teatro del Pueblo',
        features: ['Cultura', 'Música', 'Tradición'],
        color: 'text-[#a00037]', // Deep Pink/Red from image
        bgColor: 'bg-[#a00037]', // Darker pink for Zocalo bar
        description: 'El corazón de la ciudad. Cultura, música y tradición en la plaza cívica.',
        mapImage: `${import.meta.env.BASE_URL}sede/Map_Zocalo.png`, // Updated to static map w/ QR
        qrLink: 'https://goo.gl/maps/exampleZocalo',
        pieceImage: `${import.meta.env.BASE_URL}sede/Recurso3.webp`,
        iconImage: `${import.meta.env.BASE_URL}sede/Recurso1.webp`, // Stage icon
        position: 'top-right'
    },
    {
        id: 'feria',
        title: 'TERRENO', // ID remains feria, Title is TERRENO
        subtitle: '(A UN COSTADO DE LIVERPOOL)',
        features: ['Juegos Mecánicos', 'Muestra gastronómica', 'Muestra artesanal'],
        color: 'text-[#9c27b0]', // Purple (from Recurso 6)
        bgColor: 'bg-[#7b1fa2]', // Deep Purple for bar
        description: 'El nuevo Recinto Ferial. Un espacio amplio para toda la familia.',
        mapImage: `${import.meta.env.BASE_URL}sede/Map_Terreno.png`, // Updated to static map w/ QR
        qrLink: 'https://goo.gl/maps/exampleTerreno',
        pieceImage: `${import.meta.env.BASE_URL}sede/Recurso1.webp`,
        iconImage: `${import.meta.env.BASE_URL}sede/Recurso2.webp`, // Carousel icon
        position: 'bottom'
    }
];

export default function MapSection() {
    const [selectedLocation, setSelectedLocation] = useState(null);

    return (
        <section id="location" className="py-8 md:py-16 bg-[#0B1520] relative overflow-hidden min-h-[700px] flex items-center">
            {/* Top Decoration */}
            <div className="absolute top-4 left-0 w-full flex justify-center pointer-events-none z-20 opacity-80">
                <img src={`${import.meta.env.BASE_URL}ELEMENTOS/Recurso 4.webp`} alt="Decoración" className="w-24 md:w-32" />
            </div>

            {/* Bottom Decoration */}
            <div className="absolute bottom-4 left-0 w-full flex justify-center pointer-events-none z-20 opacity-80">
                <img src={`${import.meta.env.BASE_URL}ELEMENTOS/Recurso 4.webp`} alt="Decoración" className="w-24 md:w-32" />
            </div>

            <div className="container mx-auto px-4 relative z-10">

                <AnimatePresence mode="wait">
                    {!selectedLocation ? (
                        <motion.div
                            key="selection"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16"
                        >

                            {/* LEFT SIDE: PUZZLE (Heart Shape) */}
                            <div className="relative w-[340px] h-[340px] md:w-[500px] md:h-[500px] shrink-0">

                                {/* Center Logo */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 w-32 md:w-48 pointer-events-none drop-shadow-2xl">
                                    <img
                                        src={`${import.meta.env.BASE_URL}sede/LaFeriaEsDeTodos.webp`}
                                        alt="La Feria es de Todos"
                                        className="w-full"
                                    />
                                </div>

                                {/* Clickable Puzzle Pieces - "Touching" Layout (Colindando) */}

                                {/* 1. Green Piece (Plaza) - Left */}
                                <motion.div
                                    whileHover={{ scale: 1.05, zIndex: 30, rotate: -2 }}
                                    className="absolute top-[0%] left-[2%] w-[52%] h-[65%] cursor-pointer z-20"
                                    onClick={() => setSelectedLocation(locations[0])}
                                >
                                    <div className="relative w-full h-full">
                                        <img src={`${import.meta.env.BASE_URL}sede/Recurso5.webp`} className="absolute inset-0 w-full h-full object-contain drop-shadow-lg" alt="Fondo Plaza" />
                                        <div className="absolute top-[28%] left-[18%] w-[60%] h-[60%] flex items-center justify-center">
                                            <img src={`${import.meta.env.BASE_URL}sede/PlazaIcon.webp`} className="w-full object-contain drop-shadow-md transform -rotate-12" alt="Icono Plaza" />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* 2. Pink Piece (Zócalo) - Top Right - Touching Green */}
                                <motion.div
                                    whileHover={{ scale: 1.05, zIndex: 30, rotate: 2 }}
                                    className="absolute top-[6%] right-[5%] w-[48%] h-[58%] cursor-pointer z-10"
                                    onClick={() => setSelectedLocation(locations[1])}
                                >
                                    <div className="relative w-full h-full">
                                        <img src={`${import.meta.env.BASE_URL}sede/Recurso4.webp`} className="absolute inset-0 w-full h-full object-contain drop-shadow-lg" alt="Fondo Zócalo" />
                                        <div className="absolute top-[32%] right-[15%] w-[60%] h-[60%] flex items-center justify-center">
                                            <img src={`${import.meta.env.BASE_URL}sede/Recurso1.webp`} className="w-full object-contain drop-shadow-md" alt="Icono Teatro" />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* 3. Purple Piece (Feria) - Bottom - Fitting in between */}
                                <motion.div
                                    whileHover={{ scale: 1.05, zIndex: 30, translateY: -5 }}
                                    className="absolute bottom-[2%] left-[24%] w-[52%] h-[52%] cursor-pointer z-0"
                                    onClick={() => setSelectedLocation(locations[2])}
                                >
                                    <div className="relative w-full h-full">
                                        <img src={`${import.meta.env.BASE_URL}sede/Recurso6.webp`} className="absolute inset-0 w-full h-full object-contain drop-shadow-lg" alt="Fondo Feria" />
                                        <div className="absolute top-[35%] left-[20%] w-[70%] h-[60%]">
                                            <img src={`${import.meta.env.BASE_URL}sede/Recurso3.webp`} className="absolute bottom-0 left-0 w-[55%] object-contain drop-shadow-md z-10" alt="Icono Carpa" />
                                            <img src={`${import.meta.env.BASE_URL}sede/Recurso2.webp`} className="absolute bottom-[20%] right-0 w-[55%] object-contain drop-shadow-md z-0" alt="Icono Carrusel" />
                                        </div>
                                    </div>
                                </motion.div>

                                <p className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white/40 text-xs md:text-sm animate-pulse whitespace-nowrap">
                                    Toca una pieza para ver la ubicación
                                </p>
                            </div>

                            {/* RIGHT SIDE: LEGEND LIST */}
                            <div className="flex flex-col gap-6 mt-8 md:mt-0 max-w-sm w-full z-20">

                                {/* Plaza Legend Item */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="group cursor-pointer flex flex-col items-center"
                                    onClick={() => setSelectedLocation(locations[0])}
                                >
                                    <div className="bg-[#84bd00] w-full py-2 px-4 rounded-xl shadow-lg border-2 border-white/20 flex items-center justify-center relative overflow-hidden group-hover:brightness-110 transition-all">
                                        <h3 className="text-white font-black text-xl md:text-2xl uppercase tracking-wider drop-shadow-sm text-center">
                                            PLAZA DE TOROS
                                        </h3>
                                    </div>
                                    <p className="text-white font-serif italic text-xl mt-1 group-hover:text-[#84bd00] transition-colors text-center">
                                        Porrazo de tigres
                                    </p>
                                </motion.div>

                                {/* Zócalo Legend Item */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="group cursor-pointer flex flex-col items-center"
                                    onClick={() => setSelectedLocation(locations[1])}
                                >
                                    <div className="bg-gradient-to-r from-[#b71c1c] to-[#a00037] w-full py-2 px-4 rounded-xl shadow-lg border-2 border-white/20 flex items-center justify-center relative overflow-hidden group-hover:brightness-110 transition-all">
                                        <h3 className="text-white font-black text-xl md:text-2xl uppercase tracking-wider drop-shadow-sm text-center">
                                            ZÓCALO
                                        </h3>
                                    </div>
                                    <p className="text-white font-serif italic text-xl mt-1 group-hover:text-[#e91d63] transition-colors text-center">
                                        Teatro del Pueblo
                                    </p>
                                </motion.div>

                                {/* Terreno Legend Item */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="group cursor-pointer flex flex-col items-center"
                                    onClick={() => setSelectedLocation(locations[2])}
                                >
                                    <div className="bg-[#7b1fa2] w-full py-1 px-2 rounded-xl shadow-lg border-2 border-white/20 flex flex-col items-center justify-center relative overflow-hidden group-hover:brightness-110 transition-all h-[50px]">
                                        <div className="flex items-baseline gap-2">
                                            <h3 className="text-white font-black text-xl md:text-2xl uppercase tracking-wider drop-shadow-sm leading-none">
                                                TERRENO
                                            </h3>
                                            <span className="text-[0.6rem] text-white/80 font-bold leading-none w-20 text-center">
                                                (A UN COSTADO DE LIVERPOOL)
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-center mt-1 group-hover:text-[#9c27b0] transition-colors">
                                        <p className="text-white font-serif italic text-xl leading-none">Juegos Mecánicos</p>
                                        <p className="text-white font-serif italic text-lg leading-tight opacity-90">Muestra gastronómica y artesanal</p>
                                    </div>
                                </motion.div>
                            </div>
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

                                {/* Left Side: Map Card (NOW FULL IMAGE) */}
                                <div className="md:col-span-8 relative group">
                                    <div className="absolute inset-0 bg-white/30 transform rotate-1 rounded-3xl blur-lg"></div>
                                    <div className="bg-[#e8f5e9] rounded-3xl overflow-hidden shadow-2xl relative z-10 border-4 border-white transform hover:scale-[1.01] transition-transform duration-500">
                                        <img
                                            src={selectedLocation.mapImage}
                                            alt={`Mapa ${selectedLocation.title}`}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Right Side: Info Only (QR is now in image) */}
                                <div className="md:col-span-4 flex flex-col justify-center space-y-8 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
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

                                    <div className="mt-8 text-center bg-white/10 p-4 rounded-xl border border-white/20">
                                        <img
                                            src={`${import.meta.env.BASE_URL}sede/Header_QR.png`}
                                            alt="Escanea la ubicación"
                                            className="h-12 w-auto mx-auto mb-2"
                                        />
                                        <p className="text-white/80 text-sm">
                                            Utiliza el código QR en el mapa para navegar con Google Maps.
                                        </p>
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
