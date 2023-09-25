import "@/styles/globals.css";
import type { Metadata } from "next";
import { inter } from "@/styles/fonts";
import clsx from "clsx";
import { AntdProvider } from "@/lib/context/antd/AntdProvider";
import { App } from "antd";

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
        <html lang="en" className="h-full">
            <body className={clsx(inter.className, "text-black-custom h-full")}>
                <AntdProvider>
                    <App className="h-full">{children}</App>
                </AntdProvider>
            </body>
        </html>
    );
}
