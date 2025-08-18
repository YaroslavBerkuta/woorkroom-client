import { create } from "zustand";
import type { ICompany, IUser } from "../types";
import { devtools } from "zustand/middleware";

const combine =
  <T, U>(initialState: T, createSlice: (set: any, get: any) => U) =>
  (set: any, get: any): T & U => ({
    ...initialState,
    ...createSlice(set, get),
  });

interface AuthState {
  user: IUser | null;
  isAuthenticated: boolean;
  login: (user: IUser) => void;
  logout: () => void;
}

const initialAuthState: AuthState = {
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
};

const authSlice = combine<AuthState, Partial<AuthState>>(
  initialAuthState,
  (set) => ({
    login: (user) => set({ user, isAuthenticated: true }),
    logout: () => set({ user: null, isAuthenticated: false }),
  })
);

interface CompanySlice {
  company: ICompany | null;
  setCompany: (company: ICompany) => void;
}

const initialCompanyState: CompanySlice = {
  company: null,
  setCompany: () => {},
};

const companySlice = combine<CompanySlice, Partial<CompanySlice>>(
  initialCompanyState,
  (set) => ({
    setCompany: (company) => set({ company }),
  })
);

interface SettingsState {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const initialSettingsState: SettingsState = {
  darkMode: false,
  toggleDarkMode: () => {},
};

const settingsSlice = combine<SettingsState, Partial<SettingsState>>(
  initialSettingsState,
  (set, get) => ({
    toggleDarkMode: () => set({ darkMode: !get().darkMode }),
  })
);

export const useStore = create<AuthState & SettingsState & CompanySlice>()(
  devtools(
    (set, get) => ({
      ...authSlice(set, get),
      ...settingsSlice(set, get),
      ...companySlice(set, get),
    }),
    { name: "RootStore" }
  )
);
