import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function InfoModal({ selectedElement, onClose }) {
    if (!selectedElement) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />

                <motion.div
                    layoutId={`card-${selectedElement.id}`}
                    className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row"
                >
                    {/* Image Section */}
                    <div className="w-full md:w-1/2 bg-gray-100 p-8 flex items-center justify-center relative">
                        <motion.img
                            layoutId={`image-${selectedElement.id}`}
                            src={selectedElement.image}
                            alt={selectedElement.title}
                            className="max-w-full max-h-[60vh] object-contain drop-shadow-xl"
                        />
                        <button
                            onClick={onClose}
                            className="absolute top-4 left-4 md:hidden bg-white/20 p-2 rounded-full text-feria-blue"
                        >
                            <X />
                        </button>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2 p-8 overflow-y-auto">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-feria-blue mb-2">{selectedElement.title}</h2>
                                <span className="inline-block bg-feria-gold/20 text-feria-blue px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                                    {selectedElement.category || 'Tradición'}
                                </span>
                            </div>
                            <button onClick={onClose} className="hidden md:block text-gray-400 hover:text-feria-blue transition-colors">
                                <X size={28} />
                            </button>
                        </div>

                        <div className="prose prose-sm prose-slate mb-6">
                            <p className="text-lg leading-relaxed text-gray-600">
                                {selectedElement.description || "Este elemento representa una parte fundamental de la historia y tradición de la Feria de San Mateo. Su presencia evoca memorias de antaño y celebra la identidad cultural de Chilpancingo."}
                            </p>
                        </div>

                        {/* Gallery or Fun Facts Placeholder */}
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                            <h4 className="font-bold text-feria-blue mb-2">¿Sabías que?</h4>
                            <p className="text-sm text-gray-500">
                                La tradición cuenta que este elemento ha estado presente en la feria desde sus inicios, evolucionando con el tiempo pero manteniendo su esencia.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
