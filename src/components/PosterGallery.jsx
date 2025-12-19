import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import ProfileCard from './ProfileCard';


export default function PosterGallery() {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

    const posters = [
        {
            id: 1,
            src: "/CARTEL FRANCISCO.webp",
            title: "Cartel Oficial",
            artist: "Francisco Alarcón Tapia",
            description: "Obra representativa con elementos tradicionales.",
            gradient: "linear-gradient(145deg, #d44d4d8c 0%, #ffc10744 100%)", // Warm/Traditional
            glow: "rgba(255, 100, 50, 0.67)",
            link: "/cartel-oficial"
        },
        {
            id: 2,
            src: "/POSTER_DE_LA_FERIA_PROP_2_Mesa_de_trabajo_1.webp",
            title: "Propuesta Bicentenario",
            artist: "Edición Especial",
            description: "Edición especial para los 200 años de la feria.",
            gradient: "linear-gradient(145deg, #4b6cb78c 0%, #18284844 100%)", // Cool/Modern
            glow: "rgba(100, 149, 237, 0.67)",
            link: "/propuesta-bicentenario"
        }
    ];



    const [activePosterId, setActivePosterId] = useState(1);
    const activePoster = posters.find(p => p.id === activePosterId) || posters[0];

    return (
        <section
            id="posters"
            ref={sectionRef}
            className="relative py-24 px-4 overflow-hidden bg-neutral-900"
        >
            {/* Ambient Lighting Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-black opacity-80" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-6 md:mb-16">
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
                    {/* Mobile: Toggle Controls & Single Display */}
                    <div className="md:hidden flex flex-col items-center">
                        <div className="w-full max-w-[95vw] mx-auto flex justify-center items-center mb-8">
                            <motion.div
                                key={activePoster.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="w-full flex justify-center"
                            >
                                <ProfileCard
                                    avatarUrl={activePoster.src}
                                    name={activePoster.title}
                                    title={activePoster.artist}
                                    handle="Feria200"
                                    status="2025"
                                    contactText="Ver Detalles"
                                    contactLink={activePoster.link}
                                    innerGradient={activePoster.gradient}
                                    behindGlowColor={activePoster.glow}
                                    showUserInfo={true}
                                    enableTilt={false} // Disable heavy JS tilt on mobile for performance
                                    enableMobileTilt={false}
                                    className="w-full"
                                />
                            </motion.div>
                        </div>

                        {/* Toggle Buttons */}
                        <div className="grid grid-cols-2 gap-4 w-full max-w-[90vw] mx-auto">
                            {posters.map((poster) => (
                                <button
                                    key={poster.id}
                                    onClick={() => setActivePosterId(poster.id)}
                                    className={`relative px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 overflow-hidden ${activePosterId === poster.id ? 'text-white scale-105 shadow-lg ring-2 ring-amber-500/50' : 'text-neutral-400 hover:text-white opacity-75'}`}
                                    style={{
                                        background: activePosterId === poster.id ? poster.gradient : 'rgba(255,255,255,0.05)'
                                    }}
                                >
                                    <span className="relative z-10">{poster.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Desktop: Grid Layout */}
                    <div className="hidden md:grid md:grid-cols-2 gap-12 lg:gap-20 items-center justify-center">
                        {posters.map((poster, index) => (
                            <motion.div
                                key={poster.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.2 + (index * 0.2), duration: 0.8 }}
                                className="flex justify-center"
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
                                    enableMobileTilt={false} // Desktop has hover tilt
                                    className="w-full max-w-md"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
