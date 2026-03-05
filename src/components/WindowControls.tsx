import React from 'react';
import { useWindowStore } from "../store/window";

interface WindowControlsProps {
  target: string;
}

const WindowControls: React.FC<WindowControlsProps> = ({ target }) => {
  const { closeWindow } = useWindowStore();

  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)} />
      <div className="minimize" onClick={() => closeWindow(target)} />
      <div className="maximize" />
    </div>
  );
};

export default WindowControls;