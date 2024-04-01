import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type User = {
  id: string;
  phone: string;
  name: string;
  email: string;
  accessToken: string;
};
interface UserStore {
  user: User | null;
  LogOut: () => void;
  SetUser: (payload: User) => void;
  updateAccessToken: (token: string) => void;
}

export const useUser = create<UserStore>()(
  devtools(
    persist(
      (set, get) => ({
        user: null,
        SetUser(user) {
          set({ user });
        },

        updateAccessToken: (newAccessToken) => {
          set((state: any) => ({
            user: {
              ...state.user,
              accessToken: newAccessToken,
            },
          }));
        },

        LogOut() {
          set({ user: null});
        },
      }),

      {
        name: "user",
      }
    )
  )
);
