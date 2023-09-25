"use client";
import { Avatar, Button, Card } from "antd";
import { CloudPlus } from "iconsax-react";
import Image from "next/image";
import { FC } from "react";
import { ChatBot } from "../../../types";
import Link from "next/link";
const { Meta } = Card;

export const ChatBotCard: FC<ChatBot> = ({
    name,
    banner,
    logo,
    description,
    link,
}) => {
    return (
        <Card
            style={{ width: 300 }}
            cover={<Image alt="banner" src={banner} width={300} height={200} />}
            actions={[
                <div className="flex justify-center" key="create">
                    <Link href={link} className="max-w-max">
                        <Button
                            className="!flex items-center gap-2"
                            type="primary"
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
    );
};
