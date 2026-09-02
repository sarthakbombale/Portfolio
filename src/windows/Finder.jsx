import React from "react";
import { WindowControls } from "#components";
import clsx from "clsx";
import { Search } from "lucide-react";
import WindowWrapper from "../hoc/WindowWrapper";
import useLocationStore from "../store/location";
import { useWindowStore } from "../store/window"; // FIX: Import the store where openWindow lives
import { locations } from "../constants";

const Finder = () => {
  // FIX: Pull openWindow from useWindowStore
  const { openWindow } = useWindowStore(); 
  const { activeLocation, setActiveLocation } = useLocationStore();

  const openItem = (item) => {
    if (item.fileType === 'pdf') return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    
    if (['fig', 'url'].includes(item.fileType) && item.href) {
      return window.open(item.href, "_blank");
    }

    if (item.fileType === 'txt') {
      openWindow("txtfile", item); 
    }
  };

  const renderList = (name, items) => {
    if (!items || !Array.isArray(items)) return null;

    return (
      <div className="mb-4">
        <h3>{name}</h3>
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              onClick={() => setActiveLocation(item)}
              className={clsx(
                "flex items-center gap-2 p-1 cursor-pointer rounded",
                item.id === activeLocation?.id ? "active bg-blue-100" : "not-active"
              )}
            >
              <img src={item.icon} className="w-4 h-4 object-contain" alt={item.name} />
              <p className="text-sm font-medium truncate">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon w-4 h-4" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          {renderList("Favourite", Object.values(locations || {}))}
          {renderList("Work", locations?.work?.children)}
        </div>

        {/* Note: 'relative' and 'absolute' are required for item.position to work */}
        <ul className="content relative flex-1">
          {activeLocation?.children?.map((item) => (
            <li 
              key={item.id} 
              className={clsx("absolute", item.position)} 
              onClick={() => openItem(item)}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default WindowWrapper(Finder, "finder");