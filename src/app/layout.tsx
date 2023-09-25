import "@/styles/globals.css";
import type { Metadata } from "next";
import { inter } from "@/styles/fonts";
import clsx from "clsx";

export const metadata: Metadata = {
    title: "CloudMix",
    description: "Simple chat bot apllication",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={clsx(inter.className)}>{children}</body>
        </html>
    );
}
