"use client";
import clsx from "clsx";
import { Header } from "@/modules/Layout/components/Header/component";
import { ChatListPanel } from "@/modules/Chat/components/ChatListPanel/component";
import { useChatListRenderStore } from "@/modules/Chat/store/useChatListRender";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import { useRouter } from "next/navigation";
import { getUser } from "@/modules/Auth/api";
import { useAuthStore } from "@/modules/Auth/store/useAuth";
import { AxiosResponse } from "axios";
import { User } from "@/lib/types/user";
export default function ChatLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isAuthorized, setIsAuthorized, setUser } = useAuthStore(
        (state) => state
    );
    const router = useRouter();
    const isChatListOpen = useChatListRenderStore(
        (state) => state.isChatListOpen
    );

    const query = useQuery({
        queryKey: ["authorize"],
        queryFn: getUser,
        onError: (error) => {
            router.push("/login");
        },
        onSuccess: (response: AxiosResponse<User>) => {
            setIsAuthorized(true);
            const { data } = response;
            setUser(data);
        },
        retry: false,
        enabled: !isAuthorized,
    });
    if (!isAuthorized && (query.isLoading || query.isError)) {
        return (
            <div className="w-screen h-full fixed items-center flex justify-center">
                <Spin size="large" />
            </div>
        );
    }

    return (
        <div className={clsx("h-full w-screen fixed top-0 left-0")}>
            <Header />
            <div className="flex max-sm:h-[calc(100%-4rem)] h-[calc(100%-6rem)]">
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
