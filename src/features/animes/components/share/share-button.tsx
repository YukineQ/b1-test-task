'use client'

import { useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge';

import { Button } from "@/components/ui";

type SocialButtonProps =
    | { link?: string; onClick?: never; }
    | { link?: never; onClick?: () => void; }

type ShareButtonBaseProps = {
    title: string;
    icon: React.ReactElement;
    className?: string;
}

type ShareButtonProps = ShareButtonBaseProps & SocialButtonProps

export const ShareButton = ({
    icon,
    title,
    link,
    onClick,
    className
}: ShareButtonProps) => {
    const router = useRouter()

    const handleClick = link
        ? () => router.push(link)
        : onClick

    return (
        <Button
            onClick={handleClick}
            className={twMerge("justify-between", className)}
            size='lg'
            endIcon={icon}
            variant='muted'
        >
            {title}
        </Button>
    )
}