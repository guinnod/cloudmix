import jwt from "@/lib/utils/jwt";
import { useAuthStore } from "@/modules/Auth/store/useAuth";
import { Logo } from "@/ui/Logo";
import clsx from "clsx";
import { useEffect } from "react";

export const Header = () => {
    const { setIsAuthorized, isAuthorized, user, setUser } = useAuthStore(
        (state) => state
    );
    useEffect(() => {
        console.log(isAuthorized);
    }, [isAuthorized]);
    const logout = () => {
        jwt.clearJwt();
        setIsAuthorized(false);
        setUser(null);
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
                <h2 className="font-medium sm:text-lg">{`${user?.first_name} ${user?.last_name}`}</h2>
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
