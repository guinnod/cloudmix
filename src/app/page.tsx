import { Logo } from "@/ui/Logo";
import { Button } from "antd";
import Link from "next/link";

export default function Home() {
    return (
        <main className="w-full h-screen flex items-center justify-center">
            <div className="flex flex-col items-center">
                <Logo />
                <p className="opacity-50 text-center mt-4 mb-6 px-5 text-lg">
                    Feel free to ask
                    <br />
                    Find answers to all your questions.
                </p>
                <Link href="/chat">
                    <Button type="primary" size="large">
                        Get started
                    </Button>
                </Link>
            </div>
        </main>
    );
}
