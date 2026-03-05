"use client"; // Required because we use hooks (useRef, useWindowStore)
import { useWindowStore } from "../store/window"

// Standard Next.js alias
import { useRef } from "react";

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        // 1. Get state from your Zustand/Store
        const { focusWindow, windows } = useWindowStore(); 
        
        // 2. Access the specific window data (Fixing the 'opern' typo)
        const currentWindow = windows[windowKey];
        const { isOpen, zIndex } = currentWindow; // zIndex must come from the store

        const ref = useRef(null);

        // 3. Don't render anything if the window is closed
        if (!isOpen) return null;

        return (
            <section 
                id={windowKey} 
                ref={ref} 
                style={{ zIndex }} 
                className="absolute"
                onMouseDown={() => focusWindow(windowKey)} // Focus when clicked
            >
                <Component {...props} />
            </section>
        );
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

    return Wrapped;
};

// 4. Export the function directly, not inside an object
export default WindowWrapper;