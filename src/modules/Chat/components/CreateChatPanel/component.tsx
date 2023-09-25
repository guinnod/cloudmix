import clsx from "clsx";
import { chat_bots } from "./consts/chat-bots";
import { ChatBotCard } from "./ui/ChatBotCard";

export const CreateChatPanel = () => {
    return (
        <main className="flex flex-col items-center w-full h-full max-sm:px-5">
            <h1 className="font-semibold text-2xl mt-10 md:px-5">
                Select chat bot of your choice
            </h1>
            <ul
                className={clsx(
                    "py-10 grid min-[1320px]:grid-cols-3 gap-5 min-[1050px]:grid-cols-2"
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
