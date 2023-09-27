import clsx from "clsx";
import Link from "next/link";
import { ChatPreview } from "./ui/ChatPreview";
import { ChatListHeader } from "./ui/ChatListHeader";
import { useChatListRenderStore } from "../../store/useChatListRender";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useChatListStore } from "../../store/useChatList";
import { useQuery } from "@tanstack/react-query";
import { getChatList } from "../../api";
import { AxiosResponse } from "axios";
import { useChatStore } from "../../store/useChat";

export const ChatListPanel = () => {
    const { isChatListOpen, closeChatList } = useChatListRenderStore(
        (state) => state
    );

    const {
        chats,
        activeChatId,
        setActiveChatId,
        setChats,
        setActiveChatName,
    } = useChatListStore((state) => state);
    const isMdScreen = useMediaQuery({ maxWidth: 768 });
    const setMessages = useChatStore((state) => state.setMessages);
    const query = useQuery({
        queryKey: ["chatList"],
        queryFn: getChatList,
        onSuccess: (response: AxiosResponse) => {
            const { data } = response;
            setChats(data);
        },
        retry: false,
        refetchInterval: 3000,
    });
    return (
        <motion.div
            initial={{ width: isMdScreen ? "0%" : "100%" }}
            animate={{
                width: isChatListOpen ? "100%" : isMdScreen ? "0%" : "100%",
            }}
            transition={{ ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }}
            className="h-full"
        >
            <nav
                className={clsx(
                    "border-r border-opacity-50 border-gray-coin",
                    "h-full max-w-[min(100vw,448px)] w-full"
                )}
            >
                <ChatListHeader chatsLength={chats.length} />
                <ul className="max-sm:max-h-[calc(100%-4rem)] max-h-[calc(100%-6rem)] overflow-y-scroll w-full">
                    {chats
                        .sort(
                            (a, b) =>
                                (b.last_message?.time || 0) -
                                (a.last_message?.time || 0)
                        )
                        .map((e, key) => (
                            <li
                                key={key}
                                className={clsx(
                                    {
                                        "bg-opacity-70 bg-gray-cloud":
                                            e.id === activeChatId,
                                    },
                                    "w-full"
                                )}
                            >
                                <Link
                                    href={`/chat/${e.id}`}
                                    onClick={() => {
                                        setActiveChatId(e.id);
                                        setActiveChatName(e.name);
                                        setMessages([]);
                                        setTimeout(() => {
                                            closeChatList();
                                        }, 500);
                                    }}
                                    className="w-full"
                                >
                                    <ChatPreview {...e} />
                                </Link>
                            </li>
                        ))}
                    <div className="w-[448px]" />
                </ul>
            </nav>
        </motion.div>
    );
};
