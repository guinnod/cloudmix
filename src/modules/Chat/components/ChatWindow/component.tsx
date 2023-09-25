import clsx from "clsx";
import { MessageComposer } from "./ui/MessageComposer";
import { ChatHeader } from "./ui/ChatHeader";
import { MessagesList } from "./ui/MessagesList";

export const ChatWindow = () => {
    return (
        <main className="w-full h-full flex flex-col justify-between">
            <ChatHeader />
            <MessagesList />
            <MessageComposer />
        </main>
    );
};
