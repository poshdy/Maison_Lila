import { create } from "zustand";

interface useNoticationModel {
  isOpen: boolean;
  message: string;
  title: string;
  onOpen: (message: string, title: string) => void;
  onClose: () => void;
}

export const useNoticationModel = create<useNoticationModel>((set) => ({
  isOpen: false,
  title: "",
  message: "",
  onOpen: (title, message) =>
    set({ isOpen: true, message: message, title: title }),
  onClose: () => set({ isOpen: false }),
}));
