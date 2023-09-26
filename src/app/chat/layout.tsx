"use client";
import clsx from "clsx";
import { Header } from "@/modules/Header/component";
import { ChatListPanel } from "@/modules/Chat/components/ChatListPanel/component";
import { useChatListRenderStore } from "@/modules/Chat/store/useChatListRender";

export default function ChatLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const isChatListOpen = useChatListRenderStore(
        (state) => state.isChatListOpen
    );
    return (
        <div className={clsx("h-screen w-screen fixed top-0 left-0")}>
            <Header />
            <div className="flex max-sm:h-[calc(100vh-4rem)] h-[calc(100vh-6rem)]">
                <div className={clsx({ "max-md:hidden": !isChatListOpen })}>
                    <ChatListPanel />
                </div>
                <div
                    className={clsx("overflow-y-scroll w-full", {
                        "max-md:hidden": isChatListOpen,
                    })}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
