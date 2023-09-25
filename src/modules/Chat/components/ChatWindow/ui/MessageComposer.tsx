import { ConfigProvider, Input } from "antd";
import Image from "next/image";

export const MessageComposer = () => {
    return (
        <div className="h-16 px-8 flex justify-between items-center">
            <ConfigProvider
                theme={{
                    token: {
                        colorTextPlaceholder: "rgba(24, 10, 41, 0.5)",
                        fontSize: 16,
                    },
                }}
            >
                <Input bordered={false} placeholder="Write message..." />
            </ConfigProvider>

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
