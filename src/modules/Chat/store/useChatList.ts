import { create } from "zustand";
import { ChatPreviewType } from "../types";

type State = {
    chats: ChatPreviewType[];
    activeChatId: string;
    activeChatName: string;
};

type Actions = {
    setChats: (chats: ChatPreviewType[]) => void;
    setActiveChatId: (chatId: string) => void;
    setActiveChatName: (chatName: string) => void;
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
    activeChatName: "",
    setActiveChatName: (chatName: string) => {
        set((state) => ({ ...state, activeChatName: chatName }));
    },
}));
