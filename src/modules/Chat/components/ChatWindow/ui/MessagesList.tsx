import clsx from "clsx";
import { TimeDivider } from "./TimeDivider";
import { Message } from "./Message";
import { MessageType } from "@/modules/Chat/types";
import { groupTimestamps } from "@/lib/utils/time";
import { useState } from "react";
const mockData: MessageType[] = [
    {
        content: "Hello",
        timeStamp: 1634320500000,
        senderId: "USER",
        chatId: "abc123",
    },
    {
        content: "Hi there!",
        timeStamp: 1634320560000,
        senderId: "CHAT",
        chatId: "abc123",
    },
    {
        content: "How are you?",
        timeStamp: 1634320620000,
        senderId: "USER",
        chatId: "abc123",
    },
    {
        content: "I'm good, thanks!",
        timeStamp: 1634320680000,
        senderId: "CHAT",
        chatId: "abc123",
    },
    {
        content: "What about you?",
        timeStamp: 1695759693951,
        senderId: "USER",
        chatId: "abc123",
    },
];

export const MessagesList = ({ messages }: { messages: MessageType[] }) => {
    const [groupedMessages] = useState<{
        [key: string]: MessageType[];
    }>(groupTimestamps(mockData));
    return (
        <section
            className={clsx(
                "border-b border-gray-coin border-opacity-50",
                "flex-grow bg-gray-custom px-5 sm:px-10 ",
                "flex flex-col overflow-y-scroll gap-6 py-6",
                "max-sm:max-h-[calc(100%-4rem-3rem)] max-h-[calc(100%-6rem-4rem)]",
                "md:px-5 lg:px-10"
            )}
        >
            {Object.keys(groupedMessages).map((key, index) => {
                return (
                    <>
                        <TimeDivider time={key} key={key} />
                        {groupedMessages[key].map((message, subIndex) => {
                            return (
                                <Message
                                    key={`${key}-${subIndex}`}
                                    isOwnMessage={message.senderId === "USER"}
                                >
                                    {message.content}
                                </Message>
                            );
                        })}
                    </>
                );
            })}
        </section>
    );
};
