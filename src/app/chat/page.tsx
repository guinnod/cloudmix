"use client";
import { CreateChatPanel } from "@/modules/Chat/components/CreateChatPanel/component";
import { useChatListStore } from "@/modules/Chat/store/chatListStore";
import React, { useEffect } from "react";

export default function ChatPage() {
    const hideChatList = useChatListStore((state) => state.hide);
    useEffect(() => {
        hideChatList();
    }, []);
    return <CreateChatPanel />;
}
