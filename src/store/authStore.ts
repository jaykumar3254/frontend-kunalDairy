import { create } from "zustand";

import { User } from "../types/auth";

interface AuthState {
  token: string | null;

  user: User | null;

  isAuthenticated: boolean;

  isLoading: boolean;

  customerMode: boolean;

  login: (token: string, user: User) => void;

  logout: () => void;

  restoreSession: (token: string, user: User) => void;

  setLoading: (loading: boolean) => void;

  toggleCustomerMode: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,

  user: null,

  isAuthenticated: false,

  isLoading: true,

  customerMode: false,

  login: (token, user) =>
    set({
      token,
      user,
      isAuthenticated: true,
    }),

  restoreSession: (token, user) =>
    set({
      token,
      user,
      isAuthenticated: true,
    }),

  setLoading: (loading) =>
    set({
      isLoading: loading,
    }),

  logout: () =>
    set({
      token: null,
      user: null,
      isAuthenticated: false,
      customerMode: false,
    }),

  toggleCustomerMode: () =>
    set((state) => ({
      customerMode: !state.customerMode,
    })),
}));
