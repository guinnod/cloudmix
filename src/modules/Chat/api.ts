import { axiosAuthorized } from "@/lib/config/axios";
import { MessageType } from "./types";
import axios from "axios";

export const getChatList = () => {
    return axiosAuthorized.get("api/chat/");
};

export const getChat = (chatId: string) => {
    return axiosAuthorized.get(`api/chat/${chatId}`);
};

export const sendMessage = (message: MessageType) => {
    return axiosAuthorized.post(
        `api/chat/${message.chatId}/?type=${message.type}`,
        message
    );
};

export const createChat = (data: object) => {
    return axiosAuthorized.post(`api/chat/`, data);
};
