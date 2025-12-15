import React from 'react';
import { MapPin } from 'lucide-react';

export default function MapSection() {
    return (
        <section id="location" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-4xl font-serif text-feria-blue">Ubicación y Sedes</h2>
                        <div className="h-1 w-20 bg-feria-gold"></div>
                        <p className="text-gray-600 text-lg">
                            La Feria se lleva a cabo en el Recinto Ferial de Chilpancingo, con eventos satélite en los barrios tradicionales y el centro histórico.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                                <div className="bg-feria-blue text-white p-3 rounded-full">
                                    <MapPin />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Recinto Ferial</h4>
                                    <p className="text-sm text-gray-500">Colonia Los Ángeles, Zona Oriente</p>
                                </div>
                            </li>
                            <li className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                                <div className="bg-feria-gold text-white p-3 rounded-full">
                                    <MapPin />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Plaza de Toros Belisario Arteaga</h4>
                                    <p className="text-sm text-gray-500">Eventos Masivos y Jaripeo</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/2 h-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg relative">
                        {/* Embedded Map Placeholder */}
                        <iframe
                            title="Mapa Chilpancingo"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.312961808092!2d-99.4993!3d17.5506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDMzJzAyLjIiTiA5OcKwMjknNTcuNSJX!5e0!3m2!1ses-419!2smx!4v1634567890123!5m2!1ses-419!2smx"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>

                        <div className="absolute inset-0 bg-feria-blue/10 pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
