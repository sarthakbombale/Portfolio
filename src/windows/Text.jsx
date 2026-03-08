import React from "react";
import { WindowControls } from "#components";
import WindowWrapper from "../hoc/WindowWrapper";
import { useWindowStore } from "../store/window";

const Text = () => {
    // 1. Destructure 'windows' from the store state
    const { windows } = useWindowStore();
    
    // 2. Access the 'txtfile' data specifically from the 'windows' object
    // Note: Changed from 'texfile' to 'txtfile' to match your WINDOW_CONFIG
    const data = windows?.txtfile?.data;

    if (!data) return null;

    const { name, image, subtitle, description } = data;

    return (
        <>
            <div className="window-header">
                <WindowControls target="txtfile" />
                <h2>{name}</h2>
            </div>

            <div className="p-5 space-y-6 bg-white overflow-y-auto h-full">
                {image ? (
                    <div className="w-full">
                        <img src={image} alt={name} className="w-full h-auto rounded" />
                    </div>
                ) : null}
                
                {subtitle ? <h3 className="text-lg font-semibold">{subtitle}</h3> : null}

                {/* 3. Fixed the map logic: description must be mapped to display text */}
                {Array.isArray(description) && description.length > 0 ? (
                    <div className="space-y-3 leading-relaxed text-base text-gray-800">
                        {description.map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </div>
                ) : null}
            </div>
        </>
    );
};

// Target must match 'txtfile' for the WindowWrapper to sync with the store
const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;