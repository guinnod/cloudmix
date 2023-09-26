import { Logo } from "@/ui/Logo";
import clsx from "clsx";
import Link from "next/link";

export const Header = () => {
    return (
        <header
            className={clsx(
                "flex items-center justify-between max-sm:h-16 h-24 px-5 sm:px-10",
                "border-b border-gray-coin border-opacity-50"
            )}
        >
            <Logo />
            <div>
                <h2 className="font-medium sm:text-lg">Samurai Meow</h2>
                <Link href="/logout" className="opacity-50 sm:line-height-lg">
                    Logout
                </Link>
            </div>
        </header>
    );
};
