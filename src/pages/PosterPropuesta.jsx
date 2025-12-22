import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ElementsGrid from '../components/ElementsGrid';
import { motion } from 'framer-motion';

export default function PosterPropuesta() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-neutral-900 font-sans">
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
                                    src="/cartel_propuesta.webp"
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

                                    <div className="mt-8 space-y-8">
                                        {/* Video Embed */}
                                        <div className="w-full">
                                            <h3 className="text-amber-500 font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                                                <Play size={14} fill="currentColor" /> Soundtrack Oficial
                                            </h3>
                                            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl border border-white/10 relative group/video bg-black">
                                                <iframe
                                                    width="100%"
                                                    height="100%"
                                                    src="https://www.youtube.com/embed/qRXqMZTDgLE"
                                                    title="Soundtrack Oficial Bicentenario"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    className="absolute inset-0 w-full h-full"
                                                ></iframe>
                                            </div>
                                        </div>

                                        {/* Buttons */}
                                        <p className="text-amber-400 font-serif italic mb-2 text-lg">¡Explora más nuestra historia y contenido exclusivo!</p>
                                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                            <Link
                                                to="/videos"
                                                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-amber-500 text-[#0B1520] font-bold rounded-full hover:bg-amber-400 hover:scale-105 transition-all duration-300 group/btn2 shadow-lg shadow-amber-500/20"
                                            >
                                                <Play size={20} className="fill-current" />
                                                Descubre más contenido
                                            </Link>
                                            <Link
                                                to="/"
                                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-blue-400/50 text-blue-400 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300 group/btn"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                                </svg>
                                                Regresar al Inicio
                                            </Link>
                                        </div>
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
