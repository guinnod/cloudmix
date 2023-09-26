import { useChatListStore } from "@/modules/Chat/store/chatListStore";
import clsx from "clsx";
import { ArrowLeft2 } from "iconsax-react";
import { FC } from "react";
import { ChatHeaderProps } from "./types";
export const ChatHeader: FC<ChatHeaderProps> = ({ children }) => {
    const showChatList = useChatListStore((state) => state.show);
    return (
        <div
            className={clsx(
                "border-b border-gray-coin border-opacity-50",
                "max-sm:min-h-[4rem] min-h-[6rem] flex px-5 sm:px-10 items-center"
            )}
        >
            <div className="flex items-center gap-4">
                <ArrowLeft2
                    className="md:hidden cursor-pointer"
                    onClick={showChatList}
                />
                <div>{children}</div>
            </div>
        </div>
    );
};
