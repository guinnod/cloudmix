"use client";
import React from "react";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import type Entity from "@ant-design/cssinjs/es/Cache";
import { useServerInsertedHTML } from "next/navigation";
import { ConfigProvider } from "antd";
import antd_theme from "@/styles/antd-theme";

export const AntdProvider = ({ children }: React.PropsWithChildren) => {
    const cache = React.useMemo<Entity>(() => createCache(), []);
    useServerInsertedHTML(() => (
        <style
            id="antd"
            dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
        />
    ));
    return (
        <StyleProvider cache={cache}>
            <ConfigProvider theme={antd_theme}>{children}</ConfigProvider>
        </StyleProvider>
    );
};
