"use client";
import { ChatWindow } from "@/modules/Chat/components/ChatWindow/component";
import { useParams } from "next/navigation";
import { useChatListStore } from "@/modules/Chat/store/chatListStore";
import { useEffect } from "react";

export default function ChatPage() {
    const { id } = useParams();
    const hideChatList = useChatListStore((state) => state.hide);
    useEffect(() => {
        hideChatList();
    }, []);
    return <ChatWindow />;
}
