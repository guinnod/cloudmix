import { axiosAuthorized } from "@/lib/config/axios";
import { MessageType } from "./types";
import axios from "axios";

export const getChatList = () => {
    return axiosAuthorized.get("api/chats/");
};

export const getChat = (chatId: string) => {
    return axiosAuthorized.get(`api/chat/${chatId}`);
};

export const sendMessage = (message: MessageType) => {
    return axios.post("https://jsonplaceholder.typicode.com/todos/1", message);
    return axiosAuthorized.post(`api/message/`, message);
};
