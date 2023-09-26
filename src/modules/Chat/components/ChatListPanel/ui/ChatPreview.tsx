import { useChatListStore } from "@/modules/Chat/store/chatListStore";
import clsx from "clsx";

export const ChatPreview = () => {
    const hideChatList = useChatListStore((state) => state.hide);
    return (
        <div
            className={clsx(
                "max-sm:h-16 h-24 flex gap-2 px-5 sm:px-10 items-center justify-between",
                "border-b border-opacity-50 border-gray-coin",
                "w-full"
            )}
            onClick={hideChatList}
        >
            <div className="max-w-[calc(100%-40px)] max-sm:max-w-[calc(100%-40px)]">
                <h3 className="font-medium text-lg">Aslan</h3>
                <p className="opacity-50 whitespace-nowrap overflow-hidden overflow-ellipsis">
                    Hi, how is going now? Hi, how is going now?Hi, how is going
                    now?
                </p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div
                    className={clsx(
                        "text-sm text-white-default",
                        "rounded-full bg-primary w-6 h-6 flex items-center justify-center"
                    )}
                >
                    1
                </div>
                <time className="text-sm opacity-60">10:21</time>
            </div>
        </div>
    );
};
