import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import PosterGallery from '../components/PosterGallery';
import Timeline from '../components/Timeline';
import EventCalendar from '../components/EventCalendar';
import MapSection from '../components/MapSection';

export default function Home() {
    const location = useLocation();

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
        }
    }, [location]);

    return (
        <div className="min-h-screen flex flex-col relative bg-slate-50 font-sans">
            <Header />
            <main className="flex-grow">
                <Hero />

                {/* Content Wrapper for Sticky Reveal Effect */}
                <div className="relative z-10 bg-slate-50">
                    <PosterGallery />
                    <Timeline />
                    <EventCalendar />
                    <MapSection />
                </div>
            </main>
            <Footer />
        </div>
    );
}
