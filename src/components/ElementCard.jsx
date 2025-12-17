import React from 'react';
import { motion } from 'framer-motion';

export default function ElementCard({ element, onClick }) {
    return (
        <motion.div
            layoutId={`card-${element.id}`}
            className="relative cursor-pointer group"
            onClick={() => onClick(element)}
            whileHover={{ scale: 1.05, rotate: 1, zIndex: 10 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="relative overflow-hidden rounded-xl shadow-lg border-2 border-transparent hover:border-feria-gold transition-colors duration-300 bg-white/5 backdrop-blur-sm">
                <div className="aspect-square p-4 flex items-center justify-center">
                    <motion.img
                        layoutId={`image-${element.id}`}
                        src={element.image}
                        alt={element.title}
                        loading="lazy"
                        className="w-full h-full object-contain drop-shadow-md group-hover:drop-shadow-2xl transition-all duration-300"
                    />
                </div>

                {/* Hover Overlay Title */}
                <div className="absolute inset-0 bg-gradient-to-t from-feria-blue/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-white font-serif font-bold text-center px-2">{element.title}</span>
                </div>
            </div>
        </motion.div>
    );
}
