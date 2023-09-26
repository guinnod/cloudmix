import jwt from "@/lib/utils/jwt";
import { useAuthStore } from "@/modules/Auth/store/useAuth";
import { Logo } from "@/ui/Logo";
import clsx from "clsx";
import { useEffect } from "react";

export const Header = () => {
    const setIsAuthorized = useAuthStore((state) => state.setIsAuthorized);
    const isAuthorized = useAuthStore((state) => state.isAuthorized);
    useEffect(() => {
        console.log(isAuthorized);
    }, [isAuthorized]);
    const logout = () => {
        jwt.clearJwt();
        setIsAuthorized(false);
    };
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
                <a
                    href="/login"
                    onClick={logout}
                    className="opacity-50 sm:line-height-lg"
                >
                    Logout
                </a>
            </div>
        </header>
    );
};
