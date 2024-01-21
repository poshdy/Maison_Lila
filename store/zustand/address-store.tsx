import { Address } from "@/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AddressStore {
  address: Address | null;
  setAddress: (address: Address) => void;
  clearAddress: () => void;
}

export const AddressStore = create<AddressStore>()(
  devtools(
    persist(
      (set, get) => ({
        address: null,
        setAddress(address) {
          set({ address: address });
        },
        clearAddress() {
          set({ address: null });
        },
      }),

      {
        name: "user-storage",
      }
    )
  )
);
