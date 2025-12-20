import React from 'react';
import { Link } from 'react-router-dom';
import Stack from './Stack';
import BookSection from './BookSection';

export default function HistoricalGallery() {
    // Generate array of 29 images
    const allImages = Array.from({ length: 29 }, (_, i) =>
        `${import.meta.env.BASE_URL}fotos historicas/historia_${i + 1}.webp`
    );

    // Desktop: Split images into 3 chunks
    const chunk1 = allImages.slice(0, 10);
    const chunk2 = allImages.slice(10, 20);
    const chunk3 = allImages.slice(20, 29);
    const desktopStacks = [chunk1, chunk2, chunk3];

    // Mobile: Show only first 10 images in one stack
    const mobileStack = allImages.slice(0, 10);

    return (
        <section id="historical-gallery" className="py-24 bg-neutral-900 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-amber-50 mb-6">
                        Memoria Visual
                    </h2>
                    <p className="text-neutral-300 text-lg">
                        Un recorrido fotográfico por los momentos que han marcado nuestra historia.
                    </p>
                </div>

                {/* Mobile View: Single Stack + Button */}
                <div className="md:hidden flex flex-col items-center">
                    <div className="relative h-[400px] w-full max-w-xs mb-12">
                        <Stack
                            randomRotation={true}
                            sensitivity={180}
                            sendToBackOnClick={false}
                            autoplay={false}
                            cards={mobileStack.map((img, index) => (
                                <div key={`mobile-${index}`} className="w-full h-full relative group">
                                    <img
                                        src={img}
                                        alt={`Foto histórica ${index + 1}`}
                                        className="w-full h-full object-cover rounded-2xl shadow-xl"
                                    />
                                    {/* No grayscale on mobile as requested */}
                                </div>
                            ))}
                        />
                    </div>
                    <Link
                        to="/galeria"
                        className="group flex items-center gap-2 text-amber-50 text-lg hover:text-amber-200 transition-colors uppercase tracking-widest text-sm font-light mt-4"
                    >
                        <span>Ver galería completa</span>
                        <div className="w-8 h-[1px] bg-amber-50 group-hover:bg-amber-200 transition-colors"></div>
                    </Link>
                </div>

                {/* Desktop View: Grid of 3 Stacks */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 max-w-7xl mx-auto items-center justify-center">
                    {desktopStacks.map((stackImages, stackIndex) => (
                        <div key={stackIndex} className="relative h-[400px] w-full max-w-xs mx-auto">
                            <Stack
                                randomRotation={true}
                                sensitivity={180}
                                sendToBackOnClick={false}
                                autoplay={false}
                                autoplayDelay={2500 + (stackIndex * 500)}
                                animationConfig={{ stiffness: 200, damping: 15 }}
                                cards={stackImages.map((img, index) => (
                                    <div key={`${stackIndex}-${index}`} className="w-full h-full relative group">
                                        <img
                                            src={img}
                                            alt={`Foto histórica ${index + 1}`}
                                            className="w-full h-full object-cover rounded-2xl transition-all duration-500 shadow-xl"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors rounded-2xl"></div>
                                        {/* Number badge for debugging/visual */}
                                        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                            {index + 1}
                                        </div>
                                    </div>
                                ))}
                            />
                        </div>
                    ))}
                </div>

                <p className="hidden md:block text-center text-neutral-500 text-sm mt-20 animate-pulse">
                    Arrastra las fotos para descubrir más
                </p>

                {/* Desktop Link to Full Gallery */}
                <div className="hidden md:flex justify-center mt-8">
                    <Link
                        to="/galeria"
                        className="group flex items-center gap-2 text-amber-50 text-lg hover:text-amber-200 transition-colors uppercase tracking-widest text-sm font-light"
                    >
                        <span>Ver galería completa</span>
                        <div className="w-8 h-[1px] bg-amber-50 group-hover:bg-amber-200 transition-colors"></div>
                    </Link>
                </div>
            </div>
            {/* Book Section */}
            <BookSection />
        </section>
    );
}
