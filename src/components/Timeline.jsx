import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ZoomIn, X } from 'lucide-react';

const historyEvents = [
    {
        year: '1825',
        title: 'Origen',
        image: `${import.meta.env.BASE_URL}ELEMENTOS/NICOLAS BRAVO_Mesa de trabajo 1.webp`,
        secondaryImage: `${import.meta.env.BASE_URL}Decreto de creación de la feria.webp`,
        description: `La Feria de Chilpancingo tiene su origen en un contexto de profunda crisis social y económica derivada del movimiento independentista. Tras años de guerra, la población enfrentaba la destrucción de familias, la pobreza generalizada y la pérdida de sus medios de subsistencia.
        
        Ante esta situación, el general Nicolás Bravo expuso ante el Congreso del Estado de México las difíciles condiciones en que se encontraba Chilpancingo. En el documento dirigido a las autoridades legislativas, Bravo subrayó la necesidad de un reconocimiento institucional que permitiera la recuperación de la ciudad.
        
        "...Motivos poderosos me obligan a procurar para este pueblo su antiguo engrandecimiento: soy testigo de sus padecimientos... estas mismas circunstancias me mueven también a suplicar a V.M. le permita tener a dicho pueblo una feria cada año..."
        
        Como resultado, el 26 de marzo de 1825, mediante el Decreto n.º 40, se concedió oficialmente a Chilpancingo el derecho de celebrar una feria anual en diciembre.`
    },
    {
        year: 'Siglo XIX',
        title: 'Consolidación',
        image: `${import.meta.env.BASE_URL}ELEMENTOS/IGLESIA DE SAN MATEO_Mesa de trabajo 1.webp`,
        secondaryImage: `${import.meta.env.BASE_URL}escudopendon.webp`,
        description: `Tras su establecimiento formal en 1825, la feria inició un proceso paulatino de consolidación. Lo que en un inicio surgió como una medida para la reactivación del comercio local, se transformó en un espacio de encuentro colectivo y fortalecimiento del tejido comunitario.
        
        Durante el siglo XIX, el Pendón adquirió un papel central como símbolo anunciador de la festividad. Su recorrido no solo convocaba a la población, sino que reforzaba el sentido de pertenencia de los distintos barrios. De forma gradual, a la actividad comercial se sumaron expresiones festivas colectivas y prácticas culturales heredadas.
        
        Hacia finales del siglo XIX y principios del siglo XX, la feria ya se encontraba firmemente arraigada, consolidándose como un referente regional y sentando las bases para su permanencia como la actual Feria de San Mateo, Navidad y Año Nuevo.`
    },
    {
        year: '1900',
        title: 'La Cuelga de Petaquillas',
        image: `${import.meta.env.BASE_URL}ELEMENTOS/IGLESIA DE SAN MATEO_Mesa de trabajo 1.webp`,
        description: `Los datos más fidedignos comienzan hacia 1900. El poblado de Petaquillas enviaba un contingente con tres mulas cargadas de mezcal como "cuelga" (obsequio) para Chilpancingo.
        
        Destacaban las cadenas de cempasúchil en los cuellos de los mayordomos y la música de viento que anunciaba la llegada del cortejo.`
    },
    {
        year: 'Siglo XX',
        title: 'El Porrazo de Tigres',
        image: `${import.meta.env.BASE_URL}ELEMENTOS/PORRAZO_Mesa de trabajo 1.webp`,
        description: `Símbolo de la feria, representa la antigua competencia entre barrios. Originalmente era un encuentro entre los tigres de Amojileca y Chilpancingo en el río Huacapa.
        
        "El tigre carga sobre los hombros la representación del barrio que lo vio nacer; su deber es defender con honor y valentía la presea del ganador..."`
    },
    {
        year: '1979',
        title: 'El Escudo del Pendón',
        image: `${import.meta.env.BASE_URL}escudopendon.webp`,
        description: `Establecido por el Cabildo el 21 de septiembre de 1979. Diseñado por Francisco Antonio Alarcón Tapia, representa a Chilpancingo como "lugar de avispas", con cadenas de cempasúchil que simbolizan festividad y bienvenida.
        
        Al centro figuran los tlacololeros y el tigre, con la iglesia de la Asunción al fondo.`
    },
    {
        year: 'Actualidad',
        title: 'Modernización y Sede',
        image: `${import.meta.env.BASE_URL}ELEMENTOS/PLAZA DE TOROS_Mesa de trabajo 1.webp`,
        description: `Tras varios traslados (Jardín Cuéllar, Hotel Meléndez, Estadio), la feria encontró su hogar definitivo en el Barrio de San Antonio, en los antiguos viveros.
        
        Hoy, la Feria de San Mateo, Navidad y Año Nuevo es un emblema de identidad cultural que trasciende generaciones.`
    }
];

export default function Timeline() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="history" className="bg-feria-blue text-white py-20 relative">
            <div className="container mx-auto px-4 mb-10 md:mb-32">
                <h2 className="text-4xl md:text-5xl font-serif text-center text-feria-gold mb-6">
                    Línea de Tiempo 1825-2025
                </h2>
                <p className="text-center text-gray-300 max-w-2xl mx-auto mb-8 md:mb-12">
                    Una historia viva que se cuenta a través de los siglos.
                    <span className="block md:hidden text-feria-gold/80 text-sm mt-2 animate-pulse">
                        ← Desliza horizontalmente →
                    </span>
                    <span className="hidden md:block text-feria-gold/80 text-sm mt-2">
                        Desliza hacia abajo para recorrer la historia
                    </span>
                </p>
            </div>

            {/* Mobile View: Horizontal Carousel */}
            <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-12 w-full no-scrollbar relative z-10">
                {historyEvents.map((event, index) => (
                    <div key={index} className="snap-center shrink-0 w-[85vw] max-w-sm flex flex-col">
                        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-white/20 h-full flex flex-col">
                            {/* Mobile Image */}
                            <div className="h-56 relative group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-feria-gold to-feria-red z-10"></div>
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => e.target.style.display = 'none'}
                                />
                                <div className="absolute bottom-[-1px] left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
                                <div className="absolute top-4 left-4 bg-feria-blue/90 text-white font-bold px-3 py-1 rounded-lg shadow-lg border border-feria-gold/50 backdrop-blur-md z-20">
                                    <span className="text-xs text-feria-gold uppercase mr-1">Año</span>
                                    {event.year}
                                </div>
                            </div>

                            {/* Mobile Content */}
                            <div className="p-6 pt-2 flex-1 flex flex-col text-feria-blue">
                                <h3 className="text-2xl font-serif font-bold mb-3 leading-tight">{event.title}</h3>
                                <div className="w-12 h-1 bg-feria-gold/50 rounded-full mb-4"></div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                                    {event.description}
                                </p>
                                {event.secondaryImage && (
                                    <div className="mt-auto pt-4 border-t border-gray-100">
                                        <div
                                            className="rounded-lg overflow-hidden border border-gray-200 bg-gray-50 p-1 relative group cursor-pointer"
                                            onClick={() => setSelectedImage(event.secondaryImage)}
                                        >
                                            <img src={event.secondaryImage} className="w-full h-32 object-contain transition-transform duration-300 group-hover:scale-105" alt="Documento histórico" />
                                            {/* Click Hint Overlay */}
                                            <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <ZoomIn className="text-feria-blue drop-shadow-md" size={32} />
                                            </div>
                                            <div className="absolute top-2 right-2 bg-white/90 rounded-full p-1 shadow-sm opacity-80">
                                                <ZoomIn size={14} className="text-feria-blue" />
                                            </div>
                                            <p className="text-[10px] text-center text-feria-blue font-bold mt-1 uppercase tracking-wider flex items-center justify-center gap-1">
                                                <span className="animate-pulse">●</span> Toca para ampliar
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Desktop View: Vertical Alternating Timeline */}
            <div className="hidden md:block relative container mx-auto px-4 pb-24">
                {/* Central Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-feria-gold/0 via-feria-gold/50 to-feria-gold/0 transform -translate-x-1/2"></div>

                <div className="relative flex flex-col">
                    {historyEvents.map((event, index) => (
                        <TimelineItem key={index} event={event} index={index} onImageClick={setSelectedImage} />
                    ))}
                </div>
            </div>

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
        </section>
    );
}

function TimelineItem({ event, index, onImageClick }) {
    const isEven = index % 2 === 0;

    return (
        <div className={`flex items-center justify-between w-full mb-24 relative ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
            {/* Content Side */}
            <div className="w-5/12">
                <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`bg-white text-feria-blue p-8 rounded-2xl shadow-xl border border-white/10 relative ${isEven ? 'text-right' : 'text-left'}`}
                >
                    {/* Year Badge */}
                    <div className={`absolute top-[-15px] ${isEven ? 'right-8' : 'left-8'} bg-feria-gold text-white font-bold px-4 py-1 rounded-full shadow-lg z-10`}>
                        {event.year}
                    </div>

                    <h3 className="text-3xl font-serif font-bold mb-4 mt-2">{event.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        {event.description.split('\n\n')[0]} {/* Show first paragraph roughly */}
                    </p>

                    {/* Expandable full text could go here or keep it concise. 
                        Let's render full description but ensuring clean spacing. 
                    */}
                    <div className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">
                        {event.description.includes('...') ? event.description : event.description.substring(event.description.indexOf('\n\n') + 1)}
                    </div>

                    {/* Secondary Image Icon */}
                    {event.secondaryImage && (
                        <div
                            className={`mt-4 flex ${isEven ? 'justify-end' : 'justify-start'}`}
                        >
                            <button
                                onClick={() => onImageClick && onImageClick(event.secondaryImage)}
                                className="flex items-center gap-2 text-sm font-bold text-feria-gold hover:text-feria-red transition-colors group"
                            >
                                {isEven ? (
                                    <>
                                        <span>Ver documento</span>
                                        <ZoomIn size={16} />
                                    </>
                                ) : (
                                    <>
                                        <ZoomIn size={16} />
                                        <span>Ver documento</span>
                                    </>
                                )}
                            </button>
                        </div>
                    )}

                    {/* Arrow pointing to center */}
                    <div className={`absolute top-8 ${isEven ? '-right-3 border-l-[12px] border-l-white' : '-left-3 border-r-[12px] border-r-white'} w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent`}></div>
                </motion.div>
            </div>

            {/* Center Node */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="w-4 h-4 bg-feria-gold rounded-full ring-4 ring-feria-blue z-10 shadow-[0_0_15px_rgba(251,191,36,0.5)]"></div>
            </div>

            {/* Image Side */}
            <div className="w-5/12 pl-8 pr-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 h-[300px] group relative cursor-pointer"
                    onClick={() => onImageClick && onImageClick(event.image)}
                >
                    <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </motion.div>
            </div>
        </div>
    );
}
