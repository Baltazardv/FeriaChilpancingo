import React, { useState, useEffect } from 'react';
import { Play, Info, ArrowLeft, X, ChevronRight, Home, Film, Mic2, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Updated video list: Soundtrack, Promocional, Tlacololero, Cartel
const allVideos = [
    {
        id: 'tfRy6nNFJxQ', // TLACOLOLERO - First position
        title: 'SOY TLACOLOLERO - BANDA HNOS MATEOS',
        description: 'Video oficial de la Banda Hermanos Mateos. Agradecimiento especial al presidente municipal Dr. Gustavo Alarcón Herrera. Tlacololeros Santa Cecilia.',
        category: 'Entrevistas',
        duration: '03:02',
        year: '2025',
        date: '17 de Diciembre, 2025',
        author: 'Banda Mateos Chilpancingo',
        thumbnail: 'https://img.youtube.com/vi/tfRy6nNFJxQ/maxresdefault.jpg'
    },
    {
        id: 'qRXqMZTDgLE', // SOUNDTRACK (Logo de la feria)
        title: 'SOUNDTRACK OFICIAL BICENTENARIO',
        description: 'Con motivo de la celebración de los 200 años de la Feria de Chilpancingo, se creó la banda sonora original del video promocional de la edición número 200.',
        category: 'Documentales',
        duration: '03:55',
        year: '2025',
        date: '18 de Diciembre, 2025',
        author: 'Feria de Chilpancingo',
        thumbnail: 'https://img.youtube.com/vi/qRXqMZTDgLE/maxresdefault.jpg'
    },
    {
        id: 'jmNVa1zmnyQ', // PROMOCIONAL (Jaguares/Leopardos)
        title: 'PROMOCIONAL OFICIAL EDICIÓN BICENTENARIO',
        description: 'Video promocional oficial de la Feria de Chilpancingo, San Mateo, Navidad y Año Nuevo. Guion y dirección: Pablo Jiménez. Fotografía: Nico Rios.',
        category: 'Documentales',
        duration: '02:29',
        year: '2025',
        date: '18 de Diciembre, 2025',
        author: 'Feria de Chilpancingo',
        thumbnail: 'https://img.youtube.com/vi/jmNVa1zmnyQ/maxresdefault.jpg'
    },
    {
        id: 'Jbsn6dAOm88', // CARTEL
        title: 'CARTEL FERIA DE CHILPANCINGO EDICIÓN BICENTENARIO',
        description: 'El maestro Francisco Alarcón Tapia nos comparte lo que plasmó en el Cartel de la Feria de Chilpancingo, San Mateo, Navidad y Año Nuevo, edición Bicentenario.',
        category: 'Entrevistas',
        duration: '05:39',
        year: '2025',
        date: '18 de Diciembre, 2025',
        author: 'Feria de Chilpancingo',
        thumbnail: 'https://img.youtube.com/vi/Jbsn6dAOm88/maxresdefault.jpg'
    },
    {
        id: 'QTAKrov9r8M', // Las Raíces del Tlacololero
        title: 'PROMOCIONAL DOCUMENTAL "LAS RAÍCES DEL TLACOLOLERO"',
        description: 'Documental sobre las raíces y tradiciones del Tlacololero en Chilpancingo.',
        category: 'Documentales',
        duration: '01:46',
        year: '2025',
        date: '20 de Diciembre, 2025',
        author: 'Feria de Chilpancingo',
        thumbnail: 'https://img.youtube.com/vi/QTAKrov9r8M/maxresdefault.jpg'
    },
    {
        id: '4OsNkEMrkd8', // Documental Feria 2019-2020
        title: 'DOCUMENTAL FERIA DE SAN MATEO 2019-2020',
        description: 'Documental sobre la Feria de San Mateo 2019-2020. Reunión de gente de Chilpancingo, maestros, abogados, periodistas, gente del pueblo.',
        category: 'Documentales',
        duration: '24:00',
        year: '2020',
        date: '20 de Diciembre, 2025',
        author: 'Feria de Chilpancingo',
        thumbnail: 'https://img.youtube.com/vi/4OsNkEMrkd8/maxresdefault.jpg'
    }
];

// Reusable Video Row Component
const VideoRow = ({ title, videos, onVideoClick }) => {
    if (videos.length === 0) return null;

    return (
        <div className="mb-8 md:mb-12 pl-4 md:pl-12">
            <h3 className="text-white text-base md:text-2xl font-bold mb-3 md:mb-4 flex items-center gap-2 group cursor-pointer hover:text-amber-500 transition-colors font-serif">
                {title}
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0" />
            </h3>
            <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x p-1">
                {videos.map((video) => (
                    <motion.div
                        key={video.id}
                        whileHover={{ scale: 1.05, zIndex: 10 }}
                        className="flex-none w-[160px] md:w-[350px] aspect-video relative bg-[#0B2F55] rounded-sm md:rounded-md overflow-hidden cursor-pointer shadow-lg snap-start group border border-white/10 hover:border-amber-500/50"
                        onClick={() => onVideoClick(video)}
                    >
                        <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                        {/* Hover Overlay info (Desktop only mainly) */}
                        <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-[#0B1520] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex-col justify-end p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 bg-amber-500 text-[#0B1520] rounded-full flex items-center justify-center shadow-lg">
                                    <Play size={14} fill="currentColor" />
                                </div>
                                <span className="text-xs font-bold text-amber-500">Nuevo</span>
                                <span className="text-xs text-gray-300 border border-gray-600 px-1 rounded">HD</span>
                            </div>
                            <h4 className="text-sm font-bold text-white mb-1 font-serif line-clamp-1">{video.title}</h4>
                            <div className="flex gap-2 text-[10px] text-gray-400">
                                <span>{video.category}</span>
                                <span>•</span>
                                <span>{video.duration}</span>
                            </div>
                        </div>
                        {/* Mobile Simple Label */}
                        <div className="md:hidden absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black/80 to-transparent">
                            <h4 className="text-[10px] text-white line-clamp-1">{video.title}</h4>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default function VideoPage() {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [infoVideo, setInfoVideo] = useState(null);
    const [featuredVideo, setFeaturedVideo] = useState(allVideos[0]);
    const [scrolled, setScrolled] = useState(false);
    const [filter, setFilter] = useState('Inicio'); // 'Inicio', 'Documentales', 'Entrevistas'

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleVideoSelect = (video) => {
        setFeaturedVideo(video);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Filter Logic
    const getFilteredVideos = () => {
        if (filter === 'Inicio') return allVideos;
        return allVideos.filter(v => v.category === filter);
    };

    const displayVideos = getFilteredVideos();
    const docVideos = allVideos.filter(v => v.category === 'Documentales');
    const interviewVideos = allVideos.filter(v => v.category === 'Entrevistas');

    const handleFilterClick = (category) => {
        setFilter(category);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-[#0B1520] font-sans pb-24 md:pb-20">
            {/* Navbar (Desktop + Mobile Top) */}
            <nav className={`fixed top-0 w-full z-40 transition-all duration-500 px-4 md:px-12 py-3 md:py-4 flex flex-row items-center justify-between ${scrolled ? 'bg-[#0B1520]/95 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-gradient-to-b from-[#0B1520]/90 to-transparent'}`}>
                <div className="flex items-center">
                    <Link to="/">
                        <img
                            src={`${import.meta.env.BASE_URL}LOGOS/feria de chilpo_1.webp`}
                            alt="Feria Chilpancingo"
                            className="h-8 md:h-10 object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
                        />
                    </Link>
                </div>

                {/* Desktop Navigation Links - Centered or shifted left */}
                <div className="hidden md:flex gap-8 text-sm text-gray-300 font-medium absolute left-1/2 transform -translate-x-1/2">
                    <button
                        onClick={() => handleFilterClick('Inicio')}
                        className={`transition-colors hover:text-white ${filter === 'Inicio' ? 'text-amber-500 font-bold' : ''}`}
                    >
                        Inicio
                    </button>
                    <button
                        onClick={() => handleFilterClick('Documentales')}
                        className={`transition-colors hover:text-white ${filter === 'Documentales' ? 'text-amber-500 font-bold' : ''}`}
                    >
                        Documentales
                    </button>
                    <button
                        onClick={() => handleFilterClick('Entrevistas')}
                        className={`transition-colors hover:text-white ${filter === 'Entrevistas' ? 'text-amber-500 font-bold' : ''}`}
                    >
                        Entrevistas
                    </button>
                </div>

                <div className="flex items-center gap-4">
                    {/* Mobile 'Volver' Icon only */}
                    <Link
                        to="/"
                        className="md:hidden text-white/90 bg-white/10 p-2 rounded-full backdrop-blur-sm border border-white/10"
                    >
                        <ArrowLeft size={16} />
                    </Link>

                    {/* Desktop 'Volver al Sitio' Button */}
                    <Link
                        to="/"
                        className="hidden md:flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm text-sm border border-white/10 hover:bg-[#0B2F55] hover:border-[#0B2F55]"
                    >
                        <ArrowLeft size={16} /> Volver al Sitio
                    </Link>
                </div>
            </nav>

            {/* Mobile Bottom Navigation (Netflix Style) */}
            <div className="md:hidden fixed bottom-0 left-0 w-full px-5 py-3 bg-[#0B1520]/95 backdrop-blur-xl border-t border-white/10 z-50 flex justify-between items-center text-[10px] text-gray-400">
                <button
                    onClick={() => handleFilterClick('Inicio')}
                    className={`flex flex-col items-center gap-1 transition-colors ${filter === 'Inicio' ? 'text-white' : 'hover:text-gray-200'}`}
                >
                    <Home size={20} className={filter === 'Inicio' ? 'stroke-current' : 'opacity-70'} />
                    <span className={filter === 'Inicio' ? 'font-bold' : ''}>Inicio</span>
                </button>
                <button
                    onClick={() => handleFilterClick('Documentales')}
                    className={`flex flex-col items-center gap-1 transition-colors ${filter === 'Documentales' ? 'text-white' : 'hover:text-gray-200'}`}
                >
                    <Film size={20} className={filter === 'Documentales' ? 'stroke-current' : 'opacity-70'} />
                    <span className={filter === 'Documentales' ? 'font-bold' : ''}>Documentales</span>
                </button>
                <button
                    onClick={() => handleFilterClick('Entrevistas')}
                    className={`flex flex-col items-center gap-1 transition-colors ${filter === 'Entrevistas' ? 'text-white' : 'hover:text-gray-200'}`}
                >
                    <Mic2 size={20} className={filter === 'Entrevistas' ? 'stroke-current' : 'opacity-70'} />
                    <span className={filter === 'Entrevistas' ? 'font-bold' : ''}>Entrevistas</span>
                </button>
            </div>

            {/* Hero Section */}
            <header className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden pt-16 md:pt-20">
                {/* Background Image/Video */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={featuredVideo.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7 }}
                        className="absolute inset-0"
                    >
                        <img
                            src={featuredVideo.thumbnail}
                            alt="Hero Background"
                            className="w-full h-full object-cover object-top"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1520]/40 via-[#0B1520]/60 to-[#0B1520]"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1520] via-transparent to-transparent"></div>
                    </motion.div>
                </AnimatePresence>

                {/* Hero Content */}
                <div className="absolute bottom-0 left-0 w-full flex flex-col justify-end px-4 md:px-12 z-10 pb-16 md:pb-24">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={featuredVideo.id + "content"}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-2xl text-center md:text-left mx-auto md:mx-0"
                        >
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-3 text-amber-500 font-bold tracking-widest uppercase text-[10px] md:text-sm">
                                <span className="w-0.5 h-4 md:h-6 bg-amber-500"></span>
                                {featuredVideo.category}
                            </div>

                            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4 leading-tight font-serif drop-shadow-xl line-clamp-2 md:line-clamp-3">
                                {featuredVideo.title}
                            </h1>

                            {/* Tags/Categories row similar to Netflix */}
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-xs md:text-base text-gray-200 mb-4 md:mb-8 font-medium">
                                <span>{featuredVideo.year}</span>
                                <span className="text-gray-400">•</span>
                                <span>{featuredVideo.author}</span>
                                <span className="text-gray-400">•</span>
                                <span className="text-amber-500">Bicentenario</span>
                            </div>

                            <p className="hidden md:block text-base text-gray-200 mb-6 drop-shadow-md line-clamp-3 max-w-xl font-light">
                                {featuredVideo.description}
                            </p>

                            <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4">
                                <button
                                    onClick={() => setSelectedVideo(featuredVideo)}
                                    className="flex-1 md:flex-none py-2 md:py-2.5 px-4 md:px-6 bg-white text-black font-bold text-sm md:text-base rounded hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
                                >
                                    <Play fill="currentColor" size={16} className="md:w-5 md:h-5" />
                                    Reproducir
                                </button>
                                <button
                                    onClick={() => setInfoVideo(featuredVideo)}
                                    className="flex-1 md:flex-none py-2 md:py-2.5 px-4 md:px-6 bg-[#515451]/80 text-white font-bold text-sm md:text-base rounded hover:bg-[#515451]/60 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm"
                                >
                                    <Info size={16} className="md:w-5 md:h-5" />
                                    Más Información
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </header>

            {/* Content Rows */}
            <main className="pt-12 md:pt-8 md:-mt-12 relative z-20">
                {filter === 'Inicio' ? (
                    <>
                        <VideoRow title="Tendencias de la Feria" videos={allVideos} onVideoClick={handleVideoSelect} />
                        <VideoRow title="Documentales Exclusivos" videos={docVideos} onVideoClick={handleVideoSelect} />
                        <VideoRow title="Entrevistas y Reportajes" videos={interviewVideos} onVideoClick={handleVideoSelect} />
                    </>
                ) : (
                    <div className="pt-4 md:pt-12">
                        <div className="container mx-auto px-4 md:px-12">
                            <h2 className="text-white text-lg md:text-2xl font-bold mb-4 md:mb-6 font-serif flex items-center gap-2">
                                <span className="w-1 h-6 md:h-8 bg-amber-500 block"></span>
                                {filter}
                            </h2>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                                {displayVideos.map(video => (
                                    <motion.div
                                        key={video.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        whileHover={{ scale: 1.02 }}
                                        className="aspect-video relative bg-[#0B2F55] rounded-sm md:rounded-lg overflow-hidden cursor-pointer shadow-lg group border border-white/10"
                                        onClick={() => handleVideoSelect(video)}
                                    >
                                        <img
                                            src={video.thumbnail}
                                            alt={video.title}
                                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                        />
                                        <div className="hidden md:flex absolute inset-0 bg-black/40 group-hover:bg-black/20 items-center justify-center transition-colors">
                                            <div className="w-12 h-12 bg-amber-500/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                                <Play size={20} fill="currentColor" className="text-[#0B1520] ml-1" />
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black to-transparent">
                                            <h3 className="text-white text-xs md:text-base font-medium line-clamp-1">{video.title}</h3>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </main>

            {/* Video Modal Player */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-0 md:p-4"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <div className="relative w-full h-full md:h-auto md:max-w-6xl md:aspect-video bg-black rounded-none md:rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10 flex flex-col justify-center">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                                title={selectedVideo.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="aspect-video md:h-full"
                            ></iframe>
                            <button
                                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-[#181818]/80 text-white rounded-full transition-colors z-70"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedVideo(null);
                                }}
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Info Modal */}
            <AnimatePresence>
                {infoVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[70] flex items-end md:items-center justify-center bg-black/80 md:p-4 backdrop-blur-sm"
                        onClick={() => setInfoVideo(null)}
                    >
                        <motion.div
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-2xl bg-[#1a2c42] rounded-t-xl md:rounded-xl overflow-hidden shadow-2xl border-t md:border border-white/10 max-h-[85vh] flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative h-48 md:h-64 flex-shrink-0">
                                <img src={infoVideo.thumbnail} alt={infoVideo.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2c42] via-transparent to-transparent"></div>
                                <button
                                    className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-white/20 transition-colors"
                                    onClick={() => setInfoVideo(null)}
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-6 md:p-8 overflow-y-auto">
                                <div className="flex items-center gap-3 mb-4 text-amber-500 font-bold text-xs md:text-sm">
                                    <span>{infoVideo.year}</span>
                                    <span className="text-gray-400">•</span>
                                    <span className="border border-gray-500 px-1 text-gray-300 rounded text-[10px]">HD</span>
                                    <span className="text-gray-400">•</span>
                                    <span>{infoVideo.duration}</span>
                                </div>

                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 leading-tight">{infoVideo.title}</h2>
                                <p className="text-gray-300 mb-6 leading-relaxed text-justify text-sm md:text-base">
                                    {infoVideo.description}
                                </p>

                                <div className="border-t border-white/10 pt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                    <div className='flex flex-col'>
                                        <span className="text-gray-500 mb-1">Categoría</span>
                                        <span className="text-white font-medium">{infoVideo.category}</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className="text-gray-500 mb-1">Autor</span>
                                        <span className="text-white font-medium">{infoVideo.author}</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className="text-gray-500 mb-1">Fecha de Publicación</span>
                                        <span className="text-white font-medium">{infoVideo.date}</span>
                                    </div>
                                </div>
                                <div className="mt-6 md:hidden">
                                    <button
                                        onClick={() => {
                                            setSelectedVideo(infoVideo);
                                            setInfoVideo(null);
                                        }}
                                        className="w-full py-3 bg-white text-black font-bold rounded flex items-center justify-center gap-2"
                                    >
                                        <Play fill="currentColor" size={20} /> Reproducir
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Simple Footer - Hidden on mobile to avoid clutter with bottom nav */}
            <footer className="hidden md:block mt-20 px-12 py-8 text-gray-500 text-sm text-center border-t border-white/5">
                <p>© 2025 Feria Chilpancingo - On Demand. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}
