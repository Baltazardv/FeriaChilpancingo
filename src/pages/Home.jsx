import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import PosterSection from '../components/PosterSection';
import ElementsGrid from '../components/ElementsGrid';
import Timeline from '../components/Timeline';
import EventCalendar from '../components/EventCalendar';
import MapSection from '../components/MapSection';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden bg-slate-50 font-sans">
            <Header />
            <main className="flex-grow">
                <Hero />
                <PosterSection />
                <ElementsGrid />
                <Timeline />
                <EventCalendar />
                <MapSection />
            </main>
            <Footer />
        </div>
    );
}
