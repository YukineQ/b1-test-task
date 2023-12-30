import { twMerge } from "tailwind-merge";
import { Icons } from "./icons";
import Link from "next/link";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
    return (
        <footer className={twMerge(className)}>
            <div
                className="
                    flex 
                    flex-col 
                    items-center 
                    justify-center
                    h-28
                    gap-2 bg-secondary
                "
            >
                <div className="flex flex-row items-center gap-2 text-white">
                    <Icons.logo />
                    <p className="font-medium tracking-tight leading-loose">
                        Built by{" "}
                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="underline underline-offset-4"
                        >
                            mayberainq
                        </a>
                        . Hosted on{" "}
                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="underline underline-offset-4"
                        >
                            Netlify
                        </a>
                        . The source code is available on{" "}
                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="underline underline-offset-4"
                        >
                            GitHub
                        </a>
                        .
                    </p>
                </div>
                <div className="flex">
                    <p className="text-white/70 text-sm font-semibold">
                        <Link href="#">
                            Docs
                        </Link>
                        {" "}•{" "}
                        <Link href="#">
                            FAQ
                        </Link>
                        {" "}•{" "}
                        <Link href="#">
                            Feedback
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}