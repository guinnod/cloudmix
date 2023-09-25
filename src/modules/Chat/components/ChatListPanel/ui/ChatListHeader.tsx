import clsx from "clsx";

export const ChatListHeader = () => {
    return (
        <div
            className={clsx(
                "max-sm:h-16 h-24 flex px-10 items-center bg-white-ghost",
                "border-b border-opacity-50 border-gray-coin"
            )}
        >
            <h1 className="font-semibold text-2xl"> Messages(3)</h1>
        </div>
    );
};
