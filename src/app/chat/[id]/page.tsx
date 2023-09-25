"use client";
import { ChatWindow } from "@/modules/Chat/components/ChatWindow/component";
import { useParams } from "next/navigation";
export default function ChatPage() {
    const { id } = useParams();
    return <ChatWindow />;
}
