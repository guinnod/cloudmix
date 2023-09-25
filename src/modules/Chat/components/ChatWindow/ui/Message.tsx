import clsx from "clsx";
import { FC, ReactNode } from "react";

interface MessageComponentProps {
    isOwnMessage?: boolean;
    children: ReactNode;
}

export const Message: FC<MessageComponentProps> = ({
    isOwnMessage,
    children,
}) => {
    return (
        <div
            className={clsx(
                "rounded-2xl py-3 px-6 w-max max-w-xs",
                `${
                    isOwnMessage
                        ? "bg-primary text-white-default self-end"
                        : "bg-white-default"
                }`
            )}
        >
            {children}
        </div>
    );
};
