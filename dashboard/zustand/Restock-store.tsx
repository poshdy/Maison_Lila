import { BASE_URL } from "@/constants";
import axios from "axios";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface RestockStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const RestockStore = create<RestockStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
