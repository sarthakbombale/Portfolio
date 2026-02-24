import React from 'react';
import { useWindowStore } from '../store/window';

const WindowWrapper: React.FC = () => {
    // 1. Grab the windows and the focus action from the store
    const { windows, focusWindow, closeWindow } = useWindowStore();

    return (
        <div id="window-wrapper" className="fixed inset-0 pointer-events-none z-40">
            {Object.entries(windows).map(([id, win]) => {
                // 2. Only render if the window is open
                if (!win.isOpen) return null;

                return (
                    <div
                        key={id}
                        className="absolute pointer-events-auto"
                        style={{ zIndex: win.zIndex }}
                        onMouseDown={() => focusWindow(id)} // Focus on click
                    >
                        {/* 3. This is where your actual Window component goes */}
                        <div className="window-content bg-white shadow-2xl rounded-lg border border-gray-200 min-w-[300px] min-h-[200px]">
                            <div className="window-header flex justify-between p-2 bg-gray-100 rounded-t-lg">
                                <span>{id.toUpperCase()}</span>
                                <button onClick={() => closeWindow(id)} className="text-red-500">
                                    ✕
                                </button>
                            </div>
                            <div className="p-4">
                                Content for {id} goes here.
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default WindowWrapper;