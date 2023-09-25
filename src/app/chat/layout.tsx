import clsx from "clsx";
import { Header } from "@/modules/Header/component";
import { ChatListPanel } from "@/modules/Chat/components/ChatListPanel/component";

export default function ChatLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={clsx("h-screen w-screen fixed top-0 left-0")}>
            <Header />
            <div className="flex h-[calc(100vh-6rem)]">
                <ChatListPanel />
                {children}
            </div>
        </div>
    );
}
