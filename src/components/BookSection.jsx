import React from 'react';
import HTMLFlipBook from 'react-pageflip';

const bookImages = [
    `${import.meta.env.BASE_URL}libro/page_2.webp`, // The "Right" image (Memorias Cover)
    `${import.meta.env.BASE_URL}libro/page_1.webp`, // The "Left" image (Text)
    ...Array.from({ length: 27 }, (_, i) => `${import.meta.env.BASE_URL}libro/page_${i + 3}.webp`)
];

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
                <div className="w-24 h-24 mb-6 opacity-80">
                    <img src={`${import.meta.env.BASE_URL} escudopendon.webp`} alt="Escudo" className="w-full h-full object-contain filter drop-shadow-lg" />
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
                <div className="w-32 h-32 mb-8 opacity-80">
                    <img src={`${import.meta.env.BASE_URL}escudopendon.webp`} alt="Escudo" className="w-full h-full object-contain filter drop-shadow-lg" />
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
                >
                    <Cover />
                    {bookImages.map((img, index) => (
                        <Page key={index} number={index + 1} image={img} />
                    ))}
                    <BackCover />
                </HTMLFlipBook>
            </div>

            <p className="text-gray-500 text-sm mt-8 animate-pulse">
                &larr; Arrastra las esquinas para leer &rarr;
            </p>
        </section>
    );
}

export default BookSection;
