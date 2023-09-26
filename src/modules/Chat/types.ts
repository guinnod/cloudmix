export interface ChatBot {
    name: string;
    banner: string;
    logo: string;
    description: string;
    link: string;
}
export interface ChatHeaderProps {
    children: React.ReactNode;
}

export interface MessageType {
    isRead?: boolean;
    content: string;
    timeStamp: number;
    senderId?: string;
    chatId: string;
}

export interface ChatPreviewType {
    title: string;
    message?: MessageType;
    id: string;
}

export interface ChatType {
    title: string;
    id: string;
    messages: MessageType[];
}
