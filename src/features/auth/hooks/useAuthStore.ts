/* eslint-disable no-unused-vars */
import { UserType } from "@/shared/types";
import { create } from "zustand";

type AuthStore = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  isAuthenticated: boolean;
  accessToken: string | null;
  user: UserType | null;
  login: (user: UserType | null, accessToken: string | null) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  isLoading: true,
  setIsLoading: (isLoading) => set({ isLoading }),
  isAuthenticated: false,
  accessToken: null,
  user: null,
  login: (user, accessToken) =>
    set({ isLoading: false, isAuthenticated: true, accessToken, user }),
  logout: () =>
    set({
      isLoading: false,
      isAuthenticated: false,
      accessToken: null,
      user: null
    })
}));
