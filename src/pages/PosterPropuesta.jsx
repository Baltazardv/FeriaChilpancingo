import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ElementsGrid from '../components/ElementsGrid';
import { motion } from 'framer-motion';

export default function PosterPropuesta() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
            <Header />
            <main className="flex-grow pt-24">
                <div className="bg-neutral-900 pb-20">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-12"
                        >
                            {/* Poster Image */}
                            <div className="relative group order-first md:order-last">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-900 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                                <img
                                    src="/FeriaChilpancingo/POSTER_DE_LA_FERIA_PROP_2_Mesa_de_trabajo_1.webp"
                                    alt="Propuesta Cartel Bicentenario"
                                    className="relative w-full rounded-xl shadow-2xl transform transition duration-500 hover:scale-[1.02]"
                                />
                            </div>

                            {/* Info Content */}
                            <div className="text-white">
                                <motion.h1
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-4xl md:text-5xl font-serif mb-2"
                                >
                                    Propuesta Bicentenario
                                </motion.h1>
                                <h2 className="text-2xl text-blue-400 mb-6 font-light">Edición Especial</h2>

                                <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                                    <p>
                                        Una visión moderna y vibrante para celebrar los 200 años de nuestra feria. Esta propuesta busca resaltar la evolución de Chilpancingo a través de sus íconos más representativos.
                                    </p>
                                    <p>
                                        Cada elemento en este cartel ha sido cuidadosamente seleccionado para narrar una parte de nuestra historia, desde los héroes de la independencia hasta las danzas que llenan de color nuestras calles.
                                    </p>
                                    <div className="p-4 border-l-4 border-blue-500 bg-blue-900/20 rounded pl-6 italic">
                                        "Una celebración de luz, color y memoria."
                                    </div>

                                    <div className="mt-8">
                                        <a
                                            href="/"
                                            className="inline-flex items-center gap-2 px-6 py-3 border border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300 group/btn"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                            </svg>
                                            Regresar al Inicio
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Cultural Elements Section */}
                <div className="bg-slate-50 relative z-10 -mt-10 rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.1)] pt-16">
                    <ElementsGrid />
                </div>
            </main>
            <Footer />
        </div>
    );
}
