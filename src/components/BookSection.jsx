import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Hand } from 'lucide-react';

const bookImages = Array.from({ length: 29 }, (_, i) =>
    `${import.meta.env.BASE_URL}libro/page_${i + 1}.webp`
);

const Page = React.forwardRef((props, ref) => {
    return (
        <div className="demoPage bg-white shadow-lg overflow-hidden border-r border-gray-200" ref={ref}>
            <div className="h-full w-full relative">
                <img
                    src={props.image}
                    alt={`Página ${props.number} `}
                    className="w-full h-full object-contain"
                    loading="lazy"
                />

                {/* Page Number */}
                <div className="absolute bottom-4 right-4 text-xs text-gray-400 font-serif">
                    {props.number}
                </div>
            </div>
        </div>
    );
});

const Cover = React.forwardRef((props, ref) => {
    return (
        <div className="demoPage bg-[#5D4037] shadow-xl overflow-hidden border-r-4 border-[#3E2723] flex flex-col items-center justify-center p-8 text-center relative" ref={ref}>
            {/* Leather texture effect overlay */}
            <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none"></div>

            {/* Border decoration */}
            <div className="w-full h-full border-4 border-[#FFD700] border-double rounded-lg flex flex-col items-center justify-center p-6 relative z-10">
                <div className="w-56 h-56 mb-8 opacity-90">
                    <img src={`${import.meta.env.BASE_URL}escudo_pendon.webp`} alt="Escudo" className="w-full h-full object-contain filter drop-shadow-lg" />
                </div>

                <h1 className="text-4xl font-serif font-bold text-[#FFD700] mb-2 drop-shadow-md">
                    200 Años
                </h1>
                <h2 className="text-2xl font-serif text-[#FFECB3] mb-8 drop-shadow-sm uppercase tracking-widest">
                    Feria de Chilpancingo
                </h2>

                <div className="w-32 h-1 bg-[#FFD700] rounded-full mb-8"></div>

                <p className="text-[#D7CCC8] text-sm uppercase tracking-wider font-semibold">
                    Compendio Histórico
                </p>
                <p className="text-[#D7CCC8] text-xs mt-2">
                    1825 - 2025
                </p>

                {/* Hand Interact Indicator */}
                <div className="absolute bottom-6 right-6 flex flex-col items-center gap-1 animate-pulse">
                    <Hand className="w-6 h-6 text-[#FFD700] rotate-12" />
                    <span className="text-[10px] text-[#FFECB3] font-serif uppercase tracking-widest">Abrir</span>
                </div>
            </div>
        </div>
    );
});

const BackCover = React.forwardRef((props, ref) => {
    return (
        <div className="demoPage bg-[#5D4037] shadow-xl overflow-hidden border-l-4 border-[#3E2723] flex flex-col items-center justify-center p-8 text-center relative" ref={ref}>
            {/* Leather texture effect overlay */}
            <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none"></div>

            {/* Border decoration */}
            <div className="w-full h-full border-4 border-[#FFD700] border-double rounded-lg flex flex-col items-center justify-center p-6 relative z-10">
                <div className="w-48 h-48 mb-6 opacity-90">
                    <img src={`${import.meta.env.BASE_URL}escudo_pendon.webp`} alt="Escudo" className="w-full h-full object-contain filter drop-shadow-lg" loading="eager" />
                </div>

                <h2 className="text-2xl font-serif text-[#FFECB3] mb-4 drop-shadow-sm uppercase tracking-widest">
                    Feria de Chilpancingo
                </h2>
                <p className="text-[#D7CCC8] text-sm uppercase tracking-wider font-semibold">
                    Orgullo y Tradición
                </p>
            </div>
        </div>
    );
});

function BookSection() {
    const bookRef = React.useRef(null);

    // Preload images for smoother experience
    React.useEffect(() => {
        const preloadHeaders = [
            `${import.meta.env.BASE_URL}escudo_pendon.webp`,
            ...bookImages
        ];

        preloadHeaders.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    const handleReset = () => {
        if (bookRef.current) {
            bookRef.current.pageFlip().turnToPage(0);
        }
    };

    return (
        <section className="w-full py-20 bg-neutral-900 flex flex-col items-center justify-center overflow-hidden">
            <div className="text-center mb-24 relative z-20 px-4">
                <h2 className="text-4xl md:text-5xl font-serif text-amber-400 mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    Libro Histórico
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto font-medium">
                    Una mirada histórica a través de las páginas. Desliza o haz clic en las esquinas para pasar de página.
                </p>
            </div>

            <div className="relative z-10 flex justify-center items-center w-full max-w-[1200px] h-[400px] md:h-[600px]">
                {/* Book Container */}
                <HTMLFlipBook
                    width={450}
                    height={600}
                    size="stretch"
                    minWidth={300}
                    maxWidth={800}
                    minHeight={400}
                    maxHeight={1000}
                    maxShadowOpacity={0.5}
                    showCover={true}
                    mobileScrollSupport={true}
                    className="shadow-2xl"
                    ref={bookRef}
                >
                    <Cover />
                    {bookImages.map((img, index) => (
                        <Page key={index} number={index + 1} image={img} />
                    ))}
                    <BackCover />
                </HTMLFlipBook>
            </div>

            <div className="mt-24 flex flex-col items-center gap-4 relative z-20">
                <p className="text-gray-500 text-sm animate-pulse">
                    &larr; Arrastra las esquinas para leer &rarr;
                </p>
                <button
                    onClick={handleReset}
                    className="px-6 py-2 bg-[#FFD700] text-[#3E2723] font-serif font-bold rounded-full shadow-lg hover:bg-amber-400 transition-colors duration-300 text-sm"
                >
                    Regresar a la Portada
                </button>
            </div>
        </section>
    );
}

export default BookSection;
