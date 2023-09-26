import { FC } from "react";
import { MessageComposer } from "./ui/MessageComposer";
import { ChatHeader } from "./ui/ChatHeader";
import { MessagesList } from "./ui/MessagesList";
import { ChatType } from "../../types";

export const ChatWindow: FC<ChatType> = ({ title, id, messages }) => {
    return (
        <main className="w-full h-full flex flex-col justify-between">
            <ChatHeader>
                <h2 className="text-lg font-medium">{title}</h2>
                <p className="opacity-50">Online</p>
            </ChatHeader>
            <MessagesList messages={messages} />
            <MessageComposer chatId={id} />
        </main>
    );
};
