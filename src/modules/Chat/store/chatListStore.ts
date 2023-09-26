import { create } from "zustand";

type State = {
    showChatList: boolean;
};

type Actions = {
    show?: () => void;
    hide?: () => void;
};

export const useChatListStore = create<State & Actions>((set) => ({
    showChatList: false,
    show: () => set((state) => ({ showChatList: true })),
    hide: () => set((state) => ({ showChatList: false })),
}));
