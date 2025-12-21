import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Fireworks = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();
        class Particle {
            constructor(x, y, color) {
                this.x = x;
                this.y = y;
                this.color = color;
                this.velocity = { x: (Math.random() - 0.5) * 5, y: (Math.random() - 0.5) * 5 };
                this.alpha = 1;
                this.decay = Math.random() * 0.015 + 0.005;
            }
            draw() {
                ctx.save();
                ctx.globalAlpha = this.alpha;
                ctx.beginPath();
                ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.restore();
            }
            update() {
                this.x += this.velocity.x;
                this.y += this.velocity.y;
                this.alpha -= this.decay;
            }
        }
        const createFirework = () => {
            const x = Math.random() * canvas.width;
            const y = Math.random() * (canvas.height / 2);
            const colors = ['#d4af37', '#ff007f', '#ff7f00', '#00ff00', '#00ffff'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            for (let i = 0; i < 30; i++) particles.push(new Particle(x, y, color));
        };
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            if (Math.random() < 0.05) createFirework();
            particles.forEach((particle, index) => {
                if (particle.alpha > 0) { particle.update(); particle.draw(); }
                else particles.splice(index, 1);
            });
        };
        animate();
        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);
    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />;
};

export default function Hero() {
    const { scrollY } = useScroll();

    // Parallax Interactions
    const riseEffect = useTransform(scrollY, [0, 300], [0, -60]);
    const scaleEffect = useTransform(scrollY, [0, 300], [1, 1.02]);
    const opacityFade = useTransform(scrollY, [0, 250], [1, 0]);

    // Animation Variants
    const partyVariant = {
        animate: {
            y: [0, -8, 0],
            rotate: [0, 1.5, -1.5, 0],
            transition: {
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }
        },
        hover: {
            scale: 1.1,
            filter: "brightness(1.1)",
            transition: { duration: 0.3 }
        }
    };

    const subtleVariant = {
        animate: {
            y: [0, -3, 0],
            transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        },
        hover: {
            scale: 1.02,
            filter: "brightness(1.05)",
            y: -5,
            transition: { duration: 0.3 }
        }
    };

    return (
        <section id="hero" className="sticky top-0 h-[100dvh] flex flex-col items-center justify-start overflow-hidden bg-feria-blue selection:bg-feria-gold selection:text-feria-blue">

            {/* Background & Fireworks */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900 to-feria-blue pointer-events-none">
                <Fireworks />
            </div>

            {/* Logos */}
            <motion.div
                style={{ opacity: opacityFade }}
                className="relative z-20 mt-16 md:mt-24 flex flex-col items-center gap-1 md:gap-2 px-4 w-full"
            >
                <img src={`${import.meta.env.BASE_URL}LOGOS/logo_chilpancingo_bicentenario.webp`} alt="Chilpancingo Logo" className="h-[14vh] md:h-[16vh] object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
                <img src={`${import.meta.env.BASE_URL}LOGOS/logo_200_anos.webp`} alt="200 Años Logo" className="h-[9vh] md:h-[10vh] object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
            </motion.div>

            {/* Scroll Indicators */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="relative z-20 mt-2 md:mt-4 flex flex-col items-center gap-[-10px] text-white/60 md:hidden"
            >
                <motion.div
                    animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown size={32} strokeWidth={1.5} />
                </motion.div>
                <motion.div
                    animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    className="-mt-4"
                >
                    <ChevronDown size={32} strokeWidth={1.5} />
                </motion.div>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="text-[10px] uppercase tracking-widest mt-1 font-medium"
                >
                    Desliza hacia abajo
                </motion.span>
            </motion.div>

            {/* Main Composition Container */}
            <div className="absolute bottom-0 left-0 w-full h-[70vh] flex flex-col justify-end items-center pointer-events-none z-10 pb-[6vh] md:pb-0">

                <motion.div
                    className="relative w-full h-full flex items-end justify-center pb-0"
                /* Scroll effect removed */
                >

                    {/* === BACK LAYER: CHURCHES === 
                Changes: Adjusted positions to fill space as characters move in.
            */}
                    <div className="absolute bottom-0 left-0 w-full h-[60vh] flex items-end justify-between px-0 opacity-100 pointer-events-none z-10">

                        {/* LEFT SIDE CHURCHES */}
                        <div className="relative w-1/2 h-full">
                            {/* 1. Catedral (Biggest, Outermost) - Brought inside */}
                            <motion.img variants={subtleVariant} animate="animate" whileHover="hover" src={`${import.meta.env.BASE_URL}ELEMENTOS/CATEDRAL_Mesa de trabajo 1.webp`} className="absolute left-[0%] bottom-[8vh] md:bottom-[13vh] w-[35%] md:w-[22%] max-w-[300px] object-contain translate-y-4 pointer-events-auto cursor-pointer" alt="Catedral L" />
                            {/* 2. San Mateo */}
                            <motion.img variants={subtleVariant} animate="animate" whileHover="hover" src={`${import.meta.env.BASE_URL}ELEMENTOS/IGLESIA DE SAN MATEO_Mesa de trabajo 1.webp`} className="absolute left-[13%] bottom-[7vh] md:bottom-[12vh] w-[26%] md:w-[18%] max-w-[200px] object-contain translate-y-4 pointer-events-auto cursor-pointer" alt="San Mateo L" />
                            {/* 3. San Francisco */}
                            <motion.img variants={subtleVariant} animate="animate" whileHover="hover" src={`${import.meta.env.BASE_URL}ELEMENTOS/IGLESIA SAN FRANCISCO_Mesa de trabajo 1.webp`} className="absolute left-[25%] bottom-[6vh] md:bottom-[10vh] w-[22%] md:w-[16%] max-w-[170px] object-contain translate-y-4 pointer-events-auto cursor-pointer" alt="San Francisco L" />

                            {/* 4. Tequicorral - ENLARGED */}
                            <motion.img variants={subtleVariant} animate="animate" whileHover="hover" src={`${import.meta.env.BASE_URL}ELEMENTOS/IGLESIA DE TEQUICORRAL_Mesa de trabajo 1.webp`} className="absolute left-[36%] bottom-[5vh] md:bottom-[11vh] w-[24%] md:w-[14%] max-w-[180px] object-contain translate-y-4 pointer-events-auto cursor-pointer" alt="Tequicorral L" />
                            {/* 5. Santa Cruz - ENLARGED */}
                            <motion.img variants={subtleVariant} animate="animate" whileHover="hover" src={`${import.meta.env.BASE_URL}ELEMENTOS/IGLESIA DE SANTA CRUZ_Mesa de trabajo 1.webp`} className="absolute left-[46%] bottom-[4vh] md:bottom-[9vh] w-[22%] md:w-[15%] max-w-[180px] object-contain translate-y-4 pointer-events-auto cursor-pointer" alt="Santa Cruz L" />
                            {/* 6. San Antonio (Innermost) - SUPER ENLARGED & ADJUSTED */}
                            <motion.img variants={subtleVariant} animate="animate" whileHover="hover" src={`${import.meta.env.BASE_URL}ELEMENTOS/IGLESIA DE SAN ANTONIO_Mesa de trabajo 1.webp`} className="absolute left-[58%] bottom-[3vh] md:bottom-[7vh] w-[30%] md:w-[14%] max-w-[200px] object-contain translate-y-4 pointer-events-auto cursor-pointer" alt="San Antonio L" />
                        </div>

                        {/* RIGHT SIDE CHURCHES */}
                        <div className="relative w-1/2 h-full">
                            {/* 6. San Antonio - SUPER ENLARGED & MOVED */}
                            <motion.img variants={subtleVariant} animate="animate" whileHover="hover" src={`${import.meta.env.BASE_URL}ELEMENTOS/IGLESIA DE SAN ANTONIO_Mesa de trabajo 1.webp`} className="absolute right-[60%] bottom-[3vh] md:bottom-[7vh] w-[30%] md:w-[14%] max-w-[200px] object-contain translate-y-4 pointer-events-auto cursor-pointer" alt="San Antonio R" />
                            {/* 5. Santa Cruz - ENLARGED */}
                            <motion.img variants={subtleVariant} animate="animate" whileHover="hover" src={`${import.meta.env.BASE_URL}ELEMENTOS/IGLESIA DE SANTA CRUZ_Mesa de trabajo 1.webp`} className="absolute right-[46%] bottom-[4vh] md:bottom-[9vh] w-[22%] md:w-[15%] max-w-[180px] object-contain translate-y-4 pointer-events-auto cursor-pointer" alt="Santa Cruz R" />
                            {/* 4. Tequicorral - ENLARGED */}
                            <motion.img variants={subtleVariant} animate="animate" whileHover="hover" src={`${import.meta.env.BASE_URL}ELEMENTOS/IGLESIA DE TEQUICORRAL_Mesa de trabajo 1.webp`} className="absolute right-[36%] bottom-[5vh] md:bottom-[11vh] w-[24%] md:w-[14%] max-w-[180px] object-contain translate-y-4 pointer-events-auto cursor-pointer" alt="Tequicorral R" />

                            {/* 3. San Francisco */}
                            <motion.img variants={subtleVariant} animate="animate" whileHover="hover" src={`${import.meta.env.BASE_URL}ELEMENTOS/IGLESIA SAN FRANCISCO_Mesa de trabajo 1.webp`} className="absolute right-[25%] bottom-[6vh] md:bottom-[10vh] w-[22%] md:w-[16%] max-w-[170px] object-contain translate-y-4 pointer-events-auto cursor-pointer" alt="San Francisco R" />
                            {/* 2. San Mateo */}
                            <motion.img variants={subtleVariant} animate="animate" whileHover="hover" src={`${import.meta.env.BASE_URL}ELEMENTOS/IGLESIA DE SAN MATEO_Mesa de trabajo 1.webp`} className="absolute right-[13%] bottom-[7vh] md:bottom-[12vh] w-[26%] md:w-[18%] max-w-[200px] object-contain translate-y-4 pointer-events-auto cursor-pointer" alt="San Mateo R" />
                            {/* 1. Catedral (Biggest, Outermost) - Brought inside */}
                            <motion.img variants={subtleVariant} animate="animate" whileHover="hover" src={`${import.meta.env.BASE_URL}ELEMENTOS/CATEDRAL_Mesa de trabajo 1.webp`} className="absolute right-[0%] bottom-[8vh] md:bottom-[13vh] w-[35%] md:w-[22%] max-w-[300px] object-contain translate-y-4 pointer-events-auto cursor-pointer" alt="Catedral R" />
                        </div>
                    </div>

                    {/* === FRONT LAYER: CHARACTERS (Jaguar Lowered MORE) === */}
                    <motion.div
                        className="relative z-20 flex items-end justify-center w-full pb-2 md:pb-6"
                    /* scale effect removed */
                    >
                        {/* Nicolas Bravo (Left Layer) */}
                        <motion.img
                            variants={partyVariant}
                            animate="animate"
                            whileHover="hover"
                            src={`${import.meta.env.BASE_URL}ELEMENTOS/NICOLAS BRAVO_Mesa de trabajo 1.webp`}
                            className="h-[26vh] md:h-[42vh] object-contain drop-shadow-2xl z-20 origin-bottom -mr-[25%] md:-mr-[12%] translate-x-4 translate-y-6 md:translate-y-0"
                            alt="Nicolas Bravo"
                        />

                        {/* Escaramusa (Center Top Layer) */}
                        <motion.img
                            variants={partyVariant}
                            animate="animate"
                            whileHover="hover"
                            src={`${import.meta.env.BASE_URL}ELEMENTOS/ESCARAMUSA2_Mesa de trabajo 1.webp`}
                            className="h-[36vh] md:h-[58vh] object-contain drop-shadow-2xl z-30 origin-bottom translate-y-6"
                            alt="Escaramusa"
                        />

                        {/* Jaguar (Right Layer) - **LOWERED EVEN MORE** */}
                        {/* Changed translate-y-12 to translate-y-20 */}
                        <motion.img
                            variants={partyVariant}
                            animate="animate"
                            whileHover="hover"
                            src={`${import.meta.env.BASE_URL}ELEMENTOS/GUERRERO JAGUAR_Mesa de trabajo 1.webp`}
                            className="h-[29vh] md:h-[44vh] object-contain drop-shadow-2xl z-20 origin-bottom -ml-[25%] md:-ml-[12%] -translate-x-4 translate-y-16 md:translate-y-20"
                            alt="Jaguar"
                        />

                    </motion.div>

                </motion.div>

                {/* === THE ENVELOPE (White V-Shape Foreground) === */}
                <div className="absolute bottom-0 left-0 w-full z-40">
                    {/* The SVG Mask */}
                    <svg viewBox="0 0 1440 320" className="w-full h-[26vh] md:h-[30vh] block" preserveAspectRatio="none">
                        <path
                            fill="#ffffff"
                            fillOpacity="1"
                            d="M0,128L720,240L1440,128L1440,320L0,320Z"
                            className="drop-shadow-[0_-5px_15px_rgba(0,0,0,0.1)]"
                        ></path>
                    </svg>

                    {/* Institutional Logos (Centered on white) */}
                    <div className="absolute bottom-1 md:bottom-2 left-0 w-full flex justify-center items-center gap-4 md:gap-12 px-4 pb-2 z-50">
                        <img src={`${import.meta.env.BASE_URL}LOGOS/H AYUNTAMIENTO .webp`} className="h-5 md:h-10 object-contain" alt="Ayuntamiento" />
                        <img src={`${import.meta.env.BASE_URL}LOGOS/LOGO RENACE.webp`} className="h-4 md:h-8 object-contain" alt="Renace" />
                        <img src={`${import.meta.env.BASE_URL}LOGOS/CONSEJO LOGO.webp`} className="h-5 md:h-10 object-contain" alt="Consejo" />
                    </div>
                </div>

            </div>

        </section>
    );
}
