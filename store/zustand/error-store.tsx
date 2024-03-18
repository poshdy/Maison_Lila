import { create } from "zustand";

interface ErrorModal {
  isOpen: boolean;
  message: string;
  title: string;
  Display: (title: string, message: string) => void;
  Close: () => void;
}

export const useErrorModel = create<ErrorModal>((set) => ({
  isOpen: false,
  title: "",
  message: "",
  Display: (title, message) => set({ isOpen: true, title, message }),
  Close: () => set({ isOpen: false }),
}));
