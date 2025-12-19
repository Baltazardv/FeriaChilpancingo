import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, ZoomIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import Masonry from '../components/Masonry';

// Simple Lightbox Component
const Lightbox = ({ image, onClose }) => {
    if (!image) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={onClose}
        >
            <button
                className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors bg-white/10 p-2 rounded-full backdrop-blur-sm"
                onClick={onClose}
            >
                <X size={32} />
            </button>
            <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={image.img}
                alt={`Imagen histórica ${image.id}`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            />
        </motion.div>
    );
};

export default function FullGallery() {
    // Lightbox State
    const [selectedImage, setSelectedImage] = useState(null);

    // Generate array of 29 images
    // Using explicit paths and logical dimensions for masonry effect
    const images = Array.from({ length: 29 }, (_, i) => {
        // Simple random height simulation for masonry effect
        // 400, 600, 800 roughly map to short, medium, tall vertical images relative to width
        // We use slightly larger dimensions to ensure quality
        const dim = [400, 500, 600, 700][i % 4];
        return {
            id: String(i + 1),
            img: `${import.meta.env.BASE_URL}fotos historicas/historia_${i + 1}.webp`,
            height: dim
        };
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Handle Image Click
    const handleImageClick = (item) => {
        setSelectedImage(item);
    };

    return (
        <div className="min-h-screen bg-neutral-950 px-4 py-8 relative">
            <header className="mb-12 flex items-center justify-between container mx-auto relative z-10">
                <Link
                    to="/"
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
                >
                    <ArrowLeft size={20} />
                    <span>Volver</span>
                </Link>
                <h1 className="text-2xl md:text-3xl font-serif text-amber-50">
                    Galería Histórica
                </h1>
                <div className="w-24"></div> {/* Spacer for center alignment */}
            </header>

            <main className="container mx-auto">
                <Masonry
                    items={images}
                    columns={4}
                    gap={20}
                    onImageClick={handleImageClick} // Pass the click handler
                />
            </main>

            {/* Lightbox Overlay */}
            <AnimatePresence>
                {selectedImage && (
                    <Lightbox
                        image={selectedImage}
                        onClose={() => setSelectedImage(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
