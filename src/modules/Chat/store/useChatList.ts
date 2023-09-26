import { create } from "zustand";
import { ChatPreviewType } from "../types";

type State = {
    chats: ChatPreviewType[];
    activeChatId: string;
};

type Actions = {
    setChats: (chats: ChatPreviewType[]) => void;
    setActiveChatId: (chatId: string) => void;
};

export const useChatListStore = create<State & Actions>((set) => ({
    chats: [],
    setChats: (data: ChatPreviewType[]) => {
        set((state) => ({ ...state, chats: data }));
    },
    activeChatId: "",
    setActiveChatId: (chatId: string) => {
        set((state) => ({ ...state, activeChatId: chatId }));
    },
}));
