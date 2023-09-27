"use client";
import { App, Avatar, Button, Card, Input, Modal } from "antd";
import { CloudPlus } from "iconsax-react";
import Image from "next/image";
import { FC, useState } from "react";
import { ChatBot } from "../../../types";
import Link from "next/link";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createChat } from "@/modules/Chat/api";
import { AxiosResponse } from "axios";
import { useChatListStore } from "@/modules/Chat/store/useChatList";
import { useRouter } from "next/navigation";
const { Meta } = Card;

export const ChatBotCard: FC<ChatBot> = ({
    name,
    banner,
    logo,
    description,
    link,
}) => {
    const [chatName, setChatName] = useState("");
    const { message } = App.useApp();
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const setActiveChatId = useChatListStore((state) => state.setActiveChatId);
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: createChat,
        onSuccess: (response: AxiosResponse) => {
            const { data } = response;
            setActiveChatId(data.chatId);
            router.push(`/chat/${data.chatId}`);
            queryClient.invalidateQueries(["chatList"]);
        },
        onError: () => {
            message.error("Error!");
        },
    });
    return (
        <>
            <Modal
                title="Create chat"
                open={open}
                onCancel={() => {
                    setOpen(false);
                    setChatName("");
                }}
                onOk={() => {
                    mutation.mutate({ name: chatName });
                }}
                okButtonProps={{ loading: mutation.isLoading }}
            >
                <Input
                    placeholder="Chat name"
                    value={chatName}
                    onChange={(e) => {
                        setChatName(e.target.value);
                    }}
                />
            </Modal>
            <Card
                className="w-[280px] max-sm:max-w-[90vw]"
                cover={
                    <Image
                        alt="banner"
                        src={banner}
                        width={250}
                        height={170}
                        className="w-full aspect-[5/3]"
                    />
                }
                actions={[
                    <div className="flex justify-center" key="create">
                        <Link href={link} className="max-w-max">
                            <Button
                                className="!flex items-center gap-2"
                                type="primary"
                                onClick={() => {
                                    setOpen(true);
                                }}
                            >
                                <CloudPlus />
                                Create chat
                            </Button>
                        </Link>
                    </div>,
                ]}
            >
                <Meta
                    avatar={<Avatar src={logo} />}
                    title={name}
                    description={description}
                />
            </Card>
        </>
    );
};
