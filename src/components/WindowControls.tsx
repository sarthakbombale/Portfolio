import React from 'react';
import { useWindowStore } from "../store/window";

interface WindowControlsProps {
  target?: string; // Change to optional with '?'
}

// Add = {} to ensure props is never undefined
const WindowControls: React.FC<WindowControlsProps> = ({ target = "" }) => {
  const { closeWindow } = useWindowStore();

  const handleAction = () => {
    if (target) {
      closeWindow(target);
    }
  };

  return (
    <div id="window-controls">
      <div className="close" onClick={handleAction} />
      <div className="minimize" onClick={handleAction} />
      <div className="maximize" />
    </div>
  );
};

export default WindowControls;