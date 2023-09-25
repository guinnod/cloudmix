import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
    return (
        <div className="flex items-center gap-2">
            <Image
                className="max-sm:w-6"
                src="/icons/logo.svg"
                alt="cloud logo"
                width={42}
                height={42}
                unoptimized
            />
            <Link
                href="/chat"
                className="font-semibold text-xl sm:text-2xl max-[260px]:hidden"
            >
                Cloud<span className="text-primary">Mix</span>
            </Link>
        </div>
    );
};
