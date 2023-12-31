import clsx from "clsx";

export const ChatListHeader = ({ chatsLength }: { chatsLength: number }) => {
    return (
        <div
            className={clsx(
                "max-sm:h-16 h-24 flex px-10 items-center bg-white-ghost",
                "border-b border-opacity-50 border-gray-coin"
            )}
        >
            <h1 className="font-semibold text-lg sm:text-2xl">
                {" "}
                Messages({chatsLength})
            </h1>
        </div>
    );
};
