import { axiosAuthorized } from "@/lib/config/axios";
import { sendMessage } from "@/modules/Chat/api";
import { useChatStore } from "@/modules/Chat/store/useChat";
import { MessageType } from "@/modules/Chat/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { App } from "antd";
import { useState } from "react";

export const useCreateMessage = ({ chatId }: { chatId: string }) => {
    const [messageValue, setMessageValue] = useState<string>("");
    const [fileList, setFileList] = useState<any>([]);
    const { message: messageApi } = App.useApp();
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
    const customRequest = async (options: any) => {
        const { onSuccess, onError, file, onProgress } = options;

        const formData = new FormData();
        const config = {
            headers: { "content-type": "multipart/form-data" },
            onUploadProgress: (event: any) => {
                onProgress({ percent: (event.loaded / event.total) * 100 });
            },
        };
        try {
            formData.append("image", file);
            const res = await axiosAuthorized.post(
                "/api/chat-image/",
                formData,
                config
            );
            const raw = createMessage();
            raw.content = res?.data?.image;
            raw.type = "image";
            mutation.mutate(raw);
            onSuccess(res);
        } catch (err) {
            messageApi.error("Something went wrong!");
            onError({ err });
        }
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
    return {
        mutation,
        messageValue,
        setMessageValue,
        createMessage,
        fileList,
        setFileList,
        customRequest,
    };
};
