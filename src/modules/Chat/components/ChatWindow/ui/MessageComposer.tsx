import { CustomTextArea } from "@/ui/CustomTextArea";
import { ConfigProvider, Input } from "antd";
import Image from "next/image";

export const MessageComposer = () => {
    return (
        <div className="px-4 sm:px-8 max-sm:py-3 py-5 flex gap-4 justify-between items-center">
            <CustomTextArea />
            <button>
                <Image
                    src="/icons/send.svg"
                    alt="send"
                    width={24}
                    height={24}
                />
            </button>
        </div>
    );
};
