import React, { useState } from 'react';
import { Play, X, ArrowRight, MonitorPlay } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const videos = [
    {
        id: 'local_tlacolol',
        title: 'DOCUMENTAL: Hijos del Tlacolol',
        category: 'Documentales',
        duration: '30:00',
        thumbnail: `${import.meta.env.BASE_URL}videos/HijosDelTlacolol.webp`,
        videoSrc: `${import.meta.env.BASE_URL}videos/DOCUMENTAL. Hijos del Tlacolol 30min.m4v`
    },
    {
        id: 'jmNVa1zmnyQ',
        title: 'PROMOCIONAL OFICIAL EDICIÓN BICENTENARIO',
        category: 'Documentales',
        duration: '02:29'
    },
    {
        id: 'QTAKrov9r8M',
        title: 'PROMOCIONAL DOCUMENTAL "LAS RAÍCES DEL TLACOLOLERO"',
        category: 'Documentales',
        duration: '01:46'
    }
];

export default function VideoSection() {
    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <section className="py-24 bg-[#0B1520] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[100px]"></div>
            </div>

            {/* Top Decoration */}
            <div className="flex justify-center w-full mb-8 pointer-events-none relative z-20 opacity-80">
                <img src={`${import.meta.env.BASE_URL}ELEMENTOS/Recurso 4.webp`} alt="Decoración" className="w-24 md:w-32" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <MonitorPlay className="text-amber-500 w-5 h-5" />
                            <span className="text-amber-500 font-bold tracking-widest text-xs uppercase">Cine Feria</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif text-white">
                            Cine Feria
                        </h2>
                    </div>
                </div>

                {/* Video Grid */}
                {/* Video Carousel */}
                <div className="flex overflow-x-auto snap-x gap-6 pb-6 scrollbar-hide">
                    {videos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative flex-none w-[300px] md:w-[400px] aspect-video rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-blue-900/30 transition-all duration-300 ring-1 ring-white/10 hover:ring-amber-500/50 snap-center"
                            onClick={() => setSelectedVideo(video)}
                        >
                            {/* Thumbnail */}
                            <img
                                src={video.thumbnail || `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                                alt={video.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                <div className="w-16 h-16 bg-feria-blue/90 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 shadow-xl border border-white/20">
                                    <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                                </div>
                            </div>

                            {/* Info */}
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent pt-12">
                                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-1 block">
                                    {video.category} • {video.duration}
                                </span>
                                <h3 className="text-white font-medium text-lg leading-tight group-hover:text-amber-100 transition-colors">
                                    {video.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <Link
                        to="/videos"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-feria-blue hover:bg-[#0f3a67] text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-600/30 group border border-white/10"
                    >
                        <span>Explora el Catálogo Completo</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <p className="mt-4 text-neutral-500 text-sm">
                        Documentales, entrevistas y registros históricos exclusivos.
                    </p>
                </div>
            </div>

            {/* Bottom Decoration */}
            <div className="flex justify-center w-full mt-8 pointer-events-none relative z-20 opacity-80">
                <img src={`${import.meta.env.BASE_URL}ELEMENTOS/Recurso 4.webp`} alt="Decoración" className="w-24 md:w-32" />
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <div className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-neutral-800">
                            {selectedVideo.videoSrc ? (
                                <video
                                    src={selectedVideo.videoSrc}
                                    className="w-full h-full object-cover"
                                    controls
                                    autoPlay
                                    controlsList="nodownload"
                                    onContextMenu={(e) => e.preventDefault()}
                                />
                            ) : (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                                    title={selectedVideo.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            )}
                            <button
                                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-feria-blue text-white rounded-full transition-colors backdrop-blur-sm"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedVideo(null);
                                }}
                            >
                                <X size={24} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
