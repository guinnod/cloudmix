import { FC } from "react";
import { MessageComposer } from "./ui/MessageComposer";
import { ChatHeader } from "./ui/ChatHeader";
import { MessagesList } from "./ui/MessagesList";
import { ChatType } from "../../types";
import { useChatListStore } from "@/modules/Chat/store/useChatList";
import { useCreateMessage } from "./hooks/useCreateMessage";
import { motion } from "framer-motion";
import { Spin } from "antd";

export const ChatWindow: FC<ChatType> = ({ title, id, messages }) => {
    const { activeChatName } = useChatListStore((state) => state);
    const createChat = useCreateMessage({
        chatId: id,
    });

    return (
        <main className="w-full h-full flex flex-col justify-between">
            <ChatHeader>
                <h2 className="text-lg font-medium">{activeChatName}</h2>
                <p className="opacity-50">
                    {createChat.mutation.isLoading ? (
                        <span>
                            Typing... <Spin size="small" />
                        </span>
                    ) : (
                        "Online"
                    )}
                </p>
            </ChatHeader>
            <MessagesList messages={messages} />
            <MessageComposer chatId={id} {...createChat} />
        </main>
    );
};
