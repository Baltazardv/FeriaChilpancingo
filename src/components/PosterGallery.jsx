import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import ProfileCard from './ProfileCard';
import CircularGallery from './CircularGallery';

export default function PosterGallery() {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
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

    const galleryItems = posters.map(poster => ({
        image: poster.src,
        text: poster.title
    }));

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

                {/* Mobile Circular Gallery */}
                <div className="md:hidden h-[600px] w-full relative">
                    <CircularGallery
                        items={galleryItems}
                        bend={3}
                        textColor="#ffffff"
                        borderRadius={0.05}
                        font="bold 30px Figtree" // Or custom font
                    />
                    <div className="absolute bottom-4 left-0 w-full text-center text-white/50 text-sm pointer-events-none">
                        Desliza para explorar
                    </div>
                </div>

                {/* Desktop Grid Layout */}
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
                                enableMobileTilt={false} // Circular Gallery handles mobile now
                                className="w-full max-w-md"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
