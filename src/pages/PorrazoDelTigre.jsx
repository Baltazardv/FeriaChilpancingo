import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function PorrazoDelTigre() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-[#1a0f00] font-sans selection:bg-amber-500 selection:text-black">
            <Header
                mobileBgClass="bg-[#2a1b05]/95 border-amber-900/30"
                desktopBgClass="bg-[#2a1b05]/90 border-b border-amber-900/30 text-amber-100"
                scrolledBgClass="bg-[#2a1b05]/95"
                mobileTextClass="text-amber-100"
                desktopTextClass="text-amber-100"
                mobileDockClass="dock-amber"
            />
            <main className="flex-grow pt-24 pb-12 relative overflow-hidden">
                {/* Static Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/FONDO PORR.webp"
                        alt="Fondo Porrazo"
                        className="w-full h-full object-cover"
                    />
                    {/* Increased overlay opacity for text readability */}
                    <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                    >
                        {/* Poster Image - Order changed for Mobile: Image First */}
                        {/* Mobile: default order (1), Desktop: order-1 (left) */}
                        <div className="relative group perspective-1000 order-1">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500 via-yellow-500 to-orange-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-500 animate-pulse"></div>
                            <img
                                src="/poster_porrazo.webp"
                                alt="Porrazo de Tigres 2025"
                                className="relative w-full rounded-2xl shadow-[0_0_50px_-12px_rgba(245,158,11,0.5)] border border-amber-500/30 transform transition duration-500 hover:scale-[1.02] hover:rotate-1"
                            />
                        </div>

                        {/* Info Content - Order changed for Mobile: Text Second */}
                        {/* Mobile: default order (2), Desktop: order-2 (right) */}
                        <div className="text-amber-50 order-2">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <h1 className="text-4xl md:text-5xl font-serif mb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 drop-shadow-sm filter drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                                    Porrazo de Tigre
                                </h1>
                                <h2 className="text-xl md:text-2xl text-amber-500 mb-6 font-bold uppercase tracking-[0.2em] border-b-2 border-amber-900/50 pb-4 inline-block drop-shadow-md">
                                    Tradición Guerrerense
                                </h2>

                                <div className="space-y-6 text-base md:text-lg text-stone-200 leading-relaxed font-light drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                                    <p>
                                        <span className="text-amber-400 font-bold text-xl">L</span>a tierra ruge. Una de las tradiciones más emblemáticas y feroces de nuestra cultura. El Porrazo del Tigre representa la fuerza, la mística y el espíritu indomable del pueblo de Chilpancingo.
                                    </p>
                                    <p>
                                        En esta obra se captura la intensidad del ritual, con los colores vibrantes del jaguar y la energía de la danza que anuncia la lluvia y la fertilidad para nuestras tierras.
                                    </p>

                                    {/* Video Embed */}
                                    <div className="my-8 rounded-xl overflow-hidden shadow-2xl border border-amber-500/30 aspect-video group relative">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src="https://www.youtube.com/embed/jmNVa1zmnyQ"
                                            title="Promocional Oficial Feria Chilpancingo"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="absolute inset-0 w-full h-full"
                                        ></iframe>
                                    </div>

                                    <div className="bg-gradient-to-br from-amber-950/90 to-black/90 p-8 rounded-2xl border border-amber-500/20 mt-10 backdrop-blur-md shadow-2xl relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <h3 className="text-2xl font-bold text-amber-400 mb-4 flex items-center gap-3">
                                            <div className="w-3 h-3 bg-amber-500 rounded-full animate-ping"></div>
                                            Detalles del Evento
                                        </h3>
                                        <ul className="space-y-4">
                                            {['Mística y Tradición Ancestral', 'Identidad Chilpancingueña', 'Edición Bicentenario 2025'].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-amber-100/90 hover:text-white transition-colors">
                                                    <span className="text-amber-500 text-xl">❖</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                        <Link
                                            to="/"
                                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-700 text-white font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] hover:-translate-y-1 overflow-hidden"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:-translate-x-1 transition-transform">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                            </svg>
                                            <span className="tracking-wider">REGRESAR AL INICIO</span>
                                        </Link>
                                        <Link
                                            to="/videos"
                                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-700 text-white font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(251,146,60,0.6)] hover:-translate-y-1 overflow-hidden"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                            <span className="tracking-wider">DESCUBRE MÁS CONTENIDO</span>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer className="bg-[#0f0900] border-t border-amber-900/30" />
        </div>
    );
}
