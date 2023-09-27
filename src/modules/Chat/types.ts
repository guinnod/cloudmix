export interface ChatBot {
    name: string;
    banner: string;
    logo: string;
    description: React.ReactNode;
    link: string;
}
export interface ChatHeaderProps {
    children: React.ReactNode;
}

export interface MessageType {
    isRead?: boolean;
    content: string;
    time: number;
    role?: string;
    chatId: string;
    type: "message" | "image";
}

export interface ChatPreviewType {
    name: string;
    last_message?: MessageType;
    id: string;
}

export interface ChatType {
    title: string;
    id: string;
    messages: MessageType[];
}
