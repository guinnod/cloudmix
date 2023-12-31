import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {},
        colors: {
            primary: "#9969FF",
            white: {
                default: "#FFFFFF",
                ghost: "#FBFBFB",
            },
            black: {
                default: "#000000",
                custom: "#180A29",
            },
            gray: {
                custom: "#F2F1F4",
                cloud: "#EDEBEF",
                coin: "#9AACB5",
            },
        },
    },
    plugins: [],
};
export default config;
