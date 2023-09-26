import { create } from "zustand";

type State = {
    isChatListOpen: boolean;
};

type Actions = {
    openChatList: () => void;
    closeChatList: () => void;
};

export const useChatListRenderStore = create<State & Actions>((set) => ({
    isChatListOpen: false,
    openChatList: () => set((state) => ({ isChatListOpen: true })),
    closeChatList: () => set((state) => ({ isChatListOpen: false })),
}));
