import { create } from "zustand";

interface Alert {
  Show: boolean;
  message: string;
  title: string;
  Display: (title: string, message: string) => void;
  Hide: () => void;
}

export const useAlert = create<Alert>((set) => ({
  Show: false,
  title: "",
  message: "",
  Display: (title, message) => set({ Show: true, title, message }),
  Hide: () => set({ Show: false }),
}));
