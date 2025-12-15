import React from 'react';
import { motion } from 'framer-motion';

const historyEvents = [
    { year: '1825', title: 'El Origen', description: 'Nicolás Bravo decreta la realización de una feria anual en Chilpancingo para fomentar el comercio y la unidad.' },
    { year: '1850', title: 'Consolidación', description: 'La feria se establece formalmente en diciembre, coincidiendo con la Navidad y el Año Nuevo.' },
    { year: '1910', title: 'Revolución', description: 'A pesar del conflicto armado, las tradiciones se mantienen vivas en los barrios tradicionales.' },
    { year: '1950', title: 'Modernización', description: 'Se construye la Plaza de Toros y se amplían las instalaciones del recinto ferial.' },
    { year: '2010', title: 'Patrimonio', description: 'La danza de los Tlacololeros y el Porrazo del Tigre ganan reconocimiento internacional.' },
    { year: '2025', title: 'Bicentenario', description: 'Celebración de 200 años de historia ininterrumpida.' },
];

export default function Timeline() {
    return (
        <section id="history" className="py-20 bg-feria-blue text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-serif text-center mb-16 text-feria-gold">Línea de Tiempo 1825-2025</h2>

                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-feria-gold/30 hidden md:block"></div>

                    <div className="space-y-12">
                        {historyEvents.map((event, index) => (
                            <motion.div
                                key={event.year}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="w-full md:w-5/12"></div>

                                <div className="z-10 bg-feria-gold text-feria-blue font-bold rounded-full w-16 h-16 flex items-center justify-center border-4 border-feria-blue shadow-xl mb-4 md:mb-0">
                                    {event.year}
                                </div>

                                <div className="w-full md:w-5/12 bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:border-feria-gold transition-colors">
                                    <h3 className="text-xl font-bold text-feria-gold mb-2">{event.title}</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">{event.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
