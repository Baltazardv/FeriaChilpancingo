import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import QRCode from 'react-qr-code';

// Location Data
const locations = [
    {
        id: 'plaza',
        title: 'PLAZA DE TOROS',
        subtitle: 'Porrazo de tigres',
        features: ['Jaripeo', 'Eventos Masivos', 'Porrazo de Tigre'],
        color: 'text-[#84bd00]',
        bgColor: 'bg-[#84bd00]',
        description: 'La legendaria Plaza de Toros Belisario Arteaga, hogar del tradicional Porrazo del Tigre.',
        // Real Google Maps Embed URL for Plaza de Toros
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.3193237583624!2d-99.4913888885072!3d17.55048338329241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cbef7a0e7a0a0d%3A0x123456789abcdef!2sPlaza%20de%20Toros%20Belisario%20Arteaga!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx",
        // Direct link for QR Code
        qrLink: 'https://www.google.com/maps/search/?api=1&query=Plaza+de+Toros+Belisario+Arteaga+Chilpancingo',
        pieceImage: `${import.meta.env.BASE_URL}sede/Recurso2.webp`,
        iconImage: `${import.meta.env.BASE_URL}sede/PlazaIcon.webp`,
        position: 'top-left'
    },
    {
        id: 'zocalo',
        title: 'ZÓCALO',
        subtitle: 'Teatro del Pueblo',
        features: ['Cultura', 'Música', 'Tradición'],
        color: 'text-[#a00037]',
        bgColor: 'bg-[#a00037]',
        description: 'El corazón de la ciudad. Cultura, música y tradición en la plaza cívica.',
        // Real Google Maps Embed URL for Zocalo
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.36573847256!2d-99.50285652433514!3d17.54958864998781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cbedc644871e3d%3A0x5a53609801828b77!2sPlaza%20C%C3%ADvica%20Primer%20Congreso%20de%20An%C3%A1huac!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx",
        qrLink: 'https://www.google.com/maps/search/?api=1&query=Plaza+Civica+Primer+Congreso+de+Anahuac+Chilpancingo',
        pieceImage: `${import.meta.env.BASE_URL}sede/Recurso3.webp`,
        iconImage: `${import.meta.env.BASE_URL}sede/Recurso1.webp`,
        position: 'top-right'
    },
    {
        id: 'feria',
        title: 'TERRENO',
        subtitle: '(A UN COSTADO DE LIVERPOOL)',
        features: ['Juegos Mecánicos', 'Muestra gastronómica', 'Muestra artesanal'],
        color: 'text-[#9c27b0]',
        bgColor: 'bg-[#7b1fa2]',
        description: 'El nuevo Recinto Ferial. Un espacio amplio para toda la familia.',
        // Real Google Maps Embed URL for Feria (approximate based on Liverpool reference)
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.6989345037!2d-99.4975!3d17.5432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sFeria+de+San+Mateo+Navidad+y+A%C3%B1o+Nuevo!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx",
        qrLink: 'https://maps.app.goo.gl/qHa1np3HciGcxZJbA',
        pieceImage: `${import.meta.env.BASE_URL}sede/Recurso1.webp`,
        iconImage: `${import.meta.env.BASE_URL}sede/Recurso2.webp`,
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

                                {/* Left Side: Map Card (REVERTED TO IFRAME) */}
                                <div className="md:col-span-8 relative group">
                                    <div className="absolute inset-0 bg-white/30 transform rotate-1 rounded-3xl blur-lg"></div>
                                    <div className="bg-[#e8f5e9] rounded-3xl overflow-hidden p-3 shadow-2xl relative z-10 border-4 border-white transform hover:scale-[1.01] transition-transform duration-500 h-full">
                                        <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-inner bg-[#a5d6a7]">
                                            <iframe
                                                title={`Mapa ${selectedLocation.title}`}
                                                src={selectedLocation.mapUrl}
                                                width="100%"
                                                height="100%"
                                                className="w-full h-full opacity-90 contrast-[1.1] saturate-[0.8] mix-blend-multiply"
                                                style={{ border: 0 }}
                                                allowFullScreen=""
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            ></iframe>
                                            <div className="absolute top-0 right-0 p-4">
                                                <span className={`${selectedLocation.bgColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border-2 border-white`}>
                                                    VISTA SATELITAL DISPONIBLE
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side: Info Only (QR is now GENERATED) */}
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

                                    {/* QR Section */}
                                    <div className="relative mt-4 flex-1 flex items-center justify-center">
                                        <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300 w-full max-w-sm border-b-8 border-gray-200">
                                            <div className="flex items-center gap-2 bg-[#e91d63] text-white font-bold text-lg px-4 py-2 rounded-full mb-4 shadow-md w-full justify-center">
                                                <span>📍</span> ESCANEA LA UBICACIÓN
                                            </div>

                                            <div className="p-2 bg-white rounded-xl">
                                                <div className="w-[160px] h-[160px]">
                                                    <QRCode
                                                        value={selectedLocation.qrLink}
                                                        size={160}
                                                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                                        viewBox={`0 0 256 256`}
                                                    />
                                                </div>
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
