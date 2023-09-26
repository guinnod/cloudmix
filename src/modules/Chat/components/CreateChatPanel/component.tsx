import clsx from "clsx";
import { chat_bots } from "./consts/chat-bots";
import { ChatBotCard } from "./ui/ChatBotCard";
import { ChatHeader } from "@/modules/Chat/components/ChatWindow/ui/ChatHeader";

export const CreateChatPanel = () => {
    return (
        <main className="flex flex-col items-center w-full h-full">
            <div className="w-full">
                <ChatHeader>
                    <h1 className="font-semibold text-lg sm:text-2xl md:px-5">
                        Select chat bot of your choice
                    </h1>
                </ChatHeader>
            </div>
            <ul
                className={clsx(
                    "py-10 grid min-[1320px]:grid-cols-3 gap-5 min-[1050px]:grid-cols-2 max-sm:px-5"
                )}
            >
                {chat_bots.map((data, key) => (
                    <li key={key}>
                        <ChatBotCard {...data} />
                    </li>
                ))}
            </ul>
            <div></div>
        </main>
    );
};
