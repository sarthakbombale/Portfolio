import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "../constants";

// 1. Define the shape of an individual Window
interface WindowState {
  isOpen: boolean;
  zIndex: number;
  data: any;
  // add other properties from your WINDOW_CONFIG if necessary (e.g., title, icon)
}

// 2. Define the Store's State and Actions
interface WindowStore {
  windows: Record<string, WindowState>;
  nextZIndex: number;
  openWindow: (windowKey: string, data?: any) => void;
  closeWindow: (windowKey: string) => void;
  focusWindow: (windowKey: string) => void;
}

export const useWindowStore = create<WindowStore>()(
  immer((set) => ({
    // State
    windows: WINDOW_CONFIG as Record<string, WindowState>,
    nextZIndex: INITIAL_Z_INDEX + 1,

    // Actions
    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex++;
      }),

    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),

    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        win.zIndex = state.nextZIndex;
        state.nextZIndex++;
      }),
  }))
);
