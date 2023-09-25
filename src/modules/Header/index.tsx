import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
    return (
        <header
            className={clsx(
                "flex items-center justify-between h-24 px-10",
                "border-b border-gray-coin border-opacity-50"
            )}
        >
            <div className="flex items-center gap-2">
                <Image
                    src="/icons/logo.svg"
                    alt="cloud logo"
                    width={42}
                    height={42}
                    unoptimized
                />
                <Link href="/" className="font-semibold text-2xl">
                    Cloud<span className="text-primary">Mix</span>
                </Link>
            </div>
            <div>
                <p className="font-medium text-lg">Samurai Meow</p>
                <Link href="/logout" className="opacity-50 line-height-lg">
                    Logout
                </Link>
            </div>
        </header>
    );
};
