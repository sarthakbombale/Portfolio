"use client";

import React, { useRef, useLayoutEffect } from "react";
import { useGSAP } from "@gsap/react";
import { useWindowStore } from "../store/window";
import { gsap } from "gsap"; // Use curly braces for consistency
import { Draggable } from "gsap/dist/Draggable"; // Use the 'dist' path for better compatibility

// IMPORTANT: Register the plugin here, outside the component
if (typeof window !== "undefined") {
    gsap.registerPlugin(Draggable);
}

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const currentWindow = windows[windowKey];

        if (!currentWindow) return null;

        const { isOpen, zIndex } = currentWindow;
        const ref = useRef(null);

        // 1. Entrance Animation
        useGSAP(() => {
            if (isOpen && ref.current) {
                gsap.fromTo(
                    ref.current,
                    { scale: 0.8, opacity: 0, y: 40 },
                    { 
                        scale: 1, 
                        opacity: 1, 
                        y: 0, 
                        duration: 0.4, 
                        ease: "power3.out" 
                    }
                );
            }
        }, [isOpen]);

        // 2. Draggable Logic
        useGSAP(() => {
            const el = ref.current;
            if (!el) return;

            // Create Draggable and store the instance
            const [instance] = Draggable.create(el, { 
                onPress: () => focusWindow(windowKey),
                bounds: "body", // Optional: keeps window from leaving the screen
                inertia: true,  // Optional: adds smooth sliding
            });

            // Cleanup: kill the draggable when component unmounts
            return () => instance.kill();
        }, []); 

        useLayoutEffect(() => {
            if (ref.current) {
                ref.current.style.display = isOpen ? "block" : "none";
            }
        }, [isOpen]);

        return (
            <section
                id={windowKey}
                ref={ref}
                style={{
                    zIndex,
                    display: isOpen ? "block" : "none",
                    position: "absolute"
                }}
                className="absolute"
            >
                <Component {...props} />
            </section>
        );
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;
    return Wrapped;
};

export default WindowWrapper;