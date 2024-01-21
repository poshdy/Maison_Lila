import { BASE_URL } from "@/constants";
import axios from "axios";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AdminStore {
  role: string | null;
  name: string | null;
  accessToken: string | null;
  setAdmin: (payload: any) => void;
  updateAccessToken: (token: string) => void;
  // refreshToken: (state:any) => any;
}

export const AdminStore = create<AdminStore>()(
  devtools(
    persist(
      (set) => ({
        accessToken: null,
        role: null,
        name: null,
        setAdmin: (admin) =>
          set(() => ({
            accessToken: admin.accessToken,
            role: admin.role,
            name: admin.name,
          })),
        updateAccessToken: (newAccessToken) =>
          set({ accessToken: newAccessToken }),
      }),

      {
        name: "bear-storage",
      }
    )
  )
);
