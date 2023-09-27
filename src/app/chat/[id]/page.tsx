"use client";
import { getChat } from "@/modules/Chat/api";
import { ChatWindow } from "@/modules/Chat/components/ChatWindow/component";
import { useChatStore } from "@/modules/Chat/store/useChat";
import { useChatListStore } from "@/modules/Chat/store/useChatList";
import { MessageType } from "@/modules/Chat/types";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import { AxiosResponse } from "axios";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ChatPage() {
    const { id } = useParams();
    const router = useRouter();
    const { messages, setMessages } = useChatStore((state) => state);
    const { chats, setActiveChatName } = useChatListStore((state) => state);
    useEffect(() => {
        chats.forEach((e) => {
            if (e.id == id) {
                setActiveChatName(e.name);
            }
        });
    }, [chats]);
    const query = useQuery({
        queryKey: [`get_chat${id}`],
        queryFn: () => getChat(`${id}`),
        onError: (error) => {
            router.push("/chat");
        },
        onSuccess: (response: AxiosResponse<MessageType[]>) => {
            const { data } = response;
            setMessages(data);
        },
        retry: false,
    });
    if (query.isLoading || query.isError) {
        return (
            <div className="w-full h-full items-center flex justify-center">
                <Spin size="large" />
            </div>
        );
    }
    return <ChatWindow messages={messages} title="" id={`${id}`} />;
}
