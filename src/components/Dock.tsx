import React, { useRef } from 'react'
import { dockApps } from '../constants';
import { Tooltip } from 'react-tooltip'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Dock: React.FC = () => {
    const dockRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const dock = dockRef.current;
        if (!dock) return;

        const icons = gsap.utils.toArray<HTMLElement>(".dock-icon");

        const animateIcons = (mouseX: number) => {
            const { left: dockLeft } = dock.getBoundingClientRect();

            icons.forEach((icon) => {
                const { left: iconLeft, width } = icon.getBoundingClientRect();
                const center = (iconLeft - dockLeft) + width / 2;
                const distance = Math.abs(mouseX - center);
                const intensity = Math.exp(-(distance ** 2.5) / 2000);

                gsap.to(icon, {
                    scale: 1 + 0.25 * intensity,
                    y: -15 * intensity,
                    duration: 0.2,
                    ease: "power1.out",
                });
            });
        };

        const handleMouseEnter = (e: Event) => {
            const target = e.currentTarget as HTMLElement;

            // Hover bounce
            gsap.to(target, {
                y: 0,
                duration: 0.3,
                ease: "power1.out"
            });
        };

        const handleMouseMove = (e: MouseEvent) => {
            const { left } = dock.getBoundingClientRect();
            animateIcons(e.clientX - left);
        };

        const handleMouseLeave = () => {
            gsap.to(icons, {
                scale: 1,
                y: 0,
                duration: 0.3,
                ease: "power1.out"
            });
        };

        icons.forEach(icon => {
            icon.addEventListener("mouseenter", handleMouseEnter);
        });

        dock.addEventListener("mousemove", handleMouseMove);
        dock.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            icons.forEach(icon => {
                icon.removeEventListener("mouseenter", handleMouseEnter);
            });
            dock.removeEventListener("mousemove", handleMouseMove);
            dock.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, { scope: dockRef });

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
                            className='dock-icon outline-none'
                            aria-label={name}
                            data-tooltip-id='dock-tooltip'
                            data-tooltip-content={name}
                            disabled={!canOpen}
                        >
                            <img
                                src={`/images/${icon}`}
                                alt={name}
                                loading="lazy"
                                className={`w-12 h-12 object-contain pointer-events-none ${canOpen ? "" : "opacity-40 grayscale"}`}
                            />
                        </button>
                    </div>
                ))}
                <Tooltip id="dock-tooltip" place='top' className='tooltip' />
            </div>
        </section>
    )
}

export default Dock;