import clsx from "clsx";
import { TimeDivider } from "./TimeDivider";
import { Message } from "./Message";
import { MessageType } from "@/modules/Chat/types";
import { groupTimestamps } from "@/lib/utils/time";
import { useRef, useState, useEffect } from "react";

export const MessagesList = ({ messages }: { messages: MessageType[] }) => {
    const [groupedMessages, setGroupedMessages] = useState<{
        [key: string]: MessageType[];
    }>(groupTimestamps([]));
    useEffect(() => {
        setGroupedMessages(groupTimestamps(messages));
    }, [messages]);
    const listButtomRef = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            //@ts-ignore
            listButtomRef?.current?.scrollIntoView({
                behavior: "smooth",
            });
        }, 150);
    }, [messages]);
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
                            if (
                                message.content?.startsWith(
                                    "https://storage.googleapis.com/jasaw"
                                )
                            ) {
                                return (
                                    <div className="w-250 h-180 self-end">
                                        <img
                                            src={message.content}
                                            alt="image"
                                        />
                                    </div>
                                );
                            }
                            return (
                                <Message
                                    key={`${key}+${subIndex}`}
                                    isOwnMessage={message.role === "user"}
                                >
                                    {message.content}
                                </Message>
                            );
                        })}
                    </>
                );
            })}
            <div ref={listButtomRef} key={"div"}></div>
        </section>
    );
};
