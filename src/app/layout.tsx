import "@/styles/globals.css";
import type { Metadata } from "next";
import { inter } from "@/styles/fonts";
import clsx from "clsx";
import { Header } from "@/modules/Header";
import { ChatListPanel } from "@/modules/ChatListPanel";

export const metadata: Metadata = {
    title: "CloudMix",
    description: "Simple chat bot apllication",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={clsx(
                    inter.className,
                    "text-black-custom",
                    "h-screen w-screen fixed top-0 left-0"
                )}
            >
                <Header />
                <div className="flex h-[calc(100vh-6rem)]">
                    <ChatListPanel />
                    {children}
                </div>
            </body>
        </html>
    );
}
