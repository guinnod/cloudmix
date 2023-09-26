import clsx from "clsx";
import { ArrowLeft2 } from "iconsax-react";
import { FC } from "react";
import { ChatHeaderProps } from "@/modules/Chat/types";
import { useChatListRenderStore } from "@/modules/Chat/store/useChatListRender";
export const ChatHeader: FC<ChatHeaderProps> = ({ children }) => {
    const openChatList = useChatListRenderStore((state) => state.openChatList);
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
                    width={24}
                    height={24}
                    onClick={openChatList}
                />
                <div>{children}</div>
            </div>
        </div>
    );
};
