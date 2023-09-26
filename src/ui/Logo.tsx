import { useChatListRenderStore } from "@/modules/Chat/store/useChatListRender";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
    const closeChatList = useChatListRenderStore(
        (state) => state.closeChatList
    );
    return (
        <Link
            href="/chat"
            className="flex items-center gap-2"
            onClick={closeChatList}
        >
            <Image
                className="max-sm:w-6"
                src="/icons/logo.svg"
                alt="cloud logo"
                width={42}
                height={42}
                unoptimized
            />
            <span className="font-semibold text-xl sm:text-2xl max-[260px]:hidden">
                Cloud<span className="text-primary">Mix</span>
            </span>
        </Link>
    );
};
