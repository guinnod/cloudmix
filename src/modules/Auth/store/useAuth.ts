import { create } from "zustand";
import { User } from "@/lib/types/user";

interface State {
    isAuthorized: boolean;
    user: User | null;
}

type Actions = {
    setIsAuthorized: (isAuthorized: boolean) => void;
    setUser: (user: User) => void;
};

export const useAuthStore = create<State & Actions>((set) => ({
    isAuthorized: false,
    user: null,
    setIsAuthorized: (isAuthorized: boolean) => {
        set((state) => ({ ...state, isAuthorized }));
    },
    setUser: (user: User) => {
        set((state) => ({ ...state, user }));
    },
}));
