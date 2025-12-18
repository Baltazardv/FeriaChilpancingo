import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import ProfileCard from './ProfileCard';

export default function PosterGallery() {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

    const posters = [
        {
            id: 1,
            src: "/FeriaChilpancingo/CARTEL FRANCISCO.webp",
            title: "Cartel Oficial",
            artist: "Francisco Alarcón Tapia",
            description: "Obra representativa con elementos tradicionales.",
            gradient: "linear-gradient(145deg, #d44d4d8c 0%, #ffc10744 100%)", // Warm/Traditional
            glow: "rgba(255, 100, 50, 0.67)",
            link: "/cartel-oficial"
        },
        {
            id: 2,
            src: "/FeriaChilpancingo/POSTER_DE_LA_FERIA_PROP_2_Mesa_de_trabajo_1.webp",
            title: "Propuesta Bicentenario",
            artist: "Edición Especial",
            description: "Edición especial para los 200 años de la feria.",
            gradient: "linear-gradient(145deg, #4b6cb78c 0%, #18284844 100%)", // Cool/Modern
            glow: "rgba(100, 149, 237, 0.67)",
            link: "/propuesta-bicentenario"
        }
    ];

    const handleScroll = () => {
        if (containerRef.current) {
            const scrollLeft = containerRef.current.scrollLeft;
            const width = containerRef.current.offsetWidth;
            const newIndex = Math.round(scrollLeft / width);
            setActiveIndex(newIndex);
        }
    };

    const scrollToSlide = (index) => {
        if (containerRef.current) {
            const width = containerRef.current.offsetWidth;
            containerRef.current.scrollTo({
                left: width * index,
                behavior: 'smooth'
            });
            setActiveIndex(index);
        }
    };

    return (
        <section
            id="posters"
            ref={sectionRef}
            className="relative py-24 px-4 overflow-hidden bg-neutral-900"
        >
            {/* Ambient Lighting Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-black opacity-80" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-serif text-amber-50 mb-4"
                    >
                        Galería del Bicentenario
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={isInView ? { opacity: 1, width: "100px" } : {}}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="h-1 bg-amber-600 mx-auto"
                    />
                </div>

                <div className="relative">
                    {/* Mobile Navigation Arrows */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20 md:hidden ml-2">
                        <button
                            onClick={() => scrollToSlide(Math.max(0, activeIndex - 1))}
                            disabled={activeIndex === 0}
                            className={`p-3 rounded-full backdrop-blur-md border border-white/10 transition-all duration-300 active:scale-90 ${activeIndex === 0
                                ? 'bg-white/5 text-white/20 cursor-not-allowed'
                                : 'bg-black/30 text-amber-500 hover:bg-black/50 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                                }`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                    </div>

                    <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20 md:hidden mr-2">
                        <button
                            onClick={() => scrollToSlide(Math.min(posters.length - 1, activeIndex + 1))}
                            disabled={activeIndex === posters.length - 1}
                            className={`p-3 rounded-full backdrop-blur-md border border-white/10 transition-all duration-300 active:scale-90 ${activeIndex === posters.length - 1
                                ? 'bg-white/5 text-white/20 cursor-not-allowed'
                                : 'bg-black/30 text-amber-500 hover:bg-black/50 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                                }`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>

                    <div
                        ref={containerRef}
                        onScroll={handleScroll}
                        className="flex md:grid md:grid-cols-2 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-6 md:gap-12 lg:gap-20 items-center justify-start md:justify-center dark:[&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-4 md:py-0 px-4 md:px-0 scroll-smooth"
                    >
                        {posters.map((poster, index) => (
                            <motion.div
                                key={poster.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.2 + (index * 0.2), duration: 0.8 }}
                                className="min-w-[85vw] md:min-w-0 snap-center flex justify-center flex-shrink-0"
                            >
                                <ProfileCard
                                    avatarUrl={poster.src}
                                    name={poster.title}
                                    title={poster.artist}
                                    handle="Feria200"
                                    status="2025"
                                    contactText="Ver Detalles"
                                    contactLink={poster.link}
                                    innerGradient={poster.gradient}
                                    behindGlowColor={poster.glow}
                                    showUserInfo={true}
                                    enableTilt={true}
                                    enableMobileTilt={true}
                                    className="w-full max-w-md"
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Pagination Dots */}
                    <div className="flex justify-center gap-3 mt-6 md:hidden">
                        {posters.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToSlide(index)}
                                className={`h-2 transition-all duration-300 rounded-full ${activeIndex === index
                                    ? 'w-8 bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]'
                                    : 'w-2 bg-neutral-600 hover:bg-neutral-500'
                                    }`}
                                aria-label={`Ir al cartel ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
