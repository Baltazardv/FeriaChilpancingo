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
        description: `Es una de las expresiones más representativas y destacadas de nuestra Feria de Chilpancingo, San Mateo, Navidad y Año Nuevo, narra los vínculos históricos entre Chilpancingo y sus poblados vecinos.

Los registros más fidedignos sobre esta tradición se sitúan hacia finales del siglo XIX e inicios del XX, cuando el poblado de Petaquillas enviaba anualmente un contingente encabezado por el cacique indígena don Nicolás Tolentino, acompañado por habitantes de la localidad, con el propósito de entregar la cuelga a la ciudad de Chilpancingo como ofrenda festiva.

El obsequio consistía en tres mulas cargadas con barriles de mezcal de maguey, símbolo de abundancia, hospitalidad y reconocimiento a la feria. El cortejo se distinguía por las cadenas de flores, principalmente de cempasúchil, que colgaban del cuello de los mayordomos, así como de autoridades civiles y eclesiásticas. Parte de estas flores eran colocadas en el templo del santo patrono, reforzando el carácter simbólico y ceremonial del acto.

La llegada del contingente era anunciada por música de viento y el estallido constante de cohetes, que marcaban el ingreso de la procesión al sitio donde se desarrollaba la feria, convirtiendo la cuelga en un acontecimiento esperado y reconocido por la población chilpancingueña.

Tras la muerte de Floriberto Solorio, hijo de don Nicolás Tolentino y continuador de esta tradición, la Cuelga de Petaquillas dejó de realizarse en 1936, marcando el cierre de una etapa fundamental en la historia de la feria.

La Cuelga de Petaquillas representó durante décadas un símbolo de solidaridad regional, identidad compartida y participación comunitaria, elementos que contribuyeron de manera decisiva al fortalecimiento social y cultural de la Feria de Chilpancingo, consolidándola como una celebración que trascendió lo local para convertirse en un referente histórico del estado de Guerrero.

Referencias:
Salazar Adame, J. (2008). Chilpancingo Capital: de su origen a la modernidad.
López Romero, F. J. (2003). El paseo del Pendón. Añejo panorama de la Feria de Chilpancingo, San Mateo, Navidad y Año Nuevo.`
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
        description: `El crecimiento demográfico y urbano de Chilpancingo, especialmente a lo largo del siglo XX, trajo consigo transformaciones significativas en la organización y desarrollo de la Feria de San Mateo, Navidad y Año Nuevo. Lo que en sus primeras etapas se había celebrado en espacios tradicionales del centro de la ciudad comenzó a enfrentar serias limitaciones ante el aumento de visitantes, comerciantes, juegos mecánicos y actividades recreativas.

Durante varios años, la sede original resultó insuficiente, las calles estrechas y plazas tradicionales se saturaban, generando problemas de movilidad, seguridad y logística. Esta situación obligó a las autoridades municipales a buscar alternativas, dando paso a un periodo de reubicaciones temporales que convirtieron a la feria en un evento itinerante, sin una sede fija que garantizara su adecuado funcionamiento.

En este proceso de adaptación, siendo presidente municipal Elías Naime Nemer, se tomó la decisión de trasladar la feria a terrenos baldíos ubicados junto al Hotel Posada Meléndez. Aunque esta medida respondía a necesidades prácticas, el cambio generó inconformidad entre algunos sectores de la población, que percibían la reubicación como una ruptura con la tradición histórica de la feria.

Posteriormente, la celebración fue instalada en el interior del Estadio Andrés Figueroa, espacio que ofrecía ciertas ventajas en términos de capacidad, pero que también presentaba limitaciones para albergar la diversidad de actividades propias de la feria. A pesar de los esfuerzos, quedó claro que Chilpancingo requería un espacio permanente, amplio y adecuado para la magnitud que había alcanzado la festividad.

Finalmente, durante la administración del ingeniero Carlos León Román, y con el respaldo del entonces gobernador Alejandro Cervantes Delgado, el Gobierno Federal cedió al municipio los terrenos del antiguo vivero de la Secretaría de Agricultura, ubicados en el Barrio de San Antonio. Este espacio reunía las condiciones necesarias: amplitud, ubicación estratégica y un entorno arbolado que favorecía la convivencia social.

Tras un proceso de adecuación y remodelación, el sitio se consolidó como la sede actual de la feria, marcando un punto decisivo en su modernización. De manera paralela, se creó un patronato con el objetivo de organizar, fortalecer y preservar la celebración, permitiendo una mejor planeación y proyección a largo plazo.

La modernización y definición de una sede permanente no significaron la pérdida de la esencia tradicional de la Feria de Chilpancingo, sino su adaptación a una ciudad en crecimiento. Este proceso permitió garantizar su continuidad, fortalecer su organización y consolidarla como una de las festividades más importantes y representativas del estado de Guerrero, capaz de conjugar tradición, identidad y desarrollo urbano.

Referencias:
Salazar Adame, J. (2008). Chilpancingo Capital: de su origen a la modernidad.
López Romero, F. J. (2003). El paseo del Pendón. Añejo panorama de la Feria de Chilpancingo, San Mateo, Navidad y Año Nuevo.`
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
                    <div className={`absolute top-[-20px] ${isEven ? 'right-8' : 'left-8'} bg-white text-feria-blue border-4 border-feria-blue font-serif font-bold px-6 py-2 rounded-full shadow-xl z-20 text-lg`}>
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

                    {/* Secondary Image Thumbnail */}
                    {event.secondaryImage && (
                        <div
                            className={`mt-6 flex ${isEven ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className="relative group cursor-pointer w-24 h-32 bg-gray-100 rounded-lg shadow-md border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:rotate-2"
                                onClick={() => onImageClick && onImageClick(event.secondaryImage)}
                            >
                                <img
                                    src={event.secondaryImage}
                                    alt="Documento histórico"
                                    className="w-full h-full object-cover rounded-lg opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 rounded-lg transition-colors">
                                    <ZoomIn className="text-feria-blue bg-white/80 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm" size={24} />
                                </div>
                                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold text-gray-500 bg-white px-2 py-0.5 rounded shadow-sm z-20">
                                    Ver documento
                                </div>
                            </div>
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
                    className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 h-[300px] group relative cursor-pointer bg-black/20"
                    onClick={() => onImageClick && onImageClick(event.image)}
                >
                    <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </motion.div>
            </div>
        </div>
    );
}
