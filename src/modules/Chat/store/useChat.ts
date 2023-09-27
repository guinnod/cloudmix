import { create } from "zustand";
import { MessageType } from "../types";

type State = {
    messages: MessageType[];
};

type Actions = {
    addMessage: (message: MessageType) => void;
    setMessages: (message: MessageType[]) => void;
};

export const useChatStore = create<State & Actions>((set) => ({
    messages: [],
    addMessage: (message: MessageType) => {
        set((state) => ({
            ...state,
            messages: [...state.messages, message],
        }));
    },
    setMessages: (newMessegas: MessageType[]) => {
        set((state) => ({
            ...state,
            messages: [...newMessegas],
        }));
    },
}));
