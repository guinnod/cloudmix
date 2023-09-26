import { CustomTextArea } from "@/ui/CustomTextArea";
import { Button } from "antd";
import Image from "next/image";
import { useCreateMessage } from "../hooks/useCreateMessage";

export const MessageComposer = ({ chatId }: { chatId: string }) => {
    const { mutation, messageValue, setMessageValue, createMessage } =
        useCreateMessage({
            chatId,
        });
    return (
        <div className="px-4 sm:px-8 max-sm:py-3 py-5 flex gap-4 justify-between items-center">
            <CustomTextArea
                value={messageValue}
                onChange={(e) => {
                    setMessageValue(e.target.value);
                }}
            />
            <Button
                type="text"
                onClick={() => {
                    mutation.mutate(createMessage());
                }}
            >
                <Image
                    src="/icons/send.svg"
                    alt="send"
                    width={24}
                    height={24}
                />
            </Button>
        </div>
    );
};
