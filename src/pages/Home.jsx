import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import DigitalPoster from '../components/DigitalPoster';
import ElementsGrid from '../components/ElementsGrid';
import Timeline from '../components/Timeline';
import EventCalendar from '../components/EventCalendar';
import MapSection from '../components/MapSection';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col relative bg-slate-50 font-sans">
            <Header />
            <main className="flex-grow">
                <Hero />

                {/* Content Wrapper for Sticky Reveal Effect */}
                <div className="relative z-10 bg-slate-50">
                    <DigitalPoster />
                    <ElementsGrid />
                    <Timeline />
                    <EventCalendar />
                    <MapSection />
                </div>
            </main>
            <Footer />
        </div>
    );
}
