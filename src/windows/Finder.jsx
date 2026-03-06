import React from "react";
import { WindowControls } from "#components";
import clsx from "clsx";
import { Search } from "lucide-react";
import WindowWrapper from "../hoc/WindowWrapper";
import useLocationStore from "../store/location";
import { locations } from "../constants";

const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();

  const renderList = (items) => {
    if (!items || !Array.isArray(items)) return null;

    return items.map((item) => (
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
    ));
  };

  return (
    <>
      <div id="window-header" className="flex items-center justify-between p-2">
        <WindowControls target="finder" />
        <Search className="icon w-4 h-4" />
      </div>

      <div className="bg-white flex h-full border-t">
        <div className="sidebar w-48 border-r p-4 overflow-y-auto">
          <div className="mb-4">
            <h3 className="text-xs font-bold text-gray-500 uppercase mb-2">Favourite</h3>
            <ul>
              {locations ? renderList(Object.values(locations)) : null}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-500 uppercase mb-2">Work</h3>
            <ul>
              {renderList(locations?.work?.children)}
            </ul>
          </div>
        </div>

        <div className="flex-1 p-4">
            {activeLocation ? (
                <div>
                    <h1 className="text-xl font-bold">{activeLocation.name}</h1>
                    <p className="text-gray-600">Type: {activeLocation.kind}</p>
                </div>
            ) : (
                <p className="text-gray-400 text-sm">Select a location to view details</p>
            )}
        </div>
      </div>
    </>
  );
};

export default WindowWrapper(Finder, "finder");

// 2:29:36