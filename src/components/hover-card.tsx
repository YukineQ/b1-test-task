import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { Transition } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

type HoverCardProps = {
    children: (visible: boolean) => React.ReactNode;
    className?: string;
    link?: string;
    title: string;
}

const HoverCard = ({ className, link = '#', children, title }: HoverCardProps) => {
    const [isVisible, setIsVisible] = React.useState(false)

    return (
        <Link
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            href={link}
            className={twMerge(`
                flex 
                flex-col 
                gap-2 
                group 
                hover:scale-105 
                transition
                duration-300
                w-[149px] 
            `,
                className
            )}
        >
            <div className="relative flex rounded-md">
                {children(isVisible)}
            </div>
            <p className="text-white/80 text-xs">{title}</p>
        </Link>
    )
}

type HoverCardImageProps = {
    src: string;
    alt: string;
    className?: string;
}

const HoverCardImage = ({ src, alt, className }: HoverCardImageProps) => {
    return (
        <div className={twMerge("w-full h-[230px]", className)}>
            <Image
                src={src}
                fill
                className="object-cover rounded-md"
                loading='eager'
                alt={alt}
            />
        </div>
    )
}

type HoverCardContentProps = {
    isVisible: boolean;
    children: React.ReactNode;
}

const HoverCardContent = ({ isVisible, children }: HoverCardContentProps) => {
    return (
        <Transition
            as={React.Fragment}
            show={isVisible}
            enter="ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="
            absolute
            bg-black/80
            w-full 
            h-full 
            transition
            rounded-md
            p-3
        "
            >
                <div className="relative flex flex-col h-full items-start justify-end">
                    {children}
                </div>
            </div>
        </Transition>
    )
}

type HoverCardContentControlProps = {
    className?: string;
    children: React.ReactNode;
}

const HoverCardContentControl = ({ className, children }: HoverCardContentControlProps) => {
    return (
        <div className={twMerge("absolute flex flex-col right-0 top-0 text-white gap-2", className)}>
            {children}
        </div>
    )
}

type HoverCardContentHeaderProps = {
    className?: string;
    children: React.ReactNode;
}

const HoverCardContentHeader = ({ children, className }: HoverCardContentHeaderProps) => {
    return (
        <div className={twMerge("inline-flex items-center justify-center gap-1 text-white", className)}>
            {children}
        </div>
    )
}

type HoverCardContentSubHeaderProps = {
    className?: string;
    children: React.ReactNode;
}

const HoverCardContentSubHeader = ({ children, className }: HoverCardContentSubHeaderProps) => {
    return (
        <p className={twMerge("text-white text-sm", className)}>
            {children}
        </p >
    )
}

export {
    HoverCard,
    HoverCardImage,
    HoverCardContent,
    HoverCardContentControl,
    HoverCardContentHeader,
    HoverCardContentSubHeader
}