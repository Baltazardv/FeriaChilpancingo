import React from 'react';
import Stack from './Stack';

export default function HistoricalGallery() {
    // Generate array of 29 images
    const allImages = Array.from({ length: 29 }, (_, i) =>
        `${import.meta.env.BASE_URL}fotos historicas/historia_${i + 1}.webp`
    );

    // Split images into 3 chunks
    const chunk1 = allImages.slice(0, 10);
    const chunk2 = allImages.slice(10, 20);
    const chunk3 = allImages.slice(20, 29);

    const stacks = [chunk1, chunk2, chunk3];

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-8 max-w-7xl mx-auto items-center justify-center">
                    {stacks.map((stackImages, stackIndex) => (
                        <div key={stackIndex} className="relative h-[400px] w-full max-w-xs mx-auto">
                            <Stack
                                randomRotation={true}
                                sensitivity={180}
                                sendToBackOnClick={false}
                                autoplay={false}
                                autoplayDelay={2500 + (stackIndex * 500)} // Staggered delays: 2500, 3000, 3500
                                animationConfig={{ stiffness: 200, damping: 15 }}
                                cards={stackImages.map((img, index) => (
                                    <div key={`${stackIndex}-${index}`} className="w-full h-full relative group">
                                        <img
                                            src={img}
                                            alt={`Foto histórica ${index + 1}`}
                                            className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500 shadow-xl"
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

                <p className="text-center text-neutral-500 text-sm mt-20 animate-pulse">
                    Arrastra las fotos para descubrir más
                </p>
            </div>
        </section>
    );
}
