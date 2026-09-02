import React, { useRef } from 'react'
import { dockApps } from '../constants';
import { Tooltip } from 'react-tooltip'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useWindowStore } from '../store/window';

const Dock: React.FC = () => {
    const { openWindow, closeWindow, windows } = useWindowStore();
    const dockRef = useRef<HTMLDivElement>(null);

    // FIX 1: Simplify the toggle logic to ensure the store is the single source of truth
    const toggleApp = (id: string, canOpen: boolean) => {
        if (!canOpen) return;

        const win = windows[id];

        if (win?.isOpen) {
            closeWindow(id);
        } else {
            openWindow(id);
        }
    };

    // ... (GSAP logic remains the same)

    return (
        <section id='dock' className="fixed bottom-2 w-full flex justify-center z-50">
            <div
                ref={dockRef}
                className='dock-container flex items-end gap-2 px-4 py-2 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20'
            >
                {dockApps.map(({ id, name, icon, canOpen }) => (
                    <div key={id} className='relative flex justify-center'>
                        <button
                            type='button'
                            className='dock-icon outline-none transition-none'
                            aria-label={name}
                            data-tooltip-id='dock-tooltip'
                            data-tooltip-content={name}
                            // FIX 2: Instead of 'disabled', use pointer-events-none on the image 
                            // to keep the button reachable for the tooltip but prevent clicks
                            onClick={() => toggleApp(id, canOpen)}
                        >
                            <img
                                src={`/images/${icon}`}
                                alt={name}
                                loading="lazy"
                                // FIX 3: Ensure 'h-12' and 'w-12' are strict to prevent GSAP jumpiness
                                className={`w-12 h-12 object-contain pointer-events-none transition-opacity duration-300 ${
                                    canOpen ? "opacity-100" : "opacity-40 grayscale"
                                }`}
                            />
                            
                            {/* FIX 4: Visual Indicator for Open Apps (The 'Mac Dot') */}
                            {windows[id]?.isOpen && (
                                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full shadow-sm" />
                            )}
                        </button>
                    </div>
                ))}
                <Tooltip id="dock-tooltip" place='top' className='tooltip' />
            </div>
        </section>
    );
};

export default Dock;