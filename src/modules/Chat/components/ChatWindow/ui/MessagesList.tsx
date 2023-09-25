import clsx from "clsx";
import { TimeDivider } from "./TimeDivider";
import { Message } from "./Message";

export const MessagesList = () => {
    return (
        <section
            className={clsx(
                "border-b border-gray-coin border-opacity-50",
                "h-[calc(100%-6rem-4rem)] bg-gray-custom px-10",
                "flex flex-col overflow-y-scroll gap-6 py-6"
            )}
        >
            <TimeDivider />
            <Message>
                Yo Samurai, me and pokemon head will going to Dostyk, will u
                join?
            </Message>
            <Message isOwnMessage>
                Yo Samurai, me and pokemon head will going to Dostyk, will u
                join?
            </Message>
            <Message>Yo Samurai</Message>
            <Message>
                Yo Samurai, me and pokemon head will going to Dostyk, will u
                join?
            </Message>
            <Message isOwnMessage>
                Yo Samurai, me and pokemon head will going to Dostyk, will u
                join?
            </Message>
            <Message>Yo Samurai</Message>
        </section>
    );
};
