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
        <div className="min-h-screen flex flex-col bg-stone-950 font-sans">
            <Header />
            <main className="flex-grow pt-24 pb-12 relative overflow-hidden">
                {/* Tiger Skin / Texture Background Effect */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#fbbf24_0%,_transparent_40%)]" />
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(#f59e0b 2px, transparent 2px)',
                        backgroundSize: '40px 40px',
                        opacity: 0.3
                    }}></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                    >
                        {/* Poster Image */}
                        <div className="relative group perspective-1000">
                            <div className="absolute -inset-2 bg-gradient-to-br from-amber-500 via-orange-600 to-yellow-900 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500"></div>
                            <img
                                src="/poster_porrazo.webp"
                                alt="Porrazo de Tigres 2025"
                                className="relative w-full rounded-xl shadow-2xl border-2 border-amber-500/20 transform transition duration-500 hover:scale-[1.02]"
                            />
                        </div>

                        {/* Info Content */}
                        <div className="text-amber-50">
                            <motion.h1
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl md:text-6xl font-serif mb-2 tracking-tight"
                            >
                                Porrazo de Tigre
                            </motion.h1>
                            <h2 className="text-3xl text-amber-500 mb-6 font-bold uppercase tracking-wider">Tradición Guerrerense</h2>

                            <div className="space-y-6 text-lg text-stone-300 leading-relaxed">
                                <p>
                                    Una de las tradiciones más emblemáticas y feroces de nuestra cultura. El Porrazo del Tigre representa la fuerza, la mística y el espíritu indomable del pueblo de Chilpancingo.
                                </p>
                                <p>
                                    En esta obra se captura la intensidad del ritual, con los colores vibrantes del jaguar y la energía de la danza que anuncia la lluvia y la fertilidad para nuestras tierras.
                                </p>
                                <div className="bg-gradient-to-br from-amber-900/30 to-black p-6 rounded-xl border border-amber-500/30 mt-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-amber-400 mb-3 flex items-center gap-2">
                                        <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
                                        Detalles del Evento
                                    </h3>
                                    <ul className="space-y-3 text-sm md:text-base">
                                        <li className="flex items-start gap-2">
                                            <span className="text-amber-500">❖</span>
                                            <span>Mística y Tradición Ancestral</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-amber-500">❖</span>
                                            <span>Identidad Chilpancingueña</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-amber-500">❖</span>
                                            <span>Edición Bicentenario 2025</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-8">
                                    <Link
                                        to="/"
                                        className="inline-flex items-center gap-2 px-8 py-3 bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-amber-900/50"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                        </svg>
                                        Regresar al Inicio
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
