import { CustomTextArea } from "@/ui/CustomTextArea";
import { Button, Upload } from "antd";
import { ExportCurve, Send2 } from "iconsax-react";
import Image from "next/image";

export const MessageComposer = ({
    messageValue,
    setMessageValue,
    mutation,
    createMessage,
    fileList,
    setFileList,
    customRequest,
}: any) => {
    return (
        <div className="px-4 sm:px-8 max-sm:py-3 py-5 flex gap-4 justify-between items-center">
            <CustomTextArea
                value={messageValue}
                onChange={(e) => {
                    setMessageValue(e.target.value);
                }}
            />
            <div className="flex items-center">
                <Upload
                    customRequest={customRequest}
                    name="image"
                    maxCount={1}
                    accept="image/png, image/jpeg"
                    fileList={fileList}
                    onChange={({ file, fileList, event }: any) => {
                        setFileList(fileList);
                    }}
                    itemRender={() => <></>}
                >
                    <ExportCurve />
                </Upload>
                <Button
                    type="text"
                    onClick={() => {
                        mutation.mutate(createMessage());
                    }}
                >
                    <Send2 />
                </Button>
            </div>
        </div>
    );
};
