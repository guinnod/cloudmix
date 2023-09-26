import { sendMessage } from "@/modules/Chat/api";
import { MessageType } from "@/modules/Chat/types";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export const useCreateMessage = ({ chatId = "45" }: { chatId: string }) => {
    const [messageValue, setMessageValue] = useState<string>("");
    const createMessage = (): MessageType => {
        return {
            content: messageValue,
            timeStamp: Date.now(),
            chatId: chatId,
        };
    };
    const mutation = useMutation({
        mutationFn: sendMessage,
        onSettled: () => {
            setMessageValue("");
        },
        onError: () => {
            console.log("Error");
        },
        retry: false,
    });
    return { mutation, messageValue, setMessageValue, createMessage };
};
