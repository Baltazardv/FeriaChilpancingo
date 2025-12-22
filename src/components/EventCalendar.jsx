import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const events = [
    { date: '21 Dic', title: 'Paseo del Pendón', location: 'Calles Principales', time: '10:00 AM', type: 'Tradición' },
    { date: '24 Dic', title: 'Cena de Navidad', location: 'Recinto Ferial', time: '08:00 PM', type: 'Familiar' },
    { date: '25 Dic', title: 'Danza de Tlacololeros', location: 'Plaza de Toros', time: '12:00 PM', type: 'Danza' },
    { date: '31 Dic', title: 'Gran Baile de Fin de Año', location: 'Teatro del Pueblo', time: '09:00 PM', type: 'Música' },
    { date: '1 Ene', title: 'Jaripeo de Año Nuevo', location: 'Plaza de Toros', time: '04:00 PM', type: 'Jaripeo' },
    { date: '6 Ene', title: 'Clausura', location: 'Recinto Ferial', time: '06:00 PM', type: 'Ceremonia' },
];

export default function EventCalendar() {
    return (
        <section id="program" className="py-20 bg-gray-50 relative">
            {/* Top Decoration */}
            <div className="flex justify-center w-full mb-8 pointer-events-none relative z-20 opacity-80">
                <img src={`${import.meta.env.BASE_URL}ELEMENTOS/Recurso 4.webp`} alt="Decoración" className="w-24 md:w-32" />
            </div>

            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-serif text-center mb-12 text-feria-blue">Programa Oficial</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow border-l-4 border-feria-blue hover:border-feria-gold group">
                            <div className="flex justify-between items-start mb-4">
                                <div className="bg-feria-blue text-white px-3 py-1 rounded-lg text-center min-w-[60px]">
                                    <span className="block text-xs font-bold uppercase">{event.date.split(' ')[1]}</span>
                                    <span className="block text-xl font-bold">{event.date.split(' ')[0]}</span>
                                </div>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{event.type}</span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-feria-blue transition-colors">{event.title}</h3>

                            <div className="space-y-2 text-sm text-gray-500">
                                <div className="flex items-center space-x-2">
                                    <Clock size={16} className="text-feria-gold" />
                                    <span>{event.time}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <MapPin size={16} className="text-feria-gold" />
                                    <span>{event.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>

            {/* Bottom Decoration */}
            <div className="flex justify-center w-full mt-8 pointer-events-none relative z-20 opacity-80">
                <img src={`${import.meta.env.BASE_URL}ELEMENTOS/Recurso 4.webp`} alt="Decoración" className="w-24 md:w-32" />
            </div>
        </section>
    );
}
