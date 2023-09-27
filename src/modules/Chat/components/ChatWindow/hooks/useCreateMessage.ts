import { sendMessage } from "@/modules/Chat/api";
import { useChatStore } from "@/modules/Chat/store/useChat";
import { MessageType } from "@/modules/Chat/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";

export const useCreateMessage = ({ chatId }: { chatId: string }) => {
    const [messageValue, setMessageValue] = useState<string>("");
    const addMessage = useChatStore((state) => state.addMessage);
    const queryClient = useQueryClient();
    const createMessage = (): MessageType => {
        return {
            content: messageValue,
            time: Date.now(),
            chatId: chatId,
            role: "user",
            type: "message",
        };
    };

    const mutation = useMutation({
        mutationFn: (data: MessageType) => {
            setMessageValue("");
            addMessage(data);
            return sendMessage(data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries([`get_chat${chatId}`]);
        },
        onError: () => {
            console.log("Error");
        },
        retry: false,
    });
    return { mutation, messageValue, setMessageValue, createMessage };
};
