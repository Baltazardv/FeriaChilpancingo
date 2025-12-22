import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const historicalPosters = [
    { src: `${import.meta.env.BASE_URL}Carteles Historicos/EDCIÓN199.webp`, id: 199, description: "Edición 199" },
    { src: `${import.meta.env.BASE_URL}Carteles Historicos/EDICION198.webp`, id: 198, description: "Edición 198" },
    { src: `${import.meta.env.BASE_URL}Carteles Historicos/EDCIÓN196.webp`, id: 196, description: "Edición 196" },
    { src: `${import.meta.env.BASE_URL}Carteles Historicos/EDCIÓN195.webp`, id: 195, description: "Edición 195" },
    { src: `${import.meta.env.BASE_URL}Carteles Historicos/EDCIÓN194.webp`, id: 194, description: "Edición 194" },
    { src: `${import.meta.env.BASE_URL}Carteles Historicos/EDCIÓN193.webp`, id: 193, description: "Edición 193" },
    { src: `${import.meta.env.BASE_URL}Carteles Historicos/EDCIÓN192.webp`, id: 192, description: "Edición 192" },
    { src: `${import.meta.env.BASE_URL}Carteles Historicos/EDCIÓN191.webp`, id: 191, description: "Edición 191" },
    { src: `${import.meta.env.BASE_URL}Carteles Historicos/EDCIÓN182.webp`, id: 182, description: "Edición 182" },
];

export default function HistoricalPosters() {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-[#5D1916] relative overflow-hidden font-sans text-white">
            <Header />



            <main className="flex-grow pt-32 pb-24 relative z-20">
                {/* Side Grecas Decoration - Left */}
                <div
                    className="absolute left-0 top-0 bottom-0 w-8 md:w-16 z-10 opacity-80 pointer-events-none"
                    style={{
                        backgroundImage: `url(${import.meta.env.BASE_URL}ELEMENTOS/GRECAS.webp)`,
                        backgroundRepeat: 'repeat-y',
                        backgroundSize: 'contain'
                    }}
                />
                {/* Side Grecas Decoration - Right */}
                <div
                    className="absolute right-0 top-0 bottom-0 w-8 md:w-16 z-10 opacity-80 pointer-events-none transform scale-x-[-1]"
                    style={{
                        backgroundImage: `url(${import.meta.env.BASE_URL}ELEMENTOS/GRECAS.webp)`,
                        backgroundRepeat: 'repeat-y',
                        backgroundSize: 'contain'
                    }}
                />
                {/* Top Decoration */}
                <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl flex justify-between px-10 pointer-events-none opacity-60">
                    <img src={`${import.meta.env.BASE_URL}ELEMENTOS/pascua_Mesa de trabajo 1.webp`} alt="" className="w-24 md:w-48 animate-spin-slow opacity-80" />
                    <img src={`${import.meta.env.BASE_URL}ELEMENTOS/pascua_Mesa de trabajo 1.webp`} alt="" className="w-24 md:w-48 animate-spin-slow opacity-80" />
                </div>

                <div className="container mx-auto px-10 md:px-24">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16 relative"
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}ELEMENTOS/Recurso 4.webp`}
                            alt=""
                            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-auto opacity-30 select-none pointer-events-none blur-sm"
                        />
                        <h1 className="text-4xl md:text-6xl font-serif text-[#FFC857] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] mb-4 relative z-10">
                            Carteles Históricos
                        </h1>
                        <p className="text-xl text-[#FFE5A3] font-light max-w-2xl mx-auto italic">
                            Un viaje gráfico a través de la historia y tradición de nuestra feria.
                        </p>
                    </motion.div>

                    {/* Posters Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {historicalPosters.map((poster, index) => (
                            <motion.div
                                key={poster.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="flex flex-col items-center">
                                    {/* Top Decoration */}
                                    <img src={`${import.meta.env.BASE_URL}ELEMENTOS/Recurso 4.webp`} alt="" className="w-32 h-auto mb-2 opacity-80" />

                                    <div
                                        className="aspect-[2/3] relative rounded-lg overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-4 border-[#8B2E2B] bg-black w-full cursor-pointer group/card"
                                        onClick={() => setSelectedImage(poster.src)}
                                    >
                                        <img
                                            src={poster.src}
                                            alt={`Cartel Histórico ${index + 1}`}
                                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100 flex items-end justify-center pb-4 transition-opacity duration-300">
                                            <p className="text-[#FFC857] text-center px-4 text-sm font-serif italic drop-shadow-md">
                                                {poster.description}
                                            </p>
                                        </div>
                                        {/* Zoom Hint */}
                                        <div className="absolute top-2 right-2 bg-black/50 p-1.5 rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Bottom Decoration */}
                                    <img src={`${import.meta.env.BASE_URL}ELEMENTOS/Recurso 4.webp`} alt="" className="w-32 h-auto mt-2 opacity-80 transform rotate-180" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFC857] text-[#5D1916] font-bold rounded-full hover:bg-white transition-all duration-300 shadow-xl"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                            Regresar a la Feria
                        </Link>
                    </div>
                </div>
            </main>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl max-h-[90vh] rounded-xl overflow-hidden shadow-2xl flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img src={selectedImage} alt="Vista ampliada" className="max-w-full max-h-[85vh] object-contain rounded-md" />
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors backdrop-blur-sm border border-white/20"
                            >
                                <X size={28} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
}
