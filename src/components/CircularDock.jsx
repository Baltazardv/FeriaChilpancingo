import React from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import './Dock.css';

const ITEM_WIDTH = 60;
const DRAG_FACTOR = 0.4;

export default function CircularDock({ items, className = '' }) {
    const numItems = items.length;
    const radius = 150;
    const angleStep = 360 / numItems;

    // Rotation Motion Value (High Performance)
    const rotation = useMotionValue(0);

    const handleDragEnd = (_, info) => {
        const velocity = info.velocity.x;
        const currentRotation = rotation.get();
        // Estimate final rotation with inertia
        const predictedRotation = currentRotation + (velocity * 0.3);

        // Snap to nearest item
        const snapIndex = Math.round(predictedRotation / angleStep);
        const snappedRotation = snapIndex * angleStep;

        animate(rotation, snappedRotation, {
            type: "spring",
            stiffness: 50,
            damping: 15,
            mass: 0.8
        });
    };

    return (
        <div className={`relative h-48 w-full flex items-center justify-center perspective-1000 overflow-hidden ${className}`}>

            {/* Draggable Container - Acts as the gesture surface */}
            <motion.div
                className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }} // Keep visually centered, just read delta
                dragElastic={0} // No visual movement of drag container itself
                onDrag={(_, info) => {
                    // Update rotation directly
                    rotation.set(rotation.get() + info.delta.x * DRAG_FACTOR);
                }}
                onDragEnd={handleDragEnd}
                style={{ touchAction: 'pan-y' }} // Allow vertical scrolling, capture horizontal
            >
                {/* 3D Scene - Rotates based on motion value */}
                <motion.div
                    className="relative w-0 h-0 preserve-3d"
                    style={{ rotateY: rotation }}
                >
                    {items.map((item, index) => {
                        const angle = index * angleStep;
                        return (
                            <div
                                key={index}
                                className="absolute flex flex-col items-center justify-center backface-visible"
                                style={{
                                    width: ITEM_WIDTH,
                                    height: ITEM_WIDTH,
                                    // Position in 3D circle
                                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                    // Adjust origin to center of item
                                    marginLeft: -ITEM_WIDTH / 2,
                                    marginTop: -ITEM_WIDTH / 2,
                                }}
                                onClick={(e) => {
                                    // Normally drag prevents click, but if it's a tap, this fires.
                                    item.onClick(e);
                                }}
                            >
                                <DockItemContent item={item} />
                            </div>
                        );
                    })}
                </motion.div>
            </motion.div>

            {/* Visual Floor / Stage (Optional) */}
            <div className="absolute bottom-4 w-32 h-1 bg-amber-500/30 rounded-full blur-md pointer-events-none"></div>
        </div>
    );
}

function DockItemContent({ item }) {
    return (
        <div className="flex flex-col items-center justify-center group">
            <div className="w-14 h-14 bg-black/40 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:bg-amber-500/20 group-hover:border-amber-500/50 transition-colors cursor-pointer hover:scale-110 duration-200">
                <div className="text-white group-hover:text-amber-400 transition-colors">
                    {item.icon}
                </div>
            </div>
            <span className="text-[9px] text-white/70 mt-2 uppercase tracking-widest font-bold bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/5">
                {item.label}
            </span>
        </div>
    );
}
