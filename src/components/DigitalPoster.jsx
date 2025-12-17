import React from 'react';
import { motion } from 'framer-motion';

export default function DigitalPoster() {
    const baseURL = import.meta.env.BASE_URL;

    // Variants for entrance animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="relative w-full min-h-[160vh] md:min-h-[180vh] bg-[#0a1529] overflow-hidden flex flex-col items-center justify-start py-0">

            {/* === BACKGROUND LAYER === */}

            {/* Grecas Left (Positioned strictly between churches) */}
            <div className="absolute left-[3%] top-[13%] bottom-[33%] flex flex-col justify-center opacity-100 z-10 w-[5%] md:w-[3%]">
                <img
                    src={`${baseURL}ELEMENTOS/GRECAS.webp`}
                    className="h-full w-full object-cover object-left"
                    alt="Grecas Left"
                />
            </div>

            {/* Grecas Right (Positioned strictly between churches) */}
            <div className="absolute right-[3%] top-[13%] bottom-[33%] flex flex-col justify-center opacity-100 z-10 w-[5%] md:w-[3%]">
                <img
                    src={`${baseURL}ELEMENTOS/GRECAS.webp`}
                    className="h-full w-full object-cover object-right transform scale-x-[-1]"
                    alt="Grecas Right"
                />
            </div>

            <motion.div
                className="relative w-full max-w-7xl h-full flex flex-col items-center justify-start z-20 mt-10 md:mt-20 scale-[0.9] md:scale-100 origin-top"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >

                {/* === CENTRAL FRAME (Blue Background Shape) === */}
                <div className="absolute top-[18%] left-[12%] md:left-[22%] w-[76%] md:w-[56%] h-[70%] bg-[#e0f2fe] rounded-t-[50%] rounded-b-[3rem] opacity-100 z-0 shadow-lg"></div>


                {/* === DECORATION: POINSETTIAS (Noche Buenas) === */}
                {/* Top of Blue Arch */}
                <img src={`${baseURL}ELEMENTOS/pascua_Mesa de trabajo 1.webp`} className="absolute top-[20%] left-[10%] md:left-[20%] w-[12%] md:w-[8%] object-contain z-50 -rotate-12" />
                <img src={`${baseURL}ELEMENTOS/pascua_Mesa de trabajo 1.webp`} className="absolute top-[20%] right-[10%] md:right-[20%] w-[12%] md:w-[8%] object-contain z-50 rotate-12 transform scale-x-[-1]" />

                {/* Mids */}
                <img src={`${baseURL}ELEMENTOS/pascua_Mesa de trabajo 1.webp`} className="absolute top-[50%] left-[8%] md:left-[18%] w-[10%] md:w-[7%] object-contain z-50 rotate-45" />
                <img src={`${baseURL}ELEMENTOS/pascua_Mesa de trabajo 1.webp`} className="absolute top-[50%] right-[8%] md:right-[18%] w-[10%] md:w-[7%] object-contain z-50 -rotate-45" />

                {/* Bottom Sides */}
                <img src={`${baseURL}ELEMENTOS/pascua_Mesa de trabajo 1.webp`} className="absolute bottom-[10%] left-[10%] md:left-[20%] w-[12%] md:w-[8%] object-contain z-50 -rotate-12" />
                <img src={`${baseURL}ELEMENTOS/pascua_Mesa de trabajo 1.webp`} className="absolute bottom-[10%] right-[10%] md:right-[20%] w-[12%] md:w-[8%] object-contain z-50 rotate-12" />


                {/* === BORDER CHURCHES (Encircled) === */}

                {/* Top Left Circle */}
                <div className="absolute top-[2%] left-[6%] md:left-[6%] w-[15%] md:w-[10%] aspect-square bg-white rounded-full flex items-center justify-center p-2 z-20 border-4 border-[#0a1529]/20 shadow-xl overflow-hidden">
                    <img src={`${baseURL}ELEMENTOS/IGLESIA DE SAN MATEO_Mesa de trabajo 1.webp`} className="w-[80%] object-contain mt-2" />
                </div>

                {/* Top Right Circle */}
                <div className="absolute top-[2%] right-[6%] md:right-[6%] w-[15%] md:w-[10%] aspect-square bg-white rounded-full flex items-center justify-center p-2 z-20 border-4 border-[#0a1529]/20 shadow-xl overflow-hidden">
                    <img src={`${baseURL}ELEMENTOS/IGLESIA DE SANTA CRUZ_Mesa de trabajo 1.webp`} className="w-[80%] object-contain mt-2" />
                </div>

                {/* Top Center Circle (Inverted Arch) */}
                <div className="absolute top-[-2%] w-[15%] md:w-[12%] aspect-square bg-white rounded-full flex items-end justify-center pb-2 z-20 border-4 border-[#0a1529]/20 shadow-xl overflow-hidden">
                    <img src={`${baseURL}ELEMENTOS/IGLESIA SAN FRANCISCO_Mesa de trabajo 1.webp`} className="w-[70%] object-contain" />
                </div>

                {/* Bottom Left Circle */}
                <div className="absolute bottom-[20%] left-[2%] md:left-[4%] w-[15%] md:w-[10%] aspect-square bg-white rounded-full flex items-center justify-center p-2 z-20 border-4 border-[#0a1529]/20 shadow-xl overflow-hidden">
                    <img src={`${baseURL}ELEMENTOS/IGLESIA DE TEQUICORRAL_Mesa de trabajo 1.webp`} className="w-[80%] object-contain mt-2" />
                </div>

                {/* Bottom Right Circle */}
                <div className="absolute bottom-[20%] right-[2%] md:right-[4%] w-[15%] md:w-[10%] aspect-square bg-white rounded-full flex items-center justify-center p-2 z-20 border-4 border-[#0a1529]/20 shadow-xl overflow-hidden">
                    <img src={`${baseURL}ELEMENTOS/IGLESIA DE SAN ANTONIO_Mesa de trabajo 1.webp`} className="w-[80%] object-contain mt-2" />
                </div>


                {/* === COMPOSITION LAYERS === */}

                {/* -- LAYER 1: CATEDRAL & SHIELD (Backdrop) -- */}
                <div className="relative w-full flex flex-col items-center justify-end z-10 mt-[12vh]">
                    {/* HUGE CATEDRAL CENTER */}
                    <img
                        src={`${baseURL}ELEMENTOS/CATEDRAL_Mesa de trabajo 1.webp`}
                        className="w-[80%] md:w-[50%] object-contain opacity-100 mb-[-10%]"
                    />

                    {/* SHIELD (On top of Catedral) */}
                    <motion.img
                        variants={itemVariants}
                        src={`${baseURL}LOGOS/logo_chilpancingo_bicentenario.webp`}
                        className="absolute top-[30%] w-[25%] md:w-[12%] object-contain z-20 drop-shadow-md"
                    />
                </div>


                {/* -- LAYER 2: CHARACTERS (Middle) -- */}
                <div className="relative w-full flex justify-center items-end z-20 mt-[-5%]">
                    {/* Nicolas Bravo */}
                    <img src={`${baseURL}ELEMENTOS/NICOLAS BRAVO_Mesa de trabajo 1.webp`} className="w-[28%] md:w-[18%] object-contain translate-x-[20%] z-10" />

                    {/* Escaramusa */}
                    <img src={`${baseURL}ELEMENTOS/ESCARAMUSA2_Mesa de trabajo 1.webp`} className="w-[22%] md:w-[15%] object-contain z-0 -translate-x-[5%] translate-y-[5%]" />

                    {/* Jaguar */}
                    <img src={`${baseURL}ELEMENTOS/GUERRERO JAGUAR_Mesa de trabajo 1.webp`} className="w-[30%] md:w-[20%] object-contain -translate-x-[20%] z-20" />
                </div>


                {/* -- LAYER 3: MASKS (The Cluster) -- */}
                <div className="relative w-full max-w-4xl h-[30vh] z-30 mt-[-5vh] flex justify-center">
                    {/* Central Big Masks */}
                    <img src={`${baseURL}ELEMENTOS/TLACOLOLERO_Mesa de trabajo 1.webp`} className="absolute top-0 left-[35%] w-[18%] md:w-[13%] z-20" />
                    <img src={`${baseURL}ELEMENTOS/DIABLO_Mesa de trabajo 1.webp`} className="absolute top-[5%] right-[32%] w-[16%] md:w-[11%] z-10" />

                    {/* Flanking Masks */}
                    <img src={`${baseURL}ELEMENTOS/TIGRE_Mesa de trabajo 1.webp`} className="absolute top-[-10%] left-[15%] w-[14%] md:w-[10%] -rotate-12 z-0" />
                    <img src={`${baseURL}ELEMENTOS/DIABLOS NEGROS_Mesa de trabajo 1.webp`} className="absolute top-[-5%] right-[15%] w-[14%] md:w-[10%] rotate-12 z-0" />

                    {/* Lower Masks (Sitting on the Ring) */}
                    <img src={`${baseURL}ELEMENTOS/MORO_Mesa de trabajo 1.webp`} className="absolute bottom-[20%] left-[38%] w-[12%] md:w-[9%] z-30" />
                    <img src={`${baseURL}ELEMENTOS/DIABLA_Mesa de trabajo 1.webp`} className="absolute bottom-[25%] right-[38%] w-[11%] md:w-[8%] z-30" />
                </div>


                {/* -- LAYER 4: PLAZA DE TOROS (The Base) -- */}
                <div className="relative w-full flex justify-center z-40 mt-[-20vh] md:mt-[-25vh]">
                    <img src={`${baseURL}ELEMENTOS/PLAZA DE TOROS_Mesa de trabajo 1.webp`} className="w-[85%] md:w-[50%] object-contain drop-shadow-2xl brightness-110" />
                </div>


                {/* -- LAYER 5: TYPOGRAPHY (Overlays Plaza) -- */}
                <div className="relative w-full flex flex-col items-center justify-center z-50 mt-[-15vh] md:mt-[-25vh]">
                    {/* 200 Años - HUGE */}
                    <motion.img
                        variants={itemVariants}
                        src={`${baseURL}LOGOS/200.webp`}
                        className="w-[80%] md:w-[45%] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                    />
                    {/* Chilpancingo Logo */}
                    <motion.img
                        src={`${baseURL}LOGOS/CHILPANCINGO.webp`}
                        className="w-[50%] md:w-[25%] object-contain -mt-8 md:-mt-16 drop-shadow-lg"
                    />

                    {/* Logos Footer */}
                    <div className="flex justify-center items-center gap-4 md:gap-10 mt-8">
                        <img src={`${baseURL}LOGOS/H AYUNTAMIENTO .webp`} className="h-6 md:h-10 object-contain" />
                        <img src={`${baseURL}LOGOS/LOGO RENACE.webp`} className="h-6 md:h-10 object-contain" />
                        <img src={`${baseURL}LOGOS/CONSEJO LOGO.webp`} className="h-6 md:h-10 object-contain" />
                    </div>
                </div>

            </motion.div>
        </section>
    );
}
