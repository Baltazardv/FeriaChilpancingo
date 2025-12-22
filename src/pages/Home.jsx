import React, { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import PosterGallery from '../components/PosterGallery';
import Timeline from '../components/Timeline';
import HistoricalGallery from '../components/HistoricalGallery';
import VideoSection from '../components/VideoSection';
import EventCalendar from '../components/EventCalendar';
import MapSection from '../components/MapSection';

// Helper component to frame sections with Recurso 4
const SectionWrapper = ({ children }) => (
    <div className="relative">
        {/* Top Decoration */}
        <div className="flex justify-center py-4 pointer-events-none relative z-10 opacity-90">
            <img src={`${import.meta.env.BASE_URL}ELEMENTOS/Recurso 4.webp`} alt="Decoración" className="w-24 md:w-32" />
        </div>

        {children}

        {/* Bottom Decoration */}
        <div className="flex justify-center py-4 pointer-events-none relative z-10 opacity-90">
            <img src={`${import.meta.env.BASE_URL}ELEMENTOS/Recurso 4.webp`} alt="Decoración" className="w-24 md:w-32" />
        </div>
    </div>
);

export default function Home() {
    const location = useLocation();

    // Use useLayoutEffect to fix scroll freeze issues immediately before paint
    useLayoutEffect(() => {
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
        document.body.style.position = 'static'; // Ensure body isn't fixed
    }, []);

    useEffect(() => {
        if (location.hash) {
            const targetId = location.hash.replace('#', '');
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }, 100);
        } else {
            // Redundant safeguard
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="min-h-screen flex flex-col relative bg-slate-50 font-sans">
            <Header />
            <main className="flex-grow">
                <Hero />

                {/* Content Wrapper for Sticky Reveal Effect */}
                <div className="relative z-10 bg-slate-50">
                    {/* Global Grecas Borders (Exclude Hero/Header/Footer) - z-1 to show over backgrounds but under content */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 md:w-12 bg-contain bg-repeat-y opacity-30 z-1 pointer-events-none" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}ELEMENTOS/GRECAS.webp)` }}></div>
                    <div className="absolute right-0 top-0 bottom-0 w-8 md:w-12 bg-contain bg-repeat-y opacity-30 z-1 pointer-events-none" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}ELEMENTOS/GRECAS.webp)` }}></div>

                    <SectionWrapper>
                        <PosterGallery />
                    </SectionWrapper>

                    <SectionWrapper>
                        <Timeline />
                    </SectionWrapper>

                    <SectionWrapper>
                        <HistoricalGallery />
                    </SectionWrapper>

                    <SectionWrapper>
                        <VideoSection />
                    </SectionWrapper>

                    <SectionWrapper>
                        <EventCalendar />
                    </SectionWrapper>

                    <SectionWrapper>
                        <MapSection />
                    </SectionWrapper>
                </div>
            </main>
            <Footer />
        </div>
    );
}
