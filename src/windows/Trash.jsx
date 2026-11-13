import React from "react";
import { WindowControls } from "#components";
import WindowWrapper from "../hoc/WindowWrapper";
import { useWindowStore } from "../store/window";
import { educationEntries } from "#constants";

const Trash = () => {
  const { windows } = useWindowStore();
  const trashWindow = windows?.trash;

  if (!trashWindow?.isOpen) return null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="trash" />
        <h2>Education</h2>
      </div>

      <div className="p-5 space-y-5 bg-white overflow-y-auto h-full">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-800">Education</h3>

          {educationEntries.map(({ id, course, institution, period, location, status }) => (
            <div key={id} className="rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm">
              <h4 className="text-base font-semibold text-gray-900">{course}</h4>
              <p className="mt-2 text-sm text-gray-700">{institution}</p>

              <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px] text-gray-500">
                <span>{period}</span>
                <span>{location}</span>
                {status && (
                  <span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
                    {status}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const TrashWindow = WindowWrapper(Trash, "trash");

export default TrashWindow;
