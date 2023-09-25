import clsx from "clsx";

export const ChatHeader = () => {
    return (
        <div
            className={clsx(
                "border-b border-gray-coin border-opacity-50",
                "h-24 flex px-10 items-center"
            )}
        >
            <div>
                <h2 className="text-lg font-medium">Aslan</h2>
                <p className="opacity-50">Online</p>
            </div>
        </div>
    );
};
