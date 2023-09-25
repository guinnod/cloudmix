import { Logo } from "@/ui/Logo";
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
            <Logo />
            <div>
                <h2 className="font-medium text-lg">Samurai Meow</h2>
                <Link href="/logout" className="opacity-50 line-height-lg">
                    Logout
                </Link>
            </div>
        </header>
    );
};
