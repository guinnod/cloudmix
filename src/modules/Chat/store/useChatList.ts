import { create } from "zustand";

type ChatPreview = {
    title: string;
    lastMessage?: string;
    lastMessageTime: Date;
    id: string;
};

type State = {
    chats: ChatPreview[];
};

type Actions = {
    setChats: (chats: ChatPreview[]) => void;
};

export const useChatListStore = create<State & Actions>((set) => ({
    chats: [],
    setChats: (data: ChatPreview[]) => {
        set((state) => ({ chats: data }));
    },
}));
