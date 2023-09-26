import clsx from "clsx";
import Link from "next/link";
import { ChatPreview } from "./ui/ChatPreview";
import { ChatListHeader } from "./ui/ChatListHeader";
import { useChatListRenderStore } from "../../store/useChatListRender";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";

export const ChatListPanel = () => {
    const closeChatList = useChatListRenderStore(
        (state) => state.closeChatList
    );
    const isChatListOpen = useChatListRenderStore(
        (state) => state.isChatListOpen
    );
    const isMdScreen = useMediaQuery({ maxWidth: 768 });

    return (
        <motion.div
            initial={{ width: isMdScreen ? "0%" : "100%" }}
            animate={{
                width: isChatListOpen ? "100%" : isMdScreen ? "0%" : "100%",
            }}
            transition={{ ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }}
        >
            <nav
                className={clsx(
                    "border-r border-opacity-50 border-gray-coin",
                    "h-full max-w-[min(100vw,448px)] w-full"
                )}
            >
                <ChatListHeader />
                <ul className="max-sm:max-h-[calc(100%-4rem)] max-h-[calc(100%-6rem)] overflow-y-scroll w-full">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, key) => (
                        <li
                            key={key}
                            className={clsx(
                                {
                                    "bg-opacity-70 bg-gray-cloud": e == 1,
                                },
                                "w-full"
                            )}
                        >
                            <Link
                                href={`/chat/${e}`}
                                onClick={() => {
                                    setTimeout(() => {
                                        closeChatList();
                                    }, 500);
                                }}
                                className="w-full"
                            >
                                <ChatPreview />
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </motion.div>
    );
};
