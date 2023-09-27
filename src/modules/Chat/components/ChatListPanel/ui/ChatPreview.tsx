import { formatTime } from "@/lib/utils/time";
import { ChatPreviewType } from "@/modules/Chat/types";
import clsx from "clsx";
import { FC } from "react";
export const ChatPreview: FC<ChatPreviewType> = ({ last_message, name }) => {
    return (
        <div
            className={clsx(
                "max-sm:h-16 h-24 flex gap-2 px-5 sm:px-10 items-center justify-between",
                "border-b border-opacity-50 border-gray-coin",
                "w-full"
            )}
        >
            <div className="max-w-[calc(100%-40px)] max-sm:max-w-[calc(100%-40px)]">
                <h3 className="font-medium text-lg h-[28px]">{name}</h3>
                <p className="opacity-50 whitespace-nowrap overflow-hidden overflow-ellipsis h-[24px]">
                    {last_message?.content}
                </p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div
                    className={clsx(
                        "text-sm text-white-default",
                        "rounded-full bg-primary w-6 h-6 flex items-center justify-center",
                        { "opacity-0": !last_message || last_message.isRead }
                    )}
                >
                    1
                </div>
                <time className="text-sm opacity-60">
                    {last_message?.time && formatTime(last_message.time)}
                </time>
            </div>
        </div>
    );
};
