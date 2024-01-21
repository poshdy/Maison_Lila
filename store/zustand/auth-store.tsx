import { create } from "zustand";

interface useAuthModel {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useAuthModel = create<useAuthModel>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
