import { ConfigProvider, Input } from "antd";
import Image from "next/image";

export const MessageComposer = () => {
    return (
        <div className="px-4 sm:px-8 max-sm:py-3 py-5 flex gap-4 justify-between items-center">
            <ConfigProvider
                theme={{
                    token: {
                        colorTextPlaceholder: "rgba(24, 10, 41, 0.5)",
                        fontSize: 16,
                    },
                }}
            >
                <Input.TextArea
                    bordered={false}
                    placeholder="Write message..."
                    autoSize={{ minRows: 1, maxRows: 6 }}
                    rows={1}
                />
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
