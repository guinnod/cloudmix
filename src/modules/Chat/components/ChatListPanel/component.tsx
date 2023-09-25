import clsx from "clsx";
import Link from "next/link";
import { ChatPreview } from "./ui/ChatPreview";
import { ChatListHeader } from "./ui/ChatListHeader";

export const ChatListPanel = () => {
    return (
        <nav
            className={clsx(
                "border-r border-opacity-50 border-gray-coin",
                "h-full max-w-sm max-[384px]:w-full"
            )}
        >
            <ChatListHeader />
            <ul className="max-sm:max-h-[calc(100%-4rem)] max-h-[calc(100%-6rem)] overflow-y-scroll">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, key) => (
                    <li
                        key={key}
                        className={clsx({
                            "bg-opacity-70 bg-gray-cloud": e == 1,
                        })}
                    >
                        <Link href="/chat/1">
                            <ChatPreview />
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
