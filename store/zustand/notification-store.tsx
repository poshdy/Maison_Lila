import { create } from "zustand";

interface useNoticationModel {
  isOpen: boolean;
  message: string;
  title: string;
  location: string;
  Display: (title: string, message: string, location: string) => void;
  Close: () => void;
}

export const useNoticationModel = create<useNoticationModel>((set) => ({
  isOpen: false,
  title: "",
  message: "",
  location: "",
  Display: (title, message,location) => set({ isOpen: true, title, message, location }),
  Close: () => set({ isOpen: false }),
}));
