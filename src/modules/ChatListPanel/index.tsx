import clsx from "clsx";
import Link from "next/link";
import { ChatPreview } from "./ui/ChatPreview";

export const ChatListPanel = () => {
    return (
        <nav
            className={clsx(
                "border-r border-opacity-50 border-gray-coin",
                "h-full"
            )}
        >
            <div
                className={clsx(
                    "h-24 flex px-10 items-center bg-white-ghost",
                    "border-b border-opacity-50 border-gray-coin"
                )}
            >
                <h1 className="font-semibold text-2xl"> Messages(3)</h1>
            </div>
            <ul className="max-h-[calc(100%-6rem)] overflow-y-scroll">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, key) => (
                    <li
                        key={key}
                        className={clsx({
                            "bg-opacity-70 bg-gray-cloud": e == 1,
                        })}
                    >
                        <Link href="/">
                            <ChatPreview />
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
