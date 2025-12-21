import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

export default function PosterOficial() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-neutral-900 font-sans">
            <Header />
            <main className="flex-grow pt-24 pb-32 md:pb-12">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
                    >
                        {/* Poster Image */}
                        <div className="relative group md:sticky md:top-24">
                            <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-900 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                            <img
                                src="/cartel_francisco.webp"
                                alt="Cartel Oficial Feria Chilpancingo 200 Años"
                                className="relative w-full rounded-xl shadow-2xl transform transition duration-500 hover:scale-[1.02]"
                            />
                        </div>

                        {/* Info Content */}
                        <div className="text-amber-50">
                            <motion.h1
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl md:text-5xl font-serif mb-2"
                            >
                                Cartel Oficial
                            </motion.h1>
                            <h2 className="text-2xl text-amber-500 mb-6 font-light">Francisco Alarcón Tapia</h2>

                            <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                                <p>
                                    El cartel oficial de la Feria de Chilpancingo, San Mateo, Navidad y Año Nuevo en su edición Bicentenario (2025).
                                </p>
                                <p>
                                    Esta obra captura la esencia de 200 años de historia y tradición. En ella se representan elementos icónicos de la cultura chilpancingueña, fusionando el pasado colonial con la vitalidad de nuestras fiestas actuales.
                                </p>

                                {/* Video Embed */}
                                <div className="my-8 rounded-xl overflow-hidden shadow-2xl border border-white/10 aspect-video group relative">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/Jbsn6dAOm88"
                                        title="Entrevista Cartel Oficial"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full"
                                    ></iframe>
                                </div>

                                <div className="bg-white/5 p-6 rounded-lg border border-white/10 mt-8">
                                    <h3 className="text-xl font-serif text-amber-400 mb-2">Detalles de la Obra</h3>
                                    <ul className="list-disc list-inside space-y-2 text-sm">
                                        <li>Técnica: Ilustración Digital / Mixta</li>
                                        <li>Tema: Identidad y Tradición</li>
                                        <li>Año: 2025</li>
                                    </ul>
                                </div>

                                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                    <Link
                                        to="/"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-amber-500 text-amber-500 rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 group/btn"
                                    >
                                        <ArrowRight className="w-5 h-5 rotate-180 group-hover/btn:-translate-x-1 transition-transform" />
                                        Regresar al Inicio
                                    </Link>
                                    <Link
                                        to="/videos"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-all duration-300 group/btn shadow-lg hover:shadow-amber-500/20"
                                    >
                                        <Play className="w-5 h-5 fill-current" />
                                        Descubre más contenido
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
