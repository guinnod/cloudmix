import { useChatListStore } from "@/modules/Chat/store/chatListStore";
import clsx from "clsx";
import { ArrowLeft2 } from "iconsax-react";
export const ChatHeader = () => {
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
                <div>
                    <h2 className="text-lg font-medium">Aslan</h2>
                    <p className="opacity-50">Online</p>
                </div>
            </div>
        </div>
    );
};
