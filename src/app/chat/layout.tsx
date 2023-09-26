"use client";
import clsx from "clsx";
import { Header } from "@/modules/Layout/components/Header/component";
import { ChatListPanel } from "@/modules/Chat/components/ChatListPanel/component";
import { useChatListRenderStore } from "@/modules/Chat/store/useChatListRender";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import { useRouter } from "next/navigation";
import { verify } from "@/modules/Auth/api";
import { useAuthStore } from "@/modules/Auth/store/useAuth";
export default function ChatLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const isAuthorized = useAuthStore((state) => state.isAuthorized);
    const setIsAuthorized = useAuthStore((state) => state.setIsAuthorized);
    const router = useRouter();
    const isChatListOpen = useChatListRenderStore(
        (state) => state.isChatListOpen
    );
    const checkAuthorize = async () => {
        return await verify();
    };
    const query = useQuery({
        queryKey: ["authorize"],
        queryFn: checkAuthorize,
        onError: (error) => {
            console.log(error);

            router.push("/login");
        },
        onSuccess: () => {
            setIsAuthorized(true);
        },
        retry: false,
        enabled: !isAuthorized,
    });
    if (!isAuthorized && (query.isLoading || query.isError)) {
        return (
            <div className="w-screen h-screen fixed items-center flex justify-center">
                <Spin size="large" />
            </div>
        );
    }

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
