import React from 'react';
import { motion } from 'framer-motion';

export default function PosterSection() {
    return (
        <section id="poster" className="py-20 bg-gradient-to-b from-feria-blue to-slate-900 text-white overflow-hidden relative">
            <div className="container mx-auto px-4 relative z-10">

                {/* Encabezado de la Sección */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                        200 Años de <span className="text-feria-gold">Historia y Tradición</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Celebramos dos siglos de cultura, tradición y alegría en la Feria más emblemática de Guerrero.
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center gap-12">

                    {/* Poster Image Container */}
                    <motion.div
                        className="w-full md:w-1/2 relative group"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-feria-gold/30 group-hover:border-feria-gold transition-colors duration-500">
                            <img
                                src="/POSTER_VERTICAL.png"
                                alt="Poster Oficial 200 Años"
                                className="w-full h-auto object-contain bg-white transform group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Decorative Corners */}
                        <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-feria-gold rounded-tl-xl"></div>
                        <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-feria-gold rounded-br-xl"></div>
                    </motion.div>

                    {/* Info Cards */}
                    <motion.div
                        className="w-full md:w-1/2 space-y-6"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {[
                            { icon: '🎭', title: 'Edición Bicentenaria', desc: 'Dos siglos de tradición ininterrumpida desde 1825.' },
                            { icon: '🎉', title: 'San Mateo, Navidad y Año Nuevo', desc: 'Celebraciones que unen a Chilpancingo todo el año.' },
                            { icon: '🏛️', title: 'Patrimonio Cultural', desc: 'Danzas, gastronomía y tradiciones de Guerrero.' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors flex items-start space-x-4"
                                whileHover={{ x: 10 }}
                            >
                                <div className="text-4xl">{item.icon}</div>
                                <div>
                                    <h3 className="text-xl font-bold text-feria-gold mb-1">{item.title}</h3>
                                    <p className="text-gray-300 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}

                        <div className="pt-6">
                            <button
                                onClick={() => document.getElementById('interactive')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-feria-gold text-feria-blue px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-yellow-400 transition-all w-full md:w-auto"
                            >
                                Descubre Nuestros Elementos
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Floating Elements Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-20 left-10 text-6xl opacity-10">🎪</motion.div>
                <motion.div animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-40 right-10 text-6xl opacity-10">🎨</motion.div>
            </div>
        </section>
    );
}
