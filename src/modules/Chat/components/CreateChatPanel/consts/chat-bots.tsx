import { ChatBot } from "../../../types";

export const chat_bots: ChatBot[] = [
    {
        name: "GPT-3",
        description: (
            <p>
                AI language model developed by OpenAI. <br />
                <br />
            </p>
        ),
        banner: "/images/gpt-banner.jpeg",
        logo: "/images/gpt-logo.png",
        link: "",
    },
    {
        name: "Google Lens",
        description:
            "Google Lens is an image recognition technology developed by Google.",
        banner: "/images/lens-banner.png",
        logo: "/images/lens-logo.png",
        link: "",
    },
];
